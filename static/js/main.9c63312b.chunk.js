(this["webpackJsonpreact-test-create-react-app"]=this["webpackJsonpreact-test-create-react-app"]||[]).push([[0],{12:function(e,t,r){},13:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(2),c=r.n(o),s=(r(12),r(3)),i=r(4),l=r(6),u=r(5),f=function(e){var t=e.users;return t.length>0?n.createElement("ul",null,t.map((function(e){return n.createElement("li",{key:e},e)}))):n.createElement("p",null,"No results!")},m=["Michal","Kasia","Jacek","Marta","Tomek","Ania"],d=function(e){Object(l.a)(r,e);var t=Object(u.a)(r);function r(){var e;return Object(s.a)(this,r),(e=t.call(this)).filterUsers=function(t){var r=t.currentTarget.value,n=e.getFilteredUsersForText(r);e.setState({filteredUsers:n})},e.state={filteredUsers:m},e}return Object(i.a)(r,[{key:"getFilteredUsersForText",value:function(e){return m.filter((function(t){return t.toLowerCase().includes(e.toLowerCase())}))}},{key:"render",value:function(){return n.createElement("div",null,n.createElement("input",{onInput:this.filterUsers}),n.createElement(f,{users:this.state.filteredUsers}))}}]),r}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,r){e.exports=r(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.9c63312b.chunk.js.map