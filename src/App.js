import { Component } from "react";
import "./App.css";
import styles from "./Routes/Route.module.css"
import LinearProgress from '@material-ui/core/LinearProgress';
import FormPhonebook from "./Components/PhoneBook";
import ContactItem from "./Components/ContactItem";
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import Filter from "./Components/Filter";
import Section from "./Components/Section";
import { connect } from "react-redux";
import {getContact}  from "./Redux/Phone/operationApi"
import {getLoading} from "./Redux/Phone/phone_selector"
import { lazy, Suspense } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import routes from "./Routes/Routes";

class App extends Component {
  // function App () 
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
  return (
    <div>
      <Section title="Phonebook">
      {this.props.isLoading &&  <LinearProgress color="secondary" />}
        {/* <FormPhonebook /> */}
        <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            exact
            to="/Contacts"
            className={styles.NavLink}
            activeClassName={styles.NavLinkActive}
          >
            Contacts
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to="/Login"
            className={styles.NavLink}
            activeClassName={styles.NavLinkActive}
          >
            Login
          </NavLink>
          </li>
          <li className={styles.item}>
          <NavLink
            to="/Register"
            className={styles.NavLink}
            activeClassName={styles.NavLinkActive}
          >
            Register
          </NavLink>
        </li>
      </ul>
    
      
      <Suspense fallback={<p>Is loading....</p>}>
        <Switch>
          {routes.map(({ path, exact, component }) => (
            <Route key={path} exact={exact} path={path} component={component} />
          ))}
        </Switch>
      </Suspense> 
     
      </Section>
      <Section title="Contacts list">
        <Filter />  
         {/* <Register/>
         <Login/> */}
        <ContactItem />{" "}
      </Section>
      {/* <div className={styles.container}> */}
      {/* <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            exact
            to="/Contacts"
            className={styles.NavLink}
            activeClassName={styles.NavLinkActive}
          >
            Contacts
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to="/Login"
            className={styles.NavLink}
            activeClassName={styles.NavLinkActive}
          >
            Login
          </NavLink>
          </li>
          <li className={styles.item}>
          <NavLink
            to="/Register"
            className={styles.NavLink}
            activeClassName={styles.NavLinkActive}
          >
            Register
          </NavLink>
        </li>
      </ul>
    
      
      <Suspense fallback={<p>Is loading....</p>}>
        <Switch>
          {routes.map(({ path, exact, component }) => (
            <Route key={path} exact={exact} path={path} component={component} />
          ))}
        </Switch>
      </Suspense>  */}
       {/* </div> */}
    </div>
  );
}}


const mapStateToProps = state => ({
  isLoading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(getContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
