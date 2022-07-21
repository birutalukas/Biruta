import React from "react"

import { graphql } from "gatsby"
import { useStaticQuery } from "gatsby"

import { Heading, SubHeading, TextContainer } from "../styled/TextContent"
import ScrollableContent from "../../containers/ScrollableContent"
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
            description
          }
        }
      }
    }
  `)

  return (
    <div>
      <Heading>{about.heading}</Heading>
      <SubHeading>{about.subheading}</SubHeading>

      <ScrollableContent>
        <TextContainer>
          <div dangerouslySetInnerHTML={{ __html: about.description }}></div>
        </TextContainer>
      </ScrollableContent>
    </div>
  )
}

export default ContentRight
