
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Movies from './pages/Movies/Movies';
import Trending from './pages/Trending/Trending';
import TVSeries from './pages/TVSeries/TVSeries';

import NavbarComponent from './components/Navbar/NavbarComponent'

function App() {
  return (
    <Router>

    <NavbarComponent />
    
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route exact path="/trending" component={Trending} />
        <Route exact path="/series" component={TVSeries} />
      </Switch>
    </Router>
  );
}

export default App;
