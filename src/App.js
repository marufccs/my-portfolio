
import './App.css';
import Banner from './components/Banner/Banner';
import MyProjects from './components/MyProjects/MyProjects';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className="mx-20">
     <Banner/>
     <Resume/>
     <MyProjects/>
    </div>
  );
}

export default App;
