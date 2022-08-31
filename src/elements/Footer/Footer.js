import React from 'react';
import styles from "./Footer.module.css";
import Logo from "../../photos/Habibi.jpg";
import Telegram from "../../photos/telegram.png";
import Instagram from "../../photos/insta.png";
import Wats_up from "../../photos/watsap.png";
import Facebook from "../../photos/facebook.png";


const Footer = () => {

    return (
        <div className={styles.mainDiv}>


            <div className={styles.contacts}>
                <h1>Час роботи</h1>
                <h3>пн-пт: 9:00 - 19:00</h3>
                <h3>сб-нд: 10:00 - 17:00</h3>
            </div>

            <div>

                <img
                    src={Logo}
                    alt={'Logo'}
                    className={styles.logo}
                />

                <div>

                    <a href={'https://web.telegram.org'} target={'_blank'}>

                        <img
                            src={Telegram}
                            alt={'Telegram'}
                            className={styles.mediaIcon}
                        />
                    </a>


                    <a href={'https://www.instagram.com'} target={'_blank'}>
                        <img
                            src={Instagram}
                            alt={'Instagram'}
                            className={styles.mediaIcon}
                        />
                    </a>


                    <a href={'https://web.whatsapp.com'} target={'_blank'}>
                        <img
                            src={Wats_up}
                            alt={'Wats_up'}
                            className={styles.mediaIcon}
                        />
                    </a>


                    <a href={'https://www.facebook.com/'} target={'_blank'}>
                        <img
                            src={Facebook}
                            alt={'Facebook'}
                            className={styles.mediaIcon}
                        />
                    </a>


                </div>
            </div>

            <div className={styles.contacts}>
                <h1>Contacts</h1>
                <h3>380-54-148-82-28</h3>
                <h3>380-27-322-20-04</h3>
                <h3>habibihabobs@gmail.com</h3>
            </div>
        </div>
    )
}

export {Footer}