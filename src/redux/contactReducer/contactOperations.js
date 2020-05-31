import { createAsyncThunk } from '@reduxjs/toolkit';
import * as apiActions from '../../Api/apiActions';

export const getAllContactsOpertation = createAsyncThunk(
  'contacts/getAllContacts',
  async (usersParams, thunkApi) =>
    apiActions
      .getContacts()
      .then(contacts => contacts)
      .catch(error => thunkApi.rejectWithValue(error)),
);

export const postNewContactOpertation = createAsyncThunk(
  'contacts/postNewContact',
  async (newContact, thunkApi) =>
    apiActions
      .addNewContact(newContact)
      .then(data => data)
      .catch(error => thunkApi.rejectWithValue(error)),
);

export const deleteContactOpertation = createAsyncThunk(
  'contacts/deleteContactOpertation',
  async (id, thunkApi) =>
    apiActions
      .deleteContact(id)
      .then(() => id)
      .catch(error => thunkApi.rejectWithValue(error)),
);
