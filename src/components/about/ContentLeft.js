import React from "react"
import photoBackgroundSrc from "../../../content/assets/images/profile-photo-background.svg"
import photoBackgroundYellowSrc from "../../../content/assets/images/profile-photo-background-yellow.svg"
import photoSrc from "../../../content/assets/images/foto.png"
import styled from "styled-components"

const PhotoWrapper = styled.div`
  position: relative;
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Photo = styled.img`
  display: block;
  // margin: 0 auto;
  // position: relative;
  // width: 90%;
  z-index: 5;

  position: absolute;
  top: 10%;
  left: 50%;
  width: 90%;
  transform: translateX(-50%);
`

const PhotoBackground = styled.img`
  transform: translateX(-50%) rotate(180deg);
  display: block;
  position: absolute;
  top: 7%;
  left: 50%;
  width: 100%;
  z-index: 1;
  animation: 15s rotate infinite;
  transform-origin: bottom;

  @keyframes rotate {
    from {
      transform: translateX(-50%) rotate(0deg);
    }
    to {
      transform: translateX(-50%) rotate(360deg);
    }
  }
`

const PhotoBackgrounYellow = styled.img`
  transform: translateX(-50%) rotate(90deg);
  display: block;
  position: absolute;
  top: 7%;
  left: 50%;
  width: 100%;
  z-index: 1;
  animation: 20s rotate infinite;
  transform-origin: bottom;

  @keyframes rotate {
    from {
      transform: translateX(-50%) rotate(90deg);
    }
    to {
      transform: translateX(-50%) rotate(450deg);
    }
  }
`

const ContentLeft = () => {
  return (
    <PhotoWrapper>
      <Photo src={photoSrc} alt="Lukas Biruta" />
      <PhotoBackground src={photoBackgroundSrc} alt="" />
      <PhotoBackgrounYellow src={photoBackgroundYellowSrc} alt="" />
    </PhotoWrapper>
  )
}

export default ContentLeft
