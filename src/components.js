import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup } from 'react-bootstrap'
import { ListGroupItem} from 'react-bootstrap'

export const ItemSelecter = (props) => (
    console.log(props),
    <ListGroup 
    
    >
        {props.itemList.map((itemName) => <ListGroupItem className="listItem w3-card" 
         key={itemName.id} value = {itemName.name} > 
        <img src={itemName.image} alt="Product Photo"/> 
        <div className="w3-container">{itemName.name} : ${itemName.salePrice}</div>
        <footer class="w3-container">
  <button onClick={(e) => props.onChange(itemName.name)} className="w3-button">Add</button>
</footer>
</ListGroupItem>)}
    </ListGroup>


)

ItemSelecter.propTypes = {
    onChange: PropTypes.func.isRequired,
    itemList: PropTypes.array.isRequired
   
}

export const SelectedItemList = (props) => (
    <div className="w3-sidebar w3-bar-block">
    <header className="w3-header">
    My Cart
    </header>
    <ListGroup className="w3-bar-item">
        {props.selectedItemList.map((itemName) => <ListGroupItem className="addedItem" onClick={(e) => props.onChange(e.target.value)} key={itemName.id} value = {itemName} > {itemName}</ListGroupItem>)}
    </ListGroup>
    </div>
  
    
    


)

SelectedItemList.propTypes = {
    onChange: PropTypes.func.isRequired,
    selectedItemList: PropTypes.array.isRequired
   
}
