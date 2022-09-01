import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/search" data-testid="link-to-search"> Search </Link>
        |
        <Link to="/favorites" data-testid="link-to-favorites"> Favorites </Link>
        |
        <Link to="/profile" data-testid="link-to-profile"> Profile </Link>
        <div data-testid="header-user-name">
          TryTunes
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
