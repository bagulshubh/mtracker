import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../context/user/UserContext'
import { getSelf } from '../../services/Self/SelfServicec';
import Navbar from "../Navbar";
import { useNavigate } from 'react-router-dom';

const Self = () => {

    const context = useContext(UserContext);
    const user = context.user;
    const token = context.token;
    const [self,setSelf] = useState("");
    const navigate = useNavigate();

    const [loading,setLoading] = useState(false);

    useEffect(()=>{
      const fetchData = async()=>{
        setLoading(true);
        const response = await getSelf(token);
        setSelf(response);
        setLoading(false);
        //console.log(response)
      }
      fetchData();
    },[user])  

    const entryHandler = (id)=>{
      navigate(`/entry/${id}`);
    }


  return (
    <div className='account-wrapper'>
      {
        loading ? <div className='loader'></div> : <div>
          <Navbar></Navbar>
          <div className='account-con'>
            <div> Amount: {self.amount} </div>
            <div className='homepage-btn-con'>
              <div className='homepage-btn' onClick={()=>{navigate(`/createSelf/${self._id}`)}}>Create</div>
              <div className='homepage-btn'>Analysis</div>
            </div>

            <div className='entry-card-con'>
              {
                  self?.entry?.map((entry,key)=>{
                    return <div className='entry-card'>
                      <div className='entry-card-main' onClick={()=>{entryHandler(entry._id)}}>
                        <div className={entry.amount < 0 ? 'red' : 'green'}>{entry.amount}</div>
                        <div>{entry.createAt.substring(0,10)}</div>
                      </div>
                      <div className='entry-card-main'>
                        <div>{entry.details}</div>
                        <div>{entry.category}</div>
                      </div>
                    </div>
                  })
              }
            </div>

          </div>
        </div>
      }

    </div>
  )
}

export default Self
