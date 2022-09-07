import React from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  state = {
    dadosAlbum: [],
    dados: {},
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const musicas = await getMusics(id);
    const filtra = musicas.filter((musica) => musica.trackName);
    this.setState({
      dadosAlbum: filtra,
      dados: musicas[0],
    });
  }

  render() {
    const { dadosAlbum, dados } = this.state;
    return (
      <div>
        <div data-testid="page-album" />
        <ul>
          <li data-testid="artist-name">
            { dados.artistName}
          </li>
          <li data-testid="album-name">
            {dados.collectionName}
          </li>
        </ul>
        {
          dadosAlbum.map((e) => (
            <MusicCard
              key={ e.trackName }
              trackName={ e.trackName }
              previewUrl={ e.previewUrl }
            />
          ))
        }
      </div>
    );
  }
}

Album.propTypes = {
  id: PropTypes.string.isRequired,
}.isRequired;

export default Album;
