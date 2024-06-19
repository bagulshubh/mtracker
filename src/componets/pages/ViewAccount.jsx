import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getAccount } from '../../services/Account/AccountServices';
import UserContext from '../../context/user/UserContext';
import Navbar from '../Navbar';

const ViewAccount = () => {
    const context = useContext(UserContext)
    const params = useParams();
    const id = params.id;
    const [account , setAccount ] = useState("");
    const token =  context.token;
    const [loading , setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{

        async function fetchData (id){
            setLoading(true);
            const response = await getAccount(id,token);
            if(response.success === true){
                response.body.entry.reverse();
                setAccount(response.body);
                //console.log(response.body);
            }
            else{
                console.log(response);
            }
            //console.log(response);
            setLoading(false);
        }
        fetchData(id);

    },[id]);

    return (
    <div className='account-wrapper'>
        
        <Navbar></Navbar>

        {
            loading ? <div className='loader'></div> : <div>
                {
                    account ? <div className='account-con'>
                        <div className='homepage-btn' onClick={()=>{navigate(`/createEntry/${id}`)}}>Create Entry</div>
                        <div>
                            {
                                account.entry.map((entry,key)=>{
                                    return <div>
                                        <div>{entry.amount}</div>
                                        <div>{entry.details}</div>
                                        <div>{entry.createdAt}</div>
                                    </div>
                                })
                            }
                        </div>
                    </div> : <h3>NO ACCOUNT PRESENT</h3>
                }
            </div>
        }

      
    </div>
   )
}

export default ViewAccount
