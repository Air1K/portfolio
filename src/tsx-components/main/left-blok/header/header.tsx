import React from 'react';
import {motion} from "framer-motion";
import styles from './header-style.module.scss'
interface Props{
   active: number
}
const Header = (props: Props) => {
   return (
      <div className={styles.main}>
         <h1><a href={"#"} className={`${styles.head} text_type_3`}>Максим Викторович</a></h1>
         <h2 className={`text_type_3 mb-0 ${styles.h2_text}`}>Frontend developer</h2>
         <p>Как frontend-разработчик, я отвечаю за создание интерактивного и привлекательного пользовательского интерфейса для веб-приложений.</p>
         <nav className="pt-5 mt-1 w-auto" >
            <nav className="">
               <a className={`px-0 ${props.active === 0 ? styles.active : ''}`} href="#item-1"><span className={styles.nav_line}/><span className={styles.nav_text}>ОБО МНЕ</span></a>
               <a className={`px-0 ${props.active === 1 ? styles.active : ''}`} href="#item-2"><span className={styles.nav_line}/><span className={styles.nav_text}>НАВЫКИ</span></a>
               <a className={`px-0 ${props.active === 1 ? styles.active : ''}`} href="#item-2"><span className={styles.nav_line}/><span className={styles.nav_text}>ОБРАЗОВАНИЕ</span></a>
               <a className={`px-0 ${props.active === 2 ? styles.active : ''}`} href="#item-3"><span className={styles.nav_line}/><span className={styles.nav_text}>ПРОЕКТЫ</span></a>
            </nav>
         </nav>
      </div>
   );
};

export default Header;