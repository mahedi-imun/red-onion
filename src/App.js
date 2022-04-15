import { Route, Routes } from 'react-router-dom';
import './App.css';
import BreakfastDetails from './components/Pages/FoodDetails/BreakfastDetails';
import DinnerDetails from './components/Pages/FoodDetails/DinnerDetails';
import LunchDetails from './components/Pages/FoodDetails/LunchDetails';
import Home from './components/Pages/Home/Home/Home';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/home'element={<Home/>}></Route>
        <Route path='/breakfast-details/:id' element={<BreakfastDetails/>}></Route>
        <Route path='/lunch-details/:id' element={<LunchDetails/>}></Route>
        <Route path='/dinner-details/:id' element={<DinnerDetails/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
