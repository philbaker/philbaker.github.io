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
              
      <p>Hi, I'm Phil - a front-end developer based in the UK. I love building user interfaces with Tailwind and React.</p>

      <h3 css={css`${tw`font-medium`}`}>Core skills</h3>
      <ul css={css`${tw`mb-3 list-disc list-inside`}`}>
          <li>HTML, CSS, Tailwind, JavaScript, React</li>
          <li>Clojure(Script)</li>
      </ul>

      <a rel="me" href="https://functional.cafe/@philbaker">Mastodon</a>
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
