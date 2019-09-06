import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import KnowedgeBase from './components/KnowedgeBase/KnowedgeBase';
import ItemKBPage from './components/KnowedgeBase/ItemKBPage'
import CreateKBItem from './components/KnowedgeBase/CreateKBItem'

//importaciones de pruebas
import Prueba from './test/test.js'

class App extends Component {

  state = {



  }



  render() {
    return (
      //Enrutamiento de aplicacion
      <div>
        <Route exact path="/" component={this.Home}></Route>
        <Route path="/dashboard" component={this.Dashboard}></Route>
        <Route path="/KnowedgeBase" component={this.KB}></Route>
        <Route path="/KnowedgeBaseItem" component={this.kbRouter}></Route>
        <Route path="/CreateKBItem" component={this.CreateKBItem}></Route>

        <Route path="/Prueba" component={this.Prueba}></Route>
            
             </div>


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


  KB = ({ match }) => {

    return (
      <div>
         
        <NavBar></NavBar>
      
        <KnowedgeBase></KnowedgeBase>

        {/*<a href={`${match.url}/prueba`}
        >aaaaaaaaaaaaa</a>

        <Route exact path={`${match.url}/prueba`} component={this.Test}></Route>*/}


      </div>

    )
  }//.

  kbRouter = ({ match }) => {

    const url = [
      { id:1,
        url:match.url + "/GoAnywhere"},
      {id:2,
        url:match.url + "/Presto"},
      {id:3,
      url:match.url + "/Enforcive"},
      {id:4,
        url:match.url + "/Aldon"},
      {id:5,
        url:match.url + "/X-Analysis"} 
    ]
    const UrlConfirm = url.find( url => url.url = match.url + "/GoAnywhere"); 

   
    return <div>
      {console.log(UrlConfirm)}
      {url.map(url => 
        <Route path={url.url} component={this.ItemKBPage} key={url.id}></Route>
        )}
     
      
    </div>
  }//.


  ItemKBPage = ({ match }) => {

    return (
      
      <ItemKBPage></ItemKBPage>     
    )
  }//.

  CreateKBItem = () =>{
    return(
        <CreateKBItem></CreateKBItem>
    )
}//.

  Prueba()
  {
    return(
        <Prueba></Prueba>
    )
  }//.


}

export default App;
