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
          <h1>Store</h1>
          <p>Store that I havent decided yet</p>
          </Jumbotron>
        <Grid>
          <Row>

        <Col xs={12} md={8} >
        <div className="w3-container">
        <h3>Popular Products</h3>
        </div>
        
        <VisibleItemList/>
        </Col>
        
        <Col xs={6} md={4} >
        
         <VisibleSelectedItemList/>

          {/* <VisibleCountryAdd/> */}
          </Col>
          </Row>
          </Grid>
            
          
            
          
          
          
       
      </div>
    );
  }
}

export default App;
