import data from './data.json'

const population = Object.values(data)[0]
const populationCount = population.length
const TOWN = 'Brastlewark'

export function getGnome(index, override = {}) {
  if (index && index >= 0 && index < populationCount) {
    return { ...population[index], ...override }
  }
  const randomIndex = Math.floor(Math.random() * populationCount)
  return { ...population[randomIndex], ...override }
}

export function getPopulation(size=5) {
  if (Number(size) >= populationCount) {
    return population
  }
  return population.slice(0, size)
}



export function getResponseData(size) {
  if (!size || Number(size) >= populationCount) {
    return data
  }
  return { [TOWN]: getPopulation(size) }
}

const Helper = {
  getGnome,
  getPopulation,
  getResponseData,
}

export default Helper
