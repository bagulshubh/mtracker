import React, { useContext, useState } from 'react'
import UserContext from '../context/user/UserContext'
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { ImQrcode } from "react-icons/im";
import { GiLion } from "react-icons/gi";




const Navbar = (props) => {
    const context = useContext(UserContext);
    const token = context.token;
    const user = context.user;
    const setUser = props.setUser;
    const fetchData = context.fetchData;
    const setLoading = context.setLoading;
    const navigate = useNavigate();
    const skipp = context.skipp;

    const [text,setText] = useState("");

    const serachHandler =async ()=>{
      //here we need to sort the accounts array inside the user and set it as a new user
      setLoading(true);

      const filterdAccounts = user.accounts.filter(account => account.name.toLowerCase().includes(text.toLowerCase()));

      setUser((prev)=>{
        return {
          ...prev,
          accounts:filterdAccounts
        }
      });
      setLoading(false);
      //console.log(text);
    }

  return (
    <div className='nav-wrapper'>
        <div className='logo-con'>
          <h1 className='logo' onClick={()=>{setText("");navigate("/");fetchData(token,skipp)}}>MTracker</h1>
          <div className='logo-btn-con'>
            <ImQrcode className='logo-btn' onClick={()=>{navigate("/scanner")}}></ImQrcode>
            <GiLion className='logo-btn'></GiLion>
          </div>
        </div>
        
        <div className='input-div'>
            <input type='text' placeholder='Search' value={text} name='text' onChange={(event)=>{setText(event.target.value)}} onKeyDown={(event)=>{if(event.key=="Enter"){serachHandler()}}} ></input>
            <CiSearch className='search-icon' onClick={serachHandler}></CiSearch>
        </div>

    </div>
  )
}

export default Navbar
