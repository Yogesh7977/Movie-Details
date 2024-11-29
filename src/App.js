import './App.css';
import Home1 from './components/Home1';
import { BrowserRouter as Router,
  Routes,
  Route } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';
import Signup from './components/Signup';
import Login from './components/Login';
function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path='/login' element={<Login/>}/>
        <Route path="/home/:email?" element={<Home1 />} />
        <Route path="/moviedetails/:media/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
