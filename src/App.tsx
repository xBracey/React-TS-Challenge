import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Atoms/Header";
import HomePage from "./pages/Home";
import "./global.css";
import { store } from "./redux/store";
import MoviePage from "./pages/Movie";

/**
 * The starting page for your App
 */

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <main>
        <section>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:id" element={<MoviePage />} />
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  </Provider>
);

export default App;
