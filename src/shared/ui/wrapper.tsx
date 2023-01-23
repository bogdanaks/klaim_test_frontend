import React from "react"
import { Layout } from "antd"
import Head from "next/head"
import { Header } from "widgets"

interface WrapperProps {
  title: string
  children: React.ReactNode
}

export const Wrapper = ({ title, children }: WrapperProps) => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Layout.Content style={{ paddingInline: "50px" }}>
        {children}
      </Layout.Content>
    </Layout>
  )
}
