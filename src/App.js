import './App.css';
import Bringing from './components/Bringing/Bringing';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar className="App-navbar"/>
      <Bringing className="App-bringing" />
      <Footer className="App-footer"/>
    </div>
  );
}

export default App;
