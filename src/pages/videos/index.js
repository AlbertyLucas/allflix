import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../Components/PageDefault';
import FormField from '../../Components/FormField';
import useForm from '../../hooks/useForm';
import Button from '../../Components/Button';
import videosRepository from '../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo.</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Cadastro finalizado com sucesso');

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1,
        })
          .then(() => {
            console.log('Cadastro feito com sucesso!');
            history.push('/');
          });
      }}
      >

        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastra Categoria
      </Link>
    </PageDefault>
  );
}
export default CadastroVideo;
