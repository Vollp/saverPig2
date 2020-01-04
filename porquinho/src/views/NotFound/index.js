import React, { Component } from 'react'

import Imagem from '../../img/pageNotFound.jpg';

import { Container } from './style'

class PageNotFound extends Component{
    render(){
        return(
            <Container>
                <img src={ Imagem } alt="Imagem de page not found"/>
            </Container>
        );
    }
}

export default PageNotFound;