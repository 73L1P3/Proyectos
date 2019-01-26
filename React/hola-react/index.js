import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Listado extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {usuarios} = this.props;
        return(
            <ul>
                {usuarios.map((usuario, index) => (
                    <li key={index}>Este es el Usuario {usuario}</li>
                ))}
            </ul>
        );
    }
}

class HolaReact extends Component{
    constructor(props){
        super(props);

        this.state = {
            MostrarListado: true
        };
    }

    showListado(){
        this.setState({ MostrarListado:
            !this.state.MostrarListado
        });
    }

    renderListado(usuarios){
        const { MostrarListado } = this.state;

        if (MostrarListado) {
            return <Listado usuarios = {usuarios}/>
        }else{
            return <h2>Listado no Disponible</h2>
        }
    }

    render(){
        const usuarios = [1,2,3,4];
        return (
            <div>
                {this.renderListado(usuarios)}
                <button onClick = {() => this.showListado()}>Mostrar Listado</button>
            </div>
        );
    }
}

ReactDOM.render(<HolaReact />, document.getElementById('app'));