import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const subjectsTemplate = ({data}) => {
    const books = data.allContentfulBooks.edges
    let content = (<h2>No books to show</h2>)
    if(books.length !== 0){
        content = (
            books.map(item => {
                return <div key={item.node.id} className="col-sm-6 col-md-3">
                <a rel="noopener noreferrer" target="_blank" href={item.node.booklink}>
                    <div className="card text-white bg-danger mb-3">
                    <div className="card-body">
                        <h5 className="card-title text-center">{item.node.bookname}</h5>
                    </div>
                </div>
                </a>
            </div>
            
            })
            )
    }
    return (
        
        <Layout>
        <SEO title="Books Template" />
         <div className="container">
          <div className="row justify-content-center mt-5">
            <h3>Books</h3>
          </div>
          <div className="row justify-content-center mt-5">
          { content }
          </div>
        </div> 
      </Layout>
)}

export const query = graphql`
query($idc: String!, $ids: String!){
    allContentfulBooks(
      filter: {
        bookkiclass:{id:{eq:$idc}}
        bookkasubject:{id:{eq:$ids}}
      }
    ){
      edges{
        node{
          id
          bookname
          booklink
        }
      }
    }
  }`

export default subjectsTemplate
