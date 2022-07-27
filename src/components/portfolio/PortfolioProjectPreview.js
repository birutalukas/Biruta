import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { useSwiperSlide } from "swiper/react"
import Img from "gatsby-image"

const ProjectImageContainer = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 78%;
  height: 88%;
  overflow-y: scroll;

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  img {
    max-width: 100%;
  }
`

const PortfolioProject = ({ title, screenshot }) => {
  const projectRef = useRef()
  const swiperSlide = useSwiperSlide()

  useEffect(() => {
    if (projectRef.current !== null && swiperSlide.isActive) {
      projectRef.current.scrollTop = 0
    }
    setTimeout(() => {
      setInterval(() => {
        if (projectRef.current !== null && swiperSlide.isActive) {
          projectRef.current.scrollTop += 1
        }
      }, 100)
    }, 2000)
  }, [swiperSlide])

  return (
    <ProjectImageContainer ref={projectRef}>
      <Img fluid={screenshot} fadeIn={true} />
    </ProjectImageContainer>
  )
}

export default PortfolioProject
