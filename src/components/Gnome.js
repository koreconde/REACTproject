import React from 'react'
import style from './Gnome.css'

const Counter = ({ title, count }) => {
  return (
    <div className={style.counter}>
      <h1 className={style.counterTitle}>{title}</h1>
      <span className={style.counterValue}>{count}</span>
    </div>
  )
}

class Gnome extends React.PureComponent {
  render() {
    const { id, name , age, thumbnail, weitght, height, professions,hair_color, friends, openDetailsFn, ...rest } = this.props
    const openFn = () => openDetailsFn(id)
    return (
      <div className={style.frame} data-testid={`Gnome-${id}`} {...rest}>
        <h1 className={style.title} data-testid='name'>{name}</h1>
        <img className={style.thumbnail} width='100%' data-testid='thumbnail' src={thumbnail} alt={name} />
        <div className={style.actions}>
          <Counter title='Friends' count={friends.length} />
          <Counter title='Professions' count={professions.length} />
          <button className={style.btn} onClick={openFn}>Show</button>
        </div>
      </div>
    )
  }
}

export default Gnome
