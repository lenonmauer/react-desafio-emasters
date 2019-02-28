import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Avatar, Name, IconRemove,
} from './styles';

const ContactChip = ({ avatar, name, onRemove }) => (
  <Container>
    {
      avatar && <Avatar src={avatar} />
    }
    <Name>{name}</Name>
    {
      onRemove && (
        <IconRemove className="material-icons" onClick={onRemove}>clear</IconRemove>
      )
    }
  </Container>
);

ContactChip.defaultProps = {
  onRemove: null,
  avatar: null,
};

ContactChip.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
};

export default ContactChip;
