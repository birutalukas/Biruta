import React from "react"
import styled from "styled-components"

const StyledScrollableContent = styled.div`
  width: 100%;
  height: 250px;
  max-height: 50%;
  overflow-y: auto;
`

const ScrollableContent = ({ children }) => {
  return <StyledScrollableContent>{children}</StyledScrollableContent>
}

export default ScrollableContent
