import { createAsyncThunk } from '@reduxjs/toolkit';
import contactSlice from './contactSlice';
import isLoadingSlice from '../isLoadingReducer/isLoadingSlice';
import errorSlice from '../errorReducer/errorSlice';
import * as apiActions from '../../Api/apiActions';

export const getAllContactsOpertation = createAsyncThunk(
  'contacts/getAllOpertation',
  async (usersParams, thunkApi) => {
    thunkApi.dispatch(isLoadingSlice.actions.start());
    apiActions
      .getContacts()
      .then(contacts => {
        thunkApi.dispatch(contactSlice.actions.addAllContacts(contacts));
        thunkApi.dispatch(isLoadingSlice.actions.finish());
      })
      .catch(error => {
        thunkApi.dispatch(errorSlice.actions.addError(error));
        thunkApi.dispatch(isLoadingSlice.actions.finish());
      });
  },
);

export const postNewContactOpertation = createAsyncThunk(
  'contacts/postNewContactOpertation',
  async (newContact, thunkApi) => {
    thunkApi.dispatch(isLoadingSlice.actions.start());
    apiActions
      .addNewContact(newContact)
      .then(data => {
        thunkApi.dispatch(contactSlice.actions.addNewContact(data));
        thunkApi.dispatch(isLoadingSlice.actions.finish());
      })
      .catch(error => {
        thunkApi.dispatch(errorSlice.actions.addError(error));
        thunkApi.dispatch(isLoadingSlice.actions.finish());
      });
  },
);

export const deleteContactOpertation = createAsyncThunk(
  'contacts/deleteContactOpertation',
  async (id, thunkApi) => {
    thunkApi.dispatch(isLoadingSlice.actions.start());
    apiActions
      .deleteContact(id)
      .then(({ status }) => {
        if (status >= 200) {
          thunkApi.dispatch(isLoadingSlice.actions.finish());
          thunkApi.dispatch(contactSlice.actions.deleteContact(id));
        }
      })
      .catch(error => {
        thunkApi.dispatch(errorSlice.actions.addError(error));
        thunkApi.dispatch(isLoadingSlice.actions.finish());
      });
  },
);
