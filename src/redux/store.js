import {configureStore,combineReducers} from '@reduxjs/toolkit';

import productReducer from './slicers/ProductSlice';
import cartReducer from './slicers/CartSlice';


import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

const persistConfig = {
    key:"root",
    version :1,
    storage
};



const rootReducer = combineReducers({
    product : productReducer,
    cart: cartReducer
});


const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = configureStore({
    reducer : persistedReducer,
    
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }) 


});

export default store;