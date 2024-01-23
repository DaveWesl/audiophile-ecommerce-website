import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Headphones from './pages/Headphones/Headphones';
import Home from './pages/Home/Home';


function App() {
  return (
    <div className="App">
      <Navbar className="App-navbar"/>
      <Headphones className="App-home"/>
      <Footer className="App-footer"/>
    </div>
  );
}

export default App;
