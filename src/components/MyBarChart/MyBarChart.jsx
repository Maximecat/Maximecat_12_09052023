import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import BarChartTooltip from "../BarChartTooltip/BarChartTooltip";
import './MyBarChart.css'

// BarChart
function MyBarChart({ activities }) {
    return (
        <div className='first-chart'>
            <p className='bar-label'>Activité quotidienne</p>
            <ResponsiveContainer height={230}>
                <BarChart data={activities} margin={{ left: 40, top: 10 }} barGap={6} >
                    <Tooltip content={<BarChartTooltip />} />
                    <CartesianGrid strokeDasharray={2} horizontal={true} vertical={false} strokeWidth={0.4} />
                    <Bar dataKey='kilogram' name='Poids (kg)' radius={[5, 5, 0, 0]} barSize={7} />
                    <Bar dataKey='calories' name='Calories Brûlées (kCal)' radius={[5, 5, 0, 0]} barSize={7} fill='#E60000' />
                    <XAxis dataKey='day' tickSize={0} tickMargin={20} strokeWidth={0.2} fillOpacity={0.8} padding={{ left: -40, right: -40 }} />
                    <YAxis orientation='right' tickMargin={10} strokeWidth={0} />
                    <Legend verticalAlign="top" align='right' iconType='circle' iconSize={6} height={60} wrapperStyle={{ lineHeight: '40px', marginRight: 20, fontWeight: '600', fontSize: '11px' }} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default MyBarChart;