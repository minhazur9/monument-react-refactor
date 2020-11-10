import './App.css';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Blog from './pages/Blog';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Blog/>
      <SocialLinks/>
    </div>
  );
}

export default App;
