import { combineReducers } from 'redux'
import { ADD_ITEM, REMOVE_ITEM, SUBTRACT_TOTAL, ADD_TOTAL, RECEIVE_ITEMS }
from './index'


const ItemReducer = (state = [], action) =>
{
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
        var items = [...state]
        for( var i = 0; i < items.length; i++){ 
            if ( items[i].name == action.item.name) {
              items.splice(i, 1); 
              return items
            }
         }
        

        default:
            return state
        }
        
}
const groceryStoreApp = combineReducers({
    ItemReducer,
    SelectedItemReducer
})
   
export default groceryStoreApp