import React, { Component } from 'react';
import Search from './search';
import Tournament from './tournament';

export default class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <Tournament />
      </div>
    );
  }
}
