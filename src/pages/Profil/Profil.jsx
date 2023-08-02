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
import { BarChart, LineChart, RadarChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Profil() {
    const { id } = useParams();
    // console.log(id);

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
            <h1>Bonjour <span className='profil-name'>{user.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <div className='profil-datas-container'>
                <div className='charts-container'>
                    <div className='first-chart'>
                        <ResponsiveContainer width={600} height={230}>
                            <BarChart data={activities} margin={{ left: 40, top: 10 }} barGap={6} >
                                <CartesianGrid strokeDasharray={2} horizontal={true} vertical={false} strokeWidth={0.5} />
                                <Bar dataKey='kilogram' name='Poids (kg)' radius={[5, 5, 0, 0]} barSize={7} />
                                <Bar dataKey='calories' name='Calories Brûlées (kCal)' radius={[5, 5, 0, 0]} barSize={7} fill='red' />
                                <XAxis dataKey='day' tickSize={0} tickMargin={20} strokeWidth={0.2} fillOpacity={0.8} padding={{ left: -30, right: -30 }} />
                                <YAxis orientation='right' tickMargin={30} strokeWidth={0} />
                                <Legend verticalAlign="top" align='right' iconType='circle' iconSize={7} height={60} wrapperStyle={{ lineHeight: '40px', marginRight: -10, fontWeight: '600', color: '#74798C' }} />
                                <Tooltip />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className='second-charts-container'>
                        <div className='second-chart'>
                            <ResponsiveContainer>
                                <LineChart data={averageSessions}>
                                    <CartesianGrid horizontal={false} vertical={false} />
                                    <XAxis dataKey='formatedDay' axisLine={false} tickSize={0} padding={{ left: 10, right: 10 }} fontSize={9} />
                                    <Line dataKey='sessionLength' type="natural" dot={false} stroke='white' />
                                    <Legend content={() => "Durée moyenne des sessions"} verticalAlign="top" align='left' height={80} width={120} wrapperStyle={{ color: 'white', opacity: 0.5, marginTop: 20, marginLeft: 20 }} />
                                    <Tooltip />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <div className='third-chart'>
                            <ResponsiveContainer>
                                <RadarChart data={performances}>

                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className='fourth-chart'></div>
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