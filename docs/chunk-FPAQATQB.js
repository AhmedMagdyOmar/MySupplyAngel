import{a as u,b as a}from"./chunk-B24GJN2W.js";import{a as m}from"./chunk-VAADLS33.js";import{L as l,Q as p,g as d,nc as f,ra as h,v as s}from"./chunk-I3BRGV73.js";var n=class extends Error{};n.prototype.name="InvalidTokenError";function w(r){return decodeURIComponent(atob(r).replace(/(.)/g,(t,i)=>{let e=i.charCodeAt(0).toString(16).toUpperCase();return e.length<2&&(e="0"+e),"%"+e}))}function I(r){let t=r.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return w(t)}catch{return atob(t)}}function g(r,t){if(typeof r!="string")throw new n("Invalid token specified: must be a string");t||(t={});let i=t.header===!0?0:1,e=r.split(".")[i];if(typeof e!="string")throw new n(`Invalid token specified: missing part #${i+1}`);let o;try{o=I(e)}catch(c){throw new n(`Invalid token specified: invalid base64 for part #${i+1} (${c.message})`)}try{return JSON.parse(o)}catch(c){throw new n(`Invalid token specified: invalid json for part #${i+1} (${c.message})`)}}var E=(()=>{let t=class t{constructor(e,o){this.http=e,this.platformId=o,this.UserSignIn=new d(null),this.apiUrl=u.BaseUrl,f(this.platformId)&&typeof window<"u"&&localStorage.getItem("userToken")!=null&&this.decode()}userRegister(e){return this.http.post(`${this.apiUrl}/register`,e).pipe(s(a))}activateCode(e){return this.http.post(`${this.apiUrl}/verify`,e).pipe(s(a))}ResendActivateCode(e){return this.http.post(`${this.apiUrl}/resendCode`,e).pipe(s(a))}userLogin(e){return this.http.post(`${this.apiUrl}/login`,e).pipe(s(a))}decode(){let e=JSON.stringify(localStorage.getItem("userToken")),o=g(e);this.UserSignIn.next(o)}};t.\u0275fac=function(o){return new(o||t)(p(m),p(h))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{E as a};
