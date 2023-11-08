import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import NavigationBar from './Header/NavigationBar';
import Footer from './Footer/Footer';
import Home from './home/Home';
import Men from './men/Men'
import Women from './women/Women'
import Combos from './combos/Combos'
import BbKiFavorites from './bb-ki-favorites/BbKiFavorites'
import ShopTheLook from './shop-the-look/ShopTheLook'
import NewArrivals from './new-arrivals/NewArrivals'
import './App.css'

function App() {


  return (
    <>
      <Router>
        <NavigationBar />
        <div>
    	    <Routes>
          <Route path="/" exact element={<Home />} />
            <Route path='/mens-clothing' element={<Men />}/>
            <Route path='/womens-clothing' element={<Women /> }/>
            <Route path='/combo-products' element={<Combos /> }/>
            <Route path='/bb-ke-favorites' element={<BbKiFavorites />}/>
            <Route path='/shop-the-look' element={<ShopTheLook /> }/>
            <Route path='/new-arrival' element={<NewArrivals />}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
