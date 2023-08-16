import './LinearChartTooltip.css'

const LinearChartTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        console.log(payload)
        return (
            <div className="custom-linear-tooltip">
                <p>{payload[0].value} min</p>
            </div>
        );
    }

    return null;
};

export default LinearChartTooltip;