<template>
    <div>
      <div @click="go">index</div>
    </div>
    
</template>

<script>
import store from './store'

export default {
  data () {
    return {
      value: 'hello world'
    }
  },

  methods: {
   go() {
     mpvue.navigateTo({
       url: '/pages/login/main'
     })
   }
  },

  created () {
    // let app = getApp()
    console.log('index created')
  },

  mounted() {
    console.log('index mounted')
  },

}
</script>

<style scoped>

</style>
