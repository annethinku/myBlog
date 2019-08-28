export default{
    setName(state){
      if(state.nickname=='admin'){
          return '管理员';
      }else{
          return state.nickname;
      }
    }
}