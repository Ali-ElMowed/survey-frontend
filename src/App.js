import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Add_question_card from './components/Add_question_card';
import store from './redux/store'
import { Provider, useSelector } from 'react-redux'
function App() {
  const survey = useSelector(state => state.survey)
  return (
    <Provider store={store}>
      <Router>
        <Header title={"Survey Builder"} />
        {
          survey?.questions?.map(question => (<Add_question_card data={question} />))
        }

      </Router>
    </Provider>
  );
}

export default App;
