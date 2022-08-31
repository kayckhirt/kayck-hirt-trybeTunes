import React from 'react';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  state = {
    loading: false,
  };

  recoverName = async () => {
    await getUser;
  };

  render() {
    return (
      <header data-testid="header-component" />
    );
  }
}

export default Header;
