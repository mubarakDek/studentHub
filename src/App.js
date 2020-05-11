import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";

//import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Default from "./pages/Default";
import Students from "./pages/Students";
import SingleStudent from "./pages/SingleStudent";
import Register from "./pages/Register";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <main className="main-wrapper">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/students" exact component={Students} />
          <Route path="/students/:id" component={SingleStudent} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/register" component={Register} />
          <Route component={Default} />
        </Switch>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
