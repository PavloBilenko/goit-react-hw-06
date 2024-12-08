import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from '../../redux/contactsSlice';
import s from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ id: Date.now().toString(), name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div></div>
      <label className={s.formGroup}>
        Name
        <input
          className={s.input}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label className={s.formGroup}>
        Number
        <input
          className={s.input}
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </label>
      <button className={s.button} type="submit">
        Add Contact
      </button>
    </form>
  );
};
