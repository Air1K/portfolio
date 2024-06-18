import React from 'react';
import styles from './skills_window_style.module.scss'
const SkillsWindow = ({nav}: any) => {
   return (
      <section ref={nav}>
         <div className={`header_paragraph`}><h2>Навыки</h2></div> {/* Прилипает */}
          <div className={`d-flex mw-100 overflow-x-hidden flex-wrap ${styles.skills}`}>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>C#</span>
              <span>C++</span>
              <span>OOP</span>
              <span>SQL</span>
              <span>HTML5</span>
              <span>CSS</span>
              <span>Sass</span>
              <span>ReactJS</span>
              <span>React Next</span>
              <span>React Native</span>
              <span>Flutter</span>
              <span>Vue 2</span>
              <span>Vue 3</span>
              <span>Refine</span>
              <span>Tailwind CSS</span>
              <span>BEM</span>
              <span>Git</span>
              <span>Bootstrap</span>
              <span>Mobx</span>
              <span>WebSocket</span>
              <span>jQuery</span>
              <span>Node.js</span>
              <span>PHP</span>
              <span>Ajax</span>
              <span>Адаптивная и
отзывчивая верстка</span>
              <span>API</span>
              <span>Ubuntu</span>
              <span>Backend</span>
              <span>Material Ui</span>
              <span>Framer Motion</span>
              <span>React
Router Dom</span>
              <span>Figma</span>
              <span>Photoshop</span>
          </div>
      </section>
   );
};

export default SkillsWindow;
