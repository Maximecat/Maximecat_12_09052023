import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Tooltip } from 'recharts';
import './MyRadarChart.css'

function MyRadarChart({ performances }) {
    return (
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
    )
}

export default MyRadarChart;