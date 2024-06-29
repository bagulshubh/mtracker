import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar';

const RoundUp = () => {
    const params = useParams();
    const id = params.id;
    const [loading,setLoading] = useState(false);
  return (
    <div>
        <Navbar></Navbar>
        {
            loading ? <div className='loader'></div> :
            <div>
                
            </div>
        }
    </div>
  )
}

export default RoundUp
