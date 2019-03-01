import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Avatar, Name, IconRemove,
} from './styles';

const iconRemoveUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACdSURBVEhL7ZPBCYAwEATTiY1YjU8b0V6sSXyJD5vw1mRBJIS7854OLLl8ZiUm6cfKIunz6GKQTHmsA/leViuQr5Lu3jXwlKjlxFJilhNNiVtOWiWf5QTyo6wkTE6eJeFyAvkp2SThcoAvh9z7Tpo8jwXy0JLamYeVtH7o5xLNbXGXaOTEXGKRE8jfj7GKR05UJbPEIyeQj3n8UZHSBSX8Leec1IvxAAAAAElFTkSuQmCC';

const ContactChip = ({ avatar, name, onRemove }) => (
  <Container>
    {
      avatar && <Avatar src={avatar} />
    }
    <Name>{name}</Name>
    {
      onRemove && (
        <IconRemove src={iconRemoveUrl} onClick={onRemove} />
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
