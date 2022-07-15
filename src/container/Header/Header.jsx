import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Busque o sabor" />
      <h1 className="app__header-h1">O melhor Cookie da fronteira</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Não é só um produto, é uma experiência. Imagine você, chegando em sua casa ao final da tarde, cansado de um longo dia de trabalho ou estudo, e encontrar esse biscoito de primeiríssima qualidade em cima da sua mesa, esse biscoito que ao mesmo tempo que é crocante por fora, é macio por dentro, e quando você o morde... Palavras não podem explicar a sensação. A vida é feita de momentos bons, e o nosso cookie, é a definição mais pura de um bom momento.</p>
      <a href='https://wa.me/5545999857927' target='_blank'>
      <button type="button" className="custom__button">Compre já.</button>
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
