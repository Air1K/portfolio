import React from 'react';
import Header from "./header/header";
import {Col} from "react-bootstrap";
import styles from "./left-blok-style.module.scss"
import FooterHeader from "./footer-header";
const LeftBlok = (props: any) => {
   return (
      <header className={`${styles.block} position-sticky top-0`}>
         <div className={'d-flex flex-column justify-content-between h-100'}>
            <Header {...props}/>
            <FooterHeader/>
         </div>
      </header>
   );
};

export default LeftBlok;