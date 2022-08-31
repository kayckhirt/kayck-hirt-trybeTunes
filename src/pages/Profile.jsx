import React from 'react';
import Header from '../components/Header';

class profile extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div data-testid="page-profile" />
      </div>
    );
  }
}

export default profile;
