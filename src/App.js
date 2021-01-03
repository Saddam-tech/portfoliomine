import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { Switch, Route } from "react-router-dom";

// import Resume from './components/Resume';
// import Testimonial from './components/Testimonial';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
