import styles from './LatesPost.module.css';

import stars from '../../../assets/stars.png';
import book from '../../../assets/book.png';
import phone from '../../../assets/phone.png'

const LatesPost = () => {
  return (
	<div className={styles.latesPost}>
		<h2 className={styles.mainTitle}>Latest posts</h2>
		<div className={styles.cards}>
			<div className={styles.box}>
				<div className={styles.text}>
					<h3 className={styles.title}>5 popular Rust web frameworks—which one is right for you?</h3>
					<p className={styles.desc}>From the simplicity of Poem to the full-featured speed of Actix, there's a Rust web framework for most every user and need.</p>
				</div>
				<img src={stars} alt="stars" />
			</div>
			<div className={styles.box}>
				<img src={book} alt="book" />
				<div className={styles.text}>
					<h3 className={styles.title}>JAVA VS PHP: WHICH LANGUAGE TO CHOOSE?</h3>
					<p className={styles.desc}>Choosing a programming language can be a major hurdle due to people lacking the necessary information to make the right decision.</p>
				</div>
			</div>
			<div className={styles.box}>
				<div className={styles.text}>
					<h3 className={styles.title}>Dive into the world of an iOS Developer–career, salary, and skills</h3>
					<p className={styles.desc}>When it comes to developing iOS applications, there are two main programming languages that professionals use: Objective-C and Swift. Objective-C is a C language that has additional object-oriented design. </p>
				</div>
				<img src={phone} alt="phone" />
			</div>
		</div>
	</div>
  )
}

export default LatesPost