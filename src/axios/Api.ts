import axios from 'axios'

const baseURL = 'https://my-json-server.typicode.com/typicode/demo'

export const getListPosts = async () => {
  const url = baseURL + '/posts'
  const reqest = await axios(url, {
    method: 'get',
  })
  return reqest.data
}
