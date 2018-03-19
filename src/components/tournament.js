import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTournament } from '../actions';

class Tournament extends Component {
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
    console.log('call action here');
    this.props.fetchTournament('genesis-3');
    this.setState({ text: '' });
  }

  render() {
    console.log(this.state.text);
    return (
      <div>
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
  return bindActionCreators({ fetchTournament }, dispatch);
}

export default connect(null, mapDispatchToProps)(Tournament);
