import React, { Component } from 'react'

import { withRouter, Link } from 'react-router-dom'

import api from '../../Services/api';

import { login } from '../../Services/auth';

import { Container, Form } from './styles';

import Logo from '../../img/Logo.png';

 class SignIn extends Component {

    state = {
        email: '',
        password: '',
        error: ''
    };

    handleSignIn = async e =>{
        e.preventDefau();

        const { email, password } = this.state;

        if(!email || !password){
            this.setState({ error: "Preencha todos os campos para entrar!" })
        }else{
            try {
                const response = await api.post('/sessions',{ email, password });
                login(response.data.token);
                this.props.history.push('/app')
            } catch (error) {
                this.setState({
                    error: "Houve um problema com o login, verifique suas credenciais"
                });
            }
        }
    };

    render() {
        return (
            <div>
                <Container>
                    <Form onSubmit={this.handleSignIn}>
                    <img src={ Logo }  alt='Banner thunderbolts'/>
                    {this.state.error && <p>{this.state.error}</p>}

                    <input
                        type='email'
                        placeholder='Email'
                        onChange={ e => this.setStat({ email: e.target.value })}
                    />

                    <input
                        type='password'
                        placeholder='Senha'
                        onChange={ e => this.setState({ password: e.target.value })}
                    /> 

                    <button type='submit'>Entrar</button>
                    <hr/>
                    <Link to='/SignUp'>Criar Conta</Link>

                    </Form>
                </Container>
            </div>
        )
    }
}

export default withRouter(SignIn);