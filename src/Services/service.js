import axios from "axios"
// require('dotenv').config()


export const makeAPIRequestCall = (url, method, reqBody) =>{
  const baseUrl = 'https://code-challenge.spectrumtoolbox.com/api/' + url
   const token = 'Api-Key q3MNxtfep8Gt'
   const Headers = {
    Authorization: `${token}`,
  }
  return  axios({
        headers: Headers,
        method: method,
        url:  baseUrl,
        data: reqBody
      });
}



export const makeAPIRequestCalls = (url, method, reqBody) =>{
  const baseUrl = 'http://localhost:5000/' + url
   const Headers = {
    'content-type':'application/json'
  }
  return  axios({
        headers: Headers,
        method: method,
        url:  baseUrl,
        data: reqBody
      });
}

