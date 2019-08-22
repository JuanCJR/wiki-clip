import React, { Component } from 'react'
import ItemBD from './itemBD.json'
import { Route } from 'react-router-dom'
import { Card, Container, Row, Col, ListGroup } from 'react-bootstrap'
import ItemListKB from './ItemListKB'
import ItemKBPage from './ItemKBPage'
import NavBar from '../NavBar'
export default class KnowedgeBase extends Component {

    state = {
        items: ItemBD.slice(0, [7]), //ItemBD.filter(ItemBD => ItemBD.id < 8 && ItemBD.id >0),
        nroItem: 7,
        linked: false
    }//.

    changeLinked = () => {
        let newLinkedState = this.state.linked;
        this.setState({
            linked:newLinkedState =! newLinkedState
        })
    }//.


    nextItems = () => {
        this.setState({
            items: ItemBD.slice(this.state.nroItem, [this.state.nroItem + 7]),
            nroItem: this.state.nroItem + 7
        })

    }

    beforeItems = () => {
        this.setState({
            items: ItemBD.slice(this.state.nroItem - 7, [this.state.nroItem]),
            nroItem: this.state.nroItem - 7
        })
    }


    render() {
        return (

            <Card className="">
                <Card.Header><h1>Base de Conocimientos</h1></Card.Header>
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


                            <this.prueba></this.prueba>


                        </Col>
                    </Row>
                </Container>
            </Card>

        )
    }//.


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


    ItemKBPage = ({ match }) => {

        return (


            <ItemKBPage></ItemKBPage>

        )
    }//.


    prueba = () => {
        return (
            <div>
                {this.state.linked ? (

                    <ItemKBPage changeLinked={this.changeLinked}></ItemKBPage>

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
    }

}
