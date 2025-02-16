import React, { useState } from "react";
import styled from "styled-components";
import arrowUp from "../../assets/svg/arrow-up.svg";
import arrowDown from "../../assets/svg/arrow-down.svg";
interface IDropdown {
  options: string[];
  onSelect: (value: string) => void;
}

const Dropdown: React.FC<IDropdown> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <div>{selected || options[0]}</div>
        <div>!</div>
      </DropdownButton>
      <DropdownList isOpen={isOpen}>
        {options.map((option, index) => (
          <DropdownItem key={index} onClick={() => handleSelect(option)}>
            {option}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default Dropdown;

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const DropdownButton = styled.button<{ isOpen: boolean }>`
  width: 100%;
  height: 100%;
  background: ${({ isOpen }) =>
    isOpen ? "white" : "rgba(255, 255, 255, 0.1)"};
  font-weight: bold;
  border: 1px solid white;
  color: ${({ isOpen }) => (isOpen ? "black" : "white")};
  border-radius: ${({ isOpen }) =>
    isOpen ? "5px 5px 0px 0px" : "5px 5px 5px 5px"};
  cursor: pointer;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 4%;
`;

const DropdownList = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  width: 100%;
  background: white;
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: "0px 0px 5px 5px";
  box-shadow: 0 6px 5px rgba(0, 0, 0, 0.2);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 10;
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  transition: background 0.3s;
  color: black;
  &:hover {
    background: #f1f1f1;
  }
`;
