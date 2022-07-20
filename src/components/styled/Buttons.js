import React from "react"

import styled from "styled-components"

const StyledCustomLink = styled.a`
  font-weight: 900;
  color: violet;
`

export const CustomLink = ({ title, href, target }) => {
  return (
    <StyledCustomLink href={href} target={target}>
      {title}
    </StyledCustomLink>
  )
}
