import React from 'react';
import {Container, Row} from "react-bootstrap";
import LeftBlok from "./left-blok/left-blok";
import RightBlok from "./right-blok/right-blok";
import styles from './main-style.module.scss'
interface Props{
   active: number,
   ref_nav_1:  React.MutableRefObject<HTMLDivElement>,
   ref_nav_2:  React.MutableRefObject<HTMLDivElement>,
   ref_nav_3:  React.MutableRefObject<HTMLDivElement>
}
const Main = (props: Props) => {
   return (
      <Container className={'px-5'}>
         <div className={`d-flex justify-content-evenly ${styles.main}`}>
            <LeftBlok active={props.active}/>
            <RightBlok nav_1={props.ref_nav_1} nav_2={props.ref_nav_2} nav_3={props.ref_nav_3}/>
         </div>
      </Container>
   );
};

export default Main;