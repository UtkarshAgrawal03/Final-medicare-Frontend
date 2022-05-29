
import React, { useState,useEffect }  from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link, useNavigate} from "react-router-dom";

import axios from 'axios';
import base_url from './Url';

const SignupForm=()=>  {
  
    const[user,setuser]=useState({});
    const navigate=useNavigate();
useEffect(()=>{
  console.log("Heloo");
},[]);

//handle form
const handleit=(e)=>{
console.log(user);
pd(user);
e.preventDefault();
};


//postdata function
const pd=(data)=>
{
  axios.post(`${base_url}/signup`,data).then(
    (response)=>{
      console.log({response});
      console.log("success");
      navigate(`/signIn`);

  },
  (error)=>{
    console.log(error);
      console.log("error");

  })
};



 
    return (
        <div className='border border-primary rounded-3 px-3 py-3 '>
            <h1 className='display-3 text-info text-center '>
                Register Here

            </h1>

        
      <Form onSubmit={handleit}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email here" onChange={(e)=>{
            setuser({...user,email:e.target.value})
          }}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleUsername">Username</Label>
          <Input type="name" name="name" id="exampleUsername" placeholder="UserName Here"  onChange={(e)=>{
            setuser({...user,username:e.target.value})
          }} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password"  onChange={(e)=>{
            setuser({...user,password:e.target.value})
          }} />
        </FormGroup>
       <Button className='bg-success' type="submit">Register</Button>
      </Form>
      <div className='text-center '>
        <p>Already have a Account?<Link to="/SignIn">SignIn</Link></p>
      </div>
      </div>
    );
  }
export default SignupForm;