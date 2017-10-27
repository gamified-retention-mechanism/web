import React from 'react'
import ReactDOM from 'react-dom'
import GameLandingPage from './GameLandingPage'

it('renders without crashing', () => {
  const match = {
    params : {
      gameID: 'abc123',
    }
  }

  const div = document.createElement('div')
  ReactDOM.render(<GameLandingPage match={match}/>, div)
})
