import React from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';

class MusicCard extends React.Component {
  state = {
    loading: false,
    check: false,
  };

  HandleClick = async (event) => {
    this.setState({ loading: true });
    const { value } = this.props;
    await addSong(value);
    if (event.target.checked === true) {
      this.setState({ check: true });
    } else {
      this.setState({ check: false });
    }
    this.setState({ loading: false });
  };

  render() {
    const { loading, check } = this.state;
    const { trackName, previewUrl, trackId } = this.props;
    console.log(trackId);
    return (
      <div>
        {
          loading ? <Loading /> : (
            <>
              <p>{ trackName }</p>
              <audio data-testid="audio-component" src={ previewUrl } controls>
                <track kind="captions" />
                O seu navegador não suporta o elemento
                {' '}
                <code>
                  audio
                </code>
                .
              </audio>
              <label
                htmlFor={ trackId }
              >
                Favorita
                <input
                  type="checkbox"
                  name="Favorita"
                  data-testid={ `checkbox-music-${trackId}` }
                  onChange={ this.HandleClick }
                  checked={ check }
                />
              </label>
            </>
          )
        }
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
}.isRequired;

export default MusicCard;
