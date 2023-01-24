import React from 'react';

import styles from './styles.module.scss';

import { skills as _skills } from '../../config';

const skills = [
	..._skills.filter(skill => skill.favorite),
	..._skills.filter(skill => !skill.favorite),
];

export const Skills: React.FC = () => (
	<div className={styles.skills} style={{gridTemplateColumns: `repeat(${skills.length <= 10 ? 10 : skills.length}, 1fr)`}}>
		{skills.map(skill => (<img key={skill.name} src={skill.image} />))}
	</div>
);