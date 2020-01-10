<template>
  <div class="fuck">
      <h3 @click="add">fuck demo</h3>
      <h1>{{message}}</h1>
      <!-- <h4>{{doneTodosCount}}</h4>
      <h4>{{doneTodos}}</h4> -->
  </div>
</template>

<script>
import { mapState} from 'vuex'
import store from '../store'
export default {
  name: 'fuck',
 computed:mapState({
   message:state => state.message
 }),
// computed:{
//   // ...mapGetters([
//   //     'doneTodosCount',
//   //     'doneTodos',
//   //     // ...
//   //   ])
//   }
//  ,
 methods:{
  // ...mapMutations({
  //     add: 'show' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
  //   })
  add(){
    // store.dispatch('show')
    store.commit('SHOW',100)
  }
 }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fuck{
    width: 100%;
    height: 50px;
    border: 1px solid red;
}
</style>
