import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Home from './pages/Home';

function App() {
  return (
  <div className="App">

    <h1>Countries</h1>
    <div className='navbar'>
    <Link to="/">Home</Link>
    </div>

      <div className='country-page'>
    <CountriesList/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/countries/:countries' element={<CountryDetails />}/>

    </Routes>

      </div>
  </div>
  );
}

export default App;
