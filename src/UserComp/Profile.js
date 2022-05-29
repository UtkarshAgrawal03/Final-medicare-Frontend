import React, { useEffect ,useState} from 'react'
import image from "./Userimage.jpg";
import base_url from '../myComp/Url';
import Authheader from '../myComp/Authheader';
import axios from 'axios';

const Profile = () => {

  const [data,setData]=useState({});
  useEffect(()=>{
    axios.get(`${base_url}/profile`,{headers:Authheader()}).then(
        (response)=>{
          console.log(response.data);
         setData(response.data);
          
         
          },
        (error)=>{
          console.log(error);
        }
      )
   },[]);
    
  return (
    <>
    <div className="text-center my-5 mx-5">
     <img src={image} height="20%" width="20%" className='rounded-circle' /> 
     <h1 className='display-3 text-success'>{data.username}</h1>
     <h1 className='display-3 text-success'>{data.email}</h1>
     
     </div>
    </>
  )
}

export default Profile