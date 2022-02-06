import { Component } from 'react/cjs/react.production.min';
import React from 'react';
import './App.css';
import Comentario from './components/Comentario';

class App extends Component {

  state = {
    comentarios: [
      {
        nome: "João",
        email: "joao@email.com",
        data: new Date(2022, 2, 5),
        mensagem: "Olá, tudo bem?"
      },
      {
        nome: "Maria",
        email: "maria@email.com",
        data: new Date(2022, 2, 5),
        mensagem: "Como vai você?"
      }
    ]
  }

  adicionarComentario = () => {
    const novoComentario = {
      nome: "Joana",
      email: "joana@email.com",
      data: new Date(2022, 2, 5),
      mensagem: "METEU ESSA?"
    }

    this.setState({comentarios: [ ...this.state.comentarios, novoComentario]});
  }

  render() {
    return (
      <div className="App">
        <h1>Meu projeto</h1>
        {this.state.comentarios.map((comentario, index) => (
          <Comentario
            key={index}
            nome={comentario.nome}
            email={comentario.email}
            data={comentario.data}>
            {comentario.mensagem}
          </Comentario>
        ))}

          <button onClick={this.adicionarComentario}>Adicionar umn comentariuo</button>
      </div>
    ); 
  }
}

export default App;
