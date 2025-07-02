import{signUpAxios} from "./helper";

export const singup=(user)=>{
return signUpAxios
  .post("/v1/api/user/signup",user)
  .then((respose)=>respose.data)
  .catch((error)=>{
    console.error("error during singup",error);
  })
}