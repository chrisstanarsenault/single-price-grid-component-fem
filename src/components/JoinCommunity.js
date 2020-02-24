import React, { Component } from "react";
import styled from "styled-components";
import { cyan, brightYellow, grayBlue } from "../styles/shared-styles";

export default class JoinCommunity extends Component {
  render() {
    return (
      <SectionWrapper>
        <H2>Join our community</H2>
        <H3>30-day, hassle-free money back guarantee</H3>
        <P>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </P>
      </SectionWrapper>
    );
  }
}

const SectionWrapper = styled.section`
  padding: 2.5rem;
  width: 100%;
  background: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const H2 = styled.h2`
  color: ${cyan};
  font-weight: 700;
  margin-top: 0;
`;

const H3 = styled.h3`
  color: ${brightYellow};
  margin-bottom: 10px;
`;

const P = styled.p`
  color: ${grayBlue};
  line-height: 25px;
  margin: 0;
  font-size: 15px;
  font-weight: 700;
`;
