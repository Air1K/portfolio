import React from 'react';
import {Col} from "react-bootstrap";
import styles from './right-blok-style.module.scss'
import AboutWindow from "./about_window/about_window";
import SkillsWindow from "./skills_window/skills_window";
import EducationWindow from "./education_window/education_window";
import ProjectsWindow from "./ projects_window/ projects_window";
import Footer from "./footer/footer";
interface Props{
   nav_1:  React.MutableRefObject<HTMLDivElement>,
   nav_2:  React.MutableRefObject<HTMLDivElement>,
   nav_3:  React.MutableRefObject<HTMLDivElement>,
   nav_4:  React.MutableRefObject<HTMLDivElement>
}
const RightBlok = (props: Props ) => {
   return (
      <main className={styles.block}>
         <AboutWindow nav={props.nav_1}/>
         <SkillsWindow nav={props.nav_2}/>
         <EducationWindow nav={props.nav_3}/>
         <ProjectsWindow nav={props.nav_4}/>
         <Footer/>
      </main>
   );
};

export default RightBlok;