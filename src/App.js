import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import WithContext from './WithContext';
import WithHooks from './WithHooks';

function App () {
  return (
    <Router>
      <Switch>
        <Route path="/with-context" component={WithContext} />
        <Route path="/with-hooks" component={WithHooks} />
        <Route component={WithHooks} />
      </Switch>
    </Router>
  )
}

export default App;