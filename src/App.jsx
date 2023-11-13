import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import NavigationBar from './Header/NavigationBar';
import Footer from './Footer/Footer';
import Home from './home/Home';
import Men from './men/Men'
import Women from './women/Women'
import Combos from './combos/Combos'
import BbKiFavorites from './bb-ki-favorites/BbKiFavorites'
import WinterWears from './winter-wears/WinterWears';
import NewArrivals from './new-arrivals/NewArrivals'
import UrbanShirts from './urban-shirts/UrbanShirts';
import TracksuitPants from './tracksuit-pants/TracksuitPants';
import OverSizeTshirt from './oversize-tshirt/OverSizeTshirt';
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
            <Route path='/winter-wears' element={<WinterWears /> }/>
            <Route path='/new-arrival' element={<NewArrivals />}/>
            <Route path='/urban-shirt' element={<UrbanShirts />} />
            <Route path='/tracksuit-pants' element={<TracksuitPants />} />
            <Route path='/oversize-tshirts' element={<OverSizeTshirt />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
