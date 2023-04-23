import Image from 'next/image'

import styles from './styles.module.scss'

import logo from '@/public/assets/logo.svg'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.limitContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.logo}>
            <Image src={logo} alt='Logo' />
          </div>

          <div className={styles.optionsContainer}>
            <div className={styles.option}>
              About
            </div>

            <div className={styles.option}>
              Roadmap
            </div>

            <div className={styles.option}>
              Perks
            </div>

            <div className={styles.option}>
              FAQ
            </div>

            <div className={styles.option}>
              Collab
            </div>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.connectButton}>
            Connect
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar