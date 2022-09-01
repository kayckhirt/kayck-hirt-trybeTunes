import React from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';

class search extends React.Component {
  state = {
    isDisabled: true,
    artista: '',
    loading: false,
  };

  HandleChange = ({ target }) => {
    const minLength = 2;
    const { value } = target;
    if (value.length < minLength) {
      this.setState({
        isDisabled: true,
        artista: value,
      });
    } else {
      this.setState({
        isDisabled: false,
        artista: value,
      });
    }
  };

  HandleClick = async () => {
    this.setState({
      artista: '',
      loading: true,
    });
    const { artista } = this.state;
    await searchAlbumsAPI(artista);
    this.setState({
      loading: false,
    });
  };

  render() {
    const { isDisabled, artista, loading } = this.state;
    return (
      <div>
        <div data-testid="page-search">
          <form>
            <input
              type="text"
              data-testid="search-artist-input"
              onChange={ this.HandleChange }
              value={ artista }
            />
            <button
              type="button"
              data-testid="search-artist-button"
              disabled={ isDisabled }
              onClick={ this.HandleClick }
            >
              Pesquisar
            </button>
            Resultado de álbuns de:
            <artista />
            {
              loading && <Loading />
            }
          </form>
        </div>
      </div>
    );
  }
}

export default search;
