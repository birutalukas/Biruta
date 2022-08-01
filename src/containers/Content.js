import React from "react"
import styled from "styled-components"

export const Content = styled.main`
  width: 100%;
  @media (max-width: 992px) {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
`
export const FlexContent = styled(Content)`
  display: flex;
  flex-wrap: wrap;
`
const StyledContentHalf = styled.div`
  ${props => ({
    paddingLeft: props.paddingLeft,
    paddingRight: props.paddingRight,
    width: "50%",
    position: "relative",
  })}

  z-index: 10;
  @media (max-width: 992px) {
    width: 100%;
    padding-right: 0;
    padding-left: 0;
  }
`

export const ContentHalf = ({ children, paddingLeft, paddingRight }) => {
  return (
    <StyledContentHalf paddingLeft={paddingLeft} paddingRight={paddingRight}>
      {children}
    </StyledContentHalf>
  )
}
export default Content
