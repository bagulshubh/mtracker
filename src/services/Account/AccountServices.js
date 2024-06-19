const BASE_URL = "http://localhost:4000/"

export const createAccount = async(data,token,setUser)=>{
    try{
        console.log(token)

        const res = await fetch (`${BASE_URL}account/create`,
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