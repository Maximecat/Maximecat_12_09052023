import Nutriment from '../../components/Nutriment/Nutriment'
import './Profil.css'
import Flamme from './Flamme.png'
import Chicken from './Chicken.png'
import Apple from './Apple.png'
import Cheeseburger from './Cheeseburger.png'

function Profil() {

    return (
        <div className='profil-main'>
            <h1>Bonjour <span className='profil-name'>Thomas</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <div className='profil-datas-container'>
                <div className='graphic-container'></div>
                <div className='datas-container'>
                    <Nutriment image={Flamme} background="logo-flamme" value="1,930kCal" unit="Calories" />
                    <Nutriment image={Chicken} background="logo-chicken" value="155g" unit="Proteines" />
                    <Nutriment image={Apple} background="logo-apple" value="290g" unit="Glucides" />
                    <Nutriment image={Cheeseburger} background="logo-cheeseburger" value="50g" unit="Lipides" />
                </div>
            </div>

        </div>
    )
}

export default Profil