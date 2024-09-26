import React from "react";
import styles from "../education_window/education_window_style.module.scss";
import stylesProj from "./projects_window_style.module.scss";
import SvgPointer from "../education_window/svgPointer";
import { editOpacityDiv, resetOpacity } from "../../../../hooks/opacity_hooks";
import noOsuFon from "../../../../img/no_osu_no_life.png";
const ProjectsWindow = ({ nav }: any) => {
  const project = [
    {
      header: "Страны мира",
      body:
        "Данное приложение позволяет пользователю исследовать страны мира с использованием REST API. " +
        "Пользователь может просматривать основные сведения о каждой стране, такие как название, столица, население, регион и другие. " +
        "Реализована функция ленивой подгрузки, которая позволяет загружать данные по мере прокрутки страницы, обеспечивая удобный и плавный пользовательский опыт.",
      img: "https://screenshot-proxy.netlify.app/f_png,fit_cover,s_800x500/https://d33wubrfki0l68.cloudfront.net/66b50383e13e2100082b3534/screenshot_2024-08-08-17-43-33-0000.webp",
      instrumental: [
        "React",
        "TypeScript",
        "Axios",
        "Tailwind CSS",
        "React Bootstrap",
        "React Router",
        "Lazy Loading",
      ],
      href: "https://timely-conkies-206d24.netlify.app/",
    },
    {
      header: "Редактор шаблонов сообщений",
      body:
        "Данное приложение позволяет пользователю использовать виджет помогающий в создании сообщений. " +
        "Вы можете установить курсор в любой части текста, поле добавить виджет между сообщениями [Кнопка IF THEN ELSE]. В поле IF добавляется любая кнопка [firstName, lastName ...]" +
        "Если при просмотре сообщения в указанную кнопку вписать значение, она отработает как true, иначе false. В поля THEN и ELSE можно вписать что требуется или установить туда новый виджет. Вложенность виджетов не ограничена",
      img: "https://screenshot-proxy.netlify.app/f_jpg,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/652409fcebe729009b87fdbb/screenshot_2023-10-09-14-11-53-0000.png",
      instrumental: [
        "React",
        "TypeScript",
        "Mobx",
        "Sass",
        "Jest",
        "Lodash",
        "Autosize",
        "OOP",
        "React Router",
      ],
      href: "https://message-template-editor-airi.netlify.app/",
    },
    {
      header: '"No osu! - No life" site',
      body:
        "Сайт для osu комьюнити. Osu! - это компьютерная видеоигра, разработанная и опубликованная компанией “ppy”." +
        " Даный портал поможет людям находить необходимые сведения об игре, делиться своими достижениями, обмениваться файлами, формировать рейтинг, а так же создавать темы для обсуждения.",
      img: noOsuFon,
      instrumental: [
        "React",
        "TypeScript",
        "Sass",
        "Framer Motion",
        "Axios",
        "Lodash",
        "Mobx",
        "React Bootstrap",
        "React Router",
        "OOP",
        "JWT",
      ],
      href: "https://no-osu-no-life.netlify.app/",
    },
    {
      header: "Spa Todo",
      body: "Менеджер задач целью разработки которого являлось изучить работу Redux.",
      img: "https://screenshot-proxy.netlify.app/f_jpg,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/652024e6abf4a300081958ca/screenshot_2023-10-06-15-17-32-0000.png",
      instrumental: [
        "React",
        "TypeScript",
        "Framer Motion",
        "Redux",
        "React Bootstrap",
        "React Router",
      ],
      href: "https://spa-todo-list1928.netlify.app",
    },
    {
      header: "Yandex Scooter",
      body: "Одностраничный сайт с адаптивным дизайном созданный по макету из фигмы, для тренеровки навыков верстальщика.",
      img: "https://screenshot-proxy.netlify.app/f_jpg,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/6502281f3162fa000803e6a7/screenshot_2023-09-13-21-23-11-0000.png",
      instrumental: [],
      href: "https://yandex-scuter-task-adaptive.netlify.app",
    },
    {
      header: "Duel Game",
      body:
        "Игра, в которой два героя на прямоугольном поле Canvas сражаются друг с другом. Герои представляют собой круги, которые движутся по прямой вверх и вниз на противоположных сторонах экрана. " +
        "Герои отталкиваются от краев поля и курсора мыши, а также стреляют заклинаниями — маленькими шариками, которые исчезают при попадании во врага, засчитывая очки. " +
        "Пользователь может кликнуть на героя, чтобы открыть меню, созданное с помощью React, для изменения цвета заклинаний. " +
        "Также доступны два ползунка для настройки частоты стрельбы и скорости движения каждого героя. Реализация выполнена на чистом Canvas и React без использования сторонних графических или игровых библиотек.",
      img: "https://screenshot-proxy.netlify.app/f_png,fit_cover,s_800x500/https://d33wubrfki0l68.cloudfront.net/66bfa0317a6e140008e65aec/screenshot_2024-08-16-18-54-41-0000.webp",
      instrumental: ["Canvas", "React", "TypeScript", "SASS"],
      href: "https://duel-game.netlify.app/",
    },
    {
      header: "Snake Game",
      body:
        'Стандартная игра "Змейка", разработанная на React с использованием TypeScript и Canvas. ' +
        "Игра включает в себя счетчик очков, настройки управления и возможность отправлять результаты на сервер.",
      img: "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/66df557fca70d800081421c9/screenshot_2024-09-09-20-08-24-0000.webp&fit=cover&h=500&q=40&w=800",
      instrumental: ["React", "TypeScript", "Canvas", "SASS"],
      href: "https://cozy-travesseiro-9d914c.netlify.app",
    },
  ];
  return (
    <section ref={nav}>
      <div className={"header_paragraph"}>
        <h2>Проекты</h2>
      </div>
      <div className={`position-relative`}>
        {project.map((proj, index) => (
          <div
            key={index}
            className={`mb-5 position-relative transition ${styles.row}`}
            onMouseEnter={editOpacityDiv}
            onMouseLeave={resetOpacity}
            onClick={() => {
              window.open(proj.href);
            }}
          >
            <span className={`${styles.card} transition`} />
            <div className={`${styles.content} ${styles.contentReverse}`}>
              <div className={stylesProj.imgContainer}>
                <img src={proj.img} className={`transition`} alt="no-img" />
              </div>
              <div className={"body_"}>
                <a
                  href={"http://www.osu.ru/"}
                  className={`${styles.headHref} m-0`}
                >
                  {proj.header}
                  <SvgPointer />
                </a>
                <p className={"mb-1"}>{proj.body}</p>
                <div className={`mt-2 d-flex flex-wrap`}>
                  {proj.instrumental.map((instruments, index) => (
                    <span
                      className={`text_type_2 px-3 py-1 me-2 mt-2`}
                      key={index}
                    >
                      {instruments}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsWindow;
