import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {notify_success,notify_warning} from '../../utils/notifications'


export const AuthSlice = createSlice({
    name:'authentication',
    initialState: {
        authUser:[],
        isAuth:false
    },
    extraReducers:(builder) => {
        builder
        .addCase(signIn.fulfilled,(state,action) => {
            state.authUser=action.payload;
            state.isAuth=true;
            notify_success(`Welcome ${state.authUser?.user?.email.split('@')[0]}`);
        })
        .addCase(signIn.rejected,(state,action) => {
            state.isAuth=false;
            state.authUser=[];
            notify_warning(`${action.error.message}`);
        })
        .addCase(logOut.fulfilled,(state) => {
            state.authUser=[];
            state.isAuth=false;  
            notify_success('Logout sucessfull !')
        })
        .addCase(logOut.rejected,(state,action) => {
            notify_warning(`${action.error.message}`);
        })
        .addCase(signUp.fulfilled,(state,action) => {
                state.authUser=action.payload;
                state.isAuth=true;    
                notify_success(`Welcome ${state.authUser?.user?.email.split('@')[0]}`);            
        })
    }

})

export default AuthSlice.reducer;

export const signIn = createAsyncThunk('user/signin',async({auth,email,password}) => {
    const response = await signInWithEmailAndPassword(auth,email,password)
    return response;
});

export const logOut = createAsyncThunk('user/signout',async({auth})=>{
    const response=await signOut(auth);
    return response;

});

export const signUp = createAsyncThunk('user/singup',async({auth,email,password}) => {
    const response = await createUserWithEmailAndPassword(auth,email,password);
    return response;

})