import React from 'react'
import style from './DetailedGnome.css'

const List = ({ title, array }) => {
  if (array.length === 0) return null
  const toListItem = item => {
    return (
      <li className={style.listItem} key={item}>
        {item}
      </li>
    )
  }
  return (
    <React.Fragment>
      <h3 className={style.listTitle}>{title}</h3>
      <ul className={style.list} data-testid={title}>
        {array.map(toListItem)}
      </ul>
    </React.Fragment>
  )
}

const Details = profile => {
  const content = Object.keys(profile).map((key, index) => {
    return (
      <React.Fragment key={index}>
        <dt className={style.detailsTitle}>{key}</dt>
        <dd className={style.detailsValue}>{profile[key]}</dd>
      </React.Fragment>
    )
  })
  return (
    <dl className={style.details} data-testid='Details'>
      {content}
    </dl>
  )
}

const DetailedGnome = ({ id, name, thumbnail, age, weight, height, hair_color, professions, friends, closeFn }) => {
  if (isNaN(id)) return null
  const avoidClosing = ev => ev.stopPropagation()
  const profileInfo = { age, weight, height, 'hair color': hair_color }

  return (
    <div className={style.modal} data-testid={`DetailedGnome-${id}`} onClick={closeFn}>
      <article className={style.frame} onClick={avoidClosing}>
        <img className={style.thumbnail} data-testid='thumbnail' src={thumbnail} alt={name} />
        <h1 data-testid='name'>{name}</h1>
        <Details {...profileInfo} />
        <List title='professions' array={professions} />
        <List title='friends' array={friends} />
      </article>
    </div>
  )
}

export default DetailedGnome
