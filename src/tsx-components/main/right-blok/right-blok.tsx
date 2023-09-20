import React from 'react';
import {Col} from "react-bootstrap";
import styles from './right-blok-style.module.scss'
import AboutWindow from "./about_window/about_window";
interface Props{
   nav_1:  React.MutableRefObject<HTMLDivElement>,
   nav_2:  React.MutableRefObject<HTMLDivElement>,
   nav_3:  React.MutableRefObject<HTMLDivElement>
}
const RightBlok = (props: Props ) => {
   return (
      <main className={styles.blok}>
         <AboutWindow nav={props.nav_1}/>
      </main>
   );
};

export default RightBlok;