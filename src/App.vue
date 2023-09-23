<template>
  <nav>
    <router-link to="/login" @click ='handleButtonClick()'>{{ btnText }}</router-link> |
  </nav>
  <router-view></router-view>
</template>

<script>
import { mapState } from 'vuex';
import router from "@/router";
import store from "@/store";

export default {
  computed: {
    ...mapState(['isEditor'])
  },
  watch:{
    'isEditor' : 'checkStatus',
  },
  data(){
    return{
      btnText : "Sign in",
    }
  },
  methods:{
    checkStatus(){
      if(this.isEditor == true){
        this.btnText = "Sign Out";
      }
    },
    handleButtonClick(){
      if(this.isEditor == true){

        console.log("Editor:" + this.isEditor);
        if (window.confirm('確定要登出？')) {
          this.btnText = "Sign in";
          localStorage.setItem('isLoggedIn','false');
          store.commit("isEditor",false);
          router.push('/visitView');
        }
      }
    }
  },
  mounted() {
    if(this.isEditor == true){
      this.btnText = "Sign Out";
    }
    else{
      this.btnText = "Sign in";
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>