import style from "./App.module.css"

const projectList = [
  {
    title: 'онлайн-магазин сельскохозяйственной техники',
    description: 'современный онлайн магазин с возможностью оплаты',
    link: 'https://www.altaez.ru',
    thumbnail: '/result_кейс 1.png'
  },
  {
    title: 'портфолио архитектора',
    description: 'стильное портфолио Архитектора',
    link: 'https://bogomolovarch.ru/',
    thumbnail: '/photo_2025-05-20_19-.jpg'
  },
  {
    title: 'лендинг АкваСтудия',
    description: 'стильный и современный лендинг для продажи бассейнов',
    link: 'https://аквастудия64.рф/',
    thumbnail: ''
  },
  {
    title: 'корпоративный сайт АкваСтудия',
    description: 'стильный и современный сайт для продажи бассейнов',
    link: 'https://aqua-studio64.ru/',
    thumbnail: ''
  },
];

function App() {
  return (
    <div className={style.App}>
      <header className={style.navigation}>
        <button className={style.menuButton}>Обо мне</button>
        <button className={style.ButtonBlack}>Контакты</button>
      </header>

      <div className={style.avatarRam}></div>



      <div className={style.container}>
        
        <h1>Егор Симонов</h1>
        <p>Я — веб-разработчик с опытом работы в создании современных и эффективных веб-приложений. 
          Моя страсть к программированию и дизайну помогает мне создавать интуитивно понятные и привлекательные интерфейсы, 
          которые радуют пользователей.</p>
      </div>

      <button className={style.button}>Свяжитесь со мной</button>

      <section className={`${style.container} ${style.aboutMe}`}>
        <h2>Обо мне</h2>
        <p>Меня зовут Егор Симонов, я опытный веб-разработчик, занимаюсь созданием красивых и функциональных приложений.
          Люблю экспериментировать с новыми технологиями и постоянно совершенствуюсь.</p>
      </section>

      <section className={`${style.container} ${style.aboutMe}`}>
        <h2>Опыт</h2>
        <p>• Участие в разработке визуальных концепций и дизайна для различных проектов, включая сайты и мобильные приложения.</p>
        <p>• Подготовка графических материалов и элементов интерфейса, работа с типографикой и цветовой палитрой.</p>
        <p>• Взаимодействие с клиентами для сбора требований и предложений по улучшению дизайна.</p>
        <p>• Обучение основам фронтенд-разработки, включая работу с JavaScript и фреймворками.</p>
        <header>
          <button className={style.buttonEx}>react</button>
          <button className={style.buttonEx}>Java-script</button>
          <button className={style.buttonEx}>Tilda</button>
          <button className={style.buttonEx}>Typescript</button>
        </header>
      </section>


      <div className={style.App}>
        <section className={style.container}>
          <h2>Проекты</h2>
          <div className={style.portfolioGrid}>
            {projectList.map(({ title, description, link, thumbnail }, idx) => (
              <div key={`project-${idx}`} className={style.projectCard}>
                <a href={link} target="_blank" rel="noreferrer noopener">
                  <img src={thumbnail} alt={title} className={style.thumbnail}/>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
      

      

      <div className={style.logo}></div> {}
    </div>
  );
}

export default App
