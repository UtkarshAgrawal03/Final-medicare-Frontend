import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import ImageCaro from '../myComp/ImageCaro';
import MedDisplay from '../myComp/MedDisplay';
import Mynavbar from './Mynavbar';

export const Dashboard = () => {
  return <div>
    <Container>
     <ImageCaro/>
     <h1 className='text-center display-5 text-primary' style={{marginTop:"1rem"}}>Some Sample</h1>
  <MedDisplay/>
  </Container>
           
             

      
      
     
  </div>;
};
