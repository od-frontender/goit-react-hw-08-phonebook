import { useState } from "react";
import { useDispatch } from "react-redux";
import { authAction } from "redux/auth";
import s from "./Register.module.css";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "" || name === "") {
      alert("Enter the registration data");
      return;
    }
    dispatch(authAction.userRegister({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1 className={s.title}>Registration page</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          <span className={s.span}>Name</span>
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          <span className={s.span}>Mail</span>
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          <span className={s.span}>Password</span>
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={s.button}>
          Registration
        </button>
      </form>
    </div>
  );
}
