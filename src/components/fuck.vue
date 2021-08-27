<template>
  <div class="fuck">
      <!-- <h3 @click="add">fuck demo</h3> -->
      
      <!-- <h1>{{message}}</h1>
      <h2>{{countAlias}}</h2>
      <h5>{{countPlusLocalState}}</h5> -->
      <!-- <h4>{{doneTodosCount}}</h4>
      <h4>{{doneTodos}}</h4> -->
      <h4>{{countLength}}</h4>
  </div>
</template>

<script>
// import { mapState} from 'vuex'

export default {
  name: 'fuck',
  data(){
    return{
localCount:1000
    }
  },
//  computed:mapState({
//    message:state => state.count,
//    countAlias: 'count',
//     countPlusLocalState (state) {
//       return state.count + this.localCount
//     }
//  }),
  computed:{
    countLength(){
      return this.$store.getters.doneTodos 
    }
  }
  ,


 methods:{
  // ...mapMutations({
  //     add: 'show' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
  //   })
  add(){
    // store.dispatch('show')
    // this.$store.commit('SHOW',100)
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
