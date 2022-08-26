import '../src/Assets/css/App.css';
//Importar Componentes
import NavBar from './components/NavBar';
import Background from './components/Background';
import Main from './components/Main';
import Solutions from './components/Solutions';
import Create from './components/Create';
import Partners from './components/Partners';
import Speak from './components/Speak';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Background/>
      <header className="App-header">
        <NavBar/>
        <Main/>
        <Create/>
        <Solutions/>
        <Partners/>
        <Speak/>
        <Footer/>

      </header>
    </div>
  );
}

export default App;
