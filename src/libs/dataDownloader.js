import axios from 'axios'

const JSON = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'

export async function get() {
  const response = await axios.get(JSON)
  const data = response.data
  return data
}

const DataDownloader = {
  get,
}

export default DataDownloader
