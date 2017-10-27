import fetch from 'isomorphic-fetch'

export const listEvents = () => {
  const apiEndpoint = `${window.config.api_base}/prod/event`
  const opts = {
    method: 'get',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    }
  }

  return fetch(apiEndpoint, opts)
    .then(response => response.json())
    .then(json => {
      if(json.error){
        json.api_error = `Failed to list events: ${json.error}`
        return json
      }

      return json
    })
    .catch(err => {
      const event = {}
      event.api_error = `An error occurred while trying to list events: ${err}`
      console.log(`error:${event.api_error}\nuri: ${apiEndpoint}\nopts: ${JSON.stringify(opts)}`)
      return event
    })
}


export const saveEvent = (event) => {
  const apiEndpoint = `${window.config.api_base}/prod/event`
  const opts = {
    method: 'post',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event)
  }

  return fetch(apiEndpoint, opts)
    .then(response => response.json())
    .then(json => {
      if(json.error){
        json.api_error = `Failed to save your event: ${json.error}`
        return json
      }

      json.api_success = 'Successfully saved your event'
      return json
    })
    .catch(err => {
      event.api_error = `An error occurred while trying to save your event: ${err}`
      console.log(`error:${event.api_error}\nuri: ${apiEndpoint}\nopts: ${JSON.stringify(opts)}`)
      return event
    })
}

export const updateEvent = (event) => {
  const apiEndpoint = `${window.config.api_base}/prod/event/${event.eventid}`
  const opts = {
    method: 'put',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event)
  }

  return fetch(apiEndpoint, opts)
    .then(response => response.json())
    .then(json => {
      if(json.error){
        json.api_error = `Failed to update your event: ${json.error}`
        return json
      }

      json.api_success = 'Successfully updated your event'
      return json
    })
    .catch(err => {
      event.api_error = `An error occurred while trying to update your event: ${err}`
      console.log(`error:${event.api_error}\nuri: ${apiEndpoint}\nopts: ${JSON.stringify(opts)}`)
      return event
    })
}
