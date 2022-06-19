import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './components/Header';
import Add_question_card from './components/Add_question_card';
import Choices from './components/Choices';

function App() {
  return (
    <Router>
        <Header title={"Survey Builder"}/>
        <Add_question_card/>
    </Router>
  );
}

export default App;
