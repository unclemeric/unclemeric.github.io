<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  	{{msg}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex'
console.log(process.env)
export default {
  name: 'home',
  computed:{
  	...mapState({
      msg: state => state.home.msg
    })
  },
  components: {
    HelloWorld
  }
}
</script>
