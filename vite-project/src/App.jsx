// src/App.js
import './App.css'

import Navbar from './components/navbar';
import Button from './components/button';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';

function App() {
  return <div className='App'>
    <Navbar />
    <div className="header">
      <h1>Say hello to ReactJS</h1>
      <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
      <Button /> 
    </div>
    <div className="features">
      <div className="box">
        <img src={icon1} alt="Tool image"/>
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="box">
        <img src={icon2} alt="Components image"/>
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="box">
      <img src={icon3} alt="Single Way image"/>
        <h3>Single Way</h3>
        <p>A set of immutable values are passed to the components.</p>
      </div>
      <div className="box">
      <img src={icon4} alt="JSX image"/>
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  </div>
}
export default App