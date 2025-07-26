import React from 'react'
import Navebar from '../../components/Navbar/Navebar'
import Banner from '../../components/Banner/Banner'
import SpecialOffer from '../../components/SpecialOffer/SpecialOffer'
import AboutHome from '../../components/AboutHome/AboutHome'
import OurHomeMenu from '../../components/OurHomeMenu/OurHomeMenu'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
        <Navebar />
        <Banner/>
        <SpecialOffer/>
        <AboutHome/>
        <OurHomeMenu/>
        <Footer/>
    </>
  )
}

export default Home