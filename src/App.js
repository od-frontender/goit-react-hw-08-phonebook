import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Loader from "components/Loader";
import { authAction, authSelectors } from "redux/auth";
import PrivateRoute from "./route/PrivateRoute";
import PublicRoute from "./route/PublicRoute";
import Contacts from "./pages/Contacts/Contacts";
import Container from "components/Container";
import Error from "components/Error";

const Register = lazy(() => import("./pages/Register/Register"));
const Login = lazy(() => import("./pages/Login/Login"));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authAction.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<PublicRoute component={Home} />} />
              <Route
                path="/register"
                element={<PublicRoute component={Register} restricted />}
              />
              <Route
                path="/login"
                element={
                  <PublicRoute
                    component={Login}
                    redirectTo="/contacts"
                    restricted
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute component={Contacts} redirectTo="/login" />
                }
              />
              <Route path="*" element={<PublicRoute component={Error} />} />
            </Routes>
          </Suspense>
        </>
      )}
    </Container>
  );
}
