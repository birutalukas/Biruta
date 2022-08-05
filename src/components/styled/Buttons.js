import React from "react"

import styled from "styled-components"

const StyledCustomLink = styled.a`
  display: block;
  width: fit-content;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-weight: 900;
  color: ${props => props.theme.buttonColor};
  border: 2px solid ${props => props.theme.buttonColor};
  border-radius: 4px;
  transition: 2s ease-in;
`

export const CustomLink = ({ title, href, target }) => {
  return (
    <StyledCustomLink href={href} target={target}>
      {title}
    </StyledCustomLink>
  )
}
