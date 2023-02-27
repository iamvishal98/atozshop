import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const ProductSlice =  createSlice({
    name:'product',
    initialState:{
        products:[],
        currentProducts:[],
        currentProduct:[],
        filteredProducts : [],
        isFilter:false,
        isSearch:false,
        isAuth:false
    },
    reducers:{

        setProducts: (state,action) => {
            state.products=action.payload;
        },

        setParticular: (state,action) => {

            state.currentProducts =  
            state.products.flat().filter((item) => item.subCategory === action.payload.subCategory);
            state.isFilter=false;
        },

        setParticularOne : (state,action) => {
            state.currentProduct = state.products.filter((item) => item.id === action.payload.id);
            //console.log('particularone',action.payload.id)
        },

        setFilter : (state,action) => {
            if (!state.isFilter) state.filteredProducts = state.currentProducts;

            switch(action.payload.type) {
                
                case 'asc' : 
                   state.filteredProducts= state.filteredProducts.sort((a,b) => a.price - b.price); 
                   state.isFilter=true;
                   break;

                case 'desc' :
                   state.filteredProducts= state.filteredProducts.sort((a,b) => b.price - a.price); 
                   state.isFilter=true;
                   break;


                case 'brand' :
                        if (action.payload.brands.length >0)
                        {
                            state.filteredProducts = state.currentProducts
                            .filter(({brand}) => action.payload.brands.includes(brand));
                            state.isFilter=true;
                            break;

                        }
                        else {
                            state.isFilter=false;
                            break;
                        }

                default : state.isFilter=false;
            }
        },

        setSearch : (state,action) => {
           state.currentProducts=state.products
           .filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase()) ||
                             item.subCategory.toLowerCase().includes(action.payload.toLowerCase()) ||
                             item.category.toLowerCase().includes(action.payload.toLowerCase()));
           state.isFilter=false;
        },

    },

    extraReducers:(builder) => {

        builder 
        .addCase(fetchProducts.fulfilled,(state,action) => {
            state.products = action.payload
        })
    }

});

export const {setParticular,setParticularOne,setFilter,setSearch,setProducts} = ProductSlice.actions;

export default ProductSlice.reducer;

// cannot use as this a mock api , while delpoying it's not working

export const fetchProducts= createAsyncThunk('products/fetch',async() => {
    const res = await fetch('https://run.mocky.io/v3/3636c3f6-4b0d-40df-a94c-3521facb9713');
    const data = await res.json();
    return data;
});

