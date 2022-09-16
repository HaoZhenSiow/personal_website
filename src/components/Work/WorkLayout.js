import React from 'react';
import styled from 'styled-components';
import ProjectJSX from './ProjectArr';

const Container = styled.div`
  width: 100%;
  display: grid;
  gap: 40px 25px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-template-rows: auto;
  margin-top: var(--work-layout-margin-top);
`;

const WorkLayout = props => {
  return (
    <>
      <Container>
        {ProjectJSX}
      </Container>
    </>
  );
}

export default WorkLayout;