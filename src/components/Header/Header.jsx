import './Header.css'
import logo from '../../assets/logo-sportsee.png'

function Header() {

    return (
        <header className='headerLayout'>
            <img className='headerLogo' src={logo} alt="Logo Sportsee" />
            <a href='#' alt="Page d'acceuil">Acceuil</a>
            <a href='#' alt="Page Profil">Profil</a>
            <a href='#' alt="Réglage">Réglage</a>
            <a href='#' alt="Communauté">Communauté</a>
        </header>
    )
}

export default Header