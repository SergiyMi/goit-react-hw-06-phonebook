import React, { useState } from 'react';
import shortid from 'shortid';

import * as styles from './App.module.css';
import PhonebookForm from './component/phonebookForm';
import FilterContacts from './component/filterContacts';
import Contacts from './component/contacts';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const [filtter, setFilter] = useState('');

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.includes(filtter),
  );

  const handleSubmit = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (contacts.length < 1) {
      setContacts([...contacts, contact]);
      return;
    }

    const nameArray = contacts.map(cont => cont.name);

    if (nameArray.includes(name)) {
      alert(`${name} is already in contacts`);
      return undefined;
    }
    setContacts(prevContacts => [...contacts, contact]);
    return undefined;
  };

  const removeContacts = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId),
    );
  };

  return (
    <div className={styles.app}>
      <PhonebookForm handleSubmit={handleSubmit} />
      <FilterContacts filtter={filtter} changeFilter={changeFilter} />
      <Contacts
        contacts={contacts}
        filteredContacts={filteredContacts}
        removeContacts={removeContacts}
      />
    </div>
  );
};

export default App;
