import Swiper from 'swiper';
import 'swiper/css';

import styles from './Slider.module.css'
import { Navigation, Pagination } from 'swiper/modules';

import slidePhoto from '../../../assets/slider.jpg'

export const Slider = () => {

	const swiper = new Swiper('.swiper', {
		modules: [Navigation, Pagination],
		direction: 'horizontal',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
		},
		slidesPerView: 'auto',
		centeredSlides: true,
		spaceBetween: 0,
	});

  return (
	<div className={styles.slider}>
		<div className="swiper">
			<div className="swiper-wrapper">

			<div className="swiper-slide" style={{width: '70%'}}>
				<div className={styles.wrapperSlide}>
					<h3 className={styles.slideTitle}>Printify Blog</h3>
					<img className={styles.slideImg} src={slidePhoto} alt="photoSlide" />
					<button className={styles.slideBtn}>See more</button>
				</div>
			</div>
			<div className="swiper-slide" style={{width: '70%'}}>
				<div className={styles.wrapperSlide}>
					<h3 className={styles.slideTitle}>Printify Blog</h3>
					<img className={styles.slideImg} src={slidePhoto} alt="photoSlide" />
					<button className={styles.slideBtn}>See more</button>
				</div>
			</div>
		</div>

		<div className="swiper-button-prev"></div>
		<div className="swiper-button-next"></div>

		<div className="swiper-scrollbar"></div>
		</div>
	</div>
  )
}
