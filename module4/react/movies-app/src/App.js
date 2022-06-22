import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Banner from './components/banner';
import MovieList from './components/MovieList';

function App() {
  return (
    <>
      <NavBar/>
      <Banner/>
      <MovieList/>
    </>
  );
}

export default App;
