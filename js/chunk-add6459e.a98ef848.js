(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-add6459e"],{"1cf6":function(e,t,n){"use strict";var l=n("7a23");function a(e,t,n,a,o,s){return Object(l["q"])(),Object(l["d"])("pre",null,[Object(l["h"])("code",null,Object(l["z"])(e.code),1)])}var o=Object(l["i"])({name:"Code",props:{code:{type:String,required:!0}}});o.render=a;t["a"]=o},2156:function(e,t,n){"use strict";n("bdd2")},"446e":function(e,t,n){"use strict";var l=n("7a23");const a=Object(l["G"])("data-v-de2a2f90");Object(l["t"])("data-v-de2a2f90");const o={key:0,class:"required"},s={key:0,class:"note"};Object(l["r"])();const r=a((e,t,n,a,r,u)=>{const c=Object(l["x"])("Markdown");return Object(l["q"])(),Object(l["d"])("div",null,[Object(l["h"])("label",{for:e.slug},[Object(l["g"])(Object(l["z"])(e.label),1),e.isRequired?(Object(l["q"])(),Object(l["d"])("span",o,"*")):Object(l["e"])("",!0)],8,["for"]),Object(l["h"])("input",{id:e.slug,type:"text",value:e.modelValue,placeholder:e.placeholder,required:e.isRequired,disabled:e.disabled,onInput:t[1]||(t[1]=t=>e.$emit("update:modelValue",t.target.value))},null,40,["id","value","placeholder","required","disabled"]),e.note?(Object(l["q"])(),Object(l["d"])("small",s,[Object(l["h"])(c,{content:e.note},null,8,["content"])])):Object(l["e"])("",!0)])});var u=n("84f8"),c=n("e6e0"),i=Object(l["i"])({name:"TextInput",components:{Markdown:c["a"]},props:{label:{type:String,required:!0},modelValue:{type:String,required:!0},placeholder:{type:String,required:!1},isRequired:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return Object(u["a"])("text",this.label,this.modelValue)}}});n("2156");i.render=r,i.__scopeId="data-v-de2a2f90";t["a"]=i},7737:function(e,t,n){"use strict";var l=n("7a23");const a={key:0,class:"note"};function o(e,t,n,o,s,r){const u=Object(l["x"])("Markdown");return Object(l["q"])(),Object(l["d"])("div",null,[Object(l["h"])("label",{for:e.slug},Object(l["z"])(e.label),9,["for"]),Object(l["h"])("input",{id:e.slug,type:"checkbox",checked:e.modelValue,onChange:t[1]||(t[1]=t=>e.$emit("update:modelValue",t.target.checked))},null,40,["id","checked"]),e.note?(Object(l["q"])(),Object(l["d"])("small",a,[Object(l["h"])(u,{content:e.note},null,8,["content"])])):Object(l["e"])("",!0)])}var s=n("e6e0"),r=n("84f8"),u=Object(l["i"])({name:"Checkbox",components:{Markdown:s["a"]},props:{label:{type:String,required:!0},modelValue:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return Object(r["a"])("box",this.label)}}});u.render=o;t["a"]=u},"7b65":function(e,t,n){"use strict";n.r(t);var l=n("7a23");const a={class:"badges container-lg"},o=Object(l["h"])("div",{class:"row"},[Object(l["h"])("div",{class:"col-12"},[Object(l["h"])("h1",null,"Repo badges"),Object(l["h"])("p",null," Generate shields about your repo and add them to your README.md file. ")])],-1),s={class:"row"},r={class:"col-6"},u={class:"app-input"},c=Object(l["h"])("h2",null,"Input values",-1),i={name:"gh-repo"},d=Object(l["h"])("legend",null,"GitHub repo",-1),b=Object(l["h"])("br",null,null,-1),h=Object(l["h"])("br",null,null,-1),p=Object(l["h"])("br",null,null,-1),m=Object(l["h"])("label",null,"Version type",-1),O=Object(l["h"])("label",{for:"one"},"Tag",-1),j=Object(l["h"])("label",{for:"two"},"Release",-1),g=Object(l["h"])("br",null,null,-1),f={name:"display-options"},w=Object(l["h"])("legend",null,"Display options",-1),v=Object(l["h"])("br",null,null,-1),y={name:"gh-actions"},k=Object(l["h"])("legend",null,"GitHub Actions workflow",-1),T=Object(l["h"])("br",null,null,-1),V=Object(l["h"])("input",{class:"btn",type:"submit",value:"Submit"},null,-1),q={class:"col-6"},R={class:"row"},N={class:"col-12"};function x(e,t,n,x,U,C){const $=Object(l["x"])("TextInput"),I=Object(l["x"])("Checkbox"),S=Object(l["x"])("Results"),M=Object(l["x"])("Help");return Object(l["q"])(),Object(l["d"])("div",a,[o,Object(l["h"])("div",s,[Object(l["h"])("div",r,[Object(l["h"])("div",u,[c,Object(l["h"])("form",{onSubmit:t[10]||(t[10]=Object(l["F"])((...t)=>e.submit&&e.submit(...t),["prevent"]))},[Object(l["h"])("fieldset",i,[d,Object(l["h"])($,{label:"Username",modelValue:e.username,"onUpdate:modelValue":t[1]||(t[1]=t=>e.username=t),isRequired:""},null,8,["modelValue"]),b,Object(l["h"])($,{label:"Repo name",modelValue:e.repoName,"onUpdate:modelValue":t[2]||(t[2]=t=>e.repoName=t),isRequired:""},null,8,["modelValue"]),h,Object(l["h"])($,{label:"License",modelValue:e.licenseType,"onUpdate:modelValue":t[3]||(t[3]=t=>e.licenseType=t)},null,8,["modelValue"]),p,Object(l["h"])("div",null,[m,Object(l["E"])(Object(l["h"])("input",{type:"radio",id:"one",value:"tag","onUpdate:modelValue":t[4]||(t[4]=t=>e.versionType=t)},null,512),[[l["B"],e.versionType]]),O,Object(l["E"])(Object(l["h"])("input",{type:"radio",id:"two",value:"release","onUpdate:modelValue":t[5]||(t[5]=t=>e.versionType=t)},null,512),[[l["B"],e.versionType]]),j])]),g,Object(l["h"])("fieldset",f,[w,Object(l["h"])(I,{label:"Template button",modelValue:e.useThisTemplate,"onUpdate:modelValue":t[6]||(t[6]=t=>e.useThisTemplate=t),note:"Add a <i>Use This Template</i> button."},null,8,["modelValue"]),Object(l["h"])(I,{label:"GH Pages button",modelValue:e.ghPages,"onUpdate:modelValue":t[7]||(t[7]=t=>e.ghPages=t),note:"Add a link to a GitHub Pages site."},null,8,["modelValue"]),Object(l["h"])(I,{label:"Issues badge",modelValue:e.addIssues,"onUpdate:modelValue":t[8]||(t[8]=t=>e.addIssues=t),note:"Add a counter for number of open issues. The color will change based on the count."},null,8,["modelValue"])]),v,Object(l["h"])("fieldset",y,[k,Object(l["h"])($,{label:"Name",modelValue:e.workflowName,"onUpdate:modelValue":t[9]||(t[9]=t=>e.workflowName=t),placeholder:"Node CI",note:'From the "name" field of a GH Actions workflow file. For badge-generator default repo, you can use "GH Pages Deploy" for a sample.'},null,8,["modelValue"])]),T,V],32)])]),Object(l["h"])("div",q,[Object(l["h"])(S,{result:e.result},null,8,["result"])])]),Object(l["h"])("div",R,[Object(l["h"])("div",N,[Object(l["h"])(M,{message:e.note},null,8,["message"])])])])}var U=n("ca2c"),C=n("7737"),$=n("8169"),I=n("446e"),S=n("2eda"),M=n("7cba");function P({ghURL:e,workflowName:t}){const n=encodeURIComponent(t);return`${e}/workflows/${n}/badge.svg`}function _({ghURL:e,workflowName:t}){const n=t.replace(/ /g,"+");return`${e}/actions?query=workflow:"${n}"`}function B({ghURL:e,workflowName:t}){return{altText:t,imageTarget:P({ghURL:e,workflowName:t}),linkTarget:_({ghURL:e,workflowName:t})}}function H(e,t){const n=e.ghURL(),l=B({ghURL:n,workflowName:t});return Object(M["a"])(l)}const L="\n- Where to put repo metadata badges.\n    - In your `README.md` file.\n- Where to put the social badges.\n    - On a docs site to link back to your repo.\n    - Link to a repo you don't own - such as if you want to link to the Vue repo and show its star count.\n- The first social badge has fixed display logic - so make sure you enter a valid repo as the badge can't tell you it is broken. A positive of this is that it works to point to private repos.\n- If you want to always how the latest tag, even if it has _no release_ yet, use the Tag badge. Otherwise, use the Release badge.\n- For centered badges - note that the HTML `align` attribute is being deprecated in favor of CSS. But in markdown on GitHub you cannot set CSS even inline and so must use the `align` attribute.\n";var A=Object(l["i"])({name:"RepoBadges",components:{Checkbox:C["a"],Help:U["a"],Results:$["a"],TextInput:I["a"]},data(){return{username:"MichaelCurrin",repoName:"badge-generator",licenseType:"MIT",useThisTemplate:!1,ghPages:!1,addIssues:!1,workflowName:"",result:"_Your output will appear here_",versionType:"tag",note:L}},methods:{submit(){console.debug("Process inputs and render results"),console.debug({username:this.username,repoName:this.repoName,licenseType:this.licenseType,useThisTemplate:this.useThisTemplate,versionType:this.versionType,ghPages:this.ghPages,workflowName:this.workflowName});const e=new S["a"](this.username,this.repoName,this.licenseType),t=this.workflowName?H(e,this.workflowName):"",n=e.tagBadge(this.versionType),l=e.licenseBadge(!0),a=e.gh(),o=e.ghCounter("stars"),s=e.ghCounter("forks"),r=this.addIssues?e.ghCounter("issues"):"",u=this.useThisTemplate?e.useThisTemplateBadge():"",c=this.ghPages?e.ghPagesBadge():"",i=e.licenseMessage();this.result=`_Social buttons_\n\n${a}\n${o}\n${s}\n\n_Repo metadata_\n\n${t}\n${n}\n${l}\n${r}\n\n_Call-to-Action buttons_\n\n<div align="center">\n\n${u}\n\n${c}\n\n</div>\n\n${i}`}}});A.render=x;t["default"]=A},8169:function(e,t,n){"use strict";var l=n("7a23");const a={class:"app-results"},o=Object(l["h"])("h2",null,"Output values",-1),s=Object(l["h"])("h3",null,"Preview",-1),r=Object(l["h"])("h3",null,"Code",-1);function u(e,t,n,u,c,i){const d=Object(l["x"])("Markdown"),b=Object(l["x"])("Code");return Object(l["q"])(),Object(l["d"])("div",a,[o,Object(l["h"])("div",null,[s,Object(l["h"])(d,{content:e.result},null,8,["content"])]),Object(l["h"])("div",null,[r,Object(l["h"])(b,{code:e.result},null,8,["code"])])])}var c=n("1cf6"),i=n("e6e0"),d=Object(l["i"])({name:"Results",components:{Markdown:i["a"],Code:c["a"]},props:{result:String}});d.render=u;t["a"]=d},"84f8":function(e,t,n){"use strict";function l(e){return e.replace(/^\/+/,"")}function a(...e){const t=e.join("-");return t.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return a}))},bdd2:function(e,t,n){},ca2c:function(e,t,n){"use strict";var l=n("7a23");const a={class:"app-notes"},o=Object(l["h"])("h2",null,"Notes",-1);function s(e,t,n,s,r,u){const c=Object(l["x"])("Markdown");return Object(l["q"])(),Object(l["d"])("div",a,[o,Object(l["h"])("p",null,[Object(l["h"])(c,{content:e.message},null,8,["content"])])])}var r=n("e6e0"),u=Object(l["i"])({name:"Help",components:{Markdown:r["a"]},props:{message:String}});u.render=s;t["a"]=u}}]);
//# sourceMappingURL=chunk-add6459e.a98ef848.js.map