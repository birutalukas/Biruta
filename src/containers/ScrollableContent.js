import React from "react"
import styled from "styled-components"

const StyledScrollableContent = styled.div`
  width: 100%;
  height: 250px;
  max-height: 50%;
  overflow-y: auto;
  padding-right: 2rem;

  ::-webkit-scrollbar {
    height: 5px;
    width: 5px;
    margin: 10px;
    padding-bottom: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.subheading};
    height: 5px;
    width: 5px;
    border-radius: 5px;
    margin: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.heading};
    height: 5px;
    width: 5px;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px;
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: #ccc;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
  /* IE SPECIFIC */
  scrollbar-base-color: #aaa;
  scrollbar-3dlight-color: #aaa;
  scrollbar-highlight-color: #aaa;
  scrollbar-track-color: ${props => props.theme.heading};
  scrollbar-arrow-color: #ccc;
  scrollbar-shadow-color: #aaa;
  scrollbar-dark-shadow-color: #aaa;
`

const ScrollableContent = ({ children }) => {
  return <StyledScrollableContent>{children}</StyledScrollableContent>
}

export default ScrollableContent
