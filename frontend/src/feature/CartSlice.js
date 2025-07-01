import { createSlice } from '@reduxjs/toolkit';
import productData from '../productData';
import { toast } from 'sonner';

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
            toast.success('My first toast')
        },

        removeFromCart: (state, action) => {
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                const item = state.cart[itemIndex];
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    state.cart.splice(itemIndex, 1);
                }
            }

            // Update total quantity
            state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);

            // Update total price
            state.totalPrice = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        },

        addQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }

            state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        },


        minusQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.cart = state.cart.filter((item) => item.id !== action.payload);
            }

            state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        }



    }
});
export const { addtocart, removeFromCart, addQuantity, minusQuantity } = cartSlice.actions

export default cartSlice.reducer
