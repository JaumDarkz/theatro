import styles from './styles.module.scss'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        ABOUT THE PROJECT
      </div>

      <div className={styles.textContainer}>
        <div className={styles.text}>
          Theatro is a collection of 3333 unique hand-drawn NFTs. Theatro NFT holders will be enablers of a community-driven acceleration platform for creators and artists.
          <br /> <br />
          Theatro NFT holders are entitled to 1000 units of Theatro Tokens (THT), an ERC20-compliant utility token with Max. Supply of 3333000 will be distributed 90 days after the public minting event.
        </div>

        <div className={styles.minorText}>
          Perks of owning a Theatro NFT:
          <br /> <br />
          - Bid for Whitelist Entries for future projects vetted and backed by the Theatro DAO on a Whitelist Auction;
          <br /> <br />
          - Theatro DAO will maintain an exclusive marketplace where a percentage of the NFTs of our incubated projects will be available for sale exclusively for THT tokens;
          <br /> <br />
          - THT tokens count towards DAO voting events. The DAO will choose the projects incubated by the Theatro DAO; These projects are pre-selected by a throughout vetting process and KYC conducted by the Theatro Ambassadors.
        </div>

        <div className={styles.description}>
          * 40% of the funds raised by Theatro Initial Mint Event will be dedicated to the promotion, marketing, and tutoring of projects backed by the Theatro DAO.
          <br /> <br />
          * The Theatro team will pre-mint 233 NFTs; these NFTs will be used to incentivize marketing and promotion, award ambassadors and developers, and fund community giveaways. By the third month after the public minting. If by the 90th day after public minting, any of these 233 NFTs are still under the Theatro teams`s wallet, the Theatro DAO will be able to vote on what to do with the outstanding balance.
        </div>
      </div>
    </div>
  )
}

export default About