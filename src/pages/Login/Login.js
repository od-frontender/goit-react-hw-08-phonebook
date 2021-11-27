import { useState } from "react";
import { useDispatch } from "react-redux";
import { authAction } from "redux/auth";
import s from "./Login.module.css";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    if (email === "" || password === "") {
      alert("Please enter your email and password");
      return;
    }
    dispatch(authAction.userLogin({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h1 className={s.title}>Login page</h1>
      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
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
          Login
        </button>
      </form>
    </>
  );
}
