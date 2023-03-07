import React from 'react'
import styles from './SearchBar.module.css'

const SearchBar = ({ placeholder }) => {
  return (
    <>
    <div className={styles.inputIcons}>
        <input className={styles.searchBar} type="text" placeholder={placeholder} />
        <button className={styles.searchButton}>&#128270;</button>
    </div>
    </>
  )
}

export default SearchBar