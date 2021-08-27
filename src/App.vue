<template>
  <div id="app">
   
  
    <menuCom/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import fuck from './components/fuck.vue';
import menuCom from './components/menu.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,fuck,menuCom
  },
  data(){
    return {
demoData:[1,34,5,1,34,5,1,34,5,1,34,5,1,34,5,1,34,5,1,34,5,1,34,5,1,34,5,1,34,5,6]
    }
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
