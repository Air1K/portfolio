import React from 'react';
import styles from "../education_window/education_window_style.module.scss";
import stylesProj from './projects_window_style.module.scss';
import SvgPointer from "../education_window/svgPointer";
import {editOpacityDiv, resetOpacity} from "../../../../hooks/opacity_hooks";
import noOsuFon from '../../../../img/no_osu_no_life.png';
const ProjectsWindow = ({nav}: any) => {
   const project = [{
      header: 'Редактор шаблонов сообщений',
      body: 'Данное приложение позволяет пользователю использовать виджет помогающий в создании сообщений. ' +
         'Вы можете установить курсор в любой части текста, поле добавить виджет между сообщениями [Кнопка IF THEN ELSE]. В поле IF добавляется любая кнопка [firstName, lastName ...]' +
         'Если при просмотре сообщения в указанную кнопку вписать значение, она отработает как true, иначе false. В поля THEN и ELSE можно вписать что требуется или установить туда новый виджет. Вложенность виджетов не ограничена',
      img: 'https://screenshot-proxy.netlify.app/f_jpg,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/652409fcebe729009b87fdbb/screenshot_2023-10-09-14-11-53-0000.png',
      instrumental: ["React", 'TypeScript', 'Mobx', 'Sass', 'Jest', 'Lodash', 'Autosize', 'OOP', 'React Router'],
      href: 'https://message-template-editor-airi.netlify.app/'
   },{
      header: 'Yandex Scooter',
      body: 'Одностраничный сайт с адаптивным дизайном созданный по макету из фигмы, для тренеровки навыков верстальщика.',
      img: 'https://screenshot-proxy.netlify.app/f_jpg,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/6502281f3162fa000803e6a7/screenshot_2023-09-13-21-23-11-0000.png',
      instrumental: [],
      href: 'https://yandex-scuter-task-adaptive.netlify.app'
   },{
      header: '"No osu! - No life" site',
      body: 'Сайт для osu комьюнити. Osu! - это компьютерная видеоигра, разработанная и опубликованная компанией “ppy”.' +
         ' Даный портал поможет людям находить необходимые сведения об игре, делиться своими достижениями, обмениваться файлами, формировать рейтинг, а так же создавать темы для обсуждения.',
      img: noOsuFon,
      instrumental: ["React", 'TypeScript', 'Sass', 'Framer Motion', 'Axios', 'Lodash','Mobx', 'React Bootstrap', 'React Router', 'OOP', "JWT"],
      href: 'https://no-osu-no-life.netlify.app/'
   }, {
      header: 'Spa Todo',
      body: 'Менеджер задач целью разработки которого являлось изучить работу Redux.',
      img: 'https://screenshot-proxy.netlify.app/f_jpg,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/652024e6abf4a300081958ca/screenshot_2023-10-06-15-17-32-0000.png',
      instrumental: ["React", 'TypeScript', 'Framer Motion', 'Redux', 'React Bootstrap', 'React Router'],
      href: 'https://spa-todo-list1928.netlify.app'
   }]
   return (
      <section ref={nav}>
         <div className={'header_paragraph'}><h2>Проекты</h2></div>
         <div className={`position-relative`}>
            {project.map((proj, index)=>
               <div key={index} className={`mb-5 position-relative transition ${styles.row}`}
                    onMouseEnter={editOpacityDiv}
                    onMouseLeave={resetOpacity}
                    onClick={() => {
                       window.open(proj.href)
                    }}>
                  <span className={`${styles.card} transition`}/>
                  <div className={`${styles.content} ${styles.contentReverse}`}>
                     <div className={stylesProj.imgContainer}><img src={proj.img} className={`transition`} alt="no-img"/></div>
                     <div className={"body_"}>
                        <a href={"http://www.osu.ru/"} className={`${styles.headHref} m-0`}>{proj.header}<SvgPointer/></a>
                        <p className={'mb-1'}>{proj.body}</p>
                        <div className={`mt-2 d-flex flex-wrap`}>
                           {proj.instrumental.map((instruments, index)=>
                           <span className={`text_type_2 px-3 py-1 me-2 mt-2`} key={index}>{instruments}</span>
                           )}
                        </div>
                     </div>
                  </div>

               </div>
            )}
         </div>
      </section>
   );
};

export default ProjectsWindow;