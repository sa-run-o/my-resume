import { styled } from "styled-components";

const LoadingPage = () => {
  return (
    <SContainer>
      <div className="hole">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </SContainer>
  );
};
export default LoadingPage;

const SContainer = styled.div`
  z-index: 100;
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 1);
  .hole {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  i {
    display: block;
    position: absolute;
    width: 50px;
    height: 50px;

    border-radius: 140px;
    opacity: 0;
    animation-name: scale;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  i:nth-child(1) {
    animation-delay: 0.3s;
  }

  i:nth-child(2) {
    animation-delay: 0.6s;
  }

  i:nth-child(3) {
    animation-delay: 0.9s;
  }

  i:nth-child(4) {
    animation-delay: 1.2s;
  }

  i:nth-child(5) {
    animation-delay: 1.5s;
  }

  i:nth-child(6) {
    animation-delay: 1.8s;
  }

  i:nth-child(7) {
    animation-delay: 2.1s;
  }

  i:nth-child(8) {
    animation-delay: 2.4s;
  }

  i:nth-child(9) {
    animation-delay: 2.7s;
  }

  i:nth-child(10) {
    animation-delay: 3s;
  }

  @keyframes scale {
    0% {
      transform: scale(2);
      opacity: 0;
      box-shadow: 0px 0px 50px rgba(255, 255, 255, 0.5);
    }
    50% {
      transform: scale(1) translate(0px, -5px);
      opacity: 1;
      box-shadow: 0px 8px 20px rgba(255, 255, 255, 0.5);
    }
    100% {
      transform: scale(0.1) translate(0px, 5px);
      opacity: 0;
      box-shadow: 0px 10px 20px rgba(255, 255, 255, 0);
    }
  }
`;
