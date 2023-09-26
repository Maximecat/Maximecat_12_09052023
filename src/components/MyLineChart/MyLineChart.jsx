import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import LineChartTooltip from '../LineChartTooltip/LineChartTooltip';
import './MyLineChart.css'

// LineChart
function MyLineChart({ averageSessions }) {
    return (
        <div className='second-chart'>
            <ResponsiveContainer>
                <LineChart data={averageSessions}>
                    <Legend content={() => "Durée moyenne des sessions"} verticalAlign="top" align='left' height={50} width={120} wrapperStyle={{ color: 'white', opacity: 0.5, marginTop: 20, marginLeft: 20 }} />
                    <CartesianGrid horizontal={false} vertical={false} />
                    <Line dataKey='sessionLength' type="basis" dot={false} stroke='white' />
                    <XAxis dataKey='formatedDay' axisLine={false} tickSize={0} fontSize={9} padding={{ left: 10, right: 10 }} stroke='white' opacity={0.5} />
                    <Tooltip content={<LineChartTooltip />} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default MyLineChart;