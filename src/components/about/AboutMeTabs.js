import React, { Fragment } from "react"
import ScrollableContent from "../../containers/ScrollableContent"
import { TabPanel, useTabs } from "react-headless-tabs"
import { TextContainer } from "../styled/TextContent"
import { graphql } from "gatsby"
import { useStaticQuery } from "gatsby"
import styled from "styled-components"

const StyledTabPanelContent = styled.div`
  ul {
    margin-top: 0;
  }
  li {
    color: ${props => props.theme.title};
    position: relative;
    margin-left: 1rem;
    transition: 2s ease-in;
    color: ${props => props.theme.text};
    &::marker {
      position: absolute;
      left: 0;
      top: 0.5rem;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      color: red;
    }
  }
  strong {
    font-weight: 900;
    color: ${props => props.theme.text};
    font-size: 1rem;
  }

  time {
    font-size: 0.7rem;
    color: ${props => props.theme.subtext};
  }

  p {
    font-size: 0.85rem;
    opacity: 0.75;
  }
`

const AboutMeTabs = () => {
  const {
    wp: {
      acfOptionsAbout: {
        aboutMeTabs: { tabsRepeater },
      },
    },
  } = useStaticQuery(graphql`
    query AboutTabs {
      wp {
        acfOptionsAbout {
          aboutMeTabs {
            tabsRepeater {
              title
              description
            }
          }
        }
      }
    }
  `)

  let tabItems = []
  tabsRepeater.forEach(item => {
    tabItems.push(item.title)
  })

  const [selectedTab, setSelectedTab] = useTabs(tabItems)
  const changeTab = e => {
    e.preventDefault()
    const target = e.target.dataset.tab
    if (typeof target !== "string") {
      return
    }
    setSelectedTab(target)
  }
  const getSelectedTabIndex = () =>
    tabsRepeater.findIndex(item => item.title === selectedTab)

  return (
    <Fragment>
      <nav
        style={{
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: `calc((100% / ${
              tabsRepeater.length
            }) * ${getSelectedTabIndex()})`,
            height: "2px",
            width: `calc(100% / ${tabsRepeater.length})`,
            background: "red",
            transition: "all ease 0.2s",
          }}
        />
        <div
          style={{
            display: "flex",
          }}
        >
          {tabsRepeater.map(item => {
            return (
              <a
                href="#tab"
                key={item.title}
                style={{
                  flex: 1,
                  display: "block",
                  padding: "1rem",
                  textDecoration: "none",
                  color: selectedTab === item.title ? "red" : "#e85333",
                }}
                onClick={changeTab}
                data-tab={item.title}
              >
                {item.title}
              </a>
            )
          })}
        </div>
      </nav>
      <div
        style={{
          padding: "1rem",
        }}
      >
        {tabsRepeater.map(item => {
          return (
            <TabPanel key={item.title} hidden={selectedTab !== item.title}>
              <ScrollableContent>
                <TextContainer>
                  <StyledTabPanelContent
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </TextContainer>
              </ScrollableContent>
            </TabPanel>
          )
        })}
      </div>
    </Fragment>
  )
}

export default AboutMeTabs
