import React, { useContext, useState } from 'react'
import UserContext from '../context/user/UserContext'
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const context = useContext(UserContext);
    const [user , setUser ] = useState(context.user);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
  return (
    <div className='nav-wrapper'>
              <h1 className='logo' onClick={()=>{navigate("/")}}>MTracker</h1>

        <div className='input-div'>
            <input type='text' placeholder='Search' ></input>
            <CiSearch className='search-icon'></CiSearch>
        </div>

    </div>
  )
}

export default Navbar
