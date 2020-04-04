<template>
  <v-row>
    <v-col cols="12" md="6" offset-md="3">
      <v-form @submit.prevent="createTask">
        <v-text-field
          placeholder="What needs to be done?"
          outlined
          v-model="task"
          class="big-text"
        />
      </v-form>
      <v-card>
        <v-card-text class="task-list" ref="taskList">
          <v-list>
            <template v-for="task in filtered">
              <task :task="task"/>
            </template>
          </v-list>
          <div v-show="filtered.length === 0" class="grey--text big-text">
            Nothing to see here yet!
          </div>
        </v-card-text>
        <v-divider/>
        <v-card-actions>
          <v-btn text color="red" v-show="complete" @click="clearCompleted">Clear</v-btn>
          <v-spacer/>
          <v-btn
            :text="complete !== null"
            :dark="complete === null"
            @click="complete = null"
          >All</v-btn>
          <v-btn
            :text="complete !== true"
            :dark="complete === true"
            @click="complete = true"
          >Complete</v-btn>
          <v-btn
            :text="complete !== false"
            :dark="complete === false"
            @click="complete = false"
          >Incomplete</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import Task from '../components/Task'

  export default {
  components: { Task },
  head:{
    title: 'Manage Tasks'
  },
  data(){
    return {
      task: '',
      tasks: [],
      complete: null
    }
  },
  computed: {
    filtered(){
      return this.tasks.filter(task => {
        if(this.complete === null){
          return true
        }
        return this.complete === task.complete
      })
    }
  },
  methods: {
    createTask(){
      let body = this.task + ''
      this.task = ''
      this.tasks.push({
        id: Math.floor(Math.random() * 100000000),
        complete: false,
        body
      })
      console.log(this.$refs.taskList)
      this.$axios.post('/task', { body })
        .then(({data}) => {
          this.$toast.success(data.message)
          this.tasks.pop()
          this.tasks.push(data.data)
        })
    },
    clearCompleted(){
      this.$axios.post('/task/clear')
        .then(response => {
          this.$toast.success(response.data.message)
          this.tasks = this.tasks.filter(task => {
            return !task.complete
          })
          this.complete = null
        })
    }
  },
  created() {
    if(! this.$auth.loggedIn){
      this.$router.replace('/auth/login')
    }
  },
  mounted() {
    this.$axios.get('/task')
      .then(response => {
        this.tasks = response.data.data
      })
  }
}
</script>

<style>
  .big-text {
    font-size: 1.8em;
    font-weight: 300;
  }
  .bordered {
    border: 1px solid gray;
  }
  .task-list {
    max-height: 55vh;
    overflow-y: auto;
    overflow-x: auto;
  }
</style>
