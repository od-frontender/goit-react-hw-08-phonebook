import React from "react";
import { useFetchContactsQuery } from "redux/contacts/contactSlice";
import { useSelector } from "react-redux";
import ContactItem from "../ContactListItem";
import Loader from "components/Loader";
import s from "./ContactList.module.css";

export default function ContactList() {
  let filteredContacts;
  const { data, isFetching } = useFetchContactsQuery();

  const filter = useSelector((state) => state.contacts.filter.toLowerCase());

  if (data) {
    filteredContacts = data.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  }
  return (
    <>
      {isFetching && <Loader />}
      {filteredContacts && (
        <ul className={s.list}>
          {filteredContacts.map((contact) => (
            <ContactItem key={contact.id} {...contact} />
          ))}
        </ul>
      )}
    </>
  );
}
