import{a as C}from"./chunk-WXSNHVFO.js";import{a as w,b as U}from"./chunk-B24GJN2W.js";import"./chunk-QKFZZ2ZG.js";import{a as v}from"./chunk-VAADLS33.js";import{Ab as a,Bb as y,Ib as g,Ja as o,Ka as l,L as m,Q as d,W as h,bb as u,kb as n,lb as s,mb as f,v as p}from"./chunk-I3BRGV73.js";import"./chunk-CWTPBX7D.js";var M=(()=>{let t=class t{constructor(e){this.http=e,this.apiUrl=w.BaseUrl}whyUs(){return this.http.get(`${this.apiUrl}/why-us`).pipe(p(U))}};t.\u0275fac=function(i){return new(i||t)(d(v))},t.\u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();var j=(()=>{let t=class t{constructor(e){this.WhyUsService=e,this.desc={why_us:""},this.record=[{pageName:"\u0627\u0644\u0635\u0641\u062D\u0647 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0647",router:"/home"},{pageName:"\u0644\u0645\u0627\u0630\u0627 \u0646\u062D\u0646",router:"/whyUs"}]}ngOnInit(){this.whyUs()}whyUs(){this.WhyUsService.whyUs().subscribe(e=>{this.desc=e.data})}};t.\u0275fac=function(i){return new(i||t)(l(M))},t.\u0275cmp=h({type:t,selectors:[["app-why-us"]],standalone:!0,features:[g],decls:7,vars:2,consts:[[1,"container"],[3,"record"],[1,"pageTitle"],[1,"tips"]],template:function(i,c){i&1&&(n(0,"div",0),f(1,"app-record",1),n(2,"h3",2),a(3,"\u0644\u0645\u0627\u0630\u0627 \u0646\u062D\u0646"),s(),n(4,"ul",3)(5,"li"),a(6),s()()()),i&2&&(o(),u("record",c.record),o(5),y(c.desc.why_us))},dependencies:[C],styles:[".WhyUs[_ngcontent-%COMP%]{margin-top:1.25em;padding:50px 0}.pageTitle[_ngcontent-%COMP%]{color:#1d1d1d;font-weight:700}.tips[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:20px 0}li[_ngcontent-%COMP%]::marker{color:#1f4982}"]});let r=t;return r})();export{j as WhyUsComponent};
