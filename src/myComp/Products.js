import axios from 'axios';
import React, { useEffect ,useState} from 'react'
import base_url from './Url';
import MedCard from './MedCard';
import Authheader from './Authheader';
import { useParams } from 'react-router-dom';

const Products = () => {
    const params=useParams();
 
    const[med,setMed]=useState({});
    useEffect(()=>{
        
        axios.get(`${base_url}/products/${params.id}`,{headers:Authheader()}).then((response)=>{
            console.log(response.data)
            setMed(response.data);
            console.log(med);
        },(error)=>{
            console.log(error);
        })
       
    },[])

  return (
    <div>
        {
            
                <MedCard name={med.name} brand={med.brand}  image='./images/Medimage.PNG' price={med.price}/>
           
        }

    </div>
    
  )
}

export default Products;