import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => {
  const elements = contacts.map(({ id, name, phone }) => (
    <li key={id}>
      {name}: {phone}{' '}
      <button type="button" onClick={() => deleteContact(id)}>
        delete
      </button>
    </li>
  ));
  return <ul>{elements}</ul>;
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func,
};
