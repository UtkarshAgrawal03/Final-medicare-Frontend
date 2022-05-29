import React from "react";


import { Col, Row } from "reactstrap";

export const SideBar = (props) => {
  return <div>
      
      <hr/>
      <Row className="border border-primary text-muted ">
          <Col>
          <h2  className="display-6">
              {props.name}
          </h2>
          </Col>
      </Row>
     
  </div>;
};
export default SideBar;
