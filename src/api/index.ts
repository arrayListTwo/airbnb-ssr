import http from '../utils/http.ts'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function getRoomList () {
  return await http.httpRequestGet('/api', {})
}
