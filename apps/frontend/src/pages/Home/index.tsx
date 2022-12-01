import React from 'react';

import Header from '../../components/Header';
import { StyledContainer } from '../../components/styles';

import StudentsTable from './StudentsTable';

function Home() {
  return (
    <StyledContainer>
      <Header isAuthenticated />
      <StudentsTable />
    </StyledContainer>
  );
}

export default Home;
