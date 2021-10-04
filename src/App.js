import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import OurCourses from './Component/OurCourses/OurCourses';
import ContactUs from './Component/Contact Us/ContactUs';
import AboutUs from './Component/About Us/AboutUs';
import Footer from './Component/Footer/Footer';
import PageNotFound from './Component/PageNotFound/PageNotFound';

function App() {

  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/about'>
            <AboutUs></AboutUs>
          </Route>
          <Route exact path='/courses'>
            <OurCourses></OurCourses>
          </Route>
          <Route exact path='/contact'>
            <ContactUs></ContactUs>
          </Route>
          <Route path='*'>
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
