import styled, { keyframes } from "styled-components";
import SectionLayout from "../components/Body/SectionLayout";
import { useInView } from "react-intersection-observer";
import sand from "../assets/background/sand.jpg";
const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  return (
    <SContainer>
      <SectionLayout bgImage={sand}>
        <SGreetingContainer ref={ref} inView={inView}>
          <div>
            <div>SARUN</div>
          </div>
          <div>
            <div>FULLSTACK DEVELOPER</div>
          </div>
          <div>
            <div>OLANKRANOK</div>
          </div>
        </SGreetingContainer>
      </SectionLayout>
      <SectionLayout>
        <div>1</div>
      </SectionLayout>
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
const SGreetingContainer = styled.div<{ inView: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  & > div {
    animation: ${({ inView }) => (inView ? slideUp : "none")} 1s ease-out; /* Apply the slide-up animation conditionally */
    overflow: hidden;
    &:nth-child(2) {
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
    &:nth-child(1),
    &:nth-child(3) {
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
        font-size: 3.75rem;
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
