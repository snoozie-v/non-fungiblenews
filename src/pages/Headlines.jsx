// eslint-disable-next-line no-unused-vars
import React from "react"
import goatz from "../assets/goatz.jpg"
import exo from "../assets/exo.jpg"
import mva from "../assets/mva.jpg"
import sunny from "../assets/sunny.jpeg"
import tricky from "../assets/tricky.jpeg"
import vvardogs from "../assets/vvardogs.jpg"

function Headlines() {
  return (
    <div>
       <h1>Recent VeChain Community Headlines</h1>
       <hr/>
       <div className="headline left">
          <img className="image-tile" src={goatz} alt="related to story" />
          <div className="content">
            <h2>Goatz Push Forward</h2>
            <p><date>9/5/23 - </date> 
            Looking for that hometown feel with a twist? Goatz Club Polygon mint is open.
            For just 20 $MATIC, follow a well-established VeChain project to a new chain,
            advancing your NFT Journey.
            <a href="https://twitter.com/GoatzNFT_"> Follow Goatz Club on X.</a></p>
          </div>
        </div>
        <div className="headline right">
          <img className="image-tile" src={exo} alt="related to story" />
          <div className="content">
            <h2>ExoWorld Token Launch</h2>
            <p><date>9/5/23 - </date> 
            Exciting news for ExoWorlds enthusiasts! The token launch is on the horizon—9/15 
            to be exact. Still time to join the whitelist for an exclusive deal on this 
            monumental project. Visit  for details 
            <a href="http://exoworlds.io/tokenomics"> click here.</a></p>
          </div>
        </div>
        <div className="headline left">
          <img className="image-tile" src={mva} alt="related to story" />
          <div className="content">
            <h2>Top Volume Projects</h2>
            <p><date>9/5/23 - </date> 
            In the past month, we witnessed over 2M $VET in NFT trading volume, roughly 
            $31,000 as of now. Leading the pack: Mad V Apes, World of V Genesis, and ExoWorlds.
            <a href="https://worldofv.art/analytics"> WOV Analytics </a> or <a href="https://www.vesea.io/resources/stats">
            VeSea Volume</a></p>
          </div>
        </div>
        <div className="headline right">
          <img className="image-tile" src={sunny} alt="related to story" />
          <div className="content">
            <h2>Sunny Lu Interview</h2>
            <p><date>9/5/23 - </date> 
            Did you catch Sunny Lu with Mario Nawfal last Tuesday? They delved into macro crypto 
            and Vechains role in the Wild West. An impressive 169K+ listeners tuned in. VeChain
             is more significant than many realize, especially in the NFT realm.
            <a href="https://twitter.com/sunshinelu24/status/1696585147779318058?s=20"> Listen Here.</a></p>
          </div>
        </div>
        <div className="headline left">
          <img className="image-tile" src={tricky} alt="related to story" />
          <div className="content">
            <h2>Keep Moving Forward</h2>
            <p><date>8/29/23 - </date> 
            Uncertainty reigns in the markets—Stocks, bonds, crypto, NFTs—total chaos. NFTs took 
            a beating, and for good reason, many offer little value. The PFP craze might have 
            fizzled, but NFTs are far from over.</p>
          </div>
        </div>
        <div className="headline right">
          <img className="image-tile" src={sunny} alt="related to story" />
          <div className="content">
            <h2>Sunny Lu Invites You</h2>
            <p><date>8/29/23 - </date> 
            Sunny Lu invested $15k USD to bring the global #VeFam together at NFTxLV, a 
            former Cardano-focused NFT event. The enterprise-focused blockchain sees the 
            value in what we are doing across the board, so this is HUGE. Follow Sunny 
            <a href="https://twitter.com/sunshinelu24"> here</a></p>
          </div>
        </div>
        <div className="headline left">
          <img className="image-tile" src={vvardogs} alt="related to story" />
          <div className="content">
            <h2>Denver - EVO Web3 Expo</h2>
            <p><date>8/29/23 - </date> 
            Just last weekend, VeChain demonstrated its technology and commitment to the community
             in Rare EVO—an epic Web3/blockchain expo in Denver, CO. Our community was represented 
             well, including Mad V Apes <a href="https://twitter.com/mikeyleo_00">Cigtoshi Nakamoto </a> 
             and VVar Dogs founder <a href="https://twitter.com/braden_VVARDOGS"> Braden.</a></p>
          </div>
        </div>
        <div className="headline right">
          <img className="image-tile" src={mva} alt="related to story" />
          <div className="content">
            <h2>Mad V Apes Leading the Way</h2>
            <p><date>8/29/23 - </date> 
            <a href="https://twitter.com/madvapesnft">Mad V Apes</a> showed that there is more than a picture of a monkey driving the future of 
            NFTs—metaverse, gaming, incentives, and phygitals—they are paving the way. And their 
            partnership with World of V marketplace/WOV Labs cements this innovation.</p>
          </div>
        </div>
        
    </div>
  )
}

export default Headlines


