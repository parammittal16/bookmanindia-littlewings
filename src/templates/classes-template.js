import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const classesTemplate = ({data}) => {
    const classes = data.contentfulSubjects.subjectkiclasses
    console.log(classes);
    return (
        <Layout>
        <SEO title="Classes Template" />
         <div className="container">
          <div className="row justify-content-center mt-5">
        { 
            classes.map(item => {
                return <div key={item.id} className="col-sm-6 col-md-2">
                <Link to={`/search-class/${data.contentfulSubjects.subjectname}/${item.classname}`}>
                    <div className="card text-white bg-primary mb-3">
                    <div className="card-body">
                        <h5 className="card-title text-center">{item.classname}</h5>
                    </div>
                </div>
                </Link>
            </div>
            
            })
        }
        
          </div>
        </div> 
      </Layout>
)}

export const query = graphql`
query($id: String!){
    contentfulSubjects(id:{eq:$id}){
          id
          subjectname
          subjectkiclasses {
            id
            classname
      }
    }
  }`

export default classesTemplate
