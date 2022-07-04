// still unclear about what superagent does
import request from 'superagent'
const rootUrl = '/api/v1'

//here's the http request!
export function getKakapo() {
  return request.get(rootUrl + '/kakapo').then((res) => {
    return res.body
  })
}
