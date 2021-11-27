import PropTypes from "prop-types";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import contactsActions from "redux/contacts/contactsActions";
import s from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const stateFilter = useSelector((state) => state.contacts.filter);
  const onChangeFilter = (e) =>
    dispatch(contactsActions.changeFilter(e.target.value));

  return (
    <label className={s.label}>
      Find contacts by name:
      <input
        type="text"
        name="Find contact"
        onChange={onChangeFilter}
        value={stateFilter}
        className={s.input}
        autoComplete="off"
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};
