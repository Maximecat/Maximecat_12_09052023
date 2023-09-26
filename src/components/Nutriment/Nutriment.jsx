import './Nutriment.css'

// Nutriment Card
function Nutriment({ image, background, value, unit }) {
    return (
        <div className='nutriment-card'>
            <div className={`nutriment-logo ${background}`}>
                <img src={image} alt="" />
            </div>
            <div className='nutriment-text-box'>
                <p className='nutriment-bold'>{value}</p>
                <p className='nutriment-p'>{unit}</p>
            </div>
        </div>
    )
}

export default Nutriment