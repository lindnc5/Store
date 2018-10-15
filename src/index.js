import React from 'react';
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './serviceWorker';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import fetch from 'cross-fetch'
import groceryStoreApp from './reducers'

const loggerMiddleware = createLogger()

let store = createStore(groceryStoreApp, applyMiddleware(thunkMiddleware, loggerMiddleware))

const unsubscribe = store.subscribe(() =>{

})
store.dispatch(fetchItemList())


ReactDOM.render(<Provider store={store}> 
    <App />
    </Provider>,
     document.getElementById('root'));
    registerServiceWorker();
    
    export const ADD_ITEM = 'ADD_ITEM'
    export const REMOVE_ITEM = 'REMOVE_ITEM'
    export const SUBTRACT_TOTAL = 'SUBTRACT_TOTAL'
    export const ADD_TOTAL = 'ADD_TOTAL'
    export const FETCH_ITEMS = 'FETCH_ITEMS'
    export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
    
    export function addItem(itemId)
    {
        return{
            type: 'ADD_ITEM',
            itemId
        }
    }
    
    export function removeItem(item)
    {
        return {
            type: REMOVE_ITEM,
            item
        }
    }

    export function subtractFromTotal(price)
    {
        return{
            type: SUBTRACT_TOTAL,
            price
        }
    }

    export function addToTotal(price)
    {
        return{
            type: ADD_TOTAL,
            price
        }
    }

    export function fetchItems(){
        return {
            type: "FETCH_ITEMS"
            
        }
    }

    export function receiveItems(json)
{
   
    return {
        type: "RECEIVE_ITEMS",
        itemList: json
    }
}


export function fetchItemList()
{
    return function (dispatch){
        dispatch(fetchItems())
    

        return fetch('https://api.bestbuy.com/v1/products(customerTopRated=true)?apiKey=66MB0ugdLfrelyK4ctUIRboi&format=json&pageSize=10&show=sku,name,image,salePrice,customerTopRated&sort=bestSellingRank')
        .then(
            response => response.json(),
            error => {console.log('An error occurred.', error)
            return 
        }
            
        
        )
        .then(json =>
        store.dispatch(receiveItems(json.products))
        )
    }
    
}
