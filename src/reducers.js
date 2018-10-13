import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { ADD_ITEM, REMOVE_ITEM, SUBTRACT_TOTAL, ADD_TOTAL, RECEIVE_ITEMS }
from './index'


const ItemReducer = (state = { itemList : [] } , action) =>
{
    switch(action.type) {
        case  ADD_ITEM:
        return [...state,
        {
            selectedItemList: action.itemName
        }]
        case REMOVE_ITEM:
        return Object.assign(...state,
        {
            selectedItemList: [...state].itemList.pop()
        })
        case "RECEIVE_ITEMS":
        return Object.assign(state,
            {
                itemList: action.itemList
                
            })
      
        default:
            return state
        }
        
}

const TotalReducer = (state = { total : 0} , action) =>
{
    switch(action.type) {
        case  SUBTRACT_TOTAL:
        return [...state,
        {
            total: {...state.total} - action.price
        }]
        case ADD_TOTAL:
        return [...state,
        {
            total: {...state.total} + action.price
        }]
      
        default:
            return state
        }
        
}

const groceryStoreApp = combineReducers({
    ItemReducer,
    TotalReducer
})
   
export default groceryStoreApp