import '../src/Assets/css/App.css';
//Importar Componentes
import NavBar from './components/NavBar';
import Background from './components/Background';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Background/>
      <header className="App-header">
        <NavBar/>
        <Main/>
      </header>
    </div>
  );
}

export default App;
