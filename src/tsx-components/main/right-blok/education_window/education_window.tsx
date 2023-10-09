import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";
import styles from './education_window_style.module.scss'
import SvgPointer from "./svgPointer";
import {Link} from "react-router-dom";
import {editOpacityDiv, resetOpacity} from "../../../../hooks/opacity_hooks";

const EducationWindow = ({nav}: any) => {
   return (
      <section ref={nav}>
         <div className={`header_paragraph`}><h2>Образование</h2></div>
         <div className={`position-relative`}>
            <div className={`mb-5 position-relative transition ${styles.row}`}
                 onMouseEnter={editOpacityDiv}
                 onMouseLeave={resetOpacity}
                 onClick={() => {
                    window.open("http://www.osu.ru/")
                 }}>
               <div className={styles.content}>
                  <div className={'text_type_4_2'}>2019 — 2023</div>
                  <div className={"body_"}>
                     <a href={"http://www.osu.ru/"} className={`${styles.headHref} m-0`}>Оренбургский государственный
                        университет <SvgPointer/></a>
                     <p className={'text_type_4_3 mb-1'}>Институт математики и иформационных технологий</p>
                     <p className={'m-0'}><span>Группа:</span> Информатика и вычислительная техника</p>
                     <p className={'m-0'}><span>Профиль:</span> Программное обеспечение средств вычислительной техники и
                        автоматизированных систем.</p>
                     <p className={'m-0 mt-1'}>
                        Обучение закончил летом 2023 года на оценку отлично. Рассматриваю дальнейшее обучение
                        для получения степени магистра.
                     </p>
                  </div>
               </div>
               <span className={`${styles.card} transition`}/>
            </div>
            <div className={`mb-5 position-relative transition ${styles.row}`}
                 onMouseEnter={editOpacityDiv}
                 onMouseLeave={resetOpacity}
                 onClick={() => {
                    window.open("http://www.osu.ru/")
                 }}>
               <div className={styles.content}>

                  <div className={'text_type_4_2'}>2023 — сейчас</div>
                  <div className={"body_"}>
                     <a href={"http://www.osu.ru/"} className={`${styles.headHref} m-0`}>Оренбургский государственный
                        университет <SvgPointer/></a>
                     <p className={'text_type_4_3 mb-1'}>Институт математики и иформационных технологий</p>
                     <p className={'m-0'}><span>Группа:</span> Информатика и вычислительная техника</p>
                     <p className={'m-0'}><span>Магистерская программа:</span> Информационное и программное обеспечение
                        автоматизированных систем.</p>
                     <p className={'m-0 mt-1'}>
                        Прохожу обучение на данный момент.
                     </p>
                  </div>

               </div>
               <span className={`${styles.card} transition`}/>
            </div>
         </div>
         <Link to={'/web'} className={`text_type_3 size_3 transition ${styles.a_resume}`}>
            Показать подробное резюме
            <SvgPointer/>
         </Link>
      </section>
   );
};

export default EducationWindow;