import axios from 'axios'
import DataDownloader from './dataDownloader'
import { getResponseData } from '../mocks'
jest.mock('axios')

describe('.get', () => {
  const expectedData = getResponseData()
  axios.get.mockResolvedValue({ data: expectedData })

  it('fetches a JSON', async () => {
    const expectedURL = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'

    await DataDownloader.get()

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(expectedURL)
  })

  it('returns the response data', async () => {
    const data = await DataDownloader.get()

    expect(data).toEqual(expectedData)
  })
})
