import React from 'react';
import {
  LayoutWrapper,
  LayoutNavbar,
  LayoutContent,
  Container
} from 'components';

const App: React.FC = () => {
  return (
    <LayoutWrapper>
      <LayoutNavbar>
        <Container>layoutNavbar</Container>
      </LayoutNavbar>
      <LayoutContent>
        <Container>Layout content</Container>
      </LayoutContent>
    </LayoutWrapper>
  );
};

export default App;
