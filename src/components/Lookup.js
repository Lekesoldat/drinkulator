import React from 'react';
import bolaget from '../api/bolaget';
import SearchBar from './SearchBar';
import DrinkList from './DrinkList';

const search = params => bolaget.get('/products', { params });

class Lookup extends React.Component {
  state = {
    results: []
  };

  onSearchSubmit = async term => {
    const response = await search({
      search: term,
      limit: 100
    });

    this.setState({
      results: response.data
    });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <DrinkList results={this.state.results} />
      </div>
    );
  }
}

export default Lookup;
