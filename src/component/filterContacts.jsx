import React from 'react';
import * as styles from './styles.module.css';

const FilterContacts = ({ filtter, changeFilter }) => {
  return (
    <div>
      <p className={styles.text}>Contacts</p>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={changeFilter}
        name="filterContact"
        value={filtter}
      />
    </div>
  );
};
export default FilterContacts;
