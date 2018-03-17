!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/home/sk/git/inferno2/benchmarks/uibench",t(t.s=22)}([function(e,n,t){"use strict";function o(e){return null===e}function r(e){return!0===e}function i(e){return void 0===e}Object.defineProperty(n,"__esModule",{value:!0}),n.NO_OP="$NO_OP",n.ERROR_MSG="a runtime error occured! Use Inferno in development environment to find the error.",n.isBrowser=!("undefined"==typeof window||!window.document),n.toArray=function(e){return n.isArray(e)?e:e?[e]:e},n.isArray=Array.isArray,n.isStringOrNumber=function(e){var n=typeof e;return"string"===n||"number"===n},n.isNullOrUndef=function(e){return i(e)||o(e)},n.isInvalid=function(e){return o(e)||!1===e||r(e)||i(e)},n.isFunction=function(e){return"function"==typeof e},n.isString=function(e){return"string"==typeof e},n.isNumber=function(e){return"number"==typeof e},n.isNull=o,n.isTrue=r,n.isUndefined=i,n.isDefined=function(e){return void 0!==e},n.isObject=function(e){return"object"==typeof e},n.throwError=function(e){throw e||(e=n.ERROR_MSG),new Error("Inferno Error: "+e)},n.warning=function(e){console.error(e)},n.combineFrom=function(e,n){var t={};if(e)for(var o in e)t[o]=e[o];if(n)for(var o in n)t[o]=n[o];return t}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t(13);function i(e,n){e.appendChild(n)}n.EMPTY_OBJ={},n.LIFECYCLE=[],n.appendChild=i,n.insertOrAppend=function(e,n,t){o.isNullOrUndef(t)?i(e,n):e.insertBefore(n,t)},n.documentCreateElement=function(e,n){return!0===n?document.createElementNS(r.svgNS,e):document.createElement(e)},n.replaceChild=function(e,n,t){e.replaceChild(n,t)},n.removeChild=function(e,n){e.removeChild(n)},n.callAll=function(e){for(var n;void 0!==(n=e.shift());)n()}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=(t(8),"$");function i(e,n,t,o,r,i,l,a){return{childFlags:e,children:n,className:t,dom:null,flags:o,key:void 0===r?null:r,parentVNode:null,props:void 0===i?null:i,ref:void 0===l?null:l,type:a}}function l(e,t,o,r,l,a,u,s){var c=void 0===l?1:l,f=i(c,r,o,e,u,a,s,t),p=n.options.createVNode;return"function"==typeof p&&p(f),0===c&&d(f,f.children),f}function a(e,t,r,l,a){(2&e)>0&&(e=o.isDefined(t.prototype)&&o.isFunction(t.prototype.render)?4:8);var u=t.defaultProps;if(!o.isNullOrUndef(u))for(var s in r||(r={}),u)o.isUndefined(r[s])&&(r[s]=u[s]);if((8&e)>0){var c=t.defaultHooks;if(!o.isNullOrUndef(c))if(a)for(var s in c)o.isUndefined(a[s])&&(a[s]=c[s]);else a=c}var d=i(1,null,null,e,l,r,a,t),f=n.options.createVNode;return o.isFunction(f)&&f(d),d}function u(e,n){return i(1,o.isNullOrUndef(e)?"":e,null,16,n,null,null,null)}function s(e){var n,t=e.flags;if(14&t){var r=void 0,i=e.props;if(!o.isNull(i))for(var s in r={},i)r[s]=i[s];n=a(t,e.type,r,e.key,e.ref)}else if(481&t){var c=e.children;n=l(t,e.type,e.className,c,0,e.props,e.key,e.ref)}else 16&t?n=u(e.children,e.key):1024&t&&(n=e);return n}function c(e,n,t,i){for(var l=e.length;t<l;t++){var a=e[t];if(!o.isInvalid(a)){var d=i+r+t;if(o.isArray(a))c(a,n,0,d);else{if(o.isStringOrNumber(a))a=u(a,d);else{var f=a.key,p=o.isString(f)&&f[0]===r;o.isNull(a.dom)&&!p||(a=s(a)),o.isNull(f)||p?a.key=d:a.key=i+f}n.push(a)}}}}function d(e,n){var t,i=1;if(o.isInvalid(n))t=n;else if(o.isString(n))i=2,t=u(n);else if(o.isNumber(n))i=2,t=u(n+"");else if(o.isArray(n)){var l=n.length;if(0===l)t=null,i=1;else{(Object.isFrozen(n)||!0===n.$)&&(n=n.slice()),i=8;for(var a=0;a<l;a++){var d=n[a];if(o.isInvalid(d)||o.isArray(d)){c(n,t=t||n.slice(0,a),a,"");break}if(o.isStringOrNumber(d))(t=t||n.slice(0,a)).push(u(d,r+a));else{var f=d.key,p=o.isNull(d.dom),m=o.isNull(f),v=!m&&f[0]===r;!p||m||v?(t=t||n.slice(0,a),p&&!v||(d=s(d)),(m||v)&&(d.key=r+a),t.push(d)):t&&t.push(d)}}(t=t||n).$=!0}}else t=n,o.isNull(n.dom)||(t=s(n)),i=2;return e.children=t,e.childFlags=i,e}n.createVNode=l,n.createComponentVNode=a,n.createTextVNode=u,n.normalizeProps=function(e){var n=e.props;if(n){var t=e.flags;481&t&&(o.isDefined(n.children)&&o.isNullOrUndef(e.children)&&d(e,n.children),o.isDefined(n.className)&&(e.className=n.className||null,n.className=void 0)),o.isDefined(n.key)&&(e.key=n.key,n.key=void 0),o.isDefined(n.ref)&&(e.ref=8&t?o.combineFrom(e.ref,n.ref):n.ref,n.ref=void 0)}return e},n.directClone=s,n.createVoidVNode=function(){return u("",null)},n._normalizeVNodes=c,n.getFlagsForElementVnode=function(e){return"svg"===e?32:"input"===e?64:"select"===e?256:"textarea"===e?128:1},n.normalizeChildren=d,n.options={afterMount:null,afterRender:null,afterUpdate:null,beforeRender:null,beforeUnmount:null,createVNode:null,roots:[]}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(13),r=t(0),i=t(12),l=t(11),a=t(10),u=t(5);function s(e,n,t,o){var i=e.toLowerCase();if(r.isFunction(t)||r.isNullOrUndef(t)){var l=o[i];l&&l.wrapped||(o[i]=t)}else{var a=t.event;a&&r.isFunction(a)&&(o[i]=function(e,n){return function(t){e(n.data,t)}}(a,t))}}function c(e,n){switch(e){case"animationIterationCount":case"borderImageOutset":case"borderImageSlice":case"borderImageWidth":case"boxFlex":case"boxFlexGroup":case"boxOrdinalGroup":case"columnCount":case"fillOpacity":case"flex":case"flexGrow":case"flexNegative":case"flexOrder":case"flexPositive":case"flexShrink":case"floodOpacity":case"fontWeight":case"gridColumn":case"gridRow":case"lineClamp":case"lineHeight":case"opacity":case"order":case"orphans":case"stopOpacity":case"strokeDasharray":case"strokeDashoffset":case"strokeMiterlimit":case"strokeOpacity":case"strokeWidth":case"tabSize":case"widows":case"zIndex":case"zoom":return n;default:return n+"px"}}function d(e,n,t,a,d,f,p){switch(e){case"onClick":case"onDblClick":case"onFocusIn":case"onFocusOut":case"onKeyDown":case"onKeyPress":case"onKeyUp":case"onMouseDown":case"onMouseMove":case"onMouseUp":case"onSubmit":case"onTouchEnd":case"onTouchMove":case"onTouchStart":i.handleEvent(e,t,a);break;case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":return;case"allowfullscreen":case"autoFocus":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":a[e="autoFocus"===e?e.toLowerCase():e]=!!t;break;case"defaultChecked":case"value":case"volume":if(f&&"value"===e)return;var m=r.isNullOrUndef(t)?"":t;a[e]!==m&&(a[e]=m);break;case"dangerouslySetInnerHTML":var v=n&&n.__html||"",h=t&&t.__html||"";v!==h&&(r.isNullOrUndef(h)||l.isSameInnerHTML(a,h)||(r.isNull(p)||(12&p.childFlags?u.unmountAllChildren(p.children):2===p.childFlags&&u.unmount(p.children),p.children=null,p.childFlags=1),a.innerHTML=h));break;default:"o"===e[0]&&"n"===e[1]?s(e,0,t,a):r.isNullOrUndef(t)?a.removeAttribute(e):"style"===e?function(e,n,t){var o,i,l=t.style;if(r.isString(n))l.cssText=n;else if(r.isNullOrUndef(e)||r.isString(e))for(o in n)i=n[o],l[o]=r.isNumber(i)?c(o,i):i;else{for(o in n)(i=n[o])!==e[o]&&(l[o]=r.isNumber(i)?c(o,i):i);for(o in e)r.isNullOrUndef(n[o])&&(l[o]="")}}(n,t,a):d&&o.namespaces[e]?a.setAttributeNS(o.namespaces[e],e,t):a.setAttribute(e,t)}}n.patchEvent=s,n.getNumberStyleValue=c,n.patchProp=d,n.mountProps=function(e,n,t,o,r){var i=!1,l=(448&n)>0;for(var u in l&&(i=a.isControlledFormElement(t))&&a.addFormElementEventHandlers(n,o,t),t)d(u,null,t[u],o,r,i,null);l&&a.processElement(n,e,o,t,!0,i)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(2),r=t(0),i=t(1);function l(e,n){return r.isInvalid(e)?e=o.createVoidVNode():r.isStringOrNumber(e)?e=o.createTextVNode(e,null):(e.dom&&(e=o.directClone(e)),14&e.flags&&(e.parentVNode=n)),e}n.createClassComponentInstance=function(e,n,t,a){var u=new n(t,a);if(e.children=u,u.$V=e,u.$BS=!1,u.context=a,u.props===i.EMPTY_OBJ&&(u.props=t),u.$UN=!1,r.isFunction(u.componentWillMount)){if(u.$BR=!0,u.componentWillMount(),u.$PSS){var s=u.state,c=u.$PS;if(r.isNull(s))u.state=c;else for(var d in c)s[d]=c[d];u.$PSS=!1,u.$PS=null}u.$BR=!1}r.isFunction(o.options.beforeRender)&&o.options.beforeRender(u);var f,p=l(u.render(t,u.state,a),e);return r.isFunction(u.getChildContext)&&(f=u.getChildContext()),r.isNullOrUndef(f)?u.$CX=a:u.$CX=r.combineFrom(a,f),r.isFunction(o.options.afterRender)&&o.options.afterRender(u),u.$LI=p,u},n.handleComponentInput=l},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t(2),i=t(12),l=t(1);function a(e,n){u(e),o.isNull(n)||(l.removeChild(n,e.dom),e.dom=null)}function u(e){var n=e.flags;if(481&n){var t=e.ref,c=e.props;o.isFunction(t)&&t(null);var d=e.children,f=e.childFlags;if(12&f?s(d):2===f&&u(d),!o.isNull(c))for(var p in c)switch(p){case"onClick":case"onDblClick":case"onFocusIn":case"onFocusOut":case"onKeyDown":case"onKeyPress":case"onKeyUp":case"onMouseDown":case"onMouseMove":case"onMouseUp":case"onSubmit":case"onTouchEnd":case"onTouchMove":case"onTouchStart":i.handleEvent(p,null,e.dom)}}else if(14&n){var m=e.children;t=e.ref;4&n?(o.isFunction(r.options.beforeUnmount)&&r.options.beforeUnmount(e),o.isFunction(m.componentWillUnmount)&&m.componentWillUnmount(),o.isFunction(t)&&t(null),m.$UN=!0,u(m.$LI)):(!o.isNullOrUndef(t)&&o.isFunction(t.onComponentWillUnmount)&&t.onComponentWillUnmount(e.dom,e.props||l.EMPTY_OBJ),u(m))}else if(1024&n){d=e.children;!o.isNull(d)&&o.isObject(d)&&a(d,e.type)}}function s(e){for(var n=0,t=e.length;n<t;n++)u(e[n])}n.remove=a,n.unmount=u,n.unmountAllChildren=s,n.removeAllChildren=function(e,n){s(n),e.textContent=""}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t(1);function i(e,n,t){if(e[n]){var o=e[n];o.event?o.event(o.data,t):o(t)}else{var r=n.toLowerCase();e[r]&&e[r](t)}}n.createWrappedFunction=function(e,n){var t=function(t){t.stopPropagation();var l=this.$V;if(l){var a=l.props||r.EMPTY_OBJ,u=l.dom;if(o.isString(e))i(a,e,t);else for(var s=0;s<e.length;s++)i(a,e[s],t);if(o.isFunction(n)){var c=this.$V,d=c.props||r.EMPTY_OBJ;n(d,u,!1,c)}}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t(2),i=t(1),l=t(3),a=t(4);t(8);function u(e,n,t,o,i){var l=e.flags;return 481&l?c(e,n,t,o,i):14&l?f(e,n,t,o,i,(4&l)>0):512&l||16&l?s(e,n):1024&l?(u(e.children,e.type,t,o,!1),e.dom=s(r.createVoidVNode(),n)):void 0}function s(e,n){var t=e.dom=document.createTextNode(e.children);return o.isNull(n)||i.appendChild(n,t),t}function c(e,n,t,r,a){var s=e.flags,c=e.children,f=e.props,p=e.className,m=e.ref,h=e.childFlags;a=a||(32&s)>0;var C=i.documentCreateElement(e.type,a);if(e.dom=C,o.isNullOrUndef(p)||""===p||(a?C.setAttribute("class",p):C.className=p),o.isNull(n)||i.appendChild(n,C),0==(1&h)){var N=!0===a&&"foreignObject"!==e.type;2===h?u(c,C,t,r,N):12&h&&d(c,C,t,r,N)}return o.isNull(f)||l.mountProps(e,s,f,C,a),o.isFunction(m)&&v(C,m,t),C}function d(e,n,t,i,l){for(var a=0,s=e.length;a<s;a++){var c=e[a];o.isNull(c.dom)||(e[a]=c=r.directClone(c)),u(c,n,t,i,l)}}function f(e,n,t,r,l,s){var c,d=e.type,f=e.props||i.EMPTY_OBJ,v=e.ref;if(s){var h=a.createClassComponentInstance(e,d,f,r);e.dom=c=u(h.$LI,null,t,h.$CX,l),p(e,v,h,t),h.$UPD=!1}else{var C=a.handleComponentInput(d(f,r),e);e.children=C,e.dom=c=u(C,null,t,r,l),m(f,v,c,t)}return o.isNull(n)||i.appendChild(n,c),c}function p(e,n,t,i){o.isFunction(n)&&n(t);var l=o.isFunction(t.componentDidMount),a=r.options.afterMount,u=o.isFunction(a);(l||u)&&i.push(function(e,n,t,o,r){return function(){e.$UPD=!0,n&&t(o),r&&e.componentDidMount(),e.$UPD=!1}}(t,u,a,e,l))}function m(e,n,t,r){o.isNullOrUndef(n)||(o.isFunction(n.onComponentWillMount)&&n.onComponentWillMount(e),o.isFunction(n.onComponentDidMount)&&r.push(function(e,n,t){return function(){return e.onComponentDidMount(n,t)}}(n,t,e)))}function v(e,n,t){t.push(function(){return n(e)})}n.mount=u,n.mountText=s,n.mountElement=c,n.mountArrayChildren=d,n.mountComponent=f,n.mountClassComponentCallbacks=p,n.mountFunctionalComponentCallbacks=m,n.mountRef=v},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});t(0);n.validateVNodeElementChildren=function(e){},n.validateKeys=function(e){}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t(2),i=t(7),l=t(5),a=t(1),u=t(10),s=t(3),c=t(4);t(8);function d(e,n,t,o,r,u){l.unmount(e),a.replaceChild(t,i.mount(n,null,o,r,u),e.dom)}function f(e,n,t,r,i,l){if(e!==n){var u=0|n.flags;e.flags!==u||2048&u?d(e,n,t,r,i,l):481&u?p(e,n,t,r,i,l):14&u?function(e,n,t,r,i,l,u){var s=n.type,p=e.key,m=n.key;if(e.type!==s||p!==m)d(e,n,t,r,i,l);else{var h=n.props||a.EMPTY_OBJ;if(u){var C=e.children;C.$UPD=!0,v(C,C.state,n,h,t,r,i,l,!1,!1),C.$V=n,C.$UPD=!1}else{var N=!0,y=e.props,b=n.ref,g=!o.isNullOrUndef(b),O=e.children;if(n.dom=e.dom,n.children=O,g&&o.isFunction(b.onComponentShouldUpdate)&&(N=b.onComponentShouldUpdate(y,h)),!1!==N){g&&o.isFunction(b.onComponentWillUpdate)&&b.onComponentWillUpdate(y,h);var P=s(h,i);P!==o.NO_OP&&(P=c.handleComponentInput(P,n),f(O,P,t,r,i,l),n.children=P,n.dom=P.dom,g&&o.isFunction(b.onComponentDidUpdate)&&b.onComponentDidUpdate(y,h))}else 14&O.flags&&(O.parentVNode=n)}}}(e,n,t,r,i,l,(4&u)>0):16&u?function(e,n,t){var r,i=n.children,l=t.firstChild;o.isNull(l)?(t.textContent=i,r=t.firstChild):(r=e.dom,i!==e.children&&(r.nodeValue=i));n.dom=r}(e,n,t):512&u?n.dom=e.dom:function(e,n,t,r){var i=e.type,l=n.type,a=n.children;if(m(e.childFlags,n.childFlags,e.children,a,i,t,r,!1),n.dom=e.dom,i!==l&&!o.isInvalid(a)){var u=a.dom;i.removeChild(u),l.appendChild(u)}}(e,n,r,i)}}function p(e,n,t,r,l,c){var f=n.type;if(e.type!==f)d(e,n,t,r,l,c);else{var p=e.dom,v=n.flags,h=e.props,C=n.props,N=!1,y=!1,b=void 0;if(n.dom=p,c=c||(32&v)>0,h!==C){var g=h||a.EMPTY_OBJ;if((b=C||a.EMPTY_OBJ)!==a.EMPTY_OBJ)for(var O in(N=(448&v)>0)&&(y=u.isControlledFormElement(b)),b){var P=g[O],F=b[O];P!==F&&s.patchProp(O,P,F,p,c,y,e)}if(g!==a.EMPTY_OBJ)for(var O in g)b.hasOwnProperty(O)||o.isNullOrUndef(g[O])||s.patchProp(O,g[O],null,p,c,y,e)}var S=e.children,U=n.children,E=n.ref,$=e.className,k=n.className;S!==U&&m(e.childFlags,n.childFlags,S,U,p,r,l,c&&"foreignObject"!==f),N&&u.processElement(v,n,p,b,!1,y),$!==k&&(o.isNullOrUndef(k)?p.removeAttribute("class"):c?p.setAttribute("class",k):p.className=k),o.isFunction(E)&&e.ref!==E&&i.mountRef(p,E,r)}}function m(e,n,t,u,s,c,d,p){switch(e){case 2:switch(n){case 2:f(t,u,s,c,d,p);break;case 1:l.remove(t,s);break;default:l.remove(t,s),i.mountArrayChildren(u,s,c,d,p)}break;case 1:switch(n){case 2:i.mount(u,s,c,d,p);break;case 1:break;default:i.mountArrayChildren(u,s,c,d,p)}break;default:if(12&n){var m=t.length,v=u.length;0===m?v>0&&i.mountArrayChildren(u,s,c,d,p):0===v?l.removeAllChildren(s,t):8===n&&8===e?function(e,n,t,u,s,c,d,p){var m,v,h,C,N,y,b,g=d-1,O=p-1,P=0,F=0,S=e[P],U=n[F],E=e[g],$=n[O];U.dom&&(n[F]=U=r.directClone(U));$.dom&&(n[O]=$=r.directClone($));e:{for(;S.key===U.key;){if(f(S,U,t,u,s,c),F++,++P>g||F>O)break e;S=e[P],(U=n[F]).dom&&(n[F]=U=r.directClone(U))}for(;E.key===$.key;){if(f(E,$,t,u,s,c),O--,P>--g||F>O)break e;E=e[g],($=n[O]).dom&&(n[O]=$=r.directClone($))}}if(P>g){if(F<=O)for(N=(y=O+1)<p?n[y].dom:null;F<=O;)(b=n[F]).dom&&(n[F]=b=r.directClone(b)),F++,a.insertOrAppend(t,i.mount(b,null,u,s,c),N)}else if(F>O)for(;P<=g;)l.remove(e[P++],t);else{var k=g-P+1,_=O-F+1,V=new Array(_);for(m=0;m<_;m++)V[m]=-1;var M=!1,x=0,T=0;if(_<=4||k*_<=16){for(m=P;m<=g;m++)if(h=e[m],T<_)for(v=F;v<=O;v++)if(C=n[v],h.key===C.key){V[v-F]=m,x>v?M=!0:x=v,C.dom&&(n[v]=C=r.directClone(C)),f(h,C,t,u,s,c),T++,e[m]=null;break}}else{var I={};for(m=F;m<=O;m++)I[n[m].key]=m;for(m=P;m<=g;m++)h=e[m],T<_&&(v=I[h.key],o.isDefined(v)&&(C=n[v],V[v-F]=m,x>v?M=!0:x=v,C.dom&&(n[v]=C=r.directClone(C)),f(h,C,t,u,s,c),T++,e[m]=null))}if(k===d&&0===T)l.removeAllChildren(t,e),i.mountArrayChildren(n,t,u,s,c);else{for(m=k-T;m>0;)h=e[P++],o.isNull(h)||(l.remove(h,t),m--);if(M){var w=function(e){var n,t,o,r,i,l=e.slice(),a=[0],u=e.length;for(n=0;n<u;n++){var s=e[n];if(-1!==s){if(t=a[a.length-1],e[t]<s){l[n]=t,a.push(n);continue}for(o=0,r=a.length-1;o<r;)e[a[i=(o+r)/2|0]]<s?o=i+1:r=i;s<e[a[o]]&&(o>0&&(l[n]=a[o-1]),a[o]=n)}}o=a.length,r=a[o-1];for(;o-- >0;)a[o]=r,r=l[r];return a}(V);for(v=w.length-1,m=_-1;m>=0;m--)-1===V[m]?((b=n[x=m+F]).dom&&(n[x]=b=r.directClone(b)),y=x+1,a.insertOrAppend(t,i.mount(b,null,u,s,c),y<p?n[y].dom:null)):v<0||m!==w[v]?(b=n[x=m+F],y=x+1,a.insertOrAppend(t,b.dom,y<p?n[y].dom:null)):v--}else if(T!==_)for(m=_-1;m>=0;m--)-1===V[m]&&((b=n[x=m+F]).dom&&(n[x]=b=r.directClone(b)),y=x+1,a.insertOrAppend(t,i.mount(b,null,u,s,c),y<p?n[y].dom:null))}}}(t,u,s,c,d,p,m,v):function(e,n,t,o,a,u,s,c){for(var d=s>c?c:s,p=0;p<d;p++){var m=n[p];m.dom&&(m=n[p]=r.directClone(m)),f(e[p],m,t,o,a,u)}if(s<c)for(p=d;p<c;p++){var m=n[p];m.dom&&(m=n[p]=r.directClone(m)),i.mount(m,t,o,a,u)}else if(s>c)for(p=d;p<s;p++)l.remove(e[p],t)}(t,u,s,c,d,p,m,v)}else 1===n?l.removeAllChildren(s,t):(l.removeAllChildren(s,t),i.mount(u,s,c,d,p))}}function v(e,n,t,i,l,u,s,d,p,m){var v,h=e.state,C=e.props;if(t.children=e,!e.$UN){if(C!==i||i===a.EMPTY_OBJ){if(!m&&o.isFunction(e.componentWillReceiveProps)){if(e.$BR=!0,e.componentWillReceiveProps(i,s),e.$UN)return;e.$BR=!1}e.$PSS&&(n=o.combineFrom(n,e.$PS),e.$PSS=!1,e.$PS=null)}var N=o.isFunction(e.shouldComponentUpdate);if(p||!N||N&&e.shouldComponentUpdate(i,n,s)){o.isFunction(e.componentWillUpdate)&&(e.$BS=!0,e.componentWillUpdate(i,n,s),e.$BS=!1),e.props=i,e.state=n,e.context=s,o.isFunction(r.options.beforeRender)&&r.options.beforeRender(e),v=e.render(i,n,s),o.isFunction(r.options.afterRender)&&r.options.afterRender(e);var y=v!==o.NO_OP,b=void 0;if(o.isFunction(e.getChildContext)&&(b=e.getChildContext()),b=o.isNullOrUndef(b)?s:o.combineFrom(s,b),e.$CX=b,y)f(e.$LI,e.$LI=c.handleComponentInput(v,t),l,u,b,d),o.isFunction(e.componentDidUpdate)&&e.componentDidUpdate(C,h),o.isFunction(r.options.afterUpdate)&&r.options.afterUpdate(t)}else e.props=i,e.state=n,e.context=s;t.dom=e.$LI.dom}}n.patch=f,n.patchElement=p,n.updateClassComponent=v},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t(19),i=t(18),l=t(17);n.processElement=function(e,n,t,o,a,u){64&e?r.applyValueInput(o,t):256&e?i.applyValueSelect(o,t,a,n):128&e&&l.applyValueTextArea(o,t,a),u&&(t.$V=n)},n.addFormElementEventHandlers=function(e,n,t){64&e?r.inputEvents(n,t):256&e?i.selectEvents(n):128&e&&l.textAreaEvents(n,t)},n.isControlledFormElement=function(e){return e.type&&r.isCheckedType(e.type)?!o.isNullOrUndef(e.checked):!o.isNullOrUndef(e.value)}},function(e,n,t){"use strict";function o(e,n){var t=document.createElement("i");return t.innerHTML=n,t.innerHTML===e.innerHTML}Object.defineProperty(n,"__esModule",{value:!0}),n.isSameInnerHTML=o,n.isSamePropsInnerHTML=function(e,n){return Boolean(n&&n.dangerouslySetInnerHTML&&n.dangerouslySetInnerHTML.__html&&o(e,n.dangerouslySetInnerHTML.__html))}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r={},i={};function l(e){return e.substr(2).toLowerCase()}function a(){this.cancelBubble=!0,this.stopImmediatePropagation()}n.handleEvent=function(e,n,t){var u=r[e],s=t.$EV;n?(u||(i[e]=function(e){var n=function(n){var t=n.type,r="click"===t||"dblclick"===t;if(r&&0!==n.button)return n.preventDefault(),n.stopPropagation(),!1;n.stopPropagation=a;var i={dom:document};Object.defineProperty(n,"currentTarget",{configurable:!0,get:function(){return i.dom}}),function(e,n,t,r,i){for(var l=n;!o.isNull(l);){if(t&&l.disabled)return;var a=l.$EV;if(a){var u=a[r];if(u&&(i.dom=l,u.event?u.event(u.data,e):u(e),e.cancelBubble))return}l=l.parentNode}}(n,n.target,r,e,i)};return document.addEventListener(l(e),n),n}(e),r[e]=0),s||(s=t.$EV={}),s[e]||r[e]++,s[e]=n):s&&s[e]&&(r[e]--,1===u&&(document.removeEventListener(l(e),i[e]),i[e]=null),s[e]=n)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.xlinkNS="http://www.w3.org/1999/xlink",n.xmlNS="http://www.w3.org/XML/1998/namespace",n.svgNS="http://www.w3.org/2000/svg",n.namespaces={"xlink:actuate":n.xlinkNS,"xlink:arcrole":n.xlinkNS,"xlink:href":n.xlinkNS,"xlink:role":n.xlinkNS,"xlink:show":n.xlinkNS,"xlink:title":n.xlinkNS,"xlink:type":n.xlinkNS,"xml:base":n.xmlNS,"xml:lang":n.xmlNS,"xml:space":n.xmlNS}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t(2),i=t(7),l=t(1),a=t(4),u=t(11),s=t(3);function c(e,n,t,r,d){var f=e.flags;14&f?function(e,n,t,o,r,u){var s=e.type,d=e.ref,f=e.props||l.EMPTY_OBJ;if(u){var p=a.createClassComponentInstance(e,s,f,o);c(m=p.$LI,n,t,p.$CX,r),e.dom=m.dom,i.mountClassComponentCallbacks(e,d,p,t),p.$UPD=!1}else{var m;c(m=a.handleComponentInput(s(f,o),e),n,t,o,r),e.children=m,e.dom=m.dom,i.mountFunctionalComponentCallbacks(f,d,n,t)}}(e,n,t,r,d,(4&f)>0):481&f?function(e,n,t,r,a){var d=e.children,f=e.props,p=e.className,m=e.flags,v=e.ref;if(a=a||(32&m)>0,1!==n.nodeType||n.tagName.toLowerCase()!==e.type){var h=i.mountElement(e,null,t,r,a);e.dom=h,l.replaceChild(n.parentNode,h,n)}else{e.dom=n;var C=n.firstChild,N=e.childFlags;if(0==(1&N)){for(var y=null;C;)y=C.nextSibling,8===C.nodeType&&("!"===C.data?n.replaceChild(document.createTextNode(""),C):n.removeChild(C)),C=y;if(C=n.firstChild,2===N)o.isNull(C)?i.mount(d,n,t,r,a):(y=C.nextSibling,c(d,C,t,r,a),C=y);else if(12&N)for(var b=0,g=d.length;b<g;b++){var O=d[b];o.isNull(C)?i.mount(O,n,t,r,a):(y=C.nextSibling,c(O,C,t,r,a),C=y)}for(;C;)y=C.nextSibling,n.removeChild(C),C=y}else o.isNull(n.firstChild)||u.isSamePropsInnerHTML(n,f)||(n.textContent="",448&m&&(n.defaultValue=""));o.isNull(f)||s.mountProps(e,m,f,n,a),o.isNullOrUndef(p)?""!==n.className&&n.removeAttribute("class"):a?n.setAttribute("class",p):n.className=p,o.isFunction(v)&&i.mountRef(n,v,t)}}(e,n,t,r,d):16&f?function(e,n){if(3!==n.nodeType){var t=i.mountText(e,null);e.dom=t,l.replaceChild(n.parentNode,t,n)}else{var o=e.children;n.nodeValue!==o&&(n.nodeValue=o),e.dom=n}}(e,n):512&f?e.dom=n:o.throwError()}n.hydrate=function(e,n,t){var i=n.firstChild;if(!o.isNull(i))for(o.isInvalid(e)||c(e,i,l.LIFECYCLE,l.EMPTY_OBJ,!1),i=n.firstChild;i=i.nextSibling;)n.removeChild(i);l.LIFECYCLE.length>0&&l.callAll(l.LIFECYCLE),n.$V||r.options.roots.push(n),n.$V=e,o.isFunction(t)&&t()}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0);n.NO_OP=o.NO_OP;var r=t(2);n.createComponentVNode=r.createComponentVNode,n.createTextVNode=r.createTextVNode,n.createVNode=r.createVNode,n.directClone=r.directClone,n.getFlagsForElementVnode=r.getFlagsForElementVnode,n.normalizeProps=r.normalizeProps,n.options=r.options;var i=t(21);n.linkEvent=i.linkEvent;var l=t(20);n.createPortal=l.createPortal,n.createRenderer=l.createRenderer,n.render=l.render;var a=t(1);n.EMPTY_OBJ=a.EMPTY_OBJ;var u=t(16);n.Component=u.Component;var s=t(3);n.getNumberStyleValue=s.getNumberStyleValue;var c=t(14);n.hydrate=c.hydrate;var d=Object({NODE_ENV:"production"}).INFERNO_VERSION;n.version=d},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t(9),i=t(1),l="undefined"==typeof Promise?null:Promise.resolve(),a="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame;function u(e,n,t){o.isFunction(n)&&(n=n(e.state,e.props,e.context));var r,u=e.$PS;if(o.isNullOrUndef(u))e.$PS=n;else for(var c in n)u[c]=n[c];if(e.$PSS||e.$BR)e.$PSS=!0,e.$BR&&o.isFunction(t)&&i.LIFECYCLE.push(t.bind(e));else if(e.$UPD){var d=e.$QU;o.isNull(d)&&(d=e.$QU=[],r=function(e,n){return function(){e.$QU=null,e.$UPD=!0,s(e,!1,function(){for(var t=0,o=n.length;t<o;t++)n[t].call(e)}),e.$UPD=!1}}(e,d),l?l.then(r):a(r)),o.isFunction(t)&&d.push(t)}else e.$PSS=!0,e.$UPD=!0,s(e,!1,t),e.$UPD=!1}function s(e,n,t){if(!e.$UN){if(n||!e.$BR){e.$PSS=!1;var l=e.$PS,a=e.state,u=o.combineFrom(a,l),s=e.props,c=e.context;e.$PS=null;var d=e.$V,f=e.$LI,p=f.dom&&f.dom.parentNode;if(r.updateClassComponent(e,u,d,s,p,i.LIFECYCLE,c,(32&d.flags)>0,n,!0),e.$UN)return;if(0==(1024&e.$LI.flags))for(var m=e.$LI.dom;!o.isNull(d=d.parentVNode);)(14&d.flags)>0&&(d.dom=m);i.LIFECYCLE.length>0&&i.callAll(i.LIFECYCLE)}else e.state=e.$PS,e.$PS=null;o.isFunction(t)&&t.call(e)}}var c=function(){function e(e,n){this.state=null,this.$BR=!1,this.$BS=!0,this.$PSS=!1,this.$PS=null,this.$LI=null,this.$V=null,this.$UN=!1,this.$CX=null,this.$UPD=!0,this.$QU=null,this.props=e||i.EMPTY_OBJ,this.context=n||i.EMPTY_OBJ}return e.prototype.forceUpdate=function(e){this.$UN||s(this,!0,e)},e.prototype.setState=function(e,n){this.$UN||this.$BS||u(this,e,n)},e.prototype.render=function(e,n,t){},e.defaultProps=null,e}();n.Component=c},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t(6),i=r.createWrappedFunction("onInput",a),l=r.createWrappedFunction("onChange");function a(e,n,t){var r=e.value,i=n.value;if(o.isNullOrUndef(r)){if(t){var l=e.defaultValue;o.isNullOrUndef(l)||l===i||(n.defaultValue=l,n.value=l)}}else i!==r&&(n.defaultValue=r,n.value=r)}n.textAreaEvents=function(e,n){e.oninput=i,n.onChange&&(e.onchange=l)},n.applyValueTextArea=a},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t(1);function i(e,n){if("optgroup"===e.type){var t=e.children,o=e.childFlags;if(12&o)for(var r=0,i=t.length;r<i;r++)l(t[r],n);else 2===o&&l(t,n)}else l(e,n)}function l(e,n){var t=e.props||r.EMPTY_OBJ,i=e.dom;i.value=t.value,o.isArray(n)&&-1!==n.indexOf(t.value)||t.value===n?i.selected=!0:o.isNullOrUndef(n)&&o.isNullOrUndef(t.selected)||(i.selected=t.selected||!1)}var a=t(6).createWrappedFunction("onChange",u);function u(e,n,t,r){var l=Boolean(e.multiple);o.isNullOrUndef(e.multiple)||l===n.multiple||(n.multiple=l);var a=r.childFlags;if(0==(1&a)){var u=r.children,s=e.value;if(t&&o.isNullOrUndef(s)&&(s=e.defaultValue),12&a)for(var c=0,d=u.length;c<d;c++)i(u[c],s);else 2===a&&i(u,s)}}n.selectEvents=function(e){e.onchange=a},n.applyValueSelect=u},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t(6);function i(e){return"checkbox"===e||"radio"===e}n.isCheckedType=i;var l=r.createWrappedFunction("onInput",s),a=r.createWrappedFunction(["onClick","onChange"],s);function u(e){e.stopPropagation()}function s(e,n){var t=e.type,r=e.value,l=e.checked,a=e.multiple,u=e.defaultValue,s=!o.isNullOrUndef(r);t&&t!==n.type&&n.setAttribute("type",t),o.isNullOrUndef(a)||a===n.multiple||(n.multiple=a),o.isNullOrUndef(u)||s||(n.defaultValue=u+""),i(t)?(s&&(n.value=r),o.isNullOrUndef(l)||(n.checked=l)):s&&n.value!==r?(n.defaultValue=r,n.value=r):o.isNullOrUndef(l)||(n.checked=l)}u.wrapped=!0,n.inputEvents=function(e,n){i(n.type)?(e.onchange=a,e.onclick=u):e.oninput=l},n.applyValueInput=s},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),r=t(2),i=t(14),l=t(7),a=t(9),u=t(5),s=t(1),c=r.options.roots;o.isBrowser&&document.body;function d(e,n,t){if(e!==o.NO_OP){var d,f,p=c.length;for(f=0;f<p;f++)if(c[f]===n){d=n.$V;break}return o.isUndefined(d)?o.isInvalid(e)||(e.dom&&(e=r.directClone(e)),o.isNull(n.firstChild)?(l.mount(e,n,s.LIFECYCLE,s.EMPTY_OBJ,!1),n.$V=e,c.push(n)):i.hydrate(e,n),d=e):o.isNullOrUndef(e)?(u.remove(d,n),c.splice(f,1)):(e.dom&&(e=r.directClone(e)),a.patch(d,e,n,s.LIFECYCLE,s.EMPTY_OBJ,!1),d=n.$V=e),s.LIFECYCLE.length>0&&s.callAll(s.LIFECYCLE),o.isFunction(t)&&t(),d&&14&d.flags?d.children:void 0}}n.render=d,n.createRenderer=function(e){return function(n,t){e||(e=n),d(t,e)}},n.createPortal=function(e,n){return r.createVNode(1024,n,null,e,0,null,o.isInvalid(e)?null:e.key,null)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(0);n.linkEvent=function(e,n){return o.isFunction(n)?{data:e,event:n}:null}},function(e,n,t){"use strict";t(15);var o,r=t(15);function i(e){var n=e.children;return(0,r.createVNode)(1,"li","TreeLeaf",(0,r.createTextVNode)(n),2)}function l(e,n){return e!==n}function a(e){for(var n=e.data,t=n.children.length,o=new Array(t),u=0;u<t;u++){var s=n.children[u],c=s.id;s.container?o[u]=(0,r.createComponentVNode)(2,a,{data:s},c,{onComponentShouldUpdate:l}):o[u]=(0,r.createComponentVNode)(2,i,{children:c},c,{onComponentShouldUpdate:l})}return(0,r.createVNode)(1,"ul","TreeNode",o,8)}function u(e){var n=e.data,t=n.time%10,o="border-radius:"+t+"px;background:rgba(0,0,0,"+(.5+t/10)+")";return(0,r.createVNode)(1,"div","AnimBox",null,1,{"data-id":n.id,style:o})}function s(e,n){console.log("Clicked",e),n.stopPropagation()}function c(e){var n=e.children;return(0,r.createVNode)(1,"td","TableCell",(0,r.createTextVNode)(n),2,{onClick:(0,r.linkEvent)(n,s)})}function d(e){var n=e.data,t="TableRow";n.active&&(t="TableRow active");var o=n.props,i=o.length+1,a=new Array(i);a[0]=(0,r.createComponentVNode)(2,c,{children:"#"+n.id},null,{onComponentShouldUpdate:l});for(var u=1;u<i;u++)a[u]=(0,r.createComponentVNode)(2,c,{children:o[u-1]},null,{onComponentShouldUpdate:l});return(0,r.createVNode)(1,"tr",t,a,4,{"data-id":n.id})}function f(e){if(e===o)return r.NO_OP;o=e;var n,t=e.location;return"table"===t?n=function(e){for(var n=e.items,t=n.length,o=new Array(t),i=0;i<t;i++){var a=n[i];o[i]=(0,r.createComponentVNode)(2,d,{data:a,children:a},a.id,{onComponentShouldUpdate:l})}return(0,r.createVNode)(1,"table","Table",o,8)}(e.table):"anim"===t?n=function(e){for(var n=e.items,t=n.length,o=new Array(t),i=0;i<t;i++){var a=n[i];o[i]=(0,r.createComponentVNode)(2,u,{data:a},a.id,{onComponentShouldUpdate:l})}return(0,r.createVNode)(1,"div","Anim",o,8)}(e.anim):"tree"===t&&(n=function(e){return(0,r.createVNode)(1,"div","Tree",(0,r.createComponentVNode)(2,a,{data:e.root},null,{onComponentShouldUpdate:l}),2)}(e.tree)),(0,r.createVNode)(1,"div","Main",n,2)}uibench.init("Inferno"),document.addEventListener("DOMContentLoaded",function(e){var n=document.querySelector("#App");uibench.run(function(e){(0,r.render)(f(e),n)},function(e){(0,r.render)((0,r.createVNode)(1,"pre",null,JSON.stringify(e,null," "),0),n)})})}]);