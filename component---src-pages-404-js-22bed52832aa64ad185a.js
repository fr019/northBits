(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(152),o=a(150);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},146:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},147:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(33),c=a.n(s);a.d(t,"a",function(){return c.a});a(146);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e){e.exports={data:{allUrlsJson:{edges:[{node:{name:"Home",path:"/"}},{node:{name:"page-2",path:"/page-2"}}]},site:{siteMetadata:{title:"My portfolio"}}}}},149:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(55),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},150:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(155),l=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u},151:function(e){e.exports={data:{site:{siteMetadata:{title:"My portfolio",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@fr019"}}}}},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=(a(154),a(153),a(148)),c=a(147),l=function(e){e.siteTitle;var t=s.data;return r.a.createElement("header",{style:{background:"white"}},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(c.a,{to:"/",style:{textDecoration:"none"}})),r.a.createElement("ul",null,t.allUrlsJson.edges.map(function(e){var t=e.node,a=t.id,n=t.name,i=t.path;return r.a.createElement("li",{key:a},r.a.createElement(c.a,{to:i},n))}))))};l.propTypes={siteTitle:o.a.string},l.defaultProps={siteTitle:""};var u=l,d=function(){return r.a.createElement("footer",{className:"container"},(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))},p=function(e){var t=e.children;return[r.a.createElement(u,null),r.a.createElement("main",null,t),r.a.createElement(d,null)]};p.propTypes={children:o.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-404-js-22bed52832aa64ad185a.js.map