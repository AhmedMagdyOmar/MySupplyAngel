import './polyfills.server.mjs';
import{a as F}from"./chunk-PSUX6ZEP.mjs";import{a as I}from"./chunk-I7N7CHRL.mjs";import{a as b,b as S,c as V}from"./chunk-XPYCRJJY.mjs";import{a as M}from"./chunk-ZNJQCMII.mjs";import"./chunk-R4VZX5WR.mjs";import{a as L}from"./chunk-XAMK3HJX.mjs";import"./chunk-OFO74N53.mjs";import{j as E}from"./chunk-DCP47WQH.mjs";import"./chunk-AYZFNQ2F.mjs";import"./chunk-GTSSCL6B.mjs";import{Lb as y,Ma as p,Na as d,Ob as P,Pb as T,Rb as w,W as h,cb as _,ea as a,eb as x,fa as o,ib as f,lb as v,mb as C,nb as c,ob as l,sb as u,ub as g,vb as m}from"./chunk-OOMDIMHK.mjs";import"./chunk-VVCT4QZE.mjs";var O=(n,t)=>t.id,W=(n,t,s)=>({itemsPerPage:n,currentPage:t,totalItems:s});function D(n,t){if(n&1){let s=u();c(0,"div",1)(1,"app-essential-details",3),g("navigateToUpdate",function(){let e=a(s).$implicit,r=m();return o(r.expireControl(e.id))})("addToWhishList",function(e){a(s);let r=m();return o(r.addexpireTowhishList(e))}),l()()}if(n&2){let s=t.$implicit;p(),x("addOffer",!1)("navigateOpen",!0)("inWishList",s.is_favorite)("details",s)("router","/expiration/"+s.id+"/details")}}function $(n,t){if(n&1){let s=u();c(0,"div",2)(1,"pagination-controls",4),g("pageChange",function(e){a(s);let r=m();return o(r.handlePagination(e))}),l()()}}var A=(()=>{let t=class t{constructor(i,e,r){this.toastr=i,this.ExpirationService=e,this.router=r,this.subs=new M,this.expirelist=[],this.itemsPerPage=15,this.currentPage=1}ngOnInit(){this.getMyexpire()}getMyexpire(){this.subs.add(this.ExpirationService.getMyexpire(this.currentPage).subscribe(i=>{this.expirelist=i.data,this.itemsPerPage=i.meta.per_page,this.totalItems=i.meta.total}))}addexpireTowhishList(i){this.subs.add(this.ExpirationService.addexpireToWishlist(i.id).subscribe(e=>{e.data.is_favorite?this.toastr.success(e.messages):this.toastr.success("Removed From your wishList")},e=>{this.toastr.error(e.error.message)}))}handlePagination(i){this.currentPage=i,this.getMyexpire()}expireControl(i){this.router.navigate([`/myDeals/${i}/expire-control/expire-detail-form`])}ngOnDestroy(){this.subs.unsubscribe()}};t.\u0275fac=function(e){return new(e||t)(d(L),d(I),d(E))},t.\u0275cmp=h({type:t,selectors:[["app-my-expir-list"]],standalone:!0,features:[y],decls:5,vars:8,consts:[[1,"container"],[1,"my-3",2,"cursor","pointer"],[1,"text-center"],[3,"navigateToUpdate","addToWhishList","addOffer","navigateOpen","inWishList","details","router"],[1,"my-pagination",3,"pageChange"]],template:function(e,r){e&1&&(c(0,"div",0),v(1,D,2,5,"div",1,O),T(3,"paginate"),_(4,$,2,0,"div",2),l()),e&2&&(p(),C(w(3,1,r.expirelist,P(4,W,r.itemsPerPage,r.currentPage,r.totalItems))),p(3),f(4,r.expirelist.length?4:-1))},dependencies:[F,V,b,S]});let n=t;return n})();export{A as MyExpirListComponent};
