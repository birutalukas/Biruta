import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { useSwiperSlide } from "swiper/react"

const ProjectImageContainer = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  background: tomato;
  width: 78%;
  height: 86%;
  overflow-y: scroll;

  img {
    max-width: 100%;
  }
`

const PortfolioProject = ({ title, screenshot }) => {
  const projectRef = useRef()
  const swiperSlide = useSwiperSlide()

  console.log("swiperSLide", swiperSlide)

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
      <img src={screenshot} alt={title} />
    </ProjectImageContainer>
  )
}

export default PortfolioProject
