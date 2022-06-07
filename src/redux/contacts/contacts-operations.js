import actions from './contactsActions';
import * as API from '../../shared/services/contacts';

export const contactsFetch = () => {
  const func = async dispatch => {
    dispatch(actions.fetchContactsRequest());
    try {
      const data = await API.getContacts();
      dispatch(actions.fetchContactsSuccess(data));
    } catch (error) {
      dispatch(actions.fetchContactsError(error));
    }
  };
  return func;
};

export const addContact = data => {
  const func = async (dispatch, getState) => {
    const contacts = getState();
    const dublicate = contacts.items.find(item => item.name === data.name);
    if (dublicate) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    dispatch(actions.addContactRequest());
    try {
      const newContact = await API.addContact();
      dispatch(actions.addContactSuccess(newContact));
    } catch (error) {
      dispatch(actions.addContactError(error));
    }
  };
  return func;
};

export const deleteContact = id => {
  const func = async dispatch => {
    dispatch(actions.deleteContactRequest());
    try {
      const { id: deleteId } = await API.deleteContact(id);
      dispatch(actions.deleteContactSuccess(deleteId));
    } catch (error) {
      dispatch(actions.deleteContactError(error));
    }
  };
  return func;
};
