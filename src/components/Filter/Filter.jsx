import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getSeacrhQuery } from 'store/filter/selectors';
import { findContact } from 'store/filter/slice';

export const Filter = () => {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector(getSeacrhQuery);

  const handleFilterChange = e => {
    dispatch(findContact(e.target.value));
  };
  return (
    <>
      <div className={css.searchField}>
        <label htmlFor="filter">Find contacts by name</label>
        <input
          name="filter"
          value={searchQuery}
          onChange={handleFilterChange}
          className={css.filterInput}
        />
      </div>
    </>
  );
};
