(this["webpackJsonpcats-arena"]=this["webpackJsonpcats-arena"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),l=a.n(r),s=(a(12),a(3)),o=a(4),i=a(5),u=a(6),h=(a(13),function(e){var t=e.placeholder,a=e.handleChange;return c.a.createElement("input",{type:"search",className:"search",placeholder:t,onChange:a})}),m=(a(14),a(15),function(e){return c.a.createElement("div",{className:"card-container"},c.a.createElement("img",{alt:"cat".concat(e.cat.id),src:"https://robohash.org/".concat(e.cat.id,"?set=set4&size=180x180")}),c.a.createElement("h2",null,e.cat.name),c.a.createElement("p",null,e.cat.email))}),d=function(e){return c.a.createElement("div",{className:"card-list"},e.cats.map((function(e){return c.a.createElement(m,{key:e.id,cat:e})})))},p=(a(16),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={searchField:"",cats:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({cats:t})}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"Container"},c.a.createElement("h1",null,"Cats Arena"),c.a.createElement(h,{placeholder:"Search cats..."})),c.a.createElement(d,{cats:this.state.cats}))}}]),a}(n.Component));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.6af12c11.chunk.js.map