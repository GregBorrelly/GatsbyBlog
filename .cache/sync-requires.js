const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/gregoryestevez/development/GatsbyBlog/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-not-found-template-js": hot(preferDefault(require("/Users/gregoryestevez/development/GatsbyBlog/src/templates/not-found-template.js"))),
  "component---src-templates-tags-list-template-js": hot(preferDefault(require("/Users/gregoryestevez/development/GatsbyBlog/src/templates/tags-list-template.js"))),
  "component---src-templates-categories-list-template-js": hot(preferDefault(require("/Users/gregoryestevez/development/GatsbyBlog/src/templates/categories-list-template.js"))),
  "component---src-templates-page-template-js": hot(preferDefault(require("/Users/gregoryestevez/development/GatsbyBlog/src/templates/page-template.js"))),
  "component---src-templates-post-template-js": hot(preferDefault(require("/Users/gregoryestevez/development/GatsbyBlog/src/templates/post-template.js"))),
  "component---src-templates-tag-template-js": hot(preferDefault(require("/Users/gregoryestevez/development/GatsbyBlog/src/templates/tag-template.js"))),
  "component---src-templates-category-template-js": hot(preferDefault(require("/Users/gregoryestevez/development/GatsbyBlog/src/templates/category-template.js"))),
  "component---src-templates-index-template-js": hot(preferDefault(require("/Users/gregoryestevez/development/GatsbyBlog/src/templates/index-template.js")))
}

