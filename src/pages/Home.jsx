import React from 'react'
import Footer from './Footer'
import Hero from './Hero'
import Headlines from "../pages/Headlines"

function Home() {
  return (
    <div className="home">
      <Hero />

      <h2 className="header">Unbiased coverage of our Web3 community</h2>
        <Headlines />

      <Footer />
    </div>
  )
}

export default Home


