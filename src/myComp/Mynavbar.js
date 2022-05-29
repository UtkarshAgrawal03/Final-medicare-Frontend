import React from 'react';
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
  Container} from 'reactstrap';
  import { Link ,Outlet} from 'react-router-dom';
  import { NavLink as ReactLink } from 'react-router-dom';
  import Footer from './Footer';

export default class Mynavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <>
        <Navbar color="light" light expand="md" >
          <NavbarBrand href="/">MediCare</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto px-1" navbar fill tabs>
              <NavItem >
                <NavLink to="/" tag={ReactLink} activeClassName="active">Home</NavLink>
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
              <NavItem className='ml-auto'>
                <NavLink to="/SignIn" tag={ReactLink} activeClassName="active">SignIn</NavLink>
              </NavItem>
              <NavItem >
                <NavLink to="/SignUp" tag={ReactLink} activeClassName="active">SignUp</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
        <Container className='my-1 mx-auto'>
        <Outlet/>
        </Container >
        <div style={{marginTop:"6rem"}}> <Footer/></div>
      </>
     
    );
  }
}