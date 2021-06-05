import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Tools from './pages/Tools'
import Library from './pages/Library';
import Developers from './components/Developers';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component="HomePage">
          <HomePage/>
        </Route>
          <Route path="/tools" component="Tools">
          <Tools/>
        </Route>
          <Route path="/library" component="library">
          <Library/>
        </Route>
          <Route path="/developers" component="developers">
          <Developers/>
        </Route>
          <Route path="/resume" component="resume">
          <Resume/>
        </Route>
     </Router>
    </div>
  );
}

export default App;
