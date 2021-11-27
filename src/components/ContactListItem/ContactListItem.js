import { useDeleteContactMutation } from "redux/contacts/contactSlice";
import s from "./ContactListItem.module.css";

export default function ContactItem({ id, name, number }) {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <li className={s.item}>
      <span className={s.name}>{name}:</span>
      <span className={s.tell}>{number}</span>
      <button
        className={s.button}
        type="button"
        id={id}
        onClick={(e) => deleteContact(id)}
      >
        remove
      </button>
    </li>
  );
}
