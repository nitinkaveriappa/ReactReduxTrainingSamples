(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,r){e.exports=r(12)},12:function(e,t,r){"use strict";r.r(t);var a=r(10),n=r(2),s=r(3),i=r(6),u=r(4),l=r(7),c=r(0),o=r.n(c),m=r(9),h=r.n(m),d=(r(17),r(5));function b(e){return o.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var v=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"renderSquare",value:function(e){var t=this;return o.a.createElement(b,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),o.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),o.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(c.Component),f=function(e){function t(e){var r;return Object(n.a)(this,t),(r=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},r}return Object(l.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();p(r)||g(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext,toggle:!0}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,a=r[this.state.stepNumber],n=p(a.squares),s=g(a.squares),i=r.map(function(e,r){var a=r?"Go to move #"+r:"Go to game start";return o.a.createElement("li",{key:r},o.a.createElement("button",{onClick:function(){return t.jumpTo(r)}},a))});return e=n?"Winner: "+n:s?"Draw":"Next player: "+(this.state.xIsNext?"X":"O"),o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"game-board"},o.a.createElement(v,{squares:a.squares,onClick:function(e){return t.handleClick(e)}})),o.a.createElement("div",{className:"game-info"},o.a.createElement("div",null,e),"Toggle History:",o.a.createElement("div",null,o.a.createElement("button",{type:"button",onClick:function(){return t.setState({toggle:!t.state.toggle})}},o.a.createElement(d.b,{icon:d.a,size:"small",ariaLabel:"GitHub"})," ","Ascending/Decending")),"History:",o.a.createElement("ol",null,this.state.toggle?i:i.reverse)))}}]),t}(o.a.Component);function p(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(a.a)(t[r],3),s=n[0],i=n[1],u=n[2];if(e[s]&&e[s]===e[i]&&e[s]===e[u])return e[s]}return null}function g(e){for(var t=0;t<e.length;t++)if(null==e[t])return!1;return!0}h.a.render(o.a.createElement(f,null),document.getElementById("root"))},17:function(e,t,r){}},[[11,2,1]]]);
//# sourceMappingURL=main.2737815a.chunk.js.map