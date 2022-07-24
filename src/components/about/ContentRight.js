import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import { Heading, SubHeading } from "../styled/TextContent"
import AboutMeTabs from "./AboutMeTabs"

const ContentRight = () => {
  const {
    wp: {
      acfOptionsAbout: { about },
    },
  } = useStaticQuery(graphql`
    query AboutMe {
      wp {
        acfOptionsAbout {
          about {
            heading
            subheading
          }
        }
      }
    }
  `)
  return (
    <div>
      <Heading>{about.heading}</Heading>
      <SubHeading>{about.subheading}</SubHeading>

      <AboutMeTabs />
    </div>
  )
}

export default ContentRight
