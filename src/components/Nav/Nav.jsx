import s from './Nav.module.css';


const Nav = () => {
  return (
    <>
      <nav className={s.nav}>
        <ul className={s.nav__list}>
          <li className={s.nav__item}>
            <a className={s.nav__link} href="#">
              Профиль
            </a>
          </li>
          <li className={s.nav__item}>
            <a className={s.nav__link} href="#">
              Сообщения
            </a>
          </li>
          <li className={s.nav__item}>
            <a className={s.nav__link} href="#">
              Новости
            </a>
          </li>
          <li className={s.nav__item}>
            <a className={s.nav__link} href="#">
              Музыка
            </a>
          </li>
          <li className={s.nav__item}>
            <a className={s.nav__link} href="#">
              Настройки
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
