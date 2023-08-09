import './App.css';
import Avatar from '../Profil/Avatar.png'

function App() {
  return (
    <div className="App">
      <a href='/profil/12' className='profil-link'>
        <img src={Avatar} className='img-profil' alt='' />
        <span className='user-firstname'>Karl</span>
      </a>
      <a href='/profil/18' className='profil-link'>
        <img src={Avatar} className='img-profil' alt='' />
        <span className='user-firstname'>Cecilia</span>
      </a>
    </div>
  );
}

export default App;
