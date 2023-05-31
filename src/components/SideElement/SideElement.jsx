import './SideElement.css';

function SideElement({ logoUrl }) {

    return (
        <div className='box-SideElement'>
            <img className='logo-SideElement' src={logoUrl} alt="logo" />
        </div>
    )
}

export default SideElement