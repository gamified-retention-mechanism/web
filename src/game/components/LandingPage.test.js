import React from 'react'
import ReactDOM from 'react-dom'
import LandingPage from './LandingPage'

it('renders without crashing', () => {
  const match = {
    params : {
      gameID: 'abc123',
    }
  }

  const div = document.createElement('div')
  ReactDOM.render(<LandingPage match={match}/>, div)
})
