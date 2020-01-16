import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Hero from './Components/Hero/Hero';
import Projects from './Components/Portfolio/Projects';
import Contact from './Components/Contact/Contact';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.sayHello = this.sayHello.bind(this);
  // }

  // sayHello() {
  //   document.querySelector('.thebutton').onclick = function (){
  //     document.querySelector('.downpart').style.display = 'block';
  //   }
  // }
  

  render () {
    return (
      <div className=""> 
        <BrowserRouter> 
          <Switch>
            <Route exact path="/" component={Hero} />
            <Route exact path="/Projects" component={Projects} />
            <Route exact path="/Contact" component={Contact} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;