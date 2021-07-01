(function(e){function t(t){for(var r,o,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);g&&g(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return s.p+"js/"+({catalogue:"catalogue",generic:"generic",image:"image",package:"package",repo:"repo"}[e]||e)+"."+{catalogue:"1ab4c776",generic:"9c14e01b",image:"b210acc3",package:"f024b21e",repo:"14b61aca"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={generic:1,image:1,package:1,repo:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({catalogue:"catalogue",generic:"generic",image:"image",package:"package",repo:"repo"}[e]||e)+"."+{catalogue:"31d6cfe0",generic:"26a14b27",image:"8fdfb1b9",package:"26a14b27",repo:"26a14b27"}[e]+".css",a=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],g.parentNode.removeChild(g),n(c)},g.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(g)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(g);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var g=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/badge-generator/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var g=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0356":function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"g",(function(){return l}));const r="https://img.shields.io",o={DASH:r+"/badge",PARAM:r+"/static/v1",GH:r+"/github",PKG_JSON_DEPENDENCY:r+"/github/package-json/dependency-version",GO_MODULE:r+"/github/go-mod/go-version"};var a;(function(e){e["Python"]="https://pypi.org/project",e["Node"]="https://www.npmjs.com/package",e["Ruby"]="https://rubygems.org/gems"})(a||(a={}));const c="https://github.com",i="github.io",s="master",u="/LICENSE",l={include_prereleases:"",sort:"semver"}},"17a3":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));const r="Magically generate Markdown badges for your docs",o={FOR_THE_BADGE:"for-the-badge",SOCIAL:"social"};var a;(function(e){e["Default"]="blue",e["Green"]="2ea44f",e["LogoDefault"]="white"})(a||(a={}))},"2eda":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("a5a3"),o=n("0356"),a=n("b8e9"),c=n("5167"),i=n("7cba"),s=n("8dd6");class u{constructor(e,t,n){if(this.username=e,this.repoName=t,this.licenseType=n,!e)throw new Error("`username` cannot be empty");if(!t)throw new Error("`repoName` cannot be empty")}nameWithOwner(){return`${this.username}/${this.repoName}`}ghURL(){return`${o["b"]}/${this.nameWithOwner()}`}ghPagesURL(){const e=`${this.username}.${o["c"]}`,t="https://"+e.toLowerCase();return this.repoName===e?t:`${t}/${this.repoName}/`}ghPagesBadge(){const e=this.ghPagesURL();return Object(c["a"])(r["b"].label,r["b"].message,r["b"].color,r["b"].isLarge,e)}_issuesURL(){return this.ghURL()+"/issues"}_templateURL(){return this.ghURL()+"/generate"}useThisTemplateBadge(){const e=this._templateURL();return Object(c["a"])(r["g"].label,r["g"].message,r["g"].color,r["g"].isLarge,e,r["g"].logo,"",!1,r["g"].altText)}_tagBadgeUrl(e){const t=`${e}/${this.nameWithOwner()}`,n=`${o["f"].GH}/${t}`;return Object(a["a"])(n,o["g"])}tagBadge(e){const t="GitHub "+e,n=this._tagBadgeUrl(e),r=this.ghURL()+"/releases/";return Object(i["b"])({altText:t,imageTarget:n,linkTarget:r})}_licenseTarget(e){if(e)return"#license";const t=this.ghURL();return`${t}/blob/${o["a"]}/LICENSE`}licenseBadge(e){return this.licenseType?Object(c["a"])(r["d"].label,this.licenseType,r["d"].color,r["d"].isLarge,this._licenseTarget(e),"","",!1,r["d"].altText):""}licenseMessage(){if(!this.licenseType)return"";const e=Object(i["c"])(this.licenseType,o["d"]),t=Object(i["c"])("@"+this.username,`${o["b"]}/${this.username}`);return`## License\n\nReleased under ${e} by ${t}.\n`}gh(){const e=this.username,t=this.repoName,n=this.ghURL(),o=!0;return Object(c["a"])(e,t,r["a"].color,r["a"].isLarge,n,r["a"].logo,r["a"].logoColor,o)}ghCounter(e){const t=`${e} - ${this.repoName}`,n=Object(s["c"])(e,{username:this.username,repoName:this.repoName}),r="issues"===e?this._issuesURL():this.ghURL();return Object(i["b"])({altText:t,imageTarget:n,linkTarget:r})}}},"3b51":function(e,t,n){},5167:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("b8e9"),o=n("7cba"),a=n("8dd6");function c(e,t,n,c=!1,i="",s="",u="",l=!1,d=""){if(!t)throw new Error("`message` may not be empty");if(!n)throw new Error("`color` may not be empty");d=d||Object(r["b"])(e,t);const g={label:e,message:t,color:n},b=Object(a["d"])({isLarge:c,logo:s,logoColor:u}),p=l?Object(a["b"])(g,b):Object(a["f"])(g,b);return Object(o["b"])({altText:d,imageTarget:p,linkTarget:i})}},"79c5":function(e,t,n){"use strict";n("d0d0")},"7cba":function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n("d4cd"),o=n.n(r);const a=new o.a({html:!0});function c(e,t){return`[${e}](${t})`}function i({altText:e,imageTarget:t,hoverTitle:n}){return n&&(t=`${t} "${n}"`),`![${e}](${t})`}function s({altText:e,imageTarget:t,linkTarget:n,hoverTitle:r}){const o=i({altText:e,imageTarget:t,hoverTitle:r});return n?c(o,n):o}function u(e){return a.render(e)}function l(e){return e.replaceAll("<p>","").replaceAll("</p>","\n").replaceAll("<em>","<i>").replaceAll("</em>","</i>").replaceAll("<strong>","<b>").replaceAll("</strong>","</b>").replaceAll("&amp;","&")}},"8dd6":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return g})),n.d(t,"f",(function(){return b})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return h}));var r,o=n("17a3"),a=n("0356"),c=n("b8e9");function i(e,t){return e=e.replace(/-/g,"--").replace(/_/g,"__"),t&&(e=e.replace(/ /g,"_")),e}function s(e){return e.replace(/%3E/g,">").replace(/%3C/g,"<").replace(/%3D/g,"=")}function u(e,t=!0){e=i(e,t);const n=encodeURIComponent(e);return s(n)}function l(e){const t=u(e.message);let n=e.label;const r=[t,e.color];return n&&(n=u(n),r.unshift(n)),r.join("-")}function d(e){const t={};return e.isLarge&&(t.style=o["c"].FOR_THE_BADGE),e.logo&&(t.logo=e.logo,e.logoColor&&(t.logoColor=e.logoColor)),t}function g(e,t){const n={label:e.label,message:e.message,color:e.color,...t};return Object(c["a"])(a["f"].PARAM,n)}function b(e,t){const n=l(e),r=`${a["f"].DASH}/${n}`;return Object(c["a"])(r,t)}function p(e,t){const n=`${e}/${t.username}/${t.repoName}`,r=`${a["f"].GH}/${n}`;return"issues"===e?r:Object(c["a"])(r,{style:o["c"].SOCIAL})}function h(e,t,n){const o=n===r.Prod?`${e.username}/${e.repoName}/${t}`:`${e.username}/${e.repoName}/dev/${t}`;return`${a["f"].PKG_JSON_DEPENDENCY}/${o}`}(function(e){e[e["Prod"]=0]="Prod",e[e["Dev"]=1]="Dev"})(r||(r={}))},a5a3:function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"g",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return l}));var r=n("17a3");const o={label:"dependency",color:r["a"].Default,isLarge:!1},a={label:"License",color:r["a"].Default,isLarge:!1,altText:"License"},c={color:r["a"].Default,isLarge:!1,logo:"github",logoColor:""},i={label:"View site",message:"GH Pages",color:r["a"].Green,isLarge:!0},s={label:"Generate",message:"Use this template",color:r["a"].Green,isLarge:!0,altText:"Use this template"},u={IS_LARGE:!1},l={isLarge:!1,logo:"go",logoColor:"white",linkTarget:"https://golang.org",altText:"Made with Go"}},b8e9:function(e,t,n){"use strict";function r(e,t){const n=new URL(e);for(const[r,o]of Object.entries(t))n.searchParams.append(r,o);return decodeURI(n.href)}function o(e,t){return e?[e,t].join(" - "):t}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}))},c480:function(e,t,n){"use strict";n("3b51")},cd49:function(e,t,n){"use strict";n.r(t);var r=n("1487"),o=n.n(r),a=n("7a23");const c={class:"container-lg"},i={id:"nav"};function s(e,t,n,r,o,s){const u=Object(a["x"])("router-link"),l=Object(a["x"])("router-view");return Object(a["q"])(),Object(a["d"])("div",null,[Object(a["h"])("header",c,[Object(a["h"])("a",{id:"logo",href:e.baseUrl},"Badge Generator",8,["href"]),Object(a["h"])("div",i,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(e.routes,(e,t)=>(Object(a["q"])(),Object(a["d"])("span",{key:e.path},[Object(a["h"])("span",null,Object(a["z"])(0!==t?" | ":""),1),Object(a["h"])(u,{to:e.path},{default:Object(a["D"])(()=>[Object(a["g"])(Object(a["z"])(e.name),1)]),_:2},1032,["to"])]))),128))])]),Object(a["h"])(l)])}n("b11d");const u=Object(a["G"])("data-v-3689c507");Object(a["t"])("data-v-3689c507");const l={class:"home container-lg"},d={class:"row"},g={class:"col-12"},b=Object(a["h"])("h1",null,"Home",-1),p={class:"hero"},h=Object(a["h"])("br",null,null,-1),f=Object(a["f"])('<div class="row" data-v-3689c507><div class="col-12" data-v-3689c507><p data-v-3689c507> This is an online tool which generates badges (or &quot;shields&quot;) based on your inputs. You can preview the badges on the tool and then copy the Markdown/HTML to your GitHub repo&#39;s <b data-v-3689c507>README.md</b> file. Those metadata badges can help people learn about your repo at a glance and make it look professional. </p><p data-v-3689c507> This tool adds <b data-v-3689c507>convenience</b> and <b data-v-3689c507>productivity</b> to your life so you can make badges quickly and easily and get on with the coding. </p><p data-v-3689c507> The power here is in narrowing the choices and putting less burden on your to figure out rules and syntax or read long URLs. For badges that you need to create regularly, there&#39;s no need to look at <i data-v-3689c507>shields.io</i> to figure out how it works or to write the markdown by hand (and do all the tedious things like escaping characters and learning the syntax for each badge. </p><p data-v-3689c507> I use this tool regularly for myself - I hope you will too. If you want to contribute, issues and PRs are welcome. </p><p data-v-3689c507>PS. This site works best on a desktop screen size.</p></div></div>',1);Object(a["r"])();const m=u((e,t,n,r,o,c)=>{const i=Object(a["x"])("Markdown");return Object(a["q"])(),Object(a["d"])("div",l,[Object(a["h"])("div",d,[Object(a["h"])("div",g,[b,Object(a["h"])("div",p,[Object(a["h"])("img",{id:"logo",src:e.baseUrl+"hero.jpeg",alt:"Website banner logo"},null,8,["src"]),h,Object(a["h"])(i,{content:e.repoBadge},null,8,["content"]),Object(a["h"])("p",null,[Object(a["h"])("i",null,Object(a["z"])(e.description),1)])])])]),f])});var v=n("e6e0"),O=n("17a3"),j=n("2eda"),y=Object(a["i"])({name:"Home",components:{Markdown:v["a"]},data(){const e=new j["a"]("MichaelCurrin","badge-generator");return{repoBadge:e.gh(),description:O["b"],baseUrl:"/badge-generator/"}}});n("c480");y.render=m,y.__scopeId="data-v-3689c507";var w=y,T=n("6c02");const L=[{path:"/",name:"Home",component:w},{path:"/repo",name:"Repo",component:()=>n.e("repo").then(n.bind(null,"7b65"))},{path:"/generic",name:"Generic",component:()=>n.e("generic").then(n.bind(null,"f3c2"))},{path:"/package",name:"Package",component:()=>n.e("package").then(n.bind(null,"b086"))},{path:"/image",name:"Image",component:()=>n.e("image").then(n.bind(null,"feec"))},{path:"/catalogue",name:"Catalogue",component:()=>n.e("catalogue").then(n.bind(null,"afe0"))}],k=Object(T["a"])({history:Object(T["b"])(),routes:L});var $=k,_=Object(a["i"])({name:"App",data(){return{routes:L,baseUrl:"/badge-generator/"}}});n("79c5");_.render=s;var E=_;const P=Object(a["c"])(E);P.use($),P.use(o.a.vuePlugin),P.mount("#app")},d0d0:function(e,t,n){},e6e0:function(e,t,n){"use strict";var r=n("7a23");function o(e,t,n,o,a,c){return Object(r["q"])(),Object(r["d"])("div",{innerHTML:e.mdToHTML(e.content)},null,8,["innerHTML"])}var a=n("7cba"),c=Object(r["i"])({name:"Markdown",props:{content:{type:String,required:!0}},methods:{mdToHTML:a["d"]}});c.render=o;t["a"]=c}});
//# sourceMappingURL=app.8ee4ff2d.js.map