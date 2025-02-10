import styled from "styled-components";

interface ISectionLayout {
  children: JSX.Element;
  bgImage?: string;
}

const SectionLayout = ({ children, bgImage }: ISectionLayout) => {
  return (
    <SContainer>
      {bgImage && <SBgImage src={bgImage} />}
      <SChild>{children}</SChild>
    </SContainer>
  );
};

export default SectionLayout;

const SContainer = styled.section`
  height: 100vh;
  width: 100%;
  scroll-snap-align: start;
  position: relative;
  background-color: #000;
  z-index: 1;
`;

const SBgImage = styled.div<{ src: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  filter: grayscale(100%);
  background-image: url(${(props) => props.src});
  z-index: 1;
`;

const SChild = styled.div`
  position: relative;
  z-index: 2;
  height: 100vh;
  width: 100vw;
  & > div {
    padding-top: 50px;
    width: 100%;
    height: 100%;
  }
`;
