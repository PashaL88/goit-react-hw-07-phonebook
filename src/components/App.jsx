import { useState, useEffect, useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import {
  getContacts,
  getError,
  getLoading,
} from 'redux/contacts/contactsSelector';
import * as operations from 'redux/contacts/contacts-operations';

const App = () => {
  const contacts = useSelector(getContacts, shallowEqual);
  const loading = useSelector(getLoading, shallowEqual);
  const error = useSelector(getError, shallowEqual);

  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(operations.contactsFetch());
  }, [dispatch]);

  const addContacts = data => {
    dispatch(operations.addContact(data));
  };

  const deleteContact = id => {
    dispatch(operations.deleteContact(id));
  };

  const changeFilter = useCallback(({ target }) => setFilter(target.value), []);

  const getFilteredContacts = useCallback(() => {
    const filterText = filter.toLowerCase();
    const result = contacts.filter(item => {
      const name = item.name.toLowerCase().includes(filterText);
      return name;
    });
    return result;
  }, [contacts, filter]);

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} changeFilter={changeFilter} />
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {Boolean(contacts.length) && (
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      )}
    </div>
  );
};

export default App;

// const firstRender = useRef(true);

// // useEffect(() => {
// //   if (firstRender.current) {
// //     const data = localStorage.getItem('contacts');
// //     const contacts = JSON.parse(data);
// //     if (contacts?.length) {
// //       setContacts(contacts);
// //     }
// //     firstRender.current = false;
// //   }
// // }, []);

// // useEffect(() => {
// //   if (!firstRender.current) {
// //     localStorage.setItem('contacts', JSON.stringify(contacts));
// //   }
// // }, [contacts]);

// const addContact = data => {
//   const { name } = data;
//   const dublicate = contacts.find(contact => contact.name === name);
//   if (dublicate) {
//     alert(`${name} is already in contacts`);
//     return;
//   }
//   setContacts(prevContacts => {
//     const { name, number } = data;
//     const newContact = {
//       name,
//       number,
//       id: nanoid(),
//     };
//     return [...prevContacts, newContact];
//   });
// };
