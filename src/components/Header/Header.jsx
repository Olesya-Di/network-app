import s from './Header.module.css'


const Header = () => {
    return (
        <>
            <header className={s.header}>
                <img className={s.logo} src="../img/logo.png" alt="#" />
            </header>
        </>
    )
}

export default Header;