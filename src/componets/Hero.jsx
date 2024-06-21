import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoMdContacts } from "react-icons/io";


const Hero = (props) => {
    const user = props.user;
    //console.log("User in hero section: ",user);

    const navigate = useNavigate();

    const routeHandler = (id)=>{
        navigate(`/account/${id}`);
    }

    return (
        <div className='hero-wrapper'>

            <div onClick={()=>{navigate("/create")}} className='homepage-btn' >Create</div>

            <h2 className='homepage-heading2'><IoMdContacts className='contacts-icon'></IoMdContacts> Contacts</h2>

            
                {
                    user.accounts.length === 0 ? <h3>No Contacts</h3> : <div className='homepage-card-con'>

                    {
                        user.accounts.map((account,key)=>{
                            return (
                                <div className='homepage-card' onClick={()=>{ routeHandler(account._id)}}>
                                    <div className='card-name'>{account.name}</div>
                                    <div className='card-amount'>{account.totalAmount}</div>
                                </div>
                            )
                        })
                    }

                    </div>
                }
            

            

        </div>
    )
}

export default Hero
