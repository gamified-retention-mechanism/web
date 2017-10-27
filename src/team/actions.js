import fetch from 'isomorphic-fetch'

export const saveTeam = (team) => {
  const apiEndpoint = 'https://reqres.in/api/users/'
  const opts = {
    method: 'post',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(team)
  }

  return fetch(apiEndpoint, opts)
    .then(response => response.json())
    .then(json => {
      if(json.error){
        json.api_error = `Failed to save your team: ${json.error}`
        return json
      }

      json.api_success = 'Successfully saved your team'
      return json
    })
    .catch(err => {
      team.api_error = `An error occurred while trying to save your team: ${err}`
      console.log(`error:${team.api_error}\nuri: ${apiEndpoint}\nopts: ${JSON.stringify(opts)}`)
      return team
    })
}

export const updateTeam = (team) => {
  const apiEndpoint = 'https://reqres.in/api/users/'
  const opts = {
    method: 'put',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(team)
  }

  return fetch(apiEndpoint, opts)
    .then(response => response.json())
    .then(json => {
      if(json.error){
        json.api_error = `Failed to update your team: ${json.error}`
        return json
      }

      json.api_success = 'Successfully updated your team'
      return json
    })
    .catch(err => {
      team.api_error = `An error occurred while trying to update your team: ${err}`
      console.log(`error:${team.api_error}\nuri: ${apiEndpoint}\nopts: ${JSON.stringify(opts)}`)
      return team
    })
}
