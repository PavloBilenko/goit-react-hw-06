import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import s from './Contact.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={s.contact}>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button className={s.button} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};
