const BASE_URL =  "https://mtracker-0sct.onrender.com" //"http://localhost:4000"  

export const createAccount = async(data,token,setUser)=>{
    try{
        //console.log(token)

        const res = await fetch (`${BASE_URL}/account/create`,
            {
                method:'POST',
                headers: {
                'Content-type': 'application/json',
                'token':token
                },
                mode:'cors',
                body:JSON.stringify(data),
            }
        )      
        const output = await res.json();
        if(output.success === true){
            setUser(output.user);
        }
        else{
            console.log(output);
        }
    } catch(err){
        console.log(err);
    }
}

export const getAccount = async(id,token)=>{
    try{

        const res = await fetch (`${BASE_URL}/account/${id}`,
            {
                method:'GET',
                headers: {
                'Content-type': 'application/json',
                'token':token
                },
                mode:'cors',
            }
        )      
        const output = await res.json();
        return output;

    } catch(err){
        console.log(err);
    }
}

export const createEntry = async(data,token)=>{
    try{

        const res = await fetch (`${BASE_URL}/account/entry`,
            {
                method:'POST',
                headers: {
                'Content-type': 'application/json',
                'token':token
                },
                mode:'cors',
                body:JSON.stringify(data)
            }
        )      
        const output = await res.json();
        //console.log(output);
        if(output.success === true)
            return output.account
        else 
            console.log(output);
    }
    catch(err){
        console.log(err);
    }
}