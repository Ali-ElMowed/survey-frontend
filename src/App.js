import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
        <Header title={"Survey Builder"}/>
    </Router>
  );
}

export default App;
