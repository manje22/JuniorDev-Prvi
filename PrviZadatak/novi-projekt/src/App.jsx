import { useState } from 'react'
import './App.css'
import MoodDisplay from './components/MoodDisplay'
import MoodController from './components/MoodController'

function App() {
  const [trenutnoRaspolozenje, postaviTrenRasp] = useState("sretno");
  return (
    <>
      <MoodDisplay trenRaspolozenje={trenutnoRaspolozenje} opis="korisnik je sretan"></MoodDisplay>
      <MoodController trenutnoRaspolozenje={trenutnoRaspolozenje} promjeniRasp = {postaviTrenRasp}></MoodController>
    </>
  )
}

export default App
