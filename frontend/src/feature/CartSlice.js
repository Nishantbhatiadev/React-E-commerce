import { createSlice } from '@reduxjs/toolkit';
import productData from '../productData';
import { toast } from 'sonner';

const initialState = {
    cart: [],
    items: productData,
    totalQuantity: 0,
    totalPrice: 0,
    orders: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // Action to add an item to the cart
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
            toast.success('Added to cart successfully!')
        },

        // Action to remove an item from the cart
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

        // Action to increase the quantity of an item in the cart
        addQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }

            state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        },

        // Action to decrease the quantity of an item in the cart     
        minusQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.cart = state.cart.filter((item) => item.id !== action.payload);
            }

            state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        },

        // Action to store the cart in local storage
        setCart: (state, action) => {
            return action.payload
        },

        // Action to place order
        placerOrder: (state, action) => {
            state.orders.push({ id: Date.now(), ...action.payload })

            if (state.cart.length > 0) {
                state.cart = [];
                state.totalQuantity = 0;
                state.totalPrice = 0;
                toast.success('Order placed successfully!');
            }
            else {
                toast.error('Cart is empty!');
            }
        },

        // Action to Store orders in local storage
        setOrders: (state, action) => {
            state.orders = action.payload;
        }
    }
});
export const {
    addtocart,
    removeFromCart,
    addQuantity,
    minusQuantity,
    setCart,
    placerOrder,
    setOrders } = cartSlice.actions

export default cartSlice.reducer
