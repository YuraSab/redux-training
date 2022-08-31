import React from 'react';
import styles from "./Header.module.css";
import {Link} from "react-router-dom";
import Logo from "../../photos/Habibi.jpg";


const Header = () => {

    return (
        <div className={styles.mainDiv}>


            <Link className={styles.link} to={'/'}>
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


            <div style={{justifyContent: "end"}}>
                <img src={Logo} style={{width: 250, paddingLeft: 700}} alt={'Logo'}/>
            </div>


        </div>
    )
}

export {Header}