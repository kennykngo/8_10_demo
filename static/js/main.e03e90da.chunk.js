(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(t,e,n){t.exports=n(43)},24:function(t,e,n){},25:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(15),r=n.n(c),i=(n(24),n(17)),s=n(5),l=n(3),u=n(18),m=(n(25),function(t){return o.a.createElement("form",{onSubmit:t.submitText},o.a.createElement("div",{className:"input-group mb-3"},o.a.createElement("input",{name:"text",type:"text",className:"form-control",placeholder:"Enter Text",onChange:t.editText}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",id:"button-addon2"},"Submit"))))}),d=function(t){return o.a.createElement("div",null,t.translationList.map((function(t,e){return o.a.createElement("h1",{key:e},t)})))},p=n(16),f=n.n(p);var b=function(){var t=Object(a.useState)({text:"",translationList:[]}),e=Object(u.a)(t,2),n=e[0],c=e[1],r=function(t){return new Promise((function(e,n){f()({method:"POST",url:"https://yodish.p.rapidapi.com/yoda.json",headers:{"content-type":"application/x-www-form-urlencoded","x-rapidapi-host":"yodish.p.rapidapi.com","x-rapidapi-key":"b7436eb940msh7eda97d567495aap1562ccjsndf86c1bddee6",useQueryString:!0},params:{text:t},data:{}}).then((function(t){e(t.data.contents.translated)})).catch((function(t){n(t)}))}))};return Object(a.useEffect)((function(){r("this is a trap").then((function(t){return console.log(t)}))}),[]),o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"jumbotron rounded-0"},o.a.createElement(m,{submitText:function(t){t.preventDefault(),r(n.text).then((function(t){c(Object(l.a)(Object(l.a)({},n),{},{translationList:[].concat(Object(i.a)(n.translationList),[t])}))}))},editText:function(t){c(Object(l.a)(Object(l.a)({},n),{},Object(s.a)({},t.target.name,t.target.value)))}}))),o.a.createElement(d,{translationList:n.translationList}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.e03e90da.chunk.js.map