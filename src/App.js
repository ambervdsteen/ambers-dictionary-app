
import './App.css';
import SearchEngine from './SearchEngine.js';
import logo from './amber-logo.png'

function App() {
  return (
  
    <div className="App">
        <div className="app-container">
      <header className="App-header">

      <img src={logo} alt="logo"/>

        <p>
       welcome to amber's dictionary app

        </p>
     
      </header>
      <SearchEngine/>

    
    </div>
    <footer>
        this page was built by Amber van der Steen, open-sourced on Github, and hosted on Netlify
      </footer>
    </div>
    
  );
}

export default App;
