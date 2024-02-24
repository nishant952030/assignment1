import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Header from './components/navbar/Header/Header';
import Builders from './components/builders/Builders';
import NavPAth from './components/navPath/NavPAth';
import Description from './components/builderList/Description';
import Deal from './components/deals/Deal';
import Signup from './components/signup/Signup';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Header />
      <Builders />
      <NavPAth />
      <Description />
      <Deal />
      <Signup />
      <Footer/>
    </div>
  );
}

export default App;
