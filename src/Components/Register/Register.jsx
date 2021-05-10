import { Component } from "react";
import styles from "./FormPhonebook.module.css";
import { connect } from "react-redux";
import { register } from "../../Redux/auth/operation_auth";
import {getAllContacts} from "../../Redux/Phone/phone_selector";
class Register extends Component {
  state = {
    name: "",
    email: "",
    password:'',
  };


  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    // const sameName = this.props.items.some(
    //   (item) => item.name === this.state.name
    // );
    // if (sameName) {
    //   window.alert(
    //     `LocalHost:3000 says ${this.state.name} is already in contact`
    //   );
    //   this.reset();
    //   return;
    // }
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    return this.setState({ name: "", email: "",password:"" });
  };

  render() {
    console.log("re-render")
    return (
      <div className={styles.form_container}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.label} htmlFor={this.nameId}>
            Name
            <input
              className={styles.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameId}
            />
          </label>
          <label className={styles.label}>
            <span className={styles.span}>Email</span>
            <input
              className={styles.input}
              type="email"
              name="email"
            //   pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            //   title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              required
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={styles.btn}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = {

      onSubmit: 
 
  };
  export default connect(null, mapDispatchToProps)(Register);
  
