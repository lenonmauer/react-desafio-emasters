import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Header, Title, Body, Image, Content,
} from './styles';

const Card = ({ title, image, children }) => (
  <Container>
    {
      image && <Image src={image} />
    }

    {
      title && (
        <Header>
          <Title>{title}</Title>
        </Header>
      )
    }

    <Body>
      <Content>
        {children}
      </Content>
    </Body>
  </Container>
);

Card.defaultProps = {
  image: null,
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};

export default Card;
