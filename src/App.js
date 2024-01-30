import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import MarkOne from './pages/Mark-One/Mark-One';
import MarkTwo from './pages/Mark-Two/Mark-Two';
import XX59 from './pages/XX59/XX59';
import YX1 from './pages/YX1/YX1';
import ZX7 from './pages/ZX7/ZX7';
import ZX9 from './pages/ZX9/ZX9';


function App() {
  return (
    <div className="App">
      <Navbar className="App-navbar"/>
      <YX1 />
      <Footer className="App-footer"/>
    </div>
  );
}

export default App;
