import React from 'react'
import Gnome from './Gnome'
import style from './GnomeList.css'

const PAGINATION_SIZE = 15

class GnomeList extends React.PureComponent {
  state = {
    shownPopulation: PAGINATION_SIZE,
  }

  toGnome = (profile) => (
    <Gnome
      key={profile.id}
      openDetailsFn={this.props.openDetailsFn}
      {...profile}
    />
  )

  showMore = () => {
    this.setState(state => {
      this.setState({ shownPopulation: state.shownPopulation + PAGINATION_SIZE })
    })
  }

  render() {
    const population = this.props.population
    const shownPopulation = population.slice(0, this.state.shownPopulation)
    const isShowMoreButton = this.state.shownPopulation < population.length

    return (
      <div className={style.frame} data-testid='GnomeList'>
        { shownPopulation.map(this.toGnome) }
        { isShowMoreButton ?
            <div className={style.btnBox}>
              <button className={style.btn} onClick={this.showMore}>View more</button>
            </div> :
            null
        }
      </div>
    )
  }
}

export default GnomeList
