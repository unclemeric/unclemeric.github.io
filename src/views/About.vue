<template>
  <div class="about">
    <h1>This is an about page</h1>
  	{{msg}}
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name:'about',
  computed:{
  	...mapState({
      msg: state => state.about.msg
    })
  },
}
</script>
