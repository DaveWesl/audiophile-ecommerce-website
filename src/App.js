import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';


function App() {
  return (
    <div className="App">
      <Navbar className="App-navbar"/>
      <Home className="Page-home"/>
      <Footer className="App-footer"/>
    </div>
  );
}

export default App;
