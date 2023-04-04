import Header from "../components/Header"
import Welcome from "../components/Welcome"
import Work from "../components/Work"
import Apropos from "../components/Apropos"
import styles from './Home.module.scss'
import Contact from "../components/Contact"
import Footer from "../components/footer"

export default function Home() {
  return <div className={styles.container}>
    <Header />
    <Welcome />
    <Work />
    <Apropos />
   <Contact />
   <Footer />
  </div>
}
