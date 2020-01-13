import React, { Component } from 'react';

import { withRouter, Link } from 'react-router-dom';

import api from '../../Services/api';

import { Container, Form } from './styles';

import Logo from '../../img/Logo.png';

 class Values extends Component {

    constructor(props) {
        super(props);

        this.state = {
            salario: "",
            economia: "",
            error: ""
        }
    }

    handleChange = (event) => {
        const state = Object.assign({}, this.sate);
        let field = event.target.id;
        state[field] = event.target.value;
        this.setState(state);
        
        console.log(this.state)
    }

    handleValue = async e =>{
        e.preventDefault();

        const { salario, economia } = this.state;

        if(!salario || !economia){
            this.setState({ error: 'Preencha todos os campos para continuar!'});
        }
    }

    cadastrarValores = async () => {
        try {
            const response = await api.post('http://localhost:3000/valores', {
                salario: this.state.salario,
                economia: this.state.economia
            });

            if(response.status === 200) {
                this.props.history.push('http://localhost:3001/')
            }
        } catch(error) {
            this.setState({error: error});
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <Form onSubmit={this.handleValue}>
                        <img src={ Logo } alt='Banner thunderbolts'/>
                        {this.state.error && <p>{this.state.error}</p>}
                        
                        <label>Valor Salário:</label>
                        <input
                            type='text'
                            placeholder='R$ 000.000.00'
                            onChange={this.handleChange}
                            id="salario"
                        />
                        
                        <label>Valor Econômia:</label>
                        <input
                            type='text'
                            placeholder='R$ 000.000.00'
                            onChange={this.handleChange}
                            id="economia"
                        />

                        <button type='submit'>Cotinuar</button>
                        <hr/>
                        <Link to='http://localhost:3001/login'>Voltar</Link>
                    </Form>
                </Container>
            </div>
        )
    }
}


export default withRouter(Values);