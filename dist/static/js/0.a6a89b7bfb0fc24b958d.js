webpackJsonp([0],{"8R7H":function(i,s){},h6qm:function(i,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={data:function(){return{name:"home",datas:[]}},created:function(){var i=this;this.$ajax.post("/tools/news/news/carousel",{columnId:"new_10000001"}).then(function(s){i.datas=s.data.data}).catch(function(i){console.log(i)})}},e={render:function(){var i=this,s=i.$createElement,t=i._self._c||s;return t("div",{staticClass:"homeDiv"},[t("swip",{attrs:{datas:i.datas}}),i._v(" "),t("div",{staticClass:"mui-content"},[t("ul",{staticClass:"mui-table-view mui-grid-view mui-grid-9"},[t("li",{staticClass:"mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"},[t("router-link",{attrs:{to:{name:"news.list"}}},[t("span",{staticClass:"mui-icon mui-icon-home"}),i._v(" "),t("div",{staticClass:"mui-media-body"},[i._v("新闻资讯")])])],1),i._v(" "),t("li",{staticClass:"mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"},[t("router-link",{attrs:{to:{name:"photo.share"}}},[t("span",{staticClass:"mui-icon mui-icon-email"}),i._v(" "),t("div",{staticClass:"mui-media-body"},[i._v("图文分享")])])],1),i._v(" "),t("li",{staticClass:"mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"},[t("router-link",{attrs:{to:{name:"goods.list"}}},[t("span",{staticClass:"mui-icon mui-icon-chatbubble"}),i._v(" "),t("div",{staticClass:"mui-media-body"},[i._v("商品展示")])])],1),i._v(" "),t("li",{staticClass:"mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"},[t("router-link",{attrs:{to:{name:"news.list"}}},[t("span",{staticClass:"mui-icon mui-icon-location"}),i._v(" "),t("div",{staticClass:"mui-media-body"},[i._v("留言反馈")])])],1),i._v(" "),t("li",{staticClass:"mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"},[t("router-link",{attrs:{to:{name:"news.list"}}},[t("span",{staticClass:"mui-icon mui-icon-search"}),i._v(" "),t("div",{staticClass:"mui-media-body"},[i._v("搜索资讯")])])],1),i._v(" "),t("li",{staticClass:"mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"},[t("router-link",{attrs:{to:{name:"news.list"}}},[t("span",{staticClass:"mui-icon mui-icon-phone"}),i._v(" "),t("div",{staticClass:"mui-media-body"},[i._v("联系我们")])])],1)])])],1)},staticRenderFns:[]};var l=t("VU/8")(a,e,!1,function(i){t("8R7H")},"data-v-993f3a74",null);s.default=l.exports}});
//# sourceMappingURL=0.a6a89b7bfb0fc24b958d.js.map