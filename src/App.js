import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import MovieList from './Components/MovieList/MovieList';
import TvList from './Components/TvList/TvList';
import MovieDets from './Pages/MovieDets/MovieDets';
import TvDets from './Pages/TvDets/TvDets';
function App() {
  return (
    <div className="App">
   <Router>
    <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='movie/:id' element={<MovieDets/>}/>
        <Route path='tvs/:type' element={<TvList/>}/>
        <Route path='tv/:id' element={<TvDets/>}/>
        <Route path='movies/:type' element={<MovieList/>}/>
        <Route path='/*' element={<h1>Error Page</h1>}/>
      </Routes>
   </Router>
    </div>
  );
}

export default App;
