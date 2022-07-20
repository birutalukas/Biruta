import React from "react"
import styled from "styled-components"

const StyledHeading = styled.h1`
  color: ${props => props.theme.heading};
`

export const Heading = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>
}

const StyledSubHeading = styled.h2`
  color: ${props => props.theme.subheading};
`
export const SubHeading = ({ children }) => {
  return <StyledSubHeading>{children}</StyledSubHeading>
}

const StyledTextContainer = styled.div`
  p {
    color: ${props => props.theme.text};
  }
`
export const TextContainer = ({ children }) => {
  return <StyledTextContainer>{children}</StyledTextContainer>
}
