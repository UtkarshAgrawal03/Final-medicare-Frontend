import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button ,Row,Col} from 'reactstrap';
  import base_url from '../myComp/Url';
 import Authheader from '../myComp/Authheader';
import axios from 'axios';

  import citizen from './citizen.jpg';

const CartItem = (props) => {

const[count,setCount]=useState(1);
const navigate=useNavigate();

function increment(){
setCount(count+1)
}
function decrement(){
  if(count>1)
  setCount(count-1)
  }
  function rmc(){
    axios.get(`${base_url}/deleteFromCart/${props.cid}`,{headers:Authheader()}).then(
        (response)=>{
            
          window.location.reload(true);
        
    },
        (error)=>{
          console.log(error);
        }
      )
  }

  return (
    <div className='my-5 mx-5' style={{borderradius:"5rem"}}>
      <Card className='bg-light'>
        <Row>
          <Col>
        <CardImg top width="50%" height="100%" src={citizen} alt={props.image} />
        </Col>
        <Col>
        <CardBody className='text-center '>
        
          <CardTitle className='display-5'>{props.name}</CardTitle>
          <CardSubtitle className='display-5'>{props.brand}</CardSubtitle>
          
          <CardText className='display-6'>Price:-{props.price}/per Pack</CardText>
          </CardBody>
          </Col>
          <Col>
          <div className='my-5'>
            <div className='my-3'>
          <span className=' display-6 px-3 '>Quantity</span></div>
          <Button className='px-5 mx-2' onClick={decrement}>-</Button>
          <span className=' fw-bold px-3'>{count}</span>
          <Button className='px-5 mx-2'onClick={increment}>+</Button>
          </div>
          <div>
              <h1 className="display-5">Total={count*props.price}</h1>
          </div>
          <div>
          <Button className='bg-primary px-5 mx-2 my-2'onClick={()=>(navigate(`/user/ViewMed/${props.name}`))}>View</Button>
          <Button  className='bg-info px-4 my-2' onClick={()=>(rmc())}>Remove From Cart</Button>
          </div>
          </Col>
        
        
        </Row>
      </Card>
    </div>
  );
};

export default CartItem;