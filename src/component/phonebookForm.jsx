import React, { useState } from 'react';
import * as styles from './styles.module.css';

const PhonebookForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');

  const handleNameChange = e => {
    setName(
      e.target.value
        .split(/\s+/)
        .map(word => word.toLowerCase())
        .join(' '),
    );
  };

  const [number, setNumber] = useState('');

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  return (
    <div className={styles.form}>
      <p className={styles.text}>Phonebook</p>
      <form>
        <label>
          <span>Name</span>
          <input
            type="text"
            onChange={handleNameChange}
            name="nameContact"
            value={name}
          />
        </label>
        <label>
          <span>Number</span>
          <input
            type="text"
            onChange={handleNumberChange}
            name="numberContact"
            value={number}
          />
        </label>
        <button
          type="button"
          onClick={() => {
            handleSubmit(name, number);
          }}
        >
          Add contact
        </button>
      </form>
    </div>
  );
};

export default PhonebookForm;
