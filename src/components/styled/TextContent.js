import React from "react"
import styled from "styled-components"

const StyledHeading = styled.h1`
  color: ${props => props.theme.heading};
  transition: 2s ease-in;
`

export const Heading = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>
}

const StyledSubHeading = styled.h2`
  color: ${props => props.theme.subheading};
  transition: 2s ease-in;
`
export const SubHeading = ({ children }) => {
  return <StyledSubHeading>{children}</StyledSubHeading>
}

const StyledTextContainer = styled.div`
  p {
    color: ${props => props.theme.text};
    transition: 2s ease-in;
  }
`
export const TextContainer = ({ children }) => {
  return <StyledTextContainer>{children}</StyledTextContainer>
}
