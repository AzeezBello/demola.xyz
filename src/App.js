import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Projects from './Components/Portfolio/Projects';
import Contact from './Components/Contact/Contact';

class App extends React.Component {

  render () {
    return (
      <div> 
        <BrowserRouter> 
          <Switch>
            <Route exact path="/" component={Hero} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;