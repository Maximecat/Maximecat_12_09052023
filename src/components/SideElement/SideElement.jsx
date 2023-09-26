import './SideElement.css';

// SideElement 
function SideElement({ logoUrl }) {

    return (
        <div className='box-SideElement'>
            <img className='sideElement-image' src={logoUrl} alt="logo" />
        </div>
    )
}

export default SideElement