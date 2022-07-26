import React from "react"
import PortfolioProjectPreview from "./PortfolioProjectPreview"
import { Navigation, Pagination } from "swiper"
import { graphql, useStaticQuery } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { StaticImage } from "gatsby-plugin-image"
import { ContentHalf } from "../../containers/Content"
import { CustomLink } from "../styled/Buttons"
import { Heading, TextContainer } from "../styled/TextContent"
import ScrollableContent from "../../containers/ScrollableContent"
import styled from "styled-components"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const PortfolioProjectWrapper = styled.div`
  position: relative;
  overflow: hidden;
`

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
              projectDescription
              projectWebsite
              projectScreenshot {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 500) {
                      src
                      ...GatsbyImageSharpFluid_withWebp
                    }
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
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {projectsRepeater.map((project, key) => (
        <SwiperSlide key={project.projectTitle}>
          <ContentHalf>
            <PortfolioProjectWrapper>
              <StaticImage
                src="../../../content/assets/images/macbook.png"
                alt="MacBook"
              />
              <PortfolioProjectPreview
                title={project.projectTitle}
                screenshot={
                  project.projectScreenshot.localFile.childImageSharp.fluid
                }
              />
            </PortfolioProjectWrapper>
          </ContentHalf>
          <ContentHalf paddingLeft="3rem">
            <Heading>{project.projectTitle}</Heading>
            <ScrollableContent>
              <TextContainer>
                <div
                  dangerouslySetInnerHTML={{
                    __html: project.projectDescription,
                  }}
                ></div>
              </TextContainer>
            </ScrollableContent>
            <CustomLink
              title="Visit Website"
              href={project.projectWebsite}
              target="_blank"
            />
          </ContentHalf>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

PortfolioProjects.displayName = "SwiperSlide"

export default PortfolioProjects
