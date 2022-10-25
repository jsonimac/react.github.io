import './App.css';
import message from './Message.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
        <Main />
        {message}
      <Footer />
    </div>
  );
}

export default App;
