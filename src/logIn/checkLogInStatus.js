import router from "@/router";
import store from "@/store";

export function checkLoginStatus(){
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if(isLoggedIn === 'true') {
        return true;
    } else {
       return false;
    }
}

window.onload = function(){
    const state = checkLoginStatus();
    if(state === true) {
        console.log('login');
        store.commit("isEditor",true);
        router.push('/editorView');
    } else {
        console.log('logout');
        store.commit("isEditor",false);
        router.push('/visitView');
    }
}