import React from 'react';
import styles from "./FullWindowLayout.module.css";
// import {Header} from "../../elements/Header";
import {MainLayout} from "../MainLayout";


const FullWindowLayout = () => {

    return (
        <div className={styles.mainGrid}>
            {/*<header>*/}
            {/*    <Header/>*/}
            {/*</header>*/}
            <main>
                <MainLayout/>
            </main>
            {/*<footer>*/}
            {/*    <Footer/>*/}
            {/*</footer>*/}
        </div>
    )
}

export {FullWindowLayout}