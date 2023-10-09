import React from 'react';
import styles from './footer-style.module.scss'
const Footer = () => {
   return (
      <section className={styles.text}>
         <p>
            Сайт спроектирован в <a href={"https://www.figma.com/"}>Figma</a> и закодирован в
            <a href="https://www.jetbrains.com/webstorm/"> Web Storm</a>. Создано с помощью
            <a href="https://nodejs.org/ru"> Node.js</a> и <a href="https://react-bootstrap.netlify.app/">Bootstrap</a>,
            развернуто с помощью
            <a href="https://app.netlify.com/"> Netlify</a>. Весь текст набран шрифтом <a href="https://rsms.me/inter/">Inter</a>.
         </p>
      </section>
   );
};

export default Footer;