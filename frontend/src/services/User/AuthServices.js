const BASE_URL = "http://localhost:4000/"

export const signUp = async (data)=>{
    try{
        console.log("In signup funtion")
        const res = await fetch (`${BASE_URL}auth/signup`,
            {
                method:'POST',
                headers: {
                'Content-type': 'application/json',
                },
                mode:'cors',
                body:JSON.stringify(data),
            }
        )            
        const output = await res.json();    
        console.log(output)
        return output;
    } catch(err){
        console.log(err)
    }
}

export const login  = async(data) =>{
    try{
        const res = await fetch (`${BASE_URL}auth/login`,
            {
                method:'POST',
                headers: {
                'Content-type': 'application/json',
                },
                mode:'cors',
                body:JSON.stringify(data),
            }
        )            
        const output = await res.json();    
        console.log(output)
        return output;
    } catch(err){
        console.log(err)
    }
}

export const getUser = async(token)=>{
    try{

        const res = await fetch (`${BASE_URL}auth/`,
            {
                method:'GET',
                headers: {
                'Content-type': 'application/json',
                'token': token
                },
                mode:'cors',
            }
        )       
        const output = await res.json();
        //console.log("User details are :" , output.body);
        return output.body;

    } catch(err){
        console.log(err);
    }
}
