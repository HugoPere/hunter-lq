//import logo from './logo.svg';
import logo from './logo.png';
import TopMenu from '../components/topMenu/topMenu.js'
import './App.css';

function bonusCalculator() {
  return (
    
    <div className="bonusCalculator">
      <TopMenu></TopMenu>
      {/* <div class="topnav">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div> */}
      <header className="App-header">
      
        <p>
          This is the bonus calculator, here you can see your percentage for the Raids!
        </p>
        
      </header>
      
    </div>
  );
}

export default App;
