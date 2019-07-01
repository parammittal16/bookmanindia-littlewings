const path = require(`path`)
exports.createPages = async ({ graphql, actions : {createPage} }) => {
    const subjects = await graphql(`
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
  )
  const classes = await graphql(`
  {
    allContentfulSubjects{
     edges{
      node{
        id
        subjectname
      }
    } 
    }
}
  `)

  subjects.data.allContentfulClasses.edges.forEach(({node}) => {
        createPage({
            path:`/search-class/${node.classname}`, 
            component: path.resolve('./src/templates/subjects-template.js'),
            context:{ id: node.id }
        })
    })
    classes.data.allContentfulSubjects.edges.forEach(({node}) => {
        createPage({
            path:`/search-subject/${node.subjectname}`, 
            component: path.resolve('./src/templates/classes-template.js'),
            context:{ id: node.id }
        })
    })
}