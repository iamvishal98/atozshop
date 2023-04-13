import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { updateDoc } from 'firebase/firestore';


const initialState= {
    wishlistData:[],
};

export const WishlistSlice = createSlice({
    name:'wishlist',
    initialState,
    reducers: {
        add_to_wishlist : (state,action) => {
            state.wishlistData = action.payload;
        },
        reset_wishlist : (state,action) => {
            state.wishlistData = action.payload;
        },
        remove_from_wishlist : (state,action) => {
           const resulted = state.wishlistData.filter((item) => item.id !== action.payload.id);
           updateDoc(action.payload.ref,{
            wishlistItem:resulted
          })
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(removeFromWishlist.fulfilled,(state,action) => {
            console.log('wishState',action)
        })
        .addCase(removeFromWishlist.rejected,(state,action) => {
            console.log(action);
        })
    }
});

export default WishlistSlice.reducer;

export const {add_to_wishlist,reset_wishlist,remove_from_wishlist} = WishlistSlice.actions;

export const removeFromWishlist = createAsyncThunk('user/removeWishlist',async({passedId,wishId},{getState}) => {
    const data = getState().wishlist.wishlistData;
    const resulted = data.filter((item) => item.id !== passedId);
    const response = await updateDoc(wishId,{
      wishlistItem: resulted
    });
    console.log('response wish',response)
    return response;
});