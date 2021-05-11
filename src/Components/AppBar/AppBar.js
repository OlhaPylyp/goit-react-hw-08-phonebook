import { connect } from 'react-redux';
import AuthNav from './authNav';
import UserMenu from './UserMenu';
import { getIsAuthenticated } from '../../Redux/auth/auth_selector';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

const AppBar = ({ isLoginOn }) => (
  <header style={styles.header}>
  
    {isLoginOn ? <UserMenu/>: <AuthNav/>}
  </header>
);

const mapStateToProps = state => ({
  isLoginOn: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);