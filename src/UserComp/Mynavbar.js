import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, 
  Container,Form,Button} from 'reactstrap';
  import { Link ,Outlet, useNavigate} from 'react-router-dom';
  import { NavLink as ReactLink } from 'react-router-dom';
  import Footer from '../myComp/Footer';

const Mynavbar=()=>  {
 
 
  
    const[sea,setSea]=useState("");
    const navigate=useNavigate();
    function search() {
      //setSea(document.getElementById("searchvalue").value);
      console.log(sea);
      localStorage.setItem("item",sea);
      navigate(`/user/products/`+sea);

    }
    return  <>
        <Navbar color="light" light expand="md" >
          <NavbarBrand href="/">MediCare</NavbarBrand>
          
          <Collapse navbar>
            <Nav className="mx-3 px-3" navbar fill tabs>
              <NavItem >
                <NavLink to="/user" tag={ReactLink} activeClassName="active">Home</NavLink>
              </NavItem>
              <NavItem >
                <NavLink href="#contact" >Contact Us</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Categories
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/">Antipyretics</Link>
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className='mx-5'>
             
                <span className=''>SearchBar</span>
                <input type="text" placeholder='Search here' className='text-center px-5 mx-3 my-2' id="searchvalue" onChange={e=>{setSea(e.target.value)}} />
                <Button type="button" color="success"  className='my-2' onClick={search}>Search</Button>
               
              </NavItem>
              <NavItem className='mx-3'>
                <NavLink to="/user/profile" tag={ReactLink} activeClassName="active">MyProfile</NavLink>
              </NavItem>
              <NavItem className='mx-3'>
                <NavLink to="/user/cart" tag={ReactLink} activeClassName="active">Cart</NavLink>
              </NavItem>
              <NavItem className='mx-3'>
                <NavLink to="/" tag={ReactLink} activeClassName="active" onClick={()=>{localStorage.removeItem("token")}}>Logout</NavLink>
              </NavItem>
              
              
              
            </Nav>
          </Collapse>
        </Navbar>
        <div className='my-1'>
        <Outlet/>
        </div >
        <div className='my-2'> <Footer/></div>
        
      </>
     
    
  }
export default Mynavbar;