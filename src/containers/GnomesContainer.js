import React from 'react'
import DataDownloader from '../libs/dataDownloader'
import GnomeList from '../components/GnomeList'
import GnomeFilter from '../components/GnomeFilter'
import DetailedGnome from '../components/DetailedGnome'

class GnomesContainer extends React.Component {
  state = {
    population: [],
    gnomeId: null,
    filter: {
      name: '',
    },
  }

  async componentDidMount() {
    const globalPopulation = await DataDownloader.get()
    if (!globalPopulation) return

    const population = Object.values(globalPopulation)[0]
    this.setState({ ...this.state, population })
  }

  openGnomeDetails = (gnomeId) => {
    this.setState({ ...this.state, gnomeId })
  }
  closeGnomeDetails = () => {
    this.setState({ ...this.state, gnomeId: null })
  }

  updateFilter = (filter) => {
    this.setState({ ...this.state, filter })
  }

  filteredPopulation = () => {
    const { population, filter } = this.state
    let filtered = population.filter(gnome =>
      gnome.name.toLowerCase().includes(filter.name.toLowerCase())
    )
    return filtered
  }

  render() {
    const { filter, gnomeId, population } = this.state
    const selectedGnome = population.find(gnome => gnome.id === gnomeId)
    return (
      <React.Fragment>
        <DetailedGnome {...selectedGnome} closeFn={this.closeGnomeDetails} />
        <GnomeFilter updater={this.updateFilter} />
        <GnomeList population={this.filteredPopulation()} openDetailsFn={this.openGnomeDetails} />
      </React.Fragment>
    )
  }
}

export default GnomesContainer
