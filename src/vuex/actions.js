export default{
    addNum({commit},num){
       setTimeout(()=>{
           commit('addNum',num);
       },1000)
    }
}