import './polyfills.server.mjs';
import{a as Y}from"./chunk-Z4RYMMQU.mjs";import{a as Z}from"./chunk-GWRAZRL2.mjs";import{a as X}from"./chunk-MV4K6D3W.mjs";import{a as q}from"./chunk-QSG2PRNO.mjs";import{a as N}from"./chunk-MNPOEVV2.mjs";import"./chunk-WPI32NNX.mjs";import"./chunk-ECCC6GWL.mjs";import"./chunk-TQFWEZNP.mjs";import{a as J}from"./chunk-ZNJQCMII.mjs";import"./chunk-R4VZX5WR.mjs";import{a as z}from"./chunk-XAMK3HJX.mjs";import{a as U,b as $}from"./chunk-OFO74N53.mjs";import{g as D,k as B,n as R}from"./chunk-DCP47WQH.mjs";import{a as W}from"./chunk-AYZFNQ2F.mjs";import"./chunk-GTSSCL6B.mjs";import{Bc as V,Db as u,Eb as y,Ia as O,L as k,Lb as I,Ma as a,Mb as m,Na as l,Nb as j,Q as E,W as T,cb as f,ea as b,eb as d,fa as w,ib as F,jb as x,lb as h,ma as L,mb as g,nb as o,ob as n,pb as p,ra as A,sb as M,ub as P,v as S,vb as v,vc as H}from"./chunk-OOMDIMHK.mjs";import{a as _}from"./chunk-VVCT4QZE.mjs";var G=(()=>{let t=class t{constructor(r){this.http=r,this.apiUrl=U.BaseUrl}getHomeList(r){return this.http.get(`${this.apiUrl}/home`,{params:_({},r)}).pipe(S($))}};t.\u0275fac=function(s){return new(s||t)(E(W))},t.\u0275prov=k({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var re=(e,t)=>t.id,oe=()=>["/tenders/all-tenders"],se=()=>["/categories"],ae=()=>["/auth/register"],ue=()=>["/auth/login"],ce=e=>["/categories",e,"tender"],de=()=>({nextEl:".swiper-button-next",prevEl:".swiper-button-prev"});function le(e,t){e&1&&(o(0,"div")(1,"p"),u(2,"\u0627\u0634\u062A\u0631\u0643 \u0645\u0639\u0646\u0627 \u0627\u0644\u0627\u0646"),n(),o(3,"button",21),u(4,"\u062A\u0633\u062C\u064A\u0644 \u0639\u0636\u0648\u064A\u0629 \u062C\u062F\u064A\u062F\u0629"),n(),o(5,"div",22)(6,"p",23),u(7,"\u0644\u062F\u064A\u0643 \u062D\u0633\u0627\u0628 \u0628\u0627\u0644\u0641\u0639\u0644\u061F"),n(),o(8,"button",24),u(9,"\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644"),n()()()),e&2&&(a(3),d("routerLink",m(2,ae)),a(5),d("routerLink",m(3,ue)))}function pe(e,t){if(e&1){let i=M();o(0,"div",7)(1,"app-info-details",25),P("addToWhishList",function(s){let c=b(i).$index,C=v(2);return w(C.addTenderTowhishList(s,c))}),n()()}if(e&2){let i=t.$implicit;a(),d("router","/tenders/"+i.id+"/tender-details")("MyTender",i.is_my_tender)("inWishList",i.is_favorite)("details",i)}}function me(e,t){if(e&1&&(o(0,"div",14),p(1,"app-image-view",26),n()),e&2){let i=t.$implicit;a(),d("details",i)("routerLink",j(2,ce,i.id))}}function he(e,t){if(e&1&&(o(0,"div",19)(1,"div",27),p(2,"img",28),n(),o(3,"div",29)(4,"h5"),u(5),n(),o(6,"p"),u(7),n()()()),e&2){let i=t.$implicit;a(2),d("src",i.avatar,O),a(3),y(i.title),a(2),y(i.desc)}}function ge(e,t){if(e&1&&(o(0,"swiper-slide")(1,"div",31),p(2,"img",28),n()()),e&2){let i=t.$implicit;a(2),d("src",i.avatar,O)}}function ve(e,t){if(e&1&&(o(0,"div",20)(1,"swiper-container",30),h(2,ge,3,1,"swiper-slide",null,x),n()()),e&2){let i=v(2);a(),d("navigation",m(2,de))("breakpoints",i.breakpoints),a(),g(i.clients)}}function _e(e,t){if(e&1){let i=M();o(0,"div")(1,"section",1)(2,"div")(3,"h2"),u(4,"\u0627\u0641\u0636\u0644 \u0645\u0643\u0627\u0646 \u0644\u0644\u0645\u0632\u0627\u064A\u062F\u0627\u062A \u0648 \u0627\u0644\u0645\u0646\u0627\u0642\u0635\u0627\u062A"),n(),o(5,"p"),u(6,"\u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u064A \u0627\u0641\u0636\u0644 \u0627\u0644\u0635\u0641\u0642\u0627\u062A \u0633\u0648\u0627\u0621 \u062A\u0631\u064A\u062F \u062A\u0642\u062F\u064A\u0645 \u0627\u0644\u062E\u062F\u0645\u0647 \u0627\u0648 \u062A\u0631\u064A\u062F \u0639\u0631\u0636 \u0637\u0644\u0628\u0643"),n(),f(7,le,10,4,"div",0),n()(),o(8,"section",2)(9,"div",3)(10,"app-search-input",4),P("searchObj",function(s){b(i);let c=v();return w(c.handleSearchObj(s))}),n(),o(11,"div",5)(12,"h3",6),u(13,"\u0627\u062D\u062F\u062B \u0627\u0644\u0645\u0646\u0627\u0642\u0635\u0627\u062A"),n(),h(14,pe,2,4,"div",7,re),o(16,"div",8)(17,"button",9),u(18,"\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064A\u062F"),n()()(),p(19,"div",10),o(20,"div",11)(21,"div",12)(22,"h3",6),u(23,"\u0627\u0644\u0642\u0637\u0627\u0639\u0627\u062A"),n()(),o(24,"div",13),h(25,me,2,4,"div",14,x),n(),o(27,"div",8)(28,"button",9),u(29,"\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064A\u062F"),n()()(),p(30,"div",15),o(31,"div",16)(32,"div")(33,"div",17)(34,"h3",6),u(35,"\u062E\u062F\u0645\u0627\u062A\u0646\u0627"),n(),o(36,"div",18),h(37,he,8,3,"div",19,x),n()()()(),p(39,"div",10),o(40,"div",12)(41,"h3",6),u(42,"\u0639\u0645\u0644\u0627\u0626\u0646\u0627"),n()(),f(43,ve,4,3,"div",20),n()()()}if(e&2){let i=v();a(7),d("ngIf",!i.isLogin),a(3),d("searchPlaceHolder","\u0627\u0628\u062D\u062B \u0639\u0646 \u0635\u0641\u0642\u0629 \u062C\u062F\u064A\u062F\u0629"),a(4),g(i.tendersList),a(3),d("routerLink",m(5,oe)),a(8),g(i.categories),a(3),d("routerLink",m(6,se)),a(9),g(i.services),a(6),F(43,i.clients?43:-1)}}var Ve=(()=>{let t=class t{constructor(r,s,c,C,K,Q,ee){this.HomeService=r,this.TendersService=s,this.toastr=c,this.toastrHelper=C,this.route=K,this.elementRef=Q,this.subs=new J,this.isLogin=!0,this.tendersList=[],this.dataLoad=!1,this.categories=[],this.services=[],this.clients=[],this.breakpoints={425:{slidesPerView:1},768:{slidesPerView:2},900:{slidesPerView:3},1024:{slidesPerView:4,spaceBetween:20}},V(ee)&&typeof window<"u"&&this.route.data.subscribe(te=>{this.isLogin=te.server})}ngOnInit(){this.route.fragment.subscribe(r=>{r!=null&&setTimeout(()=>{let s=this.elementRef.nativeElement.querySelector(`#${r}`);if(s){s.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"});let c=s.offsetTop-100;window.scrollTo({top:c,behavior:"smooth"})}},1e3)}),this.getHomeList(),this.getAlltenders()}getHomeList(){this.subs.add(this.HomeService.getHomeList().subscribe(r=>{this.categories=r.data.categories.slice(0,16),this.services=r.data.our_services.slice(0,4),this.clients=r.data.our_clients}))}getAlltenders(){this.subs.add(this.TendersService.getAllTenders(this.searchObj,1).subscribe(r=>{this.tendersList=r.data.slice(0,5),this.dataLoad=!0}))}addTenderTowhishList(r,s){this.TendersService.addTenderToWishlist(r.id).subscribe(c=>{c.data.is_favorite?(this.toastr.success(c.messages),this.tendersList[s].is_favorite=!0):(this.toastr.success("Removed From your wishList"),this.tendersList[s].is_favorite=!1)},c=>{this.toastr.error(c.error.message)})}handleSearchObj(r){this.searchObj=_({},r),this.getAlltenders()}ngOnDestroy(){this.subs.unsubscribe()}};t.\u0275fac=function(s){return new(s||t)(l(G),l(q),l(z),l(N),l(D),l(L),l(A))},t.\u0275cmp=T({type:t,selectors:[["app-home"]],standalone:!0,features:[I],decls:1,vars:1,consts:[[4,"ngIf"],[1,"landing"],[1,"deals"],[1,"container"],[3,"searchObj","searchPlaceHolder"],[1,"mt-4"],[1,"headerTitle"],[1,"my-3"],[1,"text-start"],[1,"hyperlinkBUtton",3,"routerLink"],[1,"horizontalDivider"],[1,"sectors"],[1,"mt-4","text-center"],[1,"d-flex","flex-wrap"],[1,"m-3"],["id","ourServices",1,"horizontalDivider"],[1,"ourServices"],[1,"my-3","text-center"],[1,"serviceWrapper"],[1,"service"],[1,"mt-3"],[1,"button-bwhite-txtMain-radius","m-auto",3,"routerLink"],[1,"d-flex","justify-content-center","align-items-center","mt-4"],[1,"m-0","mx-3"],[1,"button-bgtran-txtWhite-border-radius",3,"routerLink"],[3,"addToWhishList","router","MyTender","inWishList","details"],[3,"details","routerLink"],[1,"serviceIconContainer","my-3"],["alt","",3,"src"],[1,"text-center"],["loop","true","slides-per-view","4","space-between","10","speed","500","autoplay-delay","1000","autoplay-disable-on-interaction","false",3,"navigation","breakpoints"],[1,"slider"]],template:function(s,c){s&1&&f(0,_e,44,7,"div",0),s&2&&d("ngIf",c.dataLoad)},dependencies:[H,R,B,X,Y,Z],styles:['.landing[_ngcontent-%COMP%]{height:370px;background-image:url("./media/boss-shaking-hand-thanking-worker-good-job@2x-VZJHX7V6.png");background-image:linear-gradient(to bottom,#3d6aa681,#3d6aa67e),url("./media/boss-shaking-hand-thanking-worker-good-job@2x-VZJHX7V6.png");background-position:center;background-size:cover;background-repeat:no-repeat;display:flex;justify-content:center;align-items:center;text-align:center}.landing[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff}.landing[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#e1e8f0}.search[_ngcontent-%COMP%]{position:relative;width:100%;height:fit-content}.search[_ngcontent-%COMP%]   .searchInput[_ngcontent-%COMP%]{background-color:#efefef;height:50px}.search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;right:20px;top:50%;transform:translateY(-50%)}select[_ngcontent-%COMP%]{border:2px solid #648dc4;background-color:#fff;width:150px;padding:0 15px;outline:none;height:50px}select[_ngcontent-%COMP%]:first-of-type{border-inline-end:none}.sectorsSearch[_ngcontent-%COMP%]{width:150px;background-color:#648dc4;color:#fff;border:none;height:50px}.dealSearch[_ngcontent-%COMP%]{display:flex}.hyperlinkBUtton[_ngcontent-%COMP%]{color:#648dc4;background-color:transparent;border:none;text-decoration:underline;font-weight:500;font-size:large}.serviceIconContainer[_ngcontent-%COMP%]{width:164px;height:164px;overflow:hidden;border:1px solid #648dc4;border-radius:50%;box-shadow:0 0 13px #00000029;display:flex;justify-content:center;align-items:center}.serviceIconContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px;height:80px}.serviceWrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.serviceWrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:auto}.serviceWrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#919191}.ourClient[_ngcontent-%COMP%]   .clients[_ngcontent-%COMP%]{display:flex;justify-content:center}.ourClient[_ngcontent-%COMP%]   .clients[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:219px;height:91px;border:1px solid #919191;box-shadow:0 0 6px #00000029}.ourClient[_ngcontent-%COMP%]   .clients[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.slider[_ngcontent-%COMP%]{width:219px;height:91px;border:1px solid #919191;box-shadow:0 0 6px #00000029}.slider[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}swiper-slide[_ngcontent-%COMP%]{display:flex;justify-content:center}@media (max-width: 1200px){.serviceWrapper[_ngcontent-%COMP%], .clients[_ngcontent-%COMP%]{flex-wrap:wrap}.clients[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:10px}}@media (max-width: 795px){.dealSearch[_ngcontent-%COMP%]{display:block}.dealSearch[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2){margin:10px auto auto;width:fit-content;flex-wrap:wrap}}@media (max-width: 474px){.sectorsSearch[_ngcontent-%COMP%]{margin:10px}}.swiper-button-next[_ngcontent-%COMP%], .swiper-button-prev[_ngcontent-%COMP%]{display:none!important}']});let e=t;return e})();export{Ve as HomeComponent};
