import React from 'react'
import ReactDOM from 'react-dom'
import Add from './Add'

it('renders without crashing', () => {
  const match = {
    params : {

    }
  }

  const div = document.createElement('div')
  ReactDOM.render(<Add match={match}/>, div)
})
