
import React,{useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import base_url from './Url';


const SigninForm =()=> {
  const[user,setuser]=useState({});
  const navigate=useNavigate();
  
  //handle form
  const handleit=(e)=>{
  console.log(user);
  pd(user);
  e.preventDefault();
  };

  //saving token
  const logtoken=(token)=>{
    localStorage.setItem("token",JSON.stringify(token));
    console.log(token.token);
    const username="utkarsh";
    // axios.get(`${base_url}/user/${username}`,{headers:Authheader()}).then(
    //   (response)=>{
    //     console.log(response.data);
    //   },
    //   (error)=>{
    //     console.log(error);
    //   }
    // )
  }
  const logout=()=>
  {
    localStorage.removeItem("token");
  }
  
  
  //postdata function
  const pd=(data)=>
  {
    axios.post(`${base_url}/generate-token`,data).then(
      (response)=>{
        console.log({response});
        console.log("success");
        
        if(response.data.token){ 
          logtoken(response.data);
        }
        navigate(`/user`);
        
  
    },
    (error)=>{
      console.log(error);
        console.log("error");
  
    })
  };




 return (
        <div className='border border-primary rounded-3 px-3 py-3 '>
            <h1 className='display-3 text-info text-center '>
                SignIn Here

            </h1>

        
      <Form onSubmit={handleit}>
       
        <FormGroup>
          <Label for="exampleUsername">Username</Label>
          <Input type="name" name="name" id="exampleUsername" placeholder="UserName Here" onChange={(e)=>{
            setuser({...user,username:e.target.value})
          }}/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password" onChange={(e)=>{
            setuser({...user,password:e.target.value})
          }} />
        </FormGroup>
       <Button className='bg-success' type="submit">LogIN</Button>
      </Form>
      <div className='text-center '>
        <p>Did Not  have a Account?<Link to="/SignUp">SignUP</Link></p>
      </div>
      </div>
    );
  }
  export default SigninForm;
