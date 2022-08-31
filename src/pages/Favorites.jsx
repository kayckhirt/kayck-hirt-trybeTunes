import React from 'react';
import Header from '../components/Header';

class favorites extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div data-testid="page-favorites" />
      </div>
    );
  }
}

export default favorites;
