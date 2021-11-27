import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authAction } from "redux/auth";
import s from "./UserMenu.module.css";
import user from "../../images/user.png";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={s.container}>
      <img src={user} alt="user" className={s.user} />
      <span className={s.name}>Hello, {name}</span>
      <button
        type="button"
        className={s.button}
        onClick={() => dispatch(authAction.userLogOut())}
      >
        Logout
      </button>
    </div>
  );
}
