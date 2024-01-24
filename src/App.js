import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Headphones from './pages/Headphones/Headphones';


function App() {
  return (
    <div className="App">
      <Navbar className="App-navbar"/>
      <Headphones className="App-headphones"/>
      <Footer className="App-footer"/>
    </div>
  );
}

export default App;
