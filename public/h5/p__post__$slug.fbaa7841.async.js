(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{PZnI:function(e,n,t){"use strict";t.r(n);t("R9oj");var a=t("ECub"),r=t("mrSG"),l=t("q1tI"),o=t.n(l),s=t("MuoO"),i=t("fFZ8"),c=t.n(i),m=t("vOnD"),u=t("XEok"),p=t("8KYf"),d=t("mNhR"),g=t("TSYQ"),h=t.n(g),v=t("eNRF"),E=t("rmP6"),f=t.n(E),y=(t("91UR"),e=>{var n=e.value,t={toolbar:!1};return o.a.createElement(f.a,{value:n,theme:"snow",readOnly:!0,modules:t})}),b=y,x=t("l61h"),w=t("wd/R"),k=t.n(w);function N(){var e=c()(["\n  margin-top: 40px;\n\n  .author {\n    height: 60px;\n    width: 100%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n\n    .avatar {\n      width: 40px;\n      height: 40px;\n      border-radius: 50%;\n      background-color: rgba(0, 0, 0, 0.1);\n      margin-right: 15px;\n      background-size: cover;\n      background-position: center;\n    }\n\n    .info {\n      .name {\n        span:nth-child(1) {\n          font-size: 1.2em;\n          margin-right: 10px;\n        }\n\n        span:nth-child(2) {\n          opacity: 0.7;\n        }\n      }\n\n      .time {\n        span {\n          margin-right: 15px;\n          opacity: 0.8;\n\n          i {\n            margin-right: 5px;\n          }\n        }\n      }\n    }\n  }\n\n  .markdown {\n    background-color: white;\n    margin-bottom: 20px;\n    user-select: text;\n\n    img {\n      width: 100%;\n      margin-bottom: 20px;\n    }\n\n    .ql-container.ql-snow {\n      border: none;\n      padding: 0;\n    }\n\n    .ql-editor {\n      font-size: 1.1em;\n      padding: 0;\n    }\n  }\n\n  .option {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.05);\n    height: 60px;\n\n    .list {\n      padding: 0 40px;\n      color: white;\n      background-color: ",";\n      height: 40px;\n      line-height: 40px;\n      border-radius: 4px;\n      font-size: 1.3em;\n\n      &.active {\n        color: #ffa726;\n      }\n    }\n  }\n\n  .comment {\n    margin: 15px;\n  }\n"]);return N=function(){return e},e}var D=m["a"].div(N(),e=>e.color),j=(e,n)=>{return e.like.filter(e=>e.slug===n).length>0},O=e=>{var n=e.info,t=e.userAction,a=e.user;!n.author&&(n.author={avatar:window.config.avatar,name:"\u8d26\u53f7\u4e0d\u5b58\u5728",introduce:"\u7528\u6237\u5df2\u5220\u9664",level:0});var r=n.slug,s=Object(l["useContext"])(u["a"]),i=Object(l["useMemo"])(()=>s,[s]);return Object(l["useEffect"])(()=>{}),o.a.createElement(D,{color:i},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"author"},o.a.createElement("div",{className:"avatar",style:{backgroundImage:"url(".concat(n.author.avatar,")")}}),o.a.createElement("div",{className:"info"},o.a.createElement("div",{className:"name"},o.a.createElement("span",null,n.author.name),o.a.createElement("span",null,"Lv:",n.author.level)),o.a.createElement("div",{className:"time"},o.a.createElement("span",null," ",k()(n.createdAt).format("YYYY-MM-DD")),o.a.createElement("span",null,o.a.createElement(d["a"],{type:"icon-youtube"}),n.play),o.a.createElement("span",null,o.a.createElement(d["a"],{type:"icon-comment"}),n.comment),o.a.createElement("span",null,o.a.createElement(d["a"],{type:"icon-yizhuifan"}),o.a.createElement("span",null,n.like))))),o.a.createElement("div",{className:"markdown"},o.a.createElement("h2",null,n.title),o.a.createElement("img",{src:n.cover,alt:""}),o.a.createElement(b,{value:n.content}))),o.a.createElement("div",{className:"option"},o.a.createElement(x["a"],null,o.a.createElement("div",{className:h()("list",{active:j(a,n.slug)}),onClick:t},o.a.createElement(d["a"],{type:"icon-yizhuifan"}))),o.a.createElement(x["a"],null,o.a.createElement(v["a"],{type:"post",target:n._id,addon:r},o.a.createElement("div",{className:"list"},o.a.createElement(d["a"],{type:"icon-guanyuwomen"}))))),o.a.createElement("div",{className:"comment"},o.a.createElement(p["a"],{type:"post",belong:r})))},Y=O,z=t("Y8ry"),A=t("LLXN"),I=t("Dp36"),M=class extends l["Component"]{constructor(e){super(e),this.initData=(()=>{var e=this.state.slug,n=this.props.dispatch;n({type:"post/getInfo",payload:{params:{slug:e}}})}),this.userAction=(()=>{var e=this.state.slug,n=this.props.dispatch;I["a"].postUserAction({data:{type:"post",kind:"like",slug:e}}).then(e=>{e&&n({type:"user/refreshInfo",payload:{}})})}),this.state={slug:e.match.params.slug}}static getDerivedStateFromProps(e,n){return e.match.params.slug!==n.slug?{slug:e.match.params.slug}:null}componentDidMount(){this.initData()}componentDidUpdate(e,n){n.slug!==this.state.slug&&this.initData()}render(){var e=this.props,n=e.user.info.post,t=e.post.info,r=e.loading,l=this.state.slug;return o.a.createElement(o.a.Fragment,null,r?o.a.createElement(z["a"],null):t.slug===l?o.a.createElement(Y,{info:t,userAction:this.userAction,user:n}):o.a.createElement(a["a"],{description:o.a.createElement("span",null,Object(A["formatMessage"])({id:"common.nodata.tips"})),style:{transform:"translateY(calc(40vh - 50%))"}}))}};M=r["a"]([Object(s["connect"])(e=>{var n=e.user,t=e.post,a=e.loading;return{user:n,post:t,loading:a.effects["post/getInfo"]}})],M);n["default"]=M}}]);