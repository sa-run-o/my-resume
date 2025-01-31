import styled from "styled-components";
import Header from "./components/Header/Header";

function App() {
  return (
    <SContainer>
      <Header />
    </SContainer>
  );
}

export default App;

const SContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  padding: 0;
  overflow-y: scroll;
  --tw-scroll-snap-strictness: mandatory;
`;
