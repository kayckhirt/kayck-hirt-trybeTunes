import React from 'react';
import Header from '../components/Header';

class search extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div data-testid="page-search">
          Você está no Search
        </div>
      </div>
    );
  }
}

export default search;
