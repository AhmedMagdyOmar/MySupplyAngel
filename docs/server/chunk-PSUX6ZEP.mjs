import './polyfills.server.mjs';
import{a as I}from"./chunk-R4VZX5WR.mjs";import{a as W}from"./chunk-XAMK3HJX.mjs";import{k as E}from"./chunk-DCP47WQH.mjs";import{Db as m,Eb as k,Fb as w,Lb as y,Ma as l,Na as M,Nb as S,V as g,W as T,Ya as x,cb as _,ea as u,eb as f,fa as h,ib as P,ka as O,la as b,nb as n,ob as o,pb as c,sb as C,ub as d,vb as p,vc as D}from"./chunk-OOMDIMHK.mjs";var V=a=>[a];function L(a,s){if(a&1){let r=C();n(0,"button",12),d("click",function(){u(r);let t=p();return h(t.navigate())}),n(1,"span"),c(2,"i",20),o()()}}function B(a,s){if(a&1){let r=C();n(0,"section",21)(1,"button",12),d("click",function(){u(r);let t=p();return h(t.shareThisCard("twitter"))}),c(2,"i",22),o(),n(3,"button",12),d("click",function(){u(r);let t=p();return h(t.shareThisCard("facbook"))}),c(4,"i",23),o(),n(5,"button",12),d("click",function(){u(r);let t=p();return h(t.shareThisCard("whatsapp"))}),c(6,"i",24),o()()}}function F(a,s){if(a&1){let r=C();n(0,"button",12),d("click",function(){u(r);let t=p();return h(t.handleWhishlist())}),c(1,"i",25),o()}}function A(a,s){if(a&1){let r=C();n(0,"button",12),d("click",function(){u(r);let t=p();return h(t.handleWhishlist())}),c(1,"i",26),o()}}function j(a,s){if(a&1&&(n(0,"div")(1,"button",27),m(2,"\u062A\u0642\u062F\u064A\u0645 \u0639\u0631\u0636"),o()()),a&2){let r=p();l(),f("routerLink",S(1,V,r.router()))}}var J=(()=>{let s=class s{constructor(e,t){this.authService=e,this.toastr=t,this.details=b(),this.router=b(),this.addOffer=x(!0),this.addToWhishList=O(),this.inWishList=x(!1),this.navigateOpen=x(!1),this.navigateToUpdate=O(),this.openShare=!1}transformDate(e){let t=new Date(e),v=new Date().getTime()-t.getTime();return Math.floor(v/(1e3*60*60*24))}shareButton(){let e=window.location.origin;navigator.share({title:"Check this out!",text:"Check out this amazing content.",url:`${e}/expiration/${this.details().id}/details`})}shareThisCard(e){let i=`https://tenders-pink.vercel.app/expiration/${this.details().id}/details`;e==="twitter"?window.open(`https://twitter.com/intent/tweet?text=${i}`,"_blank"):e==="facbook"?window.open(`https://www.facebook.com/sharer/sharer.php?u=${i}`,"_blank"):e==="whatsapp"&&window.open(`https://web.whatsapp.com/send?text=${i}`,"_blank")}navigate(){this.navigateToUpdate.emit("")}handleWhishlist(){this.authService.UserSignIn.getValue()?(this.inWishList.update(e=>!e),this.addToWhishList.emit(this.details())):this.toastr.info("\u064A\u062C\u0628 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0627\u0648\u0644\u0627")}};s.\u0275fac=function(t){return new(t||s)(M(I),M(W))},s.\u0275cmp=T({type:s,selectors:[["app-essential-details"]],inputs:{details:[g.SignalBased,"details"],router:[g.SignalBased,"router"],addOffer:[g.SignalBased,"addOffer"],inWishList:[g.SignalBased,"inWishList"],navigateOpen:[g.SignalBased,"navigateOpen"]},outputs:{addOffer:"addOfferChange",addToWhishList:"addToWhishList",inWishList:"inWishListChange",navigateOpen:"navigateOpenChange",navigateToUpdate:"navigateToUpdate"},standalone:!0,features:[y],decls:30,vars:9,consts:[[1,"details"],[1,"imageContainer"],[1,"m-auto"],["src","./assets/image/corporate-businessmen-shaking-hands.png","alt","tender"],[1,"w-100","detailsWrapper"],[1,"detailsTitle"],[1,""],[1,"mb-1"],[1,"button-no-style"],[1,"dateDiff","me-2"],[1,"handleDetails"],[1,"d-flex","align-items-center","controls"],[1,"button-no-style",3,"click"],[1,"fa-solid","fa-share-nodes","shareBox",2,"cursor","pointer"],["class","share-content",4,"ngIf"],[1,"d-flex","align-items-center"],["class","button-no-style",3,"click",4,"ngIf"],[1,"m-0",2,"white-space","nowrap"],[1,"tags"],[1,"m-0"],[1,"fa-solid","fa-eye","shareButton"],[1,"share-content"],[1,"fa-brands","fa-twitter"],[1,"fa-brands","fa-facebook"],[1,"fa-brands","fa-whatsapp"],[1,"fa-regular","fa-heart","mx-2",2,"cursor","pointer"],[1,"fa-solid","text-danger","fa-heart","mx-2",2,"cursor","pointer"],[1,"button-bgMain-txtWhite-radius",3,"routerLink"]],template:function(t,i){t&1&&(n(0,"div",0)(1,"div",1)(2,"div",2),c(3,"img",3),o()(),n(4,"div",4)(5,"div",5)(6,"div",6)(7,"h3",7),m(8),_(9,L,3,0,"button",8),n(10,"span",9),m(11),o()()()(),n(12,"div",10)(13,"div")(14,"p"),m(15),o(),n(16,"div",11)(17,"button",12),d("click",function(){return i.openShare=!i.openShare}),n(18,"i",13),_(19,B,7,0,"section",14),o()(),n(20,"div",15),_(21,F,2,0,"button",16)(22,A,2,0,"button",16),n(23,"button",12),d("click",function(){return i.handleWhishlist()}),n(24,"p",17),m(25,"\u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u064A \u0627\u0644\u0645\u0641\u0636\u0644\u0629"),o()()()()(),_(26,j,3,3,"div"),o()(),n(27,"div",18)(28,"p",19),m(29),o()()()),t&2&&(l(8),w(" ",i.details().title," "),l(),P(9,i.navigateOpen()?9:-1),l(2),w("\u0645\u0646\u0630 ",i.transformDate(i.details().created_at)," \u0623\u064A\u0627\u0645"),l(4),k(i.details().desc),l(4),f("ngIf",i.openShare),l(2),f("ngIf",!i.inWishList()),l(),f("ngIf",i.inWishList()),l(4),P(26,i.addOffer()?26:-1),l(3),w(" ",i.details().type==="liquidation"?"\u0647\u0648\u0627\u0644\u0643 \u062F\u0648\u0631\u064A\u0629":"\u062A\u0635\u0641\u064A\u0627\u062A"," "))},dependencies:[D,E],styles:[".details[_ngcontent-%COMP%]{position:relative;width:100%;border:2px solid #648dc4;border-radius:10px;display:flex;align-items:center;padding:10px;overflow:hidden}.details[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]{position:absolute;display:flex;justify-content:center;align-items:center;padding:20px 10px;border-radius:10px;color:#fff;left:-1px;top:0;width:150px;height:20px;background-color:#7fbcd2;z-index:999}.imageContainer[_ngcontent-%COMP%]{display:flex;align-items:center}.imageContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{height:90%}.imageContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:10px}.detailsWrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;padding:10px}.handleDetails[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.handleDetails[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(1){width:50%;flex-grow:1}.handleDetails[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(1)   p[_ngcontent-%COMP%]{color:#919191}.handleDetails[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2){width:25%;color:#1d1d1d;font-weight:500;align-content:end}.handleDetails[_ngcontent-%COMP%]   .button-bgMain-txtWhite-radius[_ngcontent-%COMP%]{margin-right:auto}.controls[_ngcontent-%COMP%]{color:#648dc4}.controls[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#648dc4!important}.detailsTitle[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.detailsTitle[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1d1d1d;font: 600 29px/55px Cairo}.detailsTitle[_ngcontent-%COMP%]   .dateDiff[_ngcontent-%COMP%]{color:#919191;font: 16px Cairo}.detailsTitle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2){color:#648dc4}.detailsTitle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2)   i[_ngcontent-%COMP%]{cursor:pointer}.detailsTitle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-of-type(2)   p[_ngcontent-%COMP%]{cursor:pointer}.value[_ngcontent-%COMP%]{color:#648dc4}@media (max-width: 1200px){.details[_ngcontent-%COMP%]{display:block}.imageContainer[_ngcontent-%COMP%]{height:250px;margin:auto}.imageContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:250px;height:250px}}@media (max-width: 1000px){.handleDetails[_ngcontent-%COMP%]{flex-wrap:wrap}.handleDetails[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%!important}}@media (max-width: 786px){.imageContainer[_ngcontent-%COMP%]{margin-top:40px}}@media (max-width: 523px){.detailsTitle[_ngcontent-%COMP%]{flex-wrap:wrap;margin:20px 0}.imageContainer[_ngcontent-%COMP%]{min-width:250px;max-width:250px}}.shareButton[_ngcontent-%COMP%]{color:#648dc4;font-size:16px}.shareBox[_ngcontent-%COMP%]{position:relative}.share-content[_ngcontent-%COMP%]{position:absolute;width:220px!important;background-color:#fff;height:75px!important;top:-90px;border-radius:10px;box-shadow:0 4px 16px #00000017;display:flex;justify-content:space-evenly;align-items:center;font-size:25px}"]});let a=s;return a})();export{J as a};
