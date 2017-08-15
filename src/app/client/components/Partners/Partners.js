import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import partners from '../../constants/partners';

const Section = styled.section`
  background-color: #2ABBF0;
  min-height: 100px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 50px;
    flex-direction: column;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  color: white;
  font-weight: 900;
`;

const ImageContainer = styled(Container)`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  display: flex;
  height: 24px;
  padding: 30px;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const Partners = () => (
  <Section>
    <Container>
      <Text>Our partners:</Text>
    </Container>
    <ImageContainer>
      {partners.map((partner) => (
        <Image
          key={partner.name}
          alt={partner.name}
          src={partner.logo}
        />)
      )}
    </ImageContainer>
  </Section>
);

export default Partners;
