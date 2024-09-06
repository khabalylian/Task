import Header from './components/Layout/Header/Header'
import LatesPost from './components/Layout/LatesPost/LatesPost'
import OurValues from './components/Layout/OurValues/OurValues'

import styles from './App.module.css'
import Layout from './components/LayoutComponent/LayoutComponent'
import { Footer } from './components/Layout/Footer/Footer'
import { Slider } from './components/Layout/Slider/Slider'

function App() {
  return (
	<Layout>
		<div className={styles.header}>
			<Header/>
		</div>
		<LatesPost/>
		<div className={styles.ourValues}>
			<OurValues/>
		</div>
		<Slider/>
		<Footer/>
	</Layout>
  )
}

export default App
