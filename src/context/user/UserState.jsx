import { useEffect, useState} from "react";
import UserContext from "./UserContext";
import { getUser } from "../../services/User/AuthServices";


const UserState = (props) => {
  const [loading,setLoading] = useState(true);
  const [user, setUser] = useState("");

  
  const token =  localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : "";
  console.log(token)
  let tempUser = "";
  useEffect(()=>{
    fetchData(token);
  },[token]);


  async function  fetchData (token){
    setLoading(true);
    if(token!==""){
      tempUser= await getUser(token);
      setUser(tempUser);
      console.log(tempUser);
    }
    setLoading(false);
  }


  return (
    <UserContext.Provider value={{ user , setUser , loading , token , fetchData,setLoading}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;