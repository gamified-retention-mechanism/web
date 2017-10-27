import React from 'react';
import ReactDOM from 'react-dom';
import TeamLandingPage from './TeamLandingPage';

it('renders without crashing', () => {
  const match = { 
    params : {
      gameID: 'abc123',
      teamName: 'Honeybuckets'
    }
  }

  const div = document.createElement('div')
  ReactDOM.render(<TeamLandingPage match={match}/>, div)
});
