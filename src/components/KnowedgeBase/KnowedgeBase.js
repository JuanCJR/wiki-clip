import React, { Component } from 'react'
import ItemBD from './itemBD.json'
import { Route } from 'react-router-dom'
import { Card, Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import ItemListKB from './ItemListKB'
import ItemKBPage from './ItemKBPage'
import axios from 'axios';
import CreateKBItem from './CreateKBItem'
export default class KnowedgeBase extends Component {

    state = {
        items:[], // ItemBD.slice(0, [7]), //ItemBD.filter(ItemBD => ItemBD.id < 8 && ItemBD.id >0),
        nroItem: 7,
        linked: false,
        actualItem:{}
    }//. 

    async componentDidMount(){
        const res = await axios.get('http://localhost:8080/api/KnowedgeBase');
        console.log(res.data[0]);

        this.setState({
            items: res.data.slice(0,[7])
        })
    }

    changeLinked = (itemID) => {

       let newLinkedState = this.state.linked;
        
        this.setState({
            linked:newLinkedState =! newLinkedState,
            actualItem:this.state.items.filter(items => items._id === itemID)
        });
        
        console.log(this.state.items.filter(items => items._id === itemID))
        
    }//.


    nextItems = async () => {

        const res = await axios.get('http://localhost:8080/api/KnowedgeBase');

        this.setState({
            items: res.data.slice(this.state.nroItem, [this.state.nroItem + 7]),
            nroItem: this.state.nroItem + 7
        })

    }

    beforeItems =  async () => {

        const res = await axios.get('http://localhost:8080/api/KnowedgeBase');

        this.setState({
            items: res.data.slice(this.state.nroItem - 7, [this.state.nroItem]),
            nroItem: this.state.nroItem - 7
        })
    }


    render() {
        return (
            
            <Card className="">
               
                <Card.Header><h1>Base de Conocimientos</h1>
                
                <a  href="/CreateKBItem" className ="btn btn-primary">Agregar Item</a>
                </Card.Header>
                
                <Container className="m-0 p-0 mw-100" style={{ height: "30rem" }}>
                    <Row className="m-0 mw-100 " >
                        <Col className="p-0 m-0" style={{ width: "12rem", flexGrow: "0" }}>
                            <Card className="m-0 p-0" style={{ width: "11rem", height: "100%" }}>
                                <ListGroup>
                                    <ListGroup.Item><a href="/">Aldon</a></ListGroup.Item>
                                    <ListGroup.Item><a href="/">Enforcive</a></ListGroup.Item>
                                    <ListGroup.Item><a href="/">Presto</a></ListGroup.Item>
                                    <ListGroup.Item><a href="/">GoAnywhere</a></ListGroup.Item>
                                    <ListGroup.Item><a href="/">X-Analysis</a></ListGroup.Item>

                                </ListGroup>
                            </Card>
                        </Col>

                        <Col className="p-0 m-0" style={{ width: "80rem", flexGrow: "0" }}>


                            <this.renderKB></this.renderKB>


                        </Col>
                    </Row>
                </Container>
            </Card>

        )
    }//.

    /*
    kbRouter = ({ match }) => {

        const url = [
            {
                id: 1,
                url: match.url + "/GoAnywhere"
            },
            {
                id: 2,
                url: match.url + "/Presto"
            },
            {
                id: 3,
                url: match.url + "/Enforcive"
            },
            {
                id: 4,
                url: match.url + "/Aldon"
            },
            {
                id: 5,
                url: match.url + "/X-Analysis"
            }
        ]
        const UrlConfirm = url.find(url => url.url = match.url + "/GoAnywhere");


        return <div>
            {console.log(UrlConfirm)}
            {url.map(url =>
                <Route path={url.url} component={this.ItemKBPage} key={url.id}></Route>
            )}


        </div>
    }//.
*/


    renderKB = () => {
        return (
            <div>
                {this.state.linked ? (

                    <ItemKBPage changeLinked={this.changeLinked}
                                actualItem={this.state.actualItem}
                    ></ItemKBPage>

                ) : (

                        <ItemListKB
                            nextItems={this.nextItems}
                            beforeItems={this.beforeItems}
                            items={this.state.items}
                            linked={this.state.linked}
                            changeLinked={this.changeLinked}
                        ></ItemListKB>)}
            </div>
        )
    }//.

    


}
