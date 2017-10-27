export const startGame = (event_id) => {
  const apiEndpoint = `${window.config.api_base}/prod/event/${event_id}/start`
  const opts = {
    method: 'post',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(module)
  }

  return fetch(apiEndpoint, opts)
    .then(response => response.json())
    .then(json => {
      if(json.error){
        json.api_error = `Failed to start the game: ${json.error}`
        return json
      }

      json.api_success = 'Game on!!!'
      return json
    })
    .catch(err => {
      module.api_error = `An error occurred while trying to start the game: ${err}`
      console.log(`error:${module.api_error}\nuri: ${apiEndpoint}\nopts: ${JSON.stringify(opts)}`)
      return module
    })
}
