import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

interface TypingTextProps {
  text: string;
  typingSpeed?: number;
  startDelay?: number;
}

const Typing: React.FC<TypingTextProps> = ({
  text,
  typingSpeed = 100,
  startDelay = 500,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let i = 0;
    const startTyping = () => {
      const typingInterval = setInterval(() => {
        setIsTyping(true);
        if (i <= text.length) {
          setDisplayedText(text.slice(0, i));
          i++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, typingSpeed);
    };

    const delayTimeout = setTimeout(startTyping, startDelay);
    return () => {
      clearTimeout(delayTimeout);
    };
  }, [text, typingSpeed, startDelay]);

  return (
    <SContainer>
      {displayedText}
      <SCaret show={isTyping} startDelay={startDelay}>
        |
      </SCaret>
    </SContainer>
  );
};

export default Typing;
const blink = keyframes`
  50% { opacity: 0; }
`;

const SContainer = styled.div``;
const SCaret = styled.span<{ show: boolean; startDelay: number }>`
  display: ${({ show }) => (show ? "inline-block" : "none")};
  width: 8px;
  height: 20px;
  background-color: black;
  margin-left: 2px;
  animation: ${blink} 0.8s step-start infinite;
`;
