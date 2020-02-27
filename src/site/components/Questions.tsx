import * as React from "react";
import styled from "styled-components";
import { observer, inject } from "mobx-react";
import { SiteStore } from "../SiteStore";
import { QuestionInput } from "./QuestionInput";
import { LoadSaved } from "./LoadSaved";
import { YourSession } from "./YourSession";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  align-content: center;
`;
Container.displayName = "Container";

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  align-content: center;
`;
MainContent.displayName = "MainContent";

const NavigationHolder = styled.div`
  display: flex;
  flex-direction: row;
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
`;
NavigationHolder.displayName = "NavigationHolder";

const Navigation = styled.button`
  padding: 20px;
  height: 70px;
  background-color: #77c7af;
  border: 0;
  width: 120px;
  font-size: 24px;
`;
Navigation.displayName = "Navigation";

type QuestionsProps = {
  siteStore?: SiteStore;
};

@inject("siteStore")
@observer
export class Questions extends React.Component<QuestionsProps> {
  render() {
    const siteStore = this.props.siteStore;

    return (
      siteStore && (
        <Container>
          <YourSession />
          <MainContent>
            <QuestionInput />
            <NavigationHolder>
              <Navigation onClick={siteStore.prevQuestion}>Prev</Navigation>
              {siteStore.question.question !== "finished" && (
                <Navigation onClick={siteStore.nextQuestion}>Next</Navigation>
              )}
              {siteStore.question.question === "finished" && (
                <Navigation onClick={siteStore.finish}>Finish</Navigation>
              )}
            </NavigationHolder>
          </MainContent>
          <LoadSaved />
        </Container>
      )
    );
  }
}
