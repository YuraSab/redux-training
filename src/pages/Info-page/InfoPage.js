import React from 'react';
// import styles from "../Products-page/Products-page.module.css";
import styles from "./InfoPage.module.css";
import Image from '../../photos/img.png';


const InfoPage = () => {

    return (
        <div className={styles.mainDiv}>
            <div className={styles.title}>
                About us
            </div>
            <div className={styles.description}>
                The California Consumer Privacy Act (CCPA) provides you with rights regarding how your data or personal information is treated. Under the legislation, California residents can choose to opt out of the “sale” of their personal information to third parties. Based on the CCPA definition, “sale” refers to data collection for the purpose of creating advertising and other communications.
            </div>
            <div className={styles.photo}>
                <img src={Image} alt={`info`}/>
            </div>
        </div>
    )
}

export {InfoPage}