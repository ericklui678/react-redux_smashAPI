import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTournament, resetEntrants } from '../actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  onTextChange(e) {
    this.setState({ text: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchTournament(this.state.text);
    this.props.resetEntrants();
    this.setState({ text: '' });

  }

  render() {
    return (
      <div>
        <h1>Find a tournament</h1>
        <form onSubmit={this.onFormSubmit.bind(this)} className='input-group'>
          <input
            value={this.state.text}
            className='form-control'
            placeholder='Enter tournament slug'
            onChange={this.onTextChange.bind(this)}
          />
          <button
            type='submit'
            className='btn btn-primary'>Search
          </button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTournament, resetEntrants }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);
