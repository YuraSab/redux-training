import React from 'react';
import styles from "./Header.module.css";
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <div className={styles.mainDiv}>

            <Link className={styles.link}  to={'/'}>
                <div className={styles.divLink}>
                    Home
                </div>
            </Link>

            <Link className={styles.link} to={'/products'}>
                <div className={styles.divLink}>
                    Products
                </div>
            </Link>

            <Link className={styles.link} to={'/info'}>
                <div className={styles.divLink}>
                    Info
                </div>
            </Link>

        </div>
    )
}

export {Header}