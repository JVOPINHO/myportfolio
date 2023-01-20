import React from 'react';
import styles from './styles.module.scss';

const date = new Date();

const getYears = () => {
	const month = date.getMonth();
	const day = date.getDate();

	console.log(day, month);

	return date.getFullYear() - 2005 - (month < 3 && !(month == 2 && day == 31) ? 1 : 0);
};

export const Intro: React.FC = () => (
	<section className={styles.wrapper}>
		<div className={styles.wrapper}>
			<div className={styles.image}>
				<div className={styles.backgroundColor}>
					<img src={'https://github.com/jvopinho.png'} alt={'@jvopinho avatar'} />
				</div>
			</div>
			<br />
			<section>
				<div className={styles.cards}>
					<a href={'/cv'}>
						<div className={`${styles.card} ${styles.invertColor}`}>
							Download CV
						</div>
					</a>
					<a href={'https://github.com/jvopinho'}>
						<div className={styles.card}>
						Github
						</div>
					</a>
				</div>

				<p>
					My Real Name is João Pinho, but I like to be called Pinho,
					<br />
					But my online-alias is Bae our jvopinho,
					<br />
					I am {getYears()} years old, I was born and I live in Brazil, in the state of São Paulo.
					<br />
					<br />
					I entered the programming world in 2019 with my school&apos;s robotics group, and in 2020 I changed my area of work to backend and bots for discord.
				</p>
			</section>
		</div>
	</section>
);