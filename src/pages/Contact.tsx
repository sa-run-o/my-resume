import { styled } from "styled-components";

const Contact = () => {
  return <SContainer>Contact</SContainer>;
};
export default Contact;
const SContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  scroll-snap-type: y var(--tw-scroll-snap-strictness);
  --tw-scroll-snap-strictness: mandatory;
  position: relative;
`;
