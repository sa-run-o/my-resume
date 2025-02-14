import styled, { keyframes } from "styled-components";
import SectionLayout from "../components/Body/SectionLayout";
import { useInView } from "react-intersection-observer";
import sand from "../assets/background/sand.jpg";
import { useEffect, useRef } from "react";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const { ref: refGreet, inView: inViewGreet } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const { ref: refIntro, inView: inViewIntro } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const scrollLRef = useRef<HTMLDivElement>(null);
  const scrollRRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const leftElement = scrollLRef.current;
    const rightElement = scrollRRef.current;

    if (leftElement && rightElement) {
      const handleScroll = (e: Event) => {
        if (e.target === leftElement) {
          rightElement.scrollTop = leftElement.scrollTop;
        } else if (e.target === rightElement) {
          leftElement.scrollTop = rightElement.scrollTop;
        }
      };

      leftElement.addEventListener("scroll", handleScroll);
      rightElement.addEventListener("scroll", handleScroll);

      return () => {
        leftElement.removeEventListener("scroll", handleScroll);
        rightElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <SContainer>
      <SectionLayout bgImage={sand}>
        <SGreetingContainer ref={refGreet} inView={inViewGreet}>
          <div className="welcome f">
            WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME
            WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME
            WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME
          </div>
          <div className="welcome s">
            WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME
            WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME
            WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME
          </div>
          <div className="welcome t">
            WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME
            WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME
            WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME
          </div>
          <div className="welcome fo">
            WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME
            WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME
            WELCOME WELCOME WELCOME WELCOME WELCOME WELCOME
          </div>
          <div className="name">
            <div>SARUN</div>
          </div>
          <div className="position">
            <div>FULLSTACK DEVELOPER</div>
          </div>
          <div className="surname">
            <div>OLANKRANOK</div>
          </div>
        </SGreetingContainer>
      </SectionLayout>
      <SectionLayout>
        <div></div>
      </SectionLayout>
      <SectionLayout>
        <SIntroContainer ref={refIntro} inView={inViewIntro}>
          <div ref={scrollLRef}>
            <span>
              Hi, I'm Sarun Olankranok (<strong>Run</strong>) 👋{" "}
            </span>
            <span>
              I'm a <strong>Fullstack Developer</strong> with{" "}
              <strong>4 years of experience</strong>, specializing in{" "}
              <strong>React Hook, TypeScript, and Node.js</strong>. My passion
              lies in <strong>frontend development</strong>, crafting seamless{" "}
              <strong>UI/UX experiences</strong>, and bringing interfaces to
              life with <strong>animations</strong>.
            </span>
            <span>
              I love building{" "}
              <strong>intuitive and engaging web applications</strong> that not
              only function smoothly but also <strong>feel great to use</strong>
              . Whether it's{" "}
              <strong>
                interactive UI elements, dynamic animations, or optimizing
                performance
              </strong>
              , I enjoy turning ideas into{" "}
              <strong>beautifully designed digital experiences</strong>.
            </span>
            <span>
              Beyond coding, I enjoy <strong>reading manga & novels 📚</strong>{" "}
              and <strong>playing games 🎮</strong>, which inspire my creativity
              in <strong>design and user interaction</strong>. Let's create
              something amazing together! 🚀
            </span>
          </div>
          <div ref={scrollRRef}>
            <span>
              Hi, I'm Sarun Olankranok (<strong>Run</strong>) 👋{" "}
            </span>
            <span>
              I'm a <strong>Fullstack Developer</strong> with{" "}
              <strong>4 years of experience</strong>, specializing in{" "}
              <strong>React Hook, TypeScript, and Node.js</strong>. My passion
              lies in <strong>frontend development</strong>, crafting seamless{" "}
              <strong>UI/UX experiences</strong>, and bringing interfaces to
              life with <strong>animations</strong>.
            </span>
            <span>
              I love building{" "}
              <strong>intuitive and engaging web applications</strong> that not
              only function smoothly but also <strong>feel great to use</strong>
              . Whether it's{" "}
              <strong>
                interactive UI elements, dynamic animations, or optimizing
                performance
              </strong>
              , I enjoy turning ideas into{" "}
              <strong>beautifully designed digital experiences</strong>.
            </span>
            <span>
              Beyond coding, I enjoy <strong>reading manga & novels 📚</strong>{" "}
              and <strong>playing games 🎮</strong>, which inspire my creativity
              in <strong>design and user interaction</strong>. Let's create
              something amazing together! 🚀
            </span>
          </div>
        </SIntroContainer>
      </SectionLayout>
      <Footer />
    </SContainer>
  );
};

export default Home;
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
const SGreetingContainer = styled.div<{ inView: boolean }>`
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
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const SIntroContainer = styled.div<{ inView: boolean }>`
  color: white;
  position: relative;
  & > div {
    position: absolute;
    top: 15%;
    left: 15%;
    width: 70%;
    height: 70%;
    overflow-y: scroll;
    overflow-x: hidden;
    text-align: center;
    &:nth-child(1) {
      z-index: 5;
      & > span {
        text-align: center;
        font-size: 2rem;

        @media (max-width: 768px) {
          font-size: 1rem;
        }
        @media (max-width: 480px) {
          font-size: 1.2rem;
        }
        color: #878787;
        animation: ${({ inView }) => (inView ? fadeIn : "none")} 6s ease-out;
        & > strong {
          color: #e3e3e3;
        }
      }
    }
    &:nth-child(2) {
      z-index: 4;
      & > span {
        text-align: center;
        font-size: 2rem;
        @media (max-width: 768px) {
          font-size: 1rem;
        }
        @media (max-width: 480px) {
          font-size: 1.2rem;
        }
        color: #000000;
        & > strong {
          color: #e3e3e3;
        }
      }
    }
  }
`;
