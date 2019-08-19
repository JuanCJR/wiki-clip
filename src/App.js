import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import KnowedgeBase from './components/KnowedgeBase/KnowedgeBase';


//importaciones de pruebas


class App extends Component {

  state = {


  }



  render() {
    return (

      //Enrutamiento de aplicacion
      <Router>
        <Route exact path="/" component={this.Home}></Route>
        <Route path="/dashboard" component={this.Dashboard}></Route>
        <Route path="/test" component={this.Test}></Route>
        <Route path="/KnowedgeBase" component={this.KB}></Route>
      </Router>


    );
  }//.

  //Pantalla de Inicio
  Home() {
    return (

      <div className="index">
        <header className="masthead d-flex">
          <div className="container text-center my-auto">
            <h1 className="mb-1">Clip Tecnlogia</h1>
            <h3 className="">
              <em>Wiki</em>
            </h3>
            <Button className="" variant="dark" href="/dashboard">Empecemos</Button>
          </div>

        </header>

      </div>
    )
  }//.


  Dashboard() {
    return (
      <div>
        <NavBar></NavBar>
        <Dashboard></Dashboard>
      </div>

    )
  }//.


  KB(){
    return(
      <div>
        <NavBar></NavBar>
        <KnowedgeBase></KnowedgeBase>
      </div>
    )
  }

  Test(){

    return(
      <div>
       
      </div>
    )
  }//.



}

export default App;
