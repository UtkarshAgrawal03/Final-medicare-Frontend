import React,{useState,useEffect} from 'react'
import axios from 'axios';
import base_url from '../myComp/Url';
import Authheader from '../myComp/Authheader';
import CartItem from './CartItem';
import Medium from './Medium';

const Cart = () => {
    const[data,setData]=useState([]);
    const[med,setMed]=useState({});
    useEffect(()=>{
        axios.get(`${base_url}/getProducts`,{headers:Authheader()}).then(
            (response)=>{
              console.log(response.data);
             setData(response.data);
              
             
              },
            (error)=>{
              console.log(error);
            }
          )
       },[]);

    //    const product=(pid)=>{
    //     axios.get(`${base_url}/getByid/${pid}`,{headers:Authheader()}).then(
    //         (response)=>{
    //           console.log(response.data);
    //          setMed(response.data);
    //         return response.data;
             
             
    //           },
    //         (error)=>{
    //           console.log(error);
    //         }
    //       )
    //       //return( <CartItem name={med.name} brand={med.brand} desc={med.description} image='../images/Medimage.PNG' price={med.price}/>)

    //    }

  return (
    <>
{
        data.map((v)=>(
            <div>
            <Medium id={v.productId} cid={v.id}/>
            {/* <CartItem name={med.name} brand={med.brand} desc={med.description} image='../images/Medimage.PNG' price={med.price}/> */}
            </div>
        ))
       // <CartItem name={v.name} brand={v.brand} desc={v.description} image='../images/Medimage.PNG' price={v.price}/>
      
      }
    </>
  )
    }

export default Cart