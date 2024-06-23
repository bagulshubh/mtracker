import React, { useContext } from 'react'
import UserContext from '../../context/user/UserContext'
import { uploadScanner } from '../../services/User/AuthServices';

const Scanner = () => {

    const context = useContext(UserContext);
    const user = context.user;
    const token = context.token;

    const onChangeFile = async (event)=>{
        event.stopPropagation();
        event.preventDefault();
        const selectedFile = event.target.files[0];
        //console.log(selectedFile)
        let formData = new FormData();
        formData.append("scanner", selectedFile)
        const tempUser = await uploadScanner(token,formData);
    }

  return (
    <div>

        
            <img src={user.scanner}></img> 
            <input type='file' onChange={onChangeFile}></input>
            <div>Upload image</div>
        

    </div>
  )
}

export default Scanner
