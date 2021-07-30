<template>
  <div class="hello">
    <h3 @click="add">hello demo</h3>
    <p>{{counter}}</p>
  </div>
</template>

<script>
import { mapState ,mapMutations } from 'vuex'
export default {
  name: 'HelloWorld',
  props:['initialCounter'],
   computed:mapState({
   message:state => state.message
 }),
 data:function(){
   return{
     counter: this.initialCounter
   }
 },

 mounted(){
    console.log('1111111')
 },
 methods:{
  ...mapMutations({
      add: 'show' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
  height: 50px;
  border: 1px solid #000;
  margin-bottom: 15px;
}
</style>
