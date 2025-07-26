import React from 'react'
import MyOrder from '../../components/MyOrder/MyOrder'

import Navbar from '../../components/Navbar/Navebar'
import Footer from '../../components/Footer/Footer'

const MyOrderPage = () => {
  return (
    <>
        <Navbar />
        <MyOrder />
        <Footer />
    </>
  )
}

export default MyOrderPage