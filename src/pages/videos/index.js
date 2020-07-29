import React from 'react';
import PageDefault from '../../Components/PageDefault';
import { Link } from 'react-router-dom';



function CadastroVideo() {
    return (
        <PageDefault>

            <h1>Cadastro de Vídeo.</h1>

            <Link to="/cadastro/categoria">
                Cadastra Categoria
            </Link>
        </PageDefault>
    )
}
export default CadastroVideo;  