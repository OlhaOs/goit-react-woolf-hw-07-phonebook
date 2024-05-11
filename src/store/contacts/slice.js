import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContactsList } from 'api/operation';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(getContactsList.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getContactsList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
      })
      .addCase(getContactsList.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload
        );
      });
  },
});


export const contactsReducer = contactsSlice.reducer;
