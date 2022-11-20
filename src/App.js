import MapContainer from './components/MapContainer'
import StreetContainer from './components/StreetContainer'
import './App.css'

function App() {
  return (
    <div className="App" >
      <div className="Maps">
        <MapContainer />
        <StreetContainer />
      </div>
    </div>

    
  );
}

export default App;
