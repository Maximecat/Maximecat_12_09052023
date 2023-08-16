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
import { BarChart, LineChart, RadarChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PolarGrid, ResponsiveContainer, PolarAngleAxis, Radar, PieChart, Pie, Cell } from 'recharts';
import BarChartTooltip from '../../components/BarChartTooltip/BarChartTooltip';
import LinearChartTooltip from '../../components/LinearChartTooltip/LinearChartTooltip';

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
            <h1 className='personnal-welcome'>Bonjour <span className='profil-name'>{user.firstName}</span></h1>
            <p className='personnal-sentence'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <div className='profil-datas-container'>
                <div className='charts-container'>
                    <div className='first-chart'>
                        <p className='bar-label'>Activité quotidienne</p>
                        <ResponsiveContainer height={230}>
                            <BarChart data={activities} margin={{ left: 40, top: 10 }} barGap={6} >
                                <CartesianGrid strokeDasharray={2} horizontal={true} vertical={false} strokeWidth={0.5} />
                                <Bar dataKey='kilogram' name='Poids (kg)' radius={[5, 5, 0, 0]} barSize={7} fill='#282D30' />
                                <Bar dataKey='calories' name='Calories Brûlées (kCal)' radius={[5, 5, 0, 0]} barSize={7} fill='#E60000' />
                                <XAxis dataKey='day' tickSize={0} tickMargin={20} strokeWidth={0.2} fillOpacity={0.8} padding={{ left: -40, right: -40 }} />
                                <YAxis orientation='right' tickMargin={10} strokeWidth={0} />
                                <Legend verticalAlign="top" align='right' iconType='circle' iconSize={6} height={60} wrapperStyle={{ lineHeight: '40px', marginRight: 20, fontWeight: '600', fontSize: '11px' }} />
                                <Tooltip content={<BarChartTooltip />} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className='second-charts-container'>
                        <div className='second-chart'>
                            <ResponsiveContainer>
                                <LineChart data={averageSessions}>
                                    <Legend content={() => "Durée moyenne des sessions"} verticalAlign="top" align='left' height={50} width={120} wrapperStyle={{ color: 'white', opacity: 0.5, marginTop: 20, marginLeft: 20 }} />
                                    <CartesianGrid horizontal={false} vertical={false} />
                                    <Line dataKey='sessionLength' type="basis" dot={false} stroke='white' />
                                    <XAxis dataKey='formatedDay' axisLine={false} tickSize={0} fontSize={9} padding={{ left: 10, right: 10 }} stroke='white' opacity={0.5} />
                                    <Tooltip content={<LinearChartTooltip />} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <div className='third-chart'>
                            <ResponsiveContainer>
                                <RadarChart data={performances}>
                                    <PolarGrid />
                                    <PolarAngleAxis dataKey="kind" tickLine={false} stroke='#FFFFFF' fontSize={10} />
                                    <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
                                    <Tooltip />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className='fourth-chart'>
                            <ResponsiveContainer>
                                <PieChart>
                                    <Legend content={() => "Score"} verticalAlign="top" align='left' wrapperStyle={{ color: '#20253A', fontFamily: 'Roboto', fontSize: 12, fontWeight: 600, marginTop: 15, marginLeft: 20 }} />
                                    <Pie data={user.scoreOftheDay} dataKey={'todayScore'} innerRadius={66} startAngle={90} endAngle={450} cornerRadius='50%'>
                                        <Cell fill="#FF0000" stroke="#FF0000" />
                                        <Cell fill="transparent" stroke="transparent" />
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className='score-label'>
                                <span className='score'>{user.todayScore || user.score}%</span>
                                <p className='score-fade'>
                                    de votre
                                    <br />objectif
                                </p>
                            </div>
                        </div>
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