import './App.css';
import Bringing from './components/Bringing/Bringing';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';


function App() {
  return (
    <div className="App">
      <Navbar className="App-navbar"/>
      <Home className="App-home"/>
      <Bringing className="App-bringing" />
      <Footer className="App-footer"/>
    </div>
  );
}

export default App;
