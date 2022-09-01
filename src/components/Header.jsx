import React from 'react';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

class Header extends React.Component {
  state = {
    loading: false,
    name: '',
  };

  componentDidMount() {
    this.recoverName();
    this.setState({
      loading: true,
    });
  }

  recoverName = async () => {
    this.setState({
      loading: true,
    });
    const name = await getUser();
    this.setState({
      name,
    });
    this.setState({
      loading: false,
    });
  };

  render() {
    const { name, loading } = this.state;
    return (
      <header data-testid="header-component">
        <div data-testid="header-user-name">
          Eai Dj,
          {
            ' '
          }
          { name.name }
          {
            loading && <Loading />
          }
        </div>
      </header>
    );
  }
}

export default Header;
