import React, { useContext } from "react"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import styled from "styled-components"

import { ThemeContext } from "../context/ThemeStore"

const NavbarWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  padding-top: 2rem;
  z-index: 50;
  @media (max-width: 992px) {
    left: 0;
    transform: unset;
  }
  a {
    text-decoration: none;
    margin-right: 3rem;
    padding: 1rem;
    transition: 2s ease-in;
    color: ${props => props.theme.title};
    border-radius: 50%;
    animation: morph 5s ease-in-out infinite;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    transition: all 5s ease-in-out;
    &.activeMenuItem {
      color: red;
    }
    @media (max-width: 992px) {
      margin-right: 0;
    }
    @keyframes morph {
      0% {
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      }

      50% {
        border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
      }

      100% {
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
      }
    }

    & :last-child {
      margin-right: 0;
    }
  }
  .activeMenuItem {
    border-bottom: 3px solid red;
  }
`

const Navbar = () => {
  const { switchTheme } = useContext(ThemeContext)
  return (
    <NavbarWrapper>
      <AniLink
        paintDrip
        to="/"
        hex="#000000"
        duration={1.2}
        activeClassName="activeMenuItem"
        onClick={() => switchTheme("dark")}
      >
        About
      </AniLink>
      <AniLink
        paintDrip
        to="/portfolio"
        hex="#B7661B"
        duration={1.2}
        activeClassName="activeMenuItem"
        onClick={() => switchTheme("neutral")}
      >
        Portfolio
      </AniLink>
      <AniLink
        paintDrip
        to="/contact"
        hex="#FFFFFF"
        duration={1.2}
        activeClassName="activeMenuItem"
        onClick={() => switchTheme("light")}
      >
        Contact
      </AniLink>
    </NavbarWrapper>
  )
}

export default Navbar
