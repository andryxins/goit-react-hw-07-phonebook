import { createSelector } from 'reselect';
import { getFilterQuery } from '../filterReducer/filterSelectors';

export const getContacts = state => state.contacts;

export const getFilteredContacts = createSelector(
  getContacts,
  getFilterQuery,
  (contacts, filter) =>
    contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);

export const getOnDeleteContact = (reducer, id) =>
  reducer.actions.deleteContact(id);

export const getOnAddContact = (reducer, newContact) =>
  reducer.actions.addContacts(newContact);
