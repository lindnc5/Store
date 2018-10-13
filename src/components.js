import React from 'react'
import PropTypes from 'prop-types'

export const ItemSelecter = (props) => (
    <select 
    onChange={(e) => props.onChange(e.target.value, e.target.id)}
    >
        {props.itemList.map((itemName) => <option key={itemName} value = {itemName} id = {itemName}> {itemName}</option>)}
    </select>


)

ItemSelecter.propTypes = {
    onChange: PropTypes.func.isRequired,
    itemList: PropTypes.array.isRequired
   
}
