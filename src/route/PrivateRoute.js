import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelectors } from "redux/auth";

export default function PrivateRoute({
  component: Component,
  redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      {isLoggedIn ? <Component /> : <Navigate to={redirectTo} replace />}
    </div>
  );
}
