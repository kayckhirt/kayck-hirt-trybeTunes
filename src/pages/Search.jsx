import React from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';

class search extends React.Component {
  state = {
    isDisabled: true,
    artist: '',
    loading: false,
    artista: '',
    aguarde: [],
  };

  HandleChange = ({ target }) => {
    const minLength = 2;
    const { value } = target;
    if (value.length < minLength) {
      this.setState({
        isDisabled: true,
        artist: value,
        artista: value,
      });
    } else {
      this.setState({
        isDisabled: false,
        artist: value,
        artista: value,
      });
    }
  };

  HandleClick = async () => {
    this.setState({
      artist: '',
      loading: true,
    });
    const { artist } = this.state;
    this.setState({
      loading: false,
      aguarde: await searchAlbumsAPI(artist),
    });
  };

  render() {
    const { isDisabled, artist, loading, artista, aguarde } = this.state;
    return (
      <div>
        <div data-testid="page-search">
          <form>
            <input
              type="text"
              data-testid="search-artist-input"
              onChange={ this.HandleChange }
              value={ artist }
            />
            <button
              type="button"
              data-testid="search-artist-button"
              disabled={ isDisabled }
              onClick={ this.HandleClick }
            >
              Pesquisar
            </button>

            {
              loading && <Loading />
            }
          </form>
        </div>
        {
          `Resultado de álbuns de: ${artista}`
        }
        {
          (aguarde.length < 1) ? <h3>Nenhum álbum foi encontrado</h3>
            : aguarde.map((element) => (
              <>
                <Link
                  to={ `/album/${element.collectionId}` }
                  data-testid={ `link-to-album-${element.collectionId}` }
                  key={ element.collectionId }
                />
                <p>{ element.collectionName }</p>
                <img src={ element.artworkUrl100 } alt={ element.collectionName } />
              </>
            ))
        }
      </div>
    );
  }
}

export default search;
