// import { addContact, deleteContact } from './contactsActions';
import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

import actions from './contactsActions';

const items = createReducer([], {
  [actions.fetchContactsSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (store, { payload }) => [...store, payload],
  [actions.deleteContactSuccess]: (store, { payload }) =>
    store.filter(item => item.id !== payload),
  // [addContact]: (store, { payload }) => [...store, payload],
  // [deleteContact]: (store, { payload }) =>
  //   store.filter(item => item.id !== payload),
});

const loading = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
});

const error = createReducer(null, {
  [actions.fetchContactsRequest]: () => null,
  [actions.fetchContactsError]: (_, payload) => payload,
  [actions.addContactRequest]: () => null,
  [actions.addContactError]: (_, payload) => payload,
  [actions.deleteContactRequest]: () => null,
  [actions.deleteContactError]: (_, payload) => payload,
});

const contactsReducer = combineReducers({
  items,
  loading,
  error,
});

export default contactsReducer;

// import { ADD_CONTACT, DELETE_CONTACT } from './contactsTypes';

// const contactsReducer = (store = [], action) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       const newStore = [...store, action.payload];
//       return newStore;
//     case DELETE_CONTACT:
//       return store.filter(item => item.id !== action.payload);
//     default:
//       return store;
//   }
// };

// export default contactsReducer;
