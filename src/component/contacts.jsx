import React from 'react';

const Contacts = ({ contacts, filteredContacts, removeContacts }) => {
  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name
            .split(/\s+/)
            .map(word => word[0].toUpperCase() + word.substring(1))
            .join(' ')}
          : {contact.number}
          <button onClick={() => removeContacts(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
