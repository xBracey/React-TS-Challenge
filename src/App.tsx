import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Atoms/Header";
import Home from "./pages/Home";
import "./global.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Movie from "./pages/Movie";

/**
 * The starting page for your App
 */

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <main>
            <section>
              <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/movie/:id"} element={<Movie />} />
              </Routes>
            </section>
          </main>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
