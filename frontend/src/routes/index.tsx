import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
