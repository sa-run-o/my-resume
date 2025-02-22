import styled, { keyframes } from "styled-components";
import SectionLayout from "../components/Body/SectionLayout";
import { useInView } from "react-intersection-observer";
import sand from "../assets/background/sand.jpg";
import Footer from "../components/Footer/Footer";
import Typing from "../components/Body/Typing";
import ThreeDCard from "../components/Body/ThreeDCard";
import DigitalClock from "../components/Body/DigitalClock";

const Home = () => {
  const { ref: refGreet, inView: inViewGreet } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const { ref: refIntro, inView: inViewIntro } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <SContainer>
      <SGreetingContainer>
        <SectionLayout bgImage={sand}>
          <SGreeting ref={refGreet} inView={inViewGreet}>
            <div className="welcome f">{"WELCOME ".repeat(22)}</div>
            <div className="welcome s">{"WELCOME ".repeat(22)}</div>
            <div className="welcome t">{"WELCOME ".repeat(22)}</div>
            <div className="welcome fo">{"WELCOME ".repeat(22)}</div>
            <div className="name">
              <div>SARUN</div>
            </div>
            <div className="position">
              <div>FULLSTACK DEVELOPER</div>
            </div>
            <div className="surname">
              <div>OLANKRANOK</div>
            </div>
          </SGreeting>
        </SectionLayout>
      </SGreetingContainer>
      <SIntroContainer>
        <SectionLayout>
          <SIntro ref={refIntro} inView={inViewIntro}>
            {inViewIntro && (
              <div>
                FULLSTACK
                <br />
                DEVELOPER
              </div>
            )}
            {inViewIntro && (
              <div>
                <Typing text={"4 years of experience,"} startDelay={0} />
                <Typing text={"specializing in React"} startDelay={2500} />
                <Typing text={"Hook, TypeScript and"} startDelay={5000} />
                <Typing text={"Node.js. My passion lies"} startDelay={7500} />
                <Typing text={"in frontend development."} startDelay={10000} />
              </div>
            )}
          </SIntro>
        </SectionLayout>
      </SIntroContainer>
      <SWidgetContainer>
        <SectionLayout>
          <SGridContainer>
            <div style={{ gridColumn: "span 3", gridRow: "span 2" }}>
              <ThreeDCard>
                <div>บัตรแนะนำตัว</div>
              </ThreeDCard>
            </div>
            <div style={{ gridRow: "span 2" }}>
              <ThreeDCard>
                <div>อากาศเรา (dpn maps)</div>
              </ThreeDCard>
            </div>
            <div style={{ gridRow: "span 2" }}>
              <ThreeDCard>
                <div> ค่าฝุ่นเรา (dpn maps)</div>
              </ThreeDCard>
            </div>
            <div>
              <ThreeDCard>
                <div>
                  <DigitalClock />
                </div>
              </ThreeDCard>
            </div>
            <div>
              <ThreeDCard>
                <div>จังหวัดเรา (dpn maps)</div>
              </ThreeDCard>
            </div>
            <div style={{ gridColumn: "span 3" }}>
              <ThreeDCard>
                <div>งานอดิเรกมั้ง</div>
              </ThreeDCard>
            </div>
            <div style={{ gridRow: "span 3", gridColumn: "span 3" }}>
              <ThreeDCard>
                <div> open street map</div>
              </ThreeDCard>
            </div>
            <div style={{ gridColumn: "span 3" }}>
              <ThreeDCard>
                <div>github stat</div>
              </ThreeDCard>
            </div>
            <div>
              <ThreeDCard>
                <div>leetcode</div>
              </ThreeDCard>
            </div>
            <div>
              <ThreeDCard>
                <div> cssbattle</div>
              </ThreeDCard>
            </div>
            <div>
              <ThreeDCard>
                <div>linkedin</div>
              </ThreeDCard>
            </div>
          </SGridContainer>
        </SectionLayout>
      </SWidgetContainer>
      <Footer />
    </SContainer>
  );
};

export default Home;
const SGridContainer = styled.div`
  color: white;
  display: grid;
  grid-template: repeat(5, 1fr) / repeat(6, 1fr);
  gap: 15px;
  padding: 20px;
  box-sizing: border-box;
`;
const SWidgetContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
const SIntroContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
const SGreetingContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const slideDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;
const slideDownNoOpacity = keyframes`
 0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(50%);
  }
`;
const slideUpNoOpacity = keyframes`
 0% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(0%);
  }
`;
const SGreeting = styled.div<{ inView: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  cursor: default;
  & > div {
    animation: ${({ inView }) => (inView ? slideUp : slideDown)} 1s ease-out;
    overflow: hidden;
    &.welcome {
      writing-mode: vertical-lr;
      display: inline-block;
      text-orientation: upright;
      position: absolute;
      bottom: 0;
      transform: translateX(0%);
      white-space: nowrap;
      font-weight: bold;
      font-size: 0.5rem;
      line-height: 0.6rem;
      &.f {
        left: 16.5%;
        animation: ${slideDownNoOpacity} 18s linear infinite;
      }
      &.s {
        left: 33%;
        animation: ${slideUpNoOpacity} 20s linear infinite;
      }
      &.t {
        left: 67%;
        animation: ${slideUpNoOpacity} 20s linear infinite;
      }
      &.fo {
        left: 83.5%;
        animation: ${slideDownNoOpacity} 18s linear infinite;
      }
    }
    &.position {
      color: black;
      font-size: 1rem;
      line-height: 1.5rem;
      @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.5rem;
      }
      @media (max-width: 480px) {
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
    }
    &.name,
    &.surname {
      padding-top: 1.25rem;
      padding-bottom: 1.25rem;
      font-size: 6rem;
      line-height: 1;
      font-weight: bold;
      color: black;
      @media (max-width: 768px) {
        font-size: 3rem;
      }
      @media (max-width: 480px) {
        font-size: 3rem;
      }
    }
  }
`;
const SContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  scroll-snap-type: y var(--tw-scroll-snap-strictness);
  --tw-scroll-snap-strictness: mandatory;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const SIntro = styled.div<{ inView: boolean }>`
  color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  & > div {
    &:nth-child(1) {
      text-align: end;
      align-self: flex-start;
      font-size: 6vw;
      line-height: 6vw;
      margin: 30px 0px 0px 30px;
      font-weight: 900;
      width: 40%;
      overflow: hidden;
    }
    &:nth-child(2) {
      align-self: flex-end;
      font-size: 3.6vw;
      line-height: 3.4vw;
      width: 40%;
      font-weight: 500;
      letter-spacing: -3px;
      margin: 0px 30px 30px 0px;
    }
  }
`;
