import React,{useEffect, useState} from 'react';
import MedCard from './MedCard'; 
import {Row,Col} from 'reactstrap';
import axios from 'axios';
import base_url from './Url';
import Authheader from './Authheader';

 const MedDisplay = () => {
   
  const[data,setData]=useState([]);
  
  useEffect(()=>{
    axios.get(`${base_url}/getAll/0/6`,{headers:Authheader()}).then(
        (response)=>{
          console.log(response.data.content);
         setData(response.data.content);
          console.log(data);
         
          },
        (error)=>{
          console.log(error);
        }
      )
   },[]);
   
  return <div>
    <Row>
      <Col>
      {
        data.map(v=>(<MedCard id={v.id} name={v.name} brand={v.brand} desc={v.description} image='./images/Medimage.PNG' price={v.price}/>))
      }
      </Col>

    </Row>
  </div>

  // return <div> 
  //     <Row>
  //             <Col>
  //             <MedCard name="" brand="Cipla" image='./images/Medimage.PNG' price="23.90"/>
  //             </Col><Col>
  //         <MedCard name="CitiZen" brand="Cipla" image='./images/Medimage.PNG' price="23.90"/>
  //         </Col><Col>
  //         <MedCard name="CitiZen" brand="Cipla" image='./images/Medimage.PNG' price="23.90"/>
  //         </Col>
         
            
  //           </Row>
  //           <Row>
  //             <Col>
  //             <MedCard name="CitiZen" brand="Cipla"  image='./images/Medimage.PNG' price="23.90"/>
  //             </Col><Col>
  //         <MedCard name="CitiZen" brand="Cipla" image='./images/Medimage.PNG' price="23.90"/>
  //         </Col><Col>
  //         <MedCard name="CitiZen" brand="Cipla" image='./images/Medimage.PNG'  price="23.90"/>
  //         </Col>
         
            
  //           </Row>
  // </div>;
};
export default MedDisplay;

