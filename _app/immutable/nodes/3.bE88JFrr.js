import{_ as Ve}from"../chunks/preload-helper.0HuHagjb.js";import{s as he,o as Se,d as qe,u as Le,g as Oe,f as Re,c as Be,r as Ge}from"../chunks/scheduler.p95La9n0.js";import{S as De,i as Fe,r as N,u as x,v as J,C as pe,d as q,t as C,w as K,g as h,h as _,j as $,f as m,k as l,a as ee,F as Ue,m as He,s as W,n as Ce,c as Y,B as ke,A as p,o as Pe,q as Ee,G as We,b as Ye,I as ye,p as Ne}from"../chunks/index.IU5UhBmJ.js";import{n as me,w as je,g as Je}from"../chunks/info.nsuE3pW7.js";import{C as Ke,e as Ae}from"../chunks/index.nRvIijCr.js";import{P as Qe,A as Xe}from"../chunks/ArrowLeftIcon.ma6nvTjQ.js";import{k as Ze}from"../chunks/singletons.c9o0yU6S.js";const xe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,ze=(n,e)=>{const a=n[e];return a?typeof a=="function"?a():Promise.resolve(a):new Promise((r,t)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))})};async function et({data:n}){const e=n.post.isIndexFile?await ze(Object.assign({}),`../../../../posts/${n.post.slug}/index.md`):await ze(Object.assign({"../../../../posts/hello.md":()=>Ve(()=>import("../chunks/hello.7q8J71SV.js"),__vite__mapDeps([0,1,2]),import.meta.url)}),`../../../../posts/${n.post.slug}.md`);return{post:n.post,component:e.default,layout:{fullWidth:!0}}}const vt=Object.freeze(Object.defineProperty({__proto__:null,load:et},Symbol.toStringTag,{value:"Module"})),{window:tt}=xe;function Te(n,e,a){const r=n.slice();return r[9]=e[a],r}const nt=n=>({}),Ie=n=>({slot:"description"});function Me(n){let e,a,r=n[9].value+"",t,o,s,u;return{c(){e=h("li"),a=h("a"),t=He(r),s=W(),this.h()},l(d){e=_(d,"LI",{class:!0,style:!0});var i=$(e);a=_(i,"A",{href:!0});var b=$(a);t=Ce(b,r),b.forEach(m),s=Y(i),i.forEach(m),this.h()},h(){l(a,"href",o=`#${n[9].id}`),l(e,"class","pl-2 transition-colors border-teal-500 heading text-zinc-500 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-100 svelte-t48kcq"),l(e,"style",u=`--depth: ${Math.max(0,n[9].depth-1)}`),ke(e,"active",n[1]===n[9])},m(d,i){ee(d,e,i),p(e,a),p(a,t),p(e,s)},p(d,i){i&1&&r!==(r=d[9].value+"")&&Pe(t,r),i&1&&o!==(o=`#${d[9].id}`)&&l(a,"href",o),i&1&&u!==(u=`--depth: ${Math.max(0,d[9].depth-1)}`)&&l(e,"style",u),i&3&&ke(e,"active",d[1]===d[9])},d(d){d&&m(e)}}}function ot(n){let e,a=Ae(n[0]),r=[];for(let t=0;t<a.length;t+=1)r[t]=Me(Te(n,a,t));return{c(){e=h("ul");for(let t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){e=_(t,"UL",{class:!0});var o=$(e);for(let s=0;s<r.length;s+=1)r[s].l(o);o.forEach(m),this.h()},h(){l(e,"class","flex flex-col gap-2")},m(t,o){ee(t,e,o);for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(e,null)},p(t,o){if(o&3){a=Ae(t[0]);let s;for(s=0;s<a.length;s+=1){const u=Te(t,a,s);r[s]?r[s].p(u,o):(r[s]=Me(u),r[s].c(),r[s].m(e,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=a.length}},d(t){t&&m(e),Ue(r,t)}}}function at(n){let e;const a=n[4].default,r=qe(a,n,n[5],Ie),t=r||ot(n);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,s){t&&t.m(o,s),e=!0},p(o,s){r?r.p&&(!e||s&32)&&Le(r,a,o,o[5],e?Re(a,o[5],s,nt):Oe(o[5]),Ie):t&&t.p&&(!e||s&3)&&t.p(o,e?s:-1)},i(o){e||(q(t,o),e=!0)},o(o){C(t,o),e=!1},d(o){t&&t.d(o)}}}function st(n){let e,a,r,t;return e=new Ke({props:{$$slots:{description:[at]},$$scope:{ctx:n}}}),{c(){N(e.$$.fragment)},l(o){x(e.$$.fragment,o)},m(o,s){J(e,o,s),a=!0,r||(t=pe(tt,"scroll",n[2]),r=!0)},p(o,[s]){const u={};s&35&&(u.$$scope={dirty:s,ctx:o}),e.$set(u)},i(o){a||(q(e.$$.fragment,o),a=!0)},o(o){C(e.$$.fragment,o),a=!1},d(o){K(e,o),r=!1,t()}}}function rt(n,e,a){let{$$slots:r={},$$scope:t}=e,{post:o}=e,s=[],u=o.headings;Se(()=>{b(),A()});let d=u[0],i;function b(){a(0,u=o.headings),s=u.map(w=>document.getElementById(w.id))}function A(){i=window.scrollY;const w=s.findIndex(y=>y.offsetTop+y.clientHeight>i)-1;a(1,d=u[w]);const T=document.body.scrollHeight,I=(i+window.innerHeight)/T;d||(I>.5?a(1,d=u[u.length-1]):a(1,d=u[0]))}return n.$$set=w=>{"post"in w&&a(3,o=w.post),"$$scope"in w&&a(5,t=w.$$scope)},[u,d,A,o,r,t]}class lt extends De{constructor(e){super(),Fe(this,e,rt,st,he,{post:3})}}const it=Ze("after_navigate");function fe(n){let e,a,r,t,o,s;a=new Xe({props:{class:"w-4 h-4 transition stroke-zinc-500 group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"}});let u=[{class:"items-center justify-center hidden w-10 h-10 mb-8 transition bg-white rounded-full shadow-md -top-1 -left-16 lg:flex group shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:focus-visible:ring-2 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"},{href:r=n[1]?void 0:"/posts"},{"aria-label":"Go back to posts"}],d={};for(let i=0;i<u.length;i+=1)d=Be(d,u[i]);return{c(){e=h(n[1]?"button":"a"),N(a.$$.fragment),this.h()},l(i){e=_(i,((n[1]?"button":"a")||"null").toUpperCase(),{class:!0,href:!0,"aria-label":!0});var b=$(e);x(a.$$.fragment,b),b.forEach(m),this.h()},h(){ye(n[1]?"button":"a")(e,d)},m(i,b){ee(i,e,b),J(a,e,null),t=!0,o||(s=[pe(e,"click",n[4]),pe(e,"keydown",n[4])],o=!0)},p(i,b){ye(i[1]?"button":"a")(e,d=Je(u,[{class:"items-center justify-center hidden w-10 h-10 mb-8 transition bg-white rounded-full shadow-md -top-1 -left-16 lg:flex group shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:focus-visible:ring-2 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"},(!t||b&2&&r!==(r=i[1]?void 0:"/posts"))&&{href:r},{"aria-label":"Go back to posts"}]))},i(i){t||(q(a.$$.fragment,i),t=!0)},o(i){C(a.$$.fragment,i),t=!1},d(i){i&&m(e),K(a),o=!1,Ge(s)}}}function ct(n){let e,a,r,t,o,s,u,d,i,b,A,w,T,I,y,te,P,ne,L,oe,k,O,M,ae=n[1]?"button":"a",ie,R,j,D,B,Q=n[0].post.title+"",se,ce,F,ue,V,g,de,G,S,H,E;document.title=e=n[0].post.title+" - "+me;let v=(n[1]?"button":"a")&&fe(n);F=new Qe({props:{class:"text-sm sm:text-base",post:n[0].post,decorate:!0,collapsed:!0}});var U=n[0].component;function _e(c,f){return{}}return U&&(g=Ee(U,_e())),H=new lt({props:{post:n[0].post}}),{c(){a=h("meta"),t=h("meta"),o=h("meta"),s=h("meta"),u=h("meta"),i=h("meta"),A=h("meta"),w=h("meta"),T=h("meta"),I=h("meta"),y=h("meta"),P=h("meta"),L=h("meta"),oe=W(),k=h("div"),O=h("div"),M=h("div"),v&&v.c(),ie=W(),R=h("div"),j=h("article"),D=h("header"),B=h("h1"),se=He(Q),ce=W(),N(F.$$.fragment),ue=W(),V=h("div"),g&&N(g.$$.fragment),de=W(),G=h("div"),S=h("aside"),N(H.$$.fragment),this.h()},l(c){const f=We("svelte-7wmra1",document.head);a=_(f,"META",{name:!0,content:!0}),t=_(f,"META",{name:!0,content:!0}),o=_(f,"META",{property:!0,content:!0}),s=_(f,"META",{property:!0,content:!0}),u=_(f,"META",{property:!0,content:!0}),i=_(f,"META",{property:!0,content:!0}),A=_(f,"META",{property:!0,content:!0}),w=_(f,"META",{name:!0,content:!0}),T=_(f,"META",{property:!0,content:!0}),I=_(f,"META",{property:!0,content:!0}),y=_(f,"META",{name:!0,content:!0}),P=_(f,"META",{name:!0,content:!0}),L=_(f,"META",{name:!0,content:!0}),f.forEach(m),oe=Y(c),k=_(c,"DIV",{class:!0});var z=$(k);O=_(z,"DIV",{class:!0});var X=$(O);M=_(X,"DIV",{class:!0});var Z=$(M);v&&v.l(Z),Z.forEach(m),X.forEach(m),ie=Y(z),R=_(z,"DIV",{class:!0});var ge=$(R);j=_(ge,"ARTICLE",{});var re=$(j);D=_(re,"HEADER",{class:!0});var le=$(D);B=_(le,"H1",{class:!0});var ve=$(B);se=Ce(ve,Q),ve.forEach(m),ce=Y(le),x(F.$$.fragment,le),le.forEach(m),ue=Y(re),V=_(re,"DIV",{class:!0});var be=$(V);g&&x(g.$$.fragment,be),be.forEach(m),re.forEach(m),ge.forEach(m),de=Y(z),G=_(z,"DIV",{class:!0});var we=$(G);S=_(we,"ASIDE",{class:!0,"aria-label":!0});var $e=$(S);x(H.$$.fragment,$e),$e.forEach(m),we.forEach(m),z.forEach(m),this.h()},h(){l(a,"name","description"),l(a,"content",r=n[0].post.preview.text),l(t,"name","author"),l(t,"content",me),l(o,"property","og:url"),l(o,"content",n[3]),l(s,"property","og:type"),l(s,"content","website"),l(u,"property","og:title"),l(u,"content",d=n[0].post.title),l(i,"property","og:description"),l(i,"content",b=n[0].post.preview.text),l(A,"property","og:image"),l(A,"content",n[2]),l(w,"name","twitter:card"),l(w,"content","summary_large_image"),l(T,"property","twitter:domain"),l(T,"content",je),l(I,"property","twitter:url"),l(I,"content",n[3]),l(y,"name","twitter:title"),l(y,"content",te=n[0].post.title),l(P,"name","twitter:description"),l(P,"content",ne=n[0].post.preview.text),l(L,"name","twitter:image"),l(L,"content",n[2]),l(M,"class","sticky top-0 w-full flex justify-end pt-11 pr-8"),l(O,"class","hidden lg:block pt-8"),l(B,"class","mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"),l(D,"class","flex flex-col"),l(V,"class","prose dark:prose-invert "),l(R,"class","w-full mx-auto overflow-x-hidden"),l(S,"class","sticky hidden w-48 ml-8 xl:block top-8"),l(S,"aria-label","Table of Contents"),l(G,"class","hidden xl:block pt-10"),l(k,"class","root max-w-2xl mx-auto lg:max-w-none svelte-1eui11k")},m(c,f){p(document.head,a),p(document.head,t),p(document.head,o),p(document.head,s),p(document.head,u),p(document.head,i),p(document.head,A),p(document.head,w),p(document.head,T),p(document.head,I),p(document.head,y),p(document.head,P),p(document.head,L),ee(c,oe,f),ee(c,k,f),p(k,O),p(O,M),v&&v.m(M,null),p(k,ie),p(k,R),p(R,j),p(j,D),p(D,B),p(B,se),p(D,ce),J(F,D,null),p(j,ue),p(j,V),g&&J(g,V,null),p(k,de),p(k,G),p(G,S),J(H,S,null),E=!0},p(c,[f]){(!E||f&1)&&e!==(e=c[0].post.title+" - "+me)&&(document.title=e),(!E||f&1&&r!==(r=c[0].post.preview.text))&&l(a,"content",r),(!E||f&1&&d!==(d=c[0].post.title))&&l(u,"content",d),(!E||f&1&&b!==(b=c[0].post.preview.text))&&l(i,"content",b),(!E||f&1&&te!==(te=c[0].post.title))&&l(y,"content",te),(!E||f&1&&ne!==(ne=c[0].post.preview.text))&&l(P,"content",ne),c[1],ae?he(ae,c[1]?"button":"a")?(v.d(1),v=fe(c),ae=c[1]?"button":"a",v.c(),v.m(M,null)):v.p(c,f):(v=fe(c),ae=c[1]?"button":"a",v.c(),v.m(M,null)),(!E||f&1)&&Q!==(Q=c[0].post.title+"")&&Pe(se,Q);const z={};if(f&1&&(z.post=c[0].post),F.$set(z),f&1&&U!==(U=c[0].component)){if(g){Ne();const Z=g;C(Z.$$.fragment,1,0,()=>{K(Z,1)}),Ye()}U?(g=Ee(U,_e()),N(g.$$.fragment),q(g.$$.fragment,1),J(g,V,null)):g=null}const X={};f&1&&(X.post=c[0].post),H.$set(X)},i(c){E||(q(F.$$.fragment,c),g&&q(g.$$.fragment,c),q(H.$$.fragment,c),E=!0)},o(c){C(v,c),C(F.$$.fragment,c),g&&C(g.$$.fragment,c),C(H.$$.fragment,c),E=!1},d(c){c&&(m(oe),m(k)),m(a),m(t),m(o),m(s),m(u),m(i),m(A),m(w),m(T),m(I),m(y),m(P),m(L),v&&v.d(c),K(F),g&&K(g),K(H)}}}function ut(n,e,a){let{data:r}=e;const t=`https://og-image.vercel.app/**${encodeURIComponent(r.post.title)}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`,o=`${je}/${r.post.slug}`;let s=!1;it(({from:d})=>{d&&d.url.pathname.startsWith("/posts")&&a(1,s=!0)});function u(){s&&history.back()}return n.$$set=d=>{"data"in d&&a(0,r=d.data)},[r,s,t,o,u]}class bt extends De{constructor(e){super(),Fe(this,e,ut,ct,he,{data:0})}}export{bt as component,vt as universal};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/hello.7q8J71SV.js","../chunks/scheduler.p95La9n0.js","../chunks/index.IU5UhBmJ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}