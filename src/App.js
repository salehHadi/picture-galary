import './App.css';
import Intro from './componentsPage/IntroPage';
import Home from './componentsPage/Home';
import PictureInfo from './componentsPage/PictureInfo'
import PictureFavorits from './componentsPage/PictureFavorite'
import Basket from './componentsPage/Basket'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={ <Intro /> } />
        <Route path='/Home' element={<Home/>} />
        <Route path='/PictureFavorits' element={<PictureFavorits />} />
        <Route path='/PictureInfo' element={<PictureInfo />} />
        <Route path='/Basket' element={<Basket />} />
      </Routes>

    </div>
  );
}

export default App;
