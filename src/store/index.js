import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    user: null,
    token: null,
  },
  getters:{
    user:(state)=>{
      return state.user


    },

    token:(state)=>{
      return state.token;

    }
  },
  mutations:{
    setUser(state,user){
      state.user = user;
      localStorage.setItem('user',JSON.stringify(user));
    },
    setToke(state, token){
      state.token = token;
      localStorage.setItem('token',token);
    }
  }


})

export default store;
