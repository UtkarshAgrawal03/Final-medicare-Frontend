import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import base_url from './Url';
import Authheader from './Authheader'; 
import citizen from './citizen.jpg';
//import Medimage from './Medimage.PNG'

const ViewMedPage = () => {
    const params =useParams();
    const[med,setMed]=useState({});
    useEffect(()=>{
        
        axios.get(`${base_url}/products/${params.id}`,{headers:Authheader()}).then((response)=>{
            
            setMed(response.data);
        },(error)=>{
            console.log(error);
        })
       
    },[])
  return (
    <>
        <Row className='my-5 m-5'>
            <Col>
            <img  width="100%" height="100%" src={citizen} alt={citizen}  />

            </Col>
            <Col>
                <p className='display-5 my-3 mx-3 text-success'> Medicine Name:{med.name}</p>
                <p className='display-5 my-3 mx-3 text-success'> Medicine Brand:{med.brand}</p>
                <p className='display-6 my-3 mx-3 text-success'> {med.description}</p>
                <p className='display-5 my-3 mx-3 text-success'> Medicine Price:{med.price}</p>
            </Col>
        </Row>
    </>
  )
}

export default ViewMedPage