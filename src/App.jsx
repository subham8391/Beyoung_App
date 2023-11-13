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
import MenHoodie from './men/MenHoodie';
import MenJeans from './men/MenJeans'
import MenJogger from'./men/MenJogger'
import MenKurta from './men/MenKurta'
import MenPyjama from './men/MenPyjama'
import MenShirt from './men/MenShirt'
import MenShorts from './men/MenShorts'
import MenTracksuit from './men/MenTracksuit'
import MenTrouser from './men/MenTrouser'
import MenTShirt from './men/MenTShirt'
import WomenJeans from './women/WomenJeans'
import WomenJogger from './women/WomenJogger'
import WomenJumpSuit from './women/WomenJumpSuit'
import WomenKurti from './women/WomenKurti'
import WomenShirt from './women/WomenShirt'
import WomenTShirt from './women/WomenTShirt'
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
            <Route path='/men-hoodie' element={<MenHoodie />} />
            <Route path='/men-jeans' element={<MenJeans />} />
            <Route path='/men-jogger' element={<MenJogger />} />
            <Route path='/men-casual-shirts' element={<MenKurta />} />
            <Route path='/men-pyjama' element={<MenPyjama />} />
            <Route path='/men-shirt' element={<MenShirt />} />
            <Route path='/men-shorts' element={<MenShorts />} />
            <Route path='/men-tracksuit' element={<MenTracksuit />} />
            <Route path='/men-trouser' element={<MenTrouser />} />
            <Route path='/men-tshirt' element={<MenTShirt />} />
            <Route path='/women-jeans' element={<WomenJeans />} />
            <Route path='/women-jogger' element={<WomenJogger />} />
            <Route path='/women-jumpSuit' element={<WomenJumpSuit />} />
            <Route path='/women-kurti' element={<WomenKurti />} />
            <Route path='/women-shirt' element={<WomenShirt/>} />
            <Route path='/women-tShirt' element={<WomenTShirt/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
