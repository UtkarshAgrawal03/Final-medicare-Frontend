import React,{useState,useEffect} from 'react'
import CartItem from './CartItem';
import base_url from '../myComp/Url';
import Authheader from '../myComp/Authheader';
import axios from 'axios';
const Medium = (props) => {
    const[data,setData]=useState([]);
    
    useEffect(()=>{
        axios.get(`${base_url}/getByid/${props.id}`,{headers:Authheader()}).then(
            (response)=>{
              console.log(response.data);
             setData(response.data);
        },
            (error)=>{
              console.log(error);
            }
          )
          //return( <CartItem name={med.name} brand={med.brand} desc={med.description} image='../images/Medimage.PNG' price={med.price}/>)

       
       },[]);
  return (
    <div>
        <CartItem cid={props.cid} name={data.name} brand={data.brand} desc={data.description} image='../images/Medimage.PNG' price={data.price}/>
    </div>
  )
}

export default Medium