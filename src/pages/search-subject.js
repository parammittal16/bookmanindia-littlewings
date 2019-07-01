import React from "react"
import { Link } from "gatsby"
import {  graphql } from 'gatsby'
 
import Layout from "../components/layout"
import SEO from "../components/seo"

const searchSubject = ({data}) => {
    const subjects = data.allContentfulSubjects.edges
  return (
  <Layout>
    <SEO title="Search Subject" />
    <div className="container">
      <div className="row justify-content-center mt-5">
    { 
        subjects.map(item => {
            return <div key={item.node.id} className="col-sm-6 col-md-2">
            <Link to={`/search-subject/${item.node.subjectname}`}>
                <div className="card text-white bg-primary mb-3">
                <div className="card-body">
                    <h5 className="card-title text-center">{item.node.subjectname}</h5>
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
    allContentfulSubjects{
     edges{
      node{
        id
        subjectname
      }
    } 
    }
}`

export default searchSubject
