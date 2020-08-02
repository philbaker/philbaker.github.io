import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css, jsx } from '@emotion/core';
import tw, { styled } from "twin.macro"

const AboutIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />

      <h1 css={css`${tw`mb-3 text-2xl`}`}>About</h1>
              
      <p>Hi, I'm Phil - a front-end developer based in the UK. I love to build user interfaces with maintainable and reusable components.</p>

      <h3 css={css`${tw`font-medium`}`}>Core skills</h3>
      <ul css={css`${tw`mb-3 list-disc list-inside`}`}>
          <li>JavaScript, React, Vue</li>
          <li>CSS, Tailwind, Bootstrap, BEM</li>
          <li>Unit testing, Browser automation</li>
      </ul>

      <h3 css={css`${tw`font-medium`}`}>Areas of interest</h3>
      <ul  css={css`${tw`mb-3 list-disc list-inside`}`}>
          <li>Rapid prototyping</li>
          <li>Functional programming with Clojure(Script)</li>
      </ul>
    </Layout>
  )
}

export default AboutIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
