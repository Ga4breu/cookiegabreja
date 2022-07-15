import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.ga} alt="G_overlay" />
    </div> */}

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">O nosso cookie</h1>
        <img src={images.cookies2} alt="about_spoon" className="spoon__img"/>
        <p className="p__opensans">Feito com produtos de primeira qualidade, o nosso cookie não possuí adição de conservantes. Na seção abaixo, você pode verificar as opções de pacotes </p>
        <a href='https://wa.me/5545999857927' target='_blank'>
        <button type="button" className="custom__button">Peça já</button>
        </a>      
      </div>

    </div>
  </div>
);

export default AboutUs;
