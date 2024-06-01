import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    data:[],
    status:'idle',
}

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
    //   fetchProduct(state, action){
    //         state.data = action.payload;
    //   }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(getproducts.pending , (state, action)=>{
            state.status = 'Loading';
        })
        .addCase(getproducts.fulfilled, (state, action)=>{
            state.data = action.payload;
            state.status = 'Idle';
        })
        .addCase(getproducts.rejected, (state, action)=>{
            state.status = 'Error';
        })
    }
});



export const {fetchProduct} = productSlice.actions;
export default productSlice.reducer;

export const getproducts = createAsyncThunk('product/get', async () =>{
    const data = await fetch('https://fakestoreapi.com/products')
        const result = data.json();
        return result;
})

// export  function getProducts(){
//     return async function getProductsThunk(dispatch, getState){
//         const data = await fetch('https://fakestoreapi.com/products')
//         const result = data.json();
//         dispatch(fetchProduct(result));
//     }
// }