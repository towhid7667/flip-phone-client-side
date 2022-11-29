import { useState, useEffect } from 'react';
const useToken = email =>{

    const [token, setToken] = useState('')

    useEffect(()=>{
        fetch(`https://awsome-doctor-server-towhid7667.vercel.app/jwt?email=${email}`)
        .then(res => res.json())
        .then(data =>{
          if(data.accessToken){
            localStorage.setItem('accessToken', data.accessToken);
            setToken( data.accessToken)
           
          }
        })

    },[email])
    return [token]
   
}

export default useToken;