import { createSlice } from '@reduxjs/toolkit';

const errorSlice = createSlice({
  name: 'errors',
  initialState: null,
  reducers: {
    addError: (state, action) => action.payload,
    deleteError: (state, action) => null,
  },
});

export default errorSlice;
