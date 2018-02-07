import { serverUrl } from '../global'

export const post = (request) => {
  return fetch(`${serverUrl}/person`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      request
    )
  })
}
