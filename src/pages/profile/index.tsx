import React from "react"
import { Layout, Row, Col, Typography, Button } from "antd"
import Avatar, { genConfig } from "react-nice-avatar"

import { Wrapper } from "shared/ui"

const ProfilePage = () => {
  return (
    <Wrapper title="Profile">
      <Layout style={{ marginTop: "20px" }}>
        <Row>
          <Col span={3}>
            <Avatar
              style={{ width: "6rem", height: "6rem" }}
              {...genConfig("username")}
            />
          </Col>
          <Col span={21}>
            <Typography.Title>Welcome, username!</Typography.Title>
            <Button type="primary">Update</Button>
          </Col>
        </Row>
        <Row style={{ marginTop: "40px" }}>
          <Col span={24}>
            [here is place for concatenated result from long running call]
          </Col>
        </Row>
      </Layout>
    </Wrapper>
  )
}

export default ProfilePage
