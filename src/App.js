
import './App.css';
import Banner from './components/Banner/Banner';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MyProjects from './components/MyProjects/MyProjects';
import MySkills from './components/MySkills/MySkills';

function App() {
  return (
    <div id='home'>
      <Header/>
    <div className="mx-auto">
     <Banner/>
     <MyProjects/>
     <MySkills/>
     <ContactMe/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
