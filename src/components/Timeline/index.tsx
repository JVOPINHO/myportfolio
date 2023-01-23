import React from 'react';
import styles from './styles.module.scss';

interface EventProps {
	title?: string
};

export const TimelineEvent: React.FC<React.PropsWithChildren<EventProps>> = ({ title, children }) => (
	<div className={styles.event}>
		<span className={styles.dot} />
		{title && <h3>{title}</h3>}
			
		<div className={styles.content}>
			{children}
		</div>
	</div>
);

export const Timeline: React.FC<React.PropsWithChildren> = ({ children }) => (
	<div className={styles.container}>
		<div className={styles.list}>
			{children}
		</div>
	</div>
);