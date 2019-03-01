import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container, Label, Caret, Menu, MenuItem,
} from './styles';

class Dropdown extends Component {
  state = {
    active: false,
  }

  toggleActive = () => {
    const { active } = this.state;

    this.setState({
      active: !active,
    });
  }

  render() {
    const { label, options, onOptionSelected } = this.props;
    const { active } = this.state;

    return (
      <Container onClick={this.toggleActive} active={active}>
        <Label>{label}</Label>
        <Caret />
        <Menu>
          {
            options.map(option => (
              <MenuItem key={option.value} onClick={() => onOptionSelected(option)}>{option.label}</MenuItem>
            ))
          }
        </Menu>
      </Container>
    );
  }
}

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
  })).isRequired,
  onOptionSelected: PropTypes.func.isRequired,
};

export default Dropdown;
