import React from "react";
import styles from '../../styles/style.module.css';


const Header = () => {
    return(
        <nav className="navbar navbar-light bg-white">
                    <img className={styles.image1} src="https://lh3.googleusercontent.com/p/AF1QipNSyoM12XEx1Q9GMJDEb_-_CR5uw89PrMTgMxb_=s1280-p-no-v1"/>
                    <h1 className={styles.name1}>
                        IGLESIA IFGF ECUADOR
                    </h1>
        </nav>
    )


}
export default Header;