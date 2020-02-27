import * as React from "react";
import styled from "styled-components";
import { observer, inject } from "mobx-react";
import { SiteStore } from "../SiteStore";

const Container = styled.div`
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  margin-bottom: 20px;
`;
Container.displayName = "Container";

const QuestionLabel = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  margin-bottom: 10px;
`;
QuestionLabel.displayName = "QuestionLabel";

const Answer = styled.input`
  font-family: inherit;
  box-shadow: none;
  font-size: 18px;
  padding: 0px 24px 8px 8px;
  border-style: none;
  outline: none;
  border-radius: 0px;
  transition: box-shadow 0.2s ease 0s;
  width: 60%;
  background: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;
Answer.displayName = "Answer";

const Button = styled.button`
  padding: 10px 15px;
  background-color: #77c7af;
  border: 0;
  font-size: 16px;
`;
Button.displayName = "Button";

type LoadSavedProps = {
  siteStore?: SiteStore;
};

@inject("siteStore")
@observer
export class LoadSaved extends React.Component<LoadSavedProps> {
  render() {
    const siteStore = this.props.siteStore;

    return (
      siteStore && (
        <Container>
          <QuestionLabel>Load a previous session</QuestionLabel>
          <Answer value={siteStore.newUUID} onChange={siteStore.updateUUID} />
          <Button onClick={siteStore.loadNew}>Load</Button>
        </Container>
      )
    );
  }
}
