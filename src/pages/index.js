import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="row justify-content-center">
      <div className="col-12 my-4" style={{ maxWidth: `150px` }}>
      <Image />
      </div>
        <div className="col-12 text-center">
          <h3>Little Wings Series</h3>
       </div>
      </div>
      <div className="container">
      <div className="row justify-content-center mt-5">
      <div className="col-sm-12 col-md-6 text-center">
      <Link className="text-white" style={{ textDecoration: `none` }} to="/search-class/">
      <div className="card text-white bg-primary my-3">
         <div className="card-body">
            <h5 className="card-title text-center">Find by Class</h5>
         </div>
        </div>
      </Link>
      </div>
      <div className="col-sm-12 col-md-6 text-center">
      <Link className="text-white" style={{ textDecoration: `none` }} to="/search-subject/">
      <div className="card text-white bg-primary my-3">
         <div className="card-body">
            <h5 className="card-title text-center">Find by Subject</h5>
         </div>
        </div>
      </Link>
      </div>
      </div>
      </div>
    </div> 
  </Layout>
)

export default IndexPage
