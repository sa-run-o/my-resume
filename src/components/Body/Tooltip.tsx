import { styled } from "styled-components";

interface ITooltip {
  text: string;
  position?: "top" | "right" | "bottom" | "left";
  children: React.ReactNode;
}
const Tooltip = ({ text, position, children }: ITooltip) => {
  return (
    <TooltipContainer>
      <TooltipWrapper>
        {children}
        <TooltipText position={position}>{text}</TooltipText>
      </TooltipWrapper>
    </TooltipContainer>
  );
};
export default Tooltip;
const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const TooltipText = styled.div<{ position?: string }>`
  position: absolute;
  background-color: #272727;
  color: #fff;
  padding: 6px 10px;
  border-radius: 10px;
  white-space: nowrap;
  font-size: 14px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;

  ${({ position }) => {
    switch (position) {
      case "top":
        return "bottom: 120%; left: 50%; transform: translateX(-50%);";
      case "right":
        return "left: 120%; top: 50%; transform: translateY(-50%);";
      case "bottom":
        return "top: 120%; left: 50%; transform: translateX(-50%);";
      case "left":
        return "right: 120%; top: 50%; transform: translateY(-50%);";
      default:
        return "bottom: 120%; left: 50%; transform: translateX(-50%);";
    }
  }}
`;
const TooltipWrapper = styled.div`
  &:hover ${TooltipText} {
    opacity: 1;
    visibility: visible;
  }
`;
