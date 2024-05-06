
import React, { Component } from 'react';
import { StyledSearchBox, SearchIcon } from './style';

import { FaSearch } from 'react-icons/fa';

class SearchBox extends Component {
  render() {
    return (
      <div style={{ position: 'relative' }}>
        <StyledSearchBox
          type="text"
          placeholder="Search Redbook"
          onChange={this.props.onChange}
          value={this.props.value}
        />
        <SearchIcon>
          <FaSearch />
        </SearchIcon>
      </div>
    );
  }
}

export default SearchBox;
