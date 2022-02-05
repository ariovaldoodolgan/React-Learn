import './App.css';
import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
      <h1>Meu projeto</h1>
      <Comentario nome="João" email="joao@email.com" data={new Date(2022,2,5)}>
        Olá, Tudo bem?
      </Comentario>
      <Comentario nome="Maria" email="maria@email.com" data={new Date(2022,2,5)}>
        Como vai você?
      </Comentario>
    </div>
  );
}

export default App;
