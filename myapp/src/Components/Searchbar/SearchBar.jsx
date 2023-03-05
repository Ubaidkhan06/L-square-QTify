import React from 'react'
import styles from './SearchBar.module.css'

const SearchBar = () => {
  return (
    <>
    <div className={styles.inputIcons}>
        <input className={styles.searchBar} type="text" placeholder='Search a song of your choice' />
        <div></div>
    </div>
    </>
  )
}

export default SearchBar