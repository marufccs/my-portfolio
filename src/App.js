
import './App.css';
import Banner from './components/Banner/Banner';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MyProjects from './components/MyProjects/MyProjects';
import MySkills from './components/MySkills/MySkills';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div id='home'>
      <Header/>
    <div className="mx-20">
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
