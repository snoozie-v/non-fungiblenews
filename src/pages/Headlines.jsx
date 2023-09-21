// eslint-disable-next-line no-unused-vars
import React from "react"
import goatz from "../assets/goatz.jpg"
import exo from "../assets/exo.jpg"
import exo2 from "../assets/exo2.jpg"
import mva from "../assets/mva.jpg"
import sunny from "../assets/sunny.jpeg"
import tricky from "../assets/tricky.jpeg"
import vvardogs from "../assets/vvardogs.jpg"
import coinbase from "../assets/coinbase.png"
import vpunks from "../assets/vpunks.jpg"
import wov from "../assets/wov.png"
import smuzzies from "../assets/smuzzies.jpg"
import Hero from "../pages/Hero"
import Footer from "../pages/Footer"
import vechain from "../assets/vechain.png"
import goldenempire from "../assets/goldenempire.jpeg"
import connor from "../assets/connor.jpeg"

// template for new stories

{/* <div className="headline">
<img className="image-tile" src={REPLACE_ME} alt="related to story" />
<div className="content">
  <h2>TITLE_OF_HEADLINE</h2>
  <p><date>DATE WRITTEN - </date> 
  SOME TEXT ABOUT THE HEADLINE<BR/>
  </p>
</div>
</div> */}


function Headlines() {
  return (
    <div>
      <Hero />
       <h1>VeChain Headlines</h1>
       <hr/>
      <div className="headlines">

      <div className="headline">
          <img className="image-tile" src={tricky} alt="related to story" />
          <div className="content">
          <h2>Advice from Tricky</h2>
          <p><date>9/19/23 - </date> 
          Here are a few ways to protect yourself and your assets.<br/><br/>

🚨 NEVER give your keys out.<br/>
🚨 Never connect to a dApp that you have not verified. <br/>
🚨 Use a cold wallet. <br/>
🚨 Make trades with a secondary, empty wallet.<br/><br/>

If it sounds too good to be true, it is.
          </p>
          </div>
        </div>

      <div className="headline">
          <img className="image-tile" src={goatz} alt="related to story" />
          <div className="content">
          <h2>Goatz Mint Out</h2>
          <p><date>9/19/23 - </date> 
          Goats club, another VeChain native project, has minted out on Polygon. 
          <br/><br/>
          They are already staking for $MILK on VeChain and will soon have staking on Polygon as well.
          </p>
          </div>
        </div>


        <div className="headline">
          <img className="image-tile" src={vechain} alt="related to story" />
          <div className="content">
          <h2>It is happening</h2>
          <p><date>9/19/23 - </date> 
          So #VeChain is catching up with the times. <br/>
          🚨Finally listed $VET on Coinbase. <br/>
          🚨Finally have a defi/NFT wallet. <br/>
          🚨Finally engaging with community. <br/><br/>

          If you have some patience watch the $VET / $VTHO pair and make some nice gains.
          </p>
          </div>
        </div>

        <div className="headline">
          <img className="image-tile" src={goldenempire} alt="related to story" />
          <div className="content">
          <h2>Minting Now</h2>
          <p><date>9/19/23 - </date> 
          We have a small handful of other projects minting now, all OG #VeChain projects. <br/><br/>
            🚀 Non Fungible Book Club <br/>
            🚀 Non FungiBulls <br/>
            🚀 Golden Empire Gods 2.0  <br/>
            🚀 StonerPunks Pepe Plug <br/> <br/>
            These founders have all been around longer than most, give ‘em a look!
          </p>
          </div>
        </div>

                <div className="headline">
          <img className="image-tile" src={connor} alt="related to story" />
          <div className="content">
          <h2>NFTxLV</h2>
          <p><date>9/19/23 - </date> 
          ♠️ NFTxLV is right around the corner and most of our prominent VeChain projects will be represented there. 
          <br/><br/>
          Historically a Cardano convention, it has now embraced all blockchains. 
          @cboundy22
 leads the #VeFam, ensuring smooth operations.
          </p>
          </div>
        </div>

                <div className="headline">
          <img className="image-tile" src={vvardogs} alt="related to story" />
          <div className="content">
          <h2>VVAR Dawgs Expand to ETH</h2>
          <p><date>9/19/23 - </date> 
          🐶 VVar Dogs are branching out to Ethereum next month. They are NOT leaving VeChain, just expanding their brand. <br/><br/>

Being a veteran film company on a small blockchain, this is a smart move. Many eyes on ETH, and the Dawgs shift will surely draw more eyes back to VeFam.
          </p>
          </div>
        </div>


       <div className="headline">
          <img className="image-tile" src={coinbase} alt="related to story" />
          <div className="content">
            <h2>VET Coinbase Listing</h2>
            <p><date>9/12/23 - </date> 
            After years of waiting and asking, Coinbase
            is FINALLY listing $VET and $VTHO in their exchange.
            Trading will begin after 9:30 AM PST tomorrow 9/13 as long as liquidity is sufficient.
            </p>
          </div>
        </div>
        <div className="headline">
          <img className="image-tile" src={smuzzies} alt="related to story" />
          <div className="content">
            <h2>Longevity: Smuzzies</h2>
            <p><date>9/12/23 - </date> 
            <a href="https://twitter.com/Smuzzies_NFT"> @Smuzzies_NFT</a>
            may not be as old, but they are certainly one of the busiest 
            innovators around. If you have not yet, learn just what owning 
            a Smuzzies can do for you and your favorite NFTs.
            <br/><br/>
            Also, check out their current event happening now to win some amazing prizes
            as they celebrate 10k <a href="https://3dables.smuzzies.com/">3DAbles platform </a>mints
            </p>
          </div>
        </div>


       <div className="headline">
          <img className="image-tile" src={wov} alt="related to story" />
          <div className="content">
            <h2>Longevity Wold of V</h2>
            <p><date>9/12/23 - </date> 
            <a href="https://twitter.com/worldofv_art">World of V</a> is nearly 2 years old and they are currently leading in 
            the world of Phygitals. If you have been around since launch, you would 
            be amazed at how much they have transformed.<br/><br/>
            They are setting the bar high.<br/><br/>
            <a href="https://worldofv.art/collection/genesis">Genesis Collection</a>
            </p>
          </div>
        </div>
        <div className="headline">
          <img className="image-tile" src={vpunks} alt="related to story" />
          <div className="content">
            <h2>Longevity: VPUNKS</h2>
            <p><date>9/12/23 - </date> 
            <a href="https://twitter.com/vpunksofficial"> @VPUNKS</a>, the OG of all, has been at it for over 2 years!  
            Upon mint-out, staking was available and has not stopped. They 
            also were the pioneers of p2e games on the chain. 
            <br/>
            🟢 Buy Punks<br/>
            🟢 Play the game<br/>
            🟢 Earn/Stake $VPU<br/>
            </p>
          </div>
        </div>


        <div className="headline">
          <img className="image-tile" src={exo2} alt="related to story" />
          <div className="content">
            <h2>$EXO Whitelist Closing Soon</h2>
            <p><date>9/12/23 - </date> 
            <a href="https://twitter.com/ExoWorldsNFT">@ExoWorldsNFT</a> is just days away from 
            launching their $EXO Token Sale on 9/15. The Whitelist is still open and gets you a
             20% price reduction to the public mint. <br/> <br/>
             Only 300 Million tokens are available, and once they are gone, the public mint begins
              at a higher price.
            </p>
          </div>
        </div>
        <div className="headline">
          <img className="image-tile" src={tricky} alt="related to story" />
          <div className="content">
            <h2>$EXO Deep Dive</h2>
            <p><date>9/12/23 - </date> 
            $EXO will be a BEP-20 and VIP-180 token, serving several utilities like, voting in
            community decisions, enhance gameplay with in-game assets, or even build your dreams 
            within ExoWorlds
            <br/><br/>
            Read more about the tokenomics 👉 <a href="https://exoworlds.io/tokenomics/">here</a>
            </p>
          </div>
        </div>


       <div className="headline">
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
        <div className="headline">
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


        <div className="headline">
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
        <div className="headline">
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


        <div className="headline">
          <img className="image-tile" src={tricky} alt="related to story" />
          <div className="content">
            <h2>Keep Moving Forward</h2>
            <p><date>8/29/23 - </date> 
            Uncertainty reigns in the markets—Stocks, bonds, crypto, NFTs—total chaos. NFTs took 
            a beating, and for good reason, many offer little value. The PFP craze might have 
            fizzled, but NFTs are far from over.</p>
          </div>
        </div>
        <div className="headline">
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


        <div className="headline">
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
        <div className="headline">
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
    <Footer />
    </div>
  )
}

export default Headlines


