
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import MyProjects from './components/MyProjects/MyProjects';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div>
    <div className="mx-20">
     <Banner/>
     <Resume/>
     <MyProjects/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
