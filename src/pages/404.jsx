import { Link } from "gatsby";
import * as React from "react"
import Layout from "../components/layout"

const NotFoundPage = () => {
  return (
    <Layout pageTitle={"Error 404"}>
      <h1>Page Not Found</h1>
      <p>We could not find the page you were looking for. Please try navigating from the <Link to="/">home page</Link>.</p>
    </Layout>
  );
}

export default NotFoundPage
