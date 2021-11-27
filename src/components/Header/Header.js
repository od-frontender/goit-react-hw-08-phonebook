import { useSelector } from "react-redux";
import UserMenu from "../UserMenu";
import Navigation from "../Navigation";
import AuthNav from "../AuthNav";
import { authSelectors } from "redux/auth";
import s from "./Header.module.css";

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
