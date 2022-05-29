import React, { useEffect } from 'react';
import { Outlet }from 'react-router-dom';
import { Button } from 'reactstrap';

import { useNavigate } from 'react-router-dom';

const AdminDashBoard = () => {
    useEffect(()=>{
       // document.getElementById("root").style.backgroundColor="grey";
      },[]);
      const navigate=useNavigate();
      
  return <>
    <div className='mx-2'>
      <Button color="success" block size="lg" center className='my-3 px-5  ' onClick={()=>navigate('/admin/addMed')}>Add Medicine</Button>
        <Button color="success" block size="lg" className='my-3 px-5 ' onClick={()=>navigate('/admin/updateMed')}>Update Medicine</Button>
        <Button color="success" block size="lg" className='my-3 px-5  ' onClick={()=>navigate('/admin/deleteMed')}>Delete Medicine</Button>
        </div>
      <div className='text-center mx-2'>
          <h2>Work here</h2>
    <Outlet/>
      </div>
     
      
      

  

  
  
  
  </>;
};

export default AdminDashBoard;
