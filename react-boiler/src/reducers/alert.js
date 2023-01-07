/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const alertSlice = createSlice({
  name: 'alerts',
  initialState: {
    message: 'something went wrong',
    alertStatus: false,
    alertSeverity: 'error',
  },
  reducers: {
    showAlert: (state, action) => {
      const { alertSeverity, message } = action.payload;
      state.alertStatus = true;
      state.alertSeverity = alertSeverity;
      state.message = message;
    },
    closeAlert: (state) => {
      state.alertStatus = false;
      state.message = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  showAlert, closeAlert,
} = alertSlice.actions;
export default alertSlice.reducer;
