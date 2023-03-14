import React from 'react'
import styles from './Searchbar.module.css'

import Searchicon from '../../assets/Searchicon.svg'

const SearchBar = ({ placeholder }) => {
  console.log(styles.searchButton)
  return (
    <>
      <div className={styles.inputIcons}>
        <input className={styles.searchBar} type="text" placeholder='Search the song of your choice' />
        <button className={styles.searchButton}>
           <img src={Searchicon} alt="" />
        </button>
      </div>
    </>
  )
}

export default SearchBar