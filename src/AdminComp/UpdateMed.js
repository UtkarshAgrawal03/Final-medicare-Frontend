
import React,{useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import base_url from '../myComp/Url';
import Authheader from '../myComp/Authheader';


const UpdateMed =()=> {
    
  const[med,setMed]=useState({});
  const navigate=useNavigate();
  
  //handle form
  const handleit=(e)=>{
    e.preventDefault();
  pd(med);
 
  };

  //saving token
//   const logtoken=(token)=>{
//     localStorage.setItem("token",JSON.stringify(token));
//     console.log(token.token);
//     const username="utkarsh";
    // axios.get(`${base_url}/user/${username}`,{headers:Authheader()}).then(
    //   (response)=>{
    //     console.log(response.data);
    //   },
    //   (error)=>{
    //     console.log(error);
    //   }
    // )
  
 
  
  
  //postdata function
  const pd=(data)=>
  {
      console.log(data);
      
    axios.put(`${base_url}/admin/updateMed`,data,{headers:Authheader()}).then(
      (response)=>{
        console.log({response});
        console.log("success");
        
       
        navigate(`/admin/success`);
        
  
    },
    (error)=>{
      console.log(error);
        
        navigate(`/admin/Error`);
  
    })
  };




 return (
        <div className='border border-primary rounded-3 px-3 py-3 '>
            <h1 className='display-3 text-info text-center '>
                Update Medicine Record

            </h1>

        
      <Form onSubmit={handleit} className="mx-2">
       
      <FormGroup>
          <Label for="MedicineId">Medicine Id</Label>
          <Input type="number" name="id" id="MedicineId" placeholder="Medicine Id Here" onChange={(e)=>{
            setMed({...med,id:e.target.value})
          }}/>
        </FormGroup>
        <FormGroup>
          <Label for="MedicineName">Medicine Name</Label>
          <Input type="name" name="name" id="MedicineName" placeholder="Medicine Name Here" onChange={(e)=>{
            setMed({...med,name:e.target.value})
          }}/>
        </FormGroup>
        <FormGroup>
          <Label for="MedicineBrand">Medicine Brand</Label>
          <Input type="name" name="Brand" id="MedicineBrand" placeholder="Medicine Brand Here" onChange={(e)=>{
            setMed({...med,brand:e.target.value})
          }}/>
        </FormGroup>
        <FormGroup>
          <Label for="MedicineCategory">Medicine Category</Label>
          <Input type="name" name="category" id="MedicineCategory" placeholder="Medicine Category Here" onChange={(e)=>{
            setMed({...med,category:e.target.value})
          }}/>
        </FormGroup>
        <FormGroup>
          <Label for="MedicineDesc">Medicine Description</Label>
          <Input type="text" name="Description" id="MedicineDesc" placeholder="Medicine Description Here" onChange={(e)=>{
            setMed({...med,description:e.target.value})
          }}/>
        </FormGroup>
        <FormGroup>
          <Label for="MedicineImage">Medicine Image</Label>
          <Input type="text" name="Image" id="MedicineImage" placeholder="Medicine Image link Here" onChange={(e)=>{
            setMed({...med,image:e.target.value})
          }}/>
        </FormGroup>


        
       <Button color='success' block type="submit" className="my-2">Update MED</Button>
       <Button color="warning" block type="reset">Reset</Button>
      </Form>
       
      </div>
    );
        }
  export default UpdateMed;

