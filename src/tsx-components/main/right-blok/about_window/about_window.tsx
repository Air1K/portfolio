import React, {useState} from 'react';
import styles from './about_window_style.module.scss'
const AboutWindow = ({nav}: any) => {
   const [stylesOsu, setStulesOsu] = useState('')
   function handelHover(){
      setStulesOsu(styles.hover)
   }
   function handelLeave(){
      setStulesOsu(styles.leave)
   }
   return (
      <section ref={nav}>
         <div></div> {/* Прилипает */}
         <div className={styles.text}>
            <p>
               Активно изучаю ReactJS имею глубокое
               понимание принципов работы React и
               его основных компонентов, а также опытом работы с библиотеками React Router Dom, MobX и другими..
               В свободное от учебы время изучаю
               новые технологии.
            </p>
            <p>
               Я постоянно
               стремлюсь к развитию своих навыков, не
               боюсь трудностей, умею работать в
               коллективе и быстро адаптируюсь в
               использовании новых средств для
               разработки систем. В университете
               выполнял задачи научного сотрудника
               по написанию программ не относящихся
               к образовательному процессу.
            </p>
            <p>
               На данный момент работаю над full-stack проектом для своего <a href="https://discord.gg/xcrfrJ5QsN" className={'hover_a'}>дискорд канала</a> посвещенного игре
               <a onMouseEnter={handelHover}
                  onMouseLeave={handelLeave}
                  className={`${styles.hover_osu} ${stylesOsu}`}
                  href="https://osu.ppy.sh/">
               <span className={styles.span_osu_1}>O</span><span className={styles.span_osu_2}>s</span><span className={styles.span_osu_3}>u</span><span className={styles.span_osu_4}>!</span></a>
            </p>
         </div>
      </section>
   );
};

export default AboutWindow;