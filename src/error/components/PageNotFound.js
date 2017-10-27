import React, { Component } from 'react'

class PageNotFound extends Component {
  render() {
    return (
      <div>
        <h2>Whoops! Page not found</h2>
        <br />
        <p className="text-muted">
          This page cannot found or is missing.
        </p>
      </div>
    )
  }
}

export default PageNotFound
