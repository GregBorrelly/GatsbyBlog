// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-not-found-template-js": () => import("/Users/gregoryestevez/development/GatsbyBlog/src/templates/not-found-template.js" /* webpackChunkName: "component---src-templates-not-found-template-js" */),
  "component---src-templates-tags-list-template-js": () => import("/Users/gregoryestevez/development/GatsbyBlog/src/templates/tags-list-template.js" /* webpackChunkName: "component---src-templates-tags-list-template-js" */),
  "component---src-templates-categories-list-template-js": () => import("/Users/gregoryestevez/development/GatsbyBlog/src/templates/categories-list-template.js" /* webpackChunkName: "component---src-templates-categories-list-template-js" */),
  "component---src-templates-page-template-js": () => import("/Users/gregoryestevez/development/GatsbyBlog/src/templates/page-template.js" /* webpackChunkName: "component---src-templates-page-template-js" */),
  "component---src-templates-post-template-js": () => import("/Users/gregoryestevez/development/GatsbyBlog/src/templates/post-template.js" /* webpackChunkName: "component---src-templates-post-template-js" */),
  "component---src-templates-tag-template-js": () => import("/Users/gregoryestevez/development/GatsbyBlog/src/templates/tag-template.js" /* webpackChunkName: "component---src-templates-tag-template-js" */),
  "component---src-templates-category-template-js": () => import("/Users/gregoryestevez/development/GatsbyBlog/src/templates/category-template.js" /* webpackChunkName: "component---src-templates-category-template-js" */),
  "component---src-templates-index-template-js": () => import("/Users/gregoryestevez/development/GatsbyBlog/src/templates/index-template.js" /* webpackChunkName: "component---src-templates-index-template-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/gregoryestevez/development/GatsbyBlog/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/gregoryestevez/development/GatsbyBlog/.cache/data.json")

