import styles from "./App.module.css";

const Project1 = () => {
return (
    <div className={styles.App}>
    <ul className={styles.navigation}>
        <button className={styles.menuButton}>Обо мне</button>
        <button className={styles.ButtonBlack}>Контакты</button>
    </ul>

    <div className={styles.avatarRam}></div>

    <div className={styles.Project1}>
        <header className={styles.header}>
        <h1>Онлайн-магазин сельскохозяйственной техники</h1>
        <p>Современный онлайн-магазин с удобной оплатой и быстрой доставкой.</p>
        </header>

        <main className={styles.mainContent}>
        <section className={styles.section}>
            <h2>Описание проекта:</h2>
            <p>Мы создали удобный и современный онлайн-магазин, позволяющий клиентам легко находить нужную сельскохозяйственную технику, сравнивать цены и быстро оформлять заказы с удобством оплаты онлайн.</p>
        </section>

        <section className={styles.section}>
            <h2>Особенности проекта:</h2>
            <ul>
            <li>Простота выбора товара с фильтрами и сортировкой.</li>
            <li>Удобная система оформления заказа с несколькими способами доставки.</li>
            <li>Возможность сравнения цен и характеристик товаров.</li>
            <li>Интеграция с платежными системами для безопасной оплаты.</li>
            </ul>
        </section>

        <section className={styles.section}>
            <h2>Демонстрация проекта:</h2>
            <a href="https://www.altaez.ru" target="_blank" rel="noopener noreferrer">Посмотреть сайт →</a>
        </section>

        <section className={styles.section}>
            <h2>Скриншоты:</h2>
            <img src="/result_кейс 1.png" alt="скриншот сайта" className={styles.image} />
        </section>
        </main>

        <footer className={styles.footer}>
        <p>© Егор Симонов, 2025</p>
        </footer>
    </div>
    </div>
);
};

export default Project1;