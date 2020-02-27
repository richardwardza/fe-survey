import React, { Component } from "react";
import styled from "styled-components";
import { Provider, observer } from "mobx-react";
import { SiteStore } from "./site/SiteStore";
import { Questions } from "./site/components/Questions";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  height: 100vh;
  flex-grow: 1;
`;
PageContainer.displayName = "PageContainer";

export type AppProps = {
  siteStore: SiteStore;
};

@observer
export class App extends Component<AppProps> {
  componentDidMount() {
    window.addEventListener("keydown", this.props.siteStore.keyHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.props.siteStore.keyHandler);
  }

  public render() {
    const siteStore = this.props.siteStore;

    return (
      <Provider siteStore={siteStore}>
        <PageContainer>
          {siteStore.questions.length > 0 ? (
            <Questions />
          ) : (
            <React.Fragment>Loading</React.Fragment>
          )}
        </PageContainer>
      </Provider>
    );
  }
}
