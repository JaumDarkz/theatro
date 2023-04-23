import Image from 'next/image'

import styles from './styles.module.scss'

import mask1 from './assets/masks/1mask.svg'
import mask2 from './assets/masks/2mask.svg'
import mask3 from './assets/masks/3mask.svg'
import mask4 from './assets/masks/4mask.svg'
import mask5 from './assets/masks/5mask.svg'
import mask6 from './assets/masks/6mask.svg'
import mask7 from './assets/masks/7mask.svg'

const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.limitContainer}>
          <div className={styles.leftSide}>
            <div className={styles.title}>
              NFT Collection <br />
              Handmade <br />
              Generative Art
            </div>

            <div className={styles.description}>
              Help artists around the world by purchasing <br /> Theater NFT.
            </div>

            <div className={styles.buttonsContainer}>
              <div className={styles.discord} onClick={() => window.open('htpps://discord.com/theatronft', '_blank')}>
                Discord
              </div>

              <div className={styles.twitter}>
                Twitter
              </div>
            </div>
          </div>

          <div className={styles.rightSide} />
        </div>
      </div>

      <div className={styles.numbersContainer}>
        <div className={styles.number}>
          <div className={styles.column}>
            <div className={styles.data}>
              3333
            </div>

            <div className={styles.title}>
              Total Items
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.data}>
              1525
            </div>

            <div className={styles.title}>
              Total Owners
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.data}>
              1.33
            </div>

            <div className={styles.title}>
              Floor Price (ETH)
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.data}>
              724
            </div>

            <div className={styles.title}>
              Volume Traded (ETH)
            </div>
          </div>
        </div>
      </div>

      <div className={styles.masksContainer}>
        <div className={styles.masks1}>
          <div className={styles.mask}>
            <Image src={mask1} alt='Mask' className={styles.img} />
          </div>

          <div className={styles.mask}>
            <Image src={mask2} alt='Mask' className={styles.img} />
          </div>

          <div className={styles.mask}>
            <Image src={mask3} alt='Mask' className={styles.img} />
          </div>
        </div>

        <div className={styles.masks2}>
          <div className={styles.mask}>
            <Image src={mask7} alt='Mask' className={styles.img} />
          </div>

          <div className={styles.mask}>
            <Image src={mask6} alt='Mask' className={styles.img} />
          </div>

          <div className={styles.mask}>
            <Image src={mask5} alt='Mask' className={styles.img} />
          </div>

          <div className={styles.mask}>
            <Image src={mask4} alt='Mask' className={styles.img} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero