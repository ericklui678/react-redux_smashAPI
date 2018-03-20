import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEntrants } from '../actions';

class Tournament extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: '',
      groups: [],
    }
    this.renderPhaseGroups = this.renderPhaseGroups.bind(this);
    this.renderPlacements = this.renderPlacements.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // this.setState({
    //   phase: '',
    // });
  }

  renderPlacements() {
    if (!this.props.entrants.length) return;

    const entrants = this.props.entrants.map((entrant) => {
      return (
        <li className='list-group-item' key={entrant.name}>
          {entrant.placement} - {entrant.name}
        </li>
      );

    })

    return (
      <div>
        <hr />
        <h2>Placements</h2>
        <ul className='list-group'>
          {entrants}
        </ul>
      </div>
    );
  }

  onGroupClick(id) {
    this.props.fetchEntrants(id);
  }

  renderPhaseGroups() {
    if (!this.state.groups.length) return;

    const phase_groups = this.state.groups.map(group => {
      return (
        <button
          type='button'
          key={group.id}
          className='col-2 btn btn-outline-danger'
          onClick={() => this.onGroupClick(group.id)}>{group.displayIdentifier}
        </button>
      );
    });

    return (
      <div>
        <hr />
        <h1>{this.state.phase}</h1>
        <div className='row'>
          {phase_groups}
        </div>
      </div>
    );
  }

  filterPhaseGroups(phase) {
    const { groups } = this.props.tournament.entities;
    const brackets = groups.filter(group => group.phaseId === phase.id);
    this.setState({ groups: brackets })
    this.setState({ phase: phase.name })
  }

  renderPhase(id) {
    const { entities } = this.props.tournament;
    const { phase } = entities;

    return phase.filter(phase => phase.eventId === id).map(phase => {
      return (
        <a
          className='dropdown-item'
          key={phase.id}
          onClick={() => this.filterPhaseGroups(phase)}>
          {phase.name}
        </a>
      );
    });
  }

  renderEventNames(events) {
    return events.map((event) => {
      return (
        <li className='list-group-item' key={event.id}>
          <div className='dropdown'>
            <button className="btn btn-outline-danger btn-block dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {event.name}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {this.renderPhase(event.id)}
            </div>
          </div>
        </li>
      );
    });
  }

  renderTournyInfo() {
    if (this.props.tournament.error) return <div>Tournament not found</div>
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
        <h2>Events</h2>
        <ul className='list-group'>
          {this.renderEventNames(entities.event)}
        </ul>
        {this.renderPhaseGroups()}
        {this.renderPlacements()}
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
  return {
    tournament: state.tournament,
    entrants: state.entrants
  };
}

export default connect(mapStateToProps, { fetchEntrants })(Tournament);
