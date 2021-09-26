import { Redirect, Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import MovieDetailsPage from "./components/Movie/DetailPage/MovieDetailsPage";
import MoviesPage from "./components/Movie/Page/MoviesPage";

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/movies" exact component={MoviesPage}></Route>
        <Route path="/movies/:id" component={MovieDetailsPage}></Route>

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
