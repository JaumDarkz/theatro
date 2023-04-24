import styles from './styles.module.scss'

import img1 from './assets/1.svg'
import img2 from './assets/2.svg'
import img3 from './assets/3.svg'
import img4 from './assets/4.svg'
import img5 from './assets/5.svg'
import Image from 'next/image'


const Roadmap = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.textContainer}>
          <div className={styles.title}>
            ROADMAP
          </div>

          <div className={styles.description}>
            Theatro is an NFT that allows its owners to enjoy unique experiences related to the theater world. To ensure the success of the project, it is important to create a roadmap that clearly defines the necessary steps to achieve the Theater`s objectives.
            <br /> <br />
            Theatro roadmap consists of several steps. Each of these stages has specific deadlines and objectives, all of them aimed at ensuring the delivery of value to the Theater owners. With the implementation of this roadmap, Theatro expects to become a highly valued and recognized NFT in the market.
          </div>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.stagesContainer}>
          <div className={styles.stage1}>
            <div className={styles.img}>
              <Image src={img1} alt='Number' />
            </div>

            <div className={styles.text}>
              Stage 1: is the launch of the NFT, which will allow users to purchase a Theater and unlock the exclusive experiences it offers.
            </div>
          </div>

          <div className={styles.stage2}>
            <div className={styles.img}>
              <Image src={img2} alt='Number' />
            </div>

            <div className={styles.text}>
              Stage 2: involves creating partnerships with theaters around the world, which will allow theater owners to attend exclusive performances and gain backstage access and other exclusive benefits.
            </div>
          </div>

          <div className={styles.stage3}>
            <div className={styles.img}>
              <Image src={img3} alt='Number' />
            </div>

            <div className={styles.text}>
              Stage 3: Theatro will launch an online platform that will allow NFT owners to watch live performances from partner theaters anywhere in the world, all from the comfort of their homes.
            </div>
          </div>

          <div className={styles.stage4}>
            <div className={styles.img}>
              <Image src={img4} alt='Number' />
            </div>

            <div className={styles.text}>
              Stage 4: Theater plans to offer an augmented reality virtual theater experience for NFT owners, allowing them to watch performances in an immersive and interactive environment.
            </div>
          </div>

          <div className={styles.stage5}>
            <div className={styles.img}>
              <Image src={img5} alt='Number' />
            </div>

            <div className={styles.text}>
              Stage 5: Cooming Soon
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap