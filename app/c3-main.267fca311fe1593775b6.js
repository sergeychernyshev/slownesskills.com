webpackJsonp([1],{183:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(0),n=function(e){return e&&e.__esModule?e:{default:e}}(a),r=l(45);t.default=function(){return n.default.createElement("div",{className:"container-fluid"},n.default.createElement("div",{className:"page-header"},n.default.createElement("h2",null,n.default.createElement(r.Link,{to:"/"},"Slowness Kills")," | About")),n.default.createElement("div",{className:"row"},n.default.createElement("div",{className:"col-md-12"},"If you build slow sites, you kill people's time")))}},184:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(0),n=function(e){return e&&e.__esModule?e:{default:e}}(a),r=l(7),u=function(e){var t=(new Date).getFullYear();return n.default.createElement("div",null,e.children,n.default.createElement("div",{className:"row",style:{borderTop:"1px solid silver",marginTop:"2em",padding:"1.5em"}},n.default.createElement("div",{className:"col-xs-12"},"© Slowness Kills 2016-",t)))};u.propTypes={children:r.element.isRequired},t.default=u},185:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(0),n=function(e){return e&&e.__esModule?e:{default:e}}(a),r=function(){return n.default.createElement("p",null,"404 Not Found")};t.default=r},186:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){var l={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(l[a]=e[a]);return l}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},d=l(0),c=a(d),f=l(45),m=l(73),p=a(m),v=l(114),h=a(v),E=l(7);l(396);var b=h.default.Handle,y=function(e){var t=e.value,l=e.dragging,a=e.index,n=o(e,["value","dragging","index"]);return c.default.createElement(p.default,{prefixCls:"rc-slider-tooltip",overlay:t,visible:l,placement:"top",key:a},c.default.createElement(b,i({value:t},n)))};y.defaultProps={value:0,dragging:!1,index:0},y.defaultProps={dragging:!1},y.propTypes={value:E.number.isRequired,dragging:E.bool,index:E.number.isRequired};var g=function(e){function t(e){n(this,t);var l=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={views:1e7,slowness:10},l.viewSliderChange=l.viewSliderChange.bind(l),l.slownessSliderChange=l.slownessSliderChange.bind(l),l}return u(t,e),s(t,[{key:"viewSliderChange",value:function(e){this.setState({views:e})}},{key:"slownessSliderChange",value:function(e){this.setState({slowness:e})}},{key:"render",value:function(){var e=12*this.state.views*this.state.slowness/252288e4,t=Math.round(10*e)/10,l=void 0;l=0===this.state.views?c.default.createElement("span",{style:{fontSize:"xx-large"}},"Speed doesn't matter if nobody looks at your site"):t>=1&&t<2?c.default.createElement("span",{style:{fontSize:"xx-large"}},"You kill",c.default.createElement("br",null),c.default.createElement("b",null,"one person"),c.default.createElement("br",null),"per year"):t>=2?c.default.createElement("span",{style:{fontSize:"xx-large"}},"You kill",c.default.createElement("br",null),c.default.createElement("b",null,Math.round(e)," people"),c.default.createElement("br",null),"per year"):e>.01?c.default.createElement("span",{style:{fontSize:"xx-large"}},"You kill",c.default.createElement("br",null),c.default.createElement("b",null,"one person"),c.default.createElement("br",null),"every ",c.default.createElement("b",null,Math.round(10/e)/10," years")):c.default.createElement("span",{style:{fontSize:"xx-large"}},"Your site seems to be fast enough for people to survive");var a=void 0;return a=this.state.views>=1e9?c.default.createElement("b",null,Math.round(this.state.views/1e7)/10,"B"):this.state.views>=1e6?c.default.createElement("b",null,Math.round(this.state.views/1e5)/10,"M"):c.default.createElement("b",null,this.state.views),c.default.createElement("div",{className:"container-fluid"},c.default.createElement("div",{className:"page-header"},c.default.createElement("h2",null,"Slowness Kills | ",c.default.createElement(f.Link,{to:"/about"},"About"))),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-md-4"},c.default.createElement("div",{className:"well",style:{textAlign:"center"}},c.default.createElement("p",{style:{fontSize:"xx-large"}},"Monthly Page Views",c.default.createElement("br",null),a),c.default.createElement(h.default,{step:1e6,defaultValue:1e6,value:this.state.views,min:0,max:1e8,onChange:this.viewSliderChange,handle:y}))),c.default.createElement("div",{className:"col-md-4"},c.default.createElement("div",{className:"well",style:{textAlign:"center"}},c.default.createElement("p",{style:{fontSize:"xx-large"}},"Page Load Time",c.default.createElement("br",null),c.default.createElement("b",null,this.state.slowness," seconds")),c.default.createElement(h.default,{step:.1,defaultValue:10,value:this.state.slowness,min:.1,max:30,onChange:this.slownessSliderChange,handle:y}))),c.default.createElement("div",{className:"col-md-4"},c.default.createElement("div",{className:"well",style:{textAlign:"center"}},l))))}}]),t}(c.default.Component);t.default=g},256:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var n=l(0),r=a(n),u=l(13),o=l(45),s=l(184),i=a(s),d=l(186),c=a(d),f=l(183),m=a(f),p=l(185),v=a(p);(0,u.render)(r.default.createElement(o.Router,{history:o.browserHistory,onUpdate:function(){return window.scrollTo(0,0)}},r.default.createElement(o.Route,{path:"/",component:i.default},r.default.createElement(o.IndexRoute,{component:c.default}),r.default.createElement(o.Route,{path:"/index.html",component:c.default}),r.default.createElement(o.Route,{path:"/about",component:m.default}),r.default.createElement(o.Route,{path:"*",component:v.default}))),document.getElementById("app"))},396:function(e,t){}},[256]);
//# sourceMappingURL=c3-main.267fca311fe1593775b6.js.map