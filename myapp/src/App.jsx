import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Button from './Components/Button/Button'
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
import SearchBar from './Components/Searchbar/SearchBar'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Main />
    </>
  )
}

export default App
