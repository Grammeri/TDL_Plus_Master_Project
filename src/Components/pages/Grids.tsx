import React from 'react';
import styles from './Grids.module.css'

export const Grids = () => {
    return (
        <div style={{margin:'40px'}}>
            <div className={styles.general}>
                <div className={styles.header}>Header</div>
                <div className={styles.nav}>Nav</div>
                <div className={styles.content}>Content</div>
                <div className={styles.nav2}>Nav2</div>
                <div className={styles.footer}>Footer</div>
            </div>
        </div>

    );
};

