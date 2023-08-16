import s from './Profile.module.css';

const Profile = () => {

return (
    <article className={s.profile}>
        <img className={s.profile__ava} src="../img/ava.jpg" alt="" />
        <h3 className={s.profile__title}>Олеся Д.</h3>
        <ul className={s.profile__list}>
        <li className={s.profile__item}>Дата рождения: 18.09.1984г.</li>
        <li className={s.profile__item}>Город: Москва</li>
        <li className={s.profile__item}>Образование: 2006г.</li>
        <li className={s.profile__item}>Web-сайт: http://o91999hr.beget.tech/olesya</li>
        </ul>
    </article>
    )
}

export default Profile;