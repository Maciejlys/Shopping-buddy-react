(this["webpackJsonpshopping-list-react"]=this["webpackJsonpshopping-list-react"]||[]).push([[0],{25:function(n,e,t){"use strict";t.r(e);var i,o,r,a,c,s,d,u,b=t(0),l=t.n(b),m=t(13),j=t.n(m),h=t(10),f=t(5),p=t(2),g=t(3),x=g.b.div(i||(i=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: ",";\n  gap: ",";\n"])),(function(n){return n.dir}),(function(n){return n.gap})),O=g.b.main(o||(o=Object(p.a)(["\n  width: 90%;\n  max-width: 800px;\n  border: 1px black solid;\n  margin-top: 2rem;\n  background: linear-gradient(-45deg, #010409, #010409, #2c3e50, #2c3e50);\n  background-size: 400% 400%;\n  border: none;\n  animation: anim 20s ease infinite;\n  border-radius: 5%;\n  min-height: 40rem;\n  box-shadow: 0 0 0.5rem gray;\n  transition: box-shadow 0.3s ease-in-out;\n\n  :hover {\n    box-shadow: 0 0 0.8rem white;\n  }\n\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n\n  @keyframes anim {\n    0% {\n      background-position: 0% 50%;\n    }\n    50% {\n      background-position: 100% 50%;\n    }\n    100% {\n      background-position: 0% 50%;\n    }\n  }\n"]))),v=g.b.div(r||(r=Object(p.a)(["\n  min-height: 30px;\n  height: 30px;\n  border-radius: 2rem;\n  color: ",";\n  width: 50vw;\n  max-width: 70%;\n  min-width: 40vw;\n  margin: 1rem 0 0.5rem;\n  animation: fade 2.5s linear;\n  h5 {\n    font-style: italic;\n    text-align: center;\n    margin: auto;\n    line-height: 30px;\n    font-size: 1.2rem;\n  }\n\n  @keyframes fade {\n    0%,\n    100% {\n      opacity: 0;\n    }\n    80% {\n      opacity: 1;\n    }\n    20% {\n      opacity: 1;\n    }\n  }\n"])),(function(n){var e=n.action;return"add"===e?"green":"remove"===e?"red":""})),w=t(1),y=function(n){var e=n.act,t=n.setAction,i=e.action,o=e.show;if(Object(b.useEffect)((function(){var n=setTimeout((function(){t({action:"",show:!1})}),2480);return function(){return clearTimeout(n)}}),[o,t]),o){if("add"===i)return Object(w.jsx)(x,{children:Object(w.jsx)(v,{action:i,children:Object(w.jsx)("h5",{children:"Item added to the list!"})})});if("remove"===i)return Object(w.jsx)(x,{children:Object(w.jsx)(v,{action:i,children:Object(w.jsx)("h5",{children:"Item removed!"})})})}return Object(w.jsx)(v,{})},k=g.b.div(a||(a=Object(p.a)(['\n  input {\n    width: 50vw;\n    max-width: 70%;\n    border: none;\n    border-radius: 0.5rem 0 0 0.5rem;\n    font-size: 1.2rem;\n    font-weight: 600;\n    line-height: 40px;\n    padding: 6px 16px;\n    position: relative;\n    text-decoration: none;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n    vertical-align: middle;\n    white-space: nowrap;\n  }\n  input:focus {\n    outline: none;\n  }\n  /* CSS */\n  button {\n    border-radius: 0 0.5rem 0.5rem 0;\n    width: 6rem;\n    appearance: none;\n    background-color: #2ea44f;\n    border: none;\n    box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;\n    box-sizing: border-box;\n    color: #fff;\n    cursor: pointer;\n    display: inline-block;\n    font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial,\n      sans-serif, "Apple Color Emoji", "Segoe UI Emoji";\n    font-size: 1.2rem;\n    font-weight: 600;\n    line-height: 40px;\n    padding: 6px 16px;\n    position: relative;\n    text-align: center;\n    text-decoration: none;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n    vertical-align: middle;\n    white-space: nowrap;\n  }\n\n  button:focus:not(:focus-visible):not(.focus-visible) {\n    box-shadow: none;\n    outline: none;\n  }\n\n  button:hover {\n    background-color: #2c974b;\n  }\n\n  button:focus {\n    box-shadow: rgba(46, 164, 79, 0.4) 0 0 0 3px;\n    outline: none;\n  }\n\n  button:disabled {\n    background-color: #94d3a2;\n    border-color: rgba(27, 31, 35, 0.1);\n    color: rgba(255, 255, 255, 0.8);\n    cursor: default;\n  }\n\n  button:active {\n    background-color: #298e46;\n    box-shadow: rgba(20, 70, 32, 0.2) 0 1px 0 inset;\n  }\n']))),I=t(26).v4,S=function(n){var e=n.addItem,t=Object(b.useRef)(document.createElement("input")),i=Object(b.useState)(""),o=Object(f.a)(i,2),r=o[0],a=o[1];return Object(w.jsx)(k,{children:Object(w.jsx)("form",{onSubmit:function(n){return function(n){n.preventDefault(),""!==r&&(e({name:r,id:I()}),a(""),t.current.focus())}(n)},children:Object(w.jsxs)(x,{dir:"row",children:[Object(w.jsx)("input",{maxLength:30,type:"text",value:r,ref:t,placeholder:"e.g. eggs",onChange:function(n){return a(n.target.value)},autoFocus:!0}),Object(w.jsx)("button",{type:"submit",children:"Add"})]})})})},z=t(12),E=g.b.div(c||(c=Object(p.a)(["\n  margin: 2rem 0;\n  div {\n    animation: ","\n      1s;\n  }\n\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  @keyframes fadeOut {\n    0% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n    }\n  }\n"])),(function(n){return"add"===n.action?"fadeOut":"fadeIn"})),A=g.b.div(s||(s=Object(p.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  width: 70%;\n  min-width: 10rem;\n  background-color: #2e3642;\n  border-radius: 2rem;\n  box-shadow: 0 0 0.5rem gray;\n  transition: box-shadow 0.3s ease-in-out;\n\n  :hover {\n    box-shadow: 0 0 0.8rem white;\n  }\n  p {\n    min-width: 10rem;\n    width: 80%;\n  }\n  button {\n    background: none;\n    color: inherit;\n    border: none;\n    padding: 0;\n    font: inherit;\n    cursor: pointer;\n    outline: inherit;\n  }\n  .svg {\n    color: red;\n  }\n"]))),C=t(17),J=function(n){var e=n.id,t=n.name,i=n.removeItem;return Object(w.jsxs)(A,{children:[Object(w.jsx)("p",{children:t}),Object(w.jsx)("button",{onClick:function(){return i(e)},children:Object(w.jsx)(C.a,{className:"svg"})})]})},N=function(n){var e=n.items,t=n.removeItem;return Object(w.jsx)(E,{children:Object(w.jsx)(x,{dir:"column",gap:"1rem",children:e.map((function(n){return Object(w.jsx)(J,Object(z.a)(Object(z.a)({},n),{},{removeItem:t}),n.id)}))})})},U=g.b.h1(d||(d=Object(p.a)(["\n  margin: 1rem;\n"]))),F=function(n){var e=n.title;return Object(w.jsx)(x,{children:Object(w.jsx)(U,{children:e})})},B=function(){var n=Object(b.useState)({action:"",show:!1}),e=Object(f.a)(n,2),t=e[0],i=e[1],o=Object(b.useState)([]),r=Object(f.a)(o,2),a=r[0],c=r[1],s=function(n){localStorage.setItem("items",JSON.stringify(n))};return Object(b.useEffect)((function(){c(JSON.parse(localStorage.getItem("items")||"[]"))}),[]),Object(w.jsx)(x,{dir:"column",children:Object(w.jsxs)(O,{children:[Object(w.jsx)(F,{title:"Shopping list"}),Object(w.jsx)(y,{act:t,setAction:i}),Object(w.jsx)(S,{addItem:function(n){c([].concat(Object(h.a)(a),[n])),s([].concat(Object(h.a)(a),[n])),i({action:"add",show:!0})}}),Object(w.jsx)(N,{items:a,removeItem:function(n){i({action:"remove",show:!0});var e=a.filter((function(e){return e.id!==n}));c(e),s(e)},action:t.action})]})})},H=Object(g.a)(u||(u=Object(p.a)(['\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,\n    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n  background-color: #010409;\n  color: #fff;\n}\n\nbody {\n    background: linear-gradient(-45deg, #010409,#010409,#2c3e50, #2c3e50);\n    background-size: 400% 400%;\n    animation: gradient 10s ease infinite;\n}\n\n\n@keyframes gradient {\n    0% {\n        background-position: 0% 50%;\n    }\n    50% {\n        background-position: 100% 50%;\n    }\n    100% {\n        background-position: 0% 50%;\n    }\n}\n'])));var M=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(H,{}),Object(w.jsx)(B,{})]})};j.a.render(Object(w.jsx)(l.a.StrictMode,{children:Object(w.jsx)(M,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.cdff0f60.chunk.js.map