import axios from 'axios'

export const getListPosts = async () => {
  return await axios('https://my-json-server.typicode.com/typicode/demo')
}
