import {createSlice} from '@reduxjs/toolkit';

const initialState= {
        cartItems:[],
        
    }

export const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers  :{
        add_to_cart : (state,action) => {
            const itemInCart = state.cartItems.find((item) => item.id === action.payload.id);
            if (itemInCart)
                {itemInCart.quantity++;}
            else
                {
                    state.cartItems.push({...action.payload,quantity:1,cartStatus:true});
                }
        },

        remove_from_cart : (state,action) => {
            let removedtems = state.cartItems.filter((item) => item.id !== action.payload);
            state.cartItems = removedtems;
        },

        incrementQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload);
            item.quantity++;
        },
        
        decrementQuantity: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--;
            }
        },

        empty_cart : (state,action) => {
            state.cartItems=[];
        }

    }

});


export default CartSlice.reducer;

export const {add_to_cart,remove_from_cart,incrementQuantity,decrementQuantity,empty_cart} = CartSlice.actions;
