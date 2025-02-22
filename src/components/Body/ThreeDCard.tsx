import React, { useState } from "react";
import styled from "styled-components";
interface IThreeDCard {
  children: JSX.Element;
}
const ThreeDCard = ({ children }: IThreeDCard) => {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { width, height, left, top } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    const rotateX = (-y / height) * 20;
    const rotateY = (x / width) * 20;

    setRotation({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ rotateX: 0, rotateY: 0 });
  };

  return (
    <SCardContainer>
      <SCard
        rotateX={rotation.rotateX}
        rotateY={rotation.rotateY}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </SCard>
    </SCardContainer>
  );
};

export default ThreeDCard;

const SCardContainer = styled.div`
  width: 100%;
  height: 100%;
  perspective: 1000px;
`;

const SCard = styled.div<{ rotateX: number; rotateY: number }>`
  width: 100%;
  height: 100%;
  background: rgba(128, 128, 128, 0.25);
  /* background: linear-gradient(135deg, #383838, #fef7f5); */
  border-radius: 15px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  transition: transform 0.2s ease-out;
  transform: ${({ rotateX, rotateY }) =>
    `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`};
`;
