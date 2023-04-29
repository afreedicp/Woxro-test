import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home';
import AdminScreen from './Pages/Admin';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<AdminScreen />} />
      </Routes>
    </div>
  );
}

export default App;
