import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends React.Component {
  state = {
    nameInput: '',
    isDisabled: true,
    loading: false,
    redirect: false,
  };

  HandleChange = ({ target }) => {
    const minLength = 3;
    const { value } = target;
    this.setState({
      nameInput: value,
    });
    if (value.length < minLength) {
      this.setState({
        isDisabled: true,
      });
    } else {
      this.setState({
        isDisabled: false,
      });
    }
  };

  HandleClick = async () => {
    const { nameInput } = this.state;
    this.setState({ loading: true });
    await createUser({ name: nameInput });
    this.setState({ redirect: true });
  };

  render() {
    const { isDisabled, loading, redirect } = this.state;
    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="inputName">
            TrybeTunes
            <input
              type="text"
              data-testid="login-name-input"
              name="name"
              onChange={ this.HandleChange }
            />
          </label>
          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ isDisabled }
            onClick={ this.HandleClick }
          >
            Entrar
          </button>
          {
            loading && <Loading />
          }

          {
            redirect && <Redirect to="/search" />
          }
        </form>
      </div>
    );
  }
}

export default Login;
