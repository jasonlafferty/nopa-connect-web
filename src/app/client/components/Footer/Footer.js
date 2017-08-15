import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #1D32A4;
`;

const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 40px;
`;

const Paragraph = styled.p`
  text-align: center;
  font-size: 12px;
  color: #D9D9D9;
`;

const Footer = () => (
  <StyledFooter>
    <FooterContainer>
      <Paragraph>
        &copy; Nopa Limited 2017 All rights reserved.
        &lsquo;Nopa&rsquo; and the Nopa logo are trade marks of Nopa Limited.
        Nopa is a member of CIFAS - the UK's leading anti-fraud association,
        and we are registered with the Office of the Information Commissioner
        (No. Z879078).
      </Paragraph>
      <Paragraph>
        Nopa Limited is incorporated in England & Wales
        (registration number 05197592), with its registered office at
        1st Floor, Cottons Centre, Tooley Street, London, SE1 2QG.
        Nopa Limited is authorised and regulated by the Financial Conduct Authority,
        and entered on the Financial Services Register under firm registration number 563134.
      </Paragraph>
    </FooterContainer>
  </StyledFooter>
);

export default Footer;
