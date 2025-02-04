import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import uiStore from "./stores/uiStore";
import LoadingPage from "./pages/LoadingPage";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";

function App() {
  const { isPageLoading, turnPageLoadingBySec } = uiStore();
  const [showLoadingPage, setShowLoadingPage] = useState(isPageLoading);

  useEffect(() => {
    turnPageLoadingBySec(5);
  }, []);

  useEffect(() => {
    if (!isPageLoading) {
      const timer = setTimeout(() => setShowLoadingPage(false), 500); // Match the transition duration
      return () => clearTimeout(timer);
    } else {
      setShowLoadingPage(true);
    }
  }, [isPageLoading]);

  return (
    <Router>
      <SContainer>
        {showLoadingPage && (
          <SLoadingPageWrapper isPageLoading={isPageLoading}>
            <LoadingPage />
          </SLoadingPageWrapper>
        )}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </SContainer>
    </Router>
  );
}

export default App;

const SContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  padding: 0;
`;

const SLoadingPageWrapper = styled.div<{ isPageLoading: boolean }>`
  opacity: ${({ isPageLoading }) => (isPageLoading ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: white;
`;
