(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/history/history"],{"04ba":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"12b2":function(t,e,n){"use strict";n.r(e);var i=n("cf47"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"82a2":function(t,e,n){},c897:function(t,e,n){"use strict";(function(t){n("d9cf"),n("921b");i(n("66fd"));var e=i(n("db2c"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},ce5e:function(t,e,n){"use strict";var i=n("82a2"),a=n.n(i);a.a},cf47:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=getApp(),i={data:function(){return{historylist:[{id:0,name:"活动名",intro:"活动介绍语",tickets:80,location:"活动地点",start:"2019年xx月xx日",end:"",sponsorid:100,sponsorname:"xx学生会",type:1,state:200,like:!0},{id:1,name:"活动名1",intro:"活动介绍语",tickets:80,location:"活动地点",start:"2019年xx月xx日",end:"",sponsorid:100,sponsorname:"xx学生会",type:1,state:200,like:!0},{id:2,name:"活动名2",intro:"活动介绍语",tickets:80,location:"活动地点",start:"2019年xx月xx日",end:"",sponsorid:100,sponsorname:"xx学生会",type:1,state:200,like:!0},{id:3,name:"活动名3",intro:"活动介绍语",tickets:80,location:"活动地点",start:"2019年xx月xx日",end:"",sponsorid:100,sponsorname:"xx学生会",type:1,state:200,like:!0},{id:0,name:"活动名4",intro:"活动介绍语",tickets:80,location:"活动地点",start:"2019年xx月xx日",end:"",sponsorid:100,sponsorname:"xx学生会",type:1,state:200,like:!0}],current:0,tabs:["喜爱"]}},onLoad:function(){t.request({url:n.globalData.apiurl+"users/search",method:"POST",data:{index:0,keyword:"xx"},header:{"content-type":"application/json",cookie:n.globalData.cookie},success:function(t){console.log(t.data)}}),t.showShareMenu({})},onShareAppMessage:function(t){return{title:n.globalData.sharetitle,path:"/pages/index/index",imageUrl:n.globalData.shareimg}},methods:{cardSwiper:function(t){this.cardCur=t.detail.current},tabSelect:function(t){this.current=t.currentTarget.dataset.id},navChange:function(t){this.current=t},swiperChange:function(t){this.current=t.detail.current},activityPage:function(e){t.navigateTo({url:"../activity/activity?id="+this.historylist.find(function(t){return t.id==e}).id})},like:function(e){t.request({url:n.globalData.apiurl+"users/like",method:"POST",data:{openid:n.globalData.openid,eventid:e},header:{"content-type":"application/json"},success:function(t){console.log(t.data)}});var i=this.historylist.findIndex(function(t){return t.id==e});this.historylist[i].like=!this.historylist[i].like}}};e.default=i}).call(this,n("543d")["default"])},db2c:function(t,e,n){"use strict";n.r(e);var i=n("04ba"),a=n("12b2");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("ce5e");var r=n("2877"),s=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=s.exports}},[["c897","common/runtime","common/vendor"]]]);