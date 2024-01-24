import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Earphones from './pages/Earphones/Earphones';


function App() {
  return (
    <div className="App">
      <Navbar className="App-navbar"/>
      <Earphones />
      <Footer className="App-footer"/>
    </div>
  );
}

export default App;
