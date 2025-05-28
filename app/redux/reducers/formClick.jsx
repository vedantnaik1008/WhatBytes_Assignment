import { createSlice } from '@reduxjs/toolkit';

const formReducer = createSlice({
    name: 'form',
    initialState: {
        isOpen: false,
        comment: [{ productId: 0, id: 0, comments: '', ratings: 0 }]
    },
    reducers: {
        openForm: (state) => {
            state.isOpen = true;
        },
        closeForm: (state) => {
            state.isOpen = false;
        },
        comment: (state, action) => {
            state.comment.push(action.payload);
        },
        removeReview: (state, action) => {
            state.comment = state.comment.filter(
                (item) => item.id !== action.payload
            );
        }
    }
});

export const { openForm, closeForm, comment, removeReview } =
    formReducer.actions;
export default formReducer.reducer;
