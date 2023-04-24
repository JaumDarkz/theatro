import Image from 'next/image'

import styles from './styles.module.scss'

import twitter from './assets/twitter.svg'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <div className={styles.bgContainer}>
          <div className={styles.titleContainer}>
            JOIN OUR COMMUNITY
          </div>

          <div className={styles.socialContainer}>
            <div className={styles.icon}>
              <Image src={twitter} alt='Twitter' onClick={() => window.open('https://twitter.com/theatronft')} />
            </div>
          </div>

          <div className={styles.copyrightContainer}>
            COPYRIGHT © 2023 THEATRO
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer