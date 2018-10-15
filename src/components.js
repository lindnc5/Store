import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup } from 'react-bootstrap'
import { ListGroupItem} from 'react-bootstrap'

export const ItemSelecter = (props) => (
    
    <ListGroup 
    
    >
        {props.itemList.map((itemName) => <ListGroupItem className="listItem w3-card" 
         key={itemName.id} value = {itemName.name} > 
         <div className="productImage">
        <img src={itemName.image} alt="Product Photo"/> 
        </div>

        <div className="w3-container" >{itemName.name} : ${itemName.salePrice}</div>
        <footer className="w3-container">
  <button onClick={(e) => props.onChange(itemName)} className="w3-button">Add</button>
</footer>
</ListGroupItem>)}
    </ListGroup>


)

ItemSelecter.propTypes = {
    onChange: PropTypes.func.isRequired,
    itemList: PropTypes.array.isRequired
   
}

function total(items) {
    var sum = 0
    items.forEach((a)=>{
        sum = sum + a.salePrice * a.amount
    })
    return sum
}

export const SelectedItemList = (props) => (
    
    <div className="w3-sidebar ">
    <header className="w3-header">
    My Cart
    </header>
    <ListGroup className="w3-bar-item">
        {props.selectedItemList.map((item) =>
             <ListGroupItem className="addedItem" value = {item.name} >
         {item.name}
         <br/>
         <button onClick={(e) => props.onMinusClick(item)} className="w3-button w3-circle">-</button>
          {item.amount}
         <button onClick={(e) => props.onPlusClick(item)} className="w3-button w3-circle">+</button>
         </ListGroupItem>)}
    </ListGroup>
    <div className="w3-container w3-light-grey">
    <p>Total : {total(props.selectedItemList).toFixed(2)}</p>
    </div>
    </div>
  
    
    


)

SelectedItemList.propTypes = {
    onMinusClick: PropTypes.func.isRequired,
    onPlusClick: PropTypes.func.isRequired,
    selectedItemList: PropTypes.array.isRequired
   
}
