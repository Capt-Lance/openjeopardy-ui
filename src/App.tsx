import BoardEditor from './create/BoardEditor';
import Home from './home/Home'
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Route path='/boards' component={BoardEditor}/>
        <Route path='/' component={Home} exact/>
      </div>
    </Router>

  );
}

export default App;
