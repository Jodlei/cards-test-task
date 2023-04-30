import React from 'react';

import { Container, HomeLink } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <HomeLink to="/tweets">Show tweets</HomeLink>
    </Container>
  );
};

export default Home;
