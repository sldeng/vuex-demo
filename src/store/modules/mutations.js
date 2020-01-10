
const mutations ={
    SHOW(state,n) { 
      //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
        setTimeout(()=>{
            // state.message ++
            state.message += n
        },1000)
        // console.log(state);
        // debugger
    },
}
export default mutations