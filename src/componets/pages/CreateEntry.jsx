import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../Navbar';
import { createEntry } from '../../services/Account/AccountServices';
import UserContext from '../../context/user/UserContext';
import { getUser } from '../../services/User/AuthServices';

const CreateEntry = () => {
    const context = useContext(UserContext);
    const params = useParams();
    const id = params.id;
    const [loading, setLoading] = useState(false);
    const token = context.token;
    const navigate = useNavigate();

    const [data,setData] = useState({
        amount:"",
        details:"",
        note:"",
        accountId:id
    })

    const changeHandler = (event)=>{
        setData((prev)=>{
            return {
                ...prev , 
                [event.target.name] : event.target.value,
            }
        })
    }

    const submitHandler = async()=>{
        setLoading(true)
        await createEntry(data,token);
        const user = await getUser(token,"true");
        //console.log(user)
        context.setUser(user);
        setLoading(false);
        navigate(`/account/${id}`);
    }

  return (
    <div className='create-wrapper-1'>

        <div className={loading ? 'create-wrapper blur' : 'create-wrapper'}>
            <Navbar></Navbar>

            <div className='create-con '>
                <h2 className='homepage-heading2'>Create Entry</h2>
                <div className='create-input-con'>
                    <input type='text' placeholder='Amount' name='amount' value={data.amount} onChange={changeHandler}></input>
                    <textarea type='text' placeholder='Details' name='details' rows='4' col='100' value={data.details} onChange={changeHandler}></textarea>
                    <textarea type='text' placeholder='Note' rows='4' col='100' name='note' value={data.note} onChange={changeHandler}></textarea>
                </div>
                <div onClick={submitHandler} className='homepage-btn'>Create</div>
                
            </div>

        </div>

        <div className={loading ? 'loader' : 'block'}></div>
      
    </div>
  )
}

export default CreateEntry
