<template>
  <h1>Log In</h1>
  <form>
    <table>
      <tbody>
        <tr>
          <th>Account : </th>
          <td>
            <input type="text" v-model="this.formData.account">
          </td>
        </tr>
        <tr>
          <th>Password : </th>
          <td>
            <input type="text" v-model="this.formData.password">
          </td>
        </tr>
      </tbody>
    </table>
  </form>
  <button type="submit" @click="login()">Sign In</button>
  <br/><br/><br/>
  <router-link to="/visitView">Visitor</router-link>
</template>

<script>
import logInModel from "@/logIn/logInModel";
import { mapState } from "vuex";
import store from "@/store";
export default {
  name: 'logInView',
  // components: {
  //   HelloWorld
  // }
  computed: {
    ...mapState(['isEditor'])
  },
  watch:{
    'isEditor' : 'checkStatus',
  },
  data(){
    const userDataModel = new logInModel();
    return{
      userDataModel,
      formData : {
        id: null,
        account: "",
        password: ""
      }
    }
  },
  methods : {
    checkStatus(){
      if(this.isEditor == true){

        console.log(this.isEditor);

      }
      else{
        console.log(this.isEditor);
        //router.push('/login');
      }
    },
    async login(){
      const isEditor = await this.userDataModel.isEditor(this.formData);
      if(isEditor === true){
        store.commit("isEditor",true);
        this.$router.push('/editorView');
      }
    }
  },
  async mounted() {
    // const loginState = await this.userDataModel.checkLogInStatus();
    // console.log(loginState);
    // if(loginState === false){
    //   this.$router.push('/login');
    // }else{
    //   this.$router.push('/editorView');
    // }
  }
}
</script>

<style>
form,table{
  margin: 0 auto;
  padding:5px;
}
tbody,th,tr,td{
  padding:20px;
  //border:2px solid rgba(0,0,0,0.1);
}
</style>
