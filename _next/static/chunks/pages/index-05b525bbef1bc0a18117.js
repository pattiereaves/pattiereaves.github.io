_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(o.default.useContext(a.AmpStateContext))};var n,o=(n=r("q1tI"))&&n.__esModule?n:{default:n},a=r("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,u=void 0!==a&&a;return r||o&&u}},"7W2i":function(e,t,r){var n=r("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"8Kt/":function(e,t,r){"use strict";r("lSNA");t.__esModule=!0,t.defaultHead=c,t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),a=(n=r("Xuae"))&&n.__esModule?n:{default:n},u=r("lwAK"),i=r("FYa8"),l=r("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function m(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function _(e,t){return e.reduce((function(e,t){var r=o.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(m,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var i=0,l=f.length;i<l;i++){var s=f[i];if(o.props.hasOwnProperty(s))if("charSet"===s)r.has(s)?a=!1:r.add(s);else{var c=o.props[s],m=n[s]||new Set;m.has(c)?a=!1:(m.add(c),n[s]=m)}}}return a}}()).reverse().map((function(e,t){var r=e.key||t;return o.default.cloneElement(e,{key:r})}))}function p(e){var t=e.children,r=(0,o.useContext)(u.AmpStateContext),n=(0,o.useContext)(i.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:_,headManager:n,inAmpMode:(0,l.isInAmpMode)(r)},t)}p.rewind=function(){};var b=p;t.default=b},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},Lnxd:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("q1tI"),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),u=function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]])}return r};function l(e){return function(t){return n.createElement(s,u({attr:u({},e.attr)},t),function e(t){return t&&t.map((function(t,r){return n.createElement(t.tag,u({key:r},t.attr),e(t.child))}))}(e.child))}}function s(e){var t=function(t){var r,o=e.size||t.size||"1em";t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className);var a=e.attr,l=e.title,s=i(e,["attr","title"]);return n.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:r,style:u({color:e.color||t.color},t.style,e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},Nsbk:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,r){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},RIqP:function(e,t,r){var n=r("Ijbi"),o=r("EbDI"),a=r("ZhPi"),u=r("Bnag");e.exports=function(e){return n(e)||o(e)||a(e)||u()}},RNiq:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("8Kt/"),u=r.n(a),i=r("Lnxd");function l(e){return Object(i.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}}]})(e)}var s=r("ma3e"),c=r("iNdW"),m=r("NIcq"),f=void 0,_="/Users/pattie/Development/pattiereaves.github.io/pages/index.js",p=o.a.createElement;t.default=function(){return p(o.a.Fragment,null,p(u.a,{__self:f,__source:{fileName:_,lineNumber:9,columnNumber:3}},p("title",{__self:f,__source:{fileName:_,lineNumber:10,columnNumber:5}},"Pattie Reaves, Web developer"),p("link",{rel:"shortcut icon",href:"/unicorn.png",__self:f,__source:{fileName:_,lineNumber:11,columnNumber:5}})),p("header",{"aria-label":"Site",__self:f,__source:{fileName:_,lineNumber:13,columnNumber:3}},p("h1",{id:"title",__self:f,__source:{fileName:_,lineNumber:14,columnNumber:5}},"Pattie Reaves, Web developer")),p("main",{"aria-labelledby":"title",__self:f,__source:{fileName:_,lineNumber:16,columnNumber:3}},p("h2",{className:"sr-only",id:"introduction",__self:f,__source:{fileName:_,lineNumber:17,columnNumber:5}},"Introduction"),p("section",{"aria-labelledby":"introduction",__self:f,__source:{fileName:_,lineNumber:18,columnNumber:5}},p("p",{__self:f,__source:{fileName:_,lineNumber:19,columnNumber:7}},"I'm a ",p("abbr",{title:"User Experience",__self:f,__source:{fileName:_,lineNumber:20,columnNumber:15}},"UX")," developer based in Tucson, Arizona \ud83c\udf35. I love to work at the intersection of usability and engineering.")),p("hr",{__self:f,__source:{fileName:_,lineNumber:23,columnNumber:5}}),p("h2",{id:"passions",__self:f,__source:{fileName:_,lineNumber:24,columnNumber:5}},"Things that light me up, \ud83c\udf86 in no particular order"),p("ul",{"aria-labelledby":"passions",__self:f,__source:{fileName:_,lineNumber:27,columnNumber:5}},p("li",{__self:f,__source:{fileName:_,lineNumber:28,columnNumber:7}},"Making the Web accessible and teaching others to do the same. (\ud83d\udea7 I will add to this section!)"),p("li",{__self:f,__source:{fileName:_,lineNumber:31,columnNumber:7}},"Agile software development, especially ",p("a",{href:"https://www.scruminc.com/scrum-training/",__self:f,__source:{fileName:_,lineNumber:32,columnNumber:48}},"scrum at scale"),"."),p("li",{__self:f,__source:{fileName:_,lineNumber:34,columnNumber:7}},p("a",{href:"http://twoscrumsup.com/991378/4981433-16-no-bosses%E2%80%A6",__self:f,__source:{fileName:_,lineNumber:35,columnNumber:9}},"Peer coaching, and helping others be excellent coaches.")),p("li",{__self:f,__source:{fileName:_,lineNumber:37,columnNumber:7}},"Doing cool stuff \u2728 using JavaScript (",p("a",{href:"https://github.com/pattiereaves?tab=overview&",__self:f,__source:{fileName:_,lineNumber:38,columnNumber:46}},"these days, it's mostly React"),")."),p("li",{__self:f,__source:{fileName:_,lineNumber:40,columnNumber:7}},"Journalism, democracy, and the success of local media especially. Early in my career I worked at ",p("a",{"aria-label":"The Sun Sentinel, where I worked first",href:"http://sunsentinel.com",__self:f,__source:{fileName:_,lineNumber:41,columnNumber:106}},"a")," ",p("a",{"aria-label":"The Sun Journal, where I worked next",href:"http://sunjournal.com",__self:f,__source:{fileName:_,lineNumber:41,columnNumber:197}},"few")," ",p("a",{"aria-label":"The Bangor Daily News, the newspaper I worked at most recently",href:"https://bangordailynews.com",__self:f,__source:{fileName:_,lineNumber:41,columnNumber:287}},"newspapers"),"."),p("li",{__self:f,__source:{fileName:_,lineNumber:43,columnNumber:7}},"Creating tools that enable journalists to do amazing work (and/or reach communities with their amazing work)."),p("li",{__self:f,__source:{fileName:_,lineNumber:46,columnNumber:7}},"Semi-related, being active in the ",p(c.a,{__self:f,__source:{fileName:_,lineNumber:47,columnNumber:43}})," WordPress community. WordPress was the first community where I felt truly welcome as a young developer, and that inclusiveness is what makes the project so strong. I'm a co-organizer of the ",p("a",{href:"https://www.meetup.com/Tucson-WordPress-Meetup/",__self:f,__source:{fileName:_,lineNumber:47,columnNumber:249}},"Tucson WordPress meetup group"),"."),p("li",{__self:f,__source:{fileName:_,lineNumber:49,columnNumber:7}},"Breaking down white supremacy and the patriarchy \u270a\u270a\ud83c\udfff\u270a\ud83c\udffe\u270a."),p("li",{__self:f,__source:{fileName:_,lineNumber:52,columnNumber:7}},"Endurance sports. I'm a ",p("abbr",{title:"Road Runners Club of America",__self:f,__source:{fileName:_,lineNumber:53,columnNumber:33}},"RRCA")," ",p("a",{href:"https://www.rrca.org/",__self:f,__source:{fileName:_,lineNumber:53,columnNumber:88}},"certified running coach")," and I coach with ",p("a",{href:"https://swet.run",__self:f,__source:{fileName:_,lineNumber:53,columnNumber:165}},"Southwest Endurance Training"),". It's my dream to complete an Ironman triathlon before 2025."),p("li",{__self:f,__source:{fileName:_,lineNumber:55,columnNumber:7}},"My six-year-old, ",p("a",{href:"https://twitter.com/pazzypunk/status/1245170021141102593",__self:f,__source:{fileName:_,lineNumber:56,columnNumber:26}},"who amazes me every day")," with her kindness.")),p("hr",{__self:f,__source:{fileName:_,lineNumber:59,columnNumber:5}}),p("footer",{"aria-label":"Site",__self:f,__source:{fileName:_,lineNumber:60,columnNumber:5}},p("h2",{id:"social",__self:f,__source:{fileName:_,lineNumber:61,columnNumber:7}},"Contact me"),p("ul",{"aria-labelledby":"social",className:"inline-list",__self:f,__source:{fileName:_,lineNumber:62,columnNumber:7}},p("li",{__self:f,__source:{fileName:_,lineNumber:63,columnNumber:9}},p("a",{href:"https://twitter.com/pazzypunk",__self:f,__source:{fileName:_,lineNumber:64,columnNumber:11}},p("span",{className:"sr-only",__self:f,__source:{fileName:_,lineNumber:65,columnNumber:13}},"Twitter - @pazzypunk"),p(l,{__self:f,__source:{fileName:_,lineNumber:66,columnNumber:13}}))),p("li",{__self:f,__source:{fileName:_,lineNumber:69,columnNumber:9}},p("a",{href:"https://github.com/pattiereaves",__self:f,__source:{fileName:_,lineNumber:70,columnNumber:11}},p("span",{className:"sr-only",__self:f,__source:{fileName:_,lineNumber:71,columnNumber:13}},"Github - @PattieReaves"),p(s.a,{__self:f,__source:{fileName:_,lineNumber:72,columnNumber:13}}))),p("li",{__self:f,__source:{fileName:_,lineNumber:75,columnNumber:9}},p("a",{href:"https://www.linkedin.com/in/pattiereaves/",__self:f,__source:{fileName:_,lineNumber:76,columnNumber:11}},p("span",{className:"sr-only",__self:f,__source:{fileName:_,lineNumber:77,columnNumber:13}},"LinkedIn - @PattieReaves"),p(s.b,{__self:f,__source:{fileName:_,lineNumber:78,columnNumber:13}}))),p("li",{__self:f,__source:{fileName:_,lineNumber:81,columnNumber:9}},p("a",{href:"mailto:pattie@pzunk.net",__self:f,__source:{fileName:_,lineNumber:82,columnNumber:11}},p("span",{className:"sr-only",__self:f,__source:{fileName:_,lineNumber:83,columnNumber:13}},"Email"),p(m.a,{__self:f,__source:{fileName:_,lineNumber:84,columnNumber:13}})))))))}},SksO:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},W8MJ:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},Xuae:function(e,t,r){"use strict";var n=r("RIqP"),o=r("lwsE"),a=r("W8MJ"),u=(r("PJYZ"),r("7W2i")),i=r("a1gu"),l=r("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return i(this,r)}}t.__esModule=!0,t.default=void 0;var c=r("q1tI"),m=function(e){u(r,e);var t=s(r);function r(e){var a;return o(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(c.Component);t.default=m},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},a1gu:function(e,t,r){var n=r("cDf5"),o=r("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])}},[["vlRD",0,1,3,5,4]]]);