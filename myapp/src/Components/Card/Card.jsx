import React from 'react'
import styles from './Card.module.css'


const Card = ({ title, image, follows }) => {
  return (
    <div className={styles.card}>
        <img className={styles.img} src={image} alt={title} />
        <div className={styles.follows}>
            {follows} follows
        </div>
        <h1 className={styles.title}>{title}</h1>
    </div>
  )
}

export default Card