import React from 'react';

import { Wrapper, Card, Templates } from './styles';
import logo from '../../images/logo.svg';

export default function Home() {
  return (
    <Wrapper>
      <img src={logo} alt="MemeMaker" />
      <Card>
        <h2>Selecione um template</h2>
        <Templates>
          <button type="button">
            <img src="" alt="Template1" />
          </button>
          <button type="button">
            <img src="" alt="Template1" />
          </button>
          <button type="button">
            <img src="" alt="Template1" />
          </button>
          <button type="button">
            <img src="" alt="Template1" />
          </button>
        </Templates>
      </Card>
    </Wrapper>
  );
}
