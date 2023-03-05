import React from 'react'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import SearchBar from '../Searchbar/SearchBar'
import styles from './Navbar.module.css'


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <SearchBar />
      <Button name={'Give Feedback'} />
    </div>
  )
}

export default Navbar