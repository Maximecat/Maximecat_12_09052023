import './Sidebar.css';
import SideElement from '../SideElement/SideElement.jsx';
import meditation from '../../assets/meditation.png';
import swimming from '../../assets/swimming.png';
import bike from '../../assets/bike.png';
import dumbbell from '../../assets/dumbbell.png'

// SideBar
function Sidebar() {

    return (
        <aside className='asideLayout'>
            <div className='container-SideElement'>
                <SideElement logoUrl={meditation} />
                <SideElement logoUrl={swimming} />
                <SideElement logoUrl={bike} />
                <SideElement logoUrl={dumbbell} />
            </div>
            <span className='aside-Copyright'>Copyright, SportSee 2020</span>
        </aside>
    )
}

export default Sidebar