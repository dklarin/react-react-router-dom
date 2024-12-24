import { Switch, Route, Redirect } from "react-router-dom";
import { Page1 } from "../components/pages";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/page1" />} />
      {/*<Route path="/page1" component={Page1} />*/}
      <Route path="/page1">
        <Page1 />
      </Route>
    </Switch>
  );
};
