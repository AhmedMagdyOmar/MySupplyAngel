import './polyfills.server.mjs';
var s=function(n){return typeof n=="function"},r=function(){function n(){this._subs=[]}return n.prototype.add=function(){for(var t=[],u=0;u<arguments.length;u++)t[u]=arguments[u];this._subs=this._subs.concat(t)},Object.defineProperty(n.prototype,"sink",{set:function(t){this._subs.push(t)},enumerable:!0,configurable:!0}),n.prototype.unsubscribe=function(){this._subs.forEach(function(t){return t&&s(t.unsubscribe)&&t.unsubscribe()}),this._subs=[]},n}();export{r as a};
