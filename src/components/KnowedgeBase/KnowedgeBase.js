import React, { Component } from 'react'

import { Card, Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import ItemListKB from './ItemListKB'
import ItemKBPage from './ItemKBPage'
import axios from 'axios';
import CreateKBItem from './CreateKBItem';


export default class KnowedgeBase extends Component {

    state = {
        items: [], // ItemBD.slice(0, [7]), //ItemBD.filter(ItemBD => ItemBD.id < 8 && ItemBD.id >0),
        page: 1,
        nroItem: 7,
        linked: false,
        Create: false,
        actualItem: {},
        pageState: "Home"

    }//. 


    //OK
    getData = async (page, nro) => {

        let res = await axios.get('http://localhost:8080/api/KnowedgeBase/' + page + "/page/to/" + nro);
        return res.data;
    }

    //OK
    async componentDidMount() {

        const data = await this.getData("Home", 1);


        this.setState({
            items: data
        })
    }//.

    changeCreateLink = () => {
        let newCreateLinked = this.state.Create;
        this.setState({
            Create: newCreateLinked = !newCreateLinked,

        });
    }//.

    changeLinked = async (itemID) => {

        let newLinkedState = this.state.linked;
        let item = await axios.get("http://localhost:8080/api/knowedgeBase/" + itemID);
        this.setState({
            linked: newLinkedState = !newLinkedState,
            actualItem: item.data,

        });

    }//.

    //OK
    nextItems = async () => {
        let data;

        if (this.state.items.length < 6) {

            this.setState({
                items: this.state.items,
                page: this.state.page
            })
        } else {

            data = await this.getData(this.state.pageState, this.state.page++);
            this.setState({
                items: data,
                page: this.state.page++
            })
        }

    }//.

    //OK
    beforeItems = async () => {
        let nro;
        let data;

        if (this.state.page <= 1) {
            this.setState({
                items: this.state.items,
                page: this.state.page
            })

        } else {
            nro = this.state.page - 1;
            data = await this.getData(this.state.pageState, nro);
            console.log(data);

            this.setState({
                items: data,
                page: nro
            })
        }

    }//.

    refreshData = async () => {
        this.setState({
            items: await this.getData("Home", 1),
            page: 1,
            pageState: "Home"
        })

    }


    filterItems = async name => {

        let data = await this.getData(name, 1);

        this.setState({
            items: data,
            pageState: name,
            page: 1
        });

    }//

    render() {
        return (
            <Card className="p-0 m-0" style={{}}>

                <Card.Header className="pb-5"><h1>Base de Conocimientos</h1>
                    <Button style={{ position: "absolute" }}
                        variant="info"
                        onClick={this.changeCreateLink}>Agregar Item</Button>
                </Card.Header>

                <Container className="m-0 p-0 mw-100" style={{ height: "30rem" }}>
                    <Row className="m-0 mw-100 " >
                        <Col className="p-0 m-0" style={{ width: "12rem", flexGrow: "0" }}>
                            <Card className="m-0 p-0" style={{ width: "11rem", height: "100%" }}>
                                <ListGroup>
                                    <ListGroup.Item className="p-0">
                                        <Button
                                            variant="outline-info"
                                            style={{ width: "100%", border:"0"}}
                                            onClick={() => {
                                                this.filterItems("Aldon")
                                            }}

                                        >Aldon</Button></ListGroup.Item>
                                    <ListGroup.Item className="p-0">
                                        <Button
                                            variant="outline-info"
                                            style={{ width: "100%",border:"0" }}
                                            onClick={() => {
                                                this.filterItems("Enforcive")
                                            }}
                                        >
                                            Enforcive
                                    </Button>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="p-0"> <Button
                                        variant="outline-info"
                                        style={{ width: "100%",border:"0" }}
                                        onClick={() => {
                                            this.filterItems("Presto")
                                        }}
                                    >
                                        Presto
                                    </Button></ListGroup.Item>
                                    <ListGroup.Item className="p-0"> <Button
                                        variant="outline-info"
                                        style={{ width: "100%",border:"0" }}
                                        onClick={() => {
                                            this.filterItems("GoAnywhere")
                                        }}
                                    >
                                        GoAnywhere
                                    </Button></ListGroup.Item>
                                    <ListGroup.Item
                                    className="p-0"
                                    > <Button
                                        variant="outline-info"
                                        style={{ width: "100%",border:"0" }}
                                        onClick={() => {
                                            this.filterItems("X-Analysis")
                                        }}
                                    >
                                        X-Analysis
                                    </Button></ListGroup.Item>

                                </ListGroup>
                            </Card>
                        </Col>

                        <Col className="p-0 m-0" style={{ width: "80rem", flexGrow: "0" }}>


                            <this.renderKB2></this.renderKB2>


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

    //En uso
    renderKB2 = () => {
        return (
            <div>
                {this.state.Create ? (
                    <CreateKBItem
                        Create={this.state.Create}
                        changeCreateLink={this.changeCreateLink}
                        refreshData={this.refreshData}
                    ></CreateKBItem>)
                    :

                    (
                        this.state.linked ? (
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
                                ></ItemListKB>
                            )

                    )

                }


            </div>
        )

    }//.




}
