_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"2k4u":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("YFqc"),c=n.n(a),u=o.a.createElement;t.default=function(){return u("div",null,u("h1",null,"Prices"),u("div",null,"Back to ",u(c.a,{href:"/",as:"/Next-gh-page-example/"},u("a",null,"Home"))))}},EoBS:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/prices",function(){return n("2k4u")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a,c=o(n("q1tI")),u=n("elyg"),f=(n("g/15"),n("nOHt")),i=new Map,s=window.IntersectionObserver,l={};var p=function(e,t){var n=a||(s?a=new s((function(e){e.forEach((function(e){if(i.has(e.target)){var t=i.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),i.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),i.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}i.delete(e)}):function(){}};function d(e,t,n,r){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=c.default.useState(),o=r(n,2),a=o[0],i=o[1],h=(0,f.useRouter)(),v=h&&h.pathname||"/",w=c.default.useMemo((function(){var t=(0,u.resolveHref)(v,e.href);return{href:t,as:e.as?(0,u.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),E=w.href,g=w.as;c.default.useEffect((function(){if(t&&s&&a&&a.tagName&&(0,u.isLocalURL)(E)&&!l[E+"%"+g])return p(a,(function(){d(h,E,g)}))}),[t,a,E,g,h]);var y=e.children,_=e.replace,m=e.shallow,b=e.scroll;"string"===typeof y&&(y=c.default.createElement("a",null,y));var k=c.Children.only(y),L={ref:function(e){e&&i(e),k&&"object"===typeof k&&k.ref&&("function"===typeof k.ref?k.ref(e):"object"===typeof k.ref&&(k.ref.current=e))},onClick:function(e){k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,E,g,_,m,b)}};return t&&(L.onMouseEnter=function(e){(0,u.isLocalURL)(E)&&(k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),d(h,E,g,{priority:!0}))}),!e.passHref&&("a"!==k.type||"href"in k.props)||(L.href=(0,u.addBasePath)(g)),c.default.cloneElement(k,L)};t.default=h}},[["EoBS",0,2,1]]]);