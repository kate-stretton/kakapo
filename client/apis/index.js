// still unclear about what superagent does
import request from 'superagent'
const rootUrl = '/api/v1'

//here's the http request!
export function getKakapo() {
  return request.get(rootUrl + '/kakapo').then((res) => {
    return res.body
  })
}

export function postKakapo(kakapo) {
  return request
    .post(rootUrl + '/kakapo')
    .send({ kakapo })
    .then((res) => {
      return res.body
    })
}
