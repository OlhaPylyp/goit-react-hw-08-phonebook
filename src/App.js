import { Component } from "react";
import "./App.css";
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
        <FormPhonebook />
     
      </Section>
      <Section title="Contacts list">
        <Filter />
        <ContactItem />{" "}
      </Section>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            exact
            to="/"
            // className={styles.NavLink}
            // activeClassName={styles.NavLinkActive}
          >
          Contacts
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to="/MoviesPage"
            className={styles.NavLink}
            activeClassName={styles.NavLinkActive}
          >
            Login
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<p>Is loading....</p>}>
        <Switch>
         <Route exact path="/contacts" component ={ContactItem}/>
         <Route  path="/login" component ={Login}/>
         <Route  path="/register" component ={Register}/>
        </Switch>
      </Suspense>
      
      
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
