!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueGitComment=t():e.VueGitComment=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="Pb8N")}({"/pW9":function(e,t){},"5Gnw":function(e,t){},"9Owz":function(e,t){},FfOu:function(e,t){},Pb8N:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={client_id:"",client_secret:"",access_token:"",owner:"",repo:"",key:"",loading:!0,ifLogin:!1,userInfo:{loading:!1,name:"",avatar_url:""},issue:{created:!0,number:0,heartId:"",likedList:[]},comments:{loading:!1,count:0,page:1,per_page:3,sortedAsc:!0,list:[]},update:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t])},reset:function(){Object.assign(s,JSON.parse(JSON.stringify(i)))}},i=JSON.parse(JSON.stringify(s)),o=s,r='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z"/></svg>',a='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25 18c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z"/><path opacity=".3" d="M25 42c-.6 0-1-.4-1-1v-8c0-.6.4-1 1-1s1 .4 1 1v8c0 .6-.4 1-1 1z"/><path opacity=".3" d="M29 19c-.2 0-.3 0-.5-.1-.4-.3-.6-.8-.3-1.3l4-6.9c.3-.4.8-.6 1.3-.3.4.3.6.8.3 1.3l-4 6.9c-.2.2-.5.4-.8.4z"/><path opacity=".3" d="M17 39.8c-.2 0-.3 0-.5-.1-.4-.3-.6-.8-.3-1.3l4-6.9c.3-.4.8-.6 1.3-.3.4.3.6.8.3 1.3l-4 6.9c-.2.2-.5.4-.8.4z"/><path opacity=".93" d="M21 19c-.3 0-.6-.2-.8-.5l-4-6.9c-.3-.4-.1-1 .3-1.3.4-.3 1-.1 1.3.3l4 6.9c.3.4.1 1-.3 1.3-.2.2-.3.2-.5.2z"/><path opacity=".3" d="M33 39.8c-.3 0-.6-.2-.8-.5l-4-6.9c-.3-.4-.1-1 .3-1.3.4-.3 1-.1 1.3.3l4 6.9c.3.4.1 1-.3 1.3-.2.1-.3.2-.5.2z"/><path opacity=".65" d="M17 26H9c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"/><path opacity=".3" d="M41 26h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"/><path opacity=".86" d="M18.1 21.9c-.2 0-.3 0-.5-.1l-6.9-4c-.4-.3-.6-.8-.3-1.3.3-.4.8-.6 1.3-.3l6.9 4c.4.3.6.8.3 1.3-.2.3-.5.4-.8.4z"/><path opacity=".3" d="M38.9 33.9c-.2 0-.3 0-.5-.1l-6.9-4c-.4-.3-.6-.8-.3-1.3.3-.4.8-.6 1.3-.3l6.9 4c.4.3.6.8.3 1.3-.2.3-.5.4-.8.4z"/><path opacity=".44" d="M11.1 33.9c-.3 0-.6-.2-.8-.5-.3-.4-.1-1 .3-1.3l6.9-4c.4-.3 1-.1 1.3.3.3.4.1 1-.3 1.3l-6.9 4c-.1.2-.3.2-.5.2z"/><path opacity=".3" d="M31.9 21.9c-.3 0-.6-.2-.8-.5-.3-.4-.1-1 .3-1.3l6.9-4c.4-.3 1-.1 1.3.3.3.4.1 1-.3 1.3l-6.9 4c-.2.2-.3.2-.5.2z"/></svg>';var c=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=new Promise(function(e,n){t.resolve=e,t.reject=n});this.then=n.then.bind(n),this.catch=n.catch.bind(n),this.promise=n};function u(e){return Object.keys(e).map(function(t){return t+"="+encodeURIComponent(e[t])}).join("&")}function l(e,t){return~e.indexOf("?")?("&"!==e[e.length-1]&&(e="&"+e),e+u(t)):e+"?"+u(t)}function m(e,t){var n=new RegExp(t+"=([^&]*)"),s=e.match(n);return s&&s.length?s[1]:""}function d(e){return e.replace(/(<a )/g,'$1target="_blank" ')}var f="https://api.github.com";function h(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e=e.toUpperCase(),/^http/.test(t)||(t=f+t),o.ifLogin||Object.assign(n,{client_id:o.client_id,client_secret:o.client_secret}),s&&(t="https://cors-anywhere.herokuapp.com/"+t);var i=new c,r=new XMLHttpRequest;return r.onload=function(){var e=this.getResponseHeader("content-type");if(/json/.test(e)){var t=this.responseText?JSON.parse(this.responseText):{};t.message?i.reject(t.message):i.resolve(t)}else i.resolve(this.responseText)},r.onerror=function(e){i.reject(e.message)},"GET"===e||"DELETE"===e?(t=l(t,n),n=null):"POST"===e&&(n=JSON.stringify(n)),r.open(e,t,!0),r.setRequestHeader("Accept","*/*,application/vnd.github.squirrel-girl-preview,application/vnd.github.html+json"),o.access_token&&r.setRequestHeader("Authorization","token "+o.access_token),"POST"===e&&r.setRequestHeader("Content-Type","application/json"),r.send(n),i.promise}var p={get:function(e,t,n){return h("get",e,t,n)},delete:function(e){return h("delete",e)},post:function(e,t,n){return h("post",e,t,n)}};function g(e){return p.delete("/reactions/"+e)}var v={data:function(){return{heartIcon:r,store:o}},computed:{liked:function(){return~o.issue.likedList.map(function(e){return e.name}).indexOf(o.userInfo.name)}},methods:{toggleLike:function(){var e,t,n;this.liked?g(o.issue.likedList.filter(function(e){return e.name==o.userInfo.name})[0].id).then(function(e){o.issue.likedList=o.issue.likedList.filter(function(e){return e.name!=o.userInfo.name})}):(e=o.owner,t=o.repo,n=o.issue.number,p.post("/repos/"+e+"/"+t+"/issues/"+n+"/reactions",{content:"heart"})).then(function(e){o.issue.likedList.push({id:e.id,name:e.user.login})})},changeSort:function(e){this.store.ifLogin&&(this.store.comments.sortedAsc=e)}}},_={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"comment-header"},[n("span",{staticClass:"like-item",class:{disabled:!e.store.ifLogin},on:{click:e.toggleLike}},[n("span",{staticClass:"heart-icon",class:{liked:e.liked},domProps:{innerHTML:e._s(e.heartIcon)}}),e._v(" "),n("span",{staticClass:"heart-txt"},[n("strong",[e._v(e._s(e.store.issue.likedList.length))]),e._v(" Liked\n        ")])]),e._v(" "),n("span",{staticClass:"comment-num"},[e._v("\n        •\n        "),n("strong",[e._v(e._s(e.store.comments.count))]),e._v(" Comments\n    ")]),e._v(" "),n("strong",{staticClass:"sort-item",class:{active:!e.store.comments.sortedAsc},on:{click:function(t){e.changeSort(!1)}}},[e._v("\n        Now\n        "),n("span",{staticClass:"ch-h5-hidden"},[e._v("to early")])]),e._v(" "),n("strong",{staticClass:"sort-item",staticStyle:{cursor:"default"}},[e._v("•")]),e._v(" "),n("strong",{staticClass:"sort-item",class:{active:e.store.comments.sortedAsc},on:{click:function(t){e.changeSort(!0)}}},[e._v("\n        Early\n        "),n("span",{staticClass:"ch-h5-hidden"},[e._v("to now")])])])},staticRenderFns:[]};var C=n("VU/8")(v,_,!1,function(e){n("FfOu")},null,null).exports,w=["vue-git-comment"],k=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}();function y(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var b=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return k(e,[{key:"config",value:function(e){o.reset(),Object.assign(o,e),this.init()}},{key:"init",value:function(){this._backStep()||this._tokenStep()||this._normalStep()}},{key:"_backStep",value:function(){var e=this,t=this._checkBack();return!!t&&(console.log("backstep"),this._getToken(t).then(function(){return e.getUserInfo(),e.getIssueInfo()}).then(function(){return e.getCurrentPage()}).catch(function(e){return console.log(e)}),!0)}},{key:"_tokenStep",value:function(){var e=this,t=localStorage.getItem("GIT_COMMENT_ACCESS_STOKEN");return!!t&&(console.log("tokenstep"),o.access_token=t,this.getUserInfo(),Promise.resolve().then(function(){return e.getIssueInfo()}).then(function(){return e.getCurrentPage()}).catch(function(e){return console.log(e)}),!0)}},{key:"_normalStep",value:function(){var e=this;console.log("normalstep"),this.getIssueInfo().then(function(){return e.getCurrentPage()}).catch(function(e){return console.log(e)})}},{key:"_checkBack",value:function(){var e=window.location.search;return!!/(?=\S*code=\S*)(?=\S*state=\S*)/.test(e)&&m(window.location.search,"code")}},{key:"_getToken",value:function(e){var t=m(window.location.search,"state");return t=decodeURIComponent(t),o.userInfo.loading=!0,function(e){var t=o.client_id,n=o.client_secret;return p.post("https://github.com/login/oauth/access_token",{client_id:t,client_secret:n,code:e},!0).then(function(e){return m(e,"access_token")})}(e).then(function(e){o.access_token=e,localStorage.setItem("GIT_COMMENT_ACCESS_STOKEN",e),window.history.replaceState(null,null,t)})}},{key:"getIssueInfo",value:function(){var e,t,n,s=this;return(e=[o.key].concat(y(w)).join(","),t=o.owner,n=o.repo,p.get("/repos/"+t+"/"+n+"/issues",{creator:t,labels:e,_:Math.random()}).then(function(e){return e[0]})).then(function(e){if(!e)throw o.issue.created=!1,new Error("issue uninited");o.issue.created=!0,o.comments.count=e.comments,o.issue.number=e.number,o.issue.likedList=Array(e.reactions.heart),s._getIssueReactions()})}},{key:"_getIssueReactions",value:function(){var e,t,n;(e=o.owner,t=o.repo,n=o.issue.number,p.get("/repos/"+e+"/"+t+"/issues/"+n+"/reactions")).then(function(e){e=e.filter(function(e){return"heart"===e.content}).map(function(e){return{id:e.id,name:e.user.login}}),o.issue.likedList=e})}},{key:"_getCommentReactions",value:function(e){return function(e){var t=o.owner,n=o.repo;return p.get("/repos/"+t+"/"+n+"/issues/comments/"+e+"/reactions")}(e).then(function(e){return e=e.filter(function(e){return"heart"==e.content}).map(function(e){return{id:e.id,name:e.user.login}})})}},{key:"login",value:function(){var e,t;e=o.client_id,t=l(t="https://github.com/login/oauth/authorize",{client_id:e,redirect_uri:window.location.href,scope:"public_repo",state:window.location.href}),window.location.href=t}},{key:"logOut",value:function(){o.update({ifLogin:!1,access_token:"",userInfo:{loading:!1,name:"",avatar_url:""}}),window.localStorage.removeItem("GIT_COMMENT_ACCESS_STOKEN")}},{key:"getUserInfo",value:function(){var e=this;return p.get("/user").then(function(e){o.ifLogin=!0,o.userInfo={loading:!1,name:e.login,avatar_url:e.avatar_url}}).catch(function(t){console.log(t),e.logOut()})}},{key:"getCurrentPage",value:function(){var e,t,n,s=this;return o.comments.loading=!0,(e=o.owner,t=o.repo,n=o.issue.number,p.get("/repos/"+e+"/"+t+"/issues/"+n+"/comments",{page:o.comments.page,per_page:o.comments.per_page,_:Math.random()})).then(function(e){e=e.map(function(e,t){return{id:e.id,body:d(e.body_html),created_at:function(e,t){var n={"y+":e.getFullYear(),"M+":e.getMonth()+1,"d+":e.getDate(),"H+":e.getHours(),"h+":e.getHours()-12,"m+":e.getMinutes(),"s+":e.getSeconds()},s=function(e){var s=new RegExp(e,"g");t=t.replace(s,function(t){return("000000"+n[e]).slice(-t.length)})};for(var i in n)s(i);return t}(new Date(e.created_at),"yyyy/MM/dd HH:mm:ss"),heart:e.reactions.heart,hasHeart:!1,likedList:Array(e.reactions.heart),user:{name:e.user.login,avatar_url:e.user.avatar_url,link:e.user.html_url}}}),o.ifLogin&&e.forEach(function(e){e.likedList.length&&s._getCommentReactions(e.id).then(function(t){e.likedList=t,o.comments.list=o.comments.list.slice()})}),o.comments.loading=!1,o.comments.list=e})}},{key:"createIssue",value:function(){return e=[o.key].concat(y(w)),t=o.title||document.title.substr(0,20),n="this issue is made for: https://github.com/shalldie/vue-git-comment",s=o.owner,i=o.repo,p.post("/repos/"+s+"/"+i+"/issues",{labels:e,title:t,body:n});var e,t,n,s,i}}]),e}()),L={data:function(){return{store:o,heartIcon:r,spinnerIcon:a,creating:!1}},methods:{createIssue:function(){var e=this;this.creating=!0,b.createIssue().then(function(){e.creating=!1,o.issue.created=!0,b.init()})},ifHeart:function(e){return o.comments.list[e].likedList.filter(function(e){return e.name==o.userInfo.name}).length>0},toggleHeart:function(e){if(o.ifLogin){var t,n,s,i=o.comments.list[e];if(this.ifHeart(e))(function(e){return g(e)})(i.likedList.filter(function(e){return e.name==o.userInfo.name})[0].id).then(function(){i.likedList=i.likedList.filter(function(e){return e.name!=o.userInfo.name}),o.comments.list=o.comments.list.slice()});else(t=i.id,n=o.owner,s=o.repo,o.issue.number,p.post("/repos/"+n+"/"+s+"/issues/comments/"+t+"/reactions",{content:"heart"})).then(function(e){i.likedList.push({id:e.id,name:e.user.login}),o.comments.list=o.comments.list.slice()})}}}},I={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"comment-body"},[e.creating?n("div",[e._v("Be creating...")]):e.store.issue.created||e.store.owner!==e.store.userInfo.name?e.store.comments.loading?n("div",{staticClass:"comment-loading",domProps:{innerHTML:e._s(e.spinnerIcon)}}):n("div",{staticClass:"comment-list"},e._l(e.store.comments.list,function(t,s){return n("div",{key:s,staticClass:"markdown-body comment-list-item"},[n("img",{staticClass:"user-avatar",attrs:{src:t.user.avatar_url}}),e._v(" "),n("div",{staticClass:"comment-item-main"},[n("div",{staticClass:"cim-header"},[n("a",{staticClass:"cim-name",attrs:{target:"_blank",href:t.user.link}},[e._v(e._s(t.user.name))]),e._v(" "),n("span",{staticClass:"cim-time"},[e._v("commented at\n                        "),n("span",{staticStyle:{"white-space":"nowrap"}},[e._v(e._s(t.created_at))])]),e._v(" "),n("span",{staticClass:"cim-heart-item",class:{liked:e.ifHeart(s),disabled:!e.store.ifLogin},on:{click:function(t){e.toggleHeart(s)}}},[n("span",{staticClass:"cim-heart-icon",domProps:{innerHTML:e._s(e.heartIcon)}}),e._v(" "),n("span",{staticClass:"cim-heart-num"},[e._v(e._s(t.likedList.length||""))])])]),e._v(" "),n("div",{staticClass:"cim-body",domProps:{innerHTML:e._s(t.body)}})])])})):n("div",[e._v("\n        Seems new,\n        "),n("a",{attrs:{href:"javascript:void(0)"},on:{click:e.createIssue}},[e._v("Click")]),e._v("\n        to create an issue.\n    ")])])},staticRenderFns:[]};var S={data:function(){return{store:o}},computed:{pageCount:function(){var e=this.store.comments,t=e.per_page,n=e.count;return Math.ceil(n/t)||1}},methods:{prevPage:function(){this.fetchPage(o.comments.page-1)},nextPage:function(){this.fetchPage(o.comments.page+1)},fetchPage:function(e){o.comments.page==e||e<=0||e>this.pageCount||(o.comments.page=e,b.getCurrentPage())}}},x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"comment-pagination"},[n("li",{staticClass:"comment-page-item",class:{disabled:e.store.comments.page<=1},on:{click:e.prevPage}},[e._v("Prev page")]),e._v(" "),e._l(e.pageCount,function(t,s){return n("li",{key:s,staticClass:"comment-page-item",class:{disabled:s+1==e.store.comments.page},on:{click:function(t){e.fetchPage(s+1)}}},[e._v(e._s(s+1))])}),e._v(" "),n("li",{staticClass:"comment-page-item",class:{disabled:e.store.comments.page>=e.pageCount},on:{click:e.nextPage}},[e._v("Next page")])],2)},staticRenderFns:[]};var M={data:function(){return{store:o,githubIcon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25 10c-8.3 0-15 6.7-15 15 0 6.6 4.3 12.2 10.3 14.2.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.4 1.2.1-1 .5-1.6 1-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5 1.2-.3 2.5-.5 3.8-.5 1.3 0 2.6.2 3.8.5 2.9-1.9 4.1-1.5 4.1-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.4 1.5 4 0 5.8-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7 6-2 10.2-7.6 10.2-14.2C40 16.7 33.3 10 25 10z"/></svg>',spinnerIcon:a,showArea:!0,submitting:!1,areaContent:"",markdownContent:"Nothing to preview",cacheList:[]}},methods:{getCache:function(e){for(var t=0,n=this.cacheList.length;t<n;t++){var s=this.cacheList[t];if(s.content===e)return s.preview}},updateEditorHeight:function(){var e=this.$refs.editor;e.style.height=e.scrollHeight+1+"px"},addCache:function(e,t){this.cacheList.push({content:e,preview:t}),this.cacheList.length>10&&this.cacheList.shift()},login:function(){b.login()},logOut:function(){b.logOut()},comment:function(){var e,t,n,s,i=this;this.areaContent.trim().length<=0||(this.submitting=!0,(e=this.areaContent,t=o.owner,n=o.repo,s=o.issue.number,p.post("/repos/"+t+"/"+n+"/issues/"+s+"/comments",{body:e})).then(function(){return i.areaContent="",i.submitting=!1,i.showArea=!0,b.getCurrentPage()}))}},watch:{showArea:function(e){var t=this;if(this.areaContent=this.areaContent.trim(),!e&&this.areaContent.length){var n,s=this.getCache(this.areaContent);if(s)this.markdownContent=s;else this.markdownContent="Loading preview ...",(n=this.areaContent,p.post("/markdown",{mode:"gfm",text:n})).then(function(e){e=d(e),t.markdownContent=e,t.addCache(t.areaContent,e)})}else this.markdownContent="Nothing to preview"}}},P={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"comment-editor"},[e.store.ifLogin||e.store.userInfo.loading?!e.store.ifLogin&&e.store.userInfo.loading?n("span",{staticClass:"user-avatar user-avatar-loading",domProps:{innerHTML:e._s(e.spinnerIcon)}}):n("img",{staticClass:"user-avatar user-avatar-img",attrs:{src:e.store.userInfo.avatar_url}}):n("span",{staticClass:"user-avatar",attrs:{href:"javascript:void(0)"},domProps:{innerHTML:e._s(e.githubIcon)}}),e._v(" "),n("div",{staticClass:"comment-editor-main"},[n("div",{staticClass:"ce-header has-border"},[n("div",{staticClass:"ce-tab-item",class:{active:e.showArea},on:{click:function(t){e.showArea=!0}}},[e._v("Write")]),e._v(" "),n("div",{staticClass:"ce-tab-item",class:{active:!e.showArea},on:{click:function(t){e.showArea=!1}}},[e._v("Preview")]),e._v(" "),e.store.ifLogin?n("span",{staticClass:"logout-link",on:{click:e.logOut}},[e._v("Logout")]):n("div",{staticClass:"login-link-btn"},[n("a",{attrs:{href:"javascript:void(0)"},on:{click:e.login}},[e._v("Login")]),e._v("\n                with Github\n            ")])]),e._v(" "),n("div",{staticClass:"ce-body"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.areaContent,expression:"areaContent"},{name:"show",rawName:"v-show",value:e.showArea,expression:"showArea"}],ref:"editor",staticClass:"ce-textarea",attrs:{disabled:!e.store.ifLogin||e.submitting,placeholder:"Leave a comment."},domProps:{value:e.areaContent},on:{input:[function(t){t.target.composing||(e.areaContent=t.target.value)},e.updateEditorHeight]}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.showArea,expression:"!showArea"}],staticClass:"markdown-body ce-preview",domProps:{innerHTML:e._s(e.markdownContent)}})]),e._v(" "),n("div",{staticClass:"ce-commit-row"},[n("a",{staticClass:"ce-md-link",attrs:{target:"_blank",href:"https://guides.github.com/features/mastering-markdown/"}},[e._v("Markdown is supported")]),e._v(" "),n("button",{staticClass:"ce-commit-btn",attrs:{disabled:!e.store.ifLogin||e.submitting},on:{click:e.comment}},[e._v(e._s(e.submitting?"Submitting ...":"Comment"))])]),e._v(" "),e._m(0)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"ce-power-row"},[this._v("\n            Powered by\n            "),t("a",{attrs:{target:"_blank",href:"https://github.com/shalldie/vue-git-comment"}},[this._v("vue-git-comment")])])}]};var O={props:{options:{required:!0}},components:{CommentHeader:C,CommentBody:n("VU/8")(L,I,!1,function(e){n("fBXe")},null,null).exports,CommentPagination:n("VU/8")(S,x,!1,function(e){n("9Owz")},null,null).exports,CommentEditor:n("VU/8")(M,P,!1,function(e){n("5Gnw")},null,null).exports},mounted:function(){b.config(this.options)}},E={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"vue-git-comment"},[t("CommentHeader",{ref:"header"}),this._v(" "),t("CommentBody",{ref:"body"}),this._v(" "),t("CommentPagination",{ref:"pager"}),this._v(" "),t("CommentEditor",{ref:"editor"})],1)},staticRenderFns:[]};var T=n("VU/8")(O,E,!1,function(e){n("/pW9")},null,null).exports;T.install=function(e){e.component("vue-git-comment",T)};t.default=T},"VU/8":function(e,t){e.exports=function(e,t,n,s,i,o){var r,a=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(r=e,a=e.default);var u,l="function"==typeof a?a.options:a;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId=i),o?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=u):s&&(u=s),u){var m=l.functional,d=m?l.render:l.beforeCreate;m?(l._injectStyles=u,l.render=function(e,t){return u.call(t),d(e,t)}):l.beforeCreate=d?[].concat(d,u):[u]}return{esModule:r,exports:a,options:l}}},fBXe:function(e,t){}}).default});