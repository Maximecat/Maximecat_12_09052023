import './Profil.css';
import Nutriment from '../../components/Nutriment/Nutriment';
import Flamme from './Flamme.png';
import Chicken from './Chicken.png';
import Apple from './Apple.png';
import Cheeseburger from './Cheeseburger.png';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import User from '../../utils/models/User';
import ApiService from '../../utils/services/ApiService';
import MyBarChart from '../../components/MyBarChart/MyBarChart';
import MyLineChart from '../../components/MyLineChart/MyLineChart';
import MyRadarChart from '../../components/MyRadarChart/MyRadarChart';
import MyPieChart from '../../components/MyPieChart/MyPieChart';

function Profil() {
    const { id } = useParams();

    const [user, setUser] = useState(new User({
        userInfos: {},
        keyData: {}
    }))

    const [activities, setActivities] = useState([])

    const [averageSessions, setAverageSessions] = useState([])

    const [performances, setPerformances] = useState([])

    const datasService = useMemo(() => new ApiService(), [])

    useEffect(() => {
        async function getDatas() {
            const user = await datasService.getUserInformations(id)
            setUser(user)
        }
        getDatas()
    }, [id, datasService])

    useEffect(() => {
        async function getDatasActivities() {
            const activityDatas = await datasService.getUserActivities(id)
            setActivities(activityDatas)
        }
        getDatasActivities()
    }, [id, datasService])

    useEffect(() => {
        async function getDatasSessions() {
            const averageSession = await datasService.getUserAverageSessions(id)
            setAverageSessions(averageSession)
        }
        getDatasSessions()
    }, [id, datasService])

    useEffect(() => {
        async function getDatasPerformances() {
            const performanceDatas = await datasService.getUserPerformances(id)
            setPerformances(performanceDatas)
        }
        getDatasPerformances()
    }, [id, datasService])

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
                <div className='datas-container'>
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