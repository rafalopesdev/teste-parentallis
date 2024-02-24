import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import BannerSecond from './components/BannerSecond';
import Consultoria from './components/Consultoria';
import Fernanda from './components/Fernanda';
import Produtos from './components/Produtos';
import Proposito from './components/Proposito';
import Video from './components/Video';

function App() {
  return (
    <div>
      <Banner />
      <Video />
      <About />
      <Fernanda />
      <Proposito />
      <BannerSecond />
      <Consultoria />
      <Produtos />
    </div>
  );
}

export default App;
