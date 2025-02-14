import { styled } from "styled-components";
import SectionLayout from "../Body/SectionLayout";

const Footer = () => {
  const handleOpenWebNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <SContainer>
      <SectionLayout>
        <SDetail>
          <div className="head">
            <span>THANK YOU</span>
            <span> FOR VISIT HERE.</span>
          </div>
          <div className="topic">FOLLOW ME</div>
          <SSocialContainer>
            <div
              onClick={() =>
                handleOpenWebNewTab(
                  "https://www.linkedin.com/in/sarun-olankranok-754080342/"
                )
              }
            >
              Linkedin
            </div>
            <div
              onClick={() => handleOpenWebNewTab("https://github.com/sa-run-o")}
            >
              Gitgub
            </div>
            <div
              onClick={() =>
                handleOpenWebNewTab("https://www.instagram.com/a.runnnnn/")
              }
            >
              Instagram
            </div>
            <div
              onClick={() =>
                handleOpenWebNewTab("https://www.facebook.com/Runwayzlenon/")
              }
            >
              Facebook
            </div>
          </SSocialContainer>
        </SDetail>
      </SectionLayout>
    </SContainer>
  );
};
export default Footer;
const SContainer = styled.div`
  width: 100vw;
  border-top: 1px solid #4c4c4c;
`;
const SDetail = styled.div`
  padding: 20px 20px 30px 20px;
  & > div {
    &.head {
      font-size: 6.4vw;
      font-weight: 900;
      & > span {
        &:nth-child(1) {
          color: #ffffff;
        }
        &:nth-child(2) {
          color: #171717;
          -webkit-text-stroke: 0.5px white;
        }
      }
    }
    &.topic {
      color: #5b5b5b;
      padding: 5px 0px;
    }
  }
`;
const SSocialContainer = styled.div`
  color: #ffffff;
  & > div {
    cursor: pointer;
  }
`;
