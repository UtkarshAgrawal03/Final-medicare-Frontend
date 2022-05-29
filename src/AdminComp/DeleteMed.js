import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import  axios  from 'axios';
import base_url from '../myComp/Url';
import Authheader from '../myComp/Authheader';
const DeleteMed = () => {
  
  let num;
    const navigate=useNavigate();
    
    //handle form
    const handleit=(e)=>{
    
    pd(num);
    e.preventDefault();
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
    const pd=(num)=>
    {
      axios.delete(`${base_url}/admin/deleteMed/${num}`,{headers:Authheader()}).then(
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
    
 return <div  className='border border-primary rounded-3 px-3 py-3 '>
 <h1 className='display-3 text-info text-center '>
     Delete Medicine Record

 </h1>

      
       <Form onSubmit={handleit} className="mx-2">
       
       <FormGroup>
         <Label for="MedicineId">Medicine Name</Label>
         <Input type="number" name="id" id="MedicineId" placeholder="Medicine Id Here" onChange={(e)=>{
           num=e.target.value}
         }/>
       </FormGroup>
       <Button color="success"  block type="submit" className="my-2">Delete Med</Button>
       <Button color="warning" block type="reset">Reset</Button>
       </Form>
  </div>;
};

export default DeleteMed;
