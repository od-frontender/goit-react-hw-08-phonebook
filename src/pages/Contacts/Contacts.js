import { lazy } from "react";
import s from "./Contacts.module.css";

const Form = lazy(() => import("../../components/Form"));

const Filter = lazy(() => import("../../components/Filter"));

const ContactList = lazy(() => import("../../components/ContactList"));

export default function Contacts() {
  return (
    <>
      <h1 className={s.title}>Phonebook</h1>
      <Form />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
