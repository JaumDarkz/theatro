import styles from './styles.module.scss'

import Hero from './components/Hero'
import About from './components/About'
import Roadmap from './components/Roadmap'
import Team from './components/Team'
import Footer from './components/Footer'

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <About />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  )
}

export default LandingPage