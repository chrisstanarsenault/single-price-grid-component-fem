import React, { Component } from "react";
import styled from "styled-components";
import { cyan, brightYellow, lightGray, karla } from "../styles/shared-styles";

export default class MonthlySubscription extends Component {
  render() {
    return (
      <SectionWrapper>
        <H3>Monthly Subscription</H3>
        <PriceP>
          <PriceSpan>$29 </PriceSpan>
          <PerMonthSpan>per month</PerMonthSpan>
        </PriceP>
        <FullAccessP>Full access for less than $1 a day</FullAccessP>
        <Button>Sign Up</Button>
      </SectionWrapper>
    );
  }
}

const SectionWrapper = styled.section`
  padding: 2.5rem;
  width: 50%;
  background: ${cyan};
  color: white;
  border-bottom-left-radius: 10px;

  @media (max-width: 400px) {
    width: 100%;
    border-bottom-left-radius: 0;
  }
`;

const H3 = styled.h3`
  margin-top: 0;
  font-weight: 700;
`;

const PriceP = styled.p`
  margin-bottom: 5px;
`;

const PriceSpan = styled.span`
  font-size: 30px;
  font-weight: 700;
`;

const PerMonthSpan = styled.span`
  opacity: 0.5;
`;

const FullAccessP = styled.p`
  margin 0;
  font-size: 15px;
  color: ${lightGray}
`;

const Button = styled.button`
  width: 100%;
  background: ${brightYellow};
  color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 7px;
  font-size: 1rem;
  font-family: ${karla};
  font-weight: 700;
  margin-top: 1.875rem;
  box-shadow: 0 5px 5px #0000002e;
`;
