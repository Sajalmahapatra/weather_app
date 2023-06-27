import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GithubLink,
  HeaderContainer,
  HeaderIconsContainer,
  Title,
} from "./styled";
import DarkModeToggle from "react-dark-mode-toggle";
import { toggleDarkMode } from "../../store/reducers/appReducer";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";

const Header = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.app.darkMode);
  return (
    <HeaderContainer>
      <Title>React Weather</Title>
      <HeaderIconsContainer>
        <DarkModeToggle
          checked={isDarkMode}
          onChange={() => dispatch(toggleDarkMode())}
          size={60}
        />
          <GithubLink href="https://github.com/Sajalmahapatra/weather_app/tree/master">
            <GithubIcon />
          </GithubLink>
      </HeaderIconsContainer>
    </HeaderContainer>
  );
};

export default Header;
