import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { ListItem } from 'components/ListItem/ListItem';
import { useEffect } from 'react';
import { getContacts } from 'store/contacts/selectors';
import { getContactsList } from 'api/operation';

export const ContactList = () => {
  const { contacts, isLoading, error } = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsList());
  }, [dispatch]);

  const filterSelector = state => state.filter.searchQuery;
  const filter = useSelector(filterSelector);

  const filteredData = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      <ul className={css.contactList}>
        {filteredData.map(contact => (
          <ListItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
};
