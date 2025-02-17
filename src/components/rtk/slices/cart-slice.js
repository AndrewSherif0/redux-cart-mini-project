import { createSlice } from "@reduxjs/toolkit";
const cartSlice =createSlice({
    initialState: [],
    name: 'cartSlice',
    reducers: {
        addToCart:(state,action)=> {
           const findProduct= state.find((product)=> product.id === action.payload.id) ;
           console.log("find product ",findProduct);
           if(findProduct) {
               findProduct.quantity++;
            }else{
                const ProdClone = {...action.payload, quantity:1};
            state.push(ProdClone);

            }
        },
        removeFromCart: (state, action) => {
            const findProduct = state.find((product) => product.id === action.payload.id);
            if (findProduct) {
                if (findProduct.quantity > 1) {
                    findProduct.quantity--;
                } else {
                    return state.filter((product) => product.id !== action.payload.id);
                }
            }
        },
        
        clear:(state,action)=> {
            return  [];
        }
    }
})
export const {addToCart, removeFromCart, clear} = cartSlice.actions;
export default cartSlice.reducer;