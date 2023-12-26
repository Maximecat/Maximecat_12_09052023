import './Profil.css';
import Nutriment from '../../components/Nutriment/Nutriment';
import Flamme from '../../assets/Flamme.png';
import Chicken from '../../assets/Chicken.png';
import Apple from '../../assets/Apple.png';
import Cheeseburger from '../../assets/Cheeseburger.png';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import User from '../../utils/models/User';
import ApiService from '../../utils/services/ApiService';
import MyBarChart from '../../components/MyBarChart/MyBarChart';
import MyLineChart from '../../components/MyLineChart/MyLineChart';
import MyRadarChart from '../../components/MyRadarChart/MyRadarChart';
import MyPieChart from '../../components/MyPieChart/MyPieChart';

// Page Profil
function Profil() {
    // Récupération id par l'url
    const { id } = useParams();
    const navigate = useNavigate()

    // Création des states pour acceuilir les datas
    const [user, setUser] = useState(new User({
        userInfos: {},
        keyData: {}
    }))

    const [activities, setActivities] = useState([])

    const [averageSessions, setAverageSessions] = useState([])

    const [performances, setPerformances] = useState([])

    const datasService = useMemo(() => new ApiService(), [])

    // Récupération des datas
    useEffect(() => {
        async function getDatas() {
            try {
                const user = await datasService.getUserInformations(id)
                setUser(user)
            } catch (error) {
                navigate("utilisateur-non-trouve")
            }
        }
        getDatas()
    }, [id, datasService, navigate])

    useEffect(() => {
        async function getDatasActivities() {
            try {
                const activityDatas = await datasService.getUserActivities(id)
                setActivities(activityDatas)
            } catch (error) {
                navigate("utilisateur-non-trouve")
            }
        }
        getDatasActivities()
    }, [id, datasService, navigate])

    useEffect(() => {
        async function getDatasSessions() {
            try {
                const averageSession = await datasService.getUserAverageSessions(id)
                setAverageSessions(averageSession)
            } catch (error) {
                navigate("utilisateur-non-trouve")
            }
        }
        getDatasSessions()
    }, [id, datasService, navigate])

    useEffect(() => {
        async function getDatasPerformances() {
            try {
                const performanceDatas = await datasService.getUserPerformances(id)
                setPerformances(performanceDatas)
            } catch (error) {
                navigate("utilisateur-non-trouve")
            }
        }
        getDatasPerformances()
    }, [id, datasService, navigate])

    return (
        <div className='profil-main'>
            <h1 className='personnal-welcome'>Bonjour <span className='profil-name'>{user.firstName}</span></h1>
            <p className='personnal-sentence'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <div className='profil-datas-container'>
                <div className='charts-container'>
                    <MyBarChart activities={activities} />
                    <div className='second-charts-container'>
                        <MyLineChart averageSessions={averageSessions} />
                        <MyRadarChart performances={performances} />
                        <MyPieChart user={user} />
                    </div>
                </div>
                <div className='nutriment-container'>
                    <Nutriment image={Flamme} background="logo-flamme" value={user.calorieCount + "kCal"} unit="Calories" />
                    <Nutriment image={Chicken} background="logo-chicken" value={user.proteinCount + "g"} unit="Proteines" />
                    <Nutriment image={Apple} background="logo-apple" value={user.carbohydrateCount + "g"} unit="Glucides" />
                    <Nutriment image={Cheeseburger} background="logo-cheeseburger" value={user.lipidCount + "g"} unit="Lipides" />
                </div>
            </div>

        </div >
    )
}

export default Profil