import React from 'react';
import styles from "./Products-page.module.css";
import {Link, useLocation} from "react-router-dom";
import MaleImage from "../../photos/d123e0a31c55f2f70ebd92ed1c110ee3.jpg";
import FemaleImage from "../../photos/istockphoto-1160533209-170667a.jpg";

const ProductPage = () => {

    const {pathname} = useLocation();


    return (
        <div className={styles.mainDiv}>


            <Link className={styles.linker} to={`${pathname}/male`} >
                <div className={styles.gender}>
                    <img src={MaleImage} height={600} alt={'male'}/>
                </div>
                <div className={styles.genderText}>Male</div>

            </Link>


            <Link className={styles.linker} to={`${pathname}/female`}>
                <div className={styles.gender}>
                    <img src={FemaleImage} height={600} alt={'female'}/>
                </div>
                <div className={styles.genderText}>Female</div>
            </Link>

        </div>
    )
}

export {ProductPage}