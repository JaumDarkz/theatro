import styles from './styles.module.scss'

import Hero from './components/Hero'
import About from './components/About'

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <About />
    </div>
  )
}

export default LandingPage