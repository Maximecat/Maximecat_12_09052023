import './BarChartTooltip.css'

// Tooltip BarChart personnalisé
const BarChartTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-barchart-tooltip">
                <p>{payload[0].value} kg</p>
                <p>{payload[1].value} Kcal</p>
            </div>
        );
    }

    return null;
};

export default BarChartTooltip;