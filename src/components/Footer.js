import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.footerBg};
  color: white;
  padding: 40px 0;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

const FooterSection = styled.div`
  h3 {
    color: #e31837;
    margin-bottom: 20px;
  }
`;

const FooterLink = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
  &:hover {
    color: #e31837;
  }
  body.dark-mode & {
    color: #fff;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterSection>
            <h3>News</h3>
            <FooterLink to="/category/national">National</FooterLink>
            <FooterLink to="/category/international">International</FooterLink>
            <FooterLink to="/category/business">Business</FooterLink>
            <FooterLink to="/category/sports">Sports</FooterLink>
          </FooterSection>
          <FooterSection>
            <h3>Opinion</h3>
            <FooterLink to="/category/editorial">Editorial</FooterLink>
            <FooterLink to="/category/columns">Columns</FooterLink>
            <FooterLink to="/category/letters">Letters</FooterLink>
          </FooterSection>
          <FooterSection>
            <h3>Features</h3>
            <FooterLink to="/category/entertainment">Entertainment</FooterLink>
            <FooterLink to="/category/education">Education</FooterLink>
            <FooterLink to="/category/science">Science</FooterLink>
          </FooterSection>
          <FooterSection>
            <h3>About Us</h3>
            <FooterLink to="/about">About The Hindu</FooterLink>
            <FooterLink to="/contact">Contact Us</FooterLink>
            <FooterLink to="/subscribe">Subscribe</FooterLink>
          </FooterSection>
        </FooterContent>
        <Copyright>
          <p>© {new Date().getFullYear()} The Hindu. All rights reserved.</p>
        </Copyright>
      </div>
    </FooterContainer>
  );
}

export default Footer;