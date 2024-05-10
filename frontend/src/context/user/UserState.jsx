import { useEffect, useState} from "react";
import UserContext from "./UserContext";


const UserState = (props) => {

    const [user , setUser] = useState("Shubham")

  return (
    <UserContext.Provider value={{ user , setUser}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;