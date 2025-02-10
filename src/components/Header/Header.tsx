import styled, { keyframes } from "styled-components";
import HamburgerMenuIcon from "../../assets/svg/hamburger-menu.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
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
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleNavigate = (path: string) => {
    setIsOpenMenu(false);
    turnPageLoadingBySec(5);
    navigate(path);
  };
  return (
    <SContainer>
      <div className="left" onClick={() => handleNavigate("/")}>
        <sup>Ⓢ</sup> RUN
      </div>
      <div className="right">
        <img
          src={HamburgerMenuIcon}
          onClick={() => {
            setIsOpenMenu(true);
          }}
        />
        {isOpenMenu && (
          <SMenuLayout onClick={() => setIsOpenMenu(false)}>
            <div onClick={(e) => e.stopPropagation()}>
              <SMenuContainer>
                {DEFAULT_MENU.map((menu) => {
                  return (
                    <SMenu
                      key={menu.label}
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
              <SStatus>
                <GreenDot />
                <div>Available</div>
              </SStatus>
            </div>
          </SMenuLayout>
        )}
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
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 10px 50px 0px;
  .left {
    margin-left: 5vw;
    cursor: pointer;
    font-weight: bolder;
  }
  .right {
    position: relative;
    cursor: pointer;
    margin-right: 5vw;
    height: 80%;
    & > img {
      height: 100%;
    }
  }
  @media (max-width: 768px) {
    height: 6vh;
  }

  @media (max-width: 480px) {
    height: 7vh;
  }
`;
const SMenuLayout = styled.div`
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  & > div {
    position: fixed;
    right: 5vw;
    top: 5.5vh;
    width: fit-content;
    background-color: black;
    border-radius: 10px;
    box-shadow: rgba(255, 255, 255, 0.2) 0px 7px 29px 0px;
    padding: 10px 50px 10px 15px;
  }
`;
const SMenuContainer = styled.div`
  border-bottom: 1px solid white;
`;
const SMenu = styled.div`
  font-size: 3rem;
  cursor: pointer;
  &.selected {
    text-decoration: underline;
  }
  &:hover {
    text-decoration: underline;
  }
`;
const popAnimation = keyframes`
  0%, 100% {
    opacity: 0.4;
  }
  50% {
   opacity: 1;
  }
`;
const SStatus = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px;
`;
const GreenDot = styled.div`
  width: 10px;
  height: 10px;
  background-color: #4cc24c;
  border-radius: 50%;
  animation: ${popAnimation} 1s infinite;
  margin-right: 5px;
`;
