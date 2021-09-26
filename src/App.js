import { Redirect, Route, Switch } from "react-router";

import HomePage from "./components/HomePage/HomePage";
import { MovieDetailsPage, MoviesPage } from "./components/Movie";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" exact component={MoviesPage} />
        <Route path="/movies/:id" component={MovieDetailsPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
