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