import Vue from 'vue'
import Swal from 'sweetalert2'

let failed = (text) => {
  Swal.fire({
    title: text,
    toast: true,
    icon: 'error',
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
}

let success = (text) => {
  Swal.fire({
    title: text,
    toast: true,
    icon: 'success',
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
}

Vue.prototype.$toast = { success, failed }
