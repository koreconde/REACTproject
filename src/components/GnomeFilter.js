import React from 'react'
import style from './GnomeFilter.css'

class GnomeFilter extends React.PureComponent {
  state = {
    name: ''
  }

  handleChange = ev => {
    const { updater } = this.props
    ev.preventDefault()
    const { value } = ev.target

    this.setState({ name: value }, () => updater({ name: value }))
  }

  render() {
    const { name } = this.state

    return (
      <div className={style.frame}>
        <input
          placeholder='Search a gnome'
          className={style.input}
          data-testid='GnomeFilter'
          name='GnomeFilter'
          value={name}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default GnomeFilter
