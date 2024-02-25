import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import BannerFooter from './components/BannerFooter';
import BannerSecond from './components/BannerSecond';
import BannerThird from './components/BannerThird';
import Consultoria from './components/Consultoria';
import Fernanda from './components/Fernanda';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Podcast from './components/Podcast';
import Produtos from './components/Produtos';
import Proposito from './components/Proposito';
import Video from './components/Video';
import Youtube from './components/Youtube';

function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <Video />
      <About />
      <Fernanda />
      <Proposito />
      <BannerSecond />
      <Consultoria />
      <Produtos />
      <BannerThird />
      <Youtube />
      <Podcast />
      <BannerFooter />
      <Footer />
    </div>
  );
}

export default App;
