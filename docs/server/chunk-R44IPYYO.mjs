import './polyfills.server.mjs';
import"./chunk-DPLNUI4A.mjs";import{a as le}from"./chunk-XP7ROEPP.mjs";import{a as oe}from"./chunk-QSG2PRNO.mjs";import{a as ne}from"./chunk-73AZMENN.mjs";import{a as ie}from"./chunk-PJWRT4M7.mjs";import{a as re}from"./chunk-ECCC6GWL.mjs";import{a as G,b as y,c as W,d as K,g as J,h as Y,j as H,k as Q,r as X,s as Z,t as ee}from"./chunk-TQFWEZNP.mjs";import{a as te}from"./chunk-ZNJQCMII.mjs";import{a as q}from"./chunk-XAMK3HJX.mjs";import"./chunk-OFO74N53.mjs";import{g as z,j as $}from"./chunk-DCP47WQH.mjs";import"./chunk-AYZFNQ2F.mjs";import"./chunk-GTSSCL6B.mjs";import{Bc as N,Db as m,Eb as V,Fb as A,Ia as w,Lb as B,Ma as l,Na as C,Pb as L,Rb as U,W as D,Xa as O,cb as p,ea as h,eb as s,fa as x,ib as k,lb as M,mb as P,nb as a,ob as n,pb as _,ra as E,sb as v,ub as f,uc as j,vb as u,vc as R}from"./chunk-OOMDIMHK.mjs";import{g as de}from"./chunk-VVCT4QZE.mjs";var b=de(le());var ae=(e,d)=>d.id;function se(e,d){e&1&&(a(0,"span",42),m(1,"*"),n())}function ce(e,d){e&1&&(a(0,"span",42),m(1,"*"),n())}function me(e,d){e&1&&(a(0,"span",42),m(1,"*"),n())}function pe(e,d){e&1&&(a(0,"span",42),m(1,"*"),n())}function ue(e,d){e&1&&(a(0,"span",42),m(1,"*"),n())}function _e(e,d){e&1&&(a(0,"span",42),m(1,"*"),n())}function fe(e,d){e&1&&(a(0,"span",42),m(1,"*"),n())}function ge(e,d){if(e&1){let o=v();a(0,"div",43)(1,"input",44),f("change",function(i){h(o);let r=u();return x(r.onFileSelected(i,"image"))}),n(),a(2,"label",45),_(3,"i",46),m(4,"\u0627\u0636\u0641 \u0635\u0648\u0631 "),p(5,fe,2,0,"span",8),n()()}if(e&2){let o=u();l(5),s("ngIf",!o.tender_images)}}function he(e,d){if(e&1){let o=v();a(0,"div",53)(1,"button",54),f("click",function(){h(o);let i=u().index,r=u(2);return r.imageUrl.splice(i,1),x(r.tender_images.splice(i,1))}),_(2,"i",55),n()()}}function xe(e,d){if(e&1&&(a(0,"div",49)(1,"div")(2,"div",50),_(3,"img",51),n(),p(4,he,3,0,"div",52),n()()),e&2){let o=d.$implicit;l(3),s("src",o.media||o,w),l(),s("ngIf",!1)}}function ve(e,d){if(e&1&&(a(0,"div")(1,"h4"),m(2,"\u0635\u0648\u0631 \u0627\u0644\u0645\u0646\u0627\u0642\u0635\u0647"),n(),a(3,"div",47),p(4,xe,5,2,"div",48),n()()),e&2){let o=u();l(4),s("ngForOf",o.imageUrl)}}function Ce(e,d){e&1&&_(0,"img",66)}function ye(e,d){e&1&&_(0,"img",67)}function be(e,d){e&1&&_(0,"img",68)}function Fe(e,d){e&1&&(a(0,"label",69),m(1,"\u062A\u0628\u062F\u064A\u0644"),n())}function Te(e,d){if(e&1){let o=v();a(0,"div",58)(1,"div")(2,"div",59),p(3,Ce,1,0,"img",60)(4,ye,1,0,"img",61)(5,be,1,0,"img",62),n(),a(6,"div",63)(7,"div",43)(8,"input",64),f("change",function(i){h(o);let r=u(2);return x(r.onFileSelected(i,"file"))}),n()(),a(9,"button",54),f("click",function(){h(o);let i=u(2);return x(i.navigateToDocument(i.specifications_file))}),m(10,"\u0639\u0631\u0636"),n(),p(11,Fe,2,0,"label",65),n()()()}if(e&2){let o=u(2);l(3),s("ngIf",o.specifications_fileType==="docx"),l(),s("ngIf",o.specifications_fileType==="pdf"),l(),s("ngIf",o.specifications_fileType==="txt"),l(6),s("ngIf",!1)}}function we(e,d){if(e&1&&(a(0,"div",56)(1,"h4"),m(2,"\u0645\u0644\u0641 \u0627\u0644\u0645\u0646\u0627\u0642\u0635\u0647"),n(),p(3,Te,12,4,"div",57),n()),e&2){let o=u();l(3),s("ngIf",o.specifications_file)}}function Oe(e,d){e&1&&_(0,"img",66)}function Me(e,d){e&1&&_(0,"img",67)}function Pe(e,d){e&1&&_(0,"img",68)}function Se(e,d){e&1&&(a(0,"label",72),m(1,"\u062A\u0628\u062F\u064A\u0644"),n())}function Ie(e,d){if(e&1){let o=v();a(0,"div",58)(1,"div")(2,"div",59),p(3,Oe,1,0,"img",60)(4,Me,1,0,"img",61)(5,Pe,1,0,"img",62),n(),a(6,"div",63)(7,"div",43)(8,"input",70),f("change",function(i){h(o);let r=u(2);return x(r.onFileSelected(i,"other"))}),n()(),a(9,"button",54),f("click",function(){h(o);let i=u(2);return x(i.navigateToDocument(i.otherfile))}),m(10,"\u0639\u0631\u0636"),n(),p(11,Se,2,0,"label",71),n()()()}if(e&2){let o=u(2);l(3),s("ngIf",o.otherfileType==="docx"),l(),s("ngIf",o.otherfileType==="pdf"),l(),s("ngIf",o.otherfileType==="txt"),l(6),s("ngIf",!1)}}function De(e,d){if(e&1&&(a(0,"div",56)(1,"h4"),m(2,"\u0645\u0644\u0641\u0627\u062A \u0627\u062E\u0631\u064A"),n(),p(3,Ie,12,4,"div",57),n()),e&2){let o=u();l(3),s("ngIf",o.otherfile)}}function Ee(e,d){e&1&&(a(0,"span",42),m(1,"*"),n())}function ke(e,d){if(e&1&&(a(0,"div",49)(1,"div")(2,"div",50),_(3,"img",51),n()()()),e&2){let o=d.$implicit;l(3),s("src",o.media||o,w)}}function Ve(e,d){if(e&1&&(a(0,"div")(1,"div",47),p(2,ke,4,1,"div",48),n()()),e&2){let o=u(2);l(2),s("ngForOf",o.OfferImageUrl)}}function Ae(e,d){e&1&&_(0,"img",66)}function Be(e,d){e&1&&_(0,"img",67)}function Le(e,d){e&1&&_(0,"img",68)}function Ue(e,d){if(e&1){let o=v();a(0,"div",58)(1,"div")(2,"div",59),p(3,Ae,1,0,"img",60)(4,Be,1,0,"img",61)(5,Le,1,0,"img",62),n(),a(6,"div",63),_(7,"div",43),a(8,"button",54),f("click",function(){h(o);let i=u(3);return x(i.navigateToDocument(i.offerFile))}),m(9,"\u0639\u0631\u0636"),n()()()()}if(e&2){let o=u(3);l(3),s("ngIf",o.offerFile_fileType==="docx"),l(),s("ngIf",o.offerFile_fileType==="pdf"),l(),s("ngIf",o.offerFile_fileType==="txt")}}function je(e,d){if(e&1&&(a(0,"div",37),p(1,Ue,10,3,"div",57),n()),e&2){let o=u(2);l(),s("ngIf",o.offerFile)}}function Re(e,d){if(e&1){let o=v();a(0,"div",24)(1,"h3"),m(2,"\u0639\u0631\u0636\u064A"),n(),a(3,"form",73),f("ngSubmit",function(){h(o);let i=u();return x(i.offerFormSubmit())}),a(4,"div",19)(5,"label",7),m(6,"\u0627\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 "),p(7,Ee,2,0,"span",8),n(),_(8,"textarea",20)(9,"div",21),n(),a(10,"div",24),p(11,Ve,3,1,"div",25)(12,je,2,1,"div",74),n(),a(13,"button",75),m(14,"\u062D\u0641\u0638"),n()()()}if(e&2){let o,t,i=u();l(3),s("formGroup",i.offerForm),l(4),s("ngIf",(o=i.offerForm.get("desc"))==null?null:o.errors),l(4),s("ngIf",i.OfferImageUrl.length),l(),s("ngIf",i.offerFile),l(),s("disabled",!i.offerImageChange&&!i.offerFileChange&&!((t=i.offerForm.get("desc"))!=null&&t.touched))}}function Ne(e,d){e&1&&(a(0,"span",42),m(1,"*"),n())}function ze(e,d){if(e&1){let o=v();a(0,"app-button-with-close-icon",76),f("click",function(){let i=h(o).$index,r=u();return x("")}),n()}if(e&2){let o=d.$implicit;s("addText",o.name)}}function $e(e,d){if(e&1){let o=v();a(0,"li")(1,"button",77),f("click",function(){let i=h(o).$implicit,r=u();return x("")}),m(2),n()()}if(e&2){let o=d.$implicit;l(2),A(" ",o.name," ")}}function qe(e,d){if(e&1&&(a(0,"p",40),m(1),n()),e&2){let o=u();l(),V(o.errorMassage)}}function Ge(e,d){if(e&1&&(a(0,"button",75),m(1,"\u062D\u0641\u0638"),n()),e&2){let o=u();s("disabled",!o.tendersForm.valid)}}var lt=(()=>{let d=class d{constructor(t,i,r,c,g,F,T){this._fb=i,this.CategoryService=r,this.TendersService=c,this.toastr=g,this.route=F,this.router=T,this.subs=new te,this.category=O([]),this.inValidForm=!1,this.isBrowser=O(!1),this.imageUrl=[],this.errorMassage="",this.specifications_fileType="",this.otherfileType="",this.myTender=!1,this.categorySearchKeyword="",this.OfferImageUrl=[],this.offerFile_fileType="",this.offerImageChange=!1,this.offerFileChange=!1,this.isBrowser.set(N(t))}ngOnInit(){this.tenderId=this.route.snapshot.parent?.params.id,this.tenderId&&(this.handleRegisterForm(),this.getTenderDetails()),this.handleRegisterForm(),this.getCategory(),this.handleForm()}handleRegisterForm(){this.tendersForm=this._fb.group({title:["",[y.required]],desc:["",[y.required]],tender_specifications_value:["",[y.required]],insurance_value:["",[y.required]],company_name:["",[y.required]],expiry_date:["",[y.required]]})}handleForm(){this.offerForm=this._fb.group({desc:["",[y.required]]})}getTenderDetails(){this.TendersService.getTenderDetails(this.tenderId).subscribe(t=>{this.myTender=t.data.is_my_tender,this.TendersService.myTender.next(t.data.is_my_tender),this.tendersForm.get("title")?.setValue(t.data.title),this.tendersForm.get("desc")?.setValue(t.data.desc),this.tendersForm.get("tender_specifications_value")?.setValue(t.data.tender_specifications_value),this.tendersForm.get("insurance_value")?.setValue(t.data.insurance_value),this.tendersForm.get("company_name")?.setValue(t.data.company_name),this.tendersForm.get("expiry_date")?.setValue(t.data.expiry_date),this.tendersForm.get("title")?.disable(),this.tendersForm.get("desc")?.disable(),this.tendersForm.get("tender_specifications_value")?.disable(),this.tendersForm.get("insurance_value")?.disable(),this.tendersForm.get("company_name")?.disable(),this.tendersForm.get("expiry_date")?.disable(),t.data.added_offer&&(this.myOffer=t.data.my_tender_offer,this.offerForm.get("desc")?.setValue(t.data.my_tender_offer.desc),this.OfferImageUrl=t.data.my_tender_offer.images,this.offerFile=t.data.my_tender_offer.files[0].media,this.offerFile_fileType=this.offerFile?.includes("docx")?"docx":this.offerFile?.includes("pdf")?"pdf":"txt",this.offerForm.get("desc")?.disable()),this.imageUrl=t.data.tender_images,this.specifications_file=t.data.tender_specifications_file.media,this.specifications_fileType=this.specifications_file?.includes("docx")?"docx":this.specifications_file?.includes("pdf")?"pdf":"txt",this.otherfile=t.data.tender_other_files[0].media,this.otherfileType=this.otherfile?.includes("docx")?"docx":this.otherfile?.includes("pdf")?"pdf":"txt",this.category.update(i=>[...i,...t.data.categories])})}getCategory(){this.subs.add(this.CategoryService.getCategoryList().subscribe(t=>{this.categoryList=t.data}))}categroySearch(t){this.categorySearchKeyword=t.target.value}handleCategoryList(t){this.category.update(i=>i.includes(t)?i:[...i,t])}removeCategoryFromlist(t){this.category.update(i=>(i.splice(t,1),i))}navigateToDocument(t){if(typeof t=="string"){window.open(t,"_blank");return}let i=t,r=new FileReader;r.onload=()=>{let c=window.open();c?(c.document.write("<html><body>"),c.document.write('<iframe src="'+r.result+'" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>'),c.document.write("</body></html>")):alert("Please allow popups for this website.")},r.readAsDataURL(i)}onFileSelected(t,i){let r=t.target.files[0];t.target.files.length>1?Array.from(t.target.files).forEach(c=>{this.handleFile(c,i)}):this.handleFile(r,i)}handleFile(t,i){if(t){let r=new FileReader;r.onload=c=>{i==="image"&&(this.imageUrl=[...new Set([...this.imageUrl,c.target.result])],this.tender_images>0?this.tender_images=[...new Set([...this.tender_images,t])]:this.tender_images=[t]),i==="Offerimage"&&(this.OfferImageUrl=[...new Set([...this.OfferImageUrl,c.target.result])],this.offer_images>0?this.offer_images=[...new Set([...this.tender_images,t])]:this.offer_images=[t],this.offerImageChange=!0),i==="file"&&(this.tender_specifications_file=t,this.specifications_file=t,this.specifications_fileType=t.name?.includes("docx")?"docx":t.name?.includes("pdf")?"pdf":"txt"),i==="Offerfile"&&(this.offer_File=t,this.offerFile=t,this.offerFile_fileType=t.name?.includes("docx")?"docx":t.name?.includes("pdf")?"pdf":"txt",this.offerFileChange=!0),i==="other"&&(this.tender_other_files=t,this.otherfileType=t.name?.includes("docx")?"docx":t.name?.includes("pdf")?"pdf":"txt",this.otherfile=t)},r.readAsDataURL(t)}}downloadFile(t){let i=`${t.name}`,r=new Blob([t],{type:"text/plain"}),c=document.createElement("a"),g=URL.createObjectURL(r);c.href=g,c.download=i,document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(g)}convertPdfToBase64(t){return new Promise((i,r)=>{let c=new FileReader;c.readAsDataURL(t),c.onload=()=>i(c.result),c.onerror=g=>r(g)})}submitForm(){if(this.inValidForm=!0,!this.category().length){this.errorMassage="\u064A\u062C\u0628 \u0645\u0644\u0621 \u062C\u0645\u064A\u0639 \u062D\u0642\u0648\u0644 \u0627\u0644\u0627\u062F\u062E\u0627\u0644 \u0648\u0627\u062E\u062A\u064A\u0627\u0631 \u062A\u062E\u0635\u0635";return}let t=new FormData;this.tendersForm.valid&&this.category().length&&(this.inValidForm=!1,this.errorMassage="",t.append("title",this.tendersForm.get("title")?.value),t.append("desc",this.tendersForm.get("desc")?.value),t.append("tender_specifications_value",this.tendersForm.get("tender_specifications_value")?.value),t.append("insurance_value",this.tendersForm.get("insurance_value")?.value),t.append("company_name",this.tendersForm.get("company_name")?.value),t.append("expiry_date",this.tendersForm.get("expiry_date")?.value),this.category().map(r=>r.id).forEach(r=>t.append("category_ids[]",JSON.stringify(r))),this.tender_images&&this.tender_images.forEach((r,c)=>{t.append(`tender_images[${c}]`,r)}),this.tender_specifications_file&&t.append("tender_specifications_file",this.tender_specifications_file),this.tender_other_files&&t.append("tender_other_files[]",this.tender_other_files),this.subs.add(this.TendersService.updateTenders(t,this.tenderId).subscribe(r=>{let c=r.message==""?"\u062A\u0645  \u0627\u0644\u0627\u0636\u0627\u0641\u0647 \u0628\u0646\u062C\u0627\u062D":r.message;b.default.fire({icon:"success",title:c,showConfirmButton:!1,timer:1500}),this.toastr.success(c),this.router.navigate(["/"])},r=>{b.default.fire({icon:"error",title:r.error.message,showConfirmButton:!1,timer:1500}),this.toastr.error(r.error.message)})))}offerFormSubmit(){if(this.offerForm.valid){let t=new FormData;t.append("desc",this.offerForm.get("desc")?.value),this.offer_images&&this.offer_images.forEach((i,r)=>{t.append(`images[${r}]`,i)}),this.offer_File&&t.append("files[]",this.offer_File),this.subs.add(this.TendersService.updateOffer(t,this.tenderId,this.myOffer.id).subscribe(i=>{let r=i.message==""?"\u062A\u0645  \u0627\u0644\u0627\u0636\u0627\u0641\u0647 \u0628\u0646\u062C\u0627\u062D":i.message;this.toastr.success(r),b.default.fire({icon:"success",title:r,showConfirmButton:!1,timer:1500}),this.router.navigate(["/"])},i=>{b.default.fire({icon:"error",title:i.error.message,showConfirmButton:!1,timer:1500}),this.toastr.error(i)}))}}validateDateRange(t){let i=new Date;new Date(t.target.value)>=i?this.inValidForm=!1:(this.errorMassage="\u0628\u0631\u062C\u0627\u0621 \u0627\u0639\u062F \u0627\u062F\u062E\u0627\u0644 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621",this.inValidForm=!0,this.tendersForm.get("expiry_date")?.setErrors({nbDatepickerParse:{value:""}}))}ngOnDestroy(){this.subs.unsubscribe()}};d.\u0275fac=function(i){return new(i||d)(C(E),C(X),C(re),C(oe),C(q),C(z),C($))},d.\u0275cmp=D({type:d,selectors:[["app-tender-detail-form"]],standalone:!0,features:[B],decls:67,vars:18,consts:[[1,"container"],[3,"ngSubmit","formGroup"],[1,"tenders"],[2,"width","100%","padding-inline-end","20px"],[1,"d-md-flex","justify-content-between"],[1,"formcontainer","formWrapper"],[1,"tendersInfo","my-3"],["for",""],["class","text-danger",4,"ngIf"],["formControlName","title","type","text","name","title","placeholder","\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0641\u0642\u0629",1,"Invalid"],[1,"inputContainer","mt-3"],["for","company_name"],["id","company_name","type","text","placeholder","\u0642\u064A\u0645\u0629 \u0627\u0644\u062A\u0623\u0645\u064A\u0646","formControlName","company_name"],["for","expiry_date"],["id","expiry_date","type","date","placeholder","\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621","formControlName","expiry_date",1,"text-end",3,"change"],["for","tender_specifications_value"],["id","tender_specifications_value","type","number","placeholder","\u0642\u064A\u0645\u0629 \u0643\u0631\u0627\u0633\u0629 \u0627\u0644\u0634\u0631\u0648\u0637","formControlName","tender_specifications_value"],["for","insurance_value"],["id","insurance_value","type","number","placeholder","\u0642\u064A\u0645\u0629 \u0627\u0644\u062A\u0623\u0645\u064A\u0646","formControlName","insurance_value"],[1,"tendersInfo","mt-3"],["formControlName","desc","name","desc","id","desc","cols","30","placeholder","\u0627\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644"],[1,"attachment"],["class","m-1",4,"ngIf"],[1,"attachmentFiles","w-100","mt-5"],[1,"mt-4","w-100"],[4,"ngIf"],[1,"d-flex","mt-4"],["class","mx-3",4,"ngIf"],["class","mt-4 w-100",4,"ngIf"],[1,"verticalDivier"],[1,"horizontalDivider","my-5"],[1,"formcontainer"],[1,"search"],["type","text","placeholder","\u0628\u062D\u062B",1,"searchInput","px-5","form-control",3,"keyup"],[1,"fa-solid","fa-magnifying-glass"],[1,"mt-3"],[3,"addText"],[1,"mt-4"],[1,"list-unstyled","px-0","specializeList"],[1,"text-center"],[1,"alert","alert-danger","mt-3"],["class","createButton btn","type","submit",3,"disabled",4,"ngIf"],[1,"text-danger"],[1,"m-1"],["hidden","","id","tender_images","type","file","multiple","","accept","image/png, image/gif, image/jpeg,image/webp",3,"change"],["for","tender_images"],[1,"fa-regular","fa-image","ms-2"],[1,"d-flex","justify-content-between","image-container"],["class","image mx-3",4,"ngFor","ngForOf"],[1,"image","mx-3"],[1,"media"],["alt","",3,"src"],["class","deleteButtonCorner",4,"ngIf"],[1,"deleteButtonCorner"],["type","button",3,"click"],[1,"fa-solid","fa-xmark"],[1,"mx-3"],["class","files",4,"ngIf"],[1,"files"],[1,"fileType"],["src","./assets/image/word.svg","alt","",4,"ngIf"],["src","./assets/image/pdf.png","alt","",4,"ngIf"],["src","./assets/image/txt.png","alt","",4,"ngIf"],[1,"buttons"],["hidden","","id","specifications_file","type","file","accept",".xlsx,.doc, .docx,.txt,.pdf",3,"change"],["for","specifications_file",4,"ngIf"],["src","./assets/image/word.svg","alt",""],["src","./assets/image/pdf.png","alt",""],["src","./assets/image/txt.png","alt",""],["for","specifications_file"],["hidden","","id","tender_other_files","type","file","accept",".xlsx,.doc, .docx,.txt,.pdf",3,"change"],["for","tender_other_files",4,"ngIf"],["for","tender_other_files"],["action","",3,"ngSubmit","formGroup"],["class","mt-4",4,"ngIf"],["type","submit",1,"createButton","btn",3,"disabled"],[3,"click","addText"],[1,"button-no-style",3,"click"]],template:function(i,r){if(i&1&&(a(0,"div",0)(1,"form",1),f("ngSubmit",function(){return r.submitForm()}),a(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"label",7),m(8,"\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0641\u0642\u0629"),p(9,se,2,0,"span",8),n(),_(10,"input",9),n(),a(11,"div",10)(12,"div")(13,"label",11),m(14,"\u0627\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629 "),p(15,ce,2,0,"span",8),n(),_(16,"input",12),n(),a(17,"div")(18,"label",13),m(19,"\u0627\u062F\u062E\u0644 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621 "),p(20,me,2,0,"span",8),n(),a(21,"input",14),f("change",function(g){return r.validateDateRange(g)}),n()()(),a(22,"div",10)(23,"div")(24,"label",15),m(25,"\u0627\u062F\u062E\u0644 \u0642\u064A\u0645\u0629 \u0643\u0631\u0627\u0633\u0629 \u0627\u0644\u0634\u0631\u0648\u0637"),p(26,pe,2,0,"span",8),n(),_(27,"input",16),n(),a(28,"div")(29,"label",17),m(30,"\u0627\u062F\u062E\u0644 \u0642\u064A\u0645\u0629 \u0627\u0644\u062A\u0623\u0645\u064A\u0646"),p(31,ue,2,0,"span",8),n(),_(32,"input",18),n()(),a(33,"div",19)(34,"label",7),m(35,"\u0627\u062F\u062E\u0644 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 "),p(36,_e,2,0,"span",8),n(),_(37,"textarea",20),a(38,"div",21),p(39,ge,6,1,"div",22),n()(),a(40,"div",23)(41,"div",24),p(42,ve,5,1,"div",25),a(43,"div",26),p(44,we,4,1,"div",27)(45,De,4,1,"div",27),n()()(),p(46,Re,15,5,"div",28),n(),_(47,"div",29)(48,"div",30),a(49,"div",31)(50,"h3"),m(51,"\u0627\u0644\u062A\u062E\u0635\u0635"),p(52,Ne,2,0,"span",8),n(),a(53,"div",32)(54,"input",33),f("keyup",function(g){return r.categroySearch(g)}),n(),_(55,"i",34),n(),a(56,"div",35),M(57,ze,1,1,"app-button-with-close-icon",36,ae),n(),a(59,"div",37)(60,"ul",38),M(61,$e,3,1,"li",null,ae),L(63,"categorySearch"),n()()()(),a(64,"div",39),p(65,qe,2,1,"p",40)(66,Ge,2,1,"button",41),n()()()()()),i&2){let c,g,F,T,S,I;l(),s("formGroup",r.tendersForm),l(8),s("ngIf",(c=r.tendersForm.get("title"))==null?null:c.errors),l(6),s("ngIf",(g=r.tendersForm.get("company_name"))==null?null:g.errors),l(5),s("ngIf",(F=r.tendersForm.get("expiry_date"))==null?null:F.errors),l(6),s("ngIf",(T=r.tendersForm.get("tender_specifications_value"))==null?null:T.errors),l(5),s("ngIf",(S=r.tendersForm.get("insurance_value"))==null?null:S.errors),l(5),s("ngIf",(I=r.tendersForm.get("desc"))==null?null:I.errors),l(3),s("ngIf",!1),l(3),s("ngIf",r.imageUrl.length),l(2),s("ngIf",r.specifications_file),l(),s("ngIf",r.otherfile),l(),s("ngIf",!r.myTender),l(6),s("ngIf",!r.category().length),l(5),P(r.category()),l(4),P(U(63,15,r.categoryList,r.categorySearchKeyword)),l(4),k(65,r.inValidForm?65:-1),l(),s("ngIf",!1)}},dependencies:[ie,ee,J,G,Y,W,K,H,Q,Z,R,j,ne],styles:[".tenders[_ngcontent-%COMP%]{padding:25px 0}.formWrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap}.formcontainer[_ngcontent-%COMP%]{width:46%}.tendersInfo[_ngcontent-%COMP%]{width:100%;position:relative}.tendersInfo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:2px solid #e8e8e8;width:100%;height:3em;border-radius:1em 1em 0 0;font-size:1em;padding:10px;outline:none}.tendersInfo[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border:2px solid #e8e8e8;width:100%;border-radius:0 0 1em 1em;font-size:1em;height:150px;padding:10px;resize:none;outline:none}.tendersInfo[_ngcontent-%COMP%]   .attachment[_ngcontent-%COMP%]{position:absolute;display:flex;flex-wrap:wrap;justify-content:flex-end;bottom:16px;left:10px;right:10px}.tendersInfo[_ngcontent-%COMP%]   .attachment[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background-color:#efefef;padding:5px 10px;border-radius:10px}.tendersInfo[_ngcontent-%COMP%]   .attachment[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0;white-space:nowrap;border:none}@media (max-width: 992px){.tendersInfo[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{height:200px}}.inputContainer[_ngcontent-%COMP%]{width:100%;display:flex}.inputContainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:2px solid #e8e8e8;width:100%;height:3em;font-size:1em;padding:12px;outline:none;display:block}.inputContainer[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#0e233d;margin-inline-start:10px}.inputContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type{width:50%}.inputContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type   input[_ngcontent-%COMP%]{border-radius:0 1em 1em 0}.inputContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2){width:50%}.inputContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2)   input[_ngcontent-%COMP%]{border-right:none;border-radius:1em 0 0 1em}@media (max-width: 1000px){.inputContainer[_ngcontent-%COMP%]{display:block}.inputContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type{width:100%}.inputContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type   input[_ngcontent-%COMP%]{border-radius:1em;margin:10px 0}.inputContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2){width:100%}.inputContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2)   input[_ngcontent-%COMP%]{border-radius:1em;margin:10px 0}}.search[_ngcontent-%COMP%]{position:relative;height:fit-content}.search[_ngcontent-%COMP%]   .searchInput[_ngcontent-%COMP%]{background-color:#efefef}.search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;right:20px;top:50%;transform:translateY(-50%)}.specializeList[_ngcontent-%COMP%]{height:500px;overflow-y:scroll}.specializeList[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:15px 0;cursor:pointer}.specializeList[_ngcontent-%COMP%]::-webkit-scrollbar{display:block;width:4px}.specializeList[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#919191;border-radius:10px;overflow:hidden}.specializeList[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#0e233d!important;border-radius:10px}.createButton[_ngcontent-%COMP%]{width:40%;background-color:#648dc4;height:50px;border-radius:25px;border:none;color:#fff;margin-top:40px}.horizontalDivider[_ngcontent-%COMP%]{display:none}@media (max-width: 768px){.formcontainer[_ngcontent-%COMP%]{width:100%;margin:0 20px}.horizontalDivider[_ngcontent-%COMP%]{display:block}.verticalDivier[_ngcontent-%COMP%]{display:none}}.attachFile[_ngcontent-%COMP%]{background-color:#efefef;padding:5px 10px;border-radius:10px}.attachFile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;text-align:center}.addMoreOtherFile[_ngcontent-%COMP%]{margin-inline-start:10px;background-color:#919191;color:#fff;padding:5px 20px;border-radius:10px}.files-style[_ngcontent-%COMP%]{width:300px;height:220px;display:flex;justify-content:center;border:1px solid #919191;border-radius:10px;padding:10px}.files-style[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:290px;height:148px;border:1px solid #b9bfca;border-radius:10px}.files-style[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin:auto;width:284px;object-fit:cover}.files-style[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto;display:block;margin:0 auto}.files-style[_ngcontent-%COMP%]   .add-files[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:160px;height:40px;background-color:#648dc4;color:#fff;margin:3px auto;border-radius:20px}.image[_ngcontent-%COMP%]{width:200px;height:220px;display:flex;justify-content:center;align-items:center;border:1px solid #efefef;padding:5px;border-radius:10px;position:relative}.image[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]{width:150px;height:150px;overflow:hidden;border-radius:10px}.image[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.image[_ngcontent-%COMP%]   .deleteButton[_ngcontent-%COMP%]{margin:3px auto;width:fit-content}.image[_ngcontent-%COMP%]   .deleteButton[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100px;border-radius:10px;border:none;color:#fff;background-color:#648dc4;padding:5px 0}.image[_ngcontent-%COMP%]   .deleteButtonCorner[_ngcontent-%COMP%]{position:absolute;top:-14px;right:-14px}.image[_ngcontent-%COMP%]   .deleteButtonCorner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:50%;width:30px;height:30px;background-color:#648dc4;border:none;color:#fff}.files[_ngcontent-%COMP%]{width:200px;height:220px;display:flex;justify-content:center;align-items:center;overflow:hidden;border:1px solid #efefef;padding:5px;border-radius:10px}.files[_ngcontent-%COMP%]   .fileType[_ngcontent-%COMP%]{width:150px;height:150px;overflow:hidden;border-radius:10px}.files[_ngcontent-%COMP%]   .fileType[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.files[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{width:fit-content;margin:auto}.files[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:80px;height:30px;border-radius:10px;color:#fff;background-color:#648dc4;border:none;margin-inline-end:5px}.files[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:80px;height:30px;border-radius:10px;color:#648dc4;background-color:transparent;border:1px solid #648dc4;margin-inline-end:5px;text-align:center}.image-container[_ngcontent-%COMP%]{padding:1em;overflow-x:scroll}.image-container[_ngcontent-%COMP%]::-webkit-scrollbar{display:block;height:4px}.image-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#919191;border-radius:10px;overflow:hidden}.image-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#0e233d!important;border-radius:10px}"]});let e=d;return e})();export{lt as TenderDetailFormComponent};
