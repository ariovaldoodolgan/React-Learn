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
    ],
    novoComentario: {
      nome: '',
      email: '',
      mensagem: ''
    }
  }

  adicionarComentario = event => {

    event.preventDefault();

    const novoComentario = { ...this.state.novoComentario, data: new Date() }
    this.setState({
      comentarios: [ ...this.state.comentarios, novoComentario],
      novoComentario: { nome: '', email: '', mensagem: '' }
    });
  }

  removerComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter(c => c !== comentario)
    this.setState({ comentarios: lista })
  }

  digitacaoInput = event => {
    const { value, name } = event.target;
    this.setState({ novoComentario: { ...this.state.novoComentario, [name]: value } });
  }

  render() {
    return (
      <div className='App'>
        <h1>Meu projeto</h1>
        {this.state.comentarios.map((comentario, index) => (
          <Comentario
            key={index}
            nome={comentario.nome}
            email={comentario.email}
            data={comentario.data}
            onRemove={this.removerComentario.bind(this, comentario)}>
            {comentario.mensagem}
          </Comentario>
        ))}

        <form method='post' onSubmit={this.adicionarComentario}>
          <h2>Adicionar Comentário</h2>
          <div>
            <input type='text' name='nome' value={this.state.novoComentario.nome} onChange={this.digitacaoInput} placeholder='digite seu nome'></input>
          </div>
          <div>
            <input type='email' name='email' value={this.state.novoComentario.email} onChange={this.digitacaoInput} placeholder='Digite seu e-mail'></input>
          </div>
          <div>
            <textarea type='text' name='mensagem' value={this.state.novoComentario.mensagem} onChange={this.digitacaoInput} rows='4'/>
          </div>
          <button type='submit'>Adicionar Comentário</button>
        </form>
      </div>
    ); 
  }
}

export default App;
