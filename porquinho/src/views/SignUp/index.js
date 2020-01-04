import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';

import Logo from '../../assets/img/Logo.png';

import { Form, Container } from './styles';

import api from '../../services/api';

class SignUp extends Component{
    state = {
        name: '',
        lastName:'',
        email: '',
        password:'',
        cPassword:'',
        error: ''
    };


    handleSignUp = e =>{
        e.preventDefault();
        alert('Vamos realizar seu cadastro');
    };

    handleSignUp = async e =>{
        e.preventDefault();

        const { name, lastName, email, password, cPassword } = this.state;

        if(!name || !lastName || !email || !password || !cPassword){
            this.setState({ error: "Preencha todos os campos para se cadastrar" });
        }else{
            try {
                await api.post('/users', { name, email, password})
                this.props.history.push('/');
            } catch (err) {
                console.log(err);
                this.setState({ error: "Ocorreu um erro ao registrar seu usuário" })
            }
        }
        
        if(this.state.cPassword !== this.state.password){
            this.setState({ error: "As senhas não estão coerentes!" });
        }
    }

    onChangePassword = (event) =>{
        this.setState({
            password: event.target.value,
            error: false 
        });
    }

    onChangePasswordConfirm = (event) =>{
        this.setState({
            cPassword: event.target.value,
            error: false
        });
    }

    render(){
        return(
        
            <Container>
                <Form onSubmit={this.handleSignUp}>
                <img src={Logo} alt="Thunderbolts Logo" />
                {this.state.error && <p>{this.state.error}</p>}

                <input
                    type="text"
                    placeholder="Nome"
                    onChange={e => this.setState({ name: e.target.value })}
                />

                <input
                    type="text"
                    placeholder="Sobrenome"
                    onChange={e => this.setState({ lastName: e.target.value })}
                /> 

                <input
                    type="email"
                    placeholder="Email"
                    onChange={e => this.setState({ email: e.target.value })}
                />

                <input
                    type="password"
                    placeholder="Senha"
                    onChange={ this.onChangePassword }
                />

                <input
                    type="password"
                    placeholder="Confirmar Senha"
                    onChange={ this.onChangePasswordConfirm }
                />

                <button type="submit">Cadastrar</button>
                <hr/>
                    <Link to='/'>Login</Link>
                    </Form>
            </Container>
        );
    }
}

export default withRouter(SignUp);