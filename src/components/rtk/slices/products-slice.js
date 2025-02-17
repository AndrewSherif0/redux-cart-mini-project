import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const  fetchProduct = createAsyncThunk('products/fetchProducts', async()=>{
     const res = await fetch('http://localhost:4000/Products');
     const data = await res.json();
     return data;
});

const productsSlice = createSlice({
    initialState: [],
    name: 'productsSlice',
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchProduct.fulfilled, (state, action)=>{
            return action.payload;
        });
    }
    
});
export const alaa = productsSlice.actions;
export default productsSlice.reducer;