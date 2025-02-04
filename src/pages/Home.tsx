import styled from "styled-components";
import SectionLayout from "../components/Body/SectionLayout";

const Home = () => {
  return (
    <SContainer>
      <SectionLayout>
        <div>1</div>
      </SectionLayout>
      <SectionLayout>
        <div>1</div>
      </SectionLayout>
    </SContainer>
  );
};

export default Home;

const SContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  scroll-snap-type: y var(--tw-scroll-snap-strictness);
  --tw-scroll-snap-strictness: mandatory;
  position: relative;
  z-index: 1;
`;
