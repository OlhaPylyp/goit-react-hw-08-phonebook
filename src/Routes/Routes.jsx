import { lazy } from "react";
const Contacts = lazy(() =>
  import("../Components/PhoneBook/FormPhonebook" /* webpackChunkName: "contacts" */)
);
const Login = lazy(() =>
  import("../Components/Login/Login" /* webpackChunkName: "Login" */)
);
const Register = lazy(() =>
  import(
    "../Components/Register/Register" /* webpackChunkName: "Register" */
  )
);

const routes = [
    {
      path: "/contacts",
      label: "Contacts",
      component: Contacts,
      exact: true,
    },
    {
      path: "/login",
      label: "Login",
      component: Login,
      exact: true,
    },
    {
      path: "/register",
      label: "Register",
      component: Register,
    },
    
  ];
  export default routes;
