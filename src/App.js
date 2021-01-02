import { HashRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './routes/About';
import Home from './routes/Home';
import './App.css';
import Detail from './components/Detail';

const App = () => {
    return (
    <HashRouter>
        <Navigation />
        <Route path="/" component={Home} exact={true} /> 
        <Route path="/about" component={About}/>
        <Route path="/movie-detail" component={Detail}/>
    </HashRouter>)
}

export default App;