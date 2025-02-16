import { styled } from "styled-components";
import workingVideo from "../assets/video/working.mp4";
import Footer from "../components/Footer/Footer";
import Dropdown from "../components/Body/Dropdown";
const EMAIL_CLIENT_OPTIONS = ["Default Email App", "Gmail", "Outlook"];
const Contact = () => {
  return (
    <SContainer>
      <div>
        <SVideoTextContainer>
          <video autoPlay loop muted>
            <source src={workingVideo} type="video/mp4" />
          </video>
          <div>
            <div>GET IN TOUCH.</div>
          </div>
        </SVideoTextContainer>
        <SMailContainer>
          <div>
            <div>SEND FORM</div>
            <div>
              <Dropdown options={EMAIL_CLIENT_OPTIONS} onSelect={() => {}} />
            </div>
          </div>
          <div>
            <div>TO</div>
            <div>
              <input value={"sarun.olan@gmail.com"} />
            </div>
          </div>
          <div>
            <div>MESSAGE</div>
            <div>
              <textarea />
            </div>
          </div>
        </SMailContainer>
        <Footer />
      </div>
    </SContainer>
  );
};
export default Contact;
const SMailContainer = styled.div`
  padding: 0px 20%;
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    & > div {
      &:nth-child(1) {
        font-size: 2vw;
        width: 20%;
        color: #171717;
        -webkit-text-stroke: 0.5px white;
      }
      &:nth-child(2) {
        width: 75%;
      }
    }
  }
`;
const SContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  position: relative;
  background: black;
  color: white;
`;

const SVideoTextContainer = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 10%;
  @media (max-width: 768px) {
    margin-top: 20%;
  }
  & > video {
    width: 60%;
    min-width: 400px;
    filter: grayscale(100%);
  }
  & > div {
    display: flex;
    justify-content: center;
    text-align: center;
    font-weight: 700;
    color: white;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    mix-blend-mode: darken;
    font-size: 13rem;
    line-height: 13rem;
    @media (max-width: 768px) {
      font-size: 7rem;
      line-height: 7rem;
    }
    @media (max-width: 480px) {
      font-size: 5rem;
      line-height: 5rem;
    }
  }
`;
