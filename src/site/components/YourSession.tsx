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
  font-size: 14px;
  margin-top: 20px;
`;
Container.displayName = "Container";

type YourSessionProps = {
  siteStore?: SiteStore;
};

@inject("siteStore")
@observer
export class YourSession extends React.Component<YourSessionProps> {
  render() {
    const siteStore = this.props.siteStore;

    return (
      siteStore && <Container>Your session id: {siteStore.uuid}</Container>
    );
  }
}
