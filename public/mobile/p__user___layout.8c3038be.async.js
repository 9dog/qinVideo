(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"/eZl":function(e,t,a){"use strict";a.r(t);var n=a("fFZ8"),i=a.n(n),s=a("mrSG"),r=a("q1tI"),o=a.n(r),l=a("MuoO"),c=a("vOnD"),d=(a("g9YV"),a("wCAj")),p=(a("IzEo"),a("bx4M")),u=a("LLXN"),m=a("wd/R"),h=a.n(m);class g extends r["Component"]{componentDidMount(){}render(){var e=this.props,t=e.data,a=e.query,n=e.queryChange,i=e.loading,s=[{title:Object(u["formatMessage"])({id:"user.order.number"}),dataIndex:"_id",align:"center"},{title:Object(u["formatMessage"])({id:"user.order.createdAt"}),dataIndex:"createdAt",align:"center",render:e=>h()(e).format("YYYY-MM-DD")}],r={total:t.total,pageSize:a.size,current:a.page,size:"small",onChange:n};return o.a.createElement(p["a"],{className:"tableList",bordered:!1},o.a.createElement(d["a"],{rowKey:"slug",columns:s,dataSource:t.list,pagination:r,bordered:!0,loading:i}))}}var b=g;function f(){var e=i()(["\n  padding: 15px;\n"]);return f=function(){return e},e}var v=c["a"].div(f()),y=class extends r["Component"]{constructor(){super(...arguments),this.state={query:{page:1,size:5}},this.initData=(()=>{var e=this.props.dispatch,t=this.state.query;e({type:"user/getUserOrder",payload:{query:t}})}),this.queryChange=((e,t)=>{this.setState({query:{page:e,size:t}},this.initData)})}componentDidMount(){this.initData()}render(){var e=this.state.query,t=this.props,a=t.user,n=t.loading;return o.a.createElement(v,null,o.a.createElement(b,{data:a.order,queryChange:this.queryChange,query:e,loading:n}))}};y=Object(s["a"])([Object(l["connect"])(e=>{var t=e.user,a=e.loading;return{user:t,loading:a.effects["user/getUserOrder"]}})],y);t["default"]=y},"8P7W":function(e,t,a){"use strict";a.r(t);var n=a("p0pE"),i=a.n(n),s=(a("T2oS"),a("W9HT")),r=a("fFZ8"),o=a.n(r),l=a("mrSG"),c=a("q1tI"),d=a.n(c),p=a("MuoO"),u=a("LLXN"),m=a("vOnD"),h=a("TSYQ"),g=a.n(h),b=a("/88p"),f=a("gmfD"),v=a("WqWh");function y(){var e=o()(["\n  padding: 15px;\n\n  .tabs {\n    display: flex;\n\n    .tab {\n      height: 32px;\n      width: 33.33%;\n      border: solid 1px #19d5fd;\n      text-align: center;\n      line-height: 31px;\n\n      &:nth-child(1) {\n        border-radius: 100px 0 0 100px;\n      }\n\n      &:nth-child(2) {\n        border-radius: 0;\n        border-left: none;\n        border-right: none;\n      }\n\n      &:nth-child(3) {\n        border-radius: 0 100px 100px 0;\n      }\n\n      &.active {\n        color: white;\n        background-color: #19d5fd;\n      }\n    }\n  }\n\n  .list {\n    margin: 15px 0;\n  }\n"]);return y=function(){return e},e}var x=m["a"].div(y()),E=class extends c["Component"]{constructor(){super(...arguments),this.state={type:"animate",query:{page:1,size:30}},this.typeToggle=(e=>()=>{this.setState({type:e},this.initData)}),this.initData=(()=>{var e=this.props.dispatch,t=this.state,a=t.type,n=t.query;e({type:"user/getUserLike",payload:{params:{type:a},query:n},addon:"like"+a})}),this.listQuery=((e,t)=>{this.setState({page:e,size:t},this.initData)})}componentDidMount(){this.initData()}render(){var e=this.state,t=e.type,a=e.query,n=this.props,r=n.user,o=n.loading;return d.a.createElement(x,null,d.a.createElement("div",{className:"tabs"},d.a.createElement("div",{className:g()("tab",{active:"animate"===t}),onClick:this.typeToggle("animate")},d.a.createElement("span",null,Object(u["formatMessage"])({id:"user.animate"}))),d.a.createElement("div",{className:g()("tab",{active:"comic"===t}),onClick:this.typeToggle("comic")},d.a.createElement("span",null,Object(u["formatMessage"])({id:"user.comic"}))),d.a.createElement("div",{className:g()("tab",{active:"post"===t}),onClick:this.typeToggle("post")},d.a.createElement("span",null,Object(u["formatMessage"])({id:"user.post"})))),d.a.createElement(s["a"],{spinning:o},d.a.createElement("div",{className:"list"},"animate"===t?d.a.createElement(b["b"],{list:r.likeanimate.list,type:"animate",wrapper:!0}):"comic"===t?d.a.createElement(b["b"],{list:r.likecomic.list,type:"comic",wrapper:!0}):d.a.createElement(f["a"],{list:r.likepost.list}))),d.a.createElement(v["a"],{value:i()({},a,{total:r["like".concat(t)].total}),onChange:this.listQuery}))}};E=Object(l["a"])([Object(p["connect"])(e=>{var t=e.user,a=e.loading;return{user:t,loading:a.effects["user/getUserLike"]}})],E),t["default"]=E},J2id:function(e,t,a){"use strict";a.r(t);a("T2oS");var n=a("W9HT"),i=a("fFZ8"),s=a.n(i),r=a("mrSG"),o=a("q1tI"),l=a.n(o),c=a("MuoO"),d=a("vOnD"),p=a("3a4m"),u=a.n(p),m=a("LLXN");function h(){var e=s()(["\n  margin-top: 40px;\n  .user-header {\n    height: 180px;\n    position: relative;\n    overflow: hidden;\n    color: rgba(255, 255, 255, 0.8);\n  }\n  .header-bg {\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    background-size: cover;\n    background-position: center;\n    z-index: -2;\n    .header-bg-blur {\n      z-index: -1;\n      position: absolute;\n      left: 0;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      background-color: rgba(0, 0, 0, 0.3);\n    }\n  }\n  .header-title {\n    height: 40px;\n    text-align: center;\n    position: relative;\n    line-height: 40px;\n    font-size: 16px;\n  }\n  .user-setting {\n    position: absolute;\n    left: 0px;\n    height: 40px;\n    width: 60px;\n    top: 0px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .user-setting i {\n    display: inline-block;\n    font-size: 24px;\n  }\n  .header-main {\n    margin: 8px 16px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .header-left {\n    width: calc(100% - 88px);\n  }\n  .header-right {\n    text-align: right;\n  }\n  .user-avatar {\n    display: inline-block;\n    width: 90px;\n    height: 90px;\n    border-radius: 50%;\n    background-size: cover;\n    background-position: center;\n    box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);\n    box-sizing: border-box;\n  }\n  .header-left {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n  }\n  .header-left span:nth-child(1) {\n    font-size: 19px;\n    font-weight: bold;\n    margin-bottom: 8px;\n    color: white;\n  }\n"]);return h=function(){return e},e}var g=d["a"].div(h()),b={index:"user.center",history:"user.animate.history",like:"user.like.tab",score:"user.score.tab",order:"user.order.tab",report:"user.report.tab",own:"user.own.tab",setting:"user.setting",message:"user.message",level:"user.score.tab"},f=class extends o["Component"]{constructor(){super(...arguments),this.state={title:"index"},this.initData=(()=>{var e=this.props,t=e.dispatch;e.user;t({type:"user/getInfo",payload:{params:{}}})}),this.initTitle=(()=>{var e=this.props.location,t=e.pathname,a=t.split("user/");a[1]?this.setState({title:a[1]}):this.setState({title:"index"})}),this.logout=(()=>{var e=this.props.dispatch;e({type:"auth/logout",payload:{}})}),this.submit=(()=>{this.initData()}),this.goBack=(()=>{u.a.goBack()})}componentDidMount(){this.initData(),this.initTitle()}componentDidUpdate(e){var t=this.props.location,a=t.pathname;a!==e.location.pathname&&this.initTitle()}render(){var e=this.props,t=e.user.info,a=e.children,i=this.state.title;return l.a.createElement(g,null,l.a.createElement("div",{className:"user"},l.a.createElement("div",{className:"user-header"},l.a.createElement("div",{className:"header-bg",style:{backgroundImage:"url(".concat(t.background,")")}},l.a.createElement("div",{className:"header-bg-blur"})),l.a.createElement("div",{className:"header-title"},l.a.createElement("span",null,Object(m["formatMessage"])({id:b[i]}))),l.a.createElement("div",{className:"header-main"},l.a.createElement("div",{className:"header-left"},l.a.createElement("span",null,t.name),l.a.createElement("span",null,t.email),l.a.createElement("span",null,"Score : ",t.score),l.a.createElement("span",null,"Level : ",t.level)),l.a.createElement("div",{className:"header-right"},l.a.createElement("div",{className:"user-avatar",style:{backgroundImage:"url(".concat(t.avatar,")")}})))),t.name?a:l.a.createElement(n["a"],{spinning:!0})))}};f=Object(r["a"])([Object(c["connect"])(e=>{var t=e.user,a=e.loading;return{user:t,loading:a.effects["user/getInfo"]}})],f),t["default"]=f},KZA2:function(e,t,a){"use strict";a.r(t);var n=a("p0pE"),i=a.n(n),s=(a("T2oS"),a("W9HT")),r=a("fFZ8"),o=a.n(r),l=a("mrSG"),c=a("q1tI"),d=a.n(c),p=a("MuoO"),u=a("LLXN"),m=a("vOnD"),h=a("TSYQ"),g=a.n(h),b=a("/88p"),f=a("gmfD"),v=a("WqWh");function y(){var e=o()(["\n  padding: 15px;\n\n  .tabs {\n    display: flex;\n\n    .tab {\n      height: 32px;\n      width: 33.33%;\n      border: solid 1px #19d5fd;\n      text-align: center;\n      line-height: 31px;\n\n      &:nth-child(1) {\n        border-radius: 100px 0 0 100px;\n      }\n\n      &:nth-child(2) {\n        border-radius: 0;\n        border-left: none;\n        border-right: none;\n      }\n\n      &:nth-child(3) {\n        border-radius: 0 100px 100px 0;\n      }\n\n      &.active {\n        color: white;\n        background-color: #19d5fd;\n      }\n    }\n  }\n\n  .list {\n    margin: 15px 0;\n  }\n"]);return y=function(){return e},e}var x=m["a"].div(y()),E=class extends c["Component"]{constructor(){super(...arguments),this.state={type:"animate",query:{page:1,size:30}},this.typeToggle=(e=>()=>{this.setState({type:e},this.initData)}),this.initData=(()=>{var e=this.props,t=e.dispatch,a=e.user,n=this.state,i=n.type,s=n.query;t({type:"user/getUserOwn",payload:{params:{type:i,id:a.info.id},query:s},addon:"own"+i})}),this.listQuery=((e,t)=>{this.setState({page:e,size:t},this.initData)})}componentDidMount(){this.initData()}render(){var e=this.state,t=e.type,a=e.query,n=this.props,r=n.user,o=n.loading;return d.a.createElement(x,null,d.a.createElement("div",{className:"tabs"},d.a.createElement("div",{className:g()("tab",{active:"animate"===t}),onClick:this.typeToggle("animate")},d.a.createElement("span",null,Object(u["formatMessage"])({id:"user.animate"}))),d.a.createElement("div",{className:g()("tab",{active:"comic"===t}),onClick:this.typeToggle("comic")},d.a.createElement("span",null,Object(u["formatMessage"])({id:"user.comic"}))),d.a.createElement("div",{className:g()("tab",{active:"post"===t}),onClick:this.typeToggle("post")},d.a.createElement("span",null,Object(u["formatMessage"])({id:"user.post"})))),d.a.createElement(s["a"],{spinning:o},d.a.createElement("div",{className:"list"},"animate"===t?d.a.createElement(b["b"],{list:r.ownanimate.list,type:"animate"}):"comic"===t?d.a.createElement(b["b"],{list:r.owncomic.list,type:"comic"}):d.a.createElement(f["a"],{list:r.ownpost.list}))),d.a.createElement(v["a"],{value:i()({},a,{total:r["own".concat(t)].total}),onChange:this.listQuery}))}};E=Object(l["a"])([Object(p["connect"])(e=>{var t=e.user,a=e.loading;return{user:t,loading:a.effects["user/getUserOwn"]}})],E),t["default"]=E},gEGv:function(e,t,a){"use strict";a.r(t);a("IzEo");var n=a("bx4M"),i=a("p0pE"),s=a.n(i),r=a("fFZ8"),o=a.n(r),l=a("mrSG"),c=a("q1tI"),d=a.n(c),p=a("MuoO"),u=a("vOnD"),m=a("WqWh"),h=a("gmfD");function g(){var e=o()(["\n  padding: 15px;\n"]);return g=function(){return e},e}var b=u["a"].div(g()),f=class extends c["Component"]{constructor(e){super(e),this.initData=(()=>{var e=this.state,t=e.cate,a=e.query,n=this.props.dispatch;n({type:"post/queryList",payload:{query:s()({},a,{kind:t}),addon:{type:t}}})}),this.listQuery=(e=>{var t=this.state.query,a=s()({},t,e);this.setState({query:a},this.initData)}),this.state={cate:window.config.message,query:{size:10,page:1,sortBy:"updatedAt",sortOrder:-1}}}componentDidMount(){this.initData()}render(){var e=this.state,t=e.cate,a=e.query,i=this.props,r=i.post,o=i.loadingPost,l=r[t]?r[t].list:[],c=r[t]?r[t].total:0;return d.a.createElement(b,null,d.a.createElement(n["a"],{bordered:!1,style:{margin:"15px 0"},loading:o},d.a.createElement(h["a"],{list:l}),d.a.createElement(m["a"],{value:s()({},a,{total:c}),onChange:this.listQuery})))}};f=Object(l["a"])([Object(p["connect"])(e=>{var t=e.post,a=e.loading;return{post:t,loadingPost:a.effects["post/queryList"]}})],f),t["default"]=f},i1J9:function(e,t,a){"use strict";a.r(t);a("+L6B");var n=a("2/Rp"),i=(a("fOrg"),a("+KLJ")),s=(a("miYZ"),a("tsqr")),r=a("fFZ8"),o=a.n(r),l=a("mrSG"),c=a("q1tI"),d=a.n(c),p=a("MuoO"),u=a("3a4m"),m=a.n(u),h=a("YO1i"),g=a("LLXN"),b=a("vOnD"),f=a("zz3R");function v(){var e=o()(["\n  .user-list-con {\n    padding: 16px 16px 48px 16px;\n  }\n  .user-list {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    border-bottom: solid 1px rgba(0, 0, 0, 0.03);\n    padding: 12px 0;\n    font-size: 14.4px;\n  }\n  .user-list i {\n    margin-right: 13px;\n    font-size: 18px;\n    opacity: 0.8;\n  }\n\n  .header-member {\n    text-align: center;\n    color: #91711e;\n    font-size: 14px;\n    margin-top: 15px;\n  }\n  .header-member i {\n    font-size: 19px;\n    margin-right: 8px;\n  }\n\n  .tips {\n    margin: 15px;\n    margin-bottom: -10px;\n\n    .tipsCon {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n    }\n  }\n"]);return v=function(){return e},e}var y=b["a"].div(v()),x=class extends c["Component"]{constructor(){super(...arguments),this.state={list:[{title:Object(g["formatMessage"])({id:"user.animate.history"}),icon:"icon-history1",link:"history"},{title:Object(g["formatMessage"])({id:"user.like.tab"}),icon:"icon-yizhuifan",link:"like"},{title:Object(g["formatMessage"])({id:"user.own.tab"}),icon:"icon-ic_cloud_download_",link:"own"},{title:Object(g["formatMessage"])({id:"user.score.tab"}),icon:"icon-zuanshihuiyuan",link:"level"},{title:Object(g["formatMessage"])({id:"user.order.tab"}),icon:"icon-three",link:"order"},{title:Object(g["formatMessage"])({id:"user.message"}),icon:"icon-xitongtongzhi",link:"message"},{title:Object(g["formatMessage"])({id:"user.setting"}),icon:"icon-setting",link:"setting"},{title:Object(g["formatMessage"])({id:"user.account.logout"}),icon:"icon-tuichudenglu",link:"logout"}],count:0},this.goPath=(e=>()=>{if("logout"===e){var t=this.props.dispatch;t({type:"auth/logout",payload:{}}),m.a.push("/")}else m.a.push("/user/".concat(e))}),this.goShop=(()=>{m.a.push("/shop")}),this.sendAuthEmail=(()=>{f["a"].sendVerifyCode({}).then(e=>{e&&(s["a"].success(Object(g["formatMessage"])({id:"user.status.draft.send.success"})),this.setState({count:60}),this.time=setInterval(()=>{var e=this.state.count;this.setState({count:e-1}),e<1&&clearInterval(this.time)},1e3))})})}render(){var e=this.state,t=e.list,a=e.count,s=this.props.user.info;return d.a.createElement(y,null,d.a.createElement("div",{className:"header-member"},d.a.createElement("span",{onClick:this.goShop},d.a.createElement(h["a"],{type:"icon-zuanshihuiyuan"}),"\u73b0\u5728\u5347\u7ea7\u6210\u4e3a\u9ad8\u7ea7\u4f1a\u5458 >")),d.a.createElement("div",{className:"tips"},"draft"===s.status&&d.a.createElement(i["a"],{message:d.a.createElement("div",{className:"tipsCon"},d.a.createElement("span",null,Object(g["formatMessage"])({id:"user.status.draft"})),d.a.createElement(n["a"],{type:"link",onClick:this.sendAuthEmail,disabled:a>0},Object(g["formatMessage"])({id:"user.status.draft.auth"}),a>0&&"(".concat(a,")"))),type:"warning"}),"reject"===s.status&&d.a.createElement(i["a"],{showIcon:!0,message:Object(g["formatMessage"])({id:"user.status.reject"}),type:"error"})),d.a.createElement("div",{className:"user-list-con"},t.map(e=>d.a.createElement("div",{className:"user-list",onClick:this.goPath(e.link)},d.a.createElement(h["a"],{type:e.icon}),d.a.createElement("span",null,e.title)))))}};x=Object(l["a"])([Object(p["connect"])(e=>{var t=e.user,a=e.loading;return{user:t,loading:a.effects["user/getInfo"]}})],x),t["default"]=x},mLNA:function(e,t,a){"use strict";a.r(t);var n=a("fFZ8"),i=a.n(n),s=a("mrSG"),r=a("q1tI"),o=a.n(r),l=a("MuoO"),c=a("vOnD"),d=(a("+L6B"),a("2/Rp")),p=(a("jCWc"),a("kPKH")),u=(a("14J3"),a("BMrR")),m=(a("y8nQ"),a("Vl3Y")),h=(a("5NDa"),a("5rEg")),g=(a("miYZ"),a("tsqr")),b=a("LLXN"),f=(a("DZo9"),a("8z0m")),v=(a("Pwec"),a("CtXQ")),y={action:"/api/v2/uploads",headers:{Authorization:localStorage.getItem("token")||null},beforeUpload:e=>{var t=e.size/1024/1024<2,a=!1;return t||g["a"].error("\u56fe\u7247\u5e94\u5c0f\u4e8e2M"),"image/jpeg"===e.type||"image/jpg"===e.type||"image/png"===e.type?a=!0:(a=!1,g["a"].error("\u4e0a\u4f20\u5934\u50cf\u56fe\u7247\u53ea\u80fd\u662fjpg\u6216png\u683c\u5f0f!")),t&&a}},x=y;function E(){var e=i()(["\n  .ant-upload {\n    width: ","px;\n    height: ","px;\n    max-width: 100%;\n  }\n"]);return E=function(){return e},e}var O=c["a"].div(E(),e=>e.width,e=>e.height);class j extends r["Component"]{constructor(){super(...arguments),this.state={loading:!1},this.handleChange=(e=>{var t=this.props.onChange;if("uploading"===e.file.status)this.setState({loading:!0});else if("done"===e.file.status){var a=e.file.response.data[0].path;this.setState({loading:!1}),t(a)}else"error"===e.file.status&&(g["a"].error("upload error"),this.setState({loading:!1}))})}render(){var e=this.state.loading,t=o.a.createElement("div",null,o.a.createElement(v["a"],{type:e?"loading":"plus"}),o.a.createElement("div",null,"Upload")),a=this.props,n=a.type,i=void 0===n?"others":n,s=a.value,r=a.width,l=void 0===r?128:r,c=a.height,d=void 0===c?128:c;return o.a.createElement(O,{width:l,height:d},o.a.createElement(f["a"],Object.assign({name:"file",listType:"picture-card",showUploadList:!1,onChange:this.handleChange,data:{type:i}},x),s?o.a.createElement("img",{src:s,alt:"avatar",style:{maxHeight:"100%",maxWidth:"100%"}}):t))}}var k=j,w=a("zz3R");class M extends r["Component"]{constructor(){super(...arguments),this.state={loading:!1},this.handleSubmit=(e=>{e.preventDefault();var t=this.props,a=t.submit;t.info;this.props.form.validateFields((e,t)=>{e?g["a"].destroy():(this.setState({loading:!0}),w["a"].userEdit({data:t}).then(e=>{e&&(g["a"].success(Object(b["formatMessage"])({id:"common.submit.success"})),a())}).finally(()=>{this.setState({loading:!1})}))})})}componentDidMount(){}render(){var e=this.state.loading,t=this.props.info,a=this.props.form.getFieldDecorator,n=h["a"].TextArea,i={labelCol:{span:4},wrapperCol:{span:12,offset:0}},s={labelCol:{span:4},wrapperCol:{span:18,offset:0}},r={xs:24,sm:24,md:24,lg:24,xl:12};return o.a.createElement(m["a"],{onSubmit:this.handleSubmit},o.a.createElement(u["a"],{type:"flex",justify:"space-between",align:"top"},o.a.createElement(p["a"],Object.assign({},r),o.a.createElement(m["a"].Item,Object.assign({},i,{label:Object(b["formatMessage"])({id:"user.name"})}),a("name",{initialValue:t.name,rules:[{required:!0,message:Object(b["formatMessage"])({id:"user.tips.fill.name"})}]})(o.a.createElement(h["a"],{placeholder:Object(b["formatMessage"])({id:"user.tips.fill.name"})}))),o.a.createElement(m["a"].Item,Object.assign({},i,{label:Object(b["formatMessage"])({id:"user.introduce"})}),a("introduce",{initialValue:t.introduce})(o.a.createElement(n,{placeholder:Object(b["formatMessage"])({id:"user.tips.fill.introduce"}),autosize:{minRows:3,maxRows:8}})))),o.a.createElement(p["a"],Object.assign({},r),o.a.createElement(m["a"].Item,Object.assign({},i,{label:Object(b["formatMessage"])({id:"user.avatar"})}),a("avatar",{initialValue:t.avatar})(o.a.createElement(k,{type:"avatar",width:110,height:110}))),o.a.createElement(m["a"].Item,Object.assign({},i,{label:Object(b["formatMessage"])({id:"user.background"})}),a("background",{initialValue:t.background})(o.a.createElement(k,{type:"background",width:350,height:120}))))),o.a.createElement(u["a"],null,o.a.createElement(p["a"],Object.assign({},r),o.a.createElement(m["a"].Item,Object.assign({},s),o.a.createElement(d["a"],{type:"primary",htmlType:"submit",loading:e},Object(b["formatMessage"])({id:"common.submit"}))))))}}var D=m["a"].create()(M),C=a("Oj1a");function N(){var e=i()(["\n  padding: 15px;\n  width: 100vw;\n"]);return N=function(){return e},e}var S=c["a"].div(N()),q=class extends r["Component"]{constructor(){super(...arguments),this.state={},this.initData=(()=>{var e=this.props.dispatch;e({type:"user/getInfo",payload:{params:{id:C["default"].info.id}}})}),this.submit=(()=>{this.initData()})}render(){var e=this.props.user.info;return o.a.createElement(S,null,o.a.createElement(D,{info:e,submit:this.submit}))}};q=Object(s["a"])([Object(l["connect"])(e=>{var t=e.user;e.loading;return{user:t}})],q);t["default"]=q},nL0h:function(e,t,a){"use strict";a.r(t);a("T2oS");var n=a("W9HT"),i=a("fFZ8"),s=a.n(i),r=a("mrSG"),o=a("q1tI"),l=a.n(o),c=a("MuoO"),d=a("vOnD"),p=(a("R9oj"),a("ECub")),u=a("3a4m"),m=a.n(u),h=a("xEAY");function g(){var e=s()(["\n  margin-bottom: 40px;\n  display: grid;\n  grid-gap: 30px 15px;\n  grid-template-columns: repeat(3, calc((100% - 30px) / 3));\n\n  .top {\n    height: 0;\n    padding-top: 140%;\n    background-color: rgba(0, 0, 0, 0.1);\n    background-size: cover;\n    background-position: center;\n    border-radius: 6px;\n    vertical-align: bottom;\n    position: relative;\n    cursor: pointer;\n\n    span {\n      display: block;\n      width: 100%;\n      height: 30px;\n      line-height: 30px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      text-align: center;\n    }\n\n    .update {\n      position: absolute;\n      left: 0;\n      top: 0;\n      padding: 3px 10px;\n      color: white;\n      background-color: rgba(0, 0, 0, 0.5);\n      border-radius: 4px 0 4px 0;\n\n      &.active {\n        background-color: rgb(242, 93, 142);\n      }\n    }\n\n    .status {\n      position: absolute;\n      left: 0;\n      top: 0;\n      padding: 3px 10px;\n      color: white;\n      background-color: rgba(0, 0, 0, 0.5);\n      border-radius: 4px 0 4px 0;\n\n      &.publish {\n        background-color: rgb(242, 93, 142, 0.8);\n      }\n\n      &.reject {\n        background-color: red;\n      }\n    }\n  }\n"]);return g=function(){return e},e}var b=d["a"].div(g()),f=(e,t)=>{"animate"===e?m.a.push("/".concat(e,"/video/").concat(t)):m.a.push("/".concat(e,"/picture/").concat(t))},v=e=>{var t=e.list,a=e.type,n=t.filter(e=>e.belong&&e.target);return 0===n.length?l.a.createElement(p["a"],{style:{margin:"15px"}}):l.a.createElement(b,null,n.map(e=>l.a.createElement("div",{className:"top",style:{backgroundImage:"url(".concat(e.belong.cover||e.target.coverVertical,")")},onClick:()=>{f(a,e.target._id)}},l.a.createElement("span",null,e.belong.title),l.a.createElement("div",{className:"update"},Object(h["b"])(e.target.sort)))))},y=v,x=a("gmfD"),E=a("TSYQ"),O=a.n(E),j=a("LLXN");function k(){var e=s()(["\n  padding: 15px;\n\n  .tabs {\n    display: flex;\n\n    .tab {\n      height: 32px;\n      width: 33.33%;\n      border: solid 1px #19d5fd;\n      text-align: center;\n      line-height: 31px;\n\n      &:nth-child(1) {\n        border-radius: 100px 0 0 100px;\n      }\n\n      &:nth-child(2) {\n        border-radius: 0;\n        border-left: none;\n        border-right: none;\n      }\n\n      &:nth-child(3) {\n        border-radius: 0 100px 100px 0;\n      }\n\n      &.active {\n        color: white;\n        background-color: #19d5fd;\n      }\n    }\n  }\n\n  .list {\n    margin: 15px 0;\n  }\n"]);return k=function(){return e},e}var w=d["a"].div(k()),M=class extends o["Component"]{constructor(){super(...arguments),this.state={type:"animate"},this.typeToggle=(e=>()=>{this.setState({type:e},this.initData)}),this.initData=(()=>{var e=this.state.type,t=this.props.dispatch;t({type:"user/getUserHistory",payload:{params:{type:e}}})})}componentDidMount(){this.initData()}render(){var e=this.props,t=e.user,a=e.loading,i=this.state.type;return l.a.createElement(w,null,l.a.createElement("div",{className:"tabs"},l.a.createElement("div",{className:O()("tab",{active:"animate"===i}),onClick:this.typeToggle("animate")},l.a.createElement("span",null,Object(j["formatMessage"])({id:"user.animate"}))),l.a.createElement("div",{className:O()("tab",{active:"comic"===i}),onClick:this.typeToggle("comic")},l.a.createElement("span",null,Object(j["formatMessage"])({id:"user.comic"}))),l.a.createElement("div",{className:O()("tab",{active:"post"===i}),onClick:this.typeToggle("post")},l.a.createElement("span",null,Object(j["formatMessage"])({id:"user.post"})))),l.a.createElement(n["a"],{spinning:a},l.a.createElement("div",{className:"list"},"animate"===i?l.a.createElement(y,{list:t.historyanimate,type:"animate"}):"comic"===i?l.a.createElement(y,{list:t.historycomic,type:"comic"}):l.a.createElement(x["a"],{list:t.historypost,wrapper:!0}))))}};M=Object(r["a"])([Object(c["connect"])(e=>{var t=e.user,a=e.loading;return{user:t,loading:a.effects["user/getUserHistory"]}})],M);t["default"]=M},"yZB/":function(e,t,a){"use strict";a.r(t);a("+BJd");var n=a("mr32"),i=a("fFZ8"),s=a.n(i),r=a("mrSG"),o=a("q1tI"),l=a.n(o),c=a("MuoO"),d=a("vOnD"),p=(a("5NDa"),a("5rEg")),u=(a("2qtc"),a("kLXV")),m=(a("miYZ"),a("tsqr")),h=a("LLXN"),g=a("zz3R");class b extends o["Component"]{constructor(){super(...arguments),this.state={loading:!1,visible:!1,key:null},this.handleSubmit=(()=>{var e=this.state.key,t=this.props.submit;this.setState({loading:!0}),g["a"].userPay({data:{key:e}}).then(e=>{e&&(m["a"].success(Object(h["formatMessage"])({id:"user.pay.key.success"})),this.cancel(),t())}).finally(()=>{this.setState({loading:!1})})}),this.asyncKey=(e=>{this.setState({key:e.target.value})}),this.show=(()=>{this.setState({visible:!0})}),this.cancel=(()=>{this.setState({visible:!1,loading:!1,key:null})})}componentDidMount(){}render(){var e=this.state,t=e.loading,a=e.visible,i=e.key;return l.a.createElement(l.a.Fragment,null,l.a.createElement(n["a"],{color:"#108ee9",onClick:this.show},Object(h["formatMessage"])({id:"user.pay"})),l.a.createElement(u["a"],{visible:a,confirmLoading:t,onCancel:this.cancel,onOk:this.handleSubmit,title:Object(h["formatMessage"])({id:"user.pay.key"}),maskClosable:!1},l.a.createElement(p["a"],{placeholder:Object(h["formatMessage"])({id:"user.pay.key.tips"}),value:i,onChange:this.asyncKey})))}}var f=b,v=a("wd/R"),y=a.n(v),x=a("3a4m"),E=a.n(x);function O(){var e=s()(["\n  padding: 15px;\n\n  .list {\n    padding: 6px 0;\n    font-size: 14.4px;\n\n    .money {\n      width: 100px;\n      display: inline-block;\n\n      &:nth-child(2) {\n        width: 120px;\n      }\n    }\n  }\n"]);return O=function(){return e},e}var j=d["a"].div(O()),k=class extends o["Component"]{constructor(){super(...arguments),this.state={},this.initData=(()=>{var e=this.props,t=e.dispatch,a=e.user;t({type:"user/getInfo",payload:{params:{id:a.info.id}}})}),this.submit=(()=>{this.initData()}),this.goPath=(()=>{E.a.push("/shop")})}render(){var e=this.props.user.info;return l.a.createElement(j,null,l.a.createElement("div",{className:"list"},l.a.createElement("span",{className:"money"},Object(h["formatMessage"])({id:"user.money"})),l.a.createElement("span",{className:"money"},l.a.createElement(n["a"],{color:"cyan"},e.money)),l.a.createElement(f,{submit:this.submit})),l.a.createElement("div",{className:"list"},l.a.createElement("span",{className:"money"},Object(h["formatMessage"])({id:"user.level"})),l.a.createElement("span",{className:"money"},l.a.createElement(n["a"],{color:"blue"},"LV ",e.level)),l.a.createElement(n["a"],{color:"#6600ff",onClick:this.goPath},Object(h["formatMessage"])({id:"user.buy"}))),e.level>1&&l.a.createElement("div",{className:"list"},l.a.createElement("span",{className:"money"},Object(h["formatMessage"])({id:"user.expired"})),l.a.createElement("span",{className:"money"},l.a.createElement(n["a"],{color:"purple"},y()((new Date).getTime()+1e3*e.expired).format("YYYY-MM-DD")))))}};k=Object(r["a"])([Object(c["connect"])(e=>{var t=e.user;e.loading;return{user:t}})],k);t["default"]=k}}]);