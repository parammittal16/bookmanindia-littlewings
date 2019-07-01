import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const subjectsTemplate = ({data}) => {
    
    console.log(data);
    return (
        <Layout>
        <SEO title="Subjects Template" />
         {/* <div className="container">
          <div className="row justify-content-center mt-5">
        { 
            subjects.map(item => {
                return <div key={item.id} className="col-sm-6 col-md-2">
                <Link to={`/search-class/${data.contentfulClasses.classname}/${item.subjectname}`}>
                    <div className="card text-white bg-primary mb-3">
                    <div className="card-body">
                        <h5 className="card-title text-center">{item.subjectname}</h5>
                    </div>
                </div>
                </Link>
            </div>
            
            })
        }
        
          </div>
        </div>  */}
      </Layout>
)}

export const query = graphql`
query($idc: String!, $ids: String!){
    allContentfulBooks(
      filter: {
        bookkiclass:{classname:{eq:$idc}}
        bookkasubject:{subjectname:{eq:$ids}}
      }
    ){
      edges{
        node{
          id
          bookname
          booklink{
            booklink
          }
          bookkiclass{
            classname
          }
          bookkasubject{
            subjectname
          }
        }
      }
    }
  }`

export default subjectsTemplate