import React, { Component } from "react";
import styled from "styled-components";
import { lightGray, karla } from "../styles/shared-styles";

export default class WhyUs extends Component {
  render() {
    return (
      <SectionWrapper>
        <H3>Why Us</H3>
        <ListStyle>
          <li>Tutorials by industry experts</li>
          <li>Peer &amp; expert code review</li>
          <li>Coding exercises</li>
          <li>Access to our GitHub repos</li>
          <li>Community forum</li>
          <li>Flashcard decks</li>
          <li>New videos every week</li>
        </ListStyle>
      </SectionWrapper>
    );
  }
}

const SectionWrapper = styled.section`
  padding: 2.5rem;
  width: 50%;
  background: #67cac8;
  color: white;
  border-bottom-right-radius: 10px;

  @media (max-width: 400px) {
    width: 100%;
    border-bottom-left-radius: 10px;
  }
`;

const H3 = styled.h3`
  margin-top: 0;
`;

const ListStyle = styled.ul`
  list-style: none;
  line-height: 20px;
  font-size: 15px;
  padding: 0;
  margin-bottom: 0;
  color: ${lightGray};
`;
