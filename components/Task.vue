<template>
  <v-list-item>
    <v-list-item-avatar>
      <v-btn icon :class="{green: task.complete}" class="bordered white--text" @click="complete">
        <v-icon>mdi-check</v-icon>
      </v-btn>
    </v-list-item-avatar>
    <v-list-item-content>
      <template v-if="!editing">
        <v-list-item-title class="big-text" @click="task.temporary || (editing = true)">
          <span :class="{completed: task.complete}" v-text="task.body"></span>
        </v-list-item-title>
      </template>
      <template v-else>
        <v-form @submit.prevent="updateTask">
          <v-text-field
            class="big-text"
            v-model="newBody"
            @blur="updateTask"
            autofocus
          />
        </v-form>
      </template>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
  export default {
    name: 'Task',
    props: {
      task: {
        required: true
      }
    },
    data(){
      return {
        editing: false,
        newBody: this.task.body
      }
    },
    methods: {
      complete(){
        if(this.task.complete || this.task.temporary){
          return
        }
        this.task.complete = true
        this.update({
          complete: 1
        }).then(response => {
          this.$toast.success(response.data.message)
        })
      },
      updateTask(){
        this.editing = false
        if(this.newBody === this.task.body){
          return;
        }
        this.task.body = this.newBody
        this.update({
          body: this.task.body
        }).then(response => {
          this.$toast.success(response.data.message)
        })
      },
      update(data){
        return this.$axios.post(`/task/${this.task.id}`, data)
      }
    }
  }
</script>

<style scoped>
  .completed{
    text-decoration: line-through;
    color: gray;
  }
</style>
