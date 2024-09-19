import { createSlice } from '@reduxjs/toolkit';
import productData from '../productData';

const initialState = {
    cart: [],
    items: productData,
    totalQuantity: 0,
    totalPrice: 0

}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtocart: (state, action) => {
            const itemInCart = state.cart.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }

            // Update total quantity
            state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);

            // Update total price
            state.totalPrice = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        }
    }
});
export const { addtocart } = cartSlice.actions

export default cartSlice.reducer
