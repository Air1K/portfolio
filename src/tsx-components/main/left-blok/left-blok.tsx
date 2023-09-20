import React from 'react';
import Header from "./header/header";
import {Col} from "react-bootstrap";
import styles from "./left-blok-style.module.scss"
const LeftBlok = (props: any) => {
   return (
      <header className={`${styles.blok} position-sticky top-0`}>
         <div className={''}>
            <Header {...props}/>
         </div>
      </header>
   );
};

export default LeftBlok;