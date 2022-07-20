import React from "react"
import PortfolioProjectPreview from "./PortfolioProjectPreview"
import { Navigation, Pagination } from "swiper"
import { graphql, useStaticQuery } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { StaticImage } from "gatsby-plugin-image"
import { ContentHalf } from "../../containers/Content"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const PortfolioProjects = () => {
  const {
    wp: {
      acfOptionsPortfolio: {
        projects: { projectsRepeater },
      },
    },
  } = useStaticQuery(graphql`
    query Portfolio {
      wp {
        acfOptionsPortfolio {
          projects {
            projectsRepeater {
              projectTitle
              projectWebsite
              projectScreenshot {
                id
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("Slide Change")}
      onSwiper={swiper => console.log(swiper)}
    >
      {projectsRepeater.map((project, key) => (
        <SwiperSlide key={project.projectTitle}>
          <ContentHalf>
            <StaticImage
              src="../../../content/assets/images/macbook.png"
              alt="MacBook"
            />
            <PortfolioProjectPreview
              title={project.projectTitle}
              screenshot={project.projectScreenshot.mediaItemUrl}
            />
          </ContentHalf>
          <ContentHalf paddingLeft="3rem">
            <h1>Content</h1>
          </ContentHalf>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

PortfolioProjects.displayName = "SwiperSlide"

export default PortfolioProjects
