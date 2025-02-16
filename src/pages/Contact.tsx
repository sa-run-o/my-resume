import { styled } from "styled-components";
import workingVideo from "../assets/video/working.mp4";
import Footer from "../components/Footer/Footer";
import Dropdown from "../components/Body/Dropdown";
import { useState } from "react";
const EMAIL_CLIENT_OPTIONS = ["Default Email App", "Gmail", "Outlook"];
const Contact = () => {
  const email = "sarun.olan@gmail.com";
  const [selectedClient, setSelectedClient] = useState(EMAIL_CLIENT_OPTIONS[0]);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleOpenEmailClient = () => {
    let emailLink = "";

    switch (selectedClient) {
      case "Gmail":
        emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(message)}`;
        break;
      case "Outlook":
        emailLink = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(message)}`;
        break;
      default:
        emailLink = `mailto:${email}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(message)}`;
    }

    window.open(emailLink, "_blank");
  };
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
              <Dropdown
                options={EMAIL_CLIENT_OPTIONS}
                onSelect={setSelectedClient}
              />
            </div>
          </div>
          <div>
            <div>TO</div>
            <SMail>
              <div>sarun.olan@gmail.com</div>
            </SMail>
          </div>
          <div>
            <div>SUBJECT</div>
            <div>
              <SInput
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                placeholder="Please input subject"
              />
            </div>
          </div>
          <div>
            <div>MESSAGE</div>
            <div>
              <STextArea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </div>
          </div>
          <SButton onClick={() => handleOpenEmailClient()}>
            <div>Send</div>
          </SButton>
        </SMailContainer>
      </div>
      <Footer />
    </SContainer>
  );
};
export default Contact;
const SButton = styled.div`
  background: white;
  color: black;
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  border-radius: 15px;
  padding: 0 !important;
  margin: 30px 0px !important;
  cursor: pointer;
  & > div {
    font-size: 25px !important;
    width: fit-content !important;
    margin: 0 !important;
    padding: 0 !important;
  }
`;
const SInput = styled.input`
  width: 95%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 5px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  padding-left: 5%;
  font-weight: bold;
  &:focus {
    outline: none;
  }
`;
const STextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  resize: none;
  overflow: auto;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;
const SMail = styled.div`
  width: 100%;
  border: 1px solid white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  & > div {
    margin-left: 5%;
    font-weight: bold;
  }
`;
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
