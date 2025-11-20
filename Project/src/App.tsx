import style from "./App.module.css"

function App() {

  return (
    <>
    <div className={style.App}>
    <nav className={style.navigation}>
          <button className={style.menuButton}>Главная</button>
          <button className={style.menuButton}>Услуги</button>
          <button className={style.menuButton}>Контакты</button>
        </nav>
        <nav>
          <h1 className={style.logo}></h1>
          <h2 className={style.header}>Портфолио</h2>
        </nav>
        <div className={style.container}>
          <h1>Егор Симонов</h1>
        </div>
        <div className={style.container}>
          <p>Я — веб-разработчик с опытом работы в создании современных и эффективных веб-приложений. 
            Моя страсть к программированию и дизайну помогает мне создавать интуитивно понятные и привлекательные интерфейсы,
            которые радуют пользователей.</p>
        </div>
        <button className={style.button}>Узнать подробнее</button>
        <section className={style.aboutMe}>
          <h2>Обо мне</h2>
          <p>Меня зовут Егор Симонов, я опытный веб-разработчик, занимаюсь созданием красивых и функциональных приложений.
            Люблю экспериментировать с новыми технологиями и постоянно совершенствуюсь.</p>
        </section>
        </div>
    </>
  )
}

export default App
