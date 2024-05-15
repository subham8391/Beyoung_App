import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { WishlistProvider } from './context/WishlistProvider.jsx'
import { CartProvider } from './context/CartProvider.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <WishlistProvider>
    <App />
    </WishlistProvider>
    </CartProvider>
  </React.StrictMode>,
)
