import React from "react"
import styled from "styled-components"

import BubbleTopLeftSrc from "../../content/assets/images/bubble-top-left.svg"

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: ${props => props.theme.background};
  transition: 2s ease-in;
  position: relative;
  @media (max-width: 992px) {
    overflow-y: auto;
  }
`

const BubbleTopLeft = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(1.5);
  @media (max-width: 992px) {
    transform: scale(0.7);
    left: -5%;
    top: -10%;
  }
  @media (max-width: 576px) {
    left: -10%;
  }
`
const Wrapper = ({ children }) => {
  return (
    <StyledWrapper>
      <BubbleTopLeft src={BubbleTopLeftSrc} alt="" />
      {children}
    </StyledWrapper>
  )
}
export default Wrapper
