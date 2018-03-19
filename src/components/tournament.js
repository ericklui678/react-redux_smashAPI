import React, { Component } from 'react';
import { connect } from 'react-redux';

class Tournament extends Component {
  renderEventNames(events) {
    return events.map((event) => {
      return <li className='list-group-item' key={event.id}>
        {event.name}
      </li>
    });
  }

  renderTournyInfo() {
    if (!this.props.tournament.entities) return;

    const { entities } = this.props.tournament;
    const { tournament } = entities;
    const icon = tournament.images[tournament.images.length - 1].url;

    return (
      <div>
        <div className='media mt-3'>
          <div className='w-25 mr-3'>
            <img className='img-thumbnail' src={icon} alt={tournament.name}/>
          </div>
          <div className='media-body'>
            <h2>{tournament.name} - {tournament.regionDisplayName}</h2>
            <p>{tournament.venueName} - {tournament.venueAddress}</p>
          </div>
        </div>
        <hr></hr>
        <ul className='list-group'>
          {this.renderEventNames(entities.event)}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderTournyInfo()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tournament: state.tournament };
}

export default connect(mapStateToProps)(Tournament);
