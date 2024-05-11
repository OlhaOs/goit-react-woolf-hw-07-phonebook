import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://663f1c66e3a7c3218a4c1b26.mockapi.io/api';

export const getContactsList = createAsyncThunk(
  'getContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      console.log('respone', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContact);
      console.log('respone add', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
   
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
