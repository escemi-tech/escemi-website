"use strict";(self.webpackChunkescemi_website=self.webpackChunkescemi_website||[]).push([[223],{8223:function(e,t,n){n.r(t),n.d(t,{renderImageToString:function(){return v},swapPlaceholderImage:function(){return m}});var o,i=n(5861),r=n(4687),a=n.n(r),c=n(3723),s=n(7294),u=n(7762),l=(n(4811),new WeakMap),d=navigator.connection||navigator.mozConnection||navigator.webkitConnection,g=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function b(e,t){e.style.opacity="1",t&&(t.style.opacity="0")}function f(e,t,n,o,i,r){var a=e.querySelector("[data-main-image]"),c=e.querySelector("[data-placeholder-image]"),s=n.has(t);function u(e){var t=this;this.removeEventListener("load",u);var n=e.currentTarget,o=new Image;o.src=n.currentSrc,o.decode?o.decode().then((function(){b(t,c),null==i||i({wasCached:s})})).catch((function(e){b(t,c),null==r||r(e)})):(b(this,c),null==i||i({wasCached:s}))}return a.addEventListener("load",u),null==o||o({wasCached:s}),Array.from(a.parentElement.children).forEach((function(e){var t=e.getAttribute("data-src"),n=e.getAttribute("data-srcset");t&&(e.removeAttribute("data-src"),e.setAttribute("src",t)),n&&(e.removeAttribute("data-srcset"),e.setAttribute("srcset",n))})),n.add(t),a.complete&&u.call(a,{currentTarget:a}),function(){a&&a.removeEventListener("load",u)}}function m(e,t,r,s,u,g,b){if(!(0,c.h)()){var m,v,h,w=(j=function(){m=f(e,t,r,u,g,b)},"IntersectionObserver"in window?(o||(o=new IntersectionObserver((function(e){e.forEach((function(e){var t;e.isIntersecting&&(null==(t=l.get(e.target))||t(),l.delete(e.target))}))}),{rootMargin:"4g"!==(null==d?void 0:d.effectiveType)||null!=d&&d.saveData?"2500px":"1250px"})),function(e){return l.set(e,j),o.observe(e),function(){o&&e&&(l.delete(e),o.unobserve(e))}}):function(){return j(),function(){}}),p=w(e);return"objectFit"in document.documentElement.style||(e.dataset.objectFit=null!=(v=s.objectFit)?v:"cover",e.dataset.objectPosition=""+(null!=(h=s.objectPosition)?h:"50% 50%"),(y=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0="objectFitPolyfill"in window,e.t0){e.next=4;break}return e.next=4,n.e(231).then(n.t.bind(n,7231,23));case 4:window.objectFitPolyfill(t);case 5:case"end":return e.stop()}}),e)}))),function(e){return y.apply(this,arguments)})(e)),function(){m&&m(),p()}}var y,j;return f(e,t,r,u,g,b)}function v(e){var t=e.image,n=e.loading,o=void 0===n?"lazy":n,i=e.isLoading,r=e.isLoaded,a=e.imgClassName,l=e.imgStyle,d=void 0===l?{}:l,b=e.objectPosition,f=e.backgroundColor,m=e.objectFit,v=void 0===m?"cover":m,h=(0,c._)(e,g),w=t.width,p=t.height,y=t.layout,j=t.images,C=t.placeholder,k=t.backgroundColor;return d=(0,c.a)({objectFit:v,objectPosition:b,backgroundColor:f},d),(0,u.uS)(s.createElement(c.L,{layout:y,width:w,height:p},s.createElement(c.P,(0,c.a)({},(0,c.g)(C,r,y,w,p,k,v,b))),s.createElement(c.M,(0,c.a)({},h,{width:w,height:p,className:a},(0,c.b)(i,r,j,o,d)))))}}}]);
//# sourceMappingURL=223-3ff0a485a5484213155a.js.map