import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './Compnents/Navbar/Navbar';
import Home from './Compnents/Home/Home';
import Cities from './Compnents/Cities/City';
import Products from './Compnents/Products/Products';

function App() {
  return (
    <BrowserRouter>
    
    <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/city/:cityName' component={Cities} />
        <Route path ='/products/' component={Products} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
