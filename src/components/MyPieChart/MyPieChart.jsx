import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';
import './MyPieChart.css'

// PieChart
function MyPieChart({ user }) {
    return (
        <div className='fourth-chart'>
            <ResponsiveContainer>
                <PieChart>
                    <Legend content={() => "Score"} verticalAlign="top" align='left' wrapperStyle={{ color: '#20253A', fontFamily: 'Roboto', fontSize: 12, fontWeight: 600, marginTop: 15, marginLeft: 20 }} />
                    <Pie data={user.scoreOftheDay} dataKey={'todayScore'} innerRadius={66} startAngle={90} endAngle={450} cornerRadius='50%'>
                        <Cell fill="#FF0000" stroke="#FF0000" />
                        <Cell fill="transparent" stroke="transparent" />
                    </Pie>
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
    )
}

export default MyPieChart;