import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import cn from 'classnames'

import styles from './menu.module.css';

type Menu = DetailedHTMLProps<
		InputHTMLAttributes<HTMLUListElement>,
		HTMLUListElement
	>

const Menu = ({className, ...props}: Menu) => {
  return (
	<nav>
		<ul className={cn(styles.listMenu, className)} {...props}>
			<li><a href="#">Home</a></li>
			<li><a href="#">Success Stories</a></li>
			<li><a href="#">Services</a></li>
			<li><a href="#">Blog</a></li>
			<li><a href="#">About us</a></li>
			<li><a href="#">Career</a></li>
		</ul>
	</nav>
  )
}

export default Menu