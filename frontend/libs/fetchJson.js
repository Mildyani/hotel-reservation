export default async function fetchJson(requestInfo, init) {
  const response = await fetch(requestInfo, init)
  const data = await response.json()

  if (response.ok) {
    return data
  }

  throw new FetchError({
    message: response.statusText,
    response,
    data,
  })
}

export class FetchError extends Error {
  constructor({ message, response, data }) {
    super(message)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FetchError)
    }

    this.name = 'FetchError'
    this.response = response
    this.data = data ?? { message: message }
  }
}
