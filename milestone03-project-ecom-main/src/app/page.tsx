import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Brands from './components/Brands'
import Card from './components/Card'
import Carousel from './components/Carousel'
import Categroy from './components/Categroy'
import Footer from './components/Footer'
import Items from './components/items'
import Progresser from './components/Progresser'
import Reservation from './components/Reservation'
import Product from './components/Categroy'

function App() {
  return (
    <div>
         <Navbar />
      <Banner />
     
      <Categroy />

      <Items />
      <Carousel />
{/* <Product/> */}
      <Progresser />
      <Brands />
      <Card />
      <Reservation />
      <Footer />
    </div>
  )
}

export default App;
