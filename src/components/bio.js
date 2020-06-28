/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          email
          description
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social, description, email } = data.site.siteMetadata
  return (
    <div style={{ marginBottom: rhythm(2.5) }}>
      <div
        style={{
          display: `flex`,
        }}
      >
        {/* <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      /> */}
        <div>{description}</div>
      </div>
      <div>
        Click <a href={`mailto: ${email}`}>here</a> if you want to get in touch
      </div>
    </div>
  )
}

export default Bio
