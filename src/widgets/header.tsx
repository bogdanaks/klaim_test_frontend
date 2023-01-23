import React from "react"
import { Space, Button, Layout } from "antd"
import Link from "next/link"
import { useRouter } from "next/router"

export const Header = () => {
  const router = useRouter()

  const isActiveStyles = { color: "#4096ff", borderColor: "#4096ff" }

  return (
    <Layout.Header style={{ backgroundColor: "#f5f5f5" }}>
      <Space wrap>
        <Link href="/about">
          <Button style={router.asPath === "/about" ? isActiveStyles : {}}>
            About us
          </Button>
        </Link>
        <Link href="/profile">
          <Button style={router.asPath === "/profile" ? isActiveStyles : {}}>
            Profile
          </Button>
        </Link>
        <Link href="/sign-in">
          <Button style={router.asPath === "/sign-in" ? isActiveStyles : {}}>
            Sign in
          </Button>
        </Link>
      </Space>
    </Layout.Header>
  )
}
