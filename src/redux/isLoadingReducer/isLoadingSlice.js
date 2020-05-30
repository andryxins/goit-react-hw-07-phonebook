import { createSlice } from '@reduxjs/toolkit';

const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState: false,
  reducers: {
    start: (state, action) => true,
    finish: (state, action) => false,
  },
});

export default isLoadingSlice;
