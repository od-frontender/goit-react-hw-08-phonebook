import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from "redux/contacts/contactSlice";
import s from "./Form.module.css";

export default function Form() {
  const { data } = useFetchContactsQuery();
  const [createContact, { isLoading }] = useCreateContactMutation();

  const onSubmit = (e) => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;
    if (data.find((el) => el.name.toLowerCase() === name.toLowerCase())) {
      alert(`Contact ${name} is already in your contacts!`);
      return;
    } else {
      createContact({ name, number });
    }
    e.currentTarget.reset();
  };

  return (
    <form id="form" onSubmit={onSubmit} className={s.form} autoComplete="off">
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          className={s.input}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          className={s.input}
          required
        />
      </label>
      <button type="submit" className={s.button} disabled={isLoading}>
        Add contact
      </button>
    </form>
  );
}
