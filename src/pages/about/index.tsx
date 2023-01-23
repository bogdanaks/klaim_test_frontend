import React from "react"
import { Typography } from "antd"

import { Wrapper } from "shared/ui"

const AboutPage = () => {
  return (
    <Wrapper title="About us">
      <Typography.Title level={1}>
        Little story about the company
      </Typography.Title>
    </Wrapper>
  )
}

export default AboutPage
