import { combineReducers } from 'redux'
import { ADD_ITEM, REMOVE_ITEM, SUBTRACT_TOTAL, ADD_TOTAL, RECEIVE_ITEMS }
from './index'


const ItemReducer = (state = [], action) =>
{
    console.log(state)
    switch(action.type) {

        case "RECEIVE_ITEMS":
        return Object.assign(...state,
            
            action.itemList
            
           ) 
      
        default:
            return state
        }
        
}

const SelectedItemReducer = (state = [] , action) =>
{
    switch(action.type) {
        case  ADD_ITEM:
        return [...state,
        
            action.itemId
        ]
        case REMOVE_ITEM:
        var items = Object.assign([],state)
        for( var i = 0; i < state.length-1; i++){ 
            if ( items[i] == state.itemName) {
              items.splice(i, 1); 
            }
         }
        return items

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
    SelectedItemReducer,
    TotalReducer
})
   
export default groceryStoreApp