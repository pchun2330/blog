 import axiosInstance from "@/axios/axiosInstance";

export const logInData  = async(userdata) =>{
    try{
      const response = await axiosInstance.post('login.php',userdata);
      return response.data;
    }
    catch (e) {
        console.log(e);
    }
}