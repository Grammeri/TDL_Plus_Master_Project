import React from 'react';
import styles from "./Position.module.css"
import Picture from "./../pictures/woman.png"

export const Position = () => {
    return (
        <div style={{width:"86vw", backgroundColor:'skyblue'}}>
            <div>
                <h2>Position: Relative & Absolute</h2>
            </div>
            <p></p>

            <div className={styles.body}>
                <div className={styles.container1}>Container-1</div>
                <div className={styles.container2}>Container-2
                    <div className={styles.innerContainer2}>InnerContainer2</div>
                </div>
                <div className={styles.container3}>Container-3</div>
                <div className={styles.container4}>Container-4</div>
                <div className={styles.glue}>Glue</div>
            </div>
            <div  >
                <img style={{position:"fixed", right:'0px',bottom:'0px',width:"150px"}} src={Picture}/>
            </div>
        </div>
    );
};


