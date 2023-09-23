import { createStore } from 'vuex'
import {checkLoginStatus} from "@/logIn/checkLogInStatus";

export default createStore({
  state: {
    isEditor : checkLoginStatus(),
  },
  getters: {
  },
  mutations: {
    isEditor(state,check){
      state.isEditor = check;
      console.log("state.isEditor: " + state.isEditor);
    }
  },
  actions: {
  },
  modules: {
  }
})
