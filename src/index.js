import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotals } from './slice/cartSlice.js'
import App from './App';
const stores = configureStore({
    reducer: {
        cart: cartReducer
    }
})

stores.dispatch(getTotals())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={stores}>
     <App />
    </Provider>
    );

