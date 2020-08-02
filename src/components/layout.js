import React from "react"
import { Link } from "gatsby"
import { css, jsx } from '@emotion/core'
import tw, { styled } from "twin.macro"
import "./layout.css"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname) {
    header = (
      <div
        css={css`
          ${tw`flex justify-between items-start mb-8`}
        `}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          <span
            css={css`
              ${tw`text-2xl`}
            `}
          >
            {title}
          </span>
          <small
            css={css`
              ${tw`text-base block`}
            `}
          >
              Front-end developer
            </small>
        </Link>
        <nav
          css={css`
            ${tw`pt-1`}
          `}
        >
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`/about`}
          >
            About
          </Link>
        </nav>
      </div>
    )
  } 
  return (
    <div
      css={css`
        ${tw`px-4 py-4 container mx-auto`}
      `}
    >
      <header>{header}</header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
