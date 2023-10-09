import React, {memo} from 'react';
import {Container, Row} from "react-bootstrap";
import LeftBlok from "./left-blok/left-blok";
import RightBlok from "./right-blok/right-blok";
import styles from './main-style.module.scss'
interface Props{
   active: number,
   ref_nav_1:  React.MutableRefObject<HTMLDivElement>,
   ref_nav_2:  React.MutableRefObject<HTMLDivElement>,
   ref_nav_3:  React.MutableRefObject<HTMLDivElement>,
   ref_nav_4:  React.MutableRefObject<HTMLDivElement>
}
const Main = (props: Props) => {
   return (
      <Container className={`position-relative z-2 ${styles.container}`}>
         <div className={`d-flex justify-content-evenly ${styles.main}`}>
            <LeftBlok {...props}/>
            <RightBlok nav_1={props.ref_nav_1} nav_2={props.ref_nav_2} nav_3={props.ref_nav_3} nav_4={props.ref_nav_4}/>
         </div>
      </Container>
   );
};

export default memo(Main);