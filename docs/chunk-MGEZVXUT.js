import{a as pe}from"./chunk-4FCUKUDF.js";import{a as de}from"./chunk-O7Z3OZXI.js";import{a as le}from"./chunk-JKQ3DBOH.js";import{a as ue}from"./chunk-ABUVBDXR.js";import{a as se}from"./chunk-25LWQP72.js";import{a as ae}from"./chunk-WXSNHVFO.js";import{a as K,b as h,c as W,d as J,g as Y,j as H,k as Q,l as X,m as Z,n as ee,o as te,r as ne,s as ie,t as re}from"./chunk-57455PMJ.js";import{a as oe}from"./chunk-7NGZH4SF.js";import{a as G}from"./chunk-BZNRHYBN.js";import"./chunk-WXI33M2S.js";import"./chunk-B24GJN2W.js";import{d as U,f as $}from"./chunk-QKFZZ2ZG.js";import"./chunk-VAADLS33.js";import{$a as g,Ab as l,Bb as V,Cb as S,Fa as T,Ib as L,Ja as u,Ka as C,Mb as R,Ob as B,Ua as P,W as k,bb as p,db as D,ea as x,fa as v,fb as N,hc as j,ib as w,ic as z,jb as A,kb as i,lb as t,mb as m,nc as q,pb as b,ra as I,rb as _,sb as f}from"./chunk-I3BRGV73.js";import{a as ge}from"./chunk-54LM573E.js";import{e as me}from"./chunk-CWTPBX7D.js";var M=me(ge());var ce=(r,d)=>d.id;function _e(r,d){r&1&&(i(0,"span",48),l(1,"*"),t())}function fe(r,d){r&1&&(i(0,"span",48),l(1,"*"),t())}function he(r,d){r&1&&(i(0,"span",48),l(1,"*"),t())}function Ce(r,d){r&1&&(i(0,"span",48),l(1,"*"),t())}function xe(r,d){r&1&&(i(0,"span",48),l(1,"*"),t())}function ve(r,d){r&1&&(i(0,"span",48),l(1,"*"),t())}function be(r,d){r&1&&(i(0,"span",48),l(1,"*"),t())}function ye(r,d){r&1&&(i(0,"span",48),l(1,"*"),t())}function Oe(r,d){if(r&1){let s=b();i(0,"div",51)(1,"div")(2,"div",52),m(3,"img",53),t(),i(4,"div",54)(5,"button",55),_("click",function(){let o,e=x(s).index,a=f(2);return a.imageUrl.splice(e,1),a.expiration_images.splice(e,1),v(a.expiration_images.length||(o=a.agentForm.get("expiration_images"))==null?null:o.reset())}),m(6,"i",56),t()()()()}if(r&2){let s=d.$implicit;u(3),p("src",s,T)}}function Me(r,d){if(r&1&&(i(0,"div")(1,"h4"),l(2,"\u0635\u0648\u0631"),t(),i(3,"div",49),g(4,Oe,7,1,"div",50),t()()),r&2){let s=f();u(4),p("ngForOf",s.imageUrl)}}function Pe(r,d){if(r&1){let s=b();i(0,"div",43)(1,"h4"),l(2,"\u0645\u0644\u0641\u0627\u062A \u0627\u062E\u0631\u064A"),t(),i(3,"button",57),_("click",function(){x(s);let o=f();return v(o.downloadFile(o.expiration_files))}),i(4,"div",58)(5,"p")(6,"button",57),_("click",function(){let o;x(s);let e=f();return e.expiration_files=null,v((o=e.agentForm.get("expiration_files"))==null?null:o.reset())}),m(7,"i",59),t(),l(8),t()()()()}if(r&2){let s=f();u(8),S(" ",s.expiration_files==null?null:s.expiration_files.name," ")}}function we(r,d){r&1&&(i(0,"span",48),l(1,"*"),t())}function Ae(r,d){if(r&1){let s=b();i(0,"app-button-with-close-icon",60),_("click",function(){let o=x(s).$index,e=f();return v(e.removeCategoryFromlist(o))}),t()}if(r&2){let s=d.$implicit;p("addText",s.name)}}function Se(r,d){if(r&1){let s=b();i(0,"li")(1,"button",57),_("click",function(){let o=x(s).$implicit,e=f();return v(e.handleCategoryList(o))}),l(2),t()()}if(r&2){let s=d.$implicit;u(2),S(" ",s.name," ")}}function Fe(r,d){if(r&1&&(i(0,"p",46),l(1),t()),r&2){let s=f();u(),V(s.errorMassage)}}var Ke=(()=>{let d=class d{constructor(n,o,e,a,c,y,O){this._fb=o,this.CategoryService=e,this.agentService=a,this.toastr=c,this.Router=y,this.route=O,this.subs=new oe,this.category=P([]),this.alertOpen=!1,this.inValidForm=!1,this.isBrowser=P(!1),this.imageUrl=[],this.expiration_images=[],this.errorMassage="",this.pageName="",this.record=[{pageName:"\u0627\u0644\u0635\u0641\u062D\u0647 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0647",router:"/home"},{pageName:"\u0627\u0644\u0648\u0643\u0644\u0627\u0621",router:"/agent/require-agent"}],this.categorySearchKeyword="",this.isBrowser.set(q(n))}ngOnInit(){this.handleRegisterForm(),this.getCategory(),this.Router.url.includes("search")?(this.agentType="potential_agent_or_potential_distrebutor",this.record=[...this.record,{pageName:"\u0627\u062D\u0635\u0644 \u0639\u0644\u064A \u062D\u0642 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0627\u0648 \u0627\u0644\u062A\u0648\u0632\u064A\u0639",router:"/agent/search-agent-or-distrebutor"}]):(this.agentType="required_agent_or_distrebutor",this.record=[...this.record,{pageName:"\u0627\u062D\u0635\u0644 \u0639\u0644\u064A \u062D\u0642 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0627\u0648 \u0627\u0644\u062A\u0648\u0632\u064A\u0639",router:"/agent/add-agent-or-distrebutor"}])}handleRegisterForm(){this.agentForm=this._fb.group({title:["",[h.required]],desc:["",[h.required]],product_name:["",[h.required]],company_name:["",[h.required]],agent_type:["",[h.required]],expiry_date:["",[h.required]],expiration_images:[null,[h.required]],expiration_files:[null,[h.required]]})}getCategory(){this.subs.add(this.CategoryService.getCategoryList().subscribe(n=>{this.categoryList=n.data}))}categroySearch(n){this.categorySearchKeyword=n.target.value}handleCategoryList(n){this.category.update(o=>o.includes(n)?o:[...o,n])}removeCategoryFromlist(n){this.category.update(o=>(o.splice(n,1),o))}onFileSelected(n,o){let e=n.target.files[0];n.target.files.length>1?Array.from(n.target.files).forEach(a=>{this.handleFile(a,o)}):this.handleFile(e,o)}handleFile(n,o){if(n){let e=new FileReader;e.onload=a=>{o==="image"&&(this.imageUrl.length<4?(this.imageUrl=[...new Set([...this.imageUrl,a.target.result])],this.expiration_images.length>0?this.expiration_images=[...new Set([...this.expiration_images,n])]:this.expiration_images=[n]):this.toastr.error("4 \u064A\u062C\u0628 \u0627\u0644\u0627 \u064A\u0632\u064A\u062F \u0639\u062F\u062F \u0627\u0644\u0635\u0648\u0631 \u0639\u0646 ")),o==="other"&&(this.expiration_files=n)},e.readAsDataURL(n)}}downloadFile(n){let o=`${n.name}`,e=new Blob([n],{type:"text/plain"}),a=document.createElement("a"),c=URL.createObjectURL(e);a.href=c,a.download=o,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(c)}submitForm(){if(!this.expiration_images){this.inValidForm=!0,this.errorMassage="\u064A\u062C\u0628 \u0627\u0636\u0627\u0641\u0647 \u0635\u0648\u0631 ";return}if(!this.category().length){this.inValidForm=!0,this.errorMassage="\u064A\u062C\u0628 \u0645\u0644\u0621 \u062C\u0645\u064A\u0639 \u062D\u0642\u0648\u0644 \u0627\u0644\u0627\u062F\u062E\u0627\u0644 \u0648\u0627\u062E\u062A\u064A\u0627\u0631 \u062A\u062E\u0635\u0635";return}if(!this.alertOpen){M.default.fire({icon:"question",title:"\u0644\u0627\u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u062A\u0639\u062F\u064A\u0644 \u0639\u0644\u064A \u0627\u0644\u0635\u0641\u0642\u0647 \u0628\u0645\u062C\u0631\u062F \u0627\u0646\u0634\u0627\u0626\u0647\u0627  !!",showConfirmButton:!0,didClose:()=>{this.alertOpen=!0,this.submitForm()}});return}let n=new FormData;this.agentForm.valid&&this.category().length&&(this.inValidForm=!1,this.errorMassage="",n.append("title",this.agentForm.get("title")?.value),n.append("desc",this.agentForm.get("desc")?.value),n.append("company_name",this.agentForm.get("company_name")?.value),n.append("product_name",this.agentForm.get("product_name")?.value),n.append("agent_type",this.agentForm.get("agent_type")?.value),n.append("type",this.agentType),this.category().map(e=>e.id).forEach(e=>n.append("category_ids[]",JSON.stringify(e))),n.append("expiry_date",this.agentForm.get("expiry_date")?.value),this.expiration_images.forEach((e,a)=>{n.append(`agent_images[${a}]`,e)}),n.append("agent_files[]",this.expiration_files),this.subs.add(this.agentService.addAgentOrDistrebuter(n).subscribe(e=>{let a=e.message==""?"\u062A\u0645  \u0627\u0644\u0627\u0636\u0627\u0641\u0647 \u0628\u0646\u062C\u0627\u062D":e.message;M.default.fire({icon:"success",title:a,showConfirmButton:!1,timer:1500}),this.toastr.success(a),this.Router.navigate(["../"],{relativeTo:this.route})},e=>{M.default.fire({icon:"error",title:e.error.message,showConfirmButton:!1,timer:1500}),this.toastr.error(e.error.message)})))}validateDateRange(n){let o=new Date;new Date(n.target.value)>=o?this.inValidForm=!1:(this.errorMassage="\u0628\u0631\u062C\u0627\u0621 \u0627\u0639\u062F \u0627\u062F\u062E\u0627\u0644 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621",this.inValidForm=!0,this.agentForm.get("expiry_date")?.setErrors({nbDatepickerParse:{value:""}}))}ngOnDestroy(){this.subs.unsubscribe()}};d.\u0275fac=function(o){return new(o||d)(C(I),C(ne),C(ue),C(pe),C(G),C($),C(U))},d.\u0275cmp=k({type:d,selectors:[["app-add-agent"]],standalone:!0,features:[L],decls:85,vars:20,consts:[[1,"container"],[3,"ngSubmit","formGroup"],[1,"tenders"],[3,"record"],[2,"width","100%","padding-inline-end","20px"],[1,"d-md-flex","justify-content-between"],[1,"formcontainer","formWrapper"],[1,"tendersInfo","my-3"],["for",""],["class","text-danger",4,"ngIf"],["formControlName","title","type","text","name","title","placeholder"," \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0641\u0642\u0629",1,"Invalid"],[1,"tendersInfo"],["formControlName","desc","name","desc","id","desc","cols","30","placeholder"," \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644"],[1,"attachment"],[1,"m-1"],["formControlName","expiration_images","hidden","","id","expiration_images","type","file","multiple","","accept","image/png, image/gif, image/jpeg,image/webp",3,"change"],["for","expiration_images"],[1,"fa-regular","fa-image","ms-2"],["hidden","","id","expiration_files","type","file","formControlName","expiration_files",3,"change"],["for","expiration_files"],[1,"fa-solid","fa-paperclip","ms-2"],[1,"inputContainer","mt-3"],["for","company_name"],["id","company_name","type","text","placeholder"," \u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629","formControlName","company_name"],["for","product_name"],["id","product_name","type","text","placeholder"," \u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C","formControlName","product_name"],["for","expiry_date"],["id","expiry_date","type","date","placeholder"," \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621","formControlName","expiry_date",1,"text-end",3,"change"],["name","agent_type","id","","required","","formControlName","agent_type",2,"border-radius","1em 0 0 1em","padding","0 12px"],["value","","selected",""],["value","agent"],["value","distrebutor"],[1,"mt-4","w-100"],[4,"ngIf"],["class","mt-4",4,"ngIf"],[1,"verticalDivier"],[1,"horizontalDivider","my-5"],[1,"formcontainer"],[1,"search"],["type","text","placeholder","\u0628\u062D\u062B",1,"searchInput","px-5","form-control",3,"keyup"],[1,"fa-solid","fa-magnifying-glass"],[1,"mt-3"],[3,"addText"],[1,"mt-4"],[1,"list-unstyled","px-0","specializeList"],[1,"text-center"],[1,"alert","alert-danger","mt-3"],["type","submit",1,"createButton","btn",3,"disabled"],[1,"text-danger"],[1,"d-flex","justify-content-between","image-container"],["class","image mx-3",4,"ngFor","ngForOf"],[1,"image","mx-3"],[1,"media"],["alt","",3,"src"],[1,"deleteButtonCorner"],["type","button",3,"click"],[1,"fa-solid","fa-xmark"],[1,"button-no-style",3,"click"],[1,"my-3","attachFile"],[1,"fa-solid","fa-xmark",2,"cursor","pointer"],[3,"click","addText"]],template:function(o,e){if(o&1&&(i(0,"div",0)(1,"form",1),_("ngSubmit",function(){return e.submitForm()}),i(2,"div",2),m(3,"app-record",3),i(4,"div",4)(5,"h3"),l(6,"\u0627\u062D\u0635\u0644 \u0639\u0644\u064A \u062D\u0642 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0627\u0648 \u0627\u0644\u062A\u0648\u0632\u064A\u0639"),t(),i(7,"div",5)(8,"div",6)(9,"div",7)(10,"label",8),l(11,"\u0627\u062F\u062E\u0644 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0641\u0642\u0629 "),g(12,_e,2,0,"span",9),t(),m(13,"input",10),t(),i(14,"div",11)(15,"label",8),l(16,"\u0627\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 "),g(17,fe,2,0,"span",9),t(),m(18,"textarea",12),i(19,"div",13)(20,"div",14)(21,"input",15),_("change",function(c){return e.onFileSelected(c,"image")}),t(),i(22,"label",16),m(23,"i",17),l(24,"\u0627\u0636\u0641 \u0635\u0648\u0631 "),g(25,he,2,0,"span",9),t()(),i(26,"div",14)(27,"input",18),_("change",function(c){return e.onFileSelected(c,"other")}),t(),i(28,"label",19),m(29,"i",20),l(30,"\u0627\u0636\u0641 \u0645\u0644\u0641\u0627\u062A "),g(31,Ce,2,0,"span",9),t()()()(),i(32,"div",21)(33,"div")(34,"label",22),l(35,"\u0627\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629"),g(36,xe,2,0,"span",9),t(),m(37,"input",23),t(),i(38,"div")(39,"label",24),l(40,"\u0627\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0646\u062A\u062C"),g(41,ve,2,0,"span",9),t(),m(42,"input",25),t()(),i(43,"div",21)(44,"div")(45,"label",26),l(46,"\u0627\u062F\u062E\u0644 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621 "),g(47,be,2,0,"span",9),t(),i(48,"input",27),_("change",function(c){return e.validateDateRange(c)}),t()(),i(49,"div")(50,"label",24),l(51,"\u0627\u062E\u062A\u0631 \u0646\u0648\u0639 \u0627\u0644\u0635\u0641\u0642\u0629"),g(52,ye,2,0,"span",9),t(),i(53,"select",28)(54,"option",29),l(55,"\u0627\u062E\u062A\u0631 \u0646\u0648\u0639 \u0627\u0644\u0635\u0641\u0642\u0629"),t(),i(56,"option",30),l(57,"\u0648\u0643\u0627\u0644\u0647"),t(),i(58,"option",31),l(59,"\u062A\u0648\u0632\u064A\u0639"),t()()()(),i(60,"div",32),g(61,Me,5,1,"div",33)(62,Pe,9,1,"div",34),t(),m(63,"div"),t(),m(64,"div",35)(65,"div",36),i(66,"div",37)(67,"h3"),l(68,"\u0627\u0644\u062A\u062E\u0635\u0635"),g(69,we,2,0,"span",9),t(),i(70,"div",38)(71,"input",39),_("keyup",function(c){return e.categroySearch(c)}),t(),m(72,"i",40),t(),i(73,"div",41),w(74,Ae,1,1,"app-button-with-close-icon",42,ce),t(),i(76,"div",43)(77,"ul",44),w(78,Se,3,1,"li",null,ce),R(80,"categorySearch"),t()()()(),i(81,"div",45),g(82,Fe,2,1,"p",46),i(83,"button",47),l(84,"\u0627\u0636\u0627\u0641\u0629"),t()()()()()()),o&2){let a,c,y,O,F,E;u(),p("formGroup",e.agentForm),u(2),p("record",e.record),u(9),p("ngIf",(a=e.agentForm.get("title"))==null?null:a.errors),u(5),p("ngIf",(c=e.agentForm.get("desc"))==null?null:c.errors),u(8),p("ngIf",!e.expiration_images.length),u(6),p("ngIf",!e.expiration_files),u(5),p("ngIf",(y=e.agentForm.get("company_name"))==null?null:y.errors),u(5),p("ngIf",(O=e.agentForm.get("product_name"))==null?null:O.errors),u(6),p("ngIf",(F=e.agentForm.get("expiry_date"))==null?null:F.errors),u(5),p("ngIf",(E=e.agentForm.get("product_name"))==null?null:E.errors),u(9),p("ngIf",e.imageUrl.length),u(),p("ngIf",e.expiration_files),u(7),p("ngIf",!e.category().length),u(5),A(e.category()),u(4),A(B(80,17,e.categoryList,e.categorySearchKeyword)),u(4),N(82,e.inValidForm?82:-1),u(),D("isDisabled",!e.agentForm.valid),p("disabled",!e.agentForm.valid)}},dependencies:[le,re,Y,Z,ee,K,X,W,J,te,H,Q,ie,z,j,ae,de,se],styles:[".tenders[_ngcontent-%COMP%]{margin-top:.8em;padding:50px 0}.formcontainer[_ngcontent-%COMP%]{width:46%}.tendersInfo[_ngcontent-%COMP%]{width:100%;height:fit-content;position:relative}.tendersInfo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .tendersInfo[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:2px solid #e8e8e8;width:100%;height:3em;border-radius:1em 1em 0 0;font-size:1em;padding:10px;outline:none}.tendersInfo[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border:2px solid #e8e8e8;width:100%;border-radius:0 0 1em 1em;font-size:1em;height:200px;padding:10px;resize:none;outline:none}.tendersInfo[_ngcontent-%COMP%]   .attachment[_ngcontent-%COMP%]{position:absolute;display:flex;flex-wrap:wrap;justify-content:flex-end;bottom:16px;left:10px;right:10px}.tendersInfo[_ngcontent-%COMP%]   .attachment[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background-color:#efefef;padding:5px 10px;border-radius:10px}.tendersInfo[_ngcontent-%COMP%]   .attachment[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0;white-space:nowrap;border:none}@media (max-width: 992px){.tendersInfo[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{height:200px}}.inputContainer[_ngcontent-%COMP%]{width:100%;display:flex}.inputContainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .inputContainer[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:2px solid #e8e8e8;width:100%;height:3em;font-size:1em;padding:12px;outline:none;display:block}.inputContainer[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#0e233d;margin-inline-start:10px}.inputContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type{width:50%}.inputContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type   input[_ngcontent-%COMP%]{border-radius:0 1em 1em 0}.inputContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2){width:50%}.inputContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2)   input[_ngcontent-%COMP%]{border-right:none;border-radius:1em 0 0 1em}@media (max-width: 1000px){.inputContainer[_ngcontent-%COMP%]{display:block}.inputContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type{width:100%}.inputContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type   input[_ngcontent-%COMP%]{border-radius:1em;margin:10px 0}.inputContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2){width:100%}.inputContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2)   input[_ngcontent-%COMP%]{border-radius:1em;margin:10px 0}}.search[_ngcontent-%COMP%]{position:relative;height:fit-content}.search[_ngcontent-%COMP%]   .searchInput[_ngcontent-%COMP%]{background-color:#efefef}.search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;right:20px;top:50%;transform:translateY(-50%)}.specializeList[_ngcontent-%COMP%]{height:500px;overflow-y:scroll}.specializeList[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:15px 0;cursor:pointer}.specializeList[_ngcontent-%COMP%]::-webkit-scrollbar{display:block;width:4px}.specializeList[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#919191;border-radius:10px;overflow:hidden}.specializeList[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#0e233d!important;border-radius:10px}.createButton[_ngcontent-%COMP%]{width:40%;background-color:#648dc4;height:50px;border-radius:25px;border:none;color:#fff;margin-top:40px}.horizontalDivider[_ngcontent-%COMP%]{display:none}@media (max-width: 768px){.formcontainer[_ngcontent-%COMP%]{width:100%;margin:0 20px}.horizontalDivider[_ngcontent-%COMP%]{display:block}.verticalDivier[_ngcontent-%COMP%]{display:none}}.attachFile[_ngcontent-%COMP%]{background-color:#efefef;padding:5px 10px;border-radius:10px}.attachFile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;text-align:center}.image[_ngcontent-%COMP%]{width:200px;height:220px;display:flex;justify-content:center;align-items:center;border:1px solid #efefef;padding:5px;border-radius:10px;position:relative}.image[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]{width:150px;height:150px;overflow:hidden;border-radius:10px}.image[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.image[_ngcontent-%COMP%]   .deleteButton[_ngcontent-%COMP%]{margin:3px auto;width:fit-content}.image[_ngcontent-%COMP%]   .deleteButton[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100px;border-radius:10px;border:none;color:#fff;background-color:#648dc4;padding:5px 0}.image[_ngcontent-%COMP%]   .deleteButtonCorner[_ngcontent-%COMP%]{position:absolute;top:-14px;right:-14px}.image[_ngcontent-%COMP%]   .deleteButtonCorner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:50%;width:30px;height:30px;background-color:#648dc4;border:none;color:#fff}.attachFile[_ngcontent-%COMP%]{width:fit-content;background-color:#efefef;padding:5px 10px;border-radius:10px}.attachFile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;text-align:center;cursor:pointer}.attachFile[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{color:#648dc4}.deletIcon[_ngcontent-%COMP%]{width:25px;height:25px;margin-bottom:10px;display:flex;justify-content:center;align-items:center;border-radius:50%;cursor:pointer;color:#fff;background-color:#919191}.image-container[_ngcontent-%COMP%]{padding:1em;overflow-x:scroll}.image-container[_ngcontent-%COMP%]::-webkit-scrollbar{display:block;height:4px;cursor:pointer}.image-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#919191;border-radius:10px;overflow:hidden}.image-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#0e233d!important;border-radius:10px}"]});let r=d;return r})();export{Ke as AddAgentComponent};
