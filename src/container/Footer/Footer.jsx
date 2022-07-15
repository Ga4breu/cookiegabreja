import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div>
    <div className="app__footer" id="sobre">
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contato</h1>
          <p className="p__opensans">Zap do gabreja</p>
          <p className="p__opensans">45 9 99857927</p>
          <p className="p__opensans">insta do cookies</p>
          <a href="https://www.instagram.com"><p className="p__opensans">cookiesdogabreja</p></a>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.ga} alt="footer_logo" />
          <p className="p__opensans">&quot;O melhor modo de encontrar a si mesmo é se perder servindo aos outros.&quot;</p>
          <div className="app__footer-links_icons">
            <a href="https://www.youtube.com"> <FaInstagram /> </a>
            <a href='https://wa.me/5545999857927' target='_blank'> <FaWhatsapp /></a>
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Horarios</h1>
          <p className="p__opensans">Segunda a Sexta:</p>
          <p className="p__opensans">08:00 - 18:00 </p>
          <p className="p__opensans">Sábado e Domingo:</p>
          <p className="p__opensans">07:00 - 20:00 </p>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans">2022 Cookies do Abreu. Todos os direitos reservados.</p>
      </div>

    </div>
  </div>
);

export default Footer;
