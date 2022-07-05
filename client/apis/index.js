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
  //console.log('api:', kakapo)
  return request
    .post(rootUrl + '/kakapo')
    .send(kakapo) //had to remove curly brackets
    .then((res) => {
      //console.log(res.body)
      return res.body
    })
}

export function farewellKakapo(id) {
  return request.delete(rootUrl + '/kakapo/' + id)
}

// sort this out (finish patchFruit)
export function patchKakapo(kakapo) {
  //return Promose.resole('yay') - automatically resoluve so we can check it works!
  return request.patch(rootUrl + '/kakapo/' + kakapo.id).send(kakapo)
}
