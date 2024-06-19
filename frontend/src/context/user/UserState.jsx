import { useEffect, useState} from "react";
import UserContext from "./UserContext";
import { getUser } from "../../services/User/AuthServices";


const UserState = (props) => {
  const [loading,setLoading] = useState(true);
  const [user, setUser] = useState("");
  
  const token =  localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : "";
  let tempUser = "";
  useEffect(()=>{
    async function  fetchData (token){
      if(token!==""){
        tempUser= await getUser(token);
        setUser(tempUser);
        console.log(tempUser);
      }
      setLoading(false);
    }
    fetchData(token);
  },[token]);



  return (
    <UserContext.Provider value={{ user , setUser , loading}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;