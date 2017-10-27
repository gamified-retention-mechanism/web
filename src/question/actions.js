import fetch from 'isomorphic-fetch'

export const listQuestions = () => {
  const apiEndpoint = `${window.config.api_base}/prod/questions`
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
        json.api_error = `Failed to list questions: ${json.error}`
        return json
      }

      return json
    })
    .catch(err => {
      const question = {}
      question.api_error = `An error occurred while trying to list questions: ${err}`
      console.log(`error:${question.api_error}\nuri: ${apiEndpoint}\nopts: ${JSON.stringify(opts)}`)
      return question
    })
}


export const saveQuestion = (question) => {
  const apiEndpoint = `${window.config.api_base}/prod/questions`
  const opts = {
    method: 'post',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(question)
  }

  return fetch(apiEndpoint, opts)
    .then(response => response.json())
    .then(json => {
      if(json.error){
        json.api_error = `Failed to save your question: ${json.error}`
        return json
      }

      json.api_success = 'Successfully saved your question'
      return json
    })
    .catch(err => {
      question.api_error = `An error occurred while trying to save your question: ${err}`
      console.log(`error:${question.api_error}\nuri: ${apiEndpoint}\nopts: ${JSON.stringify(opts)}`)
      return question
    })
}
