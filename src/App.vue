<template>
  <div id="app">
   
    <HelloWorld msg="Welcome to Your Vue.js App" @hook:mounted="doSomething"  initialCounter="111111111"/>
    <fuck/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import fuck from './components/fuck.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,fuck
  },
  methods:{
    doSomething(val){
      console.log( val,'fuckdosomething')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
