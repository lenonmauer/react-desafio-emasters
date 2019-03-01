import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Ballon from './components/Ballon';
import Card from './components/Card';
import ContactChip from './components/ContactChip';
import Dropdown from './components/Dropdown';

import GlobalStyle from './styles/global';
import {
  Container, Button, Title,
} from './styles/components';

class App extends Component {
  state = {
    options: [
      { label: 'one', value: 1 },
      { label: 'two', value: 2 },
      { label: 'three', value: 3 },
    ],
  }

  onClickChipRemove = () => {
    toast.success('Remove chip');
  };

  onOptionSelected = (option) => {
    toast.success(`Option selected ${option.value}`);
  };

  render() {
    return (
      <Container>
        <GlobalStyle />
        <ToastContainer />

        <div>
          <Title>Contact Chip</Title>
          <ContactChip
            name="Lenon Mauer"
            avatar="https://playjoor.com/assets/avatar/elliot.jpg"
            onRemove={this.onClickChipRemove}
          />
        </div>

        <div>
          <Title>Ballon</Title>
          <Ballon referral={<Button type="button">Ballon right</Button>} position="right" message="Balloon message!" />
        </div>

        <div>
          <Title>Card</Title>
          <Card
            title="Example Card"
            image="https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_960_720.jpg"
          >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere lobortis
              lectus, in posuere sem commodo blandit. Etiam et scelerisque eros. Integer rhoncus
              convallis leo eu feugiat. Duis bibendum malesuada.
          </Card>
        </div>

        <div>
          <Title>Dropdown</Title>
          <Dropdown label="Menu item" options={this.state.options} onOptionSelected={this.onOptionSelected} />
        </div>
      </Container>
    );
  }
}

export default App;
