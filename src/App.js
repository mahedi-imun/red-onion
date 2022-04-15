import { Route, Routes } from 'react-router-dom';
import './App.css';
import FoodDetails from './components/Pages/FoodDetails/FoodDetails';
import Home from './components/Pages/Home/Home/Home';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path='/home'element={<Home/>}></Route>
        <Route path='/details/:id' element={<FoodDetails/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
