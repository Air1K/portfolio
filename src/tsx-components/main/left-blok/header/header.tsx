import React from 'react';
import {motion} from "framer-motion";
import styles from './header-style.module.scss'
const Header = (props: any) => {
   return (
      <div className={styles.main}>
         <h1><a href={"#"} className={`${styles.head} text_type_3`}>Веремеенко Максим</a></h1>
         <h2 className={`text_type_3 mb-0 ${styles.h2_text}`}>Frontend developer</h2>
         <p>Как frontend-разработчик, я отвечаю за создание интерактивного и привлекательного пользовательского интерфейса для веб-приложений.</p>
         <nav className={`pt-5 mt-1 w-auto ${styles.nav_panel}`} >
            <nav className="">
               <a className={`px-0 ${props.active === 0 ? styles.active : ''}`} href="#about" onClick={()=>props.ref_nav_1.current.scrollIntoView({ block: "center", behavior: "smooth" })}><span className={styles.nav_line}/><span className={styles.nav_text}>ОБО МНЕ</span></a>
               <a className={`px-0 ${props.active === 1 ? styles.active : ''}`} href="#skills" onClick={()=>props.ref_nav_2.current.scrollIntoView({ block: "center", behavior: "smooth" })}><span className={styles.nav_line}/><span className={styles.nav_text}>НАВЫКИ</span></a>
               <a className={`px-0 ${props.active === 2 ? styles.active : ''}`} href="#education" onClick={()=>props.ref_nav_3.current.scrollIntoView({ block: "center", behavior: "smooth" })}><span className={styles.nav_line}/><span className={styles.nav_text}>ОБРАЗОВАНИЕ</span></a>
               <a className={`px-0 ${props.active === 3 ? styles.active : ''}`} href="#projects" onClick={()=>props.ref_nav_4.current.scrollIntoView({ block: "center", behavior: "smooth" })}><span className={styles.nav_line}/><span className={styles.nav_text}>ПРОЕКТЫ</span></a>
            </nav>
         </nav>
      </div>
   );
};

export default Header;