import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addAllContacts: (state, action) => action.payload,
    addNewContact: (state, action) => [...state, action.payload],
    deleteContact: (state, action) =>
      state.filter(item => item.id !== action.payload),
  },
});

export default contactSlice;
