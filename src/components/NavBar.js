import React, { Component } from 'react'
import { Navbar, NavDropdown, Nav,Form,FormControl, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import axios from 'axios'
export default class NavBar extends Component {
    state={
        Search:""
    }


    onChangeSearch = (e)=>{
        this.setState({
            Search:e.target.value
        });
    }//.

    
    onSubmit = async (e) =>{

        e.preventDefault();
       const result = await axios.post('http://localhost:8080/api/KnowedgeBase/search',this.state);            
       await this.props.runSearch(result.data);
    }//
    
    
    render() {

     
        return (
            <Navbar bg="light" variant="light" expand="lg">
                <Navbar.Brand href="/">
                
                <Image
                width="70"
                height="55"
                alt="React Boostrap logo"
                className="d-inline-block align-center mr-3 pb-1"
                style={{backgroundColor:"rgba(245, 245, 245, 1)"}} 
                src="/img/logo-clip.png" rounded />
               <strong>Wiki-Clip</strong> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <NavDropdown title="Aplicativos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">GoAnywhere</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Presto</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Enforcive</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Aldon</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">X-Analysis</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Servidores" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">IBM i</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Windows Server</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Linux</NavDropdown.Item>
                        </NavDropdown>
                        
                           <Nav.Link href="/KnowedgeBase">Base de Conocimientos</Nav.Link>
                
                    </Nav>
                    <Form inline onSubmit={this.onSubmit}>
                        <FormControl
                        onChange={this.onChangeSearch} type="text" placeholder="Buscar" className="mr-sm-2" />
                        <Button type="submit" variant="outline-success">Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}
