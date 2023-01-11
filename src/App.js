import './App.css';
import Nav from './Components/nav/Nav';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='container-portfolio'>
      <Nav />
      <About />
      <Skills/>
      <Footer/>

    </div>
  );
}

export default App;
