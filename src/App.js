import React from 'react';
import './App.css';
import Footer from './Component/Global/Footer';
import Header from './Component/Global/Header';
import Company from './Component/Pages/Company';
import Contact from './Component/Pages/Contact';
import Home from './Component/Pages/Home';
import Location from './Component/Pages/Location';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WebDesign from './Component/SubPages/WebDesign';
import AppDesign from './Component/SubPages/AppDesign';
import GraphicsDesign from './Component/SubPages/GraphicsDesign';
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/company' component={Company} />
          <Route path='/location' component={Location} />
          <Route path='/contact' component={Contact} />
          <Route path='/webdesign' component={WebDesign} />
          <Route path='/appdesign' component={AppDesign} />
          <Route path='/graphicsdesign' component={GraphicsDesign} />
        </Switch>
        {/* <Home /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
