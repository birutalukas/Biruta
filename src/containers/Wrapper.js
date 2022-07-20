import React from "react"
import styled from "styled-components"

import ElectricRightBubbleSrc from "../../content/assets/images/electric-right.svg"
import BubbleTopLeftSrc from "../../content/assets/images/bubble-top-left.svg"

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.background};
  transition: 2s ease-in;
  position: relative;
`
const ElectricRightBubble = styled.img`
  position: absolute;
  bottom: 4rem;
  right: 0;
`
const BubbleTopLeft = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(1.5);
`
const Wrapper = ({ children }) => {
  return (
    <StyledWrapper>
      <BubbleTopLeft src={BubbleTopLeftSrc} alt="" />
      {children}
      <ElectricRightBubble src={ElectricRightBubbleSrc} alt="" />
    </StyledWrapper>
  )
}
export default Wrapper
