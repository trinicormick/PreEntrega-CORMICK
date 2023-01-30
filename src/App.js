
import './App.css';
import NavBar from "../src/components/navBar";
import areasTienda from "../src/areasTienda/areasTienda";
import Links from "../src/components/Links/links";
import cardWidgets from "../src/components/cardWidgets/cardWidgets"
import itemListContainer from '../src/components/ItemListContainer/itemListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          <NavBar>
            <p>
              Children
            </p>
          </NavBar>
          <areasTienda title = {"Links"}>
            

          </areasTienda>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;
