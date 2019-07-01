const path = require(`path`)
exports.createPages = async ({ graphql, actions : {createPage} }) => {
    const subjects = await graphql(`
    {
        allContentfulClasses{
               edges{
                node{
                  id
                  classname
                  subjects{
                    id
                    subjectname
                  }
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
        subjectkiclasses{
            id
            classname
       }
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
        node.subjects.forEach(item => {
            createPage({
                path:`/search-class/${node.classname}/${item.subjectname}`,
                component: path.resolve('./src/templates/books-template.js'),
                context:{ idc: node.id, ids: item.id }
            })
        })
    })
    classes.data.allContentfulSubjects.edges.forEach(({node}) => {
        createPage({
            path:`/search-subject/${node.subjectname}`, 
            component: path.resolve('./src/templates/classes-template.js'),
            context:{ id: node.id }
        })
        // node.subjectkiclasses.forEach(item => {
        //     createPage({
        //         path:`/search-subject/${node.subjectname}/${item.classname}`,
        //         component: path.resolve('./src/templates/books-template.js'),
        //         context:{ ids: node.id, idc: item.id }
        //     })
        // })
    })
}