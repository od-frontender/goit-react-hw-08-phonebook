import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelectors } from "redux/auth";

export default function PublicRoute({
  component: Component,
  restricted = false,
  redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <div>
      {shouldRedirect ? <Navigate to={redirectTo} replace /> : <Component />}
    </div>
  );
}
