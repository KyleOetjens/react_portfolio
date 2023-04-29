import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <section>
        <Navigation />
      </section>
      <header className="App-header">
      </header>
      <section className='contentSection'>
        <contentContainer />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
