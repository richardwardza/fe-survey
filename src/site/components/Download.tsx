import * as React from "react";
import styled from "styled-components";
import { observer, inject } from "mobx-react";
import { SiteStore } from "../SiteStore";

const Instructions = styled.div`
  width: 100%;
  font-size: 30px;
  margin-bottom: 40px;
  line-height: 1.5;
  text-align: center;
`;
Instructions.displayName = "Instructions";

const Larger = styled.a`
  font-size: 30px;
  text-decoration: none;
  border-bottom: 2px solid #000;
  padding-bottom: 2px;
  color: #000000;
  &:hover {
    cursor: pointer;
  }
`;
Larger.displayName = "Larger";
type DownloadProps = {
  siteStore?: SiteStore;
};

@inject("siteStore")
@observer
export class Download extends React.Component<DownloadProps> {
  render() {
    const siteStore = this.props.siteStore;
    return (
      siteStore && (
        <Instructions>
          Download and sign the{" "}
          <Larger
            href="http://elishakraemer.com/docs/ModelReleaseForm.pdf"
            target="_blank"
          >
            Model Release Form
          </Larger>{" "}
          and the{" "}
          <Larger
            href="http://elishakraemer.com/docs/IndemnityForm.pdf"
            target="_blank"
          >
            Indemnity Form
          </Larger>{" "}
          and email them back to{" "}
          <Larger href="mailto:info@kraemerkunst.com">
            info@kraemerkunst.com
          </Larger>
        </Instructions>
      )
    );
  }
}
