import styles from './styles.module.scss'

import Hero from './components/Hero'

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  )
}

export default LandingPage