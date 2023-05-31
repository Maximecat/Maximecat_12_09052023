import './Header.css'
import logo from '../../assets/logo-sportsee.png'

function Header() {

    return (
        <header className='headerLayout'>
            <img src={logo} alt="Logo Sportsee" />
            <a href='#' alt="achanger">Acceuil</a>
            <a href='#' alt="achangedfr">Profil</a>
            <a href='#' alt="achangfeer">Réglage</a>
            <a href='#' alt="achangfeffer">Communauté</a>
        </header>
    )
}

export default Header