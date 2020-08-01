import React, { useEffect, useState } from 'react';
// import Menu from '../../Components/Menu/index';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../Components/BannerMain/components/VideoIframeResponsive';
import PageDefault from '../../Components/PageDefault';
import Carousel from '../../Components/Carousel';
// import Footer from '../../Components/Footer/index';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState({
    categorias: [],
  });

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // http://localhost:8080/categorias?_embad=videos

  return (
    <PageDefault>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.length >= 1 && (
        <>
          <BannerMain

            videoTitle={dadosIniciais[0].videos[0].titulo}

            url={dadosIniciais[0].videos[0].url}

            videoDescription="O que é Front-end? Trabalhando na área os termos HTML,
          CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores.
          Mas o que eles fazem, afinal? Descubra com a Vanessa!"
          />

          <Carousel
            ignoreFirstVideo
            category={dadosIniciais[0]}
          />
        </>
      )}

      {/* <BannerMain

        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}

        url={dadosIniciais.categorias[0].videos[0].url}

        videoDescription="O que é Front-end? Trabalhando na área os termos HTML,
        CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores.
        Mas o que eles fazem, afinal? Descubra com a Vanessa!"
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      /> */}
    </PageDefault>
  );
}

export default Home;
