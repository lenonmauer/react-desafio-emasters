import React from 'react';
import PropTypes from 'prop-types';

import { Container, Tooltip } from './styles';

const Balloon = ({ referral, position, message }) => (
  <Container>
    <Tooltip position={position}>{message}</Tooltip>
    {
      referral
    }
  </Container>
);

Balloon.defaultProps = {
  position: 'top',
};

Balloon.propTypes = {
  referral: PropTypes.element.isRequired,
  position: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
  message: PropTypes.string.isRequired,
};

export default Balloon;
