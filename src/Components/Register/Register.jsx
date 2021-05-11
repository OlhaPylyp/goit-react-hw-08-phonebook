import { Component } from "react";
import styles from "./Register.module.css";
import { connect } from "react-redux";
import { register } from "../../Redux/auth/operation_auth";
// import { getAllContacts } from "../../Redux/Phone/phone_selector";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
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
    this.props.onRegister(this.state);
    this.reset();
  };
  reset = () => {
    return this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;
    console.log("re-render");
    return (
      <div className={styles.form_container}>
        <form
          className={styles.form}
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <label className={styles.label}>
            <span className={styles.span}>Name</span>
            <input
              className={styles.input}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            Email
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            <span className={styles.span}>Password</span>
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit" className={styles.btn}>
            Login
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = {
  onRegister: register,
};
export default connect(null, mapDispatchToProps)(Register);
