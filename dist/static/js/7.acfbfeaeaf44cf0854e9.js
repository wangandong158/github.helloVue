webpackJsonp([7],{VJYP:function(t,e){},mcZf:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tmpl"},[i("nav-bar",{attrs:{title:"新闻列表"}}),t._v(" "),i("ul",{staticClass:"mui-table-view"},t._l(t.newsList,function(e,s){return i("li",{key:s,staticClass:"mui-table-view-cell mui-media"},[i("router-link",{attrs:{to:{name:"news.detail",query:{content:e.content}}}},[i("img",{staticClass:"mui-media-object mui-pull-left",attrs:{src:t.$GLOBAL.maxImage+e.cover[0]}}),t._v(" "),i("div",{staticClass:"mui-media-body"},[t._v("\n          "+t._s(e.title)+"\n          "),i("div",{staticClass:"itemTime"},[i("p",{staticClass:"mui-ellipsis"},[t._v(t._s(e.commentCount))]),t._v(" "),i("p",{staticClass:"mui-ellipsis"},[t._v(t._s(t._f("convertData")(e.publishTime)))])])])])],1)}))],1)},staticRenderFns:[]};var a=i("VU/8")({data:function(){return{name:"NewsList",newsList:[]}},created:function(){var t=this;this.$ajax.post("/tools/news/news/more",{columnId:"new_10000001",publishTime:0,pageSize:20,operation:2,tag:1}).then(function(e){t.newsList=e.data.data}).catch(function(t){})}},s,!1,function(t){i("VJYP")},"data-v-3a6c99a9",null);e.default=a.exports}});
//# sourceMappingURL=7.acfbfeaeaf44cf0854e9.js.map