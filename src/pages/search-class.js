import React from "react"
import { Link } from "gatsby"
import {  graphql } from 'gatsby'
 
import Layout from "../components/layout"
import SEO from "../components/seo"

const searchClass = ({data}) => {
    const classes = data.allContentfulClasses.edges
  return (
  <Layout>
    <SEO title="Search Class" />
    <div className="container">
    <div className="row justify-content-center mt-5">
            <h3>Classes</h3>
          </div>
      <div className="row justify-content-center mt-5">
    { 
        classes.map(item => {
            return <div key={item.node.id} className="col-sm-6 col-md-2">
            <Link to={`/search-class/${item.node.classname}`}>
                <div className="card text-white bg-warning mb-3">
                <div className="card-body">
                    <h5 className="card-title text-center">{item.node.classname}</h5>
                </div>
            </div>
            </Link>
        </div>
        
        })
    }
    
      </div>
    </div>
  </Layout>
  )
}

export const query = graphql`
{
    allContentfulClasses{
      edges{
        node{
          id
          classname
        }
      }
    }
  }`

export default searchClass
