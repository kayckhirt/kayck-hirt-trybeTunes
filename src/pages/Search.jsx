import React from 'react';

class search extends React.Component {
  state = {
    isDisabled: true,
  };

  HandleChange = ({ target }) => {
    const minLength = 2;
    const { value } = target;
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

  render() {
    const { isDisabled } = this.state;
    return (
      <div>
        <div data-testid="page-search">
          <form>
            <input
              type="text"
              data-testid="search-artist-input"
              onChange={ this.HandleChange }
            />
            <button
              type="button"
              data-testid="search-artist-button"
              disabled={ isDisabled }
            >
              Pesquisar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default search;
