import React, { Component } from 'react'

import { withRouter, Link } from 'react-router-dom'

import { Container, Form } from './styles';

import Logo from '../../img/Logo.png';

 class Values extends Component {

    state = {
        valorSalario: '',
        valorEconomia: '',
        error: ''
    }

    handleValue = async e =>{
        e.preventDefault();

        const { valorSalario, valorEconomia } = this.state;

        if(!valorSalario || valorEconomia){
            this.setState({ error: 'Preencha todos os campos para continuar!'});
        }
    }

    onChangeValue = (event) =>{
        this.setState({
            valorSalario: event.target.value,
            valorEconomia: event.target.value,
            error: false
        });
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
                            onChange={this.onChangeValue}
                        />
                        
                        <label>Valor Econômia:</label>
                        <input
                            type='text'
                            placeholder='R$ 000.000.00'
                            onChange={this.onChangeValue}
                        />

                        <button type='submit'>Cotinuar</button>
                        <hr/>
                        <Link to='/SignIn'>Voltar</Link>
                    </Form>
                </Container>
            </div>
        )
    }
}


export default withRouter(Values);