import { createSlice } from '@reduxjs/toolkit';

// Initial state for feedbacks
const initialState = {
  feedbackList: [],
  status: 'idle', // could be 'loading', 'succeeded', 'failed'
};

// Feedback slice with reducers
const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {
    // Action to add feedback to the list
    addFeedback: (state, action) => {
      state.feedbackList.push(action.payload);
    },
    // Action to set feedbacks fetched from the server
    setFeedbacks: (state, action) => {
      state.feedbackList = action.payload;
    },
  },
});

// Export the actions to use in components
export const { addFeedback, setFeedbacks } = feedbackSlice.actions;

// Export the reducer to be used in the store
export default feedbackSlice.reducer;
