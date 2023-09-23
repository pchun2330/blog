import { logInData } from "@/axios/api";
import store from "@/store";

class logInModel{
    isEditor = async(userdata) =>{
        const state = await logInData(userdata);
        alert(state.message);
        if(state.state === 1){
            localStorage.setItem('isLoggedIn','true');
            store.commit("isEditor",true);
            return true;
        }
        else{
            return false;
        }
    }

}

export default logInModel;