import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <Link className="button" to="/">Go to Homepage</Link>
  </Layout>
)

export default NotFoundPage
