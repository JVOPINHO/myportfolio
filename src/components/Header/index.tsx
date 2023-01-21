import React from 'react';

import styles from './styles.module.scss';

export const Header: React.FC = () => (
    <header className={styles.wrapper}>
        <div className={styles.header}>
            <h4>Hellow I&apos;m</h4>
            <h1>João Pinho</h1>
            <br />
            <h5>Backend Developer</h5>
        </div>
    </header>
);