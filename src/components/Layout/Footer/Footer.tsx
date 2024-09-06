import Logo from '../../../assets/Logo'
import { FooterSocial } from '../../FooterSocial/FooterSocial'
import Menu from '../../Menu/Menu'

import styles from '../Footer/Footer.module.css'

export const Footer = () => {
  return (
	<div className={styles.footer}>
		<Logo/>
		<Menu className={styles.footerMenu}/>
		<FooterSocial/>
	</div>
  )
}
