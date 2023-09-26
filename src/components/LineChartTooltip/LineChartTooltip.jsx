import './LineChartTooltip.css'

// Tooltip LineChart personnalisé
const LineChartTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-line-tooltip">
                <p>{payload[0].value} min</p>
            </div>
        );
    }

    return null;
};

export default LineChartTooltip;