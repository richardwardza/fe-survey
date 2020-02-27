import * as React from "react";
import styled from "styled-components";
import { observer, inject } from "mobx-react";
import { SiteStore } from "../SiteStore";
import { Download } from "./Download";

const Container = styled.div`
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
`;
Container.displayName = "Container";

const QuestionLabel = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  margin-bottom: 20px;
`;
QuestionLabel.displayName = "QuestionLabel";

const Answer = styled.input`
  font-family: inherit;
  box-shadow: none;
  font-size: 30px;
  padding: 0px 24px 8px 8px;
  border-style: none;
  outline: none;
  border-radius: 0px;
  transition: box-shadow 0.2s ease 0s;
  width: 100%;
  background: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
`;
Answer.displayName = "Answer";

const Saving = styled.div`
  font-size: 30px;
  padding: 0px 24px 8px 8px;
`;
Saving.displayName = "Saving";

function QuestionSection(props: { siteStore: SiteStore }) {
  return (
    <React.Fragment>
      <QuestionLabel>{props.siteStore.question.question}</QuestionLabel>
      {!props.siteStore.isLoading ? (
        <Answer
          autoFocus={true}
          value={props.siteStore.currentAnswer}
          onChange={props.siteStore.updateAnswer}
        />
      ) : (
        <Saving>Saving...</Saving>
      )}
    </React.Fragment>
  );
}

type QuestionProps = {
  siteStore?: SiteStore;
};

@inject("siteStore")
@observer
export class QuestionInput extends React.Component<QuestionProps> {
  render() {
    const siteStore = this.props.siteStore;
    return (
      siteStore && (
        <Container>
          {siteStore.question.question !== "finished" ? (
            <QuestionSection siteStore={siteStore} />
          ) : (
            <Download />
          )}
        </Container>
      )
    );
  }
}
