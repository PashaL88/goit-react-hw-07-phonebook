import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequest = createAction('contacts/fetch/request');
const fetchContactsSuccess = createAction('contacts/fetch/success');
const fetchContactsError = createAction('contacts/fetch/error');

const addContactRequest = createAction('contacts/add/request');
const addContactSuccess = createAction('contacts/add/success');
const addContactError = createAction('contacts/add/Error');

const deleteContactRequest = createAction('contacts/delete/request');
const deleteContactSuccess = createAction('contacts/delete/success');
const deleteContactError = createAction('contacts/delete/error');

// export const addContact = createAction('contacts/add', data => {
//   const newContact = {
//     ...data,
//     id: nanoid(),
//   };
//   return { payload: newContact };
// });
// export const deleteContact = createAction('contacts/delete');

const actions = {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
};

export default actions;

// import { ADD_CONTACT, DELETE_CONTACT } from './contactsTypes';
// import { nanoid } from 'nanoid';

// const addContact = payload => {
//   return { type: ADD_CONTACT, payload: { ...payload, id: nanoid() } };
// };

// const deleteContact = payload => {
//   return {
//     type: DELETE_CONTACT,
//     payload,
//   };
// };

// const actionCreators = {
//   addContact,
//   deleteContact,
// };

// export default actionCreators;
