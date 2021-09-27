import { Redirect, Route, Switch } from "react-router";
import { lazy, Suspense } from "react";

import { BrowserRouter } from "react-router-dom";
import Loading from "./components/Loading/Loading";

const NavBar = lazy(() => import("./components/NavBar/NavBar"));
const HomePage = lazy(() => import("./components/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./components/Movie/Page/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./components/Movie/Detail/Page/MovieDetailsPage")
);
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies" exact component={MoviesPage} />
          <Route path="/movies/:id" component={MovieDetailsPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
