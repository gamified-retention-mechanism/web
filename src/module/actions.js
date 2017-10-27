import fetch from 'isomorphic-fetch'

export const listModules = () => {
  const apiEndpoint = `${window.config.api_base}/prod/modules`
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
        json.api_error = `Failed to list modules: ${json.error}`
        return json
      }

      return json
    })
    .catch(err => {
      module.api_error = `An error occurred while trying to list modules: ${err}`
      console.log(`error:${module.api_error}\nuri: ${apiEndpoint}\nopts: ${JSON.stringify(opts)}`)
      return module
    })
}


export const saveModule = (module) => {
  const apiEndpoint = `${window.config.api_base}/prod/modules`
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
        json.api_error = `Failed to save your module: ${json.error}`
        return json
      }

      json.api_success = 'Successfully saved your module'
      return json
    })
    .catch(err => {
      module.api_error = `An error occurred while trying to save your module: ${err}`
      console.log(`error:${module.api_error}\nuri: ${apiEndpoint}\nopts: ${JSON.stringify(opts)}`)
      return module
    })
}
