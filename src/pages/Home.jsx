import React from 'react'
import Footer from './Footer'
import Hero from './Hero'
import vechain from '../assets/vechain.png'
import algorand from '../assets/algorand.png'
import guac from "../assets/guac.png"
import cardano from "../assets/cardano.png"


function Home() {
  return (
    <div className="home">
        <h1>Non-Fungible News</h1>
      <h2>Unbiased coverage of emerging Web3 communities</h2>
        <div className='ecosystem'>
        <img src={vechain}></img>
        <h2>vechain</h2>
        <p>We all got started within the vechain ecosystem and consider
          it to be our native chain.
        </p>
        <h3>Contributing Writers</h3>
        <ul>
          <li>TrickyBoom</li>
          <li>Jordan</li>
          <li>snoozie</li>
        </ul>
        </div>
         <div className='ecosystem'>
          <img src={algorand}></img>
        <h2>Algorand</h2>
        <p>$COOP, SkuliFrens and more</p>
        <h3>Contributing Writers</h3>
        <ul>
          <li>Tricky</li>
        </ul>
        </div>
        
        <div className='ecosystem'>
          <img src={guac}></img>
        <h2>$Guac on Solana</h2>
        <p>They are building an entire ecosystem with
            onboarding new users as the focus.
        </p>
        <h3>Contributing Writers</h3>
        <ul>
          <li>snoozie</li>
        </ul>
        </div>

        <div className='ecosystem'>
          <img src={cardano}></img>
        <h2>Cardano</h2>
        <p>information about the presense we have in the cardano ecosystem</p>
        <h3>Contributing Writers</h3>
        <ul>
          <li>Tricky</li>
        </ul>
        </div>
      <Footer />
    </div>
  )
}

export default Home


