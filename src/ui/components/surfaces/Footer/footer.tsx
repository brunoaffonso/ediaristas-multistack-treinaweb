/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from './footer.style';
import { Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <FooterTitle>Quem Somos</FooterTitle>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quo
          culpa, eaque, laboriosam eos doloremque natus in asperiores, esse
          tempore impedit maxime. Beatae, corporis quo. Aut autem suscipit nemo
          voluptatem.
        </Typography>

        <FooterTitle>Baixe nossos aplicativos</FooterTitle>
        <AppList>
          <li>
            <a href={'/'} target={'_blank'} rel={'noopener noreferrer'}>
              <img src={'/img/logos/app-store.png'} alt={'App Store'} />
            </a>
          </li>
          <li>
            <a href={'/'} target={'_blank'} rel={'noopener noreferrer'}>
              <img src={'/img/logos/google-play.png'} alt={'Google Play'} />
            </a>
          </li>
        </AppList>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
