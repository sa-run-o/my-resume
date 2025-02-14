import { styled } from "styled-components";
import Footer from "../components/Footer/Footer";

const Experience = () => {
  return (
    <SContainer>
      <Footer />
    </SContainer>
  );
};
export default Experience;
const SContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  scroll-snap-type: y var(--tw-scroll-snap-strictness);
  --tw-scroll-snap-strictness: mandatory;
  position: relative;
`;
