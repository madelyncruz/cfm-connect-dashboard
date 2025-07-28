import{g as getDefaultExportFromCjs,r as requireScheduler,T as TZDate,a as addDays,b as addMonths,d as addWeeks,e as addYears,f as differenceInCalendarDays,h as differenceInCalendarMonths,i as eachMonthOfInterval,j as endOfISOWeek,k as endOfMonth,l as endOfWeek,m as endOfYear,n as format$1,o as getISOWeek,p as getMonth,q as getYear,s as getWeek,t as isAfter,u as isBefore,v as isDate,w as isSameDay,x as isSameMonth,y as isSameYear,z as max,A as min,B as setMonth,C as setYear,D as startOfDay,E as startOfISOWeek,F as startOfMonth,G as startOfWeek,H as startOfYear,I as enUS,_ as _objectWithoutProperties,J as _slicedToArray,K as _objectSpread2,L as createCache,M as getRegisteredStyles,N as serializeStyles,O as registerStyles,P as insertStyles,Q as _defineProperty,R as _typeof,S as _extends,U as autoUpdate,V as _taggedTemplateLiteral,W as _inherits,X as _createSuper,Y as _createClass,Z as _classCallCheck,$ as _toConsumableArray,a0 as memoizeOne,a1 as isPropValid,a2 as clsx,a3 as require$$1,a4 as requirePropTypes,a5 as _inheritsLoose,a6 as _objectWithoutPropertiesLoose,a7 as createPopper,a8 as requireJquery}from"./vendor.DnVP8xO7.js";function _mergeNamespaces(n,l){for(var o=0;o<l.length;o++){const s=l[o];if(typeof s!="string"&&!Array.isArray(s)){for(const a in s)if(a!=="default"&&!(a in n)){const c=Object.getOwnPropertyDescriptor(s,a);c&&Object.defineProperty(n,a,c.get?c:{enumerable:!0,get:()=>s[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var jsxRuntime={exports:{}},reactJsxRuntime_production_min={},react={exports:{}},react_production_min={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReact_production_min;function requireReact_production_min(){if(hasRequiredReact_production_min)return react_production_min;hasRequiredReact_production_min=1;var n=Symbol.for("react.element"),l=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function C(T){return T===null||typeof T!="object"?null:(T=y&&T[y]||T["@@iterator"],typeof T=="function"?T:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function k(T,K,ue){this.props=T,this.context=K,this.refs=A,this.updater=ue||D}k.prototype.isReactComponent={},k.prototype.setState=function(T,K){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,K,"setState")},k.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function R(){}R.prototype=k.prototype;function W(T,K,ue){this.props=T,this.context=K,this.refs=A,this.updater=ue||D}var L=W.prototype=new R;L.constructor=W,M(L,k.prototype),L.isPureReactComponent=!0;var x=Array.isArray,E=Object.prototype.hasOwnProperty,O={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function V(T,K,ue){var pe,fe={},ye=null,we=null;if(K!=null)for(pe in K.ref!==void 0&&(we=K.ref),K.key!==void 0&&(ye=""+K.key),K)E.call(K,pe)&&!B.hasOwnProperty(pe)&&(fe[pe]=K[pe]);var he=arguments.length-2;if(he===1)fe.children=ue;else if(1<he){for(var Me=Array(he),Ve=0;Ve<he;Ve++)Me[Ve]=arguments[Ve+2];fe.children=Me}if(T&&T.defaultProps)for(pe in he=T.defaultProps,he)fe[pe]===void 0&&(fe[pe]=he[pe]);return{$$typeof:n,type:T,key:ye,ref:we,props:fe,_owner:O.current}}function q(T,K){return{$$typeof:n,type:T.type,key:K,ref:T.ref,props:T.props,_owner:T._owner}}function S(T){return typeof T=="object"&&T!==null&&T.$$typeof===n}function z(T){var K={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(ue){return K[ue]})}var te=/\/+/g;function J(T,K){return typeof T=="object"&&T!==null&&T.key!=null?z(""+T.key):K.toString(36)}function ge(T,K,ue,pe,fe){var ye=typeof T;(ye==="undefined"||ye==="boolean")&&(T=null);var we=!1;if(T===null)we=!0;else switch(ye){case"string":case"number":we=!0;break;case"object":switch(T.$$typeof){case n:case l:we=!0}}if(we)return we=T,fe=fe(we),T=pe===""?"."+J(we,0):pe,x(fe)?(ue="",T!=null&&(ue=T.replace(te,"$&/")+"/"),ge(fe,K,ue,"",function(Ve){return Ve})):fe!=null&&(S(fe)&&(fe=q(fe,ue+(!fe.key||we&&we.key===fe.key?"":(""+fe.key).replace(te,"$&/")+"/")+T)),K.push(fe)),1;if(we=0,pe=pe===""?".":pe+":",x(T))for(var he=0;he<T.length;he++){ye=T[he];var Me=pe+J(ye,he);we+=ge(ye,K,ue,Me,fe)}else if(Me=C(T),typeof Me=="function")for(T=Me.call(T),he=0;!(ye=T.next()).done;)ye=ye.value,Me=pe+J(ye,he++),we+=ge(ye,K,ue,Me,fe);else if(ye==="object")throw K=String(T),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return we}function ne(T,K,ue){if(T==null)return T;var pe=[],fe=0;return ge(T,pe,"","",function(ye){return K.call(ue,ye,fe++)}),pe}function Y(T){if(T._status===-1){var K=T._result;K=K(),K.then(function(ue){(T._status===0||T._status===-1)&&(T._status=1,T._result=ue)},function(ue){(T._status===0||T._status===-1)&&(T._status=2,T._result=ue)}),T._status===-1&&(T._status=0,T._result=K)}if(T._status===1)return T._result.default;throw T._result}var H={current:null},X={transition:null},ae={ReactCurrentDispatcher:H,ReactCurrentBatchConfig:X,ReactCurrentOwner:O};function ee(){throw Error("act(...) is not supported in production builds of React.")}return react_production_min.Children={map:ne,forEach:function(T,K,ue){ne(T,function(){K.apply(this,arguments)},ue)},count:function(T){var K=0;return ne(T,function(){K++}),K},toArray:function(T){return ne(T,function(K){return K})||[]},only:function(T){if(!S(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},react_production_min.Component=k,react_production_min.Fragment=o,react_production_min.Profiler=a,react_production_min.PureComponent=W,react_production_min.StrictMode=s,react_production_min.Suspense=h,react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,react_production_min.act=ee,react_production_min.cloneElement=function(T,K,ue){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var pe=M({},T.props),fe=T.key,ye=T.ref,we=T._owner;if(K!=null){if(K.ref!==void 0&&(ye=K.ref,we=O.current),K.key!==void 0&&(fe=""+K.key),T.type&&T.type.defaultProps)var he=T.type.defaultProps;for(Me in K)E.call(K,Me)&&!B.hasOwnProperty(Me)&&(pe[Me]=K[Me]===void 0&&he!==void 0?he[Me]:K[Me])}var Me=arguments.length-2;if(Me===1)pe.children=ue;else if(1<Me){he=Array(Me);for(var Ve=0;Ve<Me;Ve++)he[Ve]=arguments[Ve+2];pe.children=he}return{$$typeof:n,type:T.type,key:fe,ref:ye,props:pe,_owner:we}},react_production_min.createContext=function(T){return T={$$typeof:f,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:c,_context:T},T.Consumer=T},react_production_min.createElement=V,react_production_min.createFactory=function(T){var K=V.bind(null,T);return K.type=T,K},react_production_min.createRef=function(){return{current:null}},react_production_min.forwardRef=function(T){return{$$typeof:m,render:T}},react_production_min.isValidElement=S,react_production_min.lazy=function(T){return{$$typeof:_,_payload:{_status:-1,_result:T},_init:Y}},react_production_min.memo=function(T,K){return{$$typeof:g,type:T,compare:K===void 0?null:K}},react_production_min.startTransition=function(T){var K=X.transition;X.transition={};try{T()}finally{X.transition=K}},react_production_min.unstable_act=ee,react_production_min.useCallback=function(T,K){return H.current.useCallback(T,K)},react_production_min.useContext=function(T){return H.current.useContext(T)},react_production_min.useDebugValue=function(){},react_production_min.useDeferredValue=function(T){return H.current.useDeferredValue(T)},react_production_min.useEffect=function(T,K){return H.current.useEffect(T,K)},react_production_min.useId=function(){return H.current.useId()},react_production_min.useImperativeHandle=function(T,K,ue){return H.current.useImperativeHandle(T,K,ue)},react_production_min.useInsertionEffect=function(T,K){return H.current.useInsertionEffect(T,K)},react_production_min.useLayoutEffect=function(T,K){return H.current.useLayoutEffect(T,K)},react_production_min.useMemo=function(T,K){return H.current.useMemo(T,K)},react_production_min.useReducer=function(T,K,ue){return H.current.useReducer(T,K,ue)},react_production_min.useRef=function(T){return H.current.useRef(T)},react_production_min.useState=function(T){return H.current.useState(T)},react_production_min.useSyncExternalStore=function(T,K,ue){return H.current.useSyncExternalStore(T,K,ue)},react_production_min.useTransition=function(){return H.current.useTransition()},react_production_min.version="18.3.1",react_production_min}var hasRequiredReact;function requireReact(){return hasRequiredReact||(hasRequiredReact=1,react.exports=requireReact_production_min()),react.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReactJsxRuntime_production_min;function requireReactJsxRuntime_production_min(){if(hasRequiredReactJsxRuntime_production_min)return reactJsxRuntime_production_min;hasRequiredReactJsxRuntime_production_min=1;var n=requireReact(),l=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(m,h,g){var _,y={},C=null,D=null;g!==void 0&&(C=""+g),h.key!==void 0&&(C=""+h.key),h.ref!==void 0&&(D=h.ref);for(_ in h)s.call(h,_)&&!c.hasOwnProperty(_)&&(y[_]=h[_]);if(m&&m.defaultProps)for(_ in h=m.defaultProps,h)y[_]===void 0&&(y[_]=h[_]);return{$$typeof:l,type:m,key:C,ref:D,props:y,_owner:a.current}}return reactJsxRuntime_production_min.Fragment=o,reactJsxRuntime_production_min.jsx=f,reactJsxRuntime_production_min.jsxs=f,reactJsxRuntime_production_min}var hasRequiredJsxRuntime;function requireJsxRuntime(){return hasRequiredJsxRuntime||(hasRequiredJsxRuntime=1,jsxRuntime.exports=requireReactJsxRuntime_production_min()),jsxRuntime.exports}var jsxRuntimeExports=requireJsxRuntime(),reactExports=requireReact();const React=getDefaultExportFromCjs(reactExports),React$1=_mergeNamespaces({__proto__:null,default:React},[reactExports]);var client={},reactDom={exports:{}},reactDom_production_min={};/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReactDom_production_min;function requireReactDom_production_min(){if(hasRequiredReactDom_production_min)return reactDom_production_min;hasRequiredReactDom_production_min=1;var n=requireReact(),l=requireScheduler();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function c(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(a[e]=t,e=0;e<t.length;e++)s.add(t[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},y={};function C(e){return h.call(y,e)?!0:h.call(_,e)?!1:g.test(e)?y[e]=!0:(_[e]=!0,!1)}function D(e,t,r,u){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return u?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function M(e,t,r,u){if(t===null||typeof t>"u"||D(e,t,r,u))return!0;if(u)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function A(e,t,r,u,d,p,v){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=p,this.removeEmptyString=v}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){k[e]=new A(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];k[t]=new A(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){k[e]=new A(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){k[e]=new A(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){k[e]=new A(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){k[e]=new A(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){k[e]=new A(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){k[e]=new A(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){k[e]=new A(e,5,!1,e.toLowerCase(),null,!1,!1)});var R=/[\-:]([a-z])/g;function W(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(R,W);k[t]=new A(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(R,W);k[t]=new A(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(R,W);k[t]=new A(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){k[e]=new A(e,1,!1,e.toLowerCase(),null,!1,!1)}),k.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){k[e]=new A(e,1,!1,e.toLowerCase(),null,!0,!0)});function L(e,t,r,u){var d=k.hasOwnProperty(t)?k[t]:null;(d!==null?d.type!==0:u||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(M(t,r,d,u)&&(r=null),u||d===null?C(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):d.mustUseProperty?e[d.propertyName]=r===null?d.type===3?!1:"":r:(t=d.attributeName,u=d.attributeNamespace,r===null?e.removeAttribute(t):(d=d.type,r=d===3||d===4&&r===!0?"":""+r,u?e.setAttributeNS(u,t,r):e.setAttribute(t,r))))}var x=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,E=Symbol.for("react.element"),O=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),z=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),H=Symbol.for("react.offscreen"),X=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,T;function K(e){if(T===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);T=t&&t[1]||""}return`
`+T+e}var ue=!1;function pe(e,t){if(!e||ue)return"";ue=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(U){var u=U}Reflect.construct(e,[],t)}else{try{t.call()}catch(U){u=U}e.call(t.prototype)}else{try{throw Error()}catch(U){u=U}e()}}catch(U){if(U&&u&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),p=u.stack.split(`
`),v=d.length-1,b=p.length-1;1<=v&&0<=b&&d[v]!==p[b];)b--;for(;1<=v&&0<=b;v--,b--)if(d[v]!==p[b]){if(v!==1||b!==1)do if(v--,b--,0>b||d[v]!==p[b]){var I=`
`+d[v].replace(" at new "," at ");return e.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",e.displayName)),I}while(1<=v&&0<=b);break}}}finally{ue=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?K(e):""}function fe(e){switch(e.tag){case 5:return K(e.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return e=pe(e.type,!1),e;case 11:return e=pe(e.type.render,!1),e;case 1:return e=pe(e.type,!0),e;default:return""}}function ye(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case O:return"Portal";case q:return"Profiler";case V:return"StrictMode";case J:return"Suspense";case ge:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case z:return(e.displayName||"Context")+".Consumer";case S:return(e._context.displayName||"Context")+".Provider";case te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ne:return t=e.displayName||null,t!==null?t:ye(e.type)||"Memo";case Y:t=e._payload,e=e._init;try{return ye(e(t))}catch{}}return null}function we(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(t);case 8:return t===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function he(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Me(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ve(e){var t=Me(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),u=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var d=r.get,p=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return d.call(this)},set:function(v){u=""+v,p.call(this,v)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return u},setValue:function(v){u=""+v},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function it(e){e._valueTracker||(e._valueTracker=Ve(e))}function We(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),u="";return e&&(u=Me(e)?e.checked?"true":"false":e.value),e=u,e!==r?(t.setValue(e),!0):!1}function st(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ye(e,t){var r=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Xe(e,t){var r=t.defaultValue==null?"":t.defaultValue,u=t.checked!=null?t.checked:t.defaultChecked;r=he(t.value!=null?t.value:r),e._wrapperState={initialChecked:u,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Lt(e,t){t=t.checked,t!=null&&L(e,"checked",t,!1)}function le(e,t){Lt(e,t);var r=he(t.value),u=t.type;if(r!=null)u==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(u==="submit"||u==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?me(e,t.type,r):t.hasOwnProperty("defaultValue")&&me(e,t.type,he(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function re(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var u=t.type;if(!(u!=="submit"&&u!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function me(e,t,r){(t!=="number"||st(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Se=Array.isArray;function Re(e,t,r,u){if(e=e.options,t){t={};for(var d=0;d<r.length;d++)t["$"+r[d]]=!0;for(r=0;r<e.length;r++)d=t.hasOwnProperty("$"+e[r].value),e[r].selected!==d&&(e[r].selected=d),d&&u&&(e[r].defaultSelected=!0)}else{for(r=""+he(r),t=null,d=0;d<e.length;d++){if(e[d].value===r){e[d].selected=!0,u&&(e[d].defaultSelected=!0);return}t!==null||e[d].disabled||(t=e[d])}t!==null&&(t.selected=!0)}}function be(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xe(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(o(92));if(Se(r)){if(1<r.length)throw Error(o(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:he(r)}}function et(e,t){var r=he(t.value),u=he(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),u!=null&&(e.defaultValue=""+u)}function ft(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function mt(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wt(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?mt(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var dn,qt=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,u,d){MSApp.execUnsafeLocalFunction(function(){return e(t,r,u,d)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(dn=dn||document.createElement("div"),dn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=dn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bt(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ge={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xt=["Webkit","ms","Moz","O"];Object.keys(Ge).forEach(function(e){Xt.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ge[t]=Ge[e]})});function Dt(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ge.hasOwnProperty(e)&&Ge[e]?(""+t).trim():t+"px"}function Ht(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var u=r.indexOf("--")===0,d=Dt(r,t[r],u);r==="float"&&(r="cssFloat"),u?e.setProperty(r,d):e[r]=d}}var ml=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $t(e,t){if(t){if(ml[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function In(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ee=null;function Pe(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ke=null,rt=null,$e=null;function en(e){if(e=jl(e)){if(typeof ke!="function")throw Error(o(280));var t=e.stateNode;t&&(t=yr(t),ke(e.stateNode,e.type,t))}}function ze(e){rt?$e?$e.push(e):$e=[e]:rt=e}function ht(){if(rt){var e=rt,t=$e;if($e=rt=null,en(e),t)for(e=0;e<t.length;e++)en(t[e])}}function De(e,t){return e(t)}function Ce(){}var _t=!1;function Gl(e,t,r){if(_t)return e(t,r);_t=!0;try{return De(e,t,r)}finally{_t=!1,(rt!==null||$e!==null)&&(Ce(),ht())}}function tn(e,t){var r=e.stateNode;if(r===null)return null;var u=yr(r);if(u===null)return null;r=u[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(e=e.type,u=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!u;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(o(231,t,typeof r));return r}var Pn=!1;if(m)try{var hl={};Object.defineProperty(hl,"passive",{get:function(){Pn=!0}}),window.addEventListener("test",hl,hl),window.removeEventListener("test",hl,hl)}catch{Pn=!1}function vu(e,t,r,u,d,p,v,b,I){var U=Array.prototype.slice.call(arguments,3);try{t.apply(r,U)}catch(Z){this.onError(Z)}}var gl=!1,Ql=null,Jl=!1,ra=null,_u={onError:function(e){gl=!0,Ql=e}};function yu(e,t,r,u,d,p,v,b,I){gl=!1,Ql=null,vu.apply(_u,arguments)}function Su(e,t,r,u,d,p,v,b,I){if(yu.apply(this,arguments),gl){if(gl){var U=Ql;gl=!1,Ql=null}else throw Error(o(198));Jl||(Jl=!0,ra=U)}}function Tn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Fo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Uo(e){if(Tn(e)!==e)throw Error(o(188))}function Au(e){var t=e.alternate;if(!t){if(t=Tn(e),t===null)throw Error(o(188));return t!==e?null:e}for(var r=e,u=t;;){var d=r.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){r=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===r)return Uo(d),e;if(p===u)return Uo(d),t;p=p.sibling}throw Error(o(188))}if(r.return!==u.return)r=d,u=p;else{for(var v=!1,b=d.child;b;){if(b===r){v=!0,r=d,u=p;break}if(b===u){v=!0,u=d,r=p;break}b=b.sibling}if(!v){for(b=p.child;b;){if(b===r){v=!0,r=p,u=d;break}if(b===u){v=!0,u=p,r=d;break}b=b.sibling}if(!v)throw Error(o(189))}}if(r.alternate!==u)throw Error(o(190))}if(r.tag!==3)throw Error(o(188));return r.stateNode.current===r?e:t}function Wo(e){return e=Au(e),e!==null?Ko(e):null}function Ko(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ko(e);if(t!==null)return t;e=e.sibling}return null}var zo=l.unstable_scheduleCallback,qo=l.unstable_cancelCallback,Eu=l.unstable_shouldYield,Cu=l.unstable_requestPaint,qe=l.unstable_now,wu=l.unstable_getCurrentPriorityLevel,aa=l.unstable_ImmediatePriority,Ho=l.unstable_UserBlockingPriority,Xl=l.unstable_NormalPriority,Mu=l.unstable_LowPriority,$o=l.unstable_IdlePriority,er=null,Zt=null;function bu(e){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(er,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:Du,xu=Math.log,ku=Math.LN2;function Du(e){return e>>>=0,e===0?32:31-(xu(e)/ku|0)|0}var tr=64,nr=4194304;function vl(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function lr(e,t){var r=e.pendingLanes;if(r===0)return 0;var u=0,d=e.suspendedLanes,p=e.pingedLanes,v=r&268435455;if(v!==0){var b=v&~d;b!==0?u=vl(b):(p&=v,p!==0&&(u=vl(p)))}else v=r&~d,v!==0?u=vl(v):p!==0&&(u=vl(p));if(u===0)return 0;if(t!==0&&t!==u&&(t&d)===0&&(d=u&-u,p=t&-t,d>=p||d===16&&(p&4194240)!==0))return t;if((u&4)!==0&&(u|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=u;0<t;)r=31-Nt(t),d=1<<r,u|=e[r],t&=~d;return u}function Ou(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Iu(e,t){for(var r=e.suspendedLanes,u=e.pingedLanes,d=e.expirationTimes,p=e.pendingLanes;0<p;){var v=31-Nt(p),b=1<<v,I=d[v];I===-1?((b&r)===0||(b&u)!==0)&&(d[v]=Ou(b,t)):I<=t&&(e.expiredLanes|=b),p&=~b}}function oa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zo(){var e=tr;return tr<<=1,(tr&4194240)===0&&(tr=64),e}function ia(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function _l(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=r}function Pu(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var u=e.eventTimes;for(e=e.expirationTimes;0<r;){var d=31-Nt(r),p=1<<d;t[d]=0,u[d]=-1,e[d]=-1,r&=~p}}function sa(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var u=31-Nt(r),d=1<<u;d&t|e[u]&t&&(e[u]|=t),r&=~d}}var Te=0;function Yo(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Go,ua,Qo,Jo,Xo,ca=!1,rr=[],pn=null,fn=null,mn=null,yl=new Map,Sl=new Map,hn=[],Tu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ei(e,t){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":yl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sl.delete(t.pointerId)}}function Al(e,t,r,u,d,p){return e===null||e.nativeEvent!==p?(e={blockedOn:t,domEventName:r,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},t!==null&&(t=jl(t),t!==null&&ua(t)),e):(e.eventSystemFlags|=u,t=e.targetContainers,d!==null&&t.indexOf(d)===-1&&t.push(d),e)}function Ru(e,t,r,u,d){switch(t){case"focusin":return pn=Al(pn,e,t,r,u,d),!0;case"dragenter":return fn=Al(fn,e,t,r,u,d),!0;case"mouseover":return mn=Al(mn,e,t,r,u,d),!0;case"pointerover":var p=d.pointerId;return yl.set(p,Al(yl.get(p)||null,e,t,r,u,d)),!0;case"gotpointercapture":return p=d.pointerId,Sl.set(p,Al(Sl.get(p)||null,e,t,r,u,d)),!0}return!1}function ti(e){var t=Rn(e.target);if(t!==null){var r=Tn(t);if(r!==null){if(t=r.tag,t===13){if(t=Fo(r),t!==null){e.blockedOn=t,Xo(e.priority,function(){Qo(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ar(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=pa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var u=new r.constructor(r.type,r);Ee=u,r.target.dispatchEvent(u),Ee=null}else return t=jl(r),t!==null&&ua(t),e.blockedOn=r,!1;t.shift()}return!0}function ni(e,t,r){ar(e)&&r.delete(t)}function ju(){ca=!1,pn!==null&&ar(pn)&&(pn=null),fn!==null&&ar(fn)&&(fn=null),mn!==null&&ar(mn)&&(mn=null),yl.forEach(ni),Sl.forEach(ni)}function El(e,t){e.blockedOn===t&&(e.blockedOn=null,ca||(ca=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,ju)))}function Cl(e){function t(d){return El(d,e)}if(0<rr.length){El(rr[0],e);for(var r=1;r<rr.length;r++){var u=rr[r];u.blockedOn===e&&(u.blockedOn=null)}}for(pn!==null&&El(pn,e),fn!==null&&El(fn,e),mn!==null&&El(mn,e),yl.forEach(t),Sl.forEach(t),r=0;r<hn.length;r++)u=hn[r],u.blockedOn===e&&(u.blockedOn=null);for(;0<hn.length&&(r=hn[0],r.blockedOn===null);)ti(r),r.blockedOn===null&&hn.shift()}var Hn=x.ReactCurrentBatchConfig,or=!0;function Lu(e,t,r,u){var d=Te,p=Hn.transition;Hn.transition=null;try{Te=1,da(e,t,r,u)}finally{Te=d,Hn.transition=p}}function Bu(e,t,r,u){var d=Te,p=Hn.transition;Hn.transition=null;try{Te=4,da(e,t,r,u)}finally{Te=d,Hn.transition=p}}function da(e,t,r,u){if(or){var d=pa(e,t,r,u);if(d===null)Da(e,t,u,ir,r),ei(e,u);else if(Ru(d,e,t,r,u))u.stopPropagation();else if(ei(e,u),t&4&&-1<Tu.indexOf(e)){for(;d!==null;){var p=jl(d);if(p!==null&&Go(p),p=pa(e,t,r,u),p===null&&Da(e,t,u,ir,r),p===d)break;d=p}d!==null&&u.stopPropagation()}else Da(e,t,u,null,r)}}var ir=null;function pa(e,t,r,u){if(ir=null,e=Pe(u),e=Rn(e),e!==null)if(t=Tn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Fo(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ir=e,null}function li(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wu()){case aa:return 1;case Ho:return 4;case Xl:case Mu:return 16;case $o:return 536870912;default:return 16}default:return 16}}var gn=null,fa=null,sr=null;function ri(){if(sr)return sr;var e,t=fa,r=t.length,u,d="value"in gn?gn.value:gn.textContent,p=d.length;for(e=0;e<r&&t[e]===d[e];e++);var v=r-e;for(u=1;u<=v&&t[r-u]===d[p-u];u++);return sr=d.slice(e,1<u?1-u:void 0)}function ur(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cr(){return!0}function ai(){return!1}function Mt(e){function t(r,u,d,p,v){this._reactName=r,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(r=e[b],this[b]=r?r(p):p[b]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?cr:ai,this.isPropagationStopped=ai,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=cr)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=cr)},persist:function(){},isPersistent:cr}),t}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ma=Mt($n),wl=ee({},$n,{view:0,detail:0}),Nu=Mt(wl),ha,ga,Ml,dr=ee({},wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_a,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ml&&(Ml&&e.type==="mousemove"?(ha=e.screenX-Ml.screenX,ga=e.screenY-Ml.screenY):ga=ha=0,Ml=e),ha)},movementY:function(e){return"movementY"in e?e.movementY:ga}}),oi=Mt(dr),Vu=ee({},dr,{dataTransfer:0}),Fu=Mt(Vu),Uu=ee({},wl,{relatedTarget:0}),va=Mt(Uu),Wu=ee({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),Ku=Mt(Wu),zu=ee({},$n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qu=Mt(zu),Hu=ee({},$n,{data:0}),ii=Mt(Hu),$u={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gu(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yu[e])?!!t[e]:!1}function _a(){return Gu}var Qu=ee({},wl,{key:function(e){if(e.key){var t=$u[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_a,charCode:function(e){return e.type==="keypress"?ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ju=Mt(Qu),Xu=ee({},dr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),si=Mt(Xu),e0=ee({},wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_a}),t0=Mt(e0),n0=ee({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),l0=Mt(n0),r0=ee({},dr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),a0=Mt(r0),o0=[9,13,27,32],ya=m&&"CompositionEvent"in window,bl=null;m&&"documentMode"in document&&(bl=document.documentMode);var i0=m&&"TextEvent"in window&&!bl,ui=m&&(!ya||bl&&8<bl&&11>=bl),ci=" ",di=!1;function pi(e,t){switch(e){case"keyup":return o0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fi(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function s0(e,t){switch(e){case"compositionend":return fi(t);case"keypress":return t.which!==32?null:(di=!0,ci);case"textInput":return e=t.data,e===ci&&di?null:e;default:return null}}function u0(e,t){if(Zn)return e==="compositionend"||!ya&&pi(e,t)?(e=ri(),sr=fa=gn=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ui&&t.locale!=="ko"?null:t.data;default:return null}}var c0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!c0[e.type]:t==="textarea"}function hi(e,t,r,u){ze(u),t=gr(t,"onChange"),0<t.length&&(r=new ma("onChange","change",null,r,u),e.push({event:r,listeners:t}))}var xl=null,kl=null;function d0(e){Ti(e,0)}function pr(e){var t=Xn(e);if(We(t))return e}function p0(e,t){if(e==="change")return t}var gi=!1;if(m){var Sa;if(m){var Aa="oninput"in document;if(!Aa){var vi=document.createElement("div");vi.setAttribute("oninput","return;"),Aa=typeof vi.oninput=="function"}Sa=Aa}else Sa=!1;gi=Sa&&(!document.documentMode||9<document.documentMode)}function _i(){xl&&(xl.detachEvent("onpropertychange",yi),kl=xl=null)}function yi(e){if(e.propertyName==="value"&&pr(kl)){var t=[];hi(t,kl,e,Pe(e)),Gl(d0,t)}}function f0(e,t,r){e==="focusin"?(_i(),xl=t,kl=r,xl.attachEvent("onpropertychange",yi)):e==="focusout"&&_i()}function m0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pr(kl)}function h0(e,t){if(e==="click")return pr(t)}function g0(e,t){if(e==="input"||e==="change")return pr(t)}function v0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Vt=typeof Object.is=="function"?Object.is:v0;function Dl(e,t){if(Vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),u=Object.keys(t);if(r.length!==u.length)return!1;for(u=0;u<r.length;u++){var d=r[u];if(!h.call(t,d)||!Vt(e[d],t[d]))return!1}return!0}function Si(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ai(e,t){var r=Si(e);e=0;for(var u;r;){if(r.nodeType===3){if(u=e+r.textContent.length,e<=t&&u>=t)return{node:r,offset:t-e};e=u}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Si(r)}}function Ei(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ei(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ci(){for(var e=window,t=st();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=st(e.document)}return t}function Ea(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _0(e){var t=Ci(),r=e.focusedElem,u=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Ei(r.ownerDocument.documentElement,r)){if(u!==null&&Ea(r)){if(t=u.start,e=u.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var d=r.textContent.length,p=Math.min(u.start,d);u=u.end===void 0?p:Math.min(u.end,d),!e.extend&&p>u&&(d=u,u=p,p=d),d=Ai(r,p);var v=Ai(r,u);d&&v&&(e.rangeCount!==1||e.anchorNode!==d.node||e.anchorOffset!==d.offset||e.focusNode!==v.node||e.focusOffset!==v.offset)&&(t=t.createRange(),t.setStart(d.node,d.offset),e.removeAllRanges(),p>u?(e.addRange(t),e.extend(v.node,v.offset)):(t.setEnd(v.node,v.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var y0=m&&"documentMode"in document&&11>=document.documentMode,Yn=null,Ca=null,Ol=null,wa=!1;function wi(e,t,r){var u=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;wa||Yn==null||Yn!==st(u)||(u=Yn,"selectionStart"in u&&Ea(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ol&&Dl(Ol,u)||(Ol=u,u=gr(Ca,"onSelect"),0<u.length&&(t=new ma("onSelect","select",null,t,r),e.push({event:t,listeners:u}),t.target=Yn)))}function fr(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Gn={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionend:fr("Transition","TransitionEnd")},Ma={},Mi={};m&&(Mi=document.createElement("div").style,"AnimationEvent"in window||(delete Gn.animationend.animation,delete Gn.animationiteration.animation,delete Gn.animationstart.animation),"TransitionEvent"in window||delete Gn.transitionend.transition);function mr(e){if(Ma[e])return Ma[e];if(!Gn[e])return e;var t=Gn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Mi)return Ma[e]=t[r];return e}var bi=mr("animationend"),xi=mr("animationiteration"),ki=mr("animationstart"),Di=mr("transitionend"),Oi=new Map,Ii="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vn(e,t){Oi.set(e,t),c(t,[e])}for(var ba=0;ba<Ii.length;ba++){var xa=Ii[ba],S0=xa.toLowerCase(),A0=xa[0].toUpperCase()+xa.slice(1);vn(S0,"on"+A0)}vn(bi,"onAnimationEnd"),vn(xi,"onAnimationIteration"),vn(ki,"onAnimationStart"),vn("dblclick","onDoubleClick"),vn("focusin","onFocus"),vn("focusout","onBlur"),vn(Di,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Il));function Pi(e,t,r){var u=e.type||"unknown-event";e.currentTarget=r,Su(u,t,void 0,e),e.currentTarget=null}function Ti(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var u=e[r],d=u.event;u=u.listeners;e:{var p=void 0;if(t)for(var v=u.length-1;0<=v;v--){var b=u[v],I=b.instance,U=b.currentTarget;if(b=b.listener,I!==p&&d.isPropagationStopped())break e;Pi(d,b,U),p=I}else for(v=0;v<u.length;v++){if(b=u[v],I=b.instance,U=b.currentTarget,b=b.listener,I!==p&&d.isPropagationStopped())break e;Pi(d,b,U),p=I}}}if(Jl)throw e=ra,Jl=!1,ra=null,e}function Le(e,t){var r=t[ja];r===void 0&&(r=t[ja]=new Set);var u=e+"__bubble";r.has(u)||(Ri(t,e,2,!1),r.add(u))}function ka(e,t,r){var u=0;t&&(u|=4),Ri(r,e,u,t)}var hr="_reactListening"+Math.random().toString(36).slice(2);function Pl(e){if(!e[hr]){e[hr]=!0,s.forEach(function(r){r!=="selectionchange"&&(E0.has(r)||ka(r,!1,e),ka(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hr]||(t[hr]=!0,ka("selectionchange",!1,t))}}function Ri(e,t,r,u){switch(li(t)){case 1:var d=Lu;break;case 4:d=Bu;break;default:d=da}r=d.bind(null,t,r,e),d=void 0,!Pn||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(d=!0),u?d!==void 0?e.addEventListener(t,r,{capture:!0,passive:d}):e.addEventListener(t,r,!0):d!==void 0?e.addEventListener(t,r,{passive:d}):e.addEventListener(t,r,!1)}function Da(e,t,r,u,d){var p=u;if((t&1)===0&&(t&2)===0&&u!==null)e:for(;;){if(u===null)return;var v=u.tag;if(v===3||v===4){var b=u.stateNode.containerInfo;if(b===d||b.nodeType===8&&b.parentNode===d)break;if(v===4)for(v=u.return;v!==null;){var I=v.tag;if((I===3||I===4)&&(I=v.stateNode.containerInfo,I===d||I.nodeType===8&&I.parentNode===d))return;v=v.return}for(;b!==null;){if(v=Rn(b),v===null)return;if(I=v.tag,I===5||I===6){u=p=v;continue e}b=b.parentNode}}u=u.return}Gl(function(){var U=p,Z=Pe(r),G=[];e:{var $=Oi.get(e);if($!==void 0){var oe=ma,se=e;switch(e){case"keypress":if(ur(r)===0)break e;case"keydown":case"keyup":oe=Ju;break;case"focusin":se="focus",oe=va;break;case"focusout":se="blur",oe=va;break;case"beforeblur":case"afterblur":oe=va;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=oi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=Fu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=t0;break;case bi:case xi:case ki:oe=Ku;break;case Di:oe=l0;break;case"scroll":oe=Nu;break;case"wheel":oe=a0;break;case"copy":case"cut":case"paste":oe=qu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=si}var ce=(t&4)!==0,He=!ce&&e==="scroll",N=ce?$!==null?$+"Capture":null:$;ce=[];for(var P=U,F;P!==null;){F=P;var Q=F.stateNode;if(F.tag===5&&Q!==null&&(F=Q,N!==null&&(Q=tn(P,N),Q!=null&&ce.push(Tl(P,Q,F)))),He)break;P=P.return}0<ce.length&&($=new oe($,se,null,r,Z),G.push({event:$,listeners:ce}))}}if((t&7)===0){e:{if($=e==="mouseover"||e==="pointerover",oe=e==="mouseout"||e==="pointerout",$&&r!==Ee&&(se=r.relatedTarget||r.fromElement)&&(Rn(se)||se[nn]))break e;if((oe||$)&&($=Z.window===Z?Z:($=Z.ownerDocument)?$.defaultView||$.parentWindow:window,oe?(se=r.relatedTarget||r.toElement,oe=U,se=se?Rn(se):null,se!==null&&(He=Tn(se),se!==He||se.tag!==5&&se.tag!==6)&&(se=null)):(oe=null,se=U),oe!==se)){if(ce=oi,Q="onMouseLeave",N="onMouseEnter",P="mouse",(e==="pointerout"||e==="pointerover")&&(ce=si,Q="onPointerLeave",N="onPointerEnter",P="pointer"),He=oe==null?$:Xn(oe),F=se==null?$:Xn(se),$=new ce(Q,P+"leave",oe,r,Z),$.target=He,$.relatedTarget=F,Q=null,Rn(Z)===U&&(ce=new ce(N,P+"enter",se,r,Z),ce.target=F,ce.relatedTarget=He,Q=ce),He=Q,oe&&se)t:{for(ce=oe,N=se,P=0,F=ce;F;F=Qn(F))P++;for(F=0,Q=N;Q;Q=Qn(Q))F++;for(;0<P-F;)ce=Qn(ce),P--;for(;0<F-P;)N=Qn(N),F--;for(;P--;){if(ce===N||N!==null&&ce===N.alternate)break t;ce=Qn(ce),N=Qn(N)}ce=null}else ce=null;oe!==null&&ji(G,$,oe,ce,!1),se!==null&&He!==null&&ji(G,He,se,ce,!0)}}e:{if($=U?Xn(U):window,oe=$.nodeName&&$.nodeName.toLowerCase(),oe==="select"||oe==="input"&&$.type==="file")var de=p0;else if(mi($))if(gi)de=g0;else{de=m0;var ve=f0}else(oe=$.nodeName)&&oe.toLowerCase()==="input"&&($.type==="checkbox"||$.type==="radio")&&(de=h0);if(de&&(de=de(e,U))){hi(G,de,r,Z);break e}ve&&ve(e,$,U),e==="focusout"&&(ve=$._wrapperState)&&ve.controlled&&$.type==="number"&&me($,"number",$.value)}switch(ve=U?Xn(U):window,e){case"focusin":(mi(ve)||ve.contentEditable==="true")&&(Yn=ve,Ca=U,Ol=null);break;case"focusout":Ol=Ca=Yn=null;break;case"mousedown":wa=!0;break;case"contextmenu":case"mouseup":case"dragend":wa=!1,wi(G,r,Z);break;case"selectionchange":if(y0)break;case"keydown":case"keyup":wi(G,r,Z)}var _e;if(ya)e:{switch(e){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else Zn?pi(e,r)&&(Ae="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Ae="onCompositionStart");Ae&&(ui&&r.locale!=="ko"&&(Zn||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Zn&&(_e=ri()):(gn=Z,fa="value"in gn?gn.value:gn.textContent,Zn=!0)),ve=gr(U,Ae),0<ve.length&&(Ae=new ii(Ae,e,null,r,Z),G.push({event:Ae,listeners:ve}),_e?Ae.data=_e:(_e=fi(r),_e!==null&&(Ae.data=_e)))),(_e=i0?s0(e,r):u0(e,r))&&(U=gr(U,"onBeforeInput"),0<U.length&&(Z=new ii("onBeforeInput","beforeinput",null,r,Z),G.push({event:Z,listeners:U}),Z.data=_e))}Ti(G,t)})}function Tl(e,t,r){return{instance:e,listener:t,currentTarget:r}}function gr(e,t){for(var r=t+"Capture",u=[];e!==null;){var d=e,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=tn(e,r),p!=null&&u.unshift(Tl(e,p,d)),p=tn(e,t),p!=null&&u.push(Tl(e,p,d))),e=e.return}return u}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ji(e,t,r,u,d){for(var p=t._reactName,v=[];r!==null&&r!==u;){var b=r,I=b.alternate,U=b.stateNode;if(I!==null&&I===u)break;b.tag===5&&U!==null&&(b=U,d?(I=tn(r,p),I!=null&&v.unshift(Tl(r,I,b))):d||(I=tn(r,p),I!=null&&v.push(Tl(r,I,b)))),r=r.return}v.length!==0&&e.push({event:t,listeners:v})}var C0=/\r\n?/g,w0=/\u0000|\uFFFD/g;function Li(e){return(typeof e=="string"?e:""+e).replace(C0,`
`).replace(w0,"")}function vr(e,t,r){if(t=Li(t),Li(e)!==t&&r)throw Error(o(425))}function _r(){}var Oa=null,Ia=null;function Pa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ta=typeof setTimeout=="function"?setTimeout:void 0,M0=typeof clearTimeout=="function"?clearTimeout:void 0,Bi=typeof Promise=="function"?Promise:void 0,b0=typeof queueMicrotask=="function"?queueMicrotask:typeof Bi<"u"?function(e){return Bi.resolve(null).then(e).catch(x0)}:Ta;function x0(e){setTimeout(function(){throw e})}function Ra(e,t){var r=t,u=0;do{var d=r.nextSibling;if(e.removeChild(r),d&&d.nodeType===8)if(r=d.data,r==="/$"){if(u===0){e.removeChild(d),Cl(t);return}u--}else r!=="$"&&r!=="$?"&&r!=="$!"||u++;r=d}while(r);Cl(t)}function _n(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ni(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Jn=Math.random().toString(36).slice(2),Yt="__reactFiber$"+Jn,Rl="__reactProps$"+Jn,nn="__reactContainer$"+Jn,ja="__reactEvents$"+Jn,k0="__reactListeners$"+Jn,D0="__reactHandles$"+Jn;function Rn(e){var t=e[Yt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[nn]||r[Yt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Ni(e);e!==null;){if(r=e[Yt])return r;e=Ni(e)}return t}e=r,r=e.parentNode}return null}function jl(e){return e=e[Yt]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function yr(e){return e[Rl]||null}var La=[],el=-1;function yn(e){return{current:e}}function Be(e){0>el||(e.current=La[el],La[el]=null,el--)}function je(e,t){el++,La[el]=e.current,e.current=t}var Sn={},ut=yn(Sn),yt=yn(!1),jn=Sn;function tl(e,t){var r=e.type.contextTypes;if(!r)return Sn;var u=e.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===t)return u.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in r)d[p]=t[p];return u&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=d),d}function St(e){return e=e.childContextTypes,e!=null}function Sr(){Be(yt),Be(ut)}function Vi(e,t,r){if(ut.current!==Sn)throw Error(o(168));je(ut,t),je(yt,r)}function Fi(e,t,r){var u=e.stateNode;if(t=t.childContextTypes,typeof u.getChildContext!="function")return r;u=u.getChildContext();for(var d in u)if(!(d in t))throw Error(o(108,we(e)||"Unknown",d));return ee({},r,u)}function Ar(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sn,jn=ut.current,je(ut,e),je(yt,yt.current),!0}function Ui(e,t,r){var u=e.stateNode;if(!u)throw Error(o(169));r?(e=Fi(e,t,jn),u.__reactInternalMemoizedMergedChildContext=e,Be(yt),Be(ut),je(ut,e)):Be(yt),je(yt,r)}var ln=null,Er=!1,Ba=!1;function Wi(e){ln===null?ln=[e]:ln.push(e)}function O0(e){Er=!0,Wi(e)}function An(){if(!Ba&&ln!==null){Ba=!0;var e=0,t=Te;try{var r=ln;for(Te=1;e<r.length;e++){var u=r[e];do u=u(!0);while(u!==null)}ln=null,Er=!1}catch(d){throw ln!==null&&(ln=ln.slice(e+1)),zo(aa,An),d}finally{Te=t,Ba=!1}}return null}var nl=[],ll=0,Cr=null,wr=0,Ot=[],It=0,Ln=null,rn=1,an="";function Bn(e,t){nl[ll++]=wr,nl[ll++]=Cr,Cr=e,wr=t}function Ki(e,t,r){Ot[It++]=rn,Ot[It++]=an,Ot[It++]=Ln,Ln=e;var u=rn;e=an;var d=32-Nt(u)-1;u&=~(1<<d),r+=1;var p=32-Nt(t)+d;if(30<p){var v=d-d%5;p=(u&(1<<v)-1).toString(32),u>>=v,d-=v,rn=1<<32-Nt(t)+d|r<<d|u,an=p+e}else rn=1<<p|r<<d|u,an=e}function Na(e){e.return!==null&&(Bn(e,1),Ki(e,1,0))}function Va(e){for(;e===Cr;)Cr=nl[--ll],nl[ll]=null,wr=nl[--ll],nl[ll]=null;for(;e===Ln;)Ln=Ot[--It],Ot[It]=null,an=Ot[--It],Ot[It]=null,rn=Ot[--It],Ot[It]=null}var bt=null,xt=null,Ne=!1,Ft=null;function zi(e,t){var r=jt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function qi(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,bt=e,xt=_n(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,bt=e,xt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Ln!==null?{id:rn,overflow:an}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=jt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,bt=e,xt=null,!0):!1;default:return!1}}function Fa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ua(e){if(Ne){var t=xt;if(t){var r=t;if(!qi(e,t)){if(Fa(e))throw Error(o(418));t=_n(r.nextSibling);var u=bt;t&&qi(e,t)?zi(u,r):(e.flags=e.flags&-4097|2,Ne=!1,bt=e)}}else{if(Fa(e))throw Error(o(418));e.flags=e.flags&-4097|2,Ne=!1,bt=e}}}function Hi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;bt=e}function Mr(e){if(e!==bt)return!1;if(!Ne)return Hi(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pa(e.type,e.memoizedProps)),t&&(t=xt)){if(Fa(e))throw $i(),Error(o(418));for(;t;)zi(e,t),t=_n(t.nextSibling)}if(Hi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){xt=_n(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}xt=null}}else xt=bt?_n(e.stateNode.nextSibling):null;return!0}function $i(){for(var e=xt;e;)e=_n(e.nextSibling)}function rl(){xt=bt=null,Ne=!1}function Wa(e){Ft===null?Ft=[e]:Ft.push(e)}var I0=x.ReactCurrentBatchConfig;function Ll(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(o(309));var u=r.stateNode}if(!u)throw Error(o(147,e));var d=u,p=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===p?t.ref:(t=function(v){var b=d.refs;v===null?delete b[p]:b[p]=v},t._stringRef=p,t)}if(typeof e!="string")throw Error(o(284));if(!r._owner)throw Error(o(290,e))}return e}function br(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zi(e){var t=e._init;return t(e._payload)}function Yi(e){function t(N,P){if(e){var F=N.deletions;F===null?(N.deletions=[P],N.flags|=16):F.push(P)}}function r(N,P){if(!e)return null;for(;P!==null;)t(N,P),P=P.sibling;return null}function u(N,P){for(N=new Map;P!==null;)P.key!==null?N.set(P.key,P):N.set(P.index,P),P=P.sibling;return N}function d(N,P){return N=Dn(N,P),N.index=0,N.sibling=null,N}function p(N,P,F){return N.index=F,e?(F=N.alternate,F!==null?(F=F.index,F<P?(N.flags|=2,P):F):(N.flags|=2,P)):(N.flags|=1048576,P)}function v(N){return e&&N.alternate===null&&(N.flags|=2),N}function b(N,P,F,Q){return P===null||P.tag!==6?(P=Ro(F,N.mode,Q),P.return=N,P):(P=d(P,F),P.return=N,P)}function I(N,P,F,Q){var de=F.type;return de===B?Z(N,P,F.props.children,Q,F.key):P!==null&&(P.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Y&&Zi(de)===P.type)?(Q=d(P,F.props),Q.ref=Ll(N,P,F),Q.return=N,Q):(Q=Gr(F.type,F.key,F.props,null,N.mode,Q),Q.ref=Ll(N,P,F),Q.return=N,Q)}function U(N,P,F,Q){return P===null||P.tag!==4||P.stateNode.containerInfo!==F.containerInfo||P.stateNode.implementation!==F.implementation?(P=jo(F,N.mode,Q),P.return=N,P):(P=d(P,F.children||[]),P.return=N,P)}function Z(N,P,F,Q,de){return P===null||P.tag!==7?(P=qn(F,N.mode,Q,de),P.return=N,P):(P=d(P,F),P.return=N,P)}function G(N,P,F){if(typeof P=="string"&&P!==""||typeof P=="number")return P=Ro(""+P,N.mode,F),P.return=N,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case E:return F=Gr(P.type,P.key,P.props,null,N.mode,F),F.ref=Ll(N,null,P),F.return=N,F;case O:return P=jo(P,N.mode,F),P.return=N,P;case Y:var Q=P._init;return G(N,Q(P._payload),F)}if(Se(P)||ae(P))return P=qn(P,N.mode,F,null),P.return=N,P;br(N,P)}return null}function $(N,P,F,Q){var de=P!==null?P.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return de!==null?null:b(N,P,""+F,Q);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case E:return F.key===de?I(N,P,F,Q):null;case O:return F.key===de?U(N,P,F,Q):null;case Y:return de=F._init,$(N,P,de(F._payload),Q)}if(Se(F)||ae(F))return de!==null?null:Z(N,P,F,Q,null);br(N,F)}return null}function oe(N,P,F,Q,de){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return N=N.get(F)||null,b(P,N,""+Q,de);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:return N=N.get(Q.key===null?F:Q.key)||null,I(P,N,Q,de);case O:return N=N.get(Q.key===null?F:Q.key)||null,U(P,N,Q,de);case Y:var ve=Q._init;return oe(N,P,F,ve(Q._payload),de)}if(Se(Q)||ae(Q))return N=N.get(F)||null,Z(P,N,Q,de,null);br(P,Q)}return null}function se(N,P,F,Q){for(var de=null,ve=null,_e=P,Ae=P=0,lt=null;_e!==null&&Ae<F.length;Ae++){_e.index>Ae?(lt=_e,_e=null):lt=_e.sibling;var Ie=$(N,_e,F[Ae],Q);if(Ie===null){_e===null&&(_e=lt);break}e&&_e&&Ie.alternate===null&&t(N,_e),P=p(Ie,P,Ae),ve===null?de=Ie:ve.sibling=Ie,ve=Ie,_e=lt}if(Ae===F.length)return r(N,_e),Ne&&Bn(N,Ae),de;if(_e===null){for(;Ae<F.length;Ae++)_e=G(N,F[Ae],Q),_e!==null&&(P=p(_e,P,Ae),ve===null?de=_e:ve.sibling=_e,ve=_e);return Ne&&Bn(N,Ae),de}for(_e=u(N,_e);Ae<F.length;Ae++)lt=oe(_e,N,Ae,F[Ae],Q),lt!==null&&(e&&lt.alternate!==null&&_e.delete(lt.key===null?Ae:lt.key),P=p(lt,P,Ae),ve===null?de=lt:ve.sibling=lt,ve=lt);return e&&_e.forEach(function(On){return t(N,On)}),Ne&&Bn(N,Ae),de}function ce(N,P,F,Q){var de=ae(F);if(typeof de!="function")throw Error(o(150));if(F=de.call(F),F==null)throw Error(o(151));for(var ve=de=null,_e=P,Ae=P=0,lt=null,Ie=F.next();_e!==null&&!Ie.done;Ae++,Ie=F.next()){_e.index>Ae?(lt=_e,_e=null):lt=_e.sibling;var On=$(N,_e,Ie.value,Q);if(On===null){_e===null&&(_e=lt);break}e&&_e&&On.alternate===null&&t(N,_e),P=p(On,P,Ae),ve===null?de=On:ve.sibling=On,ve=On,_e=lt}if(Ie.done)return r(N,_e),Ne&&Bn(N,Ae),de;if(_e===null){for(;!Ie.done;Ae++,Ie=F.next())Ie=G(N,Ie.value,Q),Ie!==null&&(P=p(Ie,P,Ae),ve===null?de=Ie:ve.sibling=Ie,ve=Ie);return Ne&&Bn(N,Ae),de}for(_e=u(N,_e);!Ie.done;Ae++,Ie=F.next())Ie=oe(_e,N,Ae,Ie.value,Q),Ie!==null&&(e&&Ie.alternate!==null&&_e.delete(Ie.key===null?Ae:Ie.key),P=p(Ie,P,Ae),ve===null?de=Ie:ve.sibling=Ie,ve=Ie);return e&&_e.forEach(function(cc){return t(N,cc)}),Ne&&Bn(N,Ae),de}function He(N,P,F,Q){if(typeof F=="object"&&F!==null&&F.type===B&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case E:e:{for(var de=F.key,ve=P;ve!==null;){if(ve.key===de){if(de=F.type,de===B){if(ve.tag===7){r(N,ve.sibling),P=d(ve,F.props.children),P.return=N,N=P;break e}}else if(ve.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Y&&Zi(de)===ve.type){r(N,ve.sibling),P=d(ve,F.props),P.ref=Ll(N,ve,F),P.return=N,N=P;break e}r(N,ve);break}else t(N,ve);ve=ve.sibling}F.type===B?(P=qn(F.props.children,N.mode,Q,F.key),P.return=N,N=P):(Q=Gr(F.type,F.key,F.props,null,N.mode,Q),Q.ref=Ll(N,P,F),Q.return=N,N=Q)}return v(N);case O:e:{for(ve=F.key;P!==null;){if(P.key===ve)if(P.tag===4&&P.stateNode.containerInfo===F.containerInfo&&P.stateNode.implementation===F.implementation){r(N,P.sibling),P=d(P,F.children||[]),P.return=N,N=P;break e}else{r(N,P);break}else t(N,P);P=P.sibling}P=jo(F,N.mode,Q),P.return=N,N=P}return v(N);case Y:return ve=F._init,He(N,P,ve(F._payload),Q)}if(Se(F))return se(N,P,F,Q);if(ae(F))return ce(N,P,F,Q);br(N,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,P!==null&&P.tag===6?(r(N,P.sibling),P=d(P,F),P.return=N,N=P):(r(N,P),P=Ro(F,N.mode,Q),P.return=N,N=P),v(N)):r(N,P)}return He}var al=Yi(!0),Gi=Yi(!1),xr=yn(null),kr=null,ol=null,Ka=null;function za(){Ka=ol=kr=null}function qa(e){var t=xr.current;Be(xr),e._currentValue=t}function Ha(e,t,r){for(;e!==null;){var u=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,u!==null&&(u.childLanes|=t)):u!==null&&(u.childLanes&t)!==t&&(u.childLanes|=t),e===r)break;e=e.return}}function il(e,t){kr=e,Ka=ol=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(At=!0),e.firstContext=null)}function Pt(e){var t=e._currentValue;if(Ka!==e)if(e={context:e,memoizedValue:t,next:null},ol===null){if(kr===null)throw Error(o(308));ol=e,kr.dependencies={lanes:0,firstContext:e}}else ol=ol.next=e;return t}var Nn=null;function $a(e){Nn===null?Nn=[e]:Nn.push(e)}function Qi(e,t,r,u){var d=t.interleaved;return d===null?(r.next=r,$a(t)):(r.next=d.next,d.next=r),t.interleaved=r,on(e,u)}function on(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var En=!1;function Za(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ji(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function sn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Cn(e,t,r){var u=e.updateQueue;if(u===null)return null;if(u=u.shared,(Oe&2)!==0){var d=u.pending;return d===null?t.next=t:(t.next=d.next,d.next=t),u.pending=t,on(e,r)}return d=u.interleaved,d===null?(t.next=t,$a(u)):(t.next=d.next,d.next=t),u.interleaved=t,on(e,r)}function Dr(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var u=t.lanes;u&=e.pendingLanes,r|=u,t.lanes=r,sa(e,r)}}function Xi(e,t){var r=e.updateQueue,u=e.alternate;if(u!==null&&(u=u.updateQueue,r===u)){var d=null,p=null;if(r=r.firstBaseUpdate,r!==null){do{var v={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};p===null?d=p=v:p=p.next=v,r=r.next}while(r!==null);p===null?d=p=t:p=p.next=t}else d=p=t;r={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,effects:u.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Or(e,t,r,u){var d=e.updateQueue;En=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,b=d.shared.pending;if(b!==null){d.shared.pending=null;var I=b,U=I.next;I.next=null,v===null?p=U:v.next=U,v=I;var Z=e.alternate;Z!==null&&(Z=Z.updateQueue,b=Z.lastBaseUpdate,b!==v&&(b===null?Z.firstBaseUpdate=U:b.next=U,Z.lastBaseUpdate=I))}if(p!==null){var G=d.baseState;v=0,Z=U=I=null,b=p;do{var $=b.lane,oe=b.eventTime;if((u&$)===$){Z!==null&&(Z=Z.next={eventTime:oe,lane:0,tag:b.tag,payload:b.payload,callback:b.callback,next:null});e:{var se=e,ce=b;switch($=t,oe=r,ce.tag){case 1:if(se=ce.payload,typeof se=="function"){G=se.call(oe,G,$);break e}G=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=ce.payload,$=typeof se=="function"?se.call(oe,G,$):se,$==null)break e;G=ee({},G,$);break e;case 2:En=!0}}b.callback!==null&&b.lane!==0&&(e.flags|=64,$=d.effects,$===null?d.effects=[b]:$.push(b))}else oe={eventTime:oe,lane:$,tag:b.tag,payload:b.payload,callback:b.callback,next:null},Z===null?(U=Z=oe,I=G):Z=Z.next=oe,v|=$;if(b=b.next,b===null){if(b=d.shared.pending,b===null)break;$=b,b=$.next,$.next=null,d.lastBaseUpdate=$,d.shared.pending=null}}while(!0);if(Z===null&&(I=G),d.baseState=I,d.firstBaseUpdate=U,d.lastBaseUpdate=Z,t=d.shared.interleaved,t!==null){d=t;do v|=d.lane,d=d.next;while(d!==t)}else p===null&&(d.shared.lanes=0);Un|=v,e.lanes=v,e.memoizedState=G}}function es(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var u=e[t],d=u.callback;if(d!==null){if(u.callback=null,u=r,typeof d!="function")throw Error(o(191,d));d.call(u)}}}var Bl={},Gt=yn(Bl),Nl=yn(Bl),Vl=yn(Bl);function Vn(e){if(e===Bl)throw Error(o(174));return e}function Ya(e,t){switch(je(Vl,t),je(Nl,e),je(Gt,Bl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wt(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wt(t,e)}Be(Gt),je(Gt,t)}function sl(){Be(Gt),Be(Nl),Be(Vl)}function ts(e){Vn(Vl.current);var t=Vn(Gt.current),r=wt(t,e.type);t!==r&&(je(Nl,e),je(Gt,r))}function Ga(e){Nl.current===e&&(Be(Gt),Be(Nl))}var Fe=yn(0);function Ir(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qa=[];function Ja(){for(var e=0;e<Qa.length;e++)Qa[e]._workInProgressVersionPrimary=null;Qa.length=0}var Pr=x.ReactCurrentDispatcher,Xa=x.ReactCurrentBatchConfig,Fn=0,Ue=null,Qe=null,tt=null,Tr=!1,Fl=!1,Ul=0,P0=0;function ct(){throw Error(o(321))}function eo(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Vt(e[r],t[r]))return!1;return!0}function to(e,t,r,u,d,p){if(Fn=p,Ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pr.current=e===null||e.memoizedState===null?L0:B0,e=r(u,d),Fl){p=0;do{if(Fl=!1,Ul=0,25<=p)throw Error(o(301));p+=1,tt=Qe=null,t.updateQueue=null,Pr.current=N0,e=r(u,d)}while(Fl)}if(Pr.current=Lr,t=Qe!==null&&Qe.next!==null,Fn=0,tt=Qe=Ue=null,Tr=!1,t)throw Error(o(300));return e}function no(){var e=Ul!==0;return Ul=0,e}function Qt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?Ue.memoizedState=tt=e:tt=tt.next=e,tt}function Tt(){if(Qe===null){var e=Ue.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var t=tt===null?Ue.memoizedState:tt.next;if(t!==null)tt=t,Qe=e;else{if(e===null)throw Error(o(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},tt===null?Ue.memoizedState=tt=e:tt=tt.next=e}return tt}function Wl(e,t){return typeof t=="function"?t(e):t}function lo(e){var t=Tt(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var u=Qe,d=u.baseQueue,p=r.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}u.baseQueue=d=p,r.pending=null}if(d!==null){p=d.next,u=u.baseState;var b=v=null,I=null,U=p;do{var Z=U.lane;if((Fn&Z)===Z)I!==null&&(I=I.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),u=U.hasEagerState?U.eagerState:e(u,U.action);else{var G={lane:Z,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};I===null?(b=I=G,v=u):I=I.next=G,Ue.lanes|=Z,Un|=Z}U=U.next}while(U!==null&&U!==p);I===null?v=u:I.next=b,Vt(u,t.memoizedState)||(At=!0),t.memoizedState=u,t.baseState=v,t.baseQueue=I,r.lastRenderedState=u}if(e=r.interleaved,e!==null){d=e;do p=d.lane,Ue.lanes|=p,Un|=p,d=d.next;while(d!==e)}else d===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ro(e){var t=Tt(),r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=e;var u=r.dispatch,d=r.pending,p=t.memoizedState;if(d!==null){r.pending=null;var v=d=d.next;do p=e(p,v.action),v=v.next;while(v!==d);Vt(p,t.memoizedState)||(At=!0),t.memoizedState=p,t.baseQueue===null&&(t.baseState=p),r.lastRenderedState=p}return[p,u]}function ns(){}function ls(e,t){var r=Ue,u=Tt(),d=t(),p=!Vt(u.memoizedState,d);if(p&&(u.memoizedState=d,At=!0),u=u.queue,ao(os.bind(null,r,u,e),[e]),u.getSnapshot!==t||p||tt!==null&&tt.memoizedState.tag&1){if(r.flags|=2048,Kl(9,as.bind(null,r,u,d,t),void 0,null),nt===null)throw Error(o(349));(Fn&30)!==0||rs(r,t,d)}return d}function rs(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function as(e,t,r,u){t.value=r,t.getSnapshot=u,is(t)&&ss(e)}function os(e,t,r){return r(function(){is(t)&&ss(e)})}function is(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Vt(e,r)}catch{return!0}}function ss(e){var t=on(e,1);t!==null&&zt(t,e,1,-1)}function us(e){var t=Qt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wl,lastRenderedState:e},t.queue=e,e=e.dispatch=j0.bind(null,Ue,e),[t.memoizedState,e]}function Kl(e,t,r,u){return e={tag:e,create:t,destroy:r,deps:u,next:null},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(u=r.next,r.next=e,e.next=u,t.lastEffect=e)),e}function cs(){return Tt().memoizedState}function Rr(e,t,r,u){var d=Qt();Ue.flags|=e,d.memoizedState=Kl(1|t,r,void 0,u===void 0?null:u)}function jr(e,t,r,u){var d=Tt();u=u===void 0?null:u;var p=void 0;if(Qe!==null){var v=Qe.memoizedState;if(p=v.destroy,u!==null&&eo(u,v.deps)){d.memoizedState=Kl(t,r,p,u);return}}Ue.flags|=e,d.memoizedState=Kl(1|t,r,p,u)}function ds(e,t){return Rr(8390656,8,e,t)}function ao(e,t){return jr(2048,8,e,t)}function ps(e,t){return jr(4,2,e,t)}function fs(e,t){return jr(4,4,e,t)}function ms(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hs(e,t,r){return r=r!=null?r.concat([e]):null,jr(4,4,ms.bind(null,t,e),r)}function oo(){}function gs(e,t){var r=Tt();t=t===void 0?null:t;var u=r.memoizedState;return u!==null&&t!==null&&eo(t,u[1])?u[0]:(r.memoizedState=[e,t],e)}function vs(e,t){var r=Tt();t=t===void 0?null:t;var u=r.memoizedState;return u!==null&&t!==null&&eo(t,u[1])?u[0]:(e=e(),r.memoizedState=[e,t],e)}function _s(e,t,r){return(Fn&21)===0?(e.baseState&&(e.baseState=!1,At=!0),e.memoizedState=r):(Vt(r,t)||(r=Zo(),Ue.lanes|=r,Un|=r,e.baseState=!0),t)}function T0(e,t){var r=Te;Te=r!==0&&4>r?r:4,e(!0);var u=Xa.transition;Xa.transition={};try{e(!1),t()}finally{Te=r,Xa.transition=u}}function ys(){return Tt().memoizedState}function R0(e,t,r){var u=xn(e);if(r={lane:u,action:r,hasEagerState:!1,eagerState:null,next:null},Ss(e))As(t,r);else if(r=Qi(e,t,r,u),r!==null){var d=vt();zt(r,e,u,d),Es(r,t,u)}}function j0(e,t,r){var u=xn(e),d={lane:u,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ss(e))As(t,d);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=t.lastRenderedReducer,p!==null))try{var v=t.lastRenderedState,b=p(v,r);if(d.hasEagerState=!0,d.eagerState=b,Vt(b,v)){var I=t.interleaved;I===null?(d.next=d,$a(t)):(d.next=I.next,I.next=d),t.interleaved=d;return}}catch{}finally{}r=Qi(e,t,d,u),r!==null&&(d=vt(),zt(r,e,u,d),Es(r,t,u))}}function Ss(e){var t=e.alternate;return e===Ue||t!==null&&t===Ue}function As(e,t){Fl=Tr=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Es(e,t,r){if((r&4194240)!==0){var u=t.lanes;u&=e.pendingLanes,r|=u,t.lanes=r,sa(e,r)}}var Lr={readContext:Pt,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},L0={readContext:Pt,useCallback:function(e,t){return Qt().memoizedState=[e,t===void 0?null:t],e},useContext:Pt,useEffect:ds,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Rr(4194308,4,ms.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Rr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Rr(4,2,e,t)},useMemo:function(e,t){var r=Qt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var u=Qt();return t=r!==void 0?r(t):t,u.memoizedState=u.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},u.queue=e,e=e.dispatch=R0.bind(null,Ue,e),[u.memoizedState,e]},useRef:function(e){var t=Qt();return e={current:e},t.memoizedState=e},useState:us,useDebugValue:oo,useDeferredValue:function(e){return Qt().memoizedState=e},useTransition:function(){var e=us(!1),t=e[0];return e=T0.bind(null,e[1]),Qt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var u=Ue,d=Qt();if(Ne){if(r===void 0)throw Error(o(407));r=r()}else{if(r=t(),nt===null)throw Error(o(349));(Fn&30)!==0||rs(u,t,r)}d.memoizedState=r;var p={value:r,getSnapshot:t};return d.queue=p,ds(os.bind(null,u,p,e),[e]),u.flags|=2048,Kl(9,as.bind(null,u,p,r,t),void 0,null),r},useId:function(){var e=Qt(),t=nt.identifierPrefix;if(Ne){var r=an,u=rn;r=(u&~(1<<32-Nt(u)-1)).toString(32)+r,t=":"+t+"R"+r,r=Ul++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=P0++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},B0={readContext:Pt,useCallback:gs,useContext:Pt,useEffect:ao,useImperativeHandle:hs,useInsertionEffect:ps,useLayoutEffect:fs,useMemo:vs,useReducer:lo,useRef:cs,useState:function(){return lo(Wl)},useDebugValue:oo,useDeferredValue:function(e){var t=Tt();return _s(t,Qe.memoizedState,e)},useTransition:function(){var e=lo(Wl)[0],t=Tt().memoizedState;return[e,t]},useMutableSource:ns,useSyncExternalStore:ls,useId:ys,unstable_isNewReconciler:!1},N0={readContext:Pt,useCallback:gs,useContext:Pt,useEffect:ao,useImperativeHandle:hs,useInsertionEffect:ps,useLayoutEffect:fs,useMemo:vs,useReducer:ro,useRef:cs,useState:function(){return ro(Wl)},useDebugValue:oo,useDeferredValue:function(e){var t=Tt();return Qe===null?t.memoizedState=e:_s(t,Qe.memoizedState,e)},useTransition:function(){var e=ro(Wl)[0],t=Tt().memoizedState;return[e,t]},useMutableSource:ns,useSyncExternalStore:ls,useId:ys,unstable_isNewReconciler:!1};function Ut(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function io(e,t,r,u){t=e.memoizedState,r=r(u,t),r=r==null?t:ee({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Br={isMounted:function(e){return(e=e._reactInternals)?Tn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var u=vt(),d=xn(e),p=sn(u,d);p.payload=t,r!=null&&(p.callback=r),t=Cn(e,p,d),t!==null&&(zt(t,e,d,u),Dr(t,e,d))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var u=vt(),d=xn(e),p=sn(u,d);p.tag=1,p.payload=t,r!=null&&(p.callback=r),t=Cn(e,p,d),t!==null&&(zt(t,e,d,u),Dr(t,e,d))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=vt(),u=xn(e),d=sn(r,u);d.tag=2,t!=null&&(d.callback=t),t=Cn(e,d,u),t!==null&&(zt(t,e,u,r),Dr(t,e,u))}};function Cs(e,t,r,u,d,p,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(u,p,v):t.prototype&&t.prototype.isPureReactComponent?!Dl(r,u)||!Dl(d,p):!0}function ws(e,t,r){var u=!1,d=Sn,p=t.contextType;return typeof p=="object"&&p!==null?p=Pt(p):(d=St(t)?jn:ut.current,u=t.contextTypes,p=(u=u!=null)?tl(e,d):Sn),t=new t(r,p),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Br,e.stateNode=t,t._reactInternals=e,u&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=d,e.__reactInternalMemoizedMaskedChildContext=p),t}function Ms(e,t,r,u){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,u),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,u),t.state!==e&&Br.enqueueReplaceState(t,t.state,null)}function so(e,t,r,u){var d=e.stateNode;d.props=r,d.state=e.memoizedState,d.refs={},Za(e);var p=t.contextType;typeof p=="object"&&p!==null?d.context=Pt(p):(p=St(t)?jn:ut.current,d.context=tl(e,p)),d.state=e.memoizedState,p=t.getDerivedStateFromProps,typeof p=="function"&&(io(e,t,p,r),d.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(t=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),t!==d.state&&Br.enqueueReplaceState(d,d.state,null),Or(e,r,d,u),d.state=e.memoizedState),typeof d.componentDidMount=="function"&&(e.flags|=4194308)}function ul(e,t){try{var r="",u=t;do r+=fe(u),u=u.return;while(u);var d=r}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:e,source:t,stack:d,digest:null}}function uo(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function co(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var V0=typeof WeakMap=="function"?WeakMap:Map;function bs(e,t,r){r=sn(-1,r),r.tag=3,r.payload={element:null};var u=t.value;return r.callback=function(){zr||(zr=!0,bo=u),co(e,t)},r}function xs(e,t,r){r=sn(-1,r),r.tag=3;var u=e.type.getDerivedStateFromError;if(typeof u=="function"){var d=t.value;r.payload=function(){return u(d)},r.callback=function(){co(e,t)}}var p=e.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(r.callback=function(){co(e,t),typeof u!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var v=t.stack;this.componentDidCatch(t.value,{componentStack:v!==null?v:""})}),r}function ks(e,t,r){var u=e.pingCache;if(u===null){u=e.pingCache=new V0;var d=new Set;u.set(t,d)}else d=u.get(t),d===void 0&&(d=new Set,u.set(t,d));d.has(r)||(d.add(r),e=X0.bind(null,e,t,r),t.then(e,e))}function Ds(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Os(e,t,r,u,d){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=sn(-1,1),t.tag=2,Cn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=d,e)}var F0=x.ReactCurrentOwner,At=!1;function gt(e,t,r,u){t.child=e===null?Gi(t,null,r,u):al(t,e.child,r,u)}function Is(e,t,r,u,d){r=r.render;var p=t.ref;return il(t,d),u=to(e,t,r,u,p,d),r=no(),e!==null&&!At?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~d,un(e,t,d)):(Ne&&r&&Na(t),t.flags|=1,gt(e,t,u,d),t.child)}function Ps(e,t,r,u,d){if(e===null){var p=r.type;return typeof p=="function"&&!To(p)&&p.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=p,Ts(e,t,p,u,d)):(e=Gr(r.type,null,u,t,t.mode,d),e.ref=t.ref,e.return=t,t.child=e)}if(p=e.child,(e.lanes&d)===0){var v=p.memoizedProps;if(r=r.compare,r=r!==null?r:Dl,r(v,u)&&e.ref===t.ref)return un(e,t,d)}return t.flags|=1,e=Dn(p,u),e.ref=t.ref,e.return=t,t.child=e}function Ts(e,t,r,u,d){if(e!==null){var p=e.memoizedProps;if(Dl(p,u)&&e.ref===t.ref)if(At=!1,t.pendingProps=u=p,(e.lanes&d)!==0)(e.flags&131072)!==0&&(At=!0);else return t.lanes=e.lanes,un(e,t,d)}return po(e,t,r,u,d)}function Rs(e,t,r){var u=t.pendingProps,d=u.children,p=e!==null?e.memoizedState:null;if(u.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(dl,kt),kt|=r;else{if((r&1073741824)===0)return e=p!==null?p.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,je(dl,kt),kt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:r,je(dl,kt),kt|=u}else p!==null?(u=p.baseLanes|r,t.memoizedState=null):u=r,je(dl,kt),kt|=u;return gt(e,t,d,r),t.child}function js(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function po(e,t,r,u,d){var p=St(r)?jn:ut.current;return p=tl(t,p),il(t,d),r=to(e,t,r,u,p,d),u=no(),e!==null&&!At?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~d,un(e,t,d)):(Ne&&u&&Na(t),t.flags|=1,gt(e,t,r,d),t.child)}function Ls(e,t,r,u,d){if(St(r)){var p=!0;Ar(t)}else p=!1;if(il(t,d),t.stateNode===null)Vr(e,t),ws(t,r,u),so(t,r,u,d),u=!0;else if(e===null){var v=t.stateNode,b=t.memoizedProps;v.props=b;var I=v.context,U=r.contextType;typeof U=="object"&&U!==null?U=Pt(U):(U=St(r)?jn:ut.current,U=tl(t,U));var Z=r.getDerivedStateFromProps,G=typeof Z=="function"||typeof v.getSnapshotBeforeUpdate=="function";G||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(b!==u||I!==U)&&Ms(t,v,u,U),En=!1;var $=t.memoizedState;v.state=$,Or(t,u,v,d),I=t.memoizedState,b!==u||$!==I||yt.current||En?(typeof Z=="function"&&(io(t,r,Z,u),I=t.memoizedState),(b=En||Cs(t,r,b,u,$,I,U))?(G||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(t.flags|=4194308)):(typeof v.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=u,t.memoizedState=I),v.props=u,v.state=I,v.context=U,u=b):(typeof v.componentDidMount=="function"&&(t.flags|=4194308),u=!1)}else{v=t.stateNode,Ji(e,t),b=t.memoizedProps,U=t.type===t.elementType?b:Ut(t.type,b),v.props=U,G=t.pendingProps,$=v.context,I=r.contextType,typeof I=="object"&&I!==null?I=Pt(I):(I=St(r)?jn:ut.current,I=tl(t,I));var oe=r.getDerivedStateFromProps;(Z=typeof oe=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(b!==G||$!==I)&&Ms(t,v,u,I),En=!1,$=t.memoizedState,v.state=$,Or(t,u,v,d);var se=t.memoizedState;b!==G||$!==se||yt.current||En?(typeof oe=="function"&&(io(t,r,oe,u),se=t.memoizedState),(U=En||Cs(t,r,U,u,$,se,I)||!1)?(Z||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(u,se,I),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(u,se,I)),typeof v.componentDidUpdate=="function"&&(t.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof v.componentDidUpdate!="function"||b===e.memoizedProps&&$===e.memoizedState||(t.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&$===e.memoizedState||(t.flags|=1024),t.memoizedProps=u,t.memoizedState=se),v.props=u,v.state=se,v.context=I,u=U):(typeof v.componentDidUpdate!="function"||b===e.memoizedProps&&$===e.memoizedState||(t.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&$===e.memoizedState||(t.flags|=1024),u=!1)}return fo(e,t,r,u,p,d)}function fo(e,t,r,u,d,p){js(e,t);var v=(t.flags&128)!==0;if(!u&&!v)return d&&Ui(t,r,!1),un(e,t,p);u=t.stateNode,F0.current=t;var b=v&&typeof r.getDerivedStateFromError!="function"?null:u.render();return t.flags|=1,e!==null&&v?(t.child=al(t,e.child,null,p),t.child=al(t,null,b,p)):gt(e,t,b,p),t.memoizedState=u.state,d&&Ui(t,r,!0),t.child}function Bs(e){var t=e.stateNode;t.pendingContext?Vi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vi(e,t.context,!1),Ya(e,t.containerInfo)}function Ns(e,t,r,u,d){return rl(),Wa(d),t.flags|=256,gt(e,t,r,u),t.child}var mo={dehydrated:null,treeContext:null,retryLane:0};function ho(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vs(e,t,r){var u=t.pendingProps,d=Fe.current,p=!1,v=(t.flags&128)!==0,b;if((b=v)||(b=e!==null&&e.memoizedState===null?!1:(d&2)!==0),b?(p=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(d|=1),je(Fe,d&1),e===null)return Ua(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(v=u.children,e=u.fallback,p?(u=t.mode,p=t.child,v={mode:"hidden",children:v},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=Qr(v,u,0,null),e=qn(e,u,r,null),p.return=t,e.return=t,p.sibling=e,t.child=p,t.child.memoizedState=ho(r),t.memoizedState=mo,e):go(t,v));if(d=e.memoizedState,d!==null&&(b=d.dehydrated,b!==null))return U0(e,t,v,u,b,d,r);if(p){p=u.fallback,v=t.mode,d=e.child,b=d.sibling;var I={mode:"hidden",children:u.children};return(v&1)===0&&t.child!==d?(u=t.child,u.childLanes=0,u.pendingProps=I,t.deletions=null):(u=Dn(d,I),u.subtreeFlags=d.subtreeFlags&14680064),b!==null?p=Dn(b,p):(p=qn(p,v,r,null),p.flags|=2),p.return=t,u.return=t,u.sibling=p,t.child=u,u=p,p=t.child,v=e.child.memoizedState,v=v===null?ho(r):{baseLanes:v.baseLanes|r,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=e.childLanes&~r,t.memoizedState=mo,u}return p=e.child,e=p.sibling,u=Dn(p,{mode:"visible",children:u.children}),(t.mode&1)===0&&(u.lanes=r),u.return=t,u.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=u,t.memoizedState=null,u}function go(e,t){return t=Qr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Nr(e,t,r,u){return u!==null&&Wa(u),al(t,e.child,null,r),e=go(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function U0(e,t,r,u,d,p,v){if(r)return t.flags&256?(t.flags&=-257,u=uo(Error(o(422))),Nr(e,t,v,u)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(p=u.fallback,d=t.mode,u=Qr({mode:"visible",children:u.children},d,0,null),p=qn(p,d,v,null),p.flags|=2,u.return=t,p.return=t,u.sibling=p,t.child=u,(t.mode&1)!==0&&al(t,e.child,null,v),t.child.memoizedState=ho(v),t.memoizedState=mo,p);if((t.mode&1)===0)return Nr(e,t,v,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var b=u.dgst;return u=b,p=Error(o(419)),u=uo(p,u,void 0),Nr(e,t,v,u)}if(b=(v&e.childLanes)!==0,At||b){if(u=nt,u!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,on(e,d),zt(u,e,d,-1))}return Po(),u=uo(Error(o(421))),Nr(e,t,v,u)}return d.data==="$?"?(t.flags|=128,t.child=e.child,t=ec.bind(null,e),d._reactRetry=t,null):(e=p.treeContext,xt=_n(d.nextSibling),bt=t,Ne=!0,Ft=null,e!==null&&(Ot[It++]=rn,Ot[It++]=an,Ot[It++]=Ln,rn=e.id,an=e.overflow,Ln=t),t=go(t,u.children),t.flags|=4096,t)}function Fs(e,t,r){e.lanes|=t;var u=e.alternate;u!==null&&(u.lanes|=t),Ha(e.return,t,r)}function vo(e,t,r,u,d){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:u,tail:r,tailMode:d}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=r,p.tailMode=d)}function Us(e,t,r){var u=t.pendingProps,d=u.revealOrder,p=u.tail;if(gt(e,t,u.children,r),u=Fe.current,(u&2)!==0)u=u&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fs(e,r,t);else if(e.tag===19)Fs(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}u&=1}if(je(Fe,u),(t.mode&1)===0)t.memoizedState=null;else switch(d){case"forwards":for(r=t.child,d=null;r!==null;)e=r.alternate,e!==null&&Ir(e)===null&&(d=r),r=r.sibling;r=d,r===null?(d=t.child,t.child=null):(d=r.sibling,r.sibling=null),vo(t,!1,d,r,p);break;case"backwards":for(r=null,d=t.child,t.child=null;d!==null;){if(e=d.alternate,e!==null&&Ir(e)===null){t.child=d;break}e=d.sibling,d.sibling=r,r=d,d=e}vo(t,!0,r,null,p);break;case"together":vo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vr(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function un(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Un|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,r=Dn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Dn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function W0(e,t,r){switch(t.tag){case 3:Bs(t),rl();break;case 5:ts(t);break;case 1:St(t.type)&&Ar(t);break;case 4:Ya(t,t.stateNode.containerInfo);break;case 10:var u=t.type._context,d=t.memoizedProps.value;je(xr,u._currentValue),u._currentValue=d;break;case 13:if(u=t.memoizedState,u!==null)return u.dehydrated!==null?(je(Fe,Fe.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Vs(e,t,r):(je(Fe,Fe.current&1),e=un(e,t,r),e!==null?e.sibling:null);je(Fe,Fe.current&1);break;case 19:if(u=(r&t.childLanes)!==0,(e.flags&128)!==0){if(u)return Us(e,t,r);t.flags|=128}if(d=t.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),je(Fe,Fe.current),u)break;return null;case 22:case 23:return t.lanes=0,Rs(e,t,r)}return un(e,t,r)}var Ws,_o,Ks,zs;Ws=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},_o=function(){},Ks=function(e,t,r,u){var d=e.memoizedProps;if(d!==u){e=t.stateNode,Vn(Gt.current);var p=null;switch(r){case"input":d=Ye(e,d),u=Ye(e,u),p=[];break;case"select":d=ee({},d,{value:void 0}),u=ee({},u,{value:void 0}),p=[];break;case"textarea":d=be(e,d),u=be(e,u),p=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(e.onclick=_r)}$t(r,u);var v;r=null;for(U in d)if(!u.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var b=d[U];for(v in b)b.hasOwnProperty(v)&&(r||(r={}),r[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(a.hasOwnProperty(U)?p||(p=[]):(p=p||[]).push(U,null));for(U in u){var I=u[U];if(b=d?.[U],u.hasOwnProperty(U)&&I!==b&&(I!=null||b!=null))if(U==="style")if(b){for(v in b)!b.hasOwnProperty(v)||I&&I.hasOwnProperty(v)||(r||(r={}),r[v]="");for(v in I)I.hasOwnProperty(v)&&b[v]!==I[v]&&(r||(r={}),r[v]=I[v])}else r||(p||(p=[]),p.push(U,r)),r=I;else U==="dangerouslySetInnerHTML"?(I=I?I.__html:void 0,b=b?b.__html:void 0,I!=null&&b!==I&&(p=p||[]).push(U,I)):U==="children"?typeof I!="string"&&typeof I!="number"||(p=p||[]).push(U,""+I):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(a.hasOwnProperty(U)?(I!=null&&U==="onScroll"&&Le("scroll",e),p||b===I||(p=[])):(p=p||[]).push(U,I))}r&&(p=p||[]).push("style",r);var U=p;(t.updateQueue=U)&&(t.flags|=4)}},zs=function(e,t,r,u){r!==u&&(t.flags|=4)};function zl(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var u=null;r!==null;)r.alternate!==null&&(u=r),r=r.sibling;u===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:u.sibling=null}}function dt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,u=0;if(t)for(var d=e.child;d!==null;)r|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)r|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=u,e.childLanes=r,t}function K0(e,t,r){var u=t.pendingProps;switch(Va(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(t),null;case 1:return St(t.type)&&Sr(),dt(t),null;case 3:return u=t.stateNode,sl(),Be(yt),Be(ut),Ja(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(e===null||e.child===null)&&(Mr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ft!==null&&(Do(Ft),Ft=null))),_o(e,t),dt(t),null;case 5:Ga(t);var d=Vn(Vl.current);if(r=t.type,e!==null&&t.stateNode!=null)Ks(e,t,r,u,d),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!u){if(t.stateNode===null)throw Error(o(166));return dt(t),null}if(e=Vn(Gt.current),Mr(t)){u=t.stateNode,r=t.type;var p=t.memoizedProps;switch(u[Yt]=t,u[Rl]=p,e=(t.mode&1)!==0,r){case"dialog":Le("cancel",u),Le("close",u);break;case"iframe":case"object":case"embed":Le("load",u);break;case"video":case"audio":for(d=0;d<Il.length;d++)Le(Il[d],u);break;case"source":Le("error",u);break;case"img":case"image":case"link":Le("error",u),Le("load",u);break;case"details":Le("toggle",u);break;case"input":Xe(u,p),Le("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Le("invalid",u);break;case"textarea":xe(u,p),Le("invalid",u)}$t(r,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var b=p[v];v==="children"?typeof b=="string"?u.textContent!==b&&(p.suppressHydrationWarning!==!0&&vr(u.textContent,b,e),d=["children",b]):typeof b=="number"&&u.textContent!==""+b&&(p.suppressHydrationWarning!==!0&&vr(u.textContent,b,e),d=["children",""+b]):a.hasOwnProperty(v)&&b!=null&&v==="onScroll"&&Le("scroll",u)}switch(r){case"input":it(u),re(u,p,!0);break;case"textarea":it(u),ft(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=_r)}u=d,t.updateQueue=u,u!==null&&(t.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mt(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=v.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof u.is=="string"?e=v.createElement(r,{is:u.is}):(e=v.createElement(r),r==="select"&&(v=e,u.multiple?v.multiple=!0:u.size&&(v.size=u.size))):e=v.createElementNS(e,r),e[Yt]=t,e[Rl]=u,Ws(e,t,!1,!1),t.stateNode=e;e:{switch(v=In(r,u),r){case"dialog":Le("cancel",e),Le("close",e),d=u;break;case"iframe":case"object":case"embed":Le("load",e),d=u;break;case"video":case"audio":for(d=0;d<Il.length;d++)Le(Il[d],e);d=u;break;case"source":Le("error",e),d=u;break;case"img":case"image":case"link":Le("error",e),Le("load",e),d=u;break;case"details":Le("toggle",e),d=u;break;case"input":Xe(e,u),d=Ye(e,u),Le("invalid",e);break;case"option":d=u;break;case"select":e._wrapperState={wasMultiple:!!u.multiple},d=ee({},u,{value:void 0}),Le("invalid",e);break;case"textarea":xe(e,u),d=be(e,u),Le("invalid",e);break;default:d=u}$t(r,d),b=d;for(p in b)if(b.hasOwnProperty(p)){var I=b[p];p==="style"?Ht(e,I):p==="dangerouslySetInnerHTML"?(I=I?I.__html:void 0,I!=null&&qt(e,I)):p==="children"?typeof I=="string"?(r!=="textarea"||I!=="")&&Bt(e,I):typeof I=="number"&&Bt(e,""+I):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?I!=null&&p==="onScroll"&&Le("scroll",e):I!=null&&L(e,p,I,v))}switch(r){case"input":it(e),re(e,u,!1);break;case"textarea":it(e),ft(e);break;case"option":u.value!=null&&e.setAttribute("value",""+he(u.value));break;case"select":e.multiple=!!u.multiple,p=u.value,p!=null?Re(e,!!u.multiple,p,!1):u.defaultValue!=null&&Re(e,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(e.onclick=_r)}switch(r){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return dt(t),null;case 6:if(e&&t.stateNode!=null)zs(e,t,e.memoizedProps,u);else{if(typeof u!="string"&&t.stateNode===null)throw Error(o(166));if(r=Vn(Vl.current),Vn(Gt.current),Mr(t)){if(u=t.stateNode,r=t.memoizedProps,u[Yt]=t,(p=u.nodeValue!==r)&&(e=bt,e!==null))switch(e.tag){case 3:vr(u.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vr(u.nodeValue,r,(e.mode&1)!==0)}p&&(t.flags|=4)}else u=(r.nodeType===9?r:r.ownerDocument).createTextNode(u),u[Yt]=t,t.stateNode=u}return dt(t),null;case 13:if(Be(Fe),u=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&xt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)$i(),rl(),t.flags|=98560,p=!1;else if(p=Mr(t),u!==null&&u.dehydrated!==null){if(e===null){if(!p)throw Error(o(318));if(p=t.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(o(317));p[Yt]=t}else rl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;dt(t),p=!1}else Ft!==null&&(Do(Ft),Ft=null),p=!0;if(!p)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(u=u!==null,u!==(e!==null&&e.memoizedState!==null)&&u&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Fe.current&1)!==0?Je===0&&(Je=3):Po())),t.updateQueue!==null&&(t.flags|=4),dt(t),null);case 4:return sl(),_o(e,t),e===null&&Pl(t.stateNode.containerInfo),dt(t),null;case 10:return qa(t.type._context),dt(t),null;case 17:return St(t.type)&&Sr(),dt(t),null;case 19:if(Be(Fe),p=t.memoizedState,p===null)return dt(t),null;if(u=(t.flags&128)!==0,v=p.rendering,v===null)if(u)zl(p,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(v=Ir(e),v!==null){for(t.flags|=128,zl(p,!1),u=v.updateQueue,u!==null&&(t.updateQueue=u,t.flags|=4),t.subtreeFlags=0,u=r,r=t.child;r!==null;)p=r,e=u,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=e,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,e=v.dependencies,p.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return je(Fe,Fe.current&1|2),t.child}e=e.sibling}p.tail!==null&&qe()>pl&&(t.flags|=128,u=!0,zl(p,!1),t.lanes=4194304)}else{if(!u)if(e=Ir(v),e!==null){if(t.flags|=128,u=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),zl(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Ne)return dt(t),null}else 2*qe()-p.renderingStartTime>pl&&r!==1073741824&&(t.flags|=128,u=!0,zl(p,!1),t.lanes=4194304);p.isBackwards?(v.sibling=t.child,t.child=v):(r=p.last,r!==null?r.sibling=v:t.child=v,p.last=v)}return p.tail!==null?(t=p.tail,p.rendering=t,p.tail=t.sibling,p.renderingStartTime=qe(),t.sibling=null,r=Fe.current,je(Fe,u?r&1|2:r&1),t):(dt(t),null);case 22:case 23:return Io(),u=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==u&&(t.flags|=8192),u&&(t.mode&1)!==0?(kt&1073741824)!==0&&(dt(t),t.subtreeFlags&6&&(t.flags|=8192)):dt(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function z0(e,t){switch(Va(t),t.tag){case 1:return St(t.type)&&Sr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sl(),Be(yt),Be(ut),Ja(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ga(t),null;case 13:if(Be(Fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));rl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Be(Fe),null;case 4:return sl(),null;case 10:return qa(t.type._context),null;case 22:case 23:return Io(),null;case 24:return null;default:return null}}var Fr=!1,pt=!1,q0=typeof WeakSet=="function"?WeakSet:Set,ie=null;function cl(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(u){Ke(e,t,u)}else r.current=null}function yo(e,t,r){try{r()}catch(u){Ke(e,t,u)}}var qs=!1;function H0(e,t){if(Oa=or,e=Ci(),Ea(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{r.nodeType,p.nodeType}catch{r=null;break e}var v=0,b=-1,I=-1,U=0,Z=0,G=e,$=null;t:for(;;){for(var oe;G!==r||d!==0&&G.nodeType!==3||(b=v+d),G!==p||u!==0&&G.nodeType!==3||(I=v+u),G.nodeType===3&&(v+=G.nodeValue.length),(oe=G.firstChild)!==null;)$=G,G=oe;for(;;){if(G===e)break t;if($===r&&++U===d&&(b=v),$===p&&++Z===u&&(I=v),(oe=G.nextSibling)!==null)break;G=$,$=G.parentNode}G=oe}r=b===-1||I===-1?null:{start:b,end:I}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ia={focusedElem:e,selectionRange:r},or=!1,ie=t;ie!==null;)if(t=ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ie=e;else for(;ie!==null;){t=ie;try{var se=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var ce=se.memoizedProps,He=se.memoizedState,N=t.stateNode,P=N.getSnapshotBeforeUpdate(t.elementType===t.type?ce:Ut(t.type,ce),He);N.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var F=t.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(Q){Ke(t,t.return,Q)}if(e=t.sibling,e!==null){e.return=t.return,ie=e;break}ie=t.return}return se=qs,qs=!1,se}function ql(e,t,r){var u=t.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&e)===e){var p=d.destroy;d.destroy=void 0,p!==void 0&&yo(t,r,p)}d=d.next}while(d!==u)}}function Ur(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var u=r.create;r.destroy=u()}r=r.next}while(r!==t)}}function So(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Hs(e){var t=e.alternate;t!==null&&(e.alternate=null,Hs(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Yt],delete t[Rl],delete t[ja],delete t[k0],delete t[D0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $s(e){return e.tag===5||e.tag===3||e.tag===4}function Zs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$s(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ao(e,t,r){var u=e.tag;if(u===5||u===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=_r));else if(u!==4&&(e=e.child,e!==null))for(Ao(e,t,r),e=e.sibling;e!==null;)Ao(e,t,r),e=e.sibling}function Eo(e,t,r){var u=e.tag;if(u===5||u===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(u!==4&&(e=e.child,e!==null))for(Eo(e,t,r),e=e.sibling;e!==null;)Eo(e,t,r),e=e.sibling}var at=null,Wt=!1;function wn(e,t,r){for(r=r.child;r!==null;)Ys(e,t,r),r=r.sibling}function Ys(e,t,r){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(er,r)}catch{}switch(r.tag){case 5:pt||cl(r,t);case 6:var u=at,d=Wt;at=null,wn(e,t,r),at=u,Wt=d,at!==null&&(Wt?(e=at,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):at.removeChild(r.stateNode));break;case 18:at!==null&&(Wt?(e=at,r=r.stateNode,e.nodeType===8?Ra(e.parentNode,r):e.nodeType===1&&Ra(e,r),Cl(e)):Ra(at,r.stateNode));break;case 4:u=at,d=Wt,at=r.stateNode.containerInfo,Wt=!0,wn(e,t,r),at=u,Wt=d;break;case 0:case 11:case 14:case 15:if(!pt&&(u=r.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&yo(r,t,v),d=d.next}while(d!==u)}wn(e,t,r);break;case 1:if(!pt&&(cl(r,t),u=r.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=r.memoizedProps,u.state=r.memoizedState,u.componentWillUnmount()}catch(b){Ke(r,t,b)}wn(e,t,r);break;case 21:wn(e,t,r);break;case 22:r.mode&1?(pt=(u=pt)||r.memoizedState!==null,wn(e,t,r),pt=u):wn(e,t,r);break;default:wn(e,t,r)}}function Gs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new q0),t.forEach(function(u){var d=tc.bind(null,e,u);r.has(u)||(r.add(u),u.then(d,d))})}}function Kt(e,t){var r=t.deletions;if(r!==null)for(var u=0;u<r.length;u++){var d=r[u];try{var p=e,v=t,b=v;e:for(;b!==null;){switch(b.tag){case 5:at=b.stateNode,Wt=!1;break e;case 3:at=b.stateNode.containerInfo,Wt=!0;break e;case 4:at=b.stateNode.containerInfo,Wt=!0;break e}b=b.return}if(at===null)throw Error(o(160));Ys(p,v,d),at=null,Wt=!1;var I=d.alternate;I!==null&&(I.return=null),d.return=null}catch(U){Ke(d,t,U)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Qs(t,e),t=t.sibling}function Qs(e,t){var r=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Kt(t,e),Jt(e),u&4){try{ql(3,e,e.return),Ur(3,e)}catch(ce){Ke(e,e.return,ce)}try{ql(5,e,e.return)}catch(ce){Ke(e,e.return,ce)}}break;case 1:Kt(t,e),Jt(e),u&512&&r!==null&&cl(r,r.return);break;case 5:if(Kt(t,e),Jt(e),u&512&&r!==null&&cl(r,r.return),e.flags&32){var d=e.stateNode;try{Bt(d,"")}catch(ce){Ke(e,e.return,ce)}}if(u&4&&(d=e.stateNode,d!=null)){var p=e.memoizedProps,v=r!==null?r.memoizedProps:p,b=e.type,I=e.updateQueue;if(e.updateQueue=null,I!==null)try{b==="input"&&p.type==="radio"&&p.name!=null&&Lt(d,p),In(b,v);var U=In(b,p);for(v=0;v<I.length;v+=2){var Z=I[v],G=I[v+1];Z==="style"?Ht(d,G):Z==="dangerouslySetInnerHTML"?qt(d,G):Z==="children"?Bt(d,G):L(d,Z,G,U)}switch(b){case"input":le(d,p);break;case"textarea":et(d,p);break;case"select":var $=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var oe=p.value;oe!=null?Re(d,!!p.multiple,oe,!1):$!==!!p.multiple&&(p.defaultValue!=null?Re(d,!!p.multiple,p.defaultValue,!0):Re(d,!!p.multiple,p.multiple?[]:"",!1))}d[Rl]=p}catch(ce){Ke(e,e.return,ce)}}break;case 6:if(Kt(t,e),Jt(e),u&4){if(e.stateNode===null)throw Error(o(162));d=e.stateNode,p=e.memoizedProps;try{d.nodeValue=p}catch(ce){Ke(e,e.return,ce)}}break;case 3:if(Kt(t,e),Jt(e),u&4&&r!==null&&r.memoizedState.isDehydrated)try{Cl(t.containerInfo)}catch(ce){Ke(e,e.return,ce)}break;case 4:Kt(t,e),Jt(e);break;case 13:Kt(t,e),Jt(e),d=e.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Mo=qe())),u&4&&Gs(e);break;case 22:if(Z=r!==null&&r.memoizedState!==null,e.mode&1?(pt=(U=pt)||Z,Kt(t,e),pt=U):Kt(t,e),Jt(e),u&8192){if(U=e.memoizedState!==null,(e.stateNode.isHidden=U)&&!Z&&(e.mode&1)!==0)for(ie=e,Z=e.child;Z!==null;){for(G=ie=Z;ie!==null;){switch($=ie,oe=$.child,$.tag){case 0:case 11:case 14:case 15:ql(4,$,$.return);break;case 1:cl($,$.return);var se=$.stateNode;if(typeof se.componentWillUnmount=="function"){u=$,r=$.return;try{t=u,se.props=t.memoizedProps,se.state=t.memoizedState,se.componentWillUnmount()}catch(ce){Ke(u,r,ce)}}break;case 5:cl($,$.return);break;case 22:if($.memoizedState!==null){eu(G);continue}}oe!==null?(oe.return=$,ie=oe):eu(G)}Z=Z.sibling}e:for(Z=null,G=e;;){if(G.tag===5){if(Z===null){Z=G;try{d=G.stateNode,U?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(b=G.stateNode,I=G.memoizedProps.style,v=I!=null&&I.hasOwnProperty("display")?I.display:null,b.style.display=Dt("display",v))}catch(ce){Ke(e,e.return,ce)}}}else if(G.tag===6){if(Z===null)try{G.stateNode.nodeValue=U?"":G.memoizedProps}catch(ce){Ke(e,e.return,ce)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===e)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===e)break e;for(;G.sibling===null;){if(G.return===null||G.return===e)break e;Z===G&&(Z=null),G=G.return}Z===G&&(Z=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:Kt(t,e),Jt(e),u&4&&Gs(e);break;case 21:break;default:Kt(t,e),Jt(e)}}function Jt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if($s(r)){var u=r;break e}r=r.return}throw Error(o(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Bt(d,""),u.flags&=-33);var p=Zs(e);Eo(e,p,d);break;case 3:case 4:var v=u.stateNode.containerInfo,b=Zs(e);Ao(e,b,v);break;default:throw Error(o(161))}}catch(I){Ke(e,e.return,I)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $0(e,t,r){ie=e,Js(e)}function Js(e,t,r){for(var u=(e.mode&1)!==0;ie!==null;){var d=ie,p=d.child;if(d.tag===22&&u){var v=d.memoizedState!==null||Fr;if(!v){var b=d.alternate,I=b!==null&&b.memoizedState!==null||pt;b=Fr;var U=pt;if(Fr=v,(pt=I)&&!U)for(ie=d;ie!==null;)v=ie,I=v.child,v.tag===22&&v.memoizedState!==null?tu(d):I!==null?(I.return=v,ie=I):tu(d);for(;p!==null;)ie=p,Js(p),p=p.sibling;ie=d,Fr=b,pt=U}Xs(e)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,ie=p):Xs(e)}}function Xs(e){for(;ie!==null;){var t=ie;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:pt||Ur(5,t);break;case 1:var u=t.stateNode;if(t.flags&4&&!pt)if(r===null)u.componentDidMount();else{var d=t.elementType===t.type?r.memoizedProps:Ut(t.type,r.memoizedProps);u.componentDidUpdate(d,r.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=t.updateQueue;p!==null&&es(t,p,u);break;case 3:var v=t.updateQueue;if(v!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}es(t,v,r)}break;case 5:var b=t.stateNode;if(r===null&&t.flags&4){r=b;var I=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":I.autoFocus&&r.focus();break;case"img":I.src&&(r.src=I.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var U=t.alternate;if(U!==null){var Z=U.memoizedState;if(Z!==null){var G=Z.dehydrated;G!==null&&Cl(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}pt||t.flags&512&&So(t)}catch($){Ke(t,t.return,$)}}if(t===e){ie=null;break}if(r=t.sibling,r!==null){r.return=t.return,ie=r;break}ie=t.return}}function eu(e){for(;ie!==null;){var t=ie;if(t===e){ie=null;break}var r=t.sibling;if(r!==null){r.return=t.return,ie=r;break}ie=t.return}}function tu(e){for(;ie!==null;){var t=ie;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ur(4,t)}catch(I){Ke(t,r,I)}break;case 1:var u=t.stateNode;if(typeof u.componentDidMount=="function"){var d=t.return;try{u.componentDidMount()}catch(I){Ke(t,d,I)}}var p=t.return;try{So(t)}catch(I){Ke(t,p,I)}break;case 5:var v=t.return;try{So(t)}catch(I){Ke(t,v,I)}}}catch(I){Ke(t,t.return,I)}if(t===e){ie=null;break}var b=t.sibling;if(b!==null){b.return=t.return,ie=b;break}ie=t.return}}var Z0=Math.ceil,Wr=x.ReactCurrentDispatcher,Co=x.ReactCurrentOwner,Rt=x.ReactCurrentBatchConfig,Oe=0,nt=null,Ze=null,ot=0,kt=0,dl=yn(0),Je=0,Hl=null,Un=0,Kr=0,wo=0,$l=null,Et=null,Mo=0,pl=1/0,cn=null,zr=!1,bo=null,Mn=null,qr=!1,bn=null,Hr=0,Zl=0,xo=null,$r=-1,Zr=0;function vt(){return(Oe&6)!==0?qe():$r!==-1?$r:$r=qe()}function xn(e){return(e.mode&1)===0?1:(Oe&2)!==0&&ot!==0?ot&-ot:I0.transition!==null?(Zr===0&&(Zr=Zo()),Zr):(e=Te,e!==0||(e=window.event,e=e===void 0?16:li(e.type)),e)}function zt(e,t,r,u){if(50<Zl)throw Zl=0,xo=null,Error(o(185));_l(e,r,u),((Oe&2)===0||e!==nt)&&(e===nt&&((Oe&2)===0&&(Kr|=r),Je===4&&kn(e,ot)),Ct(e,u),r===1&&Oe===0&&(t.mode&1)===0&&(pl=qe()+500,Er&&An()))}function Ct(e,t){var r=e.callbackNode;Iu(e,t);var u=lr(e,e===nt?ot:0);if(u===0)r!==null&&qo(r),e.callbackNode=null,e.callbackPriority=0;else if(t=u&-u,e.callbackPriority!==t){if(r!=null&&qo(r),t===1)e.tag===0?O0(lu.bind(null,e)):Wi(lu.bind(null,e)),b0(function(){(Oe&6)===0&&An()}),r=null;else{switch(Yo(u)){case 1:r=aa;break;case 4:r=Ho;break;case 16:r=Xl;break;case 536870912:r=$o;break;default:r=Xl}r=du(r,nu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function nu(e,t){if($r=-1,Zr=0,(Oe&6)!==0)throw Error(o(327));var r=e.callbackNode;if(fl()&&e.callbackNode!==r)return null;var u=lr(e,e===nt?ot:0);if(u===0)return null;if((u&30)!==0||(u&e.expiredLanes)!==0||t)t=Yr(e,u);else{t=u;var d=Oe;Oe|=2;var p=au();(nt!==e||ot!==t)&&(cn=null,pl=qe()+500,Kn(e,t));do try{Q0();break}catch(b){ru(e,b)}while(!0);za(),Wr.current=p,Oe=d,Ze!==null?t=0:(nt=null,ot=0,t=Je)}if(t!==0){if(t===2&&(d=oa(e),d!==0&&(u=d,t=ko(e,d))),t===1)throw r=Hl,Kn(e,0),kn(e,u),Ct(e,qe()),r;if(t===6)kn(e,u);else{if(d=e.current.alternate,(u&30)===0&&!Y0(d)&&(t=Yr(e,u),t===2&&(p=oa(e),p!==0&&(u=p,t=ko(e,p))),t===1))throw r=Hl,Kn(e,0),kn(e,u),Ct(e,qe()),r;switch(e.finishedWork=d,e.finishedLanes=u,t){case 0:case 1:throw Error(o(345));case 2:zn(e,Et,cn);break;case 3:if(kn(e,u),(u&130023424)===u&&(t=Mo+500-qe(),10<t)){if(lr(e,0)!==0)break;if(d=e.suspendedLanes,(d&u)!==u){vt(),e.pingedLanes|=e.suspendedLanes&d;break}e.timeoutHandle=Ta(zn.bind(null,e,Et,cn),t);break}zn(e,Et,cn);break;case 4:if(kn(e,u),(u&4194240)===u)break;for(t=e.eventTimes,d=-1;0<u;){var v=31-Nt(u);p=1<<v,v=t[v],v>d&&(d=v),u&=~p}if(u=d,u=qe()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Z0(u/1960))-u,10<u){e.timeoutHandle=Ta(zn.bind(null,e,Et,cn),u);break}zn(e,Et,cn);break;case 5:zn(e,Et,cn);break;default:throw Error(o(329))}}}return Ct(e,qe()),e.callbackNode===r?nu.bind(null,e):null}function ko(e,t){var r=$l;return e.current.memoizedState.isDehydrated&&(Kn(e,t).flags|=256),e=Yr(e,t),e!==2&&(t=Et,Et=r,t!==null&&Do(t)),e}function Do(e){Et===null?Et=e:Et.push.apply(Et,e)}function Y0(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var u=0;u<r.length;u++){var d=r[u],p=d.getSnapshot;d=d.value;try{if(!Vt(p(),d))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kn(e,t){for(t&=~wo,t&=~Kr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Nt(t),u=1<<r;e[r]=-1,t&=~u}}function lu(e){if((Oe&6)!==0)throw Error(o(327));fl();var t=lr(e,0);if((t&1)===0)return Ct(e,qe()),null;var r=Yr(e,t);if(e.tag!==0&&r===2){var u=oa(e);u!==0&&(t=u,r=ko(e,u))}if(r===1)throw r=Hl,Kn(e,0),kn(e,t),Ct(e,qe()),r;if(r===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zn(e,Et,cn),Ct(e,qe()),null}function Oo(e,t){var r=Oe;Oe|=1;try{return e(t)}finally{Oe=r,Oe===0&&(pl=qe()+500,Er&&An())}}function Wn(e){bn!==null&&bn.tag===0&&(Oe&6)===0&&fl();var t=Oe;Oe|=1;var r=Rt.transition,u=Te;try{if(Rt.transition=null,Te=1,e)return e()}finally{Te=u,Rt.transition=r,Oe=t,(Oe&6)===0&&An()}}function Io(){kt=dl.current,Be(dl)}function Kn(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,M0(r)),Ze!==null)for(r=Ze.return;r!==null;){var u=r;switch(Va(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Sr();break;case 3:sl(),Be(yt),Be(ut),Ja();break;case 5:Ga(u);break;case 4:sl();break;case 13:Be(Fe);break;case 19:Be(Fe);break;case 10:qa(u.type._context);break;case 22:case 23:Io()}r=r.return}if(nt=e,Ze=e=Dn(e.current,null),ot=kt=t,Je=0,Hl=null,wo=Kr=Un=0,Et=$l=null,Nn!==null){for(t=0;t<Nn.length;t++)if(r=Nn[t],u=r.interleaved,u!==null){r.interleaved=null;var d=u.next,p=r.pending;if(p!==null){var v=p.next;p.next=d,u.next=v}r.pending=u}Nn=null}return e}function ru(e,t){do{var r=Ze;try{if(za(),Pr.current=Lr,Tr){for(var u=Ue.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Tr=!1}if(Fn=0,tt=Qe=Ue=null,Fl=!1,Ul=0,Co.current=null,r===null||r.return===null){Je=1,Hl=t,Ze=null;break}e:{var p=e,v=r.return,b=r,I=t;if(t=ot,b.flags|=32768,I!==null&&typeof I=="object"&&typeof I.then=="function"){var U=I,Z=b,G=Z.tag;if((Z.mode&1)===0&&(G===0||G===11||G===15)){var $=Z.alternate;$?(Z.updateQueue=$.updateQueue,Z.memoizedState=$.memoizedState,Z.lanes=$.lanes):(Z.updateQueue=null,Z.memoizedState=null)}var oe=Ds(v);if(oe!==null){oe.flags&=-257,Os(oe,v,b,p,t),oe.mode&1&&ks(p,U,t),t=oe,I=U;var se=t.updateQueue;if(se===null){var ce=new Set;ce.add(I),t.updateQueue=ce}else se.add(I);break e}else{if((t&1)===0){ks(p,U,t),Po();break e}I=Error(o(426))}}else if(Ne&&b.mode&1){var He=Ds(v);if(He!==null){(He.flags&65536)===0&&(He.flags|=256),Os(He,v,b,p,t),Wa(ul(I,b));break e}}p=I=ul(I,b),Je!==4&&(Je=2),$l===null?$l=[p]:$l.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,t&=-t,p.lanes|=t;var N=bs(p,I,t);Xi(p,N);break e;case 1:b=I;var P=p.type,F=p.stateNode;if((p.flags&128)===0&&(typeof P.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(Mn===null||!Mn.has(F)))){p.flags|=65536,t&=-t,p.lanes|=t;var Q=xs(p,b,t);Xi(p,Q);break e}}p=p.return}while(p!==null)}iu(r)}catch(de){t=de,Ze===r&&r!==null&&(Ze=r=r.return);continue}break}while(!0)}function au(){var e=Wr.current;return Wr.current=Lr,e===null?Lr:e}function Po(){(Je===0||Je===3||Je===2)&&(Je=4),nt===null||(Un&268435455)===0&&(Kr&268435455)===0||kn(nt,ot)}function Yr(e,t){var r=Oe;Oe|=2;var u=au();(nt!==e||ot!==t)&&(cn=null,Kn(e,t));do try{G0();break}catch(d){ru(e,d)}while(!0);if(za(),Oe=r,Wr.current=u,Ze!==null)throw Error(o(261));return nt=null,ot=0,Je}function G0(){for(;Ze!==null;)ou(Ze)}function Q0(){for(;Ze!==null&&!Eu();)ou(Ze)}function ou(e){var t=cu(e.alternate,e,kt);e.memoizedProps=e.pendingProps,t===null?iu(e):Ze=t,Co.current=null}function iu(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=K0(r,t,kt),r!==null){Ze=r;return}}else{if(r=z0(r,t),r!==null){r.flags&=32767,Ze=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Je=6,Ze=null;return}}if(t=t.sibling,t!==null){Ze=t;return}Ze=t=e}while(t!==null);Je===0&&(Je=5)}function zn(e,t,r){var u=Te,d=Rt.transition;try{Rt.transition=null,Te=1,J0(e,t,r,u)}finally{Rt.transition=d,Te=u}return null}function J0(e,t,r,u){do fl();while(bn!==null);if((Oe&6)!==0)throw Error(o(327));r=e.finishedWork;var d=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var p=r.lanes|r.childLanes;if(Pu(e,p),e===nt&&(Ze=nt=null,ot=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||qr||(qr=!0,du(Xl,function(){return fl(),null})),p=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||p){p=Rt.transition,Rt.transition=null;var v=Te;Te=1;var b=Oe;Oe|=4,Co.current=null,H0(e,r),Qs(r,e),_0(Ia),or=!!Oa,Ia=Oa=null,e.current=r,$0(r),Cu(),Oe=b,Te=v,Rt.transition=p}else e.current=r;if(qr&&(qr=!1,bn=e,Hr=d),p=e.pendingLanes,p===0&&(Mn=null),bu(r.stateNode),Ct(e,qe()),t!==null)for(u=e.onRecoverableError,r=0;r<t.length;r++)d=t[r],u(d.value,{componentStack:d.stack,digest:d.digest});if(zr)throw zr=!1,e=bo,bo=null,e;return(Hr&1)!==0&&e.tag!==0&&fl(),p=e.pendingLanes,(p&1)!==0?e===xo?Zl++:(Zl=0,xo=e):Zl=0,An(),null}function fl(){if(bn!==null){var e=Yo(Hr),t=Rt.transition,r=Te;try{if(Rt.transition=null,Te=16>e?16:e,bn===null)var u=!1;else{if(e=bn,bn=null,Hr=0,(Oe&6)!==0)throw Error(o(331));var d=Oe;for(Oe|=4,ie=e.current;ie!==null;){var p=ie,v=p.child;if((ie.flags&16)!==0){var b=p.deletions;if(b!==null){for(var I=0;I<b.length;I++){var U=b[I];for(ie=U;ie!==null;){var Z=ie;switch(Z.tag){case 0:case 11:case 15:ql(8,Z,p)}var G=Z.child;if(G!==null)G.return=Z,ie=G;else for(;ie!==null;){Z=ie;var $=Z.sibling,oe=Z.return;if(Hs(Z),Z===U){ie=null;break}if($!==null){$.return=oe,ie=$;break}ie=oe}}}var se=p.alternate;if(se!==null){var ce=se.child;if(ce!==null){se.child=null;do{var He=ce.sibling;ce.sibling=null,ce=He}while(ce!==null)}}ie=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,ie=v;else e:for(;ie!==null;){if(p=ie,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ql(9,p,p.return)}var N=p.sibling;if(N!==null){N.return=p.return,ie=N;break e}ie=p.return}}var P=e.current;for(ie=P;ie!==null;){v=ie;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,ie=F;else e:for(v=P;ie!==null;){if(b=ie,(b.flags&2048)!==0)try{switch(b.tag){case 0:case 11:case 15:Ur(9,b)}}catch(de){Ke(b,b.return,de)}if(b===v){ie=null;break e}var Q=b.sibling;if(Q!==null){Q.return=b.return,ie=Q;break e}ie=b.return}}if(Oe=d,An(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(er,e)}catch{}u=!0}return u}finally{Te=r,Rt.transition=t}}return!1}function su(e,t,r){t=ul(r,t),t=bs(e,t,1),e=Cn(e,t,1),t=vt(),e!==null&&(_l(e,1,t),Ct(e,t))}function Ke(e,t,r){if(e.tag===3)su(e,e,r);else for(;t!==null;){if(t.tag===3){su(t,e,r);break}else if(t.tag===1){var u=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Mn===null||!Mn.has(u))){e=ul(r,e),e=xs(t,e,1),t=Cn(t,e,1),e=vt(),t!==null&&(_l(t,1,e),Ct(t,e));break}}t=t.return}}function X0(e,t,r){var u=e.pingCache;u!==null&&u.delete(t),t=vt(),e.pingedLanes|=e.suspendedLanes&r,nt===e&&(ot&r)===r&&(Je===4||Je===3&&(ot&130023424)===ot&&500>qe()-Mo?Kn(e,0):wo|=r),Ct(e,t)}function uu(e,t){t===0&&((e.mode&1)===0?t=1:(t=nr,nr<<=1,(nr&130023424)===0&&(nr=4194304)));var r=vt();e=on(e,t),e!==null&&(_l(e,t,r),Ct(e,r))}function ec(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),uu(e,r)}function tc(e,t){var r=0;switch(e.tag){case 13:var u=e.stateNode,d=e.memoizedState;d!==null&&(r=d.retryLane);break;case 19:u=e.stateNode;break;default:throw Error(o(314))}u!==null&&u.delete(t),uu(e,r)}var cu;cu=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||yt.current)At=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return At=!1,W0(e,t,r);At=(e.flags&131072)!==0}else At=!1,Ne&&(t.flags&1048576)!==0&&Ki(t,wr,t.index);switch(t.lanes=0,t.tag){case 2:var u=t.type;Vr(e,t),e=t.pendingProps;var d=tl(t,ut.current);il(t,r),d=to(null,t,u,e,d,r);var p=no();return t.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,St(u)?(p=!0,Ar(t)):p=!1,t.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Za(t),d.updater=Br,t.stateNode=d,d._reactInternals=t,so(t,u,e,r),t=fo(null,t,u,!0,p,r)):(t.tag=0,Ne&&p&&Na(t),gt(null,t,d,r),t=t.child),t;case 16:u=t.elementType;e:{switch(Vr(e,t),e=t.pendingProps,d=u._init,u=d(u._payload),t.type=u,d=t.tag=lc(u),e=Ut(u,e),d){case 0:t=po(null,t,u,e,r);break e;case 1:t=Ls(null,t,u,e,r);break e;case 11:t=Is(null,t,u,e,r);break e;case 14:t=Ps(null,t,u,Ut(u.type,e),r);break e}throw Error(o(306,u,""))}return t;case 0:return u=t.type,d=t.pendingProps,d=t.elementType===u?d:Ut(u,d),po(e,t,u,d,r);case 1:return u=t.type,d=t.pendingProps,d=t.elementType===u?d:Ut(u,d),Ls(e,t,u,d,r);case 3:e:{if(Bs(t),e===null)throw Error(o(387));u=t.pendingProps,p=t.memoizedState,d=p.element,Ji(e,t),Or(t,u,null,r);var v=t.memoizedState;if(u=v.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},t.updateQueue.baseState=p,t.memoizedState=p,t.flags&256){d=ul(Error(o(423)),t),t=Ns(e,t,u,r,d);break e}else if(u!==d){d=ul(Error(o(424)),t),t=Ns(e,t,u,r,d);break e}else for(xt=_n(t.stateNode.containerInfo.firstChild),bt=t,Ne=!0,Ft=null,r=Gi(t,null,u,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(rl(),u===d){t=un(e,t,r);break e}gt(e,t,u,r)}t=t.child}return t;case 5:return ts(t),e===null&&Ua(t),u=t.type,d=t.pendingProps,p=e!==null?e.memoizedProps:null,v=d.children,Pa(u,d)?v=null:p!==null&&Pa(u,p)&&(t.flags|=32),js(e,t),gt(e,t,v,r),t.child;case 6:return e===null&&Ua(t),null;case 13:return Vs(e,t,r);case 4:return Ya(t,t.stateNode.containerInfo),u=t.pendingProps,e===null?t.child=al(t,null,u,r):gt(e,t,u,r),t.child;case 11:return u=t.type,d=t.pendingProps,d=t.elementType===u?d:Ut(u,d),Is(e,t,u,d,r);case 7:return gt(e,t,t.pendingProps,r),t.child;case 8:return gt(e,t,t.pendingProps.children,r),t.child;case 12:return gt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(u=t.type._context,d=t.pendingProps,p=t.memoizedProps,v=d.value,je(xr,u._currentValue),u._currentValue=v,p!==null)if(Vt(p.value,v)){if(p.children===d.children&&!yt.current){t=un(e,t,r);break e}}else for(p=t.child,p!==null&&(p.return=t);p!==null;){var b=p.dependencies;if(b!==null){v=p.child;for(var I=b.firstContext;I!==null;){if(I.context===u){if(p.tag===1){I=sn(-1,r&-r),I.tag=2;var U=p.updateQueue;if(U!==null){U=U.shared;var Z=U.pending;Z===null?I.next=I:(I.next=Z.next,Z.next=I),U.pending=I}}p.lanes|=r,I=p.alternate,I!==null&&(I.lanes|=r),Ha(p.return,r,t),b.lanes|=r;break}I=I.next}}else if(p.tag===10)v=p.type===t.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(o(341));v.lanes|=r,b=v.alternate,b!==null&&(b.lanes|=r),Ha(v,r,t),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===t){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}gt(e,t,d.children,r),t=t.child}return t;case 9:return d=t.type,u=t.pendingProps.children,il(t,r),d=Pt(d),u=u(d),t.flags|=1,gt(e,t,u,r),t.child;case 14:return u=t.type,d=Ut(u,t.pendingProps),d=Ut(u.type,d),Ps(e,t,u,d,r);case 15:return Ts(e,t,t.type,t.pendingProps,r);case 17:return u=t.type,d=t.pendingProps,d=t.elementType===u?d:Ut(u,d),Vr(e,t),t.tag=1,St(u)?(e=!0,Ar(t)):e=!1,il(t,r),ws(t,u,d),so(t,u,d,r),fo(null,t,u,!0,e,r);case 19:return Us(e,t,r);case 22:return Rs(e,t,r)}throw Error(o(156,t.tag))};function du(e,t){return zo(e,t)}function nc(e,t,r,u){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,r,u){return new nc(e,t,r,u)}function To(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lc(e){if(typeof e=="function")return To(e)?1:0;if(e!=null){if(e=e.$$typeof,e===te)return 11;if(e===ne)return 14}return 2}function Dn(e,t){var r=e.alternate;return r===null?(r=jt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Gr(e,t,r,u,d,p){var v=2;if(u=e,typeof e=="function")To(e)&&(v=1);else if(typeof e=="string")v=5;else e:switch(e){case B:return qn(r.children,d,p,t);case V:v=8,d|=8;break;case q:return e=jt(12,r,t,d|2),e.elementType=q,e.lanes=p,e;case J:return e=jt(13,r,t,d),e.elementType=J,e.lanes=p,e;case ge:return e=jt(19,r,t,d),e.elementType=ge,e.lanes=p,e;case H:return Qr(r,d,p,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case S:v=10;break e;case z:v=9;break e;case te:v=11;break e;case ne:v=14;break e;case Y:v=16,u=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=jt(v,r,t,d),t.elementType=e,t.type=u,t.lanes=p,t}function qn(e,t,r,u){return e=jt(7,e,u,t),e.lanes=r,e}function Qr(e,t,r,u){return e=jt(22,e,u,t),e.elementType=H,e.lanes=r,e.stateNode={isHidden:!1},e}function Ro(e,t,r){return e=jt(6,e,null,t),e.lanes=r,e}function jo(e,t,r){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function rc(e,t,r,u,d){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ia(0),this.expirationTimes=ia(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ia(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Lo(e,t,r,u,d,p,v,b,I){return e=new rc(e,t,r,b,I),t===1?(t=1,p===!0&&(t|=8)):t=0,p=jt(3,null,null,t),e.current=p,p.stateNode=e,p.memoizedState={element:u,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Za(p),e}function ac(e,t,r){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:u==null?null:""+u,children:e,containerInfo:t,implementation:r}}function pu(e){if(!e)return Sn;e=e._reactInternals;e:{if(Tn(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(St(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var r=e.type;if(St(r))return Fi(e,r,t)}return t}function fu(e,t,r,u,d,p,v,b,I){return e=Lo(r,u,!0,e,d,p,v,b,I),e.context=pu(null),r=e.current,u=vt(),d=xn(r),p=sn(u,d),p.callback=t??null,Cn(r,p,d),e.current.lanes=d,_l(e,d,u),Ct(e,u),e}function Jr(e,t,r,u){var d=t.current,p=vt(),v=xn(d);return r=pu(r),t.context===null?t.context=r:t.pendingContext=r,t=sn(p,v),t.payload={element:e},u=u===void 0?null:u,u!==null&&(t.callback=u),e=Cn(d,t,v),e!==null&&(zt(e,d,v,p),Dr(e,d,v)),v}function Xr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Bo(e,t){mu(e,t),(e=e.alternate)&&mu(e,t)}function oc(){return null}var hu=typeof reportError=="function"?reportError:function(e){console.error(e)};function No(e){this._internalRoot=e}ea.prototype.render=No.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));Jr(e,t,null,null)},ea.prototype.unmount=No.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wn(function(){Jr(null,e,null,null)}),t[nn]=null}};function ea(e){this._internalRoot=e}ea.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jo();e={blockedOn:null,target:e,priority:t};for(var r=0;r<hn.length&&t!==0&&t<hn[r].priority;r++);hn.splice(r,0,e),r===0&&ti(e)}};function Vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gu(){}function ic(e,t,r,u,d){if(d){if(typeof u=="function"){var p=u;u=function(){var U=Xr(v);p.call(U)}}var v=fu(t,u,e,0,null,!1,!1,"",gu);return e._reactRootContainer=v,e[nn]=v.current,Pl(e.nodeType===8?e.parentNode:e),Wn(),v}for(;d=e.lastChild;)e.removeChild(d);if(typeof u=="function"){var b=u;u=function(){var U=Xr(I);b.call(U)}}var I=Lo(e,0,!1,null,null,!1,!1,"",gu);return e._reactRootContainer=I,e[nn]=I.current,Pl(e.nodeType===8?e.parentNode:e),Wn(function(){Jr(t,I,r,u)}),I}function na(e,t,r,u,d){var p=r._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var b=d;d=function(){var I=Xr(v);b.call(I)}}Jr(t,v,e,d)}else v=ic(r,t,e,d,u);return Xr(v)}Go=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=vl(t.pendingLanes);r!==0&&(sa(t,r|1),Ct(t,qe()),(Oe&6)===0&&(pl=qe()+500,An()))}break;case 13:Wn(function(){var u=on(e,1);if(u!==null){var d=vt();zt(u,e,1,d)}}),Bo(e,1)}},ua=function(e){if(e.tag===13){var t=on(e,134217728);if(t!==null){var r=vt();zt(t,e,134217728,r)}Bo(e,134217728)}},Qo=function(e){if(e.tag===13){var t=xn(e),r=on(e,t);if(r!==null){var u=vt();zt(r,e,t,u)}Bo(e,t)}},Jo=function(){return Te},Xo=function(e,t){var r=Te;try{return Te=e,t()}finally{Te=r}},ke=function(e,t,r){switch(t){case"input":if(le(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var u=r[t];if(u!==e&&u.form===e.form){var d=yr(u);if(!d)throw Error(o(90));We(u),le(u,d)}}}break;case"textarea":et(e,r);break;case"select":t=r.value,t!=null&&Re(e,!!r.multiple,t,!1)}},De=Oo,Ce=Wn;var sc={usingClientEntryPoint:!1,Events:[jl,Xn,yr,ze,ht,Oo]},Yl={findFiberByHostInstance:Rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uc={bundleType:Yl.bundleType,version:Yl.version,rendererPackageName:Yl.rendererPackageName,rendererConfig:Yl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Wo(e),e===null?null:e.stateNode},findFiberByHostInstance:Yl.findFiberByHostInstance||oc,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var la=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!la.isDisabled&&la.supportsFiber)try{er=la.inject(uc),Zt=la}catch{}}return reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sc,reactDom_production_min.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vo(t))throw Error(o(200));return ac(e,t,null,r)},reactDom_production_min.createRoot=function(e,t){if(!Vo(e))throw Error(o(299));var r=!1,u="",d=hu;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(u=t.identifierPrefix),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=Lo(e,1,!1,null,null,r,!1,u,d),e[nn]=t.current,Pl(e.nodeType===8?e.parentNode:e),new No(t)},reactDom_production_min.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=Wo(t),e=e===null?null:e.stateNode,e},reactDom_production_min.flushSync=function(e){return Wn(e)},reactDom_production_min.hydrate=function(e,t,r){if(!ta(t))throw Error(o(200));return na(null,e,t,!0,r)},reactDom_production_min.hydrateRoot=function(e,t,r){if(!Vo(e))throw Error(o(405));var u=r!=null&&r.hydratedSources||null,d=!1,p="",v=hu;if(r!=null&&(r.unstable_strictMode===!0&&(d=!0),r.identifierPrefix!==void 0&&(p=r.identifierPrefix),r.onRecoverableError!==void 0&&(v=r.onRecoverableError)),t=fu(t,null,e,1,r??null,d,!1,p,v),e[nn]=t.current,Pl(e),u)for(e=0;e<u.length;e++)r=u[e],d=r._getVersion,d=d(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,d]:t.mutableSourceEagerHydrationData.push(r,d);return new ea(t)},reactDom_production_min.render=function(e,t,r){if(!ta(t))throw Error(o(200));return na(null,e,t,!1,r)},reactDom_production_min.unmountComponentAtNode=function(e){if(!ta(e))throw Error(o(40));return e._reactRootContainer?(Wn(function(){na(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1},reactDom_production_min.unstable_batchedUpdates=Oo,reactDom_production_min.unstable_renderSubtreeIntoContainer=function(e,t,r,u){if(!ta(r))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return na(e,t,r,!1,u)},reactDom_production_min.version="18.3.1-next-f1338f8080-20240426",reactDom_production_min}var hasRequiredReactDom;function requireReactDom(){if(hasRequiredReactDom)return reactDom.exports;hasRequiredReactDom=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(l){console.error(l)}}return n(),reactDom.exports=requireReactDom_production_min(),reactDom.exports}var hasRequiredClient;function requireClient(){if(hasRequiredClient)return client;hasRequiredClient=1;var n=requireReactDom();return client.createRoot=n.createRoot,client.hydrateRoot=n.hydrateRoot,client}var clientExports=requireClient();const warn=(n,l,o,s)=>{const a=[o,{code:l,...s||{}}];if(n?.services?.logger?.forward)return n.services.logger.forward(a,"warn","react-i18next::",!0);isString(a[0])&&(a[0]=`react-i18next:: ${a[0]}`),n?.services?.logger?.warn?n.services.logger.warn(...a):console?.warn&&console.warn(...a)},alreadyWarned={},warnOnce=(n,l,o,s)=>{isString(o)&&alreadyWarned[o]||(isString(o)&&(alreadyWarned[o]=new Date),warn(n,l,o,s))},loadedClb=(n,l)=>()=>{if(n.isInitialized)l();else{const o=()=>{setTimeout(()=>{n.off("initialized",o)},0),l()};n.on("initialized",o)}},loadNamespaces=(n,l,o)=>{n.loadNamespaces(l,loadedClb(n,o))},loadLanguages=(n,l,o,s)=>{if(isString(o)&&(o=[o]),n.options.preload&&n.options.preload.indexOf(l)>-1)return loadNamespaces(n,o,s);o.forEach(a=>{n.options.ns.indexOf(a)<0&&n.options.ns.push(a)}),n.loadLanguages(l,loadedClb(n,s))},hasLoadedNamespace=(n,l,o={})=>!l.languages||!l.languages.length?(warnOnce(l,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:l.languages}),!0):l.hasLoadedNamespace(n,{lng:o.lng,precheck:(s,a)=>{if(o.bindI18n&&o.bindI18n.indexOf("languageChanging")>-1&&s.services.backendConnector.backend&&s.isLanguageChangingTo&&!a(s.isLanguageChangingTo,n))return!1}}),isString=n=>typeof n=="string",isObject=n=>typeof n=="object"&&n!==null,matchHtmlEntity=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,htmlEntities={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},unescapeHtmlEntity=n=>htmlEntities[n],unescape=n=>n.replace(matchHtmlEntity,unescapeHtmlEntity);let defaultOptions={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape};const setDefaults=(n={})=>{defaultOptions={...defaultOptions,...n}},getDefaults=()=>defaultOptions;let i18nInstance;const setI18n=n=>{i18nInstance=n},getI18n=()=>i18nInstance,initReactI18next={type:"3rdParty",init(n){setDefaults(n.options.react),setI18n(n)}},I18nContext=reactExports.createContext();class ReportNamespaces{constructor(){this.usedNamespaces={}}addUsedNamespaces(l){l.forEach(o=>{this.usedNamespaces[o]||(this.usedNamespaces[o]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const usePrevious=(n,l)=>{const o=reactExports.useRef();return reactExports.useEffect(()=>{o.current=n},[n,l]),o.current},alwaysNewT=(n,l,o,s)=>n.getFixedT(l,o,s),useMemoizedT=(n,l,o,s)=>reactExports.useCallback(alwaysNewT(n,l,o,s),[n,l,o,s]),useTranslation=(n,l={})=>{const{i18n:o}=l,{i18n:s,defaultNS:a}=reactExports.useContext(I18nContext)||{},c=o||s||getI18n();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new ReportNamespaces),!c){warnOnce(c,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const x=(O,B)=>isString(B)?B:isObject(B)&&isString(B.defaultValue)?B.defaultValue:Array.isArray(O)?O[O.length-1]:O,E=[x,{},!1];return E.t=x,E.i18n={},E.ready=!1,E}c.options.react?.wait&&warnOnce(c,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const f={...getDefaults(),...c.options.react,...l},{useSuspense:m,keyPrefix:h}=f;let g=a||c.options?.defaultNS;g=isString(g)?[g]:g||["translation"],c.reportNamespaces.addUsedNamespaces?.(g);const _=(c.isInitialized||c.initializedStoreOnce)&&g.every(x=>hasLoadedNamespace(x,c,f)),y=useMemoizedT(c,l.lng||null,f.nsMode==="fallback"?g:g[0],h),C=()=>y,D=()=>alwaysNewT(c,l.lng||null,f.nsMode==="fallback"?g:g[0],h),[M,A]=reactExports.useState(C);let k=g.join();l.lng&&(k=`${l.lng}${k}`);const R=usePrevious(k),W=reactExports.useRef(!0);reactExports.useEffect(()=>{const{bindI18n:x,bindI18nStore:E}=f;W.current=!0,!_&&!m&&(l.lng?loadLanguages(c,l.lng,g,()=>{W.current&&A(D)}):loadNamespaces(c,g,()=>{W.current&&A(D)})),_&&R&&R!==k&&W.current&&A(D);const O=()=>{W.current&&A(D)};return x&&c?.on(x,O),E&&c?.store.on(E,O),()=>{W.current=!1,c&&x&&x?.split(" ").forEach(B=>c.off(B,O)),E&&c&&E.split(" ").forEach(B=>c.store.off(B,O))}},[c,k]),reactExports.useEffect(()=>{W.current&&_&&A(C)},[c,h,_]);const L=[M,c,_];if(L.t=M,L.i18n=c,L.ready=_,_||!_&&!m)return L;throw new Promise(x=>{l.lng?loadLanguages(c,l.lng,g,()=>x()):loadNamespaces(c,g,()=>x())})};var UI;(function(n){n.Root="root",n.Chevron="chevron",n.Day="day",n.DayButton="day_button",n.CaptionLabel="caption_label",n.Dropdowns="dropdowns",n.Dropdown="dropdown",n.DropdownRoot="dropdown_root",n.Footer="footer",n.MonthGrid="month_grid",n.MonthCaption="month_caption",n.MonthsDropdown="months_dropdown",n.Month="month",n.Months="months",n.Nav="nav",n.NextMonthButton="button_next",n.PreviousMonthButton="button_previous",n.Week="week",n.Weeks="weeks",n.Weekday="weekday",n.Weekdays="weekdays",n.WeekNumber="week_number",n.WeekNumberHeader="week_number_header",n.YearsDropdown="years_dropdown"})(UI||(UI={}));var DayFlag;(function(n){n.disabled="disabled",n.hidden="hidden",n.outside="outside",n.focused="focused",n.today="today"})(DayFlag||(DayFlag={}));var SelectionState;(function(n){n.range_end="range_end",n.range_middle="range_middle",n.range_start="range_start",n.selected="selected"})(SelectionState||(SelectionState={}));var Animation;(function(n){n.weeks_before_enter="weeks_before_enter",n.weeks_before_exit="weeks_before_exit",n.weeks_after_enter="weeks_after_enter",n.weeks_after_exit="weeks_after_exit",n.caption_after_enter="caption_after_enter",n.caption_after_exit="caption_after_exit",n.caption_before_enter="caption_before_enter",n.caption_before_exit="caption_before_exit"})(Animation||(Animation={}));const FIVE_WEEKS=5,FOUR_WEEKS=4;function getBroadcastWeeksInMonth(n,l){const o=l.startOfMonth(n),s=o.getDay()>0?o.getDay():7,a=l.addDays(n,-s+1),c=l.addDays(a,FIVE_WEEKS*7-1);return l.getMonth(n)===l.getMonth(c)?FIVE_WEEKS:FOUR_WEEKS}function startOfBroadcastWeek(n,l){const o=l.startOfMonth(n),s=o.getDay();return s===1?o:s===0?l.addDays(o,-6):l.addDays(o,-1*(s-1))}function endOfBroadcastWeek(n,l){const o=startOfBroadcastWeek(n,l),s=getBroadcastWeeksInMonth(n,l);return l.addDays(o,s*7-1)}class DateLib{constructor(l,o){this.Date=Date,this.today=()=>this.overrides?.today?this.overrides.today():this.options.timeZone?TZDate.tz(this.options.timeZone):new this.Date,this.newDate=(s,a,c)=>this.overrides?.newDate?this.overrides.newDate(s,a,c):this.options.timeZone?new TZDate(s,a,c,this.options.timeZone):new Date(s,a,c),this.addDays=(s,a)=>this.overrides?.addDays?this.overrides.addDays(s,a):addDays(s,a),this.addMonths=(s,a)=>this.overrides?.addMonths?this.overrides.addMonths(s,a):addMonths(s,a),this.addWeeks=(s,a)=>this.overrides?.addWeeks?this.overrides.addWeeks(s,a):addWeeks(s,a),this.addYears=(s,a)=>this.overrides?.addYears?this.overrides.addYears(s,a):addYears(s,a),this.differenceInCalendarDays=(s,a)=>this.overrides?.differenceInCalendarDays?this.overrides.differenceInCalendarDays(s,a):differenceInCalendarDays(s,a),this.differenceInCalendarMonths=(s,a)=>this.overrides?.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(s,a):differenceInCalendarMonths(s,a),this.eachMonthOfInterval=s=>this.overrides?.eachMonthOfInterval?this.overrides.eachMonthOfInterval(s):eachMonthOfInterval(s),this.endOfBroadcastWeek=s=>this.overrides?.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(s):endOfBroadcastWeek(s,this),this.endOfISOWeek=s=>this.overrides?.endOfISOWeek?this.overrides.endOfISOWeek(s):endOfISOWeek(s),this.endOfMonth=s=>this.overrides?.endOfMonth?this.overrides.endOfMonth(s):endOfMonth(s),this.endOfWeek=(s,a)=>this.overrides?.endOfWeek?this.overrides.endOfWeek(s,a):endOfWeek(s,this.options),this.endOfYear=s=>this.overrides?.endOfYear?this.overrides.endOfYear(s):endOfYear(s),this.format=(s,a,c)=>{const f=this.overrides?.format?this.overrides.format(s,a,this.options):format$1(s,a,this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(f):f},this.getISOWeek=s=>this.overrides?.getISOWeek?this.overrides.getISOWeek(s):getISOWeek(s),this.getMonth=(s,a)=>this.overrides?.getMonth?this.overrides.getMonth(s,this.options):getMonth(s,this.options),this.getYear=(s,a)=>this.overrides?.getYear?this.overrides.getYear(s,this.options):getYear(s,this.options),this.getWeek=(s,a)=>this.overrides?.getWeek?this.overrides.getWeek(s,this.options):getWeek(s,this.options),this.isAfter=(s,a)=>this.overrides?.isAfter?this.overrides.isAfter(s,a):isAfter(s,a),this.isBefore=(s,a)=>this.overrides?.isBefore?this.overrides.isBefore(s,a):isBefore(s,a),this.isDate=s=>this.overrides?.isDate?this.overrides.isDate(s):isDate(s),this.isSameDay=(s,a)=>this.overrides?.isSameDay?this.overrides.isSameDay(s,a):isSameDay(s,a),this.isSameMonth=(s,a)=>this.overrides?.isSameMonth?this.overrides.isSameMonth(s,a):isSameMonth(s,a),this.isSameYear=(s,a)=>this.overrides?.isSameYear?this.overrides.isSameYear(s,a):isSameYear(s,a),this.max=s=>this.overrides?.max?this.overrides.max(s):max(s),this.min=s=>this.overrides?.min?this.overrides.min(s):min(s),this.setMonth=(s,a)=>this.overrides?.setMonth?this.overrides.setMonth(s,a):setMonth(s,a),this.setYear=(s,a)=>this.overrides?.setYear?this.overrides.setYear(s,a):setYear(s,a),this.startOfBroadcastWeek=(s,a)=>this.overrides?.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(s,this):startOfBroadcastWeek(s,this),this.startOfDay=s=>this.overrides?.startOfDay?this.overrides.startOfDay(s):startOfDay(s),this.startOfISOWeek=s=>this.overrides?.startOfISOWeek?this.overrides.startOfISOWeek(s):startOfISOWeek(s),this.startOfMonth=s=>this.overrides?.startOfMonth?this.overrides.startOfMonth(s):startOfMonth(s),this.startOfWeek=(s,a)=>this.overrides?.startOfWeek?this.overrides.startOfWeek(s,this.options):startOfWeek(s,this.options),this.startOfYear=s=>this.overrides?.startOfYear?this.overrides.startOfYear(s):startOfYear(s),this.options={locale:enUS,...l},this.overrides=o}getDigitMap(){const{numerals:l="latn"}=this.options,o=new Intl.NumberFormat("en-US",{numberingSystem:l}),s={};for(let a=0;a<10;a++)s[a.toString()]=o.format(a);return s}replaceDigits(l){const o=this.getDigitMap();return l.replace(/\d/g,s=>o[s]||s)}formatNumber(l){return this.replaceDigits(l.toString())}}const defaultDateLib=new DateLib;class CalendarDay{constructor(l,o,s=defaultDateLib){this.date=l,this.displayMonth=o,this.outside=!!(o&&!s.isSameMonth(l,o)),this.dateLib=s}isEqualTo(l){return this.dateLib.isSameDay(l.date,this.date)&&this.dateLib.isSameMonth(l.displayMonth,this.displayMonth)}}class CalendarMonth{constructor(l,o){this.date=l,this.weeks=o}}class CalendarWeek{constructor(l,o){this.days=o,this.weekNumber=l}}function rangeIncludesDate(n,l,o=!1,s=defaultDateLib){let{from:a,to:c}=n;const{differenceInCalendarDays:f,isSameDay:m}=s;return a&&c?(f(c,a)<0&&([a,c]=[c,a]),f(l,a)>=(o?1:0)&&f(c,l)>=(o?1:0)):!o&&c?m(c,l):!o&&a?m(a,l):!1}function isDateInterval(n){return!!(n&&typeof n=="object"&&"before"in n&&"after"in n)}function isDateRange(n){return!!(n&&typeof n=="object"&&"from"in n)}function isDateAfterType(n){return!!(n&&typeof n=="object"&&"after"in n)}function isDateBeforeType(n){return!!(n&&typeof n=="object"&&"before"in n)}function isDayOfWeekType(n){return!!(n&&typeof n=="object"&&"dayOfWeek"in n)}function isDatesArray(n,l){return Array.isArray(n)&&n.every(l.isDate)}function dateMatchModifiers(n,l,o=defaultDateLib){const s=Array.isArray(l)?l:[l],{isSameDay:a,differenceInCalendarDays:c,isAfter:f}=o;return s.some(m=>{if(typeof m=="boolean")return m;if(o.isDate(m))return a(n,m);if(isDatesArray(m,o))return m.includes(n);if(isDateRange(m))return rangeIncludesDate(m,n,!1,o);if(isDayOfWeekType(m))return Array.isArray(m.dayOfWeek)?m.dayOfWeek.includes(n.getDay()):m.dayOfWeek===n.getDay();if(isDateInterval(m)){const h=c(m.before,n),g=c(m.after,n),_=h>0,y=g<0;return f(m.before,m.after)?y&&_:_||y}return isDateAfterType(m)?c(n,m.after)>0:isDateBeforeType(m)?c(m.before,n)>0:typeof m=="function"?m(n):!1})}function createGetModifiers(n,l,o,s,a){const{disabled:c,hidden:f,modifiers:m,showOutsideDays:h,broadcastCalendar:g,today:_}=l,{isSameDay:y,isSameMonth:C,startOfMonth:D,isBefore:M,endOfMonth:A,isAfter:k}=a,R=o&&D(o),W=s&&A(s),L={[DayFlag.focused]:[],[DayFlag.outside]:[],[DayFlag.disabled]:[],[DayFlag.hidden]:[],[DayFlag.today]:[]},x={};for(const E of n){const{date:O,displayMonth:B}=E,V=!!(B&&!C(O,B)),q=!!(R&&M(O,R)),S=!!(W&&k(O,W)),z=!!(c&&dateMatchModifiers(O,c,a)),te=!!(f&&dateMatchModifiers(O,f,a))||q||S||!g&&!h&&V||g&&h===!1&&V,J=y(O,_??a.today());V&&L.outside.push(E),z&&L.disabled.push(E),te&&L.hidden.push(E),J&&L.today.push(E),m&&Object.keys(m).forEach(ge=>{const ne=m?.[ge];ne&&dateMatchModifiers(O,ne,a)&&(x[ge]?x[ge].push(E):x[ge]=[E])})}return E=>{const O={[DayFlag.focused]:!1,[DayFlag.disabled]:!1,[DayFlag.hidden]:!1,[DayFlag.outside]:!1,[DayFlag.today]:!1},B={};for(const V in L){const q=L[V];O[V]=q.some(S=>S===E)}for(const V in x)B[V]=x[V].some(q=>q===E);return{...O,...B}}}function getClassNamesForModifiers(n,l,o={}){return Object.entries(n).filter(([,a])=>a===!0).reduce((a,[c])=>(o[c]?a.push(o[c]):l[DayFlag[c]]?a.push(l[DayFlag[c]]):l[SelectionState[c]]&&a.push(l[SelectionState[c]]),a),[l[UI.Day]])}function Button(n){return React.createElement("button",{...n})}function CaptionLabel(n){return React.createElement("span",{...n})}function Chevron(n){const{size:l=24,orientation:o="left",className:s}=n;return React.createElement("svg",{className:s,width:l,height:l,viewBox:"0 0 24 24"},o==="up"&&React.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),o==="down"&&React.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),o==="left"&&React.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),o==="right"&&React.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))}function Day(n){const{day:l,modifiers:o,...s}=n;return React.createElement("td",{...s})}function DayButton(n){const{day:l,modifiers:o,...s}=n,a=React.useRef(null);return React.useEffect(()=>{o.focused&&a.current?.focus()},[o.focused]),React.createElement("button",{ref:a,...s})}function Dropdown(n){const{options:l,className:o,components:s,classNames:a,...c}=n,f=[a[UI.Dropdown],o].join(" "),m=l?.find(({value:h})=>h===c.value);return React.createElement("span",{"data-disabled":c.disabled,className:a[UI.DropdownRoot]},React.createElement(s.Select,{className:f,...c},l?.map(({value:h,label:g,disabled:_})=>React.createElement(s.Option,{key:h,value:h,disabled:_},g))),React.createElement("span",{className:a[UI.CaptionLabel],"aria-hidden":!0},m?.label,React.createElement(s.Chevron,{orientation:"down",size:18,className:a[UI.Chevron]})))}function DropdownNav(n){return React.createElement("div",{...n})}function Footer(n){return React.createElement("div",{...n})}function Month(n){const{calendarMonth:l,displayIndex:o,...s}=n;return React.createElement("div",{...s},n.children)}function MonthCaption(n){const{calendarMonth:l,displayIndex:o,...s}=n;return React.createElement("div",{...s})}function MonthGrid(n){return React.createElement("table",{...n})}function Months(n){return React.createElement("div",{...n})}const dayPickerContext=reactExports.createContext(void 0);function useDayPicker(){const n=reactExports.useContext(dayPickerContext);if(n===void 0)throw new Error("useDayPicker() must be used within a custom component.");return n}function MonthsDropdown(n){const{components:l}=useDayPicker();return React.createElement(l.Dropdown,{...n})}function Nav(n){const{onPreviousClick:l,onNextClick:o,previousMonth:s,nextMonth:a,...c}=n,{components:f,classNames:m,labels:{labelPrevious:h,labelNext:g}}=useDayPicker(),_=reactExports.useCallback(C=>{a&&o?.(C)},[a,o]),y=reactExports.useCallback(C=>{s&&l?.(C)},[s,l]);return React.createElement("nav",{...c},React.createElement(f.PreviousMonthButton,{type:"button",className:m[UI.PreviousMonthButton],tabIndex:s?void 0:-1,"aria-disabled":s?void 0:!0,"aria-label":h(s),onClick:y},React.createElement(f.Chevron,{disabled:s?void 0:!0,className:m[UI.Chevron],orientation:"left"})),React.createElement(f.NextMonthButton,{type:"button",className:m[UI.NextMonthButton],tabIndex:a?void 0:-1,"aria-disabled":a?void 0:!0,"aria-label":g(a),onClick:_},React.createElement(f.Chevron,{disabled:a?void 0:!0,orientation:"right",className:m[UI.Chevron]})))}function NextMonthButton(n){const{components:l}=useDayPicker();return React.createElement(l.Button,{...n})}function Option$2(n){return React.createElement("option",{...n})}function PreviousMonthButton(n){const{components:l}=useDayPicker();return React.createElement(l.Button,{...n})}function Root(n){const{rootRef:l,...o}=n;return React.createElement("div",{...o,ref:l})}function Select$1(n){return React.createElement("select",{...n})}function Week(n){const{week:l,...o}=n;return React.createElement("tr",{...o})}function Weekday(n){return React.createElement("th",{...n})}function Weekdays(n){return React.createElement("thead",{"aria-hidden":!0},React.createElement("tr",{...n}))}function WeekNumber(n){const{week:l,...o}=n;return React.createElement("th",{...o})}function WeekNumberHeader(n){return React.createElement("th",{...n})}function Weeks(n){return React.createElement("tbody",{...n})}function YearsDropdown(n){const{components:l}=useDayPicker();return React.createElement(l.Dropdown,{...n})}const components$1=Object.freeze(Object.defineProperty({__proto__:null,Button,CaptionLabel,Chevron,Day,DayButton,Dropdown,DropdownNav,Footer,Month,MonthCaption,MonthGrid,Months,MonthsDropdown,Nav,NextMonthButton,Option:Option$2,PreviousMonthButton,Root,Select:Select$1,Week,WeekNumber,WeekNumberHeader,Weekday,Weekdays,Weeks,YearsDropdown},Symbol.toStringTag,{value:"Module"}));function getComponents(n){return{...components$1,...n}}function getDataAttributes(n){const l={"data-mode":n.mode??void 0,"data-required":"required"in n?n.required:void 0,"data-multiple-months":n.numberOfMonths&&n.numberOfMonths>1||void 0,"data-week-numbers":n.showWeekNumber||void 0,"data-broadcast-calendar":n.broadcastCalendar||void 0,"data-nav-layout":n.navLayout||void 0};return Object.entries(n).forEach(([o,s])=>{o.startsWith("data-")&&(l[o]=s)}),l}function getDefaultClassNames(){const n={};for(const l in UI)n[UI[l]]=`rdp-${UI[l]}`;for(const l in DayFlag)n[DayFlag[l]]=`rdp-${DayFlag[l]}`;for(const l in SelectionState)n[SelectionState[l]]=`rdp-${SelectionState[l]}`;for(const l in Animation)n[Animation[l]]=`rdp-${Animation[l]}`;return n}function formatCaption(n,l,o){return(o??new DateLib(l)).format(n,"LLLL y")}const formatMonthCaption=formatCaption;function formatDay(n,l,o){return(o??new DateLib(l)).format(n,"d")}function formatMonthDropdown(n,l=defaultDateLib){return l.format(n,"LLLL")}function formatWeekNumber(n,l=defaultDateLib){return n<10?l.formatNumber(`0${n.toLocaleString()}`):l.formatNumber(`${n.toLocaleString()}`)}function formatWeekNumberHeader(){return""}function formatWeekdayName(n,l,o){return(o??new DateLib(l)).format(n,"cccccc")}function formatYearDropdown(n,l=defaultDateLib){return l.format(n,"yyyy")}const formatYearCaption=formatYearDropdown,defaultFormatters=Object.freeze(Object.defineProperty({__proto__:null,formatCaption,formatDay,formatMonthCaption,formatMonthDropdown,formatWeekNumber,formatWeekNumberHeader,formatWeekdayName,formatYearCaption,formatYearDropdown},Symbol.toStringTag,{value:"Module"}));function getFormatters(n){return n?.formatMonthCaption&&!n.formatCaption&&(n.formatCaption=n.formatMonthCaption),n?.formatYearCaption&&!n.formatYearDropdown&&(n.formatYearDropdown=n.formatYearCaption),{...defaultFormatters,...n}}function getMonthOptions(n,l,o,s,a){const{startOfMonth:c,startOfYear:f,endOfYear:m,eachMonthOfInterval:h,getMonth:g}=a;return h({start:f(n),end:m(n)}).map(C=>{const D=s.formatMonthDropdown(C,a),M=g(C),A=l&&C<c(l)||o&&C>c(o)||!1;return{value:M,label:D,disabled:A}})}function getStyleForModifiers(n,l={},o={}){let s={...l?.[UI.Day]};return Object.entries(n).filter(([,a])=>a===!0).forEach(([a])=>{s={...s,...o?.[a]}}),s}function getWeekdays(n,l,o){const s=n.today(),a=l?n.startOfISOWeek(s):n.startOfWeek(s),c=[];for(let f=0;f<7;f++){const m=n.addDays(a,f);c.push(m)}return c}function getYearOptions(n,l,o,s){if(!n||!l)return;const{startOfYear:a,endOfYear:c,addYears:f,getYear:m,isBefore:h,isSameYear:g}=s,_=a(n),y=c(l),C=[];let D=_;for(;h(D,y)||g(D,y);)C.push(D),D=f(D,1);return C.map(M=>{const A=o.formatYearDropdown(M,s);return{value:m(M),label:A,disabled:!1}})}function labelGrid(n,l,o){return(o??new DateLib(l)).format(n,"LLLL y")}const labelCaption=labelGrid;function labelGridcell(n,l,o,s){let a=(s??new DateLib(o)).format(n,"PPPP");return l?.today&&(a=`Today, ${a}`),a}function labelDayButton(n,l,o,s){let a=(s??new DateLib(o)).format(n,"PPPP");return l.today&&(a=`Today, ${a}`),l.selected&&(a=`${a}, selected`),a}const labelDay=labelDayButton;function labelNav(){return""}function labelMonthDropdown(n){return"Choose the Month"}function labelNext(n){return"Go to the Next Month"}function labelPrevious(n){return"Go to the Previous Month"}function labelWeekday(n,l,o){return(o??new DateLib(l)).format(n,"cccc")}function labelWeekNumber(n,l){return`Week ${n}`}function labelWeekNumberHeader(n){return"Week Number"}function labelYearDropdown(n){return"Choose the Year"}const defaultLabels=Object.freeze(Object.defineProperty({__proto__:null,labelCaption,labelDay,labelDayButton,labelGrid,labelGridcell,labelMonthDropdown,labelNav,labelNext,labelPrevious,labelWeekNumber,labelWeekNumberHeader,labelWeekday,labelYearDropdown},Symbol.toStringTag,{value:"Module"})),asHtmlElement=n=>n instanceof HTMLElement?n:null,queryMonthEls=n=>[...n.querySelectorAll("[data-animated-month]")??[]],queryMonthEl=n=>asHtmlElement(n.querySelector("[data-animated-month]")),queryCaptionEl=n=>asHtmlElement(n.querySelector("[data-animated-caption]")),queryWeeksEl=n=>asHtmlElement(n.querySelector("[data-animated-weeks]")),queryNavEl=n=>asHtmlElement(n.querySelector("[data-animated-nav]")),queryWeekdaysEl=n=>asHtmlElement(n.querySelector("[data-animated-weekdays]"));function useAnimation(n,l,{classNames:o,months:s,focused:a,dateLib:c}){const f=reactExports.useRef(null),m=reactExports.useRef(s),h=reactExports.useRef(!1);reactExports.useLayoutEffect(()=>{const g=m.current;if(m.current=s,!l||!n.current||!(n.current instanceof HTMLElement)||s.length===0||g.length===0||s.length!==g.length)return;const _=c.isSameMonth(s[0].date,g[0].date),y=c.isAfter(s[0].date,g[0].date),C=y?o[Animation.caption_after_enter]:o[Animation.caption_before_enter],D=y?o[Animation.weeks_after_enter]:o[Animation.weeks_before_enter],M=f.current,A=n.current.cloneNode(!0);if(A instanceof HTMLElement?(queryMonthEls(A).forEach(L=>{if(!(L instanceof HTMLElement))return;const x=queryMonthEl(L);x&&L.contains(x)&&L.removeChild(x);const E=queryCaptionEl(L);E&&E.classList.remove(C);const O=queryWeeksEl(L);O&&O.classList.remove(D)}),f.current=A):f.current=null,h.current||_||a)return;const k=M instanceof HTMLElement?queryMonthEls(M):[],R=queryMonthEls(n.current);if(R&&R.every(W=>W instanceof HTMLElement)&&k&&k.every(W=>W instanceof HTMLElement)){h.current=!0,n.current.style.isolation="isolate";const W=queryNavEl(n.current);W&&(W.style.zIndex="1"),R.forEach((L,x)=>{const E=k[x];if(!E)return;L.style.position="relative",L.style.overflow="hidden";const O=queryCaptionEl(L);O&&O.classList.add(C);const B=queryWeeksEl(L);B&&B.classList.add(D);const V=()=>{h.current=!1,n.current&&(n.current.style.isolation=""),W&&(W.style.zIndex=""),O&&O.classList.remove(C),B&&B.classList.remove(D),L.style.position="",L.style.overflow="",L.contains(E)&&L.removeChild(E)};E.style.pointerEvents="none",E.style.position="absolute",E.style.overflow="hidden",E.setAttribute("aria-hidden","true");const q=queryWeekdaysEl(E);q&&(q.style.opacity="0");const S=queryCaptionEl(E);S&&(S.classList.add(y?o[Animation.caption_before_exit]:o[Animation.caption_after_exit]),S.addEventListener("animationend",V));const z=queryWeeksEl(E);z&&z.classList.add(y?o[Animation.weeks_before_exit]:o[Animation.weeks_after_exit]),L.insertBefore(E,L.firstChild)})}})}function getDates(n,l,o,s){const a=n[0],c=n[n.length-1],{ISOWeek:f,fixedWeeks:m,broadcastCalendar:h}=o??{},{addDays:g,differenceInCalendarDays:_,differenceInCalendarMonths:y,endOfBroadcastWeek:C,endOfISOWeek:D,endOfMonth:M,endOfWeek:A,isAfter:k,startOfBroadcastWeek:R,startOfISOWeek:W,startOfWeek:L}=s,x=h?R(a,s):f?W(a):L(a),E=h?C(c):f?D(M(c)):A(M(c)),O=_(E,x),B=y(c,a)+1,V=[];for(let z=0;z<=O;z++){const te=g(x,z);if(l&&k(te,l))break;V.push(te)}const S=(h?35:42)*B;if(m&&V.length<S){const z=S-V.length;for(let te=0;te<z;te++){const J=g(V[V.length-1],1);V.push(J)}}return V}function getDays(n){const l=[];return n.reduce((o,s)=>{const a=s.weeks.reduce((c,f)=>[...c,...f.days],l);return[...o,...a]},l)}function getDisplayMonths(n,l,o,s){const{numberOfMonths:a=1}=o,c=[];for(let f=0;f<a;f++){const m=s.addMonths(n,f);if(l&&m>l)break;c.push(m)}return c}function getInitialMonth(n,l,o,s){const{month:a,defaultMonth:c,today:f=s.today(),numberOfMonths:m=1}=n;let h=a||c||f;const{differenceInCalendarMonths:g,addMonths:_,startOfMonth:y}=s;if(o&&g(o,h)<m-1){const C=-1*(m-1);h=_(o,C)}return l&&g(h,l)<0&&(h=l),y(h)}function getMonths(n,l,o,s){const{addDays:a,endOfBroadcastWeek:c,endOfISOWeek:f,endOfMonth:m,endOfWeek:h,getISOWeek:g,getWeek:_,startOfBroadcastWeek:y,startOfISOWeek:C,startOfWeek:D}=s,M=n.reduce((A,k)=>{const R=o.broadcastCalendar?y(k,s):o.ISOWeek?C(k):D(k),W=o.broadcastCalendar?c(k):o.ISOWeek?f(m(k)):h(m(k)),L=l.filter(B=>B>=R&&B<=W),x=o.broadcastCalendar?35:42;if(o.fixedWeeks&&L.length<x){const B=l.filter(V=>{const q=x-L.length;return V>W&&V<=a(W,q)});L.push(...B)}const E=L.reduce((B,V)=>{const q=o.ISOWeek?g(V):_(V),S=B.find(te=>te.weekNumber===q),z=new CalendarDay(V,k,s);return S?S.days.push(z):B.push(new CalendarWeek(q,[z])),B},[]),O=new CalendarMonth(k,E);return A.push(O),A},[]);return o.reverseMonths?M.reverse():M}function getNavMonths(n,l){let{startMonth:o,endMonth:s}=n;const{startOfYear:a,startOfDay:c,startOfMonth:f,endOfMonth:m,addYears:h,endOfYear:g,newDate:_,today:y}=l,{fromYear:C,toYear:D,fromMonth:M,toMonth:A}=n;!o&&M&&(o=M),!o&&C&&(o=l.newDate(C,0,1)),!s&&A&&(s=A),!s&&D&&(s=_(D,11,31));const k=n.captionLayout==="dropdown"||n.captionLayout==="dropdown-years";return o?o=f(o):C?o=_(C,0,1):!o&&k&&(o=a(h(n.today??y(),-100))),s?s=m(s):D?s=_(D,11,31):!s&&k&&(s=g(n.today??y())),[o&&c(o),s&&c(s)]}function getNextMonth(n,l,o,s){if(o.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:c=1}=o,{startOfMonth:f,addMonths:m,differenceInCalendarMonths:h}=s,g=a?c:1,_=f(n);if(!l)return m(_,g);if(!(h(l,n)<c))return m(_,g)}function getPreviousMonth(n,l,o,s){if(o.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:c}=o,{startOfMonth:f,addMonths:m,differenceInCalendarMonths:h}=s,g=a?c??1:1,_=f(n);if(!l)return m(_,-g);if(!(h(_,l)<=0))return m(_,-g)}function getWeeks(n){const l=[];return n.reduce((o,s)=>[...o,...s.weeks],l)}function useControlledValue(n,l){const[o,s]=reactExports.useState(n);return[l===void 0?o:l,s]}function useCalendar(n,l){const[o,s]=getNavMonths(n,l),{startOfMonth:a,endOfMonth:c}=l,f=getInitialMonth(n,o,s,l),[m,h]=useControlledValue(f,n.month?f:void 0);reactExports.useEffect(()=>{const O=getInitialMonth(n,o,s,l);h(O)},[n.timeZone]);const g=getDisplayMonths(m,s,n,l),_=getDates(g,n.endMonth?c(n.endMonth):void 0,n,l),y=getMonths(g,_,n,l),C=getWeeks(y),D=getDays(y),M=getPreviousMonth(m,o,n,l),A=getNextMonth(m,s,n,l),{disableNavigation:k,onMonthChange:R}=n,W=O=>C.some(B=>B.days.some(V=>V.isEqualTo(O))),L=O=>{if(k)return;let B=a(O);o&&B<a(o)&&(B=a(o)),s&&B>a(s)&&(B=a(s)),h(B),R?.(B)};return{months:y,weeks:C,days:D,navStart:o,navEnd:s,previousMonth:M,nextMonth:A,goToMonth:L,goToDay:O=>{W(O)||L(O.date)}}}var FocusTargetPriority;(function(n){n[n.Today=0]="Today",n[n.Selected=1]="Selected",n[n.LastFocused=2]="LastFocused",n[n.FocusedModifier=3]="FocusedModifier"})(FocusTargetPriority||(FocusTargetPriority={}));function isFocusableDay(n){return!n[DayFlag.disabled]&&!n[DayFlag.hidden]&&!n[DayFlag.outside]}function calculateFocusTarget(n,l,o,s){let a,c=-1;for(const f of n){const m=l(f);isFocusableDay(m)&&(m[DayFlag.focused]&&c<FocusTargetPriority.FocusedModifier?(a=f,c=FocusTargetPriority.FocusedModifier):s?.isEqualTo(f)&&c<FocusTargetPriority.LastFocused?(a=f,c=FocusTargetPriority.LastFocused):o(f.date)&&c<FocusTargetPriority.Selected?(a=f,c=FocusTargetPriority.Selected):m[DayFlag.today]&&c<FocusTargetPriority.Today&&(a=f,c=FocusTargetPriority.Today))}return a||(a=n.find(f=>isFocusableDay(l(f)))),a}function getFocusableDate(n,l,o,s,a,c,f){const{ISOWeek:m,broadcastCalendar:h}=c,{addDays:g,addMonths:_,addWeeks:y,addYears:C,endOfBroadcastWeek:D,endOfISOWeek:M,endOfWeek:A,max:k,min:R,startOfBroadcastWeek:W,startOfISOWeek:L,startOfWeek:x}=f;let O={day:g,week:y,month:_,year:C,startOfWeek:B=>h?W(B,f):m?L(B):x(B),endOfWeek:B=>h?D(B):m?M(B):A(B)}[n](o,l==="after"?1:-1);return l==="before"&&s?O=k([s,O]):l==="after"&&a&&(O=R([a,O])),O}function getNextFocus(n,l,o,s,a,c,f,m=0){if(m>365)return;const h=getFocusableDate(n,l,o.date,s,a,c,f),g=!!(c.disabled&&dateMatchModifiers(h,c.disabled,f)),_=!!(c.hidden&&dateMatchModifiers(h,c.hidden,f)),y=h,C=new CalendarDay(h,y,f);return!g&&!_?C:getNextFocus(n,l,C,s,a,c,f,m+1)}function useFocus(n,l,o,s,a){const{autoFocus:c}=n,[f,m]=reactExports.useState(),h=calculateFocusTarget(l.days,o,s||(()=>!1),f),[g,_]=reactExports.useState(c?h:void 0);return{isFocusTarget:A=>!!h?.isEqualTo(A),setFocused:_,focused:g,blur:()=>{m(g),_(void 0)},moveFocus:(A,k)=>{if(!g)return;const R=getNextFocus(A,k,g,l.navStart,l.navEnd,n,a);R&&(l.goToDay(R),_(R))}}}function useMulti(n,l){const{selected:o,required:s,onSelect:a}=n,[c,f]=useControlledValue(o,a?o:void 0),m=a?o:c,{isSameDay:h}=l,g=D=>m?.some(M=>h(M,D))??!1,{min:_,max:y}=n;return{selected:m,select:(D,M,A)=>{let k=[...m??[]];if(g(D)){if(m?.length===_||s&&m?.length===1)return;k=m?.filter(R=>!h(R,D))}else m?.length===y?k=[D]:k=[...k,D];return a||f(k),a?.(k,D,M,A),k},isSelected:g}}function addToRange(n,l,o=0,s=0,a=!1,c=defaultDateLib){const{from:f,to:m}=l||{},{isSameDay:h,isAfter:g,isBefore:_}=c;let y;if(!f&&!m)y={from:n,to:o>0?void 0:n};else if(f&&!m)h(f,n)?a?y={from:f,to:void 0}:y=void 0:_(n,f)?y={from:n,to:f}:y={from:f,to:n};else if(f&&m)if(h(f,n)&&h(m,n))a?y={from:f,to:m}:y=void 0;else if(h(f,n))y={from:f,to:o>0?void 0:n};else if(h(m,n))y={from:n,to:o>0?void 0:n};else if(_(n,f))y={from:n,to:m};else if(g(n,f))y={from:f,to:n};else if(g(n,m))y={from:f,to:n};else throw new Error("Invalid range");if(y?.from&&y?.to){const C=c.differenceInCalendarDays(y.to,y.from);s>0&&C>s?y={from:n,to:void 0}:o>1&&C<o&&(y={from:n,to:void 0})}return y}function rangeContainsDayOfWeek(n,l,o=defaultDateLib){const s=Array.isArray(l)?l:[l];let a=n.from;const c=o.differenceInCalendarDays(n.to,n.from),f=Math.min(c,6);for(let m=0;m<=f;m++){if(s.includes(a.getDay()))return!0;a=o.addDays(a,1)}return!1}function rangeOverlaps(n,l,o=defaultDateLib){return rangeIncludesDate(n,l.from,!1,o)||rangeIncludesDate(n,l.to,!1,o)||rangeIncludesDate(l,n.from,!1,o)||rangeIncludesDate(l,n.to,!1,o)}function rangeContainsModifiers(n,l,o=defaultDateLib){const s=Array.isArray(l)?l:[l];if(s.filter(m=>typeof m!="function").some(m=>typeof m=="boolean"?m:o.isDate(m)?rangeIncludesDate(n,m,!1,o):isDatesArray(m,o)?m.some(h=>rangeIncludesDate(n,h,!1,o)):isDateRange(m)?m.from&&m.to?rangeOverlaps(n,{from:m.from,to:m.to},o):!1:isDayOfWeekType(m)?rangeContainsDayOfWeek(n,m.dayOfWeek,o):isDateInterval(m)?o.isAfter(m.before,m.after)?rangeOverlaps(n,{from:o.addDays(m.after,1),to:o.addDays(m.before,-1)},o):dateMatchModifiers(n.from,m,o)||dateMatchModifiers(n.to,m,o):isDateAfterType(m)||isDateBeforeType(m)?dateMatchModifiers(n.from,m,o)||dateMatchModifiers(n.to,m,o):!1))return!0;const f=s.filter(m=>typeof m=="function");if(f.length){let m=n.from;const h=o.differenceInCalendarDays(n.to,n.from);for(let g=0;g<=h;g++){if(f.some(_=>_(m)))return!0;m=o.addDays(m,1)}}return!1}function useRange(n,l){const{disabled:o,excludeDisabled:s,selected:a,required:c,onSelect:f}=n,[m,h]=useControlledValue(a,f?a:void 0),g=f?a:m;return{selected:g,select:(C,D,M)=>{const{min:A,max:k}=n,R=C?addToRange(C,g,A,k,c,l):void 0;return s&&o&&R?.from&&R.to&&rangeContainsModifiers({from:R.from,to:R.to},o,l)&&(R.from=C,R.to=void 0),f||h(R),f?.(R,C,D,M),R},isSelected:C=>g&&rangeIncludesDate(g,C,!1,l)}}function useSingle(n,l){const{selected:o,required:s,onSelect:a}=n,[c,f]=useControlledValue(o,a?o:void 0),m=a?o:c,{isSameDay:h}=l;return{selected:m,select:(y,C,D)=>{let M=y;return!s&&m&&m&&h(y,m)&&(M=void 0),a||f(M),a?.(M,y,C,D),M},isSelected:y=>m?h(m,y):!1}}function useSelection(n,l){const o=useSingle(n,l),s=useMulti(n,l),a=useRange(n,l);switch(n.mode){case"single":return o;case"multiple":return s;case"range":return a;default:return}}function DayPicker(n){let l=n;l.timeZone&&(l={...n},l.today&&(l.today=new TZDate(l.today,l.timeZone)),l.month&&(l.month=new TZDate(l.month,l.timeZone)),l.defaultMonth&&(l.defaultMonth=new TZDate(l.defaultMonth,l.timeZone)),l.startMonth&&(l.startMonth=new TZDate(l.startMonth,l.timeZone)),l.endMonth&&(l.endMonth=new TZDate(l.endMonth,l.timeZone)),l.mode==="single"&&l.selected?l.selected=new TZDate(l.selected,l.timeZone):l.mode==="multiple"&&l.selected?l.selected=l.selected?.map(Ee=>new TZDate(Ee,l.timeZone)):l.mode==="range"&&l.selected&&(l.selected={from:l.selected.from?new TZDate(l.selected.from,l.timeZone):void 0,to:l.selected.to?new TZDate(l.selected.to,l.timeZone):void 0}));const{components:o,formatters:s,labels:a,dateLib:c,locale:f,classNames:m}=reactExports.useMemo(()=>{const Ee={...enUS,...l.locale};return{dateLib:new DateLib({locale:Ee,weekStartsOn:l.broadcastCalendar?1:l.weekStartsOn,firstWeekContainsDate:l.firstWeekContainsDate,useAdditionalWeekYearTokens:l.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:l.useAdditionalDayOfYearTokens,timeZone:l.timeZone,numerals:l.numerals},l.dateLib),components:getComponents(l.components),formatters:getFormatters(l.formatters),labels:{...defaultLabels,...l.labels},locale:Ee,classNames:{...getDefaultClassNames(),...l.classNames}}},[l.locale,l.broadcastCalendar,l.weekStartsOn,l.firstWeekContainsDate,l.useAdditionalWeekYearTokens,l.useAdditionalDayOfYearTokens,l.timeZone,l.numerals,l.dateLib,l.components,l.formatters,l.labels,l.classNames]),{captionLayout:h,mode:g,navLayout:_,numberOfMonths:y=1,onDayBlur:C,onDayClick:D,onDayFocus:M,onDayKeyDown:A,onDayMouseEnter:k,onDayMouseLeave:R,onNextClick:W,onPrevClick:L,showWeekNumber:x,styles:E}=l,{formatCaption:O,formatDay:B,formatMonthDropdown:V,formatWeekNumber:q,formatWeekNumberHeader:S,formatWeekdayName:z,formatYearDropdown:te}=s,J=useCalendar(l,c),{days:ge,months:ne,navStart:Y,navEnd:H,previousMonth:X,nextMonth:ae,goToMonth:ee}=J,T=createGetModifiers(ge,l,Y,H,c),{isSelected:K,select:ue,selected:pe}=useSelection(l,c)??{},{blur:fe,focused:ye,isFocusTarget:we,moveFocus:he,setFocused:Me}=useFocus(l,J,T,K??(()=>!1),c),{labelDayButton:Ve,labelGridcell:it,labelGrid:We,labelMonthDropdown:st,labelNav:Ye,labelPrevious:Xe,labelNext:Lt,labelWeekday:le,labelWeekNumber:re,labelWeekNumberHeader:me,labelYearDropdown:Se}=a,Re=reactExports.useMemo(()=>getWeekdays(c,l.ISOWeek),[c,l.ISOWeek]),be=g!==void 0||D!==void 0,xe=reactExports.useCallback(()=>{X&&(ee(X),L?.(X))},[X,ee,L]),et=reactExports.useCallback(()=>{ae&&(ee(ae),W?.(ae))},[ee,ae,W]),ft=reactExports.useCallback((Ee,Pe)=>ke=>{ke.preventDefault(),ke.stopPropagation(),Me(Ee),ue?.(Ee.date,Pe,ke),D?.(Ee.date,Pe,ke)},[ue,D,Me]),mt=reactExports.useCallback((Ee,Pe)=>ke=>{Me(Ee),M?.(Ee.date,Pe,ke)},[M,Me]),wt=reactExports.useCallback((Ee,Pe)=>ke=>{fe(),C?.(Ee.date,Pe,ke)},[fe,C]),dn=reactExports.useCallback((Ee,Pe)=>ke=>{const rt={ArrowLeft:[ke.shiftKey?"month":"day",l.dir==="rtl"?"after":"before"],ArrowRight:[ke.shiftKey?"month":"day",l.dir==="rtl"?"before":"after"],ArrowDown:[ke.shiftKey?"year":"week","after"],ArrowUp:[ke.shiftKey?"year":"week","before"],PageUp:[ke.shiftKey?"year":"month","before"],PageDown:[ke.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(rt[ke.key]){ke.preventDefault(),ke.stopPropagation();const[$e,en]=rt[ke.key];he($e,en)}A?.(Ee.date,Pe,ke)},[he,A,l.dir]),qt=reactExports.useCallback((Ee,Pe)=>ke=>{k?.(Ee.date,Pe,ke)},[k]),Bt=reactExports.useCallback((Ee,Pe)=>ke=>{R?.(Ee.date,Pe,ke)},[R]),Ge=reactExports.useCallback(Ee=>Pe=>{const ke=Number(Pe.target.value),rt=c.setMonth(c.startOfMonth(Ee),ke);ee(rt)},[c,ee]),Xt=reactExports.useCallback(Ee=>Pe=>{const ke=Number(Pe.target.value),rt=c.setYear(c.startOfMonth(Ee),ke);ee(rt)},[c,ee]),{className:Dt,style:Ht}=reactExports.useMemo(()=>({className:[m[UI.Root],l.className].filter(Boolean).join(" "),style:{...E?.[UI.Root],...l.style}}),[m,l.className,l.style,E]),ml=getDataAttributes(l),$t=reactExports.useRef(null);useAnimation($t,!!l.animate,{classNames:m,months:ne,focused:ye,dateLib:c});const In={dayPickerProps:l,selected:pe,select:ue,isSelected:K,months:ne,nextMonth:ae,previousMonth:X,goToMonth:ee,getModifiers:T,components:o,classNames:m,styles:E,labels:a,formatters:s};return React.createElement(dayPickerContext.Provider,{value:In},React.createElement(o.Root,{rootRef:l.animate?$t:void 0,className:Dt,style:Ht,dir:l.dir,id:l.id,lang:l.lang,nonce:l.nonce,title:l.title,role:l.role,"aria-label":l["aria-label"],...ml},React.createElement(o.Months,{className:m[UI.Months],style:E?.[UI.Months]},!l.hideNavigation&&!_&&React.createElement(o.Nav,{"data-animated-nav":l.animate?"true":void 0,className:m[UI.Nav],style:E?.[UI.Nav],"aria-label":Ye(),onPreviousClick:xe,onNextClick:et,previousMonth:X,nextMonth:ae}),ne.map((Ee,Pe)=>{const ke=getMonthOptions(Ee.date,Y,H,s,c),rt=getYearOptions(Y,H,s,c);return React.createElement(o.Month,{"data-animated-month":l.animate?"true":void 0,className:m[UI.Month],style:E?.[UI.Month],key:Pe,displayIndex:Pe,calendarMonth:Ee},_==="around"&&!l.hideNavigation&&Pe===0&&React.createElement(o.PreviousMonthButton,{type:"button",className:m[UI.PreviousMonthButton],tabIndex:X?void 0:-1,"aria-disabled":X?void 0:!0,"aria-label":Xe(X),onClick:xe,"data-animated-button":l.animate?"true":void 0},React.createElement(o.Chevron,{disabled:X?void 0:!0,className:m[UI.Chevron],orientation:l.dir==="rtl"?"right":"left"})),React.createElement(o.MonthCaption,{"data-animated-caption":l.animate?"true":void 0,className:m[UI.MonthCaption],style:E?.[UI.MonthCaption],calendarMonth:Ee,displayIndex:Pe},h?.startsWith("dropdown")?React.createElement(o.DropdownNav,{className:m[UI.Dropdowns],style:E?.[UI.Dropdowns]},h==="dropdown"||h==="dropdown-months"?React.createElement(o.MonthsDropdown,{className:m[UI.MonthsDropdown],"aria-label":st(),classNames:m,components:o,disabled:!!l.disableNavigation,onChange:Ge(Ee.date),options:ke,style:E?.[UI.Dropdown],value:c.getMonth(Ee.date)}):React.createElement("span",null,V(Ee.date,c)),h==="dropdown"||h==="dropdown-years"?React.createElement(o.YearsDropdown,{className:m[UI.YearsDropdown],"aria-label":Se(c.options),classNames:m,components:o,disabled:!!l.disableNavigation,onChange:Xt(Ee.date),options:rt,style:E?.[UI.Dropdown],value:c.getYear(Ee.date)}):React.createElement("span",null,te(Ee.date,c)),React.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},O(Ee.date,c.options,c))):React.createElement(o.CaptionLabel,{className:m[UI.CaptionLabel],role:"status","aria-live":"polite"},O(Ee.date,c.options,c))),_==="around"&&!l.hideNavigation&&Pe===y-1&&React.createElement(o.NextMonthButton,{type:"button",className:m[UI.NextMonthButton],tabIndex:ae?void 0:-1,"aria-disabled":ae?void 0:!0,"aria-label":Lt(ae),onClick:et,"data-animated-button":l.animate?"true":void 0},React.createElement(o.Chevron,{disabled:ae?void 0:!0,className:m[UI.Chevron],orientation:l.dir==="rtl"?"left":"right"})),Pe===y-1&&_==="after"&&!l.hideNavigation&&React.createElement(o.Nav,{"data-animated-nav":l.animate?"true":void 0,className:m[UI.Nav],style:E?.[UI.Nav],"aria-label":Ye(),onPreviousClick:xe,onNextClick:et,previousMonth:X,nextMonth:ae}),React.createElement(o.MonthGrid,{role:"grid","aria-multiselectable":g==="multiple"||g==="range","aria-label":We(Ee.date,c.options,c)||void 0,className:m[UI.MonthGrid],style:E?.[UI.MonthGrid]},!l.hideWeekdays&&React.createElement(o.Weekdays,{"data-animated-weekdays":l.animate?"true":void 0,className:m[UI.Weekdays],style:E?.[UI.Weekdays]},x&&React.createElement(o.WeekNumberHeader,{"aria-label":me(c.options),className:m[UI.WeekNumberHeader],style:E?.[UI.WeekNumberHeader],scope:"col"},S()),Re.map(($e,en)=>React.createElement(o.Weekday,{"aria-label":le($e,c.options,c),className:m[UI.Weekday],key:en,style:E?.[UI.Weekday],scope:"col"},z($e,c.options,c)))),React.createElement(o.Weeks,{"data-animated-weeks":l.animate?"true":void 0,className:m[UI.Weeks],style:E?.[UI.Weeks]},Ee.weeks.map(($e,en)=>React.createElement(o.Week,{className:m[UI.Week],key:$e.weekNumber,style:E?.[UI.Week],week:$e},x&&React.createElement(o.WeekNumber,{week:$e,style:E?.[UI.WeekNumber],"aria-label":re($e.weekNumber,{locale:f}),className:m[UI.WeekNumber],scope:"row",role:"rowheader"},q($e.weekNumber,c)),$e.days.map(ze=>{const{date:ht}=ze,De=T(ze);if(De[DayFlag.focused]=!De.hidden&&!!ye?.isEqualTo(ze),De[SelectionState.selected]=K?.(ht)||De.selected,isDateRange(pe)){const{from:tn,to:Pn}=pe;De[SelectionState.range_start]=!!(tn&&Pn&&c.isSameDay(ht,tn)),De[SelectionState.range_end]=!!(tn&&Pn&&c.isSameDay(ht,Pn)),De[SelectionState.range_middle]=rangeIncludesDate(pe,ht,!0,c)}const Ce=getStyleForModifiers(De,E,l.modifiersStyles),_t=getClassNamesForModifiers(De,m,l.modifiersClassNames),Gl=!be&&!De.hidden?it(ht,De,c.options,c):void 0;return React.createElement(o.Day,{key:`${c.format(ht,"yyyy-MM-dd")}_${c.format(ze.displayMonth,"yyyy-MM")}`,day:ze,modifiers:De,className:_t.join(" "),style:Ce,role:"gridcell","aria-selected":De.selected||void 0,"aria-label":Gl,"data-day":c.format(ht,"yyyy-MM-dd"),"data-month":ze.outside?c.format(ht,"yyyy-MM"):void 0,"data-selected":De.selected||void 0,"data-disabled":De.disabled||void 0,"data-hidden":De.hidden||void 0,"data-outside":ze.outside||void 0,"data-focused":De.focused||void 0,"data-today":De.today||void 0},!De.hidden&&be?React.createElement(o.DayButton,{className:m[UI.DayButton],style:E?.[UI.DayButton],type:"button",day:ze,modifiers:De,disabled:De.disabled||void 0,tabIndex:we(ze)?0:-1,"aria-label":Ve(ht,De,c.options,c),onClick:ft(ze,De),onBlur:wt(ze,De),onFocus:mt(ze,De),onKeyDown:dn(ze,De),onMouseEnter:qt(ze,De),onMouseLeave:Bt(ze,De)},B(ht,c.options,c)):!De.hidden&&B(ze.date,c.options,c))}))))))})),l.footer&&React.createElement(o.Footer,{className:m[UI.Footer],style:E?.[UI.Footer],role:"status","aria-live":"polite"},l.footer)))}var _excluded$6=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function useStateManager(n){var l=n.defaultInputValue,o=l===void 0?"":l,s=n.defaultMenuIsOpen,a=s===void 0?!1:s,c=n.defaultValue,f=c===void 0?null:c,m=n.inputValue,h=n.menuIsOpen,g=n.onChange,_=n.onInputChange,y=n.onMenuClose,C=n.onMenuOpen,D=n.value,M=_objectWithoutProperties(n,_excluded$6),A=reactExports.useState(m!==void 0?m:o),k=_slicedToArray(A,2),R=k[0],W=k[1],L=reactExports.useState(h!==void 0?h:a),x=_slicedToArray(L,2),E=x[0],O=x[1],B=reactExports.useState(D!==void 0?D:f),V=_slicedToArray(B,2),q=V[0],S=V[1],z=reactExports.useCallback(function(X,ae){typeof g=="function"&&g(X,ae),S(X)},[g]),te=reactExports.useCallback(function(X,ae){var ee;typeof _=="function"&&(ee=_(X,ae)),W(ee!==void 0?ee:X)},[_]),J=reactExports.useCallback(function(){typeof C=="function"&&C(),O(!0)},[C]),ge=reactExports.useCallback(function(){typeof y=="function"&&y(),O(!1)},[y]),ne=m!==void 0?m:R,Y=h!==void 0?h:E,H=D!==void 0?D:q;return _objectSpread2(_objectSpread2({},M),{},{inputValue:ne,menuIsOpen:Y,onChange:z,onInputChange:te,onMenuClose:ge,onMenuOpen:J,value:H})}var reactIs$1={exports:{}},reactIs_production_min={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReactIs_production_min;function requireReactIs_production_min(){if(hasRequiredReactIs_production_min)return reactIs_production_min;hasRequiredReactIs_production_min=1;var n=typeof Symbol=="function"&&Symbol.for,l=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,s=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,f=n?Symbol.for("react.provider"):60109,m=n?Symbol.for("react.context"):60110,h=n?Symbol.for("react.async_mode"):60111,g=n?Symbol.for("react.concurrent_mode"):60111,_=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,C=n?Symbol.for("react.suspense_list"):60120,D=n?Symbol.for("react.memo"):60115,M=n?Symbol.for("react.lazy"):60116,A=n?Symbol.for("react.block"):60121,k=n?Symbol.for("react.fundamental"):60117,R=n?Symbol.for("react.responder"):60118,W=n?Symbol.for("react.scope"):60119;function L(E){if(typeof E=="object"&&E!==null){var O=E.$$typeof;switch(O){case l:switch(E=E.type,E){case h:case g:case s:case c:case a:case y:return E;default:switch(E=E&&E.$$typeof,E){case m:case _:case M:case D:case f:return E;default:return O}}case o:return O}}}function x(E){return L(E)===g}return reactIs_production_min.AsyncMode=h,reactIs_production_min.ConcurrentMode=g,reactIs_production_min.ContextConsumer=m,reactIs_production_min.ContextProvider=f,reactIs_production_min.Element=l,reactIs_production_min.ForwardRef=_,reactIs_production_min.Fragment=s,reactIs_production_min.Lazy=M,reactIs_production_min.Memo=D,reactIs_production_min.Portal=o,reactIs_production_min.Profiler=c,reactIs_production_min.StrictMode=a,reactIs_production_min.Suspense=y,reactIs_production_min.isAsyncMode=function(E){return x(E)||L(E)===h},reactIs_production_min.isConcurrentMode=x,reactIs_production_min.isContextConsumer=function(E){return L(E)===m},reactIs_production_min.isContextProvider=function(E){return L(E)===f},reactIs_production_min.isElement=function(E){return typeof E=="object"&&E!==null&&E.$$typeof===l},reactIs_production_min.isForwardRef=function(E){return L(E)===_},reactIs_production_min.isFragment=function(E){return L(E)===s},reactIs_production_min.isLazy=function(E){return L(E)===M},reactIs_production_min.isMemo=function(E){return L(E)===D},reactIs_production_min.isPortal=function(E){return L(E)===o},reactIs_production_min.isProfiler=function(E){return L(E)===c},reactIs_production_min.isStrictMode=function(E){return L(E)===a},reactIs_production_min.isSuspense=function(E){return L(E)===y},reactIs_production_min.isValidElementType=function(E){return typeof E=="string"||typeof E=="function"||E===s||E===g||E===c||E===a||E===y||E===C||typeof E=="object"&&E!==null&&(E.$$typeof===M||E.$$typeof===D||E.$$typeof===f||E.$$typeof===m||E.$$typeof===_||E.$$typeof===k||E.$$typeof===R||E.$$typeof===W||E.$$typeof===A)},reactIs_production_min.typeOf=L,reactIs_production_min}var hasRequiredReactIs$1;function requireReactIs$1(){return hasRequiredReactIs$1||(hasRequiredReactIs$1=1,reactIs$1.exports=requireReactIs_production_min()),reactIs$1.exports}var hoistNonReactStatics_cjs,hasRequiredHoistNonReactStatics_cjs;function requireHoistNonReactStatics_cjs(){if(hasRequiredHoistNonReactStatics_cjs)return hoistNonReactStatics_cjs;hasRequiredHoistNonReactStatics_cjs=1;var n=requireReactIs$1(),l={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};c[n.ForwardRef]=s,c[n.Memo]=a;function f(M){return n.isMemo(M)?a:c[M.$$typeof]||l}var m=Object.defineProperty,h=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols,_=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,C=Object.prototype;function D(M,A,k){if(typeof A!="string"){if(C){var R=y(A);R&&R!==C&&D(M,R,k)}var W=h(A);g&&(W=W.concat(g(A)));for(var L=f(M),x=f(A),E=0;E<W.length;++E){var O=W[E];if(!o[O]&&!(k&&k[O])&&!(x&&x[O])&&!(L&&L[O])){var B=_(A,O);try{m(M,O,B)}catch{}}}}return M}return hoistNonReactStatics_cjs=D,hoistNonReactStatics_cjs}requireHoistNonReactStatics_cjs();var syncFallback=function(l){return l()},useInsertionEffect=React$1.useInsertionEffect?React$1.useInsertionEffect:!1,useInsertionEffectAlwaysWithSyncFallback=useInsertionEffect||syncFallback,EmotionCacheContext=reactExports.createContext(typeof HTMLElement<"u"?createCache({key:"css"}):null);EmotionCacheContext.Provider;var withEmotionCache=function(l){return reactExports.forwardRef(function(o,s){var a=reactExports.useContext(EmotionCacheContext);return l(o,a,s)})},ThemeContext=reactExports.createContext({}),hasOwn={}.hasOwnProperty,typePropName="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",createEmotionProps=function(l,o){var s={};for(var a in o)hasOwn.call(o,a)&&(s[a]=o[a]);return s[typePropName]=l,s},Insertion$1=function(l){var o=l.cache,s=l.serialized,a=l.isStringTag;return registerStyles(o,s,a),useInsertionEffectAlwaysWithSyncFallback(function(){return insertStyles(o,s,a)}),null},Emotion=withEmotionCache(function(n,l,o){var s=n.css;typeof s=="string"&&l.registered[s]!==void 0&&(s=l.registered[s]);var a=n[typePropName],c=[s],f="";typeof n.className=="string"?f=getRegisteredStyles(l.registered,c,n.className):n.className!=null&&(f=n.className+" ");var m=serializeStyles(c,void 0,reactExports.useContext(ThemeContext));f+=l.key+"-"+m.name;var h={};for(var g in n)hasOwn.call(n,g)&&g!=="css"&&g!==typePropName&&(h[g]=n[g]);return h.className=f,o&&(h.ref=o),reactExports.createElement(reactExports.Fragment,null,reactExports.createElement(Insertion$1,{cache:l,serialized:m,isStringTag:typeof a=="string"}),reactExports.createElement(a,h))}),Emotion$1=Emotion,jsx=function(l,o){var s=arguments;if(o==null||!hasOwn.call(o,"css"))return reactExports.createElement.apply(void 0,s);var a=s.length,c=new Array(a);c[0]=Emotion$1,c[1]=createEmotionProps(l,o);for(var f=2;f<a;f++)c[f]=s[f];return reactExports.createElement.apply(null,c)};(function(n){var l;l||(l=n.JSX||(n.JSX={}))})(jsx||(jsx={}));function css(){for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return serializeStyles(l)}function keyframes(){var n=css.apply(void 0,arguments),l="animation-"+n.name;return{name:l,styles:"@keyframes "+l+"{"+n.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var reactDomExports=requireReactDom();const ReactDOM=getDefaultExportFromCjs(reactDomExports);var index=reactExports.useLayoutEffect,_excluded$4=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],noop$2=function(){};function applyPrefixToName(n,l){return l?l[0]==="-"?n+l:n+"__"+l:n}function classNames(n,l){for(var o=arguments.length,s=new Array(o>2?o-2:0),a=2;a<o;a++)s[a-2]=arguments[a];var c=[].concat(s);if(l&&n)for(var f in l)l.hasOwnProperty(f)&&l[f]&&c.push("".concat(applyPrefixToName(n,f)));return c.filter(function(m){return m}).map(function(m){return String(m).trim()}).join(" ")}var cleanValue=function(l){return isArray(l)?l.filter(Boolean):_typeof(l)==="object"&&l!==null?[l]:[]},cleanCommonProps=function(l){l.className,l.clearValue,l.cx,l.getStyles,l.getClassNames,l.getValue,l.hasValue,l.isMulti,l.isRtl,l.options,l.selectOption,l.selectProps,l.setValue,l.theme;var o=_objectWithoutProperties(l,_excluded$4);return _objectSpread2({},o)},getStyleProps=function(l,o,s){var a=l.cx,c=l.getStyles,f=l.getClassNames,m=l.className;return{css:c(o,l),className:a(s??{},f(o,l),m)}};function handleInputChange(n,l,o){if(o){var s=o(n,l);if(typeof s=="string")return s}return n}function isDocumentElement(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function normalizedHeight(n){return isDocumentElement(n)?window.innerHeight:n.clientHeight}function getScrollTop(n){return isDocumentElement(n)?window.pageYOffset:n.scrollTop}function scrollTo(n,l){if(isDocumentElement(n)){window.scrollTo(0,l);return}n.scrollTop=l}function getScrollParent(n){var l=getComputedStyle(n),o=l.position==="absolute",s=/(auto|scroll)/;if(l.position==="fixed")return document.documentElement;for(var a=n;a=a.parentElement;)if(l=getComputedStyle(a),!(o&&l.position==="static")&&s.test(l.overflow+l.overflowY+l.overflowX))return a;return document.documentElement}function easeOutCubic(n,l,o,s){return o*((n=n/s-1)*n*n+1)+l}function animatedScrollTo(n,l){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:noop$2,a=getScrollTop(n),c=l-a,f=10,m=0;function h(){m+=f;var g=easeOutCubic(m,a,c,o);scrollTo(n,g),m<o?window.requestAnimationFrame(h):s(n)}h()}function scrollIntoView(n,l){var o=n.getBoundingClientRect(),s=l.getBoundingClientRect(),a=l.offsetHeight/3;s.bottom+a>o.bottom?scrollTo(n,Math.min(l.offsetTop+l.clientHeight-n.offsetHeight+a,n.scrollHeight)):s.top-a<o.top&&scrollTo(n,Math.max(l.offsetTop-a,0))}function getBoundingClientObj(n){var l=n.getBoundingClientRect();return{bottom:l.bottom,height:l.height,left:l.left,right:l.right,top:l.top,width:l.width}}function isTouchCapable(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function isMobileDevice(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var passiveOptionAccessed=!1,options={get passive(){return passiveOptionAccessed=!0}},w=typeof window<"u"?window:{};w.addEventListener&&w.removeEventListener&&(w.addEventListener("p",noop$2,options),w.removeEventListener("p",noop$2,!1));var supportsPassiveEvents=passiveOptionAccessed;function notNullish(n){return n!=null}function isArray(n){return Array.isArray(n)}function valueTernary(n,l,o){return n?l:o}function singleValueAsValue(n){return n}function multiValueAsValue(n){return n}var removeProps=function(l){for(var o=arguments.length,s=new Array(o>1?o-1:0),a=1;a<o;a++)s[a-1]=arguments[a];var c=Object.entries(l).filter(function(f){var m=_slicedToArray(f,1),h=m[0];return!s.includes(h)});return c.reduce(function(f,m){var h=_slicedToArray(m,2),g=h[0],_=h[1];return f[g]=_,f},{})},_excluded$3=["children","innerProps"],_excluded2$1=["children","innerProps"];function getMenuPlacement(n){var l=n.maxHeight,o=n.menuEl,s=n.minHeight,a=n.placement,c=n.shouldScroll,f=n.isFixedPosition,m=n.controlHeight,h=getScrollParent(o),g={placement:"bottom",maxHeight:l};if(!o||!o.offsetParent)return g;var _=h.getBoundingClientRect(),y=_.height,C=o.getBoundingClientRect(),D=C.bottom,M=C.height,A=C.top,k=o.offsetParent.getBoundingClientRect(),R=k.top,W=f?window.innerHeight:normalizedHeight(h),L=getScrollTop(h),x=parseInt(getComputedStyle(o).marginBottom,10),E=parseInt(getComputedStyle(o).marginTop,10),O=R-E,B=W-A,V=O+L,q=y-L-A,S=D-W+L+x,z=L+A-E,te=160;switch(a){case"auto":case"bottom":if(B>=M)return{placement:"bottom",maxHeight:l};if(q>=M&&!f)return c&&animatedScrollTo(h,S,te),{placement:"bottom",maxHeight:l};if(!f&&q>=s||f&&B>=s){c&&animatedScrollTo(h,S,te);var J=f?B-x:q-x;return{placement:"bottom",maxHeight:J}}if(a==="auto"||f){var ge=l,ne=f?O:V;return ne>=s&&(ge=Math.min(ne-x-m,l)),{placement:"top",maxHeight:ge}}if(a==="bottom")return c&&scrollTo(h,S),{placement:"bottom",maxHeight:l};break;case"top":if(O>=M)return{placement:"top",maxHeight:l};if(V>=M&&!f)return c&&animatedScrollTo(h,z,te),{placement:"top",maxHeight:l};if(!f&&V>=s||f&&O>=s){var Y=l;return(!f&&V>=s||f&&O>=s)&&(Y=f?O-E:V-E),c&&animatedScrollTo(h,z,te),{placement:"top",maxHeight:Y}}return{placement:"bottom",maxHeight:l};default:throw new Error('Invalid placement provided "'.concat(a,'".'))}return g}function alignToControl(n){var l={bottom:"top",top:"bottom"};return n?l[n]:"bottom"}var coercePlacement=function(l){return l==="auto"?"bottom":l},menuCSS=function(l,o){var s,a=l.placement,c=l.theme,f=c.borderRadius,m=c.spacing,h=c.colors;return _objectSpread2((s={label:"menu"},_defineProperty(s,alignToControl(a),"100%"),_defineProperty(s,"position","absolute"),_defineProperty(s,"width","100%"),_defineProperty(s,"zIndex",1),s),o?{}:{backgroundColor:h.neutral0,borderRadius:f,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:m.menuGutter,marginTop:m.menuGutter})},PortalPlacementContext=reactExports.createContext(null),MenuPlacer=function(l){var o=l.children,s=l.minMenuHeight,a=l.maxMenuHeight,c=l.menuPlacement,f=l.menuPosition,m=l.menuShouldScrollIntoView,h=l.theme,g=reactExports.useContext(PortalPlacementContext)||{},_=g.setPortalPlacement,y=reactExports.useRef(null),C=reactExports.useState(a),D=_slicedToArray(C,2),M=D[0],A=D[1],k=reactExports.useState(null),R=_slicedToArray(k,2),W=R[0],L=R[1],x=h.spacing.controlHeight;return index(function(){var E=y.current;if(E){var O=f==="fixed",B=m&&!O,V=getMenuPlacement({maxHeight:a,menuEl:E,minHeight:s,placement:c,shouldScroll:B,isFixedPosition:O,controlHeight:x});A(V.maxHeight),L(V.placement),_?.(V.placement)}},[a,c,f,m,s,_,x]),o({ref:y,placerProps:_objectSpread2(_objectSpread2({},l),{},{placement:W||coercePlacement(c),maxHeight:M})})},Menu=function(l){var o=l.children,s=l.innerRef,a=l.innerProps;return jsx("div",_extends({},getStyleProps(l,"menu",{menu:!0}),{ref:s},a),o)},Menu$1=Menu,menuListCSS=function(l,o){var s=l.maxHeight,a=l.theme.spacing.baseUnit;return _objectSpread2({maxHeight:s,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},o?{}:{paddingBottom:a,paddingTop:a})},MenuList=function(l){var o=l.children,s=l.innerProps,a=l.innerRef,c=l.isMulti;return jsx("div",_extends({},getStyleProps(l,"menuList",{"menu-list":!0,"menu-list--is-multi":c}),{ref:a},s),o)},noticeCSS=function(l,o){var s=l.theme,a=s.spacing.baseUnit,c=s.colors;return _objectSpread2({textAlign:"center"},o?{}:{color:c.neutral40,padding:"".concat(a*2,"px ").concat(a*3,"px")})},noOptionsMessageCSS=noticeCSS,loadingMessageCSS=noticeCSS,NoOptionsMessage=function(l){var o=l.children,s=o===void 0?"No options":o,a=l.innerProps,c=_objectWithoutProperties(l,_excluded$3);return jsx("div",_extends({},getStyleProps(_objectSpread2(_objectSpread2({},c),{},{children:s,innerProps:a}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),a),s)},LoadingMessage=function(l){var o=l.children,s=o===void 0?"Loading...":o,a=l.innerProps,c=_objectWithoutProperties(l,_excluded2$1);return jsx("div",_extends({},getStyleProps(_objectSpread2(_objectSpread2({},c),{},{children:s,innerProps:a}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),a),s)},menuPortalCSS=function(l){var o=l.rect,s=l.offset,a=l.position;return{left:o.left,position:a,top:s,width:o.width,zIndex:1}},MenuPortal=function(l){var o=l.appendTo,s=l.children,a=l.controlElement,c=l.innerProps,f=l.menuPlacement,m=l.menuPosition,h=reactExports.useRef(null),g=reactExports.useRef(null),_=reactExports.useState(coercePlacement(f)),y=_slicedToArray(_,2),C=y[0],D=y[1],M=reactExports.useMemo(function(){return{setPortalPlacement:D}},[]),A=reactExports.useState(null),k=_slicedToArray(A,2),R=k[0],W=k[1],L=reactExports.useCallback(function(){if(a){var B=getBoundingClientObj(a),V=m==="fixed"?0:window.pageYOffset,q=B[C]+V;(q!==R?.offset||B.left!==R?.rect.left||B.width!==R?.rect.width)&&W({offset:q,rect:B})}},[a,m,C,R?.offset,R?.rect.left,R?.rect.width]);index(function(){L()},[L]);var x=reactExports.useCallback(function(){typeof g.current=="function"&&(g.current(),g.current=null),a&&h.current&&(g.current=autoUpdate(a,h.current,L,{elementResize:"ResizeObserver"in window}))},[a,L]);index(function(){x()},[x]);var E=reactExports.useCallback(function(B){h.current=B,x()},[x]);if(!o&&m!=="fixed"||!R)return null;var O=jsx("div",_extends({ref:E},getStyleProps(_objectSpread2(_objectSpread2({},l),{},{offset:R.offset,position:m,rect:R.rect}),"menuPortal",{"menu-portal":!0}),c),s);return jsx(PortalPlacementContext.Provider,{value:M},o?reactDomExports.createPortal(O,o):O)},containerCSS=function(l){var o=l.isDisabled,s=l.isRtl;return{label:"container",direction:s?"rtl":void 0,pointerEvents:o?"none":void 0,position:"relative"}},SelectContainer=function(l){var o=l.children,s=l.innerProps,a=l.isDisabled,c=l.isRtl;return jsx("div",_extends({},getStyleProps(l,"container",{"--is-disabled":a,"--is-rtl":c}),s),o)},valueContainerCSS=function(l,o){var s=l.theme.spacing,a=l.isMulti,c=l.hasValue,f=l.selectProps.controlShouldRenderValue;return _objectSpread2({alignItems:"center",display:a&&c&&f?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},o?{}:{padding:"".concat(s.baseUnit/2,"px ").concat(s.baseUnit*2,"px")})},ValueContainer=function(l){var o=l.children,s=l.innerProps,a=l.isMulti,c=l.hasValue;return jsx("div",_extends({},getStyleProps(l,"valueContainer",{"value-container":!0,"value-container--is-multi":a,"value-container--has-value":c}),s),o)},indicatorsContainerCSS=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},IndicatorsContainer=function(l){var o=l.children,s=l.innerProps;return jsx("div",_extends({},getStyleProps(l,"indicatorsContainer",{indicators:!0}),s),o)},_templateObject,_excluded$2=["size"],_excluded2=["innerProps","isRtl","size"],_ref2$2={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},Svg=function(l){var o=l.size,s=_objectWithoutProperties(l,_excluded$2);return jsx("svg",_extends({height:o,width:o,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:_ref2$2},s))},CrossIcon=function(l){return jsx(Svg,_extends({size:20},l),jsx("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},DownChevron=function(l){return jsx(Svg,_extends({size:20},l),jsx("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},baseCSS=function(l,o){var s=l.isFocused,a=l.theme,c=a.spacing.baseUnit,f=a.colors;return _objectSpread2({label:"indicatorContainer",display:"flex",transition:"color 150ms"},o?{}:{color:s?f.neutral60:f.neutral20,padding:c*2,":hover":{color:s?f.neutral80:f.neutral40}})},dropdownIndicatorCSS=baseCSS,DropdownIndicator=function(l){var o=l.children,s=l.innerProps;return jsx("div",_extends({},getStyleProps(l,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),s),o||jsx(DownChevron,null))},clearIndicatorCSS=baseCSS,ClearIndicator=function(l){var o=l.children,s=l.innerProps;return jsx("div",_extends({},getStyleProps(l,"clearIndicator",{indicator:!0,"clear-indicator":!0}),s),o||jsx(CrossIcon,null))},indicatorSeparatorCSS=function(l,o){var s=l.isDisabled,a=l.theme,c=a.spacing.baseUnit,f=a.colors;return _objectSpread2({label:"indicatorSeparator",alignSelf:"stretch",width:1},o?{}:{backgroundColor:s?f.neutral10:f.neutral20,marginBottom:c*2,marginTop:c*2})},IndicatorSeparator=function(l){var o=l.innerProps;return jsx("span",_extends({},o,getStyleProps(l,"indicatorSeparator",{"indicator-separator":!0})))},loadingDotAnimations=keyframes(_templateObject||(_templateObject=_taggedTemplateLiteral([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),loadingIndicatorCSS=function(l,o){var s=l.isFocused,a=l.size,c=l.theme,f=c.colors,m=c.spacing.baseUnit;return _objectSpread2({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:a,lineHeight:1,marginRight:a,textAlign:"center",verticalAlign:"middle"},o?{}:{color:s?f.neutral60:f.neutral20,padding:m*2})},LoadingDot=function(l){var o=l.delay,s=l.offset;return jsx("span",{css:css({animation:"".concat(loadingDotAnimations," 1s ease-in-out ").concat(o,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:s?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},LoadingIndicator=function(l){var o=l.innerProps,s=l.isRtl,a=l.size,c=a===void 0?4:a,f=_objectWithoutProperties(l,_excluded2);return jsx("div",_extends({},getStyleProps(_objectSpread2(_objectSpread2({},f),{},{innerProps:o,isRtl:s,size:c}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),o),jsx(LoadingDot,{delay:0,offset:s}),jsx(LoadingDot,{delay:160,offset:!0}),jsx(LoadingDot,{delay:320,offset:!s}))},css$1=function(l,o){var s=l.isDisabled,a=l.isFocused,c=l.theme,f=c.colors,m=c.borderRadius,h=c.spacing;return _objectSpread2({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:h.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},o?{}:{backgroundColor:s?f.neutral5:f.neutral0,borderColor:s?f.neutral10:a?f.primary:f.neutral20,borderRadius:m,borderStyle:"solid",borderWidth:1,boxShadow:a?"0 0 0 1px ".concat(f.primary):void 0,"&:hover":{borderColor:a?f.primary:f.neutral30}})},Control=function(l){var o=l.children,s=l.isDisabled,a=l.isFocused,c=l.innerRef,f=l.innerProps,m=l.menuIsOpen;return jsx("div",_extends({ref:c},getStyleProps(l,"control",{control:!0,"control--is-disabled":s,"control--is-focused":a,"control--menu-is-open":m}),f,{"aria-disabled":s||void 0}),o)},Control$1=Control,_excluded$1$1=["data"],groupCSS=function(l,o){var s=l.theme.spacing;return o?{}:{paddingBottom:s.baseUnit*2,paddingTop:s.baseUnit*2}},Group=function(l){var o=l.children,s=l.cx,a=l.getStyles,c=l.getClassNames,f=l.Heading,m=l.headingProps,h=l.innerProps,g=l.label,_=l.theme,y=l.selectProps;return jsx("div",_extends({},getStyleProps(l,"group",{group:!0}),h),jsx(f,_extends({},m,{selectProps:y,theme:_,getStyles:a,getClassNames:c,cx:s}),g),jsx("div",null,o))},groupHeadingCSS=function(l,o){var s=l.theme,a=s.colors,c=s.spacing;return _objectSpread2({label:"group",cursor:"default",display:"block"},o?{}:{color:a.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:c.baseUnit*3,paddingRight:c.baseUnit*3,textTransform:"uppercase"})},GroupHeading=function(l){var o=cleanCommonProps(l);o.data;var s=_objectWithoutProperties(o,_excluded$1$1);return jsx("div",_extends({},getStyleProps(l,"groupHeading",{"group-heading":!0}),s))},Group$1=Group,_excluded$5=["innerRef","isDisabled","isHidden","inputClassName"],inputCSS=function(l,o){var s=l.isDisabled,a=l.value,c=l.theme,f=c.spacing,m=c.colors;return _objectSpread2(_objectSpread2({visibility:s?"hidden":"visible",transform:a?"translateZ(0)":""},containerStyle),o?{}:{margin:f.baseUnit/2,paddingBottom:f.baseUnit/2,paddingTop:f.baseUnit/2,color:m.neutral80})},spacingStyle={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},containerStyle={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":_objectSpread2({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},spacingStyle)},inputStyle=function(l){return _objectSpread2({label:"input",color:"inherit",background:0,opacity:l?0:1,width:"100%"},spacingStyle)},Input=function(l){var o=l.cx,s=l.value,a=cleanCommonProps(l),c=a.innerRef,f=a.isDisabled,m=a.isHidden,h=a.inputClassName,g=_objectWithoutProperties(a,_excluded$5);return jsx("div",_extends({},getStyleProps(l,"input",{"input-container":!0}),{"data-value":s||""}),jsx("input",_extends({className:o({input:!0},h),ref:c,style:inputStyle(m),disabled:f},g)))},Input$1=Input,multiValueCSS=function(l,o){var s=l.theme,a=s.spacing,c=s.borderRadius,f=s.colors;return _objectSpread2({label:"multiValue",display:"flex",minWidth:0},o?{}:{backgroundColor:f.neutral10,borderRadius:c/2,margin:a.baseUnit/2})},multiValueLabelCSS=function(l,o){var s=l.theme,a=s.borderRadius,c=s.colors,f=l.cropWithEllipsis;return _objectSpread2({overflow:"hidden",textOverflow:f||f===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},o?{}:{borderRadius:a/2,color:c.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},multiValueRemoveCSS=function(l,o){var s=l.theme,a=s.spacing,c=s.borderRadius,f=s.colors,m=l.isFocused;return _objectSpread2({alignItems:"center",display:"flex"},o?{}:{borderRadius:c/2,backgroundColor:m?f.dangerLight:void 0,paddingLeft:a.baseUnit,paddingRight:a.baseUnit,":hover":{backgroundColor:f.dangerLight,color:f.danger}})},MultiValueGeneric=function(l){var o=l.children,s=l.innerProps;return jsx("div",s,o)},MultiValueContainer=MultiValueGeneric,MultiValueLabel=MultiValueGeneric;function MultiValueRemove(n){var l=n.children,o=n.innerProps;return jsx("div",_extends({role:"button"},o),l||jsx(CrossIcon,{size:14}))}var MultiValue=function(l){var o=l.children,s=l.components,a=l.data,c=l.innerProps,f=l.isDisabled,m=l.removeProps,h=l.selectProps,g=s.Container,_=s.Label,y=s.Remove;return jsx(g,{data:a,innerProps:_objectSpread2(_objectSpread2({},getStyleProps(l,"multiValue",{"multi-value":!0,"multi-value--is-disabled":f})),c),selectProps:h},jsx(_,{data:a,innerProps:_objectSpread2({},getStyleProps(l,"multiValueLabel",{"multi-value__label":!0})),selectProps:h},o),jsx(y,{data:a,innerProps:_objectSpread2(_objectSpread2({},getStyleProps(l,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(o||"option")},m),selectProps:h}))},MultiValue$1=MultiValue,optionCSS=function(l,o){var s=l.isDisabled,a=l.isFocused,c=l.isSelected,f=l.theme,m=f.spacing,h=f.colors;return _objectSpread2({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},o?{}:{backgroundColor:c?h.primary:a?h.primary25:"transparent",color:s?h.neutral20:c?h.neutral0:"inherit",padding:"".concat(m.baseUnit*2,"px ").concat(m.baseUnit*3,"px"),":active":{backgroundColor:s?void 0:c?h.primary:h.primary50}})},Option=function(l){var o=l.children,s=l.isDisabled,a=l.isFocused,c=l.isSelected,f=l.innerRef,m=l.innerProps;return jsx("div",_extends({},getStyleProps(l,"option",{option:!0,"option--is-disabled":s,"option--is-focused":a,"option--is-selected":c}),{ref:f,"aria-disabled":s},m),o)},Option$1=Option,placeholderCSS=function(l,o){var s=l.theme,a=s.spacing,c=s.colors;return _objectSpread2({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},o?{}:{color:c.neutral50,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},Placeholder=function(l){var o=l.children,s=l.innerProps;return jsx("div",_extends({},getStyleProps(l,"placeholder",{placeholder:!0}),s),o)},Placeholder$1=Placeholder,css2=function(l,o){var s=l.isDisabled,a=l.theme,c=a.spacing,f=a.colors;return _objectSpread2({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o?{}:{color:s?f.neutral40:f.neutral80,marginLeft:c.baseUnit/2,marginRight:c.baseUnit/2})},SingleValue=function(l){var o=l.children,s=l.isDisabled,a=l.innerProps;return jsx("div",_extends({},getStyleProps(l,"singleValue",{"single-value":!0,"single-value--is-disabled":s}),a),o)},SingleValue$1=SingleValue,components={ClearIndicator,Control:Control$1,DropdownIndicator,DownChevron,CrossIcon,Group:Group$1,GroupHeading,IndicatorsContainer,IndicatorSeparator,Input:Input$1,LoadingIndicator,Menu:Menu$1,MenuList,MenuPortal,LoadingMessage,NoOptionsMessage,MultiValue:MultiValue$1,MultiValueContainer,MultiValueLabel,MultiValueRemove,Option:Option$1,Placeholder:Placeholder$1,SelectContainer,SingleValue:SingleValue$1,ValueContainer},defaultComponents=function(l){return _objectSpread2(_objectSpread2({},components),l.components)},_ref={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},A11yText=function(l){return jsx("span",_extends({css:_ref},l))},A11yText$1=A11yText,defaultAriaLiveMessages={guidance:function(l){var o=l.isSearchable,s=l.isMulti,a=l.tabSelectsValue,c=l.context,f=l.isInitialFocus;switch(c){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(a?", press Tab to select the option and exit the menu":"",".");case"input":return f?"".concat(l["aria-label"]||"Select"," is focused ").concat(o?",type to refine list":"",", press Down to open the menu, ").concat(s?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(l){var o=l.action,s=l.label,a=s===void 0?"":s,c=l.labels,f=l.isDisabled;switch(o){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(a,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(c.length>1?"s":""," ").concat(c.join(","),", selected.");case"select-option":return f?"option ".concat(a," is disabled. Select another option."):"option ".concat(a,", selected.");default:return""}},onFocus:function(l){var o=l.context,s=l.focused,a=l.options,c=l.label,f=c===void 0?"":c,m=l.selectValue,h=l.isDisabled,g=l.isSelected,_=l.isAppleDevice,y=function(A,k){return A&&A.length?"".concat(A.indexOf(k)+1," of ").concat(A.length):""};if(o==="value"&&m)return"value ".concat(f," focused, ").concat(y(m,s),".");if(o==="menu"&&_){var C=h?" disabled":"",D="".concat(g?" selected":"").concat(C);return"".concat(f).concat(D,", ").concat(y(a,s),".")}return""},onFilter:function(l){var o=l.inputValue,s=l.resultsMessage;return"".concat(s).concat(o?" for search term "+o:"",".")}},LiveRegion=function(l){var o=l.ariaSelection,s=l.focusedOption,a=l.focusedValue,c=l.focusableOptions,f=l.isFocused,m=l.selectValue,h=l.selectProps,g=l.id,_=l.isAppleDevice,y=h.ariaLiveMessages,C=h.getOptionLabel,D=h.inputValue,M=h.isMulti,A=h.isOptionDisabled,k=h.isSearchable,R=h.menuIsOpen,W=h.options,L=h.screenReaderStatus,x=h.tabSelectsValue,E=h.isLoading,O=h["aria-label"],B=h["aria-live"],V=reactExports.useMemo(function(){return _objectSpread2(_objectSpread2({},defaultAriaLiveMessages),y||{})},[y]),q=reactExports.useMemo(function(){var ne="";if(o&&V.onChange){var Y=o.option,H=o.options,X=o.removedValue,ae=o.removedValues,ee=o.value,T=function(he){return Array.isArray(he)?null:he},K=X||Y||T(ee),ue=K?C(K):"",pe=H||ae||void 0,fe=pe?pe.map(C):[],ye=_objectSpread2({isDisabled:K&&A(K,m),label:ue,labels:fe},o);ne=V.onChange(ye)}return ne},[o,V,A,m,C]),S=reactExports.useMemo(function(){var ne="",Y=s||a,H=!!(s&&m&&m.includes(s));if(Y&&V.onFocus){var X={focused:Y,label:C(Y),isDisabled:A(Y,m),isSelected:H,options:c,context:Y===s?"menu":"value",selectValue:m,isAppleDevice:_};ne=V.onFocus(X)}return ne},[s,a,C,A,V,c,m,_]),z=reactExports.useMemo(function(){var ne="";if(R&&W.length&&!E&&V.onFilter){var Y=L({count:c.length});ne=V.onFilter({inputValue:D,resultsMessage:Y})}return ne},[c,D,R,V,W,L,E]),te=o?.action==="initial-input-focus",J=reactExports.useMemo(function(){var ne="";if(V.guidance){var Y=a?"value":R?"menu":"input";ne=V.guidance({"aria-label":O,context:Y,isDisabled:s&&A(s,m),isMulti:M,isSearchable:k,tabSelectsValue:x,isInitialFocus:te})}return ne},[O,s,a,M,A,k,R,V,m,x,te]),ge=jsx(reactExports.Fragment,null,jsx("span",{id:"aria-selection"},q),jsx("span",{id:"aria-focused"},S),jsx("span",{id:"aria-results"},z),jsx("span",{id:"aria-guidance"},J));return jsx(reactExports.Fragment,null,jsx(A11yText$1,{id:g},te&&ge),jsx(A11yText$1,{"aria-live":B,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},f&&!te&&ge))},LiveRegion$1=LiveRegion,diacritics=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],anyDiacritic=new RegExp("["+diacritics.map(function(n){return n.letters}).join("")+"]","g"),diacriticToBase={};for(var i=0;i<diacritics.length;i++)for(var diacritic=diacritics[i],j=0;j<diacritic.letters.length;j++)diacriticToBase[diacritic.letters[j]]=diacritic.base;var stripDiacritics=function(l){return l.replace(anyDiacritic,function(o){return diacriticToBase[o]})},memoizedStripDiacriticsForInput=memoizeOne(stripDiacritics),trimString=function(l){return l.replace(/^\s+|\s+$/g,"")},defaultStringify=function(l){return"".concat(l.label," ").concat(l.value)},createFilter=function(l){return function(o,s){if(o.data.__isNew__)return!0;var a=_objectSpread2({ignoreCase:!0,ignoreAccents:!0,stringify:defaultStringify,trim:!0,matchFrom:"any"},l),c=a.ignoreCase,f=a.ignoreAccents,m=a.stringify,h=a.trim,g=a.matchFrom,_=h?trimString(s):s,y=h?trimString(m(o)):m(o);return c&&(_=_.toLowerCase(),y=y.toLowerCase()),f&&(_=memoizedStripDiacriticsForInput(_),y=stripDiacritics(y)),g==="start"?y.substr(0,_.length)===_:y.indexOf(_)>-1}},_excluded$1=["innerRef"];function DummyInput(n){var l=n.innerRef,o=_objectWithoutProperties(n,_excluded$1),s=removeProps(o,"onExited","in","enter","exit","appear");return jsx("input",_extends({ref:l},s,{css:css({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var cancelScroll=function(l){l.cancelable&&l.preventDefault(),l.stopPropagation()};function useScrollCapture(n){var l=n.isEnabled,o=n.onBottomArrive,s=n.onBottomLeave,a=n.onTopArrive,c=n.onTopLeave,f=reactExports.useRef(!1),m=reactExports.useRef(!1),h=reactExports.useRef(0),g=reactExports.useRef(null),_=reactExports.useCallback(function(k,R){if(g.current!==null){var W=g.current,L=W.scrollTop,x=W.scrollHeight,E=W.clientHeight,O=g.current,B=R>0,V=x-E-L,q=!1;V>R&&f.current&&(s&&s(k),f.current=!1),B&&m.current&&(c&&c(k),m.current=!1),B&&R>V?(o&&!f.current&&o(k),O.scrollTop=x,q=!0,f.current=!0):!B&&-R>L&&(a&&!m.current&&a(k),O.scrollTop=0,q=!0,m.current=!0),q&&cancelScroll(k)}},[o,s,a,c]),y=reactExports.useCallback(function(k){_(k,k.deltaY)},[_]),C=reactExports.useCallback(function(k){h.current=k.changedTouches[0].clientY},[]),D=reactExports.useCallback(function(k){var R=h.current-k.changedTouches[0].clientY;_(k,R)},[_]),M=reactExports.useCallback(function(k){if(k){var R=supportsPassiveEvents?{passive:!1}:!1;k.addEventListener("wheel",y,R),k.addEventListener("touchstart",C,R),k.addEventListener("touchmove",D,R)}},[D,C,y]),A=reactExports.useCallback(function(k){k&&(k.removeEventListener("wheel",y,!1),k.removeEventListener("touchstart",C,!1),k.removeEventListener("touchmove",D,!1))},[D,C,y]);return reactExports.useEffect(function(){if(l){var k=g.current;return M(k),function(){A(k)}}},[l,M,A]),function(k){g.current=k}}var STYLE_KEYS=["boxSizing","height","overflow","paddingRight","position"],LOCK_STYLES={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function preventTouchMove(n){n.cancelable&&n.preventDefault()}function allowTouchMove(n){n.stopPropagation()}function preventInertiaScroll(){var n=this.scrollTop,l=this.scrollHeight,o=n+this.offsetHeight;n===0?this.scrollTop=1:o===l&&(this.scrollTop=n-1)}function isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints}var canUseDOM=!!(typeof window<"u"&&window.document&&window.document.createElement),activeScrollLocks=0,listenerOptions={capture:!1,passive:!1};function useScrollLock(n){var l=n.isEnabled,o=n.accountForScrollbars,s=o===void 0?!0:o,a=reactExports.useRef({}),c=reactExports.useRef(null),f=reactExports.useCallback(function(h){if(canUseDOM){var g=document.body,_=g&&g.style;if(s&&STYLE_KEYS.forEach(function(M){var A=_&&_[M];a.current[M]=A}),s&&activeScrollLocks<1){var y=parseInt(a.current.paddingRight,10)||0,C=document.body?document.body.clientWidth:0,D=window.innerWidth-C+y||0;Object.keys(LOCK_STYLES).forEach(function(M){var A=LOCK_STYLES[M];_&&(_[M]=A)}),_&&(_.paddingRight="".concat(D,"px"))}g&&isTouchDevice()&&(g.addEventListener("touchmove",preventTouchMove,listenerOptions),h&&(h.addEventListener("touchstart",preventInertiaScroll,listenerOptions),h.addEventListener("touchmove",allowTouchMove,listenerOptions))),activeScrollLocks+=1}},[s]),m=reactExports.useCallback(function(h){if(canUseDOM){var g=document.body,_=g&&g.style;activeScrollLocks=Math.max(activeScrollLocks-1,0),s&&activeScrollLocks<1&&STYLE_KEYS.forEach(function(y){var C=a.current[y];_&&(_[y]=C)}),g&&isTouchDevice()&&(g.removeEventListener("touchmove",preventTouchMove,listenerOptions),h&&(h.removeEventListener("touchstart",preventInertiaScroll,listenerOptions),h.removeEventListener("touchmove",allowTouchMove,listenerOptions)))}},[s]);return reactExports.useEffect(function(){if(l){var h=c.current;return f(h),function(){m(h)}}},[l,f,m]),function(h){c.current=h}}var blurSelectInput=function(l){var o=l.target;return o.ownerDocument.activeElement&&o.ownerDocument.activeElement.blur()},_ref2$1={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function ScrollManager(n){var l=n.children,o=n.lockEnabled,s=n.captureEnabled,a=s===void 0?!0:s,c=n.onBottomArrive,f=n.onBottomLeave,m=n.onTopArrive,h=n.onTopLeave,g=useScrollCapture({isEnabled:a,onBottomArrive:c,onBottomLeave:f,onTopArrive:m,onTopLeave:h}),_=useScrollLock({isEnabled:o}),y=function(D){g(D),_(D)};return jsx(reactExports.Fragment,null,o&&jsx("div",{onClick:blurSelectInput,css:_ref2$1}),l(y))}var _ref2={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},RequiredInput=function(l){var o=l.name,s=l.onFocus;return jsx("input",{required:!0,name:o,tabIndex:-1,"aria-hidden":"true",onFocus:s,css:_ref2,value:"",onChange:function(){}})},RequiredInput$1=RequiredInput;function testPlatform(n){var l;return typeof window<"u"&&window.navigator!=null?n.test(((l=window.navigator.userAgentData)===null||l===void 0?void 0:l.platform)||window.navigator.platform):!1}function isIPhone(){return testPlatform(/^iPhone/i)}function isMac(){return testPlatform(/^Mac/i)}function isIPad(){return testPlatform(/^iPad/i)||isMac()&&navigator.maxTouchPoints>1}function isIOS(){return isIPhone()||isIPad()}function isAppleDevice(){return isMac()||isIOS()}var formatGroupLabel=function(l){return l.label},getOptionLabel$1=function(l){return l.label},getOptionValue$1=function(l){return l.value},isOptionDisabled=function(l){return!!l.isDisabled},defaultStyles={clearIndicator:clearIndicatorCSS,container:containerCSS,control:css$1,dropdownIndicator:dropdownIndicatorCSS,group:groupCSS,groupHeading:groupHeadingCSS,indicatorsContainer:indicatorsContainerCSS,indicatorSeparator:indicatorSeparatorCSS,input:inputCSS,loadingIndicator:loadingIndicatorCSS,loadingMessage:loadingMessageCSS,menu:menuCSS,menuList:menuListCSS,menuPortal:menuPortalCSS,multiValue:multiValueCSS,multiValueLabel:multiValueLabelCSS,multiValueRemove:multiValueRemoveCSS,noOptionsMessage:noOptionsMessageCSS,option:optionCSS,placeholder:placeholderCSS,singleValue:css2,valueContainer:valueContainerCSS},colors={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},borderRadius$1=4,baseUnit=4,controlHeight=38,menuGutter=baseUnit*2,spacing={baseUnit,controlHeight,menuGutter},defaultTheme$1={borderRadius:borderRadius$1,colors,spacing},defaultProps={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:isTouchCapable(),captureMenuScroll:!isTouchCapable(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:createFilter(),formatGroupLabel,getOptionLabel:getOptionLabel$1,getOptionValue:getOptionValue$1,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!isMobileDevice(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(l){var o=l.count;return"".concat(o," result").concat(o!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function toCategorizedOption(n,l,o,s){var a=_isOptionDisabled(n,l,o),c=_isOptionSelected(n,l,o),f=getOptionLabel2(n,l),m=getOptionValue2(n,l);return{type:"option",data:l,isDisabled:a,isSelected:c,label:f,value:m,index:s}}function buildCategorizedOptions(n,l){return n.options.map(function(o,s){if("options"in o){var a=o.options.map(function(f,m){return toCategorizedOption(n,f,l,m)}).filter(function(f){return isFocusable(n,f)});return a.length>0?{type:"group",data:o,options:a,index:s}:void 0}var c=toCategorizedOption(n,o,l,s);return isFocusable(n,c)?c:void 0}).filter(notNullish)}function buildFocusableOptionsFromCategorizedOptions(n){return n.reduce(function(l,o){return o.type==="group"?l.push.apply(l,_toConsumableArray(o.options.map(function(s){return s.data}))):l.push(o.data),l},[])}function buildFocusableOptionsWithIds(n,l){return n.reduce(function(o,s){return s.type==="group"?o.push.apply(o,_toConsumableArray(s.options.map(function(a){return{data:a.data,id:"".concat(l,"-").concat(s.index,"-").concat(a.index)}}))):o.push({data:s.data,id:"".concat(l,"-").concat(s.index)}),o},[])}function buildFocusableOptions(n,l){return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(n,l))}function isFocusable(n,l){var o=n.inputValue,s=o===void 0?"":o,a=l.data,c=l.isSelected,f=l.label,m=l.value;return(!shouldHideSelectedOptions(n)||!c)&&_filterOption(n,{label:f,value:m,data:a},s)}function getNextFocusedValue(n,l){var o=n.focusedValue,s=n.selectValue,a=s.indexOf(o);if(a>-1){var c=l.indexOf(o);if(c>-1)return o;if(a<l.length)return l[a]}return null}function getNextFocusedOption(n,l){var o=n.focusedOption;return o&&l.indexOf(o)>-1?o:l[0]}var getFocusedOptionId=function(l,o){var s,a=(s=l.find(function(c){return c.data===o}))===null||s===void 0?void 0:s.id;return a||null},getOptionLabel2=function(l,o){return l.getOptionLabel(o)},getOptionValue2=function(l,o){return l.getOptionValue(o)};function _isOptionDisabled(n,l,o){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(l,o):!1}function _isOptionSelected(n,l,o){if(o.indexOf(l)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(l,o);var s=getOptionValue2(n,l);return o.some(function(a){return getOptionValue2(n,a)===s})}function _filterOption(n,l,o){return n.filterOption?n.filterOption(l,o):!0}var shouldHideSelectedOptions=function(l){var o=l.hideSelectedOptions,s=l.isMulti;return o===void 0?s:o},instanceId=1,Select=function(n){_inherits(o,n);var l=_createSuper(o);function o(s){var a;if(_classCallCheck(this,o),a=l.call(this,s),a.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:"",isAppleDevice:!1},a.blockOptionHover=!1,a.isComposing=!1,a.commonProps=void 0,a.initialTouchX=0,a.initialTouchY=0,a.openAfterFocus=!1,a.scrollToFocusedOptionOnUpdate=!1,a.userIsDragging=void 0,a.controlRef=null,a.getControlRef=function(h){a.controlRef=h},a.focusedOptionRef=null,a.getFocusedOptionRef=function(h){a.focusedOptionRef=h},a.menuListRef=null,a.getMenuListRef=function(h){a.menuListRef=h},a.inputRef=null,a.getInputRef=function(h){a.inputRef=h},a.focus=a.focusInput,a.blur=a.blurInput,a.onChange=function(h,g){var _=a.props,y=_.onChange,C=_.name;g.name=C,a.ariaOnChange(h,g),y(h,g)},a.setValue=function(h,g,_){var y=a.props,C=y.closeMenuOnSelect,D=y.isMulti,M=y.inputValue;a.onInputChange("",{action:"set-value",prevInputValue:M}),C&&(a.setState({inputIsHiddenAfterUpdate:!D}),a.onMenuClose()),a.setState({clearFocusValueOnUpdate:!0}),a.onChange(h,{action:g,option:_})},a.selectOption=function(h){var g=a.props,_=g.blurInputOnSelect,y=g.isMulti,C=g.name,D=a.state.selectValue,M=y&&a.isOptionSelected(h,D),A=a.isOptionDisabled(h,D);if(M){var k=a.getOptionValue(h);a.setValue(D.filter(function(R){return a.getOptionValue(R)!==k}),"deselect-option",h)}else if(!A)y?a.setValue([].concat(_toConsumableArray(D),[h]),"select-option",h):a.setValue(h,"select-option");else{a.ariaOnChange(h,{action:"select-option",option:h,name:C});return}_&&a.blurInput()},a.removeValue=function(h){var g=a.props.isMulti,_=a.state.selectValue,y=a.getOptionValue(h),C=_.filter(function(M){return a.getOptionValue(M)!==y}),D=valueTernary(g,C,C[0]||null);a.onChange(D,{action:"remove-value",removedValue:h}),a.focusInput()},a.clearValue=function(){var h=a.state.selectValue;a.onChange(valueTernary(a.props.isMulti,[],null),{action:"clear",removedValues:h})},a.popValue=function(){var h=a.props.isMulti,g=a.state.selectValue,_=g[g.length-1],y=g.slice(0,g.length-1),C=valueTernary(h,y,y[0]||null);_&&a.onChange(C,{action:"pop-value",removedValue:_})},a.getFocusedOptionId=function(h){return getFocusedOptionId(a.state.focusableOptionsWithIds,h)},a.getFocusableOptionsWithIds=function(){return buildFocusableOptionsWithIds(buildCategorizedOptions(a.props,a.state.selectValue),a.getElementId("option"))},a.getValue=function(){return a.state.selectValue},a.cx=function(){for(var h=arguments.length,g=new Array(h),_=0;_<h;_++)g[_]=arguments[_];return classNames.apply(void 0,[a.props.classNamePrefix].concat(g))},a.getOptionLabel=function(h){return getOptionLabel2(a.props,h)},a.getOptionValue=function(h){return getOptionValue2(a.props,h)},a.getStyles=function(h,g){var _=a.props.unstyled,y=defaultStyles[h](g,_);y.boxSizing="border-box";var C=a.props.styles[h];return C?C(y,g):y},a.getClassNames=function(h,g){var _,y;return(_=(y=a.props.classNames)[h])===null||_===void 0?void 0:_.call(y,g)},a.getElementId=function(h){return"".concat(a.state.instancePrefix,"-").concat(h)},a.getComponents=function(){return defaultComponents(a.props)},a.buildCategorizedOptions=function(){return buildCategorizedOptions(a.props,a.state.selectValue)},a.getCategorizedOptions=function(){return a.props.menuIsOpen?a.buildCategorizedOptions():[]},a.buildFocusableOptions=function(){return buildFocusableOptionsFromCategorizedOptions(a.buildCategorizedOptions())},a.getFocusableOptions=function(){return a.props.menuIsOpen?a.buildFocusableOptions():[]},a.ariaOnChange=function(h,g){a.setState({ariaSelection:_objectSpread2({value:h},g)})},a.onMenuMouseDown=function(h){h.button===0&&(h.stopPropagation(),h.preventDefault(),a.focusInput())},a.onMenuMouseMove=function(h){a.blockOptionHover=!1},a.onControlMouseDown=function(h){if(!h.defaultPrevented){var g=a.props.openMenuOnClick;a.state.isFocused?a.props.menuIsOpen?h.target.tagName!=="INPUT"&&h.target.tagName!=="TEXTAREA"&&a.onMenuClose():g&&a.openMenu("first"):(g&&(a.openAfterFocus=!0),a.focusInput()),h.target.tagName!=="INPUT"&&h.target.tagName!=="TEXTAREA"&&h.preventDefault()}},a.onDropdownIndicatorMouseDown=function(h){if(!(h&&h.type==="mousedown"&&h.button!==0)&&!a.props.isDisabled){var g=a.props,_=g.isMulti,y=g.menuIsOpen;a.focusInput(),y?(a.setState({inputIsHiddenAfterUpdate:!_}),a.onMenuClose()):a.openMenu("first"),h.preventDefault()}},a.onClearIndicatorMouseDown=function(h){h&&h.type==="mousedown"&&h.button!==0||(a.clearValue(),h.preventDefault(),a.openAfterFocus=!1,h.type==="touchend"?a.focusInput():setTimeout(function(){return a.focusInput()}))},a.onScroll=function(h){typeof a.props.closeMenuOnScroll=="boolean"?h.target instanceof HTMLElement&&isDocumentElement(h.target)&&a.props.onMenuClose():typeof a.props.closeMenuOnScroll=="function"&&a.props.closeMenuOnScroll(h)&&a.props.onMenuClose()},a.onCompositionStart=function(){a.isComposing=!0},a.onCompositionEnd=function(){a.isComposing=!1},a.onTouchStart=function(h){var g=h.touches,_=g&&g.item(0);_&&(a.initialTouchX=_.clientX,a.initialTouchY=_.clientY,a.userIsDragging=!1)},a.onTouchMove=function(h){var g=h.touches,_=g&&g.item(0);if(_){var y=Math.abs(_.clientX-a.initialTouchX),C=Math.abs(_.clientY-a.initialTouchY),D=5;a.userIsDragging=y>D||C>D}},a.onTouchEnd=function(h){a.userIsDragging||(a.controlRef&&!a.controlRef.contains(h.target)&&a.menuListRef&&!a.menuListRef.contains(h.target)&&a.blurInput(),a.initialTouchX=0,a.initialTouchY=0)},a.onControlTouchEnd=function(h){a.userIsDragging||a.onControlMouseDown(h)},a.onClearIndicatorTouchEnd=function(h){a.userIsDragging||a.onClearIndicatorMouseDown(h)},a.onDropdownIndicatorTouchEnd=function(h){a.userIsDragging||a.onDropdownIndicatorMouseDown(h)},a.handleInputChange=function(h){var g=a.props.inputValue,_=h.currentTarget.value;a.setState({inputIsHiddenAfterUpdate:!1}),a.onInputChange(_,{action:"input-change",prevInputValue:g}),a.props.menuIsOpen||a.onMenuOpen()},a.onInputFocus=function(h){a.props.onFocus&&a.props.onFocus(h),a.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(a.openAfterFocus||a.props.openMenuOnFocus)&&a.openMenu("first"),a.openAfterFocus=!1},a.onInputBlur=function(h){var g=a.props.inputValue;if(a.menuListRef&&a.menuListRef.contains(document.activeElement)){a.inputRef.focus();return}a.props.onBlur&&a.props.onBlur(h),a.onInputChange("",{action:"input-blur",prevInputValue:g}),a.onMenuClose(),a.setState({focusedValue:null,isFocused:!1})},a.onOptionHover=function(h){if(!(a.blockOptionHover||a.state.focusedOption===h)){var g=a.getFocusableOptions(),_=g.indexOf(h);a.setState({focusedOption:h,focusedOptionId:_>-1?a.getFocusedOptionId(h):null})}},a.shouldHideSelectedOptions=function(){return shouldHideSelectedOptions(a.props)},a.onValueInputFocus=function(h){h.preventDefault(),h.stopPropagation(),a.focus()},a.onKeyDown=function(h){var g=a.props,_=g.isMulti,y=g.backspaceRemovesValue,C=g.escapeClearsValue,D=g.inputValue,M=g.isClearable,A=g.isDisabled,k=g.menuIsOpen,R=g.onKeyDown,W=g.tabSelectsValue,L=g.openMenuOnFocus,x=a.state,E=x.focusedOption,O=x.focusedValue,B=x.selectValue;if(!A&&!(typeof R=="function"&&(R(h),h.defaultPrevented))){switch(a.blockOptionHover=!0,h.key){case"ArrowLeft":if(!_||D)return;a.focusValue("previous");break;case"ArrowRight":if(!_||D)return;a.focusValue("next");break;case"Delete":case"Backspace":if(D)return;if(O)a.removeValue(O);else{if(!y)return;_?a.popValue():M&&a.clearValue()}break;case"Tab":if(a.isComposing||h.shiftKey||!k||!W||!E||L&&a.isOptionSelected(E,B))return;a.selectOption(E);break;case"Enter":if(h.keyCode===229)break;if(k){if(!E||a.isComposing)return;a.selectOption(E);break}return;case"Escape":k?(a.setState({inputIsHiddenAfterUpdate:!1}),a.onInputChange("",{action:"menu-close",prevInputValue:D}),a.onMenuClose()):M&&C&&a.clearValue();break;case" ":if(D)return;if(!k){a.openMenu("first");break}if(!E)return;a.selectOption(E);break;case"ArrowUp":k?a.focusOption("up"):a.openMenu("last");break;case"ArrowDown":k?a.focusOption("down"):a.openMenu("first");break;case"PageUp":if(!k)return;a.focusOption("pageup");break;case"PageDown":if(!k)return;a.focusOption("pagedown");break;case"Home":if(!k)return;a.focusOption("first");break;case"End":if(!k)return;a.focusOption("last");break;default:return}h.preventDefault()}},a.state.instancePrefix="react-select-"+(a.props.instanceId||++instanceId),a.state.selectValue=cleanValue(s.value),s.menuIsOpen&&a.state.selectValue.length){var c=a.getFocusableOptionsWithIds(),f=a.buildFocusableOptions(),m=f.indexOf(a.state.selectValue[0]);a.state.focusableOptionsWithIds=c,a.state.focusedOption=f[m],a.state.focusedOptionId=getFocusedOptionId(c,f[m])}return a}return _createClass(o,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&scrollIntoView(this.menuListRef,this.focusedOptionRef),isAppleDevice()&&this.setState({isAppleDevice:!0})}},{key:"componentDidUpdate",value:function(a){var c=this.props,f=c.isDisabled,m=c.menuIsOpen,h=this.state.isFocused;(h&&!f&&a.isDisabled||h&&m&&!a.menuIsOpen)&&this.focusInput(),h&&f&&!a.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!h&&!f&&a.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(scrollIntoView(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(a,c){this.props.onInputChange(a,c)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(a){var c=this,f=this.state,m=f.selectValue,h=f.isFocused,g=this.buildFocusableOptions(),_=a==="first"?0:g.length-1;if(!this.props.isMulti){var y=g.indexOf(m[0]);y>-1&&(_=y)}this.scrollToFocusedOptionOnUpdate=!(h&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:g[_],focusedOptionId:this.getFocusedOptionId(g[_])},function(){return c.onMenuOpen()})}},{key:"focusValue",value:function(a){var c=this.state,f=c.selectValue,m=c.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var h=f.indexOf(m);m||(h=-1);var g=f.length-1,_=-1;if(f.length){switch(a){case"previous":h===0?_=0:h===-1?_=g:_=h-1;break;case"next":h>-1&&h<g&&(_=h+1);break}this.setState({inputIsHidden:_!==-1,focusedValue:f[_]})}}}},{key:"focusOption",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",c=this.props.pageSize,f=this.state.focusedOption,m=this.getFocusableOptions();if(m.length){var h=0,g=m.indexOf(f);f||(g=-1),a==="up"?h=g>0?g-1:m.length-1:a==="down"?h=(g+1)%m.length:a==="pageup"?(h=g-c,h<0&&(h=0)):a==="pagedown"?(h=g+c,h>m.length-1&&(h=m.length-1)):a==="last"&&(h=m.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:m[h],focusedValue:null,focusedOptionId:this.getFocusedOptionId(m[h])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(defaultTheme$1):_objectSpread2(_objectSpread2({},defaultTheme$1),this.props.theme):defaultTheme$1}},{key:"getCommonProps",value:function(){var a=this.clearValue,c=this.cx,f=this.getStyles,m=this.getClassNames,h=this.getValue,g=this.selectOption,_=this.setValue,y=this.props,C=y.isMulti,D=y.isRtl,M=y.options,A=this.hasValue();return{clearValue:a,cx:c,getStyles:f,getClassNames:m,getValue:h,hasValue:A,isMulti:C,isRtl:D,options:M,selectOption:g,selectProps:y,setValue:_,theme:this.getTheme()}}},{key:"hasValue",value:function(){var a=this.state.selectValue;return a.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var a=this.props,c=a.isClearable,f=a.isMulti;return c===void 0?f:c}},{key:"isOptionDisabled",value:function(a,c){return _isOptionDisabled(this.props,a,c)}},{key:"isOptionSelected",value:function(a,c){return _isOptionSelected(this.props,a,c)}},{key:"filterOption",value:function(a,c){return _filterOption(this.props,a,c)}},{key:"formatOptionLabel",value:function(a,c){if(typeof this.props.formatOptionLabel=="function"){var f=this.props.inputValue,m=this.state.selectValue;return this.props.formatOptionLabel(a,{context:c,inputValue:f,selectValue:m})}else return this.getOptionLabel(a)}},{key:"formatGroupLabel",value:function(a){return this.props.formatGroupLabel(a)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var a=this.props,c=a.isDisabled,f=a.isSearchable,m=a.inputId,h=a.inputValue,g=a.tabIndex,_=a.form,y=a.menuIsOpen,C=a.required,D=this.getComponents(),M=D.Input,A=this.state,k=A.inputIsHidden,R=A.ariaSelection,W=this.commonProps,L=m||this.getElementId("input"),x=_objectSpread2(_objectSpread2(_objectSpread2({"aria-autocomplete":"list","aria-expanded":y,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":C,role:"combobox","aria-activedescendant":this.state.isAppleDevice?void 0:this.state.focusedOptionId||""},y&&{"aria-controls":this.getElementId("listbox")}),!f&&{"aria-readonly":!0}),this.hasValue()?R?.action==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return f?reactExports.createElement(M,_extends({},W,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:L,innerRef:this.getInputRef,isDisabled:c,isHidden:k,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:g,form:_,type:"text",value:h},x)):reactExports.createElement(DummyInput,_extends({id:L,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:noop$2,onFocus:this.onInputFocus,disabled:c,tabIndex:g,inputMode:"none",form:_,value:""},x))}},{key:"renderPlaceholderOrValue",value:function(){var a=this,c=this.getComponents(),f=c.MultiValue,m=c.MultiValueContainer,h=c.MultiValueLabel,g=c.MultiValueRemove,_=c.SingleValue,y=c.Placeholder,C=this.commonProps,D=this.props,M=D.controlShouldRenderValue,A=D.isDisabled,k=D.isMulti,R=D.inputValue,W=D.placeholder,L=this.state,x=L.selectValue,E=L.focusedValue,O=L.isFocused;if(!this.hasValue()||!M)return R?null:reactExports.createElement(y,_extends({},C,{key:"placeholder",isDisabled:A,isFocused:O,innerProps:{id:this.getElementId("placeholder")}}),W);if(k)return x.map(function(V,q){var S=V===E,z="".concat(a.getOptionLabel(V),"-").concat(a.getOptionValue(V));return reactExports.createElement(f,_extends({},C,{components:{Container:m,Label:h,Remove:g},isFocused:S,isDisabled:A,key:z,index:q,removeProps:{onClick:function(){return a.removeValue(V)},onTouchEnd:function(){return a.removeValue(V)},onMouseDown:function(J){J.preventDefault()}},data:V}),a.formatOptionLabel(V,"value"))});if(R)return null;var B=x[0];return reactExports.createElement(_,_extends({},C,{data:B,isDisabled:A}),this.formatOptionLabel(B,"value"))}},{key:"renderClearIndicator",value:function(){var a=this.getComponents(),c=a.ClearIndicator,f=this.commonProps,m=this.props,h=m.isDisabled,g=m.isLoading,_=this.state.isFocused;if(!this.isClearable()||!c||h||!this.hasValue()||g)return null;var y={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return reactExports.createElement(c,_extends({},f,{innerProps:y,isFocused:_}))}},{key:"renderLoadingIndicator",value:function(){var a=this.getComponents(),c=a.LoadingIndicator,f=this.commonProps,m=this.props,h=m.isDisabled,g=m.isLoading,_=this.state.isFocused;if(!c||!g)return null;var y={"aria-hidden":"true"};return reactExports.createElement(c,_extends({},f,{innerProps:y,isDisabled:h,isFocused:_}))}},{key:"renderIndicatorSeparator",value:function(){var a=this.getComponents(),c=a.DropdownIndicator,f=a.IndicatorSeparator;if(!c||!f)return null;var m=this.commonProps,h=this.props.isDisabled,g=this.state.isFocused;return reactExports.createElement(f,_extends({},m,{isDisabled:h,isFocused:g}))}},{key:"renderDropdownIndicator",value:function(){var a=this.getComponents(),c=a.DropdownIndicator;if(!c)return null;var f=this.commonProps,m=this.props.isDisabled,h=this.state.isFocused,g={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return reactExports.createElement(c,_extends({},f,{innerProps:g,isDisabled:m,isFocused:h}))}},{key:"renderMenu",value:function(){var a=this,c=this.getComponents(),f=c.Group,m=c.GroupHeading,h=c.Menu,g=c.MenuList,_=c.MenuPortal,y=c.LoadingMessage,C=c.NoOptionsMessage,D=c.Option,M=this.commonProps,A=this.state.focusedOption,k=this.props,R=k.captureMenuScroll,W=k.inputValue,L=k.isLoading,x=k.loadingMessage,E=k.minMenuHeight,O=k.maxMenuHeight,B=k.menuIsOpen,V=k.menuPlacement,q=k.menuPosition,S=k.menuPortalTarget,z=k.menuShouldBlockScroll,te=k.menuShouldScrollIntoView,J=k.noOptionsMessage,ge=k.onMenuScrollToTop,ne=k.onMenuScrollToBottom;if(!B)return null;var Y=function(ue,pe){var fe=ue.type,ye=ue.data,we=ue.isDisabled,he=ue.isSelected,Me=ue.label,Ve=ue.value,it=A===ye,We=we?void 0:function(){return a.onOptionHover(ye)},st=we?void 0:function(){return a.selectOption(ye)},Ye="".concat(a.getElementId("option"),"-").concat(pe),Xe={id:Ye,onClick:st,onMouseMove:We,onMouseOver:We,tabIndex:-1,role:"option","aria-selected":a.state.isAppleDevice?void 0:he};return reactExports.createElement(D,_extends({},M,{innerProps:Xe,data:ye,isDisabled:we,isSelected:he,key:Ye,label:Me,type:fe,value:Ve,isFocused:it,innerRef:it?a.getFocusedOptionRef:void 0}),a.formatOptionLabel(ue.data,"menu"))},H;if(this.hasOptions())H=this.getCategorizedOptions().map(function(K){if(K.type==="group"){var ue=K.data,pe=K.options,fe=K.index,ye="".concat(a.getElementId("group"),"-").concat(fe),we="".concat(ye,"-heading");return reactExports.createElement(f,_extends({},M,{key:ye,data:ue,options:pe,Heading:m,headingProps:{id:we,data:K.data},label:a.formatGroupLabel(K.data)}),K.options.map(function(he){return Y(he,"".concat(fe,"-").concat(he.index))}))}else if(K.type==="option")return Y(K,"".concat(K.index))});else if(L){var X=x({inputValue:W});if(X===null)return null;H=reactExports.createElement(y,M,X)}else{var ae=J({inputValue:W});if(ae===null)return null;H=reactExports.createElement(C,M,ae)}var ee={minMenuHeight:E,maxMenuHeight:O,menuPlacement:V,menuPosition:q,menuShouldScrollIntoView:te},T=reactExports.createElement(MenuPlacer,_extends({},M,ee),function(K){var ue=K.ref,pe=K.placerProps,fe=pe.placement,ye=pe.maxHeight;return reactExports.createElement(h,_extends({},M,ee,{innerRef:ue,innerProps:{onMouseDown:a.onMenuMouseDown,onMouseMove:a.onMenuMouseMove},isLoading:L,placement:fe}),reactExports.createElement(ScrollManager,{captureEnabled:R,onTopArrive:ge,onBottomArrive:ne,lockEnabled:z},function(we){return reactExports.createElement(g,_extends({},M,{innerRef:function(Me){a.getMenuListRef(Me),we(Me)},innerProps:{role:"listbox","aria-multiselectable":M.isMulti,id:a.getElementId("listbox")},isLoading:L,maxHeight:ye,focusedOption:A}),H)}))});return S||q==="fixed"?reactExports.createElement(_,_extends({},M,{appendTo:S,controlElement:this.controlRef,menuPlacement:V,menuPosition:q}),T):T}},{key:"renderFormField",value:function(){var a=this,c=this.props,f=c.delimiter,m=c.isDisabled,h=c.isMulti,g=c.name,_=c.required,y=this.state.selectValue;if(_&&!this.hasValue()&&!m)return reactExports.createElement(RequiredInput$1,{name:g,onFocus:this.onValueInputFocus});if(!(!g||m))if(h)if(f){var C=y.map(function(A){return a.getOptionValue(A)}).join(f);return reactExports.createElement("input",{name:g,type:"hidden",value:C})}else{var D=y.length>0?y.map(function(A,k){return reactExports.createElement("input",{key:"i-".concat(k),name:g,type:"hidden",value:a.getOptionValue(A)})}):reactExports.createElement("input",{name:g,type:"hidden",value:""});return reactExports.createElement("div",null,D)}else{var M=y[0]?this.getOptionValue(y[0]):"";return reactExports.createElement("input",{name:g,type:"hidden",value:M})}}},{key:"renderLiveRegion",value:function(){var a=this.commonProps,c=this.state,f=c.ariaSelection,m=c.focusedOption,h=c.focusedValue,g=c.isFocused,_=c.selectValue,y=this.getFocusableOptions();return reactExports.createElement(LiveRegion$1,_extends({},a,{id:this.getElementId("live-region"),ariaSelection:f,focusedOption:m,focusedValue:h,isFocused:g,selectValue:_,focusableOptions:y,isAppleDevice:this.state.isAppleDevice}))}},{key:"render",value:function(){var a=this.getComponents(),c=a.Control,f=a.IndicatorsContainer,m=a.SelectContainer,h=a.ValueContainer,g=this.props,_=g.className,y=g.id,C=g.isDisabled,D=g.menuIsOpen,M=this.state.isFocused,A=this.commonProps=this.getCommonProps();return reactExports.createElement(m,_extends({},A,{className:_,innerProps:{id:y,onKeyDown:this.onKeyDown},isDisabled:C,isFocused:M}),this.renderLiveRegion(),reactExports.createElement(c,_extends({},A,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:C,isFocused:M,menuIsOpen:D}),reactExports.createElement(h,_extends({},A,{isDisabled:C}),this.renderPlaceholderOrValue(),this.renderInput()),reactExports.createElement(f,_extends({},A,{isDisabled:C}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(a,c){var f=c.prevProps,m=c.clearFocusValueOnUpdate,h=c.inputIsHiddenAfterUpdate,g=c.ariaSelection,_=c.isFocused,y=c.prevWasFocused,C=c.instancePrefix,D=a.options,M=a.value,A=a.menuIsOpen,k=a.inputValue,R=a.isMulti,W=cleanValue(M),L={};if(f&&(M!==f.value||D!==f.options||A!==f.menuIsOpen||k!==f.inputValue)){var x=A?buildFocusableOptions(a,W):[],E=A?buildFocusableOptionsWithIds(buildCategorizedOptions(a,W),"".concat(C,"-option")):[],O=m?getNextFocusedValue(c,W):null,B=getNextFocusedOption(c,x),V=getFocusedOptionId(E,B);L={selectValue:W,focusedOption:B,focusedOptionId:V,focusableOptionsWithIds:E,focusedValue:O,clearFocusValueOnUpdate:!1}}var q=h!=null&&a!==f?{inputIsHidden:h,inputIsHiddenAfterUpdate:void 0}:{},S=g,z=_&&y;return _&&!z&&(S={value:valueTernary(R,W,W[0]||null),options:W,action:"initial-input-focus"},z=!y),g?.action==="initial-input-focus"&&(S=null),_objectSpread2(_objectSpread2(_objectSpread2({},L),q),{},{prevProps:a,ariaSelection:S,prevWasFocused:z})}}]),o}(reactExports.Component);Select.defaultProps=defaultProps;var StateManagedSelect=reactExports.forwardRef(function(n,l){var o=useStateManager(n);return reactExports.createElement(Select,_extends({ref:l},o))}),StateManagedSelect$1=StateManagedSelect,_excluded=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];function useAsync(n){var l=n.defaultOptions,o=l===void 0?!1:l,s=n.cacheOptions,a=s===void 0?!1:s,c=n.loadOptions;n.options;var f=n.isLoading,m=f===void 0?!1:f,h=n.onInputChange,g=n.filterOption,_=g===void 0?null:g,y=_objectWithoutProperties(n,_excluded),C=y.inputValue,D=reactExports.useRef(void 0),M=reactExports.useRef(!1),A=reactExports.useState(Array.isArray(o)?o:void 0),k=_slicedToArray(A,2),R=k[0],W=k[1],L=reactExports.useState(typeof C<"u"?C:""),x=_slicedToArray(L,2),E=x[0],O=x[1],B=reactExports.useState(o===!0),V=_slicedToArray(B,2),q=V[0],S=V[1],z=reactExports.useState(void 0),te=_slicedToArray(z,2),J=te[0],ge=te[1],ne=reactExports.useState([]),Y=_slicedToArray(ne,2),H=Y[0],X=Y[1],ae=reactExports.useState(!1),ee=_slicedToArray(ae,2),T=ee[0],K=ee[1],ue=reactExports.useState({}),pe=_slicedToArray(ue,2),fe=pe[0],ye=pe[1],we=reactExports.useState(void 0),he=_slicedToArray(we,2),Me=he[0],Ve=he[1],it=reactExports.useState(void 0),We=_slicedToArray(it,2),st=We[0],Ye=We[1];a!==st&&(ye({}),Ye(a)),o!==Me&&(W(Array.isArray(o)?o:void 0),Ve(o)),reactExports.useEffect(function(){return M.current=!0,function(){M.current=!1}},[]);var Xe=reactExports.useCallback(function(re,me){if(!c)return me();var Se=c(re,me);Se&&typeof Se.then=="function"&&Se.then(me,function(){return me()})},[c]);reactExports.useEffect(function(){o===!0&&Xe(E,function(re){M.current&&(W(re||[]),S(!!D.current))})},[]);var Lt=reactExports.useCallback(function(re,me){var Se=handleInputChange(re,me,h);if(!Se){D.current=void 0,O(""),ge(""),X([]),S(!1),K(!1);return}if(a&&fe[Se])O(Se),ge(Se),X(fe[Se]),S(!1),K(!1);else{var Re=D.current={};O(Se),S(!0),K(!J),Xe(Se,function(be){M&&Re===D.current&&(D.current=void 0,S(!1),ge(Se),X(be||[]),K(!1),ye(be?_objectSpread2(_objectSpread2({},fe),{},_defineProperty({},Se,be)):fe))})}},[a,Xe,J,fe,h]),le=T?[]:E&&J?H:R||[];return _objectSpread2(_objectSpread2({},y),{},{options:le,isLoading:q||m,onInputChange:Lt,filterOption:_})}var AsyncSelect=reactExports.forwardRef(function(n,l){var o=useAsync(n),s=useStateManager(o);return reactExports.createElement(Select,_extends({ref:l},s))}),AsyncSelect$1=AsyncSelect;function formatMuiErrorMessage(n,...l){const o=new URL(`https://mui.com/production-error/?code=${n}`);return l.forEach(s=>o.searchParams.append("args[]",s)),`Minified MUI error #${n}; visit ${o} for the full message.`}const THEME_ID="$$material";var testOmitPropsOnStringTag=isPropValid,testOmitPropsOnComponent=function(l){return l!=="theme"},getDefaultShouldForwardProp=function(l){return typeof l=="string"&&l.charCodeAt(0)>96?testOmitPropsOnStringTag:testOmitPropsOnComponent},composeShouldForwardProps=function(l,o,s){var a;if(o){var c=o.shouldForwardProp;a=l.__emotion_forwardProp&&c?function(f){return l.__emotion_forwardProp(f)&&c(f)}:c}return typeof a!="function"&&s&&(a=l.__emotion_forwardProp),a},Insertion=function(l){var o=l.cache,s=l.serialized,a=l.isStringTag;return registerStyles(o,s,a),useInsertionEffectAlwaysWithSyncFallback(function(){return insertStyles(o,s,a)}),null},createStyled$1=function n(l,o){var s=l.__emotion_real===l,a=s&&l.__emotion_base||l,c,f;o!==void 0&&(c=o.label,f=o.target);var m=composeShouldForwardProps(l,o,s),h=m||getDefaultShouldForwardProp(a),g=!h("as");return function(){var _=arguments,y=s&&l.__emotion_styles!==void 0?l.__emotion_styles.slice(0):[];if(c!==void 0&&y.push("label:"+c+";"),_[0]==null||_[0].raw===void 0)y.push.apply(y,_);else{var C=_[0];y.push(C[0]);for(var D=_.length,M=1;M<D;M++)y.push(_[M],C[M])}var A=withEmotionCache(function(k,R,W){var L=g&&k.as||a,x="",E=[],O=k;if(k.theme==null){O={};for(var B in k)O[B]=k[B];O.theme=reactExports.useContext(ThemeContext)}typeof k.className=="string"?x=getRegisteredStyles(R.registered,E,k.className):k.className!=null&&(x=k.className+" ");var V=serializeStyles(y.concat(E),R.registered,O);x+=R.key+"-"+V.name,f!==void 0&&(x+=" "+f);var q=g&&m===void 0?getDefaultShouldForwardProp(L):h,S={};for(var z in k)g&&z==="as"||q(z)&&(S[z]=k[z]);return S.className=x,W&&(S.ref=W),reactExports.createElement(reactExports.Fragment,null,reactExports.createElement(Insertion,{cache:R,serialized:V,isStringTag:typeof L=="string"}),reactExports.createElement(L,S))});return A.displayName=c!==void 0?c:"Styled("+(typeof a=="string"?a:a.displayName||a.name||"Component")+")",A.defaultProps=l.defaultProps,A.__emotion_real=A,A.__emotion_base=a,A.__emotion_styles=y,A.__emotion_forwardProp=m,Object.defineProperty(A,"toString",{value:function(){return"."+f}}),A.withComponent=function(k,R){var W=n(k,_extends({},o,R,{shouldForwardProp:composeShouldForwardProps(A,R,!0)}));return W.apply(void 0,y)},A}},tags=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],styled$2=createStyled$1.bind(null);tags.forEach(function(n){styled$2[n]=styled$2(n)});function styled$1(n,l){return styled$2(n,l)}function internal_mutateStyles(n,l){Array.isArray(n.__emotion_styles)&&(n.__emotion_styles=l(n.__emotion_styles))}const wrapper=[];function internal_serializeStyles(n){return wrapper[0]=n,serializeStyles(wrapper)}var reactIs={exports:{}},reactIs_production={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hasRequiredReactIs_production;function requireReactIs_production(){if(hasRequiredReactIs_production)return reactIs_production;hasRequiredReactIs_production=1;var n=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),C=Symbol.for("react.view_transition"),D=Symbol.for("react.client.reference");function M(A){if(typeof A=="object"&&A!==null){var k=A.$$typeof;switch(k){case n:switch(A=A.type,A){case o:case a:case s:case h:case g:case C:return A;default:switch(A=A&&A.$$typeof,A){case f:case m:case y:case _:return A;case c:return A;default:return k}}case l:return k}}}return reactIs_production.ContextConsumer=c,reactIs_production.ContextProvider=f,reactIs_production.Element=n,reactIs_production.ForwardRef=m,reactIs_production.Fragment=o,reactIs_production.Lazy=y,reactIs_production.Memo=_,reactIs_production.Portal=l,reactIs_production.Profiler=a,reactIs_production.StrictMode=s,reactIs_production.Suspense=h,reactIs_production.SuspenseList=g,reactIs_production.isContextConsumer=function(A){return M(A)===c},reactIs_production.isContextProvider=function(A){return M(A)===f},reactIs_production.isElement=function(A){return typeof A=="object"&&A!==null&&A.$$typeof===n},reactIs_production.isForwardRef=function(A){return M(A)===m},reactIs_production.isFragment=function(A){return M(A)===o},reactIs_production.isLazy=function(A){return M(A)===y},reactIs_production.isMemo=function(A){return M(A)===_},reactIs_production.isPortal=function(A){return M(A)===l},reactIs_production.isProfiler=function(A){return M(A)===a},reactIs_production.isStrictMode=function(A){return M(A)===s},reactIs_production.isSuspense=function(A){return M(A)===h},reactIs_production.isSuspenseList=function(A){return M(A)===g},reactIs_production.isValidElementType=function(A){return typeof A=="string"||typeof A=="function"||A===o||A===a||A===s||A===h||A===g||typeof A=="object"&&A!==null&&(A.$$typeof===y||A.$$typeof===_||A.$$typeof===f||A.$$typeof===c||A.$$typeof===m||A.$$typeof===D||A.getModuleId!==void 0)},reactIs_production.typeOf=M,reactIs_production}var hasRequiredReactIs;function requireReactIs(){return hasRequiredReactIs||(hasRequiredReactIs=1,reactIs.exports=requireReactIs_production()),reactIs.exports}var reactIsExports=requireReactIs();function isPlainObject(n){if(typeof n!="object"||n===null)return!1;const l=Object.getPrototypeOf(n);return(l===null||l===Object.prototype||Object.getPrototypeOf(l)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)}function deepClone(n){if(reactExports.isValidElement(n)||reactIsExports.isValidElementType(n)||!isPlainObject(n))return n;const l={};return Object.keys(n).forEach(o=>{l[o]=deepClone(n[o])}),l}function deepmerge(n,l,o={clone:!0}){const s=o.clone?{...n}:n;return isPlainObject(n)&&isPlainObject(l)&&Object.keys(l).forEach(a=>{reactExports.isValidElement(l[a])||reactIsExports.isValidElementType(l[a])?s[a]=l[a]:isPlainObject(l[a])&&Object.prototype.hasOwnProperty.call(n,a)&&isPlainObject(n[a])?s[a]=deepmerge(n[a],l[a],o):o.clone?s[a]=isPlainObject(l[a])?deepClone(l[a]):l[a]:s[a]=l[a]}),s}const sortBreakpointsValues=n=>{const l=Object.keys(n).map(o=>({key:o,val:n[o]}))||[];return l.sort((o,s)=>o.val-s.val),l.reduce((o,s)=>({...o,[s.key]:s.val}),{})};function createBreakpoints(n){const{values:l={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:o="px",step:s=5,...a}=n,c=sortBreakpointsValues(l),f=Object.keys(c);function m(C){return`@media (min-width:${typeof l[C]=="number"?l[C]:C}${o})`}function h(C){return`@media (max-width:${(typeof l[C]=="number"?l[C]:C)-s/100}${o})`}function g(C,D){const M=f.indexOf(D);return`@media (min-width:${typeof l[C]=="number"?l[C]:C}${o}) and (max-width:${(M!==-1&&typeof l[f[M]]=="number"?l[f[M]]:D)-s/100}${o})`}function _(C){return f.indexOf(C)+1<f.length?g(C,f[f.indexOf(C)+1]):m(C)}function y(C){const D=f.indexOf(C);return D===0?m(f[1]):D===f.length-1?h(f[D]):g(C,f[f.indexOf(C)+1]).replace("@media","@media not all and")}return{keys:f,values:c,up:m,down:h,between:g,only:_,not:y,unit:o,...a}}function sortContainerQueries(n,l){if(!n.containerQueries)return l;const o=Object.keys(l).filter(s=>s.startsWith("@container")).sort((s,a)=>{const c=/min-width:\s*([0-9.]+)/;return+(s.match(c)?.[1]||0)-+(a.match(c)?.[1]||0)});return o.length?o.reduce((s,a)=>{const c=l[a];return delete s[a],s[a]=c,s},{...l}):l}function isCqShorthand(n,l){return l==="@"||l.startsWith("@")&&(n.some(o=>l.startsWith(`@${o}`))||!!l.match(/^@\d/))}function getContainerQuery(n,l){const o=l.match(/^@([^/]+)?\/?(.+)?$/);if(!o)return null;const[,s,a]=o,c=Number.isNaN(+s)?s||0:+s;return n.containerQueries(a).up(c)}function cssContainerQueries(n){const l=(c,f)=>c.replace("@media",f?`@container ${f}`:"@container");function o(c,f){c.up=(...m)=>l(n.breakpoints.up(...m),f),c.down=(...m)=>l(n.breakpoints.down(...m),f),c.between=(...m)=>l(n.breakpoints.between(...m),f),c.only=(...m)=>l(n.breakpoints.only(...m),f),c.not=(...m)=>{const h=l(n.breakpoints.not(...m),f);return h.includes("not all and")?h.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):h}}const s={},a=c=>(o(s,c),s);return o(a),{...n,containerQueries:a}}const shape={borderRadius:4};function merge(n,l){return l?deepmerge(n,l,{clone:!1}):n}const values={xs:0,sm:600,md:900,lg:1200,xl:1536},defaultBreakpoints={keys:["xs","sm","md","lg","xl"],up:n=>`@media (min-width:${values[n]}px)`},defaultContainerQueries={containerQueries:n=>({up:l=>{let o=typeof l=="number"?l:values[l]||l;return typeof o=="number"&&(o=`${o}px`),n?`@container ${n} (min-width:${o})`:`@container (min-width:${o})`}})};function handleBreakpoints(n,l,o){const s=n.theme||{};if(Array.isArray(l)){const c=s.breakpoints||defaultBreakpoints;return l.reduce((f,m,h)=>(f[c.up(c.keys[h])]=o(l[h]),f),{})}if(typeof l=="object"){const c=s.breakpoints||defaultBreakpoints;return Object.keys(l).reduce((f,m)=>{if(isCqShorthand(c.keys,m)){const h=getContainerQuery(s.containerQueries?s:defaultContainerQueries,m);h&&(f[h]=o(l[m],m))}else if(Object.keys(c.values||values).includes(m)){const h=c.up(m);f[h]=o(l[m],m)}else{const h=m;f[h]=l[h]}return f},{})}return o(l)}function createEmptyBreakpointObject(n={}){return n.keys?.reduce((o,s)=>{const a=n.up(s);return o[a]={},o},{})||{}}function removeUnusedBreakpoints(n,l){return n.reduce((o,s)=>{const a=o[s];return(!a||Object.keys(a).length===0)&&delete o[s],o},l)}function capitalize(n){if(typeof n!="string")throw new Error(formatMuiErrorMessage(7));return n.charAt(0).toUpperCase()+n.slice(1)}function getPath(n,l,o=!0){if(!l||typeof l!="string")return null;if(n&&n.vars&&o){const s=`vars.${l}`.split(".").reduce((a,c)=>a&&a[c]?a[c]:null,n);if(s!=null)return s}return l.split(".").reduce((s,a)=>s&&s[a]!=null?s[a]:null,n)}function getStyleValue(n,l,o,s=o){let a;return typeof n=="function"?a=n(o):Array.isArray(n)?a=n[o]||s:a=getPath(n,o)||s,l&&(a=l(a,s,n)),a}function style$1(n){const{prop:l,cssProperty:o=n.prop,themeKey:s,transform:a}=n,c=f=>{if(f[l]==null)return null;const m=f[l],h=f.theme,g=getPath(h,s)||{};return handleBreakpoints(f,m,y=>{let C=getStyleValue(g,a,y);return y===C&&typeof y=="string"&&(C=getStyleValue(g,a,`${l}${y==="default"?"":capitalize(y)}`,y)),o===!1?C:{[o]:C}})};return c.propTypes={},c.filterProps=[l],c}function memoize(n){const l={};return o=>(l[o]===void 0&&(l[o]=n(o)),l[o])}const properties={m:"margin",p:"padding"},directions={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},aliases={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},getCssProperties=memoize(n=>{if(n.length>2)if(aliases[n])n=aliases[n];else return[n];const[l,o]=n.split(""),s=properties[l],a=directions[o]||"";return Array.isArray(a)?a.map(c=>s+c):[s+a]}),marginKeys=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],paddingKeys=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...marginKeys,...paddingKeys];function createUnaryUnit(n,l,o,s){const a=getPath(n,l,!0)??o;return typeof a=="number"||typeof a=="string"?c=>typeof c=="string"?c:typeof a=="string"?a.startsWith("var(")&&c===0?0:a.startsWith("var(")&&c===1?a:`calc(${c} * ${a})`:a*c:Array.isArray(a)?c=>{if(typeof c=="string")return c;const f=Math.abs(c),m=a[f];return c>=0?m:typeof m=="number"?-m:typeof m=="string"&&m.startsWith("var(")?`calc(-1 * ${m})`:`-${m}`}:typeof a=="function"?a:()=>{}}function createUnarySpacing(n){return createUnaryUnit(n,"spacing",8)}function getValue(n,l){return typeof l=="string"||l==null?l:n(l)}function getStyleFromPropValue(n,l){return o=>n.reduce((s,a)=>(s[a]=getValue(l,o),s),{})}function resolveCssProperty(n,l,o,s){if(!l.includes(o))return null;const a=getCssProperties(o),c=getStyleFromPropValue(a,s),f=n[o];return handleBreakpoints(n,f,c)}function style(n,l){const o=createUnarySpacing(n.theme);return Object.keys(n).map(s=>resolveCssProperty(n,l,s,o)).reduce(merge,{})}function margin(n){return style(n,marginKeys)}margin.propTypes={};margin.filterProps=marginKeys;function padding(n){return style(n,paddingKeys)}padding.propTypes={};padding.filterProps=paddingKeys;function createSpacing(n=8,l=createUnarySpacing({spacing:n})){if(n.mui)return n;const o=(...s)=>(s.length===0?[1]:s).map(c=>{const f=l(c);return typeof f=="number"?`${f}px`:f}).join(" ");return o.mui=!0,o}function compose(...n){const l=n.reduce((s,a)=>(a.filterProps.forEach(c=>{s[c]=a}),s),{}),o=s=>Object.keys(s).reduce((a,c)=>l[c]?merge(a,l[c](s)):a,{});return o.propTypes={},o.filterProps=n.reduce((s,a)=>s.concat(a.filterProps),[]),o}function borderTransform(n){return typeof n!="number"?n:`${n}px solid`}function createBorderStyle(n,l){return style$1({prop:n,themeKey:"borders",transform:l})}const border=createBorderStyle("border",borderTransform),borderTop=createBorderStyle("borderTop",borderTransform),borderRight=createBorderStyle("borderRight",borderTransform),borderBottom=createBorderStyle("borderBottom",borderTransform),borderLeft=createBorderStyle("borderLeft",borderTransform),borderColor=createBorderStyle("borderColor"),borderTopColor=createBorderStyle("borderTopColor"),borderRightColor=createBorderStyle("borderRightColor"),borderBottomColor=createBorderStyle("borderBottomColor"),borderLeftColor=createBorderStyle("borderLeftColor"),outline=createBorderStyle("outline",borderTransform),outlineColor=createBorderStyle("outlineColor"),borderRadius=n=>{if(n.borderRadius!==void 0&&n.borderRadius!==null){const l=createUnaryUnit(n.theme,"shape.borderRadius",4),o=s=>({borderRadius:getValue(l,s)});return handleBreakpoints(n,n.borderRadius,o)}return null};borderRadius.propTypes={};borderRadius.filterProps=["borderRadius"];compose(border,borderTop,borderRight,borderBottom,borderLeft,borderColor,borderTopColor,borderRightColor,borderBottomColor,borderLeftColor,borderRadius,outline,outlineColor);const gap=n=>{if(n.gap!==void 0&&n.gap!==null){const l=createUnaryUnit(n.theme,"spacing",8),o=s=>({gap:getValue(l,s)});return handleBreakpoints(n,n.gap,o)}return null};gap.propTypes={};gap.filterProps=["gap"];const columnGap=n=>{if(n.columnGap!==void 0&&n.columnGap!==null){const l=createUnaryUnit(n.theme,"spacing",8),o=s=>({columnGap:getValue(l,s)});return handleBreakpoints(n,n.columnGap,o)}return null};columnGap.propTypes={};columnGap.filterProps=["columnGap"];const rowGap=n=>{if(n.rowGap!==void 0&&n.rowGap!==null){const l=createUnaryUnit(n.theme,"spacing",8),o=s=>({rowGap:getValue(l,s)});return handleBreakpoints(n,n.rowGap,o)}return null};rowGap.propTypes={};rowGap.filterProps=["rowGap"];const gridColumn=style$1({prop:"gridColumn"}),gridRow=style$1({prop:"gridRow"}),gridAutoFlow=style$1({prop:"gridAutoFlow"}),gridAutoColumns=style$1({prop:"gridAutoColumns"}),gridAutoRows=style$1({prop:"gridAutoRows"}),gridTemplateColumns=style$1({prop:"gridTemplateColumns"}),gridTemplateRows=style$1({prop:"gridTemplateRows"}),gridTemplateAreas=style$1({prop:"gridTemplateAreas"}),gridArea=style$1({prop:"gridArea"});compose(gap,columnGap,rowGap,gridColumn,gridRow,gridAutoFlow,gridAutoColumns,gridAutoRows,gridTemplateColumns,gridTemplateRows,gridTemplateAreas,gridArea);function paletteTransform(n,l){return l==="grey"?l:n}const color=style$1({prop:"color",themeKey:"palette",transform:paletteTransform}),bgcolor=style$1({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:paletteTransform}),backgroundColor=style$1({prop:"backgroundColor",themeKey:"palette",transform:paletteTransform});compose(color,bgcolor,backgroundColor);function sizingTransform(n){return n<=1&&n!==0?`${n*100}%`:n}const width=style$1({prop:"width",transform:sizingTransform}),maxWidth=n=>{if(n.maxWidth!==void 0&&n.maxWidth!==null){const l=o=>{const s=n.theme?.breakpoints?.values?.[o]||values[o];return s?n.theme?.breakpoints?.unit!=="px"?{maxWidth:`${s}${n.theme.breakpoints.unit}`}:{maxWidth:s}:{maxWidth:sizingTransform(o)}};return handleBreakpoints(n,n.maxWidth,l)}return null};maxWidth.filterProps=["maxWidth"];const minWidth=style$1({prop:"minWidth",transform:sizingTransform}),height=style$1({prop:"height",transform:sizingTransform}),maxHeight=style$1({prop:"maxHeight",transform:sizingTransform}),minHeight=style$1({prop:"minHeight",transform:sizingTransform});style$1({prop:"size",cssProperty:"width",transform:sizingTransform});style$1({prop:"size",cssProperty:"height",transform:sizingTransform});const boxSizing=style$1({prop:"boxSizing"});compose(width,maxWidth,minWidth,height,maxHeight,minHeight,boxSizing);const defaultSxConfig={border:{themeKey:"borders",transform:borderTransform},borderTop:{themeKey:"borders",transform:borderTransform},borderRight:{themeKey:"borders",transform:borderTransform},borderBottom:{themeKey:"borders",transform:borderTransform},borderLeft:{themeKey:"borders",transform:borderTransform},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:borderTransform},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:borderRadius},color:{themeKey:"palette",transform:paletteTransform},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:paletteTransform},backgroundColor:{themeKey:"palette",transform:paletteTransform},p:{style:padding},pt:{style:padding},pr:{style:padding},pb:{style:padding},pl:{style:padding},px:{style:padding},py:{style:padding},padding:{style:padding},paddingTop:{style:padding},paddingRight:{style:padding},paddingBottom:{style:padding},paddingLeft:{style:padding},paddingX:{style:padding},paddingY:{style:padding},paddingInline:{style:padding},paddingInlineStart:{style:padding},paddingInlineEnd:{style:padding},paddingBlock:{style:padding},paddingBlockStart:{style:padding},paddingBlockEnd:{style:padding},m:{style:margin},mt:{style:margin},mr:{style:margin},mb:{style:margin},ml:{style:margin},mx:{style:margin},my:{style:margin},margin:{style:margin},marginTop:{style:margin},marginRight:{style:margin},marginBottom:{style:margin},marginLeft:{style:margin},marginX:{style:margin},marginY:{style:margin},marginInline:{style:margin},marginInlineStart:{style:margin},marginInlineEnd:{style:margin},marginBlock:{style:margin},marginBlockStart:{style:margin},marginBlockEnd:{style:margin},displayPrint:{cssProperty:!1,transform:n=>({"@media print":{display:n}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:gap},rowGap:{style:rowGap},columnGap:{style:columnGap},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:sizingTransform},maxWidth:{style:maxWidth},minWidth:{transform:sizingTransform},height:{transform:sizingTransform},maxHeight:{transform:sizingTransform},minHeight:{transform:sizingTransform},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function objectsHaveSameKeys(...n){const l=n.reduce((s,a)=>s.concat(Object.keys(a)),[]),o=new Set(l);return n.every(s=>o.size===Object.keys(s).length)}function callIfFn(n,l){return typeof n=="function"?n(l):n}function unstable_createStyleFunctionSx(){function n(o,s,a,c){const f={[o]:s,theme:a},m=c[o];if(!m)return{[o]:s};const{cssProperty:h=o,themeKey:g,transform:_,style:y}=m;if(s==null)return null;if(g==="typography"&&s==="inherit")return{[o]:s};const C=getPath(a,g)||{};return y?y(f):handleBreakpoints(f,s,M=>{let A=getStyleValue(C,_,M);return M===A&&typeof M=="string"&&(A=getStyleValue(C,_,`${o}${M==="default"?"":capitalize(M)}`,M)),h===!1?A:{[h]:A}})}function l(o){const{sx:s,theme:a={},nested:c}=o||{};if(!s)return null;const f=a.unstable_sxConfig??defaultSxConfig;function m(h){let g=h;if(typeof h=="function")g=h(a);else if(typeof h!="object")return h;if(!g)return null;const _=createEmptyBreakpointObject(a.breakpoints),y=Object.keys(_);let C=_;return Object.keys(g).forEach(D=>{const M=callIfFn(g[D],a);if(M!=null)if(typeof M=="object")if(f[D])C=merge(C,n(D,M,a,f));else{const A=handleBreakpoints({theme:a},M,k=>({[D]:k}));objectsHaveSameKeys(A,M)?C[D]=l({sx:M,theme:a,nested:!0}):C=merge(C,A)}else C=merge(C,n(D,M,a,f))}),!c&&a.modularCssLayers?{"@layer sx":sortContainerQueries(a,removeUnusedBreakpoints(y,C))}:sortContainerQueries(a,removeUnusedBreakpoints(y,C))}return Array.isArray(s)?s.map(m):m(s)}return l}const styleFunctionSx=unstable_createStyleFunctionSx();styleFunctionSx.filterProps=["sx"];function applyStyles(n,l){const o=this;if(o.vars){if(!o.colorSchemes?.[n]||typeof o.getColorSchemeSelector!="function")return{};let s=o.getColorSchemeSelector(n);return s==="&"?l:((s.includes("data-")||s.includes("."))&&(s=`*:where(${s.replace(/\s*&$/,"")}) &`),{[s]:l})}return o.palette.mode===n?l:{}}function createTheme$1(n={},...l){const{breakpoints:o={},palette:s={},spacing:a,shape:c={},...f}=n,m=createBreakpoints(o),h=createSpacing(a);let g=deepmerge({breakpoints:m,direction:"ltr",components:{},palette:{mode:"light",...s},spacing:h,shape:{...shape,...c}},f);return g=cssContainerQueries(g),g.applyStyles=applyStyles,g=l.reduce((_,y)=>deepmerge(_,y),g),g.unstable_sxConfig={...defaultSxConfig,...f?.unstable_sxConfig},g.unstable_sx=function(y){return styleFunctionSx({sx:y,theme:this})},g}function isObjectEmpty$1(n){return Object.keys(n).length===0}function useTheme$2(n=null){const l=reactExports.useContext(ThemeContext);return!l||isObjectEmpty$1(l)?n:l}const systemDefaultTheme$1=createTheme$1();function useTheme$1(n=systemDefaultTheme$1){return useTheme$2(n)}const defaultGenerator=n=>n,createClassNameGenerator=()=>{let n=defaultGenerator;return{configure(l){n=l},generate(l){return n(l)},reset(){n=defaultGenerator}}},ClassNameGenerator=createClassNameGenerator(),globalStateClasses={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function generateUtilityClass(n,l,o="Mui"){const s=globalStateClasses[l];return s?`${o}-${s}`:`${ClassNameGenerator.generate(n)}-${l}`}function generateUtilityClasses(n,l,o="Mui"){const s={};return l.forEach(a=>{s[a]=generateUtilityClass(n,a,o)}),s}function preprocessStyles(n){const{variants:l,...o}=n,s={variants:l,style:internal_serializeStyles(o),isProcessed:!0};return s.style===o||l&&l.forEach(a=>{typeof a.style!="function"&&(a.style=internal_serializeStyles(a.style))}),s}const systemDefaultTheme=createTheme$1();function shouldForwardProp(n){return n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"}function shallowLayer(n,l){return l&&n&&typeof n=="object"&&n.styles&&!n.styles.startsWith("@layer")&&(n.styles=`@layer ${l}{${String(n.styles)}}`),n}function defaultOverridesResolver(n){return n?(l,o)=>o[n]:null}function attachTheme(n,l,o){n.theme=isObjectEmpty(n.theme)?o:n.theme[l]||n.theme}function processStyle(n,l,o){const s=typeof l=="function"?l(n):l;if(Array.isArray(s))return s.flatMap(a=>processStyle(n,a,o));if(Array.isArray(s?.variants)){let a;if(s.isProcessed)a=o?shallowLayer(s.style,o):s.style;else{const{variants:c,...f}=s;a=o?shallowLayer(internal_serializeStyles(f),o):f}return processStyleVariants(n,s.variants,[a],o)}return s?.isProcessed?o?shallowLayer(internal_serializeStyles(s.style),o):s.style:o?shallowLayer(internal_serializeStyles(s),o):s}function processStyleVariants(n,l,o=[],s=void 0){let a;e:for(let c=0;c<l.length;c+=1){const f=l[c];if(typeof f.props=="function"){if(a??={...n,...n.ownerState,ownerState:n.ownerState},!f.props(a))continue}else for(const m in f.props)if(n[m]!==f.props[m]&&n.ownerState?.[m]!==f.props[m])continue e;typeof f.style=="function"?(a??={...n,...n.ownerState,ownerState:n.ownerState},o.push(s?shallowLayer(internal_serializeStyles(f.style(a)),s):f.style(a))):o.push(s?shallowLayer(internal_serializeStyles(f.style),s):f.style)}return o}function createStyled(n={}){const{themeId:l,defaultTheme:o=systemDefaultTheme,rootShouldForwardProp:s=shouldForwardProp,slotShouldForwardProp:a=shouldForwardProp}=n;function c(m){attachTheme(m,l,o)}return(m,h={})=>{internal_mutateStyles(m,O=>O.filter(B=>B!==styleFunctionSx));const{name:g,slot:_,skipVariantsResolver:y,skipSx:C,overridesResolver:D=defaultOverridesResolver(lowercaseFirstLetter(_)),...M}=h,A=g&&g.startsWith("Mui")||_?"components":"custom",k=y!==void 0?y:_&&_!=="Root"&&_!=="root"||!1,R=C||!1;let W=shouldForwardProp;_==="Root"||_==="root"?W=s:_?W=a:isStringTag(m)&&(W=void 0);const L=styled$1(m,{shouldForwardProp:W,label:generateStyledLabel(),...M}),x=O=>{if(O.__emotion_real===O)return O;if(typeof O=="function")return function(V){return processStyle(V,O,V.theme.modularCssLayers?A:void 0)};if(isPlainObject(O)){const B=preprocessStyles(O);return function(q){return B.variants?processStyle(q,B,q.theme.modularCssLayers?A:void 0):q.theme.modularCssLayers?shallowLayer(B.style,A):B.style}}return O},E=(...O)=>{const B=[],V=O.map(x),q=[];if(B.push(c),g&&D&&q.push(function(J){const ne=J.theme.components?.[g]?.styleOverrides;if(!ne)return null;const Y={};for(const H in ne)Y[H]=processStyle(J,ne[H],J.theme.modularCssLayers?"theme":void 0);return D(J,Y)}),g&&!k&&q.push(function(J){const ne=J.theme?.components?.[g]?.variants;return ne?processStyleVariants(J,ne,[],J.theme.modularCssLayers?"theme":void 0):null}),R||q.push(styleFunctionSx),Array.isArray(V[0])){const te=V.shift(),J=new Array(B.length).fill(""),ge=new Array(q.length).fill("");let ne;ne=[...J,...te,...ge],ne.raw=[...J,...te.raw,...ge],B.unshift(ne)}const S=[...B,...V,...q],z=L(...S);return m.muiName&&(z.muiName=m.muiName),z};return L.withConfig&&(E.withConfig=L.withConfig),E}}function generateStyledLabel(n,l){return void 0}function isObjectEmpty(n){for(const l in n)return!1;return!0}function isStringTag(n){return typeof n=="string"&&n.charCodeAt(0)>96}function lowercaseFirstLetter(n){return n&&n.charAt(0).toLowerCase()+n.slice(1)}function resolveProps(n,l,o=!1){const s={...l};for(const a in n)if(Object.prototype.hasOwnProperty.call(n,a)){const c=a;if(c==="components"||c==="slots")s[c]={...n[c],...s[c]};else if(c==="componentsProps"||c==="slotProps"){const f=n[c],m=l[c];if(!m)s[c]=f||{};else if(!f)s[c]=m;else{s[c]={...m};for(const h in f)if(Object.prototype.hasOwnProperty.call(f,h)){const g=h;s[c][g]=resolveProps(f[g],m[g],o)}}}else c==="className"&&o&&l.className?s.className=clsx(n?.className,l?.className):c==="style"&&o&&l.style?s.style={...n?.style,...l?.style}:s[c]===void 0&&(s[c]=n[c])}return s}const useEnhancedEffect=typeof window<"u"?reactExports.useLayoutEffect:reactExports.useEffect;function clamp$1(n,l=Number.MIN_SAFE_INTEGER,o=Number.MAX_SAFE_INTEGER){return Math.max(l,Math.min(n,o))}function clampWrapper(n,l=0,o=1){return clamp$1(n,l,o)}function hexToRgb(n){n=n.slice(1);const l=new RegExp(`.{1,${n.length>=6?2:1}}`,"g");let o=n.match(l);return o&&o[0].length===1&&(o=o.map(s=>s+s)),o?`rgb${o.length===4?"a":""}(${o.map((s,a)=>a<3?parseInt(s,16):Math.round(parseInt(s,16)/255*1e3)/1e3).join(", ")})`:""}function decomposeColor(n){if(n.type)return n;if(n.charAt(0)==="#")return decomposeColor(hexToRgb(n));const l=n.indexOf("("),o=n.substring(0,l);if(!["rgb","rgba","hsl","hsla","color"].includes(o))throw new Error(formatMuiErrorMessage(9,n));let s=n.substring(l+1,n.length-1),a;if(o==="color"){if(s=s.split(" "),a=s.shift(),s.length===4&&s[3].charAt(0)==="/"&&(s[3]=s[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(a))throw new Error(formatMuiErrorMessage(10,a))}else s=s.split(",");return s=s.map(c=>parseFloat(c)),{type:o,values:s,colorSpace:a}}const colorChannel=n=>{const l=decomposeColor(n);return l.values.slice(0,3).map((o,s)=>l.type.includes("hsl")&&s!==0?`${o}%`:o).join(" ")},private_safeColorChannel=(n,l)=>{try{return colorChannel(n)}catch{return n}};function recomposeColor(n){const{type:l,colorSpace:o}=n;let{values:s}=n;return l.includes("rgb")?s=s.map((a,c)=>c<3?parseInt(a,10):a):l.includes("hsl")&&(s[1]=`${s[1]}%`,s[2]=`${s[2]}%`),l.includes("color")?s=`${o} ${s.join(" ")}`:s=`${s.join(", ")}`,`${l}(${s})`}function hslToRgb(n){n=decomposeColor(n);const{values:l}=n,o=l[0],s=l[1]/100,a=l[2]/100,c=s*Math.min(a,1-a),f=(g,_=(g+o/30)%12)=>a-c*Math.max(Math.min(_-3,9-_,1),-1);let m="rgb";const h=[Math.round(f(0)*255),Math.round(f(8)*255),Math.round(f(4)*255)];return n.type==="hsla"&&(m+="a",h.push(l[3])),recomposeColor({type:m,values:h})}function getLuminance(n){n=decomposeColor(n);let l=n.type==="hsl"||n.type==="hsla"?decomposeColor(hslToRgb(n)).values:n.values;return l=l.map(o=>(n.type!=="color"&&(o/=255),o<=.03928?o/12.92:((o+.055)/1.055)**2.4)),Number((.2126*l[0]+.7152*l[1]+.0722*l[2]).toFixed(3))}function getContrastRatio(n,l){const o=getLuminance(n),s=getLuminance(l);return(Math.max(o,s)+.05)/(Math.min(o,s)+.05)}function alpha(n,l){return n=decomposeColor(n),l=clampWrapper(l),(n.type==="rgb"||n.type==="hsl")&&(n.type+="a"),n.type==="color"?n.values[3]=`/${l}`:n.values[3]=l,recomposeColor(n)}function private_safeAlpha(n,l,o){try{return alpha(n,l)}catch{return n}}function darken(n,l){if(n=decomposeColor(n),l=clampWrapper(l),n.type.includes("hsl"))n.values[2]*=1-l;else if(n.type.includes("rgb")||n.type.includes("color"))for(let o=0;o<3;o+=1)n.values[o]*=1-l;return recomposeColor(n)}function private_safeDarken(n,l,o){try{return darken(n,l)}catch{return n}}function lighten(n,l){if(n=decomposeColor(n),l=clampWrapper(l),n.type.includes("hsl"))n.values[2]+=(100-n.values[2])*l;else if(n.type.includes("rgb"))for(let o=0;o<3;o+=1)n.values[o]+=(255-n.values[o])*l;else if(n.type.includes("color"))for(let o=0;o<3;o+=1)n.values[o]+=(1-n.values[o])*l;return recomposeColor(n)}function private_safeLighten(n,l,o){try{return lighten(n,l)}catch{return n}}function emphasize(n,l=.15){return getLuminance(n)>.5?darken(n,l):lighten(n,l)}function private_safeEmphasize(n,l,o){try{return emphasize(n,l)}catch{return n}}const RtlContext=reactExports.createContext(),useRtl=()=>reactExports.useContext(RtlContext)??!1,PropsContext=reactExports.createContext(void 0);function getThemeProps(n){const{theme:l,name:o,props:s}=n;if(!l||!l.components||!l.components[o])return s;const a=l.components[o];return a.defaultProps?resolveProps(a.defaultProps,s,l.components.mergeClassNameAndStyle):!a.styleOverrides&&!a.variants?resolveProps(a,s,l.components.mergeClassNameAndStyle):s}function useDefaultProps$1({props:n,name:l}){const o=reactExports.useContext(PropsContext);return getThemeProps({props:n,name:l,theme:{components:o}})}let globalId=0;function useGlobalId(n){const[l,o]=reactExports.useState(n),s=n||l;return reactExports.useEffect(()=>{l==null&&(globalId+=1,o(`mui-${globalId}`))},[l]),s}const safeReact={...React$1},maybeReactUseId=safeReact.useId;function useId(n){if(maybeReactUseId!==void 0){const l=maybeReactUseId();return n??l}return useGlobalId(n)}const arg={theme:void 0};function unstable_memoTheme(n){let l,o;return function(a){let c=l;return(c===void 0||a.theme!==o)&&(arg.theme=a.theme,c=preprocessStyles(n(arg)),l=c,o=a.theme),c}}function createGetCssVar$1(n=""){function l(...s){if(!s.length)return"";const a=s[0];return typeof a=="string"&&!a.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${n?`${n}-`:""}${a}${l(...s.slice(1))})`:`, ${a}`}return(s,...a)=>`var(--${n?`${n}-`:""}${s}${l(...a)})`}const assignNestedKeys=(n,l,o,s=[])=>{let a=n;l.forEach((c,f)=>{f===l.length-1?Array.isArray(a)?a[Number(c)]=o:a&&typeof a=="object"&&(a[c]=o):a&&typeof a=="object"&&(a[c]||(a[c]=s.includes(c)?[]:{}),a=a[c])})},walkObjectDeep=(n,l,o)=>{function s(a,c=[],f=[]){Object.entries(a).forEach(([m,h])=>{(!o||o&&!o([...c,m]))&&h!=null&&(typeof h=="object"&&Object.keys(h).length>0?s(h,[...c,m],Array.isArray(h)?[...f,m]:f):l([...c,m],h,f))})}s(n)},getCssValue=(n,l)=>typeof l=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(s=>n.includes(s))||n[n.length-1].toLowerCase().includes("opacity")?l:`${l}px`:l;function cssVarsParser(n,l){const{prefix:o,shouldSkipGeneratingVar:s}=l||{},a={},c={},f={};return walkObjectDeep(n,(m,h,g)=>{if((typeof h=="string"||typeof h=="number")&&(!s||!s(m,h))){const _=`--${o?`${o}-`:""}${m.join("-")}`,y=getCssValue(m,h);Object.assign(a,{[_]:y}),assignNestedKeys(c,m,`var(${_})`,g),assignNestedKeys(f,m,`var(${_}, ${y})`,g)}},m=>m[0]==="vars"),{css:a,vars:c,varsWithDefaults:f}}function prepareCssVars(n,l={}){const{getSelector:o=k,disableCssColorScheme:s,colorSchemeSelector:a}=l,{colorSchemes:c={},components:f,defaultColorScheme:m="light",...h}=n,{vars:g,css:_,varsWithDefaults:y}=cssVarsParser(h,l);let C=y;const D={},{[m]:M,...A}=c;if(Object.entries(A||{}).forEach(([L,x])=>{const{vars:E,css:O,varsWithDefaults:B}=cssVarsParser(x,l);C=deepmerge(C,B),D[L]={css:O,vars:E}}),M){const{css:L,vars:x,varsWithDefaults:E}=cssVarsParser(M,l);C=deepmerge(C,E),D[m]={css:L,vars:x}}function k(L,x){let E=a;if(a==="class"&&(E=".%s"),a==="data"&&(E="[data-%s]"),a?.startsWith("data-")&&!a.includes("%s")&&(E=`[${a}="%s"]`),L){if(E==="media")return n.defaultColorScheme===L?":root":{[`@media (prefers-color-scheme: ${c[L]?.palette?.mode||L})`]:{":root":x}};if(E)return n.defaultColorScheme===L?`:root, ${E.replace("%s",String(L))}`:E.replace("%s",String(L))}return":root"}return{vars:C,generateThemeVars:()=>{let L={...g};return Object.entries(D).forEach(([,{vars:x}])=>{L=deepmerge(L,x)}),L},generateStyleSheets:()=>{const L=[],x=n.defaultColorScheme||"light";function E(V,q){Object.keys(q).length&&L.push(typeof V=="string"?{[V]:{...q}}:V)}E(o(void 0,{..._}),_);const{[x]:O,...B}=D;if(O){const{css:V}=O,q=c[x]?.palette?.mode,S=!s&&q?{colorScheme:q,...V}:{...V};E(o(x,{...S}),S)}return Object.entries(B).forEach(([V,{css:q}])=>{const S=c[V]?.palette?.mode,z=!s&&S?{colorScheme:S,...q}:{...q};E(o(V,{...z}),z)}),L}}}function createGetColorSchemeSelector(n){return function(o){return n==="media"?`@media (prefers-color-scheme: ${o})`:n?n.startsWith("data-")&&!n.includes("%s")?`[${n}="${o}"] &`:n==="class"?`.${o} &`:n==="data"?`[data-${o}] &`:`${n.replace("%s",o)} &`:"&"}}function composeClasses(n,l,o=void 0){const s={};for(const a in n){const c=n[a];let f="",m=!0;for(let h=0;h<c.length;h+=1){const g=c[h];g&&(f+=(m===!0?"":" ")+l(g),m=!1,o&&o[g]&&(f+=" "+o[g]))}s[a]=f}return s}const common={black:"#000",white:"#fff"},grey={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},purple={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},red={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},orange={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},blue={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},lightBlue={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},green={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"};function getLight(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:common.white,default:common.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const light=getLight();function getDark(){return{text:{primary:common.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:common.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const dark=getDark();function addLightOrDark(n,l,o,s){const a=s.light||s,c=s.dark||s*1.5;n[l]||(n.hasOwnProperty(o)?n[l]=n[o]:l==="light"?n.light=lighten(n.main,a):l==="dark"&&(n.dark=darken(n.main,c)))}function getDefaultPrimary(n="light"){return n==="dark"?{main:blue[200],light:blue[50],dark:blue[400]}:{main:blue[700],light:blue[400],dark:blue[800]}}function getDefaultSecondary(n="light"){return n==="dark"?{main:purple[200],light:purple[50],dark:purple[400]}:{main:purple[500],light:purple[300],dark:purple[700]}}function getDefaultError(n="light"){return n==="dark"?{main:red[500],light:red[300],dark:red[700]}:{main:red[700],light:red[400],dark:red[800]}}function getDefaultInfo(n="light"){return n==="dark"?{main:lightBlue[400],light:lightBlue[300],dark:lightBlue[700]}:{main:lightBlue[700],light:lightBlue[500],dark:lightBlue[900]}}function getDefaultSuccess(n="light"){return n==="dark"?{main:green[400],light:green[300],dark:green[700]}:{main:green[800],light:green[500],dark:green[900]}}function getDefaultWarning(n="light"){return n==="dark"?{main:orange[400],light:orange[300],dark:orange[700]}:{main:"#ed6c02",light:orange[500],dark:orange[900]}}function createPalette(n){const{mode:l="light",contrastThreshold:o=3,tonalOffset:s=.2,...a}=n,c=n.primary||getDefaultPrimary(l),f=n.secondary||getDefaultSecondary(l),m=n.error||getDefaultError(l),h=n.info||getDefaultInfo(l),g=n.success||getDefaultSuccess(l),_=n.warning||getDefaultWarning(l);function y(A){return getContrastRatio(A,dark.text.primary)>=o?dark.text.primary:light.text.primary}const C=({color:A,name:k,mainShade:R=500,lightShade:W=300,darkShade:L=700})=>{if(A={...A},!A.main&&A[R]&&(A.main=A[R]),!A.hasOwnProperty("main"))throw new Error(formatMuiErrorMessage(11,k?` (${k})`:"",R));if(typeof A.main!="string")throw new Error(formatMuiErrorMessage(12,k?` (${k})`:"",JSON.stringify(A.main)));return addLightOrDark(A,"light",W,s),addLightOrDark(A,"dark",L,s),A.contrastText||(A.contrastText=y(A.main)),A};let D;return l==="light"?D=getLight():l==="dark"&&(D=getDark()),deepmerge({common:{...common},mode:l,primary:C({color:c,name:"primary"}),secondary:C({color:f,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:C({color:m,name:"error"}),warning:C({color:_,name:"warning"}),info:C({color:h,name:"info"}),success:C({color:g,name:"success"}),grey,contrastThreshold:o,getContrastText:y,augmentColor:C,tonalOffset:s,...D},a)}function prepareTypographyVars(n){const l={};return Object.entries(n).forEach(s=>{const[a,c]=s;typeof c=="object"&&(l[a]=`${c.fontStyle?`${c.fontStyle} `:""}${c.fontVariant?`${c.fontVariant} `:""}${c.fontWeight?`${c.fontWeight} `:""}${c.fontStretch?`${c.fontStretch} `:""}${c.fontSize||""}${c.lineHeight?`/${c.lineHeight} `:""}${c.fontFamily||""}`)}),l}function createMixins(n,l){return{toolbar:{minHeight:56,[n.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[n.up("sm")]:{minHeight:64}},...l}}function round$1(n){return Math.round(n*1e5)/1e5}const caseAllCaps={textTransform:"uppercase"},defaultFontFamily='"Roboto", "Helvetica", "Arial", sans-serif';function createTypography(n,l){const{fontFamily:o=defaultFontFamily,fontSize:s=14,fontWeightLight:a=300,fontWeightRegular:c=400,fontWeightMedium:f=500,fontWeightBold:m=700,htmlFontSize:h=16,allVariants:g,pxToRem:_,...y}=typeof l=="function"?l(n):l,C=s/14,D=_||(k=>`${k/h*C}rem`),M=(k,R,W,L,x)=>({fontFamily:o,fontWeight:k,fontSize:D(R),lineHeight:W,...o===defaultFontFamily?{letterSpacing:`${round$1(L/R)}em`}:{},...x,...g}),A={h1:M(a,96,1.167,-1.5),h2:M(a,60,1.2,-.5),h3:M(c,48,1.167,0),h4:M(c,34,1.235,.25),h5:M(c,24,1.334,0),h6:M(f,20,1.6,.15),subtitle1:M(c,16,1.75,.15),subtitle2:M(f,14,1.57,.1),body1:M(c,16,1.5,.15),body2:M(c,14,1.43,.15),button:M(f,14,1.75,.4,caseAllCaps),caption:M(c,12,1.66,.4),overline:M(c,12,2.66,1,caseAllCaps),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return deepmerge({htmlFontSize:h,pxToRem:D,fontFamily:o,fontSize:s,fontWeightLight:a,fontWeightRegular:c,fontWeightMedium:f,fontWeightBold:m,...A},y,{clone:!1})}const shadowKeyUmbraOpacity=.2,shadowKeyPenumbraOpacity=.14,shadowAmbientShadowOpacity=.12;function createShadow(...n){return[`${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`,`${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`,`${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(",")}const shadows=["none",createShadow(0,2,1,-1,0,1,1,0,0,1,3,0),createShadow(0,3,1,-2,0,2,2,0,0,1,5,0),createShadow(0,3,3,-2,0,3,4,0,0,1,8,0),createShadow(0,2,4,-1,0,4,5,0,0,1,10,0),createShadow(0,3,5,-1,0,5,8,0,0,1,14,0),createShadow(0,3,5,-1,0,6,10,0,0,1,18,0),createShadow(0,4,5,-2,0,7,10,1,0,2,16,1),createShadow(0,5,5,-3,0,8,10,1,0,3,14,2),createShadow(0,5,6,-3,0,9,12,1,0,3,16,2),createShadow(0,6,6,-3,0,10,14,1,0,4,18,3),createShadow(0,6,7,-4,0,11,15,1,0,4,20,3),createShadow(0,7,8,-4,0,12,17,2,0,5,22,4),createShadow(0,7,8,-4,0,13,19,2,0,5,24,4),createShadow(0,7,9,-4,0,14,21,2,0,5,26,4),createShadow(0,8,9,-5,0,15,22,2,0,6,28,5),createShadow(0,8,10,-5,0,16,24,2,0,6,30,5),createShadow(0,8,11,-5,0,17,26,2,0,6,32,5),createShadow(0,9,11,-5,0,18,28,2,0,7,34,6),createShadow(0,9,12,-6,0,19,29,2,0,7,36,6),createShadow(0,10,13,-6,0,20,31,3,0,8,38,7),createShadow(0,10,13,-6,0,21,33,3,0,8,40,7),createShadow(0,10,14,-6,0,22,35,3,0,8,42,7),createShadow(0,11,14,-7,0,23,36,3,0,9,44,8),createShadow(0,11,15,-7,0,24,38,3,0,9,46,8)],easing={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},duration={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function formatMs(n){return`${Math.round(n)}ms`}function getAutoHeightDuration(n){if(!n)return 0;const l=n/36;return Math.min(Math.round((4+15*l**.25+l/5)*10),3e3)}function createTransitions(n){const l={...easing,...n.easing},o={...duration,...n.duration};return{getAutoHeightDuration,create:(a=["all"],c={})=>{const{duration:f=o.standard,easing:m=l.easeInOut,delay:h=0,...g}=c;return(Array.isArray(a)?a:[a]).map(_=>`${_} ${typeof f=="string"?f:formatMs(f)} ${m} ${typeof h=="string"?h:formatMs(h)}`).join(",")},...n,easing:l,duration:o}}const zIndex={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function isSerializable(n){return isPlainObject(n)||typeof n>"u"||typeof n=="string"||typeof n=="boolean"||typeof n=="number"||Array.isArray(n)}function stringifyTheme(n={}){const l={...n};function o(s){const a=Object.entries(s);for(let c=0;c<a.length;c++){const[f,m]=a[c];!isSerializable(m)||f.startsWith("unstable_")?delete s[f]:isPlainObject(m)&&(s[f]={...m},o(s[f]))}}return o(l),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(l,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function createThemeNoVars(n={},...l){const{breakpoints:o,mixins:s={},spacing:a,palette:c={},transitions:f={},typography:m={},shape:h,...g}=n;if(n.vars&&n.generateThemeVars===void 0)throw new Error(formatMuiErrorMessage(20));const _=createPalette(c),y=createTheme$1(n);let C=deepmerge(y,{mixins:createMixins(y.breakpoints,s),palette:_,shadows:shadows.slice(),typography:createTypography(_,m),transitions:createTransitions(f),zIndex:{...zIndex}});return C=deepmerge(C,g),C=l.reduce((D,M)=>deepmerge(D,M),C),C.unstable_sxConfig={...defaultSxConfig,...g?.unstable_sxConfig},C.unstable_sx=function(M){return styleFunctionSx({sx:M,theme:this})},C.toRuntimeSource=stringifyTheme,C}function getOverlayAlpha(n){let l;return n<1?l=5.11916*n**2:l=4.5*Math.log(n+1)+2,Math.round(l*10)/1e3}const defaultDarkOverlays=[...Array(25)].map((n,l)=>{if(l===0)return"none";const o=getOverlayAlpha(l);return`linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`});function getOpacity(n){return{inputPlaceholder:n==="dark"?.5:.42,inputUnderline:n==="dark"?.7:.42,switchTrackDisabled:n==="dark"?.2:.12,switchTrack:n==="dark"?.3:.38}}function getOverlays(n){return n==="dark"?defaultDarkOverlays:[]}function createColorScheme(n){const{palette:l={mode:"light"},opacity:o,overlays:s,...a}=n,c=createPalette(l);return{palette:c,opacity:{...getOpacity(c.mode),...o},overlays:s||getOverlays(c.mode),...a}}function shouldSkipGeneratingVar(n){return!!n[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!n[0].match(/sxConfig$/)||n[0]==="palette"&&!!n[1]?.match(/(mode|contrastThreshold|tonalOffset)/)}const excludeVariablesFromRoot=n=>[...[...Array(25)].map((l,o)=>`--${n?`${n}-`:""}overlays-${o}`),`--${n?`${n}-`:""}palette-AppBar-darkBg`,`--${n?`${n}-`:""}palette-AppBar-darkColor`],defaultGetSelector=n=>(l,o)=>{const s=n.rootSelector||":root",a=n.colorSchemeSelector;let c=a;if(a==="class"&&(c=".%s"),a==="data"&&(c="[data-%s]"),a?.startsWith("data-")&&!a.includes("%s")&&(c=`[${a}="%s"]`),n.defaultColorScheme===l){if(l==="dark"){const f={};return excludeVariablesFromRoot(n.cssVarPrefix).forEach(m=>{f[m]=o[m],delete o[m]}),c==="media"?{[s]:o,"@media (prefers-color-scheme: dark)":{[s]:f}}:c?{[c.replace("%s",l)]:f,[`${s}, ${c.replace("%s",l)}`]:o}:{[s]:{...o,...f}}}if(c&&c!=="media")return`${s}, ${c.replace("%s",String(l))}`}else if(l){if(c==="media")return{[`@media (prefers-color-scheme: ${String(l)})`]:{[s]:o}};if(c)return c.replace("%s",String(l))}return s};function assignNode(n,l){l.forEach(o=>{n[o]||(n[o]={})})}function setColor(n,l,o){!n[l]&&o&&(n[l]=o)}function toRgb(n){return typeof n!="string"||!n.startsWith("hsl")?n:hslToRgb(n)}function setColorChannel(n,l){`${l}Channel`in n||(n[`${l}Channel`]=private_safeColorChannel(toRgb(n[l])))}function getSpacingVal(n){return typeof n=="number"?`${n}px`:typeof n=="string"||typeof n=="function"||Array.isArray(n)?n:"8px"}const silent=n=>{try{return n()}catch{}},createGetCssVar=(n="mui")=>createGetCssVar$1(n);function attachColorScheme$1(n,l,o,s){if(!l)return;l=l===!0?{}:l;const a=s==="dark"?"dark":"light";if(!o){n[s]=createColorScheme({...l,palette:{mode:a,...l?.palette}});return}const{palette:c,...f}=createThemeNoVars({...o,palette:{mode:a,...l?.palette}});return n[s]={...l,palette:c,opacity:{...getOpacity(a),...l?.opacity},overlays:l?.overlays||getOverlays(a)},f}function createThemeWithVars(n={},...l){const{colorSchemes:o={light:!0},defaultColorScheme:s,disableCssColorScheme:a=!1,cssVarPrefix:c="mui",shouldSkipGeneratingVar:f=shouldSkipGeneratingVar,colorSchemeSelector:m=o.light&&o.dark?"media":void 0,rootSelector:h=":root",...g}=n,_=Object.keys(o)[0],y=s||(o.light&&_!=="light"?"light":_),C=createGetCssVar(c),{[y]:D,light:M,dark:A,...k}=o,R={...k};let W=D;if((y==="dark"&&!("dark"in o)||y==="light"&&!("light"in o))&&(W=!0),!W)throw new Error(formatMuiErrorMessage(21,y));const L=attachColorScheme$1(R,W,g,y);M&&!R.light&&attachColorScheme$1(R,M,void 0,"light"),A&&!R.dark&&attachColorScheme$1(R,A,void 0,"dark");let x={defaultColorScheme:y,...L,cssVarPrefix:c,colorSchemeSelector:m,rootSelector:h,getCssVar:C,colorSchemes:R,font:{...prepareTypographyVars(L.typography),...L.font},spacing:getSpacingVal(g.spacing)};Object.keys(x.colorSchemes).forEach(q=>{const S=x.colorSchemes[q].palette,z=te=>{const J=te.split("-"),ge=J[1],ne=J[2];return C(te,S[ge][ne])};if(S.mode==="light"&&(setColor(S.common,"background","#fff"),setColor(S.common,"onBackground","#000")),S.mode==="dark"&&(setColor(S.common,"background","#000"),setColor(S.common,"onBackground","#fff")),assignNode(S,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),S.mode==="light"){setColor(S.Alert,"errorColor",private_safeDarken(S.error.light,.6)),setColor(S.Alert,"infoColor",private_safeDarken(S.info.light,.6)),setColor(S.Alert,"successColor",private_safeDarken(S.success.light,.6)),setColor(S.Alert,"warningColor",private_safeDarken(S.warning.light,.6)),setColor(S.Alert,"errorFilledBg",z("palette-error-main")),setColor(S.Alert,"infoFilledBg",z("palette-info-main")),setColor(S.Alert,"successFilledBg",z("palette-success-main")),setColor(S.Alert,"warningFilledBg",z("palette-warning-main")),setColor(S.Alert,"errorFilledColor",silent(()=>S.getContrastText(S.error.main))),setColor(S.Alert,"infoFilledColor",silent(()=>S.getContrastText(S.info.main))),setColor(S.Alert,"successFilledColor",silent(()=>S.getContrastText(S.success.main))),setColor(S.Alert,"warningFilledColor",silent(()=>S.getContrastText(S.warning.main))),setColor(S.Alert,"errorStandardBg",private_safeLighten(S.error.light,.9)),setColor(S.Alert,"infoStandardBg",private_safeLighten(S.info.light,.9)),setColor(S.Alert,"successStandardBg",private_safeLighten(S.success.light,.9)),setColor(S.Alert,"warningStandardBg",private_safeLighten(S.warning.light,.9)),setColor(S.Alert,"errorIconColor",z("palette-error-main")),setColor(S.Alert,"infoIconColor",z("palette-info-main")),setColor(S.Alert,"successIconColor",z("palette-success-main")),setColor(S.Alert,"warningIconColor",z("palette-warning-main")),setColor(S.AppBar,"defaultBg",z("palette-grey-100")),setColor(S.Avatar,"defaultBg",z("palette-grey-400")),setColor(S.Button,"inheritContainedBg",z("palette-grey-300")),setColor(S.Button,"inheritContainedHoverBg",z("palette-grey-A100")),setColor(S.Chip,"defaultBorder",z("palette-grey-400")),setColor(S.Chip,"defaultAvatarColor",z("palette-grey-700")),setColor(S.Chip,"defaultIconColor",z("palette-grey-700")),setColor(S.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),setColor(S.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),setColor(S.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),setColor(S.LinearProgress,"primaryBg",private_safeLighten(S.primary.main,.62)),setColor(S.LinearProgress,"secondaryBg",private_safeLighten(S.secondary.main,.62)),setColor(S.LinearProgress,"errorBg",private_safeLighten(S.error.main,.62)),setColor(S.LinearProgress,"infoBg",private_safeLighten(S.info.main,.62)),setColor(S.LinearProgress,"successBg",private_safeLighten(S.success.main,.62)),setColor(S.LinearProgress,"warningBg",private_safeLighten(S.warning.main,.62)),setColor(S.Skeleton,"bg",`rgba(${z("palette-text-primaryChannel")} / 0.11)`),setColor(S.Slider,"primaryTrack",private_safeLighten(S.primary.main,.62)),setColor(S.Slider,"secondaryTrack",private_safeLighten(S.secondary.main,.62)),setColor(S.Slider,"errorTrack",private_safeLighten(S.error.main,.62)),setColor(S.Slider,"infoTrack",private_safeLighten(S.info.main,.62)),setColor(S.Slider,"successTrack",private_safeLighten(S.success.main,.62)),setColor(S.Slider,"warningTrack",private_safeLighten(S.warning.main,.62));const te=private_safeEmphasize(S.background.default,.8);setColor(S.SnackbarContent,"bg",te),setColor(S.SnackbarContent,"color",silent(()=>S.getContrastText(te))),setColor(S.SpeedDialAction,"fabHoverBg",private_safeEmphasize(S.background.paper,.15)),setColor(S.StepConnector,"border",z("palette-grey-400")),setColor(S.StepContent,"border",z("palette-grey-400")),setColor(S.Switch,"defaultColor",z("palette-common-white")),setColor(S.Switch,"defaultDisabledColor",z("palette-grey-100")),setColor(S.Switch,"primaryDisabledColor",private_safeLighten(S.primary.main,.62)),setColor(S.Switch,"secondaryDisabledColor",private_safeLighten(S.secondary.main,.62)),setColor(S.Switch,"errorDisabledColor",private_safeLighten(S.error.main,.62)),setColor(S.Switch,"infoDisabledColor",private_safeLighten(S.info.main,.62)),setColor(S.Switch,"successDisabledColor",private_safeLighten(S.success.main,.62)),setColor(S.Switch,"warningDisabledColor",private_safeLighten(S.warning.main,.62)),setColor(S.TableCell,"border",private_safeLighten(private_safeAlpha(S.divider,1),.88)),setColor(S.Tooltip,"bg",private_safeAlpha(S.grey[700],.92))}if(S.mode==="dark"){setColor(S.Alert,"errorColor",private_safeLighten(S.error.light,.6)),setColor(S.Alert,"infoColor",private_safeLighten(S.info.light,.6)),setColor(S.Alert,"successColor",private_safeLighten(S.success.light,.6)),setColor(S.Alert,"warningColor",private_safeLighten(S.warning.light,.6)),setColor(S.Alert,"errorFilledBg",z("palette-error-dark")),setColor(S.Alert,"infoFilledBg",z("palette-info-dark")),setColor(S.Alert,"successFilledBg",z("palette-success-dark")),setColor(S.Alert,"warningFilledBg",z("palette-warning-dark")),setColor(S.Alert,"errorFilledColor",silent(()=>S.getContrastText(S.error.dark))),setColor(S.Alert,"infoFilledColor",silent(()=>S.getContrastText(S.info.dark))),setColor(S.Alert,"successFilledColor",silent(()=>S.getContrastText(S.success.dark))),setColor(S.Alert,"warningFilledColor",silent(()=>S.getContrastText(S.warning.dark))),setColor(S.Alert,"errorStandardBg",private_safeDarken(S.error.light,.9)),setColor(S.Alert,"infoStandardBg",private_safeDarken(S.info.light,.9)),setColor(S.Alert,"successStandardBg",private_safeDarken(S.success.light,.9)),setColor(S.Alert,"warningStandardBg",private_safeDarken(S.warning.light,.9)),setColor(S.Alert,"errorIconColor",z("palette-error-main")),setColor(S.Alert,"infoIconColor",z("palette-info-main")),setColor(S.Alert,"successIconColor",z("palette-success-main")),setColor(S.Alert,"warningIconColor",z("palette-warning-main")),setColor(S.AppBar,"defaultBg",z("palette-grey-900")),setColor(S.AppBar,"darkBg",z("palette-background-paper")),setColor(S.AppBar,"darkColor",z("palette-text-primary")),setColor(S.Avatar,"defaultBg",z("palette-grey-600")),setColor(S.Button,"inheritContainedBg",z("palette-grey-800")),setColor(S.Button,"inheritContainedHoverBg",z("palette-grey-700")),setColor(S.Chip,"defaultBorder",z("palette-grey-700")),setColor(S.Chip,"defaultAvatarColor",z("palette-grey-300")),setColor(S.Chip,"defaultIconColor",z("palette-grey-300")),setColor(S.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),setColor(S.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),setColor(S.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),setColor(S.LinearProgress,"primaryBg",private_safeDarken(S.primary.main,.5)),setColor(S.LinearProgress,"secondaryBg",private_safeDarken(S.secondary.main,.5)),setColor(S.LinearProgress,"errorBg",private_safeDarken(S.error.main,.5)),setColor(S.LinearProgress,"infoBg",private_safeDarken(S.info.main,.5)),setColor(S.LinearProgress,"successBg",private_safeDarken(S.success.main,.5)),setColor(S.LinearProgress,"warningBg",private_safeDarken(S.warning.main,.5)),setColor(S.Skeleton,"bg",`rgba(${z("palette-text-primaryChannel")} / 0.13)`),setColor(S.Slider,"primaryTrack",private_safeDarken(S.primary.main,.5)),setColor(S.Slider,"secondaryTrack",private_safeDarken(S.secondary.main,.5)),setColor(S.Slider,"errorTrack",private_safeDarken(S.error.main,.5)),setColor(S.Slider,"infoTrack",private_safeDarken(S.info.main,.5)),setColor(S.Slider,"successTrack",private_safeDarken(S.success.main,.5)),setColor(S.Slider,"warningTrack",private_safeDarken(S.warning.main,.5));const te=private_safeEmphasize(S.background.default,.98);setColor(S.SnackbarContent,"bg",te),setColor(S.SnackbarContent,"color",silent(()=>S.getContrastText(te))),setColor(S.SpeedDialAction,"fabHoverBg",private_safeEmphasize(S.background.paper,.15)),setColor(S.StepConnector,"border",z("palette-grey-600")),setColor(S.StepContent,"border",z("palette-grey-600")),setColor(S.Switch,"defaultColor",z("palette-grey-300")),setColor(S.Switch,"defaultDisabledColor",z("palette-grey-600")),setColor(S.Switch,"primaryDisabledColor",private_safeDarken(S.primary.main,.55)),setColor(S.Switch,"secondaryDisabledColor",private_safeDarken(S.secondary.main,.55)),setColor(S.Switch,"errorDisabledColor",private_safeDarken(S.error.main,.55)),setColor(S.Switch,"infoDisabledColor",private_safeDarken(S.info.main,.55)),setColor(S.Switch,"successDisabledColor",private_safeDarken(S.success.main,.55)),setColor(S.Switch,"warningDisabledColor",private_safeDarken(S.warning.main,.55)),setColor(S.TableCell,"border",private_safeDarken(private_safeAlpha(S.divider,1),.68)),setColor(S.Tooltip,"bg",private_safeAlpha(S.grey[700],.92))}setColorChannel(S.background,"default"),setColorChannel(S.background,"paper"),setColorChannel(S.common,"background"),setColorChannel(S.common,"onBackground"),setColorChannel(S,"divider"),Object.keys(S).forEach(te=>{const J=S[te];te!=="tonalOffset"&&J&&typeof J=="object"&&(J.main&&setColor(S[te],"mainChannel",private_safeColorChannel(toRgb(J.main))),J.light&&setColor(S[te],"lightChannel",private_safeColorChannel(toRgb(J.light))),J.dark&&setColor(S[te],"darkChannel",private_safeColorChannel(toRgb(J.dark))),J.contrastText&&setColor(S[te],"contrastTextChannel",private_safeColorChannel(toRgb(J.contrastText))),te==="text"&&(setColorChannel(S[te],"primary"),setColorChannel(S[te],"secondary")),te==="action"&&(J.active&&setColorChannel(S[te],"active"),J.selected&&setColorChannel(S[te],"selected")))})}),x=l.reduce((q,S)=>deepmerge(q,S),x);const E={prefix:c,disableCssColorScheme:a,shouldSkipGeneratingVar:f,getSelector:defaultGetSelector(x)},{vars:O,generateThemeVars:B,generateStyleSheets:V}=prepareCssVars(x,E);return x.vars=O,Object.entries(x.colorSchemes[x.defaultColorScheme]).forEach(([q,S])=>{x[q]=S}),x.generateThemeVars=B,x.generateStyleSheets=V,x.generateSpacing=function(){return createSpacing(g.spacing,createUnarySpacing(this))},x.getColorSchemeSelector=createGetColorSchemeSelector(m),x.spacing=x.generateSpacing(),x.shouldSkipGeneratingVar=f,x.unstable_sxConfig={...defaultSxConfig,...g?.unstable_sxConfig},x.unstable_sx=function(S){return styleFunctionSx({sx:S,theme:this})},x.toRuntimeSource=stringifyTheme,x}function attachColorScheme(n,l,o){n.colorSchemes&&o&&(n.colorSchemes[l]={...o!==!0&&o,palette:createPalette({...o===!0?{}:o.palette,mode:l})})}function createTheme(n={},...l){const{palette:o,cssVariables:s=!1,colorSchemes:a=o?void 0:{light:!0},defaultColorScheme:c=o?.mode,...f}=n,m=c||"light",h=a?.[m],g={...a,...o?{[m]:{...typeof h!="boolean"&&h,palette:o}}:void 0};if(s===!1){if(!("colorSchemes"in n))return createThemeNoVars(n,...l);let _=o;"palette"in n||g[m]&&(g[m]!==!0?_=g[m].palette:m==="dark"&&(_={mode:"dark"}));const y=createThemeNoVars({...n,palette:_},...l);return y.defaultColorScheme=m,y.colorSchemes=g,y.palette.mode==="light"&&(y.colorSchemes.light={...g.light!==!0&&g.light,palette:y.palette},attachColorScheme(y,"dark",g.dark)),y.palette.mode==="dark"&&(y.colorSchemes.dark={...g.dark!==!0&&g.dark,palette:y.palette},attachColorScheme(y,"light",g.light)),y}return!o&&!("light"in g)&&m==="light"&&(g.light=!0),createThemeWithVars({...f,colorSchemes:g,defaultColorScheme:m,...typeof s!="boolean"&&s},...l)}const defaultTheme=createTheme();function useTheme(){const n=useTheme$1(defaultTheme);return n[THEME_ID]||n}function slotShouldForwardProp(n){return n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"}const rootShouldForwardProp=n=>slotShouldForwardProp(n)&&n!=="classes",styled=createStyled({themeId:THEME_ID,defaultTheme,rootShouldForwardProp});var reactApexcharts_min={},hasRequiredReactApexcharts_min;function requireReactApexcharts_min(){return hasRequiredReactApexcharts_min||(hasRequiredReactApexcharts_min=1,function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=L;var l=m(requireReact()),o=c(require$$1),s=c(requirePropTypes()),a=["type","width","height","series","options"];function c(x){return x&&x.__esModule?x:{default:x}}function f(x){var E,O;return typeof WeakMap!="function"?null:(E=new WeakMap,O=new WeakMap,(f=function(B){return B?O:E})(x))}function m(x,E){if(!E&&x&&x.__esModule)return x;if(x===null||y(x)!="object"&&typeof x!="function")return{default:x};if(E=f(E),E&&E.has(x))return E.get(x);var O,B,V={__proto__:null},q=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(O in x)O!=="default"&&{}.hasOwnProperty.call(x,O)&&((B=q?Object.getOwnPropertyDescriptor(x,O):null)&&(B.get||B.set)?Object.defineProperty(V,O,B):V[O]=x[O]);return V.default=x,E&&E.set(x,V),V}function h(){return(h=Object.assign?Object.assign.bind():function(x){for(var E=1;E<arguments.length;E++){var O,B=arguments[E];for(O in B)!{}.hasOwnProperty.call(B,O)||(x[O]=B[O])}return x}).apply(null,arguments)}function g(x,E){if(x==null)return{};var O,B=_(x,E);if(Object.getOwnPropertySymbols)for(var V=Object.getOwnPropertySymbols(x),q=0;q<V.length;q++)O=V[q],E.includes(O)||{}.propertyIsEnumerable.call(x,O)&&(B[O]=x[O]);return B}function _(x,E){if(x==null)return{};var O,B={};for(O in x)if({}.hasOwnProperty.call(x,O)){if(E.includes(O))continue;B[O]=x[O]}return B}function y(x){return(y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(E){return typeof E}:function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E})(x)}function C(x,E){var O,B=Object.keys(x);return Object.getOwnPropertySymbols&&(O=Object.getOwnPropertySymbols(x),E&&(O=O.filter(function(V){return Object.getOwnPropertyDescriptor(x,V).enumerable})),B.push.apply(B,O)),B}function D(x){for(var E=1;E<arguments.length;E++){var O=arguments[E]!=null?arguments[E]:{};E%2?C(Object(O),!0).forEach(function(B){M(x,B,O[B])}):Object.getOwnPropertyDescriptors?Object.defineProperties(x,Object.getOwnPropertyDescriptors(O)):C(Object(O)).forEach(function(B){Object.defineProperty(x,B,Object.getOwnPropertyDescriptor(O,B))})}return x}function M(x,E,O){return(E=A(E))in x?Object.defineProperty(x,E,{value:O,enumerable:!0,configurable:!0,writable:!0}):x[E]=O,x}function A(x){return x=k(x,"string"),y(x)=="symbol"?x:x+""}function k(x,E){if(y(x)!="object"||!x)return x;var O=x[Symbol.toPrimitive];if(O===void 0)return(E==="string"?String:Number)(x);if(O=O.call(x,E),y(O)!="object")return O;throw new TypeError("@@toPrimitive must return a primitive value.")}function R(x,E){var O=D({},x);return E.forEach(function(B){delete O[B]}),O}function W(x,E){var O=2<arguments.length&&arguments[2]!==void 0?arguments[2]:new WeakSet;if(x!==E){if(y(x)!=="object"||x===null||y(E)!=="object"||E===null)return!1;if(!O.has(x)&&!O.has(E)){O.add(x),O.add(E);var B=Object.keys(x),V=Object.keys(E);if(B.length!==V.length)return!1;for(var q=0,S=B;q<S.length;q++){var z=S[q];if(!V.includes(z)||!W(x[z],E[z],O))return!1}}}return!0}function L(H){function E(X){return X&&y(X)==="object"&&!Array.isArray(X)}var z=H.type,O=z===void 0?"line":z,z=H.width,B=z===void 0?"100%":z,z=H.height,V=z===void 0?"auto":z,q=H.series,S=H.options,z=g(H,a),te=(0,l.useRef)(null),J=(0,l.useRef)(null),ge=(0,l.useRef)(),ne=((0,l.useEffect)(function(){ge.current=S;var X=te.current;return J.current=new o.default(X,ne()),J.current.render(),function(){J.current&&typeof J.current.destroy=="function"&&J.current.destroy()}},[]),(0,l.useEffect)(function(){var X=!W(J.current.w.config.series,q),ae=!W(ge.current,S)||V!==J.current.opts.chart.height||B!==J.current.opts.chart.width;(X||ae)&&(!X||ae?J.current.updateOptions(ne()):J.current.updateSeries(q)),ge.current=S},[S,q,V,B]),function(){return Y(S,{chart:{type:O,height:V,width:B},series:q})}),Y=function(X,ae){var ee=D({},X);return E(X)&&E(ae)&&Object.keys(ae).forEach(function(T){E(ae[T])&&T in X?ee[T]=Y(X[T],ae[T]):Object.assign(ee,M({},T,ae[T]))}),ee},H=R(z,Object.keys(L.propTypes));return l.default.createElement("div",h({ref:te},H))}L.propTypes={type:s.default.string.isRequired,series:s.default.array.isRequired,options:s.default.object.isRequired,width:s.default.oneOfType([s.default.string,s.default.number]),height:s.default.oneOfType([s.default.string,s.default.number])}}(reactApexcharts_min)),reactApexcharts_min}var reactApexcharts_minExports=requireReactApexcharts_min();const Chart=getDefaultExportFromCjs(reactApexcharts_minExports);function __rest(n,l){var o={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&l.indexOf(s)<0&&(o[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(n);a<s.length;a++)l.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(n,s[a])&&(o[s[a]]=n[s[a]]);return o}var SourceType;(function(n){n.event="event",n.props="prop"})(SourceType||(SourceType={}));function noop$1(){}function memoizeOnce(n){var l,o=void 0;return function(){for(var s=[],a=arguments.length;a--;)s[a]=arguments[a];return l&&s.length===l.length&&s.every(function(c,f){return c===l[f]})||(l=s,o=n.apply(void 0,s)),o}}function charIsNumber(n){return!!(n||"").match(/\d/)}function isNil(n){return n==null}function isNanValue(n){return typeof n=="number"&&isNaN(n)}function isNotValidValue(n){return isNil(n)||isNanValue(n)||typeof n=="number"&&!isFinite(n)}function escapeRegExp(n){return n.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function getThousandsGroupRegex(n){switch(n){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function applyThousandSeparator(n,l,o){var s=getThousandsGroupRegex(o),a=n.search(/[1-9]/);return a=a===-1?n.length:a,n.substring(0,a)+n.substring(a,n.length).replace(s,"$1"+l)}function usePersistentCallback(n){var l=reactExports.useRef(n);l.current=n;var o=reactExports.useRef(function(){for(var s=[],a=arguments.length;a--;)s[a]=arguments[a];return l.current.apply(l,s)});return o.current}function splitDecimal(n,l){l===void 0&&(l=!0);var o=n[0]==="-",s=o&&l;n=n.replace("-","");var a=n.split("."),c=a[0],f=a[1]||"";return{beforeDecimal:c,afterDecimal:f,hasNegation:o,addNegation:s}}function fixLeadingZero(n){if(!n)return n;var l=n[0]==="-";l&&(n=n.substring(1,n.length));var o=n.split("."),s=o[0].replace(/^0+/,"")||"0",a=o[1]||"";return(l?"-":"")+s+(a?"."+a:"")}function limitToScale(n,l,o){for(var s="",a=o?"0":"",c=0;c<=l-1;c++)s+=n[c]||a;return s}function repeat(n,l){return Array(l+1).join(n)}function toNumericString(n){var l=n+"",o=l[0]==="-"?"-":"";o&&(l=l.substring(1));var s=l.split(/[eE]/g),a=s[0],c=s[1];if(c=Number(c),!c)return o+a;a=a.replace(".","");var f=1+c,m=a.length;return f<0?a="0."+repeat("0",Math.abs(f))+a:f>=m?a=a+repeat("0",f-m):a=(a.substring(0,f)||"0")+"."+a.substring(f),o+a}function roundToPrecision(n,l,o){if(["","-"].indexOf(n)!==-1)return n;var s=(n.indexOf(".")!==-1||o)&&l,a=splitDecimal(n),c=a.beforeDecimal,f=a.afterDecimal,m=a.hasNegation,h=parseFloat("0."+(f||"0")),g=f.length<=l?"0."+f:h.toFixed(l),_=g.split("."),y=c;c&&Number(_[0])&&(y=c.split("").reverse().reduce(function(A,k,R){return A.length>R?(Number(A[0])+Number(k)).toString()+A.substring(1,A.length):k+A},_[0]));var C=limitToScale(_[1]||"",l,o),D=m?"-":"",M=s?".":"";return""+D+y+M+C}function setCaretPosition(n,l){if(n.value=n.value,n!==null){if(n.createTextRange){var o=n.createTextRange();return o.move("character",l),o.select(),!0}return n.selectionStart||n.selectionStart===0?(n.focus(),n.setSelectionRange(l,l),!0):(n.focus(),!1)}}var findChangeRange=memoizeOnce(function(n,l){for(var o=0,s=0,a=n.length,c=l.length;n[o]===l[o]&&o<a;)o++;for(;n[a-1-s]===l[c-1-s]&&c-s>o&&a-s>o;)s++;return{from:{start:o,end:a-s},to:{start:o,end:c-s}}}),findChangedRangeFromCaretPositions=function(n,l){var o=Math.min(n.selectionStart,l);return{from:{start:o,end:n.selectionEnd},to:{start:o,end:l}}};function clamp(n,l,o){return Math.min(Math.max(n,l),o)}function geInputCaretPosition(n){return Math.max(n.selectionStart,n.selectionEnd)}function addInputMode(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function getDefaultChangeMeta(n){return{from:{start:0,end:0},to:{start:0,end:n.length},lastValue:""}}function defaultIsCharacterSame(n){var l=n.currentValue,o=n.formattedValue,s=n.currentValueIndex,a=n.formattedValueIndex;return l[s]===o[a]}function getCaretPosition(n,l,o,s,a,c,f){f===void 0&&(f=defaultIsCharacterSame);var m=a.findIndex(function(x){return x}),h=n.slice(0,m);!l&&!o.startsWith(h)&&(l=h,o=h+o,s=s+h.length);for(var g=o.length,_=n.length,y={},C=new Array(g),D=0;D<g;D++){C[D]=-1;for(var M=0,A=_;M<A;M++){var k=f({currentValue:o,lastValue:l,formattedValue:n,currentValueIndex:D,formattedValueIndex:M});if(k&&y[M]!==!0){C[D]=M,y[M]=!0;break}}}for(var R=s;R<g&&(C[R]===-1||!c(o[R]));)R++;var W=R===g||C[R]===-1?_:C[R];for(R=s-1;R>0&&C[R]===-1;)R--;var L=R===-1||C[R]===-1?0:C[R]+1;return L>W?W:s-L<W-s?L:W}function getCaretPosInBoundary(n,l,o,s){var a=n.length;if(l=clamp(l,0,a),s==="left"){for(;l>=0&&!o[l];)l--;l===-1&&(l=o.indexOf(!0))}else{for(;l<=a&&!o[l];)l++;l>a&&(l=o.lastIndexOf(!0))}return l===-1&&(l=a),l}function caretUnknownFormatBoundary(n){for(var l=Array.from({length:n.length+1}).map(function(){return!0}),o=0,s=l.length;o<s;o++)l[o]=!!(charIsNumber(n[o])||charIsNumber(n[o-1]));return l}function useInternalValues(n,l,o,s,a,c){c===void 0&&(c=noop$1);var f=usePersistentCallback(function(M,A){var k,R;return isNotValidValue(M)?(R="",k=""):typeof M=="number"||A?(R=typeof M=="number"?toNumericString(M):M,k=s(R)):(R=a(M,void 0),k=s(R)),{formattedValue:k,numAsString:R}}),m=reactExports.useState(function(){return f(isNil(n)?l:n,o)}),h=m[0],g=m[1],_=function(M,A){M.formattedValue!==h.formattedValue&&g({formattedValue:M.formattedValue,numAsString:M.value}),c(M,A)},y=n,C=o;isNil(n)&&(y=h.numAsString,C=!0);var D=f(y,C);return reactExports.useMemo(function(){g(D)},[D.formattedValue]),[h,_]}function defaultRemoveFormatting(n){return n.replace(/[^0-9]/g,"")}function defaultFormat(n){return n}function NumberFormatBase(n){var l=n.type;l===void 0&&(l="text");var o=n.displayType;o===void 0&&(o="input");var s=n.customInput,a=n.renderText,c=n.getInputRef,f=n.format;f===void 0&&(f=defaultFormat);var m=n.removeFormatting;m===void 0&&(m=defaultRemoveFormatting);var h=n.defaultValue,g=n.valueIsNumericString,_=n.onValueChange,y=n.isAllowed,C=n.onChange;C===void 0&&(C=noop$1);var D=n.onKeyDown;D===void 0&&(D=noop$1);var M=n.onMouseUp;M===void 0&&(M=noop$1);var A=n.onFocus;A===void 0&&(A=noop$1);var k=n.onBlur;k===void 0&&(k=noop$1);var R=n.value,W=n.getCaretBoundary;W===void 0&&(W=caretUnknownFormatBoundary);var L=n.isValidInputCharacter;L===void 0&&(L=charIsNumber);var x=n.isCharacterSame,E=__rest(n,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),O=useInternalValues(R,h,!!g,f,m,_),B=O[0],V=B.formattedValue,q=B.numAsString,S=O[1],z=reactExports.useRef(),te=reactExports.useRef({formattedValue:V,numAsString:q}),J=function(le,re){te.current={formattedValue:le.formattedValue,numAsString:le.value},S(le,re)},ge=reactExports.useState(!1),ne=ge[0],Y=ge[1],H=reactExports.useRef(null),X=reactExports.useRef({setCaretTimeout:null,focusTimeout:null});reactExports.useEffect(function(){return Y(!0),function(){clearTimeout(X.current.setCaretTimeout),clearTimeout(X.current.focusTimeout)}},[]);var ae=f,ee=function(le,re){var me=parseFloat(re);return{formattedValue:le,value:re,floatValue:isNaN(me)?void 0:me}},T=function(le,re,me){le.selectionStart===0&&le.selectionEnd===le.value.length||(setCaretPosition(le,re),X.current.setCaretTimeout=setTimeout(function(){le.value===me&&le.selectionStart!==re&&setCaretPosition(le,re)},0))},K=function(le,re,me){return getCaretPosInBoundary(le,re,W(le),me)},ue=function(le,re,me){var Se=W(re),Re=getCaretPosition(re,V,le,me,Se,L,x);return Re=getCaretPosInBoundary(re,Re,Se),Re},pe=function(le){var re=le.formattedValue;re===void 0&&(re="");var me=le.input,Se=le.source,Re=le.event,be=le.numAsString,xe;if(me){var et=le.inputValue||me.value,ft=geInputCaretPosition(me);me.value=re,xe=ue(et,re,ft),xe!==void 0&&T(me,xe,re)}re!==V&&J(ee(re,be),{event:Re,source:Se})};reactExports.useEffect(function(){var le=te.current,re=le.formattedValue,me=le.numAsString;(V!==re||q!==me)&&J(ee(V,q),{event:void 0,source:SourceType.props})},[V,q]);var fe=H.current?geInputCaretPosition(H.current):void 0,ye=typeof window<"u"?reactExports.useLayoutEffect:reactExports.useEffect;ye(function(){var le=H.current;if(V!==te.current.formattedValue&&le){var re=ue(te.current.formattedValue,V,fe);le.value=V,T(le,re,V)}},[V]);var we=function(le,re,me){var Se=re.target,Re=z.current?findChangedRangeFromCaretPositions(z.current,Se.selectionEnd):findChangeRange(V,le),be=Object.assign(Object.assign({},Re),{lastValue:V}),xe=m(le,be),et=ae(xe);if(xe=m(et,void 0),y&&!y(ee(et,xe))){var ft=re.target,mt=geInputCaretPosition(ft),wt=ue(le,V,mt);return ft.value=V,T(ft,wt,V),!1}return pe({formattedValue:et,numAsString:xe,inputValue:le,event:re,source:me,input:re.target}),!0},he=function(le,re){re===void 0&&(re=0);var me=le.selectionStart,Se=le.selectionEnd;z.current={selectionStart:me,selectionEnd:Se+re}},Me=function(le){var re=le.target,me=re.value,Se=we(me,le,SourceType.event);Se&&C(le),z.current=void 0},Ve=function(le){var re=le.target,me=le.key,Se=re.selectionStart,Re=re.selectionEnd,be=re.value;be===void 0&&(be="");var xe;me==="ArrowLeft"||me==="Backspace"?xe=Math.max(Se-1,0):me==="ArrowRight"?xe=Math.min(Se+1,be.length):me==="Delete"&&(xe=Se);var et=0;me==="Delete"&&Se===Re&&(et=1);var ft=me==="ArrowLeft"||me==="ArrowRight";if(xe===void 0||Se!==Re&&!ft){D(le),he(re,et);return}var mt=xe;if(ft){var wt=me==="ArrowLeft"?"left":"right";mt=K(be,xe,wt),mt!==xe&&le.preventDefault()}else me==="Delete"&&!L(be[xe])?mt=K(be,xe,"right"):me==="Backspace"&&!L(be[xe])&&(mt=K(be,xe,"left"));mt!==xe&&T(re,mt,be),D(le),he(re,et)},it=function(le){var re=le.target,me=function(){var Se=re.selectionStart,Re=re.selectionEnd,be=re.value;if(be===void 0&&(be=""),Se===Re){var xe=K(be,Se);xe!==Se&&T(re,xe,be)}};me(),requestAnimationFrame(function(){me()}),M(le),he(re)},We=function(le){le.persist&&le.persist();var re=le.target,me=le.currentTarget;H.current=re,X.current.focusTimeout=setTimeout(function(){var Se=re.selectionStart,Re=re.selectionEnd,be=re.value;be===void 0&&(be="");var xe=K(be,Se);xe!==Se&&!(Se===0&&Re===be.length)&&T(re,xe,be),A(Object.assign(Object.assign({},le),{currentTarget:me}))},0)},st=function(le){H.current=null,clearTimeout(X.current.focusTimeout),clearTimeout(X.current.setCaretTimeout),k(le)},Ye=ne&&addInputMode()?"numeric":void 0,Xe=Object.assign({inputMode:Ye},E,{type:l,value:V,onChange:Me,onKeyDown:Ve,onMouseUp:it,onFocus:We,onBlur:st});if(o==="text")return a?React.createElement(React.Fragment,null,a(V,E)||null):React.createElement("span",Object.assign({},E,{ref:c}),V);if(s){var Lt=s;return React.createElement(Lt,Object.assign({},Xe,{ref:c}))}return React.createElement("input",Object.assign({},Xe,{ref:c}))}function format(n,l){var o=l.decimalScale,s=l.fixedDecimalScale,a=l.prefix;a===void 0&&(a="");var c=l.suffix;c===void 0&&(c="");var f=l.allowNegative,m=l.thousandsGroupStyle;if(m===void 0&&(m="thousand"),n===""||n==="-")return n;var h=getSeparators(l),g=h.thousandSeparator,_=h.decimalSeparator,y=o!==0&&n.indexOf(".")!==-1||o&&s,C=splitDecimal(n,f),D=C.beforeDecimal,M=C.afterDecimal,A=C.addNegation;return o!==void 0&&(M=limitToScale(M,o,!!s)),g&&(D=applyThousandSeparator(D,g,m)),a&&(D=a+D),c&&(M=M+c),A&&(D="-"+D),n=D+(y&&_||"")+M,n}function getSeparators(n){var l=n.decimalSeparator;l===void 0&&(l=".");var o=n.thousandSeparator,s=n.allowedDecimalSeparators;return o===!0&&(o=","),s||(s=[l,"."]),{decimalSeparator:l,thousandSeparator:o,allowedDecimalSeparators:s}}function handleNegation(n,l){n===void 0&&(n="");var o=new RegExp("(-)"),s=new RegExp("(-)(.)*(-)"),a=o.test(n),c=s.test(n);return n=n.replace(/-/g,""),a&&!c&&l&&(n="-"+n),n}function getNumberRegex(n,l){return new RegExp("(^-)|[0-9]|"+escapeRegExp(n),"g")}function isNumericString(n,l,o){return n===""?!0:!l?.match(/\d/)&&!o?.match(/\d/)&&typeof n=="string"&&!isNaN(Number(n))}function removeFormatting(n,l,o){var s;l===void 0&&(l=getDefaultChangeMeta(n));var a=o.allowNegative,c=o.prefix;c===void 0&&(c="");var f=o.suffix;f===void 0&&(f="");var m=o.decimalScale,h=l.from,g=l.to,_=g.start,y=g.end,C=getSeparators(o),D=C.allowedDecimalSeparators,M=C.decimalSeparator,A=n[y]===M;if(charIsNumber(n)&&(n===c||n===f)&&l.lastValue==="")return n;if(y-_===1&&D.indexOf(n[_])!==-1){var k=m===0?"":M;n=n.substring(0,_)+k+n.substring(_+1,n.length)}var R=function(H,X,ae){var ee=!1,T=!1;c.startsWith("-")?ee=!1:H.startsWith("--")?(ee=!1,T=!0):f.startsWith("-")&&H.length===f.length?ee=!1:H[0]==="-"&&(ee=!0);var K=ee?1:0;return T&&(K=2),K&&(H=H.substring(K),X-=K,ae-=K),{value:H,start:X,end:ae,hasNegation:ee}},W=R(n,_,y),L=W.hasNegation;s=W,n=s.value,_=s.start,y=s.end;var x=R(l.lastValue,h.start,h.end),E=x.start,O=x.end,B=x.value,V=n.substring(_,y);n.length&&B.length&&(E>B.length-f.length||O<c.length)&&!(V&&f.startsWith(V))&&(n=B);var q=0;n.startsWith(c)?q+=c.length:_<c.length&&(q=_),n=n.substring(q),y-=q;var S=n.length,z=n.length-f.length;n.endsWith(f)?S=z:(y>z||y>n.length-f.length)&&(S=y),n=n.substring(0,S),n=handleNegation(L?"-"+n:n,a),n=(n.match(getNumberRegex(M))||[]).join("");var te=n.indexOf(M);n=n.replace(new RegExp(escapeRegExp(M),"g"),function(H,X){return X===te?".":""});var J=splitDecimal(n,a),ge=J.beforeDecimal,ne=J.afterDecimal,Y=J.addNegation;return g.end-g.start<h.end-h.start&&ge===""&&A&&!parseFloat(ne)&&(n=Y?"-":""),n}function getCaretBoundary(n,l){var o=l.prefix;o===void 0&&(o="");var s=l.suffix;s===void 0&&(s="");var a=Array.from({length:n.length+1}).map(function(){return!0}),c=n[0]==="-";a.fill(!1,0,o.length+(c?1:0));var f=n.length;return a.fill(!1,f-s.length+1,f+1),a}function validateAndUpdateProps(n){var l=getSeparators(n),o=l.thousandSeparator,s=l.decimalSeparator,a=n.prefix;a===void 0&&(a="");var c=n.allowNegative;if(c===void 0&&(c=!0),o===s)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+o+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+s+` (default value for decimalSeparator is .)
     `);return a.startsWith("-")&&c&&(console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+a+`
      allowNegative: `+c+`
    `),c=!1),Object.assign(Object.assign({},n),{allowNegative:c})}function useNumericFormat(n){n=validateAndUpdateProps(n),n.decimalSeparator,n.allowedDecimalSeparators,n.thousandsGroupStyle;var l=n.suffix,o=n.allowNegative,s=n.allowLeadingZeros,a=n.onKeyDown;a===void 0&&(a=noop$1);var c=n.onBlur;c===void 0&&(c=noop$1);var f=n.thousandSeparator,m=n.decimalScale,h=n.fixedDecimalScale,g=n.prefix;g===void 0&&(g="");var _=n.defaultValue,y=n.value,C=n.valueIsNumericString,D=n.onValueChange,M=__rest(n,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),A=getSeparators(n),k=A.decimalSeparator,R=A.allowedDecimalSeparators,W=function(Y){return format(Y,n)},L=function(Y,H){return removeFormatting(Y,H,n)},x=isNil(y)?_:y,E=C??isNumericString(x,g,l);isNil(y)?isNil(_)||(E=E||typeof _=="number"):E=E||typeof y=="number";var O=function(Y){return isNotValidValue(Y)?Y:(typeof Y=="number"&&(Y=toNumericString(Y)),E&&typeof m=="number"?roundToPrecision(Y,m,!!h):Y)},B=useInternalValues(O(y),O(_),!!E,W,L,D),V=B[0],q=V.numAsString,S=V.formattedValue,z=B[1],te=function(Y){var H=Y.target,X=Y.key,ae=H.selectionStart,ee=H.selectionEnd,T=H.value;if(T===void 0&&(T=""),(X==="Backspace"||X==="Delete")&&ee<g.length){Y.preventDefault();return}if(ae!==ee){a(Y);return}X==="Backspace"&&T[0]==="-"&&ae===g.length+1&&o&&setCaretPosition(H,1),m&&h&&(X==="Backspace"&&T[ae-1]===k?(setCaretPosition(H,ae-1),Y.preventDefault()):X==="Delete"&&T[ae]===k&&Y.preventDefault()),R?.includes(X)&&T[ae]===k&&setCaretPosition(H,ae+1);var K=f===!0?",":f;X==="Backspace"&&T[ae-1]===K&&setCaretPosition(H,ae-1),X==="Delete"&&T[ae]===K&&setCaretPosition(H,ae+1),a(Y)},J=function(Y){var H=q;if(H.match(/\d/g)||(H=""),s||(H=fixLeadingZero(H)),h&&m&&(H=roundToPrecision(H,m,h)),H!==q){var X=format(H,n);z({formattedValue:X,value:H,floatValue:parseFloat(H)},{event:Y,source:SourceType.event})}c(Y)},ge=function(Y){return Y===k?!0:charIsNumber(Y)},ne=function(Y){var H=Y.currentValue,X=Y.lastValue,ae=Y.formattedValue,ee=Y.currentValueIndex,T=Y.formattedValueIndex,K=H[ee],ue=ae[T],pe=findChangeRange(X,H),fe=pe.to,ye=function(we){return L(we).indexOf(".")+g.length};return y===0&&h&&m&&H[fe.start]===k&&ye(H)<ee&&ye(ae)>T?!1:ee>=fe.start&&ee<fe.end&&R&&R.includes(K)&&ue===k?!0:K===ue};return Object.assign(Object.assign({},M),{value:S,valueIsNumericString:!1,isValidInputCharacter:ge,isCharacterSame:ne,onValueChange:z,format:W,removeFormatting:L,getCaretBoundary:function(Y){return getCaretBoundary(Y,n)},onKeyDown:te,onBlur:J})}function NumericFormat(n){var l=useNumericFormat(n);return React.createElement(NumberFormatBase,Object.assign({},l))}const memoTheme=unstable_memoTheme;function useDefaultProps(n){return useDefaultProps$1(n)}function ownerDocument(n){return n&&n.ownerDocument||document}function setRef(n,l){typeof n=="function"?n(l):n&&(n.current=l)}function useControlled(n){const{controlled:l,default:o}=n,{current:s}=reactExports.useRef(l!==void 0),[a,c]=reactExports.useState(o),f=s?l:a,m=reactExports.useCallback(h=>{s||c(h)},[]);return[f,m]}function useEventCallback(n){const l=reactExports.useRef(n);return useEnhancedEffect(()=>{l.current=n}),reactExports.useRef((...o)=>(0,l.current)(...o)).current}function useForkRef(...n){const l=reactExports.useRef(void 0),o=reactExports.useCallback(s=>{const a=n.map(c=>{if(c==null)return null;if(typeof c=="function"){const f=c,m=f(s);return typeof m=="function"?m:()=>{f(null)}}return c.current=s,()=>{c.current=null}});return()=>{a.forEach(c=>c?.())}},n);return reactExports.useMemo(()=>n.every(s=>s==null)?null:s=>{l.current&&(l.current(),l.current=void 0),s!=null&&(l.current=o(s))},n)}const config={disabled:!1},TransitionGroupContext=React.createContext(null);var forceReflow=function(l){return l.scrollTop},UNMOUNTED="unmounted",EXITED="exited",ENTERING="entering",ENTERED="entered",EXITING="exiting",Transition=function(n){_inheritsLoose(l,n);function l(s,a){var c;c=n.call(this,s,a)||this;var f=a,m=f&&!f.isMounting?s.enter:s.appear,h;return c.appearStatus=null,s.in?m?(h=EXITED,c.appearStatus=ENTERING):h=ENTERED:s.unmountOnExit||s.mountOnEnter?h=UNMOUNTED:h=EXITED,c.state={status:h},c.nextCallback=null,c}l.getDerivedStateFromProps=function(a,c){var f=a.in;return f&&c.status===UNMOUNTED?{status:EXITED}:null};var o=l.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(a){var c=null;if(a!==this.props){var f=this.state.status;this.props.in?f!==ENTERING&&f!==ENTERED&&(c=ENTERING):(f===ENTERING||f===ENTERED)&&(c=EXITING)}this.updateStatus(!1,c)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var a=this.props.timeout,c,f,m;return c=f=m=a,a!=null&&typeof a!="number"&&(c=a.exit,f=a.enter,m=a.appear!==void 0?a.appear:f),{exit:c,enter:f,appear:m}},o.updateStatus=function(a,c){if(a===void 0&&(a=!1),c!==null)if(this.cancelNextCallback(),c===ENTERING){if(this.props.unmountOnExit||this.props.mountOnEnter){var f=this.props.nodeRef?this.props.nodeRef.current:ReactDOM.findDOMNode(this);f&&forceReflow(f)}this.performEnter(a)}else this.performExit();else this.props.unmountOnExit&&this.state.status===EXITED&&this.setState({status:UNMOUNTED})},o.performEnter=function(a){var c=this,f=this.props.enter,m=this.context?this.context.isMounting:a,h=this.props.nodeRef?[m]:[ReactDOM.findDOMNode(this),m],g=h[0],_=h[1],y=this.getTimeouts(),C=m?y.appear:y.enter;if(!a&&!f||config.disabled){this.safeSetState({status:ENTERED},function(){c.props.onEntered(g)});return}this.props.onEnter(g,_),this.safeSetState({status:ENTERING},function(){c.props.onEntering(g,_),c.onTransitionEnd(C,function(){c.safeSetState({status:ENTERED},function(){c.props.onEntered(g,_)})})})},o.performExit=function(){var a=this,c=this.props.exit,f=this.getTimeouts(),m=this.props.nodeRef?void 0:ReactDOM.findDOMNode(this);if(!c||config.disabled){this.safeSetState({status:EXITED},function(){a.props.onExited(m)});return}this.props.onExit(m),this.safeSetState({status:EXITING},function(){a.props.onExiting(m),a.onTransitionEnd(f.exit,function(){a.safeSetState({status:EXITED},function(){a.props.onExited(m)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(a,c){c=this.setNextCallback(c),this.setState(a,c)},o.setNextCallback=function(a){var c=this,f=!0;return this.nextCallback=function(m){f&&(f=!1,c.nextCallback=null,a(m))},this.nextCallback.cancel=function(){f=!1},this.nextCallback},o.onTransitionEnd=function(a,c){this.setNextCallback(c);var f=this.props.nodeRef?this.props.nodeRef.current:ReactDOM.findDOMNode(this),m=a==null&&!this.props.addEndListener;if(!f||m){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var h=this.props.nodeRef?[this.nextCallback]:[f,this.nextCallback],g=h[0],_=h[1];this.props.addEndListener(g,_)}a!=null&&setTimeout(this.nextCallback,a)},o.render=function(){var a=this.state.status;if(a===UNMOUNTED)return null;var c=this.props,f=c.children;c.in,c.mountOnEnter,c.unmountOnExit,c.appear,c.enter,c.exit,c.timeout,c.addEndListener,c.onEnter,c.onEntering,c.onEntered,c.onExit,c.onExiting,c.onExited,c.nodeRef;var m=_objectWithoutPropertiesLoose(c,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return React.createElement(TransitionGroupContext.Provider,{value:null},typeof f=="function"?f(a,m):React.cloneElement(React.Children.only(f),m))},l}(React.Component);Transition.contextType=TransitionGroupContext;Transition.propTypes={};function noop(){}Transition.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:noop,onEntering:noop,onEntered:noop,onExit:noop,onExiting:noop,onExited:noop};Transition.UNMOUNTED=UNMOUNTED;Transition.EXITED=EXITED;Transition.ENTERING=ENTERING;Transition.ENTERED=ENTERED;Transition.EXITING=EXITING;const UNINITIALIZED={};function useLazyRef(n,l){const o=reactExports.useRef(UNINITIALIZED);return o.current===UNINITIALIZED&&(o.current=n(l)),o}const EMPTY=[];function useOnMount(n){reactExports.useEffect(n,EMPTY)}class Timeout{static create(){return new Timeout}currentId=null;start(l,o){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,o()},l)}clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear}function useTimeout(){const n=useLazyRef(Timeout.create).current;return useOnMount(n.disposeEffect),n}const reflow=n=>n.scrollTop;function getTransitionProps(n,l){const{timeout:o,easing:s,style:a={}}=n;return{duration:a.transitionDuration??(typeof o=="number"?o:o[l.mode]||0),easing:a.transitionTimingFunction??(typeof s=="object"?s[l.mode]:s),delay:a.transitionDelay}}function isHostComponent(n){return typeof n=="string"}function appendOwnerState(n,l,o){return n===void 0||isHostComponent(n)?l:{...l,ownerState:{...l.ownerState,...o}}}function resolveComponentProps(n,l,o){return typeof n=="function"?n(l,o):n}function extractEventHandlers(n,l=[]){if(n===void 0)return{};const o={};return Object.keys(n).filter(s=>s.match(/^on[A-Z]/)&&typeof n[s]=="function"&&!l.includes(s)).forEach(s=>{o[s]=n[s]}),o}function omitEventHandlers(n){if(n===void 0)return{};const l={};return Object.keys(n).filter(o=>!(o.match(/^on[A-Z]/)&&typeof n[o]=="function")).forEach(o=>{l[o]=n[o]}),l}function mergeSlotProps(n){const{getSlotProps:l,additionalProps:o,externalSlotProps:s,externalForwardedProps:a,className:c}=n;if(!l){const D=clsx(o?.className,c,a?.className,s?.className),M={...o?.style,...a?.style,...s?.style},A={...o,...a,...s};return D.length>0&&(A.className=D),Object.keys(M).length>0&&(A.style=M),{props:A,internalRef:void 0}}const f=extractEventHandlers({...a,...s}),m=omitEventHandlers(s),h=omitEventHandlers(a),g=l(f),_=clsx(g?.className,o?.className,c,a?.className,s?.className),y={...g?.style,...o?.style,...a?.style,...s?.style},C={...g,...o,...h,...m};return _.length>0&&(C.className=_),Object.keys(y).length>0&&(C.style=y),{props:C,internalRef:g.ref}}function useSlot(n,l){const{className:o,elementType:s,ownerState:a,externalForwardedProps:c,internalForwardedProps:f,shouldForwardComponentProp:m=!1,...h}=l,{component:g,slots:_={[n]:void 0},slotProps:y={[n]:void 0},...C}=c,D=_[n]||s,M=resolveComponentProps(y[n],a),{props:{component:A,...k},internalRef:R}=mergeSlotProps({className:o,...h,externalForwardedProps:n==="root"?C:void 0,externalSlotProps:M}),W=useForkRef(R,M?.ref,l.ref),L=n==="root"?A||g:A,x=appendOwnerState(D,{...n==="root"&&!g&&!_[n]&&f,...n!=="root"&&!_[n]&&f,...k,...L&&!m&&{as:L},...L&&m&&{component:L},ref:W},a);return[D,x]}function isFocusVisible(n){try{return n.matches(":focus-visible")}catch{}return!1}function useSlotProps(n){const{elementType:l,externalSlotProps:o,ownerState:s,skipResolvingSlotProps:a=!1,...c}=n,f=a?{}:resolveComponentProps(o,s),{props:m,internalRef:h}=mergeSlotProps({...c,externalSlotProps:f}),g=useForkRef(h,f?.ref,n.additionalProps?.ref);return appendOwnerState(l,{...m,ref:g},s)}function getReactElementRef(n){return parseInt(reactExports.version,10)>=19?n?.props?.ref||null:n?.ref||null}function getContainer(n){return typeof n=="function"?n():n}const Portal=reactExports.forwardRef(function(l,o){const{children:s,container:a,disablePortal:c=!1}=l,[f,m]=reactExports.useState(null),h=useForkRef(reactExports.isValidElement(s)?getReactElementRef(s):null,o);if(useEnhancedEffect(()=>{c||m(getContainer(a)||document.body)},[a,c]),useEnhancedEffect(()=>{if(f&&!c)return setRef(o,f),()=>{setRef(o,null)}},[o,f,c]),c){if(reactExports.isValidElement(s)){const g={ref:h};return reactExports.cloneElement(s,g)}return s}return f&&reactDomExports.createPortal(s,f)});function getPopperUtilityClass(n){return generateUtilityClass("MuiPopper",n)}generateUtilityClasses("MuiPopper",["root"]);function flipPlacement(n,l){if(l==="ltr")return n;switch(n){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return n}}function resolveAnchorEl(n){return typeof n=="function"?n():n}function isHTMLElement(n){return n.nodeType!==void 0}const useUtilityClasses$1=n=>{const{classes:l}=n;return composeClasses({root:["root"]},getPopperUtilityClass,l)},defaultPopperOptions={},PopperTooltip=reactExports.forwardRef(function(l,o){const{anchorEl:s,children:a,direction:c,disablePortal:f,modifiers:m,open:h,placement:g,popperOptions:_,popperRef:y,slotProps:C={},slots:D={},TransitionProps:M,ownerState:A,...k}=l,R=reactExports.useRef(null),W=useForkRef(R,o),L=reactExports.useRef(null),x=useForkRef(L,y),E=reactExports.useRef(x);useEnhancedEffect(()=>{E.current=x},[x]),reactExports.useImperativeHandle(y,()=>L.current,[]);const O=flipPlacement(g,c),[B,V]=reactExports.useState(O),[q,S]=reactExports.useState(resolveAnchorEl(s));reactExports.useEffect(()=>{L.current&&L.current.forceUpdate()}),reactExports.useEffect(()=>{s&&S(resolveAnchorEl(s))},[s]),useEnhancedEffect(()=>{if(!q||!h)return;const ne=X=>{V(X.placement)};let Y=[{name:"preventOverflow",options:{altBoundary:f}},{name:"flip",options:{altBoundary:f}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:X})=>{ne(X)}}];m!=null&&(Y=Y.concat(m)),_&&_.modifiers!=null&&(Y=Y.concat(_.modifiers));const H=createPopper(q,R.current,{placement:O,..._,modifiers:Y});return E.current(H),()=>{H.destroy(),E.current(null)}},[q,f,m,h,_,O]);const z={placement:B};M!==null&&(z.TransitionProps=M);const te=useUtilityClasses$1(l),J=D.root??"div",ge=useSlotProps({elementType:J,externalSlotProps:C.root,externalForwardedProps:k,additionalProps:{role:"tooltip",ref:W},ownerState:l,className:te.root});return jsxRuntimeExports.jsx(J,{...ge,children:typeof a=="function"?a(z):a})}),Popper$1=reactExports.forwardRef(function(l,o){const{anchorEl:s,children:a,container:c,direction:f="ltr",disablePortal:m=!1,keepMounted:h=!1,modifiers:g,open:_,placement:y="bottom",popperOptions:C=defaultPopperOptions,popperRef:D,style:M,transition:A=!1,slotProps:k={},slots:R={},...W}=l,[L,x]=reactExports.useState(!0),E=()=>{x(!1)},O=()=>{x(!0)};if(!h&&!_&&(!A||L))return null;let B;if(c)B=c;else if(s){const S=resolveAnchorEl(s);B=S&&isHTMLElement(S)?ownerDocument(S).body:ownerDocument(null).body}const V=!_&&h&&(!A||L)?"none":void 0,q=A?{in:_,onEnter:E,onExited:O}:void 0;return jsxRuntimeExports.jsx(Portal,{disablePortal:m,container:B,children:jsxRuntimeExports.jsx(PopperTooltip,{anchorEl:s,direction:f,disablePortal:m,modifiers:g,ref:o,open:A?!L:_,placement:y,popperOptions:C,popperRef:D,slotProps:k,slots:R,...W,style:{position:"fixed",top:0,left:0,display:V,...M},TransitionProps:q,children:a})})}),PopperRoot=styled(Popper$1,{name:"MuiPopper",slot:"Root"})({}),Popper=reactExports.forwardRef(function(l,o){const s=useRtl(),a=useDefaultProps({props:l,name:"MuiPopper"}),{anchorEl:c,component:f,components:m,componentsProps:h,container:g,disablePortal:_,keepMounted:y,modifiers:C,open:D,placement:M,popperOptions:A,popperRef:k,transition:R,slots:W,slotProps:L,...x}=a,E=W?.root??m?.Root,O={anchorEl:c,container:g,disablePortal:_,keepMounted:y,modifiers:C,open:D,placement:M,popperOptions:A,popperRef:k,transition:R,...x};return jsxRuntimeExports.jsx(PopperRoot,{as:f,direction:s?"rtl":"ltr",slots:{root:E},slotProps:L??h,...O,ref:o})});function getScale(n){return`scale(${n}, ${n**2})`}const styles={entering:{opacity:1,transform:getScale(1)},entered:{opacity:1,transform:"none"}},isWebKit154=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Grow=reactExports.forwardRef(function(l,o){const{addEndListener:s,appear:a=!0,children:c,easing:f,in:m,onEnter:h,onEntered:g,onEntering:_,onExit:y,onExited:C,onExiting:D,style:M,timeout:A="auto",TransitionComponent:k=Transition,...R}=l,W=useTimeout(),L=reactExports.useRef(),x=useTheme(),E=reactExports.useRef(null),O=useForkRef(E,getReactElementRef(c),o),B=ne=>Y=>{if(ne){const H=E.current;Y===void 0?ne(H):ne(H,Y)}},V=B(_),q=B((ne,Y)=>{reflow(ne);const{duration:H,delay:X,easing:ae}=getTransitionProps({style:M,timeout:A,easing:f},{mode:"enter"});let ee;A==="auto"?(ee=x.transitions.getAutoHeightDuration(ne.clientHeight),L.current=ee):ee=H,ne.style.transition=[x.transitions.create("opacity",{duration:ee,delay:X}),x.transitions.create("transform",{duration:isWebKit154?ee:ee*.666,delay:X,easing:ae})].join(","),h&&h(ne,Y)}),S=B(g),z=B(D),te=B(ne=>{const{duration:Y,delay:H,easing:X}=getTransitionProps({style:M,timeout:A,easing:f},{mode:"exit"});let ae;A==="auto"?(ae=x.transitions.getAutoHeightDuration(ne.clientHeight),L.current=ae):ae=Y,ne.style.transition=[x.transitions.create("opacity",{duration:ae,delay:H}),x.transitions.create("transform",{duration:isWebKit154?ae:ae*.666,delay:isWebKit154?H:H||ae*.333,easing:X})].join(","),ne.style.opacity=0,ne.style.transform=getScale(.75),y&&y(ne)}),J=B(C),ge=ne=>{A==="auto"&&W.start(L.current||0,ne),s&&s(E.current,ne)};return jsxRuntimeExports.jsx(k,{appear:a,in:m,nodeRef:E,onEnter:q,onEntered:S,onEntering:V,onExit:te,onExited:J,onExiting:z,addEndListener:ge,timeout:A==="auto"?null:A,...R,children:(ne,{ownerState:Y,...H})=>reactExports.cloneElement(c,{style:{opacity:0,transform:getScale(.75),visibility:ne==="exited"&&!m?"hidden":void 0,...styles[ne],...M,...c.props.style},ref:O,...H})})});Grow&&(Grow.muiSupportAuto=!0);function getTooltipUtilityClass(n){return generateUtilityClass("MuiTooltip",n)}const tooltipClasses=generateUtilityClasses("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);function round(n){return Math.round(n*1e5)/1e5}const useUtilityClasses=n=>{const{classes:l,disableInteractive:o,arrow:s,touch:a,placement:c}=n,f={popper:["popper",!o&&"popperInteractive",s&&"popperArrow"],tooltip:["tooltip",s&&"tooltipArrow",a&&"touch",`tooltipPlacement${capitalize(c.split("-")[0])}`],arrow:["arrow"]};return composeClasses(f,getTooltipUtilityClass,l)},TooltipPopper=styled(Popper,{name:"MuiTooltip",slot:"Popper",overridesResolver:(n,l)=>{const{ownerState:o}=n;return[l.popper,!o.disableInteractive&&l.popperInteractive,o.arrow&&l.popperArrow,!o.open&&l.popperClose]}})(memoTheme(({theme:n})=>({zIndex:(n.vars||n).zIndex.tooltip,pointerEvents:"none",variants:[{props:({ownerState:l})=>!l.disableInteractive,style:{pointerEvents:"auto"}},{props:({open:l})=>!l,style:{pointerEvents:"none"}},{props:({ownerState:l})=>l.arrow,style:{[`&[data-popper-placement*="bottom"] .${tooltipClasses.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${tooltipClasses.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${tooltipClasses.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}},[`&[data-popper-placement*="left"] .${tooltipClasses.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}}}},{props:({ownerState:l})=>l.arrow&&!l.isRtl,style:{[`&[data-popper-placement*="right"] .${tooltipClasses.arrow}`]:{left:0,marginLeft:"-0.71em"}}},{props:({ownerState:l})=>l.arrow&&!!l.isRtl,style:{[`&[data-popper-placement*="right"] .${tooltipClasses.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:l})=>l.arrow&&!l.isRtl,style:{[`&[data-popper-placement*="left"] .${tooltipClasses.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:l})=>l.arrow&&!!l.isRtl,style:{[`&[data-popper-placement*="left"] .${tooltipClasses.arrow}`]:{left:0,marginLeft:"-0.71em"}}}]}))),TooltipTooltip=styled("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(n,l)=>{const{ownerState:o}=n;return[l.tooltip,o.touch&&l.touch,o.arrow&&l.tooltipArrow,l[`tooltipPlacement${capitalize(o.placement.split("-")[0])}`]]}})(memoTheme(({theme:n})=>({backgroundColor:n.vars?n.vars.palette.Tooltip.bg:alpha(n.palette.grey[700],.92),borderRadius:(n.vars||n).shape.borderRadius,color:(n.vars||n).palette.common.white,fontFamily:n.typography.fontFamily,padding:"4px 8px",fontSize:n.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:n.typography.fontWeightMedium,[`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]:{transformOrigin:"right center"},[`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]:{transformOrigin:"left center"},[`.${tooltipClasses.popper}[data-popper-placement*="top"] &`]:{transformOrigin:"center bottom",marginBottom:"14px"},[`.${tooltipClasses.popper}[data-popper-placement*="bottom"] &`]:{transformOrigin:"center top",marginTop:"14px"},variants:[{props:({ownerState:l})=>l.arrow,style:{position:"relative",margin:0}},{props:({ownerState:l})=>l.touch,style:{padding:"8px 16px",fontSize:n.typography.pxToRem(14),lineHeight:`${round(16/14)}em`,fontWeight:n.typography.fontWeightRegular}},{props:({ownerState:l})=>!l.isRtl,style:{[`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]:{marginRight:"14px"},[`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]:{marginLeft:"14px"}}},{props:({ownerState:l})=>!l.isRtl&&l.touch,style:{[`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]:{marginRight:"24px"},[`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]:{marginLeft:"24px"}}},{props:({ownerState:l})=>!!l.isRtl,style:{[`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]:{marginLeft:"14px"},[`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]:{marginRight:"14px"}}},{props:({ownerState:l})=>!!l.isRtl&&l.touch,style:{[`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]:{marginLeft:"24px"},[`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]:{marginRight:"24px"}}},{props:({ownerState:l})=>l.touch,style:{[`.${tooltipClasses.popper}[data-popper-placement*="top"] &`]:{marginBottom:"24px"}}},{props:({ownerState:l})=>l.touch,style:{[`.${tooltipClasses.popper}[data-popper-placement*="bottom"] &`]:{marginTop:"24px"}}}]}))),TooltipArrow=styled("span",{name:"MuiTooltip",slot:"Arrow"})(memoTheme(({theme:n})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:n.vars?n.vars.palette.Tooltip.bg:alpha(n.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let hystersisOpen=!1;const hystersisTimer=new Timeout;let cursorPosition={x:0,y:0};function composeEventHandler(n,l){return(o,...s)=>{l&&l(o,...s),n(o,...s)}}const Tooltip=reactExports.forwardRef(function(l,o){const s=useDefaultProps({props:l,name:"MuiTooltip"}),{arrow:a=!1,children:c,classes:f,components:m={},componentsProps:h={},describeChild:g=!1,disableFocusListener:_=!1,disableHoverListener:y=!1,disableInteractive:C=!1,disableTouchListener:D=!1,enterDelay:M=100,enterNextDelay:A=0,enterTouchDelay:k=700,followCursor:R=!1,id:W,leaveDelay:L=0,leaveTouchDelay:x=1500,onClose:E,onOpen:O,open:B,placement:V="bottom",PopperComponent:q,PopperProps:S={},slotProps:z={},slots:te={},title:J,TransitionComponent:ge,TransitionProps:ne,...Y}=s,H=reactExports.isValidElement(c)?c:jsxRuntimeExports.jsx("span",{children:c}),X=useTheme(),ae=useRtl(),[ee,T]=reactExports.useState(),[K,ue]=reactExports.useState(null),pe=reactExports.useRef(!1),fe=C||R,ye=useTimeout(),we=useTimeout(),he=useTimeout(),Me=useTimeout(),[Ve,it]=useControlled({controlled:B,default:!1});let We=Ve;const st=useId(W),Ye=reactExports.useRef(),Xe=useEventCallback(()=>{Ye.current!==void 0&&(document.body.style.WebkitUserSelect=Ye.current,Ye.current=void 0),Me.clear()});reactExports.useEffect(()=>Xe,[Xe]);const Lt=Ce=>{hystersisTimer.clear(),hystersisOpen=!0,it(!0),O&&!We&&O(Ce)},le=useEventCallback(Ce=>{hystersisTimer.start(800+L,()=>{hystersisOpen=!1}),it(!1),E&&We&&E(Ce),ye.start(X.transitions.duration.shortest,()=>{pe.current=!1})}),re=Ce=>{pe.current&&Ce.type!=="touchstart"||(ee&&ee.removeAttribute("title"),we.clear(),he.clear(),M||hystersisOpen&&A?we.start(hystersisOpen?A:M,()=>{Lt(Ce)}):Lt(Ce))},me=Ce=>{we.clear(),he.start(L,()=>{le(Ce)})},[,Se]=reactExports.useState(!1),Re=Ce=>{isFocusVisible(Ce.target)||(Se(!1),me(Ce))},be=Ce=>{ee||T(Ce.currentTarget),isFocusVisible(Ce.target)&&(Se(!0),re(Ce))},xe=Ce=>{pe.current=!0;const _t=H.props;_t.onTouchStart&&_t.onTouchStart(Ce)},et=Ce=>{xe(Ce),he.clear(),ye.clear(),Xe(),Ye.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Me.start(k,()=>{document.body.style.WebkitUserSelect=Ye.current,re(Ce)})},ft=Ce=>{H.props.onTouchEnd&&H.props.onTouchEnd(Ce),Xe(),he.start(x,()=>{le(Ce)})};reactExports.useEffect(()=>{if(!We)return;function Ce(_t){_t.key==="Escape"&&le(_t)}return document.addEventListener("keydown",Ce),()=>{document.removeEventListener("keydown",Ce)}},[le,We]);const mt=useForkRef(getReactElementRef(H),T,o);!J&&J!==0&&(We=!1);const wt=reactExports.useRef(),dn=Ce=>{const _t=H.props;_t.onMouseMove&&_t.onMouseMove(Ce),cursorPosition={x:Ce.clientX,y:Ce.clientY},wt.current&&wt.current.update()},qt={},Bt=typeof J=="string";g?(qt.title=!We&&Bt&&!y?J:null,qt["aria-describedby"]=We?st:null):(qt["aria-label"]=Bt?J:null,qt["aria-labelledby"]=We&&!Bt?st:null);const Ge={...qt,...Y,...H.props,className:clsx(Y.className,H.props.className),onTouchStart:xe,ref:mt,...R?{onMouseMove:dn}:{}},Xt={};D||(Ge.onTouchStart=et,Ge.onTouchEnd=ft),y||(Ge.onMouseOver=composeEventHandler(re,Ge.onMouseOver),Ge.onMouseLeave=composeEventHandler(me,Ge.onMouseLeave),fe||(Xt.onMouseOver=re,Xt.onMouseLeave=me)),_||(Ge.onFocus=composeEventHandler(be,Ge.onFocus),Ge.onBlur=composeEventHandler(Re,Ge.onBlur),fe||(Xt.onFocus=be,Xt.onBlur=Re));const Dt={...s,isRtl:ae,arrow:a,disableInteractive:fe,placement:V,PopperComponentProp:q,touch:pe.current},Ht=typeof z.popper=="function"?z.popper(Dt):z.popper,ml=reactExports.useMemo(()=>{let Ce=[{name:"arrow",enabled:!!K,options:{element:K,padding:4}}];return S.popperOptions?.modifiers&&(Ce=Ce.concat(S.popperOptions.modifiers)),Ht?.popperOptions?.modifiers&&(Ce=Ce.concat(Ht.popperOptions.modifiers)),{...S.popperOptions,...Ht?.popperOptions,modifiers:Ce}},[K,S.popperOptions,Ht?.popperOptions]),$t=useUtilityClasses(Dt),In=typeof z.transition=="function"?z.transition(Dt):z.transition,Ee={slots:{popper:m.Popper,transition:m.Transition??ge,tooltip:m.Tooltip,arrow:m.Arrow,...te},slotProps:{arrow:z.arrow??h.arrow,popper:{...S,...Ht??h.popper},tooltip:z.tooltip??h.tooltip,transition:{...ne,...In??h.transition}}},[Pe,ke]=useSlot("popper",{elementType:TooltipPopper,externalForwardedProps:Ee,ownerState:Dt,className:clsx($t.popper,S?.className)}),[rt,$e]=useSlot("transition",{elementType:Grow,externalForwardedProps:Ee,ownerState:Dt}),[en,ze]=useSlot("tooltip",{elementType:TooltipTooltip,className:$t.tooltip,externalForwardedProps:Ee,ownerState:Dt}),[ht,De]=useSlot("arrow",{elementType:TooltipArrow,className:$t.arrow,externalForwardedProps:Ee,ownerState:Dt,ref:ue});return jsxRuntimeExports.jsxs(reactExports.Fragment,{children:[reactExports.cloneElement(H,Ge),jsxRuntimeExports.jsx(Pe,{as:q??Popper,placement:V,anchorEl:R?{getBoundingClientRect:()=>({top:cursorPosition.y,left:cursorPosition.x,right:cursorPosition.x,bottom:cursorPosition.y,width:0,height:0})}:ee,popperRef:wt,open:ee?We:!1,id:st,transition:!0,...Xt,...ke,popperOptions:ml,children:({TransitionProps:Ce})=>jsxRuntimeExports.jsx(rt,{timeout:X.transitions.duration.shorter,...Ce,...$e,children:jsxRuntimeExports.jsxs(en,{...ze,children:[J,a?jsxRuntimeExports.jsx(ht,{...De}):null]})})})]})});var dist={exports:{}},hasRequiredDist;function requireDist(){return hasRequiredDist||(hasRequiredDist=1,function(module,exports){(function(l,o){module.exports=o(requireJquery(),requireReact())})(self,function(__WEBPACK_EXTERNAL_MODULE_jquery__,__WEBPACK_EXTERNAL_MODULE_react__){return(()=>{var __webpack_modules__={"./src/components/MapContainer/MapContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapContainer": () => (/* binding */ MapContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/MapContainer/styles.module.scss");



const MapContainer = ({
  containerRef,
  className,
  style
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  style: style,
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].root, className),
  ref: containerRef
});

//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/MapContainer.tsx?`)},"./src/components/MapContainer/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapContainer": () => (/* reexport safe */ _MapContainer__WEBPACK_IMPORTED_MODULE_0__.MapContainer)
/* harmony export */ });
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MapContainer */ "./src/components/MapContainer/MapContainer.tsx");


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/index.ts?`)},"./src/components/MultiMap/MultiMap.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMap": () => (/* binding */ MultiMap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MapContainer */ "./src/components/MapContainer/index.ts");



const MultiMap = ({
  mapRef,
  style,
  className,
  ...props
}) => {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const mapContainer = containerRef.current;
    const {
      main,
      ...rest
    } = props;
    const {
      map: {
        name,
        content
      },
      ...restMain
    } = main;
    jquery__WEBPACK_IMPORTED_MODULE_1___default().fn.vectorMap("addMap", name, content);

    if (mapContainer) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).multiMap({
        main: { ...restMain,
          map: name
        },
        ...rest
      });
    }
  }, [mapRef, props]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MapContainer__WEBPACK_IMPORTED_MODULE_2__.MapContainer, {
    style: style,
    className: className,
    containerRef: containerRef
  });
};

//# sourceURL=webpack://@react-jvectormap/core/./src/components/MultiMap/MultiMap.tsx?`)},"./src/components/MultiMap/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMap": () => (/* reexport safe */ _MultiMap__WEBPACK_IMPORTED_MODULE_0__.MultiMap)
/* harmony export */ });
/* harmony import */ var _MultiMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiMap */ "./src/components/MultiMap/MultiMap.tsx");


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MultiMap/index.ts?`)},"./src/components/VectorMap/VectorMap.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMap": () => (/* binding */ VectorMap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MapContainer */ "./src/components/MapContainer/index.ts");



const VectorMap = ({
  map,
  mapRef,
  style,
  className,
  series,
  ...props
}) => {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const mapContainer = containerRef.current;

    if (!map) {
      console.error("[react-jvectormap]: no map was loaded!");
    }

    const {
      name,
      content
    } = map;
    jquery__WEBPACK_IMPORTED_MODULE_1___default().fn.vectorMap("addMap", name, content);

    if (mapContainer) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).vectorMap({
        map: name,
        series,
        ...props
      });

      if (map && (mapRef === null || mapRef === void 0 ? void 0 : mapRef.current) === null) {
        mapRef.current = jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).vectorMap("get", "mapObject");
      }
    }
  }, [map, mapRef, props, series]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const mapContainer = containerRef.current;

    if (series && mapContainer) {
      const map = jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).vectorMap("get", "mapObject");
      const {
        markers = [],
        regions = []
      } = series;
      regions.forEach(({
        values
      }, index) => {
        var _map$series;

        if (values && (_map$series = map.series) !== null && _map$series !== void 0 && _map$series.regions) {
          var _map$series2, _map$series2$regions$;

          (_map$series2 = map.series) === null || _map$series2 === void 0 ? void 0 : (_map$series2$regions$ = _map$series2.regions[index]) === null || _map$series2$regions$ === void 0 ? void 0 : _map$series2$regions$.clearAndSet(values);
        }
      });
      markers.forEach(({
        values
      }, index) => {
        var _map$series3;

        if (values && (_map$series3 = map.series) !== null && _map$series3 !== void 0 && _map$series3.markers) {
          var _map$series4, _map$series4$markers$;

          (_map$series4 = map.series) === null || _map$series4 === void 0 ? void 0 : (_map$series4$markers$ = _map$series4.markers[index]) === null || _map$series4$markers$ === void 0 ? void 0 : _map$series4$markers$.clearAndSet(values);
        }
      });
    }
  }, [series]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MapContainer__WEBPACK_IMPORTED_MODULE_2__.MapContainer, {
    className: className,
    style: style,
    containerRef: containerRef
  });
};

//# sourceURL=webpack://@react-jvectormap/core/./src/components/VectorMap/VectorMap.tsx?`)},"./src/components/VectorMap/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMap": () => (/* reexport safe */ _VectorMap__WEBPACK_IMPORTED_MODULE_0__.VectorMap)
/* harmony export */ });
/* harmony import */ var _VectorMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VectorMap */ "./src/components/VectorMap/VectorMap.tsx");


//# sourceURL=webpack://@react-jvectormap/core/./src/components/VectorMap/index.ts?`)},"./src/components/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMap": () => (/* reexport safe */ _VectorMap__WEBPACK_IMPORTED_MODULE_0__.VectorMap),
/* harmony export */   "MultiMap": () => (/* reexport safe */ _MultiMap__WEBPACK_IMPORTED_MODULE_1__.MultiMap)
/* harmony export */ });
/* harmony import */ var _VectorMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VectorMap */ "./src/components/VectorMap/index.ts");
/* harmony import */ var _MultiMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiMap */ "./src/components/MultiMap/index.ts");



//# sourceURL=webpack://@react-jvectormap/core/./src/components/index.ts?`)},"./src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMap": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.MultiMap),
/* harmony export */   "VectorMap": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.VectorMap),
/* harmony export */   "AttributeSeriesBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.AttributeSeriesBuilder),
/* harmony export */   "LabelsBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.LabelsBuilder),
/* harmony export */   "LabelsPropsBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.LabelsPropsBuilder),
/* harmony export */   "MarkerBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.MarkerBuilder),
/* harmony export */   "MultiMapBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.MultiMapBuilder),
/* harmony export */   "SeriesBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.SeriesBuilder),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.StyleBuilder),
/* harmony export */   "VectorMapBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.VectorMapBuilder)
/* harmony export */ });
/* harmony import */ var _react_jvectormap_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-jvectormap/lib */ "../jvectormap/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/components/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");




(0,_react_jvectormap_lib__WEBPACK_IMPORTED_MODULE_0__.loadJVectorMap)((jquery__WEBPACK_IMPORTED_MODULE_1___default()));

//# sourceURL=webpack://@react-jvectormap/core/./src/index.ts?`)},"./src/utils/builders/AttributeSeriesBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeSeriesBuilder": () => (/* binding */ AttributeSeriesBuilder)
/* harmony export */ });
class AttributeSeriesBuilder {
  constructor(attribute) {
    this.attribute = attribute;
  }
  /**
   *
   * @param value
   */


  setAttribute(value) {
    this.attribute = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setScale(value) {
    this.scale = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setValues(value) {
    this.values = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setNormalizeFunction(value) {
    this.normalizeFunction = value;
    return this;
  }

  build() {
    return {
      scale: this.scale,
      values: this.values,
      attribute: this.attribute,
      normalizeFunction: this.normalizeFunction
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/AttributeSeriesBuilder.ts?`)},"./src/utils/builders/LabelsBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelsBuilder": () => (/* binding */ LabelsBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class LabelsBuilder {
  /**
   *
   * @param values
   */
  addMarkersLabelProps(...values) {
    if (!this.markers) {
      this.markers = [];
    }

    this.markers.push(...values);
    return this;
  }
  /**
   *
   * @param values
   */


  addRegionsLabelProps(...values) {
    if (!this.regions) {
      this.regions = [];
    }

    this.regions.push(...values);
    return this;
  }

  build() {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
      markers: this.markers,
      regions: this.regions
    });
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/LabelsBuilder.ts?`)},"./src/utils/builders/LabelsPropsBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelsPropsBuilder": () => (/* binding */ LabelsPropsBuilder)
/* harmony export */ });
class LabelsPropsBuilder {
  constructor(render, offsets) {
    this.render = render;
    this.offsets = offsets;
  }
  /**
   *
   * @param render
   */


  setRender(render) {
    this.render = render;
    return this;
  }
  /**
   *
   * @param offsets
   */


  setOffsets(offsets) {
    this.offsets = offsets;
    return this;
  }
  /**
   *
   */


  build() {
    return {
      render: this.render,
      offsets: this.offsets
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/LabelsPropsBuilder.ts?`)},"./src/utils/builders/MarkerBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkerBuilder": () => (/* binding */ MarkerBuilder)
/* harmony export */ });
class MarkerBuilder {
  constructor(value) {
    this.name = value;
  }
  /**
   *
   * @param value
   */


  setName(value) {
    this.name = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setCoords(value) {
    this.latLng = undefined;
    this.coords = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setLatLng(value) {
    this.coords = undefined;
    this.latLng = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setStyle(value) {
    this.style = value;
    return this;
  }
  /**
   *
   */


  build() {
    const commonProps = {
      name: this.name,
      style: this.style
    };

    if (this.coords) {
      return { ...commonProps,
        coords: this.coords
      };
    } else if (this.latLng) {
      return { ...commonProps,
        latLng: this.latLng
      };
    }

    return { ...commonProps,
      latLng: [0, 0]
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/MarkerBuilder.ts?`)},"./src/utils/builders/MultiMapBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMapBuilder": () => (/* binding */ MultiMapBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class MultiMapBuilder {
  constructor(mainMap, maxLevel = 1) {
    this.main = {
      map: mainMap
    };
    this.maxLevel = maxLevel;
  }
  /**
   *
   * @param value
   */


  setMainMap(value) {
    this.main.map = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setMaxLevel(value) {
    this.maxLevel = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setMapNameByCode(value) {
    this.mapNameByCode = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setUrlByCode(value) {
    this.mapUrlByCode = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setGetDrillDownMap(value) {
    this.getDrillDownMap = value;
    return this;
  }

  build() {
    const baseProps = {
      main: this.main,
      maxLevel: this.maxLevel
    };
    return { ...baseProps,
      ...(0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
        mapNameByCode: this.mapNameByCode,
        mapUrlByCode: this.mapUrlByCode,
        getDrillDownMap: this.getDrillDownMap
      })
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/MultiMapBuilder.ts?`)},"./src/utils/builders/SeriesBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeriesBuilder": () => (/* binding */ SeriesBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class SeriesBuilder {
  /**
   *
   * @param values
   */
  addMarkersSeries(...values) {
    if (!this.markers) {
      this.markers = [];
    }

    this.markers.push(...values);
    return this;
  }
  /**
   *
   * @param values
   */


  addRegionsSeries(...values) {
    if (!this.regions) {
      this.regions = [];
    }

    this.regions.push(...values);
    return this;
  }

  build() {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
      markers: this.markers,
      regions: this.regions
    });
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/SeriesBuilder.ts?`)},"./src/utils/builders/StyleBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleBuilder": () => (/* binding */ StyleBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class StyleBuilder {
  /**
   *
   * @param value
   */
  setInitial(value) {
    this.initial = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setSelected(value) {
    this.selected = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setHover(value) {
    this.hover = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setSelectedHover(value) {
    this.selectedHover = value;
    return this;
  }

  build() {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
      selected: this.selected,
      selectedHover: this.selectedHover,
      hover: this.hover,
      initial: this.initial
    });
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/StyleBuilder.ts?`)},"./src/utils/builders/VectorMapBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMapBuilder": () => (/* binding */ VectorMapBuilder)
/* harmony export */ });
class VectorMapBuilder {
  selectedRegions = [];

  constructor(map) {
    this.map = map;
  }
  /**
   *
   * @param value
   */


  setMap(value) {
    this.map = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setBackgroundColor(value) {
    this.backgroundColor = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setZoomMin(value) {
    this.zoomMin = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setZoomMax(value) {
    this.zoomMax = value;
    return this;
  }
  /**
   *
   * @param marker
   */


  addMarker(marker) {
    if (!this.markers) {
      this.markers = [];
    }

    this.markers.push(marker);
    return this;
  }
  /**
   *
   * @param value
   */


  setMarkerStyle(value) {
    this.markerStyle = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setRegionStyle(value) {
    this.regionStyle = value;
    return this;
  }
  /**
   *
   * @param value
   * @private
   */


  setMarkersSelectable(value) {
    this.markersSelectable = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setMarkers(value) {
    this.markers = value;
    return this;
  }
  /**
   *
   * @private
   * @param value
   */


  setRegionsSelectable(value) {
    this.regionsSelectable = value;
    return this;
  }
  /**
   *
   * @private
   * @param value
   */


  setOnRegionTipShow(value) {
    this.onRegionTipShow = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setSeries(value) {
    this.series = value;
    return this;
  }
  /**
   *
   * @param values
   */


  setLabels(values) {
    this.labels = values;
    return this;
  }
  /**
   *
   * @param value
   */


  setSelectedRegions(value) {
    this.selectedRegions = value;
    return this;
  }
  /**
   *
   */


  build() {
    return {
      map: this.map,
      series: this.series,
      backgroundColor: this.backgroundColor,
      zoomMax: this.zoomMax,
      zoomMin: this.zoomMin,
      markerStyle: this.markerStyle,
      regionStyle: this.regionStyle,
      markersSelectable: this.markersSelectable,
      regionsSelectable: this.regionsSelectable,
      markers: this.markers,
      labels: this.labels,
      selectedRegions: this.selectedRegions
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/VectorMapBuilder.ts?`)},"./src/utils/builders/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMapBuilder": () => (/* reexport safe */ _VectorMapBuilder__WEBPACK_IMPORTED_MODULE_0__.VectorMapBuilder),
/* harmony export */   "MarkerBuilder": () => (/* reexport safe */ _MarkerBuilder__WEBPACK_IMPORTED_MODULE_1__.MarkerBuilder),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _StyleBuilder__WEBPACK_IMPORTED_MODULE_2__.StyleBuilder),
/* harmony export */   "AttributeSeriesBuilder": () => (/* reexport safe */ _AttributeSeriesBuilder__WEBPACK_IMPORTED_MODULE_3__.AttributeSeriesBuilder),
/* harmony export */   "SeriesBuilder": () => (/* reexport safe */ _SeriesBuilder__WEBPACK_IMPORTED_MODULE_4__.SeriesBuilder),
/* harmony export */   "LabelsBuilder": () => (/* reexport safe */ _LabelsBuilder__WEBPACK_IMPORTED_MODULE_5__.LabelsBuilder),
/* harmony export */   "LabelsPropsBuilder": () => (/* reexport safe */ _LabelsPropsBuilder__WEBPACK_IMPORTED_MODULE_6__.LabelsPropsBuilder),
/* harmony export */   "MultiMapBuilder": () => (/* reexport safe */ _MultiMapBuilder__WEBPACK_IMPORTED_MODULE_7__.MultiMapBuilder)
/* harmony export */ });
/* harmony import */ var _VectorMapBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VectorMapBuilder */ "./src/utils/builders/VectorMapBuilder.ts");
/* harmony import */ var _MarkerBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkerBuilder */ "./src/utils/builders/MarkerBuilder.ts");
/* harmony import */ var _StyleBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyleBuilder */ "./src/utils/builders/StyleBuilder.ts");
/* harmony import */ var _AttributeSeriesBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttributeSeriesBuilder */ "./src/utils/builders/AttributeSeriesBuilder.ts");
/* harmony import */ var _SeriesBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SeriesBuilder */ "./src/utils/builders/SeriesBuilder.ts");
/* harmony import */ var _LabelsBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LabelsBuilder */ "./src/utils/builders/LabelsBuilder.ts");
/* harmony import */ var _LabelsPropsBuilder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LabelsPropsBuilder */ "./src/utils/builders/LabelsPropsBuilder.ts");
/* harmony import */ var _MultiMapBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MultiMapBuilder */ "./src/utils/builders/MultiMapBuilder.ts");









//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/index.ts?`)},"./src/utils/builders/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stripUndefinedValues": () => (/* binding */ stripUndefinedValues)
/* harmony export */ });
/**
 * remove undefined values from object
 * @param object
 */
const stripUndefinedValues = object => Object.fromEntries(Object.entries(object).filter(entry => entry[1] !== undefined));

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/utils.ts?`)},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeSeriesBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.AttributeSeriesBuilder),
/* harmony export */   "LabelsBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.LabelsBuilder),
/* harmony export */   "LabelsPropsBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.LabelsPropsBuilder),
/* harmony export */   "MarkerBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.MarkerBuilder),
/* harmony export */   "MultiMapBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.MultiMapBuilder),
/* harmony export */   "SeriesBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.SeriesBuilder),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder),
/* harmony export */   "VectorMapBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.VectorMapBuilder)
/* harmony export */ });
/* harmony import */ var _builders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builders */ "./src/utils/builders/index.ts");


//# sourceURL=webpack://@react-jvectormap/core/./src/utils/index.ts?`)},"../../node_modules/classnames/index.js":(module,exports)=>{eval(`var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/classnames/index.js?`)},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/components/MapContainer/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "../../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA== */ "data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA=="), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".jvectormap-tip {\\n  position: absolute;\\n  display: none;\\n  border: solid 1px #cdcdcd;\\n  border-radius: 3px;\\n  background: #292929;\\n  color: white;\\n  font-family: sans-serif, Verdana;\\n  font-size: smaller;\\n  padding: 3px;\\n}\\n\\n._u5cITtZnGk9D_6uoElx {\\n  height: 100%;\\n  width: 100%;\\n}\\n._u5cITtZnGk9D_6uoElx svg {\\n  touch-action: none;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-container {\\n  width: 100%;\\n  height: 100%;\\n  position: relative;\\n  overflow: hidden;\\n  touch-action: none;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-zoomin {\\n  position: absolute;\\n  left: 10px;\\n  border-radius: 3px;\\n  background: #292929;\\n  padding: 3px;\\n  color: white;\\n  cursor: pointer;\\n  line-height: 10px;\\n  text-align: center;\\n  box-sizing: content-box;\\n  width: 10px;\\n  height: 10px;\\n  top: 10px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-zoomout {\\n  position: absolute;\\n  left: 10px;\\n  border-radius: 3px;\\n  background: #292929;\\n  padding: 3px;\\n  color: white;\\n  cursor: pointer;\\n  line-height: 10px;\\n  text-align: center;\\n  box-sizing: content-box;\\n  width: 10px;\\n  height: 10px;\\n  top: 30px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-goback {\\n  position: absolute;\\n  left: 10px;\\n  border-radius: 3px;\\n  background: #292929;\\n  color: white;\\n  cursor: pointer;\\n  line-height: 10px;\\n  text-align: center;\\n  box-sizing: content-box;\\n  bottom: 10px;\\n  z-index: 1000;\\n  padding: 6px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-spinner {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  background: center no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-title {\\n  font-weight: bold;\\n  font-size: 14px;\\n  text-align: center;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt {\\n  position: absolute;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h {\\n  bottom: 0;\\n  right: 0;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend {\\n  float: left;\\n  margin: 0 10px 10px 0;\\n  padding: 3px 3px 1px 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend .jvectormap-legend-tick {\\n  float: left;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend-tick {\\n  width: 40px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend-tick-sample {\\n  height: 15px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend-tick-text {\\n  text-align: center;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v {\\n  top: 0;\\n  right: 0;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v .jvectormap-legend {\\n  margin: 10px 10px 0 0;\\n  padding: 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v .jvectormap-legend-tick-sample {\\n  height: 20px;\\n  width: 20px;\\n  display: inline-block;\\n  vertical-align: middle;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v .jvectormap-legend-tick-text {\\n  display: inline-block;\\n  vertical-align: middle;\\n  line-height: 20px;\\n  padding-left: 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend {\\n  background: black;\\n  color: white;\\n  border-radius: 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-tick-text {\\n  font-size: 12px;\\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "_u5cITtZnGk9D_6uoElx"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/styles.module.scss?../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js`)},"../../node_modules/css-loader/dist/runtime/api.js":module=>{eval(`

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/css-loader/dist/runtime/api.js?`)},"../../node_modules/css-loader/dist/runtime/getUrl.js":module=>{eval(`

module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {
    return "\\"".concat(url.replace(/"/g, '\\\\"').replace(/\\n/g, "\\\\n"), "\\"");
  }

  return url;
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/css-loader/dist/runtime/getUrl.js?`)},"../../node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{eval(`

module.exports = function (i) {
  return i[1];
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/css-loader/dist/runtime/noSourceMaps.js?`)},"./src/components/MapContainer/styles.module.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./styles.module.scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/components/MapContainer/styles.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/styles.module.scss?`)},"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{eval(`

var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?`)},"../../node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{eval(`

var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/insertBySelector.js?`)},"../../node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{eval(`

/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/insertStyleElement.js?`)},"../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?`)},"../../node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{eval(`

/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/styleDomAPI.js?`)},"../../node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{eval(`

/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/styleTagTransform.js?`)},"../jquery-mousewheel/jquery.mousewheel.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadJQueryMouseWheel": () => (/* binding */ loadJQueryMouseWheel)
/* harmony export */ });
/*!
 * jQuery Mousewheel 3.1.13
 * Copyright OpenJS Foundation and other contributors
 */

const loadJQueryMouseWheel = ($) =>
  (function (factory) {
    factory($);
  })(function ($) {
    var toFix = [
        "wheel",
        "mousewheel",
        "DOMMouseScroll",
        "MozMousePixelScroll",
      ],
      toBind =
        "onwheel" in window.document || window.document.documentMode >= 9
          ? ["wheel"]
          : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      slice = Array.prototype.slice,
      nullLowestDeltaTimeout,
      lowestDelta;

    if ($.event.fixHooks) {
      for (var i = toFix.length; i; ) {
        $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
      }
    }

    var special = ($.event.special.mousewheel = {
      version: "3.1.12",

      setup: function () {
        if (this.addEventListener) {
          for (var i = toBind.length; i; ) {
            this.addEventListener(toBind[--i], handler, false);
          }
        } else {
          this.onmousewheel = handler;
        }

        // Store the line height and page height for this particular element
        $.data(this, "mousewheel-line-height", special.getLineHeight(this));
        $.data(this, "mousewheel-page-height", special.getPageHeight(this));
      },

      teardown: function () {
        if (this.removeEventListener) {
          for (var i = toBind.length; i; ) {
            this.removeEventListener(toBind[--i], handler, false);
          }
        } else {
          this.onmousewheel = null;
        }

        // Clean up the data we added to the element
        $.removeData(this, "mousewheel-line-height");
        $.removeData(this, "mousewheel-page-height");
      },

      getLineHeight: function (elem) {
        var $elem = $(elem),
          $parent = $elem["offsetParent" in $.fn ? "offsetParent" : "parent"]();
        if (!$parent.length) {
          $parent = $("body");
        }
        return (
          parseInt($parent.css("fontSize"), 10) ||
          parseInt($elem.css("fontSize"), 10) ||
          16
        );
      },

      getPageHeight: function (elem) {
        return $(elem).height();
      },

      settings: {
        adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
        normalizeOffset: true, // calls getBoundingClientRect for each event
      },
    });

    $.fn.extend({
      mousewheel: function (fn) {
        return fn ? this.on("mousewheel", fn) : this.trigger("mousewheel");
      },

      unmousewheel: function (fn) {
        return this.off("mousewheel", fn);
      },
    });

    function handler(event) {
      var orgEvent = event || window.event,
        args = slice.call(arguments, 1),
        delta = 0,
        deltaX = 0,
        deltaY = 0,
        absDelta = 0;
      event = $.event.fix(orgEvent);
      event.type = "mousewheel";

      // Old school scrollwheel delta
      if ("detail" in orgEvent) {
        deltaY = orgEvent.detail * -1;
      }
      if ("wheelDelta" in orgEvent) {
        deltaY = orgEvent.wheelDelta;
      }
      if ("wheelDeltaY" in orgEvent) {
        deltaY = orgEvent.wheelDeltaY;
      }
      if ("wheelDeltaX" in orgEvent) {
        deltaX = orgEvent.wheelDeltaX * -1;
      }

      // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
      if ("axis" in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
        deltaX = deltaY * -1;
        deltaY = 0;
      }

      // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
      delta = deltaY === 0 ? deltaX : deltaY;

      // New school wheel delta (wheel event)
      if ("deltaY" in orgEvent) {
        deltaY = orgEvent.deltaY * -1;
        delta = deltaY;
      }
      if ("deltaX" in orgEvent) {
        deltaX = orgEvent.deltaX;
        if (deltaY === 0) {
          delta = deltaX * -1;
        }
      }

      // No change actually happened, no reason to go any further
      if (deltaY === 0 && deltaX === 0) {
        return;
      }

      // Need to convert lines and pages to pixels if we aren't already in pixels
      // There are three delta modes:
      //   * deltaMode 0 is by pixels, nothing to do
      //   * deltaMode 1 is by lines
      //   * deltaMode 2 is by pages
      if (orgEvent.deltaMode === 1) {
        var lineHeight = $.data(this, "mousewheel-line-height");
        delta *= lineHeight;
        deltaY *= lineHeight;
        deltaX *= lineHeight;
      } else if (orgEvent.deltaMode === 2) {
        var pageHeight = $.data(this, "mousewheel-page-height");
        delta *= pageHeight;
        deltaY *= pageHeight;
        deltaX *= pageHeight;
      }

      // Store lowest absolute delta to normalize the delta values
      absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));

      if (!lowestDelta || absDelta < lowestDelta) {
        lowestDelta = absDelta;

        // Adjust older deltas if necessary
        if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
          lowestDelta /= 40;
        }
      }

      // Adjust older deltas if necessary
      if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
        // Divide all the things by 40!
        delta /= 40;
        deltaX /= 40;
        deltaY /= 40;
      }

      // Get a whole, normalized value for the deltas
      delta = Math[delta >= 1 ? "floor" : "ceil"](delta / lowestDelta);
      deltaX = Math[deltaX >= 1 ? "floor" : "ceil"](deltaX / lowestDelta);
      deltaY = Math[deltaY >= 1 ? "floor" : "ceil"](deltaY / lowestDelta);

      // Normalise offsetX and offsetY properties
      if (special.settings.normalizeOffset && this.getBoundingClientRect) {
        var boundingRect = this.getBoundingClientRect();
        event.offsetX = event.clientX - boundingRect.left;
        event.offsetY = event.clientY - boundingRect.top;
      }

      // Add information to the event object
      event.deltaX = deltaX;
      event.deltaY = deltaY;
      event.deltaFactor = lowestDelta;

      // Go ahead and set deltaMode to 0 since we converted to pixels
      // Although this is a little odd since we overwrite the deltaX/Y
      // properties with normalized deltas.
      event.deltaMode = 0;

      // Add event and delta to the front of the arguments
      args.unshift(event, delta, deltaX, deltaY);

      // Clearout lowestDelta after sometime to better
      // handle multiple device types that give different
      // a different lowestDelta
      // Ex: trackpad = 3 and mouse wheel = 120
      if (nullLowestDeltaTimeout) {
        window.clearTimeout(nullLowestDeltaTimeout);
      }
      nullLowestDeltaTimeout = window.setTimeout(nullLowestDelta, 200);

      return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
      lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
      // If this is an older event and the delta is divisable by 120,
      // then we are assuming that the browser is treating this as an
      // older mouse wheel event and that we should divide the deltas
      // by 40 to try and get a more usable deltaFactor.
      // Side note, this actually impacts the reported scroll distance
      // in older browsers and can cause scrolling to be slower than native.
      // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
      return (
        special.settings.adjustOldDeltas &&
        orgEvent.type === "mousewheel" &&
        absDelta % 120 === 0
      );
    }
  });


//# sourceURL=webpack://@react-jvectormap/core/../jquery-mousewheel/jquery.mousewheel.js?`)},"../jvectormap/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadJVectorMap": () => (/* reexport safe */ _jquery_jvectormap_min__WEBPACK_IMPORTED_MODULE_0__.loadJVectorMap)
/* harmony export */ });
/* harmony import */ var _jquery_jvectormap_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jquery.jvectormap.min */ "../jvectormap/jquery.jvectormap.min.js");



//# sourceURL=webpack://@react-jvectormap/core/../jvectormap/index.js?`)},"../jvectormap/jquery.jvectormap.min.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadJVectorMap": () => (/* binding */ loadJVectorMap)
/* harmony export */ });
/* harmony import */ var _react_jvectormap_jquery_mousewheel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-jvectormap/jquery-mousewheel */ "../jquery-mousewheel/jquery.mousewheel.js");


/**
 * jVectorMap version 2.0.5
 *
 * Copyright 2011-2014, Kirill Lebedev
 *
 * inspired from: https://github.com/alex-pex/jvectormap/blob/master/jvectormap-next/src/jquery-jvectormap.js
 */
const loadJVectorMap = ($) =>
  (function (factory) {
    factory($);
  })(function ($) {
    (0,_react_jvectormap_jquery_mousewheel__WEBPACK_IMPORTED_MODULE_0__.loadJQueryMouseWheel)($);
    jvm.$ = $;
    window.jvm = jvm;

    const apiParams = {
      set: {
        colors: 1,
        values: 1,
        backgroundColor: 1,
        scaleColors: 1,
        normalizeFunction: 1,
        focus: 1,
      },
      get: {
        selectedRegions: 1,
        selectedMarkers: 1,
        mapObject: 1,
        regionName: 1,
      },
    };

    $.fn.multiMap = function (options) {
      options.container = this;
      new jvm.MultiMap(options);
      return this;
    };

    $.fn.vectorMap = function (options) {
      let map, methodName;
      map = this.children(".jvectormap-container").data("mapObject");
      if (options === "remove") {
        this.remove();
      } else if (options === "addMap") {
        jvm.Map.maps[arguments[1]] = arguments[2];
      } else if (
        (options === "set" || options === "get") &&
        apiParams[options][arguments[1]]
      ) {
        methodName =
          arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1);
        return map[options + methodName].apply(
          map,
          Array.prototype.slice.call(arguments, 2),
        );
      } else if (!map) {
        options = options || {};
        options.container = this;
        map = new jvm.Map(options);
      }

      return this;
    };
  });
/**
 * @namespace jvm Holds core methods and classes used by jVectorMap.
 */
var jvm = {
  /**
   * Inherits child's prototype from the parent's one.
   * @param {Function} child
   * @param {Function} parent
   */
  inherits: function (child, parent) {
    function temp() {}
    temp.prototype = parent.prototype;
    child.prototype = new temp();
    child.prototype.constructor = child;
    child.parentClass = parent;
  },

  /**
   * Mixes in methods from the source constructor to the target one.
   * @param {Function} target
   * @param {Function} source
   */
  mixin: function (target, source) {
    var prop;

    for (prop in source.prototype) {
      if (source.prototype.hasOwnProperty(prop)) {
        target.prototype[prop] = source.prototype[prop];
      }
    }
  },

  min: function (values) {
    var min = Number.MAX_VALUE,
      i;

    if (values instanceof Array) {
      for (i = 0; i < values.length; i++) {
        if (values[i] < min) {
          min = values[i];
        }
      }
    } else {
      for (i in values) {
        if (values[i] < min) {
          min = values[i];
        }
      }
    }
    return min;
  },

  max: function (values) {
    var max = Number.MIN_VALUE,
      i;

    if (values instanceof Array) {
      for (i = 0; i < values.length; i++) {
        if (values[i] > max) {
          max = values[i];
        }
      }
    } else {
      for (i in values) {
        if (values[i] > max) {
          max = values[i];
        }
      }
    }
    return max;
  },

  keys: function (object) {
    var keys = [],
      key;

    for (key in object) {
      keys.push(key);
    }
    return keys;
  },

  values: function (object) {
    var values = [],
      key,
      i;

    for (i = 0; i < arguments.length; i++) {
      object = arguments[i];
      for (key in object) {
        values.push(object[key]);
      }
    }
    return values;
  },

  whenImageLoaded: function (url) {
    var deferred = new jvm.$.Deferred(),
      img = jvm.$("<img/>");

    img
      .on("error", function () {
        deferred.reject();
      })
      .on("load", function () {
        deferred.resolve(img);
      });
    img.attr("src", url);

    return deferred;
  },

  isImageUrl: function (s) {
    return /\\.\\w{3,4}$/.test(s);
  },
};

/**
 * indexOf polyfill for IE < 9
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement, fromIndex) {
    var k;

    // 1. Let O be the result of calling ToObject passing
    //    the this value as the argument.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get
    //    internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    // 6. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7. If n >= 0, then Let k be n.
    // 8. Else, n<0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Repeat, while k < len
    while (k < len) {
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the
      //    HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      //    i.  Let elementK be the result of calling the Get
      //        internal method of O with the argument ToString(k).
      //   ii.  Let same be the result of applying the
      //        Strict Equality Comparison Algorithm to
      //        searchElement and elementK.
      //  iii.  If same is true, return k.
      if (k in O && O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}
/**
 * Basic wrapper for DOM element.
 * @constructor
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */
jvm.AbstractElement = function(name, config){
  /**
   * Underlying DOM element
   * @type {DOMElement}
   * @private
   */
  this.node = this.createElement(name);

  /**
   * Name of underlying element
   * @type {String}
   * @private
   */
  this.name = name;

  /**
   * Internal store of attributes
   * @type {Object}
   * @private
   */
  this.properties = {};

  if (config) {
    this.set(config);
  }
};

/**
 * Set attribute of the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Set of parameters to initialize element with
 */
jvm.AbstractElement.prototype.set = function(property, value){
  var key;

  if (typeof property === 'object') {
    for (key in property) {
      this.properties[key] = property[key];
      this.applyAttr(key, property[key]);
    }
  } else {
    this.properties[property] = value;
    this.applyAttr(property, value);
  }
};

/**
 * Returns value of attribute.
 * @param {String} name Name of attribute
 */
jvm.AbstractElement.prototype.get = function(property){
  return this.properties[property];
};

/**
 * Applies attribute value to the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Value of attribute to apply
 * @private
 */
jvm.AbstractElement.prototype.applyAttr = function(property, value){
  if (!Number.isNaN(value)) {
    this.node.setAttribute(property, value);
  }
};

jvm.AbstractElement.prototype.remove = function(){
  jvm.$(this.node).remove();
};/**
 * Implements abstract vector canvas.
 * @constructor
 * @param {HTMLElement} container Container to put element to.
 * @param {Number} width Width of canvas.
 * @param {Number} height Height of canvas.
 */
jvm.AbstractCanvasElement = function(container, width, height){
  this.container = container;
  this.setSize(width, height);
  this.rootElement = new jvm[this.classPrefix+'GroupElement']();
  this.node.appendChild( this.rootElement.node );
  this.container.appendChild(this.node);
}

/**
 * Add element to the certain group inside of the canvas.
 * @param {HTMLElement} element Element to add to canvas.
 * @param {HTMLElement} group Group to add element into or into root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.add = function(element, group){
  group = group || this.rootElement;
  group.add(element);
  element.canvas = this;
}

/**
 * Create path and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add path into.
 */
jvm.AbstractCanvasElement.prototype.addPath = function(config, style, group){
  var el = new jvm[this.classPrefix+'PathElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create circle and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addCircle = function(config, style, group){
  var el = new jvm[this.classPrefix+'CircleElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create circle and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addImage = function(config, style, group){
  var el = new jvm[this.classPrefix+'ImageElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create text and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addText = function(config, style, group){
  var el = new jvm[this.classPrefix+'TextElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Add group to the another group inside of the canvas.
 * @param {HTMLElement} group Group to add circle into or root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.addGroup = function(parentGroup){
  var el = new jvm[this.classPrefix+'GroupElement']();

  if (parentGroup) {
    parentGroup.node.appendChild(el.node);
  } else {
    this.node.appendChild(el.node);
  }
  el.canvas = this;
  return el;
};/**
 * Abstract shape element. Shape element represents some visual vector or raster object.
 * @constructor
 * @param {String} name Tag name of the element.
 * @param {Object} config Set of parameters to initialize element with.
 * @param {Object} style Object with styles to set on element initialization.
 */
jvm.AbstractShapeElement = function(name, config, style){
  this.style = style || {};
  this.style.current = this.style.current || {};
  this.isHovered = false;
  this.isSelected = false;
  this.updateStyle();
};

/**
 * Set element's style.
 * @param {Object|String} property Could be string to set only one property or object to set several style properties at once.
 * @param {String} value Value to set in case only one property should be set.
 */
jvm.AbstractShapeElement.prototype.setStyle = function(property, value){
  var styles = {};

  if (typeof property === 'object') {
    styles = property;
  } else {
    styles[property] = value;
  }
  jvm.$.extend(this.style.current, styles);
  this.updateStyle();
};


jvm.AbstractShapeElement.prototype.updateStyle = function(){
  var attrs = {};

  jvm.AbstractShapeElement.mergeStyles(attrs, this.style.initial);
  jvm.AbstractShapeElement.mergeStyles(attrs, this.style.current);
  if (this.isHovered) {
    jvm.AbstractShapeElement.mergeStyles(attrs, this.style.hover);
  }
  if (this.isSelected) {
    jvm.AbstractShapeElement.mergeStyles(attrs, this.style.selected);
    if (this.isHovered) {
      jvm.AbstractShapeElement.mergeStyles(attrs, this.style.selectedHover);
    }
  }
  this.set(attrs);
};

jvm.AbstractShapeElement.mergeStyles = function(styles, newStyles){
  var key;

  newStyles = newStyles || {};
  for (key in newStyles) {
    if (newStyles[key] === null) {
      delete styles[key];
    } else {
      styles[key] = newStyles[key];
    }
  }
}/**
 * Wrapper for SVG element.
 * @constructor
 * @extends jvm.AbstractElement
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */

jvm.SVGElement = function(name, config){
  jvm.SVGElement.parentClass.apply(this, arguments);
}

jvm.inherits(jvm.SVGElement, jvm.AbstractElement);

jvm.SVGElement.svgns = "http://www.w3.org/2000/svg";

/**
 * Creates DOM element.
 * @param {String} tagName Name of element
 * @private
 * @returns DOMElement
 */
jvm.SVGElement.prototype.createElement = function( tagName ){
  return document.createElementNS( jvm.SVGElement.svgns, tagName );
};

/**
 * Adds CSS class for underlying DOM element.
 * @param {String} className Name of CSS class name
 */
jvm.SVGElement.prototype.addClass = function( className ){
  this.node.setAttribute('class', className);
};

/**
 * Returns constructor for element by name prefixed with 'VML'.
 * @param {String} ctr Name of basic constructor to return
 * proper implementation for.
 * @returns Function
 * @private
 */
jvm.SVGElement.prototype.getElementCtr = function( ctr ){
  return jvm['SVG'+ctr];
};

jvm.SVGElement.prototype.getBBox = function(){
  return this.node.getBBox();
};jvm.SVGGroupElement = function(){
  jvm.SVGGroupElement.parentClass.call(this, 'g');
}

jvm.inherits(jvm.SVGGroupElement, jvm.SVGElement);

jvm.SVGGroupElement.prototype.add = function(element){
  this.node.appendChild( element.node );
};jvm.SVGCanvasElement = function (container, width, height) {
  this.classPrefix = "SVG";
  jvm.SVGCanvasElement.parentClass.call(this, "svg");

  this.defsElement = new jvm.SVGElement("defs");
  this.node.appendChild(this.defsElement.node);

  jvm.AbstractCanvasElement.apply(this, arguments);
};

jvm.inherits(jvm.SVGCanvasElement, jvm.SVGElement);
jvm.mixin(jvm.SVGCanvasElement, jvm.AbstractCanvasElement);

jvm.SVGCanvasElement.prototype.setSize = function (width, height) {
  this.width = width;
  this.height = height;
  this.node.setAttribute("width", width);
  this.node.setAttribute("height", height);
};

jvm.SVGCanvasElement.prototype.applyTransformParams = function (
  scale,
  transX,
  transY,
) {
  this.scale = scale;
  this.transX = transX;
  this.transY = transY;
  if (!isNaN(transX) && !isNaN(transY) && !isNaN(scale)) {
    this.rootElement.node.setAttribute(
      "transform",
      "scale(" + scale + ") translate(" + transX + ", " + transY + ")",
    );
  }
};
jvm.SVGShapeElement = function(name, config, style){
  jvm.SVGShapeElement.parentClass.call(this, name, config);
  jvm.AbstractShapeElement.apply(this, arguments);
};

jvm.inherits(jvm.SVGShapeElement, jvm.SVGElement);
jvm.mixin(jvm.SVGShapeElement, jvm.AbstractShapeElement);

jvm.SVGShapeElement.prototype.applyAttr = function(attr, value){
  var patternEl,
      imageEl,
      that = this;

  if (attr === 'fill' && jvm.isImageUrl(value)) {
    if (!jvm.SVGShapeElement.images[value]) {
      jvm.whenImageLoaded(value).then(function(img){
        imageEl = new jvm.SVGElement('image');
        imageEl.node.setAttributeNS('http://www.w3.org/1999/xlink', 'href', value);
        imageEl.applyAttr('x', '0');
        imageEl.applyAttr('y', '0');
        imageEl.applyAttr('width', img[0].width);
        imageEl.applyAttr('height', img[0].height);

        patternEl = new jvm.SVGElement('pattern');
        patternEl.applyAttr('id', 'image'+jvm.SVGShapeElement.imageCounter);
        patternEl.applyAttr('x', 0);
        patternEl.applyAttr('y', 0);
        patternEl.applyAttr('width', img[0].width / 2);
        patternEl.applyAttr('height', img[0].height / 2);
        patternEl.applyAttr('viewBox', '0 0 '+img[0].width+' '+img[0].height);
        patternEl.applyAttr('patternUnits', 'userSpaceOnUse');
        patternEl.node.appendChild( imageEl.node );

        that.canvas.defsElement.node.appendChild( patternEl.node );

        jvm.SVGShapeElement.images[value] = jvm.SVGShapeElement.imageCounter++;

        that.applyAttr('fill', 'url(#image'+jvm.SVGShapeElement.images[value]+')');
      });
    } else {
      this.applyAttr('fill', 'url(#image'+jvm.SVGShapeElement.images[value]+')');
    }
  } else {
    jvm.SVGShapeElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};

jvm.SVGShapeElement.imageCounter = 1;
jvm.SVGShapeElement.images = {};jvm.SVGPathElement = function(config, style){
  jvm.SVGPathElement.parentClass.call(this, 'path', config, style);
  this.node.setAttribute('fill-rule', 'evenodd');
}

jvm.inherits(jvm.SVGPathElement, jvm.SVGShapeElement);jvm.SVGCircleElement = function(config, style){
  jvm.SVGCircleElement.parentClass.call(this, 'circle', config, style);
};

jvm.inherits(jvm.SVGCircleElement, jvm.SVGShapeElement);jvm.SVGImageElement = function(config, style){
  jvm.SVGImageElement.parentClass.call(this, 'image', config, style);
};

jvm.inherits(jvm.SVGImageElement, jvm.SVGShapeElement);

jvm.SVGImageElement.prototype.applyAttr = function(attr, value){
  var that = this,
      imageOffset,
      imageUrl;

  if (attr == 'image') {
    if (typeof value == 'object') {
      imageUrl = value.url;
      this.offset = value.offset;
    } else {
      imageUrl = value;
      this.offset = [0, 0];
    }

    jvm.whenImageLoaded(imageUrl).then(function(img){
      that.node.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imageUrl);
      that.width = img[0].width;
      that.height = img[0].height;
      that.applyAttr('width', that.width);
      that.applyAttr('height', that.height);

      that.applyAttr('x', that.cx - that.width / 2 + that.offset[0]);
      that.applyAttr('y', that.cy - that.height / 2 + that.offset[1]);

      jvm.$(that.node).trigger('imageloaded', [img]);
    });
  } else if(attr == 'cx') {
    this.cx = value;
    if (this.width) {
      this.applyAttr('x', value - this.width / 2 + this.offset[0]);
    }
  } else if(attr == 'cy') {
    this.cy = value;
    if (this.height) {
      this.applyAttr('y', value - this.height / 2 + this.offset[1]);
    }
  } else {
    jvm.SVGImageElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};jvm.SVGTextElement = function(config, style){
  jvm.SVGTextElement.parentClass.call(this, 'text', config, style);
}

jvm.inherits(jvm.SVGTextElement, jvm.SVGShapeElement);

jvm.SVGTextElement.prototype.applyAttr = function(attr, value){
  if (attr === 'text') {
    this.node.textContent = value;
  } else {
    jvm.SVGTextElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};/**
 * Wrapper for VML element.
 * @constructor
 * @extends jvm.AbstractElement
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */

jvm.VMLElement = function(name, config){
  if (!jvm.VMLElement.VMLInitialized) {
    jvm.VMLElement.initializeVML();
  }

  jvm.VMLElement.parentClass.apply(this, arguments);
};

jvm.inherits(jvm.VMLElement, jvm.AbstractElement);

/**
 * Shows if VML was already initialized for the current document or not.
 * @static
 * @private
 * @type {Boolean}
 */
jvm.VMLElement.VMLInitialized = false;

/**
 * Initializes VML handling before creating the first element
 * (adds CSS class and creates namespace). Adds one of two forms
 * of createElement method depending of support by browser.
 * @static
 * @private
 */

 // The following method of VML handling is borrowed from the
 // Raphael library by Dmitry Baranovsky.

jvm.VMLElement.initializeVML = function(){
  try {
    if (!document.namespaces.rvml) {
      document.namespaces.add("rvml","urn:schemas-microsoft-com:vml");
    }
    /**
     * Creates DOM element.
     * @param {String} tagName Name of element
     * @private
     * @returns DOMElement
     */
    jvm.VMLElement.prototype.createElement = function (tagName) {
      return document.createElement('<rvml:' + tagName + ' class="rvml">');
    };
  } catch (e) {
    /**
     * @private
     */
    jvm.VMLElement.prototype.createElement = function (tagName) {
      return document.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
    };
  }
  document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
  jvm.VMLElement.VMLInitialized = true;
};

/**
 * Returns constructor for element by name prefixed with 'VML'.
 * @param {String} ctr Name of basic constructor to return
 * proper implementation for.
 * @returns Function
 * @private
 */
jvm.VMLElement.prototype.getElementCtr = function( ctr ){
  return jvm['VML'+ctr];
};

/**
 * Adds CSS class for underlying DOM element.
 * @param {String} className Name of CSS class name
 */
jvm.VMLElement.prototype.addClass = function( className ){
  jvm.$(this.node).addClass(className);
};

/**
 * Applies attribute value to the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Value of attribute to apply
 * @private
 */
jvm.VMLElement.prototype.applyAttr = function( attr, value ){
  this.node[attr] = value;
};

/**
 * Returns boundary box for the element.
 * @returns {Object} Boundary box with numeric fields: x, y, width, height
 * @override
 */
jvm.VMLElement.prototype.getBBox = function(){
  var node = jvm.$(this.node);

  return {
    x: node.position().left / this.canvas.scale,
    y: node.position().top / this.canvas.scale,
    width: node.width() / this.canvas.scale,
    height: node.height() / this.canvas.scale
  };
};jvm.VMLGroupElement = function(){
  jvm.VMLGroupElement.parentClass.call(this, 'group');

  this.node.style.left = '0px';
  this.node.style.top = '0px';
  this.node.coordorigin = "0 0";
};

jvm.inherits(jvm.VMLGroupElement, jvm.VMLElement);

jvm.VMLGroupElement.prototype.add = function(element){
  this.node.appendChild( element.node );
};jvm.VMLCanvasElement = function(container, width, height){
  this.classPrefix = 'VML';
  jvm.VMLCanvasElement.parentClass.call(this, 'group');
  jvm.AbstractCanvasElement.apply(this, arguments);
  this.node.style.position = 'absolute';
};

jvm.inherits(jvm.VMLCanvasElement, jvm.VMLElement);
jvm.mixin(jvm.VMLCanvasElement, jvm.AbstractCanvasElement);

jvm.VMLCanvasElement.prototype.setSize = function(width, height){
  var paths,
      groups,
      i,
      l;

  this.width = width;
  this.height = height;
  this.node.style.width = width + "px";
  this.node.style.height = height + "px";
  this.node.coordsize = width+' '+height;
  this.node.coordorigin = "0 0";
  if (this.rootElement) {
    paths = this.rootElement.node.getElementsByTagName('shape');
    for(i = 0, l = paths.length; i < l; i++) {
      paths[i].coordsize = width+' '+height;
      paths[i].style.width = width+'px';
      paths[i].style.height = height+'px';
    }
    groups = this.node.getElementsByTagName('group');
    for(i = 0, l = groups.length; i < l; i++) {
      groups[i].coordsize = width+' '+height;
      groups[i].style.width = width+'px';
      groups[i].style.height = height+'px';
    }
  }
};

jvm.VMLCanvasElement.prototype.applyTransformParams = function(scale, transX, transY) {
  this.scale = scale;
  this.transX = transX;
  this.transY = transY;
  this.rootElement.node.coordorigin = (this.width-transX-this.width/100)+','+(this.height-transY-this.height/100);
  this.rootElement.node.coordsize = this.width/scale+','+this.height/scale;
};jvm.VMLShapeElement = function(name, config){
  jvm.VMLShapeElement.parentClass.call(this, name, config);

  this.fillElement = new jvm.VMLElement('fill');
  this.strokeElement = new jvm.VMLElement('stroke');
  this.node.appendChild(this.fillElement.node);
  this.node.appendChild(this.strokeElement.node);
  this.node.stroked = false;

  jvm.AbstractShapeElement.apply(this, arguments);
};

jvm.inherits(jvm.VMLShapeElement, jvm.VMLElement);
jvm.mixin(jvm.VMLShapeElement, jvm.AbstractShapeElement);

jvm.VMLShapeElement.prototype.applyAttr = function(attr, value){
  switch (attr) {
    case 'fill':
      this.node.fillcolor = value;
      break;
    case 'fill-opacity':
      this.fillElement.node.opacity = Math.round(value*100)+'%';
      break;
    case 'stroke':
      if (value === 'none') {
        this.node.stroked = false;
      } else {
        this.node.stroked = true;
      }
      this.node.strokecolor = value;
      break;
    case 'stroke-opacity':
      this.strokeElement.node.opacity = Math.round(value*100)+'%';
      break;
    case 'stroke-width':
      if (parseInt(value, 10) === 0) {
        this.node.stroked = false;
      } else {
        this.node.stroked = true;
      }
      this.node.strokeweight = value;
      break;
    case 'd':
      this.node.path = jvm.VMLPathElement.pathSvgToVml(value);
      break;
    default:
      jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};jvm.VMLPathElement = function(config, style){
  var scale = new jvm.VMLElement('skew');

  jvm.VMLPathElement.parentClass.call(this, 'shape', config, style);

  this.node.coordorigin = "0 0";

  scale.node.on = true;
  scale.node.matrix = '0.01,0,0,0.01,0,0';
  scale.node.offset = '0,0';

  this.node.appendChild(scale.node);
};

jvm.inherits(jvm.VMLPathElement, jvm.VMLShapeElement);

jvm.VMLPathElement.prototype.applyAttr = function(attr, value){
  if (attr === 'd') {
    this.node.path = jvm.VMLPathElement.pathSvgToVml(value);
  } else {
    jvm.VMLShapeElement.prototype.applyAttr.call(this, attr, value);
  }
};

jvm.VMLPathElement.pathSvgToVml = function(path) {
  var cx = 0, cy = 0, ctrlx, ctrly;

  path = path.replace(/(-?\\d+)e(-?\\d+)/g, '0');
  return path.replace(/([MmLlHhVvCcSs])\\s*((?:-?\\d*(?:\\.\\d+)?\\s*,?\\s*)+)/g, function(segment, letter, coords, index){
    coords = coords.replace(/(\\d)-/g, '$1,-')
            .replace(/^\\s+/g, '')
            .replace(/\\s+$/g, '')
            .replace(/\\s+/g, ',').split(',');
    if (!coords[0]) coords.shift();
    for (var i=0, l=coords.length; i<l; i++) {
      coords[i] = Math.round(100*coords[i]);
    }
    switch (letter) {
      case 'm':
        cx += coords[0];
        cy += coords[1];
        return 't'+coords.join(',');
      case 'M':
        cx = coords[0];
        cy = coords[1];
        return 'm'+coords.join(',');
      case 'l':
        cx += coords[0];
        cy += coords[1];
        return 'r'+coords.join(',');
      case 'L':
        cx = coords[0];
        cy = coords[1];
        return 'l'+coords.join(',');
      case 'h':
        cx += coords[0];
        return 'r'+coords[0]+',0';
      case 'H':
        cx = coords[0];
        return 'l'+cx+','+cy;
      case 'v':
        cy += coords[0];
        return 'r0,'+coords[0];
      case 'V':
        cy = coords[0];
        return 'l'+cx+','+cy;
      case 'c':
        ctrlx = cx + coords[coords.length-4];
        ctrly = cy + coords[coords.length-3];
        cx += coords[coords.length-2];
        cy += coords[coords.length-1];
        return 'v'+coords.join(',');
      case 'C':
        ctrlx = coords[coords.length-4];
        ctrly = coords[coords.length-3];
        cx = coords[coords.length-2];
        cy = coords[coords.length-1];
        return 'c'+coords.join(',');
      case 's':
        coords.unshift(cy-ctrly);
        coords.unshift(cx-ctrlx);
        ctrlx = cx + coords[coords.length-4];
        ctrly = cy + coords[coords.length-3];
        cx += coords[coords.length-2];
        cy += coords[coords.length-1];
        return 'v'+coords.join(',');
      case 'S':
        coords.unshift(cy+cy-ctrly);
        coords.unshift(cx+cx-ctrlx);
        ctrlx = coords[coords.length-4];
        ctrly = coords[coords.length-3];
        cx = coords[coords.length-2];
        cy = coords[coords.length-1];
        return 'c'+coords.join(',');
    }
    return '';
  }).replace(/z/g, 'e');
};jvm.VMLCircleElement = function(config, style){
  jvm.VMLCircleElement.parentClass.call(this, 'oval', config, style);
};

jvm.inherits(jvm.VMLCircleElement, jvm.VMLShapeElement);

jvm.VMLCircleElement.prototype.applyAttr = function(attr, value){
  switch (attr) {
    case 'r':
      this.node.style.width = value*2+'px';
      this.node.style.height = value*2+'px';
      this.applyAttr('cx', this.get('cx') || 0);
      this.applyAttr('cy', this.get('cy') || 0);
      break;
    case 'cx':
      if (!value) return;
      this.node.style.left = value - (this.get('r') || 0) + 'px';
      break;
    case 'cy':
      if (!value) return;
      this.node.style.top = value - (this.get('r') || 0) + 'px';
      break;
    default:
      jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this, attr, value);
  }
};/**
 * Class for vector images manipulations.
 * @constructor
 * @param {DOMElement} container to place canvas to
 * @param {Number} width
 * @param {Number} height
 */
jvm.VectorCanvas = function(container, width, height) {
  this.mode = window.SVGAngle ? 'svg' : 'vml';

  if (this.mode == 'svg') {
    this.impl = new jvm.SVGCanvasElement(container, width, height);
  } else {
    this.impl = new jvm.VMLCanvasElement(container, width, height);
  }
  this.impl.mode = this.mode;
  return this.impl;
};jvm.SimpleScale = function(scale){
  this.scale = scale;
};

jvm.SimpleScale.prototype.getValue = function(value){
  return value;
};jvm.OrdinalScale = function(scale){
  this.scale = scale;
};

jvm.OrdinalScale.prototype.getValue = function(value){
  return this.scale[value];
};

jvm.OrdinalScale.prototype.getTicks = function(){
  var ticks = [],
      key;

  for (key in this.scale) {
    ticks.push({
      label: key,
      value: this.scale[key]
    });
  }

  return ticks;
};jvm.NumericScale = function(scale, normalizeFunction, minValue, maxValue) {
  this.scale = [];

  normalizeFunction = normalizeFunction || 'linear';

  if (scale) this.setScale(scale);
  if (normalizeFunction) this.setNormalizeFunction(normalizeFunction);
  if (typeof minValue !== 'undefined' ) this.setMin(minValue);
  if (typeof maxValue !== 'undefined' ) this.setMax(maxValue);
};

jvm.NumericScale.prototype = {
  setMin: function(min) {
    this.clearMinValue = min;
    if (typeof this.normalize === 'function') {
      this.minValue = this.normalize(min);
    } else {
      this.minValue = min;
    }
  },

  setMax: function(max) {
    this.clearMaxValue = max;
    if (typeof this.normalize === 'function') {
      this.maxValue = this.normalize(max);
    } else {
      this.maxValue = max;
    }
  },

  setScale: function(scale) {
    var i;

    this.scale = [];
    for (i = 0; i < scale.length; i++) {
      this.scale[i] = [scale[i]];
    }
  },

  setNormalizeFunction: function(f) {
    if (f === 'polynomial') {
      this.normalize = function(value) {
        return Math.pow(value, 0.2);
      }
    } else if (f === 'linear') {
      delete this.normalize;
    } else {
      this.normalize = f;
    }
    this.setMin(this.clearMinValue);
    this.setMax(this.clearMaxValue);
  },

  getValue: function(value) {
    var lengthes = [],
        fullLength = 0,
        l,
        i = 0,
        c;

    if (typeof this.normalize === 'function') {
      value = this.normalize(value);
    }
    for (i = 0; i < this.scale.length-1; i++) {
      l = this.vectorLength(this.vectorSubtract(this.scale[i+1], this.scale[i]));
      lengthes.push(l);
      fullLength += l;
    }

    c = (this.maxValue - this.minValue) / fullLength;
    for (i=0; i<lengthes.length; i++) {
      lengthes[i] *= c;
    }

    i = 0;
    value -= this.minValue;
    while (value - lengthes[i] >= 0) {
      value -= lengthes[i];
      i++;
    }

    if (i == this.scale.length - 1) {
      value = this.vectorToNum(this.scale[i])
    } else {
      value = (
        this.vectorToNum(
          this.vectorAdd(this.scale[i],
            this.vectorMult(
              this.vectorSubtract(this.scale[i+1], this.scale[i]),
              (value) / (lengthes[i])
            )
          )
        )
      );
    }

    return value;
  },

  vectorToNum: function(vector) {
    var num = 0,
        i;

    for (i = 0; i < vector.length; i++) {
      num += Math.round(vector[i])*Math.pow(256, vector.length-i-1);
    }
    return num;
  },

  vectorSubtract: function(vector1, vector2) {
    var vector = [],
        i;

    for (i = 0; i < vector1.length; i++) {
      vector[i] = vector1[i] - vector2[i];
    }
    return vector;
  },

  vectorAdd: function(vector1, vector2) {
    var vector = [],
        i;

    for (i = 0; i < vector1.length; i++) {
      vector[i] = vector1[i] + vector2[i];
    }
    return vector;
  },

  vectorMult: function(vector, num) {
    var result = [],
        i;

    for (i = 0; i < vector.length; i++) {
      result[i] = vector[i] * num;
    }
    return result;
  },

  vectorLength: function(vector) {
    var result = 0,
        i;
    for (i = 0; i < vector.length; i++) {
      result += vector[i] * vector[i];
    }
    return Math.sqrt(result);
  },

  /* Derived from d3 implementation https://github.com/mbostock/d3/blob/master/src/scale/linear.js#L94 */
  getTicks: function(){
    var m = 5,
        extent = [this.clearMinValue, this.clearMaxValue],
        span = extent[1] - extent[0],
        step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)),
        err = m / span * step,
        ticks = [],
        tick,
        v;

    if (err <= .15) step *= 10;
    else if (err <= .35) step *= 5;
    else if (err <= .75) step *= 2;

    extent[0] = Math.floor(extent[0] / step) * step;
    extent[1] = Math.ceil(extent[1] / step) * step;

    tick = extent[0];
    while (tick <= extent[1]) {
      if (tick == extent[0]) {
        v = this.clearMinValue;
      } else if (tick == extent[1]) {
        v = this.clearMaxValue;
      } else {
        v = tick;
      }
      ticks.push({
        label: tick,
        value: this.getValue(v)
      });
      tick += step;
    }

    return ticks;
  }
};
jvm.ColorScale = function(colors, normalizeFunction, minValue, maxValue) {
  jvm.ColorScale.parentClass.apply(this, arguments);
}

jvm.inherits(jvm.ColorScale, jvm.NumericScale);

jvm.ColorScale.prototype.setScale = function(scale) {
  var i;

  for (i = 0; i < scale.length; i++) {
    this.scale[i] = jvm.ColorScale.rgbToArray(scale[i]);
  }
};

jvm.ColorScale.prototype.getValue = function(value) {
  return jvm.ColorScale.numToRgb(jvm.ColorScale.parentClass.prototype.getValue.call(this, value));
};

jvm.ColorScale.arrayToRgb = function(ar) {
  var rgb = '#',
      d,
      i;

  for (i = 0; i < ar.length; i++) {
    d = ar[i].toString(16);
    rgb += d.length == 1 ? '0'+d : d;
  }
  return rgb;
};

jvm.ColorScale.numToRgb = function(num) {
  num = num.toString(16);

  while (num.length < 6) {
    num = '0' + num;
  }

  return '#'+num;
};

jvm.ColorScale.rgbToArray = function(rgb) {
  rgb = rgb.substr(1);
  return [parseInt(rgb.substr(0, 2), 16), parseInt(rgb.substr(2, 2), 16), parseInt(rgb.substr(4, 2), 16)];
};/**
 * Represents map legend.
 * @constructor
 * @param {Object} params Configuration parameters.
 * @param {String} params.cssClass Additional CSS class to apply to legend element.
 * @param {Boolean} params.vertical If <code>true</code> legend will be rendered as vertical.
 * @param {String} params.title Legend title.
 * @param {Function} params.labelRender Method to convert series values to legend labels.
 */
jvm.Legend = function(params) {
  this.params = params || {};
  this.map = this.params.map;
  this.series = this.params.series;
  this.body = jvm.$('<div/>');
  this.body.addClass('jvectormap-legend');
  if (this.params.cssClass) {
    this.body.addClass(this.params.cssClass);
  }

  if (params.vertical) {
    this.map.legendCntVertical.append( this.body );
  } else {
    this.map.legendCntHorizontal.append( this.body );
  }

  this.render();
}

jvm.Legend.prototype.render = function(){
  var ticks = this.series.scale.getTicks(),
      i,
      inner = jvm.$('<div/>').addClass('jvectormap-legend-inner'),
      tick,
      sample,
      label;

  this.body.html('');
  if (this.params.title) {
    this.body.append(
      jvm.$('<div/>').addClass('jvectormap-legend-title').html(this.params.title)
    );
  }
  this.body.append(inner);

  for (i = 0; i < ticks.length; i++) {
    tick = jvm.$('<div/>').addClass('jvectormap-legend-tick');
    sample = jvm.$('<div/>').addClass('jvectormap-legend-tick-sample');

    switch (this.series.params.attribute) {
      case 'fill':
        if (jvm.isImageUrl(ticks[i].value)) {
          sample.css('background', 'url('+ticks[i].value+')');
        } else {
          sample.css('background', ticks[i].value);
        }
        break;
      case 'stroke':
        sample.css('background', ticks[i].value);
        break;
      case 'image':
        sample.css('background', 'url('+(typeof ticks[i].value === 'object' ? ticks[i].value.url : ticks[i].value)+') no-repeat center center');
        break;
      case 'r':
        jvm.$('<div/>').css({
          'border-radius': ticks[i].value,
          border: this.map.params.markerStyle.initial['stroke-width']+'px '+
                  this.map.params.markerStyle.initial['stroke']+' solid',
          width: ticks[i].value * 2 + 'px',
          height: ticks[i].value * 2 + 'px',
          background: this.map.params.markerStyle.initial['fill']
        }).appendTo(sample);
        break;
    }
    tick.append( sample );
    label = ticks[i].label;
    if (this.params.labelRender) {
      label = this.params.labelRender(label);
    }
    tick.append( jvm.$('<div>'+label+' </div>').addClass('jvectormap-legend-tick-text') );
    inner.append(tick);
  }
  inner.append( jvm.$('<div/>').css('clear', 'both') );
}/**
 * Creates data series.
 * @constructor
 * @param {Object} params Parameters to initialize series with.
 * @param {Array} params.values The data set to visualize.
 * @param {String} params.attribute Numeric, color or image attribute to use for data visualization. This could be: <code>fill</code>, <code>stroke</code>, <code>fill-opacity</code>, <code>stroke-opacity</code> for markers and regions and <code>r</code> (radius) or <code>image</code> for markers only.
 * @param {Array} params.scale Values used to map a dimension of data to a visual representation. The first value sets visualization for minimum value from the data set and the last value sets visualization for the maximum value. There also could be intermidiate values. Default value is <code>['#C8EEFF', '#0071A4']</code>.
 * @param {Function|String} params.normalizeFunction The function used to map input values to the provided scale. This parameter could be provided as function or one of the strings: <code>'linear'</code> or <code>'polynomial'</code>, while <code>'linear'</code> is used by default. The function provided takes value from the data set as an input and returns corresponding value from the scale.
 * @param {Number} params.min Minimum value of the data set. Could be calculated automatically if not provided.
 * @param {Number} params.max Maximum value of the data set. Could be calculated automatically if not provided.
 */
jvm.DataSeries = function (params, elements, map) {
  var scaleConstructor;

  params = params || {};
  params.attribute = params.attribute || "fill";

  this.elements = elements;
  this.params = params;
  this.map = map;

  if (params.attributes) {
    this.setAttributes(params.attributes);
  }

  if (jvm.$.isArray(params.scale)) {
    scaleConstructor =
      params.attribute === "fill" || params.attribute === "stroke"
        ? jvm.ColorScale
        : jvm.NumericScale;
    this.scale = new scaleConstructor(
      params.scale,
      params.normalizeFunction,
      params.min,
      params.max,
    );
  } else if (params.scale) {
    this.scale = new jvm.OrdinalScale(params.scale);
  } else {
    this.scale = new jvm.SimpleScale(params.scale);
  }

  this.values = params.values || {};
  this.setValues(this.values);

  if (this.params.legend) {
    this.legend = new jvm.Legend(
      jvm.$.extend(
        {
          map: this.map,
          series: this,
        },
        this.params.legend,
      ),
    );
  }
};

jvm.DataSeries.prototype = {
  setAttributes: function (key, attr) {
    var attrs = key,
      code;

    if (typeof key == "string") {
      if (this.elements[key]) {
        this.elements[key].setStyle(this.params.attribute, attr);
      }
    } else {
      for (code in attrs) {
        if (this.elements[code]) {
          this.elements[code].element.setStyle(
            this.params.attribute,
            attrs[code],
          );
        }
      }
    }
  },

  /**
   * Set values for the data set.
   * @param {Object} values Object which maps codes of regions or markers to values.
   */
  setValues: function (values) {
    var max = -Number.MAX_VALUE,
      min = Number.MAX_VALUE,
      val,
      cc,
      attrs = {};

    if (
      !(this.scale instanceof jvm.OrdinalScale) &&
      !(this.scale instanceof jvm.SimpleScale)
    ) {
      // we have a color scale as an array
      if (
        typeof this.params.min === "undefined" ||
        typeof this.params.max === "undefined"
      ) {
        // min and/or max are not defined, so calculate them
        for (cc in values) {
          val = parseFloat(values[cc]);
          if (val > max) max = val;
          if (val < min) min = val;
        }
      }

      if (typeof this.params.min === "undefined") {
        this.scale.setMin(min);
        this.params.min = min;
      } else {
        this.scale.setMin(this.params.min);
      }

      if (typeof this.params.max === "undefined") {
        this.scale.setMax(max);
        this.params.max = max;
      } else {
        this.scale.setMax(this.params.max);
      }

      for (cc in values) {
        if (cc != "indexOf") {
          val = parseFloat(values[cc]);
          if (!isNaN(val)) {
            attrs[cc] = this.scale.getValue(val);
          } else {
            attrs[cc] =
              this.elements[cc].element.style.initial[this.params.attribute];
          }
        }
      }
    } else {
      for (cc in values) {
        if (values[cc]) {
          attrs[cc] = this.scale.getValue(values[cc]);
        } else {
          attrs[cc] =
            this.elements[cc].element.style.initial[this.params.attribute];
        }
      }
    }

    this.setAttributes(attrs);
    jvm.$.extend(this.values, values);
  },

  clear: function () {
    var key,
      attrs = {};

    for (key in this.values) {
      if (this.elements[key]) {
        attrs[key] =
          this.elements[key].element.shape.style.initial[this.params.attribute];
      }
    }
    this.setAttributes(attrs);
    this.values = {};
  },

  clearAndSet: function (values) {
    this.clear();
    this.setValues(values);
  },

  /**
   * Set scale of the data series.
   * @param {Array} scale Values representing scale.
   */
  setScale: function (scale) {
    this.scale.setScale(scale);
    if (this.values) {
      this.setValues(this.values);
    }
  },

  /**
   * Set normalize function of the data series.
   * @param {Function|String} f Normalize function.
   */
  setNormalizeFunction: function (f) {
    this.scale.setNormalizeFunction(f);
    if (this.values) {
      this.setValues(this.values);
    }
  },
};
/**
 * Contains methods for transforming point on sphere to
 * Cartesian coordinates using various projections.
 * @class
 */
jvm.Proj = {
  degRad: 180 / Math.PI,
  radDeg: Math.PI / 180,
  radius: 6381372,

  sgn: function(n){
    if (n > 0) {
      return 1;
    } else if (n < 0) {
      return -1;
    } else {
      return n;
    }
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Miller projection
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  mill: function(lat, lng, c){
    return {
      x: this.radius * (lng - c) * this.radDeg,
      y: - this.radius * Math.log(Math.tan((45 + 0.4 * lat) * this.radDeg)) / 0.8
    };
  },

  /**
   * Inverse function of mill()
   * Converts Cartesian coordinates to point on sphere using Miller projection
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  mill_inv: function(x, y, c){
    return {
      lat: (2.5 * Math.atan(Math.exp(0.8 * y / this.radius)) - 5 * Math.PI / 8) * this.degRad,
      lng: (c * this.radDeg + x / this.radius) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Mercator projection
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  merc: function(lat, lng, c){
    return {
      x: this.radius * (lng - c) * this.radDeg,
      y: - this.radius * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360))
    };
  },

  /**
   * Inverse function of merc()
   * Converts Cartesian coordinates to point on sphere using Mercator projection
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  merc_inv: function(x, y, c){
    return {
      lat: (2 * Math.atan(Math.exp(y / this.radius)) - Math.PI / 2) * this.degRad,
      lng: (c * this.radDeg + x / this.radius) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Albers Equal-Area Conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/AlbersEqual-AreaConicProjection.html">Albers Equal-Area Conic projection</a>
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  aea: function(lat, lng, c){
    var fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 29.5 * this.radDeg,
        fi2 = 45.5 * this.radDeg,
        fi = lat * this.radDeg,
        lambda = lng * this.radDeg,
        n = (Math.sin(fi1)+Math.sin(fi2)) / 2,
        C = Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),
        theta = n*(lambda-lambda0),
        ro = Math.sqrt(C-2*n*Math.sin(fi))/n,
        ro0 = Math.sqrt(C-2*n*Math.sin(fi0))/n;

    return {
      x: ro * Math.sin(theta) * this.radius,
      y: - (ro0 - ro * Math.cos(theta)) * this.radius
    };
  },

  /**
   * Converts Cartesian coordinates to the point on sphere using Albers Equal-Area Conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/AlbersEqual-AreaConicProjection.html">Albers Equal-Area Conic projection</a>
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  aea_inv: function(xCoord, yCoord, c){
    var x = xCoord / this.radius,
        y = yCoord / this.radius,
        fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 29.5 * this.radDeg,
        fi2 = 45.5 * this.radDeg,
        n = (Math.sin(fi1)+Math.sin(fi2)) / 2,
        C = Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),
        ro0 = Math.sqrt(C-2*n*Math.sin(fi0))/n,
        ro = Math.sqrt(x*x+(ro0-y)*(ro0-y)),
        theta = Math.atan( x / (ro0 - y) );

    return {
      lat: (Math.asin((C - ro * ro * n * n) / (2 * n))) * this.degRad,
      lng: (lambda0 + theta / n) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Lambert conformal
   * conic projection
   * @see <a href="http://mathworld.wolfram.com/LambertConformalConicProjection.html">Lambert Conformal Conic Projection</a>
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  lcc: function(lat, lng, c){
    var fi0 = 0,
        lambda0 = c * this.radDeg,
        lambda = lng * this.radDeg,
        fi1 = 33 * this.radDeg,
        fi2 = 45 * this.radDeg,
        fi = lat * this.radDeg,
        n = Math.log( Math.cos(fi1) * (1 / Math.cos(fi2)) ) / Math.log( Math.tan( Math.PI / 4 + fi2 / 2) * (1 / Math.tan( Math.PI / 4 + fi1 / 2) ) ),
        F = ( Math.cos(fi1) * Math.pow( Math.tan( Math.PI / 4 + fi1 / 2 ), n ) ) / n,
        ro = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi / 2 ), n ),
        ro0 = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi0 / 2 ), n );

    return {
      x: ro * Math.sin( n * (lambda - lambda0) ) * this.radius,
      y: - (ro0 - ro * Math.cos( n * (lambda - lambda0) ) ) * this.radius
    };
  },

  /**
   * Converts Cartesian coordinates to the point on sphere using Lambert conformal conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/LambertConformalConicProjection.html">Lambert Conformal Conic Projection</a>
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  lcc_inv: function(xCoord, yCoord, c){
    var x = xCoord / this.radius,
        y = yCoord / this.radius,
        fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 33 * this.radDeg,
        fi2 = 45 * this.radDeg,
        n = Math.log( Math.cos(fi1) * (1 / Math.cos(fi2)) ) / Math.log( Math.tan( Math.PI / 4 + fi2 / 2) * (1 / Math.tan( Math.PI / 4 + fi1 / 2) ) ),
        F = ( Math.cos(fi1) * Math.pow( Math.tan( Math.PI / 4 + fi1 / 2 ), n ) ) / n,
        ro0 = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi0 / 2 ), n ),
        ro = this.sgn(n) * Math.sqrt(x*x+(ro0-y)*(ro0-y)),
        theta = Math.atan( x / (ro0 - y) );

    return {
      lat: (2 * Math.atan(Math.pow(F/ro, 1/n)) - Math.PI / 2) * this.degRad,
      lng: (lambda0 + theta / n) * this.degRad
    };
  }
};jvm.MapObject = function(config){};

jvm.MapObject.prototype.getLabelText = function(key){
  var text;

  if (this.config.label) {
    if (typeof this.config.label.render === 'function') {
      text = this.config.label.render(key);
    } else {
      text = key;
    }
  } else {
    text = null;
  }
  return text;
}

jvm.MapObject.prototype.getLabelOffsets = function(key){
  var offsets;

  if (this.config.label) {
    if (typeof this.config.label.offsets === 'function') {
      offsets = this.config.label.offsets(key);
    } else if (typeof this.config.label.offsets === 'object') {
      offsets = this.config.label.offsets[key];
    }
  }
  return offsets || [0, 0];
}

/**
 * Set hovered state to the element. Hovered state means mouse cursor is over element. Styles will be updates respectively.
 * @param {Boolean} isHovered <code>true</code> to make element hovered, <code>false</code> otherwise.
 */
jvm.MapObject.prototype.setHovered = function(isHovered){
  if (this.isHovered !== isHovered) {
    this.isHovered = isHovered;
    this.shape.isHovered = isHovered;
    this.shape.updateStyle();
    if (this.label) {
      this.label.isHovered = isHovered;
      this.label.updateStyle();
    }
  }
};

/**
 * Set selected state to the element. Styles will be updates respectively.
 * @param {Boolean} isSelected <code>true</code> to make element selected, <code>false</code> otherwise.
 */
jvm.MapObject.prototype.setSelected = function(isSelected){
  if (this.isSelected !== isSelected) {
    this.isSelected = isSelected;
    this.shape.isSelected = isSelected;
    this.shape.updateStyle();
    if (this.label) {
      this.label.isSelected = isSelected;
      this.label.updateStyle();
    }
    jvm.$(this.shape).trigger('selected', [isSelected]);
  }
};

jvm.MapObject.prototype.setStyle = function(){
	this.shape.setStyle.apply(this.shape, arguments);
};

jvm.MapObject.prototype.remove = function(){
  this.shape.remove();
  if (this.label) {
    this.label.remove();
  }
};jvm.Region = function(config){
  var bbox,
      text,
      offsets,
      labelDx,
      labelDy;

  this.config = config;
  this.map = this.config.map;

  this.shape = config.canvas.addPath({
    d: config.path,
    'data-code': config.code
  }, config.style, config.canvas.rootElement);
  this.shape.addClass('jvectormap-region jvectormap-element');

  bbox = this.shape.getBBox();

  text = this.getLabelText(config.code);
  if (this.config.label && text) {
    offsets = this.getLabelOffsets(config.code);
    this.labelX = bbox.x + bbox.width / 2 + offsets[0];
    this.labelY = bbox.y + bbox.height / 2 + offsets[1];
    this.label = config.canvas.addText({
      text: text,
      'text-anchor': 'middle',
      'alignment-baseline': 'central',
      x: this.labelX,
      y: this.labelY,
      'data-code': config.code
    }, config.labelStyle, config.labelsGroup);
    this.label.addClass('jvectormap-region jvectormap-element');
  }
};

jvm.inherits(jvm.Region, jvm.MapObject);

jvm.Region.prototype.updateLabelPosition = function(){
  if (this.label) {
    this.label.set({
      x: this.labelX * this.map.scale + this.map.transX * this.map.scale,
      y: this.labelY * this.map.scale + this.map.transY * this.map.scale
    });
  }
};jvm.Marker = function(config){
  var text,
      offsets;

  this.config = config;
  this.map = this.config.map;

  this.isImage = !!this.config.style.initial.image;
  this.createShape();

  text = this.getLabelText(config.index);
  if (this.config.label && text) {
    this.offsets = this.getLabelOffsets(config.index);
    this.labelX = config.cx / this.map.scale - this.map.transX;
    this.labelY = config.cy / this.map.scale - this.map.transY;
    this.label = config.canvas.addText({
      text: text,
      'data-index': config.index,
      dy: "0.6ex",
      x: this.labelX,
      y: this.labelY
    }, config.labelStyle, config.labelsGroup);

    this.label.addClass('jvectormap-marker jvectormap-element');
  }
};

jvm.inherits(jvm.Marker, jvm.MapObject);

jvm.Marker.prototype.createShape = function(){
  var that = this;

  if (this.shape) {
    this.shape.remove();
  }
  this.shape = this.config.canvas[this.isImage ? 'addImage' : 'addCircle']({
    "data-index": this.config.index,
    cx: this.config.cx,
    cy: this.config.cy
  }, this.config.style, this.config.group);

  this.shape.addClass('jvectormap-marker jvectormap-element');

  if (this.isImage) {
    jvm.$(this.shape.node).on('imageloaded', function(){
      that.updateLabelPosition();
    });
  }
};

jvm.Marker.prototype.updateLabelPosition = function(){
  if (this.label) {
    this.label.set({
      x: this.labelX * this.map.scale + this.offsets[0] +
         this.map.transX * this.map.scale + 5 + (this.isImage ? (this.shape.width || 0) / 2 : this.shape.properties.r),
      y: this.labelY * this.map.scale + this.map.transY * this.map.scale + this.offsets[1]
    });
  }
};

jvm.Marker.prototype.setStyle = function(property, value){
  var isImage;

  jvm.Marker.parentClass.prototype.setStyle.apply(this, arguments);

  if (property === 'r') {
    this.updateLabelPosition();
  }

  isImage = !!this.shape.get('image');
  if (isImage != this.isImage) {
    this.isImage = isImage;
    this.config.style = jvm.$.extend(true, {}, this.shape.style);
    this.createShape();
  }
};/**
 * Creates map, draws paths, binds events.
 * @constructor
 * @param {Object} params Parameters to initialize map with.
 * @param {String} params.map Name of the map in the format <code>territory_proj_lang</code> where <code>territory</code> is a unique code or name of the territory which the map represents (ISO 3166 standard is used where possible), <code>proj</code> is a name of projection used to generate representation of the map on the plane (projections are named according to the conventions of proj4 utility) and <code>lang</code> is a code of the language, used for the names of regions.
 * @param {String} params.backgroundColor Background color of the map in CSS format.
 * @param {Boolean} params.zoomOnScroll When set to true map could be zoomed using mouse scroll. Default value is <code>true</code>.
 * @param {Number} params.zoomOnScrollSpeed Mouse scroll speed. Number from 1 to 10. Default value is <code>3</code>.
 * @param {Boolean} params.panOnDrag When set to true, the map pans when being dragged. Default value is <code>true</code>.
 * @param {Number} params.zoomMax Indicates the maximum zoom ratio which could be reached zooming the map. Default value is <code>8</code>.
 * @param {Number} params.zoomMin Indicates the minimum zoom ratio which could be reached zooming the map. Default value is <code>1</code>.
 * @param {Number} params.zoomStep Indicates the multiplier used to zoom map with +/- buttons. Default value is <code>1.6</code>.
 * @param {Boolean} params.zoomAnimate Indicates whether or not to animate changing of map zoom with zoom buttons.
 * @param {Boolean} params.regionsSelectable When set to true regions of the map could be selected. Default value is <code>false</code>.
 * @param {Boolean} params.regionsSelectableOne Allow only one region to be selected at the moment. Default value is <code>false</code>.
 * @param {Boolean} params.markersSelectable When set to true markers on the map could be selected. Default value is <code>false</code>.
 * @param {Boolean} params.markersSelectableOne Allow only one marker to be selected at the moment. Default value is <code>false</code>.
 * @param {Object} params.regionStyle Set the styles for the map's regions. Each region or marker has four states: <code>initial</code> (default state), <code>hover</code> (when the mouse cursor is over the region or marker), <code>selected</code> (when region or marker is selected), <code>selectedHover</code> (when the mouse cursor is over the region or marker and it's selected simultaneously). Styles could be set for each of this states. Default value for that parameter is:
<pre>{
  initial: {
    fill: 'white',
    "fill-opacity": 1,
    stroke: 'none',
    "stroke-width": 0,
    "stroke-opacity": 1
  },
  hover: {
    "fill-opacity": 0.8,
    cursor: 'pointer'
  },
  selected: {
    fill: 'yellow'
  },
  selectedHover: {
  }
}</pre>
* @param {Object} params.regionLabelStyle Set the styles for the regions' labels. Each region or marker has four states: <code>initial</code> (default state), <code>hover</code> (when the mouse cursor is over the region or marker), <code>selected</code> (when region or marker is selected), <code>selectedHover</code> (when the mouse cursor is over the region or marker and it's selected simultaneously). Styles could be set for each of this states. Default value for that parameter is:
<pre>{
  initial: {
    'font-family': 'Verdana',
    'font-size': '12',
    'font-weight': 'bold',
    cursor: 'default',
    fill: 'black'
  },
  hover: {
    cursor: 'pointer'
  }
}</pre>
 * @param {Object} params.markerStyle Set the styles for the map's markers. Any parameter suitable for <code>regionStyle</code> could be used as well as numeric parameter <code>r</code> to set the marker's radius. Default value for that parameter is:
<pre>{
  initial: {
    fill: 'grey',
    stroke: '#505050',
    "fill-opacity": 1,
    "stroke-width": 1,
    "stroke-opacity": 1,
    r: 5
  },
  hover: {
    stroke: 'black',
    "stroke-width": 2,
    cursor: 'pointer'
  },
  selected: {
    fill: 'blue'
  },
  selectedHover: {
  }
}</pre>
You can also use <code>image</code> style attribute for markers. By default marker images are centered with the target point on map. To supply a custom offset please use the following format:
<pre>{
  url: 'image/url',
  offset: [-10, 5]
}</pre>
 * @param {Object} params.markerLabelStyle Set the styles for the markers' labels. Default value for that parameter is:
<pre>{
  initial: {
    'font-family': 'Verdana',
    'font-size': '12',
    'font-weight': 'bold',
    cursor: 'default',
    fill: 'black'
  },
  hover: {
    cursor: 'pointer'
  }
}</pre>
 * @param {Object|Array} params.markers Set of markers to add to the map during initialization. In case of array is provided, codes of markers will be set as string representations of array indexes. Each marker is represented by <code>latLng</code> (array of two numeric values), <code>name</code> (string which will be show on marker's tip) and any marker styles.
 * @param {Object} params.series Object with two keys: <code>markers</code> and <code>regions</code>. Each of which is an array of series configs to be applied to the respective map elements. See <a href="jvm.DataSeries.html">DataSeries</a> description for a list of parameters available.
 * @param {Object|String} params.focusOn This parameter sets the initial position and scale of the map viewport. See <code>setFocus</code> docuemntation for possible parameters.
 * @param {Object} params.labels Defines parameters for rendering static labels. Object could contain two keys: <code>regions</code> and <code>markers</code>. Each key value defines configuration object with the following possible options:
<ul>
  <li><code>render {Function}</code> - defines method for converting region code or marker index to actual label value.</li>
  <li><code>offsets {Object|Function}</code> - provides method or object which could be used to define label offset by region code or marker index.</li>
</ul>
<b>Plase note: static labels feature is not supported in Internet Explorer 8 and below.</b>
 * @param {Array|Object|String} params.selectedRegions Set initially selected regions.
 * @param {Array|Object|String} params.selectedMarkers Set initially selected markers.
 * @param {Function} params.onRegionTipShow <code>(Event e, Object tip, String code)</code> Will be called right before the region tip is going to be shown.
 * @param {Function} params.onRegionOver <code>(Event e, String code)</code> Will be called on region mouse over event.
 * @param {Function} params.onRegionOut <code>(Event e, String code)</code> Will be called on region mouse out event.
 * @param {Function} params.onRegionClick <code>(Event e, String code)</code> Will be called on region click event.
 * @param {Function} params.onRegionSelected <code>(Event e, String code, Boolean isSelected, Array selectedRegions)</code> Will be called when region is (de)selected. <code>isSelected</code> parameter of the callback indicates whether region is selected or not. <code>selectedRegions</code> contains codes of all currently selected regions.
 * @param {Function} params.onMarkerTipShow <code>(Event e, Object tip, String code)</code> Will be called right before the marker tip is going to be shown.
 * @param {Function} params.onMarkerOver <code>(Event e, String code)</code> Will be called on marker mouse over event.
 * @param {Function} params.onMarkerOut <code>(Event e, String code)</code> Will be called on marker mouse out event.
 * @param {Function} params.onMarkerClick <code>(Event e, String code)</code> Will be called on marker click event.
 * @param {Function} params.onMarkerSelected <code>(Event e, String code, Boolean isSelected, Array selectedMarkers)</code> Will be called when marker is (de)selected. <code>isSelected</code> parameter of the callback indicates whether marker is selected or not. <code>selectedMarkers</code> contains codes of all currently selected markers.
 * @param {Function} params.onViewportChange <code>(Event e, Number scale)</code> Triggered when the map's viewport is changed (map was panned or zoomed).
 */
jvm.Map = function (params) {
  var map = this,
    e;

  this.params = jvm.$.extend(true, {}, jvm.Map.defaultParams, params);

  if (!jvm.Map.maps[this.params.map]) {
    throw new Error(
      "Attempt to use map which was not loaded: " + this.params.map,
    );
  }

  this.mapData = jvm.Map.maps[this.params.map];
  this.markers = {};
  this.regions = {};
  this.regionsColors = {};
  this.regionsData = {};

  this.container = jvm.$("<div>").addClass("jvectormap-container");
  if (this.params.container) {
    this.params.container.append(this.container);
  }
  this.container.data("mapObject", this);

  this.defaultWidth = this.mapData.width;
  this.defaultHeight = this.mapData.height;

  this.setBackgroundColor(this.params.backgroundColor);

  this.onResize = function () {
    map.updateSize();
  };
  jvm.$(window).resize(this.onResize);

  for (e in jvm.Map.apiEvents) {
    if (this.params[e]) {
      this.container.bind(jvm.Map.apiEvents[e] + ".jvectormap", this.params[e]);
    }
  }

  this.canvas = new jvm.VectorCanvas(
    this.container[0],
    this.width,
    this.height,
  );

  if (this.params.bindTouchEvents) {
    if (
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch)
    ) {
      this.bindContainerTouchEvents();
    } else if (window.MSGesture) {
      this.bindContainerPointerEvents();
    }
  }
  this.bindContainerEvents();
  this.bindElementEvents();
  this.createTip();
  if (this.params.zoomButtons) {
    this.bindZoomButtons();
  }

  this.createRegions();
  this.createMarkers(this.params.markers || {});

  this.updateSize();

  if (this.params.focusOn) {
    if (typeof this.params.focusOn === "string") {
      this.params.focusOn = { region: this.params.focusOn };
    } else if (jvm.$.isArray(this.params.focusOn)) {
      this.params.focusOn = { regions: this.params.focusOn };
    }
    this.setFocus(this.params.focusOn);
  }

  if (this.params.selectedRegions) {
    this.setSelectedRegions(this.params.selectedRegions);
  }
  if (this.params.selectedMarkers) {
    this.setSelectedMarkers(this.params.selectedMarkers);
  }

  this.legendCntHorizontal = jvm
    .$("<div/>")
    .addClass("jvectormap-legend-cnt jvectormap-legend-cnt-h");
  this.legendCntVertical = jvm
    .$("<div/>")
    .addClass("jvectormap-legend-cnt jvectormap-legend-cnt-v");
  this.container.append(this.legendCntHorizontal);
  this.container.append(this.legendCntVertical);

  if (this.params.series) {
    this.createSeries();
  }
};

jvm.Map.prototype = {
  transX: 0,
  transY: 0,
  scale: 1,
  baseTransX: 0,
  baseTransY: 0,
  baseScale: 1,

  width: 0,
  height: 0,

  /**
   * Set background color of the map.
   * @param {String} backgroundColor Background color in CSS format.
   */
  setBackgroundColor: function (backgroundColor) {
    this.container.css("background-color", backgroundColor);
  },

  resize: function () {
    var curBaseScale = this.baseScale;
    if (this.width / this.height > this.defaultWidth / this.defaultHeight) {
      this.baseScale = this.height / this.defaultHeight;
      this.baseTransX =
        Math.abs(this.width - this.defaultWidth * this.baseScale) /
        (2 * this.baseScale);
    } else {
      this.baseScale = this.width / this.defaultWidth;
      this.baseTransY =
        Math.abs(this.height - this.defaultHeight * this.baseScale) /
        (2 * this.baseScale);
    }
    this.scale *= this.baseScale / curBaseScale;
    this.transX *= this.baseScale / curBaseScale;
    this.transY *= this.baseScale / curBaseScale;
  },

  /**
   * Synchronize the size of the map with the size of the container. Suitable in situations where the size of the container is changed programmatically or container is shown after it became visible.
   */
  updateSize: function () {
    this.width = this.container.width();
    this.height = this.container.height();
    this.resize();
    this.canvas.setSize(this.width, this.height);
    this.applyTransform();
  },

  /**
   * Reset all the series and show the map with the initial zoom.
   */
  reset: function () {
    var key, i;

    for (key in this.series) {
      for (i = 0; i < this.series[key].length; i++) {
        this.series[key][i].clear();
      }
    }
    this.scale = this.baseScale;
    this.transX = this.baseTransX;
    this.transY = this.baseTransY;
    this.applyTransform();
  },

  applyTransform: function () {
    var maxTransX, maxTransY, minTransX, minTransY;

    if (this.defaultWidth * this.scale <= this.width) {
      maxTransX =
        (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
      minTransX =
        (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
    } else {
      maxTransX = 0;
      minTransX = (this.width - this.defaultWidth * this.scale) / this.scale;
    }

    if (this.defaultHeight * this.scale <= this.height) {
      maxTransY =
        (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
      minTransY =
        (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
    } else {
      maxTransY = 0;
      minTransY = (this.height - this.defaultHeight * this.scale) / this.scale;
    }

    if (this.transY > maxTransY) {
      this.transY = maxTransY;
    } else if (this.transY < minTransY) {
      this.transY = minTransY;
    }
    if (this.transX > maxTransX) {
      this.transX = maxTransX;
    } else if (this.transX < minTransX) {
      this.transX = minTransX;
    }

    this.canvas.applyTransformParams(this.scale, this.transX, this.transY);

    if (this.markers) {
      this.repositionMarkers();
    }

    this.repositionLabels();

    this.container.trigger("viewportChange", [
      this.scale / this.baseScale,
      this.transX,
      this.transY,
    ]);
  },

  bindContainerEvents: function () {
    var mouseDown = false,
      oldPageX,
      oldPageY,
      map = this;

    if (this.params.panOnDrag) {
      this.container
        .mousemove(function (e) {
          if (mouseDown) {
            map.transX -= (oldPageX - e.pageX) / map.scale;
            map.transY -= (oldPageY - e.pageY) / map.scale;

            map.applyTransform();

            oldPageX = e.pageX;
            oldPageY = e.pageY;
          }
          return false;
        })
        .mousedown(function (e) {
          mouseDown = true;
          oldPageX = e.pageX;
          oldPageY = e.pageY;
          return false;
        });

      this.onContainerMouseUp = function () {
        mouseDown = false;
      };
      jvm.$("body").mouseup(this.onContainerMouseUp);
    }

    if (this.params.zoomOnScroll) {
      this.container.mousewheel(function (event, delta, deltaX, deltaY) {
        var offset = jvm.$(map.container).offset(),
          centerX = event.pageX - offset.left,
          centerY = event.pageY - offset.top,
          zoomStep = Math.pow(
            1 + map.params.zoomOnScrollSpeed / 1000,
            event.deltaFactor * event.deltaY,
          );

        map.tip.hide();

        map.setScale(map.scale * zoomStep, centerX, centerY);
        event.preventDefault();
      });
    }
  },

  bindContainerTouchEvents: function () {
    var touchStartScale,
      touchStartDistance,
      map = this,
      touchX,
      touchY,
      centerTouchX,
      centerTouchY,
      lastTouchesLength,
      handleTouchEvent = function (e) {
        var touches = e.originalEvent.touches,
          offset,
          scale,
          transXOld,
          transYOld;

        if (e.type == "touchstart") {
          lastTouchesLength = 0;
        }

        if (touches.length == 1) {
          if (lastTouchesLength == 1) {
            transXOld = map.transX;
            transYOld = map.transY;
            map.transX -= (touchX - touches[0].pageX) / map.scale;
            map.transY -= (touchY - touches[0].pageY) / map.scale;
            map.applyTransform();
            map.tip.hide();
            if (transXOld != map.transX || transYOld != map.transY) {
              e.preventDefault();
            }
          }
          touchX = touches[0].pageX;
          touchY = touches[0].pageY;
        } else if (touches.length == 2) {
          if (lastTouchesLength == 2) {
            scale =
              Math.sqrt(
                Math.pow(touches[0].pageX - touches[1].pageX, 2) +
                  Math.pow(touches[0].pageY - touches[1].pageY, 2),
              ) / touchStartDistance;
            map.setScale(touchStartScale * scale, centerTouchX, centerTouchY);
            map.tip.hide();
            e.preventDefault();
          } else {
            offset = jvm.$(map.container).offset();
            if (touches[0].pageX > touches[1].pageX) {
              centerTouchX =
                touches[1].pageX + (touches[0].pageX - touches[1].pageX) / 2;
            } else {
              centerTouchX =
                touches[0].pageX + (touches[1].pageX - touches[0].pageX) / 2;
            }
            if (touches[0].pageY > touches[1].pageY) {
              centerTouchY =
                touches[1].pageY + (touches[0].pageY - touches[1].pageY) / 2;
            } else {
              centerTouchY =
                touches[0].pageY + (touches[1].pageY - touches[0].pageY) / 2;
            }
            centerTouchX -= offset.left;
            centerTouchY -= offset.top;
            touchStartScale = map.scale;
            touchStartDistance = Math.sqrt(
              Math.pow(touches[0].pageX - touches[1].pageX, 2) +
                Math.pow(touches[0].pageY - touches[1].pageY, 2),
            );
          }
        }

        lastTouchesLength = touches.length;
      };

    jvm.$(this.container).bind("touchstart", handleTouchEvent);
    jvm.$(this.container).bind("touchmove", handleTouchEvent);
  },

  bindContainerPointerEvents: function () {
    var map = this,
      gesture = new MSGesture(),
      element = this.container[0],
      handlePointerDownEvent = function (e) {
        gesture.addPointer(e.pointerId);
      },
      handleGestureEvent = function (e) {
        var offset, scale, transXOld, transYOld;

        if (e.translationX != 0 || e.translationY != 0) {
          transXOld = map.transX;
          transYOld = map.transY;
          map.transX += e.translationX / map.scale;
          map.transY += e.translationY / map.scale;
          map.applyTransform();
          map.tip.hide();
          if (transXOld != map.transX || transYOld != map.transY) {
            e.preventDefault();
          }
        }
        if (e.scale != 1) {
          map.setScale(map.scale * e.scale, e.offsetX, e.offsetY);
          map.tip.hide();
          e.preventDefault();
        }
      };

    gesture.target = element;
    element.addEventListener("MSGestureChange", handleGestureEvent, false);
    element.addEventListener("pointerdown", handlePointerDownEvent, false);
  },

  bindElementEvents: function () {
    var map = this,
      pageX,
      pageY,
      mouseMoved;

    this.container.mousemove(function (e) {
      if (Math.abs(pageX - e.pageX) + Math.abs(pageY - e.pageY) > 2) {
        mouseMoved = true;
      }
    });

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate(
      "[class~='jvectormap-element']",
      "mouseover mouseout",
      function (e) {
        var baseVal =
            jvm.$(this).attr("class").baseVal || jvm.$(this).attr("class"),
          type =
            baseVal.indexOf("jvectormap-region") === -1 ? "marker" : "region",
          code =
            type == "region"
              ? jvm.$(this).attr("data-code")
              : jvm.$(this).attr("data-index"),
          element =
            type == "region"
              ? map.regions[code].element
              : map.markers[code].element,
          tipText =
            type == "region"
              ? map.mapData.paths[code].name
              : map.markers[code].config.name || "",
          tipShowEvent = jvm.$.Event(type + "TipShow.jvectormap"),
          overEvent = jvm.$.Event(type + "Over.jvectormap");

        if (e.type == "mouseover") {
          map.container.trigger(overEvent, [code]);
          if (!overEvent.isDefaultPrevented()) {
            element.setHovered(true);
          }

          map.tip.text(tipText);
          map.container.trigger(tipShowEvent, [map.tip, code]);
          if (!tipShowEvent.isDefaultPrevented()) {
            map.tip.show();
            map.tipWidth = map.tip.width();
            map.tipHeight = map.tip.height();
          }
        } else {
          element.setHovered(false);
          map.tip.hide();
          map.container.trigger(type + "Out.jvectormap", [code]);
        }
      },
    );

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate(
      "[class~='jvectormap-element']",
      "mousedown",
      function (e) {
        pageX = e.pageX;
        pageY = e.pageY;
        mouseMoved = false;
      },
    );

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate(
      "[class~='jvectormap-element']",
      "mouseup",
      function () {
        var baseVal = jvm.$(this).attr("class").baseVal
            ? jvm.$(this).attr("class").baseVal
            : jvm.$(this).attr("class"),
          type =
            baseVal.indexOf("jvectormap-region") === -1 ? "marker" : "region",
          code =
            type == "region"
              ? jvm.$(this).attr("data-code")
              : jvm.$(this).attr("data-index"),
          clickEvent = jvm.$.Event(type + "Click.jvectormap"),
          element =
            type == "region"
              ? map.regions[code].element
              : map.markers[code].element;

        if (!mouseMoved) {
          map.container.trigger(clickEvent, [code]);
          if (
            (type === "region" && map.params.regionsSelectable) ||
            (type === "marker" && map.params.markersSelectable)
          ) {
            if (!clickEvent.isDefaultPrevented()) {
              if (map.params[type + "sSelectableOne"]) {
                map.clearSelected(type + "s");
              }
              element.setSelected(!element.isSelected);
            }
          }
        }
      },
    );
  },

  bindZoomButtons: function () {
    var map = this;

    jvm
      .$("<div/>")
      .addClass("jvectormap-zoomin")
      .text("+")
      .appendTo(this.container);
    jvm
      .$("<div/>")
      .addClass("jvectormap-zoomout")
      .html("&#x2212;")
      .appendTo(this.container);

    this.container.find(".jvectormap-zoomin").click(function () {
      map.setScale(
        map.scale * map.params.zoomStep,
        map.width / 2,
        map.height / 2,
        false,
        map.params.zoomAnimate,
      );
    });
    this.container.find(".jvectormap-zoomout").click(function () {
      map.setScale(
        map.scale / map.params.zoomStep,
        map.width / 2,
        map.height / 2,
        false,
        map.params.zoomAnimate,
      );
    });
  },

  createTip: function () {
    var map = this;

    this.tip = jvm
      .$("<div/>")
      .addClass("jvectormap-tip")
      .appendTo(jvm.$("body"));

    this.container.mousemove(function (e) {
      var left = e.pageX - 15 - map.tipWidth,
        top = e.pageY - 15 - map.tipHeight;

      if (left < 5) {
        left = e.pageX + 15;
      }
      if (top < 5) {
        top = e.pageY + 15;
      }

      map.tip.css({
        left: left,
        top: top,
      });
    });
  },

  setScale: function (scale, anchorX, anchorY, isCentered, animate) {
    var viewportChangeEvent = jvm.$.Event("zoom.jvectormap"),
      interval,
      that = this,
      i = 0,
      count = Math.abs(
        Math.round(((scale - this.scale) * 60) / Math.max(scale, this.scale)),
      ),
      scaleStart,
      scaleDiff,
      transXStart,
      transXDiff,
      transYStart,
      transYDiff,
      transX,
      transY,
      deferred = new jvm.$.Deferred();

    if (scale > this.params.zoomMax * this.baseScale) {
      scale = this.params.zoomMax * this.baseScale;
    } else if (scale < this.params.zoomMin * this.baseScale) {
      scale = this.params.zoomMin * this.baseScale;
    }

    if (typeof anchorX != "undefined" && typeof anchorY != "undefined") {
      const zoomStep = scale / this.scale;
      if (isCentered) {
        transX =
          anchorX +
          (this.defaultWidth * (this.width / (this.defaultWidth * scale))) / 2;
        transY =
          anchorY +
          (this.defaultHeight * (this.height / (this.defaultHeight * scale))) /
            2;
      } else {
        transX = this.transX - ((zoomStep - 1) / scale) * anchorX;
        transY = this.transY - ((zoomStep - 1) / scale) * anchorY;
      }
    }

    if (animate && count > 0) {
      scaleStart = this.scale;
      scaleDiff = (scale - scaleStart) / count;
      transXStart = this.transX * this.scale;
      transYStart = this.transY * this.scale;
      transXDiff = (transX * scale - transXStart) / count;
      transYDiff = (transY * scale - transYStart) / count;
      interval = setInterval(function () {
        i += 1;
        that.scale = scaleStart + scaleDiff * i;
        that.transX = (transXStart + transXDiff * i) / that.scale;
        that.transY = (transYStart + transYDiff * i) / that.scale;
        that.applyTransform();
        if (i == count) {
          clearInterval(interval);
          that.container.trigger(viewportChangeEvent, [scale / that.baseScale]);
          deferred.resolve();
        }
      }, 10);
    } else {
      this.transX = transX;
      this.transY = transY;
      this.scale = scale;
      this.applyTransform();
      this.container.trigger(viewportChangeEvent, [scale / this.baseScale]);
      deferred.resolve();
    }

    return deferred;
  },

  /**
   * Set the map's viewport to the specific point and set zoom of the map to the specific level. Point and zoom level could be defined in two ways: using the code of some region to focus on or a central point and zoom level as numbers.
   * @param This method takes a configuration object as the single argument. The options passed to it are the following:
   * @param {Array} params.regions Array of region codes to zoom to.
   * @param {String} params.region Region code to zoom to.
   * @param {Number} params.scale Map scale to set.
   * @param {Number} params.lat Latitude to set viewport to.
   * @param {Number} params.lng Longitude to set viewport to.
   * @param {Number} params.x Number from 0 to 1 specifying the horizontal coordinate of the central point of the viewport.
   * @param {Number} params.y Number from 0 to 1 specifying the vertical coordinate of the central point of the viewport.
   * @param {Boolean} params.animate Indicates whether or not to animate the scale change and transition.
   */
  setFocus: function (config) {
    var bbox, itemBbox, newBbox, codes, i, point;

    config = config || {};

    if (config.region) {
      codes = [config.region];
    } else if (config.regions) {
      codes = config.regions;
    }

    if (codes) {
      for (i = 0; i < codes.length; i++) {
        if (this.regions[codes[i]]) {
          itemBbox = this.regions[codes[i]].element.shape.getBBox();
          if (itemBbox) {
            if (typeof bbox == "undefined") {
              bbox = itemBbox;
            } else {
              newBbox = {
                x: Math.min(bbox.x, itemBbox.x),
                y: Math.min(bbox.y, itemBbox.y),
                width:
                  Math.max(bbox.x + bbox.width, itemBbox.x + itemBbox.width) -
                  Math.min(bbox.x, itemBbox.x),
                height:
                  Math.max(bbox.y + bbox.height, itemBbox.y + itemBbox.height) -
                  Math.min(bbox.y, itemBbox.y),
              };
              bbox = newBbox;
            }
          }
        }
      }
      return this.setScale(
        Math.min(this.width / bbox.width, this.height / bbox.height),
        -(bbox.x + bbox.width / 2),
        -(bbox.y + bbox.height / 2),
        true,
        config.animate,
      );
    } else {
      if (config.lat !== undefined && config.lng !== undefined) {
        point = this.latLngToPoint(config.lat, config.lng);
        config.x = this.transX - point.x / this.scale;
        config.y = this.transY - point.y / this.scale;
      } else if (config.x && config.y) {
        config.x *= -this.defaultWidth;
        config.y *= -this.defaultHeight;
      }
      return this.setScale(
        config.scale * this.baseScale,
        config.x,
        config.y,
        true,
        config.animate,
      );
    }
  },

  getSelected: function (type) {
    var key,
      selected = [];

    for (key in this[type]) {
      if (this[type][key].element.isSelected) {
        selected.push(key);
      }
    }
    return selected;
  },

  /**
   * Return the codes of currently selected regions.
   * @returns {Array}
   */
  getSelectedRegions: function () {
    return this.getSelected("regions");
  },

  /**
   * Return the codes of currently selected markers.
   * @returns {Array}
   */
  getSelectedMarkers: function () {
    return this.getSelected("markers");
  },

  setSelected: function (type, keys) {
    var i;

    if (typeof keys != "object") {
      keys = [keys];
    }

    if (jvm.$.isArray(keys)) {
      for (i = 0; i < keys.length; i++) {
        this[type][keys[i]].element.setSelected(true);
      }
    } else {
      for (i in keys) {
        this[type][i].element.setSelected(!!keys[i]);
      }
    }
  },

  /**
   * Set or remove selected state for the regions.
   * @param {String|Array|Object} keys If <code>String</code> or <code>Array</code> the region(s) with the corresponding code(s) will be selected. If <code>Object</code> was provided its keys are  codes of regions, state of which should be changed. Selected state will be set if value is true, removed otherwise.
   */
  setSelectedRegions: function (keys) {
    this.setSelected("regions", keys);
  },

  /**
   * Set or remove selected state for the markers.
   * @param {String|Array|Object} keys If <code>String</code> or <code>Array</code> the marker(s) with the corresponding code(s) will be selected. If <code>Object</code> was provided its keys are  codes of markers, state of which should be changed. Selected state will be set if value is true, removed otherwise.
   */
  setSelectedMarkers: function (keys) {
    this.setSelected("markers", keys);
  },

  clearSelected: function (type) {
    var select = {},
      selected = this.getSelected(type),
      i;

    for (i = 0; i < selected.length; i++) {
      select[selected[i]] = false;
    }

    this.setSelected(type, select);
  },

  /**
   * Remove the selected state from all the currently selected regions.
   */
  clearSelectedRegions: function () {
    this.clearSelected("regions");
  },

  /**
   * Remove the selected state from all the currently selected markers.
   */
  clearSelectedMarkers: function () {
    this.clearSelected("markers");
  },

  /**
   * Return the instance of Map. Useful when instantiated as a jQuery plug-in.
   * @returns {Map}
   */
  getMapObject: function () {
    return this;
  },

  /**
   * Return the name of the region by region code.
   * @returns {String}
   */
  getRegionName: function (code) {
    return this.mapData.paths[code].name;
  },

  createRegions: function () {
    var key,
      region,
      map = this;

    this.regionLabelsGroup = this.regionLabelsGroup || this.canvas.addGroup();

    for (key in this.mapData.paths) {
      const regionStyle =
        typeof this.params.regionStyle === "function"
          ? {
              ...jvm.Map.defaultParams.regionStyle,
              ...this.params.regionStyle(key),
            }
          : this.params.regionStyle;
      region = new jvm.Region({
        map: this,
        path: this.mapData.paths[key].path,
        code: key,
        style: jvm.$.extend(true, {}, regionStyle),
        labelStyle: jvm.$.extend(true, {}, this.params.regionLabelStyle),
        canvas: this.canvas,
        labelsGroup: this.regionLabelsGroup,
        label:
          this.canvas.mode != "vml"
            ? this.params.labels && this.params.labels.regions
            : null,
      });

      jvm.$(region.shape).bind("selected", function (e, isSelected) {
        map.container.trigger("regionSelected.jvectormap", [
          jvm.$(this.node).attr("data-code"),
          isSelected,
          map.getSelectedRegions(),
        ]);
      });
      this.regions[key] = {
        element: region,
        config: this.mapData.paths[key],
      };
    }
  },

  createMarkers: function (markers) {
    var i,
      marker,
      point,
      markerConfig,
      markersArray,
      map = this;

    this.markersGroup = this.markersGroup || this.canvas.addGroup();
    this.markerLabelsGroup = this.markerLabelsGroup || this.canvas.addGroup();

    if (jvm.$.isArray(markers)) {
      markersArray = markers.slice();
      markers = {};
      for (i = 0; i < markersArray.length; i++) {
        markers[i] = markersArray[i];
      }
    }

    for (i in markers) {
      markerConfig =
        markers[i] instanceof Array ? { latLng: markers[i] } : markers[i];
      point = this.getMarkerPosition(markerConfig);

      if (point !== false) {
        marker = new jvm.Marker({
          map: this,
          style: jvm.$.extend(true, {}, this.params.markerStyle, {
            initial: markerConfig.style || {},
          }),
          labelStyle: jvm.$.extend(true, {}, this.params.markerLabelStyle),
          index: i,
          cx: point.x,
          cy: point.y,
          group: this.markersGroup,
          canvas: this.canvas,
          labelsGroup: this.markerLabelsGroup,
          label:
            this.canvas.mode != "vml"
              ? this.params.labels && this.params.labels.markers
              : null,
        });

        jvm.$(marker.shape).bind("selected", function (e, isSelected) {
          map.container.trigger("markerSelected.jvectormap", [
            jvm.$(this.node).attr("data-index"),
            isSelected,
            map.getSelectedMarkers(),
          ]);
        });
        if (this.markers[i]) {
          this.removeMarkers([i]);
        }
        this.markers[i] = { element: marker, config: markerConfig };
      }
    }
  },

  repositionMarkers: function () {
    var i, point;

    for (i in this.markers) {
      point = this.getMarkerPosition(this.markers[i].config);
      if (point !== false) {
        this.markers[i].element.setStyle({ cx: point.x, cy: point.y });
      }
    }
  },

  repositionLabels: function () {
    var key;

    for (key in this.regions) {
      this.regions[key].element.updateLabelPosition();
    }

    for (key in this.markers) {
      this.markers[key].element.updateLabelPosition();
    }
  },

  getMarkerPosition: function (markerConfig) {
    if (jvm.Map.maps[this.params.map].projection) {
      return this.latLngToPoint.apply(this, markerConfig.latLng || [0, 0]);
    } else {
      return {
        x: markerConfig.coords[0] * this.scale + this.transX * this.scale,
        y: markerConfig.coords[1] * this.scale + this.transY * this.scale,
      };
    }
  },

  /**
   * Add one marker to the map.
   * @param {String} key Marker unique code.
   * @param {Object} marker Marker configuration parameters.
   * @param {Array} seriesData Values to add to the data series.
   */
  addMarker: function (key, marker, seriesData) {
    var markers = {},
      data = [],
      values,
      i,
      seriesData = seriesData || [];

    markers[key] = marker;

    for (i = 0; i < seriesData.length; i++) {
      values = {};
      if (typeof seriesData[i] !== "undefined") {
        values[key] = seriesData[i];
      }
      data.push(values);
    }
    this.addMarkers(markers, data);
  },

  /**
   * Add set of marker to the map.
   * @param {Object|Array} markers Markers to add to the map. In case of array is provided, codes of markers will be set as string representations of array indexes.
   * @param {Array} seriesData Values to add to the data series.
   */
  addMarkers: function (markers, seriesData) {
    var i;

    seriesData = seriesData || [];

    this.createMarkers(markers);
    for (i = 0; i < seriesData.length; i++) {
      this.series.markers[i].setValues(seriesData[i] || {});
    }
  },

  /**
   * Remove some markers from the map.
   * @param {Array} markers Array of marker codes to be removed.
   */
  removeMarkers: function (markers) {
    var i;

    for (i = 0; i < markers.length; i++) {
      this.markers[markers[i]].element.remove();
      delete this.markers[markers[i]];
    }
  },

  /**
   * Remove all markers from the map.
   */
  removeAllMarkers: function () {
    var i,
      markers = [];

    for (i in this.markers) {
      markers.push(i);
    }
    this.removeMarkers(markers);
  },

  /**
   * Converts coordinates expressed as latitude and longitude to the coordinates in pixels on the map.
   * @param {Number} lat Latitide of point in degrees.
   * @param {Number} lng Longitude of point in degrees.
   */
  latLngToPoint: function (lat, lng) {
    var point,
      proj = jvm.Map.maps[this.params.map].projection,
      centralMeridian = proj.centralMeridian,
      inset,
      bbox;

    if (lng < -180 + centralMeridian) {
      lng += 360;
    }

    point = jvm.Proj[proj.type](lat, lng, centralMeridian);

    inset = this.getInsetForPoint(point.x, point.y);
    if (inset) {
      bbox = inset.bbox;

      point.x =
        ((point.x - bbox[0].x) / (bbox[1].x - bbox[0].x)) *
        inset.width *
        this.scale;
      point.y =
        ((point.y - bbox[0].y) / (bbox[1].y - bbox[0].y)) *
        inset.height *
        this.scale;

      return {
        x: point.x + this.transX * this.scale + inset.left * this.scale,
        y: point.y + this.transY * this.scale + inset.top * this.scale,
      };
    } else {
      return false;
    }
  },

  /**
   * Converts cartesian coordinates into coordinates expressed as latitude and longitude.
   * @param {Number} x X-axis of point on map in pixels.
   * @param {Number} y Y-axis of point on map in pixels.
   */
  pointToLatLng: function (x, y) {
    var proj = jvm.Map.maps[this.params.map].projection,
      centralMeridian = proj.centralMeridian,
      insets = jvm.Map.maps[this.params.map].insets,
      i,
      inset,
      bbox,
      nx,
      ny;

    for (i = 0; i < insets.length; i++) {
      inset = insets[i];
      bbox = inset.bbox;

      nx = x - (this.transX * this.scale + inset.left * this.scale);
      ny = y - (this.transY * this.scale + inset.top * this.scale);

      nx =
        (nx / (inset.width * this.scale)) * (bbox[1].x - bbox[0].x) + bbox[0].x;
      ny =
        (ny / (inset.height * this.scale)) * (bbox[1].y - bbox[0].y) +
        bbox[0].y;

      if (
        nx > bbox[0].x &&
        nx < bbox[1].x &&
        ny > bbox[0].y &&
        ny < bbox[1].y
      ) {
        return jvm.Proj[proj.type + "_inv"](nx, -ny, centralMeridian);
      }
    }

    return false;
  },

  getInsetForPoint: function (x, y) {
    var insets = jvm.Map.maps[this.params.map].insets,
      i,
      bbox;

    for (i = 0; i < insets.length; i++) {
      bbox = insets[i].bbox;
      if (x > bbox[0].x && x < bbox[1].x && y > bbox[0].y && y < bbox[1].y) {
        return insets[i];
      }
    }
  },

  createSeries: function () {
    var i, key;

    this.series = {
      markers: [],
      regions: [],
    };

    for (key in this.params.series) {
      for (i = 0; i < this.params.series[key].length; i++) {
        this.series[key][i] = new jvm.DataSeries(
          this.params.series[key][i],
          this[key],
          this,
        );
      }
    }
  },

  /**
   * Gracefully remove the map and and all its accessories, unbind event handlers.
   */
  remove: function () {
    this.tip.remove();
    this.container.remove();
    jvm.$(window).unbind("resize", this.onResize);
    jvm.$("body").unbind("mouseup", this.onContainerMouseUp);
  },
};

jvm.Map.maps = {};
jvm.Map.defaultParams = {
  map: "world_mill_en",
  backgroundColor: "#505050",
  zoomButtons: true,
  zoomOnScroll: true,
  zoomOnScrollSpeed: 3,
  panOnDrag: true,
  zoomMax: 8,
  zoomMin: 1,
  zoomStep: 1.6,
  zoomAnimate: true,
  regionsSelectable: false,
  markersSelectable: false,
  bindTouchEvents: true,
  regionStyle: {
    initial: {
      fill: "white",
      "fill-opacity": 1,
      stroke: "none",
      "stroke-width": 0,
      "stroke-opacity": 1,
    },
    hover: {
      "fill-opacity": 0.8,
      cursor: "pointer",
    },
    selected: {
      fill: "yellow",
    },
    selectedHover: {},
  },
  regionLabelStyle: {
    initial: {
      "font-family": "Verdana",
      "font-size": "12",
      "font-weight": "bold",
      cursor: "default",
      fill: "black",
    },
    hover: {
      cursor: "pointer",
    },
  },
  markerStyle: {
    initial: {
      fill: "grey",
      stroke: "#505050",
      "fill-opacity": 1,
      "stroke-width": 1,
      "stroke-opacity": 1,
      r: 5,
    },
    hover: {
      stroke: "black",
      "stroke-width": 2,
      cursor: "pointer",
    },
    selected: {
      fill: "blue",
    },
    selectedHover: {},
  },
  markerLabelStyle: {
    initial: {
      "font-family": "Verdana",
      "font-size": "12",
      "font-weight": "bold",
      cursor: "default",
      fill: "black",
    },
    hover: {
      cursor: "pointer",
    },
  },
};
jvm.Map.apiEvents = {
  onRegionTipShow: "regionTipShow",
  onRegionOver: "regionOver",
  onRegionOut: "regionOut",
  onRegionClick: "regionClick",
  onRegionSelected: "regionSelected",
  onMarkerTipShow: "markerTipShow",
  onMarkerOver: "markerOver",
  onMarkerOut: "markerOut",
  onMarkerClick: "markerClick",
  onMarkerSelected: "markerSelected",
  onViewportChange: "viewportChange",
};
/**
 * Creates map with drill-down functionality.
 * @constructor
 * @param {Object} params Parameters to initialize map with.
 * @param {Number} params.maxLevel Maximum number of levels user can go through
 * @param {Object} params.main Config of the main map. See <a href="./jvm-map/">jvm.Map</a> for more information.
 * @param {Function} params.mapNameByCode Function to generate map name by region code. Default value is:
<pre>
function(code, multiMap) {
  return code.toLowerCase()+'_'+
         multiMap.defaultProjection+'_en';
}
</pre>
 * @param {Function} params.mapUrlByCode Function to generate map url by region code. Default value is:
<pre>
function(code, multiMap){
  return 'jquery-jvectormap-data-'+
         code.toLowerCase()+'-'+
         multiMap.defaultProjection+'-en.js';
}
</pre>
 */
jvm.MultiMap = function (params) {
  var that = this;

  this.maps = {};
  this.params = jvm.$.extend(true, {}, jvm.MultiMap.defaultParams, params);
  this.params.maxLevel = this.params.maxLevel || Number.MAX_VALUE;
  this.params.main = this.params.main || {};
  this.params.main.multiMapLevel = 0;
  this.history = [this.addMap(this.params.main.map, this.params.main)];
  this.defaultProjection = this.history[0].mapData.projection.type;
  this.mapsLoaded = {};
  this.mapsLoadedData = {};

  this.params.container.css({ position: "relative" });
  this.backButton = jvm
    .$("<div/>")
    .addClass("jvectormap-goback")
    .text("Back")
    .appendTo(this.params.container);
  this.backButton.hide();
  this.backButton.click(function () {
    that.goBack();
  });

  this.spinner = jvm
    .$("<div/>")
    .addClass("jvectormap-spinner")
    .appendTo(this.params.container);
  this.spinner.hide();
};

jvm.MultiMap.prototype = {
  addMap: function (name, config) {
    var cnt = jvm.$("<div/>").css({
      width: "100%",
      height: "100%",
    });

    this.params.container.append(cnt);

    this.maps[name] = new jvm.Map(jvm.$.extend(config, { container: cnt }));
    if (this.params.maxLevel > config.multiMapLevel) {
      this.maps[name].container.on(
        "regionClick.jvectormap",
        { scope: this },
        function (e, code) {
          var multimap = e.data.scope,
            mapName = multimap.params.mapNameByCode(code, multimap);

          if (
            !multimap.drillDownPromise ||
            multimap.drillDownPromise.state() !== "pending"
          ) {
            multimap.drillDown(mapName, code);
          }
        },
      );
    }

    return this.maps[name];
  },

  downloadMap: function (code) {
    var that = this,
      deferred = jvm.$.Deferred();
    const { getDrillDownMap } = this.params;

    const handleMapData = function (data) {
      that.mapsLoaded[code] = true;
      that.mapsLoadedData[code] = data;
      deferred.resolve();
    };

    if (!this.mapsLoaded[code]) {
      if (getDrillDownMap && typeof getDrillDownMap === "function") {
        const result = getDrillDownMap(code);
        if (result && typeof result.then === "function") {
          result
            .then((data) => {
              handleMapData(data);
            })
            .catch(() => {
              deferred.reject();
            });
        } else {
          handleMapData(result);
        }
        return deferred;
      }
      jvm.$.get(this.params.mapUrlByCode(code, this)).then(
        function (data) {
          handleMapData(data);
        },
        function () {
          deferred.reject();
        },
      );
    } else {
      deferred.resolve();
    }
    return deferred;
  },

  drillDown: function (name, code) {
    var currentMap = this.history[this.history.length - 1],
      that = this,
      focusPromise = currentMap.setFocus({ region: code, animate: true }),
      downloadPromise = this.downloadMap(code);

    focusPromise.then(function () {
      if (downloadPromise.state() === "pending") {
        that.spinner.show();
      }
    });
    downloadPromise.always(function () {
      that.spinner.hide();
    });
    this.drillDownPromise = jvm.$.when(downloadPromise, focusPromise);
    this.drillDownPromise.then(function () {
      const { content } = that.mapsLoadedData[code];
      currentMap.params.container.hide();
      if (!that.maps[name]) {
        jvm.$.fn.vectorMap("addMap", name, content);
        that.addMap(name, {
          map: name,
          multiMapLevel: currentMap.params.multiMapLevel + 1,
        });
      } else {
        that.maps[name].params.container.show();
      }
      that.history.push(that.maps[name]);
      that.backButton.show();
    });
  },

  goBack: function () {
    var currentMap = this.history.pop(),
      prevMap = this.history[this.history.length - 1],
      that = this;

    currentMap
      .setFocus({ scale: 1, x: 0.5, y: 0.5, animate: true })
      .then(function () {
        currentMap.params.container.hide();
        prevMap.params.container.show();
        prevMap.updateSize();
        if (that.history.length === 1) {
          that.backButton.hide();
        }
        prevMap.setFocus({ scale: 1, x: 0.5, y: 0.5, animate: true });
      });
  },
};

jvm.MultiMap.defaultParams = {
  mapNameByCode: function (code, multiMap) {
    return code.toLowerCase() + "_" + multiMap.defaultProjection + "_en";
  },
  mapUrlByCode: function (code, multiMap) {
    return (
      "jquery-jvectormap-data-" +
      code.toLowerCase() +
      "-" +
      multiMap.defaultProjection +
      "-en.js"
    );
  },
};


//# sourceURL=webpack://@react-jvectormap/core/../jvectormap/jquery.jvectormap.min.js?`)},"data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA==":module=>{eval(`module.exports = "data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA==";

//# sourceURL=webpack://@react-jvectormap/core/data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA==?`)},jquery:n=>{n.exports=__WEBPACK_EXTERNAL_MODULE_jquery__},react:n=>{n.exports=__WEBPACK_EXTERNAL_MODULE_react__}},__webpack_module_cache__={};function __webpack_require__(n){var l=__webpack_module_cache__[n];if(l!==void 0)return l.exports;var o=__webpack_module_cache__[n]={id:n,exports:{}};return __webpack_modules__[n](o,o.exports,__webpack_require__),o.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.n=n=>{var l=n&&n.__esModule?()=>n.default:()=>n;return __webpack_require__.d(l,{a:l}),l},__webpack_require__.d=(n,l)=>{for(var o in l)__webpack_require__.o(l,o)&&!__webpack_require__.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:l[o]})},__webpack_require__.o=(n,l)=>Object.prototype.hasOwnProperty.call(n,l),__webpack_require__.r=n=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},__webpack_require__.b=document.baseURI||self.location.href;var __webpack_exports__=__webpack_require__("./src/index.ts");return __webpack_exports__})()})}(dist)),dist.exports}var distExports=requireDist();const name="world_mill",content=JSON.parse(`{"insets":[{"width":900,"top":0,"height":440.7063107441331,"bbox":[{"y":-12671671.123330014,"x":-20004297.151525836},{"y":6930392.025135122,"x":20026572.394749384}],"left":0}],"paths":{"BD":{"path":"M651.84,230.21l-0.6,-2.0l-1.36,-1.71l-2.31,-0.11l-0.41,0.48l0.2,0.94l-0.53,0.99l-0.72,-0.36l-0.68,0.35l-1.2,-0.36l-0.37,-2.0l-0.81,-1.86l0.39,-1.46l-0.22,-0.47l-1.14,-0.53l0.29,-0.5l1.48,-0.94l0.03,-0.65l-1.55,-1.22l0.55,-1.14l1.61,0.94l1.04,0.15l0.18,1.54l0.34,0.35l5.64,0.63l-0.84,1.64l-1.22,0.34l-0.77,1.51l0.07,0.47l1.37,1.37l0.67,-0.19l0.42,-1.39l1.21,3.84l-0.03,1.21l-0.33,-0.15l-0.4,0.28Z","name":"Bangladesh"},"BE":{"path":"M429.29,144.05l1.91,0.24l2.1,-0.63l2.63,1.99l-0.21,1.66l-0.69,0.4l-0.18,1.2l-1.66,-1.13l-1.39,0.15l-2.73,-2.7l-1.17,-0.18l-0.16,-0.52l1.54,-0.5Z","name":"Belgium"},"BF":{"path":"M421.42,247.64l-0.11,0.95l0.34,1.16l1.4,1.71l0.07,1.1l0.32,0.37l2.55,0.51l-0.04,1.28l-0.38,0.53l-1.07,0.21l-0.72,1.18l-0.63,0.21l-3.22,-0.25l-0.94,0.39l-5.4,-0.05l-0.39,0.38l0.16,2.73l-1.23,-0.43l-1.17,0.1l-0.89,0.57l-2.27,-1.72l-0.13,-1.11l0.61,-0.96l0.02,-0.93l1.87,-1.98l0.44,-1.81l0.43,-0.39l1.28,0.26l1.05,-0.52l0.47,-0.73l1.84,-1.09l0.55,-0.83l2.2,-1.0l1.15,-0.3l0.72,0.45l1.13,-0.01Z","name":"Burkina Faso"},"BG":{"path":"M491.65,168.18l-0.86,0.88l-0.91,2.17l0.48,1.34l-1.6,-0.24l-2.55,0.95l-0.28,1.51l-1.8,0.22l-2.0,-1.0l-1.92,0.79l-1.42,-0.07l-0.15,-1.63l-1.05,-0.97l0.0,-0.8l1.2,-1.57l0.01,-0.56l-1.14,-1.23l-0.05,-0.94l0.88,0.97l0.88,-0.2l1.91,0.47l3.68,0.16l1.42,-0.81l2.72,-0.66l2.55,1.24Z","name":"Bulgaria"},"BA":{"path":"M463.49,163.65l2.1,0.5l1.72,-0.03l1.52,0.68l-0.36,0.78l0.08,0.45l1.04,1.02l-0.25,0.98l-1.81,1.15l-0.38,1.38l-1.67,-0.87l-0.89,-1.2l-2.11,-1.83l-1.63,-2.22l0.23,-0.57l0.48,0.38l0.55,-0.06l0.43,-0.51l0.94,-0.06Z","name":"Bosnia and Herz."},"BN":{"path":"M707.48,273.58l0.68,-0.65l1.41,-0.91l-0.15,1.63l-0.81,-0.05l-0.61,0.58l-0.53,-0.6Z","name":"Brunei"},"BO":{"path":"M263.83,340.69l-3.09,-0.23l-0.38,0.23l-0.7,1.52l-1.31,-1.53l-3.28,-0.64l-2.37,2.4l-1.31,0.26l-0.88,-3.26l-1.3,-2.86l0.74,-2.37l-0.13,-0.43l-1.2,-1.01l-0.37,-1.89l-1.08,-1.55l1.45,-2.56l-0.96,-2.33l0.47,-1.06l-0.34,-0.73l0.91,-1.32l0.16,-3.84l0.5,-1.18l-1.81,-3.41l2.46,0.07l0.8,-0.85l3.4,-1.91l2.66,-0.35l-0.19,1.38l0.3,1.07l-0.05,1.97l2.72,2.27l2.88,0.49l0.89,0.86l1.79,0.58l0.98,0.7l1.71,0.05l1.17,0.61l0.6,2.7l-0.7,0.54l0.96,2.99l0.37,0.28l4.3,0.1l-0.25,1.2l0.27,1.02l1.43,0.9l0.5,1.35l-0.41,1.86l-0.65,1.08l0.12,1.35l-2.69,-1.65l-2.4,-0.03l-4.36,0.76l-1.49,2.5l-0.11,1.52l-0.75,2.37Z","name":"Bolivia"},"JP":{"path":"M781.12,166.87l1.81,0.68l1.62,-0.97l0.39,2.42l-3.35,0.75l-2.23,2.88l-3.63,-1.9l-0.56,0.2l-1.26,3.05l-2.16,0.03l-0.29,-2.51l1.08,-2.03l2.45,-0.16l0.37,-0.33l1.25,-5.94l2.47,2.71l2.03,1.12ZM773.56,187.34l-0.91,2.22l0.37,1.52l-1.14,1.75l-3.02,1.26l-4.58,0.27l-3.34,3.01l-1.25,-0.8l-0.09,-1.9l-0.46,-0.38l-4.35,0.62l-3.0,1.32l-2.85,0.05l-0.37,0.27l0.13,0.44l2.32,1.89l-1.54,4.34l-1.26,0.9l-0.79,-0.7l0.56,-2.27l-0.21,-0.45l-1.47,-0.75l-0.74,-1.4l2.12,-0.84l1.26,-1.7l2.45,-1.42l1.83,-1.91l4.78,-0.81l2.6,0.57l0.44,-0.21l2.39,-4.66l1.29,1.06l0.5,0.01l5.1,-4.02l1.69,-3.73l-0.38,-3.4l0.9,-1.61l2.14,-0.44l1.23,3.72l-0.07,2.18l-2.23,2.84l-0.04,3.16ZM757.78,196.26l0.19,0.56l-1.01,1.21l-1.16,-0.68l-1.28,0.65l-0.69,1.45l-1.02,-0.5l0.01,-0.93l1.14,-1.38l1.57,0.14l0.85,-0.98l1.4,0.46Z","name":"Japan"},"BI":{"path":"M495.45,295.49l-1.08,-2.99l1.14,-0.11l0.64,-1.19l0.76,0.09l0.65,1.83l-2.1,2.36Z","name":"Burundi"},"BJ":{"path":"M429.57,255.75l-0.05,0.8l0.5,1.34l-0.42,0.86l0.17,0.79l-1.81,2.12l-0.57,1.76l-0.08,5.42l-1.41,0.2l-0.48,-1.36l0.11,-5.71l-0.52,-0.7l-0.2,-1.35l-1.48,-1.48l0.21,-0.9l0.89,-0.43l0.42,-0.92l1.27,-0.36l1.22,-1.34l0.61,-0.0l1.62,1.24Z","name":"Benin"},"BT":{"path":"M650.32,213.86l0.84,0.71l-0.12,1.1l-3.76,-0.11l-1.57,0.4l-1.93,-0.87l1.48,-1.96l1.13,-0.57l1.63,0.57l1.33,0.08l0.99,0.65Z","name":"Bhutan"},"JM":{"path":"M228.38,239.28l-0.8,0.4l-2.26,-1.06l0.84,-0.23l2.14,0.3l1.17,0.56l-1.08,0.03Z","name":"Jamaica"},"BW":{"path":"M483.92,330.07l2.27,4.01l2.83,2.86l0.96,0.31l0.78,2.43l2.13,0.61l1.02,0.76l-3.0,1.64l-2.32,2.02l-1.54,2.69l-1.52,0.45l-0.64,1.94l-1.34,0.52l-1.85,-0.12l-1.21,-0.74l-1.35,-0.3l-1.22,0.62l-0.75,1.37l-2.31,1.9l-1.4,0.21l-0.35,-0.59l0.16,-1.75l-1.48,-2.54l-0.62,-0.43l-0.0,-7.1l2.08,-0.08l0.39,-0.4l0.07,-8.9l5.19,-0.93l0.8,0.89l0.51,0.07l1.5,-0.95l2.21,-0.49Z","name":"Botswana"},"BR":{"path":"M259.98,275.05l3.24,0.7l0.65,-0.53l4.55,-1.32l1.08,-1.06l-0.02,-0.63l0.55,-0.05l0.28,0.28l-0.26,0.87l0.22,0.48l0.73,0.32l0.4,0.81l-0.62,0.86l-0.4,2.13l0.82,2.56l1.69,1.43l1.43,0.2l3.17,-1.68l3.18,0.3l0.65,-0.75l-0.27,-0.92l1.9,-0.09l2.39,0.99l1.06,-0.61l0.84,0.78l1.2,-0.18l1.18,-1.06l0.84,-1.94l1.36,-2.11l0.37,-0.05l1.89,5.45l1.33,0.59l0.05,1.28l-1.77,1.94l0.02,0.56l1.02,0.87l4.07,0.36l0.08,2.16l0.66,0.29l1.74,-1.5l6.97,2.32l1.02,1.22l-0.35,1.18l0.49,0.5l2.81,-0.74l4.77,1.3l3.75,-0.08l3.57,2.0l3.29,2.86l1.93,0.72l2.12,0.12l0.71,0.62l1.21,4.51l-0.95,3.98l-4.72,5.06l-1.64,2.92l-1.72,2.05l-0.8,0.3l-0.72,2.03l0.18,4.75l-0.94,5.53l-0.81,1.13l-0.43,3.36l-2.55,3.5l-0.4,2.51l-1.86,1.04l-0.67,1.53l-2.54,0.01l-3.94,1.01l-1.83,1.2l-2.87,0.82l-3.03,2.19l-2.2,2.83l-0.36,2.0l0.4,1.58l-0.44,2.6l-0.51,1.2l-1.77,1.54l-2.75,4.78l-3.83,3.42l-1.24,2.74l-1.18,1.15l-0.36,-0.83l0.95,-1.14l0.01,-0.5l-1.52,-1.97l-4.56,-3.32l-1.03,-0.0l-2.38,-2.02l-0.81,-0.0l5.34,-5.45l3.77,-2.58l0.22,-2.46l-1.35,-1.81l-0.91,0.07l0.58,-2.33l0.01,-1.54l-1.11,-0.83l-1.75,0.3l-0.44,-3.11l-0.52,-0.95l-1.88,-0.88l-1.24,0.47l-2.17,-0.41l0.15,-3.21l-0.62,-1.34l0.66,-0.73l-0.22,-1.34l0.66,-1.13l0.44,-2.04l-0.61,-1.83l-1.4,-0.86l-0.2,-0.75l0.34,-1.39l-0.38,-0.5l-4.52,-0.1l-0.72,-2.22l0.59,-0.42l-0.03,-1.1l-0.5,-0.87l-0.32,-1.7l-1.45,-0.76l-1.63,-0.02l-1.05,-0.72l-1.6,-0.48l-1.13,-0.99l-2.69,-0.4l-2.47,-2.06l0.13,-4.35l-0.45,-0.45l-3.46,0.5l-3.44,1.94l-0.6,0.74l-2.9,-0.17l-1.47,0.42l-0.72,-0.18l0.15,-3.52l-0.63,-0.34l-1.94,1.41l-1.87,-0.06l-0.83,-1.18l-1.37,-0.26l0.21,-1.01l-1.35,-1.49l-0.88,-1.91l0.56,-0.6l-0.0,-0.81l1.29,-0.62l0.22,-0.43l-0.22,-1.19l0.61,-0.91l0.15,-0.99l2.65,-1.58l1.99,-0.47l0.42,-0.36l2.06,0.11l0.42,-0.33l1.19,-8.0l-0.41,-1.56l-1.1,-1.0l0.01,-1.33l1.91,-0.42l0.08,-0.96l-0.33,-0.43l-1.14,-0.2l-0.02,-0.83l4.47,0.05l0.82,-0.67l0.82,1.81l0.8,0.07l1.15,1.1l2.26,-0.05l0.71,-0.83l2.78,-0.96l0.48,-1.13l1.6,-0.64l0.24,-0.47l-0.48,-0.82l-1.83,-0.19l-0.36,-3.22Z","name":"Brazil"},"BS":{"path":"M226.4,223.87l-0.48,-1.15l-0.84,-0.75l0.36,-1.11l0.95,1.95l0.01,1.06ZM225.56,216.43l-1.87,0.29l-0.04,-0.22l0.74,-0.14l1.17,0.06Z","name":"Bahamas"},"BY":{"path":"M493.84,128.32l0.29,0.7l0.49,0.23l1.19,-0.38l2.09,0.72l0.19,1.26l-0.45,1.24l1.57,2.26l0.89,0.59l0.17,0.81l1.58,0.56l0.4,0.5l-0.53,0.41l-1.87,-0.11l-0.73,0.38l-0.13,0.52l1.04,2.74l-1.91,0.26l-0.89,0.99l-0.11,1.18l-2.73,-0.04l-0.53,-0.62l-0.52,-0.08l-0.75,0.46l-0.91,-0.42l-1.92,-0.07l-2.75,-0.79l-2.6,-0.28l-2.0,0.07l-1.5,0.92l-0.67,0.07l-0.08,-1.22l-0.59,-1.19l1.36,-0.88l0.01,-1.35l-0.7,-1.41l-0.07,-1.0l2.16,-0.02l2.72,-1.3l0.75,-2.04l1.91,-1.04l0.2,-0.41l-0.19,-1.25l3.8,-1.78l2.3,0.77Z","name":"Belarus"},"BZ":{"path":"M198.03,244.38l0.1,-4.49l0.69,-0.06l0.74,-1.3l0.34,0.28l-0.4,1.3l0.17,0.58l-0.34,2.25l-1.3,1.42Z","name":"Belize"},"RU":{"path":"M491.55,115.25l2.55,-1.85l-0.01,-0.65l-2.2,-1.5l7.32,-6.76l1.03,-2.11l-0.13,-0.49l-3.46,-2.52l0.86,-2.7l-2.11,-2.81l1.56,-3.67l-2.77,-4.52l2.15,-2.99l-0.08,-0.55l-3.65,-2.73l0.3,-2.54l1.81,-0.37l4.26,-1.77l2.42,-1.45l4.06,2.61l6.79,1.04l9.34,4.85l1.78,1.88l0.14,2.46l-2.55,2.02l-3.9,1.06l-11.07,-3.14l-2.06,0.53l-0.13,0.7l3.94,2.94l0.31,5.86l0.26,0.36l5.14,2.24l0.58,-0.29l0.32,-1.94l-1.35,-1.78l1.13,-1.09l6.13,2.42l2.11,-0.98l0.18,-0.56l-1.51,-2.67l5.41,-3.76l2.07,0.22l2.26,1.41l0.57,-0.16l1.46,-2.87l-0.05,-0.44l-1.92,-2.32l1.12,-2.32l-1.32,-2.27l5.87,1.16l1.04,1.75l-2.59,0.43l-0.33,0.4l0.02,2.36l2.46,1.83l3.87,-0.91l0.86,-2.8l13.69,-5.65l0.99,0.11l-1.92,2.06l0.23,0.67l3.11,0.45l2.0,-1.48l4.56,-0.12l3.64,-1.73l2.65,2.44l0.56,-0.01l2.85,-2.88l-0.01,-0.57l-2.35,-2.29l0.9,-1.01l7.14,1.3l3.41,1.36l9.05,4.97l0.51,-0.11l1.67,-2.27l-0.05,-0.53l-2.43,-2.21l-0.06,-0.78l-0.34,-0.36l-2.52,-0.36l0.64,-1.93l-1.32,-3.46l-0.06,-1.21l4.48,-4.06l1.69,-4.29l1.6,-0.81l6.23,1.18l0.44,2.21l-2.29,3.64l0.06,0.5l1.47,1.39l0.76,3.0l-0.56,6.03l2.69,2.82l-0.96,2.57l-4.86,5.95l0.23,0.64l2.86,0.61l0.42,-0.17l0.93,-1.4l2.64,-1.03l0.87,-2.24l2.09,-1.96l0.07,-0.5l-1.36,-2.28l1.09,-2.69l-0.32,-0.55l-2.47,-0.33l-0.5,-2.06l1.94,-4.38l-0.06,-0.42l-2.96,-3.4l4.12,-2.88l0.16,-0.4l-0.51,-2.93l0.54,-0.05l1.13,2.25l-0.96,4.35l0.27,0.47l2.68,0.84l0.5,-0.51l-1.02,-2.99l3.79,-1.66l5.01,-0.24l4.53,2.61l0.48,-0.06l0.07,-0.48l-2.18,-3.82l-0.23,-4.67l3.98,-0.9l5.97,0.21l5.49,-0.64l0.27,-0.65l-1.83,-2.31l2.56,-2.9l2.87,-0.17l4.8,-2.47l6.54,-0.67l1.03,-1.42l6.25,-0.45l2.32,1.11l5.53,-2.7l4.5,0.08l0.39,-0.28l0.66,-2.15l2.26,-2.12l5.69,-2.11l3.21,1.29l-2.46,0.94l-0.25,0.42l0.34,0.35l5.41,0.77l0.61,2.33l0.58,0.25l2.2,-1.22l7.13,0.07l5.51,2.47l1.79,1.72l-0.53,2.24l-9.16,4.15l-1.97,1.52l0.16,0.71l6.77,1.91l2.16,-0.78l1.13,2.74l0.67,0.11l1.01,-1.15l3.81,-0.73l7.7,0.77l0.54,1.99l0.36,0.29l10.47,0.71l0.43,-0.38l0.13,-3.23l4.87,0.78l3.95,-0.02l3.83,2.4l1.03,2.71l-1.35,1.79l0.02,0.5l3.15,3.64l4.07,1.96l0.53,-0.18l2.23,-4.47l3.95,1.93l4.16,-1.21l4.73,1.39l2.05,-1.26l3.94,0.62l0.43,-0.55l-1.68,-4.02l2.89,-1.8l22.31,3.03l2.16,2.75l6.55,3.51l10.29,-0.81l4.82,0.73l1.85,1.66l-0.29,3.08l0.25,0.41l3.08,1.26l3.56,-0.88l4.35,-0.11l4.8,0.87l4.57,-0.47l4.23,3.79l0.43,0.07l3.1,-1.4l0.16,-0.6l-1.88,-2.62l0.85,-1.52l7.71,1.21l5.22,-0.26l7.09,2.09l9.59,5.22l6.35,4.11l-0.2,2.38l1.88,1.41l0.6,-0.42l-0.48,-2.53l6.15,0.57l4.4,3.51l-1.97,1.43l-4.0,0.41l-0.36,0.39l-0.06,3.79l-0.74,0.62l-2.07,-0.11l-1.91,-1.39l-3.14,-1.11l-0.78,-1.85l-2.72,-0.68l-2.63,0.49l-1.04,-1.1l0.46,-1.31l-0.5,-0.51l-3.0,0.98l-0.22,0.58l0.99,1.7l-1.21,1.48l-3.04,1.68l-3.12,-0.28l-0.4,0.23l0.09,0.46l2.2,2.09l1.46,3.2l1.15,1.1l0.24,1.33l-0.42,0.67l-4.63,-0.77l-6.96,2.9l-2.19,0.44l-7.6,5.06l-0.84,1.45l-3.61,-2.37l-6.24,2.82l-0.94,-1.15l-0.53,-0.08l-2.28,1.52l-3.2,-0.49l-0.44,0.27l-0.78,2.37l-3.05,3.78l0.09,1.47l0.29,0.36l2.54,0.72l-0.29,4.53l-1.97,0.11l-0.35,0.26l-1.07,2.94l0.8,1.45l-3.91,1.58l-1.05,3.95l-3.48,0.77l-0.3,0.3l-0.72,3.29l-3.09,2.65l-0.7,-1.74l-2.44,-12.44l1.16,-4.71l2.04,-2.06l0.22,-1.64l3.8,-0.86l4.46,-4.61l4.28,-3.81l4.48,-3.01l2.17,-5.63l-0.42,-0.54l-3.04,0.33l-1.77,3.31l-5.86,3.86l-1.86,-4.25l-0.45,-0.23l-6.46,1.3l-6.47,6.44l-0.01,0.55l1.58,1.74l-8.24,1.17l0.15,-2.2l-0.34,-0.42l-3.89,-0.56l-3.25,1.81l-7.62,-0.62l-8.45,1.19l-17.71,15.41l0.22,0.7l3.74,0.41l1.36,2.17l2.43,0.76l1.88,-1.68l2.4,0.2l3.4,3.54l0.08,2.6l-1.95,3.42l-0.21,3.9l-1.1,5.06l-3.71,4.54l-0.87,2.21l-8.29,8.89l-3.19,1.7l-1.32,0.03l-1.45,-1.36l-0.49,-0.04l-2.27,1.5l0.41,-3.65l-0.59,-2.47l1.75,-0.89l2.91,0.53l0.42,-0.2l1.68,-3.03l0.87,-3.46l0.97,-1.18l1.32,-2.88l-0.45,-0.56l-4.14,0.95l-2.19,1.25l-3.41,-0.0l-1.06,-2.93l-2.97,-2.3l-4.28,-1.06l-1.75,-5.07l-2.66,-5.01l-2.29,-1.29l-3.75,-1.01l-3.44,0.08l-3.18,0.62l-2.24,1.77l0.05,0.66l1.18,0.69l0.02,1.43l-1.33,1.05l-2.26,3.51l-0.04,1.43l-3.16,1.84l-2.82,-1.16l-3.01,0.23l-1.35,-1.07l-1.5,-0.35l-3.9,2.31l-3.22,0.52l-2.27,0.79l-3.05,-0.51l-2.21,0.03l-1.48,-1.6l-2.6,-1.63l-2.63,-0.43l-5.46,1.01l-3.23,-1.25l-0.72,-2.57l-5.2,-1.24l-2.75,-1.36l-0.5,0.12l-2.59,3.45l0.84,2.1l-2.06,1.93l-3.41,-0.77l-2.42,-0.12l-1.83,-1.54l-2.53,-0.05l-2.42,-0.98l-3.86,1.57l-4.72,2.78l-3.3,0.75l-1.55,-1.92l-3.0,0.41l-1.11,-1.33l-1.62,-0.59l-1.31,-1.94l-1.38,-0.6l-3.7,0.79l-3.31,-1.83l-0.51,0.11l-0.99,1.29l-5.29,-8.05l-2.96,-2.48l0.65,-0.77l0.01,-0.51l-0.5,-0.11l-6.2,3.21l-1.84,0.15l0.15,-1.39l-0.26,-0.42l-3.22,-1.17l-2.46,0.7l-0.69,-3.16l-0.32,-0.31l-4.5,-0.75l-2.47,1.47l-6.19,1.27l-1.29,0.86l-9.51,1.3l-1.15,1.17l-0.03,0.53l1.47,1.9l-1.89,0.69l-0.22,0.56l0.31,0.6l-2.11,1.44l0.03,0.68l3.75,2.12l-0.39,0.98l-3.23,-0.13l-0.86,0.86l-3.09,-1.59l-3.97,0.07l-2.66,1.35l-8.32,-3.56l-4.07,0.06l-5.39,3.68l-0.39,2.0l-2.03,-1.5l-0.59,0.13l-2.0,3.59l0.57,0.93l-1.28,2.16l0.06,0.48l2.13,2.17l1.95,0.04l1.37,1.82l-0.23,1.46l0.25,0.43l0.83,0.33l-0.8,1.31l-2.49,0.62l-2.49,3.2l0.0,0.49l2.17,2.78l-0.15,2.18l2.5,3.24l-1.58,1.59l-0.7,-0.13l-1.63,-1.72l-2.29,-0.84l-0.94,-1.31l-2.34,-0.63l-1.48,0.4l-0.43,-0.47l-3.51,-1.48l-5.76,-1.01l-0.45,0.19l-2.89,-2.34l-2.9,-1.2l-1.53,-1.29l1.29,-0.43l2.08,-2.61l-0.05,-0.55l-0.89,-0.79l3.05,-1.06l0.27,-0.42l-0.07,-0.69l-0.49,-0.35l-1.73,0.39l0.04,-0.68l1.04,-0.72l2.66,-0.48l0.4,-1.32l-0.5,-1.6l0.92,-1.54l0.03,-1.17l-0.29,-0.37l-3.69,-1.06l-1.41,0.02l-1.42,-1.41l-2.19,0.38l-2.77,-1.01l-0.03,-0.59l-0.89,-1.43l-2.0,-0.32l-0.11,-0.54l0.49,-0.53l0.01,-0.53l-1.6,-1.9l-3.58,0.02l-0.88,0.73l-0.46,-0.07l-1.0,-2.79l2.22,-0.02l0.97,-0.74l0.07,-0.57l-0.9,-1.04l-1.35,-0.48l-0.11,-0.7l-0.95,-0.58l-1.38,-1.99l0.46,-0.98l-0.51,-1.96l-2.45,-0.84l-1.21,0.3l-0.46,-0.76l-2.46,-0.83l-0.72,-1.87l-0.21,-1.69l-0.99,-0.85l0.85,-1.17l-0.7,-3.21l1.66,-1.97l-0.16,-0.79ZM749.2,170.72l-0.6,0.4l-0.13,0.16l-0.01,-0.51l0.74,-0.05ZM871.88,65.81l2.17,-0.13l3.19,1.16l-2.39,1.09l-5.63,0.48l-0.26,-0.84l2.92,-1.76ZM797.39,48.49l-2.0,1.36l-3.8,-0.42l-4.25,-1.8l0.35,-0.97l9.69,1.83ZM783.67,46.12l-1.63,3.09l-8.98,-0.13l-4.09,1.14l-4.54,-2.97l1.16,-3.01l3.05,-0.89l6.5,0.22l8.54,2.56ZM778.2,134.98l-0.56,-0.9l0.27,-0.12l0.29,1.01ZM778.34,135.48l0.94,3.53l-0.05,3.38l1.05,3.39l2.18,5.0l-2.89,-0.83l-0.49,0.26l-1.54,4.65l2.42,3.5l-0.04,1.13l-1.24,-1.24l-0.61,0.06l-1.09,1.61l-0.28,-1.61l0.27,-3.1l-0.28,-3.4l0.58,-2.47l0.11,-4.39l-1.46,-3.36l0.21,-4.32l2.15,-1.46l0.07,-0.34ZM771.95,56.61l1.76,-1.42l2.89,-0.42l3.28,1.71l0.14,0.6l-3.27,0.03l-4.81,-0.5ZM683.76,31.09l-13.01,1.93l4.03,-6.35l1.82,-0.56l1.73,0.34l5.99,2.98l-0.56,1.66ZM670.85,27.93l-5.08,0.64l-6.86,-1.57l-3.99,-2.05l-2.1,-4.16l-2.6,-0.87l5.72,-3.5l5.2,-1.28l4.69,2.85l5.59,5.4l-0.56,4.53ZM564.15,68.94l-0.64,0.17l-7.85,-0.57l-0.86,-2.04l-4.28,-1.17l-0.28,-1.94l2.27,-0.89l0.25,-0.39l-0.08,-2.38l4.81,-3.97l-0.15,-0.7l-1.47,-0.38l5.3,-3.81l0.15,-0.44l-0.58,-1.94l5.28,-2.51l8.21,-3.27l8.28,-0.96l4.35,-1.94l4.6,-0.64l1.36,1.61l-1.34,1.28l-16.43,4.94l-7.97,4.88l-7.74,9.63l0.66,4.14l4.16,3.27ZM548.81,18.48l-5.5,1.18l-0.58,1.02l-2.59,0.84l-2.13,-1.07l1.12,-1.42l-0.3,-0.65l-2.33,-0.07l1.68,-0.36l3.47,-0.06l0.42,1.29l0.66,0.16l1.38,-1.34l2.15,-0.88l2.94,1.01l-0.39,0.36ZM477.37,133.15l-4.08,0.05l-2.56,-0.32l0.33,-0.87l3.17,-1.03l3.24,0.96l-0.09,1.23Z","name":"Russia"},"RW":{"path":"M497.0,288.25l0.71,1.01l-0.11,1.09l-1.63,0.03l-1.04,1.39l-0.83,-0.11l0.51,-1.2l0.08,-1.34l0.42,-0.41l0.7,0.14l1.19,-0.61Z","name":"Rwanda"},"RS":{"path":"M469.4,163.99l0.42,-0.5l-0.01,-0.52l-1.15,-1.63l1.43,-0.62l1.33,0.12l1.17,1.06l0.46,1.13l1.34,0.64l0.35,1.35l1.46,0.9l0.76,-0.29l0.2,0.69l-0.48,0.78l0.22,1.12l1.05,1.22l-0.77,0.8l-0.37,1.52l-1.21,0.08l0.24,-0.64l-0.39,-0.54l-2.08,-1.64l-0.9,0.05l-0.48,0.94l-2.12,-1.37l0.53,-1.6l-1.11,-1.37l0.51,-1.1l-0.41,-0.57Z","name":"Serbia"},"TL":{"path":"M734.55,307.93l-0.1,-0.97l4.5,-0.86l-2.82,1.28l-1.59,0.55Z","name":"Timor-Leste"},"TM":{"path":"M553.03,173.76l-0.04,0.34l-0.09,-0.22l0.13,-0.12ZM555.87,172.66l0.45,-0.1l1.48,0.74l2.06,2.43l4.07,-0.18l0.38,-0.51l-0.32,-1.19l1.92,-0.94l1.91,-1.59l2.94,1.39l0.43,2.47l1.19,0.67l2.58,-0.13l0.62,0.4l1.32,3.12l4.54,3.44l2.67,1.45l3.06,1.14l-0.04,1.05l-1.33,-0.75l-0.59,0.19l-0.32,0.84l-2.2,0.81l-0.46,2.13l-1.21,0.74l-1.91,0.42l-0.73,1.33l-1.56,0.31l-2.22,-0.94l-0.2,-2.17l-0.38,-0.36l-1.73,-0.09l-2.76,-2.46l-2.14,-0.4l-2.84,-1.48l-1.78,-0.27l-1.24,0.53l-1.57,-0.08l-2.0,1.69l-1.7,0.43l-0.36,-1.58l0.36,-2.98l-0.22,-0.4l-1.65,-0.84l0.54,-1.69l-0.34,-0.52l-1.22,-0.13l0.36,-1.64l2.22,0.59l2.2,-0.95l0.12,-0.65l-1.77,-1.74l-0.66,-1.57Z","name":"Turkmenistan"},"TJ":{"path":"M597.75,178.82l-2.54,-0.44l-0.47,0.34l-0.24,1.7l0.43,0.45l2.64,-0.22l3.18,0.95l4.39,-0.41l0.56,2.37l0.52,0.29l0.67,-0.24l1.11,0.49l0.21,2.13l-3.76,-0.21l-1.8,1.32l-1.76,0.74l-0.61,-0.58l0.21,-2.23l-0.64,-0.49l-0.07,-0.93l-1.36,-0.66l-0.45,0.07l-1.08,1.01l-0.55,1.48l-1.31,-0.05l-0.95,1.16l-0.9,-0.35l-1.86,0.74l1.26,-2.83l-0.54,-2.17l-1.67,-0.82l0.33,-0.66l2.18,-0.04l1.19,-1.63l0.76,-1.79l2.43,-0.5l-0.26,1.0l0.73,1.05Z","name":"Tajikistan"},"RO":{"path":"M487.53,154.23l0.6,0.24l2.87,3.98l-0.17,2.69l0.45,1.42l1.32,0.81l1.35,-0.42l0.76,0.36l0.02,0.31l-0.83,0.45l-0.59,-0.22l-0.54,0.3l-0.62,3.3l-1.0,-0.22l-2.07,-1.13l-2.95,0.71l-1.25,0.76l-3.51,-0.15l-1.89,-0.47l-0.87,0.16l-0.82,-1.3l0.29,-0.26l-0.06,-0.64l-1.09,-0.34l-0.56,0.5l-1.05,-0.64l-0.39,-1.39l-1.36,-0.65l-0.35,-1.0l-0.83,-0.75l1.54,-0.54l2.66,-4.21l2.4,-1.24l2.96,0.34l1.48,0.73l0.79,-0.45l1.78,-0.3l0.75,-0.74l0.79,0.0Z","name":"Romania"},"GW":{"path":"M386.23,253.6l-0.29,0.84l0.15,0.6l-2.21,0.59l-0.86,0.96l-1.04,-0.83l-1.09,-0.23l-0.54,-1.06l-0.66,-0.49l2.41,-0.48l4.13,0.1Z","name":"Guinea-Bissau"},"GT":{"path":"M195.08,249.77l-2.48,-0.37l-1.03,-0.45l-1.14,-0.89l0.3,-0.99l-0.24,-0.68l0.96,-1.66l2.98,-0.01l0.4,-0.37l-0.19,-1.28l-1.67,-1.4l0.51,-0.4l0.0,-1.05l3.85,0.02l-0.21,4.53l0.4,0.43l1.46,0.38l-1.48,0.98l-0.35,0.7l0.12,0.57l-2.2,1.96Z","name":"Guatemala"},"GR":{"path":"M487.07,174.59l-0.59,1.43l-0.37,0.21l-2.84,-0.35l-3.03,0.77l-0.18,0.68l1.28,1.23l-0.61,0.23l-1.14,0.0l-1.2,-1.39l-0.63,0.03l-0.53,1.01l0.56,1.76l1.03,1.19l-0.56,0.38l-0.05,0.62l2.52,2.12l0.02,0.87l-1.78,-0.59l-0.48,0.56l0.5,1.0l-1.07,0.2l-0.3,0.53l0.75,2.01l-0.98,0.02l-1.84,-1.12l-1.37,-4.2l-2.21,-2.95l-0.11,-0.56l1.04,-1.28l0.2,-0.95l0.85,-0.66l0.03,-0.46l1.32,-0.21l1.01,-0.64l1.22,0.05l0.65,-0.56l2.26,-0.0l1.82,-0.75l1.85,1.0l2.28,-0.28l0.35,-0.39l0.01,-0.77l0.34,0.22ZM480.49,192.16l0.58,0.4l-0.68,-0.12l0.11,-0.28ZM482.52,192.82l2.51,0.06l0.24,0.32l-1.99,0.13l-0.77,-0.51Z","name":"Greece"},"GQ":{"path":"M448.79,279.62l0.02,2.22l-4.09,0.0l0.69,-2.27l3.38,0.05Z","name":"Eq. Guinea"},"GY":{"path":"M277.42,270.07l-0.32,1.83l-1.32,0.57l-0.23,0.46l-0.28,2.0l1.11,1.82l0.83,0.19l0.32,1.25l1.13,1.62l-1.21,-0.19l-1.08,0.71l-1.77,0.5l-0.44,0.46l-0.86,-0.09l-1.32,-1.01l-0.77,-2.27l0.36,-1.9l0.68,-1.23l-0.57,-1.17l-0.74,-0.43l0.12,-1.16l-0.9,-0.69l-1.1,0.09l-1.31,-1.48l0.53,-0.72l-0.04,-0.84l1.99,-0.86l0.05,-0.59l-0.71,-0.78l0.14,-0.57l1.66,-1.24l1.36,0.77l1.41,1.49l0.06,1.15l0.37,0.38l0.8,0.05l2.06,1.86Z","name":"Guyana"},"GE":{"path":"M521.71,168.93l5.29,0.89l4.07,2.01l1.41,-0.44l2.07,0.56l0.68,1.1l1.07,0.55l-0.12,0.59l0.98,1.29l-1.01,-0.13l-1.81,-0.83l-0.94,0.47l-3.23,0.43l-2.29,-1.39l-2.33,0.05l0.21,-0.97l-0.76,-2.26l-1.45,-1.12l-1.43,-0.39l-0.41,-0.42Z","name":"Georgia"},"GB":{"path":"M412.61,118.72l-2.19,3.22l-0.0,0.45l5.13,-0.3l-0.53,2.37l-2.2,3.12l0.29,0.63l2.37,0.21l2.33,4.3l1.76,0.69l2.2,5.12l2.94,0.77l-0.23,1.62l-1.15,0.88l-0.1,0.52l0.82,1.42l-1.86,1.43l-3.3,-0.02l-4.12,0.87l-1.04,-0.58l-0.47,0.06l-1.51,1.41l-2.12,-0.34l-1.86,1.18l-0.6,-0.29l3.19,-3.0l2.16,-0.69l0.28,-0.41l-0.34,-0.36l-3.73,-0.53l-0.4,-0.76l2.2,-0.87l0.17,-0.61l-1.26,-1.67l0.36,-1.7l3.38,0.28l0.43,-0.33l0.37,-1.99l-1.79,-2.49l-3.11,-0.72l-0.38,-0.59l0.79,-1.35l-0.04,-0.46l-0.82,-0.97l-0.61,0.01l-0.68,0.84l-0.1,-2.34l-1.23,-1.88l0.85,-3.47l1.77,-2.68l1.85,0.26l2.17,-0.22ZM406.26,132.86l-1.01,1.77l-1.57,-0.59l-1.16,0.01l0.37,-1.54l-0.39,-1.39l1.45,-0.1l2.3,1.84Z","name":"United Kingdom"},"GA":{"path":"M453.24,279.52l-0.08,0.98l0.7,1.29l2.36,0.24l-0.98,2.63l1.18,1.79l0.25,1.78l-0.29,1.52l-0.6,0.93l-1.84,-0.09l-1.23,-1.11l-0.66,0.23l-0.15,0.84l-1.42,0.26l-1.02,0.7l-0.11,0.52l0.77,1.35l-1.34,0.97l-3.94,-4.3l-1.44,-2.45l0.06,-0.6l0.54,-0.81l1.05,-3.46l4.17,-0.07l0.4,-0.4l-0.02,-2.66l2.39,0.21l1.25,-0.27Z","name":"Gabon"},"GN":{"path":"M391.8,254.11l0.47,0.8l1.11,-0.32l0.98,0.7l1.07,0.2l2.26,-1.22l0.64,0.44l1.13,1.56l-0.48,1.4l0.8,0.3l-0.08,0.48l0.46,0.68l-0.35,1.36l1.05,2.61l-1.0,0.69l0.03,1.41l-0.72,-0.06l-1.08,1.0l-0.24,-0.27l0.07,-1.11l-1.05,-1.54l-1.79,0.21l-0.35,-2.01l-1.6,-2.18l-2.0,-0.0l-1.31,0.54l-1.95,2.18l-1.86,-2.19l-1.2,-0.78l-0.3,-1.11l-0.8,-0.85l0.65,-0.72l0.81,-0.03l1.64,-0.8l0.23,-1.87l2.67,0.64l0.89,-0.3l1.21,0.15Z","name":"Guinea"},"GM":{"path":"M379.31,251.39l0.1,-0.35l2.43,-0.07l0.74,-0.61l0.51,-0.03l0.77,0.49l-1.03,-0.3l-1.87,0.9l-1.65,-0.04ZM384.03,250.91l0.91,0.05l0.75,-0.24l-0.59,0.31l-1.08,-0.13Z","name":"Gambia"},"GL":{"path":"M353.02,1.2l14.69,4.67l-3.68,1.89l-22.97,0.86l-0.36,0.27l0.12,0.43l1.55,1.18l8.79,-0.66l7.48,2.07l4.86,-1.77l1.66,1.73l-2.53,3.19l-0.01,0.48l0.46,0.15l6.35,-2.2l12.06,-2.31l7.24,1.13l1.09,1.99l-9.79,4.01l-1.44,1.32l-7.87,0.98l-0.35,0.41l0.38,0.38l5.07,0.24l-2.53,3.58l-2.07,3.81l0.08,6.05l2.57,3.11l-3.22,0.2l-4.12,1.66l-0.05,0.72l4.45,2.65l0.51,3.75l-2.3,0.4l-0.25,0.64l2.79,3.69l-4.82,0.31l-0.36,0.29l0.16,0.44l2.62,1.8l-0.59,1.22l-3.3,0.7l-3.45,0.01l-0.29,0.68l3.03,3.12l0.02,1.34l-4.4,-1.73l-1.72,1.35l0.15,0.66l3.31,1.15l3.13,2.71l0.81,3.16l-3.85,0.75l-4.89,-4.26l-0.47,-0.03l-0.17,0.44l0.79,2.86l-2.71,2.21l-0.13,0.44l0.37,0.27l8.73,0.34l-12.32,6.64l-7.24,1.48l-2.94,0.08l-2.69,1.75l-3.43,4.41l-5.24,2.84l-1.73,0.18l-7.12,2.1l-2.15,2.52l-0.13,2.99l-1.19,2.45l-4.01,3.09l-0.14,0.44l0.97,2.9l-2.28,6.48l-3.1,0.2l-3.83,-3.07l-4.86,-0.02l-2.25,-1.93l-1.7,-3.79l-4.3,-4.84l-1.21,-2.49l-0.44,-3.8l-3.32,-3.63l0.84,-2.86l-1.56,-1.7l2.28,-4.6l3.83,-1.74l1.03,-1.96l0.52,-3.47l-0.59,-0.41l-4.17,2.21l-2.07,0.58l-2.72,-1.28l-0.15,-2.71l0.85,-2.09l2.01,-0.06l5.06,1.2l0.46,-0.23l-0.14,-0.49l-6.54,-4.47l-2.67,0.55l-1.58,-0.86l2.56,-4.01l-0.03,-0.48l-1.5,-1.74l-4.98,-8.5l-3.13,-1.96l0.03,-1.88l-0.24,-0.37l-6.85,-3.02l-5.36,-0.38l-12.7,0.58l-2.78,-1.57l-3.66,-2.77l5.73,-1.45l5.0,-0.28l0.38,-0.38l-0.35,-0.41l-10.67,-1.38l-5.3,-2.06l0.25,-1.54l18.41,-5.26l1.22,-2.27l-0.25,-0.55l-6.14,-1.86l1.68,-1.77l8.55,-4.03l3.59,-0.63l0.3,-0.54l-0.88,-2.27l5.47,-1.47l7.65,-0.95l7.55,-0.05l3.04,1.85l6.48,-3.27l5.81,2.22l3.56,0.5l5.16,1.94l0.5,-0.21l-0.17,-0.52l-5.71,-3.13l0.28,-2.13l8.12,-3.6l8.7,0.28l3.35,-2.34l8.71,-0.6l19.93,0.8Z","name":"Greenland"},"GH":{"path":"M420.53,257.51l-0.01,0.72l0.96,1.2l0.24,3.73l0.59,0.95l-0.51,2.1l0.19,1.41l1.02,2.21l-6.97,2.84l-1.8,-0.57l0.04,-0.89l-1.02,-2.04l0.61,-2.65l1.07,-2.32l-0.96,-6.47l5.01,0.07l0.94,-0.39l0.61,0.11Z","name":"Ghana"},"OM":{"path":"M568.09,230.93l-0.91,1.67l-1.22,0.04l-0.6,0.76l-0.41,1.51l0.27,1.58l-1.16,0.05l-1.56,0.97l-0.76,1.74l-1.62,0.05l-0.98,0.65l-0.17,1.15l-0.89,0.52l-1.49,-0.18l-2.4,0.94l-2.47,-5.4l7.35,-2.71l1.67,-5.23l-1.12,-2.09l0.05,-0.83l0.67,-1.0l0.07,-1.05l0.9,-0.42l-0.05,-2.07l0.7,-0.01l1.0,1.62l1.51,1.08l3.3,0.84l1.73,2.29l0.81,0.37l-1.23,2.35l-0.99,0.79Z","name":"Oman"},"TN":{"path":"M448.1,188.24l-1.0,1.27l-0.02,1.32l0.84,0.88l-0.28,2.09l-1.53,1.32l-0.12,0.42l0.48,1.54l1.42,0.32l0.53,1.11l0.9,0.52l-0.11,1.67l-3.54,2.64l-0.1,2.38l-0.58,0.3l-0.96,-4.45l-1.54,-1.25l-0.16,-0.78l-1.92,-1.56l-0.18,-1.76l1.51,-1.62l0.59,-2.34l-0.38,-2.78l0.42,-1.21l2.45,-1.05l1.29,0.26l-0.06,1.11l0.58,0.38l1.47,-0.73Z","name":"Tunisia"},"JO":{"path":"M518.64,201.38l-5.14,1.56l-0.19,0.65l2.16,2.39l-0.89,1.14l-1.71,0.34l-1.71,1.8l-2.34,-0.37l1.21,-4.32l0.56,-4.07l2.8,0.94l4.46,-2.71l0.79,2.66Z","name":"Jordan"},"HR":{"path":"M455.59,162.84l1.09,0.07l-0.82,0.94l-0.27,-1.01ZM456.96,162.92l0.62,-0.41l1.73,0.45l0.42,-0.4l-0.01,-0.59l0.86,-0.52l0.2,-1.05l1.63,-0.68l2.57,1.68l2.07,0.6l0.87,-0.31l1.05,1.57l-0.52,0.63l-1.05,-0.56l-1.68,0.04l-2.1,-0.5l-1.29,0.06l-0.57,0.49l-0.59,-0.47l-0.62,0.16l-0.46,1.7l1.79,2.42l2.79,2.75l-1.18,-0.87l-2.21,-0.87l-1.67,-1.78l0.13,-0.63l-1.05,-1.19l-0.32,-1.27l-1.42,-0.43Z","name":"Croatia"},"HT":{"path":"M237.05,238.38l-1.16,0.43l-0.91,-0.55l0.05,-0.2l2.02,0.31ZM237.53,238.43l1.06,0.12l-0.05,0.01l-1.01,-0.12ZM239.25,238.45l0.79,-0.51l0.06,-0.62l-1.02,-1.0l0.02,-0.82l-0.3,-0.4l-0.93,-0.32l3.16,0.45l0.02,1.84l-0.48,0.34l-0.08,0.58l0.54,0.72l-1.78,-0.26Z","name":"Haiti"},"HU":{"path":"M462.08,157.89l0.65,-1.59l-0.09,-0.44l0.64,-0.0l0.39,-0.34l0.1,-0.69l1.75,0.87l2.32,-0.37l0.43,-0.66l3.49,-0.78l0.69,-0.78l0.57,-0.14l2.57,0.93l0.67,-0.23l1.03,0.65l0.08,0.37l-1.42,0.71l-2.59,4.14l-1.8,0.53l-1.68,-0.1l-2.74,1.23l-1.85,-0.54l-2.54,-1.66l-0.66,-1.1Z","name":"Hungary"},"HN":{"path":"M199.6,249.52l-1.7,-1.21l0.06,-0.94l3.04,-2.14l2.37,0.28l1.27,-0.09l1.1,-0.52l1.3,0.28l1.14,-0.25l1.38,0.37l2.23,1.37l-2.36,0.93l-1.23,-0.39l-0.88,1.3l-1.28,0.99l-0.98,-0.22l-0.42,0.52l-0.96,0.05l-0.36,0.41l0.04,0.88l-0.52,0.6l-0.3,0.04l-0.3,-0.55l-0.66,-0.31l0.11,-0.67l-0.48,-0.65l-0.87,-0.26l-0.73,0.2Z","name":"Honduras"},"PR":{"path":"M256.17,238.73l-0.26,0.27l-2.83,0.05l-0.07,-0.55l1.95,-0.1l1.22,0.33Z","name":"Puerto Rico"},"PS":{"path":"M509.21,203.07l0.1,-0.06l-0.02,0.03l-0.09,0.03ZM509.36,202.91l-0.02,-0.63l-0.33,-0.16l0.31,-1.09l0.24,0.1l-0.2,1.78Z","name":"Palestine"},"PT":{"path":"M401.84,187.38l-0.64,0.47l-1.13,-0.35l-0.91,0.17l0.28,-1.78l-0.24,-1.78l-1.25,-0.56l-0.45,-0.84l0.17,-1.66l1.01,-1.18l0.69,-2.92l-0.04,-1.39l-0.59,-1.9l1.3,-0.85l0.84,1.35l3.1,-0.3l0.46,0.99l-1.05,0.94l-0.03,2.16l-0.41,0.57l-0.08,1.1l-0.79,0.18l-0.26,0.59l0.91,1.6l-0.63,1.75l0.76,1.09l-1.1,1.52l0.07,1.05Z","name":"Portugal"},"PY":{"path":"M274.9,336.12l0.74,1.52l-0.16,3.45l0.32,0.41l2.64,0.5l1.11,-0.47l1.4,0.59l0.36,0.6l0.53,3.42l1.27,0.4l0.98,-0.38l0.51,0.27l-0.0,1.18l-1.21,5.32l-2.09,1.9l-1.8,0.4l-4.71,-0.98l2.2,-3.63l-0.32,-1.5l-2.78,-1.28l-3.03,-1.94l-2.07,-0.44l-4.34,-4.06l0.91,-2.9l0.08,-1.42l1.07,-2.04l4.13,-0.72l2.18,0.03l2.05,1.17l0.03,0.59Z","name":"Paraguay"},"PA":{"path":"M213.8,263.68l0.26,-1.52l-0.36,-0.26l-0.01,-0.49l0.44,-0.1l0.93,1.4l1.26,0.03l0.77,0.49l1.38,-0.23l2.51,-1.11l0.86,-0.72l3.45,0.85l1.4,1.18l0.41,1.74l-0.21,0.34l-0.53,-0.12l-0.47,0.29l-0.16,0.6l-0.68,-1.28l0.45,-0.49l-0.19,-0.66l-0.47,-0.13l-0.54,-0.84l-1.5,-0.75l-1.1,0.16l-0.75,0.99l-1.62,0.84l-0.18,0.96l0.85,0.97l-0.58,0.45l-0.69,0.08l-0.34,-1.18l-1.27,0.03l-0.71,-1.05l-2.59,-0.46Z","name":"Panama"},"PG":{"path":"M808.58,298.86l2.54,2.56l-0.13,0.26l-0.33,0.12l-0.87,-0.78l-1.22,-2.16ZM801.41,293.04l0.5,0.29l0.26,0.27l-0.49,-0.35l-0.27,-0.21ZM803.17,294.58l0.59,0.5l0.08,1.06l-0.29,-0.91l-0.38,-0.65ZM796.68,298.41l0.52,0.75l1.43,-0.19l2.27,-1.81l-0.01,-1.43l1.12,0.16l-0.04,1.1l-0.7,1.28l-1.12,0.18l-0.62,0.79l-2.46,1.11l-1.17,-0.0l-3.08,-1.25l3.41,0.0l0.45,-0.68ZM789.15,303.55l2.31,1.8l1.59,2.61l1.34,0.13l-0.06,0.66l0.31,0.43l1.06,0.24l0.06,0.65l2.25,1.05l-1.22,0.13l-0.72,-0.63l-4.56,-0.65l-3.22,-2.87l-1.49,-2.34l-3.27,-1.1l-2.38,0.72l-1.59,0.86l-0.2,0.42l0.27,1.55l-1.55,0.68l-1.36,-0.4l-2.21,-0.09l-0.08,-15.41l8.39,2.93l2.95,2.4l0.6,1.64l4.02,1.49l0.31,0.68l-1.76,0.21l-0.33,0.52l0.55,1.68Z","name":"Papua New Guinea"},"PE":{"path":"M244.96,295.21l-1.26,-0.07l-0.57,0.42l-1.93,0.45l-2.98,1.75l-0.36,1.36l-0.58,0.8l0.12,1.37l-1.24,0.59l-0.22,1.22l-0.62,0.84l1.04,2.27l1.28,1.44l-0.41,0.84l0.32,0.57l1.48,0.13l1.16,1.37l2.21,0.07l1.63,-1.08l-0.13,3.02l0.3,0.4l1.14,0.29l1.31,-0.34l1.9,3.59l-0.48,0.85l-0.17,3.85l-0.94,1.59l0.35,0.75l-0.47,1.07l0.98,1.97l-2.1,3.82l-0.98,0.5l-2.17,-1.28l-0.39,-1.16l-4.95,-2.58l-4.46,-2.79l-1.84,-1.51l-0.91,-1.84l0.3,-0.96l-2.11,-3.33l-4.82,-9.68l-1.04,-1.2l-0.87,-1.94l-3.4,-2.48l0.58,-1.18l-1.13,-2.23l0.66,-1.49l1.45,-1.15l-0.6,0.98l0.07,0.92l0.47,0.36l1.74,0.03l0.97,1.17l0.54,0.07l1.42,-1.03l0.6,-1.84l1.42,-2.02l3.04,-1.04l2.73,-2.62l0.86,-1.74l-0.1,-1.87l1.44,1.02l0.9,1.25l1.06,0.59l1.7,2.73l1.86,0.31l1.45,-0.61l0.96,0.39l1.36,-0.19l1.45,0.89l-1.4,2.21l0.31,0.61l0.59,0.05l0.47,0.5Z","name":"Peru"},"PK":{"path":"M615.09,192.34l-1.83,1.81l-2.6,0.39l-3.73,-0.68l-1.58,1.33l-0.09,0.42l1.77,4.39l1.7,1.23l-1.69,1.27l-0.12,2.14l-2.33,2.64l-1.6,2.8l-2.46,2.67l-3.03,-0.07l-2.76,2.83l0.05,0.6l1.5,1.11l0.26,1.9l1.44,1.5l0.37,1.68l-5.01,-0.01l-1.78,1.7l-1.42,-0.52l-0.76,-1.87l-2.27,-2.15l-11.61,0.86l0.71,-2.34l3.43,-1.32l0.25,-0.44l-0.21,-1.24l-1.2,-0.65l-0.28,-2.46l-2.29,-1.14l-1.28,-1.94l2.82,0.94l2.62,-0.38l1.42,0.33l0.76,-0.56l1.71,0.19l3.25,-1.14l0.27,-0.36l0.08,-2.19l1.18,-1.32l1.68,0.0l0.58,-0.82l1.6,-0.3l1.19,0.16l0.98,-0.78l0.02,-1.88l0.93,-1.47l1.48,-0.66l0.19,-0.55l-0.66,-1.25l2.04,-0.11l0.69,-1.01l-0.02,-1.16l1.11,-1.06l-0.17,-1.78l-0.49,-1.03l1.15,-0.98l5.42,-0.91l2.6,-0.82l1.6,1.16l0.97,2.34l3.45,0.97Z","name":"Pakistan"},"PH":{"path":"M737.01,263.84l0.39,2.97l-0.44,1.18l-0.55,-1.53l-0.67,-0.14l-1.17,1.28l0.65,2.09l-0.42,0.69l-2.48,-1.23l-0.57,-1.49l0.65,-1.03l-0.1,-0.54l-1.59,-1.19l-0.56,0.08l-0.65,0.87l-1.23,0.0l-1.58,0.97l0.83,-1.8l2.56,-1.42l0.65,0.84l0.45,0.13l1.9,-0.69l0.56,-1.11l1.5,-0.06l0.38,-0.43l-0.09,-1.19l1.21,0.71l0.36,2.02ZM733.59,256.58l0.05,0.75l0.08,0.26l-0.8,-0.42l-0.18,-0.71l0.85,0.12ZM734.08,256.1l-0.12,-1.12l-1.0,-1.27l1.36,0.03l0.53,0.73l0.51,2.04l-1.27,-0.4ZM733.76,257.68l0.38,0.98l-0.32,0.15l-0.07,-1.13ZM724.65,238.43l1.46,0.7l0.72,-0.31l-0.32,1.17l0.79,1.71l-0.57,1.84l-1.53,1.04l-0.39,2.25l0.56,2.04l1.63,0.57l1.16,-0.27l2.71,1.23l-0.19,1.08l0.76,0.84l-0.08,0.36l-1.4,-0.9l-0.88,-1.27l-0.66,0.0l-0.38,0.55l-1.6,-1.31l-2.15,0.36l-0.87,-0.39l0.07,-0.61l0.66,-0.55l-0.01,-0.62l-0.75,-0.59l-0.72,0.44l-0.74,-0.87l-0.39,-2.49l0.32,0.27l0.66,-0.28l0.26,-3.97l0.7,-2.02l1.14,0.0ZM731.03,258.87l-0.88,0.85l-1.19,1.94l-1.05,-1.19l0.93,-1.1l0.32,-1.47l0.52,-0.06l-0.27,1.15l0.22,0.45l0.49,-0.12l1.0,-1.32l-0.08,0.85ZM726.83,255.78l0.83,0.38l1.17,-0.0l-0.02,0.48l-2.0,1.4l0.03,-2.26ZM724.81,252.09l-0.38,1.27l-1.42,-1.95l1.2,0.05l0.6,0.63ZM716.55,261.82l1.1,-0.95l0.03,-0.03l-0.28,0.36l-0.85,0.61ZM719.22,259.06l0.04,-0.06l0.8,-1.53l0.16,0.75l-1.0,0.84Z","name":"Philippines"},"PL":{"path":"M468.44,149.42l-1.11,-1.54l-1.86,-0.33l-0.48,-1.05l-1.72,-0.37l-0.65,0.69l-0.72,-0.36l0.11,-0.61l-0.33,-0.46l-1.75,-0.27l-1.04,-0.93l-0.94,-1.94l0.16,-1.22l-0.62,-1.8l-0.78,-1.07l0.57,-1.04l-0.48,-1.43l1.41,-0.83l6.91,-2.71l2.14,0.5l0.52,0.91l5.51,0.44l4.55,-0.05l1.07,0.31l0.48,0.84l0.15,1.58l0.65,1.2l-0.01,0.99l-1.27,0.58l-0.19,0.54l0.73,1.48l0.08,1.55l1.2,2.76l-0.17,0.58l-1.23,0.44l-2.27,2.72l0.18,0.95l-1.97,-1.03l-1.98,0.4l-1.36,-0.28l-1.24,0.58l-1.07,-0.97l-1.16,0.24Z","name":"Poland"},"ZM":{"path":"M481.47,313.3l0.39,0.31l2.52,0.14l0.99,1.17l2.01,0.35l1.4,-0.64l0.69,1.17l1.78,0.33l1.84,2.35l2.23,0.18l0.4,-0.43l-0.21,-2.74l-0.62,-0.3l-0.48,0.32l-1.98,-1.17l0.72,-5.29l-0.51,-1.18l0.57,-1.3l3.68,-0.62l0.26,0.63l1.21,0.63l0.9,-0.22l2.16,0.67l1.33,0.71l1.07,1.02l0.56,1.87l-0.88,2.7l0.43,2.09l-0.73,0.87l-0.76,2.37l0.59,0.68l-6.6,1.83l-0.29,0.44l0.19,1.45l-1.68,0.35l-1.43,1.02l-0.38,0.87l-0.87,0.26l-3.48,3.69l-4.16,-0.53l-1.52,-1.0l-1.77,-0.13l-1.83,0.52l-3.04,-3.4l0.11,-7.59l4.82,0.03l0.39,-0.49l-0.18,-0.76l0.33,-0.83l-0.4,-1.36l0.24,-1.05Z","name":"Zambia"},"EH":{"path":"M384.42,230.28l0.25,-0.79l1.06,-1.29l0.8,-3.51l3.38,-2.78l0.7,-1.81l0.06,4.84l-1.98,0.2l-0.94,1.59l0.39,3.56l-3.7,-0.01ZM392.01,218.1l0.7,-1.8l1.77,-0.24l2.09,0.34l0.95,-0.62l1.28,-0.07l-0.0,2.51l-6.79,-0.12Z","name":"W. Sahara"},"EE":{"path":"M485.71,115.04l2.64,0.6l2.56,0.11l-1.6,1.91l0.61,3.54l-0.81,0.87l-1.78,-0.01l-3.22,-1.76l-1.8,0.45l0.21,-1.53l-0.58,-0.41l-0.69,0.34l-1.26,-1.03l-0.17,-1.63l2.83,-0.92l3.05,-0.52Z","name":"Estonia"},"EG":{"path":"M492.06,205.03l1.46,0.42l2.95,-1.64l2.04,-0.21l1.53,0.3l0.59,1.19l0.69,0.04l0.41,-0.64l1.81,0.58l1.95,0.16l1.04,-0.51l1.42,4.08l-2.03,4.54l-1.66,-1.77l-1.76,-3.85l-0.64,-0.12l-0.36,0.67l1.04,2.88l3.44,6.95l1.78,3.04l2.03,2.65l-0.36,0.53l0.23,2.01l2.7,2.19l-28.41,0.0l0.0,-18.96l-0.73,-2.2l0.59,-1.56l-0.32,-1.26l0.68,-0.99l3.06,-0.04l4.82,1.52Z","name":"Egypt"},"ZA":{"path":"M467.14,373.21l-0.13,-1.96l-0.68,-1.56l0.7,-0.68l-0.13,-2.33l-4.56,-8.19l0.77,-0.86l0.6,0.45l0.69,1.31l2.83,0.72l1.5,-0.26l2.24,-1.39l0.19,-9.55l1.35,2.3l-0.21,1.5l0.61,1.2l0.4,0.19l1.79,-0.27l2.6,-2.07l0.69,-1.32l0.96,-0.48l2.19,1.04l2.04,0.13l1.77,-0.65l0.85,-2.12l1.38,-0.33l1.59,-2.76l2.15,-1.89l3.41,-1.87l2.0,0.45l1.02,-0.28l0.99,0.2l1.75,5.29l-0.38,3.25l-0.81,-0.23l-1.0,0.46l-0.87,1.68l-0.05,1.16l1.97,1.84l1.47,-0.29l0.69,-1.18l1.09,0.01l-0.76,3.69l-0.58,1.09l-2.2,1.79l-3.17,4.76l-2.8,2.83l-3.57,2.88l-2.53,1.05l-1.22,0.14l-0.51,0.7l-1.18,-0.32l-1.39,0.5l-2.59,-0.52l-1.61,0.33l-1.18,-0.11l-2.55,1.1l-2.1,0.44l-1.6,1.07l-0.85,0.05l-0.93,-0.89l-0.93,-0.15l-0.97,-1.13l-0.25,0.05ZM491.45,364.19l0.62,-0.93l1.48,-0.59l1.18,-2.19l-0.07,-0.49l-1.99,-1.69l-1.66,0.56l-1.43,1.14l-1.34,1.73l0.02,0.51l1.88,2.11l1.31,-0.16Z","name":"South Africa"},"EC":{"path":"M231.86,285.53l0.29,1.59l-0.69,1.45l-2.61,2.51l-3.13,1.11l-1.53,2.18l-0.49,1.68l-1.0,0.73l-1.02,-1.11l-1.78,-0.16l0.67,-1.15l-0.24,-0.86l1.25,-2.13l-0.54,-1.09l-0.67,-0.08l-0.72,0.87l-0.87,-0.64l0.35,-0.69l-0.36,-1.96l0.81,-0.51l0.45,-1.51l0.92,-1.57l-0.07,-0.97l2.65,-1.33l2.75,1.35l0.77,1.05l2.12,0.35l0.76,-0.32l1.96,1.21Z","name":"Ecuador"},"IT":{"path":"M451.59,158.63l3.48,0.94l-0.21,1.17l0.3,0.83l-1.49,-0.24l-2.04,1.1l-0.21,0.39l0.13,1.45l-0.25,1.12l0.82,1.57l2.39,1.63l1.31,2.54l2.79,2.43l2.05,0.08l0.21,0.23l-0.39,0.33l0.09,0.67l4.05,1.97l2.17,1.76l-0.16,0.36l-1.17,-1.08l-2.18,-0.49l-0.44,0.2l-1.05,1.91l0.14,0.54l1.57,0.95l-0.19,0.98l-1.06,0.33l-1.25,2.34l-0.37,0.08l0.0,-0.33l1.0,-2.45l-1.73,-3.17l-1.12,-0.51l-0.88,-1.33l-1.51,-0.51l-1.27,-1.25l-1.75,-0.18l-4.12,-3.21l-1.62,-1.65l-1.03,-3.19l-3.53,-1.36l-1.3,0.51l-1.69,1.41l0.16,-0.72l-0.28,-0.47l-1.14,-0.33l-0.53,-1.96l0.72,-0.78l0.04,-0.48l-0.65,-1.17l0.8,0.39l1.4,-0.23l1.11,-0.84l0.52,0.35l1.19,-0.1l0.75,-1.2l1.53,0.33l1.36,-0.56l0.35,-1.14l1.08,0.32l0.68,-0.64l1.98,-0.44l0.42,0.82ZM459.19,184.75l-0.65,1.65l0.32,1.05l-0.31,0.89l-1.5,-0.85l-4.5,-1.67l0.19,-0.82l2.67,0.23l3.78,-0.48ZM443.93,176.05l1.18,1.66l-0.3,3.32l-1.06,-0.01l-0.77,0.73l-0.53,-0.44l-0.1,-3.37l-0.39,-1.22l1.04,0.01l0.92,-0.68Z","name":"Italy"},"VN":{"path":"M690.56,230.25l-2.7,1.82l-2.09,2.46l-0.63,1.95l4.31,6.45l2.32,1.65l1.43,1.94l1.11,4.59l-0.32,4.24l-1.93,1.54l-2.84,1.61l-2.11,2.15l-2.73,2.06l-0.59,-1.05l0.63,-1.53l-0.13,-0.47l-1.34,-1.04l1.51,-0.71l2.55,-0.18l0.3,-0.63l-0.82,-1.14l4.0,-2.07l0.31,-3.05l-0.57,-1.77l0.42,-2.66l-0.73,-1.97l-1.86,-1.76l-3.63,-5.29l-2.72,-1.46l0.36,-0.47l1.5,-0.64l0.21,-0.52l-0.97,-2.27l-0.37,-0.24l-2.83,-0.02l-2.24,-3.9l0.83,-0.4l4.39,-0.29l2.06,-1.31l1.15,0.89l1.88,0.4l-0.17,1.51l1.35,1.16l1.67,0.45Z","name":"Vietnam"},"SB":{"path":"M826.69,311.6l-0.61,0.09l-0.2,-0.33l0.37,0.15l0.44,0.09ZM824.18,307.38l-0.26,-0.3l-0.31,-0.91l0.03,0.0l0.54,1.21ZM823.04,309.33l-1.66,-0.22l-0.2,-0.52l1.16,0.28l0.69,0.46ZM819.28,304.68l1.14,0.65l0.02,0.03l-0.81,-0.44l-0.35,-0.23Z","name":"Solomon Is."},"ET":{"path":"M516.04,247.79l1.1,0.84l1.63,-0.45l0.68,0.47l1.63,0.03l2.01,0.94l1.73,1.66l1.64,2.07l-1.52,2.04l0.16,1.72l0.39,0.38l2.05,0.0l-0.36,1.03l2.86,3.58l8.32,3.08l1.31,0.02l-6.32,6.75l-3.1,0.11l-2.36,1.77l-1.47,0.04l-0.86,0.79l-1.38,-0.0l-1.32,-0.81l-2.29,1.05l-0.76,0.98l-3.29,-0.41l-3.07,-2.07l-1.8,-0.07l-0.62,-0.6l0.0,-1.24l-0.28,-0.38l-1.15,-0.37l-1.4,-2.59l-1.19,-0.68l-0.47,-1.0l-1.27,-1.23l-1.16,-0.22l0.43,-0.72l1.45,-0.28l0.41,-0.95l-0.03,-2.21l0.68,-2.44l1.05,-0.63l1.43,-3.06l1.57,-1.37l1.02,-2.51l0.35,-1.88l2.52,0.46l0.44,-0.24l0.58,-1.43Z","name":"Ethiopia"},"SO":{"path":"M525.13,288.48l-1.13,-1.57l-0.03,-8.86l2.66,-3.38l1.67,-0.13l2.13,-1.69l3.41,-0.23l7.08,-7.55l2.91,-3.69l0.08,-4.82l2.98,-0.67l1.24,-0.86l0.45,-0.0l-0.2,3.0l-1.21,3.62l-2.73,5.97l-2.13,3.65l-5.03,6.16l-8.56,6.4l-2.78,3.08l-0.8,1.56Z","name":"Somalia"},"ZW":{"path":"M498.91,341.09l-1.11,-0.22l-0.92,0.28l-2.09,-0.44l-1.5,-1.11l-1.89,-0.43l-0.62,-1.4l-0.01,-0.84l-0.3,-0.38l-0.97,-0.25l-2.71,-2.74l-1.92,-3.32l3.83,0.45l3.73,-3.82l1.08,-0.44l0.26,-0.77l1.25,-0.9l1.41,-0.26l0.5,0.89l1.99,-0.05l1.72,1.17l1.11,0.17l1.05,0.66l0.01,2.99l-0.59,3.76l0.38,0.86l-0.23,1.23l-0.39,0.35l-0.63,1.81l-2.43,2.75Z","name":"Zimbabwe"},"ES":{"path":"M416.0,169.21l1.07,1.17l4.61,1.38l1.06,-0.57l2.6,1.26l2.71,-0.3l0.09,1.12l-2.14,1.8l-3.11,0.61l-0.31,0.31l-0.2,0.89l-1.54,1.69l-0.97,2.4l0.84,1.74l-1.32,1.27l-0.48,1.68l-1.88,0.65l-1.66,2.07l-5.36,-0.01l-1.79,1.08l-0.89,0.98l-0.88,-0.17l-0.79,-0.82l-0.68,-1.59l-2.37,-0.63l-0.11,-0.5l1.21,-1.82l-0.77,-1.13l0.61,-1.68l-0.76,-1.62l0.87,-0.49l0.09,-1.25l0.42,-0.6l0.03,-2.11l0.99,-0.69l0.13,-0.5l-1.03,-1.73l-1.46,-0.11l-0.61,0.38l-1.06,0.0l-0.52,-1.23l-0.53,-0.21l-1.32,0.67l-0.01,-1.49l-0.75,-0.96l3.03,-1.88l2.99,0.53l3.32,-0.02l2.63,0.51l6.01,-0.06Z","name":"Spain"},"ER":{"path":"M520.38,246.23l3.42,2.43l3.5,3.77l0.84,0.54l-0.95,-0.01l-3.51,-3.89l-2.33,-1.15l-1.73,-0.07l-0.91,-0.51l-1.26,0.51l-1.34,-1.02l-0.61,0.17l-0.66,1.61l-2.35,-0.43l-0.17,-0.67l1.29,-5.29l0.61,-0.61l1.95,-0.53l0.87,-1.01l1.17,2.41l0.68,2.33l1.49,1.43Z","name":"Eritrea"},"ME":{"path":"M468.91,172.53l-1.22,-1.02l0.47,-1.81l0.89,-0.72l2.26,1.51l-0.5,0.57l-0.75,-0.27l-1.14,1.73Z","name":"Montenegro"},"MD":{"path":"M488.41,153.73l1.4,-0.27l1.72,0.93l1.07,0.15l0.85,0.65l-0.14,0.84l0.96,0.85l1.12,2.47l-1.15,-0.07l-0.66,-0.41l-0.52,0.25l-0.09,0.86l-1.08,1.89l-0.27,-0.86l0.25,-1.34l-0.16,-1.6l-3.29,-4.34Z","name":"Moldova"},"MG":{"path":"M545.91,319.14l0.4,3.03l0.62,1.21l-0.21,1.02l-0.57,-0.8l-0.69,-0.01l-0.47,0.76l0.41,2.12l-0.18,0.87l-0.73,0.78l-0.15,2.14l-4.71,15.2l-1.06,2.88l-3.92,1.64l-3.12,-1.49l-0.6,-1.21l-0.19,-2.4l-0.86,-2.05l-0.21,-1.77l0.38,-1.62l1.21,-0.75l0.01,-0.76l1.19,-2.04l0.23,-1.66l-1.06,-2.99l-0.19,-2.21l0.81,-1.33l0.32,-1.46l4.63,-1.22l3.44,-3.0l0.85,-1.4l-0.08,-0.7l0.78,-0.04l1.38,-1.77l0.13,-1.64l0.45,-0.61l1.16,1.69l0.59,1.6Z","name":"Madagascar"},"MA":{"path":"M378.78,230.02l0.06,-0.59l0.92,-0.73l0.82,-1.37l-0.09,-1.04l0.79,-1.7l1.31,-1.58l0.96,-0.59l0.66,-1.55l0.09,-1.47l0.81,-1.48l1.72,-1.07l1.55,-2.69l1.16,-0.96l2.44,-0.39l1.94,-1.82l1.31,-0.78l2.09,-2.28l-0.51,-3.65l1.24,-3.7l1.5,-1.75l4.46,-2.57l2.37,-4.47l1.44,0.01l1.68,1.21l2.32,-0.19l3.47,0.65l0.8,1.54l0.16,1.71l0.86,2.96l0.56,0.59l-0.26,0.61l-3.05,0.44l-1.26,1.05l-1.33,0.22l-0.33,0.37l-0.09,1.78l-2.68,1.0l-1.07,1.42l-4.47,1.13l-4.04,2.01l-0.54,4.64l-1.15,0.06l-0.92,0.61l-1.96,-0.35l-2.42,0.54l-0.74,1.9l-0.86,0.4l-1.14,3.26l-3.53,3.01l-0.8,3.55l-0.96,1.1l-0.29,0.82l-4.95,0.18Z","name":"Morocco"},"UZ":{"path":"M598.64,172.75l-1.63,1.52l0.06,0.64l1.85,1.12l1.97,-0.64l2.21,1.17l-2.52,1.68l-2.59,-0.22l-0.18,-0.41l0.46,-1.23l-0.45,-0.53l-3.35,0.69l-2.1,3.51l-1.87,-0.12l-1.03,1.51l0.22,0.55l1.64,0.62l0.46,1.83l-1.19,2.49l-2.66,-0.53l0.05,-1.36l-0.26,-0.39l-3.3,-1.23l-2.56,-1.4l-4.4,-3.34l-1.34,-3.14l-1.08,-0.6l-2.58,0.13l-0.69,-0.44l-0.47,-2.52l-3.37,-1.6l-0.43,0.05l-2.07,1.72l-2.1,1.01l-0.21,0.47l0.28,1.01l-1.91,0.03l-0.09,-10.5l5.99,-1.7l6.19,3.54l2.71,2.84l7.05,-0.67l2.71,2.01l-0.17,2.81l0.39,0.42l0.9,0.02l0.44,2.14l0.38,0.32l2.94,0.09l0.95,1.42l1.28,-0.24l1.05,-2.04l4.43,-2.5Z","name":"Uzbekistan"},"MM":{"path":"M673.9,230.21l-1.97,1.57l-0.57,0.96l-1.4,0.6l-1.36,1.05l-1.99,0.36l-1.08,2.66l-0.91,0.4l-0.19,0.55l1.21,2.27l2.52,3.43l-0.79,1.91l-0.74,0.41l-0.17,0.52l0.65,1.37l1.61,1.95l0.25,2.58l0.9,2.13l-1.92,3.57l0.68,-2.25l-0.81,-1.74l0.19,-2.65l-1.05,-1.53l-1.24,-6.17l-1.12,-2.26l-0.6,-0.13l-4.34,3.02l-2.39,-0.65l0.77,-2.84l-0.52,-2.61l-1.91,-2.96l0.25,-0.75l-0.29,-0.51l-1.33,-0.3l-1.61,-1.93l-0.1,-1.3l0.82,-0.24l0.04,-1.64l1.02,-0.52l0.21,-0.45l-0.23,-0.95l0.54,-0.96l0.08,-2.22l1.46,0.45l0.47,-0.2l1.12,-2.19l0.16,-1.35l1.33,-2.16l-0.0,-1.52l2.89,-1.66l1.63,0.44l0.5,-0.44l-0.17,-1.4l0.64,-0.36l0.08,-1.04l0.77,-0.11l0.71,1.35l1.06,0.69l-0.03,3.86l-2.38,2.37l-0.3,3.15l0.46,0.43l2.28,-0.38l0.51,2.08l1.47,0.67l-0.6,1.8l0.19,0.48l2.97,1.48l1.64,-0.55l0.02,0.32Z","name":"Myanmar"},"ML":{"path":"M392.61,254.08l-0.19,-2.37l-0.99,-0.87l-0.44,-1.3l-0.09,-1.28l0.81,-0.58l0.35,-1.24l2.37,0.65l1.31,-0.47l0.86,0.15l0.66,-0.56l9.83,-0.04l0.38,-0.28l0.56,-1.8l-0.44,-0.65l-2.35,-21.95l3.27,-0.04l16.7,11.38l0.74,1.31l2.5,1.09l0.02,1.38l0.44,0.39l2.34,-0.21l0.01,5.38l-1.28,1.61l-0.26,1.49l-5.31,0.57l-1.07,0.92l-2.9,0.1l-0.86,-0.48l-1.38,0.36l-2.4,1.08l-0.6,0.87l-1.85,1.09l-0.43,0.7l-0.79,0.39l-1.44,-0.21l-0.81,0.84l-0.34,1.64l-1.91,2.02l-0.06,1.03l-0.67,1.22l0.13,1.16l-0.97,0.39l-0.23,-0.64l-0.52,-0.24l-1.35,0.4l-0.34,0.55l-2.69,-0.28l-0.37,-0.35l-0.02,-0.9l-0.65,-0.35l0.45,-0.64l-0.03,-0.53l-2.12,-2.44l-0.76,-0.01l-2.0,1.16l-0.78,-0.15l-0.8,-0.67l-1.21,0.23Z","name":"Mali"},"MN":{"path":"M676.61,146.48l3.81,1.68l5.67,-1.0l2.37,0.41l2.34,1.5l1.79,1.75l2.29,-0.03l3.12,0.52l2.47,-0.81l3.41,-0.59l3.53,-2.21l1.25,0.29l1.53,1.13l2.27,-0.21l-2.66,5.01l0.64,1.68l0.47,0.21l1.32,-0.38l2.38,0.48l2.02,-1.11l1.76,0.89l2.06,2.02l-0.13,0.53l-1.72,-0.29l-3.77,0.46l-1.88,0.99l-1.76,1.99l-3.71,1.17l-2.45,1.6l-3.83,-0.87l-0.41,0.17l-1.31,1.99l1.04,2.24l-1.52,0.9l-1.74,1.57l-2.79,1.02l-3.78,0.13l-4.05,1.05l-2.77,1.52l-1.16,-0.85l-2.94,0.0l-3.62,-1.79l-2.58,-0.49l-3.4,0.41l-5.12,-0.67l-2.63,0.06l-1.31,-1.6l-1.4,-3.0l-1.48,-0.33l-3.13,-1.94l-6.16,-0.93l-0.71,-1.06l0.86,-3.82l-1.93,-2.71l-3.5,-1.18l-1.95,-1.58l-0.5,-1.72l2.34,-0.52l4.75,-2.8l3.62,-1.47l2.18,0.97l2.46,0.05l1.81,1.53l2.46,0.12l3.95,0.71l2.43,-2.28l0.08,-0.48l-0.9,-1.72l2.24,-2.98l2.62,1.27l4.94,1.17l0.43,2.24Z","name":"Mongolia"},"MK":{"path":"M472.8,173.98l0.49,-0.71l3.57,-0.71l1.0,0.77l0.13,1.45l-0.65,0.53l-1.15,-0.05l-1.12,0.67l-1.39,0.22l-0.79,-0.55l-0.29,-1.03l0.19,-0.6Z","name":"Macedonia"},"MW":{"path":"M505.5,309.31l0.85,1.95l0.15,2.86l-0.69,1.65l0.71,1.8l0.06,1.28l0.49,0.64l0.07,1.06l0.4,0.55l0.8,-0.23l0.55,0.61l0.69,-0.21l0.34,0.6l0.19,2.94l-1.04,0.62l-0.54,1.25l-1.11,-1.08l-0.16,-1.56l0.51,-1.31l-0.32,-1.3l-0.99,-0.65l-0.82,0.12l-2.36,-1.64l0.63,-1.96l0.82,-1.18l-0.46,-2.01l0.9,-2.86l-0.94,-2.51l0.96,0.18l0.29,0.4Z","name":"Malawi"},"MR":{"path":"M407.36,220.66l-2.58,0.03l-0.39,0.44l2.42,22.56l0.36,0.43l-0.39,1.24l-9.75,0.04l-0.56,0.53l-0.91,-0.11l-1.27,0.45l-1.61,-0.66l-0.97,0.03l-0.36,0.29l-0.38,1.35l-0.42,0.23l-2.93,-3.4l-2.96,-1.52l-1.62,-0.03l-1.27,0.54l-1.12,-0.2l-0.65,0.4l-0.08,-0.49l0.68,-1.29l0.31,-2.43l-0.57,-3.91l0.23,-1.21l-0.69,-1.5l-1.15,-1.02l0.25,-0.39l9.58,0.02l0.4,-0.45l-0.46,-3.68l0.47,-1.04l2.12,-0.21l0.36,-0.4l-0.08,-6.4l7.81,0.13l0.41,-0.4l0.01,-3.31l7.76,5.35Z","name":"Mauritania"},"UG":{"path":"M498.55,276.32l0.7,-0.46l1.65,0.5l1.96,-0.57l1.7,0.01l1.45,-0.98l0.91,1.33l1.33,3.95l-2.57,4.03l-1.46,-0.4l-2.54,0.91l-1.37,1.61l-0.01,0.81l-2.42,-0.01l-2.26,1.01l-0.17,-1.59l0.58,-1.04l0.14,-1.94l1.37,-2.28l1.78,-1.58l-0.17,-0.65l-0.72,-0.24l0.13,-2.43Z","name":"Uganda"},"MY":{"path":"M717.47,273.46l-1.39,0.65l-2.12,-0.41l-2.88,-0.0l-0.38,0.28l-0.84,2.75l-0.99,0.96l-1.21,3.29l-1.73,0.45l-2.45,-0.68l-1.39,0.31l-1.33,1.15l-1.59,-0.14l-1.41,0.44l-1.44,-1.19l-0.18,-0.73l1.34,0.53l1.93,-0.47l0.75,-2.22l4.02,-1.03l2.75,-3.21l0.82,0.94l0.64,-0.05l0.4,-0.65l0.96,0.06l0.42,-0.36l0.24,-2.68l1.81,-1.64l1.21,-1.86l0.63,-0.01l1.07,1.05l0.34,1.28l3.44,1.35l-0.06,0.35l-1.37,0.1l-0.35,0.54l0.32,0.88ZM673.68,269.59l0.17,1.09l0.47,0.33l1.65,-0.3l0.87,-0.94l1.61,1.52l0.98,1.56l-0.12,2.81l0.41,2.29l0.95,0.9l0.88,2.44l-1.27,0.12l-5.1,-3.67l-0.34,-1.29l-1.37,-1.59l-0.33,-1.97l-0.88,-1.4l0.25,-1.68l-0.46,-1.05l1.63,0.84Z","name":"Malaysia"},"MX":{"path":"M133.12,200.41l0.2,0.47l9.63,3.33l6.96,-0.02l0.4,-0.4l0.0,-0.74l3.77,0.0l3.55,2.93l1.39,2.83l1.52,1.04l2.08,0.82l0.47,-0.14l1.46,-2.0l1.73,-0.04l1.59,0.98l2.05,3.35l1.47,1.56l1.26,3.14l2.18,1.02l2.26,0.58l-1.18,3.72l-0.42,5.04l1.79,4.89l1.62,1.89l0.61,1.52l1.2,1.42l2.55,0.66l1.37,1.1l7.54,-1.89l1.86,-1.3l1.14,-4.3l4.1,-1.21l3.57,-0.11l0.32,0.3l-0.06,0.94l-1.26,1.45l-0.67,1.71l0.38,0.7l-0.72,2.27l-0.49,-0.3l-1.0,0.08l-1.0,1.39l-0.47,-0.11l-0.53,0.47l-4.26,-0.02l-0.4,0.4l-0.0,1.06l-1.1,0.26l0.1,0.44l1.82,1.44l0.56,0.91l-3.19,0.21l-1.21,2.09l0.24,0.72l-0.2,0.44l-2.24,-2.18l-1.45,-0.93l-2.22,-0.69l-1.52,0.22l-3.07,1.16l-10.55,-3.85l-2.86,-1.96l-3.78,-0.92l-1.08,-1.19l-2.62,-1.43l-1.18,-1.54l-0.38,-0.81l0.66,-0.63l-0.18,-0.53l0.52,-0.76l0.01,-0.91l-2.0,-3.82l-2.21,-2.63l-2.53,-2.09l-1.19,-1.62l-2.2,-1.17l-0.3,-0.43l0.34,-1.48l-0.21,-0.45l-1.23,-0.6l-1.36,-1.2l-0.59,-1.78l-1.54,-0.47l-2.44,-2.55l-0.16,-0.9l-1.33,-2.03l-0.84,-1.99l-0.16,-1.33l-1.81,-1.1l-0.97,0.05l-1.31,-0.7l-0.57,0.22l-0.4,1.12l0.72,3.77l3.51,3.89l0.28,0.78l0.53,0.26l0.41,1.43l1.33,1.73l1.58,1.41l0.8,2.39l1.43,2.41l0.13,1.32l0.37,0.36l1.04,0.08l1.67,2.28l-0.85,0.76l-0.66,-1.51l-1.68,-1.54l-2.91,-1.87l0.06,-1.82l-0.54,-1.68l-2.91,-2.03l-0.55,0.09l-1.95,-1.1l-0.88,-0.94l0.68,-0.08l0.93,-1.01l0.08,-1.78l-1.93,-1.94l-1.46,-0.77l-3.75,-7.56l4.88,-0.42Z","name":"Mexico"},"IL":{"path":"M507.76,203.05l0.4,-0.78l0.18,0.4l-0.33,1.03l0.52,0.44l0.68,-0.22l-0.86,3.6l-1.16,-3.32l0.59,-0.74l-0.03,-0.41ZM508.73,200.34l0.37,-1.02l0.64,0.0l0.52,-0.51l-0.49,1.53l-0.56,-0.24l-0.48,0.23Z","name":"Israel"},"FR":{"path":"M444.48,172.62l-0.64,1.78l-0.58,-0.31l-0.49,-1.72l0.4,-0.89l1.0,-0.72l0.3,1.85ZM429.64,147.1l1.78,1.58l1.46,-0.13l2.1,1.42l1.35,0.27l1.23,0.83l3.04,0.5l-1.03,1.85l-0.3,2.12l-0.41,0.32l-0.95,-0.24l-0.5,0.43l0.06,0.61l-1.81,1.92l-0.04,1.42l0.55,0.38l0.88,-0.36l0.61,0.97l-0.03,1.0l0.57,0.91l-0.75,1.09l0.65,2.39l1.27,0.57l-0.18,0.82l-2.01,1.53l-4.77,-0.8l-3.82,1.0l-0.53,1.85l-2.49,0.34l-2.71,-1.31l-1.16,0.57l-4.31,-1.29l-0.72,-0.86l1.19,-1.78l0.39,-6.45l-2.58,-3.3l-1.9,-1.66l-3.72,-1.23l-0.19,-1.72l2.81,-0.61l4.12,0.81l0.47,-0.48l-0.6,-2.77l1.94,0.95l5.83,-2.54l0.92,-2.74l1.6,-0.49l0.24,0.78l1.36,0.33l1.05,1.19ZM289.01,278.39l-0.81,0.8l-0.78,0.12l-0.5,-0.66l-0.56,-0.1l-0.91,0.6l-0.46,-0.22l1.09,-2.96l-0.96,-1.77l-0.17,-1.49l1.07,-1.77l2.32,0.75l2.51,2.01l0.3,0.74l-2.14,3.96Z","name":"France"},"XS":{"path":"M531.15,258.94l1.51,0.12l5.13,-0.95l5.3,-1.48l-0.01,4.4l-2.67,3.39l-1.85,0.01l-8.04,-2.94l-2.55,-3.17l1.12,-1.71l2.04,2.34Z","name":"Somaliland"},"FI":{"path":"M492.17,76.39l-0.23,3.5l3.52,2.63l-2.08,2.88l-0.02,0.44l2.8,4.56l-1.59,3.31l2.16,3.24l-0.94,2.39l0.14,0.47l3.44,2.51l-0.77,1.62l-7.52,6.95l-4.5,0.31l-4.38,1.37l-3.8,0.74l-1.44,-1.96l-2.17,-1.11l0.5,-3.66l-1.16,-3.33l1.09,-2.08l2.21,-2.42l5.67,-4.32l1.64,-0.83l0.21,-0.42l-0.46,-2.02l-3.38,-1.89l-0.75,-1.43l-0.22,-6.74l-6.79,-4.8l0.8,-0.62l2.54,2.12l3.46,-0.12l3.0,0.96l2.51,-2.11l1.17,-3.08l3.55,-1.38l2.76,1.53l-0.95,2.79Z","name":"Finland"},"FJ":{"path":"M869.95,326.98l-1.21,0.41l-0.08,-0.23l2.97,-1.21l-0.14,0.42l-1.54,0.61ZM867.58,329.25l0.43,0.37l-0.27,0.88l-1.24,0.28l-1.04,-0.24l-0.14,-0.66l0.63,-0.58l0.92,0.26l0.7,-0.31Z","name":"Fiji"},"FK":{"path":"M274.36,425.85l1.44,1.08l-0.47,0.73l-3.0,0.89l-0.96,-1.0l-0.52,-0.05l-1.83,1.29l-0.73,-0.88l2.46,-1.64l1.93,0.76l1.67,-1.19Z","name":"Falkland Is."},"NI":{"path":"M202.33,252.67l0.81,-0.18l1.03,-1.02l-0.04,-0.88l0.68,-0.0l0.63,-0.54l0.97,0.22l1.53,-1.26l0.58,-0.99l1.17,0.34l2.41,-0.94l0.13,1.32l-0.81,1.94l0.1,2.74l-0.36,0.37l-0.11,1.75l-0.47,0.81l0.18,1.14l-1.73,-0.85l-0.71,0.27l-1.47,-0.6l-0.52,0.16l-4.01,-3.81Z","name":"Nicaragua"},"NL":{"path":"M430.31,143.39l0.6,-0.5l2.13,-4.8l3.2,-1.33l1.74,0.08l0.33,0.8l-0.59,2.92l-0.5,0.99l-1.26,0.0l-0.4,0.45l0.33,2.7l-2.2,-1.78l-2.62,0.58l-0.75,-0.11Z","name":"Netherlands"},"NO":{"path":"M491.44,67.41l6.8,2.89l-2.29,0.86l-0.15,0.65l2.33,2.38l-4.98,1.79l0.84,-2.45l-0.18,-0.48l-3.55,-1.8l-3.89,1.52l-1.42,3.38l-2.12,1.72l-2.64,-1.0l-3.11,0.21l-2.66,-2.22l-0.5,-0.01l-1.41,1.1l-1.44,0.17l-0.35,0.35l-0.32,2.47l-4.32,-0.64l-0.44,0.29l-0.58,2.11l-2.45,0.2l-4.15,7.68l-3.88,5.76l0.78,1.62l-0.64,1.16l-2.24,-0.06l-0.38,0.24l-1.66,3.89l0.15,5.17l1.57,2.04l-0.78,4.16l-2.02,2.48l-0.85,1.63l-1.3,-1.75l-0.58,-0.07l-4.87,4.19l-3.1,0.79l-3.16,-1.7l-0.85,-3.77l-0.77,-8.55l2.14,-2.31l6.55,-3.27l5.02,-4.17l10.63,-13.84l10.98,-8.7l5.35,-1.91l4.34,0.12l3.69,-3.64l4.49,0.19l4.37,-0.89ZM484.55,20.04l4.26,1.75l-3.1,2.55l-7.1,0.65l-7.08,-0.9l-0.37,-1.31l-0.37,-0.29l-3.44,-0.1l-2.08,-2.0l6.87,-1.44l3.9,1.31l2.39,-1.64l6.13,1.4ZM481.69,33.93l-4.45,1.74l-3.54,-0.99l1.12,-0.9l0.05,-0.58l-1.06,-1.22l4.22,-0.89l1.09,1.97l2.57,0.87ZM466.44,24.04l7.43,3.77l-5.41,1.86l-1.58,4.08l-2.26,1.2l-1.12,4.11l-2.61,0.18l-4.79,-2.86l1.84,-1.54l-0.1,-0.68l-3.69,-1.53l-4.77,-4.51l-1.73,-3.89l6.11,-1.82l1.54,1.92l3.57,-0.08l1.2,-1.96l3.32,-0.18l3.05,1.92Z","name":"Norway"},"NA":{"path":"M474.26,330.66l-0.97,0.04l-0.38,0.4l-0.07,8.9l-2.09,0.08l-0.39,0.4l-0.0,17.42l-1.98,1.23l-1.17,0.17l-2.44,-0.66l-0.48,-1.13l-0.99,-0.74l-0.54,0.05l-0.9,1.01l-1.53,-1.68l-0.93,-1.88l-1.99,-8.56l-0.06,-3.12l-0.33,-1.52l-2.3,-3.34l-1.91,-4.83l-1.96,-2.43l-0.12,-1.57l2.33,-0.79l1.43,0.07l1.81,1.13l10.23,-0.25l1.84,1.23l5.87,0.35ZM474.66,330.64l6.51,-1.6l1.9,0.39l-1.69,0.4l-1.31,0.83l-1.12,-0.94l-4.29,0.92Z","name":"Namibia"},"VU":{"path":"M839.04,322.8l0.22,1.14l-0.44,0.03l-0.2,-1.45l0.42,0.27Z","name":"Vanuatu"},"NC":{"path":"M838.78,341.24l-0.33,0.22l-2.9,-1.75l-3.26,-3.37l1.65,0.83l4.85,4.07Z","name":"New Caledonia"},"NE":{"path":"M454.75,226.53l1.33,1.37l0.48,0.07l1.27,-0.7l0.53,3.52l0.94,0.83l0.17,0.92l0.81,0.69l-0.44,0.95l-0.96,5.26l-0.13,3.22l-3.04,2.31l-1.22,3.57l1.02,1.24l-0.0,1.46l0.39,0.4l1.13,0.04l-0.9,1.25l-1.47,-2.42l-0.86,-0.29l-2.09,1.37l-1.74,-0.67l-1.45,-0.17l-0.85,0.35l-1.36,-0.07l-1.64,1.09l-1.06,0.05l-2.94,-1.28l-1.44,0.59l-1.01,-0.03l-0.97,-0.94l-2.7,-0.98l-2.69,0.3l-0.87,0.64l-0.47,1.6l-0.75,1.16l-0.12,1.53l-1.57,-1.1l-1.31,0.24l0.03,-0.81l-0.32,-0.41l-2.59,-0.52l-0.15,-1.16l-1.35,-1.6l-0.29,-1.0l0.13,-0.84l1.29,-0.08l1.08,-0.92l3.31,-0.22l2.22,-0.41l0.32,-0.34l0.2,-1.47l1.39,-1.88l-0.01,-5.66l3.36,-1.12l7.24,-5.12l8.42,-4.92l3.69,1.06Z","name":"Niger"},"NG":{"path":"M456.32,253.89l0.64,0.65l-0.28,1.04l-2.11,2.01l-2.03,5.18l-1.37,1.16l-1.15,3.18l-1.33,0.66l-1.46,-0.97l-1.21,0.16l-1.38,1.36l-0.91,0.24l-1.79,4.06l-2.33,0.81l-1.11,-0.07l-0.86,0.5l-1.71,-0.05l-1.19,-1.39l-0.89,-1.89l-1.77,-1.66l-3.95,-0.08l0.07,-5.21l0.42,-1.43l1.95,-2.3l-0.14,-0.91l0.43,-1.18l-0.53,-1.41l0.25,-2.92l0.72,-1.07l0.32,-1.34l0.46,-0.39l2.47,-0.28l2.34,0.89l1.15,1.02l1.28,0.04l1.22,-0.58l3.03,1.27l1.49,-0.14l1.36,-1.0l1.33,0.07l0.82,-0.35l3.45,0.8l1.82,-1.32l1.84,2.67l0.66,0.16Z","name":"Nigeria"},"NZ":{"path":"M857.8,379.65l1.86,3.12l0.44,0.18l0.3,-0.38l0.03,-1.23l0.38,0.27l0.57,2.31l2.02,0.94l1.81,0.27l1.57,-1.06l0.7,0.18l-1.15,3.59l-1.98,0.11l-0.74,1.2l0.2,1.11l-2.42,3.98l-1.49,0.92l-1.04,-0.85l1.21,-2.05l-0.81,-2.01l-2.63,-1.25l0.04,-0.57l1.82,-1.19l0.43,-2.34l-0.16,-2.03l-0.95,-1.82l-0.06,-0.72l-3.11,-3.64l-0.79,-1.52l1.56,1.45l1.76,0.66l0.65,2.34ZM853.83,393.59l0.57,1.24l0.59,0.16l1.42,-0.97l0.46,0.79l0.0,1.03l-2.47,3.48l-1.26,1.2l-0.06,0.5l0.55,0.87l-1.41,0.07l-2.33,1.38l-2.03,5.02l-3.02,2.16l-2.06,-0.06l-1.71,-1.04l-2.47,-0.2l-0.27,-0.73l1.22,-2.1l3.05,-2.94l1.62,-0.59l4.02,-2.82l1.57,-1.67l1.07,-2.16l0.88,-0.7l0.48,-1.75l1.24,-0.97l0.35,0.79Z","name":"New Zealand"},"NP":{"path":"M641.14,213.62l0.01,3.19l-1.74,0.04l-4.8,-0.86l-1.58,-1.39l-3.37,-0.34l-7.65,-3.7l0.8,-2.09l2.33,-1.7l1.77,0.75l2.49,1.76l1.38,0.41l0.99,1.35l1.9,0.52l1.99,1.17l5.49,0.9Z","name":"Nepal"},"XK":{"path":"M472.77,172.64l-1.08,-1.29l0.96,-0.77l0.29,-0.83l1.98,1.64l-0.36,0.67l-1.79,0.58Z","name":"Kosovo"},"CI":{"path":"M407.4,259.27l0.86,0.42l0.56,0.9l1.13,0.53l1.19,-0.61l0.97,-0.08l1.42,0.54l0.6,3.24l-1.03,2.08l-0.65,2.84l1.06,2.33l-0.06,0.53l-2.54,-0.47l-1.66,0.03l-3.06,0.46l-4.11,1.6l0.32,-3.06l-1.18,-1.31l-1.32,-0.66l0.42,-0.85l-0.2,-1.4l0.5,-0.67l0.01,-1.59l0.84,-0.32l0.26,-0.5l-1.15,-3.01l0.12,-0.5l0.51,-0.25l0.66,0.31l1.93,0.02l0.67,-0.71l0.71,-0.14l0.25,0.69l0.57,0.22l1.4,-0.61Z","name":"Côte d'Ivoire"},"CH":{"path":"M444.62,156.35l-0.29,0.87l0.18,0.53l1.13,0.58l1.0,0.1l-0.1,0.65l-0.79,0.38l-1.72,-0.37l-0.45,0.23l-0.45,1.04l-0.75,0.06l-0.84,-0.4l-1.32,1.0l-0.96,0.12l-0.88,-0.55l-0.81,-1.3l-0.49,-0.16l-0.63,0.26l0.02,-0.65l1.71,-1.66l0.1,-0.56l0.93,0.08l0.58,-0.46l1.99,0.02l0.66,-0.61l2.19,0.79Z","name":"Switzerland"},"CO":{"path":"M242.07,254.93l-1.7,0.59l-0.59,1.18l-1.7,1.69l-0.38,1.93l-0.67,1.43l0.31,0.57l1.03,0.13l0.25,0.9l0.57,0.64l-0.04,2.34l1.64,1.42l3.16,-0.24l1.26,0.28l1.67,2.06l0.41,0.13l4.09,-0.39l0.45,0.22l-0.92,1.95l-0.2,1.8l0.52,1.83l0.75,1.05l-1.12,1.1l0.07,0.63l0.84,0.51l0.74,1.29l-0.39,-0.45l-0.59,-0.01l-0.71,0.74l-4.71,-0.05l-0.4,0.41l0.03,1.57l0.33,0.39l1.11,0.2l-1.68,0.4l-0.29,0.38l-0.01,1.82l1.16,1.14l0.34,1.25l-1.05,7.05l-1.04,-0.87l1.26,-1.99l-0.13,-0.56l-2.18,-1.23l-1.38,0.2l-1.14,-0.38l-1.27,0.61l-1.55,-0.26l-1.38,-2.46l-1.23,-0.75l-0.85,-1.2l-1.67,-1.19l-0.86,0.13l-2.11,-1.32l-1.01,0.31l-1.8,-0.29l-0.52,-0.91l-3.09,-1.68l0.77,-0.52l-0.1,-1.12l0.41,-0.64l1.34,-0.32l2.0,-2.88l-0.11,-0.57l-0.66,-0.43l0.39,-1.38l-0.52,-2.1l0.49,-0.83l-0.4,-2.13l-0.97,-1.35l0.17,-0.66l0.86,-0.08l0.47,-0.75l-0.46,-1.63l1.41,-0.07l1.8,-1.69l0.93,-0.24l0.3,-0.38l0.45,-2.76l1.22,-1.0l1.44,-0.04l0.45,-0.5l1.91,0.12l2.93,-1.84l1.15,-1.14l0.91,0.46l-0.25,0.45Z","name":"Colombia"},"CN":{"path":"M740.23,148.97l4.57,1.3l2.8,2.17l0.98,2.9l0.38,0.27l3.8,0.0l2.32,-1.28l3.29,-0.75l-0.96,2.09l-1.02,1.28l-0.85,3.4l-1.52,2.73l-2.76,-0.5l-2.4,1.13l-0.21,0.45l0.64,2.57l-0.32,3.2l-0.94,0.06l-0.37,0.89l-0.91,-1.01l-0.64,0.07l-0.92,1.57l-3.73,1.25l-0.26,0.48l0.26,1.06l-1.5,-0.08l-1.09,-0.86l-0.56,0.06l-1.67,2.06l-2.7,1.56l-2.03,1.88l-3.4,0.83l-1.93,1.4l-1.15,0.34l0.33,-0.7l-0.41,-0.89l1.79,-1.79l0.02,-0.54l-1.32,-1.56l-0.48,-0.1l-2.24,1.09l-2.83,2.06l-1.51,1.83l-2.28,0.13l-1.55,1.49l-0.04,0.5l1.32,1.97l2.0,0.58l0.31,1.35l1.98,0.84l3.0,-1.96l2.0,1.02l1.49,0.11l0.22,0.83l-3.37,0.86l-1.12,1.48l-2.5,1.52l-1.29,1.99l0.14,0.56l2.57,1.48l0.97,2.7l3.17,4.63l-0.03,1.66l-1.35,0.65l-0.2,0.51l0.6,1.47l1.4,0.91l-0.89,3.82l-1.43,0.38l-3.85,6.44l-2.27,3.11l-6.78,4.57l-2.73,0.29l-1.45,1.04l-0.62,-0.61l-0.55,-0.01l-1.36,1.25l-3.39,1.27l-2.61,0.4l-1.1,2.79l-0.81,0.09l-0.49,-1.42l0.5,-0.85l-0.25,-0.59l-3.36,-0.84l-1.3,0.4l-2.31,-0.62l-0.94,-0.84l0.33,-1.28l-0.3,-0.49l-2.19,-0.46l-1.13,-0.93l-0.47,-0.02l-2.06,1.36l-4.29,0.28l-2.76,1.05l-0.28,0.43l0.32,2.53l-0.59,-0.03l-0.19,-1.34l-0.55,-0.34l-1.68,0.7l-2.46,-1.23l0.62,-1.87l-0.26,-0.51l-1.37,-0.44l-0.54,-2.22l-0.45,-0.3l-2.13,0.35l0.24,-2.48l2.39,-2.4l0.03,-4.31l-1.19,-0.92l-0.78,-1.49l-0.41,-0.21l-1.41,0.19l-1.98,-0.3l0.46,-1.07l-1.17,-1.7l-0.55,-0.11l-1.63,1.05l-2.25,-0.57l-2.89,1.73l-2.25,1.98l-1.75,0.29l-1.17,-0.71l-3.31,-0.65l-1.48,0.79l-1.04,1.27l-0.12,-1.17l-0.54,-0.34l-1.44,0.54l-5.55,-0.86l-1.98,-1.16l-1.89,-0.54l-0.99,-1.35l-1.34,-0.37l-2.55,-1.79l-2.01,-0.84l-1.21,0.56l-5.57,-3.45l-0.53,-2.31l1.19,0.25l0.48,-0.37l0.08,-1.42l-0.98,-1.56l0.15,-2.44l-2.69,-3.32l-4.12,-1.23l-0.67,-2.0l-1.92,-1.48l-0.38,-0.7l-0.51,-3.01l-1.52,-0.66l-0.7,0.13l-0.48,-2.05l0.55,-0.51l-0.09,-0.82l2.03,-1.19l1.6,-0.54l2.56,0.38l0.42,-0.22l0.85,-1.7l3.0,-0.33l1.1,-1.26l4.05,-1.77l0.39,-0.91l-0.17,-1.44l1.45,-0.67l0.2,-0.52l-2.07,-4.9l4.51,-1.12l1.37,-0.73l1.89,-5.51l4.98,0.86l1.51,-1.7l0.11,-2.87l1.99,-0.38l1.83,-2.06l0.49,-0.13l0.68,2.08l2.23,1.77l3.44,1.16l1.55,2.29l-0.92,3.49l0.96,1.67l6.54,1.13l2.95,1.87l1.47,0.35l1.06,2.62l1.53,1.91l3.05,0.08l5.14,0.67l3.37,-0.41l2.36,0.43l3.65,1.8l3.06,0.04l1.45,0.88l2.87,-1.59l3.95,-1.02l3.83,-0.14l3.06,-1.14l1.77,-1.6l1.72,-1.01l0.17,-0.49l-1.1,-2.05l1.02,-1.54l4.02,0.8l2.45,-1.61l3.76,-1.19l1.96,-2.13l1.63,-0.83l3.51,-0.4l1.92,0.34l0.46,-0.3l0.17,-1.5l-2.27,-2.22l-2.11,-1.09l-2.18,1.11l-2.32,-0.47l-1.29,0.32l-0.4,-0.82l2.73,-5.16l3.02,1.06l3.53,-2.06l0.18,-1.68l2.16,-3.35l1.49,-1.35l-0.03,-1.85l-1.07,-0.85l1.54,-1.26l2.98,-0.59l3.23,-0.09l3.64,0.99l2.04,1.16l3.29,6.71l0.92,3.19ZM696.92,237.31l-1.87,1.08l-1.63,-0.64l-0.06,-1.79l1.03,-0.98l2.58,-0.69l1.16,0.05l0.3,0.54l-0.98,1.06l-0.53,1.37Z","name":"China"},"CM":{"path":"M457.92,257.49l1.05,1.91l-1.4,0.16l-1.05,-0.23l-0.45,0.22l-0.54,1.19l0.08,0.45l1.48,1.47l1.05,0.45l1.01,2.46l-1.52,2.99l-0.68,0.68l-0.13,3.69l2.38,3.84l1.09,0.8l0.24,2.48l-3.67,-1.14l-11.27,-0.13l0.23,-1.79l-0.98,-1.66l-1.19,-0.54l-0.44,-0.97l-0.6,-0.42l1.71,-4.27l0.75,-0.13l1.38,-1.36l0.65,-0.03l1.71,0.99l1.93,-1.12l1.14,-3.18l1.38,-1.17l2.0,-5.14l2.17,-2.13l0.3,-1.64l-0.86,-0.88l0.03,-0.33l0.94,1.28l0.07,3.22Z","name":"Cameroon"},"CL":{"path":"M246.5,429.18l-3.14,1.83l-0.57,3.16l-0.64,0.05l-2.68,-1.06l-2.82,-2.33l-3.04,-1.89l-0.69,-1.85l0.63,-2.14l-1.21,-2.11l-0.31,-5.37l1.01,-2.91l2.57,-2.38l-0.18,-0.68l-3.16,-0.77l2.05,-2.47l0.77,-4.65l2.32,0.9l0.54,-0.29l1.31,-6.31l-0.22,-0.44l-1.68,-0.8l-0.56,0.28l-0.7,3.36l-0.81,-0.22l1.56,-9.41l1.15,-2.24l-0.71,-2.82l-0.18,-2.84l1.01,-0.33l3.26,-9.14l1.07,-4.22l-0.56,-4.21l0.74,-2.34l-0.29,-3.27l1.46,-3.34l2.04,-16.59l-0.66,-7.76l1.03,-0.53l0.54,-0.9l0.79,1.14l0.32,1.78l1.25,1.16l-0.69,2.55l1.33,2.9l0.97,3.59l0.46,0.29l1.5,-0.3l0.11,0.23l-0.76,2.44l-2.57,1.23l-0.23,0.37l0.08,4.33l-0.46,0.77l0.56,1.21l-1.58,1.51l-1.68,2.62l-0.89,2.47l0.2,2.7l-1.48,2.73l1.12,5.09l0.64,0.61l-0.01,2.29l-1.38,2.68l0.01,2.4l-1.89,2.04l0.02,2.75l0.69,2.57l-1.43,1.13l-1.26,5.68l0.39,3.51l-0.97,0.89l0.58,3.5l1.02,1.14l-0.65,1.02l0.15,0.57l1.0,0.53l0.16,0.69l-1.03,0.85l0.26,1.75l-0.89,4.03l-1.31,2.66l0.24,1.75l-0.71,1.83l-1.99,1.7l0.3,3.67l0.88,1.19l1.58,0.01l0.01,2.21l1.04,1.95l5.98,0.63ZM248.69,430.79l0.0,7.33l0.4,0.4l3.52,0.05l-0.44,0.75l-1.94,0.98l-2.49,-0.37l-1.88,-1.06l-2.55,-0.49l-5.59,-3.71l-2.38,-2.63l4.1,2.48l3.32,1.23l0.45,-0.12l1.29,-1.57l0.83,-2.32l2.05,-1.24l1.31,0.29Z","name":"Chile"},"XC":{"path":"M504.91,192.87l0.34,0.01l0.27,-0.07l-0.29,0.26l-0.31,-0.2Z","name":"N. Cyprus"},"CA":{"path":"M280.06,145.6l-1.67,2.88l0.07,0.49l0.5,0.04l1.46,-0.98l1.0,0.42l-0.56,0.72l0.17,0.62l2.22,0.89l1.35,-0.71l1.95,0.78l-0.66,2.01l0.5,0.51l1.32,-0.42l0.98,3.17l-0.91,2.41l-0.8,0.08l-1.23,-0.45l0.47,-2.25l-0.89,-0.83l-0.48,0.06l-2.78,2.63l-0.34,-0.02l1.02,-0.85l-0.14,-0.69l-2.4,-0.77l-7.4,0.08l-0.17,-0.41l1.3,-0.94l0.02,-0.64l-0.73,-0.58l1.85,-1.74l2.57,-5.16l1.47,-1.79l1.99,-1.05l0.46,0.06l-1.53,2.45ZM68.32,74.16l4.13,0.95l4.02,2.14l2.61,0.4l2.47,-1.89l2.88,-1.31l3.85,0.48l3.71,-1.94l3.82,-1.04l1.56,1.68l0.49,0.08l1.87,-1.04l0.65,-1.98l1.24,0.35l4.16,3.94l0.54,0.01l2.75,-2.49l0.26,2.59l0.49,0.35l3.08,-0.73l1.04,-1.27l2.73,0.23l3.83,1.86l5.86,1.61l3.47,0.75l2.44,-0.26l2.73,1.78l-2.98,1.81l-0.19,0.41l0.31,0.32l4.53,0.92l6.87,-0.5l2.0,-0.69l2.49,2.39l0.53,0.02l2.72,-2.16l-0.02,-0.64l-2.16,-1.54l1.15,-1.06l4.83,-0.61l1.84,0.95l2.48,2.31l3.01,-0.23l4.55,1.92l3.85,-0.67l3.61,0.1l0.41,-0.44l-0.25,-2.36l1.79,-0.61l3.49,1.32l-0.01,3.77l0.31,0.39l0.45,-0.22l1.48,-3.16l1.74,0.1l0.41,-0.3l1.13,-4.37l-2.78,-3.11l-2.8,-1.74l0.19,-4.64l2.71,-3.07l2.98,0.67l2.41,1.95l3.19,4.8l-1.99,1.97l0.21,0.68l4.33,0.84l-0.01,4.15l0.25,0.37l0.44,-0.09l3.07,-3.15l2.54,2.39l-0.61,3.33l2.42,2.88l0.61,0.0l2.61,-3.08l1.88,-3.82l0.17,-4.58l6.72,0.94l3.13,2.04l0.13,1.82l-1.76,2.19l-0.01,0.49l1.66,2.16l-0.26,1.71l-4.68,2.8l-3.28,0.61l-2.47,-1.2l-0.55,0.23l-0.73,2.04l-2.38,3.43l-0.74,1.77l-2.74,2.57l-3.44,0.25l-2.21,1.78l-0.28,2.53l-2.82,0.55l-3.12,3.22l-2.72,4.31l-1.03,3.17l-0.14,4.31l0.33,0.41l3.44,0.57l2.24,5.95l0.45,0.23l3.4,-0.69l4.52,1.51l2.43,1.31l1.91,1.73l3.1,0.96l2.62,1.46l6.6,0.54l-0.35,2.74l0.81,3.53l1.81,3.78l3.83,3.3l0.45,0.04l2.1,-1.28l1.37,-3.69l-1.31,-5.38l-1.45,-1.58l3.57,-1.47l2.84,-2.46l1.52,-2.8l-0.25,-2.55l-1.7,-3.07l-2.85,-2.61l2.8,-3.95l-1.08,-3.37l-0.79,-5.67l1.36,-0.7l6.76,1.41l2.12,-0.96l5.12,3.36l1.05,1.61l4.08,0.26l-0.06,2.87l0.83,4.7l0.3,0.32l2.16,0.54l1.73,2.06l0.5,0.09l3.63,-2.03l2.52,-4.19l1.26,-1.32l7.6,11.72l-0.92,2.04l0.16,0.51l3.3,1.97l2.22,1.98l4.1,0.98l1.43,0.99l0.95,2.79l2.1,0.68l0.84,1.08l0.17,3.45l-3.37,2.26l-4.22,1.24l-3.06,2.63l-4.06,0.51l-5.35,-0.69l-6.39,0.2l-2.3,2.41l-3.26,1.51l-6.47,7.15l-0.06,0.48l0.44,0.19l2.13,-0.52l4.17,-4.24l5.12,-2.62l3.52,-0.3l1.69,1.21l-2.12,2.21l0.81,3.47l1.02,2.61l3.47,1.6l4.14,-0.45l2.15,-2.8l0.26,1.48l1.14,0.8l-2.56,1.69l-5.5,1.82l-2.54,1.27l-2.74,2.15l-1.4,-0.16l-0.07,-2.01l4.14,-2.44l0.18,-0.45l-0.39,-0.29l-6.63,0.45l-1.39,-1.49l-0.14,-4.43l-1.11,-0.91l-1.82,0.39l-0.66,-0.66l-0.6,0.03l-1.91,2.39l-0.82,2.52l-0.8,1.27l-1.67,0.56l-0.46,0.76l-8.31,0.07l-1.21,0.62l-2.35,1.97l-0.71,-0.14l-1.37,0.96l-1.12,-0.48l-4.74,1.26l-0.9,1.17l0.21,0.62l1.73,0.3l-1.81,0.31l-1.85,0.81l-2.11,-0.13l-2.95,1.78l-0.69,-0.09l1.39,-2.1l1.73,-1.21l0.1,-2.29l1.16,-1.99l0.49,0.53l2.03,0.42l1.2,-1.16l0.02,-0.47l-2.66,-3.51l-2.28,-0.61l-5.64,-0.71l-0.4,-0.57l-0.79,0.13l0.2,-0.41l-0.22,-0.55l-0.68,-0.26l0.19,-1.26l-0.78,-0.73l0.31,-0.64l-0.29,-0.57l-2.6,-0.44l-0.75,-1.63l-0.94,-0.66l-4.31,-0.65l-1.13,1.19l-1.48,0.59l-0.85,1.06l-2.83,-0.76l-2.09,0.39l-2.39,-0.97l-4.24,-0.7l-0.57,-0.4l-0.41,-1.63l-0.4,-0.3l-0.85,0.02l-0.39,0.4l-0.01,0.85l-69.13,-0.01l-6.51,-4.52l-4.5,-1.38l-1.26,-2.66l0.33,-1.93l-0.23,-0.43l-3.01,-1.35l-0.55,-2.77l-2.89,-2.38l-0.04,-1.45l1.39,-1.83l-0.28,-2.55l-4.16,-2.2l-4.07,-6.6l-4.02,-3.22l-1.3,-1.88l-0.5,-0.13l-2.51,1.21l-2.23,1.87l-3.85,-3.88l-2.44,-1.04l-2.22,-0.13l0.03,-37.49ZM260.37,148.65l3.04,0.76l2.26,1.2l-3.78,-0.95l-1.53,-1.01ZM249.4,3.81l6.68,0.49l5.32,0.79l4.26,1.57l-0.07,1.1l-5.85,2.53l-6.02,1.21l-2.39,1.39l-0.18,0.45l0.39,0.29l4.01,-0.02l-4.65,2.82l-4.2,1.74l-4.19,4.59l-5.03,0.92l-1.67,1.15l-7.47,0.59l-0.37,0.37l0.32,0.42l2.41,0.49l-0.81,0.47l-0.12,0.59l1.83,2.41l-2.02,1.59l-3.81,1.51l-1.32,2.16l-3.38,1.53l-0.22,0.48l0.35,1.19l0.4,0.29l3.88,-0.18l0.03,0.61l-6.33,2.95l-6.41,-1.4l-7.43,0.79l-3.72,-0.62l-4.4,-0.25l-0.23,-1.83l4.29,-1.11l0.28,-0.51l-1.1,-3.45l1.0,-0.25l6.58,2.28l0.47,-0.16l-0.05,-0.49l-3.41,-3.45l-3.58,-0.98l1.48,-1.55l4.34,-1.29l0.97,-2.19l-0.16,-0.48l-3.42,-2.13l-0.81,-2.26l6.2,0.22l2.24,0.58l3.91,-2.1l0.2,-0.43l-0.35,-0.32l-5.64,-0.67l-8.73,0.36l-4.26,-1.9l-2.12,-2.4l-2.78,-1.66l-0.41,-1.52l3.31,-1.03l2.93,-0.2l4.91,-0.99l3.7,-2.27l2.87,0.3l2.62,1.67l0.56,-0.14l1.82,-3.2l3.13,-0.94l4.44,-0.69l7.53,-0.26l1.48,0.67l7.19,-1.06l10.8,0.79ZM203.85,57.54l0.01,0.42l1.97,2.97l0.68,-0.02l2.24,-3.72l5.95,-1.86l4.01,4.64l-0.35,2.91l0.5,0.43l4.95,-1.36l2.32,-1.8l5.31,2.28l3.27,2.11l0.3,1.84l0.48,0.33l4.42,-0.99l2.64,2.87l5.97,1.77l2.06,1.72l2.11,3.71l-4.19,1.86l-0.01,0.73l5.9,2.83l3.94,0.94l3.78,3.95l3.46,0.25l-0.63,2.37l-4.11,4.47l-2.76,-1.56l-3.9,-3.94l-3.59,0.41l-0.33,0.34l-0.19,2.72l2.63,2.38l3.42,1.89l0.94,0.97l1.55,3.75l-0.7,2.29l-2.74,-0.92l-6.25,-3.15l-0.51,0.13l0.05,0.52l6.07,5.69l0.18,0.59l-6.09,-1.39l-5.31,-2.24l-2.63,-1.66l0.6,-0.77l-0.12,-0.6l-7.39,-4.01l-0.59,0.37l0.03,0.79l-6.73,0.6l-1.69,-1.1l1.36,-2.46l4.51,-0.07l5.15,-0.52l0.31,-0.6l-0.74,-1.3l0.78,-1.84l3.21,-4.05l-0.67,-2.35l-1.11,-1.6l-3.84,-2.1l-4.35,-1.28l0.91,-0.63l0.06,-0.61l-2.65,-2.75l-2.34,-0.36l-1.89,-1.46l-0.53,0.03l-1.24,1.23l-4.36,0.55l-9.04,-0.99l-9.26,-1.98l-1.6,-1.22l2.22,-1.77l0.13,-0.44l-0.38,-0.27l-3.22,-0.02l-0.72,-4.25l1.83,-4.04l2.42,-1.85l5.5,-1.1l-1.39,2.35ZM261.19,159.33l2.07,0.61l1.44,-0.04l-1.15,0.63l-2.94,-1.23l-0.4,-0.68l0.36,-0.37l0.61,1.07ZM230.83,84.39l-2.37,0.18l-0.49,-1.63l0.93,-2.09l1.94,-0.51l1.62,0.99l0.02,1.52l-1.66,1.54ZM229.43,58.25l0.11,0.65l-4.87,-0.21l-2.72,0.62l-3.1,-2.57l0.08,-1.26l0.86,-0.23l5.57,0.51l4.08,2.5ZM222.0,105.02l-0.72,1.49l-0.63,-0.19l-0.48,-0.84l0.81,-0.99l0.65,0.05l0.37,0.46ZM183.74,38.32l2.9,1.7l4.79,-0.01l1.84,1.46l-0.49,1.68l0.23,0.48l2.82,1.14l1.76,1.26l7.01,0.65l4.1,-1.1l5.03,-0.43l3.93,0.35l2.48,1.77l0.46,1.7l-1.3,1.1l-3.56,1.01l-3.23,-0.59l-7.17,0.76l-5.09,0.09l-3.99,-0.6l-6.42,-1.54l-0.79,-2.51l-0.3,-2.49l-2.64,-2.5l-5.32,-0.72l-2.52,-1.4l0.68,-1.57l4.78,0.31ZM207.38,91.35l0.4,1.56l0.56,0.26l1.06,-0.52l1.32,0.96l5.42,2.57l0.2,1.68l0.46,0.35l1.68,-0.28l1.15,0.85l-1.55,0.87l-3.61,-0.88l-1.32,-1.69l-0.57,-0.06l-2.45,2.1l-3.12,1.79l-0.7,-1.87l-0.42,-0.26l-2.16,0.24l1.39,-1.39l0.32,-3.14l0.76,-3.35l1.18,0.22ZM215.49,102.6l-2.67,1.95l-1.4,-0.07l-0.3,-0.58l1.53,-1.48l2.84,0.18ZM202.7,24.12l2.53,1.59l-2.87,1.4l-4.53,4.05l-4.25,0.38l-5.03,-0.68l-2.45,-2.04l0.03,-1.62l1.82,-1.37l0.14,-0.45l-0.38,-0.27l-4.45,0.04l-2.59,-1.76l-1.41,-2.29l1.57,-2.32l1.62,-1.66l2.44,-0.39l0.25,-0.65l-0.6,-0.74l4.86,-0.25l3.24,3.11l8.16,2.3l1.9,3.61ZM187.47,59.2l-2.76,3.49l-2.38,-0.15l-1.44,-3.84l0.04,-2.2l1.19,-1.88l2.3,-1.23l5.07,0.17l4.11,1.02l-3.24,3.72l-2.88,0.89ZM186.07,48.79l-1.08,1.53l-3.34,-0.34l-2.56,-1.1l1.03,-1.75l3.25,-1.23l1.95,1.58l0.75,1.3ZM185.71,35.32l-5.3,-0.2l-0.32,-0.71l4.31,0.07l1.3,0.84ZM180.68,32.48l-3.34,1.0l-1.79,-1.1l-0.98,-1.87l-0.15,-1.73l4.1,0.53l2.67,1.7l-0.51,1.47ZM180.9,76.31l-1.1,1.08l-3.13,-1.23l-2.12,0.43l-2.71,-1.57l1.72,-1.09l1.55,-1.72l3.81,1.9l1.98,2.2ZM169.74,54.87l2.96,0.97l4.17,-0.57l0.41,0.88l-2.14,2.11l0.09,0.64l3.55,1.92l-0.4,3.72l-3.79,1.65l-2.17,-0.35l-1.72,-1.74l-6.02,-3.5l0.03,-0.85l4.68,0.54l0.4,-0.21l-0.05,-0.45l-2.48,-2.81l2.46,-1.95ZM174.45,40.74l1.37,1.73l0.07,2.44l-1.05,3.45l-3.79,0.47l-2.32,-0.69l0.05,-2.64l-0.44,-0.41l-3.68,0.35l-0.12,-3.1l2.45,0.1l3.67,-1.73l3.41,0.29l0.37,-0.26ZM170.05,31.55l0.67,1.56l-3.33,-0.49l-4.22,-1.77l-4.35,-0.16l1.4,-0.94l-0.06,-0.7l-2.81,-1.23l-0.12,-1.39l4.39,0.68l6.62,1.98l1.81,2.47ZM134.5,58.13l-1.02,1.82l0.45,0.58l5.4,-1.39l3.33,2.29l0.49,-0.03l2.6,-2.23l1.94,1.32l2.0,4.5l0.7,0.06l1.3,-2.29l-1.63,-4.46l1.69,-0.54l2.31,0.71l2.65,1.81l2.49,7.92l8.48,4.27l-0.19,1.35l-3.79,0.33l-0.26,0.67l1.4,1.49l-0.58,1.1l-4.23,-0.64l-4.43,-1.19l-3.0,0.28l-4.66,1.47l-10.52,1.04l-1.43,-2.02l-3.42,-1.2l-2.21,0.43l-2.51,-2.86l4.84,-1.05l3.6,0.19l3.27,-0.78l0.31,-0.39l-0.31,-0.39l-4.84,-1.06l-8.79,0.27l-0.85,-1.07l5.26,-1.66l0.27,-0.45l-0.4,-0.34l-3.8,0.06l-3.81,-1.06l1.81,-3.01l1.66,-1.79l6.48,-2.81l1.97,0.71ZM158.7,56.61l-1.7,2.44l-3.2,-2.75l0.37,-0.3l3.11,-0.18l1.42,0.79ZM149.61,42.73l1.01,1.89l0.5,0.18l2.14,-0.82l2.23,0.19l0.36,2.04l-1.33,2.09l-8.28,0.76l-6.35,2.15l-3.41,0.1l-0.19,-0.96l4.9,-2.08l0.23,-0.46l-0.41,-0.31l-11.25,0.59l-2.89,-0.74l3.04,-4.44l2.14,-1.32l6.81,1.69l4.58,3.06l4.37,0.39l0.36,-0.63l-3.36,-4.6l1.85,-1.53l2.18,0.51l0.77,2.26ZM144.76,34.41l-4.36,1.44l-3.0,-1.4l1.46,-1.24l3.47,-0.52l2.96,0.71l-0.52,1.01ZM145.13,29.83l-1.9,0.66l-3.67,-0.0l2.27,-1.61l3.3,0.95ZM118.92,65.79l-6.03,2.02l-1.33,-1.9l-5.38,-2.28l2.59,-5.05l2.16,-3.14l-0.02,-0.48l-1.97,-2.41l7.64,-0.7l3.6,1.02l6.3,0.27l4.42,2.95l-2.53,0.98l-6.24,3.43l-3.1,3.28l-0.11,2.01ZM129.54,35.53l-0.28,3.37l-1.72,1.62l-2.33,0.28l-4.61,2.19l-3.86,0.76l-2.64,-0.87l3.72,-3.4l5.01,-3.34l3.72,0.07l3.0,-0.67ZM111.09,152.69l-0.67,0.24l-3.85,-1.37l-0.83,-1.17l-2.12,-1.07l-0.66,-1.02l-2.4,-0.55l-0.74,-1.71l6.02,1.45l2.0,2.55l2.52,1.39l0.73,1.27ZM87.8,134.64l0.89,0.29l1.86,-0.21l-0.65,3.34l1.69,2.33l-1.31,-1.33l-0.99,-1.62l-1.17,-0.98l-0.33,-1.82Z","name":"Canada"},"CG":{"path":"M466.72,276.48l-0.1,1.03l-1.25,2.97l-0.19,3.62l-0.46,1.78l-0.23,0.63l-1.61,1.19l-1.21,1.39l-1.09,2.43l0.04,2.09l-3.25,3.24l-0.5,-0.24l-0.5,-0.83l-1.36,-0.02l-0.98,0.89l-1.68,-0.99l-1.54,1.24l-1.52,-1.96l1.57,-1.14l0.11,-0.52l-0.77,-1.35l2.1,-0.66l0.39,-0.73l1.05,0.82l2.21,0.11l1.12,-1.37l0.37,-1.81l-0.27,-2.09l-1.13,-1.5l1.0,-2.69l-0.13,-0.45l-0.92,-0.58l-1.6,0.17l-0.51,-0.94l0.1,-0.61l2.75,0.09l3.97,1.24l0.51,-0.33l0.17,-1.28l1.24,-2.21l1.28,-1.14l2.76,0.49Z","name":"Congo"},"CF":{"path":"M461.16,278.2l-0.26,-1.19l-1.09,-0.77l-0.84,-1.17l-0.29,-1.0l-1.04,-1.15l0.08,-3.43l0.58,-0.49l1.16,-2.35l1.85,-0.17l0.61,-0.62l0.97,0.58l3.15,-0.96l2.48,-1.92l0.02,-0.96l2.81,0.02l2.36,-1.17l1.93,-2.85l1.16,-0.93l1.11,-0.3l0.27,0.86l1.34,1.47l-0.39,2.01l0.3,1.01l4.01,2.75l0.17,0.93l2.63,2.31l0.6,1.44l2.08,1.4l-3.84,-0.21l-1.94,0.88l-1.23,-0.49l-2.67,1.2l-1.29,-0.18l-0.51,0.36l-0.6,1.22l-3.35,-0.65l-1.57,-0.91l-2.42,-0.83l-1.45,0.91l-0.97,1.27l-0.26,1.56l-3.22,-0.43l-1.49,1.33l-0.94,1.62Z","name":"Central African Rep."},"CD":{"path":"M487.01,272.38l2.34,-0.14l1.35,1.84l1.34,0.45l0.86,-0.39l1.21,0.12l1.07,-0.41l0.54,0.89l2.04,1.54l-0.14,2.72l0.7,0.54l-1.38,1.13l-1.53,2.54l-0.17,2.05l-0.59,1.08l-0.02,1.72l-0.72,0.84l-0.66,3.01l0.63,1.32l-0.44,4.26l0.64,1.47l-0.37,1.22l0.86,1.8l1.53,1.41l0.3,1.26l0.44,0.5l-4.08,0.75l-0.92,1.81l0.51,1.34l-0.74,5.43l0.17,0.38l2.45,1.46l0.54,-0.1l0.12,1.62l-1.28,-0.01l-1.85,-2.35l-1.94,-0.45l-0.48,-1.13l-0.55,-0.2l-1.41,0.74l-1.71,-0.3l-1.01,-1.18l-2.49,-0.19l-0.44,-0.77l-1.98,-0.21l-2.88,0.36l0.11,-2.41l-0.85,-1.13l-0.16,-1.36l0.32,-1.73l-0.46,-0.89l-0.04,-1.49l-0.4,-0.39l-2.53,0.02l0.1,-0.41l-0.39,-0.49l-1.28,0.01l-0.43,0.45l-1.62,0.32l-0.83,1.79l-1.09,-0.28l-2.4,0.52l-1.37,-1.91l-1.3,-3.3l-0.38,-0.27l-7.39,-0.03l-2.46,0.42l0.5,-0.45l0.37,-1.47l0.66,-0.38l0.92,0.08l0.73,-0.82l0.87,0.02l0.31,0.68l1.4,0.36l3.59,-3.63l0.01,-2.23l1.02,-2.29l2.69,-2.39l0.43,-0.99l0.49,-1.96l0.17,-3.51l1.25,-2.95l0.36,-3.14l0.86,-1.13l1.1,-0.66l3.57,1.73l3.65,0.73l0.46,-0.21l0.8,-1.46l1.24,0.19l2.61,-1.17l0.81,0.44l1.04,-0.03l0.59,-0.66l0.7,-0.16l1.81,0.25Z","name":"Dem. Rep. Congo"},"CZ":{"path":"M458.46,144.88l1.22,1.01l1.47,0.23l0.13,0.93l1.36,0.68l0.54,-0.2l0.24,-0.55l1.15,0.25l0.53,1.09l1.68,0.18l0.6,0.84l-1.04,0.73l-0.96,1.28l-1.6,0.17l-0.55,0.56l-1.04,-0.46l-1.05,0.15l-2.12,-0.96l-1.05,0.34l-1.2,1.12l-1.56,-0.87l-2.57,-2.1l-0.53,-1.88l4.7,-2.52l0.71,0.26l0.9,-0.28Z","name":"Czech Rep."},"CY":{"path":"M504.36,193.47l0.43,0.28l-1.28,0.57l-0.92,-0.28l-0.24,-0.46l2.01,-0.13Z","name":"Cyprus"},"CR":{"path":"M211.34,258.05l0.48,0.99l1.6,1.6l-0.54,0.45l0.29,1.42l-0.25,1.19l-1.09,-0.59l-0.05,-1.25l-2.46,-1.42l-0.28,-0.77l-0.66,-0.45l-0.45,-0.0l-0.11,1.04l-1.32,-0.95l0.31,-1.3l-0.36,-0.6l0.31,-0.27l1.42,0.58l1.29,-0.14l0.56,0.56l0.74,0.17l0.55,-0.27Z","name":"Costa Rica"},"CU":{"path":"M221.21,227.25l1.27,1.02l2.19,-0.28l4.43,3.33l2.08,0.43l-0.1,0.38l0.36,0.5l1.75,0.1l1.48,0.84l-3.11,0.51l-4.15,-0.03l0.77,-0.67l-0.04,-0.64l-1.2,-0.74l-1.49,-0.16l-0.7,-0.61l-0.56,-1.4l-0.4,-0.25l-1.34,0.1l-2.2,-0.66l-0.88,-0.58l-3.18,-0.4l-0.27,-0.16l0.58,-0.74l-0.36,-0.29l-2.72,-0.05l-1.7,1.29l-0.91,0.03l-0.61,0.69l-1.01,0.22l1.11,-1.29l1.01,-0.52l3.69,-1.01l3.98,0.21l2.21,0.84Z","name":"Cuba"},"SZ":{"path":"M500.35,351.36l0.5,2.04l-0.38,0.89l-1.05,0.21l-1.23,-1.2l-0.02,-0.64l0.83,-1.57l1.34,0.27Z","name":"Swaziland"},"SY":{"path":"M511.0,199.79l0.05,-1.33l0.54,-1.36l1.28,-0.99l0.13,-0.45l-0.41,-1.11l-1.14,-0.36l-0.19,-1.74l0.52,-1.0l1.29,-1.21l0.2,-1.18l0.59,0.23l2.62,-0.76l1.36,0.52l2.06,-0.01l2.95,-1.08l3.25,-0.26l-0.67,0.94l-1.28,0.66l-0.21,0.4l0.23,2.01l-0.88,3.19l-10.15,5.73l-2.15,-0.85Z","name":"Syria"},"KG":{"path":"M621.35,172.32l-3.87,1.69l-0.96,1.18l-3.04,0.34l-1.13,1.86l-2.36,-0.35l-1.99,0.63l-2.39,1.4l0.06,0.95l-0.4,0.37l-4.52,0.43l-3.02,-0.93l-2.37,0.17l0.11,-0.79l2.32,0.42l1.13,-0.88l1.99,0.2l3.21,-2.14l-0.03,-0.69l-2.97,-1.57l-1.94,0.65l-1.22,-0.74l1.71,-1.58l-0.12,-0.67l-0.36,-0.15l0.32,-0.77l1.36,-0.35l4.02,1.02l0.49,-0.3l0.35,-1.59l1.09,-0.48l3.42,1.22l1.11,-0.31l7.64,0.39l1.16,1.0l1.23,0.39Z","name":"Kyrgyzstan"},"KE":{"path":"M506.26,284.69l1.87,-2.56l0.93,-2.15l-1.38,-4.08l-1.06,-1.6l2.82,-2.75l0.79,0.26l0.12,1.41l0.86,0.83l1.9,0.11l3.28,2.13l3.57,0.44l1.05,-1.12l1.96,-0.9l0.82,0.68l1.16,0.09l-1.78,2.45l0.03,9.12l1.3,1.94l-1.37,0.78l-0.67,1.03l-1.08,0.46l-0.34,1.67l-0.81,1.07l-0.45,1.55l-0.68,0.56l-3.2,-2.23l-0.35,-1.58l-8.86,-4.98l0.14,-1.6l-0.57,-1.04Z","name":"Kenya"},"SS":{"path":"M481.71,263.34l1.07,-0.72l1.2,-3.18l1.36,-0.26l1.61,1.99l0.87,0.34l1.1,-0.41l1.5,0.07l0.57,0.53l2.49,0.0l0.44,-0.63l1.07,-0.4l0.45,-0.84l0.59,-0.33l1.9,1.33l1.6,-0.2l2.83,-3.33l-0.32,-2.21l1.59,-0.52l-0.24,1.6l0.3,1.83l1.35,1.18l0.2,1.87l0.35,0.41l0.02,1.53l-0.23,0.47l-1.42,0.25l-0.85,1.44l0.3,0.6l1.4,0.16l1.11,1.08l0.59,1.13l1.03,0.53l1.28,2.36l-4.41,3.98l-1.74,0.01l-1.89,0.55l-1.47,-0.52l-1.15,0.57l-2.96,-2.62l-1.3,0.49l-1.06,-0.15l-0.79,0.39l-0.82,-0.22l-1.8,-2.7l-1.91,-1.1l-0.66,-1.5l-2.62,-2.32l-0.18,-0.94l-2.37,-1.6Z","name":"S. Sudan"},"SR":{"path":"M283.12,270.19l2.1,0.53l-1.08,1.95l0.2,1.72l0.93,1.49l-0.59,2.03l-0.43,0.71l-1.12,-0.42l-1.32,0.22l-0.93,-0.2l-0.46,0.26l-0.25,0.73l0.33,0.7l-0.89,-0.13l-1.39,-1.97l-0.31,-1.34l-0.97,-0.31l-0.89,-1.47l0.35,-1.61l1.45,-0.82l0.33,-1.87l2.61,0.44l0.57,-0.47l1.75,-0.16Z","name":"Suriname"},"KH":{"path":"M689.52,249.39l0.49,1.45l-0.28,2.74l-4.0,1.86l-0.16,0.6l0.68,0.95l-2.06,0.17l-2.05,0.97l-1.82,-0.32l-2.12,-3.7l-0.55,-2.85l1.4,-1.85l3.02,-0.45l2.23,0.35l2.01,0.98l0.51,-0.14l0.95,-1.48l1.74,0.74Z","name":"Cambodia"},"SV":{"path":"M195.8,250.13l1.4,-1.19l2.24,1.45l0.98,-0.27l0.44,0.2l-0.27,1.05l-1.14,-0.03l-3.64,-1.21Z","name":"El Salvador"},"SK":{"path":"M476.82,151.17l-1.14,1.9l-2.73,-0.92l-0.82,0.2l-0.74,0.8l-3.46,0.73l-0.47,0.69l-1.76,0.33l-1.88,-1.0l-0.18,-0.81l0.38,-0.75l1.87,-0.32l1.74,-1.89l0.83,0.16l0.79,-0.34l1.51,1.04l1.34,-0.63l1.25,0.3l1.65,-0.42l1.81,0.95Z","name":"Slovakia"},"KR":{"path":"M737.51,185.84l0.98,-0.1l0.87,-1.17l2.69,-0.32l0.33,-0.29l1.76,2.79l0.58,1.76l0.02,3.12l-0.8,1.32l-2.21,0.55l-1.93,1.13l-1.8,0.19l-0.2,-1.1l0.43,-2.28l-0.95,-2.56l1.43,-0.37l0.23,-0.62l-1.43,-2.06Z","name":"Korea"},"SI":{"path":"M456.18,162.07l-0.51,-1.32l0.18,-1.05l1.69,0.2l1.42,-0.71l2.09,-0.07l0.62,-0.51l0.21,0.47l-1.61,0.67l-0.44,1.34l-0.66,0.24l-0.26,0.82l-1.22,-0.49l-0.84,0.46l-0.69,-0.04Z","name":"Slovenia"},"KP":{"path":"M736.77,185.16l-0.92,-0.42l-0.88,0.62l-1.21,-0.88l0.96,-1.15l0.59,-2.59l-0.46,-0.74l-2.09,-0.77l1.64,-1.52l2.72,-1.58l1.58,-1.91l1.11,0.78l2.17,0.11l0.41,-0.5l-0.3,-1.22l3.52,-1.18l0.94,-1.4l0.98,1.08l-2.19,2.18l0.01,2.14l-1.06,0.54l-1.41,1.4l-1.7,0.52l-1.25,1.09l-0.14,1.98l0.94,0.45l1.15,1.04l-0.13,0.26l-2.6,0.29l-1.13,1.29l-1.22,0.08Z","name":"Dem. Rep. Korea"},"KW":{"path":"M540.81,207.91l0.37,0.86l-0.17,0.76l0.6,1.53l-0.95,0.04l-0.82,-1.28l-1.57,-0.18l1.31,-1.88l1.22,0.17Z","name":"Kuwait"},"SN":{"path":"M390.09,248.21l0.12,1.55l0.49,1.46l0.96,0.82l0.05,1.28l-1.26,-0.19l-0.75,0.33l-1.84,-0.61l-5.84,-0.13l-2.54,0.51l-0.22,-1.03l1.77,0.04l2.01,-0.91l1.03,0.48l1.09,0.04l1.29,-0.62l0.14,-0.58l-0.51,-0.74l-1.81,0.25l-1.13,-0.63l-0.79,0.04l-0.72,0.61l-2.31,0.06l-0.92,-1.77l-0.81,-0.64l0.64,-0.35l2.46,-3.74l1.04,0.19l1.38,-0.56l1.19,-0.02l2.72,1.37l3.03,3.48Z","name":"Senegal"},"SL":{"path":"M394.46,264.11l-1.73,1.98l-0.58,1.33l-2.07,-1.06l-1.22,-1.26l-0.65,-2.39l1.16,-0.96l0.67,-1.17l1.21,-0.52l1.66,0.0l1.03,1.64l0.52,2.41Z","name":"Sierra Leone"},"KZ":{"path":"M552.8,172.89l0.46,-1.27l-0.48,-1.05l-2.96,-1.19l-1.06,-2.58l-1.37,-0.87l-0.03,-0.3l1.95,0.23l0.45,-0.38l0.08,-1.96l1.75,-0.41l2.1,0.45l0.48,-0.33l0.45,-3.04l-0.45,-2.09l-0.41,-0.31l-2.42,0.15l-2.36,-0.73l-2.87,1.37l-2.17,0.61l-0.85,-0.34l0.13,-1.61l-1.6,-2.12l-2.02,-0.08l-1.78,-1.82l1.29,-2.18l-0.57,-0.95l1.62,-2.91l2.21,1.63l0.63,-0.27l0.29,-2.22l4.92,-3.43l3.71,-0.08l8.4,3.6l2.92,-1.36l3.77,-0.06l3.11,1.66l0.51,-0.11l0.6,-0.81l3.31,0.13l0.39,-0.25l0.63,-1.57l-0.17,-0.5l-3.5,-1.98l1.87,-1.27l-0.13,-1.03l1.98,-0.72l0.18,-0.62l-1.59,-2.06l0.81,-0.82l9.23,-1.18l1.33,-0.88l6.18,-1.26l2.26,-1.42l4.08,0.68l0.73,3.33l0.51,0.3l2.48,-0.8l2.79,1.02l-0.17,1.56l0.43,0.44l2.55,-0.24l4.89,-2.53l0.03,0.32l3.15,2.61l5.56,8.47l0.65,0.02l1.12,-1.46l3.15,1.74l3.76,-0.78l1.15,0.49l1.14,1.8l1.84,0.76l0.99,1.29l3.35,-0.25l1.02,1.52l-1.6,1.81l-1.93,0.28l-0.34,0.38l-0.11,3.05l-1.13,1.16l-4.75,-1.0l-0.46,0.27l-1.76,5.47l-1.1,0.59l-4.91,1.23l-0.27,0.54l2.1,4.97l-1.37,0.63l-0.23,0.41l0.13,1.13l-0.88,-0.25l-1.42,-1.13l-7.89,-0.4l-0.92,0.31l-3.73,-1.22l-1.42,0.63l-0.53,1.66l-3.72,-0.94l-1.85,0.43l-0.76,1.4l-4.65,2.62l-1.13,2.08l-0.44,0.01l-0.92,-1.4l-2.87,-0.09l-0.45,-2.14l-0.38,-0.32l-0.8,-0.01l0.0,-2.96l-3.0,-2.22l-7.31,0.58l-2.35,-2.68l-6.71,-3.69l-6.45,1.83l-0.29,0.39l0.1,10.85l-0.7,0.08l-1.62,-2.17l-1.83,-0.96l-3.11,0.59l-0.64,0.51Z","name":"Kazakhstan"},"SA":{"path":"M537.53,210.34l2.0,0.24l0.9,1.32l1.49,-0.06l0.87,2.08l1.29,0.76l0.51,0.99l1.56,1.03l-0.1,1.9l0.32,0.9l1.58,2.47l0.76,0.53l0.7,-0.04l1.68,4.23l7.53,1.33l0.51,-0.29l0.77,1.25l-1.55,4.87l-7.29,2.52l-7.3,1.03l-2.34,1.17l-1.88,2.74l-0.76,0.28l-0.82,-0.78l-0.91,0.12l-2.88,-0.51l-3.51,0.25l-0.86,-0.56l-0.57,0.15l-0.66,1.27l0.16,1.11l-0.43,0.32l-0.93,-1.4l-0.33,-1.16l-1.23,-0.88l-1.27,-2.06l-0.78,-2.22l-1.73,-1.79l-1.14,-0.48l-1.54,-2.31l-0.21,-3.41l-1.44,-2.93l-1.27,-1.16l-1.33,-0.57l-1.31,-3.37l-0.77,-0.67l-0.97,-1.97l-2.8,-4.03l-1.06,-0.17l0.37,-1.96l0.2,-0.72l2.74,0.3l1.08,-0.84l0.6,-0.94l1.74,-0.35l0.65,-1.03l0.71,-0.4l0.1,-0.62l-2.06,-2.28l4.39,-1.22l0.48,-0.37l2.77,0.69l3.66,1.9l7.03,5.5l4.87,0.3Z","name":"Saudi Arabia"},"SE":{"path":"M480.22,89.3l-4.03,1.17l-2.43,2.86l0.26,2.57l-8.77,6.64l-1.78,5.79l1.78,2.68l2.22,1.96l-2.07,3.77l-2.72,1.13l-0.95,6.04l-1.29,3.01l-2.74,-0.31l-0.4,0.22l-1.31,2.59l-2.34,0.13l-0.75,-3.09l-2.08,-4.03l-1.83,-4.96l1.0,-1.93l2.14,-2.7l0.83,-4.45l-1.6,-2.17l-0.15,-4.94l1.48,-3.39l2.58,-0.15l0.87,-1.59l-0.78,-1.57l3.76,-5.59l4.04,-7.48l2.17,0.01l0.39,-0.29l0.57,-2.07l4.37,0.64l0.46,-0.34l0.33,-2.56l1.1,-0.13l6.94,4.87l0.06,6.32l0.66,1.36Z","name":"Sweden"},"SD":{"path":"M505.98,259.4l-0.34,-0.77l-1.17,-0.9l-0.26,-1.61l0.29,-1.81l-0.34,-0.46l-1.16,-0.17l-0.54,0.59l-1.23,0.11l-0.28,0.65l0.53,0.65l0.17,1.22l-2.44,3.0l-0.96,0.19l-2.39,-1.4l-0.95,0.52l-0.38,0.78l-1.11,0.41l-0.29,0.5l-1.94,0.0l-0.54,-0.52l-1.81,-0.09l-0.95,0.4l-2.45,-2.35l-2.07,0.54l-0.73,1.26l-0.6,2.1l-1.25,0.58l-0.75,-0.62l0.27,-2.65l-1.48,-1.78l-0.22,-1.48l-0.92,-0.96l-0.02,-1.29l-0.57,-1.16l-0.68,-0.16l0.69,-1.29l-0.18,-1.14l0.65,-0.62l0.03,-0.55l-0.36,-0.41l1.55,-2.97l1.91,0.16l0.43,-0.4l-0.1,-10.94l2.49,-0.01l0.4,-0.4l-0.0,-4.82l29.02,0.0l0.64,2.04l-0.49,0.66l0.36,2.69l0.93,3.16l2.12,1.55l-0.89,1.04l-1.72,0.39l-0.98,0.9l-1.43,5.65l0.24,1.15l-0.38,2.06l-0.96,2.38l-1.53,1.31l-1.32,2.91l-1.22,0.86l-0.37,1.34Z","name":"Sudan"},"DO":{"path":"M241.8,239.2l0.05,-0.65l-0.46,-0.73l0.42,-0.44l0.19,-1.0l-0.09,-1.53l1.66,0.01l1.99,0.63l0.33,0.67l1.28,0.19l0.33,0.76l1.0,0.08l0.8,0.62l-0.45,0.51l-1.13,-0.47l-1.88,-0.01l-1.27,0.59l-0.75,-0.55l-1.01,0.54l-0.79,1.4l-0.23,-0.61Z","name":"Dominican Rep."},"DJ":{"path":"M528.43,256.18l-0.45,0.66l-0.58,-0.25l-1.51,0.13l-0.18,-1.01l1.45,-1.95l0.83,0.17l0.77,-0.44l0.2,1.0l-1.2,0.51l-0.06,0.7l0.73,0.47Z","name":"Djibouti"},"DK":{"path":"M452.28,129.07l-1.19,2.24l-2.13,-1.6l-0.23,-0.95l2.98,-0.95l0.57,1.26ZM447.74,126.31l-0.26,0.57l-0.88,-0.07l-1.8,2.53l0.48,1.69l-1.09,0.36l-1.61,-0.39l-0.89,-1.69l-0.07,-3.43l0.96,-1.73l2.02,-0.2l1.09,-1.07l1.33,-0.67l-0.05,1.06l-0.73,1.41l0.3,1.0l1.2,0.64Z","name":"Denmark"},"DE":{"path":"M453.14,155.55l-0.55,-0.36l-1.2,-0.1l-1.87,0.57l-2.13,-0.13l-0.56,0.63l-0.86,-0.6l-0.96,0.09l-2.57,-0.93l-0.85,0.67l-1.47,-0.02l0.24,-1.75l1.23,-2.14l-0.28,-0.59l-3.52,-0.58l-0.92,-0.66l0.12,-1.2l-0.48,-0.88l0.27,-2.17l-0.37,-3.03l1.41,-0.22l0.63,-1.26l0.66,-3.19l-0.41,-1.18l0.26,-0.39l1.66,-0.15l0.33,0.54l0.62,0.07l1.7,-1.69l-0.54,-3.02l1.37,0.33l1.31,-0.37l0.31,1.18l2.25,0.71l-0.02,0.92l0.5,0.4l2.55,-0.65l1.34,-0.87l2.57,1.24l1.06,0.98l0.48,1.44l-0.57,0.74l-0.0,0.48l0.87,1.15l0.57,1.64l-0.14,1.29l0.82,1.7l-1.5,-0.07l-0.56,0.57l-4.47,2.15l-0.22,0.54l0.68,2.26l2.58,2.16l-0.66,1.11l-0.79,0.36l-0.23,0.43l0.32,1.87Z","name":"Germany"},"YE":{"path":"M528.27,246.72l0.26,-0.42l-0.22,-1.01l0.19,-1.5l0.92,-0.69l-0.07,-1.35l0.39,-0.75l1.01,0.47l3.34,-0.27l3.76,0.41l0.95,0.81l1.36,-0.58l1.74,-2.62l2.18,-1.09l6.86,-0.94l2.48,5.41l-1.64,0.76l-0.56,1.9l-6.23,2.16l-2.29,1.8l-1.93,0.05l-1.41,1.02l-4.24,0.74l-1.72,1.49l-3.28,0.19l-0.52,-1.18l0.02,-1.51l-1.34,-3.29Z","name":"Yemen"},"DZ":{"path":"M441.46,188.44l-0.32,1.07l0.39,2.64l-0.54,2.16l-1.58,1.82l0.37,2.39l1.91,1.55l0.18,0.8l1.42,1.03l1.84,7.23l0.12,1.16l-0.57,5.0l0.2,1.51l-0.87,0.99l-0.02,0.51l1.41,1.86l0.14,1.2l0.89,1.48l0.5,0.16l0.98,-0.41l1.73,1.08l0.82,1.23l-8.22,4.81l-7.23,5.11l-3.43,1.13l-2.3,0.21l-0.28,-1.59l-2.56,-1.09l-0.67,-1.25l-26.12,-17.86l0.01,-3.47l3.77,-1.88l2.44,-0.41l2.12,-0.75l1.08,-1.42l2.81,-1.05l0.35,-2.08l1.33,-0.29l1.04,-0.94l3.47,-0.69l0.46,-1.08l-0.1,-0.45l-0.58,-0.52l-0.82,-2.81l-0.19,-1.83l-0.78,-1.49l2.03,-1.31l2.63,-0.48l1.7,-1.22l2.31,-0.84l8.24,-0.73l1.49,0.38l2.28,-1.1l2.46,-0.02l0.92,0.6l1.35,-0.05Z","name":"Algeria"},"US":{"path":"M892.72,99.2l1.31,0.53l1.41,-0.37l1.89,0.98l1.89,0.42l-1.32,0.58l-2.9,-1.53l-2.08,0.22l-0.26,-0.15l0.07,-0.67ZM183.22,150.47l0.37,1.47l1.12,0.85l4.23,0.7l2.39,0.98l2.17,-0.38l1.85,0.5l-1.55,0.65l-3.49,2.61l-0.16,0.77l0.5,0.39l2.33,-0.61l1.77,1.02l5.15,-2.4l-0.31,0.65l0.25,0.56l1.36,0.38l1.71,1.16l4.7,-0.88l0.67,0.85l1.31,0.21l0.58,0.58l-1.34,0.17l-2.18,-0.32l-3.6,0.89l-2.71,3.25l0.35,0.9l0.59,-0.0l0.55,-0.6l-1.36,4.65l0.29,3.09l0.67,1.58l0.61,0.45l1.77,-0.44l1.6,-1.96l0.14,-2.21l-0.82,-1.96l0.11,-1.13l1.19,-2.37l0.44,-0.33l0.48,0.75l0.4,-0.29l0.4,-1.37l0.6,-0.47l0.24,-0.8l1.69,0.49l1.65,1.08l-0.03,2.37l-1.27,1.13l-0.0,1.13l0.87,0.36l1.66,-1.29l0.5,0.17l0.5,2.6l-2.49,3.75l0.17,0.61l1.54,0.62l1.48,0.17l1.92,-0.44l4.72,-2.15l2.16,-1.8l-0.05,-1.24l0.75,-0.22l3.92,0.36l2.12,-1.05l0.21,-0.4l-0.28,-1.48l3.27,-2.4l8.32,-0.02l0.56,-0.82l1.9,-0.77l0.93,-1.51l0.74,-2.37l1.58,-1.98l0.92,0.62l1.47,-0.47l0.8,0.66l-0.0,4.09l1.96,2.6l-2.34,1.31l-5.37,2.09l-1.83,2.72l0.02,1.79l0.83,1.59l0.54,0.23l-6.19,0.94l-2.2,0.89l-0.23,0.48l0.45,0.29l2.99,-0.46l-2.19,0.56l-1.13,0.0l-0.15,-0.32l-0.48,0.08l-0.76,0.82l0.22,0.67l0.32,0.06l-0.41,1.62l-1.27,1.58l-1.48,-1.07l-0.49,-0.04l-0.16,0.46l0.52,1.58l0.61,0.59l0.03,0.79l-0.95,1.38l-1.21,-1.22l-0.27,-2.27l-0.35,-0.35l-0.42,0.25l-0.48,1.27l0.33,1.41l-0.97,-0.27l-0.48,0.24l0.18,0.5l1.52,0.83l0.1,2.52l0.79,0.51l0.52,3.42l-1.42,1.88l-2.47,0.8l-1.71,1.66l-1.31,0.25l-1.27,1.03l-0.43,0.99l-2.69,1.78l-2.64,3.03l-0.45,2.12l0.45,2.08l0.85,2.38l1.09,1.9l0.04,1.2l1.16,3.06l-0.18,2.69l-0.55,1.43l-0.47,0.21l-0.89,-0.23l-0.49,-1.18l-0.87,-0.56l-2.75,-5.16l0.48,-1.68l-0.72,-1.78l-2.01,-2.38l-1.12,-0.53l-2.72,1.18l-1.47,-1.35l-1.57,-0.68l-2.99,0.31l-2.17,-0.3l-2.0,0.19l-1.15,0.46l-0.19,0.58l0.39,0.63l0.14,1.34l-0.84,-0.2l-0.84,0.46l-1.58,-0.07l-2.08,-1.44l-2.09,0.33l-1.91,-0.62l-3.73,0.84l-2.39,2.07l-2.54,1.22l-1.45,1.41l-0.61,1.38l0.34,3.71l-0.29,0.02l-3.5,-1.33l-1.25,-3.11l-1.44,-1.5l-2.24,-3.56l-1.76,-1.09l-2.27,-0.01l-1.71,2.07l-1.76,-0.69l-1.16,-0.74l-1.52,-2.98l-3.93,-3.16l-4.34,-0.0l-0.4,0.4l-0.0,0.74l-6.5,0.02l-9.02,-3.14l-0.34,-0.71l-5.7,0.49l-0.43,-1.29l-1.62,-1.61l-1.14,-0.38l-0.55,-0.88l-1.28,-0.13l-1.01,-0.77l-2.22,-0.27l-0.43,-0.3l-0.36,-1.58l-2.4,-2.83l-2.01,-3.85l-0.06,-0.9l-2.92,-3.26l-0.33,-2.29l-1.3,-1.66l0.52,-2.37l-0.09,-2.57l-0.78,-2.3l0.95,-2.82l0.61,-5.68l-0.47,-4.27l-1.46,-4.08l3.19,0.79l1.26,2.83l0.69,0.08l0.69,-1.14l-1.1,-4.79l68.76,-0.0l0.4,-0.4l0.14,-0.86ZM32.44,67.52l1.73,1.97l0.55,0.05l0.99,-0.79l3.65,0.24l-0.09,0.62l0.32,0.45l3.83,0.77l2.61,-0.43l5.19,1.4l4.84,0.43l1.89,0.57l3.42,-0.7l6.14,1.87l-0.03,38.06l0.38,0.4l2.39,0.11l2.31,0.98l3.9,3.99l0.55,0.04l2.4,-2.03l2.16,-1.04l1.2,1.71l3.95,3.14l4.09,6.63l4.2,2.29l0.06,1.83l-1.02,1.23l-1.16,-1.08l-2.04,-1.03l-0.67,-2.89l-3.28,-3.03l-1.65,-3.57l-6.35,-0.32l-2.82,-1.01l-5.26,-3.85l-6.77,-2.04l-3.53,0.3l-4.81,-1.69l-3.25,-1.63l-2.78,0.8l-0.28,0.46l0.44,2.21l-3.91,0.96l-2.26,1.27l-2.3,0.65l-0.27,-1.65l1.05,-3.42l2.49,-1.09l0.16,-0.6l-0.69,-0.96l-0.55,-0.1l-3.19,2.12l-1.78,2.56l-3.55,2.61l-0.04,0.61l1.56,1.52l-2.07,2.29l-5.11,2.57l-0.77,1.66l-3.76,1.77l-0.92,1.73l-2.69,1.38l-1.81,-0.22l-6.95,3.32l-3.97,0.91l4.85,-2.5l2.59,-1.86l3.26,-0.52l1.19,-1.4l3.42,-2.1l2.59,-2.27l0.42,-2.68l1.23,-2.1l-0.04,-0.46l-0.45,-0.11l-2.68,1.03l-0.63,-0.49l-0.53,0.03l-1.05,1.04l-1.36,-1.54l-0.66,0.08l-0.32,0.62l-0.58,-1.14l-0.56,-0.16l-2.41,1.42l-1.07,-0.0l-0.17,-1.75l0.3,-1.71l-1.61,-1.33l-3.41,0.59l-1.96,-1.63l-1.57,-0.84l-0.15,-2.21l-1.7,-1.43l0.82,-1.88l1.99,-2.12l0.88,-1.92l1.71,-0.24l2.04,0.51l1.87,-1.77l1.91,0.25l1.91,-1.23l0.17,-0.43l-0.47,-1.82l-1.07,-0.7l1.39,-1.17l0.12,-0.45l-0.39,-0.26l-1.65,0.07l-2.66,0.88l-0.75,0.78l-1.92,-0.8l-3.46,0.44l-3.44,-0.91l-1.06,-1.61l-2.65,-1.99l2.91,-1.43l5.5,-2.0l1.52,0.0l-0.26,1.62l0.41,0.46l5.29,-0.16l0.3,-0.65l-2.03,-2.59l-3.14,-1.68l-1.79,-2.12l-2.4,-1.83l-3.09,-1.24l1.04,-1.69l4.23,-0.14l3.36,-2.07l0.73,-2.27l2.39,-1.99l2.42,-0.52l4.65,-1.97l2.46,0.23l3.71,-2.35l3.5,0.89ZM37.6,123.41l-2.25,1.23l-0.95,-0.69l-0.29,-1.24l3.21,-1.63l1.42,0.21l0.67,0.7l-1.8,1.42ZM31.06,234.03l0.98,0.47l0.74,0.87l-1.77,1.07l-0.44,-1.53l0.49,-0.89ZM29.34,232.07l0.18,0.05l0.08,0.05l-0.16,0.03l-0.11,-0.14ZM25.16,230.17l0.05,-0.03l0.18,0.22l-0.13,-0.01l-0.1,-0.18ZM5.89,113.26l-1.08,0.41l-2.21,-1.12l1.53,-0.4l1.62,0.28l0.14,0.83Z","name":"United States"},"UY":{"path":"M286.85,372.74l-0.92,1.5l-2.59,1.44l-1.69,-0.52l-1.42,0.26l-2.39,-1.19l-1.52,0.08l-1.27,-1.3l0.16,-1.5l0.56,-0.79l-0.02,-2.73l1.21,-4.74l1.19,-0.21l2.37,2.0l1.08,0.03l4.36,3.17l1.22,1.6l-0.96,1.5l0.61,1.4Z","name":"Uruguay"},"LB":{"path":"M510.37,198.01l-0.88,0.51l1.82,-3.54l0.62,0.08l0.22,0.61l-1.13,0.88l-0.65,1.47Z","name":"Lebanon"},"LA":{"path":"M689.54,248.53l-1.76,-0.74l-0.49,0.15l-0.94,1.46l-1.32,-0.64l0.62,-0.98l0.11,-2.17l-2.04,-2.42l-0.25,-2.65l-1.9,-2.1l-2.15,-0.31l-0.78,0.91l-1.12,0.06l-1.05,-0.4l-2.06,1.2l-0.04,-1.59l0.61,-2.68l-0.36,-0.49l-1.35,-0.1l-0.11,-1.23l-0.96,-0.88l1.96,-1.89l0.39,0.36l1.33,0.07l0.42,-0.45l-0.34,-2.66l0.7,-0.21l1.28,1.81l1.11,2.35l0.36,0.23l2.82,0.02l0.71,1.67l-1.39,0.65l-0.72,0.93l0.13,0.6l2.91,1.51l3.6,5.25l1.88,1.78l0.56,1.62l-0.35,1.96Z","name":"Lao PDR"},"TW":{"path":"M724.01,226.68l-0.74,1.48l-0.9,-1.52l-0.25,-1.74l1.38,-2.44l1.73,-1.74l0.64,0.44l-1.85,5.52Z","name":"Taiwan"},"TT":{"path":"M266.64,259.32l0.28,-1.16l1.13,-0.22l-0.06,1.2l-1.35,0.18Z","name":"Trinidad and Tobago"},"TR":{"path":"M513.21,175.47l3.64,1.17l3.05,-0.44l2.1,0.26l3.11,-1.56l2.46,-0.13l2.19,1.33l0.33,0.82l-0.22,1.33l0.25,0.44l2.28,1.13l-1.17,0.57l-0.21,0.45l0.75,3.2l-0.41,1.16l1.13,1.92l-0.55,0.22l-0.9,-0.67l-2.91,-0.37l-1.24,0.46l-4.23,0.41l-2.81,1.05l-1.91,0.01l-1.52,-0.53l-2.58,0.75l-0.66,-0.45l-0.62,0.3l-0.12,1.45l-0.89,0.84l-0.47,-0.67l0.79,-1.3l-0.41,-0.2l-1.43,0.23l-2.0,-0.63l-2.02,1.65l-3.51,0.3l-2.13,-1.53l-2.7,-0.1l-0.86,1.24l-1.38,0.27l-2.29,-1.44l-2.71,-0.01l-1.37,-2.65l-1.68,-1.52l1.07,-1.99l-0.09,-0.49l-1.27,-1.12l2.37,-2.41l3.7,-0.11l1.28,-2.24l4.49,0.37l3.21,-1.97l2.81,-0.82l3.99,-0.06l4.29,2.07ZM488.79,176.72l-1.72,1.31l-0.5,-0.88l1.37,-2.57l-0.7,-0.85l1.7,-0.63l1.8,0.34l0.46,1.17l1.76,0.78l-2.87,0.32l-1.3,1.01Z","name":"Turkey"},"LK":{"path":"M624.16,268.99l-1.82,0.48l-0.99,-1.67l-0.42,-3.46l0.95,-3.43l1.21,0.98l2.26,4.19l-0.34,2.33l-0.85,0.58Z","name":"Sri Lanka"},"LV":{"path":"M489.16,122.85l0.96,0.66l0.22,1.65l0.68,1.76l-3.65,1.7l-2.23,-1.58l-1.29,-0.26l-0.68,-0.77l-2.42,0.34l-4.16,-0.23l-2.47,0.9l0.06,-1.98l1.13,-2.06l1.95,-1.02l2.12,2.58l2.01,-0.07l0.38,-0.33l0.44,-2.52l1.76,-0.53l3.06,1.7l2.15,0.07Z","name":"Latvia"},"LT":{"path":"M486.93,129.3l0.17,1.12l-1.81,0.98l-0.72,2.02l-2.47,1.18l-2.1,-0.02l-0.73,-1.05l-1.06,-0.3l-0.09,-1.87l-3.56,-1.13l-0.43,-2.36l2.48,-0.94l4.12,0.22l2.25,-0.31l0.52,0.69l1.24,0.21l2.19,1.56Z","name":"Lithuania"},"LU":{"path":"M436.08,149.45l-0.48,-0.07l0.3,-1.28l0.27,0.4l-0.09,0.96Z","name":"Luxembourg"},"LR":{"path":"M399.36,265.97l0.18,1.54l-0.48,0.99l0.08,0.47l2.47,1.8l-0.33,2.8l-2.65,-1.13l-5.78,-4.61l0.58,-1.32l2.1,-2.33l0.86,-0.22l0.77,1.14l-0.14,0.85l0.59,0.87l1.0,0.14l0.76,-0.99Z","name":"Liberia"},"LS":{"path":"M491.06,363.48l-0.49,0.15l-1.49,-1.67l1.1,-1.43l2.19,-1.44l1.51,1.27l-0.98,1.82l-1.23,0.38l-0.62,0.93Z","name":"Lesotho"},"TH":{"path":"M670.27,255.86l-1.41,3.87l0.15,2.0l0.38,0.36l1.38,0.07l0.9,2.04l0.55,2.34l1.4,1.44l1.61,0.38l0.96,0.97l-0.5,0.64l-1.1,0.2l-0.34,-1.18l-2.04,-1.1l-0.63,0.23l-0.63,-0.62l-0.48,-1.3l-2.56,-2.63l-0.73,0.41l0.95,-3.89l2.16,-4.22ZM670.67,254.77l-0.92,-2.18l-0.26,-2.61l-2.14,-3.06l0.71,-0.49l0.89,-2.59l-3.61,-5.45l0.87,-0.51l1.05,-2.58l1.74,-0.18l2.6,-1.59l0.76,0.56l0.13,1.39l0.37,0.36l1.23,0.09l-0.51,2.28l0.05,2.42l0.6,0.34l2.43,-1.42l0.77,0.39l1.47,-0.07l0.71,-0.88l1.48,0.14l1.71,1.88l0.25,2.65l1.92,2.11l-0.1,1.89l-0.61,0.86l-2.22,-0.33l-3.5,0.64l-1.6,2.12l0.36,2.58l-1.51,-0.79l-1.84,-0.01l0.28,-1.52l-0.4,-0.47l-2.21,0.01l-0.4,0.37l-0.19,2.74l-0.34,0.93Z","name":"Thailand"},"TF":{"path":"M596.68,420.38l-3.2,0.18l-0.05,-1.26l0.39,-1.41l1.3,0.78l2.08,0.35l-0.52,1.36Z","name":"Fr. S. Antarctic Lands"},"TG":{"path":"M422.7,257.63l-0.09,1.23l1.53,1.52l0.08,1.09l0.5,0.65l-0.11,5.62l0.49,1.47l-1.31,0.35l-1.02,-2.13l-0.18,-1.12l0.53,-2.19l-0.63,-1.16l-0.22,-3.68l-1.01,-1.4l0.07,-0.28l1.37,0.03Z","name":"Togo"},"TD":{"path":"M480.25,235.49l0.12,9.57l-2.1,0.05l-1.14,1.89l-0.69,1.63l0.34,0.73l-0.66,0.91l0.24,0.89l-0.86,1.95l0.45,0.5l0.6,-0.1l0.34,0.64l0.03,1.38l0.9,1.04l-1.45,0.43l-1.27,1.03l-1.83,2.76l-2.16,1.07l-2.31,-0.15l-0.86,0.25l-0.26,0.49l0.17,0.61l-2.11,1.68l-2.85,0.87l-1.09,-0.57l-0.73,0.66l-1.12,0.1l-1.1,-3.12l-1.25,-0.64l-1.22,-1.22l0.29,-0.64l3.01,0.04l0.35,-0.6l-1.3,-2.2l-0.08,-3.31l-0.97,-1.66l0.22,-1.04l-0.38,-0.48l-1.22,-0.04l0.0,-1.25l-0.98,-1.07l0.96,-3.01l3.25,-2.65l0.13,-3.33l0.95,-5.18l0.52,-1.07l-0.1,-0.48l-0.91,-0.78l-0.2,-0.96l-0.8,-0.58l-0.55,-3.65l2.1,-1.2l19.57,9.83Z","name":"Chad"},"LY":{"path":"M483.48,203.15l-0.75,1.1l0.29,1.39l-0.6,1.83l0.73,2.14l0.0,24.12l-2.48,0.01l-0.41,0.85l-19.41,-9.76l-4.41,2.28l-1.37,-1.33l-3.82,-1.1l-1.14,-1.65l-1.98,-1.23l-1.22,0.32l-0.66,-1.11l-0.17,-1.26l-1.28,-1.69l0.87,-1.19l-0.07,-4.34l0.43,-2.27l-0.86,-3.45l1.13,-0.76l0.22,-1.16l-0.2,-1.03l3.48,-2.61l0.29,-1.94l2.45,0.8l1.18,-0.21l1.98,0.44l3.15,1.18l1.37,2.54l5.72,1.67l2.64,1.35l1.61,-0.72l1.29,-1.34l-0.44,-2.34l0.66,-1.13l1.67,-1.21l1.57,-0.35l3.14,0.53l1.08,1.28l3.99,0.78l0.36,0.54Z","name":"Libya"},"AE":{"path":"M550.76,223.97l1.88,-0.4l3.84,0.02l4.78,-4.75l0.19,0.36l0.26,1.58l-0.81,0.01l-0.39,0.35l-0.08,2.04l-0.81,0.63l-0.01,0.96l-0.66,0.99l-0.39,1.41l-7.08,-1.25l-0.7,-1.96Z","name":"United Arab Emirates"},"VE":{"path":"M240.68,256.69l0.53,0.75l-0.02,1.06l-1.07,1.78l0.95,2.0l0.42,0.22l1.4,-0.44l0.56,-1.83l-0.77,-1.17l-0.1,-1.47l2.82,-0.93l0.26,-0.49l-0.28,-0.96l0.3,-0.28l0.66,1.31l1.96,0.26l1.4,1.22l0.08,0.68l0.39,0.35l4.81,-0.22l1.49,1.11l1.92,0.31l1.67,-0.84l0.22,-0.6l3.44,-0.14l-0.17,0.55l0.86,1.19l2.19,0.35l1.67,1.1l0.37,1.86l0.41,0.32l1.55,0.17l-1.66,1.35l-0.22,0.92l0.65,0.97l-1.67,0.54l-0.3,0.4l0.04,0.99l-0.56,0.57l-0.01,0.55l1.85,2.27l-0.66,0.69l-4.47,1.29l-0.72,0.54l-3.69,-0.9l-0.71,0.27l-0.02,0.7l0.91,0.53l-0.08,1.54l0.35,1.58l0.35,0.31l1.66,0.17l-1.3,0.52l-0.48,1.13l-2.68,0.91l-0.6,0.77l-1.57,0.13l-1.17,-1.13l-0.8,-2.52l-1.25,-1.26l1.02,-1.23l-1.29,-2.95l0.18,-1.62l1.0,-2.21l-0.2,-0.49l-1.14,-0.46l-4.02,0.36l-1.82,-2.1l-1.57,-0.33l-2.99,0.22l-1.06,-0.97l0.25,-1.23l-0.2,-1.01l-0.59,-0.69l-0.29,-1.06l-1.08,-0.39l0.78,-2.79l1.9,-2.11Z","name":"Venezuela"},"AF":{"path":"M600.7,188.88l-1.57,1.3l-0.1,0.48l0.8,2.31l-1.09,1.04l-0.03,1.27l-0.48,0.71l-2.16,-0.08l-0.37,0.59l0.78,1.48l-1.38,0.69l-1.06,1.69l0.06,1.7l-0.65,0.52l-0.91,-0.21l-1.91,0.36l-0.48,0.77l-1.88,0.13l-1.4,1.56l-0.18,2.32l-2.91,1.02l-1.65,-0.23l-0.71,0.55l-1.41,-0.3l-2.41,0.39l-3.52,-1.17l1.96,-2.35l-0.21,-1.78l-0.3,-0.34l-1.63,-0.4l-0.19,-1.58l-0.75,-2.03l0.95,-1.36l-0.19,-0.6l-0.73,-0.28l1.47,-4.8l2.14,0.9l2.12,-0.36l0.74,-1.34l1.77,-0.39l1.54,-0.92l0.63,-2.31l1.87,-0.5l0.49,-0.81l0.94,0.56l2.13,0.11l2.55,0.92l1.95,-0.83l0.65,0.43l0.56,-0.13l0.69,-1.12l1.57,-0.08l0.72,-1.66l0.79,-0.74l0.8,0.39l-0.17,0.56l0.71,0.58l-0.08,2.39l1.11,0.95ZM601.37,188.71l1.73,-0.71l1.43,-1.18l4.03,0.35l-2.23,0.74l-4.95,0.8Z","name":"Afghanistan"},"IQ":{"path":"M530.82,187.47l0.79,0.66l1.26,-0.28l1.46,3.08l1.63,0.94l0.14,1.23l-1.22,1.05l-0.53,2.52l1.73,2.67l3.12,1.62l1.15,1.88l-0.38,1.85l0.39,0.48l0.41,-0.0l0.02,1.07l0.76,0.94l-2.47,-0.1l-1.71,2.44l-4.31,-0.2l-7.02,-5.48l-3.73,-1.94l-2.88,-0.73l-0.85,-2.87l5.45,-3.02l0.95,-3.43l-0.19,-1.96l1.27,-0.7l1.22,-1.7l0.87,-0.36l2.69,0.34Z","name":"Iraq"},"IS":{"path":"M384.14,88.06l-0.37,2.61l2.54,2.51l-2.9,2.75l-9.19,3.4l-9.25,-1.66l1.7,-1.22l-0.1,-0.7l-4.05,-1.47l2.96,-0.53l0.33,-0.43l-0.11,-1.2l-0.33,-0.36l-4.67,-0.85l1.28,-2.04l3.45,-0.56l3.77,2.72l0.44,0.02l3.64,-2.16l3.3,1.08l3.98,-2.16l3.58,0.26Z","name":"Iceland"},"IR":{"path":"M533.43,187.16l-1.27,-2.15l0.42,-0.98l-0.71,-3.04l1.03,-0.5l0.33,0.83l1.26,1.35l2.05,0.51l1.11,-0.16l2.89,-2.11l0.62,-0.14l0.39,0.46l-0.72,1.2l0.06,0.49l1.56,1.53l0.65,0.04l0.67,1.81l2.56,0.83l1.87,1.48l3.69,0.49l3.91,-0.76l0.47,-0.73l2.17,-0.6l1.66,-1.54l1.51,0.08l1.18,-0.53l1.59,0.24l2.83,1.48l1.88,0.3l2.77,2.47l1.77,0.18l0.18,1.99l-1.68,5.49l0.24,0.5l0.61,0.23l-0.82,1.48l0.8,2.18l0.19,1.71l0.3,0.34l1.63,0.4l0.15,1.32l-2.15,2.35l-0.01,0.53l2.21,3.03l2.34,1.24l0.06,2.14l1.24,0.72l0.11,0.69l-3.31,1.27l-1.08,3.03l-9.68,-1.68l-0.99,-3.05l-1.43,-0.73l-2.17,0.46l-2.47,1.26l-2.83,-0.82l-2.46,-2.02l-2.41,-0.8l-3.42,-6.06l-0.48,-0.2l-1.18,0.39l-1.44,-0.82l-0.5,0.08l-0.65,0.74l-0.97,-1.01l-0.02,-1.31l-0.71,-0.39l0.26,-1.81l-1.29,-2.11l-3.13,-1.63l-1.58,-2.43l0.5,-1.9l1.31,-1.26l-0.19,-1.66l-1.74,-1.1l-1.57,-3.3Z","name":"Iran"},"AM":{"path":"M536.99,182.33l-0.28,0.03l-1.23,-2.13l-0.93,0.01l-0.62,-0.66l-0.69,-0.07l-0.96,-0.81l-1.56,-0.62l0.19,-1.12l-0.26,-0.79l2.72,-0.36l1.09,1.01l-0.17,0.92l1.02,0.78l-0.47,0.62l0.08,0.56l2.04,1.23l0.04,1.4Z","name":"Armenia"},"AL":{"path":"M470.32,171.8l0.74,0.03l0.92,0.89l-0.17,1.95l0.36,1.28l1.01,0.82l-1.82,2.83l-0.19,-0.61l-1.25,-0.89l-0.18,-1.2l0.53,-2.82l-0.54,-1.47l0.6,-0.83Z","name":"Albania"},"AO":{"path":"M461.55,300.03l1.26,3.15l1.94,2.36l2.47,-0.53l1.25,0.32l0.44,-0.18l0.93,-1.92l1.31,-0.08l0.41,-0.44l0.47,-0.0l-0.1,0.41l0.39,0.49l2.65,-0.02l0.03,1.19l0.48,1.01l-0.34,1.52l0.18,1.55l0.83,1.04l-0.13,2.85l0.54,0.39l3.96,-0.41l-0.1,1.79l0.39,1.05l-0.24,1.43l-4.7,-0.03l-0.4,0.39l-0.12,8.13l2.92,3.49l-3.83,0.88l-5.89,-0.36l-1.88,-1.24l-10.47,0.22l-1.3,-1.01l-1.85,-0.16l-2.4,0.77l-0.15,-1.06l0.33,-2.16l1.0,-3.45l1.35,-3.2l2.24,-2.8l0.33,-2.06l-0.13,-1.53l-0.8,-1.08l-1.21,-2.87l0.87,-1.62l-1.27,-4.12l-1.17,-1.53l2.47,-0.63l7.03,0.03ZM451.71,298.87l-0.47,-1.25l1.25,-1.11l0.32,0.3l-0.99,1.03l-0.12,1.03Z","name":"Angola"},"AR":{"path":"M249.29,428.93l-2.33,-0.52l-5.83,-0.43l-0.89,-1.66l0.05,-2.37l-0.45,-0.4l-1.43,0.18l-0.67,-0.91l-0.2,-3.13l1.88,-1.47l0.79,-2.04l-0.25,-1.7l1.3,-2.68l0.91,-4.15l-0.22,-1.69l0.85,-0.45l0.2,-0.44l-0.27,-1.16l-0.98,-0.68l0.59,-0.92l-0.05,-0.5l-1.04,-1.07l-0.52,-3.1l0.97,-0.86l-0.42,-3.58l1.2,-5.43l1.38,-0.98l0.16,-0.43l-0.75,-2.79l-0.01,-2.43l1.78,-1.75l0.06,-2.57l1.43,-2.85l0.01,-2.58l-0.69,-0.74l-1.09,-4.52l1.47,-2.7l-0.18,-2.79l0.85,-2.35l1.59,-2.46l1.73,-1.64l0.05,-0.52l-0.6,-0.84l0.44,-0.85l-0.07,-4.19l2.7,-1.44l0.86,-2.75l-0.21,-0.71l1.76,-2.01l2.9,0.57l1.38,1.78l0.68,-0.08l0.87,-1.87l2.39,0.09l4.95,4.77l2.17,0.49l3.0,1.92l2.47,1.0l0.25,0.82l-2.37,3.93l0.23,0.59l5.39,1.16l2.12,-0.44l2.45,-2.16l0.5,-2.38l0.76,-0.31l0.98,1.2l-0.04,1.8l-3.67,2.51l-2.85,2.66l-3.43,3.88l-1.3,5.07l0.01,2.72l-0.54,0.73l-0.36,3.28l3.14,2.64l-0.16,2.11l1.4,1.11l-0.1,1.09l-2.29,3.52l-3.55,1.49l-4.92,0.6l-2.71,-0.29l-0.43,0.51l0.5,1.65l-0.49,2.1l0.38,1.42l-1.19,0.83l-2.36,0.38l-2.3,-1.04l-1.38,0.83l0.41,3.64l1.69,0.91l1.4,-0.71l0.36,0.76l-2.04,0.86l-2.01,1.89l-0.97,4.63l-2.34,0.1l-2.09,1.78l-0.61,2.75l2.46,2.31l2.17,0.63l-0.7,2.32l-2.83,1.73l-1.73,3.86l-2.17,1.22l-1.16,1.67l0.75,3.76l1.04,1.28ZM256.71,438.88l-2.0,0.15l-1.4,-1.22l-3.82,-0.1l-0.0,-5.83l1.6,3.05l3.26,2.07l3.08,0.78l-0.71,1.1Z","name":"Argentina"},"AU":{"path":"M705.8,353.26l0.26,0.04l0.17,-0.47l-0.48,-1.42l0.92,1.11l0.45,0.15l0.27,-0.39l-0.1,-1.56l-1.98,-3.63l1.09,-3.31l-0.24,-1.57l0.34,-0.62l0.38,1.06l0.43,-0.19l0.99,-1.7l1.91,-0.83l1.29,-1.15l1.81,-0.91l0.96,-0.17l0.92,0.26l1.92,-0.95l1.47,-0.28l1.03,-0.8l1.43,0.04l2.78,-0.84l1.36,-1.15l0.71,-1.45l1.41,-1.26l0.3,-2.58l1.27,-1.59l0.78,1.65l0.54,0.19l1.07,-0.51l0.15,-0.6l-0.73,-1.0l0.45,-0.71l0.78,0.39l0.58,-0.3l0.28,-1.82l1.87,-2.14l1.12,-0.39l0.28,-0.58l0.62,0.17l0.53,-0.73l1.87,-0.57l1.65,1.05l1.35,1.48l3.39,0.38l0.43,-0.54l-0.46,-1.23l1.05,-1.79l1.04,-0.61l0.14,-0.55l-0.25,-0.41l0.88,-1.17l1.31,-0.77l1.3,0.27l2.1,-0.48l0.31,-0.4l-0.05,-1.3l-0.92,-0.77l1.48,0.56l1.41,1.07l2.11,0.65l0.81,-0.2l1.4,0.7l1.69,-0.66l0.8,0.19l0.64,-0.33l0.71,0.77l-1.33,1.94l-0.71,0.07l-0.35,0.51l0.24,0.86l-1.52,2.35l0.12,1.05l2.15,1.65l1.97,0.85l3.04,2.36l1.97,0.65l0.55,0.88l2.72,0.85l1.84,-1.1l2.07,-5.97l-0.42,-3.59l0.3,-1.73l0.47,-0.87l-0.31,-0.68l1.09,-3.28l0.46,-0.47l0.4,0.71l0.16,1.51l0.65,0.52l0.16,1.04l0.85,1.21l0.12,2.38l0.9,2.0l0.57,0.18l1.3,-0.78l1.69,1.7l-0.2,1.08l0.53,2.2l0.39,1.3l0.68,0.48l0.6,1.95l-0.19,1.48l0.81,1.76l6.01,3.69l-0.11,0.76l1.38,1.58l0.95,2.77l0.58,0.22l0.72,-0.41l0.8,0.9l0.61,0.01l0.46,2.41l4.81,4.71l0.66,2.02l-0.07,3.31l1.14,2.2l-0.13,2.24l-1.1,3.68l0.03,1.64l-0.47,1.89l-1.05,2.4l-1.9,1.47l-1.72,3.51l-2.38,6.09l-0.24,2.82l-1.14,0.8l-2.85,0.15l-2.31,1.19l-2.51,2.25l-3.09,-1.57l0.3,-1.15l-0.54,-0.47l-1.5,0.63l-2.01,1.94l-7.12,-2.18l-1.48,-1.63l-1.14,-3.74l-1.45,-1.26l-1.81,-0.26l0.56,-1.18l-0.61,-2.1l-0.72,-0.1l-1.14,1.82l-0.9,0.21l0.63,-0.82l0.36,-1.55l0.92,-1.31l-0.13,-2.34l-0.7,-0.22l-2.0,2.34l-1.51,0.93l-0.94,2.01l-1.35,-0.81l-0.02,-1.52l-1.57,-2.04l-1.09,-0.88l0.24,-0.33l-0.14,-0.59l-3.21,-1.69l-1.83,-0.12l-2.54,-1.35l-4.58,0.28l-6.02,1.9l-2.53,-0.13l-2.62,1.41l-2.13,0.63l-1.49,2.6l-3.49,0.31l-2.29,-0.5l-3.48,0.43l-1.6,1.47l-0.81,-0.04l-2.37,1.63l-3.26,-0.1l-3.72,-2.21l0.04,-1.05l1.19,-0.46l0.49,-0.89l0.21,-2.97l-0.28,-1.64l-1.34,-2.86l-0.38,-1.47l0.05,-1.72l-0.95,-1.7l-0.18,-0.97l-1.01,-0.99l-0.29,-1.98l-1.13,-1.75ZM784.92,393.44l2.65,1.02l3.23,-0.96l1.09,0.14l0.15,3.06l-0.85,1.13l-0.17,1.63l-0.87,-0.24l-1.57,1.91l-1.68,-0.18l-1.4,-2.36l-0.37,-2.04l-1.39,-2.51l0.04,-0.8l1.15,0.18Z","name":"Australia"},"AT":{"path":"M462.89,152.8l0.04,2.25l-1.07,0.0l-0.33,0.63l0.36,0.51l-1.04,2.13l-2.02,0.07l-1.33,0.7l-5.29,-0.99l-0.47,-0.93l-0.44,-0.21l-2.47,0.55l-0.42,0.51l-3.18,-0.81l0.43,-0.91l1.12,0.78l0.6,-0.17l0.25,-0.58l1.93,0.12l1.86,-0.56l1.0,0.08l0.68,0.57l0.62,-0.15l0.26,-0.77l-0.3,-1.78l0.8,-0.44l0.68,-1.15l1.52,0.85l0.47,-0.06l1.34,-1.25l0.64,-0.17l1.81,0.92l1.28,-0.11l0.7,0.37Z","name":"Austria"},"IN":{"path":"M623.34,207.03l-1.24,1.04l-0.97,2.55l0.22,0.51l8.04,3.87l3.42,0.37l1.57,1.38l4.92,0.88l2.18,-0.04l0.38,-0.3l0.29,-1.24l-0.32,-1.64l0.14,-0.87l0.82,-0.31l0.45,2.48l2.28,1.02l1.77,-0.38l4.14,0.1l0.38,-0.36l0.18,-1.66l-0.5,-0.65l1.37,-0.29l2.25,-1.99l2.7,-1.62l1.93,0.62l1.8,-0.98l0.79,1.14l-0.68,0.91l0.26,0.63l2.42,0.36l0.09,0.47l-0.83,0.75l0.13,1.07l-1.52,-0.29l-3.24,1.86l-0.13,1.78l-1.32,2.14l-0.18,1.39l-0.93,1.82l-1.64,-0.5l-0.52,0.37l-0.09,2.63l-0.56,1.11l0.19,0.81l-0.53,0.27l-1.18,-3.73l-1.08,-0.27l-0.38,0.31l-0.24,1.0l-0.66,-0.66l0.54,-1.06l1.22,-0.34l1.15,-2.25l-0.24,-0.56l-1.57,-0.47l-4.34,-0.28l-0.18,-1.56l-0.35,-0.35l-1.11,-0.12l-1.91,-1.12l-0.56,0.17l-0.88,1.82l0.11,0.49l1.36,1.07l-1.09,0.69l-0.69,1.11l0.18,0.56l1.24,0.57l-0.32,1.54l0.85,1.94l0.36,2.01l-0.22,0.59l-4.58,0.52l-0.33,0.42l0.13,1.8l-1.17,1.36l-3.65,1.81l-2.79,3.03l-4.32,3.28l-0.18,1.27l-4.65,1.79l-0.77,2.16l0.64,5.3l-1.06,2.49l-0.01,3.94l-1.24,0.28l-1.14,1.93l0.39,0.84l-1.68,0.53l-1.04,1.83l-0.65,0.47l-2.06,-2.05l-2.1,-6.02l-2.2,-3.64l-1.05,-4.75l-2.29,-3.57l-1.76,-8.2l0.01,-3.11l-0.49,-2.53l-0.55,-0.29l-3.53,1.52l-1.53,-0.27l-2.86,-2.77l0.85,-0.67l0.08,-0.55l-0.74,-1.03l-2.67,-2.06l1.24,-1.32l5.34,0.01l0.39,-0.49l-0.5,-2.29l-1.42,-1.46l-0.27,-1.93l-1.43,-1.2l2.31,-2.37l3.05,0.06l2.62,-2.85l1.6,-2.81l2.4,-2.73l0.07,-2.04l1.97,-1.48l-0.02,-0.65l-1.93,-1.31l-0.82,-1.78l-0.8,-2.21l0.9,-0.89l3.59,0.65l2.92,-0.42l2.33,-2.19l2.31,2.85l-0.24,2.13l0.99,1.59l-0.05,0.82l-1.34,-0.28l-0.47,0.48l0.7,3.06l2.62,1.99l2.99,1.65Z","name":"India"},"TZ":{"path":"M495.56,296.42l2.8,-3.12l-0.02,-0.81l-0.64,-1.3l0.68,-0.52l0.14,-1.47l-0.76,-1.25l0.31,-0.11l2.26,0.03l-0.51,2.76l0.76,1.3l0.5,0.12l1.05,-0.53l1.19,-0.12l0.61,0.24l1.43,-0.62l0.1,-0.67l-0.71,-0.62l1.57,-1.7l8.65,4.86l0.32,1.53l3.34,2.33l-1.05,2.8l0.13,1.61l1.63,1.12l-0.6,1.76l-0.01,2.33l1.89,4.03l0.57,0.43l-1.46,1.08l-2.61,0.94l-1.43,-0.04l-1.06,0.77l-2.29,0.36l-2.87,-0.68l-0.83,0.07l-0.63,-0.75l-0.31,-2.78l-1.32,-1.35l-3.25,-0.77l-3.96,-1.58l-1.18,-2.41l-0.32,-1.75l-1.76,-1.49l0.42,-1.05l-0.44,-0.89l0.08,-0.96l-0.46,-0.58l0.06,-0.56Z","name":"Tanzania"},"AZ":{"path":"M539.29,175.73l1.33,0.32l1.94,-1.8l2.3,3.34l1.43,0.43l-1.26,0.15l-0.35,0.32l-0.8,3.14l-0.99,0.96l0.05,1.11l-1.26,-1.13l0.7,-1.18l-0.04,-0.47l-0.74,-0.86l-1.48,0.15l-2.34,1.71l-0.03,-1.27l-2.03,-1.35l0.47,-0.62l-0.08,-0.56l-1.03,-0.79l0.29,-0.43l-0.14,-0.58l-1.13,-0.86l1.89,0.68l1.69,0.06l0.37,-0.87l-0.81,-1.37l0.42,0.06l1.63,1.72ZM533.78,180.57l0.61,0.46l0.69,-0.0l0.59,1.15l-0.68,-0.15l-1.21,-1.45Z","name":"Azerbaijan"},"IE":{"path":"M405.08,135.42l0.35,2.06l-1.75,2.78l-4.22,1.88l-2.84,-0.4l1.73,-3.0l-1.18,-3.53l4.6,-3.74l0.32,1.15l-0.49,1.74l0.4,0.51l1.47,-0.04l1.6,0.6Z","name":"Ireland"},"ID":{"path":"M756.47,287.89l0.69,4.01l2.79,1.78l0.51,-0.1l2.04,-2.59l2.71,-1.43l2.05,-0.0l3.9,1.73l2.46,0.45l0.08,15.12l-1.75,-1.54l-2.54,-0.51l-0.88,0.71l-2.32,0.06l0.69,-1.33l1.45,-0.64l0.23,-0.46l-0.65,-2.74l-1.24,-2.21l-5.04,-2.29l-2.09,-0.23l-3.68,-2.27l-0.55,0.13l-0.65,1.07l-0.52,0.12l-0.55,-1.89l-1.21,-0.78l1.84,-0.62l1.72,0.05l0.39,-0.52l-0.21,-0.66l-0.38,-0.28l-3.45,-0.0l-1.13,-1.48l-2.1,-0.43l-0.52,-0.6l2.69,-0.48l1.28,-0.78l3.66,0.94l0.3,0.71ZM757.91,300.34l-0.62,0.82l-0.1,-0.8l0.59,-1.12l0.13,1.1ZM747.38,292.98l0.34,0.72l-1.22,-0.57l-4.68,-0.1l0.27,-0.62l2.78,-0.09l2.52,0.67ZM741.05,285.25l-0.67,-2.88l0.64,-2.01l0.41,0.86l1.21,0.18l0.16,0.7l-0.1,1.68l-0.84,-0.16l-0.46,0.3l-0.34,1.34ZM739.05,293.5l-0.5,0.44l-1.34,-0.36l-0.17,-0.37l1.73,-0.08l0.27,0.36ZM721.45,284.51l-0.19,1.97l2.24,2.23l0.54,0.02l1.27,-1.07l2.75,-0.5l-0.9,1.21l-2.11,0.93l-0.16,0.6l2.22,3.01l-0.3,1.07l1.36,1.74l-2.26,0.85l-0.28,-0.31l0.12,-1.19l-1.64,-1.34l0.17,-2.23l-0.56,-0.39l-1.67,0.76l-0.23,0.39l0.3,6.17l-1.1,0.25l-0.69,-0.47l0.64,-2.21l-0.39,-2.42l-0.39,-0.34l-0.8,-0.01l-0.58,-1.29l0.98,-1.6l0.35,-1.96l1.32,-3.87ZM728.59,296.27l0.38,0.49l-0.02,1.28l-0.88,0.49l-0.53,-0.47l1.04,-1.79ZM729.04,286.98l0.27,-0.05l-0.02,0.13l-0.24,-0.08ZM721.68,284.05l0.16,-0.32l1.89,-1.65l1.83,0.68l3.16,0.35l2.94,-0.1l2.39,-1.66l-1.73,2.13l-1.66,0.43l-2.41,-0.48l-4.17,0.13l-2.39,0.51ZM730.55,310.47l1.11,-1.93l2.03,-0.82l0.08,0.62l-1.45,1.67l-1.77,0.46ZM728.12,305.88l-0.1,0.38l-3.46,0.66l-2.91,-0.27l-0.0,-0.25l1.54,-0.41l1.66,0.73l1.67,-0.19l1.61,-0.65ZM722.9,310.24l-0.64,0.03l-2.26,-1.2l1.11,-0.24l1.78,1.41ZM716.26,305.77l0.88,0.51l1.28,-0.17l0.2,0.35l-4.65,0.73l0.39,-0.67l1.15,-0.02l0.75,-0.73ZM711.66,293.84l-0.38,-0.16l-2.54,1.01l-1.12,-1.44l-1.69,-0.13l-1.16,-0.75l-3.04,0.77l-1.1,-1.15l-3.31,-0.11l-0.35,-3.05l-1.35,-0.95l-1.11,-1.98l-0.33,-2.06l0.27,-2.14l0.9,-1.01l0.37,1.15l2.09,1.49l1.53,-0.48l1.82,0.08l1.38,-1.19l1.0,-0.18l2.28,0.67l2.26,-0.53l1.52,-3.64l1.01,-0.99l0.78,-2.57l4.1,0.3l-1.11,1.77l0.02,0.46l1.7,2.2l-0.23,1.39l2.07,1.71l-2.33,0.42l-0.88,1.9l0.1,2.05l-2.4,1.9l-0.06,2.45l-0.7,2.79ZM692.58,302.03l0.35,0.26l4.8,0.25l0.78,-0.97l4.17,1.09l1.13,1.68l3.69,0.45l2.13,1.04l-1.8,0.6l-2.77,-0.99l-4.8,-0.12l-5.24,-1.41l-1.84,-0.25l-1.11,0.3l-4.26,-0.97l-0.7,-1.14l-1.59,-0.13l1.18,-1.65l2.74,0.13l2.87,1.13l0.26,0.68ZM685.53,299.17l-2.22,0.04l-2.06,-2.03l-3.15,-2.01l-2.93,-3.51l-3.11,-5.33l-2.2,-2.12l-1.64,-4.06l-2.32,-1.69l-1.27,-2.07l-1.96,-1.5l-2.51,-2.65l-0.11,-0.66l4.81,0.53l2.15,2.38l3.31,2.74l2.35,2.66l2.7,0.17l1.95,1.59l1.54,2.17l1.59,0.95l-0.84,1.71l0.15,0.52l1.44,0.87l0.79,0.1l0.4,1.58l0.87,1.4l1.96,0.39l1.0,1.31l-0.6,3.01l-0.09,3.5Z","name":"Indonesia"},"UA":{"path":"M492.5,162.44l1.28,-2.49l1.82,0.19l0.66,-0.23l0.09,-0.71l-0.25,-0.75l-0.79,-0.72l-0.33,-1.21l-0.86,-0.62l-0.02,-1.19l-1.13,-0.86l-1.15,-0.19l-2.04,-1.0l-1.66,0.32l-0.66,0.47l-0.92,-0.0l-0.84,0.78l-2.48,0.7l-1.18,-0.71l-3.07,-0.36l-0.89,0.43l-0.24,-0.55l-1.11,-0.7l0.35,-0.93l1.26,-1.02l-0.54,-1.23l2.04,-2.43l1.4,-0.62l0.25,-1.19l-1.04,-2.39l0.83,-0.13l1.28,-0.84l1.8,-0.07l2.47,0.26l2.86,0.81l1.88,0.06l0.86,0.44l1.04,-0.41l0.77,0.66l2.18,-0.15l0.92,0.3l0.52,-0.34l0.15,-1.53l0.56,-0.54l2.85,-0.05l0.84,-0.72l3.04,-0.18l1.23,1.46l-0.48,0.77l0.21,1.03l0.36,0.32l1.8,0.14l0.93,2.08l3.18,1.15l1.94,-0.45l1.67,1.49l1.4,-0.03l3.35,0.96l0.02,0.54l-0.96,1.59l0.47,1.97l-0.26,0.7l-2.36,0.28l-1.29,0.89l-0.23,1.38l-1.83,0.27l-1.58,0.97l-2.41,0.21l-2.16,1.17l-0.21,0.38l0.34,2.26l1.23,0.75l2.13,-0.08l-0.14,0.31l-2.65,0.53l-3.23,1.69l-0.87,-0.39l0.42,-1.1l-0.25,-0.52l-2.21,-0.73l2.35,-1.06l0.12,-0.65l-0.93,-0.82l-3.62,-0.74l-0.13,-0.89l-0.46,-0.34l-2.61,0.59l-0.91,1.69l-1.71,2.04l-0.86,-0.4l-1.62,0.27Z","name":"Ukraine"},"QA":{"path":"M549.33,221.64l-0.76,-0.23l-0.14,-1.64l0.84,-1.29l0.47,0.52l0.04,1.34l-0.45,1.3Z","name":"Qatar"},"MZ":{"path":"M508.58,318.75l-0.34,-2.57l0.51,-2.05l3.55,0.63l2.5,-0.38l1.02,-0.76l1.49,0.01l2.74,-0.98l1.66,-1.2l0.5,9.24l0.41,1.23l-0.68,1.67l-0.93,1.71l-1.5,1.5l-5.16,2.28l-2.78,2.73l-1.02,0.53l-1.71,1.8l-0.98,0.57l-0.35,2.41l1.16,1.94l0.49,2.17l0.43,0.31l-0.06,2.06l-0.39,1.17l0.5,0.72l-0.25,0.73l-0.92,0.83l-5.12,2.39l-1.22,1.36l0.21,1.13l0.58,0.39l-0.11,0.72l-1.22,-0.01l-0.73,-2.97l0.42,-3.09l-1.78,-5.37l2.49,-2.81l0.69,-1.89l0.44,-0.43l0.28,-1.53l-0.39,-0.93l0.59,-3.65l-0.01,-3.26l-1.49,-1.16l-1.2,-0.22l-1.74,-1.17l-1.92,0.01l-0.29,-2.08l7.06,-1.96l1.28,1.09l0.89,-0.1l0.67,0.44l0.1,0.73l-0.51,1.29l0.19,1.81l1.75,1.83l0.65,-0.13l0.71,-1.65l1.17,-0.86l-0.26,-3.47l-1.05,-1.85l-1.04,-0.94Z","name":"Mozambique"}},"height":440.7063107441331,"projection":{"type":"mill","centralMeridian":11.5},"width":900}`),worldMill={name,content};export{AsyncSelect$1 as A,Chart as C,DayPicker as D,NumericFormat as N,React as R,StateManagedSelect$1 as S,Tooltip as T,clientExports as a,createTheme as c,distExports as d,initReactI18next as i,jsxRuntimeExports as j,reactExports as r,styled as s,useTranslation as u,worldMill as w};
