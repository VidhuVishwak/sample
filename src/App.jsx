import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/signup'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'
import Name from './components/Name'
import Counter from './components/counter'
import Game from './components/Game'
import { emojiCursor, rainbowCursor, characterCursor } from "cursor-effects";
import User from './components/User'
import Product from './components/Product'

function App() {


  new rainbowCursor({
    length: 10,
    colors: ["orange", "white","green"],
    size: 4,
  });
  return (
    <>
      <NavBar></NavBar>
      {/* <Welcome></Welcome> */}

      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/name' element={<Name></Name>}></Route>
        <Route path='/count' element={<Counter></Counter>}></Route>
        <Route path='/game' element={<Game></Game>}></Route>
        <Route path='/user' element={<User></User>}></Route>
        <Route path='/pro' element={<Product></Product>}></Route>
      </Routes>


    </>
  )
}

export default App
