import './polyfills.server.mjs';
import{a as k}from"./chunk-32QD3ZDY.mjs";import{a as m}from"./chunk-HPYNOM7U.mjs";import{a as y}from"./chunk-JPBSXBQA.mjs";import{a as x}from"./chunk-R4VZX5WR.mjs";import"./chunk-OFO74N53.mjs";import{h as C,k as v,n as S}from"./chunk-DCP47WQH.mjs";import"./chunk-AYZFNQ2F.mjs";import{Db as p,Lb as A,Ma as n,Mb as s,Na as g,W as l,Xa as h,cb as f,eb as i,ib as b,nb as u,ob as o,pb as c}from"./chunk-OOMDIMHK.mjs";import"./chunk-VVCT4QZE.mjs";var B=()=>["search-agent-or-distrebutor"],E=()=>["add-agent-or-distrebutor"];function M(t,e){t&1&&(u(0,"div",4)(1,"button",6),p(2,"\u0627\u0628\u062D\u062B \u0639\u0646 \u0648\u0643\u064A\u0644 \u0627\u0648 \u0645\u0648\u0632\u0639 \u0644\u0645\u0646\u062A\u062C\u0643"),o(),u(3,"button",7),p(4,"\u0627\u062D\u0635\u0644 \u0639\u0644\u064A \u062D\u0642 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0627\u0648 \u0627\u0644\u062A\u0648\u0632\u064A\u0639"),o()()),t&2&&(n(),i("routerLink",s(2,B)),n(2),i("routerLink",s(3,E)))}var L=(()=>{let e=class e{constructor(r){this.authService=r,this.userLoginStatus=h(!1),this.tabsArray=[{name:"\u0645\u0637\u0644\u0648\u0628 \u0648\u0643\u064A\u0644 \u0627\u0648 \u0645\u0648\u0632\u0639",link:"require-agent"},{name:"\u0648\u0643\u0644\u0627\u0621 \u0627\u0648 \u0645\u0648\u0632\u0639\u064A\u0646 \u0645\u062D\u062A\u0645\u0644\u064A\u0646",link:"optional-agent"}],this.record=[{pageName:"\u0627\u0644\u0635\u0641\u062D\u0647 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0647",router:"/home"},{pageName:"\u0627\u0644\u0648\u0643\u0644\u0627\u0621 \u0648 \u0627\u0644\u0645\u0648\u0632\u0639\u064A\u0646",router:"/agent/require-agent"}]}ngOnInit(){this.authService.UserSignIn.subscribe(r=>{r!=null?this.userLoginStatus.update(()=>!0):this.userLoginStatus.update(()=>!1)})}};e.\u0275fac=function(a){return new(a||e)(g(x))},e.\u0275cmp=l({type:e,selectors:[["app-agent"]],standalone:!0,features:[A],decls:8,vars:3,consts:[[1,"container"],[3,"record"],[1,"mt-4","d-flex","justify-content-between","align-items-center","flex-wrap"],[1,"fw-bold"],[1,"mt-4"],[3,"tabsArray"],[1,"customBtn","ms-2",3,"routerLink"],[1,"BtnNoBackGround",3,"routerLink"]],template:function(a,d){a&1&&(u(0,"div",0),c(1,"app-record",1),u(2,"div",2)(3,"h5",3),p(4,"\u0627\u0644\u0648\u0643\u0644\u0627\u0621 \u0648 \u0627\u0644\u0645\u0648\u0632\u0639\u064A\u0646"),o(),f(5,M,5,4,"div",4),o(),c(6,"app-tabs-button",5)(7,"router-outlet"),o()),a&2&&(n(),i("record",d.record),n(4),b(5,d.userLoginStatus()?5:-1),n(),i("tabsArray",d.tabsArray))},dependencies:[k,S,C,v,y],styles:[".customBtn[_ngcontent-%COMP%]{height:40px;padding:0 20px;background-color:#648dc4;border-radius:20px;border:none;color:#fff}.BtnNoBackGround[_ngcontent-%COMP%]{height:40px;padding:0 20px;background-color:transparent;border-radius:20px;border:2px solid #648dc4;color:#648dc4}"]});let t=e;return t})();var j=[{path:"",redirectTo:"",pathMatch:"full"},{path:"",component:L,children:[{path:"",redirectTo:"require-agent",pathMatch:"full"},{path:"require-agent",loadComponent:()=>import("./chunk-RYWKCRJH.mjs").then(t=>t.RequireAgentComponent)},{path:"optional-agent",loadComponent:()=>import("./chunk-QV7L5W5I.mjs").then(t=>t.OptionalAgentComponent)}]},{path:"add-agent-or-distrebutor",canActivate:[m],loadComponent:()=>import("./chunk-LOOJV77L.mjs").then(t=>t.AddAgentComponent)},{path:"search-agent-or-distrebutor",loadComponent:()=>import("./chunk-LOOJV77L.mjs").then(t=>t.AddAgentComponent)},{path:":id/agent-details",canActivate:[m],loadComponent:()=>import("./chunk-4EQGZXDS.mjs").then(t=>t.AgentDetailsComponent)}];export{j as AGENT_ROUTES};
