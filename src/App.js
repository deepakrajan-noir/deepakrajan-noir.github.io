import './App.css';
import Nav from './components/Nav';
import Home from "./components/Home";
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Archives from './components/archives/Archives';
import Dev from './components/dev/Dev';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/archives" component={Archives}></Route>
            <Route path="/dev" component={Dev}></Route>

          </Switch>
      </div>
    </Router>
  );
}

export default App;
