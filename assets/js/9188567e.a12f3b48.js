/*! For license information please see 9188567e.a12f3b48.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[758722],{221765:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>u,metadata:()=>i,toc:()=>p});var n=r(824246),o=r(511151);const u={id:"frontend-plugin-api.approotwrapperblueprint",title:"AppRootWrapperBlueprint",description:"API reference for AppRootWrapperBlueprint"},a=void 0,i={id:"reference/frontend-plugin-api.approotwrapperblueprint",title:"AppRootWrapperBlueprint",description:"API reference for AppRootWrapperBlueprint",source:"@site/../docs/reference/frontend-plugin-api.approotwrapperblueprint.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.approotwrapperblueprint",permalink:"/docs/reference/frontend-plugin-api.approotwrapperblueprint",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-plugin-api.approotwrapperblueprint.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api.approotwrapperblueprint",title:"AppRootWrapperBlueprint",description:"API reference for AppRootWrapperBlueprint"}},c={},p=[];function s(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/frontend-plugin-api",children:(0,n.jsx)(t.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/frontend-plugin-api.approotwrapperblueprint",children:(0,n.jsx)(t.code,{children:"AppRootWrapperBlueprint"})})]}),"\n",(0,n.jsx)(t.p,{children:"Creates a extensions that render a React wrapper at the app root, enclosing the app layout. This is useful for example for adding global React contexts and similar."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:'AppRootWrapperBlueprint: import("../wiring").ExtensionBlueprint<{\n    kind: "app-root-wrapper";\n    namespace: undefined;\n    name: undefined;\n    params: {\n        Component: ComponentType<PropsWithChildren<{}>>;\n    };\n    output: import("../wiring").ConfigurableExtensionDataRef<React.ComponentType<{\n        children?: React.ReactNode;\n    }>, "app.root.wrapper", {}>;\n    inputs: {};\n    config: {};\n    configInput: {};\n    dataRefs: {\n        component: import("../wiring").ConfigurableExtensionDataRef<React.ComponentType<{\n            children?: React.ReactNode;\n        }>, "app.root.wrapper", {}>;\n    };\n}>\n'})})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,r){var n,u={},p=null,s=null;for(n in void 0!==r&&(p=""+r),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(s=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:p,ref:s,props:u,_owner:i.current}}t.Fragment=u,t.jsx=p,t.jsxs=p},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),l=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function _(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function b(){}function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=_.prototype;var g=v.prototype=new b;g.constructor=v,m(g,_.prototype),g.isPureReactComponent=!0;var R=Array.isArray,w=Object.prototype.hasOwnProperty,S={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var o,u={},a=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,o)&&!x.hasOwnProperty(o)&&(u[o]=t[o]);var c=arguments.length-2;if(1===c)u.children=n;else if(1<c){for(var p=Array(c),s=0;s<c;s++)p[s]=arguments[s+2];u.children=p}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===u[o]&&(u[o]=c[o]);return{$$typeof:r,type:e,key:a,ref:i,props:u,_owner:S.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var E=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,u,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return a=a(c=e),e=""===u?"."+j(c,0):u,R(a)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),$(a,t,o,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),t.push(a)),1;if(c=0,u=""===u?".":u+":",R(e))for(var p=0;p<e.length;p++){var s=u+j(i=e[p],p);c+=$(i,t,o,s,a)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),p=0;!(i=e.next()).done;)c+=$(i=i.value,t,o,s=u+j(i,p++),a);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function P(e,t,r){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},I={transition:null},T={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:I,ReactCurrentOwner:S};function B(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=_,t.Fragment=o,t.Profiler=a,t.PureComponent=v,t.StrictMode=u,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.act=B,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),u=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=S.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(p in t)w.call(t,p)&&!x.hasOwnProperty(p)&&(o[p]=void 0===t[p]&&void 0!==c?c[p]:t[p])}var p=arguments.length-2;if(1===p)o.children=n;else if(1<p){c=Array(p);for(var s=0;s<p;s++)c[s]=arguments[s+2];o.children=c}return{$$typeof:r,type:e.type,key:u,ref:a,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=B,t.useCallback=function(e,t){return A.current.useCallback(e,t)},t.useContext=function(e){return A.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return A.current.useDeferredValue(e)},t.useEffect=function(e,t){return A.current.useEffect(e,t)},t.useId=function(){return A.current.useId()},t.useImperativeHandle=function(e,t,r){return A.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return A.current.useMemo(e,t)},t.useReducer=function(e,t,r){return A.current.useReducer(e,t,r)},t.useRef=function(e){return A.current.useRef(e)},t.useState=function(e){return A.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return A.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return A.current.useTransition()},t.version="18.3.1"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>a});var n=r(667294);const o={},u=n.createContext(o);function a(e){const t=n.useContext(u);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(u.Provider,{value:t},e.children)}}}]);