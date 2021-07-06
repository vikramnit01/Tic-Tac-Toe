import './App.css';
import { Route,Switch } from 'react-router-dom';
import Game from './components/Game';
import Players from './components/Players';
function App() {
  return (
    <>
      <Switch>
      <Route exact path="/" component={Players}></Route>
      <Route path='/Game' component={Game}></Route>
      </Switch>
    </>
  );
}

export default App;
