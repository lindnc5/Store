import React from 'react';
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import fetch from 'cross-fetch'

const loggerMiddleware = createLogger()

let initialState = {
    itemList: [],
    total: 0
}


let store = createStore(countryStatesApp, applyMiddleware(thunkMiddleware, loggerMiddleware))
serviceWorker.register();

ReactDOM.render(<Provider store={store}> 
    <App />
    </Provider>,
     document.getElementById('root'));
    registerServiceWorker();
    
    export const ADD_ITEM = 'ADD_ITEM'
    export const REMOVE_ITEM = 'REMOVE_ITEM'
    export const SUBTRACT_TOTAL = 'SUBTRACT_TOTAL'
    export const ADD_TOTAL = 'ADD_TOTAL'
    
    export function addItem(itemName)
    {
        return{
            type: ADD_ITEM,
            itemName
        }
    }
    
    export function removeItem(itemName)
    {
        return {
            type: REMOVE_ITEM,
            itemName
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
