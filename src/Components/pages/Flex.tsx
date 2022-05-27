import React from 'react';
import styles from "./Flex.module.css";

export const Flex = () => {
    return (
        <div >
            <h1>Flex</h1>
            <div className={styles.mainBox} >
                <div className={styles.box1}>Box1</div>
                <div className={styles.box2}>Box2</div>
                <div className={styles.box3}>Box3</div>
                <div className={styles.box4}>Box4</div>
            </div>

        </div>
    );
};