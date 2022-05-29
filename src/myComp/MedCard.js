import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button ,Row,Col} from 'reactstrap';
  import base_url from './Url';
 import axios from 'axios';
 import Authheader from './Authheader';
  import citizen from './citizen.jpg';

const MedCard = (props) => {

const[count,setCount]=useState(1);
const[disable,setDisable]=useState(false);
const navigate=useNavigate();

function increment(){
setCount(count+1)
}
function decrement(){
  if(count>1)
  setCount(count-1)
  }
  function Addtocart(){
    if(localStorage.getItem("token")==null){
      navigate("/signIn")
    }
    else{
    axios.get(`${base_url}/addtoCart/${props.id}`,{headers:Authheader()}).then(
      (response)=>{
        setDisable(true);
  },
      (error)=>{
        console.log(error);
      }
    )
    }
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
          <Button className='bg-primary px-5 mx-2 my-2'onClick={()=>(navigate(`/user/ViewMed/${props.name}`))}>View</Button>
          <Button disabled={disable} className='bg-info px-4 my-2' onClick={()=>(Addtocart())}>Add to Cart</Button>
          </div>
          </Col>
        
        
        </Row>
      </Card>
    </div>
  );
};

export default MedCard;