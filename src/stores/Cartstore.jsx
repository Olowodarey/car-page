import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
    statusTab: false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { productId, quantity, price } = action.payload;
            const existingItem = state.items.find(item => item.productId === productId);
            if (existingItem) {
              existingItem.quantity += quantity;
            } else {
              state.items.push({ productId, quantity, price });
            }
          },
        changeQuantity(state, action) {
            const { productId, quantity } = action.payload;
            const indexProductId = state.items.findIndex(item => item.productId === productId);

            if (quantity > 0) {
                state.items[indexProductId].quantity = quantity;
            } else {
                state.items = state.items.filter(item => item.productId !== productId);
            }

            localStorage.setItem("carts", JSON.stringify(state.items)); // Save updated cart to localStorage
        },
        toggleStatusTab(state){
            if(state.statusTab === false){
                state.statusTab = true;
            }else{
                state.statusTab = false;
            }
        },

        removeItem(state, action) {
            const productId = action.payload;
            state.items = state.items.filter(item => item.productId !== productId);

            localStorage.setItem("carts", JSON.stringify(state.items)); // Save updated cart to localStorage
        },

        
    }
    
});

export const selectCartTotal = (state) => {
    return state.cart.items.reduce((total, item) => {

        const price = typeof item.price === 'string' ? parseFloat(item.price.replace('$', '')) : item.price;
        return total + (price * item.quantity);
    }, 0).toFixed(2);
};


export const { addToCart, changeQuantity, toggleStatusTab, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
