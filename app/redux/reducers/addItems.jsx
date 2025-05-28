import { calculateTotalPrice } from '../../utils/calculateTotalPrice';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    product: [],
    totalPrice: 0,
    orderData: [],
    totalOrderPrice: 0,
    saveAddress: {
        name: '',
        city: '',
        street: '',
        state: '',
        phone: 0,
        pincode: 0
    }
};

const addItems = createSlice({
    name: 'addToCart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const itemExists = state.product.some(
                (item) => item._id === action.payload._id
            );
            if (!itemExists) {
                state.product.push(action.payload);
            }
            state.totalPrice = calculateTotalPrice(state.product);
        },
        removeItem: (state, action) => {
            state.product = state.product.filter(
                (item) => item._id !== action.payload
            );
            state.totalPrice = calculateTotalPrice(state.product);
        },
        clearItems: (state) => {
            state.product = [];
            state.totalPrice = calculateTotalPrice(state.product);
        },
        increaseQuantity: (state, action) => {
            const item = state.product.find(
                (item) => item._id === action.payload.id
            );
            if (!item) {
                return;
            }
            item.quantity += action.payload.quantity;
            state.totalPrice = calculateTotalPrice(state.product);
        },
        decreaseQuantity: (state, action) => {
            const item = state.product.find(
                (item) => item._id === action.payload.id
            );
            if (!item) {
                return;
            }
            if (item.quantity <= 1) {
                return;
            }
            item.quantity -= action.payload.quantity;
            state.totalPrice = calculateTotalPrice(state.product);
        },
        saveOrder: (state, action) => {
            action.payload.forEach((item) => {
                const existingItem = state.orderData.find(
                    (orderItem) => orderItem._id === item._id
                );
                if (existingItem) {
                    existingItem.quantity += item.quantity;
                } else {
                    state.orderData.push(item);
                }
            });
            state.totalOrderPrice = calculateTotalPrice(state.orderData);
        },
        resetOrder: (state) => {
            state.orderData = [];
            state.totalPrice = calculateTotalPrice(state.orderData);
        },
        Address: (state, action) => {
            state.saveAddress = action.payload;
        }
    }
});

export const {
    addItem,
    Address,
    removeItem,
    clearItems,
    increaseQuantity,
    decreaseQuantity,
    saveOrder,
    resetOrder
} = addItems.actions;

export default addItems.reducer;
