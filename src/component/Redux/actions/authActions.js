import { LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE } from "../constant/constant";
import axios from 'axios'

export const loginRequest=()=>({
    type:LOGIN_REQUEST,
});

export const loginSuccess=(userData)=>({
    type:LOGIN_SUCCESS,
    payload:userData,
});
export const loginFail=(error)=>({
    type:LOGIN_FAILURE,
    payload:error
});


export const login=({email,password})=>{
    return async(dispatch)=>{
        dispatch(loginRequest());

        try{

            const config = {
                headers: {
                  "Content-Type": "application/json",
                },
              };

            const response=await axios.post(
                'http://localhost:4000/user/login',
                {email,password},
                config
                );
                console.log("🚀 ~ file: authActions.js:35 ~ returnasync ~ response:", response)
                const userData =response.data;
                console.log("🚀 ~ file: authActions.js:37 ~ returnasync ~ userData:", userData)
                dispatch(loginSuccess(userData));

                ///store user data in localStorage
              localStorage.setItem('userData',JSON.stringify(userData))

              const getstorage= localStorage.getItem('userData')
              const persondata= JSON.parse(getstorage)
              console.log("🚀 ~ file: authActions.js:45 ~ returnasync ~ persondata:", persondata)
              
        }
        catch(error){
            dispatch(loginFail(error.message));

        }
    }
}
