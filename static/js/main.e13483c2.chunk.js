(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(7),l=a.n(c),r=(a(14),a(15),a(1)),s=a(2),o=a(4),m=a(3),u=a(5),d=(a(16),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{id:"content"},i.a.createElement("i",{className:"far fa-clock fa-4x"}),i.a.createElement("h1",null,this.props.title)))))}}]),t}(n.Component)),h=(a(17),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).tick=function(){a.setState({time:new Date})},a.state={time:new Date},a.days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a.months=["January","February","March","April","May","June","July","Agust","September","October","November","December"],a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"hideDate",value:function(){!0===document.getElementById("checkDate").checked?(document.getElementById("date").style.display="block",document.getElementById("time").style.marginTop="60px"):(document.getElementById("date").style.display="none",document.getElementById("time").style.marginTop="72px")}},{key:"componentDidMount",value:function(){var e=this;this.tickInterval=setInterval(function(){e.tick()},1e3),document.getElementById("checkDate").checked=!0}},{key:"componentWillUnmount",value:function(){clearInterval(this.tickInterval)}},{key:"render",value:function(){return i.a.createElement("div",{id:"clock"},i.a.createElement("div",{id:"panel"},i.a.createElement("label",{className:"switch",id:"switch-date"},i.a.createElement("input",{type:"checkbox",id:"checkDate",value:"true",onChange:this.hideDate}),i.a.createElement("span",{className:"slider round"})),i.a.createElement("label",{className:"switch-text",htmlFor:"switch-date"},i.a.createElement("i",{className:"far fa-calendar-alt fa-3x"}))),i.a.createElement("div",{id:"context"},i.a.createElement("div",{id:"time"},this.state.time.getHours()<10?"0":"",this.state.time.getHours(),":",this.state.time.getMinutes()<10?"0":"",this.state.time.getMinutes(),":",this.state.time.getSeconds()<10?"0":"",this.state.time.getSeconds()),i.a.createElement("div",{id:"date"},this.days[this.state.time.getDay()]+" ",this.state.time.getDate()<10?"0":"",this.state.time.getDate()," "+this.months[this.state.time.getMonth()]," "+this.state.time.getFullYear())))}}]),t}(n.Component));var v=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d,{title:"React Clock"}),i.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(18);l.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.e13483c2.chunk.js.map