import React from "react";
import styled from "styled-components";

import { karla, lightGray } from "./styles/shared-styles";

import JoinCommunity from "./components/JoinCommunity";
import MonthlySubscription from "./components/MonthlySubscription";
import WhyUs from "./components/WhyUs";

function App() {
  return (
    <MainBody>
      <MainWrapper>
        <JoinCommunity />
        <BottomDivWrapper>
          <MonthlySubscription />
          <WhyUs />
        </BottomDivWrapper>
      </MainWrapper>
    </MainBody>
  );
}

const MainBody = styled.div`
  min-height: 100vh;
  min-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${lightGray};

  @media (max-width: 400px) {
    min-width: 375px;
    flex-direction: column;
  }
`;

const MainWrapper = styled.main`
  font-family: ${karla};
  width: 635px;
  border-radius: 10px;
  box-shadow: 0 0 20px #00000040;

  @media (max-width: 400px) {
    width: 310px;
    margin: 4.375rem 0;
  }
`;

const BottomDivWrapper = styled.div`
  display: flex;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export default App;
