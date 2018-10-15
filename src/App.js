import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'w3-css/w3.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { VisibleItemList } from './containers/visibleItemList';
import { VisibleSelectedItemList } from './containers/visibleSelectedItemList';
import { ListGroup } from 'react-bootstrap'
import { ListGroupItem} from 'react-bootstrap'
import { Jumbotron } from 'react-bootstrap'
import { Col, Row, Grid } from 'react-bootstrap'




class App extends Component {
  

 
  
  render() {
      

    return (
      <div className = "App">
       
        <Jumbotron>
          <h1>Tech World</h1>
          <p>One stop shop for technology</p>
          </Jumbotron>
          <VisibleSelectedItemList/>
        <Grid>
          <Row>

        <Col xs={12} md={8} >
        <div className="w3-container">
        <h3>Popular Products</h3>
        </div>
        
        <VisibleItemList/>
        </Col>
          </Row>
          </Grid>
          <div className="w3-container w3-light-grey">
          
          <a className="w3-left" href="https://developer.bestbuy.com"> API by BestBuy
    <img src="https://developer.bestbuy.com/images/bestbuy-logo.png" alt="Best Buy Developer API"/>
          </a>
          
          </div>
            
          
            
          
          
          
       
      </div>
    );
  }
}

export default App;
