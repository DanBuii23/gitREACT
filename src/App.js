import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Reputation from './Components/Reputation';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Consultation from './Components/Consultation';
import Projects from './Components/Projects';
import Form from './Components/Form';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App container">
      <Header />
      <Content />
      <Reputation />
      <About />
      <Services />
      <Contact />
      <Consultation />
      <Projects />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
