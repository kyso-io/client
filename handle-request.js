const fetch = require('isomorphic-fetch')

module.exports = async ({
  url,
  token,
  body,
  method = 'post',
  data = null,
  headers = null,
  returnRaw = false,
  apiUrl = 'https://api.kyso.io'
}) => {

  if (typeof process !== "undefined") {
    if (process && process.env && process.env.API_URL) {
      apiUrl = process.env.API_URL
    }
  }

  const opts = {
    method,
    headers: {
      'content-type': 'application/json'
    }
  }

  if (headers) {
    Object.keys(headers).forEach((key) => {
      opts.headers[key] = headers[key]
    })
  }

  if (token) {
    opts.headers.authorization = `bearer ${token}`
  }

  if (body) {
    opts.body = JSON.stringify(body)
  }

  if (data) {
    opts.body = data
  }

  const _url = `${apiUrl}${url}`
  const response = await fetch(_url, opts)

  if (returnRaw) {
    return response
  }

  if (response.ok) {
    try {
      return response.json()
    } catch (e) {
      return null
    }
  }
  return response.text()
}
