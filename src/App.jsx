import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import NavigationBar from './Header/NavigationBar';
import Footer from './Footer/Footer';
import Login from './Authenticion/Login';
import Signup from './Authenticion/Signup';
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
import { MenHoodie, MenJeans,MenJogger,MenKurta,MenPyjama,MenShirt,MenShorts,MenTracksuit,MenTrouser,MenTShirt } from './men/MenPages';
import {WomenShirt, WomenJogger, WomenJeans,WomenJumpSuit,WomenKurti,WomenTShirt} from './women/WomenPages'

import ProductDetails from './product-details/ProductDetails';
import PrivateRoute from './Authenticion/PrivateRoute';
import MyAccount from './Account/MyAccount';
import Order from './Account/Order';
import Address from './Account/Address';
import Profile from './Account/Profile';
import Wishlist from './Account/Wishlist';
import Coupons from './Account/Coupons';
import Tickets from './Account/Tickets';
import CheckOut from './Components/Checkout/CheckOut';
import Cart from './Components/Checkout/Cart'
import CAddress from './Components/Checkout/CAddress';
import Payment from './Components/Checkout/Payment';
import SearchResult from './Header/SearchResult';
import CommingSoon from './CommingSoon/CommingSoon';
import './App.css'

function App() {


  return (
    <>
      <Router>
        <NavigationBar />
        <div>
          <Routes>
            <Route path="*" element={<CommingSoon />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" exact element={<Home />} />
            <Route path='/mens-clothing' element={<Men />} />
            <Route path='/womens-clothing' element={<Women />} />
            <Route path='/combo-products' element={<Combos />} />
            <Route path='/bb-ke-favorites' element={<BbKiFavorites />} />
            <Route path='/winter-wears' element={<WinterWears />} />
            <Route path='/new-arrival' element={<NewArrivals />} />
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
            <Route path='/women-shirt' element={<WomenShirt />} />
            <Route path='/women-tShirt' element={<WomenTShirt />} />
            <Route path='/details/:name/:id' element={<ProductDetails />} />
            <Route path="/myaccount" element={<PrivateRoute> <MyAccount /> </PrivateRoute>} >
              <Route path="/myaccount/order" element={<PrivateRoute> <Order /> </PrivateRoute>} />
              <Route path="/myaccount/address" element={<PrivateRoute> <Address /> </PrivateRoute>} />
              <Route path="/myaccount/profile" element={<PrivateRoute> <Profile /> </PrivateRoute>} />
              <Route path="/myaccount/wishlist" element={<PrivateRoute> <Wishlist /> </PrivateRoute>} />
              <Route path="/myaccount/coupons" element={<PrivateRoute> <Coupons /> </PrivateRoute>} />
              <Route path="/myaccount/tickets" element={<PrivateRoute> <Tickets /> </PrivateRoute>} />
            </Route>
            <Route path='/checkout' element={<PrivateRoute><CheckOut /></PrivateRoute>}>
             <Route path='/checkout/cart' element={<PrivateRoute><Cart /></PrivateRoute>}/>
             <Route path='/checkout/shipping' element={<PrivateRoute><CAddress /></PrivateRoute>}/>
             <Route path='/checkout/payment' element={<PrivateRoute><Payment /></PrivateRoute>}/>
           </Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
