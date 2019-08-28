export default{
    setName(state,name){
        state.nickname=name;
    },
    setData(state,obj){
       state.SET_DATA=obj;
    },
    addNum(state,num){
      state.count=num;
    }
}