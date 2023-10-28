import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Form from './components/Form';
import Transaction from './components/Transaction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="home-page">
        <Navbar></Navbar>
        <Hero></Hero>
        <Cards></Cards>
        <Form></Form>
        <Transaction></Transaction>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
