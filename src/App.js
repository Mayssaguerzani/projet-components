import './App.css';
import ProfilePhoto from './components/Profile/ProfilePhoto'
import FullName from '../src/components/Profile/FullName'
import Adresse from '../src/components/Profile/Adresse'

function App() {
  return (
    <div className="App">
      
    <FullName/>
   <ProfilePhoto/>
   <Adresse/>

    </div>
  );
}

export default App;
