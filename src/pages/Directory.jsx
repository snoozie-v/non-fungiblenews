import React from 'react'
import Hero from './Hero'
import Footer from './Footer'
import goatz from '../assets/goatz.jpg'
import gangstergor from "../assets/gangstergor.jpg"
import exo from '../assets/exo.jpg'
import blackvemarket from '../assets/blackvemarket.jpg'
import corgi from '../assets/corgi.jpg'
import inka from '../assets/inka.jpg'
import kbk from '../assets/kbk.png'
import mva from '../assets/mva.jpg'
import nfn from '../assets/nfn.jpg'
import minomob from '../assets/minomob.jpg'
import npo from '../assets/npo.jpg'
import nonerds from '../assets/nonerds.jpg'
import nfbc from '../assets/nfbc.png'
import ukiyoe from '../assets/ukiyoe.jpg'
import psychobeasts from '../assets/psychobeasts.jpg'
import sha from '../assets/sha.jpg'
import smuzzies from '../assets/smuzzies.jpg'
import stonerp from '../assets/stonerp.jpg'
import vecalendar from '../assets/vecalendar.jpg'
import vekings from '../assets/vekings.png'
import venons from '../assets/venons.jpg'
import vfs from '../assets/vfs.jpg'
import vpunks from '../assets/vpunks.jpg'
import vvardogs from '../assets/vvardogs.jpg'
import wov from '../assets/wov.png'
import bffc from '../assets/bffc.png'
import paper from '../assets/paper.png'

function Directory() {
  return (
    <div >
    <div >
        <Hero />
        <div>

          <h1>VeChain Directory</h1>
          <h2>NFT Projects</h2>
          <div className="projects">
          <div className="project">
            <img src={blackvemarket} />
            <p>BlackVeMarket</p>
            <p>x handle - @ blah blah </p></div>
          <div className="project">
            <img src={corgi} />
            <p>Corgi Gang</p></div>
          <div className="project">
            <img src={exo} />
            <p>ExoWorlds</p></div>
          <div className="project">
            <img src={gangstergor} />
            <p>Gangster Gorrilaz</p></div>
          <div className="project">
            <img src={goatz} />
            <p>Goatz Club</p></div>
          <div className="project">
            <img src={inka} />
            <p>Golden Empire</p></div>
          <div className="project">
            <img src={kbk} />
            <p>KickBack Koalas</p></div>
          <div className="project">
            <img src={mva} />
            <p>Mad V Apes</p></div>
          <div className="project">
            <img src={minomob} />
            <p>Mino Mob</p></div>
          <div className="project">
            <img src={npo}/>
            <p>New Pigs Order</p></div>
          <div className="project">
            <img src={paper}/>
            <p>NFT Paper Project</p></div>
          <div className="project">          
            <img src={nonerds} />
            <p>No-Nerds</p></div>
          <div className="project">
            <img src={nfbc} />
            <p>Non Fungible Book Club</p></div>
          <div className="project">
            <img src={nfn} />
            <p>NonFungiBulls</p></div>
          <div className="project">
            <img src={ukiyoe} />
            <p>Ukyiyoe Warriors</p></div>
          <div className="project">
            <img src={psychobeasts} />
            <p>PsychoBeasts</p></div>
          <div className='project'>
            <img src={sha} />
            <p>Safe Haven</p>
          </div>
          <div className="project"><p>Sagaz</p></div>
          <div className="project"><p>Shark Gang</p></div>

            
          <div className="project">
            <img src={smuzzies} />
            <p>Smuzzies</p></div>
          <div className="project">
            <img src={stonerp} />
            <p>StonerPunks</p></div>
          <div className="project"><p>Thugs Paradise P2E</p></div>
          <div className="project"><p>Tradze Town</p></div>
          <div className="project"><p>Vechain Energy</p></div>  
          <div className="project">
            <img src={vecalendar} />
            <p>VeCalendar</p></div>        
          <div className="project">
            
            <p>VeCowboys</p></div>
          <div className="project"><p>VFox Alliance</p></div>
          <div className="project"><p>vechain Foundation</p></div>
          <div className="project"><p>VeeParrots</p></div>
          <div className="project">
            <img src={venons} />
            <p>Venonymous</p></div>
          <div className="project">
            <img src={vekings} />
            <p>VeKings</p></div>
          <div className="project"><p>VeTower</p></div>
          <div className="project"><p>Vexchange</p></div>
          <div className="project">
            <img src={vfs} />
            <p>Virtual Flame Studio</p></div>
          <div className="project">
            <img src={vpunks} />
            <p>VPunks</p></div>
          <div className="project">
            <img src={vvardogs} />
              <p>VVar Dogs</p></div>
          <div className="project">
            <img src={bffc} />
            <p>World of Animals</p></div>
          <div className="project">
            <img src={wov} />
            <p>World of V - Genesis</p></div>
   
          <div className="project"><p>Zillionaire Zombies</p></div>
          
          </div>
        </div>
        <div className='h-10 bg-slate-800 w-full'></div>
        <Footer />
    </div>
    </div>
  )
}

export default Directory
