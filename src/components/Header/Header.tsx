import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import uiStore from "../../stores/uiStore";
const DEFAULT_MENU = [
  { label: "HOME", nav: "/" },
  { label: "EXPERIENCE", nav: "/experience" },
  { label: "CONTACT", nav: "/contact" },
];
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { turnPageLoadingBySec } = uiStore();
  const handleNavigate = (path: string) => {
    turnPageLoadingBySec(2);
    navigate(path);
  };
  return (
    <SContainer>
      <div className="left" onClick={() => handleNavigate("/")}>
        <sup>Ⓢ</sup> RUN
      </div>
      <div className="right">
        <div>[</div>
        <SMenuContainer>
          {DEFAULT_MENU.map((menu) => {
            return (
              <SMenu
                className={`${
                  location.pathname === menu.nav ? "selected" : ""
                }`}
                onClick={() => {
                  handleNavigate(menu.nav);
                }}
              >
                {menu.label}
              </SMenu>
            );
          })}
        </SMenuContainer>
        <div>]</div>
      </div>
    </SContainer>
  );
};
export default Header;
const SContainer = styled.div`
  z-index: 98;
  position: fixed;
  top: 0;
  width: 100%;
  height: 5vh;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    margin-left: 5vw;
    cursor: pointer;
    font-weight: bolder;
  }
  .right {
    margin-right: 5vw;
    height: 80%;
    display: flex;
    align-items: center;
  }
  @media (max-width: 768px) {
    height: 6vh;
  }

  @media (max-width: 480px) {
    height: 7vh;
  }
`;
const SMenu = styled.div`
  padding: 0px 7px;
  position: relative;
  cursor: pointer;
  &.selected {
    font-weight: bold;
  }

  &:hover {
    color: #090909 !important ;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 0;
    height: 2px;
    transition: width 0.3s ease-in-out;
    background-color: #656565;
  }
  &:hover::after {
    width: 100%;
    background-color: #090909;
  }
`;
const SMenuContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #656565 !important;
  }
`;
