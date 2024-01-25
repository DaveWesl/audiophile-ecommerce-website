import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import MarkTwo from './pages/Mark-Two/Mark-Two';


function App() {
  return (
    <div className="App">
      <Navbar className="App-navbar"/>
      <MarkTwo />
      <Footer className="App-footer"/>
    </div>
  );
}

export default App;
