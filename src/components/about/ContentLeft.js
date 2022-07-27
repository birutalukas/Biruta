import React from "react"
import photoBackgroundSrc from "../../../content/assets/images/profile-photo-background.svg"
import photoBackgroundYellowSrc from "../../../content/assets/images/profile-photo-background-yellow.svg"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const PhotoWrapper = styled.div`
  @media (max-width: 992px) {
    width: 100%;
  }
`

const Photo = styled.div`
  display: block;
  z-index: 5;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;

  .gatsby-image-wrapper {
    overflow: visible !important;
    z-index: 5;
    @media (max-width: 992px) {
      max-width: 100%;
    }
  }
  img {
    box-shadow: 0px 2px 0px 5px ${props => props.theme.background};
    border-radius: 50%;
    transition: 2s ease-in;
  }
  @media (max-width: 992px) {
    position: unset;
    left: 0;
    transform: unset;
    width: 100%;
    display: flex;
    justify-content: center;
    > img {
      width: 365px;
      height: 365px;
    }
  }
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

  @media (max-width: 992px) {
    transform-origin: center;
  }

  @keyframes rotate {
    from {
      transform: translateX(-50%) rotate(0deg);
    }
    to {
      transform: translateX(-50%) rotate(360deg);
    }
  }
`

const PhotoBackgroundYellow = styled.img`
  transform: translateX(-50%) rotate(90deg);
  display: block;
  position: absolute;
  top: 7%;
  left: 50%;
  width: 100%;
  z-index: 1;
  animation: 20s rotate infinite;
  transform-origin: bottom;

  @media (max-width: 992px) {
    transform-origin: center;
  }

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
  const {
    wp: {
      acfOptionsAbout: {
        about: {
          picture: {
            localFile: {
              childImageSharp: { fixed },
            },
          },
        },
      },
    },
  } = useStaticQuery(graphql`
    query AboutMePicture {
      wp {
        acfOptionsAbout {
          about {
            picture {
              localFile {
                childImageSharp {
                  fixed(width: 365, height: 365) {
                    src
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <PhotoWrapper>
      <Photo>
        <Img fixed={fixed} alt="Lukas Biruta" fadeIn={true} loading="eager" />
        <PhotoBackground src={photoBackgroundSrc} alt="" />
        <PhotoBackgroundYellow src={photoBackgroundYellowSrc} alt="" />
      </Photo>
    </PhotoWrapper>
  )
}

export default ContentLeft
