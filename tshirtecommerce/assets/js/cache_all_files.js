!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});
(function(e,t){function i(t,i){var s,a,o,r=t.nodeName.toLowerCase();return"area"===r?(s=t.parentNode,a=s.name,t.href&&a&&"map"===s.nodeName.toLowerCase()?(o=e("img[usemap=#"+a+"]")[0],!!o&&n(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||i:i)&&n(t)}function n(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var s=0,a=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,n){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),n&&n.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var n,s,a=e(this[0]);a.length&&a[0]!==document;){if(n=a.css("position"),("absolute"===n||"relative"===n||"fixed"===n)&&(s=parseInt(a.css("zIndex"),10),!isNaN(s)&&0!==s))return s;a=a.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++s)})},removeUniqueId:function(){return this.each(function(){a.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,n){return!!e.data(t,n[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),s=isNaN(n);return(s||n>=0)&&i(t,!s)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,n){function s(t,i,n,s){return e.each(a,function(){i-=parseFloat(e.css(t,"padding"+this))||0,n&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var a="Width"===n?["Left","Right"]:["Top","Bottom"],o=n.toLowerCase(),r={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+n]=function(i){return i===t?r["inner"+n].call(this):this.each(function(){e(this).css(o,s(this,i)+"px")})},e.fn["outer"+n]=function(t,i){return"number"!=typeof t?r["outer"+n].call(this,t):this.each(function(){e(this).css(o,s(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,n){var s,a=e.ui[t].prototype;for(s in n)a.plugins[s]=a.plugins[s]||[],a.plugins[s].push([i,n[s]])},call:function(e,t,i){var n,s=e.plugins[t];if(s&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(n=0;s.length>n;n++)e.options[s[n][0]]&&s[n][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var n=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;return t[n]>0?!0:(t[n]=1,s=t[n]>0,t[n]=0,s)}})})(jQuery);(function(t,e){var i=0,s=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,s=0;null!=(i=e[s]);s++)try{t(i).triggerHandler("remove")}catch(o){}n(e)},t.widget=function(i,s,n){var o,a,r,h,l={},c=i.split(".")[0];i=i.split(".")[1],o=c+"-"+i,n||(n=s,s=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[c]=t[c]||{},a=t[c][i],r=t[c][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),h=new s,h.options=t.widget.extend({},h.options),t.each(n,function(i,n){return t.isFunction(n)?(l[i]=function(){var t=function(){return s.prototype[i].apply(this,arguments)},e=function(t){return s.prototype[i].apply(this,t)};return function(){var i,s=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),e):(l[i]=n,e)}),r.prototype=t.widget.extend(h,{widgetEventPrefix:a?h.widgetEventPrefix||i:i},l,{constructor:r,namespace:c,widgetName:i,widgetFullName:o}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,h=a.length;h>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==e&&(i[n]=t.isPlainObject(o)?t.isPlainObject(i[n])?t.widget.extend({},i[n],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,h=s.call(arguments,1),l=this;return a=!r&&h.length?t.widget.extend.apply(null,[a].concat(h)):a,r?this.each(function(){var s,n=t.data(this,o);return n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,h),s!==n&&s!==e?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new n(a,this))}),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),1===arguments.length)return o[i]===e?null:o[i];o[i]=s}else{if(1===arguments.length)return this.options[i]===e?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=t(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),t.each(n,function(n,r){function h(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||t.guid++);var l=n.match(/^(\w+)\s*(.*)$/),c=l[1]+a.eventNamespace,u=l[2];u?o.delegate(u,c,h):s.bind(c,h)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}})})(jQuery);(function(t){var e=!1;t(document).mouseup(function(){e=!1}),t.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!e){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?t(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===t.data(i.target,this.widgetName+".preventClickEvent")&&t.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return s._mouseMove(t)},this._mouseUpDelegate=function(t){return s._mouseUp(t)},t(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),e=!0,!0)):!0}},_mouseMove:function(e){return t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button?this._mouseUp(e):this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){return t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var a,o=Math.max,r=Math.abs,l=Math.round,h=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(a!==e)return a;var i,s,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return t("body").append(n),i=o.offsetWidth,n.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,a="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:a?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var a,p,g,m,v,_,b=t(e.of),y=t.position.getWithinInfo(e.within),k=t.position.getScrollInfo(y),w=(e.collision||"flip").split(" "),D={};return _=n(b),b[0].preventDefault&&(e.at="left top"),p=_.width,g=_.height,m=_.offset,v=t.extend({},m),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=h.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=h.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),D[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=g:"center"===e.at[1]&&(v.top+=g/2),a=i(D.at,p,g),v.left+=a[0],v.top+=a[1],this.each(function(){var n,h,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),_=s(this,"marginTop"),x=u+f+s(this,"marginRight")+k.width,C=d+_+s(this,"marginBottom")+k.height,M=t.extend({},v),T=i(D.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?M.left-=u:"center"===e.my[0]&&(M.left-=u/2),"bottom"===e.my[1]?M.top-=d:"center"===e.my[1]&&(M.top-=d/2),M.left+=T[0],M.top+=T[1],t.support.offsetFractions||(M.left=l(M.left),M.top=l(M.top)),n={marginLeft:f,marginTop:_},t.each(["left","top"],function(i,s){t.ui.position[w[i]]&&t.ui.position[w[i]][s](M,{targetWidth:p,targetHeight:g,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:x,collisionHeight:C,offset:[a[0]+T[0],a[1]+T[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(h=function(t){var i=m.left-M.left,s=i+p-u,n=m.top-M.top,a=n+g-d,l={target:{element:b,left:m.left,top:m.top,width:p,height:g},element:{element:c,left:M.left,top:M.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(l.horizontal="center"),d>g&&g>r(n+a)&&(l.vertical="middle"),l.important=o(r(i),r(s))>o(r(n),r(a))?"horizontal":"vertical",e.using.call(this,t,l)}),c.offset(t.extend(M,{using:h}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-a-n;e.collisionWidth>a?l>0&&0>=h?(i=t.left+l+e.collisionWidth-a-n,t.left+=l-i):t.left=h>0&&0>=l?n:l>h?n+a-e.collisionWidth:n:l>0?t.left+=l:h>0?t.left-=h:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-a-n;e.collisionHeight>a?l>0&&0>=h?(i=t.top+l+e.collisionHeight-a-n,t.top+=l-i):t.top=h>0&&0>=l?n:l>h?n+a-e.collisionHeight:n:l>0?t.top+=l:h>0?t.top-=h:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,a=n.offset.left+n.scrollLeft,o=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-o-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-o-a,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,a=n.offset.top+n.scrollTop,o=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-o-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-o-a,t.top+p+f+g>c&&(0>s||r(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-l,t.top+p+f+g>u&&(i>0||u>r(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)e.style[a]=s[a];e.appendChild(r),i=o||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()})(jQuery);(function(e){var t=0,i={},a={};i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="hide",a.height=a.paddingTop=a.paddingBottom=a.borderTopWidth=a.borderBottomWidth="show",e.widget("ui.accordion",{version:"1.10.4",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var t=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),t.collapsible||t.active!==!1&&null!=t.active||(t.active=0),this._processPanels(),0>t.active&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():e(),content:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),e=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),"content"!==this.options.heightStyle&&e.css("height","")},_setOption:function(e,t){return"active"===e?(this._activate(t),undefined):("event"===e&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),"collapsible"!==e||t||this.options.active!==!1||this._activate(0),"icons"===e&&(this._destroyIcons(),t&&this._createIcons()),"disabled"===e&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t),undefined)},_keydown:function(t){if(!t.altKey&&!t.ctrlKey){var i=e.ui.keyCode,a=this.headers.length,s=this.headers.index(t.target),n=!1;switch(t.keyCode){case i.RIGHT:case i.DOWN:n=this.headers[(s+1)%a];break;case i.LEFT:case i.UP:n=this.headers[(s-1+a)%a];break;case i.SPACE:case i.ENTER:this._eventHandler(t);break;case i.HOME:n=this.headers[0];break;case i.END:n=this.headers[a-1]}n&&(e(t.target).attr("tabIndex",-1),e(n).attr("tabIndex",0),n.focus(),t.preventDefault())}},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t=this.options;this._processPanels(),t.active===!1&&t.collapsible===!0||!this.headers.length?(t.active=!1,this.active=e()):t.active===!1?this._activate(0):this.active.length&&!e.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=e()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var i,a=this.options,s=a.heightStyle,n=this.element.parent(),r=this.accordionId="ui-accordion-"+(this.element.attr("id")||++t);this.active=this._findActive(a.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(t){var i=e(this),a=i.attr("id"),s=i.next(),n=s.attr("id");a||(a=r+"-header-"+t,i.attr("id",a)),n||(n=r+"-panel-"+t,s.attr("id",n)),i.attr("aria-controls",n),s.attr("aria-labelledby",a)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(a.event),"fill"===s?(i=n.height(),this.element.siblings(":visible").each(function(){var t=e(this),a=t.css("position");"absolute"!==a&&"fixed"!==a&&(i-=t.outerHeight(!0))}),this.headers.each(function(){i-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,i-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===s&&(i=0,this.headers.next().each(function(){i=Math.max(i,e(this).css("height","").height())}).height(i))},_activate:function(t){var i=this._findActive(t)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return"number"==typeof t?this.headers.eq(t):e()},_setupEvents:function(t){var i={keydown:"_keydown"};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var i=this.options,a=this.active,s=e(t.currentTarget),n=s[0]===a[0],r=n&&i.collapsible,o=r?e():s.next(),h=a.next(),d={oldHeader:a,oldPanel:h,newHeader:r?e():s,newPanel:o};t.preventDefault(),n&&!i.collapsible||this._trigger("beforeActivate",t,d)===!1||(i.active=r?!1:this.headers.index(s),this.active=n?e():s,this._toggle(d),a.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&a.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),n||(s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),s.next().addClass("ui-accordion-content-active")))},_toggle:function(t){var i=t.newPanel,a=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=a,this.options.animate?this._animate(i,a,t):(a.hide(),i.show(),this._toggleComplete(t)),a.attr({"aria-hidden":"true"}),a.prev().attr("aria-selected","false"),i.length&&a.length?a.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===e(this).attr("tabIndex")}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true",tabIndex:0,"aria-expanded":"true"})},_animate:function(e,t,s){var n,r,o,h=this,d=0,c=e.length&&(!t.length||e.index()<t.index()),l=this.options.animate||{},u=c&&l.down||l,v=function(){h._toggleComplete(s)};return"number"==typeof u&&(o=u),"string"==typeof u&&(r=u),r=r||u.easing||l.easing,o=o||u.duration||l.duration,t.length?e.length?(n=e.show().outerHeight(),t.animate(i,{duration:o,easing:r,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(a,{duration:o,easing:r,complete:v,step:function(e,i){i.now=Math.round(e),"height"!==i.prop?d+=i.now:"content"!==h.options.heightStyle&&(i.now=Math.round(n-t.outerHeight()-d),d=0)}}),undefined):t.animate(i,o,r,v):e.animate(a,o,r,v)},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}})})(jQuery);(function(e){e.widget("ui.autocomplete",{version:"1.10.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,i=!0,undefined;t=!1,s=!1,i=!1;var a=e.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:t=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case a.UP:t=!0,this._keyEvent("previous",n);break;case a.DOWN:t=!0,this._keyEvent("next",n);break;case a.ENTER:case a.NUMPAD_ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),undefined;if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){return s?(s=!1,e.preventDefault(),undefined):(this._searchTimeout(e),undefined)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,undefined):(clearTimeout(this.searching),this.close(e),this._change(e),undefined)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(s){s.target===t.element[0]||s.target===i||e.contains(i,s.target)||t.close()})})},menufocus:function(t,i){if(this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type)))return this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),undefined;var s=i.item.data("ui-autocomplete-item");!1!==this._trigger("focus",t,{item:s})?t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(s.value):this.liveRegion.text(s.value)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):undefined},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return e.proxy(function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({label:t.label||t.value,value:t.value||t.label},t)})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,function(e,i){s._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").append(e("<a>").text(i.label)).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this._value(this.term),this.menu.blur(),undefined):(this.menu[e](t),undefined):(this.search(null,t),undefined)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return s.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var t;this._superApply(arguments),this.options.disabled||this.cancelSearch||(t=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.text(t))}})})(jQuery);(function(e){var t,i="ui-button ui-widget ui-state-default ui-corner-all",n="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",s=function(){var t=e(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},a=function(t){var i=t.name,n=t.form,s=e([]);return i&&(i=i.replace(/'/g,"\\'"),s=n?e(n).find("[name='"+i+"']"):e("[name='"+i+"']",t.ownerDocument).filter(function(){return!this.form})),s};e.widget("ui.button",{version:"1.10.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,s),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var n=this,o=this.options,r="checkbox"===this.type||"radio"===this.type,h=r?"":"ui-state-active";null===o.label&&(o.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(i).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){o.disabled||this===t&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){o.disabled||e(this).removeClass(h)}).bind("click"+this.eventNamespace,function(e){o.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),r&&this.element.bind("change"+this.eventNamespace,function(){n.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return o.disabled?!1:undefined}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(o.disabled)return!1;e(this).addClass("ui-state-active"),n.buttonElement.attr("aria-pressed","true");var t=n.element[0];a(t).not(t).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return o.disabled?!1:(e(this).addClass("ui-state-active"),t=this,n.document.one("mouseup",function(){t=null}),undefined)}).bind("mouseup"+this.eventNamespace,function(){return o.disabled?!1:(e(this).removeClass("ui-state-active"),undefined)}).bind("keydown"+this.eventNamespace,function(t){return o.disabled?!1:((t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active"),undefined)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",o.disabled),this._resetButton()},_determineButtonType:function(){var e,t,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(i+" ui-state-active "+n).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){return this._super(e,t),"disabled"===e?(this.element.prop("disabled",!!t),t&&this.buttonElement.removeClass("ui-state-focus"),undefined):(this._resetButton(),undefined)},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),"radio"===this.type?a(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),undefined;var t=this.buttonElement.removeClass(n),i=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),s=this.options.icons,a=s.primary&&s.secondary,o=[];s.primary||s.secondary?(this.options.text&&o.push("ui-button-text-icon"+(a?"s":s.primary?"-primary":"-secondary")),s.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>"),s.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>"),this.options.text||(o.push(a?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(i)))):o.push("ui-button-text-only"),t.addClass(o.join(" "))}}),e.widget("ui.buttonset",{version:"1.10.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){"disabled"===e&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t="rtl"===this.element.css("direction");this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);(function(e,t){function i(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.dpDiv=a(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function a(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",function(){e.datepicker._isDisabledDatepicker(n.inline?t.parent()[0]:n.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))})}function s(t,i){e.extend(t,i);for(var a in i)null==i[a]&&(t[a]=i[a]);return t}e.extend(e.ui,{datepicker:{version:"1.10.4"}});var n,r="datepicker";e.extend(i.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return s(this._defaults,e||{}),this},_attachDatepicker:function(t,i){var a,s,n;a=t.nodeName.toLowerCase(),s="div"===a||"span"===a,t.id||(this.uuid+=1,t.id="dp"+this.uuid),n=this._newInst(e(t),s),n.settings=e.extend({},i||{}),"input"===a?this._connectDatepicker(t,n):s&&this._inlineDatepicker(t,n)},_newInst:function(t,i){var s=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?a(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,i){var a=e(t);i.append=e([]),i.trigger=e([]),a.hasClass(this.markerClassName)||(this._attachments(a,i),a.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),e.data(t,r,i),i.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var a,s,n,r=this._get(i,"appendText"),o=this._get(i,"isRTL");i.append&&i.append.remove(),r&&(i.append=e("<span class='"+this._appendClass+"'>"+r+"</span>"),t[o?"before":"after"](i.append)),t.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),a=this._get(i,"showOn"),("focus"===a||"both"===a)&&t.focus(this._showDatepicker),("button"===a||"both"===a)&&(s=this._get(i,"buttonText"),n=this._get(i,"buttonImage"),i.trigger=e(this._get(i,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:n,alt:s,title:s}):e("<button type='button'></button>").addClass(this._triggerClass).html(n?e("<img/>").attr({src:n,alt:s,title:s}):s)),t[o?"before":"after"](i.trigger),i.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,i,a,s,n=new Date(2009,11,20),r=this._get(e,"dateFormat");r.match(/[DM]/)&&(t=function(e){for(i=0,a=0,s=0;e.length>s;s++)e[s].length>i&&(i=e[s].length,a=s);return a},n.setMonth(t(this._get(e,r.match(/MM/)?"monthNames":"monthNamesShort"))),n.setDate(t(this._get(e,r.match(/DD/)?"dayNames":"dayNamesShort"))+20-n.getDay())),e.input.attr("size",this._formatDate(e,n).length)}},_inlineDatepicker:function(t,i){var a=e(t);a.hasClass(this.markerClassName)||(a.addClass(this.markerClassName).append(i.dpDiv),e.data(t,r,i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(t),i.dpDiv.css("display","block"))},_dialogDatepicker:function(t,i,a,n,o){var u,c,h,l,d,p=this._dialogInst;return p||(this.uuid+=1,u="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+u+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),p=this._dialogInst=this._newInst(this._dialogInput,!1),p.settings={},e.data(this._dialogInput[0],r,p)),s(p.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(p,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(c=document.documentElement.clientWidth,h=document.documentElement.clientHeight,l=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[c/2-100+l,h/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),p.settings.onSelect=a,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],r,p),this},_destroyDatepicker:function(t){var i,a=e(t),s=e.data(t,r);a.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),e.removeData(t,r),"input"===i?(s.append.remove(),s.trigger.remove(),a.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&a.removeClass(this.markerClassName).empty())},_enableDatepicker:function(t){var i,a,s=e(t),n=e.data(t,r);s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!1,n.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(a=s.children("."+this._inlineClass),a.children().removeClass("ui-state-disabled"),a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var i,a,s=e(t),n=e.data(t,r);s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!0,n.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(a=s.children("."+this._inlineClass),a.children().addClass("ui-state-disabled"),a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,r)}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(i,a,n){var r,o,u,c,h=this._getInst(i);return 2===arguments.length&&"string"==typeof a?"defaults"===a?e.extend({},e.datepicker._defaults):h?"all"===a?e.extend({},h.settings):this._get(h,a):null:(r=a||{},"string"==typeof a&&(r={},r[a]=n),h&&(this._curInst===h&&this._hideDatepicker(),o=this._getDateDatepicker(i,!0),u=this._getMinMaxDate(h,"min"),c=this._getMinMaxDate(h,"max"),s(h.settings,r),null!==u&&r.dateFormat!==t&&r.minDate===t&&(h.settings.minDate=this._formatDate(h,u)),null!==c&&r.dateFormat!==t&&r.maxDate===t&&(h.settings.maxDate=this._formatDate(h,c)),"disabled"in r&&(r.disabled?this._disableDatepicker(i):this._enableDatepicker(i)),this._attachments(e(i),h),this._autoSize(h),this._setDate(h,o),this._updateAlternate(h),this._updateDatepicker(h)),t)},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var i,a,s,n=e.datepicker._getInst(t.target),r=!0,o=n.dpDiv.is(".ui-datepicker-rtl");if(n._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),r=!1;break;case 13:return s=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",n.dpDiv),s[0]&&e.datepicker._selectDay(t.target,n.selectedMonth,n.selectedYear,s[0]),i=e.datepicker._get(n,"onSelect"),i?(a=e.datepicker._formatDate(n),i.apply(n.input?n.input[0]:null,[a,n])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(n,"stepBigMonths"):-e.datepicker._get(n,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(n,"stepBigMonths"):+e.datepicker._get(n,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),r=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),r=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,o?1:-1,"D"),r=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(n,"stepBigMonths"):-e.datepicker._get(n,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),r=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,o?-1:1,"D"),r=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(n,"stepBigMonths"):+e.datepicker._get(n,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),r=t.ctrlKey||t.metaKey;break;default:r=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):r=!1;r&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(i){var a,s,n=e.datepicker._getInst(i.target);return e.datepicker._get(n,"constrainInput")?(a=e.datepicker._possibleChars(e.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==i.charCode?i.keyCode:i.charCode),i.ctrlKey||i.metaKey||" ">s||!a||a.indexOf(s)>-1):t},_doKeyUp:function(t){var i,a=e.datepicker._getInst(t.target);if(a.input.val()!==a.lastVal)try{i=e.datepicker.parseDate(e.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,e.datepicker._getFormatConfig(a)),i&&(e.datepicker._setDateFromField(a),e.datepicker._updateAlternate(a),e.datepicker._updateDatepicker(a))}catch(s){}return!0},_showDatepicker:function(t){if(t=t.target||t,"input"!==t.nodeName.toLowerCase()&&(t=e("input",t.parentNode)[0]),!e.datepicker._isDisabledDatepicker(t)&&e.datepicker._lastInput!==t){var i,a,n,r,o,u,c;i=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==i&&(e.datepicker._curInst.dpDiv.stop(!0,!0),i&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),a=e.datepicker._get(i,"beforeShow"),n=a?a.apply(t,[t,i]):{},n!==!1&&(s(i.settings,n),i.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(i),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),r=!1,e(t).parents().each(function(){return r|="fixed"===e(this).css("position"),!r}),o={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(i),o=e.datepicker._checkOffset(i,o,r),i.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":r?"fixed":"absolute",display:"none",left:o.left+"px",top:o.top+"px"}),i.inline||(u=e.datepicker._get(i,"showAnim"),c=e.datepicker._get(i,"duration"),i.dpDiv.zIndex(e(t).zIndex()+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[u]?i.dpDiv.show(u,e.datepicker._get(i,"showOptions"),c):i.dpDiv[u||"show"](u?c:null),e.datepicker._shouldFocusInput(i)&&i.input.focus(),e.datepicker._curInst=i))}},_updateDatepicker:function(t){this.maxRows=4,n=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t),t.dpDiv.find("."+this._dayOverClass+" a").mouseover();var i,a=this._getNumberOfMonths(t),s=a[1],r=17;t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),s>1&&t.dpDiv.addClass("ui-datepicker-multi-"+s).css("width",r*s+"em"),t.dpDiv[(1!==a[0]||1!==a[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),i=t.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,i,a){var s=t.dpDiv.outerWidth(),n=t.dpDiv.outerHeight(),r=t.input?t.input.outerWidth():0,o=t.input?t.input.outerHeight():0,u=document.documentElement.clientWidth+(a?0:e(document).scrollLeft()),c=document.documentElement.clientHeight+(a?0:e(document).scrollTop());return i.left-=this._get(t,"isRTL")?s-r:0,i.left-=a&&i.left===t.input.offset().left?e(document).scrollLeft():0,i.top-=a&&i.top===t.input.offset().top+o?e(document).scrollTop():0,i.left-=Math.min(i.left,i.left+s>u&&u>s?Math.abs(i.left+s-u):0),i.top-=Math.min(i.top,i.top+n>c&&c>n?Math.abs(n+o):0),i},_findPos:function(t){for(var i,a=this._getInst(t),s=this._get(a,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[s?"previousSibling":"nextSibling"];return i=e(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var i,a,s,n,o=this._curInst;!o||t&&o!==e.data(t,r)||this._datepickerShowing&&(i=this._get(o,"showAnim"),a=this._get(o,"duration"),s=function(){e.datepicker._tidyDialog(o)},e.effects&&(e.effects.effect[i]||e.effects[i])?o.dpDiv.hide(i,e.datepicker._get(o,"showOptions"),a,s):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?a:null,s),i||s(),this._datepickerShowing=!1,n=this._get(o,"onClose"),n&&n.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var i=e(t.target),a=e.datepicker._getInst(i[0]);(i[0].id!==e.datepicker._mainDivId&&0===i.parents("#"+e.datepicker._mainDivId).length&&!i.hasClass(e.datepicker.markerClassName)&&!i.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||i.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==a)&&e.datepicker._hideDatepicker()}},_adjustDate:function(t,i,a){var s=e(t),n=this._getInst(s[0]);this._isDisabledDatepicker(s[0])||(this._adjustInstDate(n,i+("M"===a?this._get(n,"showCurrentAtPos"):0),a),this._updateDatepicker(n))},_gotoToday:function(t){var i,a=e(t),s=this._getInst(a[0]);this._get(s,"gotoCurrent")&&s.currentDay?(s.selectedDay=s.currentDay,s.drawMonth=s.selectedMonth=s.currentMonth,s.drawYear=s.selectedYear=s.currentYear):(i=new Date,s.selectedDay=i.getDate(),s.drawMonth=s.selectedMonth=i.getMonth(),s.drawYear=s.selectedYear=i.getFullYear()),this._notifyChange(s),this._adjustDate(a)},_selectMonthYear:function(t,i,a){var s=e(t),n=this._getInst(s[0]);n["selected"+("M"===a?"Month":"Year")]=n["draw"+("M"===a?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(n),this._adjustDate(s)},_selectDay:function(t,i,a,s){var n,r=e(t);e(s).hasClass(this._unselectableClass)||this._isDisabledDatepicker(r[0])||(n=this._getInst(r[0]),n.selectedDay=n.currentDay=e("a",s).html(),n.selectedMonth=n.currentMonth=i,n.selectedYear=n.currentYear=a,this._selectDate(t,this._formatDate(n,n.currentDay,n.currentMonth,n.currentYear)))},_clearDate:function(t){var i=e(t);this._selectDate(i,"")},_selectDate:function(t,i){var a,s=e(t),n=this._getInst(s[0]);i=null!=i?i:this._formatDate(n),n.input&&n.input.val(i),this._updateAlternate(n),a=this._get(n,"onSelect"),a?a.apply(n.input?n.input[0]:null,[i,n]):n.input&&n.input.trigger("change"),n.inline?this._updateDatepicker(n):(this._hideDatepicker(),this._lastInput=n.input[0],"object"!=typeof n.input[0]&&n.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var i,a,s,n=this._get(t,"altField");n&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),a=this._getDate(t),s=this.formatDate(i,a,this._getFormatConfig(t)),e(n).each(function(){e(this).val(s)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t,i=new Date(e.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},parseDate:function(i,a,s){if(null==i||null==a)throw"Invalid arguments";if(a="object"==typeof a?""+a:a+"",""===a)return null;var n,r,o,u,c=0,h=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,l="string"!=typeof h?h:(new Date).getFullYear()%100+parseInt(h,10),d=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,p=(s?s.dayNames:null)||this._defaults.dayNames,g=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,m=(s?s.monthNames:null)||this._defaults.monthNames,f=-1,_=-1,v=-1,k=-1,y=!1,b=function(e){var t=i.length>n+1&&i.charAt(n+1)===e;return t&&n++,t},D=function(e){var t=b(e),i="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,s=RegExp("^\\d{1,"+i+"}"),n=a.substring(c).match(s);if(!n)throw"Missing number at position "+c;return c+=n[0].length,parseInt(n[0],10)},w=function(i,s,n){var r=-1,o=e.map(b(i)?n:s,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(o,function(e,i){var s=i[1];return a.substr(c,s.length).toLowerCase()===s.toLowerCase()?(r=i[0],c+=s.length,!1):t}),-1!==r)return r+1;throw"Unknown name at position "+c},M=function(){if(a.charAt(c)!==i.charAt(n))throw"Unexpected literal at position "+c;c++};for(n=0;i.length>n;n++)if(y)"'"!==i.charAt(n)||b("'")?M():y=!1;else switch(i.charAt(n)){case"d":v=D("d");break;case"D":w("D",d,p);break;case"o":k=D("o");break;case"m":_=D("m");break;case"M":_=w("M",g,m);break;case"y":f=D("y");break;case"@":u=new Date(D("@")),f=u.getFullYear(),_=u.getMonth()+1,v=u.getDate();break;case"!":u=new Date((D("!")-this._ticksTo1970)/1e4),f=u.getFullYear(),_=u.getMonth()+1,v=u.getDate();break;case"'":b("'")?M():y=!0;break;default:M()}if(a.length>c&&(o=a.substr(c),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===f?f=(new Date).getFullYear():100>f&&(f+=(new Date).getFullYear()-(new Date).getFullYear()%100+(l>=f?0:-100)),k>-1)for(_=1,v=k;;){if(r=this._getDaysInMonth(f,_-1),r>=v)break;_++,v-=r}if(u=this._daylightSavingAdjust(new Date(f,_-1,v)),u.getFullYear()!==f||u.getMonth()+1!==_||u.getDate()!==v)throw"Invalid date";return u},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";var a,s=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,n=(i?i.dayNames:null)||this._defaults.dayNames,r=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,o=(i?i.monthNames:null)||this._defaults.monthNames,u=function(t){var i=e.length>a+1&&e.charAt(a+1)===t;return i&&a++,i},c=function(e,t,i){var a=""+t;if(u(e))for(;i>a.length;)a="0"+a;return a},h=function(e,t,i,a){return u(e)?a[t]:i[t]},l="",d=!1;if(t)for(a=0;e.length>a;a++)if(d)"'"!==e.charAt(a)||u("'")?l+=e.charAt(a):d=!1;else switch(e.charAt(a)){case"d":l+=c("d",t.getDate(),2);break;case"D":l+=h("D",t.getDay(),s,n);break;case"o":l+=c("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":l+=c("m",t.getMonth()+1,2);break;case"M":l+=h("M",t.getMonth(),r,o);break;case"y":l+=u("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":l+=t.getTime();break;case"!":l+=1e4*t.getTime()+this._ticksTo1970;break;case"'":u("'")?l+="'":d=!0;break;default:l+=e.charAt(a)}return l},_possibleChars:function(e){var t,i="",a=!1,s=function(i){var a=e.length>t+1&&e.charAt(t+1)===i;return a&&t++,a};for(t=0;e.length>t;t++)if(a)"'"!==e.charAt(t)||s("'")?i+=e.charAt(t):a=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":s("'")?i+="'":a=!0;break;default:i+=e.charAt(t)}return i},_get:function(e,i){return e.settings[i]!==t?e.settings[i]:this._defaults[i]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var i=this._get(e,"dateFormat"),a=e.lastVal=e.input?e.input.val():null,s=this._getDefaultDate(e),n=s,r=this._getFormatConfig(e);try{n=this.parseDate(i,a,r)||s}catch(o){a=t?"":a}e.selectedDay=n.getDate(),e.drawMonth=e.selectedMonth=n.getMonth(),e.drawYear=e.selectedYear=n.getFullYear(),e.currentDay=a?n.getDate():0,e.currentMonth=a?n.getMonth():0,e.currentYear=a?n.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,i,a){var s=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},n=function(i){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),i,e.datepicker._getFormatConfig(t))}catch(a){}for(var s=(i.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,n=s.getFullYear(),r=s.getMonth(),o=s.getDate(),u=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,c=u.exec(i);c;){switch(c[2]||"d"){case"d":case"D":o+=parseInt(c[1],10);break;case"w":case"W":o+=7*parseInt(c[1],10);break;case"m":case"M":r+=parseInt(c[1],10),o=Math.min(o,e.datepicker._getDaysInMonth(n,r));break;case"y":case"Y":n+=parseInt(c[1],10),o=Math.min(o,e.datepicker._getDaysInMonth(n,r))}c=u.exec(i)}return new Date(n,r,o)},r=null==i||""===i?a:"string"==typeof i?n(i):"number"==typeof i?isNaN(i)?a:s(i):new Date(i.getTime());return r=r&&"Invalid Date"==""+r?a:r,r&&(r.setHours(0),r.setMinutes(0),r.setSeconds(0),r.setMilliseconds(0)),this._daylightSavingAdjust(r)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var a=!t,s=e.selectedMonth,n=e.selectedYear,r=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=r.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=r.getMonth(),e.drawYear=e.selectedYear=e.currentYear=r.getFullYear(),s===e.selectedMonth&&n===e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(a?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var i=this._get(t,"stepMonths"),a="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(a,-i,"M")},next:function(){e.datepicker._adjustDate(a,+i,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(a)},selectDay:function(){return e.datepicker._selectDay(a,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(a,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(a,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,i,a,s,n,r,o,u,c,h,l,d,p,g,m,f,_,v,k,y,b,D,w,M,C,x,I,N,T,A,E,S,Y,F,P,O,j,K,R,H=new Date,W=this._daylightSavingAdjust(new Date(H.getFullYear(),H.getMonth(),H.getDate())),L=this._get(e,"isRTL"),U=this._get(e,"showButtonPanel"),B=this._get(e,"hideIfNoPrevNext"),z=this._get(e,"navigationAsDateFormat"),q=this._getNumberOfMonths(e),G=this._get(e,"showCurrentAtPos"),J=this._get(e,"stepMonths"),Q=1!==q[0]||1!==q[1],V=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),$=this._getMinMaxDate(e,"min"),X=this._getMinMaxDate(e,"max"),Z=e.drawMonth-G,et=e.drawYear;if(0>Z&&(Z+=12,et--),X)for(t=this._daylightSavingAdjust(new Date(X.getFullYear(),X.getMonth()-q[0]*q[1]+1,X.getDate())),t=$&&$>t?$:t;this._daylightSavingAdjust(new Date(et,Z,1))>t;)Z--,0>Z&&(Z=11,et--);for(e.drawMonth=Z,e.drawYear=et,i=this._get(e,"prevText"),i=z?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z-J,1)),this._getFormatConfig(e)):i,a=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(L?"e":"w")+"'>"+i+"</span></a>":B?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(L?"e":"w")+"'>"+i+"</span></a>",s=this._get(e,"nextText"),s=z?this.formatDate(s,this._daylightSavingAdjust(new Date(et,Z+J,1)),this._getFormatConfig(e)):s,n=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(L?"w":"e")+"'>"+s+"</span></a>":B?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+s+"'><span class='ui-icon ui-icon-circle-triangle-"+(L?"w":"e")+"'>"+s+"</span></a>",r=this._get(e,"currentText"),o=this._get(e,"gotoCurrent")&&e.currentDay?V:W,r=z?this.formatDate(r,o,this._getFormatConfig(e)):r,u=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",c=U?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(L?u:"")+(this._isInRange(e,o)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+r+"</button>":"")+(L?"":u)+"</div>":"",h=parseInt(this._get(e,"firstDay"),10),h=isNaN(h)?0:h,l=this._get(e,"showWeek"),d=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),g=this._get(e,"monthNames"),m=this._get(e,"monthNamesShort"),f=this._get(e,"beforeShowDay"),_=this._get(e,"showOtherMonths"),v=this._get(e,"selectOtherMonths"),k=this._getDefaultDate(e),y="",D=0;q[0]>D;D++){for(w="",this.maxRows=4,M=0;q[1]>M;M++){if(C=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),x=" ui-corner-all",I="",Q){if(I+="<div class='ui-datepicker-group",q[1]>1)switch(M){case 0:I+=" ui-datepicker-group-first",x=" ui-corner-"+(L?"right":"left");break;case q[1]-1:I+=" ui-datepicker-group-last",x=" ui-corner-"+(L?"left":"right");break;default:I+=" ui-datepicker-group-middle",x=""}I+="'>"}for(I+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+x+"'>"+(/all|left/.test(x)&&0===D?L?n:a:"")+(/all|right/.test(x)&&0===D?L?a:n:"")+this._generateMonthYearHeader(e,Z,et,$,X,D>0||M>0,g,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",N=l?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",b=0;7>b;b++)T=(b+h)%7,N+="<th"+((b+h+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[T]+"'>"+p[T]+"</span></th>";for(I+=N+"</tr></thead><tbody>",A=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,A)),E=(this._getFirstDayOfMonth(et,Z)-h+7)%7,S=Math.ceil((E+A)/7),Y=Q?this.maxRows>S?this.maxRows:S:S,this.maxRows=Y,F=this._daylightSavingAdjust(new Date(et,Z,1-E)),P=0;Y>P;P++){for(I+="<tr>",O=l?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(F)+"</td>":"",b=0;7>b;b++)j=f?f.apply(e.input?e.input[0]:null,[F]):[!0,""],K=F.getMonth()!==Z,R=K&&!v||!j[0]||$&&$>F||X&&F>X,O+="<td class='"+((b+h+6)%7>=5?" ui-datepicker-week-end":"")+(K?" ui-datepicker-other-month":"")+(F.getTime()===C.getTime()&&Z===e.selectedMonth&&e._keyEvent||k.getTime()===F.getTime()&&k.getTime()===C.getTime()?" "+this._dayOverClass:"")+(R?" "+this._unselectableClass+" ui-state-disabled":"")+(K&&!_?"":" "+j[1]+(F.getTime()===V.getTime()?" "+this._currentClass:"")+(F.getTime()===W.getTime()?" ui-datepicker-today":""))+"'"+(K&&!_||!j[2]?"":" title='"+j[2].replace(/'/g,"&#39;")+"'")+(R?"":" data-handler='selectDay' data-event='click' data-month='"+F.getMonth()+"' data-year='"+F.getFullYear()+"'")+">"+(K&&!_?"&#xa0;":R?"<span class='ui-state-default'>"+F.getDate()+"</span>":"<a class='ui-state-default"+(F.getTime()===W.getTime()?" ui-state-highlight":"")+(F.getTime()===V.getTime()?" ui-state-active":"")+(K?" ui-priority-secondary":"")+"' href='#'>"+F.getDate()+"</a>")+"</td>",F.setDate(F.getDate()+1),F=this._daylightSavingAdjust(F);I+=O+"</tr>"}Z++,Z>11&&(Z=0,et++),I+="</tbody></table>"+(Q?"</div>"+(q[0]>0&&M===q[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),w+=I}y+=w}return y+=c,e._keyEvent=!1,y},_generateMonthYearHeader:function(e,t,i,a,s,n,r,o){var u,c,h,l,d,p,g,m,f=this._get(e,"changeMonth"),_=this._get(e,"changeYear"),v=this._get(e,"showMonthAfterYear"),k="<div class='ui-datepicker-title'>",y="";if(n||!f)y+="<span class='ui-datepicker-month'>"+r[t]+"</span>";else{for(u=a&&a.getFullYear()===i,c=s&&s.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",h=0;12>h;h++)(!u||h>=a.getMonth())&&(!c||s.getMonth()>=h)&&(y+="<option value='"+h+"'"+(h===t?" selected='selected'":"")+">"+o[h]+"</option>");y+="</select>"}if(v||(k+=y+(!n&&f&&_?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",n||!_)k+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(l=this._get(e,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?i+parseInt(e.substring(1),10):e.match(/[+\-].*/)?d+parseInt(e,10):parseInt(e,10);
return isNaN(t)?d:t},g=p(l[0]),m=Math.max(g,p(l[1]||"")),g=a?Math.max(g,a.getFullYear()):g,m=s?Math.min(m,s.getFullYear()):m,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=g;g++)e.yearshtml+="<option value='"+g+"'"+(g===i?" selected='selected'":"")+">"+g+"</option>";e.yearshtml+="</select>",k+=e.yearshtml,e.yearshtml=null}return k+=this._get(e,"yearSuffix"),v&&(k+=(!n&&f&&_?"":"&#xa0;")+y),k+="</div>"},_adjustInstDate:function(e,t,i){var a=e.drawYear+("Y"===i?t:0),s=e.drawMonth+("M"===i?t:0),n=Math.min(e.selectedDay,this._getDaysInMonth(a,s))+("D"===i?t:0),r=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(a,s,n)));e.selectedDay=r.getDate(),e.drawMonth=e.selectedMonth=r.getMonth(),e.drawYear=e.selectedYear=r.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),s=i&&i>t?i:t;return a&&s>a?a:s},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,a){var s=this._getNumberOfMonths(e),n=this._daylightSavingAdjust(new Date(i,a+(0>t?t:s[0]*s[1]),1));return 0>t&&n.setDate(this._getDaysInMonth(n.getFullYear(),n.getMonth())),this._isInRange(e,n)},_isInRange:function(e,t){var i,a,s=this._getMinMaxDate(e,"min"),n=this._getMinMaxDate(e,"max"),r=null,o=null,u=this._get(e,"yearRange");return u&&(i=u.split(":"),a=(new Date).getFullYear(),r=parseInt(i[0],10),o=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(r+=a),i[1].match(/[+\-].*/)&&(o+=a)),(!s||t.getTime()>=s.getTime())&&(!n||t.getTime()<=n.getTime())&&(!r||t.getFullYear()>=r)&&(!o||o>=t.getFullYear())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,a){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var s=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(a,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),s,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(i)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i))},e.datepicker=new i,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.10.4"})(jQuery);(function(e){var t={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},i={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};e.widget("ui.dialog",{version:"1.10.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var i=e(this).css(t).offset().top;0>i&&e(this).css("top",t.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&e.fn.draggable&&this._makeDraggable(),this.options.resizable&&e.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?e(t):this.document.find(t||"body").eq(0)},_destroy:function(){var e,t=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:e.noop,enable:e.noop,close:function(t){var i,a=this;if(this._isOpen&&this._trigger("beforeClose",t)!==!1){if(this._isOpen=!1,this._destroyOverlay(),!this.opener.filter(":focusable").focus().length)try{i=this.document[0].activeElement,i&&"body"!==i.nodeName.toLowerCase()&&e(i).blur()}catch(s){}this._hide(this.uiDialog,this.options.hide,function(){a._trigger("close",t)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,t){var i=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return i&&!t&&this._trigger("focus",e),i},open:function(){var t=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),undefined):(this._isOpen=!0,this.opener=e(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._trigger("open"),undefined)},_focusTabbable:function(){var e=this.element.find("[autofocus]");e.length||(e=this.element.find(":tabbable")),e.length||(e=this.uiDialogButtonPane.find(":tabbable")),e.length||(e=this.uiDialogTitlebarClose.filter(":tabbable")),e.length||(e=this.uiDialog),e.eq(0).focus()},_keepFocus:function(t){function i(){var t=this.document[0].activeElement,i=this.uiDialog[0]===t||e.contains(this.uiDialog[0],t);i||this._focusTabbable()}t.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE)return t.preventDefault(),this.close(t),undefined;if(t.keyCode===e.ui.keyCode.TAB){var i=this.uiDialog.find(":tabbable"),a=i.filter(":first"),s=i.filter(":last");t.target!==s[0]&&t.target!==this.uiDialog[0]||t.shiftKey?t.target!==a[0]&&t.target!==this.uiDialog[0]||!t.shiftKey||(s.focus(1),t.preventDefault()):(a.focus(1),t.preventDefault())}},mousedown:function(e){this._moveToTop(e)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){e(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=e("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault(),this.close(e)}}),t=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(e){this.options.title||e.html("&#160;"),e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var t=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),e.isEmptyObject(i)||e.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),undefined):(e.each(i,function(i,a){var s,n;a=e.isFunction(a)?{click:a,text:i}:a,a=e.extend({type:"button"},a),s=a.click,a.click=function(){s.apply(t.element[0],arguments)},n={icons:a.icons,text:a.showText},delete a.icons,delete a.showText,e("<button></button>",a).button(n).appendTo(t.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),undefined)},_makeDraggable:function(){function t(e){return{position:e.position,offset:e.offset}}var i=this,a=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(a,s){e(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",a,t(s))},drag:function(e,a){i._trigger("drag",e,t(a))},stop:function(s,n){a.position=[n.position.left-i.document.scrollLeft(),n.position.top-i.document.scrollTop()],e(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",s,t(n))}})},_makeResizable:function(){function t(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}var i=this,a=this.options,s=a.resizable,n=this.uiDialog.css("position"),r="string"==typeof s?s:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:a.maxWidth,maxHeight:a.maxHeight,minWidth:a.minWidth,minHeight:this._minHeight(),handles:r,start:function(a,s){e(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",a,t(s))},resize:function(e,a){i._trigger("resize",e,t(a))},stop:function(s,n){a.height=e(this).height(),a.width=e(this).width(),e(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",s,t(n))}}).css("position",n)},_minHeight:function(){var e=this.options;return"auto"===e.height?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");e||this.uiDialog.show(),this.uiDialog.position(this.options.position),e||this.uiDialog.hide()},_setOptions:function(a){var s=this,n=!1,r={};e.each(a,function(e,a){s._setOption(e,a),e in t&&(n=!0),e in i&&(r[e]=a)}),n&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",r)},_setOption:function(e,t){var i,a,s=this.uiDialog;"dialogClass"===e&&s.removeClass(this.options.dialogClass).addClass(t),"disabled"!==e&&(this._super(e,t),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:""+t}),"draggable"===e&&(i=s.is(":data(ui-draggable)"),i&&!t&&s.draggable("destroy"),!i&&t&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(a=s.is(":data(ui-resizable)"),a&&!t&&s.resizable("destroy"),a&&"string"==typeof t&&s.resizable("option","handles",t),a||t===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var e,t,i,a=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),a.minWidth>a.width&&(a.width=a.minWidth),e=this.uiDialog.css({height:"auto",width:a.width}).outerHeight(),t=Math.max(0,a.minHeight-e),i="number"==typeof a.maxHeight?Math.max(0,a.maxHeight-e):"none","auto"===a.height?this.element.css({minHeight:t,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,a.height-e)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=e(this);return e("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return e(t.target).closest(".ui-dialog").length?!0:!!e(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var t=this,i=this.widgetFullName;e.ui.dialog.overlayInstances||this._delay(function(){e.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(a){t._allowInteraction(a)||(a.preventDefault(),e(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())})}),this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),e.ui.dialog.overlayInstances++}},_destroyOverlay:function(){this.options.modal&&this.overlay&&(e.ui.dialog.overlayInstances--,e.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}}),e.ui.dialog.overlayInstances=0,e.uiBackCompat!==!1&&e.widget("ui.dialog",e.ui.dialog,{_position:function(){var t,i=this.options.position,a=[],s=[0,0];i?(("string"==typeof i||"object"==typeof i&&"0"in i)&&(a=i.split?i.split(" "):[i[0],i[1]],1===a.length&&(a[1]=a[0]),e.each(["left","top"],function(e,t){+a[e]===a[e]&&(s[e]=a[e],a[e]=t)}),i={my:a[0]+(0>s[0]?s[0]:"+"+s[0])+" "+a[1]+(0>s[1]?s[1]:"+"+s[1]),at:a.join(" ")}),i=e.extend({},e.ui.dialog.prototype.options.position,i)):i=e.ui.dialog.prototype.options.position,t=this.uiDialog.is(":visible"),t||this.uiDialog.show(),this.uiDialog.position(i),t||this.uiDialog.hide()}})})(jQuery);(function(t){t.widget("ui.draggable",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(e){var i=this.options;return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(t(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(t(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_mouseDrag:function(e,i){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"original"!==this.options.helper||t.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1):!1},_mouseUp:function(e){return t("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.element.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;return n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===n.containment?(this.containment=[0,0,t(document).width()-this.helperProportions.width-this.margins.left,(t(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):n.containment.constructor===Array?(this.containment=n.containment,undefined):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e="hidden"!==i.css("overflow"),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i),undefined):(this.containment=null,undefined)},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:n.scrollTop(),left:n.scrollLeft()}),{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*s}},_generatePosition:function(e){var i,s,n,a,o=this.options,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,l=e.pageX,h=e.pageY;return this.offset.scroll||(this.offset.scroll={top:r.scrollTop(),left:r.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(h=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(h=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,h=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,l=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a)),{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s]),"drag"===e&&(this.positionAbs=this._convertPositionTo("absolute")),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i){var s=t(this).data("ui-draggable"),n=s.options,a=t.extend({},i,{item:s.element});s.sortables=[],t(n.connectToSortable).each(function(){var i=t.data(this,"ui-sortable");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",e,a))})},stop:function(e,i){var s=t(this).data("ui-draggable"),n=t.extend({},i,{item:s.element});t.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(e),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",e,n))})},drag:function(e,i){var s=t(this).data("ui-draggable"),n=this;t.each(s.sortables,function(){var a=!1,o=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(a=!0,t.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&t.contains(o.instance.element[0],this.instance.element[0])&&(a=!1),a})),a?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=t(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},e.target=this.instance.currentItem[0],this.instance._mouseCapture(e,!0),this.instance._mouseStart(e,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",e),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(e)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",e,this.instance._uiHash(this.instance)),this.instance._mouseStop(e,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",e),s.dropped=!1)})}}),t.ui.plugin.add("draggable","cursor",{start:function(){var e=t("body"),i=t(this).data("ui-draggable").options;e.css("cursor")&&(i._cursor=e.css("cursor")),e.css("cursor",i.cursor)},stop:function(){var e=t(this).data("ui-draggable").options;e._cursor&&t("body").css("cursor",e._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i){var s=t(i.helper),n=t(this).data("ui-draggable").options;s.css("opacity")&&(n._opacity=s.css("opacity")),s.css("opacity",n.opacity)},stop:function(e,i){var s=t(this).data("ui-draggable").options;s._opacity&&t(i.helper).css("opacity",s._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(){var e=t(this).data("ui-draggable");e.scrollParent[0]!==document&&"HTML"!==e.scrollParent[0].tagName&&(e.overflowOffset=e.scrollParent.offset())},drag:function(e){var i=t(this).data("ui-draggable"),s=i.options,n=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-e.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop+s.scrollSpeed:e.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-e.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft+s.scrollSpeed:e.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(e.pageY-t(document).scrollTop()<s.scrollSensitivity?n=t(document).scrollTop(t(document).scrollTop()-s.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<s.scrollSensitivity&&(n=t(document).scrollTop(t(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(e.pageX-t(document).scrollLeft()<s.scrollSensitivity?n=t(document).scrollLeft(t(document).scrollLeft()-s.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<s.scrollSensitivity&&(n=t(document).scrollLeft(t(document).scrollLeft()+s.scrollSpeed)))),n!==!1&&t.ui.ddmanager&&!s.dropBehaviour&&t.ui.ddmanager.prepareOffsets(i,e)}}),t.ui.plugin.add("draggable","snap",{start:function(){var e=t(this).data("ui-draggable"),i=e.options;e.snapElements=[],t(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=t(this),s=i.offset();this!==e.element[0]&&e.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})})},drag:function(e,i){var s,n,a,o,r,l,h,c,u,d,p=t(this).data("ui-draggable"),g=p.options,f=g.snapTolerance,m=i.offset.left,_=m+p.helperProportions.width,v=i.offset.top,b=v+p.helperProportions.height;for(u=p.snapElements.length-1;u>=0;u--)r=p.snapElements[u].left,l=r+p.snapElements[u].width,h=p.snapElements[u].top,c=h+p.snapElements[u].height,r-f>_||m>l+f||h-f>b||v>c+f||!t.contains(p.snapElements[u].item.ownerDocument,p.snapElements[u].item)?(p.snapElements[u].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,e,t.extend(p._uiHash(),{snapItem:p.snapElements[u].item})),p.snapElements[u].snapping=!1):("inner"!==g.snapMode&&(s=f>=Math.abs(h-b),n=f>=Math.abs(c-v),a=f>=Math.abs(r-_),o=f>=Math.abs(l-m),s&&(i.position.top=p._convertPositionTo("relative",{top:h-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:c,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r-p.helperProportions.width}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:l}).left-p.margins.left)),d=s||n||a||o,"outer"!==g.snapMode&&(s=f>=Math.abs(h-v),n=f>=Math.abs(c-b),a=f>=Math.abs(r-m),o=f>=Math.abs(l-_),s&&(i.position.top=p._convertPositionTo("relative",{top:h,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:c-p.helperProportions.height,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:l-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[u].snapping&&(s||n||a||o||d)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,e,t.extend(p._uiHash(),{snapItem:p.snapElements[u].item})),p.snapElements[u].snapping=s||n||a||o||d)}}),t.ui.plugin.add("draggable","stack",{start:function(){var e,i=this.data("ui-draggable").options,s=t.makeArray(t(i.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});s.length&&(e=parseInt(t(s[0]).css("zIndex"),10)||0,t(s).each(function(i){t(this).css("zIndex",e+i)}),this.css("zIndex",e+s.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i){var s=t(i.helper),n=t(this).data("ui-draggable").options;s.css("zIndex")&&(n._zIndex=s.css("zIndex")),s.css("zIndex",n.zIndex)},stop:function(e,i){var s=t(this).data("ui-draggable").options;s._zIndex&&t(i.helper).css("zIndex",s._zIndex)}})})(jQuery);(function(t){function e(t,e,i){return t>e&&e+i>t}t.widget("ui.droppable",{version:"1.10.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=t.isFunction(s)?s:function(t){return t.is(s)},this.proportions=function(){return arguments.length?(e=arguments[0],undefined):e?e:e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},t.ui.ddmanager.droppables[i.scope]=t.ui.ddmanager.droppables[i.scope]||[],t.ui.ddmanager.droppables[i.scope].push(this),i.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var e=0,i=t.ui.ddmanager.droppables[this.options.scope];i.length>e;e++)i[e]===this&&i.splice(e,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(e,i){"accept"===e&&(this.accept=t.isFunction(i)?i:function(t){return t.is(i)}),t.Widget.prototype._setOption.apply(this,arguments)},_activate:function(e){var i=t.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var s=i||t.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var e=t.data(this,"ui-droppable");return e.options.greedy&&!e.options.disabled&&e.options.scope===s.options.scope&&e.accept.call(e.element[0],s.currentItem||s.element)&&t.ui.intersect(s,t.extend(e,{offset:e.element.offset()}),e.options.tolerance)?(n=!0,!1):undefined}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",e,this.ui(s)),this.element):!1):!1},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}}}),t.ui.intersect=function(t,i,s){if(!i.offset)return!1;var n,a,o=(t.positionAbs||t.position.absolute).left,r=(t.positionAbs||t.position.absolute).top,l=o+t.helperProportions.width,h=r+t.helperProportions.height,c=i.offset.left,u=i.offset.top,d=c+i.proportions().width,p=u+i.proportions().height;switch(s){case"fit":return o>=c&&d>=l&&r>=u&&p>=h;case"intersect":return o+t.helperProportions.width/2>c&&d>l-t.helperProportions.width/2&&r+t.helperProportions.height/2>u&&p>h-t.helperProportions.height/2;case"pointer":return n=(t.positionAbs||t.position.absolute).left+(t.clickOffset||t.offset.click).left,a=(t.positionAbs||t.position.absolute).top+(t.clickOffset||t.offset.click).top,e(a,u,i.proportions().height)&&e(n,c,i.proportions().width);case"touch":return(r>=u&&p>=r||h>=u&&p>=h||u>r&&h>p)&&(o>=c&&d>=o||l>=c&&d>=l||c>o&&l>d);default:return!1}},t.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,i){var s,n,a=t.ui.ddmanager.droppables[e.options.scope]||[],o=i?i.type:null,r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(s=0;a.length>s;s++)if(!(a[s].options.disabled||e&&!a[s].accept.call(a[s].element[0],e.currentItem||e.element))){for(n=0;r.length>n;n++)if(r[n]===a[s].element[0]){a[s].proportions().height=0;continue t}a[s].visible="none"!==a[s].element.css("display"),a[s].visible&&("mousedown"===o&&a[s]._activate.call(a[s],i),a[s].offset=a[s].element.offset(),a[s].proportions({width:a[s].element[0].offsetWidth,height:a[s].element[0].offsetHeight}))}},drop:function(e,i){var s=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&t.ui.intersect(e,this,this.options.tolerance)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(e,i){e.element.parentsUntil("body").bind("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,a,o=t.ui.intersect(e,this,this.options.tolerance),r=!o&&this.isover?"isout":o&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,a=this.element.parents(":data(ui-droppable)").filter(function(){return t.data(this,"ui-droppable").options.scope===n}),a.length&&(s=t.data(a[0],"ui-droppable"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(e,i){e.element.parentsUntil("body").unbind("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}}})(jQuery);(function(t,e){var i="ui-effects-";t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=h(),n=s._rgba=[];return i=i.toLowerCase(),f(l,function(t,a){var o,r=a.re.exec(i),l=r&&a.parse(r),h=a.space||"rgba";return l?(o=s[h](l),s[c[h].cache]=o[c[h].cache],n=s._rgba=o._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,a.transparent),s):a[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],h=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=h.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),h.fn=t.extend(h.prototype,{parse:function(n,o,r,l){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(o),o=e);var u=this,d=t.type(n),p=this._rgba=[];return o!==e&&(n=[n,o,r,l],d="array"),"string"===d?this.parse(s(n)||a._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof h?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var a=s.cache;f(s.props,function(t,e){if(!u[a]&&s.to){if("alpha"===t||null==n[t])return;u[a]=s.to(u._rgba)}u[a][e.idx]=i(n[t],e,!0)}),u[a]&&0>t.inArray(null,u[a].slice(0,3))&&(u[a][3]=1,s.from&&(u._rgba=s.from(u[a])))}),this):e},is:function(t){var i=h(t),s=!0,n=this;return f(c,function(t,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=h(t),n=s._space(),a=c[n],o=0===this.alpha()?h("transparent"):this,r=o[a.cache]||a.to(o._rgba),l=r.slice();return s=s[a.cache],f(a.props,function(t,n){var a=n.idx,o=r[a],h=s[a],c=u[n.type]||{};null!==h&&(null===o?l[a]=h:(c.mod&&(h-o>c.mod/2?o+=c.mod:o-h>c.mod/2&&(o-=c.mod)),l[a]=i((h-o)*e+o,n)))}),this[n](l)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=h(e)._rgba;return h(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),h.fn.parse.prototype=h.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,a=t[2]/255,o=t[3],r=Math.max(s,n,a),l=Math.min(s,n,a),h=r-l,c=r+l,u=.5*c;return e=l===r?0:s===r?60*(n-a)/h+360:n===r?60*(a-s)/h+120:60*(s-n)/h+240,i=0===h?0:.5>=u?h/c:h/(2-c),[Math.round(e)%360,i,u,null==o?1:o]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],a=t[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,e+1/3)),Math.round(255*n(r,o,e)),Math.round(255*n(r,o,e-1/3)),a]},f(c,function(s,n){var a=n.props,o=n.cache,l=n.to,c=n.from;h.fn[s]=function(s){if(l&&!this[o]&&(this[o]=l(this._rgba)),s===e)return this[o].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[o].slice();return f(a,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=h(c(d)),n[o]=d,n):h(d)},f(a,function(e,i){h.fn[e]||(h.fn[e]=function(n){var a,o=t.type(n),l="alpha"===e?this._hsla?"hsla":"rgba":s,h=this[l](),c=h[i.idx];return"undefined"===o?c:("function"===o&&(n=n.call(this,c),o=t.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=c+parseFloat(a[2])*("+"===a[1]?1:-1))),h[i.idx]=n,this[l](h)))})})}),h.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var a,o,r="";if("transparent"!==n&&("string"!==t.type(n)||(a=s(n)))){if(n=h(a||n),!d.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&o&&o.style;)try{r=t.css(o,"backgroundColor"),o=o.parentNode}catch(l){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(l){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=h(e.elem,i),e.end=h(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},h.hook(o),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},a=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function s(e,i){var s,n,o={};for(s in i)n=i[s],e[s]!==n&&(a[s]||(t.fx.step[s]||!isNaN(parseFloat(n)))&&(o[s]=n));return o}var n=["add","remove","toggle"],a={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,a,o,r){var l=t.speed(a,o,r);return this.queue(function(){var a,o=t(this),r=o.attr("class")||"",h=l.children?o.find("*").addBack():o;h=h.map(function(){var e=t(this);return{el:e,start:i(this)}}),a=function(){t.each(n,function(t,i){e[i]&&o[i+"Class"](e[i])})},a(),h=h.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),o.attr("class",r),h=h.map(function(){var e=this,i=t.Deferred(),s=t.extend({},l,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,h.get()).done(function(){a(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),l.complete.call(o[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,a){return s?t.effects.animateClass.call(this,{add:i},s,n,a):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,a){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,a):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(i){return function(s,n,a,o,r){return"boolean"==typeof n||n===e?a?t.effects.animateClass.call(this,n?{add:s}:{remove:s},a,o,r):i.apply(this,arguments):t.effects.animateClass.call(this,{toggle:s},n,a,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,a){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,a)}})}(),function(){function s(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function n(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.10.4",save:function(t,e){for(var s=0;e.length>s;s++)null!==e[s]&&t.data(i+e[s],t[0].style[e[s]])},restore:function(t,s){var n,a;for(a=0;s.length>a;a++)null!==s[a]&&(n=t.data(i+s[a]),n===e&&(n=""),t.css(s[a],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return e.wrap(s),(e[0]===a||t.contains(e[0],a))&&t(a).focus(),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var a=e.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),t.fn.extend({effect:function(){function e(e){function s(){t.isFunction(a)&&a.call(n[0]),t.isFunction(e)&&e()}var n=t(this),a=i.complete,r=i.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),s()):o.call(n[0],i,s)}var i=s.apply(this,arguments),n=i.mode,a=i.queue,o=t.effects.effect[i.effect];return t.fx.off||!o?n?this[n](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):a===!1?this.each(e):this.queue(a||"fx",e)},show:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(t.fn.show),hide:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(t.fn.hide),toggle:function(t){return function(e){if(n(e)||"boolean"==typeof e)return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}()})(jQuery);(function(t){var e=/up|down|vertical/,i=/up|left|vertical|horizontal/;t.effects.effect.blind=function(s,n){var a,o,r,l=t(this),h=["position","top","bottom","left","right","height","width"],c=t.effects.setMode(l,s.mode||"hide"),u=s.direction||"up",d=e.test(u),p=d?"height":"width",f=d?"top":"left",g=i.test(u),m={},v="show"===c;l.parent().is(".ui-effects-wrapper")?t.effects.save(l.parent(),h):t.effects.save(l,h),l.show(),a=t.effects.createWrapper(l).css({overflow:"hidden"}),o=a[p](),r=parseFloat(a.css(f))||0,m[p]=v?o:0,g||(l.css(d?"bottom":"right",0).css(d?"top":"left","auto").css({position:"absolute"}),m[f]=v?r:o+r),v&&(a.css(p,0),g||a.css(f,r+o)),a.animate(m,{duration:s.duration,easing:s.easing,queue:!1,complete:function(){"hide"===c&&l.hide(),t.effects.restore(l,h),t.effects.removeWrapper(l),n()}})}})(jQuery);(function(t){t.effects.effect.bounce=function(e,i){var s,n,a,o=t(this),r=["position","top","bottom","left","right","height","width"],l=t.effects.setMode(o,e.mode||"effect"),h="hide"===l,c="show"===l,u=e.direction||"up",d=e.distance,p=e.times||5,f=2*p+(c||h?1:0),g=e.duration/f,m=e.easing,v="up"===u||"down"===u?"top":"left",_="up"===u||"left"===u,b=o.queue(),y=b.length;for((c||h)&&r.push("opacity"),t.effects.save(o,r),o.show(),t.effects.createWrapper(o),d||(d=o["top"===v?"outerHeight":"outerWidth"]()/3),c&&(a={opacity:1},a[v]=0,o.css("opacity",0).css(v,_?2*-d:2*d).animate(a,g,m)),h&&(d/=Math.pow(2,p-1)),a={},a[v]=0,s=0;p>s;s++)n={},n[v]=(_?"-=":"+=")+d,o.animate(n,g,m).animate(a,g,m),d=h?2*d:d/2;h&&(n={opacity:0},n[v]=(_?"-=":"+=")+d,o.animate(n,g,m)),o.queue(function(){h&&o.hide(),t.effects.restore(o,r),t.effects.removeWrapper(o),i()}),y>1&&b.splice.apply(b,[1,0].concat(b.splice(y,f+1))),o.dequeue()}})(jQuery);(function(t){t.effects.effect.clip=function(e,i){var s,n,a,o=t(this),r=["position","top","bottom","left","right","height","width"],l=t.effects.setMode(o,e.mode||"hide"),h="show"===l,c=e.direction||"vertical",u="vertical"===c,d=u?"height":"width",p=u?"top":"left",f={};t.effects.save(o,r),o.show(),s=t.effects.createWrapper(o).css({overflow:"hidden"}),n="IMG"===o[0].tagName?s:o,a=n[d](),h&&(n.css(d,0),n.css(p,a/2)),f[d]=h?a:0,f[p]=h?0:a/2,n.animate(f,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){h||o.hide(),t.effects.restore(o,r),t.effects.removeWrapper(o),i()}})}})(jQuery);(function(t){t.effects.effect.drop=function(e,i){var s,n=t(this),a=["position","top","bottom","left","right","opacity","height","width"],o=t.effects.setMode(n,e.mode||"hide"),r="show"===o,l=e.direction||"left",h="up"===l||"down"===l?"top":"left",c="up"===l||"left"===l?"pos":"neg",u={opacity:r?1:0};t.effects.save(n,a),n.show(),t.effects.createWrapper(n),s=e.distance||n["top"===h?"outerHeight":"outerWidth"](!0)/2,r&&n.css("opacity",0).css(h,"pos"===c?-s:s),u[h]=(r?"pos"===c?"+=":"-=":"pos"===c?"-=":"+=")+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&n.hide(),t.effects.restore(n,a),t.effects.removeWrapper(n),i()}})}})(jQuery);(function(t){t.effects.effect.explode=function(e,i){function s(){b.push(this),b.length===u*d&&n()}function n(){p.css({visibility:"visible"}),t(b).remove(),g||p.hide(),i()}var a,o,r,l,h,c,u=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=u,p=t(this),f=t.effects.setMode(p,e.mode||"hide"),g="show"===f,m=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/d),_=Math.ceil(p.outerHeight()/u),b=[];for(a=0;u>a;a++)for(l=m.top+a*_,c=a-(u-1)/2,o=0;d>o;o++)r=m.left+o*v,h=o-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*v,top:-a*_}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:_,left:r+(g?h*v:0),top:l+(g?c*_:0),opacity:g?0:1}).animate({left:r+(g?0:h*v),top:l+(g?0:c*_),opacity:g?1:0},e.duration||500,e.easing,s)}})(jQuery);(function(t){t.effects.effect.fade=function(e,i){var s=t(this),n=t.effects.setMode(s,e.mode||"toggle");s.animate({opacity:n},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}})(jQuery);(function(t){t.effects.effect.fold=function(e,i){var s,n,a=t(this),o=["position","top","bottom","left","right","height","width"],r=t.effects.setMode(a,e.mode||"hide"),l="show"===r,h="hide"===r,c=e.size||15,u=/([0-9]+)%/.exec(c),d=!!e.horizFirst,p=l!==d,f=p?["width","height"]:["height","width"],g=e.duration/2,m={},v={};t.effects.save(a,o),a.show(),s=t.effects.createWrapper(a).css({overflow:"hidden"}),n=p?[s.width(),s.height()]:[s.height(),s.width()],u&&(c=parseInt(u[1],10)/100*n[h?0:1]),l&&s.css(d?{height:0,width:c}:{height:c,width:0}),m[f[0]]=l?n[0]:c,v[f[1]]=l?n[1]:0,s.animate(m,g,e.easing).animate(v,g,e.easing,function(){h&&a.hide(),t.effects.restore(a,o),t.effects.removeWrapper(a),i()})}})(jQuery);(function(t){t.effects.effect.highlight=function(e,i){var s=t(this),n=["backgroundImage","backgroundColor","opacity"],a=t.effects.setMode(s,e.mode||"show"),o={backgroundColor:s.css("backgroundColor")};"hide"===a&&(o.opacity=0),t.effects.save(s,n),s.show().css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(o,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===a&&s.hide(),t.effects.restore(s,n),i()}})}})(jQuery);(function(t){t.effects.effect.pulsate=function(e,i){var s,n=t(this),a=t.effects.setMode(n,e.mode||"show"),o="show"===a,r="hide"===a,l=o||"hide"===a,h=2*(e.times||5)+(l?1:0),c=e.duration/h,u=0,d=n.queue(),p=d.length;for((o||!n.is(":visible"))&&(n.css("opacity",0).show(),u=1),s=1;h>s;s++)n.animate({opacity:u},c,e.easing),u=1-u;n.animate({opacity:u},c,e.easing),n.queue(function(){r&&n.hide(),i()}),p>1&&d.splice.apply(d,[1,0].concat(d.splice(p,h+1))),n.dequeue()}})(jQuery);(function(t){t.effects.effect.puff=function(e,i){var s=t(this),n=t.effects.setMode(s,e.mode||"hide"),a="hide"===n,o=parseInt(e.percent,10)||150,r=o/100,l={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()};t.extend(e,{effect:"scale",queue:!1,fade:!0,mode:n,complete:i,percent:a?o:100,from:a?l:{height:l.height*r,width:l.width*r,outerHeight:l.outerHeight*r,outerWidth:l.outerWidth*r}}),s.effect(e)},t.effects.effect.scale=function(e,i){var s=t(this),n=t.extend(!0,{},e),a=t.effects.setMode(s,e.mode||"effect"),o=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"hide"===a?0:100),r=e.direction||"both",l=e.origin,h={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},c={y:"horizontal"!==r?o/100:1,x:"vertical"!==r?o/100:1};n.effect="size",n.queue=!1,n.complete=i,"effect"!==a&&(n.origin=l||["middle","center"],n.restore=!0),n.from=e.from||("show"===a?{height:0,width:0,outerHeight:0,outerWidth:0}:h),n.to={height:h.height*c.y,width:h.width*c.x,outerHeight:h.outerHeight*c.y,outerWidth:h.outerWidth*c.x},n.fade&&("show"===a&&(n.from.opacity=0,n.to.opacity=1),"hide"===a&&(n.from.opacity=1,n.to.opacity=0)),s.effect(n)},t.effects.effect.size=function(e,i){var s,n,a,o=t(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],l=["position","top","bottom","left","right","overflow","opacity"],h=["width","height","overflow"],c=["fontSize"],u=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],d=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=t.effects.setMode(o,e.mode||"effect"),f=e.restore||"effect"!==p,g=e.scale||"both",m=e.origin||["middle","center"],v=o.css("position"),_=f?r:l,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&o.show(),s={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},"toggle"===e.mode&&"show"===p?(o.from=e.to||b,o.to=e.from||s):(o.from=e.from||("show"===p?b:s),o.to=e.to||("hide"===p?b:s)),a={from:{y:o.from.height/s.height,x:o.from.width/s.width},to:{y:o.to.height/s.height,x:o.to.width/s.width}},("box"===g||"both"===g)&&(a.from.y!==a.to.y&&(_=_.concat(u),o.from=t.effects.setTransition(o,u,a.from.y,o.from),o.to=t.effects.setTransition(o,u,a.to.y,o.to)),a.from.x!==a.to.x&&(_=_.concat(d),o.from=t.effects.setTransition(o,d,a.from.x,o.from),o.to=t.effects.setTransition(o,d,a.to.x,o.to))),("content"===g||"both"===g)&&a.from.y!==a.to.y&&(_=_.concat(c).concat(h),o.from=t.effects.setTransition(o,c,a.from.y,o.from),o.to=t.effects.setTransition(o,c,a.to.y,o.to)),t.effects.save(o,_),o.show(),t.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),m&&(n=t.effects.getBaseline(m,s),o.from.top=(s.outerHeight-o.outerHeight())*n.y,o.from.left=(s.outerWidth-o.outerWidth())*n.x,o.to.top=(s.outerHeight-o.to.outerHeight)*n.y,o.to.left=(s.outerWidth-o.to.outerWidth)*n.x),o.css(o.from),("content"===g||"both"===g)&&(u=u.concat(["marginTop","marginBottom"]).concat(c),d=d.concat(["marginLeft","marginRight"]),h=r.concat(u).concat(d),o.find("*[width]").each(function(){var i=t(this),s={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};f&&t.effects.save(i,h),i.from={height:s.height*a.from.y,width:s.width*a.from.x,outerHeight:s.outerHeight*a.from.y,outerWidth:s.outerWidth*a.from.x},i.to={height:s.height*a.to.y,width:s.width*a.to.x,outerHeight:s.height*a.to.y,outerWidth:s.width*a.to.x},a.from.y!==a.to.y&&(i.from=t.effects.setTransition(i,u,a.from.y,i.from),i.to=t.effects.setTransition(i,u,a.to.y,i.to)),a.from.x!==a.to.x&&(i.from=t.effects.setTransition(i,d,a.from.x,i.from),i.to=t.effects.setTransition(i,d,a.to.x,i.to)),i.css(i.from),i.animate(i.to,e.duration,e.easing,function(){f&&t.effects.restore(i,h)})})),o.animate(o.to,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){0===o.to.opacity&&o.css("opacity",o.from.opacity),"hide"===p&&o.hide(),t.effects.restore(o,_),f||("static"===v?o.css({position:"relative",top:o.to.top,left:o.to.left}):t.each(["top","left"],function(t,e){o.css(e,function(e,i){var s=parseInt(i,10),n=t?o.to.left:o.to.top;return"auto"===i?n+"px":s+n+"px"})})),t.effects.removeWrapper(o),i()}})}})(jQuery);(function(t){t.effects.effect.shake=function(e,i){var s,n=t(this),a=["position","top","bottom","left","right","height","width"],o=t.effects.setMode(n,e.mode||"effect"),r=e.direction||"left",l=e.distance||20,h=e.times||3,c=2*h+1,u=Math.round(e.duration/c),d="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},g={},m={},v=n.queue(),_=v.length;for(t.effects.save(n,a),n.show(),t.effects.createWrapper(n),f[d]=(p?"-=":"+=")+l,g[d]=(p?"+=":"-=")+2*l,m[d]=(p?"-=":"+=")+2*l,n.animate(f,u,e.easing),s=1;h>s;s++)n.animate(g,u,e.easing).animate(m,u,e.easing);n.animate(g,u,e.easing).animate(f,u/2,e.easing).queue(function(){"hide"===o&&n.hide(),t.effects.restore(n,a),t.effects.removeWrapper(n),i()}),_>1&&v.splice.apply(v,[1,0].concat(v.splice(_,c+1))),n.dequeue()}})(jQuery);(function(t){t.effects.effect.slide=function(e,i){var s,n=t(this),a=["position","top","bottom","left","right","width","height"],o=t.effects.setMode(n,e.mode||"show"),r="show"===o,l=e.direction||"left",h="up"===l||"down"===l?"top":"left",c="up"===l||"left"===l,u={};t.effects.save(n,a),n.show(),s=e.distance||n["top"===h?"outerHeight":"outerWidth"](!0),t.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(h,c?isNaN(s)?"-"+s:-s:s),u[h]=(r?c?"+=":"-=":c?"-=":"+=")+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&n.hide(),t.effects.restore(n,a),t.effects.removeWrapper(n),i()}})}})(jQuery);(function(t){t.effects.effect.transfer=function(e,i){var s=t(this),n=t(e.to),a="fixed"===n.css("position"),o=t("body"),r=a?o.scrollTop():0,l=a?o.scrollLeft():0,h=n.offset(),c={top:h.top-r,left:h.left-l,height:n.innerHeight(),width:n.innerWidth()},u=s.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({top:u.top-r,left:u.left-l,height:s.innerHeight(),width:s.innerWidth(),position:a?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),i()})}})(jQuery);(function(t){t.widget("ui.menu",{version:"1.10.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,t.proxy(function(t){this.options.disabled&&t.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(t){t.preventDefault()},"click .ui-state-disabled > a":function(t){t.preventDefault()},"click .ui-menu-item:has(a)":function(e){var i=t(e.target).closest(".ui-menu-item");!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&t(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){var i=t(e.currentTarget);i.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(e,i)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.children(".ui-menu-item").eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){t.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){t(e.target).closest(".ui-menu").length||this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var e=t(this);e.data("ui-menu-submenu-carat")&&e.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(e){function i(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var s,n,a,o,r,l=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:l=!1,n=this.previousFilter||"",a=String.fromCharCode(e.keyCode),o=!1,clearTimeout(this.filterTimer),a===n?o=!0:a=n+a,r=RegExp("^"+i(a),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())}),s=o&&-1!==s.index(this.active.next())?this.active.nextAll(".ui-menu-item"):s,s.length||(a=String.fromCharCode(e.keyCode),r=RegExp("^"+i(a),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())})),s.length?(this.focus(e,s),s.length>1?(this.previousFilter=a,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}l&&e.preventDefault()},_activate:function(t){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i=this.options.icons.submenu,s=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),s=e.prev("a"),n=t("<span>").addClass("ui-menu-icon ui-icon "+i).data("ui-menu-submenu-carat",!0);s.attr("aria-haspopup","true").prepend(n),e.attr("aria-labelledby",s.attr("id"))}),e=s.add(this.element),e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),e.children(":not(.ui-menu-item)").each(function(){var e=t(this);/[^\-\u2014\u2013\s]/.test(e.text())||e.addClass("ui-widget-content ui-menu-divider")}),e.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){"icons"===t&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),this._super(t,e)},focus:function(t,e){var i,s;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=e.height(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",t,{item:this.active}))},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.children(".ui-menu-item")[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())),undefined):(this.next(e),undefined)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item").first())),undefined):(this.next(e),undefined)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)}})})(jQuery);(function(t,e){t.widget("ui.progressbar",{version:"1.10.4",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(t){return t===e?this.options.value:(this.options.value=this._constrainedValue(t),this._refreshValue(),e)},_constrainedValue:function(t){return t===e&&(t=this.options.value),this.indeterminate=t===!1,"number"!=typeof t&&(t=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).toggleClass("ui-corner-right",e===this.options.max).width(i.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}})})(jQuery);(function(t){function e(t){return parseInt(t,10)||0}function i(t){return!isNaN(parseInt(t,10))}t.widget("ui.resizable",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var e,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),e=this.handles.split(","),this.handles={},i=0;e.length>i;i++)s=t.trim(e[i]),a="ui-resizable-"+s,n=t("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(e){var i,s,n,a;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=t(this.handles[i],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=t(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(n,a),this._proportionallyResize()),t(this.handles[i]).length},this._renderAxis(this.element),this._handles=t(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),t(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(t(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(t(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(e){var i,s,n=!1;for(i in this.handles)s=t(this.handles[i])[0],(s===e.target||t.contains(s,e.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(i){var s,n,a,o=this.options,r=this.element.position(),h=this.element;return this.resizing=!0,/absolute/.test(h.css("position"))?h.css({position:"absolute",top:h.css("top"),left:h.css("left")}):h.is(".ui-draggable")&&h.css({position:"absolute",top:r.top,left:r.left}),this._renderProxy(),s=e(this.helper.css("left")),n=e(this.helper.css("top")),o.containment&&(s+=t(o.containment).scrollLeft()||0,n+=t(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:s,top:n},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:h.width(),height:h.height()},this.originalSize=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalPosition={left:s,top:n},this.sizeDiff={width:h.outerWidth()-h.width(),height:h.outerHeight()-h.height()},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,a=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===a?this.axis+"-resize":a),h.addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(e){var i,s=this.helper,n={},a=this.originalMousePosition,o=this.axis,r=this.position.top,h=this.position.left,l=this.size.width,c=this.size.height,u=e.pageX-a.left||0,d=e.pageY-a.top||0,p=this._change[o];return p?(i=p.apply(this,[e,u,d]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),this.position.top!==r&&(n.top=this.position.top+"px"),this.position.left!==h&&(n.left=this.position.left+"px"),this.size.width!==l&&(n.width=this.size.width+"px"),this.size.height!==c&&(n.height=this.size.height+"px"),s.css(n),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(n)||this._trigger("resize",e,this.ui()),!1):!1},_mouseStop:function(e){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,c=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&t.ui.hasScroll(i[0],"left")?0:c.sizeDiff.height,a=s?0:c.sizeDiff.width,o={width:c.helper.width()-a,height:c.helper.height()-n},r=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null,h=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null,l.animate||this.element.css(t.extend(o,{top:h,left:r})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!l.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(t){var e,s,n,a,o,r=this.options;o={minWidth:i(r.minWidth)?r.minWidth:0,maxWidth:i(r.maxWidth)?r.maxWidth:1/0,minHeight:i(r.minHeight)?r.minHeight:0,maxHeight:i(r.maxHeight)?r.maxHeight:1/0},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,n=o.minWidth/this.aspectRatio,s=o.maxHeight*this.aspectRatio,a=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),n>o.minHeight&&(o.minHeight=n),o.maxWidth>s&&(o.maxWidth=s),o.maxHeight>a&&(o.maxHeight=a)),this._vBoundaries=o},_updateCache:function(t){this.offset=this.helper.offset(),i(t.left)&&(this.position.left=t.left),i(t.top)&&(this.position.top=t.top),i(t.height)&&(this.size.height=t.height),i(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,s=this.size,n=this.axis;return i(t.height)?t.width=t.height*this.aspectRatio:i(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===n&&(t.left=e.left+(s.width-t.width),t.top=null),"nw"===n&&(t.top=e.top+(s.height-t.height),t.left=e.left+(s.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,s=this.axis,n=i(t.width)&&e.maxWidth&&e.maxWidth<t.width,a=i(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=i(t.width)&&e.minWidth&&e.minWidth>t.width,r=i(t.height)&&e.minHeight&&e.minHeight>t.height,h=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,c=/sw|nw|w/.test(s),u=/nw|ne|n/.test(s);return o&&(t.width=e.minWidth),r&&(t.height=e.minHeight),n&&(t.width=e.maxWidth),a&&(t.height=e.maxHeight),o&&c&&(t.left=h-e.minWidth),n&&c&&(t.left=h-e.maxWidth),r&&u&&(t.top=l-e.minHeight),a&&u&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var t,e,i,s,n,a=this.helper||this.element;for(t=0;this._proportionallyResizeElements.length>t;t++){if(n=this._proportionallyResizeElements[t],!this.borderDif)for(this.borderDif=[],i=[n.css("borderTopWidth"),n.css("borderRightWidth"),n.css("borderBottomWidth"),n.css("borderLeftWidth")],s=[n.css("paddingTop"),n.css("paddingRight"),n.css("paddingBottom"),n.css("paddingLeft")],e=0;i.length>e;e++)this.borderDif[e]=(parseInt(i[e],10)||0)+(parseInt(s[e],10)||0);n.css({height:a.height()-this.borderDif[0]-this.borderDif[2]||0,width:a.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,s=this.originalPosition;return{left:s.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).data("ui-resizable"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&t.ui.hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,c=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(h,c&&l?{top:c,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var i,s,n,a,o,r,h,l=t(this).data("ui-resizable"),c=l.options,u=l.element,d=c.containment,p=d instanceof t?d.get(0):/parent/.test(d)?u.parent().get(0):d;p&&(l.containerElement=t(p),/document/.test(d)||d===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(i=t(p),s=[],t(["Top","Right","Left","Bottom"]).each(function(t,n){s[t]=e(i.css("padding"+n))}),l.containerOffset=i.offset(),l.containerPosition=i.position(),l.containerSize={height:i.innerHeight()-s[3],width:i.innerWidth()-s[1]},n=l.containerOffset,a=l.containerSize.height,o=l.containerSize.width,r=t.ui.hasScroll(p,"left")?p.scrollWidth:o,h=t.ui.hasScroll(p)?p.scrollHeight:a,l.parentData={element:p,left:n.left,top:n.top,width:r,height:h}))},resize:function(e){var i,s,n,a,o=t(this).data("ui-resizable"),r=o.options,h=o.containerOffset,l=o.position,c=o._aspectRatio||e.shiftKey,u={top:0,left:0},d=o.containerElement;d[0]!==document&&/static/.test(d.css("position"))&&(u=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-u.left),c&&(o.size.height=o.size.width/o.aspectRatio),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),c&&(o.size.width=o.size.height*o.aspectRatio),o.position.top=o._helper?h.top:0),o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top,i=Math.abs((o._helper?o.offset.left-u.left:o.offset.left-u.left)+o.sizeDiff.width),s=Math.abs((o._helper?o.offset.top-u.top:o.offset.top-h.top)+o.sizeDiff.height),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a&&(i-=Math.abs(o.parentData.left)),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,c&&(o.size.height=o.size.width/o.aspectRatio)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,c&&(o.size.width=o.size.height*o.aspectRatio))},stop:function(){var e=t(this).data("ui-resizable"),i=e.options,s=e.containerOffset,n=e.containerPosition,a=e.containerElement,o=t(e.helper),r=o.offset(),h=o.outerWidth()-e.sizeDiff.width,l=o.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(a.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l}),e._helper&&!i.animate&&/static/.test(a.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).data("ui-resizable"),i=e.options,s=function(e){t(e).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseInt(e.width(),10),height:parseInt(e.height(),10),left:parseInt(e.css("left"),10),top:parseInt(e.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):t.each(i.alsoResize,function(t){s(t)})},resize:function(e,i){var s=t(this).data("ui-resizable"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0},h=function(e,s){t(e).each(function(){var e=t(this),n=t(this).data("ui-resizable-alsoresize"),a={},o=s&&s.length?s:e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(o,function(t,e){var i=(n[e]||0)+(r[e]||0);i&&i>=0&&(a[e]=i||null)}),e.css(a)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):t.each(n.alsoResize,function(t,e){h(t,e)})},stop:function(){t(this).removeData("resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).data("ui-resizable"),i=e.options,s=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).data("ui-resizable");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).data("ui-resizable");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e=t(this).data("ui-resizable"),i=e.options,s=e.size,n=e.originalSize,a=e.originalPosition,o=e.axis,r="number"==typeof i.grid?[i.grid,i.grid]:i.grid,h=r[0]||1,l=r[1]||1,c=Math.round((s.width-n.width)/h)*h,u=Math.round((s.height-n.height)/l)*l,d=n.width+c,p=n.height+u,f=i.maxWidth&&d>i.maxWidth,g=i.maxHeight&&p>i.maxHeight,m=i.minWidth&&i.minWidth>d,v=i.minHeight&&i.minHeight>p;i.grid=r,m&&(d+=h),v&&(p+=l),f&&(d-=h),g&&(p-=l),/^(se|s|e)$/.test(o)?(e.size.width=d,e.size.height=p):/^(ne)$/.test(o)?(e.size.width=d,e.size.height=p,e.position.top=a.top-u):/^(sw)$/.test(o)?(e.size.width=d,e.size.height=p,e.position.left=a.left-c):(p-l>0?(e.size.height=p,e.position.top=a.top-u):(e.size.height=l,e.position.top=a.top+n.height-l),d-h>0?(e.size.width=d,e.position.left=a.left-c):(e.size.width=h,e.position.left=a.left+n.width-h))}})})(jQuery);(function(t){t.widget("ui.selectable",t.ui.mouse,{version:"1.10.4",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){e=t(i.options.filter,i.element[0]),e.addClass("ui-selectee"),e.each(function(){var e=t(this),i=e.offset();t.data(this,"selectable-item",{element:this,$element:e,left:i.left,top:i.top,right:i.left+e.outerWidth(),bottom:i.top+e.outerHeight(),startselected:!1,selected:e.hasClass("ui-selected"),selecting:e.hasClass("ui-selecting"),unselecting:e.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=e.addClass("ui-selectee"),this._mouseInit(),this.helper=t("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(e){var i=this,s=this.options;this.opos=[e.pageX,e.pageY],this.options.disabled||(this.selectees=t(s.filter,this.element[0]),this._trigger("start",e),t(s.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=t.data(this,"selectable-item");s.startselected=!0,e.metaKey||e.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",e,{unselecting:s.element}))}),t(e.target).parents().addBack().each(function(){var s,n=t.data(this,"selectable-item");return n?(s=!e.metaKey&&!e.ctrlKey||!n.$element.hasClass("ui-selected"),n.$element.removeClass(s?"ui-unselecting":"ui-selected").addClass(s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",e,{selecting:n.element}):i._trigger("unselecting",e,{unselecting:n.element}),!1):undefined}))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,a=this.opos[0],o=this.opos[1],r=e.pageX,l=e.pageY;return a>r&&(i=r,r=a,a=i),o>l&&(i=l,l=o,o=i),this.helper.css({left:a,top:o,width:r-a,height:l-o}),this.selectees.each(function(){var i=t.data(this,"selectable-item"),h=!1;i&&i.element!==s.element[0]&&("touch"===n.tolerance?h=!(i.left>r||a>i.right||i.top>l||o>i.bottom):"fit"===n.tolerance&&(h=i.left>a&&r>i.right&&i.top>o&&l>i.bottom),h?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,s._trigger("selecting",e,{selecting:i.element}))):(i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",e,{unselecting:i.element})))))}),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,t(".ui-unselecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",e,{unselected:s.element})}),t(".ui-selecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",e,{selected:s.element})}),this._trigger("stop",e),this.helper.remove(),!1}})})(jQuery);(function(t){var e=5;t.widget("ui.slider",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)o.push(a);this.handles=n.add(t(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,o,r,l,h,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-u.values(e));(n>i||n===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(n=i,a=t(this),o=e)}),r=this._start(e,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),l=a.offset(),h=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=h?{left:0,top:0}:{left:e.pageX-l.left-a.width()/2,top:e.pageY-l.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,a;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,a=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),a!==!1&&this.values(e,i))):i!==this.value()&&(a=this._trigger("slide",t,{handle:this.handles[e],value:i}),a!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(e,i){var s,n,a;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),undefined;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),t.Widget.prototype._setOption.apply(this,arguments),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,a,o=this.options.range,r=this.options,l=this,h=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((l.values(s)-l._valueMin())/(l._valueMax()-l._valueMin())),u["horizontal"===l.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[h?"animate":"css"](u,r.animate),l.options.range===!0&&("horizontal"===l.orientation?(0===s&&l.range.stop(1,1)[h?"animate":"css"]({left:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&l.range.stop(1,1)[h?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[h?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[h?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[h?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,a,o,r=t(i.target).data("ui-slider-handle-index");switch(i.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(o=this.options.step,n=a=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case t.ui.keyCode.HOME:a=this._valueMin();break;case t.ui.keyCode.END:a=this._valueMax();break;case t.ui.keyCode.PAGE_UP:a=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.PAGE_DOWN:a=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;a=this._trimAlignValue(n+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;a=this._trimAlignValue(n-o)}this._slide(i,r,a)},click:function(t){t.preventDefault()},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})})(jQuery);(function(t){function e(t,e,i){return t>e&&e+i>t}function i(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))}t.widget("ui.sortable",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var t=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===t.axis||i(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_setOption:function(e,i){"disabled"===e?(this.options[e]=i,this.widget().toggleClass("ui-sortable-disabled",!!i)):t.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(e,i){var s=null,n=!1,o=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,o.widgetName+"-item")===o?(s=t(this),!1):undefined}),t.data(e.target,o.widgetName+"-item")===o&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,o,a=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),a.containment&&this._setContainment(),a.cursor&&"auto"!==a.cursor&&(o=this.document.find("body"),this.storedCursor=o.css("cursor"),o.css("cursor",a.cursor),this.storedStylesheet=t("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(o)),a.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),a.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",a.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,o,a=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<a.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+a.scrollSpeed:e.pageY-this.overflowOffset.top<a.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<a.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+a.scrollSpeed:e.pageX-this.overflowOffset.left<a.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-a.scrollSpeed)):(e.pageY-t(document).scrollTop()<a.scrollSensitivity?r=t(document).scrollTop(t(document).scrollTop()-a.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<a.scrollSensitivity&&(r=t(document).scrollTop(t(document).scrollTop()+a.scrollSpeed)),e.pageX-t(document).scrollLeft()<a.scrollSensitivity?r=t(document).scrollLeft(t(document).scrollLeft()-a.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<a.scrollSensitivity&&(r=t(document).scrollLeft(t(document).scrollLeft()+a.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],o=this._intersectsWithPointer(s),o&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===o?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),o=this.options.axis,a={};o&&"x"!==o||(a.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),o&&"y"!==o||(a.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(a,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,h=r+t.height,l=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||s+l>r&&h>s+l,d="y"===this.options.axis||e+c>o&&a>e+c,p=u&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>o&&a>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var i="x"===this.options.axis||e(this.positionAbs.top+this.offset.click.top,t.top,t.height),s="y"===this.options.axis||e(this.positionAbs.left+this.offset.click.left,t.left,t.width),n=i&&s,o=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return n?this.floating?a&&"right"===a||"down"===o?2:1:o&&("down"===o?2:1):!1},_intersectsWithSides:function(t){var i=e(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),s=e(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),n=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return this.floating&&o?"right"===o&&s||"left"===o&&!s:n&&("down"===n&&i||"up"===n&&!i)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){r.push(this)}var s,n,o,a,r=[],h=[],l=this._connectWith();if(l&&e)for(s=l.length-1;s>=0;s--)for(o=t(l[s]),n=o.length-1;n>=0;n--)a=t.data(o[n],this.widgetFullName),a&&a!==this&&!a.options.disabled&&h.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(h.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return t(r)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,o,a,r,h,l,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i]),s=n.length-1;s>=0;s--)o=t.data(n[s],this.widgetFullName),o&&o!==this&&!o.options.disabled&&(u.push([t.isFunction(o.options.items)?o.options.items.call(o.element[0],e,{item:this.currentItem}):t(o.options.items,o.element),o]),this.containers.push(o));for(i=u.length-1;i>=0;i--)for(a=u[i][1],r=u[i][0],s=0,l=r.length;l>s;s++)h=t(r[s]),h.data(this.widgetName+"-item",a),c.push({item:h,instance:a,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,o;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),o=n.offset(),s.left=o.left,s.top=o.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t("<"+s+">",e.document[0]).addClass(i||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===s?e.currentItem.children().each(function(){t("<td>&#160;</td>",e.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(n)}):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_contactContainers:function(s){var n,o,a,r,h,l,c,u,d,p,f=null,g=null;for(n=this.containers.length-1;n>=0;n--)if(!t.contains(this.currentItem[0],this.containers[n].element[0]))if(this._intersectsWith(this.containers[n].containerCache)){if(f&&t.contains(this.containers[n].element[0],f.element[0]))continue;f=this.containers[n],g=n}else this.containers[n].containerCache.over&&(this.containers[n]._trigger("out",s,this._uiHash(this)),this.containers[n].containerCache.over=0);if(f)if(1===this.containers.length)this.containers[g].containerCache.over||(this.containers[g]._trigger("over",s,this._uiHash(this)),this.containers[g].containerCache.over=1);else{for(a=1e4,r=null,p=f.floating||i(this.currentItem),h=p?"left":"top",l=p?"width":"height",c=this.positionAbs[h]+this.offset.click[h],o=this.items.length-1;o>=0;o--)t.contains(this.containers[g].element[0],this.items[o].item[0])&&this.items[o].item[0]!==this.currentItem[0]&&(!p||e(this.positionAbs.top+this.offset.click.top,this.items[o].top,this.items[o].height))&&(u=this.items[o].item.offset()[h],d=!1,Math.abs(u-c)>Math.abs(u+this.items[o][l]-c)&&(d=!0,u+=this.items[o][l]),a>Math.abs(u-c)&&(a=Math.abs(u-c),r=this.items[o],this.direction=d?"up":"down"));if(!r&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[g])return;r?this._rearrange(s,r,null,!0):this._rearrange(s,null,this.containers[g].element,!0),this._trigger("change",s,this._uiHash()),this.containers[g]._trigger("change",s,this._uiHash(this)),this.currentContainer=this.containers[g],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[g]._trigger("over",s,this._uiHash(this)),this.containers[g].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,t("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,(t("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,o=e.pageX,a=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(a=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(a=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((a-this.originalPageY)/n.grid[1])*n.grid[1],a=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((o-this.originalPageX)/n.grid[0])*n.grid[0],o=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){function i(t,e,i){return function(s){i._trigger(t,s,e._uiHash(e))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&n.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||n.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(n.push(function(t){this._trigger("remove",t,this._uiHash())}),n.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)e||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!e){for(this._trigger("beforeStop",t,this._uiHash()),s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!1}if(e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!e){for(s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}})})(jQuery);(function(t){function e(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.widget("ui.spinner",{version:"1.10.4",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e={},i=this.element;return t.each(["min","max","step"],function(t,s){var n=i.attr(s);void 0!==n&&n.length&&(e[s]=n)}),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",t),void 0)},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){function i(){var t=this.element[0]===this.document[0].activeElement;t||(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),e.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(e)!==!1&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){return t(e.currentTarget).hasClass("ui-state-active")?this._start(e)===!1?!1:(this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var t=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=t.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*t.height())&&t.height()>0&&t.height(t.height()),this.options.disabled&&this.disable()},_keydown:function(e){var i=this.options,s=t.ui.keyCode;switch(e.keyCode){case s.UP:return this._repeat(null,1,e),!0;case s.DOWN:return this._repeat(null,-1,e),!0;case s.PAGE_UP:return this._repeat(null,i.page,e),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(t){return this.spinning||this._trigger("start",t)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&this._trigger("spin",e,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,s=this.options;return e=null!==s.min?s.min:0,i=t-e,i=Math.round(i/s.step)*s.step,t=e+i,t=parseFloat(t.toFixed(this._precision())),null!==s.max&&t>s.max?s.max:null!==s.min&&s.min>t?s.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){if("culture"===t||"numberFormat"===t){var i=this._parse(this.element.val());return this.options[t]=e,this.element.val(this._format(i)),void 0}("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)),this._super(t,e),"disabled"===t&&(e?(this.element.prop("disabled",!0),this.buttons.button("disable")):(this.element.prop("disabled",!1),this.buttons.button("enable")))},_setOptions:e(function(t){this._super(t),this._value(this.element.val())}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(t,e){var i;""!==t&&(i=this._parse(t),null!==i&&(e||(i=this._adjustValue(i)),t=this._format(i))),this.element.val(t),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:e(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:e(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:e(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:e(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){return arguments.length?(e(this._value).call(this,t),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}})})(jQuery);(function(t,e){function i(){return++n}function s(t){return t=t.cloneNode(!1),t.hash.length>1&&decodeURIComponent(t.href.replace(a,""))===decodeURIComponent(location.href.replace(a,""))}var n=0,a=/#.*$/;t.widget("ui.tabs",{version:"1.10.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var e=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var i=this.options.active,s=this.options.collapsible,n=location.hash.substring(1);return null===i&&(n&&this.tabs.each(function(s,a){return t(a).attr("aria-controls")===n?(i=s,!1):e}),null===i&&(i=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===i||-1===i)&&(i=this.tabs.length?0:!1)),i!==!1&&(i=this.tabs.index(this.tabs.eq(i)),-1===i&&(i=s?!1:0)),!s&&i===!1&&this.anchors.length&&(i=0),i},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(i){var s=t(this.document[0].activeElement).closest("li"),n=this.tabs.index(s),a=!0;if(!this._handlePageNav(i)){switch(i.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:n++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:a=!1,n--;break;case t.ui.keyCode.END:n=this.anchors.length-1;break;case t.ui.keyCode.HOME:n=0;break;case t.ui.keyCode.SPACE:return i.preventDefault(),clearTimeout(this.activating),this._activate(n),e;case t.ui.keyCode.ENTER:return i.preventDefault(),clearTimeout(this.activating),this._activate(n===this.options.active?!1:n),e;default:return}i.preventDefault(),clearTimeout(this.activating),n=this._focusNextTab(n,a),i.ctrlKey||(s.attr("aria-selected","false"),this.tabs.eq(n).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",n)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.focus())},_handlePageNav:function(i){return i.altKey&&i.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):i.altKey&&i.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):e},_findNextTab:function(e,i){function s(){return e>n&&(e=0),0>e&&(e=n),e}for(var n=this.tabs.length-1;-1!==t.inArray(s(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).focus(),t},_setOption:function(t,i){return"active"===t?(this._activate(i),e):"disabled"===t?(this._setupDisabled(i),e):(this._super(t,i),"collapsible"===t&&(this.element.toggleClass("ui-tabs-collapsible",i),i||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(i),"heightStyle"===t&&this._setupHeightStyle(i),e)},_tabId:function(t){return t.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=t(),this.anchors.each(function(i,n){var a,o,r,h=t(n).uniqueId().attr("id"),l=t(n).closest("li"),c=l.attr("aria-controls");s(n)?(a=n.hash,o=e.element.find(e._sanitizeSelector(a))):(r=e._tabId(l),a="#"+r,o=e.element.find(a),o.length||(o=e._createPanel(r),o.insertAfter(e.panels[i-1]||e.tablist)),o.attr("aria-live","polite")),o.length&&(e.panels=e.panels.add(o)),c&&l.data("ui-tabs-aria-controls",c),l.attr({"aria-controls":a.substring(1),"aria-labelledby":h}),o.attr("aria-labelledby",h)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(e){t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1);for(var i,s=0;i=this.tabs[s];s++)e===!0||-1!==t.inArray(s,e)?t(i).addClass("ui-state-disabled").attr("aria-disabled","true"):t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=e},_setupEvents:function(e){var i={click:function(t){t.preventDefault()}};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),a=n.closest("li"),o=a[0]===s[0],r=o&&i.collapsible,h=r?t():this._getPanelForTab(a),l=s.length?this._getPanelForTab(s):t(),c={oldTab:s,oldPanel:l,newTab:r?t():a,newPanel:h};e.preventDefault(),a.hasClass("ui-state-disabled")||a.hasClass("ui-tabs-loading")||this.running||o&&!i.collapsible||this._trigger("beforeActivate",e,c)===!1||(i.active=r?!1:this.tabs.index(a),this.active=o?t():a,this.xhr&&this.xhr.abort(),l.length||h.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(a),e),this._toggle(e,c))},_toggle:function(e,i){function s(){a.running=!1,a._trigger("activate",e,i)}function n(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),o.length&&a.options.show?a._show(o,a.options.show,s):(o.show(),s())}var a=this,o=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr({"aria-expanded":"false","aria-hidden":"true"}),i.oldTab.attr("aria-selected","false"),o.length&&r.length?i.oldTab.attr("tabIndex",-1):o.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),o.attr({"aria-expanded":"true","aria-hidden":"false"}),i.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(t){return"string"==typeof t&&(t=this.anchors.index(this.anchors.filter("[href$='"+t+"']"))),t},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(i){var s=this.options.disabled;s!==!1&&(i===e?s=!1:(i=this._getIndex(i),s=t.isArray(s)?t.map(s,function(t){return t!==i?t:null}):t.map(this.tabs,function(t,e){return e!==i?e:null})),this._setupDisabled(s))},disable:function(i){var s=this.options.disabled;if(s!==!0){if(i===e)s=!0;else{if(i=this._getIndex(i),-1!==t.inArray(i,s))return;s=t.isArray(s)?t.merge([i],s).sort():[i]}this._setupDisabled(s)}},load:function(e,i){e=this._getIndex(e);var n=this,a=this.tabs.eq(e),o=a.find(".ui-tabs-anchor"),r=this._getPanelForTab(a),h={tab:a,panel:r};s(o[0])||(this.xhr=t.ajax(this._ajaxSettings(o,i,h)),this.xhr&&"canceled"!==this.xhr.statusText&&(a.addClass("ui-tabs-loading"),r.attr("aria-busy","true"),this.xhr.success(function(t){setTimeout(function(){r.html(t),n._trigger("load",i,h)},1)}).complete(function(t,e){setTimeout(function(){"abort"===e&&n.panels.stop(!1,!0),a.removeClass("ui-tabs-loading"),r.removeAttr("aria-busy"),t===n.xhr&&delete n.xhr},1)})))},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr("href"),beforeSend:function(e,a){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:a},s))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}})})(jQuery);(function(t){function e(e,i){var s=(e.attr("aria-describedby")||"").split(/\s+/);s.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(s.join(" ")))}function i(e){var i=e.data("ui-tooltip-id"),s=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,s);-1!==n&&s.splice(n,1),e.removeData("ui-tooltip-id"),s=t.trim(s.join(" ")),s?e.attr("aria-describedby",s):e.removeAttr("aria-describedby")}var s=0;t.widget("ui.tooltip",{version:"1.10.4",options:{content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(e,i){var s=this;return"disabled"===e?(this[i?"_disable":"_enable"](),this.options[e]=i,void 0):(this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){s._updateContent(e)}),void 0)},_disable:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s[0],e.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.is("[title]")&&e.data("ui-tooltip-title",e.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))})},open:function(e){var i=this,s=t(e?e.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&s.parents().each(function(){var e,s=t(this);s.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._updateContent(s,e))},_updateContent:function(t,e){var i,s=this.options.content,n=this,o=e?e.type:null;return"string"==typeof s?this._open(e,t,s):(i=s.call(t[0],function(i){t.data("ui-tooltip-open")&&n._delay(function(){e&&(e.type=o),this._open(e,t,i)})}),i&&this._open(e,t,i),void 0)},_open:function(i,s,n){function o(t){l.of=t,a.is(":hidden")||a.position(l)}var a,r,h,l=t.extend({},this.options.position);if(n){if(a=this._find(s),a.length)return a.find(".ui-tooltip-content").html(n),void 0;s.is("[title]")&&(i&&"mouseover"===i.type?s.attr("title",""):s.removeAttr("title")),a=this._tooltip(s),e(s,a.attr("id")),a.find(".ui-tooltip-content").html(n),this.options.track&&i&&/^mouse/.test(i.type)?(this._on(this.document,{mousemove:o}),o(i)):a.position(t.extend({of:s},this.options.position)),a.hide(),this._show(a,this.options.show),this.options.show&&this.options.show.delay&&(h=this.delayedShow=setInterval(function(){a.is(":visible")&&(o(l.of),clearInterval(h))},t.fx.interval)),this._trigger("open",i,{tooltip:a}),r={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var i=t.Event(e);i.currentTarget=s[0],this.close(i,!0)}},remove:function(){this._removeTooltip(a)}},i&&"mouseover"!==i.type||(r.mouseleave="close"),i&&"focusin"!==i.type||(r.focusout="close"),this._on(!0,s,r)}},close:function(e){var s=this,n=t(e?e.currentTarget:this.element),o=this._find(n);this.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&n.attr("title",n.data("ui-tooltip-title")),i(n),o.stop(!0),this._hide(o,this.options.hide,function(){s._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete s.parents[e]}),this.closing=!0,this._trigger("close",e,{tooltip:o}),this.closing=!1)},_tooltip:function(e){var i="ui-tooltip-"+s++,n=t("<div>").attr({id:i,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return t("<div>").addClass("ui-tooltip-content").appendTo(n),n.appendTo(this.document[0].body),this.tooltips[i]=e,n},_find:function(e){var i=e.data("ui-tooltip-id");return i?t("#"+i):t()},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_destroy:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s[0],e.close(n,!0),t("#"+i).remove(),s.data("ui-tooltip-title")&&(s.attr("title",s.data("ui-tooltip-title")),s.removeData("ui-tooltip-title"))})}})})(jQuery);
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){"use strict";var t={wheelSpeed:10,wheelPropagation:!1,minScrollbarLength:null,useBothWheelAxes:!1,useKeyboard:!0,suppressScrollX:!1,suppressScrollY:!1,scrollXMarginOffset:0,scrollYMarginOffset:0,includePadding:!1},o=function(){var e=0;return function(){var t=e;return e+=1,".perfect-scrollbar-"+t}}();e.fn.perfectScrollbar=function(n,r){return this.each(function(){var l=e.extend(!0,{},t),s=e(this);if("object"==typeof n?e.extend(!0,l,n):r=n,"update"===r)return s.data("perfect-scrollbar-update")&&s.data("perfect-scrollbar-update")(),s;if("destroy"===r)return s.data("perfect-scrollbar-destroy")&&s.data("perfect-scrollbar-destroy")(),s;if(s.data("perfect-scrollbar"))return s.data("perfect-scrollbar");s.addClass("ps-container");var a,c,i,u,d,p,f,h,v,b,g=e("<div class='ps-scrollbar-x-rail'></div>").appendTo(s),m=e("<div class='ps-scrollbar-y-rail'></div>").appendTo(s),w=e("<div class='ps-scrollbar-x'></div>").appendTo(g),T=e("<div class='ps-scrollbar-y'></div>").appendTo(m),y=parseInt(g.css("bottom"),10),L=y===y,I=L?null:parseInt(g.css("top"),10),S=parseInt(m.css("right"),10),x=S===S,C=x?null:parseInt(m.css("left"),10),M="rtl"===s.css("direction"),X=o(),Y=function(e,t){var o=e+t,n=u-v;b=0>o?0:o>n?n:o;var r=parseInt(b*(p-u)/(u-v),10);s.scrollTop(r),L?g.css({bottom:y-r}):g.css({top:I+r})},k=function(e,t){var o=e+t,n=i-f;h=0>o?0:o>n?n:o;var r=parseInt(h*(d-i)/(i-f),10);s.scrollLeft(r),x?m.css({right:S-r}):m.css({left:C+r})},P=function(e){return l.minScrollbarLength&&(e=Math.max(e,l.minScrollbarLength)),e},D=function(){var e={width:i,display:a?"inherit":"none"};e.left=M?s.scrollLeft()+i-d:s.scrollLeft(),L?e.bottom=y-s.scrollTop():e.top=I+s.scrollTop(),g.css(e);var t={top:s.scrollTop(),height:u,display:c?"inherit":"none"};x?t.right=M?d-s.scrollLeft()-S-T.outerWidth():S-s.scrollLeft():t.left=M?s.scrollLeft()+2*i-d-C-T.outerWidth():C+s.scrollLeft(),m.css(t),w.css({left:h,width:f}),T.css({top:b,height:v})},E=function(){i=l.includePadding?s.innerWidth():s.width(),u=l.includePadding?s.innerHeight():s.height(),d=s.prop("scrollWidth"),p=s.prop("scrollHeight"),!l.suppressScrollX&&d>i+l.scrollXMarginOffset?(a=!0,f=P(parseInt(i*i/d,10)),h=parseInt(s.scrollLeft()*(i-f)/(d-i),10)):(a=!1,f=0,h=0,s.scrollLeft(0)),!l.suppressScrollY&&p>u+l.scrollYMarginOffset?(c=!0,v=P(parseInt(u*u/p,10)),b=parseInt(s.scrollTop()*(u-v)/(p-u),10)):(c=!1,v=0,b=0,s.scrollTop(0)),b>=u-v&&(b=u-v),h>=i-f&&(h=i-f),D()},_=function(){var t,o;w.bind("mousedown"+X,function(e){o=e.pageX,t=w.position().left,g.addClass("in-scrolling"),e.stopPropagation(),e.preventDefault()}),e(document).bind("mousemove"+X,function(e){g.hasClass("in-scrolling")&&(k(t,e.pageX-o),e.stopPropagation(),e.preventDefault())}),e(document).bind("mouseup"+X,function(){g.hasClass("in-scrolling")&&g.removeClass("in-scrolling")}),t=o=null},j=function(){var t,o;T.bind("mousedown"+X,function(e){o=e.pageY,t=T.position().top,m.addClass("in-scrolling"),e.stopPropagation(),e.preventDefault()}),e(document).bind("mousemove"+X,function(e){m.hasClass("in-scrolling")&&(Y(t,e.pageY-o),e.stopPropagation(),e.preventDefault())}),e(document).bind("mouseup"+X,function(){m.hasClass("in-scrolling")&&m.removeClass("in-scrolling")}),t=o=null},W=function(e,t){var o=s.scrollTop();if(0===e){if(!c)return!1;if(0===o&&t>0||o>=p-u&&0>t)return!l.wheelPropagation}var n=s.scrollLeft();if(0===t){if(!a)return!1;if(0===n&&0>e||n>=d-i&&e>0)return!l.wheelPropagation}return!0},O=function(){l.wheelSpeed/=10;var e=!1;s.bind("mousewheel"+X,function(t,o,n,r){var i=t.deltaX*t.deltaFactor||n,u=t.deltaY*t.deltaFactor||r;e=!1,l.useBothWheelAxes?c&&!a?(u?s.scrollTop(s.scrollTop()-u*l.wheelSpeed):s.scrollTop(s.scrollTop()+i*l.wheelSpeed),e=!0):a&&!c&&(i?s.scrollLeft(s.scrollLeft()+i*l.wheelSpeed):s.scrollLeft(s.scrollLeft()-u*l.wheelSpeed),e=!0):(s.scrollTop(s.scrollTop()-u*l.wheelSpeed),s.scrollLeft(s.scrollLeft()+i*l.wheelSpeed)),E(),(e=e||W(i,u))&&(t.stopPropagation(),t.preventDefault())}),s.bind("MozMousePixelScroll"+X,function(t){e&&t.preventDefault()})},q=function(){var t=!1;s.bind("mouseenter"+X,function(){t=!0}),s.bind("mouseleave"+X,function(){t=!1});var o=!1;e(document).bind("keydown"+X,function(n){if(t&&!e(document.activeElement).is(":input,[contenteditable]")){var r=0,l=0;switch(n.which){case 37:r=-30;break;case 38:l=30;break;case 39:r=30;break;case 40:l=-30;break;case 33:l=90;break;case 32:case 34:l=-90;break;case 35:l=-u;break;case 36:l=u;break;default:return}s.scrollTop(s.scrollTop()-l),s.scrollLeft(s.scrollLeft()+r),(o=W(r,l))&&n.preventDefault()}})},A=function(){var e=function(e){e.stopPropagation()};T.bind("click"+X,e),m.bind("click"+X,function(e){var t=parseInt(v/2,10),o=(e.pageY-m.offset().top-t)/(u-v);0>o?o=0:o>1&&(o=1),s.scrollTop((p-u)*o)}),w.bind("click"+X,e),g.bind("click"+X,function(e){var t=parseInt(f/2,10),o=(e.pageX-g.offset().left-t)/(i-f);0>o?o=0:o>1&&(o=1),s.scrollLeft((d-i)*o)})},Q=function(){var t=function(e,t){s.scrollTop(s.scrollTop()-t),s.scrollLeft(s.scrollLeft()-e),E()},o={},n=0,r={},l=null,a=!1;e(window).bind("touchstart"+X,function(){a=!0}),e(window).bind("touchend"+X,function(){a=!1}),s.bind("touchstart"+X,function(e){var t=e.originalEvent.targetTouches[0];o.pageX=t.pageX,o.pageY=t.pageY,n=(new Date).getTime(),null!==l&&clearInterval(l),e.stopPropagation()}),s.bind("touchmove"+X,function(e){if(!a&&1===e.originalEvent.targetTouches.length){var l=e.originalEvent.targetTouches[0],s={};s.pageX=l.pageX,s.pageY=l.pageY;var c=s.pageX-o.pageX,i=s.pageY-o.pageY;t(c,i),o=s;var u=(new Date).getTime(),d=u-n;d>0&&(r.x=c/d,r.y=i/d,n=u),e.preventDefault()}}),s.bind("touchend"+X,function(){clearInterval(l),l=setInterval(function(){return.01>Math.abs(r.x)&&.01>Math.abs(r.y)?void clearInterval(l):(t(30*r.x,30*r.y),r.x*=.8,void(r.y*=.8))},10)})},B=function(){s.bind("scroll"+X,function(){E()})},F=function(){s.unbind(X),e(window).unbind(X),e(document).unbind(X),s.data("perfect-scrollbar",null),s.data("perfect-scrollbar-update",null),s.data("perfect-scrollbar-destroy",null),w.remove(),T.remove(),g.remove(),m.remove(),g=m=w=T=a=c=i=u=d=p=f=h=y=L=I=v=b=S=x=C=M=X=null},H=function(t){s.addClass("ie").addClass("ie"+t);6===t&&(function(){var t=function(){e(this).addClass("hover")},o=function(){e(this).removeClass("hover")};s.bind("mouseenter"+X,t).bind("mouseleave"+X,o),g.bind("mouseenter"+X,t).bind("mouseleave"+X,o),m.bind("mouseenter"+X,t).bind("mouseleave"+X,o),w.bind("mouseenter"+X,t).bind("mouseleave"+X,o),T.bind("mouseenter"+X,t).bind("mouseleave"+X,o)}(),D=function(){var e={left:h+s.scrollLeft(),width:f};L?e.bottom=y:e.top=I,w.css(e);var t={top:b+s.scrollTop(),height:v};x?t.right=S:t.left=C,T.css(t),w.hide().show(),T.hide().show()})},K="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch;return function(){var e=navigator.userAgent.toLowerCase().match(/(msie) ([\w.]+)/);e&&"msie"===e[1]&&H(parseInt(e[2],10)),E(),B(),_(),j(),A(),K&&Q(),s.mousewheel&&O(),l.useKeyboard&&q(),s.data("perfect-scrollbar",s),s.data("perfect-scrollbar-update",E),s.data("perfect-scrollbar-destroy",F)}(),s})}}),function(e){function t(e,t){if(!(e.originalEvent.touches.length>1)){e.preventDefault();var o=e.originalEvent.changedTouches[0],n=document.createEvent("MouseEvents");n.initMouseEvent(t,!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(n)}}if(e.support.touch="ontouchend"in document,e.support.touch){var o,n=e.ui.mouse.prototype,r=n._mouseInit;n._touchStart=function(e){var n=this;!o&&n._mouseCapture(e.originalEvent.changedTouches[0])&&(o=!0,n._touchMoved=!1,t(e,"mouseover"),t(e,"mousemove"),t(e,"mousedown"))},n._touchMove=function(e){o&&(this._touchMoved=!0,t(e,"mousemove"))},n._touchEnd=function(e){o&&(t(e,"mouseup"),t(e,"mouseout"),this._touchMoved||t(e,"click"),o=!1)},n._mouseInit=function(){var t=this;t.element.bind("touchstart",e.proxy(t,"_touchStart")).bind("touchmove",e.proxy(t,"_touchMove")).bind("touchend",e.proxy(t,"_touchEnd")),r.call(t)}}}(jQuery);var $jd=jQuery.noConflict();
!function(t,e){function n(t){var e=a(t),n=e.left+t.width()/2,o=e.top+t.height()/2;return Array(n,o)}function a(t){o(t,0);var e=t.offset();return o(t,t.data("angle")),e}function o(t,e){t.css("transform","rotate("+e+"rad)"),t.css("-moz-transform","rotate("+e+"rad)"),t.css("-webkit-transform","rotate("+e+"rad)"),t.css("-o-transform","rotate("+e+"rad)"),t.rotatable("trigger",e)}function r(t){if(u)return!1}function i(t){if(!u)return!1;var e=n(u),a=t.pageX-e[0],r=t.pageY-e[1],i=Math.atan2(r,a)-l+h;return o(u,i),u.data("angle",i),!1}function s(e){var a=n(u=t(this).parent()),o=e.pageX-a[0],r=e.pageY-a[1];return l=Math.atan2(r,o),h=u.data("angle"),t(document).on("mousemove",i),!1}t.widget("ui.rotatable",t.ui.mouse,{options:{handle:!1,angle:0},handle:function(t){if(void 0===t)return this.options.handle;this.options.handle=t},angle:function(t){if(void 0===t)return this.options.angle;this.options.angle=t,o(this.element,this.options.angle)},_create:function(){var e;this.options.handle?e=this.options.handle:(e=t(document.createElement("div"))).addClass("ui-rotatable-handle item-rotate-on glyphicons restart"),e.draggable({helper:"clone",start:r}),e.on("mousedown",s),e.appendTo(this.element),this.element.data("angle",this.options.angle),o(this.element,this.options.angle)},setValue:function(t){o(this.element,t);var e=180*t/Math.PI;this._trigger("rotate",null,{r:e})},trigger:function(t){var e=180*t/Math.PI;this._trigger("rotate",null,{r:e})}});var u,l,h;t(document).on("mouseup",function(e){if(u)return t(document).unbind("mousemove"),setTimeout(function(){u=!1},10),!1})}(jQuery);
function RGBColor(e){this.ok=!1,"#"==e.charAt(0)&&(e=e.substr(1,6)),e=(e=e.replace(/ /g,"")).toLowerCase();var f={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};for(var a in f)e==a&&(e=f[a]);for(var r=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(e){return[parseInt(e[1]),parseInt(e[2]),parseInt(e[3])]}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}}],t=0;t<r.length;t++){var d=r[t].re,l=r[t].process,n=d.exec(e);n&&(channels=l(n),this.r=channels[0],this.g=channels[1],this.b=channels[2],this.ok=!0)}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r,this.g=this.g<0||isNaN(this.g)?0:this.g>255?255:this.g,this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toHex=function(){var e=this.r.toString(16),f=this.g.toString(16),a=this.b.toString(16);return 1==e.length&&(e="0"+e),1==f.length&&(f="0"+f),1==a.length&&(a="0"+a),"#"+e+f+a},this.getHelpXML=function(){for(var e=new Array,a=0;a<r.length;a++)for(var t=r[a].example,d=0;d<t.length;d++)e[e.length]=t[d];for(var l in f)e[e.length]=l;var n=document.createElement("ul");n.setAttribute("id","rgbcolor-examples");for(a=0;a<e.length;a++)try{var i=document.createElement("li"),o=new RGBColor(e[a]),s=document.createElement("div");s.style.cssText="margin: 3px; border: 1px solid black; background:"+o.toHex()+"; color:"+o.toHex(),s.appendChild(document.createTextNode("test"));var c=document.createTextNode(" "+e[a]+" -> "+o.toRGB()+" -> "+o.toHex());i.appendChild(s),i.appendChild(c),n.appendChild(i)}catch(e){}return n}}

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("rgbcolor"),require("stackblur-canvas"),require("canvas")):"function"==typeof define&&define.amd?define(["rgbcolor","stackblur-canvas","canvas"],e):t.canvg=e(t.RGBColor,t.StackBlur,t.Canvas)}(this,function(y,v,t){"use strict";var e;return y=y&&y.hasOwnProperty("default")?y.default:y,v=v&&v.hasOwnProperty("default")?v.default:v,t=t&&t.hasOwnProperty("default")?t.default:t,function(t){var c;t.exports;(c=window).DOMParser=window.DOMParser;var f=c.document;function p(t,e){var i;return(i=f.createElement("canvas")).width=t,i.height=e,i}var m,d=function(t,e,i){if(null!=t||null!=e||null!=i){var n=function(s){var A={opts:s,FRAMERATE:30,MAX_VIRTUAL_PIXELS:3e4,rootEmSize:12,emSize:12,log:function(){}};1==A.opts.log&&"undefined"!=typeof console&&(A.log=function(t){console.log(t)});A.init=function(t){var e=0;A.UniqueId=function(){return"canvg"+ ++e},A.Definitions={},A.Styles={},A.StylesSpecificity={},A.Animations=[],A.Images=[],A.ctx=t,A.ViewPort=new function(){this.viewPorts=[],this.Clear=function(){this.viewPorts=[]},this.SetCurrent=function(t,e){this.viewPorts.push({width:t,height:e})},this.RemoveCurrent=function(){this.viewPorts.pop()},this.Current=function(){return this.viewPorts[this.viewPorts.length-1]},this.width=function(){return this.Current().width},this.height=function(){return this.Current().height},this.ComputeSize=function(t){return null!=t&&"number"==typeof t?t:"x"==t?this.width():"y"==t?this.height():Math.sqrt(Math.pow(this.width(),2)+Math.pow(this.height(),2))/Math.sqrt(2)}}},A.init(),A.ImagesLoaded=function(){for(var t=0;t<A.Images.length;t++)if(!A.Images[t].loaded)return!1;return!0},A.trim=function(t){return t.replace(/^\s+|\s+$/g,"")},A.compressSpaces=function(t){return t.replace(/(?!\u3000)\s+/gm," ")},A.ajax=function(t){var e;return(e=c.XMLHttpRequest?new c.XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"))?(e.open("GET",t,!1),e.send(null),e.responseText):null},A.parseXml=function(e){if("undefined"!=typeof Windows&&void 0!==Windows.Data&&void 0!==Windows.Data.Xml){var t=new Windows.Data.Xml.Dom.XmlDocument,i=new Windows.Data.Xml.Dom.XmlLoadSettings;return i.prohibitDtd=!1,t.loadXml(e,i),t}if(!c.DOMParser){e=e.replace(/<!DOCTYPE svg[^>]*>/,"");var t=new ActiveXObject("Microsoft.XMLDOM");return t.async="false",t.loadXML(e),t}try{var n=s.xmldom?new c.DOMParser(s.xmldom):new c.DOMParser;return n.parseFromString(e,"image/svg+xml")}catch(t){return(n=s.xmldom?new c.DOMParser(s.xmldom):new c.DOMParser).parseFromString(e,"text/xml")}},A.Property=function(t,e){this.name=t,this.value=e},A.Property.prototype.getValue=function(){return this.value},A.Property.prototype.hasValue=function(){return null!=this.value&&""!==this.value},A.Property.prototype.numValue=function(){if(!this.hasValue())return 0;var t=parseFloat(this.value);return(this.value+"").match(/%$/)&&(t/=100),t},A.Property.prototype.valueOrDefault=function(t){return this.hasValue()?this.value:t},A.Property.prototype.numValueOrDefault=function(t){return this.hasValue()?this.numValue():t},A.Property.prototype.addOpacity=function(t){var e=this.value;if(null!=t.value&&""!=t.value&&"string"==typeof this.value){var i=new y(this.value);i.ok&&(e="rgba("+i.r+", "+i.g+", "+i.b+", "+t.numValue()+")")}return new A.Property(this.name,e)},A.Property.prototype.getDefinition=function(){var t=this.value.match(/#([^\)'"]+)/);return t&&(t=t[1]),t||(t=this.value),A.Definitions[t]},A.Property.prototype.isUrlDefinition=function(){return 0==this.value.indexOf("url(")},A.Property.prototype.getFillStyleDefinition=function(t,e){var i=this.getDefinition();if(null!=i&&i.createGradient)return i.createGradient(A.ctx,t,e);if(null!=i&&i.createPattern){if(i.getHrefAttribute().hasValue()){var n=i.attribute("patternTransform");i=i.getHrefAttribute().getDefinition(),n.hasValue()&&(i.attribute("patternTransform",!0).value=n.value)}return i.createPattern(A.ctx,t)}return null},A.Property.prototype.getDPI=function(){return 96},A.Property.prototype.getREM=function(){return A.rootEmSize},A.Property.prototype.getEM=function(){return A.emSize},A.Property.prototype.getUnits=function(){var t=this.value+"";return t.replace(/[0-9\.\-]/g,"")},A.Property.prototype.isPixels=function(){if(!this.hasValue())return!1;var t=this.value+"";return!!t.match(/px$/)||!!t.match(/^[0-9]+$/)},A.Property.prototype.toPixels=function(t,e){if(!this.hasValue())return 0;var i=this.value+"";if(i.match(/rem$/))return this.numValue()*this.getREM(t);if(i.match(/em$/))return this.numValue()*this.getEM(t);if(i.match(/ex$/))return this.numValue()*this.getEM(t)/2;if(i.match(/px$/))return this.numValue();if(i.match(/pt$/))return this.numValue()*this.getDPI(t)*(1/72);if(i.match(/pc$/))return 15*this.numValue();if(i.match(/cm$/))return this.numValue()*this.getDPI(t)/2.54;if(i.match(/mm$/))return this.numValue()*this.getDPI(t)/25.4;if(i.match(/in$/))return this.numValue()*this.getDPI(t);if(i.match(/%$/))return this.numValue()*A.ViewPort.ComputeSize(t);var n=this.numValue();return e&&n<1?n*A.ViewPort.ComputeSize(t):n},A.Property.prototype.toMilliseconds=function(){if(!this.hasValue())return 0;var t=this.value+"";return t.match(/s$/)?1e3*this.numValue():(t.match(/ms$/),this.numValue())},A.Property.prototype.toRadians=function(){if(!this.hasValue())return 0;var t=this.value+"";return t.match(/deg$/)?this.numValue()*(Math.PI/180):t.match(/grad$/)?this.numValue()*(Math.PI/200):t.match(/rad$/)?this.numValue():this.numValue()*(Math.PI/180)};var t={baseline:"alphabetic","before-edge":"top","text-before-edge":"top",middle:"middle",central:"middle","after-edge":"bottom","text-after-edge":"bottom",ideographic:"ideographic",alphabetic:"alphabetic",hanging:"hanging",mathematical:"alphabetic"};return A.Property.prototype.toTextBaseline=function(){return this.hasValue()?t[this.value]:null},A.Font=new function(){this.Styles="normal|italic|oblique|inherit",this.Variants="normal|small-caps|inherit",this.Weights="normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit",this.CreateFont=function(t,e,i,n,s,a){var r=null!=a?this.Parse(a):this.CreateFont("","","","","",A.ctx.font);return{fontFamily:s=s||r.fontFamily,fontSize:n||r.fontSize,fontStyle:t||r.fontStyle,fontWeight:i||r.fontWeight,fontVariant:e||r.fontVariant,toString:function(){return[this.fontStyle,this.fontVariant,this.fontWeight,this.fontSize,this.fontFamily].join(" ")}}};var r=this;this.Parse=function(t){for(var e={},i=A.trim(A.compressSpaces(t||"")).split(" "),n={fontSize:!1,fontStyle:!1,fontWeight:!1,fontVariant:!1},s="",a=0;a<i.length;a++)n.fontStyle||-1==r.Styles.indexOf(i[a])?n.fontVariant||-1==r.Variants.indexOf(i[a])?n.fontWeight||-1==r.Weights.indexOf(i[a])?n.fontSize?"inherit"!=i[a]&&(s+=i[a]):("inherit"!=i[a]&&(e.fontSize=i[a].split("/")[0]),n.fontStyle=n.fontVariant=n.fontWeight=n.fontSize=!0):("inherit"!=i[a]&&(e.fontWeight=i[a]),n.fontStyle=n.fontVariant=n.fontWeight=!0):("inherit"!=i[a]&&(e.fontVariant=i[a]),n.fontStyle=n.fontVariant=!0):("inherit"!=i[a]&&(e.fontStyle=i[a]),n.fontStyle=!0);return""!=s&&(e.fontFamily=s),e}},A.ToNumberArray=function(t){for(var e=A.trim(A.compressSpaces((t||"").replace(/,/g," "))).split(" "),i=0;i<e.length;i++)e[i]=parseFloat(e[i]);return e},A.Point=function(t,e){this.x=t,this.y=e},A.Point.prototype.angleTo=function(t){return Math.atan2(t.y-this.y,t.x-this.x)},A.Point.prototype.applyTransform=function(t){var e=this.x*t[0]+this.y*t[2]+t[4],i=this.x*t[1]+this.y*t[3]+t[5];this.x=e,this.y=i},A.CreatePoint=function(t){var e=A.ToNumberArray(t);return new A.Point(e[0],e[1])},A.CreatePath=function(t){for(var e=A.ToNumberArray(t),i=[],n=0;n<e.length;n+=2)i.push(new A.Point(e[n],e[n+1]));return i},A.BoundingBox=function(t,e,i,n){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN,this.x=function(){return this.x1},this.y=function(){return this.y1},this.width=function(){return this.x2-this.x1},this.height=function(){return this.y2-this.y1},this.addPoint=function(t,e){null!=t&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=t,this.x2=t),t<this.x1&&(this.x1=t),t>this.x2&&(this.x2=t)),null!=e&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=e,this.y2=e),e<this.y1&&(this.y1=e),e>this.y2&&(this.y2=e))},this.addX=function(t){this.addPoint(t,null)},this.addY=function(t){this.addPoint(null,t)},this.addBoundingBox=function(t){this.addPoint(t.x1,t.y1),this.addPoint(t.x2,t.y2)},this.addQuadraticCurve=function(t,e,i,n,s,a){var r=t+2/3*(i-t),o=e+2/3*(n-e),l=r+1/3*(s-t),h=o+1/3*(a-e);this.addBezierCurve(t,e,r,l,o,h,s,a)},this.addBezierCurve=function(t,e,i,n,s,a,r,o){var l=[t,e],h=[i,n],u=[s,a],c=[r,o];this.addPoint(l[0],l[1]),this.addPoint(c[0],c[1]);for(var f=0;f<=1;f++){var m=function(t){return Math.pow(1-t,3)*l[f]+3*Math.pow(1-t,2)*t*h[f]+3*(1-t)*Math.pow(t,2)*u[f]+Math.pow(t,3)*c[f]},p=6*l[f]-12*h[f]+6*u[f],d=-3*l[f]+9*h[f]-9*u[f]+3*c[f],y=3*h[f]-3*l[f];if(0!=d){var v=Math.pow(p,2)-4*y*d;if(!(v<0)){var g=(-p+Math.sqrt(v))/(2*d);0<g&&g<1&&(0==f&&this.addX(m(g)),1==f&&this.addY(m(g)));var x=(-p-Math.sqrt(v))/(2*d);0<x&&x<1&&(0==f&&this.addX(m(x)),1==f&&this.addY(m(x)))}}else{if(0==p)continue;var b=-y/p;0<b&&b<1&&(0==f&&this.addX(m(b)),1==f&&this.addY(m(b)))}}},this.isPointInBox=function(t,e){return this.x1<=t&&t<=this.x2&&this.y1<=e&&e<=this.y2},this.addPoint(t,e),this.addPoint(i,n)},A.Transform=function(t){var e=this;this.Type={},this.Type.translate=function(t){this.p=A.CreatePoint(t),this.apply=function(t){t.translate(this.p.x||0,this.p.y||0)},this.unapply=function(t){t.translate(-1*this.p.x||0,-1*this.p.y||0)},this.applyToPoint=function(t){t.applyTransform([1,0,0,1,this.p.x||0,this.p.y||0])}},this.Type.rotate=function(t){var e=A.ToNumberArray(t);this.angle=new A.Property("angle",e[0]),this.cx=e[1]||0,this.cy=e[2]||0,this.apply=function(t){t.translate(this.cx,this.cy),t.rotate(this.angle.toRadians()),t.translate(-this.cx,-this.cy)},this.unapply=function(t){t.translate(this.cx,this.cy),t.rotate(-1*this.angle.toRadians()),t.translate(-this.cx,-this.cy)},this.applyToPoint=function(t){var e=this.angle.toRadians();t.applyTransform([1,0,0,1,this.p.x||0,this.p.y||0]),t.applyTransform([Math.cos(e),Math.sin(e),-Math.sin(e),Math.cos(e),0,0]),t.applyTransform([1,0,0,1,-this.p.x||0,-this.p.y||0])}},this.Type.scale=function(t){this.p=A.CreatePoint(t),this.apply=function(t){t.scale(this.p.x||1,this.p.y||this.p.x||1)},this.unapply=function(t){t.scale(1/this.p.x||1,1/this.p.y||this.p.x||1)},this.applyToPoint=function(t){t.applyTransform([this.p.x||0,0,0,this.p.y||0,0,0])}},this.Type.matrix=function(t){this.m=A.ToNumberArray(t),this.apply=function(t){t.transform(this.m[0],this.m[1],this.m[2],this.m[3],this.m[4],this.m[5])},this.unapply=function(t){var e=this.m[0],i=this.m[2],n=this.m[4],s=this.m[1],a=this.m[3],r=this.m[5],o=1/(e*(1*a-0*r)-i*(1*s-0*r)+n*(0*s-0*a));t.transform(o*(1*a-0*r),o*(0*r-1*s),o*(0*n-1*i),o*(1*e-0*n),o*(i*r-n*a),o*(n*s-e*r))},this.applyToPoint=function(t){t.applyTransform(this.m)}},this.Type.SkewBase=function(t){this.base=e.Type.matrix,this.base(t),this.angle=new A.Property("angle",t)},this.Type.SkewBase.prototype=new this.Type.matrix,this.Type.skewX=function(t){this.base=e.Type.SkewBase,this.base(t),this.m=[1,0,Math.tan(this.angle.toRadians()),1,0,0]},this.Type.skewX.prototype=new this.Type.SkewBase,this.Type.skewY=function(t){this.base=e.Type.SkewBase,this.base(t),this.m=[1,Math.tan(this.angle.toRadians()),0,1,0,0]},this.Type.skewY.prototype=new this.Type.SkewBase,this.transforms=[],this.apply=function(t){for(var e=0;e<this.transforms.length;e++)this.transforms[e].apply(t)},this.unapply=function(t){for(var e=this.transforms.length-1;0<=e;e--)this.transforms[e].unapply(t)},this.applyToPoint=function(t){for(var e=0;e<this.transforms.length;e++)this.transforms[e].applyToPoint(t)};for(var i=A.trim(A.compressSpaces(t)).replace(/\)([a-zA-Z])/g,") $1").replace(/\)(\s?,\s?)/g,") ").split(/\s(?=[a-z])/),n=0;n<i.length;n++)if("none"!==i[n]){var s=A.trim(i[n].split("(")[0]),a=i[n].split("(")[1].replace(")",""),r=this.Type[s];if(void 0!==r){var o=new r(a);o.type=s,this.transforms.push(o)}}},A.AspectRatio=function(t,e,i,n,s,a,r,o,l,h){var u=(e=(e=A.compressSpaces(e)).replace(/^defer\s/,"")).split(" ")[0]||"xMidYMid",c=e.split(" ")[1]||"meet",f=i/n,m=s/a,p=Math.min(f,m),d=Math.max(f,m);"meet"==c&&(n*=p,a*=p),"slice"==c&&(n*=d,a*=d),l=new A.Property("refX",l),h=new A.Property("refY",h),l.hasValue()&&h.hasValue()?t.translate(-p*l.toPixels("x"),-p*h.toPixels("y")):(u.match(/^xMid/)&&("meet"==c&&p==m||"slice"==c&&d==m)&&t.translate(i/2-n/2,0),u.match(/YMid$/)&&("meet"==c&&p==f||"slice"==c&&d==f)&&t.translate(0,s/2-a/2),u.match(/^xMax/)&&("meet"==c&&p==m||"slice"==c&&d==m)&&t.translate(i-n,0),u.match(/YMax$/)&&("meet"==c&&p==f||"slice"==c&&d==f)&&t.translate(0,s-a)),"none"==u?t.scale(f,m):"meet"==c?t.scale(p,p):"slice"==c&&t.scale(d,d),t.translate(null==r?0:-r,null==o?0:-o)},A.Element={},A.EmptyProperty=new A.Property("EMPTY",""),A.Element.ElementBase=function(a){this.attributes={},this.styles={},this.stylesSpecificity={},this.children=[],this.attribute=function(t,e){var i=this.attributes[t];return null!=i?i:(1==e&&(i=new A.Property(t,""),this.attributes[t]=i),i||A.EmptyProperty)},this.getHrefAttribute=function(){for(var t in this.attributes)if("href"==t||t.match(/:href$/))return this.attributes[t];return A.EmptyProperty},this.style=function(t,e,i){var n=this.styles[t];if(null!=n)return n;var s=this.attribute(t);if(null!=s&&s.hasValue())return this.styles[t]=s;if(1!=i){var a=this.parent;if(null!=a){var r=a.style(t);if(null!=r&&r.hasValue())return r}}return 1==e&&(n=new A.Property(t,""),this.styles[t]=n),n||A.EmptyProperty},this.render=function(t){if("none"!=this.style("display").value&&"hidden"!=this.style("visibility").value){if(t.save(),this.style("mask").hasValue()){var e=this.style("mask").getDefinition();null!=e&&e.apply(t,this)}else if(this.style("filter").hasValue()){var i=this.style("filter").getDefinition();null!=i&&i.apply(t,this)}else this.setContext(t),this.renderChildren(t),this.clearContext(t);t.restore()}},this.setContext=function(){},this.clearContext=function(){},this.renderChildren=function(t){for(var e=0;e<this.children.length;e++)this.children[e].render(t)},this.addChild=function(t,e){var i=t;e&&(i=A.CreateElement(t)),i.parent=this,"title"!=i.type&&this.children.push(i)},this.addStylesFromStyleDefinition=function(){for(var t in A.Styles)if("@"!=t[0]&&m(a,t)){var e=A.Styles[t],i=A.StylesSpecificity[t];if(null!=e)for(var n in e){var s=this.stylesSpecificity[n];void 0===s&&(s="000"),s<=i&&(this.styles[n]=e[n],this.stylesSpecificity[n]=i)}}};var t,e=new RegExp("^[A-Z-]+$");if(null!=a&&1==a.nodeType){for(var i=0;i<a.attributes.length;i++){var n=a.attributes[i],s=(t=n.nodeName,e.test(t)?t.toLowerCase():t);this.attributes[s]=new A.Property(s,n.value)}if(this.addStylesFromStyleDefinition(),this.attribute("style").hasValue()){var r=this.attribute("style").value.split(";");for(i=0;i<r.length;i++)if(""!=A.trim(r[i])){var o=r[i].split(":"),l=A.trim(o[0]),h=A.trim(o[1]);this.styles[l]=new A.Property(l,h)}}for(this.attribute("id").hasValue()&&null==A.Definitions[this.attribute("id").value]&&(A.Definitions[this.attribute("id").value]=this),i=0;i<a.childNodes.length;i++){var u=a.childNodes[i];if(1==u.nodeType&&this.addChild(u,!0),this.captureTextNodes&&(3==u.nodeType||4==u.nodeType)){var c=u.value||u.text||u.textContent||"";""!=A.compressSpaces(c)&&this.addChild(new A.Element.tspan(u),!1)}}}},A.Element.RenderedElementBase=function(t){this.base=A.Element.ElementBase,this.base(t),this.calculateOpacity=function(){for(var t=1,e=this;null!=e;){var i=e.style("opacity",!1,!0);i.hasValue()&&(t*=i.numValue()),e=e.parent}return t},this.setContext=function(t,e){if(!e){var i;if(this.style("fill").isUrlDefinition())null!=(i=this.style("fill").getFillStyleDefinition(this,this.style("fill-opacity")))&&(t.fillStyle=i);else if(this.style("fill").hasValue()){var n;"currentColor"==(n=this.style("fill")).value&&(n.value=this.style("color").value),"inherit"!=n.value&&(t.fillStyle="none"==n.value?"rgba(0,0,0,0)":n.value)}if(this.style("fill-opacity").hasValue()&&(n=(n=new A.Property("fill",t.fillStyle)).addOpacity(this.style("fill-opacity")),t.fillStyle=n.value),this.style("stroke").isUrlDefinition())null!=(i=this.style("stroke").getFillStyleDefinition(this,this.style("stroke-opacity")))&&(t.strokeStyle=i);else if(this.style("stroke").hasValue()){var s;"currentColor"==(s=this.style("stroke")).value&&(s.value=this.style("color").value),"inherit"!=s.value&&(t.strokeStyle="none"==s.value?"rgba(0,0,0,0)":s.value)}if(this.style("stroke-opacity").hasValue()&&(s=(s=new A.Property("stroke",t.strokeStyle)).addOpacity(this.style("stroke-opacity")),t.strokeStyle=s.value),this.style("stroke-width").hasValue()){var a=this.style("stroke-width").toPixels();t.lineWidth=0==a?.001:a}if(this.style("stroke-linecap").hasValue()&&(t.lineCap=this.style("stroke-linecap").value),this.style("stroke-linejoin").hasValue()&&(t.lineJoin=this.style("stroke-linejoin").value),this.style("stroke-miterlimit").hasValue()&&(t.miterLimit=this.style("stroke-miterlimit").value),this.style("paint-order").hasValue()&&(t.paintOrder=this.style("paint-order").value),this.style("stroke-dasharray").hasValue()&&"none"!=this.style("stroke-dasharray").value){var r=A.ToNumberArray(this.style("stroke-dasharray").value);void 0!==t.setLineDash?t.setLineDash(r):void 0!==t.webkitLineDash?t.webkitLineDash=r:void 0===t.mozDash||1==r.length&&0==r[0]||(t.mozDash=r);var o=this.style("stroke-dashoffset").toPixels();void 0!==t.lineDashOffset?t.lineDashOffset=o:void 0!==t.webkitLineDashOffset?t.webkitLineDashOffset=o:void 0!==t.mozDashOffset&&(t.mozDashOffset=o)}}if(void 0!==t.font){t.font=A.Font.CreateFont(this.style("font-style").value,this.style("font-variant").value,this.style("font-weight").value,this.style("font-size").hasValue()?this.style("font-size").toPixels()+"px":"",this.style("font-family").value).toString();var l=this.style("font-size",!1,!1);l.isPixels()&&(A.emSize=l.toPixels())}if(this.style("transform",!1,!0).hasValue()&&new A.Transform(this.style("transform",!1,!0).value).apply(t),this.style("clip-path",!1,!0).hasValue()){var h=this.style("clip-path",!1,!0).getDefinition();null!=h&&h.apply(t)}t.globalAlpha=this.calculateOpacity()}},A.Element.RenderedElementBase.prototype=new A.Element.ElementBase,A.Element.PathElementBase=function(t){this.base=A.Element.RenderedElementBase,this.base(t),this.path=function(t){return null!=t&&t.beginPath(),new A.BoundingBox},this.renderChildren=function(t){this.path(t),A.Mouse.checkPath(this,t),""!=t.fillStyle&&("inherit"!=this.style("fill-rule").valueOrDefault("inherit")?t.fill(this.style("fill-rule").value):t.fill()),""!=t.strokeStyle&&t.stroke();var e=this.getMarkers();if(null!=e){if(this.style("marker-start").isUrlDefinition()&&(i=this.style("marker-start").getDefinition()).render(t,e[0][0],e[0][1]),this.style("marker-mid").isUrlDefinition())for(var i=this.style("marker-mid").getDefinition(),n=1;n<e.length-1;n++)i.render(t,e[n][0],e[n][1]);this.style("marker-end").isUrlDefinition()&&(i=this.style("marker-end").getDefinition()).render(t,e[e.length-1][0],e[e.length-1][1])}},this.getBoundingBox=function(){return this.path()},this.getMarkers=function(){return null}},A.Element.PathElementBase.prototype=new A.Element.RenderedElementBase,A.Element.svg=function(t){this.base=A.Element.RenderedElementBase,this.base(t),this.baseClearContext=this.clearContext,this.clearContext=function(t){this.baseClearContext(t),A.ViewPort.RemoveCurrent()},this.baseSetContext=this.setContext,this.setContext=function(t){if(t.strokeStyle="rgba(0,0,0,0)",t.lineCap="butt",t.lineJoin="miter",t.miterLimit=4,t.canvas.style&&void 0!==t.font&&void 0!==c.getComputedStyle){t.font=c.getComputedStyle(t.canvas).getPropertyValue("font");var e=new A.Property("fontSize",A.Font.Parse(t.font).fontSize);e.hasValue()&&(A.rootEmSize=A.emSize=e.toPixels("y"))}this.baseSetContext(t),this.attribute("x").hasValue()||(this.attribute("x",!0).value=0),this.attribute("y").hasValue()||(this.attribute("y",!0).value=0),t.translate(this.attribute("x").toPixels("x"),this.attribute("y").toPixels("y"));var i=A.ViewPort.width(),n=A.ViewPort.height();if(this.attribute("width").hasValue()||(this.attribute("width",!0).value="100%"),this.attribute("height").hasValue()||(this.attribute("height",!0).value="100%"),void 0===this.root){i=this.attribute("width").toPixels("x"),n=this.attribute("height").toPixels("y");var s=0,a=0;this.attribute("refX").hasValue()&&this.attribute("refY").hasValue()&&(s=-this.attribute("refX").toPixels("x"),a=-this.attribute("refY").toPixels("y")),"visible"!=this.attribute("overflow").valueOrDefault("hidden")&&(t.beginPath(),t.moveTo(s,a),t.lineTo(i,a),t.lineTo(i,n),t.lineTo(s,n),t.closePath(),t.clip())}if(A.ViewPort.SetCurrent(i,n),this.attribute("viewBox").hasValue()){var r=A.ToNumberArray(this.attribute("viewBox").value),o=r[0],l=r[1];i=r[2],n=r[3],A.AspectRatio(t,this.attribute("preserveAspectRatio").value,A.ViewPort.width(),i,A.ViewPort.height(),n,o,l,this.attribute("refX").value,this.attribute("refY").value),A.ViewPort.RemoveCurrent(),A.ViewPort.SetCurrent(r[2],r[3])}}},A.Element.svg.prototype=new A.Element.RenderedElementBase,A.Element.rect=function(t){this.base=A.Element.PathElementBase,this.base(t),this.path=function(t){var e=this.attribute("x").toPixels("x"),i=this.attribute("y").toPixels("y"),n=this.attribute("width").toPixels("x"),s=this.attribute("height").toPixels("y"),a=this.attribute("rx").toPixels("x"),r=this.attribute("ry").toPixels("y");if(this.attribute("rx").hasValue()&&!this.attribute("ry").hasValue()&&(r=a),this.attribute("ry").hasValue()&&!this.attribute("rx").hasValue()&&(a=r),a=Math.min(a,n/2),r=Math.min(r,s/2),null!=t){var o=(Math.sqrt(2)-1)/3*4;t.beginPath(),t.moveTo(e+a,i),t.lineTo(e+n-a,i),t.bezierCurveTo(e+n-a+o*a,i,e+n,i+r-o*r,e+n,i+r),t.lineTo(e+n,i+s-r),t.bezierCurveTo(e+n,i+s-r+o*r,e+n-a+o*a,i+s,e+n-a,i+s),t.lineTo(e+a,i+s),t.bezierCurveTo(e+a-o*a,i+s,e,i+s-r+o*r,e,i+s-r),t.lineTo(e,i+r),t.bezierCurveTo(e,i+r-o*r,e+a-o*a,i,e+a,i),t.closePath()}return new A.BoundingBox(e,i,e+n,i+s)}},A.Element.rect.prototype=new A.Element.PathElementBase,A.Element.circle=function(t){this.base=A.Element.PathElementBase,this.base(t),this.path=function(t){var e=this.attribute("cx").toPixels("x"),i=this.attribute("cy").toPixels("y"),n=this.attribute("r").toPixels();return null!=t&&(t.beginPath(),t.arc(e,i,n,0,2*Math.PI,!1),t.closePath()),new A.BoundingBox(e-n,i-n,e+n,i+n)}},A.Element.circle.prototype=new A.Element.PathElementBase,A.Element.ellipse=function(t){this.base=A.Element.PathElementBase,this.base(t),this.path=function(t){var e=(Math.sqrt(2)-1)/3*4,i=this.attribute("rx").toPixels("x"),n=this.attribute("ry").toPixels("y"),s=this.attribute("cx").toPixels("x"),a=this.attribute("cy").toPixels("y");return null!=t&&(t.beginPath(),t.moveTo(s+i,a),t.bezierCurveTo(s+i,a+e*n,s+e*i,a+n,s,a+n),t.bezierCurveTo(s-e*i,a+n,s-i,a+e*n,s-i,a),t.bezierCurveTo(s-i,a-e*n,s-e*i,a-n,s,a-n),t.bezierCurveTo(s+e*i,a-n,s+i,a-e*n,s+i,a),t.closePath()),new A.BoundingBox(s-i,a-n,s+i,a+n)}},A.Element.ellipse.prototype=new A.Element.PathElementBase,A.Element.line=function(t){this.base=A.Element.PathElementBase,this.base(t),this.getPoints=function(){return[new A.Point(this.attribute("x1").toPixels("x"),this.attribute("y1").toPixels("y")),new A.Point(this.attribute("x2").toPixels("x"),this.attribute("y2").toPixels("y"))]},this.path=function(t){var e=this.getPoints();return null!=t&&(t.beginPath(),t.moveTo(e[0].x,e[0].y),t.lineTo(e[1].x,e[1].y)),new A.BoundingBox(e[0].x,e[0].y,e[1].x,e[1].y)},this.getMarkers=function(){var t=this.getPoints(),e=t[0].angleTo(t[1]);return[[t[0],e],[t[1],e]]}},A.Element.line.prototype=new A.Element.PathElementBase,A.Element.polyline=function(t){this.base=A.Element.PathElementBase,this.base(t),this.points=A.CreatePath(this.attribute("points").value),this.path=function(t){var e=new A.BoundingBox(this.points[0].x,this.points[0].y);null!=t&&(t.beginPath(),t.moveTo(this.points[0].x,this.points[0].y));for(var i=1;i<this.points.length;i++)e.addPoint(this.points[i].x,this.points[i].y),null!=t&&t.lineTo(this.points[i].x,this.points[i].y);return e},this.getMarkers=function(){for(var t=[],e=0;e<this.points.length-1;e++)t.push([this.points[e],this.points[e].angleTo(this.points[e+1])]);return 0<t.length&&t.push([this.points[this.points.length-1],t[t.length-1][1]]),t}},A.Element.polyline.prototype=new A.Element.PathElementBase,A.Element.polygon=function(t){this.base=A.Element.polyline,this.base(t),this.basePath=this.path,this.path=function(t){var e=this.basePath(t);return null!=t&&(t.lineTo(this.points[0].x,this.points[0].y),t.closePath()),e}},A.Element.polygon.prototype=new A.Element.polyline,A.Element.path=function(t){this.base=A.Element.PathElementBase,this.base(t);var e=this.attribute("d").value;e=e.replace(/,/gm," ");for(var i=0;i<2;i++)e=e.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm,"$1 $2");for(e=(e=e.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2")).replace(/([0-9])([+\-])/gm,"$1 $2"),i=0;i<2;i++)e=e.replace(/(\.[0-9]*)(\.)/gm,"$1 $2");e=e.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm,"$1 $3 $4 "),e=A.compressSpaces(e),e=A.trim(e),this.PathParser=new function(t){this.tokens=t.split(" "),this.reset=function(){this.i=-1,this.command="",this.previousCommand="",this.start=new A.Point(0,0),this.control=new A.Point(0,0),this.current=new A.Point(0,0),this.points=[],this.angles=[]},this.isEnd=function(){return this.i>=this.tokens.length-1},this.isCommandOrEnd=function(){return!!this.isEnd()||null!=this.tokens[this.i+1].match(/^[A-Za-z]$/)},this.isRelativeCommand=function(){switch(this.command){case"m":case"l":case"h":case"v":case"c":case"s":case"q":case"t":case"a":case"z":return!0}return!1},this.getToken=function(){return this.i++,this.tokens[this.i]},this.getScalar=function(){return parseFloat(this.getToken())},this.nextCommand=function(){this.previousCommand=this.command,this.command=this.getToken()},this.getPoint=function(){var t=new A.Point(this.getScalar(),this.getScalar());return this.makeAbsolute(t)},this.getAsControlPoint=function(){var t=this.getPoint();return this.control=t},this.getAsCurrentPoint=function(){var t=this.getPoint();return this.current=t},this.getReflectedControlPoint=function(){return"c"!=this.previousCommand.toLowerCase()&&"s"!=this.previousCommand.toLowerCase()&&"q"!=this.previousCommand.toLowerCase()&&"t"!=this.previousCommand.toLowerCase()?this.current:new A.Point(2*this.current.x-this.control.x,2*this.current.y-this.control.y)},this.makeAbsolute=function(t){return this.isRelativeCommand()&&(t.x+=this.current.x,t.y+=this.current.y),t},this.addMarker=function(t,e,i){null!=i&&0<this.angles.length&&null==this.angles[this.angles.length-1]&&(this.angles[this.angles.length-1]=this.points[this.points.length-1].angleTo(i)),this.addMarkerAngle(t,null==e?null:e.angleTo(t))},this.addMarkerAngle=function(t,e){this.points.push(t),this.angles.push(e)},this.getMarkerPoints=function(){return this.points},this.getMarkerAngles=function(){for(var t=0;t<this.angles.length;t++)if(null==this.angles[t])for(var e=t+1;e<this.angles.length;e++)if(null!=this.angles[e]){this.angles[t]=this.angles[e];break}return this.angles}}(e),this.path=function(t){var e=this.PathParser;e.reset();var i=new A.BoundingBox;for(null!=t&&t.beginPath();!e.isEnd();)switch(e.nextCommand(),e.command){case"M":case"m":var n=e.getAsCurrentPoint();for(e.addMarker(n),i.addPoint(n.x,n.y),null!=t&&t.moveTo(n.x,n.y),e.start=e.current;!e.isCommandOrEnd();)n=e.getAsCurrentPoint(),e.addMarker(n,e.start),i.addPoint(n.x,n.y),null!=t&&t.lineTo(n.x,n.y);break;case"L":case"l":for(;!e.isCommandOrEnd();){var s=e.current;n=e.getAsCurrentPoint(),e.addMarker(n,s),i.addPoint(n.x,n.y),null!=t&&t.lineTo(n.x,n.y)}break;case"H":case"h":for(;!e.isCommandOrEnd();){var a=new A.Point((e.isRelativeCommand()?e.current.x:0)+e.getScalar(),e.current.y);e.addMarker(a,e.current),e.current=a,i.addPoint(e.current.x,e.current.y),null!=t&&t.lineTo(e.current.x,e.current.y)}break;case"V":case"v":for(;!e.isCommandOrEnd();)a=new A.Point(e.current.x,(e.isRelativeCommand()?e.current.y:0)+e.getScalar()),e.addMarker(a,e.current),e.current=a,i.addPoint(e.current.x,e.current.y),null!=t&&t.lineTo(e.current.x,e.current.y);break;case"C":case"c":for(;!e.isCommandOrEnd();){var r=e.current,o=e.getPoint(),l=e.getAsControlPoint(),h=e.getAsCurrentPoint();e.addMarker(h,l,o),i.addBezierCurve(r.x,r.y,o.x,o.y,l.x,l.y,h.x,h.y),null!=t&&t.bezierCurveTo(o.x,o.y,l.x,l.y,h.x,h.y)}break;case"S":case"s":for(;!e.isCommandOrEnd();)r=e.current,o=e.getReflectedControlPoint(),l=e.getAsControlPoint(),h=e.getAsCurrentPoint(),e.addMarker(h,l,o),i.addBezierCurve(r.x,r.y,o.x,o.y,l.x,l.y,h.x,h.y),null!=t&&t.bezierCurveTo(o.x,o.y,l.x,l.y,h.x,h.y);break;case"Q":case"q":for(;!e.isCommandOrEnd();)r=e.current,l=e.getAsControlPoint(),h=e.getAsCurrentPoint(),e.addMarker(h,l,l),i.addQuadraticCurve(r.x,r.y,l.x,l.y,h.x,h.y),null!=t&&t.quadraticCurveTo(l.x,l.y,h.x,h.y);break;case"T":case"t":for(;!e.isCommandOrEnd();)r=e.current,l=e.getReflectedControlPoint(),e.control=l,h=e.getAsCurrentPoint(),e.addMarker(h,l,l),i.addQuadraticCurve(r.x,r.y,l.x,l.y,h.x,h.y),null!=t&&t.quadraticCurveTo(l.x,l.y,h.x,h.y);break;case"A":case"a":for(;!e.isCommandOrEnd();){r=e.current;var u=e.getScalar(),c=e.getScalar(),f=e.getScalar()*(Math.PI/180),m=e.getScalar(),p=e.getScalar(),d=(h=e.getAsCurrentPoint(),new A.Point(Math.cos(f)*(r.x-h.x)/2+Math.sin(f)*(r.y-h.y)/2,-Math.sin(f)*(r.x-h.x)/2+Math.cos(f)*(r.y-h.y)/2)),y=Math.pow(d.x,2)/Math.pow(u,2)+Math.pow(d.y,2)/Math.pow(c,2);1<y&&(u*=Math.sqrt(y),c*=Math.sqrt(y));var v=(m==p?-1:1)*Math.sqrt((Math.pow(u,2)*Math.pow(c,2)-Math.pow(u,2)*Math.pow(d.y,2)-Math.pow(c,2)*Math.pow(d.x,2))/(Math.pow(u,2)*Math.pow(d.y,2)+Math.pow(c,2)*Math.pow(d.x,2)));isNaN(v)&&(v=0);var g=new A.Point(v*u*d.y/c,v*-c*d.x/u),x=new A.Point((r.x+h.x)/2+Math.cos(f)*g.x-Math.sin(f)*g.y,(r.y+h.y)/2+Math.sin(f)*g.x+Math.cos(f)*g.y),b=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2))},P=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(b(t)*b(e))},E=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(P(t,e))},w=E([1,0],[(d.x-g.x)/u,(d.y-g.y)/c]),B=[(d.x-g.x)/u,(d.y-g.y)/c],C=[(-d.x-g.x)/u,(-d.y-g.y)/c],T=E(B,C);P(B,C)<=-1&&(T=Math.PI),1<=P(B,C)&&(T=0);var V=1-p?1:-1,M=w+V*(T/2),S=new A.Point(x.x+u*Math.cos(M),x.y+c*Math.sin(M));if(e.addMarkerAngle(S,M-V*Math.PI/2),e.addMarkerAngle(h,M-V*Math.PI),i.addPoint(h.x,h.y),null!=t&&!isNaN(w)&&!isNaN(T)){P=c<u?u:c;var k=c<u?1:u/c,D=c<u?c/u:1;t.translate(x.x,x.y),t.rotate(f),t.scale(k,D),t.arc(0,0,P,w,w+T,1-p),t.scale(1/k,1/D),t.rotate(-f),t.translate(-x.x,-x.y)}}break;case"Z":case"z":null!=t&&i.x1!==i.x2&&i.y1!==i.y2&&t.closePath(),e.current=e.start}return i},this.getMarkers=function(){for(var t=this.PathParser.getMarkerPoints(),e=this.PathParser.getMarkerAngles(),i=[],n=0;n<t.length;n++)i.push([t[n],e[n]]);return i}},A.Element.path.prototype=new A.Element.PathElementBase,A.Element.pattern=function(t){this.base=A.Element.ElementBase,this.base(t),this.createPattern=function(t){var e=this.attribute("width").toPixels("x",!0),i=this.attribute("height").toPixels("y",!0),n=new A.Element.svg;n.attributes.viewBox=new A.Property("viewBox",this.attribute("viewBox").value),n.attributes.width=new A.Property("width",e+"px"),n.attributes.height=new A.Property("height",i+"px"),n.attributes.transform=new A.Property("transform",this.attribute("patternTransform").value),n.children=this.children;var s=p(e,i),a=s.getContext("2d");this.attribute("x").hasValue()&&this.attribute("y").hasValue()&&a.translate(this.attribute("x").toPixels("x",!0),this.attribute("y").toPixels("y",!0));for(var r=-1;r<=1;r++)for(var o=-1;o<=1;o++)a.save(),n.attributes.x=new A.Property("x",r*s.width),n.attributes.y=new A.Property("y",o*s.height),n.render(a),a.restore();return t.createPattern(s,"repeat")}},A.Element.pattern.prototype=new A.Element.ElementBase,A.Element.marker=function(t){this.base=A.Element.ElementBase,this.base(t),this.baseRender=this.render,this.render=function(t,e,i){if(e){t.translate(e.x,e.y),"auto"==this.attribute("orient").valueOrDefault("auto")&&t.rotate(i),"strokeWidth"==this.attribute("markerUnits").valueOrDefault("strokeWidth")&&t.scale(t.lineWidth,t.lineWidth),t.save();var n=new A.Element.svg;n.attributes.viewBox=new A.Property("viewBox",this.attribute("viewBox").value),n.attributes.refX=new A.Property("refX",this.attribute("refX").value),n.attributes.refY=new A.Property("refY",this.attribute("refY").value),n.attributes.width=new A.Property("width",this.attribute("markerWidth").value),n.attributes.height=new A.Property("height",this.attribute("markerHeight").value),n.attributes.fill=new A.Property("fill",this.attribute("fill").valueOrDefault("black")),n.attributes.stroke=new A.Property("stroke",this.attribute("stroke").valueOrDefault("none")),n.children=this.children,n.render(t),t.restore(),"strokeWidth"==this.attribute("markerUnits").valueOrDefault("strokeWidth")&&t.scale(1/t.lineWidth,1/t.lineWidth),"auto"==this.attribute("orient").valueOrDefault("auto")&&t.rotate(-i),t.translate(-e.x,-e.y)}}},A.Element.marker.prototype=new A.Element.ElementBase,A.Element.defs=function(t){this.base=A.Element.ElementBase,this.base(t),this.render=function(){}},A.Element.defs.prototype=new A.Element.ElementBase,A.Element.GradientBase=function(t){this.base=A.Element.ElementBase,this.base(t),this.stops=[];for(var e=0;e<this.children.length;e++){var i=this.children[e];"stop"==i.type&&this.stops.push(i)}this.getGradient=function(){},this.gradientUnits=function(){return this.attribute("gradientUnits").valueOrDefault("objectBoundingBox")},this.attributesToInherit=["gradientUnits"],this.inheritStopContainer=function(t){for(var e=0;e<this.attributesToInherit.length;e++){var i=this.attributesToInherit[e];!this.attribute(i).hasValue()&&t.attribute(i).hasValue()&&(this.attribute(i,!0).value=t.attribute(i).value)}},this.createGradient=function(t,e,i){var n=this;this.getHrefAttribute().hasValue()&&(n=this.getHrefAttribute().getDefinition(),this.inheritStopContainer(n));var s=function(t){return i.hasValue()?new A.Property("color",t).addOpacity(i).value:t},a=this.getGradient(t,e);if(null==a)return s(n.stops[n.stops.length-1].color);for(var r=0;r<n.stops.length;r++)a.addColorStop(n.stops[r].offset,s(n.stops[r].color));if(this.attribute("gradientTransform").hasValue()){var o=A.ViewPort.viewPorts[0],l=new A.Element.rect;l.attributes.x=new A.Property("x",-A.MAX_VIRTUAL_PIXELS/3),l.attributes.y=new A.Property("y",-A.MAX_VIRTUAL_PIXELS/3),l.attributes.width=new A.Property("width",A.MAX_VIRTUAL_PIXELS),l.attributes.height=new A.Property("height",A.MAX_VIRTUAL_PIXELS);var h=new A.Element.g;h.attributes.transform=new A.Property("transform",this.attribute("gradientTransform").value),h.children=[l];var u=new A.Element.svg;u.attributes.x=new A.Property("x",0),u.attributes.y=new A.Property("y",0),u.attributes.width=new A.Property("width",o.width),u.attributes.height=new A.Property("height",o.height),u.children=[h];var c=p(o.width,o.height),f=c.getContext("2d");return f.fillStyle=a,u.render(f),f.createPattern(c,"no-repeat")}return a}},A.Element.GradientBase.prototype=new A.Element.ElementBase,A.Element.linearGradient=function(t){this.base=A.Element.GradientBase,this.base(t),this.attributesToInherit.push("x1"),this.attributesToInherit.push("y1"),this.attributesToInherit.push("x2"),this.attributesToInherit.push("y2"),this.getGradient=function(t,e){var i="objectBoundingBox"==this.gradientUnits()?e.getBoundingBox(t):null;this.attribute("x1").hasValue()||this.attribute("y1").hasValue()||this.attribute("x2").hasValue()||this.attribute("y2").hasValue()||(this.attribute("x1",!0).value=0,this.attribute("y1",!0).value=0,this.attribute("x2",!0).value=1,this.attribute("y2",!0).value=0);var n="objectBoundingBox"==this.gradientUnits()?i.x()+i.width()*this.attribute("x1").numValue():this.attribute("x1").toPixels("x"),s="objectBoundingBox"==this.gradientUnits()?i.y()+i.height()*this.attribute("y1").numValue():this.attribute("y1").toPixels("y"),a="objectBoundingBox"==this.gradientUnits()?i.x()+i.width()*this.attribute("x2").numValue():this.attribute("x2").toPixels("x"),r="objectBoundingBox"==this.gradientUnits()?i.y()+i.height()*this.attribute("y2").numValue():this.attribute("y2").toPixels("y");return n==a&&s==r?null:t.createLinearGradient(n,s,a,r)}},A.Element.linearGradient.prototype=new A.Element.GradientBase,A.Element.radialGradient=function(t){this.base=A.Element.GradientBase,this.base(t),this.attributesToInherit.push("cx"),this.attributesToInherit.push("cy"),this.attributesToInherit.push("r"),this.attributesToInherit.push("fx"),this.attributesToInherit.push("fy"),this.getGradient=function(t,e){var i=e.getBoundingBox(t);this.attribute("cx").hasValue()||(this.attribute("cx",!0).value="50%"),this.attribute("cy").hasValue()||(this.attribute("cy",!0).value="50%"),this.attribute("r").hasValue()||(this.attribute("r",!0).value="50%");var n="objectBoundingBox"==this.gradientUnits()?i.x()+i.width()*this.attribute("cx").numValue():this.attribute("cx").toPixels("x"),s="objectBoundingBox"==this.gradientUnits()?i.y()+i.height()*this.attribute("cy").numValue():this.attribute("cy").toPixels("y"),a=n,r=s;this.attribute("fx").hasValue()&&(a="objectBoundingBox"==this.gradientUnits()?i.x()+i.width()*this.attribute("fx").numValue():this.attribute("fx").toPixels("x")),this.attribute("fy").hasValue()&&(r="objectBoundingBox"==this.gradientUnits()?i.y()+i.height()*this.attribute("fy").numValue():this.attribute("fy").toPixels("y"));var o="objectBoundingBox"==this.gradientUnits()?(i.width()+i.height())/2*this.attribute("r").numValue():this.attribute("r").toPixels();return t.createRadialGradient(a,r,0,n,s,o)}},A.Element.radialGradient.prototype=new A.Element.GradientBase,A.Element.stop=function(t){this.base=A.Element.ElementBase,this.base(t),this.offset=this.attribute("offset").numValue(),this.offset<0&&(this.offset=0),1<this.offset&&(this.offset=1);var e=this.style("stop-color",!0);""===e.value&&(e.value="#000"),this.style("stop-opacity").hasValue()&&(e=e.addOpacity(this.style("stop-opacity"))),this.color=e.value},A.Element.stop.prototype=new A.Element.ElementBase,A.Element.AnimateBase=function(t){this.base=A.Element.ElementBase,this.base(t),A.Animations.push(this),this.duration=0,this.begin=this.attribute("begin").toMilliseconds(),this.maxDuration=this.begin+this.attribute("dur").toMilliseconds(),this.getProperty=function(){var t=this.attribute("attributeType").value,e=this.attribute("attributeName").value;return"CSS"==t?this.parent.style(e,!0):this.parent.attribute(e,!0)},this.initialValue=null,this.initialUnits="",this.removed=!1,this.calcValue=function(){return""},this.update=function(t){if(null==this.initialValue&&(this.initialValue=this.getProperty().value,this.initialUnits=this.getProperty().getUnits()),this.duration>this.maxDuration){if("indefinite"==this.attribute("repeatCount").value||"indefinite"==this.attribute("repeatDur").value)this.duration=0;else if("freeze"!=this.attribute("fill").valueOrDefault("remove")||this.frozen){if("remove"==this.attribute("fill").valueOrDefault("remove")&&!this.removed)return this.removed=!0,this.getProperty().value=this.parent.animationFrozen?this.parent.animationFrozenValue:this.initialValue,!0}else this.frozen=!0,this.parent.animationFrozen=!0,this.parent.animationFrozenValue=this.getProperty().value;return!1}this.duration=this.duration+t;var e=!1;if(this.begin<this.duration){var i=this.calcValue();this.attribute("type").hasValue()&&(i=this.attribute("type").value+"("+i+")"),this.getProperty().value=i,e=!0}return e},this.from=this.attribute("from"),this.to=this.attribute("to"),this.values=this.attribute("values"),this.values.hasValue()&&(this.values.value=this.values.value.split(";")),this.progress=function(){var t={progress:(this.duration-this.begin)/(this.maxDuration-this.begin)};if(this.values.hasValue()){var e=t.progress*(this.values.value.length-1),i=Math.floor(e),n=Math.ceil(e);t.from=new A.Property("from",parseFloat(this.values.value[i])),t.to=new A.Property("to",parseFloat(this.values.value[n])),t.progress=(e-i)/(n-i)}else t.from=this.from,t.to=this.to;return t}},A.Element.AnimateBase.prototype=new A.Element.ElementBase,A.Element.animate=function(t){this.base=A.Element.AnimateBase,this.base(t),this.calcValue=function(){var t=this.progress();return t.from.numValue()+(t.to.numValue()-t.from.numValue())*t.progress+this.initialUnits}},A.Element.animate.prototype=new A.Element.AnimateBase,A.Element.animateColor=function(t){this.base=A.Element.AnimateBase,this.base(t),this.calcValue=function(){var t=this.progress(),e=new y(t.from.value),i=new y(t.to.value);if(e.ok&&i.ok){var n=e.r+(i.r-e.r)*t.progress,s=e.g+(i.g-e.g)*t.progress,a=e.b+(i.b-e.b)*t.progress;return"rgb("+parseInt(n,10)+","+parseInt(s,10)+","+parseInt(a,10)+")"}return this.attribute("from").value}},A.Element.animateColor.prototype=new A.Element.AnimateBase,A.Element.animateTransform=function(t){this.base=A.Element.AnimateBase,this.base(t),this.calcValue=function(){for(var t=this.progress(),e=A.ToNumberArray(t.from.value),i=A.ToNumberArray(t.to.value),n="",s=0;s<e.length;s++)n+=e[s]+(i[s]-e[s])*t.progress+" ";return n}},A.Element.animateTransform.prototype=new A.Element.animate,A.Element.font=function(t){this.base=A.Element.ElementBase,this.base(t),this.horizAdvX=this.attribute("horiz-adv-x").numValue(),this.isRTL=!1,this.isArabic=!1,this.fontFace=null,this.missingGlyph=null,this.glyphs=[];for(var e=0;e<this.children.length;e++){var i=this.children[e];"font-face"==i.type?(this.fontFace=i).style("font-family").hasValue()&&(A.Definitions[i.style("font-family").value]=this):"missing-glyph"==i.type?this.missingGlyph=i:"glyph"==i.type&&(""!=i.arabicForm?(this.isRTL=!0,this.isArabic=!0,void 0===this.glyphs[i.unicode]&&(this.glyphs[i.unicode]=[]),this.glyphs[i.unicode][i.arabicForm]=i):this.glyphs[i.unicode]=i)}this.render=function(){}},A.Element.font.prototype=new A.Element.ElementBase,A.Element.fontface=function(t){this.base=A.Element.ElementBase,this.base(t),this.ascent=this.attribute("ascent").value,this.descent=this.attribute("descent").value,this.unitsPerEm=this.attribute("units-per-em").numValue()},A.Element.fontface.prototype=new A.Element.ElementBase,A.Element.missingglyph=function(t){this.base=A.Element.path,this.base(t),this.horizAdvX=0},A.Element.missingglyph.prototype=new A.Element.path,A.Element.glyph=function(t){this.base=A.Element.path,this.base(t),this.horizAdvX=this.attribute("horiz-adv-x").numValue(),this.unicode=this.attribute("unicode").value,this.arabicForm=this.attribute("arabic-form").value},A.Element.glyph.prototype=new A.Element.path,A.Element.text=function(t){this.captureTextNodes=!0,this.base=A.Element.RenderedElementBase,this.base(t),this.baseSetContext=this.setContext,this.setContext=function(t){this.baseSetContext(t);var e=this.style("dominant-baseline").toTextBaseline();null==e&&(e=this.style("alignment-baseline").toTextBaseline()),null!=e&&(t.textBaseline=e)},this.initializeCoordinates=function(t){this.x=this.attribute("x").toPixels("x"),this.y=this.attribute("y").toPixels("y"),this.attribute("dx").hasValue()&&(this.x+=this.attribute("dx").toPixels("x")),this.attribute("dy").hasValue()&&(this.y+=this.attribute("dy").toPixels("y")),this.x+=this.getAnchorDelta(t,this,0)},this.getBoundingBox=function(t){this.initializeCoordinates(t);for(var e=null,i=0;i<this.children.length;i++){var n=this.getChildBoundingBox(t,this,this,i);null==e?e=n:e.addBoundingBox(n)}return e},this.renderChildren=function(t){this.initializeCoordinates(t);for(var e=0;e<this.children.length;e++)this.renderChild(t,this,this,e)},this.getAnchorDelta=function(t,e,i){var n=this.style("text-anchor").valueOrDefault("start");if("start"==n)return 0;for(var s=0,a=i;a<e.children.length;a++){var r=e.children[a];if(i<a&&r.attribute("x").hasValue())break;s+=r.measureTextRecursive(t)}return-1*("end"==n?s:s/2)},this.adjustChildCoordinates=function(t,e,i,n){var s=i.children[n];return s.attribute("x").hasValue()?(s.x=s.attribute("x").toPixels("x")+e.getAnchorDelta(t,i,n),s.attribute("dx").hasValue()&&(s.x+=s.attribute("dx").toPixels("x"))):(s.attribute("dx").hasValue()&&(e.x+=s.attribute("dx").toPixels("x")),s.x=e.x),e.x=s.x+s.measureText(t),s.attribute("y").hasValue()?(s.y=s.attribute("y").toPixels("y"),s.attribute("dy").hasValue()&&(s.y+=s.attribute("dy").toPixels("y"))):(s.attribute("dy").hasValue()&&(e.y+=s.attribute("dy").toPixels("y")),s.y=e.y),e.y=s.y,s},this.getChildBoundingBox=function(t,e,i,n){var s=this.adjustChildCoordinates(t,e,i,n),a=s.getBoundingBox(t);for(n=0;n<s.children.length;n++){var r=e.getChildBoundingBox(t,e,s,n);a.addBoundingBox(r)}return a},this.renderChild=function(t,e,i,n){var s=this.adjustChildCoordinates(t,e,i,n);for(s.render(t),n=0;n<s.children.length;n++)e.renderChild(t,e,s,n)}},A.Element.text.prototype=new A.Element.RenderedElementBase,A.Element.TextElementBase=function(t){this.base=A.Element.RenderedElementBase,this.base(t),this.getGlyph=function(t,e,i){var n=e[i],s=null;if(t.isArabic){var a="isolated";(0==i||" "==e[i-1])&&i<e.length-2&&" "!=e[i+1]&&(a="terminal"),0<i&&" "!=e[i-1]&&i<e.length-2&&" "!=e[i+1]&&(a="medial"),0<i&&" "!=e[i-1]&&(i==e.length-1||" "==e[i+1])&&(a="initial"),void 0!==t.glyphs[n]&&null==(s=t.glyphs[n][a])&&"glyph"==t.glyphs[n].type&&(s=t.glyphs[n])}else s=t.glyphs[n];return null==s&&(s=t.missingGlyph),s},this.renderChildren=function(t){var e=this.parent.style("font-family").getDefinition();if(null==e)"stroke"==t.paintOrder?(""!=t.strokeStyle&&t.strokeText(A.compressSpaces(this.getText()),this.x,this.y),""!=t.fillStyle&&t.fillText(A.compressSpaces(this.getText()),this.x,this.y)):(""!=t.fillStyle&&t.fillText(A.compressSpaces(this.getText()),this.x,this.y),""!=t.strokeStyle&&t.strokeText(A.compressSpaces(this.getText()),this.x,this.y));else{var i=this.parent.style("font-size").numValueOrDefault(A.Font.Parse(A.ctx.font).fontSize),n=this.parent.style("font-style").valueOrDefault(A.Font.Parse(A.ctx.font).fontStyle),s=this.getText();e.isRTL&&(s=s.split("").reverse().join(""));for(var a=A.ToNumberArray(this.parent.attribute("dx").value),r=0;r<s.length;r++){var o=this.getGlyph(e,s,r),l=i/e.fontFace.unitsPerEm;t.translate(this.x,this.y),t.scale(l,-l);var h=t.lineWidth;t.lineWidth=t.lineWidth*e.fontFace.unitsPerEm/i,"italic"==n&&t.transform(1,0,.4,1,0,0),o.render(t),"italic"==n&&t.transform(1,0,-.4,1,0,0),t.lineWidth=h,t.scale(1/l,-1/l),t.translate(-this.x,-this.y),this.x+=i*(o.horizAdvX||e.horizAdvX)/e.fontFace.unitsPerEm,void 0===a[r]||isNaN(a[r])||(this.x+=a[r])}}},this.getText=function(){},this.measureTextRecursive=function(t){for(var e=this.measureText(t),i=0;i<this.children.length;i++)e+=this.children[i].measureTextRecursive(t);return e},this.measureText=function(t){var e=this.parent.style("font-family").getDefinition();if(null!=e){var i=this.parent.style("font-size").numValueOrDefault(A.Font.Parse(A.ctx.font).fontSize),n=0,s=this.getText();e.isRTL&&(s=s.split("").reverse().join(""));for(var a=A.ToNumberArray(this.parent.attribute("dx").value),r=0;r<s.length;r++)n+=(this.getGlyph(e,s,r).horizAdvX||e.horizAdvX)*i/e.fontFace.unitsPerEm,void 0===a[r]||isNaN(a[r])||(n+=a[r]);return n}var o=A.compressSpaces(this.getText());if(!t.measureText)return 10*o.length;t.save(),this.setContext(t,!0);var l=t.measureText(o).width;return t.restore(),l},this.getBoundingBox=function(t){var e=this.parent.style("font-size").numValueOrDefault(A.Font.Parse(A.ctx.font).fontSize);return new A.BoundingBox(this.x,this.y-e,this.x+this.measureText(t),this.y)}},A.Element.TextElementBase.prototype=new A.Element.RenderedElementBase,A.Element.tspan=function(t){this.captureTextNodes=!0,this.base=A.Element.TextElementBase,this.base(t),this.text=A.compressSpaces(t.value||t.text||t.textContent||""),this.getText=function(){return 0<this.children.length?"":this.text}},A.Element.tspan.prototype=new A.Element.TextElementBase,A.Element.tref=function(t){this.base=A.Element.TextElementBase,this.base(t),this.getText=function(){var t=this.getHrefAttribute().getDefinition();if(null!=t)return t.children[0].getText()}},A.Element.tref.prototype=new A.Element.TextElementBase,A.Element.a=function(t){this.base=A.Element.TextElementBase,this.base(t),this.hasText=0<t.childNodes.length;for(var e=0;e<t.childNodes.length;e++)3!=t.childNodes[e].nodeType&&(this.hasText=!1);this.text=this.hasText?t.childNodes[0].value||t.childNodes[0].data:"",this.getText=function(){return this.text},this.baseRenderChildren=this.renderChildren,this.renderChildren=function(t){if(this.hasText){this.baseRenderChildren(t);var e=new A.Property("fontSize",A.Font.Parse(A.ctx.font).fontSize);A.Mouse.checkBoundingBox(this,new A.BoundingBox(this.x,this.y-e.toPixels("y"),this.x+this.measureText(t),this.y))}else if(0<this.children.length){var i=new A.Element.g;i.children=this.children,i.parent=this,i.render(t)}},this.onclick=function(){c.open(this.getHrefAttribute().value)},this.onmousemove=function(){A.ctx.canvas.style.cursor="pointer"}},A.Element.a.prototype=new A.Element.TextElementBase,A.Element.image=function(t){this.base=A.Element.RenderedElementBase,this.base(t);var e=this.getHrefAttribute().value;if(""!=e){var a=e.match(/\.svg$/);if(A.Images.push(this),this.loaded=!1,a)this.img=A.ajax(e),this.loaded=!0;else{this.img=f.createElement("img"),1==A.opts.useCORS&&(this.img.crossOrigin="Anonymous");var r=this;this.img.onload=function(){r.loaded=!0},this.img.onerror=function(){A.log('ERROR: image "'+e+'" not found'),r.loaded=!0},this.img.src=e}this.renderChildren=function(t){var e=this.attribute("x").toPixels("x"),i=this.attribute("y").toPixels("y"),n=this.attribute("width").toPixels("x"),s=this.attribute("height").toPixels("y");0!=n&&0!=s&&(t.save(),a?t.drawSvg(this.img,e,i,n,s):(t.translate(e,i),A.AspectRatio(t,this.attribute("preserveAspectRatio").value,n,this.img.width,s,this.img.height,0,0),r.loaded&&(void 0===this.img.complete||this.img.complete)&&t.drawImage(this.img,0,0)),t.restore())},this.getBoundingBox=function(){var t=this.attribute("x").toPixels("x"),e=this.attribute("y").toPixels("y"),i=this.attribute("width").toPixels("x"),n=this.attribute("height").toPixels("y");return new A.BoundingBox(t,e,t+i,e+n)}}},A.Element.image.prototype=new A.Element.RenderedElementBase,A.Element.g=function(t){this.base=A.Element.RenderedElementBase,this.base(t),this.getBoundingBox=function(t){for(var e=new A.BoundingBox,i=0;i<this.children.length;i++)e.addBoundingBox(this.children[i].getBoundingBox(t));return e}},A.Element.g.prototype=new A.Element.RenderedElementBase,A.Element.symbol=function(t){this.base=A.Element.RenderedElementBase,this.base(t),this.render=function(){}},A.Element.symbol.prototype=new A.Element.RenderedElementBase,A.Element.style=function(t){this.base=A.Element.ElementBase,this.base(t);for(var e="",i=0;i<t.childNodes.length;i++)e+=t.childNodes[i].data;e=e.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm,"");var n=(e=A.compressSpaces(e)).split("}");for(i=0;i<n.length;i++)if(""!=A.trim(n[i]))for(var s=n[i].split("{"),a=s[0].split(","),r=s[1].split(";"),o=0;o<a.length;o++){var l=A.trim(a[o]);if(""!=l){for(var h=A.Styles[l]||{},u=0;u<r.length;u++){var c=r[u].indexOf(":"),f=r[u].substr(0,c),m=r[u].substr(c+1,r[u].length-c);null!=f&&null!=m&&(h[A.trim(f)]=new A.Property(A.trim(f),A.trim(m)))}if(A.Styles[l]=h,A.StylesSpecificity[l]=w(l),"@font-face"==l)for(var p=h["font-family"].value.replace(/"/g,""),d=h.src.value.split(","),y=0;y<d.length;y++)if(0<d[y].indexOf('format("svg")'))for(var v=d[y].indexOf("url"),g=d[y].indexOf(")",v),x=d[y].substr(v+5,g-v-6),b=A.parseXml(A.ajax(x)).getElementsByTagName("font"),P=0;P<b.length;P++){var E=A.CreateElement(b[P]);A.Definitions[p]=E}}}},A.Element.style.prototype=new A.Element.ElementBase,A.Element.use=function(t){this.base=A.Element.RenderedElementBase,this.base(t),this.baseSetContext=this.setContext,this.setContext=function(t){this.baseSetContext(t),this.attribute("x").hasValue()&&t.translate(this.attribute("x").toPixels("x"),0),this.attribute("y").hasValue()&&t.translate(0,this.attribute("y").toPixels("y"))};var n=this.getHrefAttribute().getDefinition();this.path=function(t){null!=n&&n.path(t)},this.elementTransform=function(){if(null!=n&&n.style("transform",!1,!0).hasValue())return new A.Transform(n.style("transform",!1,!0).value)},this.getBoundingBox=function(t){if(null!=n)return n.getBoundingBox(t)},this.renderChildren=function(t){if(null!=n){var e=n;"symbol"==n.type&&((e=new A.Element.svg).type="svg",e.attributes.viewBox=new A.Property("viewBox",n.attribute("viewBox").value),e.attributes.preserveAspectRatio=new A.Property("preserveAspectRatio",n.attribute("preserveAspectRatio").value),e.attributes.overflow=new A.Property("overflow",n.attribute("overflow").value),e.children=n.children),"svg"==e.type&&(this.attribute("width").hasValue()&&(e.attributes.width=new A.Property("width",this.attribute("width").value)),this.attribute("height").hasValue()&&(e.attributes.height=new A.Property("height",this.attribute("height").value)));var i=e.parent;e.parent=null,e.render(t),e.parent=i}}},A.Element.use.prototype=new A.Element.RenderedElementBase,A.Element.mask=function(t){this.base=A.Element.ElementBase,this.base(t),this.apply=function(t,e){var i=this.attribute("x").toPixels("x"),n=this.attribute("y").toPixels("y"),s=this.attribute("width").toPixels("x"),a=this.attribute("height").toPixels("y");if(0==s&&0==a){for(var r=new A.BoundingBox,o=0;o<this.children.length;o++)r.addBoundingBox(this.children[o].getBoundingBox(t));i=Math.floor(r.x1),n=Math.floor(r.y1),s=Math.floor(r.width()),a=Math.floor(r.height())}var l=e.style("mask").value;e.style("mask").value="";var h=p(i+s,n+a),u=h.getContext("2d");this.renderChildren(u);var c=p(i+s,n+a),f=c.getContext("2d");e.render(f),f.globalCompositeOperation="destination-in",f.fillStyle=u.createPattern(h,"no-repeat"),f.fillRect(0,0,i+s,n+a),t.fillStyle=f.createPattern(c,"no-repeat"),t.fillRect(0,0,i+s,n+a),e.style("mask").value=l},this.render=function(){}},A.Element.mask.prototype=new A.Element.ElementBase,A.Element.clipPath=function(t){this.base=A.Element.ElementBase,this.base(t),this.apply=function(t){var e="undefined"!=typeof CanvasRenderingContext2D,i=t.beginPath,n=t.closePath;e&&(CanvasRenderingContext2D.prototype.beginPath=function(){},CanvasRenderingContext2D.prototype.closePath=function(){}),i.call(t);for(var s=0;s<this.children.length;s++){var a=this.children[s];if(void 0!==a.path){var r=void 0!==a.elementTransform&&a.elementTransform();!r&&a.style("transform",!1,!0).hasValue()&&(r=new A.Transform(a.style("transform",!1,!0).value)),r&&r.apply(t),a.path(t),e&&(CanvasRenderingContext2D.prototype.closePath=n),r&&r.unapply(t)}}n.call(t),t.clip(),e&&(CanvasRenderingContext2D.prototype.beginPath=i,CanvasRenderingContext2D.prototype.closePath=n)},this.render=function(){}},A.Element.clipPath.prototype=new A.Element.ElementBase,A.Element.filter=function(t){this.base=A.Element.ElementBase,this.base(t),this.apply=function(t,e){var i=e.getBoundingBox(t),n=Math.floor(i.x1),s=Math.floor(i.y1),a=Math.floor(i.width()),r=Math.floor(i.height()),o=e.style("filter").value;e.style("filter").value="";for(var l=0,h=0,u=0;u<this.children.length;u++){var c=this.children[u].extraFilterDistance||0;l=Math.max(l,c),h=Math.max(h,c)}var f=p(a+2*l,r+2*h),m=f.getContext("2d");for(m.translate(-n+l,-s+h),e.render(m),u=0;u<this.children.length;u++)"function"==typeof this.children[u].apply&&this.children[u].apply(m,0,0,a+2*l,r+2*h);t.drawImage(f,0,0,a+2*l,r+2*h,n-l,s-h,a+2*l,r+2*h),e.style("filter",!0).value=o},this.render=function(){}},A.Element.filter.prototype=new A.Element.ElementBase,A.Element.feDropShadow=function(t){this.base=A.Element.ElementBase,this.base(t),this.addStylesFromStyleDefinition(),this.apply=function(){}},A.Element.feDropShadow.prototype=new A.Element.ElementBase,A.Element.feMorphology=function(t){this.base=A.Element.ElementBase,this.base(t),this.apply=function(){}},A.Element.feMorphology.prototype=new A.Element.ElementBase,A.Element.feComposite=function(t){this.base=A.Element.ElementBase,this.base(t),this.apply=function(){}},A.Element.feComposite.prototype=new A.Element.ElementBase,A.Element.feColorMatrix=function(t){this.base=A.Element.ElementBase,this.base(t);var n=A.ToNumberArray(this.attribute("values").value);switch(this.attribute("type").valueOrDefault("matrix")){case"saturate":var e=n[0];n=[.213+.787*e,.715-.715*e,.072-.072*e,0,0,.213-.213*e,.715+.285*e,.072-.072*e,0,0,.213-.213*e,.715-.715*e,.072+.928*e,0,0,0,0,0,1,0,0,0,0,0,1];break;case"hueRotate":var s=n[0]*Math.PI/180,i=function(t,e,i){return t+Math.cos(s)*e+Math.sin(s)*i};n=[i(.213,.787,-.213),i(.715,-.715,-.715),i(.072,-.072,.928),0,0,i(.213,-.213,.143),i(.715,.285,.14),i(.072,-.072,-.283),0,0,i(.213,-.213,-.787),i(.715,-.715,.715),i(.072,.928,.072),0,0,0,0,0,1,0,0,0,0,0,1];break;case"luminanceToAlpha":n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.2125,.7154,.0721,0,0,0,0,0,0,1]}function u(t,e,i,n,s,a){return t[i*n*4+4*e+a]}function c(t,e,i,n,s,a,r){t[i*n*4+4*e+a]=r}function f(t,e){var i=n[t];return i*(i<0?e-255:e)}this.apply=function(t,e,i,n,s){var a=t.getImageData(0,0,n,s);for(i=0;i<s;i++)for(e=0;e<n;e++){var r=u(a.data,e,i,n,0,0),o=u(a.data,e,i,n,0,1),l=u(a.data,e,i,n,0,2),h=u(a.data,e,i,n,0,3);c(a.data,e,i,n,0,0,f(0,r)+f(1,o)+f(2,l)+f(3,h)+f(4,1)),c(a.data,e,i,n,0,1,f(5,r)+f(6,o)+f(7,l)+f(8,h)+f(9,1)),c(a.data,e,i,n,0,2,f(10,r)+f(11,o)+f(12,l)+f(13,h)+f(14,1)),c(a.data,e,i,n,0,3,f(15,r)+f(16,o)+f(17,l)+f(18,h)+f(19,1))}t.clearRect(0,0,n,s),t.putImageData(a,0,0)}},A.Element.feColorMatrix.prototype=new A.Element.ElementBase,A.Element.feGaussianBlur=function(t){this.base=A.Element.ElementBase,this.base(t),this.blurRadius=Math.floor(this.attribute("stdDeviation").numValue()),this.extraFilterDistance=this.blurRadius,this.apply=function(t,e,i,n,s){v&&void 0!==v.canvasRGBA?(t.canvas.id=A.UniqueId(),t.canvas.style.display="none",f.body.appendChild(t.canvas),v.canvasRGBA(t.canvas,e,i,n,s,this.blurRadius),f.body.removeChild(t.canvas)):A.log("ERROR: StackBlur.js must be included for blur to work")}},A.Element.feGaussianBlur.prototype=new A.Element.ElementBase,A.Element.title=function(){},A.Element.title.prototype=new A.Element.ElementBase,A.Element.desc=function(){},A.Element.desc.prototype=new A.Element.ElementBase,A.Element.MISSING=function(t){A.log("ERROR: Element '"+t.nodeName+"' not yet implemented.")},A.Element.MISSING.prototype=new A.Element.ElementBase,A.CreateElement=function(t){var e=t.nodeName.replace(/^[^:]+:/,"");e=e.replace(/\-/g,"");var i=null;return(i=void 0!==A.Element[e]?new A.Element[e](t):new A.Element.MISSING(t)).type=t.nodeName,i},A.load=function(t,e){A.loadXml(t,A.ajax(e))},A.loadXml=function(t,e){A.loadXmlDoc(t,A.parseXml(e))},A.loadXmlDoc=function(a,r){A.init(a);var i=function(t){for(var e=a.canvas;e;)t.x-=e.offsetLeft,t.y-=e.offsetTop,e=e.offsetParent;return c.scrollX&&(t.x+=c.scrollX),c.scrollY&&(t.y+=c.scrollY),t};1!=A.opts.ignoreMouse&&(a.canvas.onclick=function(t){var e=i(new A.Point(null!=t?t.clientX:event.clientX,null!=t?t.clientY:event.clientY));A.Mouse.onclick(e.x,e.y)},a.canvas.onmousemove=function(t){var e=i(new A.Point(null!=t?t.clientX:event.clientX,null!=t?t.clientY:event.clientY));A.Mouse.onmousemove(e.x,e.y)});var o=A.CreateElement(r.documentElement);o.root=!0,o.addStylesFromStyleDefinition();var l=!0,n=function(){A.ViewPort.Clear(),a.canvas.parentNode?A.ViewPort.SetCurrent(a.canvas.parentNode.clientWidth,a.canvas.parentNode.clientHeight):A.ViewPort.SetCurrent(800,600),1!=A.opts.ignoreDimensions&&(o.style("width").hasValue()&&(a.canvas.width=o.style("width").toPixels("x"),a.canvas.style&&(a.canvas.style.width=a.canvas.width+"px")),o.style("height").hasValue()&&(a.canvas.height=o.style("height").toPixels("y"),a.canvas.style&&(a.canvas.style.height=a.canvas.height+"px")));var t=a.canvas.clientWidth||a.canvas.width,e=a.canvas.clientHeight||a.canvas.height;if(1==A.opts.ignoreDimensions&&o.style("width").hasValue()&&o.style("height").hasValue()&&(t=o.style("width").toPixels("x"),e=o.style("height").toPixels("y")),A.ViewPort.SetCurrent(t,e),null!=A.opts.offsetX&&(o.attribute("x",!0).value=A.opts.offsetX),null!=A.opts.offsetY&&(o.attribute("y",!0).value=A.opts.offsetY),null!=A.opts.scaleWidth||null!=A.opts.scaleHeight){var i=null,n=null,s=A.ToNumberArray(o.attribute("viewBox").value);null!=A.opts.scaleWidth&&(o.attribute("width").hasValue()?i=o.attribute("width").toPixels("x")/A.opts.scaleWidth:isNaN(s[2])||(i=s[2]/A.opts.scaleWidth)),null!=A.opts.scaleHeight&&(o.attribute("height").hasValue()?n=o.attribute("height").toPixels("y")/A.opts.scaleHeight:isNaN(s[3])||(n=s[3]/A.opts.scaleHeight)),null==i&&(i=n),null==n&&(n=i),o.attribute("width",!0).value=A.opts.scaleWidth,o.attribute("height",!0).value=A.opts.scaleHeight,o.style("transform",!0,!0).value+=" scale("+1/i+","+1/n+")"}1!=A.opts.ignoreClear&&a.clearRect(0,0,t,e),o.render(a),l&&(l=!1,"function"==typeof A.opts.renderCallback&&A.opts.renderCallback(r))},s=!0;A.ImagesLoaded()&&(s=!1,n()),A.intervalID=setInterval(function(){var t=!1;if(s&&A.ImagesLoaded()&&(t=!(s=!1)),1!=A.opts.ignoreMouse&&(t=t||A.Mouse.hasEvents()),1!=A.opts.ignoreAnimation)for(var e=0;e<A.Animations.length;e++){var i=A.Animations[e].update(1e3/A.FRAMERATE);t=t||i}"function"==typeof A.opts.forceRedraw&&1==A.opts.forceRedraw()&&(t=!0),t&&(n(),A.Mouse.runEvents())},1e3/A.FRAMERATE)},A.stop=function(){A.intervalID&&clearInterval(A.intervalID)},A.Mouse=new function(){this.events=[],this.hasEvents=function(){return 0!=this.events.length},this.onclick=function(t,e){this.events.push({type:"onclick",x:t,y:e,run:function(t){t.onclick&&t.onclick()}})},this.onmousemove=function(t,e){this.events.push({type:"onmousemove",x:t,y:e,run:function(t){t.onmousemove&&t.onmousemove()}})},this.eventElements=[],this.checkPath=function(t,e){for(var i=0;i<this.events.length;i++){var n=this.events[i];e.isPointInPath&&e.isPointInPath(n.x,n.y)&&(this.eventElements[i]=t)}},this.checkBoundingBox=function(t,e){for(var i=0;i<this.events.length;i++){var n=this.events[i];e.isPointInBox(n.x,n.y)&&(this.eventElements[i]=t)}},this.runEvents=function(){A.ctx.canvas.style.cursor="";for(var t=0;t<this.events.length;t++)for(var e=this.events[t],i=this.eventElements[t];i;)e.run(i),i=i.parent;this.events=[],this.eventElements=[]}},A}(i||{});"string"==typeof t&&(t=f.getElementById(t)),null!=t.svg&&t.svg.stop(),t.childNodes&&1==t.childNodes.length&&"OBJECT"==t.childNodes[0].nodeName||(t.svg=n);var s=t.getContext("2d");void 0!==e.documentElement?n.loadXmlDoc(s,e):"<"==e.substr(0,1)?n.loadXml(s,e):n.load(s,e)}else for(var a=f.querySelectorAll("svg"),r=0;r<a.length;r++){var o=a[r],l=f.createElement("canvas");if(void 0!==o.clientWidth&&void 0!==o.clientHeight)l.width=o.clientWidth,l.height=o.clientHeight;else{var h=o.getBoundingClientRect();l.width=h.width,l.height=h.height}o.parentNode.insertBefore(l,o),o.parentNode.removeChild(o);var u=f.createElement("div");u.appendChild(o),d(l,u.innerHTML)}};"undefined"==typeof Element||(void 0!==Element.prototype.matches?m=function(t,e){return t.matches(e)}:void 0!==Element.prototype.webkitMatchesSelector?m=function(t,e){return t.webkitMatchesSelector(e)}:void 0!==Element.prototype.mozMatchesSelector?m=function(t,e){return t.mozMatchesSelector(e)}:void 0!==Element.prototype.msMatchesSelector?m=function(t,e){return t.msMatchesSelector(e)}:void 0!==Element.prototype.oMatchesSelector?m=function(t,e){return t.oMatchesSelector(e)}:("function"!=typeof jQuery&&"function"!=typeof Zepto||(m=function(t,e){return $(t).is(e)}),void 0===m&&"undefined"!=typeof Sizzle&&(m=Sizzle.matchesSelector)));var e=/(\[[^\]]+\])/g,i=/(#[^\s\+>~\.\[:]+)/g,a=/(\.[^\s\+>~\.\[:]+)/g,r=/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,o=/(:[\w-]+\([^\)]*\))/gi,l=/(:[^\s\+>~\.\[:]+)/g,h=/([^\s\+>~\.\[:]+)/g;function w(n){var s=[0,0,0],t=function(t,e){var i=n.match(t);null!=i&&(s[e]+=i.length,n=n.replace(t," "))};return n=(n=n.replace(/:not\(([^\)]*)\)/g,"     $1 ")).replace(/{[\s\S]*/gm," "),t(e,1),t(i,0),t(a,1),t(r,2),t(o,1),t(l,1),n=(n=n.replace(/[\*\s\+>~]/g," ")).replace(/[#\.]/g," "),t(h,2),s.join("")}"undefined"!=typeof CanvasRenderingContext2D&&(CanvasRenderingContext2D.prototype.drawSvg=function(t,e,i,n,s,a){var r={ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0,ignoreClear:!0,offsetX:e,offsetY:i,scaleWidth:n,scaleHeight:s};for(var o in a)a.hasOwnProperty(o)&&(r[o]=a[o]);d(this.canvas,t,r)}),t.exports=d}(e={exports:{}},e.exports),e.exports});

"use strict";!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){var r={wheelSpeed:10,wheelPropagation:!1,minScrollbarLength:null,useBothWheelAxes:!1,useKeyboard:!0};e.fn.perfectScrollbar=function(o,t){return this.each(function(){var l=e.extend(!0,{},r),n=e(this);if("object"==typeof o?e.extend(!0,l,o):t=o,"update"===t)return n.data("perfect-scrollbar-update")&&n.data("perfect-scrollbar-update")(),n;if("destroy"===t)return n.data("perfect-scrollbar-destroy")&&n.data("perfect-scrollbar-destroy")(),n;if(n.data("perfect-scrollbar"))return n.data("perfect-scrollbar");n.addClass("ps-container");var c,s,a,i,p,f,u,d,b,h,v=e("<div class='ps-scrollbar-x-rail'></div>").appendTo(n),g=e("<div class='ps-scrollbar-y-rail'></div>").appendTo(n),m=e("<div class='ps-scrollbar-x'></div>").appendTo(v),w=e("<div class='ps-scrollbar-y'></div>").appendTo(g),T=parseInt(v.css("bottom"),10),L=parseInt(g.css("right"),10),y=function(){var e=parseInt(h*(f-i)/(i-b),10);n.scrollTop(e),v.css({bottom:T-e})},I=function(){var e=parseInt(d*(p-a)/(a-u),10);n.scrollLeft(e),g.css({right:L-e})},C=function(e){return l.minScrollbarLength&&(e=Math.max(e,l.minScrollbarLength)),e},S=function(){v.css({left:n.scrollLeft(),bottom:T-n.scrollTop(),width:a}),g.css({top:n.scrollTop(),right:L-n.scrollLeft(),height:i}),m.css({left:d,width:u}),w.css({top:h,height:b})},x=function(){a=n.width(),i=n.height(),p=n.prop("scrollWidth"),f=n.prop("scrollHeight"),a<p?(c=!0,u=C(parseInt(a*a/p,10)),d=parseInt(n.scrollLeft()*(a-u)/(p-a),10)):(c=!1,u=0,d=0,n.scrollLeft(0)),i<f?(s=!0,b=C(parseInt(i*i/f,10)),h=parseInt(n.scrollTop()*(i-b)/(f-i),10)):(s=!1,b=0,h=0,n.scrollTop(0)),h>=i-b&&(h=i-b),d>=a-u&&(d=a-u),S()},D=function(e,r){var o=e+r,t=a-u;d=o<0?0:o>t?t:o,v.css({left:n.scrollLeft()}),m.css({left:d})},P=function(e,r){var o=e+r,t=i-b;h=o<0?0:o>t?t:o,g.css({top:n.scrollTop()}),w.css({top:h})},k=function(){var r,o;m.bind("mousedown.perfect-scrollbar",function(e){o=e.pageX,r=m.position().left,v.addClass("in-scrolling"),e.stopPropagation(),e.preventDefault()}),e(document).bind("mousemove.perfect-scrollbar",function(e){v.hasClass("in-scrolling")&&(I(),D(r,e.pageX-o),e.stopPropagation(),e.preventDefault())}),e(document).bind("mouseup.perfect-scrollbar",function(e){v.hasClass("in-scrolling")&&v.removeClass("in-scrolling")}),r=o=null},X=function(){var r,o;w.bind("mousedown.perfect-scrollbar",function(e){o=e.pageY,r=w.position().top,g.addClass("in-scrolling"),e.stopPropagation(),e.preventDefault()}),e(document).bind("mousemove.perfect-scrollbar",function(e){g.hasClass("in-scrolling")&&(y(),P(r,e.pageY-o),e.stopPropagation(),e.preventDefault())}),e(document).bind("mouseup.perfect-scrollbar",function(e){g.hasClass("in-scrolling")&&g.removeClass("in-scrolling")}),r=o=null},Y=function(){var e=function(e,r){var o=n.scrollTop();if(0===o&&r>0&&0===e)return!l.wheelPropagation;if(o>=f-i&&r<0&&0===e)return!l.wheelPropagation;var t=n.scrollLeft();return 0===t&&e<0&&0===r?!l.wheelPropagation:!(t>=p-a&&e>0&&0===r)||!l.wheelPropagation},r=!1;n.bind("mousewheel.perfect-scrollbar",function(o,t,a,i){l.useBothWheelAxes?s&&!c?i?n.scrollTop(n.scrollTop()-i*l.wheelSpeed):n.scrollTop(n.scrollTop()+a*l.wheelSpeed):c&&!s&&(a?n.scrollLeft(n.scrollLeft()+a*l.wheelSpeed):n.scrollLeft(n.scrollLeft()-i*l.wheelSpeed)):(n.scrollTop(n.scrollTop()-i*l.wheelSpeed),n.scrollLeft(n.scrollLeft()+a*l.wheelSpeed)),x(),(r=e(a,i))&&o.preventDefault()}),n.bind("MozMousePixelScroll.perfect-scrollbar",function(e){r&&e.preventDefault()})},M=function(){var r=function(e,r){var o=n.scrollTop();if(0===o&&r>0&&0===e)return!1;if(o>=f-i&&r<0&&0===e)return!1;var t=n.scrollLeft();return!(0===t&&e<0&&0===r)&&!(t>=p-a&&e>0&&0===r)},o=!1;n.bind("mouseenter.perfect-scrollbar",function(e){o=!0}),n.bind("mouseleave.perfect-scrollbar",function(e){o=!1});var t=!1;e(document).bind("keydown.perfect-scrollbar",function(e){if(o){var c=0,s=0;switch(e.which){case 37:c=-3;break;case 38:s=3;break;case 39:c=3;break;case 40:s=-3;break;default:return}n.scrollTop(n.scrollTop()-s*l.wheelSpeed),n.scrollLeft(n.scrollLeft()+c*l.wheelSpeed),x(),(t=r(c,s))&&e.preventDefault()}})},j=function(){var e=function(e){e.stopPropagation()};w.bind("click.perfect-scrollbar",e),g.bind("click.perfect-scrollbar",function(e){var r=parseInt(b/2,10),o=(e.pageY-g.offset().top-r)/(i-b);o<0?o=0:o>1&&(o=1),n.scrollTop((f-i)*o),x()}),m.bind("click.perfect-scrollbar",e),v.bind("click.perfect-scrollbar",function(e){var r=parseInt(u/2,10),o=(e.pageX-v.offset().left-r)/(a-u);o<0?o=0:o>1&&(o=1),n.scrollLeft((p-a)*o),x()})},A=function(){var r=function(e,r){n.scrollTop(n.scrollTop()-r),n.scrollLeft(n.scrollLeft()-e),x()},o={},t=0,l={},c=null,s=!1;e(window).bind("touchstart.perfect-scrollbar",function(e){s=!0}),e(window).bind("touchend.perfect-scrollbar",function(e){s=!1}),n.bind("touchstart.perfect-scrollbar",function(e){var r=e.originalEvent.targetTouches[0];o.pageX=r.pageX,o.pageY=r.pageY,t=(new Date).getTime(),null!==c&&clearInterval(c),e.stopPropagation()}),n.bind("touchmove.perfect-scrollbar",function(e){if(!s&&1===e.originalEvent.targetTouches.length){var n=e.originalEvent.targetTouches[0],c={};c.pageX=n.pageX,c.pageY=n.pageY;var a=c.pageX-o.pageX,i=c.pageY-o.pageY;r(a,i),o=c;var p=(new Date).getTime();l.x=a/(p-t),l.y=i/(p-t),t=p,e.preventDefault()}}),n.bind("touchend.perfect-scrollbar",function(e){clearInterval(c),c=setInterval(function(){Math.abs(l.x)<.01&&Math.abs(l.y)<.01?clearInterval(c):(r(30*l.x,30*l.y),l.x*=.8,l.y*=.8)},10)})},E=function(){n.unbind(".perfect-scrollbar"),e(window).unbind(".perfect-scrollbar"),e(document).unbind(".perfect-scrollbar"),n.data("perfect-scrollbar",null),n.data("perfect-scrollbar-update",null),n.data("perfect-scrollbar-destroy",null),m.remove(),w.remove(),v.remove(),g.remove(),m=w=a=i=p=f=u=d=T=b=h=L=null},W=function(r){n.addClass("ie").addClass("ie"+r);6===r&&(!function(){var r=function(){e(this).addClass("hover")},o=function(){e(this).removeClass("hover")};n.bind("mouseenter.perfect-scrollbar",r).bind("mouseleave.perfect-scrollbar",o),v.bind("mouseenter.perfect-scrollbar",r).bind("mouseleave.perfect-scrollbar",o),g.bind("mouseenter.perfect-scrollbar",r).bind("mouseleave.perfect-scrollbar",o),m.bind("mouseenter.perfect-scrollbar",r).bind("mouseleave.perfect-scrollbar",o),w.bind("mouseenter.perfect-scrollbar",r).bind("mouseleave.perfect-scrollbar",o)}(),S=function(){m.css({left:d+n.scrollLeft(),bottom:T,width:u}),w.css({top:h+n.scrollTop(),right:L,height:b}),m.hide().show(),w.hide().show()},y=function(){var e=parseInt(h*f/i,10);n.scrollTop(e),m.css({bottom:T}),m.hide().show()},I=function(){var e=parseInt(d*p/a,10);n.scrollLeft(e),w.hide().show()})},B="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch;return function(){var e=navigator.userAgent.toLowerCase().match(/(msie) ([\w.]+)/);e&&"msie"===e[1]&&W(parseInt(e[2],10)),x(),k(),X(),j(),B&&A(),n.mousewheel&&Y(),l.useKeyboard&&M(),n.data("perfect-scrollbar",n),n.data("perfect-scrollbar-update",x),n.data("perfect-scrollbar-destroy",E)}(),n})}});
!function(e){function t(t){var n=t||window.event,i=[].slice.call(arguments,1),l=0,s=0,o=0;return t=e.event.fix(n),t.type="mousewheel",n.wheelDelta&&(l=n.wheelDelta/120),n.detail&&(l=-n.detail/3),o=l,void 0!==n.axis&&n.axis===n.HORIZONTAL_AXIS&&(o=0,s=-1*l),void 0!==n.wheelDeltaY&&(o=n.wheelDeltaY/120),void 0!==n.wheelDeltaX&&(s=-1*n.wheelDeltaX/120),i.unshift(t,l,s,o),(e.event.dispatch||e.event.handle).apply(this,i)}var n=["DOMMouseScroll","mousewheel"];if(e.event.fixHooks)for(var i=n.length;i;)e.event.fixHooks[n[--i]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=n.length;e;)this.addEventListener(n[--e],t,!1);else this.onmousewheel=t},teardown:function(){if(this.removeEventListener)for(var e=n.length;e;)this.removeEventListener(n[--e],t,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}(jQuery);;var url_ajax_product = 'wp-admin/admin-ajax.php?action=woo_products_action';
var design={
	zIndex: 1,
	view: 'back',
	design_id: null,
	design_file: '',
	designer_id: 0,
	design_key: 0,
	output: {},
	colors: [],
	teams: {},
	fonts: '',
	ini:function(){
		var self = this;
		
		jQuery( ".accordion" ).accordion({heightStyle: "content", collapsible: true});
		jQuery('.dg-tooltip').tooltip();
		jQuery( "#layers" ).sortable({
			cancel: ".remove-layer, .layer-options, .setting-layer",
			stop: function( event, ui ) {
			self.layers.sort();
		}});		
		jQuery('.popover-close').click(function(){
			jQuery( ".popover" ).hide('show');
		});		
		
		design.item.move();
		$jd( "#dg-outline-width" ).slider({
			animate: true,
			slide: function( event, ui ) {
				jQuery('.outline-value').html(ui.value);
				design.text.update('outline-width', ui.value);
			}
		});
		
		$jd( "#dg-shape-width" ).slider();
		
		$jd('.dg-color-picker-active').click(function(){
			$jd(this).parent().find('ul').show('slow');
		});
		
		/* rotate */
		$jd('.rotate-refresh').click(function(){
			self.item.refresh('rotate');
		});
		$jd('.rotate-value').on("focus change", function(){
			var e = self.item.get();
			var deg = $jd(this).val();
			if(deg > 360) deg = 360;
			if(deg < 0) deg = 0;
			var angle = ($jd(this).val() * Math.PI)/180;
			e.rotatable("setValue", angle);	
		});
		
		/* lock */
		$jd('.ui-lock').click(function(){
			var e = self.item.get();
			e.resizable('destroy')			
			if($jd(this).is(':checked') == true) self.item.resize(e, 'n, e, s, w, se');
			else self.item.resize(e, 'se');
		});
		
		if (jQuery('.labView.active .product-design').html() == '')
		{
			setTimeout(function(){
				var a_thumbs = jQuery('#product-thumbs a');
				if (typeof a_thumbs[0] != 'undefined')
					a_thumbs[0].click();
			}, 1000);
			
		}
		
		/* menu */
		$jd('.menu-left a').click(function(){
			$jd('.menu-left a').removeClass('active');
			if($jd(this).hasClass('add_item_text')) self.text.create();
			if($jd(this).hasClass('add_item_team')) self.team.create();
			if($jd(this).hasClass('add_item_qrcode')) self.qrcode.open();
			$jd(this).addClass('active');
		});
		
		/* share */
		jQuery('.list-share span').click(function(){
			design.share.ini(jQuery(this).data('type'));
		});
		/* tools */
		$jd('a.dg-tool').click(function(){
			var f = $jd(this).data('type');
			switch(f){
				case 'preview':
					design.tools.preview(this);
					break;
				case 'undo':
					design.tools.undo(this);
					break;
				case 'redo':
					design.tools.redo(this);
					break;
				case 'zoom':
					design.tools.zoom();
					break;
				case 'reset':
					design.tools.reset(this);
					break;
			}
		});
			
		jQuery('#product-attributes .size-number').click(function(){
			design.team.changeSize();
		});
		design.products.sizes();
		
		$jd('.add_item_clipart').click(function(){
			if(jQuery('#dg-design-ideas').length == 0)
			{
				self.designer.art.categories(true, 0);
				if( jQuery('#dag-list-arts').html() == ''){
					self.designer.art.arts('');
				}
			}
		});
		
		$jd('.add_item_mydesign').click(function(){
			self.ajax.mydesign();
		});
		
		$jd('#dag-art-detail button').click(function(){
			jQuery('#dag-art-detail').hide('slow');
			jQuery('#dag-list-arts').show('slow');
			jQuery('#arts-add').hide();
			jQuery('#arts-pagination').css('display', 'block');
		});
		
		/* layers-toolbar control */
		jQuery('.layers-toolbar button').click(function(){
			var arrow = jQuery('.col-right .arrow-mobile');
			if (arrow.hasClass('active') == true)
			{
				arrow.trigger( "click" );
			}
				
			var elm = jQuery(this).parents('.div-layers').find('.control-layers');
			if (elm.hasClass('active') == true)
			{
				elm.removeClass('active');
				jQuery(elm).hide('show');
			}
			else
			{
				elm.addClass('active');
				jQuery(elm).show('show');
			}
		});
		
		jQuery( window ).resize(function() {
			var width = jQuery(window).width();
			if (width > 770)
			{
				jQuery('.control-layers.accordion').attr('style', '');
				jQuery('.col-right').attr('style', '');
			}
			else
			{
				if (jQuery('.arrow-mobile.active').length == 0)
					jQuery('.col-right').attr('style', 'bottom: 60px; top: auto;');
			}
		});
		
		/* mobile toolbar */
		jQuery('.dg-options-toolbar button').click(function(){
			var check = jQuery(this).hasClass('active');
			jQuery('.dg-options-toolbar button').removeClass('active');
			var elm = jQuery(this).parents('.dg-options');
			var type = jQuery(this).data('type');
			
			if (check == true)
			{
				elm.children('.dg-options-content').removeClass('active');
				jQuery('.toolbar-action-'+type).removeClass('active');
			}
			else
			{				
				jQuery(this).addClass('active');				
				elm.children('.dg-options-content').addClass('active');
				elm.children('.dg-options-content').children('div').removeClass('active');
				jQuery('.toolbar-action-'+type).addClass('active');
			}			
		});
		
		jQuery('#close-product-detail').click(function(){
			jQuery('#dg-products .products-detail').hide();
			jQuery('#dg-products .product-list').show();
			jQuery('#loading-change-product').hide();
			jQuery('#dg-products .product-detail.active').removeClass('active');
		});
		
		/* text update */
		$jd('.text-update').each(function(){
			var e = $jd(this);
			e.bind(e.data('event'), function(){
				if (e.data('value') != 'undefined')
					design.text.update(e.data('label'), e.data('value'));
				else
					design.text.update(e.data('label'));
			});
		});
		jQuery('#product-attributes .size-number').keyup(function(){
			design.products.sizes();
		});
		jQuery('#quantity').keyup(function(e){
			design.ajax.getPrice();			
			e.preventDefault();	
			return false;	
		});
		jQuery('#team-edit-number').keyup(function(){
			design.team.updateBack(this, 'number');
			var o = jQuery('.labView.active .drag-item-number');
			if (typeof o[0] != 'undefined')
				design.item.select(o[0]);
		});
		jQuery('#team-edit-name').keyup(function(){
			design.team.updateBack(this, 'name');
			var o = jQuery('.labView.active .drag-item-name');
			if (typeof o[0] != 'undefined')
				design.item.select(o[0]);
		});
			
		design.item.designini(items);		
		design.designer.loadColors();
		design.designer.loadFonts();
		design.designer.fonts = {};
		design.products.colorPicker();
		design.designer.fontActive = {};
		jQuery('.view_change_products').bind('click', function(){design.products.productCate(0)});
		
		jQuery('.modal .close').click(function(){
			setTimeout(function(){
				jQuery('#dg-modal .modal').hide();
			}, 10);
		});
		
		var quantity_ini = jQuery('#quantity').data('count');
		if (quantity_ini < 0) quantity_ini = 0;
		var input_size = jQuery('.list-number input.size-number');
		if (input_size.length > 0)
		{
			jQuery(input_size[0]).val(quantity_ini);
			jQuery('#quantity').val(quantity_ini);
		}
		
		jQuery(document).triggerHandler( "ini.design");
		
		design.ajax.getPrice();
	},
	ajax:{
		form: function(){
			var datas = {};
			
			datas.product_id = product_id;
			
			/* get product color */
			var hex = design.exports.productColor();
			var span_color = jQuery('#product-list-colors span.active');
			var index = jQuery('#product-list-colors span').index(span_color);					
			datas.colors = {};
			datas.colors[index] = hex;

			if(span_color.hasClass('bg-more-colors'))
			{
				if(typeof datas.options == 'undefined')
					datas.options = {};
				datas.options.is_color_picker = 1;
			}	
			
			/* get Design color and size*/
			colors 			= {};
			colors.front 		= design.print.colors('front');			
			colors.back 		= design.print.colors('back');		
			colors.left 		= design.print.colors('left');			
			colors.right 		= design.print.colors('right');
			
			datas.print 		= {};			
			datas.print.sizes 	= JSON.stringify(design.print.size());
			datas.print.colors 	= JSON.stringify(colors);
		
			/* product attribute */
			var attributes = jQuery('#tool_cart').serializeObject();
			datas = jQuery.extend(datas, attributes);			
			
			datas.cliparts = design.exports.cliparts();
			
			jQuery(document).triggerHandler( "form.addtocart.design", datas);
			
			return datas;
		},
		getPrice: function(){
			var datas = this.form();
			
			var lable = jQuery('#product-price .product-price-title');
			var div = jQuery('#product-price .product-price-list');
			var title = '';
			if(typeof design.ajax_price_str == 'undefined')
			{
				design.ajax_price_str = '';
			}
			var data_string = JSON.stringify(datas);
			var str = encrypt_api.Base64.encode(data_string);
			if(str == design.ajax_price_str)
			{
				return;
			}
			design.ajax_price_str = str;

			lable.html('Updating...');
			jQuery.ajax({
				type: "POST",
				processData: false,
				dataType: "json",
				url: siteURL + "ajax.php?type=prices",
				data: JSON.stringify(datas),				
				contentType: "application/json; charset=utf-8",
			}).done(function( data ) {
				if (data != '')
				{
					if (typeof data.sale != 'undefined')
					{
						jQuery(document).triggerHandler( "price.addtocart.design", data);
						
						jQuery('.price-sale-number').html(data.sale);
						jQuery('.price-old-number').html(data.old);
						
						if (data.sale == data.old)
							jQuery('#product-price-old').css('display', 'none');
						else
							jQuery('#product-price-old').css('display', 'inline-block');
					}
				}
			}).always(function(){
				lable.html(title);				
				design.print.colors();
			});
		},
		isBlank: function(){
			var check = {};
			check.status = true;
			
			jQuery(document).triggerHandler( "checkItem.item.design", check );
			
			if (check.status == false && typeof check.callback != 'undefined')
			{
				return false;
			}
			
			var items = jQuery('#app-wrap .drag-item');
			if (items.length == 0)
			{
				var check = confirm_text(addon_lang_js_design_blank);
				if (check == false)
				{
					return false;
				}
			}
			return true;
		},
		addJs: function(e){
			if (this.isBlank() == false) return false;

			if (jQuery('.labView.active .design-area').hasClass('zoom'))
			{
				design.tools.zoom();
			}
			var quantity = jQuery('#quantity').val();
				quantity = parseInt(quantity);
			if (isNaN(quantity) == true || quantity < 1)
			{
				alert_text(lang.designer.quantity);
				scrollQuantity();
				return false;
			}
			if (quantity < min_order){
				alert_text(lang.designer.quantityMin +' '+min_order+'. '+lang.designer.quantity);
				scrollQuantity();
				return false;
			}
			if (quantity > max_order){
				alert_text(lang.designer.quantityMax +' '+max_order+'. '+lang.designer.checkquantity);
				scrollQuantity();
				return false;
			}
			design.mask(true);
			design.ajax.active = 'back';
			design.svg.items('front', design.ajax.save);
		},
		active: 'back',
		save: function(){
			if (design.ajax.active == 'back')
			{
				design.ajax.active = 'left';
				if (jQuery('#view-back .product-design').html() != '' && jQuery('#view-back .product-design').find('img').length > 0)
				{
					design.svg.items('back', design.ajax.save);
				}
				else
				{
					delete design.output.back;
					design.ajax.save();
				}
			}
			else if (design.ajax.active == 'left')
			{
				design.ajax.active = 'right';
				if (jQuery('#view-left .product-design').html() != '' && jQuery('#view-left .product-design').find('img').length > 0)
				{
					design.svg.items('left', design.ajax.save);
				}
				else
				{
					delete design.output.left;
					design.ajax.save();
				}	
			}
			else if (design.ajax.active == 'right')
			{
				if (jQuery('#view-right .product-design').html() != '' && jQuery('#view-right .product-design').find('img').length > 0)
				{
					design.svg.items('right', design.ajax.addToCart);
				}
				else
				{
					delete design.output.right;
					design.ajax.addToCart();
				}
			}
		},
		addToCart: function(){
			var options		= {};
			options.vectors	= JSON.stringify(design.exports.vector());
			
			options.images	= {};
			options.isIE    = design.isIE();
			if (jQuery('#view-front .product-design').html() != '')
			{
				if(design.isIE())
				{
					options.images.front = design.front.svgThum;
				}
				else
				{
					options.images.front = design.output.front.toDataURL();
				}
			}
			
			if (jQuery('#view-back .product-design').html() != '')
			{
				if(design.isIE())
				{
					options.images.back  = design.back.svgThum;
				}
				else
				{
					options.images.back  = design.output.back.toDataURL();
				}
			}
			
			if (jQuery('#view-left .product-design').html() != '')
			{
				if(design.isIE())
				{
					options.images.left  = design.left.svgThum;
				}
				else
				{
					options.images.left  = design.output.left.toDataURL();
				}
			}
			
			if (jQuery('#view-right .product-design').html() != '')
			{
				if(design.isIE())
				{
					options.images.right = design.right.svgThum;
				}
				else
				{
					options.images.right = design.output.right.toDataURL();
				}
			}
			
			var datas = design.ajax.form();
			datas.design = options;				
			datas.teams = design.teams;				
			datas.fonts = design.fonts;
			
			jQuery(document).triggerHandler( "before.addtocart.design", datas);
			
			jQuery.ajax({
				type: "POST",
				processData: false,
				data: JSON.stringify(datas),
				dataType: "json",
				contentType: "application/json; charset=utf-8",	
				url: siteURL + "ajax.php?type=addCart"					
			}).done(function( data ){
				
				jQuery(document).triggerHandler( "after.addtocart.design", data);
				
				var a = jQuery('#product-thumbs a');
				if(typeof a[0] != 'undefined')
				{
					a[0].click();
				}
				
				if (data != '')
				{
					var content = data;
					if (content.error == 0)
					{
						content.product.product_id = parent_id;
						window.parent.app.cart(content.product);
					}
					else
					{
						alert_text(content.msg);
					}
				}
			}).always(function(){				
				design.mask(false);
			});			
		},		
		mydesign: function(e){			
			if (user_id == 0)
			{
				is_save = 0;
				jQuery('#f-login').modal();
			}
			else
			{				
				jQuery('#dg-mydesign').modal();
				var div = jQuery('#dg-mydesign .list-design-saved');
				div.addClass('loading');
				
				var datas = {};
				jQuery(document).triggerHandler( "before.save.design", datas);
				
				if (typeof e != 'undefined')
				{
					var page = jQuery(e).data('page');
					var $btn = jQuery(e).button('loading');
				}
				else
				{
					var page = 0;
				}
				
				datas.page = page;
				jQuery.ajax({
					type: "POST",
					url: siteURL + "ajax.php?type=userDesign",
					data: {url: urlDesign, datas: datas},
					cache: false
				}).done(function( data ){
					
					jQuery(document).triggerHandler( "after.save.design", data);
					
					div.removeClass('loading');
					
					
					if (typeof $btn != 'undefined')
					{
						$btn.button('reset');
						div.append(data);
						jQuery('#dg-mydesign .loadingImage').remove();
						jQuery('.list-design-saved').attr('style', '');
					}
					else
					{
						div.html(data);
					}
					
					page = page + 1;
					if (jQuery('#dg-mydesign img').length > (page*9)-1)
					{
						jQuery('#dg-mydesign .modal-footer').css('display', 'block');
						jQuery('#dg-mydesign .modal-footer button').data('page', page);
					}
					else
					{
						jQuery('#dg-mydesign .modal-footer').css('display', 'none');
					}
						
					jQuery('#dg-mydesign .design-box a').each(function(){
						if (typeof jQuery(this).data('added') == 'undefined')
						{
							var href = jQuery(this).attr('href');
							if(href.indexOf('http') == -1)
								href = urlDesign + href;
							jQuery(this).attr('href', href);
							jQuery(this).bind('click', function(event){
								event.preventDefault();
								window.parent.location = href;
							});
							jQuery(this).data('added', 1);
						}
					});
				});
			}
		},
		removeDesign: function(e)
		{
			jQuery(document).triggerHandler( "before.remove.mydesign.design", e);
			
			jQuery(e).parents('.design-box').remove();
			var id = jQuery(e).data('id');
			jQuery.ajax({
				url: siteURL + "ajax.php?type=removeDesign&id="+id
			}).done(function( data ){
				jQuery(document).triggerHandler( "after.remove.mydesign.design", data);
			});
		}
	},
	tools:{
		elm: '',
		data: '',
		id: 0,
		item: '',		
		preview: function(e)
		{
			if (jQuery('.labView.active .design-area').hasClass('zoom'))
			{
				this.zoom();
			}
			jQuery('#dg-mask').css('display', 'block');
			var html 	= '<a class="left carousel-control" href="#carousel-slide" role="button" data-slide="prev">'
						+	'<span class="glyphicons chevron-left"></span>'
						+ '</a>'
						+ '<a class="right carousel-control" href="#carousel-slide" role="button" data-slide="next">'
						+	'<span class="glyphicons chevron-right"></span>'
						+ '</a>';
			html = '';
			if (document.getElementById('carousel-slide') == null)
			{
				var div = '<div id="carousel-slide" class="carousel slide" data-ride="carousel">'
						+ 	'<div class="carousel-inners"></div>';
						+ '</div>';
				jQuery('#dg-main-slider').append(div);
			}
			else
			{
				jQuery('#carousel-slide').html('<div class="carousel-inners"></div>');
			}
			if (jQuery('#view-front .product-design').html() != '')
			{
				if(design.isIE())
				{
					design.createSvgthumb('front');
				}
				else
				{
					design.svg.items('front');
				}
			}
			if (jQuery('#view-back .product-design').html() != '')
			{
				if(design.isIE())
				{
					design.createSvgthumb('back');
				}
				else
				{
					design.svg.items('back');
				}
			}
			if (jQuery('#view-left .product-design').html() != '')
			{
				if(design.isIE())
				{
					design.createSvgthumb('left');
				}
				else
				{
					design.svg.items('left');
				}
			}
			if (jQuery('#view-right .product-design').html() != '')
			{
				if(design.isIE())
				{
					design.createSvgthumb('right');
				}
				else
				{
					design.svg.items('right');
				}
			}
			setTimeout(function(){
				if (jQuery('#view-front .product-design').html() != ''){
					jQuery('#carousel-slide .carousel-inners').append('<div class="item active"><div id="slide-front" class="slide-fill"></div></div>');
					if(design.isIE())
					{
						jQuery('#slide-front').append(design.front.svgThum);
					}
					else
					{
						jQuery('#slide-front').append(design.output.front);
					}
				}
				
				if (jQuery('#view-back .product-design').html() != ''){
					jQuery('#carousel-slide .carousel-inners').append('<div class="item"><div id="slide-back" class="slide-fill"></div></div>');
					if(design.isIE())
					{
						jQuery('#slide-back').append(design.back.svgThum);
					}
					else
					{
						jQuery('#slide-back').append(design.output.back);
					}
				}
				
				if (jQuery('#view-left .product-design').html() != ''){
					jQuery('#carousel-slide .carousel-inners').append('<div class="item"><div id="slide-left" class="slide-fill"></div></div>');
					if(design.isIE())
					{
						jQuery('#slide-left').append(design.left.svgThum);
					}
					else
					{
						jQuery('#slide-left').append(design.output.left);
					}
				}
				
				if (jQuery('#view-right .product-design').html() != ''){
					jQuery('#carousel-slide .carousel-inners').append('<div class="item"><div id="slide-right" class="slide-fill"></div></div>');
					if(design.isIE())
					{
						jQuery('#slide-right').append(design.right.svgThum);
					}
					else
					{
						jQuery('#slide-right').append(design.output.right);
					}
				}
				jQuery('#dg-mask').css('display', 'none');
				jQuery('#carousel-slide').append(html);
				jQuery('#dg-preview').modal();
				var a = jQuery('#product-thumbs a');
				if(typeof a[0] != 'undefined')
				{
					a[0].click();
				}
			}, 1000);
		},
		undo: function(e)
		{			
		},
		redo: function(e)
		{
			var vector = design.exports.vector();
			var str = JSON.stringify(vector);
			design.imports.vector(str, 'front');
		},
		fit: function(){
			var e = design.item.get();
			if(typeof e == 'undefined') return;

			var width = e.width();
			var height = e.height();

			var area = jQuery('.labView.active .design-area');
			var area_w = area.width();
			var area_h = area.height();

			var new_h = (height * area_w)/width;
			var new_w = area_w;
			if(new_h > area_h)
			{
				var new_w = (width * area_h)/height;
				var new_h = area_h;
			}
			new_h = new_h;
			new_w = new_w;
			var left = (area_w - new_w)/2;
			var top = (area_h - new_h)/2;
			e.css({
				width: new_w+'px',
				height: new_h+'px',
				top: top+'px',
				left: '-1px',
			});
			var svg = e.find('svg');
			if(typeof svg[0] == 'undefined') return;
			svg[0].setAttributeNS(null, 'width', new_w);
			svg[0].setAttributeNS(null, 'height', new_h);
			var img = e.find('image');
			if(typeof img[0] != 'undefined')
			{
				img[0].setAttributeNS(null, 'width', new_w);
				img[0].setAttributeNS(null, 'height', new_h);
			}
			design.item.unselect();
			design.item.select(e[0]);
		},
		zoom: function()
		{
			design.item.unselect();
			var view = jQuery('.labView.active .design-area'),
				width = view.width(),
				height = view.height();
			var id 		= jQuery('.labView.active').attr('id');
			var postion = id.replace('view-', '');
			var area 	= eval ("(" + items['area'][postion] + ")");
			if (view.hasClass('zoom'))
			{
				var colorIndex = jQuery('#product-list-colors span').index(jQuery('#product-list-colors span.active'));				
				view.removeClass('zoom');
				view.css({"width": area.width, "height": area.height, "top":area.top, "left":area.left});
				
				var images 	= eval ("(" + items['design'][colorIndex][postion] + ")");
				jQuery.each(images, function(i, image){
					if (image.id != 'area-design')
					{
						jQuery('#'+postion+'-img-'+image.id).css({"width":image.width, "height":image.height, "left":image.left,"top":image.top});
					}
				});
				
				this.changeZoom(view, true);
			}
			else
			{
				view.addClass('zoom');
				if ( (max_box_width - width) > (max_box_height - height))
				{
					var spur = max_box_height%height, div = max_box_height/height, zoomIn = 1;
					/** if(spur > 0) { zoomIn = Math.round(div*10)/10; } else { zoomIn = div; } */
					zoomIn = div;
					var newHeight = max_box_height,
						newWidth = zoomIn * width,
						zoomIn;
				}
				else
				{
					var spur = max_box_width%width, div = max_box_width/width, zoomIn = 1;
					/** if(spur > 0) { zoomIn = Math.round(div*10)/10; } else { zoomIn = div; } */
					zoomIn = div;
					var newWidth = max_box_width,
						newHeight = zoomIn * height,
						zoomIn;
				}
				var left 	= Math.round((max_box_width - newWidth)/2);
				var top 	= Math.round((max_box_height - newHeight)/2);
				var zoomT 	= (design.convert.px(area.top)*zoomIn - top);
				var zoomL 	= (design.convert.px(area.left)*zoomIn - left);
				jQuery('.labView.active .product-design').find('img').each(function(){
					var imgW = design.convert.px(this.style.width)*zoomIn,
						imgH = design.convert.px(this.style.height)*zoomIn,
						imgT = design.convert.px(this.style.top)*zoomIn,
						imgL = design.convert.px(this.style.left)*zoomIn;
						
					jQuery(this).css({"width":imgW, "height":imgH, "top":imgT-zoomT, "left":imgL-zoomL});
				});
				view.css({"width": Math.round(newWidth), "height": Math.round(newHeight), "top":top, "left": left});
				
				view.data('width', area.width);
				view.data('height', area.height);
				view.data('zoom', zoomIn);
				view.data('zoomL', zoomL);
				view.data('zoomT', zoomT);
				this.changeZoom(view, false);
			}
		},
		changeZoom: function(view, type){
			design.item.unselect();
			var zoomIn 	= view.data('zoom'),
				zoomT 	= view.data('zoomT'),
				zoomL 	= view.data('zoomL');
			jQuery('.labView.active').find('.drag-item').each(function(){
				var css = {};
					css.top 	= design.convert.px(this.style.top);
					css.left 	= design.convert.px(this.style.left);
					css.width 	= design.convert.px(this.style.width);
					css.height 	= design.convert.px(this.style.height);
				
				var svg = jQuery(this).find('svg');
				var img = jQuery(svg).find('image');				
				var itemsCss	= {};
				if (type == false)
				{
					itemsCss.top 	= css.top * zoomIn - 0;
					itemsCss.left 	= css.left * zoomIn - 0;
					itemsCss.width 	= css.width * zoomIn;
					itemsCss.height = css.height * zoomIn;
					if (typeof img[0] != 'undefined')
					{
						var imgW 	= img[0].getAttributeNS(null, 'width') * zoomIn;
						var imgH 	= img[0].getAttributeNS(null, 'height') * zoomIn;
					}
				}
				else
				{
					itemsCss.top 	= (css.top + 0)/zoomIn;
					itemsCss.left 	= (css.left + 0)/zoomIn;
					itemsCss.width 	= css.width / zoomIn;
					itemsCss.height = css.height / zoomIn;
					if (typeof img[0] != 'undefined')
					{
						var imgW 	= img[0].getAttributeNS(null, 'width') / zoomIn;
						var imgH 	= img[0].getAttributeNS(null, 'height') / zoomIn;
					}
				}
				jQuery(this).css({"width": itemsCss.width, "height": itemsCss.height, "top":itemsCss.top, "left": itemsCss.left});
				svg[0].setAttributeNS(null, 'width', itemsCss.width);
				svg[0].setAttributeNS(null, 'height', itemsCss.height);				
				if (typeof img[0] != 'undefined')
				{
					img[0].setAttributeNS(null, 'width', imgW);
					img[0].setAttributeNS(null, 'height', imgH);
					var gEle = jQuery(svg[0]).find('g');
					flipFlg  = true;
					if(gEle.attr('transform') != undefined)
					{
						if(gEle.attr('transform').indexOf('scale(-1,1)') != -1) {
							flipFlg = false;
						}
					}
					var viewBox = svg[0].getAttributeNS(null, 'viewBox');
					if (viewBox != null && viewBox != '' )
					{
						var size = viewBox.split(' ');
						var width = size[2];
					}
					else
					{
						var width = imgW;
					}
					if(flipFlg == false)
					{
						transform = 'translate('+width+', 0) scale(-1,1)';
					}
					else
					{
						transform = 'translate(0, 0) scale(1,1)';
					}
					if(gEle.attr('transform') != undefined)
					{
						gEle[0].setAttributeNS(null, 'transform', transform);
					}
				}
				jQuery(document).triggerHandler( "zoomClip.clipart.design", [svg, type, zoomIn]);
			});
		},
		reset: function(e)
		{
			var remove = confirm_text(lang.designer.reset);
			if (remove == true)
			{
				jQuery('.labView.active .drag-item').each(function(){
					var id = jQuery(this).attr('id');
					var index = id.replace('item-', '');
					design.layers.remove(index);
				});
			}
		},
		flip: function(n){
			var markArea = jQuery('.labView.active .mask-items-view .mask-items-area');
			if(markArea.find('.mask-all-item').length > 0)
			{
				design.flipAll(n);
				return false;
			}
			var e = design.item.get(),
				svg = e.find('svg'),
				transform = '';
				if(typeof svg[0] == 'undefined')
					return false;	
			var viewBox = svg[0].getAttributeNS(null, 'viewBox');
			if (viewBox != null && viewBox != '' )
			{
				var size = viewBox.split(' ');
				var width = 2*size[0] + parseFloat(size[2]);
			}
			else
			{
				var width = svg[0].getAttributeNS(null, 'width');
				if (typeof width != 'undefined' && width != null)
				{
					width = width.replace('px', '');
				}				
			}
			
			if(typeof e.data('flipX') == 'undefined') e.data('flipX', true);
			if(e.data('flipX') === true){
				transform = 'translate('+width+', 0) scale(-1,1)';
				e.data('flipX', false);
			}
			else{
				transform = 'translate(0, 0) scale(1,1)';
				e.data('flipX', true);
			}					
			var g = jQuery(svg[0]).find('g');
			if (g.length > 0)
				g[0].setAttributeNS(null, 'transform', transform);

			if (jQuery('#dg-fonts .list-fonts a.box-font.active').length) {
				var el_font_cur = jQuery('#dg-fonts .list-fonts a.box-font.active');
				design.designer.changeFont(el_font_cur);
			}
		},
		remove: function(){
			var markArea = jQuery('.labView.active .mask-items-view .mask-items-area');
			if(markArea.find('.mask-all-item').length > 0)
			{
				var eleLst = jQuery('.labView.active .drag-item');
				eleLst.each(function() {
					var e = jQuery(this).find('.item-remove-on');
					design.item.remove(e[0]);
				});
				jQuery('.mask-all-item').remove();
				closeChangeColorAll();
				return false;
			}
			var e = design.item.get();
			if (e.length == 0) return;
			var elm = e.children('.item-remove-on');
			design.item.remove(elm[0]);
		},
		copy: function(){
			var e = design.item.get();
			if (e.length == 0) return;
			
			this.item = e[0].item;
			this.id = e[0].id;
			this.data = e.data;			
			this.elm = jQuery('<div>').append(e.clone()).html();		
		},
		paste: function(){
			if (this.elm == '') return;
			
			var n = -1;
			jQuery('#app-wrap .drag-item').each(function(){
				var index 	= jQuery(this).attr('id').replace('item-', '');
				if (index > n) n = parseInt(index);
			});			
			var id = n + 1;
			
			var elm = this.elm;
			elm = elm.replace('id="'+this.id+'"', 'id="item-'+id+'"');
			
			design.item.unselect();
			
			jQuery('.labView.active .content-inner').append(elm);
			var e = jQuery('#item-'+id);	
			e.data('id', id);			
			e[0].item = this.item;
			e[0].item.id = item;
			
			var e = jQuery('#item-'+id);
			design.item.move(e);
			design.item.resize(e);				
			design.item.rotate(e);
			e.bind('click', function(e){design.item.select(this); e.stopPropagation();});
			design.layers.add(e[0].item);
			design.item.setup(e[0].item);			
			design.print.colors();			
			design.print.size();
			design.ajax.getPrice();		
		},
		move: function(type){
			var markArea = jQuery('.labView.active .mask-items-view .mask-items-area');
			if(markArea.find('.mask-all-item').length > 0)
			{
				design.moveAll(type);
				return false;
			}
			var e = design.item.get();
			if (e.length == 0) return;
			
			if (type == 'left')
			{
				var left = e.css('left');
				left = left.replace('px', '');
				left = left - 1;
				e.css('left', left + 'px');
			}
			else if (type == 'right')
			{
				var left = e.css('left');
				left = left.replace('px', '');
				left = parseInt(left) + 1;
				e.css('left', left + 'px');
			}
			else if (type == 'up')
			{
				var top = e.css('top');
				top = top.replace('px', '');
				top = parseInt(top) - 1;
				e.css('top', top + 'px');
			}
			else if (type == 'down')
			{
				var top = e.css('top');
				top = top.replace('px', '');
				top = parseInt(top) + 1;
				e.css('top', top + 'px');
			}
			else if (type == 'vertical')
			{
				var $width = e.width(),
				pw 		= e.parent().parent().width();
				var left = (pw - $width)/2;
				e.css('left', left+'px');
			}
			else if (type == 'horizontal')
			{
				var $height = e.height(),
				pw 		= e.parent().parent().height();
				var top = (pw - $height)/2;
				e.css('top', top+'px');
			}
			
			jQuery(document).triggerHandler( "move.tool.design", e);
		}
	},
	print:{
		colors:function(view){
			if (jQuery('#view-'+view+ ' .product-design').html() == '')
			{
				return '';
			}
			
			if (typeof view != 'undefined')
				view = ' #view-'+view;
			else
				view = '';
			design.colors = [];
			jQuery('#app-wrap'+view).find('svg').each(function(){
				var o = document.getElementById(jQuery(this).parent().attr('id'));
				if(o.item.confirmColor == true && typeof o.item.colors != 'undefined')
				{
					var colors = o.item.colors;
					jQuery.each(colors, function(i, hex){
						hex = hex.toString();
						hex = hex.replace('#', '');
						if (jQuery.inArray(hex, design.colors) == -1 && hex != 'none')
						{
							design.colors.push(hex);
						}
					});					
				}
				else
				{
					var c = design.svg.getColors(jQuery(this));
					var colors = [];
					for(var color in c) {
						colors.push(color);
					}
					jQuery.each(colors, function(i, hex){
						hex = hex.toString();
						hex = hex.replace('#', '');
						if (jQuery.inArray(hex, design.colors) == -1 && hex != 'none')
						{
							design.colors.push(hex);
						}
					});
				}
			});
			jQuery('.color-used').html('<div id="colors-used" class="list-colors"></div>');
			var div = jQuery('#colors-used');
			jQuery.each(design.colors, function(i, hex){
				div.append('<span style="background-color:#'+hex+'" class="bg-colors"></span>');
			});
			return design.colors;			
		},
		size:function(){
			var sizes = {};
			var postions = ['front', 'back', 'left', 'right'];
			jQuery('.screen-size').html('<div id="sizes-used"></div>');
			
			jQuery.each(postions, function(i, postion){
				if (jQuery('#view-'+postion+ ' .content-inner').html() != '' && jQuery('#view-'+postion+ ' .product-design').html() != '')
				{
					var top = max_box_height, left = max_box_width, right = max_box_width, bottom = max_box_height, area = {}, print = {};
					var div = jQuery('#view-'+postion+ ' .design-area');
					area.width = design.convert.px(div.css('width'));
					area.height = design.convert.px(div.css('height'));
					if(div.hasClass('zoom'))
					{
						area.width = div.data('width');
						area.height = div.data('height');
						var zoom = div.data('zoom');
					}
					else
					{
						var zoom = 1;
					}
										
					jQuery('#view-'+postion+ ' .drag-item').each(function(){
						var o = {}, e = jQuery(this);
						
						o.left = design.convert.px(e.css('left'))/zoom;
						o.top = design.convert.px(e.css('top'))/zoom;
						o.width = design.convert.px(e.css('width'));
						o.width = o.width/zoom;
						o.height = design.convert.px(e.css('height'));
						o.height = o.height/zoom;
						o.right = area.width - o.left - o.width;
						o.bottom = area.height - o.top - o.height;						
						if (o.left < 0) o.left = 0;
						if (o.top < 0) o.top = 0;
						if (o.right < 0) o.right = 0;
						if (o.bottom < 0) o.bottom = 0;						
						
						if (o.top < top) top = o.top;
						if (o.left < left) left = o.left;
						if (o.right < right) right = o.right;
						if (o.bottom < bottom) bottom = o.bottom;
					});
					print.width 	= area.width - left - right;
					print.height 	= area.height - top - bottom;
					
					if (print.width > 0 && print.height > 0)
					{
						if(print.width >= area.width) print.width = area.width;
						if(print.height >= area.height) print.height = area.height;
						var item = eval ("(" + items.params[postion] + ")");
						sizes[postion] = {};
						sizes[postion].width = (print.width * item.width)/area.width;
						sizes[postion].height = (print.height * item.height)/area.height;
						sizes[postion].size = design.print.perpage(sizes[postion].width, sizes[postion].height);
						jQuery('#sizes-used').append('<div class="text-center"><strong>'+lang.text[postion]+'</strong><br /><span class="paper glyphicons file"><strong>A'+sizes[postion].size+'</strong></span></div>');
					}
					
				}
			});			
			return sizes;
		},
		perpage: function(width, height){
            var pagesW = [], pagesH = [];
            pagesW[0] = 10.5, pagesW[1] = 14.8, pagesW[2] = 21, pagesW[3] = 29.7, pagesW[4] = 42, 
            pagesW[5] = 59.4, pagesW[6] = 84.1;
            pagesH[0] = 14.8, pagesH[1] = 21, pagesH[2] = 29.7, pagesH[3] = 42, pagesH[4] = 59.4, 
            pagesH[5] = 84.1, pagesH[6] = 118.9;
			width = width.toFixed(1);
			height = height.toFixed(1);
            if (width < pagesW[0] && height < pagesH[0]) return 6;
            var size = 6;
            for (i = 1; i <= 6; i++) {
                if ((width <= pagesW[i] && height <= pagesH[i]) || (width <= pagesH[i] && height <= pagesW[i])) {
                    return 6 - i;
                }
            }
            return 0;
        },
		addColor: function(e){
			if (jQuery(e).hasClass('active'))
			{
				jQuery(e).removeClass('active');
			}
			else
			{
				jQuery(e).addClass('active');
			}
		}
	},
	designer:{
		art:{
			designs: {},
			categories: function(load, index){
				if (jQuery('#dag-art-categories').length == 0) return false;
				if (typeof index == 'undefined') index = 0;
				self = this;
				
				var ajax = true;
				if (typeof load != 'undefined' && load == true)
				{
					jQuery('#dag-art-categories').children('ul').each(function(){
						if (index == jQuery(this).data('type'))
						{
							ajax = false;
						}
					});
				}
				else
				{
					ajax = false;
				}
				
				if (ajax == true)
				{					
					jQuery('#dag-art-categories').addClass('loading');
					jQuery.ajax({				
						dataType: "json",
						url: siteURL + "ajax.php?type=cateArts"
					}).done(function( data ) {
						if (data != '')
						{								
							var e = document.getElementById('dag-art-categories');
							self.treeCategories(data, e, index);		
							design.artCategories = data;
						}
					}).always(function(){
						jQuery('#dag-art-categories').removeClass('loading');
					});					
				}
			},
			loadarts: function(cate_id, start, keyword){
				var arts = this.designs;
				var parent = document.getElementById('dag-list-arts');
				var count = arts.length;
				if (arts.length > 0)
				{
					jQuery('#dg-cliparts .modal-body').css('opacity', '0.5');
					var limit = start + 18;
					var i = 0;
					while (start - i < limit)
					{
						if (typeof arts[start] == 'undefined')
						{
							jQuery('#arts-pagination').css('display', 'none');
							count = 0;
							break;
						}
						var art = arts[start];
						start = start + 1;
						
						if (cate_id > 0)
						{
							if (typeof art.cate_id == 'undefined') art.cate_id = 0;
							if (cate_id != art.cate_id)
							{
								i = i + 1;
								continue;
							}
						}
						
						var title = art.title.toLowerCase();
						if (title.indexOf(keyword) == -1)
						{
							i = i + 1;
							continue;
						}
						
						var url = art.url;
						var div = document.createElement('div');
							div.className = 'box-art';
						var a = document.createElement('a');
							a.setAttribute('title', art.title);
							a.setAttribute('href', 'javascript:void(0)');
							a.setAttribute('onclick', 'design.art.create(this)');
							jQuery(a).data('title', art.title);
							jQuery(a).data('description', art.description);
							jQuery(a).data('price', art.price);
							jQuery(a).data('id', art.clipart_id);
							jQuery(a).data('clipart_id', art.clipart_id);
							jQuery(a).data('medium', url + art.medium);
							art.imgThumb = url + art.thumb;
							art.imgMedium = url + art.medium;
							a.item = art;
						var img = '<img alt="" src="'+url + art.thumb+'">';
						a.innerHTML = img;
						div.appendChild(a);
						if(art.price != 0)
						{
							var span = document.createElement('span');
								span.className = 'art-price';
								span.innerHTML = currency_symbol+art.price;
							div.appendChild(span);
						}
						parent.appendChild(div);
					}
					if (count > 1)
					{
						jQuery('#arts-pagination').css('display', 'block');
						var ul = jQuery('#arts-pagination .pagination');
						var button = document.createElement('button');
							button.className = 'btn btn-primary btn-sm';
							button.setAttribute('type', 'button');
							button.innerHTML = lang.text.show_design;
						ul.html(button);
						
						jQuery(button).click(function(){
							jQuery('#dg-cliparts .modal-body').css('opacity', '0.5');
							var limit = start + 18;
							var i = 0;
							while (start - i < limit)
							{
								if (typeof arts[start] == 'undefined')
								{
									jQuery('#arts-pagination').css('display', 'none');
									break;
								}
								
								var art = arts[start];
								start = start + 1;
								
								if (cate_id > 0)
								{								
									if (typeof art.cate_id == 'undefined') art.cate_id = 0;
									if (cate_id != art.cate_id)
									{
										i = i + 1;
										continue;
									}
								}
								
								var title = art.title.toLowerCase();
								if (title.indexOf(keyword) == -1)
								{
									i = i + 1;
									continue;
								}
								
								var url = art.url;
								var div = document.createElement('div');
									div.className = 'box-art';
								var a = document.createElement('a');
									a.setAttribute('title', art.title);
									
									a.setAttribute('href', 'javascript:void(0)');
									a.setAttribute('onclick', 'design.art.create(this)');
									
									jQuery(a).data('title', art.title);
									jQuery(a).data('description', art.description);
									jQuery(a).data('price', art.price);
									jQuery(a).data('id', art.clipart_id);
									jQuery(a).data('clipart_id', art.clipart_id);
									jQuery(a).data('medium', url + art.medium);
									
									art.imgThumb = url + art.thumb;
									art.imgMedium = url + art.medium;
									
									a.item = art;
								var img = '<img alt="" src="'+url + art.thumb+'">';
								a.innerHTML = img;
								div.appendChild(a);
								if(art.price != 0)
								{
									var span = document.createElement('span');
										span.className = 'art-price';
										span.innerHTML = currency_symbol+art.price;
									div.appendChild(span);
								}
								parent.appendChild(div);
							}
							gridArt('#dag-list-arts');
						});
					}
				}
			},
			arts: function(cate_id, start)
			{				
				if (jQuery('#dag-list-arts').length == 0) return false;
				if (typeof start == 'undefined') start = 0;								
				if (typeof cate_id == 'undefined') cate_id = 0;								
				
				var self = this;
				var parent = document.getElementById('dag-list-arts');				
				parent.innerHTML = '';
				jQuery('#dag-art-detail').hide('slow');
				jQuery('#dag-list-arts').show('slow');
				jQuery('#arts-add').hide();
				if(cate_id == 0)
				{
					jQuery('#dag-art-categories li.show-subfolder').removeClass('show-subfolder');
					jQuery('#dag-art-categories li.show-subfolder').removeClass('active');
					jQuery('#dag-art-categories a.active').removeClass('active');
				}
				
				var keyword = jQuery('#art-keyword').val();
				keyword = keyword.toLowerCase();
				if(self.designs.length > 0)
				{
					self.loadarts(cate_id, start, keyword);
					return;
				}
				jQuery('#dag-list-arts').addClass('loading');
				jQuery.ajax({		
					dataType: "json",					
					url: siteURL + "ajax.php?type=arts"
				}).done(function( data ) {
					if (data == null || data.count == 0)
					{
						jQuery('#dag-list-arts').removeClass('loading');
						parent.innerHTML = lang.designer.datafound;
						var ul = jQuery('#arts-pagination .pagination').html('');						
						return false;
					}
					self.designs = data.arts;
					self.loadarts(cate_id, start, keyword);
					jQuery('#dag-list-arts').removeClass('loading');
				});
			},
			artDetail: function(e)
			{
				var id = jQuery(e).data('id');
				jQuery('.box-art-detail').css('display', 'none');
				jQuery('#arts-pagination').css('display', 'none');
				if (document.getElementById('art-detail-'+id) == null)
				{
					var div = document.createElement('div');
						div.className = 'box-art-detail';
						div.setAttribute('id', 'art-detail-'+id);
					var html = 	'<div class="col-xs-5 col-md-5 art-detail-left">'
							+ 		'<img class="thumbnail img-responsive" src="'+jQuery(e).data('medium')+'" alt="">'
							+ 	'</div>'
							+ 	'<div class="col-xs-7 col-md-7 art-detail-right">'							
							+ 	'</div>';
					div.innerHTML = html;
					jQuery('#dag-art-detail').append(div);					
					jQuery('.art-detail-price').html('');
										
					var info = jQuery('#art-detail-'+id+' .art-detail-right');
					info.html('');					
					info.append('<h4>'+jQuery(e).data('title')+'</h4>');
					info.append('<p>'+jQuery(e).data('description')+'</p>');
					e.item.title = jQuery(e).data('title');							
				}
				else
				{
					jQuery('#art-detail-'+id).css('display', 'block');
				}				
				if(typeof currency_postion != 'undefined' && currency_postion == 'right')
				{
					jQuery('.art-detail-price').html(lang.text.fromt+' '+ jQuery(e).data('price') + currency_symbol);
				}else
				{
					jQuery('.art-detail-price').html(lang.text.fromt+' '+ currency_symbol + jQuery(e).data('price'));
				}
				jQuery(document).triggerHandler( "price.clipart.design", [lang.text.fromt, currency_symbol, jQuery(e).data('price')]);
				
				jQuery('#dag-list-arts').hide('slow');
				jQuery('#dag-art-detail').show('slow');
				jQuery('#arts-add').show();
				jQuery('#arts-add button').unbind('click');
				jQuery('#arts-add button').bind('click', function(event){design.art.create(e);});
				jQuery('#arts-add button').button('reset');
			},
			treeCategories: function(categories, e, system)
			{
				self = this;
				if (categories.length == 0) return false;
				var ul = document.createElement('ul');
				jQuery(ul).data('type', system);
				jQuery.each(categories, function(i, cate){
					var li = document.createElement('li'),
						a = document.createElement('a');						
						if (jQuery.isEmptyObject(cate.children) == false)
						{
							var span = document.createElement('span');
								span.innerHTML = '<i class="glyphicons plus"></i>';
							jQuery(span).click(function(){
								var parent = this;
								jQuery(this).parent().children('ul').toggle('slow', function(){
									var display = jQuery(parent).parent().children('ul').css('display');
									if (display == 'none')
										jQuery(parent).children('i').attr('class', 'glyphicons plus');
									else
										jQuery(parent).children('i').attr('class', 'glyphicons minus');
								});
							});
							li.appendChild(span);
						}			
						a.setAttribute('href', 'javascript:void(0)');
						a.setAttribute('title', cate.title);
						jQuery(a).data('id', cate.id);
						jQuery(a).click(function(){
							jQuery('#dag-art-categories a').removeClass('active');
							jQuery(a).addClass('active');
							jQuery('#art-number-page').val(0);
							jQuery('#arts-pagination .pagination').html('');
							self.arts(cate.id);
							if(jQuery(this).parent().find('ul').length)
							{
								jQuery(this).parents('ul').children('li').addClass('show-subfolder');
								jQuery(this).parent().addClass('active');
							}
						});
						a.innerHTML = cate.title;
						li.appendChild(a);
					ul.appendChild(li);					
					if (jQuery.isEmptyObject(cate.children) == false)
						design.designer.art.treeCategories(cate.children, li);
				});
				e.appendChild(ul);
			}
		},
		fonts: {},
		fontActive: {},
		loadColors: function(){
			var self = this;
			jQuery.ajax({				
				dataType: "json",
				url: siteURL + "ajax.php?type=colors"
			}).done(function( data ) {
				if (data.status == 1)
				{					
					self.addColor(data.colors);					
				}
			}).always(function(){			
			});
		},
		addColor: function(colors)
		{
			var screen_colors	= jQuery('#screen_colors_list');
			var div = jQuery('.other-colors');
			jQuery(div).html('<span class="bg-colors bg-none" data-color="none" title="Normal" onclick="design.item.changeColor(this)"></span>');			
			jQuery.each(colors, function(i, color){
				var span = document.createElement('span');
					span.className = 'bg-colors';
					span.setAttribute('data-color', color.hex);
					span.setAttribute('title', color.title);							
					span.setAttribute('onclick', 'design.item.changeColor(this)');							
					span.style.backgroundColor = '#'+color.hex;						
				jQuery(div).append(span);				
				
				screen_colors.append('<span class="bg-colors" onclick="design.print.addColor(this)" style="background-color:#'+color.hex+'" data-color="'+color.hex+'" title="'+color.title+'"></span>');
			});	
		},
		loadFonts: function(){
			var self = this;
			var data = {};
			jQuery(document).triggerHandler( "beforeloadfonts", data);
			jQuery.ajax({				
				dataType: "json",
				type: "POST",
				data: data,
				url: siteURL + "ajax.php?type=fonts"
			}).done(function( data ) {
				if (data.status == 1)
				{
					if (typeof data.fonts.google_fonts != 'undefined')
					{
						var str = data.fonts.google_fonts;
						var fonts = str.split('|');
						var count = 10, list_font = '', j=1, n = fonts.length;
						for(k=0; k<n; k++)
						{
							if (fonts[k] != '')
							{
								if (list_font == '')
									list_font = fonts[k];
								else
									list_font = list_font +'|'+fonts[k];
							}
							var max = count * j;
							if (k == max || n == k+1)
 							{
								list_font = list_font.replace(/\|\|/g, '|');
								jQuery('head').append("<link href='https://fonts.googleapis.com/css?family="+list_font+"' rel='stylesheet' type='text/css'>");
								list_font = '';
								j++;
							}
						}
						
					}
					self.fonts = data.fonts;
					self.addFonts(data.fonts);
					var div = jQuery('.list-fonts');
					jQuery(div).html('');
					jQuery.each(data.fonts.fonts, function(i, font){
						var a = document.createElement('a');
							a.className = 'box-font';							
							a.setAttribute('href', 'javascript:void(0)');
							jQuery(a).data('id', font.id);
							jQuery(a).data('title', font.title);
							jQuery(a).data('type', font.type);
							if (font.type == '')
							{
								font.url = baseURL + font.path.replace('\\', '/') + '/';
								jQuery(a).data('url', font.url);
								jQuery(a).data('filename', font.filename);
								var html = '<img src="' + font.url + font.thumb + '" alt="'+font.title+'">'+font.title;
							}
							else
							{
								var html = '<h2 class="margin-0" style="font-family:\''+font.title+'\'">abc zyz</h2>'+font.title;
							}
							jQuery(a).bind('click', function(){self.changeFont(this)});
						a.innerHTML = html;
						jQuery(div).append(a);
					});
				}
			}).always(function(){			
			});
		},
		addFonts: function(data)
		{
			var self = this;
			var ul = jQuery('.font-categories');
			ul.html('');
			var li = document.createElement('li');				
			jQuery(li).bind('click', function(){self.cateFont(this)});
			jQuery(li).data('id', 0);
			var html = '<a href="javascript:void(0);" title="'+lang.text.all_fonts+'">'+lang.text.all_fonts+'</a>';
			li.innerHTML = html;
			jQuery(ul).append(li);
			jQuery.each(data.categories, function(i, cate){
				var li = document.createElement('li');				
				jQuery(li).bind('click', function(event){ event.preventDefault(); self.cateFont(this)});
				jQuery(li).data('id', cate.id);
				var html = '<a href="javascript:void(0);" title="'+cate.title+'">'+cate.title+'</a>';
				li.innerHTML = html;
				jQuery(ul).append(li);
			});			
		},
		cateFont: function(e)
		{
			var self = this;
			var id = jQuery(e).data('id');
			if (typeof id != 'undefined')
			{				
				var div = jQuery('.list-fonts');
				jQuery(div).html('');
				if (typeof this.fonts.cateFonts != 'undefined' && typeof this.fonts.cateFonts[id] != 'undefined')
				{
					var fonts = this.fonts.cateFonts[id]['fonts'];
				}
				else
				{
					var fonts = this.fonts.fonts;
				}
				jQuery.each(fonts, function(i, font){
					if(font.published == 0)
						return;
					var a = document.createElement('a');
						a.className = 'box-font';							
						a.setAttribute('href', 'javascript:void(0)');
						jQuery(a).data('id', font.id);
						jQuery(a).data('title', font.title);
						jQuery(a).data('type', font.type);
						if (font.type == '')
						{
							font.url = baseURL + font.path.replace('\\', '/') + '/';
							jQuery(a).data('url', font.url);
							jQuery(a).data('filename', font.filename);
							var html = '<img src="' + font.url + font.thumb + '" alt="'+font.title+'">'+font.title;
						}
						else
						{
							var html = '<h2 class="margin-0" style="font-family:\''+font.title+'\'">abc zyz</h2>'+font.title;
						}
						jQuery(a).bind('click', function(){self.changeFont(this)});
					a.innerHTML = html;
					jQuery(div).append(a);
				});				
			}
		},
		changeFont: function(e)
		{
			var selected = design.item.get();
			if (selected.length == 0)
			{
				jQuery('#dg-fonts').modal('hide');
				return false;
			}
			
			jQuery('.list-fonts a').removeClass('active');
			jQuery(e).addClass('active');
			var id = jQuery(e).data('id');
			jQuery('.labView.active .content-inner').addClass('loading');
			if (typeof id != 'undefined')
			{
				var title = jQuery(e).data('title');
				jQuery('#txt-fontfamily').html(title);				
				if (typeof design.designer.fontActive[id] == 'undefined' && jQuery(e).data('type') == 'google')
				{					
					design.text.update('fontfamily', title);
					jQuery('.labView.active .content-inner').removeClass('loading');
					setTimeout(function(){
						var e = design.item.get();
						
						var rotate = e.data('rotate');
						if (rotate == 'undefined') rotate = 0;
						rotate = rotate * Math.PI / 180;
						e.css('transform', 'rotate(0rad)');
										
						var txt = e.find('text');
						txt[0].setAttributeNS(null, 'y', 0);
						var size1 = txt[0].getBoundingClientRect();
						var size2 = e[0].getBoundingClientRect();
						
						var $w 	= parseInt(size1.width);							
						var $h 	= parseInt(size1.height);							
						
						design.item.updateSize($w, $h);	
						
						var svg = e.find('svg'),
						view = svg[0].getAttributeNS(null, 'viewBox');
						var arr = view.split(' ');						
						//var y = txt[0].getAttributeNS(null, 'y');						
						//y = Math.round(y) + Math.round(size2.top) - Math.round(size1.top) - ( (Math.round(size2.top) - Math.round(size1.top)) * (($w - arr[2])/$w) );						
						//if (y < 0) y = '';
						var y = (size2.top - size1.top) * arr[3] / $h;
						txt[0].setAttributeNS(null, 'y', y);
						
						e.css('transform', 'rotate('+rotate+'rad)');
						
						jQuery(document).triggerHandler( "beforechangefont.item.design", [$w, $h]);
					}, 200);
					
					design.text.baseencode(title, 'google');
				}
				else
				{
					var filename = jQuery(e).data('filename');
					var url = jQuery(e).data('url');					
					if (filename != '')
					{
						var item = eval ("(" + filename + ")");													
						design.designer.fontActive[id] = title;
						var css = "<style type='text/css'>@font-face{font-family:'"+title+"';font-style: normal; font-weight: 400;src: local('"+title+"'), local('"+title+"'), url("+url+item.woff+") format('woff');}</style>";						
						design.fonts = design.fonts + ' '+css;
						jQuery('head').append(css);
						
						var e = design.item.get();
						var svg = e.find('svg');							
						design.text.update('fontfamily', title);
						jQuery('.labView.active .content-inner').removeClass('loading');
						setTimeout(function(){
							var rotate = e.data('rotate');
							if (rotate == 'undefined') rotate = 0;
							rotate = rotate * Math.PI / 180;
							e.css('transform', 'rotate(0rad)');							
							
							var txt = e.find('text');
							txt[0].setAttributeNS(null, 'y', 0);
							var size1 = txt[0].getBoundingClientRect();
							var size2 = e[0].getBoundingClientRect();
							var $w 	= parseInt(size1.width);							
							var $h 	= parseInt(size1.height);							
							
							design.item.updateSize($w, $h);

							var svg = e.find('svg'),
							view = svg[0].getAttributeNS(null, 'viewBox');
							var arr = view.split(' ');						
							//var y = txt[0].getAttributeNS(null, 'y');						
							//y = Math.round(y) + Math.round(size2.top) - Math.round(size1.top) - ( (Math.round(size2.top) - Math.round(size1.top)) * (($w - arr[2])/$w) );						
							var y = (size2.top - size1.top) * arr[3] / $h;
							txt[0].setAttributeNS(null, 'y', y);
							
							e.css('transform', 'rotate('+rotate+'rad)');
							
							jQuery(document).triggerHandler( "beforechangefont.item.design", [$w, $h]);
						}, 200);
						
						design.text.baseencode(title, url+item.ttf);
					}
				}
			}
			jQuery('#dg-fonts').modal('hide');
		}
	},
	products:{
		categories: {},
		products: {},
		product: {},
		sizes: function(){
			var sizes = 0;
			var check = false;
			jQuery('#product-attributes .size-number').each(function(){
				var value = jQuery(this).val();
				if (value == '') 
				{
					jQuery(this).val('');
					value = 0;
				}
				if (isNaN(value) == true || value < 0){
					jQuery(this).val('');
					value = 0;
				}
				sizes = parseInt(sizes) + parseInt(value);
				check = true;
			});
			
			jQuery(document).triggerHandler( "sizes.product.design", sizes);
			if (sizes < 0) sizes = 0;
			if(min_order != undefined && min_order != '' && check == false)
			{
				if (sizes == 0) sizes = parseInt(min_order);
			}
			if(check)
			{
				jQuery('#quantity').val(sizes);
			}
			else
			{
				if(min_order != undefined && min_order != '')
				{
					jQuery('#quantity').val(parseInt(min_order));
				}
				else
				{
					jQuery('#quantity').val(0);
				}
			}
			design.ajax.getPrice();
		},
		discount: function(product){
			var div = jQuery('.product-discount');
			if(typeof product.prices == 'undefined')
			{
				div.hide();
				return;
			}

			if(typeof product.prices.price == 'undefined')
			{
				div.hide();
				return;
			}
			var tbody = div.find('tbody');
			tbody.html('');
			for(var i=0; i<product.prices.price.length; i++)
			{
				var discount_val = ((product.price - product.prices.price[i])/product.price)*100;
				tbody.append('<tr>'
					+ '<td>'+product.prices.min_quantity[i]+'</td>'
					+ '<td>'+product.prices.max_quantity[i]+'</td>'
					+ '<td>'+product.prices.price[i]+' ('+discount_val.toFixed(2)+')</td>'
					+ '</tr>');
			}
			div.show();
		},
		colorPicker: function(){
			var color = design.exports.productColor();
			jQuery('#e-change-product-color .bg-more-colors').spectrum({
				color: "#"+color,
				showInput: true,
				showInitial: true,
				showButtons: true,
				preferredFormat: 'hex',
				change: function(color) {
					var hexcolor = color.toHexString();
					hexcolor = hexcolor.replace('#', '');
					jQuery('#e-change-product-color .bg-colors').removeClass('active');
					jQuery(this).addClass('active');
					jQuery(this).data('color', hexcolor);
					var index = jQuery(this).data('index');
					if(typeof index == 'undefined')
						index = 0;
					design.products.changeColor(this, index);
					jQuery('.product-design .main-product-img').css('background-color', '#'+hexcolor);
					jQuery('.product-color-active-value').html('<a href="javascript:void(0);" style="background-color:#'+hexcolor+'; width: 23px;"></a>');
				}
			});
		},
		changeView: function(e, postion){
			design.item.unselect();
			design.changeViewEventFlg = true;
			jQuery('#product-thumbs a').removeClass('active');
			jQuery(e).addClass('active');			
			jQuery('#app-wrap .labView').removeClass('active');
			jQuery('#app-wrap .labView').css('display', '');
			jQuery('#view-'+postion).addClass('active');
			design.layers.setup();
			design.team.changeView();
			
			jQuery(document).triggerHandler( "changeView.product.design", e);
		},
		viewActive: function(){
			var id = jQuery('.labView.active').attr('id');
			
			var view = 'front';
			if ( typeof id != 'undefined' )
			{
				var view = id.replace('view-', '');
			}
			return view;
		},
		changeColor: function(e, n)
		{
			if (jQuery('.labView.active .design-area').hasClass('zoom'))
				design.tools.zoom();
			jQuery('#product-list-colors span').removeClass('active');
			jQuery(e).addClass('active');
			design.item.designini(items, n);
			var a = jQuery('#product-thumbs a');
			design.products.changeView(a[0], 'front');

			var hex = jQuery(e).data('color');
			if( jQuery('.div-design-area .is_change_color').length )
			{
				jQuery('.div-design-area .is_change_color').css('background-color', '#'+hex);
			}
			
			jQuery(document).triggerHandler( "changeColor.product.design", e, n);
			
			design.ajax.getPrice();
		},
		changeDesign: function(e, id){
			if(jQuery('.labView.active .design-area').hasClass('zoom'))
			{
				design.tools.zoom();
			}
			var a = document.getElementById('product-thumbs').getElementsByTagName('a');
			this.changeView(a[0], 'front');
			jQuery('#app-wrap .product-design').html('');
			
			if(typeof id == 'undefined')
			{
				var ids = jQuery('.product-detail.active').attr('id');
				var id = ids.replace('product-detail-', '');
			}
			product_id = id;
			
			if (typeof this.product[product_id] == 'undefined') return;
			
			var product = this.product[product_id];
			items['design'] = {};
			parent_id = product.parent_id;			
			print_type = product.print_type;
			min_order = product.min_order;
			max_order = product.max_order;

			change_bg_product = 'img';
			if(typeof product.design.change_bg != 'undefined')
			{
				change_bg_product = 'area';
			}
			if (max_order < min_order) max_order = 99999; // fix max_order.
			var list_color = jQuery('#product-list-colors');
			list_color.html('');
			jQuery.each(product.design.color_hex, function(i, color){
				/* add color */
				var span = document.createElement('span');
					if (i == 0)	span.className = 'bg-colors dg-tooltip active';
					else span.className = 'bg-colors dg-tooltip';
					span.setAttribute('data-original-title', product.design.color_title[i]);
					span.setAttribute('data-placement', 'top');
					span.setAttribute('data-color', color);
					span.setAttribute('onclick', 'design.products.changeColor(this, '+i+')');
					
					var colors_hex = color.split(';');
					var a_width = 23/colors_hex.length;
					for(jc=0; jc<colors_hex.length; jc++)
					{
						var a_color = document.createElement('a');
							a_color.setAttribute('href', 'javascript:void(0);');
							
						a_color.style.backgroundColor = '#' + colors_hex[jc];
						a_color.style.width = a_width+'px';
						span.appendChild(a_color);
					}
				list_color.append(span);
				
				items['design'][i] = {};
				items['design'][i]['color'] = color;
				items['design'][i]['title'] = product.design.color_title[i];
				if (typeof product.design.front[i] != 'undefined')
					items['design'][i]['front'] = product.design.front[i];
				else items['design'][i]['front'] = '';
				
				if (typeof product.design.back != 'undefined' && typeof product.design.back[i] != 'undefined')
					items['design'][i]['back'] = product.design.back[i];
				else items['design'][i]['back'] = '';
				
				if (typeof product.design.left != 'undefined' && typeof product.design.left[i] != 'undefined')
					items['design'][i]['left'] = product.design.left[i];
				else items['design'][i]['left'] = '';
				
				if (typeof product.design.right != 'undefined' && typeof product.design.right[i] != 'undefined')
					items['design'][i]['right'] = product.design.right[i];
				else items['design'][i]['right'] = '';
			});
			if(typeof product.design.color_picker != 'undefined')
			{
				list_color.append('<span class="bg-colors dg-tooltip bg-more-colors" data-placement="top" data-original-title="'+lang.color_picker+'"></span>');
				design.products.colorPicker();
			}
			items['area'] 	= product.design.area;
			items['params'] = product.design.params;

			jQuery.each(['front', 'back', 'left', 'right'], function(i, view){
				if(items.params[view] == '')
				{
					items.params[view] = "{'page':'21.0x29.7','width':'21.0','height':'29.7','lockW':true,'lockH':true,'shape':'square','shapeVal':0}";
				}
			});

			jQuery('#product-attributes').html(product.attribute);
			
			design.item.designini(items);
			jQuery('#dg-products').modal('hide');
			jQuery('.dg-tooltip').tooltip();
			
			if (jQuery('#product-attributes .size-number').length > 0)
			{
				var min_quantity = jQuery('#quantity').val();
				jQuery('#product-attributes .size-number').val('');
				var size = jQuery('#product-attributes .size-number');
				setTimeout(function(){
					size[0].setAttribute('value', min_quantity);
					jQuery(size[0]).val(min_quantity);
					jQuery('#quantity').val(min_quantity);
					design.ajax.getPrice();
				}, 100);
			}
			
			
			jQuery('#product-attributes .size-number').keyup(function(){
				design.products.sizes();
			});
			
			jQuery('#quantity').keyup(function(e){
				design.ajax.getPrice();
				var code = e.keyCode || e.which;
				if (code == 13) { 
					e.preventDefault();
					return false;
				}				
			});

			if(product.image == '') product.image = 'assets/images/photo.png';
			
			jQuery(document).triggerHandler("change.product.design", product);
			jQuery(document).triggerHandler("product.change.design", product);
			
			design.team.setup();
			design.team.save();
			design.products.discount(product);
			
			// fix add quantity when change product.
			if(jQuery('#quantity').val() == 0)
				jQuery('#quantity').val(min_order);
			
			design.team.changeSize();
			jQuery('#product-attributes .size-number').click(function(){
				design.team.changeSize();
			});
			
			design.ajax.getPrice();
			jQuery('#modal-product-info .product-detail-image').attr('src', baseURL + product.image);
			jQuery('#modal-product-info .product-detail-description').html(product.description);
			jQuery('#modal-product-info .product-detail-title').html(product.title);
			jQuery('#modal-product-info .product-detail-id').html(product.id);
			jQuery('#modal-product-info .product-detail-sku').html(product.sku);
			jQuery('#modal-product-info .product-detail-short_description').html(product.short_description);
			jQuery('.product-detail-size').html(product.size);
								
		},
		changeProduct: function(e, product){
			var id 	= jQuery(e).data('id');
			jQuery('.product-list .product-box').removeClass('active');
			jQuery(e).addClass('active');
			jQuery('.product-list .img-thumbnail').css('boder', '1px solid #ddd');
			jQuery(e).find('.img-thumbnail').css('boder', '1px solid #007aff');			
			if (document.getElementById('product-detail-' + id) == null)
			{			
				var div = document.createElement('div');
					div.className = 'product-detail';
					div.setAttribute('id', 'product-detail-' + product.id);
				var html = 			'<div class="row">';
					html = html + 		'<div class="col-sm-6">';
					html = html + 			'<img alt="'+product.title+'" class="img-responsive img-thumbnail" src="'+baseURL+product.image+'">';
					html = html + 		'</div>';
					html = html + 		'<div class="col-sm-6">';
					html = html + 			'<h3 class="margin-top">'+product.title+'</h3>';
					html = html + 			'<p>'+lang.product.id+' '+product.id+'</p>';
					html = html + 			'<p>'+lang.product.sku+' '+product.sku+'</p>';
					html = html + 		'</div>';
					html = html + 	'</div>';
					
					html = html + 	'<div class="row col-sm-12">';
					html = html + 		'<h4>'+lang.product.description+'</h4>';
					html = html + 		'<div class="box-product-description">'+product.description+'</div>';
					html = html + 	'</div>';
				div.innerHTML = html;
				jQuery('#dg-products .products-detail').append(div);
			}
			jQuery('#product-detail-' + id).addClass('active');
			jQuery('#dg-products .products-detail').show('slow');
			jQuery('#dg-products .product-list').hide();
			jQuery('#loading-change-product').show();
			
			jQuery(document).triggerHandler( "changeProduct.product.design", [e, product]);
		},
		productCate: function(id){
			var seft = this;
			if (typeof seft.products[id] != 'undefined'){
				seft.addProduct(seft.products[id]);
			}
			else{
				jQuery('#dg-products .modal-body').addClass('loading');
				jQuery.ajax({
					type: "POST",
					dataType: "json",
					url: mainURL + url_ajax_product,
					data: { id: id, lang: lang_active }
				}).done(function( data ) {
					jQuery.each(data.products, function(i, product){
						if(product.image == '') product.image = 'assets/images/photo.png';
						seft.product[product.id] = product;
					});
					seft.products[id] = data.products;
					seft.addProduct(data.products);			
				}).always(function(){
					jQuery('#dg-products .modal-body').removeClass('loading');
				});
			}
		},
		addProduct: function(products){							
			
			jQuery('.product-list').html('');
			
			if (products.length == 0) return;
			
			var seft = this;
			jQuery.each(products, function(i, product){
				var div = document.createElement('div');
					div.setAttribute('data-id', product.id);
					div.className = 'product-box col-xs-6 col-sm-4 col-md-3';
				jQuery(div).click(function(){ 
					//seft.changeProduct(this, product);
					design.products.changeDesign(null, product.id);
				});			
				
				html = '<div class="thumbnail"><img src="'+product.image+'" alt="'+product.title+'" class="img-responsive"> <div class="caption">' + product.title +'</div></div>';
					div.innerHTML = html;
				
				jQuery('.product-list').append(div);
			});
		},
		changeCategory: function(e)
		{	
			jQuery('#close-product-detail').trigger('click');
			this.childCate(e);
			var level = jQuery(e).attr('data-level'),
				parent_id = e.value;
			if(level > 1 && parent_id == 0)
			{
				if (jQuery('#parent-categories-' + (parseInt(level)-1)).length > 0)
				{
					parent_id = jQuery('#parent-categories-' + (parseInt(level)-1)).val();
				}
			}
			this.productCate(parent_id);
			//this.productCate(e.value);
		},
		childCate: function(e){
			var seft = this;
			if (typeof seft.categories != 'undefined' & typeof seft.categories[e.value] != 'undefined'){
				seft.addCatogory(e, seft.categories[e.value]);
				return;
			}
			jQuery(e).addClass('loading_sm');
			jQuery.ajax({
				type: "POST",
				dataType: "json",
				url: baseURL + "ajax.php?type=categories",
				data: { parent_id: e.value }
			}).done(function( data ) {
				if (data.error == 0)
				{
					seft.categories[e.value] = data.categories;
					seft.addCatogory(e, seft.categories[e.value]);
				}
			}).always(function(){
				jQuery(e).removeClass('loading_sm');
			});
		},
		addCatogory: function(e, categories){
			var level = jQuery(e).data('level');
				level = parseInt(level) + 1;
			var value = jQuery(e).val(),
				data = {},
				j = 0;
				
			jQuery.each(categories, function(i, cate){
				if (cate.parent_id == value && cate.parent_id > 0){
					data[j]	= cate;
					j++;
				}
			});			
			if (j>0){
				this.removeCate(level);
				
				if (document.getElementById('parent-categories-' + level)){
					var html = '<option value="0"> '+lang.designer.category+' </option>';						
						
					jQuery.each(data, function(i, category){
						html = html + '<option value="'+category.id+'">'+category.title+'</option>';
					});
					
					jQuery('#parent-categories-' + level).html(html);
				} 
				else
				{
					var div = document.createElement('div');
					if(jQuery('#list-categories').hasClass('mobile'))
						div.className = 'col-xs-6';
					else
						div.className = 'col-xs-4 col-md-3';
					var select = '<select id="parent-categories-'+level+'" data-level="'+level+'" onchange="design.products.changeCategory(this)" class="form-control input-sm">';
						select = select + '<option value="0"> '+lang.designer.category+' </option>';
					
					jQuery.each(data, function(i, category){
						select = select + '<option value="'+category.id+'">'+category.title+'</option>';
					});
					
					select = select + '</select>';
					
					div.innerHTML = select;
					jQuery('#list-categories').append(div);
				}
			}else{
				this.removeCate(level-1);
			}			
		},
		removeCate: function(level){
			jQuery('#list-categories select').each(function(){
				var i = parseInt(jQuery(this).data('level'));
				if (i > level){
					jQuery(this).parent().remove();
				}
			});
		}
	},
	team:{
		updateBack: function(e, type){
			jQuery(document).triggerHandler("remove.team.design");
			if (typeof type != 'undefined')
			{
				var e = jQuery('.labView.active .drag-item-'+type);
				if (e.length == 0) return false;
				e.removeClass('drag-item-selected');
				var value = jQuery('#team-edit-'+type).val();
				if (value == '') return;
				e[0].item.text = value;
				var tspan = e.find('tspan');
				tspan[0].textContent = value;
				design.text.setSize(e);				
			}
			else
			{				
				jQuery('#txt-team-fontfamly').html(e.item.fontFamily);
				jQuery('#team-name-color').data('color', e.item.color.replace('#', '')).css('background-color', e.item.color);
			}			
		},
		load: function(teams){
			var $this = this;
			if(typeof teams != 'undefined' && teams != null)
			{
				if(typeof teams.name != 'undefined')
				{
					$this.tableView(teams);
					jQuery.each(teams.name, function(i, name){
						var team = {};
						team.name = name;
						team.number = teams.number[i];
						team.size = teams.size[i];
						$this.addMember(team);
					});
				}
			}
		},
		changeView: function(){			
			if (jQuery('.labView.active .drag-item-name').length > 0)
			{
				document.getElementById('team_add_name').checked = true;
				var e = jQuery('.labView.active .drag-item-name');
				if (typeof e[0] != 'undefined' && typeof e[0].item != 'undefined' && typeof e[0].item.text != 'undefined')
					jQuery('#team-edit-name').val(e[0].item.text);
				else
					jQuery('#team-edit-name').val('NAME');
			}
			else
			{
				document.getElementById('team_add_name').checked = false;
				jQuery('#team-edit-name').val('NAME');
			}
				
			if (jQuery('.labView.active .drag-item-number').length > 0)
			{
				document.getElementById('team_add_number').checked = true;
				var e = jQuery('.labView.active .drag-item-number');
				if (typeof e[0] != 'undefined' && typeof e[0].item != 'undefined' && typeof e[0].item.text != 'undefined')
					jQuery('#team-edit-number').val(e[0].item.text);
				else
					jQuery('#team-edit-number').val('00');
			}
			else
			{
				document.getElementById('team_add_number').checked = false;
				jQuery('#team-edit-number').val('00');
			}
		},
		create: function(){
			design.popover('add_item_team');
			jQuery('.popover-title').children('span').html(lang.text.teamTitle);
		},
		addName: function(e){
			if (jQuery(e).is(':checked') == true)
			{
				$jd('#txt-team-fontfamly').html('arial');
				$jd('.ui-lock').attr('checked', false);
				var txt = {};
				txt.text = jQuery('#team-edit-name').val();
				if (txt.text == '') txt.text = 'NAME';
				txt.color = '#000000';
				txt.fontSize = '24px';
				txt.fontFamily = 'arial';
				txt.stroke = 'none';
				txt.strokew = '0';
				txt.fn = {};
				txt.fn.remove = false;
				txt.fn.rotate = false;
				design.text.add(txt, 'team');
				var o = design.item.get();
				o.addClass('drag-item-name');
				o[0].item.isName = true;
				jQuery(document).triggerHandler("name.add.team.design", o);
				
				design.popover('add_item_team');
			}
			else
			{
				var id = jQuery('.labView.active .drag-item-name').attr('id');
				var index = id.replace('item-', '');
				design.layers.remove(index);
				jQuery('.labView.active .drag-item-name').remove();
				jQuery(document).triggerHandler("remove.team.design");
				design.ajax.getPrice();
			}
		},
		addNumber: function(e){
			if (jQuery(e).is(':checked') == true)
			{
				$jd('#txt-team-fontfamly').html('arial');
				$jd('.ui-lock').attr('checked', false);
				var txt = {};
				txt.text = jQuery('#team-edit-number').val();
				if (txt.text == '') txt.text = 'NAME';
				txt.color = '#000000';
				txt.fontSize = '24px';
				txt.fontFamily = 'arial';
				txt.stroke = 'none';
				txt.strokew = '0';
				txt.fn = {};
				txt.fn.remove = false;
				design.text.add(txt, 'team');
				var o = design.item.get();
				o.addClass('drag-item-number');
				o[0].item.isNumber = true;
				jQuery(document).triggerHandler( "number.add.team.design", o);
				design.popover('add_item_team');
			}
			else
			{
				var id = jQuery('.labView.active .drag-item-number').attr('id');
				var index = id.replace('item-', '');
				design.layers.remove(index);
				jQuery('.labView.active .drag-item-number').remove();
				jQuery(document).triggerHandler("remove.team.design");
				design.ajax.getPrice();
			}
		},
		addMember: function(team){
			var i = 1;
			jQuery('#table-team-list tbody tr').each(function(){
				var td = jQuery(this).find('td');
					td[0].innerHTML = i;
				i++;
			});
			if (typeof team == 'undefined')
			{
				team = {};
				team.name = '';
				team.number = '';
				team.size = '';
			}
			var sizes = this.sizes(team.size);
			var html = '<tr>'
					 + 	'<td>'+i+'</td>'					 
					 + 	'<td>'
					 + 		'<input type="text" class="form-control input-sm" value="'+team.name+'" placeholder="'+lang.team.name+'">'
					 + 	'</td>'
					 + 	'<td>'
					 + 		'<input type="text" class="form-control input-sm" value="'+team.number+'" placeholder="'+lang.team.number+'">'
					 + 	'</td>'
					 + 	'<td>'+sizes+'</td>'
					 + 	'<td>'
					 + 		'<a href="javascript:void(0)" onclick="design.team.removeMember(this)" title="remove">'+lang.remove+'</a>'
					 + 	'</td>'
					 + '</tr>';
			jQuery('#table-team-list tbody').append(html);
		},
		removeMember: function(e){
			jQuery(e).parents('tr').remove();
			var i = 1;
			jQuery('#table-team-list tbody tr').each(function(){
				var td = jQuery(this).find('td');
					td[0].innerHTML = i;
				i++;
			});
		},
		setup: function(){
			var sizes = this.sizes('');
			jQuery('#table-team-list tbody tr').each(function(){
				var td = jQuery(this).find('td');
				td[3].innerHTML = sizes;
			});
			jQuery('#team_msg_error').html(lang.team.choose_size).css('display', 'block');
		},
		sizes: function(size){
			var options =  '';
			jQuery('.p-color-sizes').each(function(){
				var groupName = jQuery(this).parent().parent().children('label').text();
				options = options + '<optgroup label="'+groupName+'">';
				
				jQuery(this).find('.size-number').each(function(){
					var value = jQuery(this).attr('name');
					value = value.replace('][', '-');
					value = value.replace('][', '-');
					value = value.replace(']', '');
					value = value.replace('[', '');
					value = value.replace('attribute', '');
					var lable = jQuery(this).parents('li').find('label').data('id');
					if (size == lable+'::'+value)
						options = options + '<option value="'+lable+'::'+value+'" selected="selected">'+lable+'</option>';
					else
						options = options + '<option value="'+lable+'::'+value+'">'+lable+'</option>';
				});
				
				options = options + '</optgroup>';
			});
			if (options == '')
			{
				var select = '<select class="form-control input-sm" disabled=""></select>';
			}
			else
			{
				var select = '<select class="form-control input-sm">'+options+'</select>';
			}
			return select;
		},
		changeSize: function(){
			if(typeof design.teams.name != 'undefined' && typeof design.teams.name[1] != 'undefined')
			{
				this.create();
				jQuery('#dg-item_team_list').modal();
				return false;
			}
		},
		save: function(){			
			var teams 			= {};
				teams.name 		= {};
				teams.number 	= {};
				teams.size 		= {};
			var i = 1, checked = true;
			jQuery('#table-team-list tbody tr').each(function(){
				var td = jQuery(this).find('td');
				var name = jQuery(td[1]).find('input').val();
				var number = jQuery(td[2]).find('input').val();
				var size = jQuery(td[3]).find('select').val();
				if (name == '' || number == '')
				{
					checked = false;
				}
				teams.name[i] = name;
				teams.number[i] = number;
				teams.size[i] = size;
				
				i++;
			});
			if (checked == false)
			{
				jQuery('#team_msg_error').html(lang.product.team).css('display', 'block');
			}
			else
			{
				jQuery('#team_msg_error').css('display', 'none');
				jQuery('#dg-item_team_list').modal('hide');
				this.tableView(teams);
			}
			design.teams = teams;
		},
		tableView: function(teams){			
			if (typeof teams.name != 'undefined')
			{
				var sizes = {}, n=0;
				var div = jQuery('#item_team_list tbody');
				div.html('');
				jQuery.each(teams.name, function(i, team){
					n++;
					if (teams.size[i] == null)
					{
						var temp = []; temp[0] = '';
					}
					else
					{
						var temp = teams.size[i].split('::');
					}
					
					var html = '<tr>'
							+  	'<td>'+teams.name[i]+'</td>'
							+  	'<td>'+teams.number[i]+'</td>'
							+  	'<td>'+temp[0]+'</td>'
							+  '</tr>';
					div.append(html);
					if (typeof sizes[teams.size[i]] == 'undefined')
						sizes[teams.size[i]] = [];
					sizes[teams.size[i]].push(i);
				});
				
				if (jQuery('.size-number').length > 0)
				{
					jQuery('.size-number').each(function(){
						var lable = jQuery(this).parents('li').find('label').data('id');
						var value = jQuery(this).attr('name');
							value = value.replace('][', '-');
							value = value.replace('][', '-');
							value = value.replace(']', '');
							value = value.replace('[', '');
							value = value.replace('attribute', '');
							
						if (typeof sizes[lable+'::'+value] != 'undefined')
							jQuery(this).val(Object.keys(sizes[lable+'::'+value]).length);
						else
							jQuery(this).val('');
					});
				}
				else
				{
					jQuery('#quantity').val(n);
					jQuery('#quantity').click(function(){
						design.team.changeSize();
					});
				}
			}
			if (jQuery('.size-number').length > 0)
			{
				design.products.sizes();
			}
			design.ajax.getPrice();
		}
	},
	text:{
		getValue: function(){
			var o = {};
			o.txt 			= $jd('#addEdit').val();
			o.color 		= $jd('#dg-font-color').css('background-color');
			o.fontSize 		= $jd('#dg-font-size').text();
			o.fontFamily 	= $jd('#dg-font-family').text();
			if($jd('#font-style-bold').hasClass('active')) o.fontWeight 	= 'bold';
			var outline 	= $jd('#dg-change-outline-value a').css('left');
			outline 		= outline.replace('px', '');
			if(outline != 0){
				o.stroke 		= $jd('#dg-outline-color').css('background-color');
				o.strokeWidth 	= outline/10;
			}
			o.spacing 		= '0';			
			return o;
		},		
		create: function(){
			$jd('.ui-lock').attr('checked', false);
			var txt = {};
			
			txt.text = 'Hello';
			txt.color = '#FF0000';
			txt.fontSize = '24px';
			txt.fontFamily = 'arial';
			txt.stroke = 'none';
			txt.strokew = '0';
			
			jQuery(document).triggerHandler( "before.add.text.design", txt);
			
			this.add(txt);			
		},
		setValue: function(o){
			$jd('#enter-text').val(o.text);
			$jd('#txt-fontfamily').html(o.fontFamily);
			var color = $jd('#txt-color');
				color.data('color', o.color);
				color.css('background-color', o.color);
				
			if (typeof o.align == 'undefined')
				o.align = 'center';
			jQuery('#text-align span').removeClass('active');
			jQuery('#text-align-'+o.align).addClass('active');
			
			if (typeof o.Istyle != 'undefined' && o.Istyle == 'italic')
				jQuery('#text-style-i').addClass('active');
			else
				jQuery('#text-style-i').removeClass('active');
			
			if (typeof o.weight != 'undefined' && o.weight == 'bold')
				jQuery('#text-style-b').addClass('active');
			else
				jQuery('#text-style-b').removeClass('active');
				
			if (typeof o.decoration != 'undefined' && o.decoration == 'underline')
				jQuery('#text-style-u').addClass('active');
			else
				jQuery('#text-style-u').removeClass('active');
		
			if (typeof o.color != 'undefined')
			{
				var obj = jQuery('#txt-color');
				if (o.color == 'none')
					obj.addClass('bg-none');
				else
					obj.removeClass('bg-none');
					
				obj.data('color', o.color);
				obj.data('value', o.color);
				obj.css('background-color', '#'+o.color);
			}
			
			if (typeof o.outlineC == 'undefined')
			{
				o.outlineC	= 'none';
			}
			var obj = jQuery('.option-outline .dropdown-color');
			if (o.outlineC == 'none')
				obj.addClass('bg-none');
			else
				obj.removeClass('bg-none');
				
			obj.data('color', o.outlineC);
			obj.data('value', o.outlineC);
			obj.css('background-color', '#'+o.outlineC);					
			
			if (typeof o.outlineW == 'undefined')
			{
				o.outlineW = 0;
			}
			jQuery('.outline-value.pull-left').html(o.outlineW);
			jQuery('#dg-outline-width a').css('left', o.outlineW + '%');
			
			jQuery(document).triggerHandler( "setValue.text.design", o);
		},
		add: function(o, type){
			var item = {};
				if (typeof type == 'undefined')
				{
					item.type 	= 'text';
					item.remove = true;
					item.rotate = true;
				}
				else
				{
					item.type	= type;
					item.remove 		= false;
					item.edit 			= false;
				}
				if (typeof o.fn != 'undefined' && typeof o.fn.rotate != 'undefined')
					item.rotate = o.fn.rotate;
				if (typeof o.fn != 'undefined' && typeof o.fn.edit != 'undefined')
					item.edit = o.fn.edit;
				if (typeof o.fn != 'undefined' && typeof o.fn.remove != 'undefined')
					item.remove = o.fn.remove;
				
				item.text 		= o.text;
				item.fontFamily = o.fontFamily;
				item.color 		= o.color;
				colors			= [];
				colors[0]		= o.color;
				item.colors 	= colors;
				item.stroke		= 'none';
				item.strokew 	= '0';
			if(o){
				this.setValue(o);
			}else{
				var o = this.getValue();
			}
			
			var div = document.createElement('div');
			var node = document.createTextNode(o.text);
				div.appendChild(node);
				div.style.fontSize = o.fontSize;
				div.style.fontFamily = o.fontFamily;
			var cacheText = document.getElementById('cacheText');
			cacheText.innerHTML = '';
			cacheText.appendChild(div);
			var $width = cacheText.offsetWidth,
				$height = cacheText.offsetHeight;

			var svgNS 	= "http://www.w3.org/2000/svg",
			tspan 		= document.createElementNS(svgNS, 'tspan'),
			text 		= document.createElementNS(svgNS, 'text'),
			content 	= document.createTextNode(o.text);
			
			tspan.setAttributeNS(null, 'x', '50%');
			tspan.setAttributeNS(null, 'dy', 0);
							
			text.setAttributeNS(null, 'fill', o.color);
			text.setAttributeNS(null, 'stroke', o.stroke);
			text.setAttributeNS(null, 'stroke-width', o.strokew);
			text.setAttributeNS(null, 'stroke-linecap', 'round');
			text.setAttributeNS(null, 'stroke-linejoin', 'round');
			text.setAttributeNS(null, 'x', parseInt($width/2));
			text.setAttributeNS(null, 'y', 20);				
			text.setAttributeNS(null, 'text-anchor', 'middle');				
			text.setAttributeNS(null, 'font-size', o.fontSize);
			text.setAttributeNS(null, 'font-family', o.fontFamily);
			
			if(typeof o.fontWeight != 'undefined')
			text.setAttributeNS(null, 'font-weight', o.fontWeight);
			
			if(typeof o.strokeWidth != 'undefined' && o.strokeWidth != 0){
				text.setAttributeNS(null, 'stroke', o.stroke);
				text.setAttributeNS(null, 'stroke-width', o.strokeWidth);
			}
			if(typeof o.rotate != 'undefined'){
				text.setAttributeNS(null, 'transform', o.rotate);
			}
			if(typeof o.style != 'undefined'){
			text.setAttributeNS(null, 'style', o.style);
			}
			tspan.appendChild(content);
			text.appendChild(tspan);
			
			var g = document.createElementNS(svgNS, 'g');
				g.id = Math.random();
			g.appendChild(text);
			
			var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
			svg.setAttributeNS(null, 'width', $width);
			svg.setAttributeNS(null, 'height', $height);
			svg.setAttributeNS(null, 'viewBox', '0 0 '+$width+' '+$height);			
			svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
			svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
			svg.appendChild(g);
			
			item.width = $width;
			item.height = $height;
			item.file = '';
			item.confirmColor	= false;
			item.svg = svg;
			
			design.item.create(item);
			
			jQuery(document).triggerHandler( "after.add.text.design", item);
		},
		update: function(lable, value){
			var markArea = jQuery('.labView.active .mask-items-view .mask-items-area');
			if(markArea.find('.mask-all-item').length > 0)
			{
				var e = design.elementChangeColor;
			}
			else
			{
				var e = design.item.get();
			}
			if(typeof e[0] == 'undefined') return false;
			var txt = e.find('text');		
			if(typeof lable != 'undefined' && lable != '')
			{
				var rotate = e.data('rotate');
				if (rotate == 'undefined') rotate = 0;
				rotate = rotate * Math.PI / 180;
				e.css('transform', 'rotate(0rad)');
			
				var obj = document.getElementById(e.attr('id'));
				switch(lable){
					case 'fontfamily':
						txt[0].setAttributeNS(null, 'font-family', value);
						obj.item.fontFamily = value;
						if (obj.item.type == 'text')
						{
							jQuery('#txt-fontfamly').html(value);
							jQuery('#txt-fontfamily').css('font-family', value);
						}							
						else
						{
							jQuery('#txt-team-fontfamly').html(value);
						}							
						break;
					case 'color':
						var color = $jd('#txt-color').data('value');
						if (color == 'none') var hex = color;
						else var hex = '#' + color;
						txt[0].setAttributeNS(null, 'fill', hex);
						obj.item.color = hex;
						var colors = obj.item.colors;
						colors[0] = hex;
						obj.item.colors = colors;
						value = '';
						break;
					case 'colorT':
						var color = $jd('#team-name-color').data('value');
						if (color == 'none') var hex = color;
						else var hex = '#' + color;
						txt[0].setAttributeNS(null, 'fill', hex);
						obj.item.color = hex;
						var colors = obj.item.colors;
						colors[0] = hex;
						obj.item.colors = colors;
						value = '';
						break;
					case 'text':
						var align = obj.item.align;
						if (jQuery('#text-align .active').length == 0 || jQuery('#text-align .active').data('label') != 'alignC')
						{
							this.update('alignC', '');
						}
						var text = $jd('#enter-text').val();
						text = text.replace('\n\n', '\n');
						if(text.indexOf('\n') == 0)
							text = text.substring(1, text.lenght);
						
						$jd('#enter-text').val(text); // Fix text when create some space line.
						
						if (text == '') break;
						jQuery('.layer.active span').html(text.substring(0, 15));
						jQuery('.layer.active span').attr('title', text);
						obj.item.text = text;
						var texts = text.split('\n');
						var svgNS 	= "http://www.w3.org/2000/svg";						
						txt[0].textContent = '';
						var fontSize = txt[0].getAttribute('font-size').split('px');
						for (var i = 0; i < texts.length; i++) {
							if(texts[i] == '' && typeof(texts[i+1]) == 'undefined') // Remove space line end.
								continue;
							
							var tspan 	= document.createElementNS(svgNS, 'tspan');
							var dy = 0;
							if(i> 0) dy = fontSize[0];
								tspan.setAttributeNS(null, 'dy', dy);
								tspan.setAttributeNS(null, 'x', '50%');
							var content 	= document.createTextNode(texts[i]);	
							tspan.appendChild(content);
							txt[0].appendChild(tspan);
						}
						this.setSize(e);

						if(align == 'left')
						{
							this.update('alignL', '');
						}
						else if(align == 'right')
						{
							this.update('alignR', '');
						}						
						break;						
					case 'alignL':
						obj.item.align = 'left';
						design.text.align(e, 'left');
						break;
					case 'alignC':
						obj.item.align = 'center';
						design.text.align(e, 'center');
						break;
					case 'alignR':
						obj.item.align = 'right';
						design.text.align(e, 'right');
						break;
					case 'styleI':
						var o = $jd('#text-style-i');
						if(o.hasClass('active')){
							o.removeClass('active');
							txt.css('font-style', 'normal');
							obj.item.Istyle = 'normal';
						}else{
							o.addClass('active');
							txt.css('font-style', 'italic');
							obj.item.Istyle = 'italic';
						}
						lable = 'styleI'; value = 'styleI';
						this.setSize(e);
						break;
					case 'styleB':
						var o = $jd('#text-style-b');
						if(o.hasClass('active')){
							o.removeClass('active');
							txt.css('font-weight', 'normal');
							obj.item.weight = 'normal';
						}else{
							o.addClass('active');
							txt.css('font-weight', 'bold');
							obj.item.weight = 'bold';
						}
						lable = 'styleB'; value = 'styleB';
						this.setSize(e);
						break;
					case 'styleU':
						var o = $jd('#text-style-u');
						if(o.hasClass('active')){
							o.removeClass('active');
							txt.css('text-decoration', 'none');
							obj.item.decoration = 'none';
						}else{
							o.addClass('active');
							txt.css('text-decoration', 'underline');
							obj.item.decoration = 'underline';
						}
						lable = 'styleU'; value = 'styleU';
						this.setSize(e);
						break;
					case 'outline-width':
						txt[0].setAttributeNS(null, 'stroke-width', value/50);
						txt[0].setAttributeNS(null, 'stroke-linecap', 'round');
						txt[0].setAttributeNS(null, 'stroke-linejoin', 'round');
						obj.item.outlineW = value;
						break;
					case 'outline':
						if (value == 'none') var hex = value;
						else var hex = '#' + value;
						txt[0].setAttributeNS(null, 'stroke', hex);
						
						var colors = obj.item.colors;
						colors[1] = hex;
						obj.item.colors = colors;
						
						txt[0].setAttributeNS(null, 'stroke-width', $jd('.outline-value').html()/50);
						obj.item.outlineC = hex;
						break;
					default:
						txt[0].setAttributeNS(null, lable, value);
						break;
				}
				e.css('transform', 'rotate('+rotate+'rad)');
			}
			jQuery(document).triggerHandler( "update.text.design", [lable, value]);
		},
		updateBack: function(e){
			this.setValue(e.item);
		},
		reset:function(){
			document.getElementById('dg-font-family').innerHTML = 'arial';
			document.getElementById('dg-font-size').innerHTML = '12';
			$jd('#dg-font-style span').removeClass();
			$jd( "#dg-change-outline-value" ).slider();
		},
		setSize: function(e){
			var txt = e.find('text');
			var $w 	= parseInt(txt[0].getBoundingClientRect().width);
			var $h 	= parseInt(txt[0].getBoundingClientRect().height);
			e.css('width', $w + 'px');
			e.css('height', $h + 'px');						
			var svg = e.find('svg'),
				width = svg[0].getAttribute('width'),
				height = svg[0].getAttribute('height'),
				view = svg[0].getAttribute('viewBox').split(' '),
				vw = (view[2] * $w)/width,
				vh = (view[3] * $h)/height;			
			svg[0].setAttributeNS(null, 'width', $w);
			svg[0].setAttributeNS(null, 'height', $h);
			
			svg[0].setAttributeNS(null, 'viewBox', '0 0 '+vw +' '+ vh);
			
			
			/* setup Y */
			txt[0].setAttributeNS(null, 'y', 0);
			var size1 = txt[0].getBoundingClientRect();
			var size2 = e[0].getBoundingClientRect();
			var svg = e.find('svg'),
			view = svg[0].getAttributeNS(null, 'viewBox');
			var arr = view.split(' ');
						
			var y = (size2.top - size1.top) * vh / $h;
			txt[0].setAttributeNS(null, 'y', y);
						
			jQuery(document).triggerHandler( "size.update.text.design", [$w, $h]);
		},		
		align: function(e, type){
			var span = $jd('#text-align-'+type);
			var txt = e.find('text');
			var tspan = e.find('tspan');
			if(span.hasClass('active')){
				span.removeClass('active');
				txt[0].setAttributeNS(null, 'text-anchor', 'middle');
				for(i=0; i<tspan.length; i++){
					tspan[i].setAttributeNS(null, 'x', '50%');
				}
			}else{
				$jd('#text-align span').removeClass('active');
				span.addClass('active');
				txt[0].setAttributeNS(null, 'text-anchor', 'middle');
				if(type == 'left')
					txt[0].setAttributeNS(null, 'text-anchor', 'start');
				else if(type == 'right')
					txt[0].setAttributeNS(null, 'text-anchor', 'end');
				else 
					txt[0].setAttributeNS(null, 'text-anchor', 'middle');
				
				for(i=0; i<tspan.length; i++){
					if(type == 'left')
						tspan[i].setAttributeNS(null, 'x', '0');
					else if(type == 'right')
						tspan[i].setAttributeNS(null, 'x', '100%');
					else
						tspan[i].setAttributeNS(null, 'x', '50%');
				}
			}
			jQuery(document).triggerHandler( "align.text.design", [e, type]);
		},
		fonts: function(files, names){
			jQuery.ajax({type: "POST", url: baseURL+'components/com_devn_vmattribute/assets/fonts/fonts.php', data: { files: files, names: names, url: baseURL },
			beforeSend: function ( xhr ){xhr.overrideMimeType("application/octet-stream");},
			success: function(data) {
			jQuery("<style>"+data+"</style>").appendTo('head');
			var fonts = names.split(';');
			var html = '';
			for(i=0;i<fonts.length; i++){
				html = html + '<span style="font-family:\''+fonts[i]+'\'">test</span>';
			}
			jQuery('<div style="display:none">'+html+'</div>').appendTo('body');
			}});
		},
	},
	myart:{
		loadFile: function(key){
			design.mask(true);
			jQuery.ajax({
				url: siteURL + "ajax.php?type=userfile&file="+key
			}).done(function( data ){
				var results 	= eval('('+data+')');
				if (results.status == 1)
				{
					var span = jQuery('#file-'+key);
					if(typeof span[0] != 'undefined')
					{
						span[0].item = results.item;
						span[0].item.url = siteURL + results.item.url;
						span[0].item.thumb = siteURL + results.item.thumb;

						jQuery(document).triggerHandler( "uploaded", [results.item, span[0]]);
						design.myart.create(span[0]);
						setTimeout(function(){
							var elm = design.item.get();
							jQuery(elm).addClass('drag-item-upload');
							jQuery(elm).data('upload', 1);
							jQuery(document).triggerHandler( "added.uploaded", elm);
							design.ajax.getPrice();
						}, 200);
					}
				}
				else
				{
					alert_text(results.msg)
				}
			}).always(function(){
				design.mask(false);
			});
		},
		create: function(e){
			var item = e.item;
			$jd('.ui-lock').attr('checked', false);			
			var o 			= item;
			o.type 			= 'clipart';			
			o.upload		= 1;			
			o.title 		= item.title;
			o.url 		= item.url;
			o.file_name 	= item.file_name;			
			o.thumb		= item.thumb;
			o.confirmColor	= true;
			o.remove 		= true;
			o.edit 		= false;
			o.rotate 		= true;	
			o.rotate 		= true;

			if(typeof item.layer != 'undefined')
			{
				o.layer = item.layer;
			}
			
			if (item.file_type != 'svg')
			{
				o.file		= {};
				o.file.type	= 'image';				
				var img = new Image();
				design.mask(true);
				img.onload = function() {
					o.width 	= this.width;
					o.height	= this.height;
					if (this.width > 100)
					{
						o.width 	= 100;						
						o.height 	= (100/this.width) * this.height;
					}
					o.change_color = 0;					
						
					jQuery(document).triggerHandler( "myitem.create.item.design", o);

					var content = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="'+o.width+'" height="'+o.height+'" preserveAspectRatio="none" xmlns:xlink="http://www.w3.org/1999/xlink">'
								 + '<g><image x="0" y="0" width="'+o.width+'" height="'+o.height+'" preserveAspectRatio="none" xlink:href="'+item.thumb+'" /></g>'
								 + '</svg>';
					o.svg 		= jQuery.parseHTML(content);
					
					if(typeof o.stoped != 'undefined' && o.stoped == 1)
					{
						$jd('#dg-myclipart').modal('hide');
						design.mask(false);
						return false;
					}
					
					design.item.create(o);
					$jd('#dg-myclipart').modal('hide');
					design.mask(false);
				}
				img.src = item.thumb;
				return true;
			}
		}
	},
	qrcode:{
		open: function(){
			design.popover('add_item_qrcode');
			jQuery('.popover-title').children('span').html(lang.text.qrcde);
		},
		create: function(e){
			var txt = jQuery('#enter-qrcode').val();
			if (txt == '')
			{
				alert_text(lang.text.enter_text);
				return false;
			}
			
			var $btn = jQuery(e).button('loading');
			jQuery.ajax({
				url: siteURL + "ajax.php?type=qrcode&text="+txt
			}).done(function( data ){
				var img = document.createElement('img');
					img.className = 'img-responsive img-thumbnail';
					img.setAttribute('src', siteURL+data);
					img.setAttribute('alt', 'QRcode');
					img.setAttribute('title', lang.text.add_qrcode);
				
				var fileName = data.split('/');
				
				var item = {};
					item.title = lang.text.qrcode;
					item.url = siteURL+data;
					item.file_name = fileName[fileName.length - 1];
					item.thumb = siteURL+data;
					item.file_type = 'image';
					
				img.item = item;
					
				jQuery('#qrcode-img').html(img);
				$btn.button('reset');
				jQuery(img).bind('click', function(){
					design.myart.create(img);
				});
				design.myart.create(img);
				jQuery('#image-qr-code').trigger('click');
			});
			
		}
	},
	art:{
		create: function(e){
			var item = e.item;
			$jd('.ui-lock').attr('checked', false);
			var o 		= item;
			o.type 		= 'clipart';			
			o.upload 		= 0;			
			o.clipart_id 	= jQuery(e).data('clipart_id');
			o.title 		= item.title;
			o.url 		= item.url;
			o.file_name 	= item.file_name;
			o.change_color 	= parseInt(item.change_color);

			if(typeof o.thumb == 'undefined')
			{
				var img 	= $jd(e).children('img');	
				o.thumb	= img.attr('src');	
			}
			o.remove 		= true;
			o.edit 		= true;
			o.rotate 		= true;
			o.confirmColor	= false;
			
			$jd('.modal').modal('hide');
			design.mask(true);
			if (item.file_type != 'svg')
			{
				o.confirmColor	= true;
				var canvas = document.createElement('canvas');
				var context = canvas.getContext('2d');
				var img = new Image();
				img.onload = function() {				  
					o.width 	= 100;
					o.height	= Math.round((o.width/this.width) * this.height);
					o.change_color = 0;
					o.file		= {};
					o.file.type	= 'image';
					
					canvas.width = this.width;
					canvas.height = this.height;
					
					context.drawImage(img,0,0);
					context.stroke();
					var dataURL = canvas.toDataURL();
					var content = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" preserveAspectRatio="none" width="'+o.width+'" height="'+o.height+'" xmlns:xlink="http://www.w3.org/1999/xlink">'
									 + '<g><image x="0" y="0" width="'+o.width+'" preserveAspectRatio="none" height="'+o.height+'" xlink:href="'+dataURL+'" /></g>'
									 + '</svg>';
					o.svg 		= jQuery.parseHTML(content);					
					jQuery('#arts-add button').button('reset');
					design.item.create(o);
					design.mask(false);
				}
				design.mask(false);
				if(typeof item.imgMedium == 'undefined')
				{
				    item.imgMedium = item.fle_url + item.medium;
				}
				var src = item.imgMedium;
				src = src.replace('http://', '');
				src = src.replace('https://', '');
				img.src = urlCase +'?src='+ src +'&w=250&h=atuto&q=90';				
			}
			else
			{
				delete item.svg; /* fixed cannot add arts of owner store */
				$jd.ajax({
					type: "POST",
					data: item,
					url: siteURL + "ajax.php?type=svg",
					dataType: "json",
					success: function(data){					
							o.width 		= data.size.width;
							o.height		= data.size.height;
							o.file		= data.info;						
							o.svg 		= jQuery.parseHTML(data.content);
							design.item.create(o);
							var elm = design.item.get();			
							var svg = elm.children('svg');
							jQuery(svg[0]).removeAttr('style');
							$jd('.modal').modal('hide');
							var e = design.item.get();
							design.item.setup(e[0].item);
					},
					failure: function(errMsg) {
						alert_text(errMsg+ '. '+lang.designer.tryagain);
						design.mask(false);
					},
					complete: function() {
						design.mask(false);
					}
				});
			}
		},
		/*
		* change object e from color1 to color2
		*/
		changeColor: function(e, color){
			var o = e.data('colors');
			if(typeof o != 'undefined')
			{
				jQuery(o).each(function(){
					if (color == 'none')
						var hex = color;
					else
						var hex = '#' + color;
					/* this.setAttributeNS(null, o.type, hex); */
					jQuery(this).attr(o.type, hex);
				});
			}			
		},
		restore: function(){
			var e = design.item.get();
			//var html = e.data('content');
			//var o = e.children('svg');
		},
		update: function(e){			
			design.item.setup(e.item);
		}
	},
	item:{
		designini: function(items, color){
			if (Object.keys(items.design).length > 0)
			{
				var postion = 'front';
				if (typeof color == 'undefined'){ var check = true; color = 0;}
				else var check = false;
				var thumbs = jQuery('#product-thumbs');
				jQuery(thumbs).html('');
				
				var postions = ['front', 'back', 'left', 'right'];
				var value	= items.design[color];				
				jQuery.each(postions, function(i, view){
					if (value[view] != '' && value[view].length > 0)
					{
						var item = eval ("(" + value[view] + ")");						
						var o = jQuery('#view-'+view);
						var images = jQuery(o).children('.product-design');
						jQuery(images).html('');
						var window = jQuery(o).children('.design-area');
						var thumbView = '';
						jQuery.each(item, function(j, e){
							if (typeof e.id != 'undefined' && e.id != 'area-design')
							{
								thumbView = e.img;
								var img	= document.createElement('img');
									img.className = 'modelImage';
									img.id = view +'-img-'+ e.id;
									img.setAttribute('src', baseURL + e.img);
									
									img.style.width	 	= e.width;
									img.style.height 		= e.height;
									img.style.top 		= e.top;
									img.style.left 		= e.left;
									img.style.zIndex		= e.zIndex;
									if(typeof e.is_change_color != 'undefined' && e.is_change_color == 1)
									{
										jQuery(img).addClass('is_change_color');
									}
									jQuery(document).triggerHandler( "load.item.design", [img, e]);
								jQuery(images).append(img);
							}
						});

						if(change_bg_product == 'area')
						{
							o.find('img').removeClass('is_change_color');
							o.find('.design-area .content-inner').addClass('is_change_color');
						}
						
						var a = document.createElement('a');
						jQuery(a).bind('click', function(){design.products.changeView(this, view)});
						a.setAttribute('class', 'box-thumb');
						a.setAttribute('href', 'javascript:void(0)');
						a.innerHTML = '<img width="40" height="40" src="'+baseURL+thumbView+'"><span class="help-block">'+lang.text[view]+'</span>';
						jQuery(thumbs).append(a);
					}					
					
					if (check == true)
					{
						var area = items['area'][view];
						if (area != '' && area.length > 0)
						{
							var vector = eval ("(" + area + ")");
							jQuery(window).css({"height":vector.height, "width":vector.width, "left":vector.left, "top":vector.top, "border-radius":vector.radius, "z-index":vector.zIndex});
						}
					}
				});				
			}
		},
		create: function(item){
			jQuery(document).triggerHandler( "start_create.item.design", item);
			if(typeof item.disabled_add != 'undefined' && item.disabled_add == 1)
			{
				return false;
			}
			this.unselect();
			jQuery('.labView.active .design-area').css('overflow', 'visible');
			var e = $jd('#app-wrap .active .content-inner'),				
				span = document.createElement('span');
			var n = -1;
			jQuery('#app-wrap .drag-item').each(function(){
				var index 	= jQuery(this).attr('id').replace('item-', '');
				if (index > n) n = parseInt(index);
			});			
			var n = n + 1;			
			
			span.className 	= 'drag-item';
			span.id 		= 'item-'+n;
			span.item 		= item;
			item.id 		= n;			
			jQuery(span).bind('click', function(e){design.item.select(this); e.stopPropagation();});
			var center = this.align.center(item);
			span.style.left = center.left + 'px';
			span.style.top 	= center.top + 'px';
			var viewDes = jQuery('#design-area .labView.active .design-area');
			var zoom    = -1;
			if(viewDes.hasClass('zoom')) {
				zoom    = viewDes.data('zoom');
			}
			if(zoom != -1)
			{
				if(typeof item.width == 'string')
				{
					item.width  = parseFloat(item.width.replace('px', '')) * zoom;
				}
				else
				{
					item.width  = item.width * zoom;
				}
				if(typeof item.height == 'string')
				{
					item.height = parseFloat(item.height.replace('px', '')) * zoom;
				}
				else
				{
					item.height = item.height * zoom;
				}
				var div     = document.createElement('div');
				jQuery(div).append(item.svg);
				var tmpSvg  = jQuery(div).find('svg');
				tmpSvg[0].setAttribute('width', item.width);
				tmpSvg[0].setAttribute('height', item.height);
				tmpSvg.find('image').attr('width', item.width);
				tmpSvg.find('image').attr('height', item.height);
				item.svg = jQuery(div).html();
			}
			span.style.width 	= item.width+'px';
			span.style.height 	= item.height+'px';
			
			jQuery(span).data('id', item.id);
			jQuery(span).data('type', item.type);
			jQuery(span).data('file', item.file);
			jQuery(span).data('width', item.width);
			jQuery(span).data('height', item.height);
			
			design.zIndex  	= parseInt(design.zIndex) + 5;
			span.style.zIndex = design.zIndex;
			span.style.width = item.width;
			span.style.height = item.height;
			
			jQuery(document).triggerHandler( "before.create.item.design", span);
			jQuery(span).append(item.svg);			
			
			if(item.change_color == 1)
			{
				jQuery('#clipart-colors').css('display', 'block');
				jQuery('.btn-action-colors').css('display', 'block');
			}
			else
			{
				jQuery('#clipart-colors').css('display', 'none');
				jQuery('.btn-action-colors').css('display', 'none');
			}
			
			if(item.remove == true)
			{
				var remove = document.createElement('div');
				remove.className = 'item-remove-on glyphicons bin';
				remove.setAttribute('title', lang.text.remove);
				remove.setAttribute('onclick', 'design.item.remove(this)');
				jQuery(span).append(remove);				
			}
			
			if(item.edit == true)
			{
				var edit = document.createElement('div');
				edit.className = 'item-edit-on glyphicons pencil';
				edit.setAttribute('title', lang.text.edit);
				edit.setAttribute('onclick', 'design.item.edit(this)');
				jQuery(span).append(edit);
			}	
			
			e.append(span);
					
			this.move($jd(span));
			this.resize($jd(span));	
			if(item.rotate == true)
				this.rotate($jd(span));
			design.layers.add(item);
			this.setup(item);
			jQuery('.btn-action-edit').css('display', 'none');
			if (print_type == 'screen' || print_type == 'embroidery')
			{
				if (item.confirmColor == true)
				{
					this.setupColorprint(span);
					jQuery('.btn-action-edit').css('display', 'block');
				}				
			}
			jQuery(document).triggerHandler( "after.create.item.design", span);
			this.select(span);
			design.print.colors();			
			design.print.size();
			design.ajax.getPrice();
		},
		setupColorprint: function(o){			
			var item = o.item;
			
			jQuery('#screen_colors_images').html('<img class="img-thumbnail img-responsive" src="'+item.thumb+'">');
			if (item.colors != 'undefined')
			{
				jQuery('#screen_colors_list span').each(function(){
					var color = jQuery(this).data('color');
					if (jQuery.inArray(color, item.colors) == -1)
						jQuery(this).removeClass('active');
					else
						jQuery(this).addClass('active');
				});
			}
			var id = jQuery(o).attr('id');
			if (typeof id != 'undefined')
				jQuery('#screen_colors_body').data('id', id);
			
			jQuery('#screen_colors_body').show();			
		},
		setColor: function(){
			var colors = [], i = 0;
			jQuery('#screen_colors_list .bg-colors').each(function(){
				if (jQuery(this).hasClass('active') == true)
				{
					colors.push(jQuery(this).data('color'));
					i++;
				}
			});
			if (i==0)
			{
				alert_text(lang.designer.chooseColor);
			}
			else
			{
				var o = this.get();
				if (typeof o == 'undefined' || o.attr('id') != 'undefined')
				{
					var id = jQuery('#screen_colors_body').data('id');
					if (typeof id != 'undefined')
					{
						document.getElementById(id).click();
						var o = jQuery('#'+id);
					}
				}
				if (o != 'undefined')
				{
					var e = document.getElementById(o.attr('id'));
					if (typeof e.item != 'undefined')
						e.item.colors = colors;
					this.printColor(e);
				}
				jQuery('#screen_colors_body').hide();
			}
			design.print.colors();
			design.ajax.getPrice();
		},
		printColor: function(o){
			var box = jQuery('#item-print-colors');
			jQuery('.btn-action-edit').css('display', 'none');
			var printing_setting = {};
			printing_setting.confirmColor = false;
			if (print_type == 'screen' || print_type == 'embroidery')
			{
				printing_setting.confirmColor = true;
			}
			
			jQuery(document).triggerHandler( "confirm_printing.item.design", printing_setting);			
			
			if (printing_setting.confirmColor == true)
			{				
				box.html('').css('display', 'none');
				if(o.item.confirmColor == true)
				{
					if (typeof o.item.colors != 'undefined')
					{
						var item = o.item;
						jQuery('#item-print-colors').html('<div class="col-xs-6 col-md-6"><img class="img-thumbnail img-responsive" src="'+item.thumb+'"></div><div class="col-xs-6 col-md-6"><div id="print-color-added" class="list-colors"></div><br/><span id="print-color-edit">'+lang.text.ink_colors+'</span></div>');
						
						jQuery('#print-color-edit').click(function(){
							design.item.setupColorprint(o);
						});
						var div = jQuery('#print-color-added');
						jQuery.each(item.colors, function(i, color){
							var span = document.createElement('span');
								span.className = 'bg-colors';
								span.style.backgroundColor = '#'+color;
							div.append(span);
						});
						box.css('display', 'block');
						jQuery('.btn-action-edit').css('display', 'block');
					}
					else{
						this.setupColorprint(o);
					}
				}				
			}
			else
			{
				box.html('').css('display', 'none');				
			}
		},
		imports: function(item){
			this.unselect();
			jQuery('.labView.active .design-area').css('overflow', 'visible');
			var e = $jd('#app-wrap .active .content-inner'),				
				span = document.createElement('span');
			var n = -1;
			jQuery('#app-wrap .drag-item').each(function(){
				var index 	= jQuery(this).attr('id').replace('item-', '');
				if (index > n) n = parseInt(index);
			});			
			var n = n + 1;
			if (item.type == 'team')
			{
				if ( typeof item.isNumber != 'underline' && item.isNumber == 1)
					span.className = 'drag-item drag-item-number';
				else
					span.className = 'drag-item drag-item-name';
			}
			else
			{			
				span.className = 'drag-item';
			}
			span.id 		= 'item-'+n;
			span.item 		= item;
			item.id 		= n;
			jQuery(span).bind('click', function(e){design.item.select(this); e.stopPropagation();});			

			span.style.left 	= item.left;
			span.style.top 		= item.top;
			span.style.width 	= item.width;
			span.style.height 	= item.height;
			
			jQuery(span).data('id', item.id);
			jQuery(span).data('type', item.type);
			if (typeof item.file != 'undefined')
			{
				jQuery(span).data('file', item.file);
			}
			else
			{
				item.file = {};
				jQuery(span).data('file', item.file);
			}
			jQuery(span).data('width', item.width);
			jQuery(span).data('height', item.height);
			
			span.style.zIndex = item.zIndex;
			design.zIndex = parseInt(item.zIndex);
			
			jQuery(document).triggerHandler( "before.imports.item.design", [span, item]);
			if(item.svg.indexOf('svg') == -1) return;
			jQuery(span).append(item.svg);
			var svg = jQuery(span).children('svg')[0];
			if(svg.getAttribute('viewBox') == '')
			{
				svg.removeAttribute('viewBox');
			}
			if(item.change_color == 1)
			{
				jQuery('#clipart-colors').css('display', 'block');
				jQuery('.btn-action-colors').css('display', 'block');
			}
			else
			{
				jQuery('#clipart-colors').css('display', 'none');
				jQuery('.btn-action-colors').css('display', 'none');
			}
			
			if (item.type != 'team')
			{
				var remove = document.createElement('div');
				remove.className = 'item-remove-on glyphicons bin';
				remove.setAttribute('title', lang.text.remove);
				remove.setAttribute('onclick', 'design.item.remove(this)');
				jQuery(span).append(remove);
			}
			e.append(span);
						
			this.move($jd(span));
			this.resize($jd(span));
			if (item.type != 'team')
			if (item.rotate != 0)
			{				
				this.rotate($jd(span), item.rotate * 0.0174532925);
			}
			else
			{
				this.rotate($jd(span));
			}			
			design.layers.add(item);
			if (item.type == 'clipart' && typeof item.file != 'undefined' && typeof item.file.type != 'undefined' && item.file.type == 'svg')
			{
				var svg = jQuery(span).find('svg');
				var c      = design.svg.getColors(jQuery(svg[0]));
				var colors = [];
				for(var color in c) {
					color = color.replace('#', '');
					colors.push(color);
				}
			}
			else
			{
				if (typeof item.colors == 'undefined')
				{
					var colors = [];
					if (typeof span.item.color != 'undefined')
						colors[0] = span.item.color;
					else
						colors[0] = 'none';
					
					if (typeof span.item.outlineC != 'undefined')
						colors[1] = span.item.outlineC;
				}
				else
				{
					var colors = item.colors;
				}
			}
			span.item.colors = colors;
			
			this.setup(item);
			jQuery(document).triggerHandler( "after.imports.item.design", [span, item]);
			design.print.colors();
			design.print.size();
		},
		align:{
			left: function(){
			},
			right: function(){
			},
			top: function(){
			},
			bottom: function(){
			},
			center: function(item){
				var align 	= {},
				area 		= jQuery('.labView.active .content-inner');
				align.left 	= (jQuery(area).width() - parseInt(item.width))/2; // fixed add clipart to center;
				align.left 	= parseInt(align.left);
				align.top 	= (jQuery(area).height() - parseInt(item.height))/2; // fixed add clipart to center;
				align.top	= parseInt(align.top);
				return align;
			}
		},
		move: function(e){
			if(!e) e = $jd('.drag-item-selected');
			e.draggable({
				scroll: false,				
				drag:function(event, ui){
					var e = ui.helper;
					
					var o = e.parent().parent();
					var	left = o.css('left');
						left = parseInt(left.replace('px', ''));
						
					var	top = o.css('top');
						top = parseInt(top.replace('px', ''));
					var	width = o.css('width');
						width = parseInt(width.replace('px', ''));
					
					var	height = o.css('height');
						height = parseInt(height.replace('px', ''));
												
					var $left = ui.position.left,
						$top = ui.position.top,
						$width = e.width(),
						$height = e.height();
					if($left < 0 || $top < 0 || ($left+$width) > width || ($top+$height) > height){
						e.data('block', true);
						e.css('border', '1px solid #FF0000');						
					}else{
						e.data('block', false);
						e.css('border', '1px dashed #444444');
					}
				},
				stop: function( event, ui ) {
					jQuery(document).triggerHandler( "move.item.design", ui);
					design.ajax.getPrice();
				}
			});						
		},
		resize: function(e, handles){
			if(typeof handles == 'undefined') handles = 'se';
			
			if(handles == 'se') {var auto = true; e = e;}
			else {var auto = false;}
			if(!e) e = $jd('.drag-item-selected');
						
			var oldwidth = 0, oldsize=0;		
			e.resizable({minHeight: 10, minWidth: 10,				
				aspectRatio: auto,
				handles: handles,
				start: function( event, ui ){
					oldwidth = ui.size.width;
					oldsize = $jd('#dg-font-size').text();
				},
				stop: function( event, ui ) {
					jQuery(document).triggerHandler( "resize.item.design", ui);
					design.print.size();
					design.ajax.getPrice();
				},
				resize: function(event,ui){
					var e = ui.element;
					var o = e.parent().parent();
					var	left = o.css('left');
						left = parseInt(left.replace('px', ''));
						
					var	top = o.css('top');
						top = parseInt(top.replace('px', ''));
					var	width = o.css('width');
						width = parseInt(width.replace('px', ''));
					
					var	height = o.css('height');
						height = parseInt(height.replace('px', ''));
																		
					var $left = parseInt(ui.position.left),
						$top = parseInt(ui.position.top),
						$width = parseInt(ui.size.width),
						$height = parseInt(ui.size.height);
					if(($left + $width) > width || ($top + $height)>height){
						e.data('block', true);
						e.css('border', '1px solid #FF0000');
						if(parseInt(left + $left + $width) > 490 || parseInt(top + $top + $height) > 490){
							//$jd(this).resizable('widget').trigger('mouseup');
						}
					}else{
						e.data('block', false);
						e.css('border', '1px dashed #444444');
					}
					var svg = e.find('svg');									
					
					svg[0].setAttributeNS(null, 'width', $width);
					svg[0].setAttributeNS(null, 'height', $height);		
					svg[0].setAttributeNS(null, 'preserveAspectRatio', 'none');					
					
					if(e.data('type') == 'clipart')
					{
						var file = e.data('file');
						if(file.type == 'image')
						{	
							var img = e.find('image');
							img[0].setAttributeNS(null, 'width', $width);
							img[0].setAttributeNS(null, 'height', $height);
						}
					}
					
					if(e.data('type') == 'text')
					{						
						//var text = e.find('text');
						//text[0].setAttributeNS(null, 'y', 20);						
					}
					
					jQuery('#'+e.data('type')+'-width').val(parseInt($width));
					jQuery('#'+e.data('type')+'-height').val(parseInt($height));
				}				
			});
		},
		rotate: function(e, angle){
			if( typeof angle == 'undefined') deg = 0;
			else deg = angle;
			if( typeof e != Object ) var o = jQuery(e);
			else var o = e;
			o.rotatable({angle: deg, 
				rotate: function(event, angle){
					var deg = Math.round(angle.r);
					if(deg < 0) deg = 360 + deg;
					
					jQuery('#' + e.data('type') + '-rotate-value').val(deg);
					o.data('rotate', deg);
					jQuery(document).triggerHandler( "rotate.item.design", deg);
				}
			});
			design.print.size();
		},
		select: function(e){
			if (jQuery(e).hasClass('drag-item-selected') == true) return false;
			this.unselect();
			jQuery('.labView.active .design-area').css('overflow', 'visible');
			$jd(e).addClass('drag-item-selected');
			$jd(e).css('border', '1px dashed #444444');
			
			if ($jd(e).resizable('option', 'disabled') == true)
				$jd(e).resizable({ disabled: false, handles: 'e' });
			
			if ($jd(e).draggable('option', 'disabled') == true)
				$jd(e).draggable({ disabled: false });
			
			design.popover('add_item_'+jQuery(e).data('type'));
			jQuery('.add_item_'+jQuery(e).data('type')).addClass('active');
			design.menu(jQuery(e).data('type'));
			this.update(e);
			this.printColor(e);
			design.layers.select(jQuery(e).attr('id').replace('item-', ''));
			jQuery(document).triggerHandler( "select.item.design", e);
		},
		unselect: function(e){
			$jd('#app-wrap .drag-item-selected').each(function(){
				$jd(this).removeClass('drag-item-selected');
				$jd(this).css('border', 0);	
				
				if ($jd(this).resizable('option', 'disabled') == false)
					$jd(this).resizable({ disabled: true, handles: 'e' });
				
				if ($jd(this).draggable('option', 'disabled') == false)
					$jd(this).draggable({ disabled: true });
			});
			jQuery('.labView.active .design-area').css('overflow', 'hidden');
			jQuery( ".popover" ).hide();
			jQuery('#layers li').removeClass('active');
			jQuery('#dg-popover .dg-options-toolbar button').removeClass('active');
			jQuery('#dg-popover .dg-options-content').removeClass('active');
			jQuery('#dg-popover .dg-options-content').children('.row').removeClass('active');
			jQuery(document).triggerHandler( "unselect.item.design", e);
		},
		remove: function(e){
			if (typeof e == 'undefined') return;
			e.parentNode.parentNode.removeChild(e.parentNode);
			var id = jQuery(e.parentNode).data('id');
			if($jd('#layer-'+id)) $jd('#layer-'+id).remove();
			jQuery( "#dg-popover" ).hide('slow');
			jQuery(document).triggerHandler( "remove.item.design", e);
			design.print.colors();
			design.print.size();
			design.ajax.getPrice();
			return;
		},
		setup: function(item){
			if(item.type == 'clipart')
			{
				jQuery('.popover-title').children('span').html(lang.text.clipart);
				
				/* color of clipart */
				var e = this.get();
				if(item.upload == 1)
				{
					e.addClass('drag-item-upload');
				}
				if (item.change_color == 1)
				{
					var colors = design.svg.getColors(e.children('svg'));				
				}
				if(typeof colors != 'undefined' && item.change_color == 1)
				{
					jQuery('#'+item.type+'-colors').css('display', 'block');
					jQuery('.btn-action-colors').css('display', 'block');
					var div = jQuery('#list-clipart-colors');
					div.html('');
					var c = [];
					for(var color in colors)
					{					
						if (color == 'none') continue;
						c.push(color);
						var a = document.createElement('a');
							a.setAttribute('class', 'dropdown-color');
							a.setAttribute('data-placement', 'top');
							a.setAttribute('data-original-title', lang.text.color);
							a.setAttribute('href', 'javascript:void(0)');
							a.setAttribute('data-color', color);
							a.setAttribute('style', 'background-color:'+color);
							jQuery.data(a, 'colors', colors[color]);
							a.innerHTML = '<span class="ui-accordion-header-icon ui-icon ui-icon-triangle-1-s"></span>';
							div.append(a);
					}
					item.colors = c;
				}
				else{
					jQuery('#'+item.type+'-colors').css('display', 'none');
					jQuery('.btn-action-colors').css('display', 'none');
				}
			}
			
			if(item.type == 'text'){
				jQuery('.popover-title').children('span').html(lang.text.text);
			}
			document.getElementById(item.type + '-rotate-value').value = 0;		
		
			jQuery('.dropdown-color').popover({
				html:true,				
				placement:'bottom',
				title:lang.text.color+' <a class="close" href="#">&times;</a>',
				content:function(){
					jQuery('.dropdown-color').removeClass('active');
					var html = jQuery('.other-colors').html();
					jQuery(this).addClass('active');					
					return '<div data-color="'+jQuery(this).data('color')+'" class="list-colors">' + html + '</div>';
				}				
			});
			
			jQuery('.dropdown-color').on('show.bs.popover', function () {
				var elm = this;
				jQuery('.dropdown-color').each(function(){
					if (elm != this)
					{
						jQuery(this).popover('hide');
					}
				});
			});
			jQuery('.dropdown-color').click(function (e) {				
				e.stopPropagation();
			});
			jQuery(document).click(function (e) {				
				jQuery('.dropdown-color').popover('hide');				
			});			
			jQuery('.dg-tooltip').tooltip();
			design.popover('add_item_'+item.type);
		},
		get: function(){
			var e = $jd('#app-wrap .drag-item-selected');
			return e;
		},
		refresh: function(name){
			var e = this.get();
			switch(name)
			{
				case 'rotate':				
					e.rotatable("setValue", 0);				
					break;
			}
		},		
		changeColor: function(e){
			
			var o 		= this.get(),
				color 	= jQuery(e).data('color'),
				a 		= jQuery('.dropdown-color.active');
			if (color == 'none')
			{
				jQuery(a).addClass('bg-none');
			}
			else
			{
				jQuery(a).removeClass('bg-none');
				jQuery(a).css('background-color', '#'+color);
			}
			jQuery(a).data('value', color);			
				
			if(o.data('type') == 'clipart'){
				var a = jQuery('#list-clipart-colors .dropdown-color.active');				
				design.art.changeColor(a, color);
				
				if (color == 'none')
					var hex = color;
				else
					var hex = '#' + color;
				design.svg.changeColor(o[0], a.data('index'), hex);
			}
			else if(o.data('type') == 'text'){
				design.text.update(a.data('label'), color);
			}
			else if(o.data('type') == 'team'){
				design.text.update(a.data('label'), '#'+color);
			}
			jQuery('.dropdown-color').popover('hide');
			design.print.colors();
			design.ajax.getPrice();			
			jQuery(document).triggerHandler( "after.item.changecolor", [o.data('type'), color]);
		},
		update: function(e){			
			var o = $jd(e),
				type = o.data('type'),
				css = e.style;
			
			/* rotate */
			if (typeof css == 'undefined')
				css = document.getElementById(jQuery(e).attr('id')).style;
			if( typeof jQuery(e).data('rotate') == 'undefined')
			{
				var deg = 0
			}
			else
			{
				var deg = jQuery(e).data('rotate');
			}
			
			/* width and height */
			$jd('#'+type+'-width').val(design.convert.px(css.width));
			$jd('#'+type+'-height').val(design.convert.px(css.height));
			
			switch(type){
				case 'clipart':
					design.art.update(e);
					break;
				case 'text':
					design.text.updateBack(e);
					break;
				case 'team':
					design.team.updateBack(e);
					break;
			}
			$jd('.rotate-value').val(deg);
		},
		updateSize: function(w, h){
			var e = design.item.get();
			if(e.length == 0) return false;
			var	svg = e.find('svg'),
				view = svg[0].getAttributeNS(null, 'viewBox'),
				width = svg[0].getAttributeNS(null, 'width'),
				height = svg[0].getAttributeNS(null, 'height');
			view = view.split(' ');				
			svg[0].setAttributeNS(null, 'width', w);
			svg[0].setAttributeNS(null, 'height', h);
			svg[0].setAttributeNS(null, 'viewBox', '0 0 '+ (w * view[2])/width +' '+ ((h * view[3])/height));
			
			jQuery(document).triggerHandler( "size.update.text.design", [w, h]);
			
			jQuery(e).css({'width':w+'px', 'height':h+'px'});
			design.print.size();
		}
	},
	layers:{
		select: function(index)
		{
			jQuery('#layers li').removeClass('active');
			jQuery('#layer-'+index).addClass('active');
			var o = jQuery('#item-'+index);
			if (o.hasClass('drag-item-selected') == false)
			{
				if (document.getElementById('item-'+index) != null)
				design.item.select(document.getElementById('item-'+index));
			}
		},
		setup: function(){
			jQuery('#layers').html('');
			jQuery('.labView.active .drag-item').each(function(){
				design.layers.add(this.item);
			});
			design.item.unselect();
		},
		add: function(item){
			var li 			= document.createElement('li');
				li.className 	= 'layer';
				li.id 		= 'layer-' + item.id;
			jQuery(li).bind('click', function(){
				design.layers.select(item.id);
			});
			if(item.type == 'text')
			{
				var name = item.text;
				if (name.length > 10)
					name = name.substring(0, 10);				
				var html = '<i class="glyphicons text_bigger glyphicons-12"></i> ';
				html = html + ' <span title="'+item.text+'">'+name+'</span>';
			}
			else if(item.type == 'team')
			{
				var name = item.text;
				if (name.length > 10)
					name = name.substring(0, 10);
				var html = '<i class="glyphicons soccer_ball glyphicons-small"></i> ';
				html = html + ' <span title="'+item.text+'">'+name+'</span>';
			}
			else
			{
				var name = item.title;
				if (name.length > 10)
					name = name.substring(0, 10);
				var html = '<img alt="" src="'+item.thumb+'">';
				html = html + ' <span title="'+item.title+'">'+name+'</span>';
			}
			
			
			html = html + '<div class="layer-action pull-right">'
						+ '<a class="dg-tooltip" title="" data-placement="top" data-toggle="tooltip" href="javascript:void(0)" data-original-title="'+lang.text.sort+'">'
						+ '<i class="glyphicons move glyphicons-small"></i>'
						+ '</a>';
			if (item.type != 'team')
			{
				html = html + '<a class="remove-layer" title="" onclick="design.layers.remove('+item.id+')" data-placement="top" data-toggle="tooltip" href="javascript:void(0)" data-original-title="'+lang.text.layer+'">'
						+ '<i class="glyphicons bin glyphicons-small"></i></a></div>';
			}
			
			li.innerHTML = html;
			jQuery('#layers').prepend(li);
			design.layers.select(item.id);
			jQuery(document).triggerHandler( "add.layers.design", [li, item]);
		},
		remove: function(id){
			var e = $jd('#item-'+id).children('.item-remove-on');
			$jd('#layer-'+id).remove();
			if (typeof e[0] != 'undefined')
			{
				design.item.remove(e[0]);
			}
			else
			{
				design.print.colors();
				design.print.size();
				design.ajax.getPrice();
			}
		},
		sort: function(){
			var zIndex = $jd('#layers .layer').length;
			$jd('#layers .layer').each(function(){
				var id = $jd(this).attr('id').replace('layer-', '');
				$jd('#item-'+id).css('z-index', zIndex);
				zIndex--;
			});
		}
	},
	tabs:{
		toolbar: function(e){
			$jd('ul.dg-panel li.panel').hide('slow');
			$jd('#'+e).show('slow');			
		}
	},
	menu: function(type){
		jQuery('.menu-left a').removeClass('active');		
		jQuery('.add_item_' + type ).addClass('active');
	},
	popover: function(e){
		jQuery('.dg-options').css('display', 'none');
		jQuery('#options-'+e).css('display', 'block');
		jQuery('.popover').css({'top': '40px', 'display':'block'});	
		
		var elm = jQuery('.menu-left .'+e);
		
		var index = jQuery('.menu-left li').index(jQuery('.menu-left .'+e).parent());
		var position = elm.position();
		if(typeof position != 'undefined')
		{
			var top = position.top - 20;
			jQuery('.popover .arrow').css('top', top + 'px');
		}
	},
	convert:{
		radDeg: function(rad){
			if(rad.indexOf('rotate') != -1)
			{
				var v = rad.replace('rotate(', '');
					v = v.replace('rad)', '');					
			}else{
				var v = parseFloat(rad);
			}
			
			var deg = ( v * 180 ) / Math.PI;
			
			if (deg < 0) deg = 360 + deg;
			return Math.round(deg);
		},
		px: function(value){
			if(typeof value == 'number') return value;
			if(typeof value == 'undefined') return 0;
			var px = value.replace('px', '');
			var px = parseFloat(value);
			return Math.round(px);
		}
	},
	upload:{
		computer: function()
		{
			if ( jQuery('#upload-copyright').length > 0 && jQuery('#upload-copyright').is(':checked') == false )
			{
				alert_text(lang.upload.terms);
				return false;
			}
			
			if (jQuery('#files-upload').val() == '')
			{
				alert_text(lang.upload.chooseFile);
				return false;
			}
			
			return true;
		}
	},
	svg:{
		iniColors: function(o){
			var i=0, colors = [], seft = this;
	
			var tags = ['defs', 'style', 'metadata', 'tspan'];
			var tags_default = ['path', 'polygon', 'circle', 'ellipse', 'polygon', 'polyline', 'text', 'text'];
			
			if (jQuery(o).find('style').length > 0)
			{
				var is_css = true;
				var style = jQuery(o).find('style');
				var css = style[0].innerHTML;
				if (typeof css != 'undefined')
					css = css.replace(' ', '');
				else
					css = '';
			}
			else
			{
				var is_css = false;
			}
			
			jQuery(o).find('*').each(function(){
				var tag = this.nodeName;
				if ( tags.indexOf(tag) == -1)
				{					
					var fill_added = false;
					var fill = jQuery(this).css('fill');
					if (fill != 'undefined')
					{
						var check = true;
						if (this.style.fill == '' && tags_default.indexOf(tag) == -1)
						{					
							check = is_css;
							if (is_css == true && typeof css != 'undefined')
							{
								var string = jQuery(this).attr('id');
								if (typeof string == 'undefined')
								{
									check = false;
								}
								else
								{
									if ( css.indexOf('#'+string+'{') == -1 )
									{
										check = false;
									}
								}
								
								var string = jQuery(this).attr('class');
								if (typeof string == 'undefined')
								{
									check = false;
								}
								else
								{
									var classs = string.split(' ');
									var check_css = false;
									for(j=0; j<classs.length; j++)
									{
										if ( css.indexOf('.'+classs[j]+'{') != -1 )
										{									
											check_css = true;
										}
									}
									check = check_css;
								}
							}
						}				
						
						if (check == true)
						{
							var color = parseColor(fill);
							var hex 	= color.hex;
							if (hex == 'none' || hex == 'NONE')
								hex = 'none';
							else
								hex 		= hex.toUpperCase();
							var n 		= colors.indexOf(hex);
							if (n == -1)
							{					
								seft.addClass(this, 'fill', i);
								colors[i] = hex;
								i++;
							}
							else
							{
								seft.addClass(this, 'fill', n);
							}
							fill_added = true;
						}			
					}
					
					if (fill_added == false)
					{
						var fill = jQuery(this).attr('fill');
						if (typeof fill != 'undefined' && fill != '')
						{			
							var color = parseColor(fill);
							var hex 	= color.hex;
							if (hex == 'none' || hex == 'NONE')
								hex = 'none';
							else
								hex 		= hex.toUpperCase();
							var n 		= colors.indexOf(hex);
							if (n == -1)
							{
								seft.addClass(this, 'fill', i);
								colors[i] = hex;
								i++;
							}
							else
							{
								seft.addClass(this, 'fill', n);
							}
						}
					}
					jQuery(this).removeAttr('fill');
					
					var stroke_added = false;
					
					var stroke = jQuery(this).css('stroke');
					if (typeof stroke != 'undefined' && stroke != 'none' && stroke != 'NONE' && stroke != '')
					{			
						var color = parseColor(stroke);
						var hex 	= color.hex;
						if (hex == 'none' || hex == 'NONE')
								hex = 'none';
							else
								hex 		= hex.toUpperCase();
						var n 		= colors.indexOf(hex);
						if (n == -1)
						{					
							seft.addClass(this, 'stroke', i);
							colors[i] = hex;
							i++;
						}
						else
						{
							seft.addClass(this, 'stroke', n);
						}
						stroke_added = true;
					}	
					
					if (stroke_added == false)
					{
						var stroke = jQuery(this).attr('stroke');
						if (typeof stroke != 'undefined' && stroke != 'none' && stroke != 'NONE' && stroke != '')
						{
							var color = parseColor(stroke);
							var hex 	= color.hex;
							if (hex == 'none' || hex == 'NONE')
								hex = 'none';
							else
								hex 		= hex.toUpperCase();
							var n 		= colors.indexOf(hex);
							if (n == -1)
							{
								seft.addClass(this, 'stroke', i);
								colors[i] = hex;
								i++;
							}
							else
							{
								seft.addClass(this, 'stroke', n);
							}
						}
					}
					jQuery(this).removeAttr('stroke');
					 
					if (jQuery(this).attr('style') != 'undefined')
					{
						jQuery(this).css('fill', '');
						jQuery(this).css('stroke', '');
					}
				}
			});
			
			this.addCss(o, colors);
			this.addFill(o, colors);			
			return colors;
		},
		addClass: function(o, txt, index){
			var id = jQuery(o).parents('.drag-item').attr('id');
			if (typeof id != 'undefined')
				txt = id +'-'+ txt;
			
			var str = jQuery(o).attr('class');
			if (typeof str != 'undefined')
			{
				jQuery(o).attr('class', str +' '+ txt + index);
			}
			else
			{
				jQuery(o).attr('class', txt + index);
			}
		},
		addCss: function(o, colors){
			var id = jQuery(o).parents('.drag-item').attr('id');
			if (typeof id != 'undefined')
				var txt = id +'-';
			else
				var txt = '';
			
			var style = jQuery(o).find('style'), newCss = '';
	
			jQuery.each(colors, function(i, color){
				newCss = newCss + '.'+txt+'fill'+i + '{fill:'+color+';}';
				newCss = newCss + '.'+txt+'stroke'+i + '{stroke:'+color+';}';
			});
			
			if (typeof style[0] != 'undefined')
			{				
				var css = '';
				style[0].textContent = css + newCss;
			}
			else
			{
				var svgNS 	= "http://www.w3.org/2000/svg",
					style 		= document.createElementNS(svgNS, 'style');
					style.setAttributeNS(null, 'type', 'text/css');
					
				var content 	= document.createTextNode(newCss);
					style.appendChild(content);
				o.appendChild(style);
			}
		},
		addFill: function(o, colors){
			var id = jQuery(o).parents('.drag-item').attr('id');
			if (typeof id != 'undefined')
				var txt = id+'-';
			else
				var txt = '';
	
			jQuery.each(colors, function(i, color){
				jQuery(o).parents('.drag-item').find('.'+txt+'fill'+i).each(function(){
					this.setAttribute('fill', color);
				});
				jQuery(o).parents('.drag-item').find('.'+txt+'stroke'+i).each(function(){
					this.setAttribute('stroke', color);
				});				
			});			
		},
		changeColor: function(e, index, color){
			var colors = e.item.colors;
			if (typeof colors == 'undefined') return false;		
			if (typeof colors[index] == 'undefined') return false;
				
			e.item.colors = colors;
			
			var id = jQuery(e).attr('id');
			if (typeof id != 'undefined')
				var txt = id +'-';
			else
				var txt = '';
			
			jQuery(e).find('.'+txt+'fill'+index).attr('fill', color);
			jQuery(e).find('.'+txt+'stroke'+index).attr('stroke', color);
			
			var style = jQuery(e).find('style');
			
			if (typeof style[0] != 'undefined')
			{
				var css = jQuery('<div>').append(jQuery(style[0]).clone()).text();
				
				var oldCss = '.'+txt+'fill'+index + '{fill:'+colors[index]+';}';
					oldCss = oldCss + '.'+txt+'stroke'+index + '{stroke:'+colors[index]+';}';
				
				var newCss = '.'+txt+'fill'+index + '{fill:'+color+';}';
				newCss = newCss + '.'+txt+'stroke'+index + '{stroke:'+color+';}';
				
				if (css.indexOf(oldCss) == -1)
				{
					css = css + newCss;
				}
				else
				{
					css = css.replace(oldCss, newCss);
				}
				
				style[0].textContent = css;
			}
			colors[index] = color;
		},
		getColors: function(e){
			var color = {};
			var colors = this.find(e, 'fill', color);
			colors	= this.find(e, 'FILL', colors);
			colors	= this.find(e, 'stroke', colors);
			colors	= this.find(e, 'STROKE', colors);
			return colors;
		},
		find: function(e, attribute, colors){
			e.find('*').each(function() {
				var color = jQuery(this).attr('fill');
				if(color == undefined && this.nodeName == 'path' && jQuery(this).parent()[0].nodeName != 'defs' && jQuery(this).parent()[0].nodeName != 'pattern')
				{
					jQuery(this).attr('fill', '#000000');
				}
			});
			e.find('['+attribute+']').each(function(){
				if(jQuery(this).attr('pattEle') == undefined)
				{
					var color = jQuery(this).attr(attribute);
					if(typeof colors[color] != 'undefined')
					{
						var n = colors[color].length;
						colors[color][n] = this;
						jQuery(this).attr('pattClass', color.replace('#', ''));
					}
					else{
						colors[color] = [];
						colors[color][0] = this;
						jQuery(this).attr('pattClass', color.replace('#', ''));
					}
					colors[color].type = attribute;
				}
			});
			return colors;
		},
		style: function(e){
			find('[style]').each(function(){
				var style = this.getAttributeNS(null, 'style');
				style = style.replace(' ', '');
				var attrs = style.split(';');
				for(i=0; i<attrs.length; i++)
				{
					var attribute = attrs[i].split(':');
					a[attribute[0]] = attribute[1];
				}
			});
		},
		items: function(postion, callback)
		{
			jQuery(document).triggerHandler( "start.canvas.design", postion);

			var function_name = '';
			if(typeof callback == 'function')
			{
				function_name = callback.name;
			}
			if(design.isIE() && function_name != 'thumb' && function_name != 'load_design_area')
			{
				design.createSvgthumb(postion, callback);
				return false;
			}
			if (jQuery('#view-'+postion+' .product-design img').length == 0)
			{
				if (typeof callback === "function"){
					callback();
				}
				return true;
			}
			var area 	= eval ("(" + items['area'][postion] + ")");
			var idActi  = jQuery('.labView.active').attr('id');
			jQuery('.labView').removeClass('active');
			jQuery('#view-' + postion).addClass('active');
			var desRect = jQuery('.labView.active .design-area .content-inner')[0].getBoundingClientRect();
			var tmpRect = {};
			var obj 	= [], i = 0;
			jQuery('#view-' +postion+ ' .design-area .drag-item').each(function(){
				obj[i] 			= {};
				obj[i].top 		= design.convert.px(jQuery(this).css('top'));
				obj[i].left 	= design.convert.px(jQuery(this).css('left'));
				obj[i].width 	= design.convert.px(jQuery(this).css('width'));
				obj[i].height 	= design.convert.px(jQuery(this).css('height'));
				obj[i].id    	= jQuery(this).attr('id');
				
				obj[i].type 	= jQuery(this).data('type');
				
				jQuery(document).triggerHandler( "item.canvas.design", [obj[i], this]);
								
				if(typeof jQuery(this).data('rotate') != 'undefined')
					obj[i].rotate = jQuery(this).data('rotate');
				else 
					obj[i].rotate = 0;
					
				var svg 		= jQuery(this).find('svg');				
				obj[i].svg 		= jQuery('<div></div>').html(jQuery(svg).clone()).html();
				var image 		= jQuery(svg).find('image');
				if (typeof image[0] == 'undefined')
				{
					obj[i].img 	= false;
				}
				else
				{
					obj[i].img 		= true;
					obj[i].flipX    = jQuery(this).data('flipX');
					var src 		= jQuery(image).attr('xlink:href');
					obj[i].src 		= src;				
				}
				obj[i].zIndex	= this.style.zIndex;
				i++;
				var itemRct = this.getBoundingClientRect();
				var itemT   = itemRct.top - desRect.top;
				var itemL   = itemRct.left - desRect.left;
				var itemB   = itemT + itemRct.height;
				if(itemB > (desRect.top + desRect.height))
				{
					itemB   = desRect.top + desRect.height;
				}
				var itemR   = itemL + itemRct.width;
				if(itemR > (desRect.left + desRect.width))
				{
					itemR   = desRect.left + desRect.width
				}
				if(i == 1)
				{
					tmpRect.top  = itemT;
					tmpRect.left = itemL;
					tmpRect.bott = itemB;
					tmpRect.rght = itemR;
				}
				else
				{
					if(itemT < tmpRect.top)
					{
						tmpRect.top  = itemT;
					}
					if(itemL < tmpRect.left)
					{
						tmpRect.left = itemL;
					}
					if(itemB > tmpRect.bott)
					{
						tmpRect.bott = itemB;
					}
					if(itemR > tmpRect.rght)
					{
						tmpRect.rght = itemR;
					}
				}
				tmpRect.area_w = area.width;
				tmpRect.area_h = area.height;
			});
			jQuery('#view-' + idActi).addClass('active');
			obj.sort(function(obj1, obj2) {	
				return obj1.zIndex - obj2.zIndex;
			});
			
			var canvas 			= document.createElement('canvas');
				canvas.width 	= area.width;
				canvas.height 	= area.height;
			var context = canvas.getContext('2d');
			
			var count = Object.keys(obj).length;
			
			if (area.radius == '50%')
			{
				var areaHight = parseInt(area.height);				
				var radius = areaHight / 2;				
			}
			else
			{
				var radius = design.convert.px(area.radius);
			}
			canvasLoad(obj, 0);
			function canvasLoad(obj, i)
			{
				if (typeof obj[i] != 'undefined')
				{
					var IE = /msie/.test(navigator.userAgent.toLowerCase());
					var IE11 = /trident/.test(navigator.userAgent.toLowerCase());
					var item = obj[i];
					i++;
					if (IE === true || IE11 == true)
					{
						item.svg = item.svg.replace(' xmlns:NS1=""', '');
						item.svg = item.svg.replace(' NS1:xmlns:xlink="http://www.w3.org/1999/xlink"', '');
						if (item.svg.split(' xmlns="').length > 2)
							item.svg = item.svg.replace(' xmlns="http://www.w3.org/2000/svg"', '');
					}				
					if (radius > 0)
					{
						context.save();
						var x = 0, 
							y = 0;
						var w = area.width;
						var h = area.height;
						var r = x + w;
						var b = y + h;
						context.beginPath();
						
						if (area.radius == '50%') 
						{
							if (w == h)
							{
								context.arc(radius, radius, radius, 0, 2 * Math.PI, false);
							}
							else
							{
								context.scale(w/h, 1);
								context.arc(radius, radius, radius, 0, 2 * Math.PI, false);
								context.scale(1/(w/h), 1);
							}
						}
						else
						{
							context.moveTo(x+radius, y);
							context.lineTo(r-radius, y);
							context.quadraticCurveTo(r, y, r, y+radius);
							context.lineTo(r, y+h-radius);
							context.quadraticCurveTo(r, b, r-radius, b);				
							context.lineTo(x+radius, b);
							context.quadraticCurveTo(x, b, x, b-radius);				
							context.lineTo(x, y+radius);
							context.quadraticCurveTo(x, y, x+radius, y);
						}
						
						
						context.closePath();
						context.clip();						
					}						
					if (item.rotate != 0)
					{
						context.save();
						context.translate(item.left, item.top);
						context.translate(item.width/2, item.height/2);
						context.rotate(item.rotate * Math.PI/180);
						item.left = (item.width/2) * -1;
						item.top = (item.height/2) * -1;
					}
					try {						
						if (item.img == true)
						{
							/*
							var flipFlg = '0';
							var images 	= new Image();
							jQuery(document).triggerHandler( "clipimage.canvas.design", [item, context]);
							if(item.flipX == false && item.src.indexOf('data:image/svg+xml') == -1)
							{
								context.save();
								context.translate(item.width, 0);
								context.scale(-1, 1);
								item.left = item.left * -1;
								flipFlg = '1';
							}
							images.onload = function() {
								context.drawImage(images, item.left, item.top, item.width, item.height);								
								context.restore();
								if(flipFlg == '1')
								{
									context.restore();
								}
								canvasLoad(obj, i);
							};
							var src = item.src;
							src = src.replace(siteURL, '');
							if(src.indexOf('http') == 0){
								src = siteURL +'image-tool/index.php?src='+ src;
							}
							else{
								src = item.src;
							}
							images.src = src;
							*/
							var src 	= item.src;
							src 		= src.replace(siteURL, '');
							if(src.indexOf('http') == 0){
								src = siteURL +'image-tool/index.php?src='+ src;
							}
							else{
								src = item.src;
							}
							var new_svg = item.svg;
							new_svg = new_svg.replace(item.src, src);
							var canvas_tem = document.createElement('canvas');
							canvas_tem.width = item.width;
							canvas_tem.height = item.height;
							canvg(canvas_tem, new_svg, {
								log: true,
								renderCallback: function(){
									context.drawImage(canvas_tem, item.left, item.top);
									context.restore();
									canvasLoad(obj, i);
								}
							});
						}
						else
						{
							var mySrc = 'data:image/svg+xml,'+encodeURIComponent(item.svg);
							var images 	= new Image();
							images.onload = function() {
								context.drawImage(images, item.left, item.top);
								context.restore();
								canvasLoad(obj, i);
							};
							images.src = mySrc;
						}
						
					}
					catch (e) 
					{
						if (e.name == "NS_ERROR_NOT_AVAILABLE") {}
					}					
				}
				else
				{		
					if(tmpRect.top < 0) tmpRect.top = 0;
					if(tmpRect.left < 0) tmpRect.left = 0;
					tmpRect.width  = tmpRect.rght - tmpRect.left;
					tmpRect.height = tmpRect.bott - tmpRect.top;
					design.tmpRect = tmpRect;
					design.svg.canvas(postion, canvas, callback);
				}
			}
			return canvas;
		},		
		canvas: function(postion, canvas1, callback){
			var area 	= eval ("(" + items['area'][postion] + ")");
			var color_active = jQuery('#product-list-colors span.active');
			var index	= jQuery('#product-list-colors span').index(color_active);
			var is_color_picker = 0;
			if(color_active.hasClass('bg-more-colors'))
			{
				index = 0;
				is_color_picker = 1;
			}
			var hex_color = design.exports.productColor();
			
			var canvas 			= document.createElement('canvas');
				canvas.width 	= max_box_width;
				canvas.height 	= max_box_height;
			var context = canvas.getContext('2d');
						
			design.output[postion] = canvas;
			
			var layers 	= eval ("(" + items["design"][index][postion] + ")");			
			var count = Object.keys(layers).length;
				count = parseInt(count) - 1;
			var z = layers[1].zIndex;
			var obj = [], j = 0;
			for (i= count; i> -1; i--)
			{
				obj[j] = layers[i];
				j++;
			}
			canvasLoad(obj, 0);
			function canvasLoad(obj, i)
			{
				if (typeof obj[i] != 'undefined')
				{
					var product_color = design.exports.productColor();

					var layer = obj[i];
					i++;
					
					if (layer.id != 'area-design')
					{
						var imageObj = new Image();
						var left 	= design.convert.px(layer.left);
						var top 	= design.convert.px(layer.top);
						var width 	= design.convert.px(layer.width);
						var height 	= design.convert.px(layer.height);
						if(is_color_picker == 1)
						{
							layer.is_change_color = 1;
						}
						imageObj.onload = function(){
							context.save();
							if(typeof layer.is_change_color != 'undefined' && layer.is_change_color == 1 && change_bg_product == 'img')
							{
								var temp_canvas = document.createElement('canvas');
								temp_canvas.width = imageObj.width;
								temp_canvas.height = imageObj.height;
								var temp_context = temp_canvas.getContext('2d');
								temp_context.rect(0, 0, imageObj.width, imageObj.height);
							      temp_context.fillStyle = '#'+product_color;
							      temp_context.fill();
							      temp_context.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height);

							      context.drawImage(temp_canvas, left, top, width, height);
							}
							else
							{
								context.drawImage(imageObj, left, top, width, height);
							}
							context.restore();
							canvasLoad(obj, i);
						}
						imageObj.onerror = function(){
							canvasLoad(obj, i);
						}
						if (jQuery('#'+postion+'-img-'+layer.id).length > 0)
						{
							var thumb = jQuery('#'+postion+'-img-'+layer.id).attr('src');
						}
						else
						{
							var thumb = layer.img;
						}
						thumb = thumb.replace(siteURL, '');
						thumb = thumb.replace('//uploaded', '/uploaded');
						if (thumb.indexOf('http') != -1)
						{
							thumb = thumb.replace('http://', '');
							thumb = thumb.replace('https://', '');
							imageObj.src = siteURL +'image-tool/index.php?src='+ thumb +'&w='+width+'&h='+height;
						}
						else if (thumb.indexOf('data:image') != -1)
						{
							imageObj.src = thumb;
						}
						else
						{
							imageObj.src = siteURL+thumb;
						}							
					}
					else
					{
						var tmpRect 	= design.tmpRect;
						var left 		= design.convert.px(area.left);
						var top 		= design.convert.px(area.top);
						var can 		= document.createElement('canvas');
						var ctx1 		= can.getContext('2d');
						if(change_bg_product == 'area' && jQuery('#view-'+postion+' .content-inner').hasClass('is_change_color'))
						{
							var temp_canvas = document.createElement('canvas');
							temp_canvas.width = canvas1.width;
							temp_canvas.height = canvas1.height;
							var temp_context = temp_canvas.getContext('2d');
							temp_context.rect(0, 0, canvas1.width, canvas1.height);
							temp_context.fillStyle = '#'+product_color;
							temp_context.fill();
							context.drawImage(temp_canvas, left, top, canvas1.width, canvas1.height);
						}

						var options 	= {};
						jQuery(document).triggerHandler( "canvas_area.design", [postion, options, canvas1]);

						if(typeof options.effect != 'undefined' && typeof tmpRect.width != 'undefined' && tmpRect.width > 0)
						{
							var img_effect 	= canvas1.toDataURL();
							var ajax_url 	= siteURL + 'ajax.php?type=addon&task=effect&fn='+options.effect;
							jQuery.ajax({
								url: ajax_url,
								type: 'POST',
								data: {content: img_effect},
							})
							.done(function(htm_img) {
								var new_img = new Image();
								new_img.onload = function(){
									context.drawImage(new_img, left, top);

									if(tmpRect != undefined)
									{
										if(tmpRect.width > tmpRect.area_w)
										{
											tmpRect.width = tmpRect.area_w;
										}
										if(tmpRect.height > tmpRect.area_h)
										{
											tmpRect.height = tmpRect.area_h;
										}
										can.width  = tmpRect.width;
										can.height = tmpRect.height;					
										ctx1.drawImage(new_img, tmpRect.left, tmpRect.top, tmpRect.width, tmpRect.height, 0, 0, tmpRect.width, tmpRect.height);
										design.output[postion + 'nobg'] = can;
									}
									canvasLoad(obj, i);
								};
								new_img.onerror = function(){
									canvas_design();
								}
								new_img.src = 'data:image/png;base64,'+htm_img;
							})
							.fail(function() {
								canvas_design();
							});
						}
						else
						{
							canvas_design();
						}

						function canvas_design()
						{
							context.drawImage(canvas1, left, top);
							if(tmpRect != undefined)
							{
								if(tmpRect.width > tmpRect.area_w)
								{
									tmpRect.width = tmpRect.area_w;
								}
								if(tmpRect.height > tmpRect.area_h)
								{
									tmpRect.height = tmpRect.area_h;
								}
								can.width  = tmpRect.width;
								can.height = tmpRect.height;					
								ctx1.drawImage(canvas1, tmpRect.left, tmpRect.top, tmpRect.width, tmpRect.height, 0, 0, tmpRect.width, tmpRect.height);
								design.output[postion + 'nobg'] = can;
							}
							canvasLoad(obj, i);
						}
					}
				}
				else
				{
					jQuery(document).triggerHandler( "end.canvas.design", postion);
					if (typeof callback === "function") {
						callback(postion);
					}					
				}
			}
		}
	},
	saveDesign: function(){		
		if (design.view != 'done')
		{
			if (jQuery('#view-'+design.view+' .product-design').html() != '')
			{
				if (design.view == 'back')
				{
					design.view = 'left';
					design.svg.items('back', design.saveDesign);
					return false;
				}
				else if (design.view == 'left')
				{
					design.view = 'right';
					design.svg.items('left', design.saveDesign);
					return false;
				}
				else if (design.view == 'right')
				{
					design.view = 'done';
					design.svg.items('right', design.saveDesign);
					return false;
				}
			}
		}
		else
		{
			var leftViewFlg = true, rightViewFlg = true;
			if(jQuery('#view-left .product-design').html() == '')
			{
				leftViewFlg  = false;
			}
			if(jQuery('#view-right .product-design').html() == '')
			{
				rightViewFlg = false;
			}
			if(design.view == 'back')
			{
				if(leftViewFlg)
				{
					design.view = 'right';
					design.svg.items('left', design.saveDesign);
					return false;
				}
				else
				{
					if(rightViewFlg)
					{
						design.view = 'done';
						design.svg.items('right', design.saveDesign);
						return false;
					}
				}
			}
			else if(design.view == 'left')
			{
				if(rightViewFlg)
				{
					design.view = 'done';
					design.svg.items('right', design.saveDesign);
					return false;
				}
			}
		}
		var data = design.ajax.form();
		data.images = {};
		
		if (jQuery('#view-front .product-design').html() != '')
		{
			if(design.isIE())
			{
				data.images.front = design.front.svgThum;
			}
			else
			{
				data.images.front = design.output.front.toDataURL();
			}
		}
		else
		{
			data.images.front = '';
		}
		
		if (jQuery('#view-back .product-design').html() != '')
		{
			if(design.isIE())
			{
				data.images.back = design.back.svgThum;
			}
			else
			{
				data.images.back = design.output.back.toDataURL();
			}
		}
		else
		{
			data.images.back = '';
		}
		
		if (jQuery('#view-left .product-design').html() != '')
		{
			if(design.isIE())
			{
				data.images.left = design.left.svgThum;
			}
			else
			{
				data.images.left = design.output.left.toDataURL();
			}
		}
		else
		{
			data.images.left = '';
		}
		
		if (jQuery('#view-right .product-design').html() != '')
		{
			if(design.isIE())
			{
				data.images.right = design.right.svgThum;
			}
			else
			{
				data.images.right = design.output.right.toDataURL();
			}
		}
		else
		{
			data.images.right = '';
		}
		
		var vectors	= JSON.stringify(design.exports.vector());
		var teams = JSON.stringify(design.teams);
		var productColor = design.exports.productColor();
		
		var thumb = '';	
		if (data.images.front != '')
		{
			thumb = data.images.front;
		}
		else if(data.images.back != '')
		{
			thumb = data.images.back;
		}
		else if(data.images.left != '')
		{
			thumb = data.images.left;
		}
		else if(data.images.right != '')
		{
			thumb = data.images.right;
		}

		data.image			= thumb;
		data.vectors		= vectors;
		data.teams			= teams;
		data.fonts			= design.fonts;
		data.product_id		= product_id;
		data.parent_id		= parent_id;
		data.design_id		= design.design_id;
		data.design_file	= design.design_file;
		data.designer_id	= design.designer_id;
		data.design_key		= design.design_key;
		data.product_color	= productColor;	
		data.isIE			= design.isIE();
		data.title			= jQuery('#design-save-title').val();		
		data.description	= jQuery('#design-save-description').val();		
		
		jQuery(document).triggerHandler( "before.save.design", data);
		
		jQuery.ajax({
			url: siteURL + "ajax.php?type=saveDesign",
			type: "POST",
			contentType: 'application/json',
			data: JSON.stringify(data),
		}).done(function( msg ) {
			var results = eval ("(" + msg + ")");
			
			if (results.error == 1)
			{
				alert_text(results.msg);
			}
			else
			{
				design.design_id = results.content.design_id;
				design.design_file = results.content.design_file;
				design.designer_id = results.content.designer_id;
				design.design_key = results.content.design_key;
				design.productColor = productColor;
				design.product_id = product_id;
				
				results.content.productColor	= productColor;
				results.content.product_id		= product_id;
				var a = jQuery('#product-thumbs a');
				design.products.changeView(a[0], 'front');
				jQuery(document).triggerHandler( "done.save.design", results.content);
				if(typeof product_url == 'undefined')
				{
					var linkEdit 	= siteURL + 'sharing.php/'+results.content.user_id+':'+results.content.design_key+':'+product_id+':'+productColor+':'+parent_id;	
				}
				else
				{
					var linkEdit 	= product_url + results.content.user_id+':'+results.content.design_key+':'+product_id+':'+productColor+':'+parent_id;			
				}
				jQuery('#link-design-saved').val(linkEdit);
				jQuery('#dg-share').modal();					
			}
			
			jQuery('#dg-mask').css('display', 'none');
			jQuery('#dg-designer').css('opacity', '1');
		});		
	},
	save: function(check){
		if (design.ajax.isBlank() == false) return false;
		
		if (user_id == 0)
		{
			is_save = 1;
			jQuery('#f-login').modal();			
		}
		else
		{
			var view = 'front';
			jQuery('.labView').each(function() {
				if(jQuery(this).find('.product-design').html() != '')
				{
					view = jQuery(this).attr('id').replace('view-', '');
					return false;
				}
			});
			if (jQuery('.labView.active .design-area').hasClass('zoom'))
			{
				design.tools.zoom();
			}
			
			if (user_id == design.designer_id)
			{
				if(typeof admin_design_idea != 'undefined' && admin_design_idea == 1 && design.design_id != 0)
				{
					jQuery('#save-design-info').modal('hide');
					design.svg.items(view, design.saveDesign);
					return false;
				}
			
				if (typeof check != 'undefined' && check == 1)
				{
					jQuery('#save-design-info').modal('hide');
				}
				else
				{
					jQuery('#save-design-info').modal('show');
					return false;
				}
				
				jQuery( "#save-confirm" ).dialog({
					resizable: false,			  
					height: 200,
					width: 350,
					closeText: 'X',
					modal: true,
					buttons: [
						{
							text: lang.text.save_new,
							icons: {
								primary: "ui-icon-heart"
							},
							click: function() {
								jQuery( this ).dialog( "close" );
								design.design_id = 0;								
								design.design_key = '';
								design.design_file = '';
								
								jQuery('#dg-mask').css('display', 'block');
								jQuery('#dg-designer').css('opacity', '0.3');
								design.svg.items(view, design.saveDesign);							
							}
						},
						{
							text: lang.text.update,
							icons: {
								primary: "ui-icon-heart"
							},
							click: function() {
								jQuery( this ).dialog( "close" );
								jQuery('#dg-mask').css('display', 'block');
								jQuery('#dg-designer').css('opacity', '0.3');
								design.svg.items(view, design.saveDesign);
								
							}
						}
					]
				});
			}
			else
			{
				if (typeof check != 'undefined' && check == 1)
				{
					jQuery('#save-design-info').modal('hide');
					jQuery('#dg-mask').css('display', 'block');
					jQuery('#dg-designer').css('opacity', '0.3');
					design.svg.items(view, design.saveDesign);
				}
				else
				{
					jQuery('#save-design-info').modal('show');
				}
			}
		}
	},
	saveInfo: function(e){
		var email = jQuery('#login-email').val();
		var password = jQuery('#login-password').val();
		if (email == '')
		{
			alert_text(lang.text.email);
			return false;
		}
		
		if (password == '')
		{
			alert_text(lang.text.designid);
			return false;
		}
		
		
		var $btn = jQuery(e).button('loading');
		jQuery.ajax({
			url: siteURL + "ajax.php?type=user",
			type: "POST",			
			data: {email: email, password:password}
		}).done(function( msg ) {
			user_id = msg;
			jQuery('#f-login').modal('hide');
			$btn.button('reset');
			design.save();
		});
	},
	mask: function(load){
		if (load == true){
			jQuery('#dg-mask').css('display', 'block');
			jQuery('#dg-designer').css('opacity', '0.3');
		}
		else{
			jQuery('#dg-mask').css('display', 'none');
			jQuery('#dg-designer').css('opacity', '1');
		}
	},
	exports:{
		productColor: function(){
			var spans = jQuery('#product-list-colors span.bg-colors');
			var span_active  = jQuery('#product-list-colors span.active');
			if(span_active != undefined)
			{
				var color = span_active.data('color');
			}
			else if(spans[0] != undefined)
			{
				var color = jQuery(spans[0]).data('color');
			}
			else
			{
				var color = 'FFFFFF';
			}
			return color;
		},
		cliparts: function(){
			var arts = {};
			jQuery.each(['front', 'back', 'left', 'right'], function(i, view){
				var list = [];
				if (jQuery('#view-'+view +' .product-design').html().length > 10)
				{
					if (jQuery('#view-'+view+' .content-inner').html() != '')
					{
						jQuery('#view-'+view+' .drag-item').each(function(){
							if (typeof this.item.clipart_id != 'undefined')
								list.push(this.item.clipart_id);
						});
					}
					arts[view] = list;
				}
			});
			return arts;
		},
		vector: function(){
			var vectors = {};
			var postions = ['front', 'back', 'left', 'right'];
			jQuery.each(postions, function(i, postion){
				if (jQuery('#view-'+postion +' .product-design').html().length > 10)
				{					
					vectors[postion]	= design.exports.items('view-'+postion);
				}
			});
			
			return vectors;
		},
		items: function(postion){
			var i 	= 0;
			var vectors = {};
			jQuery('#'+ postion).find('.drag-item').each(function(){
				vectors[i] 		= {};
				var item 		= this.item;
				item.type		= this.item.type;
				item.width		= jQuery(this).css('width');
				item.height		= jQuery(this).css('height');
				item.top		= jQuery(this).css('top');
				item.left		= jQuery(this).css('left');
				item.zIndex		= jQuery(this).css('z-index');
				var svg 		= jQuery(this).find('svg').clone();
				jQuery(document).triggerHandler( "beforexports.item.design", [item, svg]);
				item.svg		= jQuery('<div></div>').html(jQuery(svg)).html();
				if (design.isIE())
				{
					var div     = document.createElement('div');
					var clone   = jQuery(svg).clone();
					clone.find('*').each(function() {
						if(this.nodeName == 'sodipodi:namedview')
						{
							jQuery(this).remove();
						}
						var attributeElement = this;
						var attLst = this.attributes;
						var removeArr = [];
						for(j = 0; j < attLst.length; j++) {
							var attr = attLst[j];
							if(attr.name.toLowerCase().indexOf('inkscape:') != -1 
								|| attr.name.toLowerCase().indexOf('xmlns:ns') != -1
								|| attr.name.toLowerCase().indexOf('ns1:') != -1
								|| attr.name.toLowerCase().indexOf('ns2:') != -1
								|| attr.name.toLowerCase().indexOf('ns3:') != -1
								|| attr.name.toLowerCase().indexOf('ns4:') != -1
								|| attr.name.toLowerCase().indexOf('ns5:') != -1
								|| attr.name.toLowerCase().indexOf('ns6:') != -1
								|| attr.name.toLowerCase().indexOf('ns7:') != -1
								|| attr.name.toLowerCase().indexOf('sodipodi:') != -1)
							{
								removeArr.push(attr.name);
							}
						}
						jQuery(removeArr).each(function() {
							attributeElement.removeAttribute(this);
						});
					});
					var w       = jQuery(svg[0]).attr('width');
					var h       = jQuery(svg[0]).attr('height');
					var viewB   = clone[0].getAttributeNS(null, 'viewBox');
					if(viewB == undefined)
					{
						viewB = '';
					}
					else
					{
						viewB = 'viewBox="' + viewB + '"';
					}
					var pA = clone[0].getAttributeNS(null, 'preserveAspectRatio');
					if(pA == undefined)
					{
						pA = 'none';
					}
					var svgHtml = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" preserveAspectRatio="'+pA+'" '+viewB+' width="'+w+'" height="'+h+'">';
					clone.children().each(function() {
						jQuery(div).append(this);
					});
					svgHtml += jQuery(div).html();
					svgHtml += '</svg>';
					item.svg = svgHtml;
				}
				if (jQuery(this).data('rotate') != 'undefined')
					item.rotate	= jQuery(this).data('rotate');
				else
					item.rotate	= 0;
									
				if (item.type == 'text' || item.type == 'team')
				{
					item.text					= this.item.text;
					item.color					= this.item.color;
					item.fontFamily				= this.item.fontFamily;
					item.align					= this.item.align;
					item.outlineC				= this.item.outlineC;
					item.outlineW				= this.item.outlineW;
					if (typeof this.item.weight != 'undefined')
						item.weight 			= this.item.weight;
					
					if (typeof this.item.Istyle != 'undefined')
						item.Istyle 			= this.item.Istyle;
						
					if (typeof this.item.decoration != 'undefined')
						item.decoration 		= this.item.decoration;
				}
				else if(item.type == 'clipart')
				{
					item.change_color	= this.item.change_color;
					item.title			= this.item.title;
					item.file_name		= this.item.file_name;
					item.file			= this.item.file;
					item.thumb			= this.item.thumb;
					item.url			= this.item.url;							
					
					if (typeof this.item.colors != 'undefined')
						item.colors			= this.item.colors;
					
					if (typeof this.item.confirmColor != 'undefined')
						item.confirmColor	= this.item.confirmColor;
					else
						item.confirmColor = 0;
					
					if(typeof this.item.clipart_id != 'undefined'){item.clipart_id = this.item.clipart_id;}
				}
				jQuery(document).triggerHandler( "exports.item.design", [item, this]);
				
				vectors[i] = item;
				i++;
			});
			return vectors;
		}
	},
	imports:{
		vector: function(str){
			if (str == '') return false;
			
			var postions = {front:0, back:1, left:2, right:3};
			var a 		 = document.getElementById('product-thumbs').getElementsByTagName('a');
			if(typeof str == 'string')
			{
				str = str.replace('{ front":{', '{"front":{');
				try{
					var vectors = eval('('+str+')');
				}
				catch (e){
					var vectors = jQuery.parseJSON(str);
				}
			}
			else
			{
				var new_str = JSON.stringify(str);
				var str = new_str.replace(/\\\\/g, "");
				var vectors = eval('('+str+')');
			}
			jQuery.each(vectors, function(postion, view){
				if ( Object.keys(view).length > 0 && jQuery('#view-'+postion+' .product-design').html() != '' )
				{
					var items = [];
					jQuery.each(view, function(i, item){
						items[i] = item;
					});
					items.sort(function(obj1, obj2) {
						return obj1.zIndex - obj2.zIndex;
					});
					design.products.changeView( a[postions[postion]], postion );			
					jQuery.each(items, function(i, item){
						design.item.imports(item);						
					});
				}
			});
			design.team.changeView();
			design.item.unselect();
			setTimeout(function(){
				var markAll = jQuery('.labView.active .mask-items-view .mask-all-item');
				if(markAll.length == 0)
				{
					var a = jQuery('#product-thumbs a');
					if(design.importIdeaFlg != 1)
					{
						a[0].click();
					}
				}
				jQuery('.drag-item').removeClass('add-by-import');
				design.importIdeaFlg = 0;
			}, 1000);
		},
		productColor: function(color){
			design.mask(true);
			var i = 0;
			jQuery('#product-list-colors .bg-colors').each(function(){
				if(jQuery(this).data('color') == color)
				{
					design.products.changeColor(this, i);
					design.mask(false);
				}
				i++;
			});
			design.mask(false);
		},
		loadDesign: function(key, user_id){
			design.mask(true);
			var self = this;
			
			jQuery.ajax({
				dataType: "json",
				url: siteURL + "ajax.php?type=loadDesign&user_id="+user_id+"&design_id="+key		
			}).done(function( data ) {
				if (data.error == 1)
				{
					alert_text(data.msg);
				}
				else
				{
					design.design_id 	= data.design.id;
					design.design_file 	= data.design.image;
					design.designer_id 	= data.design.user_id;
					design.design_key 	= data.design.design_id;
					design.fonts 		= data.design.fonts;
					jQuery('#design-save-title').val(data.design.title);
					jQuery('#design-save-description').val(data.design.description);
					if (design.fonts != '')
					{
						jQuery('head').append(design.fonts);
					}
					if (typeof data.design.vectors != 'undefined')
						self.vector(data.design.vectors);
					if (typeof data.design.vector != 'undefined')
						self.vector(data.design.vector);
					if (typeof data.design.teams != 'undefined' && data.design.teams != '')
					{
						design.teams = eval ("(" + data.design.teams + ")");
						design.team.load(design.teams);
					}
					
					jQuery(document).triggerHandler( "after.load.design", data);
					
					design.ajax.getPrice();
				}
			}).always(function(){
				design.mask(false);
			});
		}
	},
	share:{
		ini: function(type)
		{
			jQuery(document).on('before.save.design', function(event, data){
				data.is_share = 1;
			});
			design.mask(true);
			jQuery(document).triggerHandler( "start.save.design");
			design.svg.items('front', design.saveDesign);
		},		
		facebook: function(){
			var link = jQuery('#link-design-saved').val();			
			link = 'https://www.facebook.com/sharer/sharer.php?u='+encodeURI(link);
			window.open(link, "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=400, height=400");
		},
		twitter: function(){
			var link = jQuery('#link-design-saved').val();
			if (link != '')
			{
				link = 'https://twitter.com/home?status='+lang.share.title+' '+encodeURI(link);
			}
			window.open(link, "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=400, height=400");
		},
		pinterest: function(){
			var link = jQuery('#link-design-saved').val();
			if (link != '')
			{				
				link = 'https://pinterest.com/pin/create/button/?url='+link+'&media='+siteURL + design.design_file +'&description='+lang.share.title;
			}
			window.open(link, "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=400, height=400");
		},
		copyURL: function(){
			var input = jQuery('#link-design-saved');
			input[0].select();
			document.execCommand("Copy");
  			jQuery('.copy-status').show();
  			setTimeout(function(){
  				jQuery('.copy-status').hide();
  			}, 2000);
		}
	}
}

$jd(document).ready(function(){
	design.ini();
	
	$jd('#design-area').click(function(e){
		var topCurso=!document.all ? e.clientY: event.clientY;
		var leftCurso=!document.all ? e.clientX: event.clientX;
		var mouseDownAt = document.elementFromPoint(leftCurso,topCurso);
		if( mouseDownAt.parentNode.className == 'product-design'
			|| mouseDownAt.parentNode.className == 'div-design-area'			
			|| mouseDownAt.parentNode.className == 'labView active'
			|| mouseDownAt.parentNode.className == 'content-inner' )
		{
			jQuery('.drag-item').removeClass('add-by-import');
			if(typeof design.mobile != 'undefined')
			{
				design.mobile.unselectItemDesign();
			}
			else
			{
				design.item.unselect();
			}
			e.preventDefault();
			$jd('.drag-item').click(function(){design.item.select(this)});
		}
	});
});

function alert_text(msg){
	var text = msg.replace(/&#39;/g, "\'");
	alert(text);
}
function confirm_text(msg){
	var text = msg.replace(/&#39;/g, "\'");
	var check = confirm(text);
	return check;
}

function b64EncodeUnicode(str) {	
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}

// setCookie('name', 'value', days)
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function parseColor(color) {
	var arr = [];
	
	if (color == 'none')
	{
		arr.hex = 'none';
		return arr;
	}
	
	var Obj = new RGBColor(color);
	if (Obj.ok)
	{
		arr.hex = Obj.toHex();
	}
	else
	{
		arr.hex = 'none';
	}
	return arr;
}

(function($){
    $.fn.serializeObject = function(){

        var self = this,
            json = {},
            push_counters = {},
            patterns = {
                "validate": /^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,
                "key":      /[a-zA-Z0-9_]+|(?=\[\])/g,
                "push":     /^$/,
                "fixed":    /^\d+$/,
                "named":    /^[a-zA-Z0-9_]+$/
            };


        this.build = function(base, key, value){
            base[key] = value;
            return base;
        };

        this.push_counter = function(key){
            if(push_counters[key] === undefined){
                push_counters[key] = 0;
            }
            return push_counters[key]++;
        };

        $.each($(this).serializeArray(), function(){

            if(!patterns.validate.test(this.name)){
                return;
            }

            var k,
                keys = this.name.match(patterns.key),
                merge = this.value,
                reverse_key = this.name;

            while((k = keys.pop()) !== undefined){

                reverse_key = reverse_key.replace(new RegExp("\\[" + k + "\\]$"), '');

                if(k.match(patterns.push)){
                    merge = self.build([], self.push_counter(reverse_key), merge);
                }

                else if(k.match(patterns.fixed)){
                    merge = self.build([], k, merge);
                }

                else if(k.match(patterns.named)){
                    merge = self.build({}, k, merge);
                }
            }

            json = $.extend(true, json, merge);
        });

        return json;
    };
})(jQuery);

function scrollQuantity(){
	var pos = jQuery('#tool_cart').find('.p-color-sizes').position();
	if(typeof pos != 'undefined')
	{
		jQuery('#tool_cart .p-color-sizes').find('input').css('border', '1px solid #ff0000');
		jQuery('#product-details').animate({ scrollTop: 0}, 0);
		pos = jQuery('#tool_cart').find('.p-color-sizes').position();
		jQuery('#product-details').animate({ scrollTop: pos.top}, 1000);
	}else
	{
		pos = jQuery('#tool_cart').find('.product-quantity').position();
		if(typeof pos != 'undefined')
		{
			jQuery('#quantity').css('border', '1px solid #ff0000');
			jQuery('#product-details').animate({ scrollTop: 0}, 0);
			pos = jQuery('#tool_cart').find('.product-quantity').position();
			jQuery('#product-details').animate({ scrollTop: pos.top}, 1000);
		}
	}
};

function appMinify()
{
	setTimeout(function(){
		getFilesCSS();
	}, 2000);
	setTimeout(function(){
		getFilesJS();
	}, 4000);
}
function createCache(files, is_admin, type)
{
	var posts = {admin: is_admin, type: type};
	if(files.length > 0)
	{
		posts.files = files;
	}
	if(typeof design.mobile != 'undefined')
	{
		posts.extra = 'mobile';
	}
	else if(typeof is_admin_editor != 'undefined' && type == 'js')
	{
		posts.extra = 'admin';
	}
	jQuery.post(siteURL+'admin/index.php?/cache/create', posts, function(data, textStatus, xhr) {
		if(data === 'load')
		{
			createCache([], is_admin, type);
		}
	});
}
function getFilesJS()
{
	var files = [], i=0;
	jQuery('head script.minify-file').each(function(){
		var url 	= jQuery(this).attr('src');
		if(url != undefined)
		{
			if(url.indexOf('/tshirtecommerce/') > 0)
			{
				var option = url.split('/tshirtecommerce/');
				files[i] = option[1];
				i++;
			}
		}
	});
	if(files.length > 0)
	{
		createCache(files, 0, 'js');
	}
}
function getFilesCSS()
{
	var files = [], i=0;
	jQuery('head link.minify-file').each(function(){
		var url 	= jQuery(this).attr('href');
		if(url.indexOf('/tshirtecommerce/') > 0)
		{
			var option = url.split('/tshirtecommerce/');
			files[i] = option[1];
			i++;
		}
	});
	if(files.length > 0)
	{
		createCache(files, 0, 'css');
	}
}

jQuery(function() {
	appMinify();
    jQuery(".arrow-mobile").click(function() {
        var e = jQuery(this).attr("data");
        var t = jQuery("#dg-" + e).css("display");
        if (e == "right") {
            if (t == "none") {                
                jQuery("#dg-right").show();
                jQuery(this).addClass('active').css({
                    left: "-28px",
                    right: "auto"
                });
				jQuery(this).parent().css({
					'bottom': 'auto',
					'top': '60px'
				});
                jQuery(".accordion").accordion("refresh")
            } else {              
                jQuery("#dg-right").hide();
                jQuery(this).removeClass('active').css({
                    left: "auto",
                    right: "4px"
                });
				jQuery(this).parent().css({
					'bottom': '60px',
					'top': 'auto'
				});
            }
        }
        if (e == "left") {
            if (t == "none") {
                jQuery(this).children("i").attr("class", "glyphicons chevron-left");
                jQuery("#dg-left").show();
                jQuery(this).css({
                    left: "auto",
                    right: "-32px"
                });
                jQuery(".accordion").accordion("refresh")
            } else {
                jQuery(this).children("i").attr("class", "glyphicons chevron-right");
                jQuery("#dg-left").hide();
                jQuery(this).css({
                    left: "0",
                    right: "auto"
                })
            }
        }
    })
});

function gridArt(elem)
{
	var e = jQuery(elem);
	e.isotope({
		itemSelector: '.box-art',
		percentPosition: true,
		masonry: {
			columnWidth: '.box-art'
		}
	});

	e.find('img').on('load', function(){
		var e = jQuery(elem);
		e.isotope( 'reloadItems' ).isotope();
	});
};﻿var sizesCn = {};
// change size of box design width product
function change_box_design()
{
	jQuery('#app-wrap .labView').css({'width':max_box_width+'px', 'height':max_box_height+'px'}); 
}

jQuery(document).on('after.load.design', function(event, data){
	var tdesign = data.design;
	if(typeof tdesign.options != 'undefined' && typeof tdesign.options.is_color_picker != 'undefined' && tdesign.options.is_color_picker == 1)
	{
		if(jQuery('.bg-more-colors').length)
		{
			jQuery('#product-list-colors .bg-colors').removeClass('active');
			var div = jQuery('#product-list-colors .bg-more-colors');
			div.data('color', tdesign.color);
			div.addClass('active');
			design.products.changeColor(div[0], 0);
		}
	}
});

jQuery(document).ready(function(){
	jQuery('#app-wrap .labView').append('<div class="mask-items-view"><div class="mask-items-area"><div class="mask-item"></div></div></div>');
		
	jQuery.each(['front', 'back', 'left', 'right'], function(i, view){
		if (items.area[view] != '' && items.area[view] != '')
		{
			if(items.params[view] == '')
			{
				items.params[view] = "{'page':'21.0x29.7','width':'21.0','height':'29.7','lockW':true,'lockH':true,'shape':'square','shapeVal':0}";
			}
			var params = eval ("(" + items.params[view] + ")");
			var area = eval ("(" + items.area[view] + ")");
			
			sizesCn[view] =  params.width / area.width;
		}
	});
	
	jQuery(document).keydown(function( event ) {		
		if (jQuery('.labView.active .drag-item-selected').length > 0)
		{
			var check = jQuery('#enter-text').is(":focus"); // disable move when focus text box.
			var key = event.which;
			if(typeof text_editable == 'undefined') text_editable = false;
			if(check == false && text_editable == false)
			{
				if (key == 37)
				{
					design.tools.move('left');
				}
				else if (key == 39)
				{
					design.tools.move('right');
				}
				else if (key == 38)
				{
					event.preventDefault(); // disable scroll window.
					design.tools.move('up');
				}
				else if (key == 40)
				{
					event.preventDefault(); // disable scroll window.
					design.tools.move('down');
				}
				else if (key == 46)
				{
					design.tools.remove();
				}
			}
		}
	});
	
	// product color on mobile
	if ( jQuery('.product-color-active .product-color-active-value').length > 0)
	{
		var color_html = jQuery('#product-list-colors .bg-colors.active').html();
		jQuery('.product-color-active .product-color-active-value').html(color_html);
		
		jQuery(document).on('changeColor.product.design product.change.design', function(){
			var color_html = jQuery('#product-list-colors .bg-colors.active').html();
			jQuery('.product-color-active .product-color-active-value').html(color_html);
		});
	}
	
	jQuery('#dg-fonts').on('show.bs.modal', function() {
		var e    = design.item.get();
		if(typeof e[0] == 'undefined')
		{
			return false;
		}
		var font = e[0].item.fontFamily;
		var tmp  = '';
		jQuery('#dg-fonts .box-font').removeClass('active');
		jQuery('#dg-fonts .box-font').each(function() {
			var tmpFont = jQuery(this).find('h2').css('font-family');
			if(tmpFont == undefined)
			{
				tmpFont = jQuery(this).find('img').attr('alt');
			}
			if(tmpFont.indexOf(font) != -1) {
				if(tmp == '')
				{
					jQuery(this).addClass('active');
					tmp = tmpFont;
				}
				else
				{
					if(tmpFont.length < tmp.length)
					{
						jQuery('#dg-fonts .box-font').removeClass('active');
						jQuery(this).addClass('active');
					}
				}
			}
		});
	});
	
	change_box_design()
});

jQuery(document).on('before.product.change.design', function(event, product){
	lang.text.front = lang.text.front_old;
	lang.text.back = lang.text.back_old;
	lang.text.left = lang.text.left_old;
	lang.text.right = lang.text.right_old;
	if(typeof product.view_label != 'undefined')
	{
		if(typeof product.view_label.front != 'undefined' && product.view_label.front != '')
		{
			lang.text.front = product.view_label.front;
		}
		if(typeof product.view_label.back != 'undefined' && product.view_label.back != '')
		{
			lang.text.back = product.view_label.back;
		}
		if(typeof product.view_label.left != 'undefined' && product.view_label.left != '')
		{
			lang.text.left = product.view_label.left;
		}
		if(typeof product.view_label.right != 'undefined' && product.view_label.right != '')
		{
			lang.text.right = product.view_label.right;
		}
	}
});

jQuery(document).on("change.product.design", function(event, product){
	if (typeof event.namespace == 'undefined' || event.namespace != 'design.product') return;
	
	jQuery.each(['front', 'back', 'left', 'right'], function(i, view){
		if (items.area[view] != '' && items.area[view] != '')
		{
			var params = eval ("(" + items.params[view] + ")");
			var area = eval ("(" + items.area[view] + ")");
			
			sizesCn[view] =  params.width / area.width;
		}
	});
	
	if(typeof product.box_width != 'undefined')
	{
		max_box_width = product.box_width;
	}
	else
	{
		max_box_width = 500;
	}
	if(typeof product.box_height != 'undefined')
	{
		max_box_height = product.box_height;
	}
	else
	{
		max_box_height = 500;
	}
	change_box_design();
	if(typeof design.mobile == 'undefined')
	{
		window.parent.setHeigh(jQuery('#dg-wapper').height());
	}
	if(typeof layout_menu_bottom != 'undefined')
	{
		var col_center_h = jQuery('.col-center').height();
		jQuery('.col-left').css('top', col_center_h+'px');
	}
});

jQuery(document).on('move.tool.design', function(event, elm){
	var style = jQuery(elm).attr('style');
	jQuery(elm).parents('.labView').find('.mask-item').attr('style', style);
});

jQuery(document).on('select.item.design', function(event, e){
	
	var id = jQuery('.labView.active').attr('id');
	var view = id.replace('view-', '');
	
	if (jQuery(e).length == 0)
	{
		var elm = design.item.get();
		var e = elm[0];
	}
	if (typeof e == 'undefined') return;
	var style = jQuery(e).parents('.design-area').attr('style');
	jQuery(e).parents('.labView').find('.mask-items-area').attr('style', style);
	jQuery(e).parents('.labView').find('.mask-items-view').css('display', 'block');
	
	var style = jQuery(e).attr('style');
	var item = jQuery(e).parents('.labView').find('.mask-item');
	item.attr('style', style);
	var width = item.width();
	width = parseInt(width) + 4;
	item.css('width', width+'px');
	
	// update size of item
	if (jQuery('.labView.active .mask-item .item-info').length == 0)
	{
		item.append('<span class="item-info"></span>');
	}
	
	if (jQuery('.labView.active .mask-item .item-mask-move').length == 0)
	{
		item.append('<div class="item-mask-move fa fa fa-arrows"></div>');
	}
	var width   = jQuery(e).css('width').replace('px', '');
	var height  = jQuery(e).css('height').replace('px', '');
	var type = jQuery(e).data('type');
	jQuery(document).triggerHandler( "info.size.design", [type, width, height]);

	var css_h = parseInt(height) + 2;
	item.css('height', css_h+'px');
	
	// resize
	var type = e.item.type;	
	if(e.item.lockedProportion == 1)
	{
		var auto = false;
		var handles = 'e, s, se';
		jQuery('#'+type+'-lock').prop('checked', true);
	}
	else
	{
		var auto = true;
		var handles = 'se';
		jQuery('#'+type+'-lock').prop('checked', false);
	}
	design.item.lockpropo = auto;
	if (jQuery('.labView.active .mask-item').hasClass('ui-resizable'))
		jQuery('.labView.active .mask-item').resizable( "destroy" );
	var tempW = 0;
	item.resizable({
		minHeight: 5, 
		aspectRatio: auto,
		minWidth: 5,		
		handles: 'ne, se, sw, nw',
		alsoResize: ".drag-item.drag-item-selected",
		start: function( event, ui ){
			tempW = ui.originalSize.width;
			jQuery(document).triggerHandler( "resizeStart.item.design", [ui, e]);
		},
		stop: function( event, ui ) {
			jQuery(document).triggerHandler( "resize.item.design", [ui, e]);
			design.print.size();
			jQuery(document).triggerHandler( "update.design" );
			setTimeout(function(){
				design.ajax.getPrice();
			}, 500);
		},
		resize: function(event,ui){
			var $left   = parseInt(ui.position.left),
				$top    = parseInt(ui.position.top),
				$width  = parseInt(jQuery(e).css('width').replace('px', '')),
				$height = parseInt(jQuery(e).css('height').replace('px', ''));

			var svg     = jQuery(e).find('svg');
			svg[0].setAttributeNS(null, 'width', $width);
			svg[0].setAttributeNS(null, 'height', $height);
			svg[0].setAttributeNS(null, 'preserveAspectRatio', 'none');

			jQuery(e).css('left', ui.position.left+'px');
			jQuery(e).css('top', ui.position.top+'px');
			
			if(jQuery(e).data('type') == 'clipart')
			{
				var file = jQuery(e).data('file');
				if(file.type == 'image' || jQuery(e).find('image').length > 0)
				{
					if(typeof file.type == 'undefined')
					{
						file = {
							'type': 'image',
						};
						jQuery(e).data('file', file);
					}
					var imgSvg = design.item.get().find('svg');
					var gEle   = jQuery(imgSvg[0]).find('g');
					flipFlg    = true;
					if(gEle.attr('transform') != undefined)
					{
						if(gEle.attr('transform').indexOf('scale(-1,1)') != -1) {
							flipFlg = false;
						}
					}
					var img = jQuery(e).find('image');
					img[0].setAttributeNS(null, 'width', $width);
					img[0].setAttributeNS(null, 'height', $height);
					
					if (flipFlg == false)
					{
						jQuery(img[0]).parent().attr('transform', 'translate('+$width+', 0) scale(-1,1)');
					}
				}
			}
			var type = jQuery(e).data('type');
			jQuery(document).triggerHandler( "info.size.design", [type, $width, $height]);
			jQuery(document).triggerHandler( "resizzing.item.design", [ui, e]);
		}
	});
	
	var top = 0, left = 0; recoupLeft = 0, recoupTop = 0;
	var move_axis = false;
	var disable_move = false;
	if(typeof e.item.move_x != 'undefined' && e.item.move_x === false)
	{
		move_axis = 'y';
		if(typeof e.item.move_y != 'undefined' && e.item.move_y === false)
		{
			disable_move = true;
		}
	}
	else if(typeof e.item.move_y != 'undefined' && e.item.move_y === false)
	{
		move_axis = 'x';
	}
	item.draggable({
		scroll: false,
		axis: move_axis,
		start: function( event, ui ){
			jQuery(document).triggerHandler( "dragStart.item.design", ui);
			top = ui.position.top;
			left = ui.position.left;
			var t = design.convert.px(jQuery(this).css('top'));
			var l = design.convert.px(jQuery(this).css('left'));
			t = isNaN(t) ? 0 : t;
			l = isNaN(l) ? 0 : l;
			recoupLeft = l - left;
			recoupTop  = t - top;
			item.children('div').hide();
		},
		drag:function(event, ui){
			if(move_axis == 'x')
			{
				ui.position.left += recoupLeft;
				jQuery(e).css('left', ui.position.left);
			}
			else if(move_axis == 'y')
			{
				ui.position.top  += recoupTop;
				jQuery(e).css('top', ui.position.top);
			}
			else
			{
				ui.position.left += recoupLeft;
				ui.position.top  += recoupTop;
				jQuery(e).css('left', ui.position.left);
				jQuery(e).css('top', ui.position.top);
			}
			jQuery(document).triggerHandler( "draging.item.design", ui);
		},
		stop: function( event, ui ) {
			var width = jQuery(this).width();
			var height = jQuery(this).height();
			var areaW = jQuery(this).parent().width();
			var areaH = jQuery(this).parent().height();
			if (
				(ui.position.left + width) < 5 
				|| (ui.position.top + height) < 5
				|| (ui.position.left + 5) > areaW
				|| (ui.position.top + 5) > areaH
			)
			{
				jQuery(e).css('left', left);
				jQuery(e).css('top', top);
				jQuery(this).css('left', left);
				jQuery(this).css('top', top);
			}
			jQuery(document).triggerHandler( "move.item.design", ui);
			jQuery(document).triggerHandler( "update.design" );
			setTimeout(function(){
				design.ajax.getPrice();
			}, 500);
			item.children('div').show();
		}
	});
	if(disable_move === true)
	{
		item.draggable( "disable" );
	}
	else
	{
		item.draggable( "enable" );
	}

	if(typeof e.item.resize != 'undefined' && e.item.resize === false)
	{
		item.resizable( "disable" );
	}
	else
	{
		item.resizable( "enable" );
	}
	
	// add remove button
	if(typeof e.item.remove != 'undefined' && e.item.remove === false)
	{
		jQuery('.mask-item .item-mask-remove-on').css('visibility', 'hidden');
	}
	else
	{
		jQuery('.mask-item .item-mask-remove-on').css('visibility', 'visible');
		
		if (jQuery('.labView.active .mask-item .item-mask-remove-on').length == 0)
		{
			var div = document.createElement('div');
			div.className = 'item-mask-remove-on fa fa-trash-o ui-resizable-handle';
			div.setAttribute('title', lang.text.remove);
			jQuery(div).bind('click', function(){design.item.mask.remove();});
			jQuery(item).append(div);		
		}		
	}
	
	// rotate	
	if(typeof e.item.allow_rotate != 'undefined' && e.item.allow_rotate === false)
	{
		jQuery('.mask-item .item-rotate-on').css('visibility', 'hidden');
	}
	else
	{
		jQuery('.mask-item .item-rotate-on').css('visibility', 'visible');
		
		var deg = jQuery(e).data('rotate');
		jQuery('#' + type + '-rotate-value').val(deg);
		if (typeof deg == 'undefined')
		{
			deg = 0;
		}
		else
		{
			if(deg < 180)
			{
				deg = deg * Math.PI / 180;
			}
			else
			{
				deg = -(360 - deg) * Math.PI / 180;
			}
		}
		item.data('angle', deg);
		item.rotatable({
			angle: deg, 
			rotate: function(event, angle){
				var deg = Math.round(angle.r);
				if(deg < 0) deg = 360 + deg;
				jQuery('#' + type + '-rotate-value').val(deg);
				jQuery(e).data('rotate', deg);
				
				var radian = deg * Math.PI / 180;
				//jQuery(e).rotatable("setValue", radian);
				design.item.mask.rotate(jQuery(e), radian);
			}
		});
	}
	var itemWidthVal  = jQuery('#'+type+'-width');
	var itemHeightVal = jQuery('#'+type+'-height');
	if(typeof design.mobile == 'undefined')
	{
		itemWidthVal[0].removeAttribute('readonly');
		itemWidthVal[0].removeAttribute('disabled');
		itemHeightVal[0].removeAttribute('readonly');
		itemHeightVal[0].removeAttribute('disabled');
	}
	
	itemWidthVal.change(function(e) {
		var txtH = (parseInt(design.item.get().css('height').replace('px', '')) * sizesCn[view]).toFixed(1);
		var txtW = (parseInt(design.item.get().css('width').replace('px', '')) * sizesCn[view]).toFixed(1);
		if(itemWidthVal.val() == '') {
			return false;
		}
		var newW = parseFloat(itemWidthVal.val()).toFixed(1);
		var newH;
		jQuery(document).triggerHandler( "beforechangesize.item.design", [txtW, txtH]);
		if(jQuery('#'+type+'-lock').prop('checked') == false)
		{
			newH = (newW * txtH / txtW).toFixed(1);
		}
		else
		{
			newH = txtH;
		}
		if(typeof design.mobile != 'undefined' && typeof design.mobile.zoom != 'undefined')
		{
			newW  = width / design.mobile.zoom;
			newH = height / design.mobile.zoom;
		}
		itemWidthVal.val(newW);
		itemHeightVal.val(newH);
		if(typeof newW == 'string')
			newW = parseFloat(newW);
		if(typeof newH == 'string')
			newH = parseFloat(newH);
		newW = newW.toFixed(1);
		newH = newH.toFixed(1);
		jQuery('.labView.active .mask-item .item-info').html(newW +' x '+ newH);
		changeSizeTextItem(e, newW / sizesCn[view], newH / sizesCn[view]);
		design.print.size();
		design.ajax.getPrice();
	});
	itemHeightVal.change(function(e) {
		var txtH = (parseInt(design.item.get().css('height').replace('px', '')) * sizesCn[view]).toFixed(1);
		var txtW = (parseInt(design.item.get().css('width').replace('px', '')) * sizesCn[view]).toFixed(1);
		if(itemHeightVal.val() == '') {
			return false;
		}
		var newH = parseFloat(itemHeightVal.val()).toFixed(1);
		var newW;
		jQuery(document).triggerHandler( "beforechangesize.item.design", [txtW, txtH]);
		if(jQuery('#'+type+'-lock').prop('checked') == false)
		{
			newW = (newH * txtW / txtH).toFixed(1);
		}
		else
		{
			newW = txtW;
		}
		if(typeof design.mobile != 'undefined' && typeof design.mobile.zoom != 'undefined')
		{
			newW  = width / design.mobile.zoom;
			newH = height / design.mobile.zoom;
		}
		itemWidthVal.val(newW);
		itemHeightVal.val(newH);
		if(typeof newW == 'string')
			newW = parseFloat(newW);
		if(typeof newH == 'string')
			newH = parseFloat(newH);
		newW = newW.toFixed(1);
		newH = newH.toFixed(1);
		jQuery('.labView.active .mask-item .item-info').html(newW +' x '+ newH);
		changeSizeTextItem(e, newW / sizesCn[view], newH / sizesCn[view]);
		design.print.size();
		design.ajax.getPrice();
	});

	if(typeof e.item.allow_edit != 'undefined' && e.item.allow_edit === false)
	{
		jQuery('.toolbar-change').hide();
		jQuery('#enter-text').hide();
	}
	else
	{
		jQuery('.toolbar-change').show();
		jQuery('#enter-text').show();
	}

	var text_edit = lang.text.edit_text;
	if(type == 'clipart')
	{
		text_edit = lang.text.edit_clipart;
	}
	else if(type == 'team')
	{
		text_edit = lang.team.title;
	}
	jQuery('.popover-title').children('span').html(text_edit);
	jQuery('.design-area').css('border-color', '#666666');
	jQuery(e).draggable({ disabled: true });
});

jQuery('.rotate-refresh').click(function(){
	design.item.refresh('rotate');
	jQuery('.labView.active .mask-item').css('transform', 'rotate(0rad)');
});

jQuery('.rotate-value').on("focus change", function(){
	var e = design.item.get();
	var deg = jQuery(this).val();
	if(deg > 360) deg = 360;
	if(deg < 0) deg = 0;
	var angle = (jQuery(this).val() * Math.PI)/180;
	e.rotatable("setValue", angle);
	
	design.item.mask.rotate(jQuery('.labView.active .mask-item'), angle);
});

// remove name, number
jQuery(document).on('remove.team.design', function(event){
	jQuery('.mask-items-view').css('display', 'none');
});

jQuery(document).on('unselect.item.design remove.item.design', function(event, e){
	var item = jQuery('.labView.active .mask-items-view');
	item.css('display', 'none');
	jQuery('.design-area').css('border-color', 'transparent');
});

jQuery(document).on('size.update.text.design', function(event, w, h){
	jQuery('.labView.active .mask-item').css({'width':w+'px', 'height':h+'px'});
	design.text.sizeFontTxt();
});

design.item.mask = {
	remove: function(){
		var e = design.item.get();
		var elm = e.children('.item-remove-on');
		if (elm.length > 0)
		{
			design.item.remove(elm[0]);			
		}
	},
	rotate: function(el, angle){
		el.css('transform','rotate(' + angle + 'rad)');
		el.css('-moz-transform','rotate(' + angle + 'rad)');
		el.css('-webkit-transform','rotate(' + angle + 'rad)');
		el.css('-o-transform','rotate(' + angle + 'rad)');
	}
};

jQuery(document).on('ini.design change.product.design', function(event){
	if (typeof event.namespace == 'undefined') return;
	
	jQuery("#tool_cart select, input[type='radio'], input[type='checkbox']").change(function(){
		design.ajax.getPrice();		
	});

	jQuery( "#quantity" ).spinner({
		min: 0,
      	max: 1000,
      	stop: function(event, ui){
			design.ajax.getPrice();
		}
	}).parent().addClass('field-quantity');

});

jQuery(document).on('update.design', function(){
	if(jQuery('.drag-item').length > 0)
	{
		jQuery('.sizes-color-used').show();
	}
	else
	{
		jQuery('.sizes-color-used').hide();
	}
});

jQuery(document).on('before.create.item.design', function(event, span){
	span.item.lockedProportion = 0;
	if (jQuery('.labView.active .mask-item').hasClass('ui-resizable'))
		jQuery('.labView.active .mask-item').resizable( "destroy" );
});

jQuery(document).on('info.size.design', function(event, type, width, height){
	var view = design.products.viewActive();
	width   = parseFloat(width) * sizesCn[view];
	height  = parseFloat(height) * sizesCn[view];
	var viewDes = jQuery('#design-area .labView.active .design-area');

	var zoom    = -1;
	if(viewDes.hasClass('zoom')) {
		zoom   = viewDes.data('zoom');
		width  = width / zoom;
		height = height / zoom;
	}
	if(typeof design.mobile != 'undefined' && typeof design.mobile.zoom != 'undefined')
	{
		width  = width / design.mobile.zoom;
		height = height / design.mobile.zoom;
	}

	width = width.toFixed(1);
	height = height.toFixed(1);
	jQuery('.labView.active .mask-item .item-info').html(width +' x '+ height);
	jQuery('#'+type+'-width').val(width);
	jQuery('#'+type+'-height').val(height);
});

jQuery(document).on('ini.design', function(event){
	jQuery('.ui-lock').click(function(){		
		var e = design.item.get();
		if (jQuery(this).is(':checked') == true)
		{
			e[0].item.lockedProportion = 1;
		}
		else
		{
			e[0].item.lockedProportion = 0;
		}
		if (typeof e[0] != 'undefined')
		{
			jQuery('.labView.active .mask-item').resizable( "destroy" );
			design.item.unselect();
			design.item.select(e[0]);
		}
	});
});

jQuery(document).on('beforechangefont.item.design', function(width, height) {
	var item   = design.item.get();
	if(item.length == 0) return false;
	var id     = jQuery('.labView.active').attr('id');
	var view   = id.replace('view-', '');
	var width  = (parseInt(item.css('width').replace('px', '')) * sizesCn[view]).toFixed(1);
	var height = (parseInt(item.css('height').replace('px', '')) * sizesCn[view]).toFixed(1);
	if(typeof design.mobile != 'undefined' && typeof design.mobile.zoom != 'undefined')
	{
		width  = width / design.mobile.zoom;
		height = height / design.mobile.zoom;
	}
	width = parseInt(width);
	height = parseInt(height);
	width = width.toFixed(1);
	height = height.toFixed(1);
	jQuery('.labView.active .mask-item .item-info').html(width +' x '+ height);
	jQuery('#text-width').val(width);
	jQuery('#text-height').val(height);
});

/* Start create thumb of design (not added product images) */
var thumbs_area = {};
jQuery(document).on('end.canvas.design', function(event, position){
	thumbs_area[position] = design.tmpRect;
});
jQuery(document).on('before.save.design', function(event, data){
	var thumbs = {};
	jQuery.each(design.output, function(view, val){
		if(view.indexOf('nobg') > 0)
		{
			var position = view.replace('nobg', '');
			var canvas = design.output[view];
			if(typeof thumbs_area[position] != 'undefined' && canvas.width > 1)
			{
				var area = thumbs_area[position];
				var new_canvas = document.createElement('canvas');
				new_canvas.width = area.area_w;
				new_canvas.height = area.area_h;
				var context = new_canvas.getContext('2d');
				context.drawImage(canvas, area.left, area.top);
				thumbs[position] = new_canvas.toDataURL();
			}
		}
	});
	data.thumbs = thumbs;
});
/* end create thumb */

var changeSizeTextItem = function(e, newW, newH) {
	var item = design.item.get();
	var svg  = item.find('svg');
	var mas_w = newW + 2;
	var mas_h = newH + 2;
	jQuery('.labView.active').find('.mask-item').css({
		'width' : mas_w + 'px',
		'height': mas_h + 'px'
	});
	item.css({
		'width' : newW + 'px',
		'height': newH + 'px'
	});
	svg[0].setAttribute('width', newW);
	svg[0].setAttribute('height', newH);
	svg[0].setAttribute('preserveAspectRatio', 'none');
	if(item.find('image').length != 0)
	{
		item.find('image')[0].setAttribute('width', newW);
		item.find('image')[0].setAttribute('height', newH);
	}
	jQuery(document).triggerHandler( "afterchangesize.item.design", [newW, newH]);
	e.preventDefault();
	e.stopImmediatePropagation();
	e.stopPropagation();
}
design.text.sizeFontTxt = function() {
	var item = design.item.get();
	if(typeof item[0] == 'undefined')
	{
		return false;
	}
	var svg  = item.find('svg');
	var txt  = item.find('text');
	var box  = svg[0].getAttribute('viewBox').split(' ');
	var zoom = box[2] / svg.attr('width');
	box[0]   = (txt[0].getBoundingClientRect().left - svg[0].getBoundingClientRect().left) * zoom;
	svg[0].setAttributeNS(null, 'viewBox', box.join(' '));
};
/*disable copy, save clipart*/
jQuery(document).ready(function () {
    jQuery("#dg-cliparts").on("contextmenu",function(e){
        return false;
    });
	jQuery('#dg-cliparts').bind('cut copy paste', function (e) {
        e.preventDefault();
    });
});
jQuery(document).on('load.item.design', function(event, img, e){
	if(typeof e.is_product != 'undefined' && e.is_product == 1)
	{
		jQuery(img).addClass('main-product-img');
	}
});;window.onbeforeunload = function(e) {
	if(enableAutoImport == '1' )
	{
		var dialogText = 'Are you sure?';
		e.returnValue = dialogText;
		return dialogText;
	}
	design.saveDesignToCookie();
};

design.saveDesignToCookie = function() {
	var vector = design.exports.vector();
	localStorage.setItem('productId-' + product_id, JSON.stringify(vector));
};

jQuery(document).on('ini.design', function(event) {
	if(enableAutoImport != '1' )
	{
		return false;
	}
	try {
		var str  = localStorage.getItem('productId-' + product_id);
		var href = location.href;
		if(href.indexOf('user=') > 0 || href.indexOf('cart_id=') > 0)
		{
			return false;
		}
		if(str != undefined)
		{
			design.imports.vector(str);
			if(design.isIE())
			{
				jQuery('.content-inner .drag-item svg').each(function() {
					removeErrorAttrIE(jQuery(this));
				});
			}
		}
	}
	catch (e)
	{
		return;
	}
});

jQuery(document).on('change.product.design', function(event, p) {
	try {
		if(event.namespace != 'design.product')
		{
			return false;
		}
		if(enableAutoImport != '1' )
		{
			return false;
		}
		var items = jQuery('.labView .design-area .content-inner span');
		if(items.length > 0)
		{
			return false;
		}
		var str = localStorage.getItem('productId-' + product_id);
		if(str != undefined)
		{
			design.imports.vector(str);
			if(design.isIE())
			{
				jQuery('.content-inner .drag-item svg').each(function() {
					removeErrorAttrIE(jQuery(this));
				});
			}
		}
	}
	catch (e)
	{
		return;
	}
});

var removeErrorAttrIE = function(svg) {
	svg.find('*').each(function() {
		if(this.nodeName == 'sodipodi:namedview')
		{
			jQuery(this).remove();
		}
		var attributeElement = this;
		var attLst = this.attributes;
		var removeArr = [];
		for(j = 0; j < attLst.length; j++) {
			var attr = attLst[j];
			if(attr.name.toLowerCase().indexOf('inkscape:') != -1 
				|| attr.name.toLowerCase().indexOf('xmlns:ns') != -1
				|| attr.name.toLowerCase().indexOf('ns1:') != -1
				|| attr.name.toLowerCase().indexOf('ns2:') != -1
				|| attr.name.toLowerCase().indexOf('ns3:') != -1
				|| attr.name.toLowerCase().indexOf('ns4:') != -1
				|| attr.name.toLowerCase().indexOf('ns5:') != -1
				|| attr.name.toLowerCase().indexOf('ns6:') != -1
				|| attr.name.toLowerCase().indexOf('ns7:') != -1
				|| attr.name.toLowerCase().indexOf('sodipodi:') != -1)
			{
				removeArr.push(attr.name);
			}
		}
		jQuery(removeArr).each(function() {
			attributeElement.removeAttribute(this);
		});
	});
};;design.myart.convertcolor = {
	ini: function(){
		var e = design.item.get();
		if(typeof e == 'undefined') return false;
		if(jQuery('.convertcolor-value').is(':checked'))
		{
			jQuery('#convert-colors').show();
			e[0].item.onecolor = photo_color_default;
			this.changeColor(e, photo_color_default);
		}
		else
		{
			e[0].item.onecolor = '';
			jQuery('#convert-colors').hide();
			this.restore(e);
		}
	},
	HexToRGB: function(hex){
		var Long = parseInt(hex.replace(/^#/, ""), 16);
		return {
			R: (Long >>> 16) & 0xff,
			G: (Long >>> 8) & 0xff,
			B: Long & 0xff
		};
	},
	addEvent: function(){
		setTimeout(function(){
			jQuery('#convert-colors .popover-content .bg-colors').attr('onclick', 'design.myart.convertcolor.setColor(this)');
		}, 100);
	},
	setColor: function(e){
		design.mask(true);
		var color = jQuery(e).data('color');		
		if(color == 'undefined') return false;
		var e = design.item.get();
		if(typeof e == 'undefined') return false;
		e[0].item.onecolor = '#'+color;
		jQuery('#art-change-color').css('background-color', '#'+color);
		this.changeColor(e, '#'+color);
	},
	changeColor: function(e, color){
		if(typeof e[0].item.oldsrc == 'undefined')
		{
			var newImg = jQuery(e).find('image');
			if(newImg.length == 0) return false;
			var src = newImg.attr('xlink:href');
			e[0].item.oldsrc = src;
		}
		else
		{
			var src = e[0].item.oldsrc;
		}
		var img = new Image();
		var canvas = document.createElement("canvas");
		var ctx = canvas.getContext("2d");
		design.mask(true);
		img.onload = function() {
			canvas.width = img.width;
			canvas.height = img.height;
			ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, img.width, img.height);
			var originalPixels = ctx.getImageData(0, 0, img.width, img.height);
			var currentPixels = ctx.getImageData(0, 0, img.width, img.height);
			
			var newColor = design.myart.convertcolor.HexToRGB(color);
			
			for(var I = 0, L = originalPixels.data.length; I < L; I += 4)
			{
				if(currentPixels.data[I + 3] > 0)
				{
					currentPixels.data[I] = newColor.R;
					currentPixels.data[I + 1] = newColor.G;
					currentPixels.data[I + 2] = newColor.B;
				}
			}
			ctx.putImageData(currentPixels, 0, 0);
			
			var data = canvas.toDataURL("image/png");
			
			var e = design.item.get();
			var newImg = jQuery(e).find('image');
			jQuery(newImg[0]).attr('xlink:href', data);
			img.onload = null;
			design.mask(false);
		}
		img.src = src;
	},
	restore: function(e){
		if(typeof e[0].item.oldsrc == 'undefined')
		{
			return false;
		}
		var src = e[0].item.oldsrc;
		var newImg = jQuery(e).find('image');
		if(newImg.length == 0) return false;
		newImg.attr('xlink:href', src);
			
	}
}
if(change_photo_color == 1)
{
	jQuery(document).on('select.item.design', function(event, e){
		if(typeof e == 'undefined' || e.item == 'undefined') return false;
		var item = e.item;
		if(item.type == 'clipart' && typeof item.file != 'undefined' && typeof item.file.type != 'undefined' && item.file.type == 'image')
		{
			jQuery('.toolbar-action-convertcolor').show();
			if(typeof item.onecolor != 'undefined' && item.onecolor != '')
			{
				jQuery('.convertcolor-value').prop('checked', true);
				jQuery('#convert-colors').show();
				jQuery('#art-change-color').css('background-color', '#'+item.onecolor);
			}
			else
			{
				jQuery('.convertcolor-value').prop('checked', false);
				jQuery('#convert-colors').hide();
				jQuery('#art-change-color').css('background-color', photo_color_default);
			}
		}
		else
		{
			jQuery('.toolbar-action-convertcolor').hide();
		}
	});
};/** definde avariable for check allow copy item */
var allowCopyFlg = true;

/** add button copy on toolbar */
jQuery(document).ready(function() {
	var toolbarVer = jQuery('#dg-help-functions .btn-group-vertical');
	if(toolbarVer.length > 0)
		toolbarVer.append('<span class="btn btn-default copyToolBtn" data-placement="left" data-toggle="tooltip" data-original-title="'+lang.text.copy+'" onclick="design.tools.copy(this)"><i class="fa fa-copy"></i></span>');
	else
	{
		jQuery('.btn-group-tools').append('<button class="btn btn-default dg-tooltip copyToolBtn" data-placement="left" title="'+lang.text.copy+'" onclick="design.tools.copy(this)"><i class="fa fa-copy"></i></button>');
	}
});

/** add process disable button copy when item is team */
jQuery(document).on("select.item.design", function(event, ele){
	var copyBtn = jQuery('#dg-help-functions .btn-group-vertical').find('.copyToolBtn');
	if(jQuery(ele).data('type') == 'team') 
	{
		copyBtn.css({
			'cursor' : 'not-allowed',
			'opacity': '0.5'
		});
	}
	else 
	{
		copyBtn.css({
			'cursor': 'pointer',
			'opacity': '1'
		});
	}
});

/** function copy item */
design.tools.copy = function(e) {
	var item = design.item.get();
	// case don't have item selected
	if(item.length == 0) 
	{
		return;
	}
	var item_c = {};
	var type   = item.data('type');
	var iStyle,	bStyle,	uStyle,	alignL,	alignC,	alignR,	outlineC, outlineW;
	jQuery(document).triggerHandler( "before.copy.design", type);
	// case item is limited
	if(!allowCopyFlg) 
	{
		return;
	}
	//item_c        = item[0].item;
	item_c.type   = type;
	item_c.svg    = item.find('svg').clone();
	item_c.width  = item.css('width').replace('px', '');
	item_c.height = item.css('height').replace('px', '');
	if(item.find('div.item-remove-on').length > 0) 
	{
		item_c.remove = true;
	}
	else 
	{
		item_c.remove = false;
	}
	if(item.find('div.item-edit-on').length > 0) 
	{
		item_c.edit = true;
	}
	else 
	{
		item_c.edit = false;
	}
	if(item.find('div.item-rotate-on').length > 0) 
	{
		item_c.rotate = true;
	}
	else 
	{
		item_c.rotate = false;
	}
	if(type == 'text') 
	{
		var txt = item.find('tspan').text();
		if(txt  == undefined) 
		{
			txt = item.find('textPath').text();
		}
		item_c.colors     = [];
		item_c.colors.push(item[0].item.color);
		item_c.text       = txt;
		item_c.color      = item[0].item.color;
		item_c.fontFamily = item[0].item.fontFamily;
		iStyle            = jQuery('#text-style-i').hasClass('active');
		bStyle            = jQuery('#text-style-b').hasClass('active');
		uStyle            = jQuery('#text-style-u').hasClass('active');
		alignL            = jQuery('#text-align-left').hasClass('active');
		alignC            = jQuery('#text-align-center').hasClass('active');
		alignR            = jQuery('#text-align-right').hasClass('active');
		outlineC          = item[0].item.outlineC;
		outlineW          = item[0].item.outlineW;
	}
	if(type == 'clipart') {
		var lyr             = jQuery('#layers .layer.active'); 
		var title           = lyr.find('span').text();
		var thumb           = lyr.find('img')[0].src;
		item_c.title        = title;
		item_c.thumb        = thumb;
		item_c.file         = item.data('file');
		item_c.clipart_id   = item[0].item.clipart_id;
		item_c.file_name    = item[0].item.file_name;
		item_c.change_color = item[0].item.change_color;
		item_c.confirmColor = item[0].item.confirmColor;
		item_c.edit         = item[0].item.edit;
		item_c.upload       = item[0].item.upload;
		var colors          = [];
		jQuery('#list-clipart-colors a').each(function() {
			colors.push(jQuery(this).data('color'));
		});
		item_c.colors      = colors;
	}
	if(type == 'team') 
	{
		return;
	}
	design.item.create(item_c);
	var itemN = design.item.get();
	if(item.find('div.item-rotate-on').length > 0) 
	{
		var matrix    = item.css('transform');
		var deg       = 0;
		var angle     = 0;
		if(matrix !== 'none') 
		{
			var values = matrix.split('(')[1].split(')')[0].split(',');
			var a      = values[0];
			var b      = values[1];
			deg        = Math.round(Math.atan2(b, a) * (180/Math.PI));
			angle      = Math.atan2(b, a);
		}
		jQuery('#' + item.data('type') + '-rotate-value').val(deg);
		jQuery(item_c).data('rotate', deg);
		itemN.css({
			'transform': 'rotate(' + angle + 'rad)'
		});
		jQuery('.mask-item.ui-draggable.ui-resizable').css({
			'transform': 'rotate(' + angle + 'rad)'
		});
	}
	if(type == 'text') 
	{
		var obj = itemN[0];
		if(iStyle) 
		{
			jQuery('#text-style-i').addClass('active');
			obj.item.Istyle = 'italic';
		};
		if(bStyle) 
		{
			jQuery('#text-style-b').addClass('active');
			obj.item.weight = 'bold';
		};
		if(uStyle) 
		{
			jQuery('#text-style-u').addClass('active');
			obj.item.decoration = 'underline';
		};
		if(alignL) 
		{
			jQuery('#text-align-left').addClass('active');
			jQuery('#text-align-center').removeClass('active');
			jQuery('#text-align-right').removeClass('active');
			obj.item.align = 'left';
		}
		else if(alignC) 
		{
			jQuery('#text-align-center').addClass('active');
			jQuery('#text-align-left').removeClass('active');
			jQuery('#text-align-right').removeClass('active');
			obj.item.align = 'center';
		}
		else if(alignR) 
		{
			jQuery('#text-align-right').addClass('active');
			jQuery('#text-align-center').removeClass('active');
			jQuery('#text-align-left').removeClass('active');
			obj.item.align = 'right';
		}
		obj.item.outlineC = outlineC;
		obj.item.outlineW = outlineW;
		if(outlineC != 'none') 
		{
			jQuery('.option-outline .dropdown-color').addClass('active').removeClass('bg-none');
		}
		if(outlineW != 0) 
		{
			jQuery('.option-outline .outline-value').html(outlineW);
		}
	}
	jQuery.each(item.data(), function (name, value) {
		itemN.data(name, value);
	});
	itemN.data('id', parseInt(itemN.attr('id').replace('item-', '')));
	if(item_c.type == 'clipart')
	{
		var svg = itemN.find('svg');
		design.item.setup(itemN[0].item);
	}
};;if(jQuery('.dg-product-name').length > 0)
{
	jQuery(document).on('product.change.design', function(event, product){
		jQuery('.dg-product-name').html(product.title);
	});	
};/**
 * @author tshirtecommerce - www.tshirtecommerce.com
 * @date: 2016-05-10
 * 
 * @copyright  Copyright (C) 2015 tshirtecommerce.com. All rights reserved.
 * @license   GNU General Public License version 2 or later; see LICENSE
 *
 */
jQuery(document).ready(function() {
	jQuery('#design-area .labView').each(function() {
		jQuery(this).append('<div class="fitErrorMess" style="display:none; position: absolute; width: 100%; top: 40px; color: red; font-weight: bold;"><span>' + fitItemErrMss + '</span></div>');
		jQuery(this).append('<div class="fitWarnMess" style="display:none; position: absolute; width: 100%; top: 40px; color: blue; font-weight: bold;"><span>' + fitItemWarnMss + '</span></div>');
	});
});
jQuery(document).on('after.create.item.design', function(event, span) {
	checkFitDesign();
});
jQuery(document).on('info.size.design', function(event, type, width, height) {
	checkFitDesign();
});
jQuery(document).on('afterchangesize.item.design', function(event, width, height) {
	checkFitDesign();
});
jQuery(document).on('select.item.design', function(event, e){
	var item = jQuery(e).parents('.labView').find('.mask-item');
	var recoupLeft = 0, recoupTop = 0;
	item.draggable({
		start: function( event, ui ){
			var t = design.convert.px(jQuery(this).css('top'));
			var l = design.convert.px(jQuery(this).css('left'));
			t = isNaN(t) ? 0 : t;
			l = isNaN(l) ? 0 : l;
			recoupLeft = l - ui.position.left;
			recoupTop  = t - ui.position.top;
		},
		drag:function(event, ui){
			ui.position.left += recoupLeft;
			ui.position.top  += recoupTop;
			jQuery(e).css('left', ui.position.left);
			jQuery(e).css('top', ui.position.top);
			checkFitDesign();
		}
	});
});
jQuery(document).on('size.update.text.design', function(event, w, h) {
	checkFitDesign();
});
jQuery(document).on('move.tool.design', function(event, e) {
	checkFitDesign();
});
jQuery(document).on('beforechangefont.item.design', function(event, w, h) {
	checkFitDesign();
});
jQuery(document).on('checkItem.item.design', function(event, check) {
	if(checkItemFitType == '1')
	{
		return false;
	}
	if(jQuery('.labView.active .fitErrorMess').css('display') != 'none')
	{
		alert(fitItemErrMss);
		check.status = false;
		check.callback = '';
	}
});
jQuery(document).on('product.change.design', function(event, p) {
	jQuery('.labView.active .fitErrorMess').css('display', 'none');
	jQuery('.labView.active .fitWarnMess').css('display', 'none');
	jQuery('.labView.active .design-area').css('border-color', '#666');
	if(event.namespace == 'change.design');
	{
		checkItemFitFlg  = p.productCheckItemFitFlg != undefined ? p.productCheckItemFitFlg : '0';
		checkItemFitType = p.productCheckItemFitType != undefined ? p.productCheckItemFitType : '1';
	}
	checkFitDesign();
});
jQuery(document).on('remove.item.design', function(event, e) {
	checkFitDesign();
});
design.item.mask.rotate = function(el, angle) {
	el.css('transform','rotate(' + angle + 'rad)');
	el.css('-moz-transform','rotate(' + angle + 'rad)');
	el.css('-webkit-transform','rotate(' + angle + 'rad)');
	el.css('-o-transform','rotate(' + angle + 'rad)');
	checkFitDesign();
};
var checkFitDesign = function(e) {
	var designArea = jQuery('.labView.active .design-area');
	var rectDesign = designArea[0].getBoundingClientRect();
	var check = false;
	if(checkItemFitFlg == '0')
	{
		return;
	}
	jQuery('.labView.active .design-area .content-inner').children('span').each(function() {
		var rectItem  = this.getBoundingClientRect();
		if(jQuery(this).data('type') == 'clipart')
		{
			var img = jQuery(this).find('image');
			if(img.length > 0)
			{
				if(img.css('clip-path') != 'none')
				{
					return;
				}
			}
		}
		if(rectItem.top < rectDesign.top)
		{
			check = true;
		}
		if(rectItem.left < rectDesign.left)
		{
			check = true;
		}
		if(rectItem.bottom > rectDesign.bottom)
		{
			check = true;
		}
		if(rectItem.right > rectDesign.right)
		{
			check = true;
		}
	});
	if(check)
	{
		if(checkItemFitType == '0')
		{
			designArea.css('border-color', 'red');
			jQuery('.labView.active').find('.fitErrorMess').css('display', 'block');
		}
		else
		{
			designArea.css('border-color', 'blue');
			jQuery('.labView.active').find('.fitWarnMess').css('display', 'block');
		}
	}
	else
	{
		designArea.css('border-color', '#666');
		jQuery('.labView.active').find('.fitErrorMess').css('display', 'none');
		jQuery('.labView.active').find('.fitWarnMess').css('display', 'none');
	}
	return check;
};﻿(function () {
	var filesUpload = {},
	dropArea 	= {},
	fileList 	= {},
	fileType 	= ["png", "gif", "jpg", "jpeg"],
	maxsize		= uploadSize['max'];
	minsize		= uploadSize['min'];
	function uploadFile (file) {
		var ext = file.name.substr(file.name.lastIndexOf('.') + 1);
		ext = ext.toLowerCase();
		jQuery(document).triggerHandler("dg_upload", [file, fileType]);
		var check = fileType.indexOf(ext);
		if(check == -1)
		{
			alert(lang.upload.fileType);
			return false;
		}
		if(file.size > 1048576 * maxsize){
			alert(lang.upload.maxSize + maxsize+'MB)');
			return false;
		}
		
		if(file.size < 1048576 * minsize){
			alert(lang.upload.minSize + minsize+'MB)');
			return false;
		}
		var span = document.createElement("div"),			
			img,
			progressBarContainer = document.createElement("div"),
			progressBar = document.createElement("div"),
			reader,
			xhr,
			fileInfo;
		span.className = 'view-thumb box-art';
		
		if (jQuery('#remove-bg').is(':checked') == true) var remove = 1;
		else var remove = 0;
		var url = siteURL + 'ajax.php?type=upload&remove='+remove;
		
		/*
			If the file is an image and the web browser supports FileReader,
			present a preview in the file list
		*/				
		if (typeof window.FileReader !== "undefined" && (file.type == 'image/png' || file.type == 'image/jpg' || file.type == 'image/jpeg' || file.type == 'image/gif')) {
			img = document.createElement("img");
				img.className = 'img-responsive img-thumbnail';				
			span.appendChild(img);
			reader = new FileReader();
			reader.onload = (function (theImg) {
				return function (evt) {
					theImg.src = evt.target.result;
					if (/MSIE/.test(navigator.userAgent))
					{
						jQuery(progressBar).html('uploading...').css('width', '100%');
						jQuery.ajax({
							type: "POST",
							url:  siteURL + 'ajax.php?type=uploadIE&remove='+remove,
							data: { myfile: evt.target.result}
						}).done(function( content ) {							
							var media 	= eval('('+content+')');
							if (media.status == 1)
							{
								img.setAttribute('src', siteURL + media.src);
								span.item = media.item;
								span.item.url = siteURL + media.item.url;
								span.item.thumb = siteURL + media.item.thumb;
								jQuery(span).bind('click', function(){
									design.myart.create(span);
									jQuery(document).triggerHandler( "uploaded", [media.item, span]);
									
									setTimeout(function(){
										var elm = design.item.get();
										jQuery(elm).addClass('drag-item-upload');
										jQuery(elm).data('upload', 1);
										jQuery(document).triggerHandler( "added.uploaded", elm);
										design.ajax.getPrice();
									}, 100);
								});
								jQuery(span).trigger( "click" );
								jQuery(progressBarContainer).addClass('uploaded');
								jQuery(progressBar).html('Uploaded').css('width', '100%');
							}
							else
							{
								alert(media.msg);
							}
							if(jQuery('#upload-copyright').length > 0)
							{
								jQuery('#upload-copyright').attr('checked', false);
							}
							jQuery('#remove-bg').attr('checked', false);
							jQuery('#files-upload').val('');
						});
					}
				};
			}(img));
			reader.readAsDataURL(file);
		}
		else if(/msie 9/.test(navigator.userAgent.toLowerCase()))
		{
			jQuery(progressBar).html('uploading...').css('width', '100%');
			var iframe = jQuery('<iframe name="iframe" id="iframe" style="display: none"></iframe>');
			jQuery("body").append(iframe);
			jQuery('#files-upload-form').attr("action", url);
			jQuery('#files-upload-form').attr("target", "iframe").submit();
			jQuery("#iframe").load(function () {
				var file = JSON.parse(this.contentWindow.document.body.innerHTML);
				if (file.status == 1)
				{
					img = document.createElement("img");
					img.className = 'img-responsive img-thumbnail';				
					span.appendChild(img);
					img.setAttribute('src', siteURL + file.src);
					span.item = file.item;
					span.item.url = siteURL + file.item.url;
					span.item.thumb = siteURL + file.item.thumb;
					jQuery(span).bind('click', function(){
						design.myart.create(span);
						jQuery(document).triggerHandler( "uploaded", [file.item, span]);
						
						setTimeout(function(){
							var elm = design.item.get();
							jQuery(elm).addClass('drag-item-upload');
							jQuery(elm).data('upload', 1);
							jQuery(document).triggerHandler( "added.uploaded", elm);
							design.ajax.getPrice();
						}, 100);
					});
					jQuery(span).trigger( "click" );
					jQuery(progressBarContainer).addClass('uploaded');
					jQuery(progressBar).html('Uploaded').css('width', '100%');					
				}
				else
				{
					alert(file.msg);
				}
				jQuery('#iframe').remove();
				if(jQuery('#upload-copyright').length > 0)
				{
					jQuery('#upload-copyright').attr('checked', false);
				}
				jQuery('#remove-bg').attr('checked', false);
				jQuery('#files-upload').val('');
			});	
		}
		else
		{
			img = document.createElement("img");
			img.className = 'img-responsive img-thumbnail';
			img.setAttribute('src', siteURL + 'assets/images/photo.png');
			span.appendChild(img);
		}
		
		jQuery('#upload-tabs a[href="#uploaded-art"]').tab('show');
		
		progressBarContainer.className = "progress progress-bar-container";
		progressBar.className = "progress-bar";
		progressBarContainer.appendChild(progressBar);
		span.appendChild(progressBarContainer);
		if(/msie 9/.test(navigator.userAgent.toLowerCase()) == false)
		{
			// Uploading - for Firefox, Google Chrome and Safari
			xhr = new XMLHttpRequest();
			
			// Update progress bar
			xhr.upload.addEventListener("progress", function (evt) {
				if (evt.lengthComputable) {
					var completed = (evt.loaded / evt.total) * 100;
					progressBar.style.width = completed + '%';
					progressBar.innerHTML = completed.toFixed(0) + '%';
				}
				else {
					// No data to calculate on
				}
			}, false);
				
			
			// File uploaded
			xhr.addEventListener("load", function () {
				progressBarContainer.className += " uploaded";
				progressBar.innerHTML = "Uploaded!";			
			}, false);
		}

		if (/MSIE/.test(navigator.userAgent) == false)
		{
			xhr.open("post", url, true);
			
			xhr.onload = function() {
				if (xhr.status === 200) {
					var media 					= eval('('+this.responseText+')');
					if (media.status == 1)
					{
						img.setAttribute('src', siteURL + media.src);
						span.item = media.item;
						span.item.url = siteURL + media.item.url;
						span.item.thumb = siteURL + media.item.thumb;
						jQuery(span).bind('click', function(){
							design.myart.create(span);
							jQuery(document).triggerHandler( "uploaded", [media.item, span]);
							
							setTimeout(function(){
								var elm = design.item.get();
								jQuery(elm).addClass('drag-item-upload');
								jQuery(elm).data('upload', 1);
								jQuery(document).triggerHandler( "added.uploaded", elm);
								design.ajax.getPrice();
							}, 100);
						});
						jQuery(span).trigger( "click" );
					}
					else
					{
						alert(media.msg)
					}
				}
				if(jQuery('#upload-copyright').length > 0)
				{
					jQuery('#upload-copyright').attr('checked', false);
				}
				jQuery('#remove-bg').attr('checked', false);
				jQuery('#files-upload').val('');
			};
			
			var formData = new FormData();  
			formData.append('myfile', file); 
			xhr.send(formData);
		}
		fileList.appendChild(span);
		if(typeof design.drop != 'undefined')
		{
			design.drop.upload();
		}
	}
	
	function traverseFiles (files) {
		if (typeof files !== "undefined") {
			for (var i=0, l=files.length; i<l; i++) {
				uploadFile(files[i]);
			}
		}
		else {
			fileList.innerHTML = "No support for the File API in this web browser";
		}	
	}
	
	jQuery(document).ready(function($) {
		filesUpload = document.getElementById("files-upload");
		dropArea 	= document.getElementById("drop-area");
		fileList 	= document.getElementById("dag-files-images");

		document.getElementById('action-upload').addEventListener("click", function () {
			var check = design.upload.computer();
			if (check == true)
			{
				var IE9 = /msie 9/.test(navigator.userAgent.toLowerCase());
				if(IE9 == true)
				{
					var iframe = jQuery('<iframe name="postiframe" id="postiframe" style="display: none"></iframe>');
					jQuery("body").append(iframe);
					var frm = jQuery('#files-upload-form');
					frm.attr("action", siteURL + "ajax.php?type=iframeupload");
					frm.attr("method", "post");
					frm.attr("enctype", "multipart/form-data");
					frm.attr("target", "postiframe").submit();
					jQuery("#postiframe").load(function () {
						var myFile = JSON.parse(this.contentWindow.document.body.innerHTML);
						uploadFile(myFile.myfile);
						jQuery('#postiframe').remove();
						return false;
					})
				}
				else
				{
					traverseFiles(filesUpload.files);
				}
			}
		}, false);

		dropArea.addEventListener("dragleave", function (evt) {
			var target = evt.target;
			
			if (target && target === dropArea) {
				this.className = "";
			}
			evt.preventDefault();
			evt.stopPropagation();
		}, false);
		
		dropArea.addEventListener("dragenter", function (evt) {
			this.className = "over";
			evt.preventDefault();
			evt.stopPropagation();
		}, false);
		
		dropArea.addEventListener("dragover", function (evt) {
			evt.preventDefault();
			evt.stopPropagation();
		}, false);
		
		dropArea.addEventListener("drop", function (evt) {
			traverseFiles(evt.dataTransfer.files);
			this.className = "";
			evt.preventDefault();
			evt.stopPropagation();
		}, false);	
	});
})();

jQuery(document).ready(function($) {
	if(typeof files_uploaded != 'undefined')
	{
		var images_upload = JSON.parse(files_uploaded);
		jQuery.each(images_upload, function(index, file) {
			var div = document.createElement('div');
			div.className = 'view-thumb box-art';
			var a = document.createElement('a');
			a.className = '';
			a.setAttribute('href', 'javascript:void(0)');
			a.innerHTML = '<img class="img-thumbnail" draggable="true" src="'+file.thumb+'" alt="">';
			a.item 	= file;
			jQuery(a).click(function(event) {
				design.myart.create(this);
				setTimeout(function(){
					var elm = design.item.get();
					jQuery(elm).addClass('drag-item-upload');
					jQuery(elm).data('upload', 1);
					jQuery(document).triggerHandler( "added.uploaded", elm);
					design.ajax.getPrice();
				}, 200);
			});
			div.item 	= file;
			div.item.width = file.size.width;
			div.item.height = file.size.height;
			div.item.large = siteURL + file.url;
			div.appendChild(a);
			jQuery('#dag-files-images').append(div);
		});
	}
});;var elemnt_drop = {};
design.drop = {
	init: function(){
		design.drop.upload();
		this.area();
	},
	area: function(){
		jQuery('.labView').each(function(){
			var item_active = '';
			this.ondragover = function(event){
				event.preventDefault();
				var items 	= design.drop.items;
				if(typeof items !== 'undefined' && items.length > 0 && elemnt_drop.item.override == 1)
				{
					var src 	= jQuery(elemnt_drop).attr('src');

					var x = event.pageX;
					var y = event.pageY;
					for(id in items) {
						var item = items[id];

						var images = jQuery('#item-'+id).find('image');
						if(x > item.x && x < item.max_x && y > item.y && y < item.max_y)
						{
							item_active = id;
							images.each(function(){
								jQuery(this).attr('xlink:href', src);
							});
							return false;
						}
						else
						{
							item_active = '';
							images.each(function(){
								var old_src = this.item.old_src;
								jQuery(this).attr('xlink:href', old_src);
							});
						}
					};
				}
			};
			this.ondrop = function(event){
				event.preventDefault();
				if(jQuery(elemnt_drop).hasClass('drop-item'))
				{
					if(item_active != '' && elemnt_drop.item.override == 1)
					{
						var span = jQuery('#item-'+item_active);
						var div = jQuery(elemnt_drop).parents('.box-art');
						if(typeof div[0].item != 'undefined' && div[0].item.large != undefined)
						{
							var src = div[0].item.large;
							if(src.indexOf('http') == -1)
							{
								src = siteURL + src;
							}
						}

						var image 	= span.find('image');
						image.attr('xlink:href', src);
						var use = span.find('use');
						if(use.length > 0 && span.hasClass('hidden-use') == false)
						{
							span.addClass('hidden-use');
						}
						var img_item = div[0].item;
						var item 	= span[0].item;
						if(item.img_zoom != undefined && item.img_zoom.old_w != undefined)
						{
							var width 	= item.img_zoom.old_w;
							var height 	= item.img_zoom.old_h;
						}
						else
						{
							var width 	= item.img_zoom.width;
							var height 	= item.img_zoom.height;
							span[0].item.img_zoom.old_w = width;
							span[0].item.img_zoom.old_h = height;
						}
						if(img_item.width > img_item.height)
						{
							var new_h = height;
							var new_w = (img_item.width * new_h)/img_item.height;
						}
						else
						{
							var new_w = height;
							var new_h = (img_item.height * new_w)/img_item.width;
						}

						var left = (new_w - width)/2;
						if(left > 0) left = left * -1;
						var top = (new_h - height)/2;
						if(top > 0) top = top * -1;
						image.attr('width', new_w);
						image.attr('height', new_h);
						image.attr('x', left);
						image.attr('y', top);
						if(typeof span[0].item.img_zoom != 'undefined')
						{
							span[0].item.img_zoom.width = new_w;
							span[0].item.img_zoom.height = new_h;
							span[0].item.img_zoom.top = top;
							span[0].item.img_zoom.left = left;
						}
					}
					else
					{
						var move = design.drop.addItem(event, this, elemnt_drop);
						var a = elemnt_drop.parentNode;
						if(typeof a.item == 'undefined'){
							a.item = {};
						}
						a.item.move = move;
						var div = a.parentNode;
						if(typeof div.item == 'undefined'){
							div.item = {};
						}
						a.item.move = move;
						div.item.move = move;
						a.click();
					}
				}
				elemnt_drop = {};
			};
		});
	},
	addItem: function(event, div, img){
		var top = event.pageY;
		var left = event.pageX;

		var area = div.getBoundingClientRect();

		top = top - area.top - img.item.top;

		left = left - area.left - img.item.left;
		
		var move = {};
		move.left = left;
		move.top = top;
		return move;
	},
	upload: function(){
		jQuery('.obj-main-content .box-art img').each(function(){
			var img = this;
			this.setAttribute('draggable', true);
			img.ondragstart = function(event){
				jQuery(this).addClass('drop-item');
				
				var top = event.pageY;
				var left = event.pageX;
				var options = this.getBoundingClientRect();
				top = top - options.top;
				left = left - options.left;
				this.item = {};
				this.item.top = top;
				this.item.left = left;
				var div = jQuery(this).parents('.box-art');
				if(typeof div[0].item != 'undefined' && div[0].item.large != undefined)
				{
					this.item.override = 1;
				}
				else
				{
					this.item.override = 0;
				}
				elemnt_drop = this;

				var src = jQuery(this).attr('src');
				if(src.indexOf('http') == -1)
				{
					src = siteURL + src;
				}
				this.src = src;
				this.width = 100;
				design.drop.getItems();
			};
			this.ondragend = function(event){
				elemnt_drop = {};
				jQuery('.obj-main-content .box-art img').removeClass('drop-item').removeAttr('width');
			};
		});
	},
	getItems: function(){
		var items = [];
		jQuery('.labView.active').find('.drag-item').each(function(){
			var item = this.item;
			if(typeof item.is_frame != 'undefined' && item.is_frame == 1)
			{
				var id 	= jQuery(this).attr('id').replace('item-', '');
				var size 	= this.getBoundingClientRect();
				var max_x 	= size.x + size.width;
				var max_y 	= size.y + size.height;
				var options = {};
				options.x = size.x;
				options.y = size.y;
				options.max_x = max_x;
				options.max_y = max_y;
				options.zIndex = item.zIndex;
				items[id] 	= options;
				jQuery(this).find('image').each(function(){
					var src = jQuery(this).attr('xlink:href');
					if(typeof this.item == 'undefined'){
						this.item = {};
					}
					this.item.old_src = src;
				});
			}
		});
		this.items = items;
	}
}

jQuery(document).ready(function($) {
	design.drop.init();
});

jQuery(document).on('added.pages', function(){
	design.drop.area();
});;function IOSFont(e)
{
	var svg 		= e.find('svg');				
	var html 		= jQuery('<div></div>').html(jQuery(svg).clone()).html();
	
	var canvas 		= document.createElement('canvas');
	canvas.width 	= 500;
	canvas.height 	= 500;
	var context	 	= canvas.getContext('2d');
	
	var mySrc = 'data:image/svg+xml;base64,'+btoa(unescape(encodeURIComponent(html)));
	var images 	= new Image();
	images.onload = function() {
		context.drawImage(images, 0, 0);
	};
	images.src = mySrc;
};var fixBugEDGE = function(e) {
	if(navigator.userAgent.toLowerCase().indexOf('edge/') == -1)
	{
		return false;
	}
	if(jQuery(e).data('type') == 'text')
	{	
		var svg = jQuery(e).find('svg');									
		svg[0].setAttributeNS(null, 'preserveAspectRatio', 'none');		
	}
};

jQuery(document).on('after.item.changecolor', function(event, t, c){
	var e = design.item.get();
	fixBugEDGE(e);
});

jQuery(document).on('select.item.design', function(event, e){
	setTimeout(function() {
		fixBugEDGE(e);
	}, 1);
});

jQuery(document).on('update.text.design', function(event, l, v){
	var e = design.item.get();
	setTimeout(function() {
		fixBugEDGE(e);
	}, 1);
});

jQuery(document).on('after.imports.item.design', function(event, span, item){
	var svg = jQuery(span).find('svg')[0];
	if(navigator.userAgent.toLowerCase().indexOf('edge/') != -1)
	{
		svg.removeAttribute('xmlns:xml');
	}
});;design.createSvgthumb = function(pos, callback) {
	var can     = document.createElement('canvas');
	var color   = jQuery('#product-list-colors span').index(jQuery('#product-list-colors span.active'));
	var lyr     = eval ("(" + items["design"][color][pos] + ")");
	can.width   = 1;
	can.height  = 1;
	var itemLst = jQuery('#view-' +pos+ ' .design-area .drag-item');
	itemLst.each(function() {
		this.zIndex = this.style.zIndex;
	});
	itemLst.sort(function(obj1, obj2) {
		return obj1.zIndex - obj2.zIndex;
	});
	var count = Object.keys(lyr).length;
	count = parseInt(count) - 1;
	var obj = [], j = 0;
	for (i= count; i> -1; i--)
	{
		obj[j] = lyr[i];
		j++;
	}
	var ara  = jQuery('.labView.active .design-area')[0];
	var lft  = parseFloat(jQuery(ara).css('left').replace('px', ''));
	var top  = parseFloat(jQuery(ara).css('top').replace('px', ''));
	var aW   = parseFloat(jQuery(ara).css('width').replace('px', ''));
	var aH   = parseFloat(jQuery(ara).css('height').replace('px', ''));
	var rdu  = ara.style.borderRadius;
	var html = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="'+max_box_width+'" height="'+max_box_height+'" viewBox="0 0 '+max_box_width+' '+max_box_height+'">';
	createSvgElement(0);
	function createSvgElement(idx) {
		if(obj[idx] == undefined)
		{
			html += '<defs><clipPath id="design-area-clip-'+pos+'"><rect x="'+Math.round(lft - 1)+'" y="'+Math.round(top - 1)+'" width="'+Math.round(aW)+'" height="'+Math.round(aH)+'" rx="'+rdu+'" ry="'+rdu+'" stroke-width="1" stroke="#000000" /></clipPath></defs>';
			html += '</svg>';
			design[pos] = {};
			design[pos].svgThum = html;
			if(typeof callback != 'undefined')
			{
				callback();
			}
			return false;
		}
		else
		{
			var slf = obj[idx];
			if(slf.id != 'area-design')
			{
				var el  = parseFloat(slf.left.replace('px', ''));
				var et  = parseFloat(slf.top.replace('px', ''));
				var w   = parseFloat(slf.width.replace('px', ''));
				var h   = parseFloat(slf.height.replace('px', ''));
				var img = new Image();
				var can = document.createElement('canvas');
				var ctx = can.getContext('2d');
				img.onload = function() {
					can.width  = img.width;
					can.height = img.height;
					ctx.drawImage(img, 0, 0);
					html += '<g><image x="'+el+'" y="'+et+'" width="'+w+'" height="'+h+'" xlink:href="'+can.toDataURL()+'"></image></g>';
					createSvgElement(idx + 1);
				};
				img.src = jQuery('#' + pos + '-img-' + slf.id).attr('src');
			}
			else
			{
				html += '<g style="clip-path:url(#design-area-clip-'+pos+');">';
				createSvgDesignElement(0, idx);
				function createSvgDesignElement(i, order) {
					if(itemLst[i] == undefined)
					{
						html += '</g>';
						createSvgElement(order + 1);
						return false;
					}
					var slf   = jQuery(itemLst[i]);
					var el    = parseFloat(slf.css('left').replace('px', ''));
					var et    = parseFloat(slf.css('top').replace('px', ''));
					var w     = parseFloat(slf.css('width').replace('px', '')) / 2;
					var h     = parseFloat(slf.css('height').replace('px', '')) / 2;
					var svg   = slf.find('svg')[0];
					var rot   = slf.data('rotate');
					var clone = jQuery(svg).clone();
					var div   = document.createElement('div');
					var svgW  = clone.attr('width');
					var svgH  = clone.attr('height');
					var viewB = clone[0].getAttributeNS(null, 'viewBox');
					clone.find('*').each(function() {
						if(this.nodeName == 'sodipodi:namedview')
						{
							jQuery(this).remove();
						}
						var attributeElement = this;
						var attLst = this.attributes;
						var removeArr = [];
						for(j = 0; j < attLst.length; j++) {
							var attr = attLst[j];
							if(attr.name.toLowerCase().indexOf('inkscape:') != -1 
								|| attr.name.toLowerCase().indexOf('xmlns:ns') != -1
								|| attr.name.toLowerCase().indexOf('ns1:') != -1
								|| attr.name.toLowerCase().indexOf('ns2:') != -1
								|| attr.name.toLowerCase().indexOf('ns3:') != -1
								|| attr.name.toLowerCase().indexOf('ns4:') != -1
								|| attr.name.toLowerCase().indexOf('ns5:') != -1
								|| attr.name.toLowerCase().indexOf('ns6:') != -1
								|| attr.name.toLowerCase().indexOf('ns7:') != -1
								|| attr.name.toLowerCase().indexOf('sodipodi:') != -1)
							{
								removeArr.push(attr.name);
							}
						}
						jQuery(removeArr).each(function() {
							attributeElement.removeAttribute(this);
						});
					});
					if(viewB  == undefined || viewB == '')
					{
						viewB = 'viewBox="0 0 '+svgW+' '+svgH+'"';
					}
					else
					{
						viewB = 'viewBox="'+viewB+ '"';
					}
					var pA    = clone[0].getAttributeNS(null, 'preserveAspectRatio');
					if(pA == undefined)
					{
						pA = 'none';
					}
					var img = clone.find('image');
					if(slf.data('type') == 'text')
					{
						var txtPath = clone.find('textPath');
						if(txtPath.length > 0)
						{
							var pthID = txtPath[0].getAttribute('xlink:href');
							var path  = clone.find(''+pthID);
							var idU   = design.createUniqueId();
							txtPath[0].setAttribute('xlink:href', (pthID + idU));
							jQuery(path[0]).attr('id', (pthID.replace('#', '') + idU));
							var style = clone.find('style');
							clone.prepend(style);
						}
					}
					if(img.length > 0)
					{
						var clipP  = jQuery(img[0]).css('clip-path');
						if(clipP  != 'none')
						{
							var defs = clone.find('defs')[0];
							var p    = jQuery(defs).find('clipPath')[0];
							var nId  = jQuery(p).attr('id') + design.createUniqueId() + '1';
							jQuery(p).attr('id', nId);
							jQuery(img[0]).css('clip-path', 'url(#'+nId+')');
						}
						var src    = jQuery(img[0]).attr('xlink:href');
						var canvas = document.createElement('canvas');
						var ctx    = canvas.getContext('2d');
						var ig = new Image();
						ig.onload = function() {
							canvas.width  = max_box_width;
							canvas.height =  max_box_height * ig.height / ig.width;
							ctx.drawImage(ig, 0, 0, canvas.width, canvas.height);
							img[0].setAttribute('xlink:href', canvas.toDataURL());
							clone.children().each(function() {
								jQuery(div).append(this);
							});
							var svgHtml = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="'+pA+'" '+viewB+' x="'+(el + lft)+'" y="'+(et + top)+'" width="'+svgW+'" height="'+svgH+'">'+jQuery(div).html()+'</svg>';
							html += '<g transform="rotate('+rot+' '+(el + lft + w)+' '+(et + top + h)+')">' + svgHtml + '</g>';
							createSvgDesignElement(i + 1, order);
						};
						ig.src = src;
					}
					else
					{
						clone.children().each(function() {
							jQuery(div).append(this);
						});
						var svgHtml = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="'+pA+'" '+viewB+' x="'+(el + lft)+'" y="'+(et + top)+'" width="'+svgW+'" height="'+svgH+'">'+jQuery(div).html()+'</svg>';
						html += '<g transform="rotate('+rot+' '+(el + lft + w)+' '+(et + top + h)+')">' + svgHtml + '</g>';
						createSvgDesignElement(i + 1, order);
					}
				};
				//html += '</g>';
			}
		}
	}
};

design.isIE = function() {
	var IE     = /msie/.test(navigator.userAgent.toLowerCase());
	var IE11   = /trident/.test(navigator.userAgent.toLowerCase());
	var result = false;
	if(IE == true || IE11 == true)
	{
		result = true;
	}
	return result;
};

design.createUniqueId = function() {
	var id = new Date().valueOf();
	return id;
};

jQuery(document).ready(function() {
	jQuery('#dg-mydesign').on('shown.bs.modal', function() {
		if(design.isIE())
		{
			var listDesignWrap = jQuery('#dg-mydesign').find('.list-design-saved')[0];
			var designLst      = jQuery(listDesignWrap).find('.design-box');
			designLst.each(function(idx, e) {
				var a    = jQuery(this).find('a')[0];
				var img  = jQuery(a).find('img')[0];
				var src  = jQuery(img).attr('src');
				if(src.match(".svg$"))
				{
					jQuery(img).attr('width', '100%');
					var width = a.getBoundingClientRect().width;
					jQuery(a).children('img').attr('height', width - 4);
				}
			});
			setTimeout(function() {
				jQuery(listDesignWrap).css('opacity', '1');
				jQuery('#dg-mydesign .modal-body .loadingImage').remove();
			}, 1000);
		}
	});
	
	jQuery('#dg-mydesign').on('show.bs.modal', function() {
		if(design.isIE())
		{
			var loadingURL = siteURL + '/addons/images/ajax-loader.gif';
			jQuery('#dg-mydesign').find('.modal-body').append('<img style="position: absolute; top: 40%; left: 50%" class="loadingImage" src="'+loadingURL+'"></img>');
			jQuery('#dg-mydesign').find('.list-design-saved').css({
				'opacity': '0'
			});
		}
	});
});;var fonts_data = [];
design.text.addFont = function(title, fontFace, span){
	if(typeof span == 'undefined')
	{
		var e = design.item.get();
	}
	else
	{
		var e = jQuery(span);
	}
	var svg = e.find('svg');
	if (typeof svg[0] != 'undefined')
	{
		var svg_ns = "http://www.w3.org/2000/svg";
		var style = document.createElementNS(svg_ns, 'style');
		var content = document.createTextNode('@font-face{font-family: \''+title+'\';src: url("'+fontFace+'") format(\'truetype\');}');
		style.appendChild(content);

		var defs = jQuery(svg[0]).find('defs');
		if (defs.length > 0)
		{					
			var styleOld = jQuery(svg[0]).find('style');
			if (styleOld.length > 0)
			{
				defs[0].removeChild(styleOld[0]);
			}
			
			defs[0].appendChild(style);
		}
		else
		{
			var defs = document.createElementNS(svg_ns,'defs');	
			defs.appendChild(style);
			svg[0].appendChild(defs);
		}
		setTimeout(function(){
			var rotate = e.data('rotate');
			if (rotate == 'undefined') rotate = 0;
			rotate = rotate * Math.PI / 180;
			e.css('transform', 'rotate(0rad)');	
					
			var txt = e.find('text');
			txt[0].setAttributeNS(null, 'y', 0);
			var size1 = txt[0].getBoundingClientRect();
			var size2 = e[0].getBoundingClientRect();
			var $w 	= parseInt(size1.width);							
			var $h 	= parseInt(size1.height);							
			design.item.updateSize($w, $h);

			var svg = e.find('svg'),
			view = svg[0].getAttributeNS(null, 'viewBox');
			var arr = view.split(' ');			
			var y = (size2.top - size1.top) * arr[3] / $h;
			txt[0].setAttributeNS(null, 'y', y);
			e.css('transform', 'rotate('+rotate+'rad)');
			var safari = /safari/.test(navigator.userAgent.toLowerCase());
			if (safari === true)
			{
				IOSFont(e);
			}
			jQuery(document).triggerHandler( "beforechangefont.item.design", [$w, $h]);
			jQuery(document).triggerHandler( "info.size.design", [e[0].item.type, e.css('width'), e.css('height')]);	
			design.mask(false);
		}, 1000);
	}
}
design.text.baseencode = function(title, type, span){
	if(title == 'Arial' || title == 'arial') return;
	var title_file = title.replace(/ /g, '+');
	if(typeof fonts_data[title_file] != 'undefined')
	{
		design.text.addFont(title, fonts_data[title_file], span);
		return;
	}

	design.mask(true);
	jQuery.ajax({
		url: baseURL + 'fonts.php?name='+title_file+'&type='+type,					
	}).done(function( data ){
		if (data != '0')
		{
			var fontFace = "data:application/font-ttf;charset=utf-8;base64, "+data;
			fonts_data[title_file] = fontFace;
			design.text.addFont(title, fonts_data[title_file], span);
		}
	}).fail(function(){
		design.mask(false);
	});
};jQuery(document).on('ini.design', function() {
	//setCookie('isClosedF', 0, 1);
	//sessionStorage.isClosed = 0;
	var wWidth   = jQuery(window).width();
	tshirtIntroduction.windowSize = wWidth;
	if(wWidth < 768)
	{
		tshirtIntroduction.isMobie = true;
	}
	else
	{
		tshirtIntroduction.isMobie = false;
	}
	if(tshirtIntroduction.checkedEnable() == false)
	{
		if(tshirtIntroduction.isMobie = true)
		{
			jQuery('#dg-left .dg-box').animate({ scrollLeft: jQuery('#dg-left .dg-box').prop("scrollWidth")}, 5000);
			jQuery('#dg-left .dg-box').animate({ scrollLeft: 0}, 500);
			jQuery('.dg-tools .list-tools').animate({ scrollLeft: jQuery('.dg-tools .list-tools').prop("scrollWidth")}, 5000);
			jQuery('.dg-tools .list-tools').animate({ scrollLeft: 0}, 500);
		}
		return false;
	}
	tshirtIntroduction.start();
});

var tshirtIntroduction = {
	currentStep: 0,
	isMobie    : true,
	show       : function(introEle) {
		introAutoTimeVal = parseInt(introAutoTimeVal);
		var autoIntro = setTimeout(function() {
			if(tshirtIntroduction.isLastEle != '1')
			{
				if(tshirtIntroduction.currentStep != 0)
				{
					tshirtIntroduction.nextIntro();
				}
			}
			else
			{
				tshirtIntroduction.closeInro();
				if(tshirtIntroduction.isMobie)
				{
					jQuery('#dg-left .dg-box').animate({
						scrollLeft: 1
					}, 1000);
				}
			}
		}, introAutoTimeVal);
		tshirtIntroduction.autoIntro = autoIntro;
		var container  = jQuery('#dg-wapper').parent('.container-fluid');
		var conRct     = container[0].getBoundingClientRect();
		var desinRct   = jQuery('#dg-designer')[0].getBoundingClientRect();
		var target     = jQuery('' + introEle.target);
		if(target.hasClass('div-layers') == true)
		{
			var lyr    = target.find('.layers-toolbar')[0];
			if(jQuery(lyr).css('display') != 'none')
			{
				target = jQuery(lyr);
				introEle.position = 'bottom';
			}
		}
		var targetC    = target.clone();
		var divIntro   = document.createElement('div');
		var divMark    = document.createElement('div');
		var divArrow   = document.createElement('span');
		if(target.length == 0 && introEle.target != 'tshirt-intro-start')
		{
			tshirtIntroduction.nextIntro();
			return false;
		}
		if(introEle.isActive == '0' && introEle.target != 'tshirt-intro-start')
		{
			tshirtIntroduction.nextIntro();
			return false;
		}
		if(introEle.target != 'tshirt-intro-start')
		{
			var targetRct = target[0].getBoundingClientRect();
			var topIntro  = targetRct.top - desinRct.top;
			var leftIntro = targetRct.left - desinRct.left + targetRct.width + 20;
		}
		/** Create mask overlay layer */
		jQuery(divMark).addClass('introduction-mask');
		jQuery(divMark).css({
			'width' : conRct.width + 'px',
			'height': conRct.height + 'px'
		});
		jQuery(divMark).click(function() {
			tshirtIntroduction.closeInro();
			tshirtIntroduction.setSessStorage();
			clearTimeout(tshirtIntroduction.autoIntro);
		});
		jQuery('#dg-designer').append(divMark);

		/** Create mask of element */
		if(introEle.target != 'tshirt-intro-start')
		{
			jQuery(target).each(function() {
				if(jQuery(this).css('display') == 'none')
				{
					return true;
				}
				var targetC   = jQuery(this).clone();
				var targetRct = this.getBoundingClientRect();
				jQuery(targetC).addClass('introduction-ele-mask');
				jQuery(targetC).copyCSS(target);
				var targetChildLst = target.find('*');
				targetC.find('*').each(function(index, e) {
					jQuery(e).copyCSS(targetChildLst[index])
				});
				targetC.css({
					'position': 'absolute',
					'z-index' : 10002,
					'top'     : (targetRct.top - desinRct.top) + 'px',
					'left'    : (targetRct.left - desinRct.left) + 'px',
					'display' : 'none'
				});
				if(target.css('background-color') == 'rgba(0, 0, 0, 0)' && tshirtIntroduction.windowSize <= 770)
				{
					if(!tshirtIntroduction.isMobie)
					{
						targetC.css({
							'background-color': '#FFFFFF'
						});
					}
					else
					{
						targetC.css({
							'background-color': '#F9F9F9'
						});
					}
				}
				jQuery('#dg-designer').append(targetC);
			});
			
		}

		/** Create introduction desc layer */
		jQuery(divIntro).addClass('introduction-desc');
		if(introEle.target != 'tshirt-intro-start')
		{
			jQuery(divIntro).append(divArrow);
		}
		jQuery(divIntro).append(jQuery(introEle).html());
		//jQuery(divIntro).append('<span class="intro-step-pos">'+ (tshirtIntroduction.currentStep + 1) + '/' + (tshirtIntroduction.introLst.length) + '</span>');
		jQuery('#dg-designer').append(divIntro);
		if(introEle.position == 'left')
		{
			jQuery(divArrow).addClass('introduction-arrow introduction-arrow-left');
			var topDiv = topIntro;
			if((topIntro + 400) > 572)
			{
				topDiv = 574 - 400 - 20;
				jQuery(divIntro).find('.introduction-arrow-left').css('top', (topIntro - topDiv) + 'px');
			}
			jQuery(divIntro).css({
				'top': topDiv + 'px',
				'left': leftIntro + 'px',
				'opacity': 0
			});
		}
		else if(introEle.position == 'right')
		{
			jQuery(divArrow).addClass('introduction-arrow introduction-arrow-right');
			var topDiv = topIntro;
			if((topIntro + 400) > 572)
			{
				topDiv = 574 - 400 - 20;
				jQuery(divIntro).find('.introduction-arrow-right').css('top', (topIntro - topDiv) + 'px');
			}
			jQuery(divIntro).css({
				'top': topDiv + 'px',
				'left': (targetRct.left - 435) + 'px',
				'opacity': 0
			});
		}
		else if(introEle.position == 'top')
		{
			if(!tshirtIntroduction.isMobie)
			{
				jQuery(divArrow).addClass('introduction-arrow introduction-arrow-top');
				var leftDiv = targetRct.left - desinRct.left;
				if((leftDiv + 400) > (conRct.width - 10))
				{
					leftDiv = conRct.width - 400 - 40;
					jQuery(divIntro).find('.introduction-arrow-top').css('left', (targetRct.left - desinRct.left - leftDiv) + 'px');
				}
				jQuery(divIntro).css({
					'top': (topIntro + targetRct.height + 20) + 'px',
					'left': leftDiv + 'px',
					'opacity': 0
				});
			}
			else
			{
				jQuery(divArrow).addClass('introduction-arrow introduction-arrow-top');
				jQuery(divIntro).css({
					'top': (topIntro + targetRct.height + 20) + 'px',
					'opacity': 0
				});
				var left = targetRct.left + targetRct.width / 2 - 20 - (jQuery(window).width() * 0.02);
				if(left < 7)
				{
					left = 7;
				}
				jQuery(divIntro).find('.introduction-arrow-top').css('left', left + 'px');
			}
		}
		else if(introEle.position == 'bottom')
		{
			jQuery(divArrow).addClass('introduction-arrow introduction-arrow-bottom');
			if(!tshirtIntroduction.isMobie)
			{
				jQuery(divArrow).addClass('introduction-arrow introduction-arrow-bottom');
				var topDiv  = targetRct.top - 420;
				var leftDiv = targetRct.left - desinRct.left;
				if((leftDiv + 400) > conRct.width)
				{
					leftDiv = conRct.width - 400 - 40;
					jQuery(divIntro).find('.introduction-arrow-bottom').css('left', (targetRct.left - desinRct.left - leftDiv) + 'px');
				}
				jQuery(divIntro).css({
					'top': topDiv + 'px',
					'left': leftDiv + 'px',
					'opacity': 0
				});
			}
			else
			{
				var h = divIntro.getBoundingClientRect().height;
				var topDiv = targetRct.top - h - 20;
				var left = targetRct.left + targetRct.width / 2 - 20 - (jQuery(window).width() * 0.02);
				if(left < 7)
				{
					left = 7;
				}
				jQuery(divIntro).find('.introduction-arrow-bottom').css('left', left + 'px');
				jQuery(divIntro).css({
					'top': topDiv + 'px',
					'opacity': 0
				});
			}
		}
		else if(introEle.position == 'center')
		{
			if(!tshirtIntroduction.isMobie)
			{
				jQuery('.introduction-desc').css({
					'top' : (desinRct.height - 400) / 2 + 'px',
					'left': (desinRct.width - 400) / 2 + 'px'
				});
			}
			else
			{
				jQuery('.introduction-desc').css({
					'top' : '10%'
				});
			}
		}

		/** Create handler when click buttons next, close */
		jQuery('.intro-desc-taskbar .close-desc').click(function() {
			tshirtIntroduction.closeInro();
			tshirtIntroduction.setSessStorage();
			clearTimeout(tshirtIntroduction.autoIntro);
			if(tshirtIntroduction.isMobie = true)
			{
				jQuery('#dg-left .dg-box').animate({ scrollLeft: jQuery('#dg-left .dg-box').prop("scrollWidth")}, 5000);
				jQuery('#dg-left .dg-box').animate({ scrollLeft: 0}, 500);
				jQuery('.dg-tools .list-tools').animate({ scrollLeft: jQuery('.dg-tools .list-tools').prop("scrollWidth")}, 5000);
				jQuery('.dg-tools .list-tools').animate({ scrollLeft: 0}, 500);
			}
		});
		jQuery('.intro-desc-taskbar .next-step').click(function() {
			tshirtIntroduction.nextIntro();
		});
		jQuery('.intro-closeBtn').click(function() {
			tshirtIntroduction.closeInro();
			tshirtIntroduction.setSessStorage();
			clearTimeout(tshirtIntroduction.autoIntro);
			if(tshirtIntroduction.isMobie = true)
			{
				jQuery('#dg-left .dg-box').animate({ scrollLeft: jQuery('#dg-left .dg-box').prop("scrollWidth")}, 5000);
				jQuery('#dg-left .dg-box').animate({ scrollLeft: 0}, 500);
				jQuery('.dg-tools .list-tools').animate({ scrollLeft: jQuery('.dg-tools .list-tools').prop("scrollWidth")}, 5000);
				jQuery('.dg-tools .list-tools').animate({ scrollLeft: 0}, 500);
			}
		});
		jQuery('.intro-desc-taskbar .close-forever').click(function() {
			tshirtIntroduction.closeInro();
			tshirtIntroduction.setCookie();
			clearTimeout(tshirtIntroduction.autoIntro);
			if(tshirtIntroduction.isMobie = true)
			{
				jQuery('#dg-left .dg-box').animate({ scrollLeft: jQuery('#dg-left .dg-box').prop("scrollWidth")}, 5000);
				jQuery('#dg-left .dg-box').animate({ scrollLeft: 0}, 500);
				jQuery('.dg-tools .list-tools').animate({ scrollLeft: jQuery('.dg-tools .list-tools').prop("scrollWidth")}, 5000);
				jQuery('.dg-tools .list-tools').animate({ scrollLeft: 0}, 500);
			}
		});

		/** Create effect show */
		setTimeout(function() {
			jQuery('.introduction-ele-mask').show(800);
		}, 1);
		
		setTimeout(function() {
			jQuery('.introduction-desc').animate({
				opacity: 1
			}, 1000);
		}, 800);
	},
	nextIntro: function() {
		/** Action next step production */
		clearTimeout(tshirtIntroduction.autoIntro);
		tshirtIntroduction.closeInro();
		tshirtIntroduction.currentStep += 1;
		var step    = tshirtIntroduction.currentStep;
		var ele     = tshirtIntroduction.introLst[step];
		var lastEle = tshirtIntroduction.introLst.length - 1;
		var lastChk = false;
		if(ele.target == tshirtIntroduction.introLst[lastEle].target)
		{
			lastChk = true;
		}
		if(ele != undefined)
		{
			if(tshirtIntroduction.isMobie)
			{
				var target    = jQuery('' + ele.target);
				var targetRct = target[0].getBoundingClientRect();
				var wapRct    = jQuery('#dg-wapper')[0].getBoundingClientRect();
				var divMark   = document.createElement('div');
				if((targetRct.left + targetRct.width) > wapRct.width)
				{
					jQuery(divMark).addClass('introduction-mask introduction-mask-buff');
					jQuery(divMark).css({
						'width' : wapRct.width + 'px',
						'height': wapRct.height + 'px'
					});
					jQuery('#dg-designer').append(divMark);
					var newScrll = jQuery('#dg-left .dg-box').scrollLeft() + targetRct.left;
					jQuery('#dg-left .dg-box').animate({
						scrollLeft: newScrll
					}, 1000, function() {
						jQuery('#dg-designer .introduction-mask-buff').remove();
						tshirtIntroduction.show(ele);
					});
				}
				else
				{
					tshirtIntroduction.show(ele);
				}
			}
			else
			{
				tshirtIntroduction.show(ele);
			}
		}
		if(lastChk)
		{
			jQuery('.intro-desc-taskbar .next-step').remove();
			tshirtIntroduction.isLastEle = '1';
		}
	},
	closeInro: function() {
		/** Action close production */
		jQuery('.introduction-desc').remove();
		jQuery('.introduction-mask').remove();
		jQuery('.introduction-ele-mask').remove();
	},
	setSessStorage: function() {
		sessionStorage.isClosed = 1;
	},
	setCookie: function() {
		setCookie('isClosedF', 1, 90);
	},
	checkedEnable: function() {
		var result    = true;
		var isClosedF = getCookie('isClosedF');
		if(sessionStorage.isClosed == 1 || isClosedF == 1 || enableIntroFlg == '0')
		{
			result = false;
		}
		return result;
	},
	start: function() {
		var introLst = jQuery('#introduction-desc-lst').children('li');
		var introActieLst = [];
		introLst.each(function(index, ele) {
			this.order    = jQuery(this).attr('data-order');
			this.target   = jQuery(this).attr('data-selecter');
			this.position = jQuery(this).attr('data-position');
			this.isActive = jQuery(this).attr('data-isActive');
			if(this.target == 'tshirt-intro-start')
			{
				introActieLst.push(this);
			}
			var target = jQuery('' + this.target);
			if(target.length > 0)
			{
				cssShow = target.css('display');
				if(cssShow == 'none')
				{
					this.isActive = '0';
				}
			}
			else if(target.length == 0)
			{
				this.isActive = '0';
			}
			if(jQuery(this).hasClass('introduction-design-tool') == true)
			{
				if(tshirtIntroduction.windowSize <= 770)
				{
					this.isActive = 0;
				}
				else if(tshirtIntroduction.windowSize > 770 && tshirtIntroduction.windowSize < 1024)
				{
					this.position = 'bottom';
					this.target   = '#dg-help-functions .btn-group-vertical';
				}
			}
			if(this.isActive != '0')
			{
				introActieLst.push(this);
			}
		});
		introActieLst.sort(function(obj1, obj2) {
			return obj1.order - obj2.order;
		});
		
		tshirtIntroduction.introLst  = introActieLst;
		tshirtIntroduction.isLastEle = '0';
		tshirtIntroduction.show(introActieLst[0]);
	}
};

/** Method copy all CSS of element */
(function($){
	
	$.fn.getStyles = function(only, except) {
		
		// the map to return with requested styles and values as KVP
		var product = {};
		
		// the style object from the DOM element we need to iterate through
		var style;
		
		// recycle the name of the style attribute
		var name;
		
		var IE11 = /trident/.test(navigator.userAgent.toLowerCase());
		
		// if it's a limited list, no need to run through the entire style object
		if (only && only instanceof Array) {
			
			for (var i = 0, l = only.length; i < l; i++) {
				// since we have the name already, just return via built-in .css method
				name = only[i];
				product[name] = this.css(name);
			}
			
		} else {
		
			// prevent from empty selector
			if (this.length) {
				
				// otherwise, we need to get everything
				var dom = this.get(0);
				var source = this;
				
				// standards
				if (window.getComputedStyle) {
					
					// convenience methods to turn css case ('background-image') to camel ('backgroundImage')
					var pattern = /\-([a-z])/g;
					var uc = function (a, b) {
							return b.toUpperCase();
					};			
					var camelize = function(string){
						return string.replace(pattern, uc);
					};
					
					// make sure we're getting a good reference
					if (style = window.getComputedStyle(dom, null)) {
						var camel, value;
						// opera doesn't give back style.length - use truthy since a 0 length may as well be skipped anyways
						if (style.length) {
							for (var i = 0, l = style.length; i < l; i++) {
								name = style[i];
								camel = camelize(name);
								if(IE11)
								{
									if(camel == 'width')
									{
										if(source.hasClass('fa-search') || source.hasClass('fa-eye') || source.hasClass('fa-save') || source.hasClass('fa-share-alt'))
										{
											value = '100%';
										}
										else
										{
											value = source[0].getBoundingClientRect().width + 'px';
										}
									}
									else if(camel == 'height')
									{
										value = source[0].getBoundingClientRect().height + 'px';
									}
									else
									{
										value = style.getPropertyValue(name);
									}
								}
								else
								{
									value = style.getPropertyValue(name);
								}
								product[camel] = value;
							}
						} else {
							// opera
							for (name in style) {
								camel = camelize(name);
								value = style.getPropertyValue(name) || style[name];
								product[camel] = value;
							}
						}
					}
				}
				// IE - first try currentStyle, then normal style object - don't bother with runtimeStyle
				else if (style = dom.currentStyle) {
					for (name in style) {
						product[name] = style[name];
					}
				}
				else if (style = dom.style) {
					for (name in style) {
						if (typeof style[name] != 'function') {
							product[name] = style[name];
						}
					}
				}
			}
		}
		
		// remove any styles specified...
		// be careful on blacklist - sometimes vendor-specific values aren't obvious but will be visible...  e.g., excepting 'color' will still let '-webkit-text-fill-color' through, which will in fact color the text
		if (except && except instanceof Array) {
			for (var i = 0, l = except.length; i < l; i++) {
				name = except[i];
				delete product[name];
			}
		}
		
		// one way out so we can process blacklist in one spot
		return product;
	
	};
	
	// sugar - source is the selector, dom element or jQuery instance to copy from - only and except are optional
	$.fn.copyCSS = function(source, only, except) {
		var styles = $(source).getStyles(only, except);
		this.css(styles);
		
		return this;
	};
	
})(jQuery);;/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */

;(function() {
/*jshint eqeqeq:false curly:false latedef:false */
"use strict";

	function setup($) {
		$.fn._fadeIn = $.fn.fadeIn;

		var noOp = $.noop || function() {};

		// this bit is to ensure we don't call setExpression when we shouldn't (with extra muscle to handle
		// confusing userAgent strings on Vista)
		var msie = /MSIE/.test(navigator.userAgent);
		var ie6  = /MSIE 6.0/.test(navigator.userAgent) && ! /MSIE 8.0/.test(navigator.userAgent);
		var mode = document.documentMode || 0;
		var setExpr = $.isFunction( document.createElement('div').style.setExpression );

		// global $ methods for blocking/unblocking the entire page
		$.blockUI   = function(opts) { install(window, opts); };
		$.unblockUI = function(opts) { remove(window, opts); };

		// convenience method for quick growl-like notifications  (http://www.google.com/search?q=growl)
		$.growlUI = function(title, message, timeout, onClose) {
			var $m = $('<div class="growlUI"></div>');
			if (title) $m.append('<h1>'+title+'</h1>');
			if (message) $m.append('<h2>'+message+'</h2>');
			if (timeout === undefined) timeout = 3000;

			// Added by konapun: Set timeout to 30 seconds if this growl is moused over, like normal toast notifications
			var callBlock = function(opts) {
				opts = opts || {};

				$.blockUI({
					message: $m,
					fadeIn : typeof opts.fadeIn  !== 'undefined' ? opts.fadeIn  : 700,
					fadeOut: typeof opts.fadeOut !== 'undefined' ? opts.fadeOut : 1000,
					timeout: typeof opts.timeout !== 'undefined' ? opts.timeout : timeout,
					centerY: false,
					showOverlay: false,
					onUnblock: onClose,
					css: $.blockUI.defaults.growlCSS
				});
			};

			callBlock();
			var nonmousedOpacity = $m.css('opacity');
			$m.mouseover(function() {
				callBlock({
					fadeIn: 0,
					timeout: 30000
				});

				var displayBlock = $('.blockMsg');
				displayBlock.stop(); // cancel fadeout if it has started
				displayBlock.fadeTo(300, 1); // make it easier to read the message by removing transparency
			}).mouseout(function() {
				$('.blockMsg').fadeOut(1000);
			});
			// End konapun additions
		};

		// plugin method for blocking element content
		$.fn.block = function(opts) {
			if ( this[0] === window ) {
				$.blockUI( opts );
				return this;
			}
			var fullOpts = $.extend({}, $.blockUI.defaults, opts || {});
			this.each(function() {
				var $el = $(this);
				if (fullOpts.ignoreIfBlocked && $el.data('blockUI.isBlocked'))
					return;
				$el.unblock({ fadeOut: 0 });
			});

			return this.each(function() {
				if ($.css(this,'position') == 'static') {
					this.style.position = 'relative';
					$(this).data('blockUI.static', true);
				}
				this.style.zoom = 1; // force 'hasLayout' in ie
				install(this, opts);
			});
		};

		// plugin method for unblocking element content
		$.fn.unblock = function(opts) {
			if ( this[0] === window ) {
				$.unblockUI( opts );
				return this;
			}
			return this.each(function() {
				remove(this, opts);
			});
		};

		$.blockUI.version = 2.70; // 2nd generation blocking at no extra cost!

		// override these in your code to change the default behavior and style
		$.blockUI.defaults = {
			// message displayed when blocking (use null for no message)
			message:  '<h1>Please wait...</h1>',

			title: null,		// title string; only used when theme == true
			draggable: true,	// only used when theme == true (requires jquery-ui.js to be loaded)

			theme: false, // set to true to use with jQuery UI themes

			// styles for the message when blocking; if you wish to disable
			// these and use an external stylesheet then do this in your code:
			// $.blockUI.defaults.css = {};
			css: {
				padding:	0,
				margin:		0,
				width:		'30%',
				top:		'40%',
				left:		'35%',
				textAlign:	'center',
				color:		'#000',
				border:		'3px solid #aaa',
				backgroundColor:'#fff',
				cursor:		'wait'
			},

			// minimal style set used when themes are used
			themedCSS: {
				width:	'30%',
				top:	'40%',
				left:	'35%'
			},

			// styles for the overlay
			overlayCSS:  {
				backgroundColor:	'#000',
				opacity:			0.6,
				cursor:				'wait'
			},

			// style to replace wait cursor before unblocking to correct issue
			// of lingering wait cursor
			cursorReset: 'default',

			// styles applied when using $.growlUI
			growlCSS: {
				width:		'350px',
				top:		'10px',
				left:		'',
				right:		'10px',
				border:		'none',
				padding:	'5px',
				opacity:	0.6,
				cursor:		'default',
				color:		'#fff',
				backgroundColor: '#000',
				'-webkit-border-radius':'10px',
				'-moz-border-radius':	'10px',
				'border-radius':		'10px'
			},

			// IE issues: 'about:blank' fails on HTTPS and javascript:false is s-l-o-w
			// (hat tip to Jorge H. N. de Vasconcelos)
			/*jshint scripturl:true */
			iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',

			// force usage of iframe in non-IE browsers (handy for blocking applets)
			forceIframe: false,

			// z-index for the blocking overlay
			baseZ: 1000,

			// set these to true to have the message automatically centered
			centerX: true, // <-- only effects element blocking (page block controlled via css above)
			centerY: true,

			// allow body element to be stetched in ie6; this makes blocking look better
			// on "short" pages.  disable if you wish to prevent changes to the body height
			allowBodyStretch: true,

			// enable if you want key and mouse events to be disabled for content that is blocked
			bindEvents: true,

			// be default blockUI will supress tab navigation from leaving blocking content
			// (if bindEvents is true)
			constrainTabKey: true,

			// fadeIn time in millis; set to 0 to disable fadeIn on block
			fadeIn:  200,

			// fadeOut time in millis; set to 0 to disable fadeOut on unblock
			fadeOut:  400,

			// time in millis to wait before auto-unblocking; set to 0 to disable auto-unblock
			timeout: 0,

			// disable if you don't want to show the overlay
			showOverlay: true,

			// if true, focus will be placed in the first available input field when
			// page blocking
			focusInput: true,

            // elements that can receive focus
            focusableElements: ':input:enabled:visible',

			// suppresses the use of overlay styles on FF/Linux (due to performance issues with opacity)
			// no longer needed in 2012
			// applyPlatformOpacityRules: true,

			// callback method invoked when fadeIn has completed and blocking message is visible
			onBlock: null,

			// callback method invoked when unblocking has completed; the callback is
			// passed the element that has been unblocked (which is the window object for page
			// blocks) and the options that were passed to the unblock call:
			//	onUnblock(element, options)
			onUnblock: null,

			// callback method invoked when the overlay area is clicked.
			// setting this will turn the cursor to a pointer, otherwise cursor defined in overlayCss will be used.
			onOverlayClick: null,

			// don't ask; if you really must know: http://groups.google.com/group/jquery-en/browse_thread/thread/36640a8730503595/2f6a79a77a78e493#2f6a79a77a78e493
			quirksmodeOffsetHack: 4,

			// class name of the message block
			blockMsgClass: 'blockMsg',

			// if it is already blocked, then ignore it (don't unblock and reblock)
			ignoreIfBlocked: false
		};

		// private data and functions follow...

		var pageBlock = null;
		var pageBlockEls = [];

		function install(el, opts) {
			var css, themedCSS;
			var full = (el == window);
			var msg = (opts && opts.message !== undefined ? opts.message : undefined);
			opts = $.extend({}, $.blockUI.defaults, opts || {});

			if (opts.ignoreIfBlocked && $(el).data('blockUI.isBlocked'))
				return;

			opts.overlayCSS = $.extend({}, $.blockUI.defaults.overlayCSS, opts.overlayCSS || {});
			css = $.extend({}, $.blockUI.defaults.css, opts.css || {});
			if (opts.onOverlayClick)
				opts.overlayCSS.cursor = 'pointer';

			themedCSS = $.extend({}, $.blockUI.defaults.themedCSS, opts.themedCSS || {});
			msg = msg === undefined ? opts.message : msg;

			// remove the current block (if there is one)
			if (full && pageBlock)
				remove(window, {fadeOut:0});

			// if an existing element is being used as the blocking content then we capture
			// its current place in the DOM (and current display style) so we can restore
			// it when we unblock
			if (msg && typeof msg != 'string' && (msg.parentNode || msg.jquery)) {
				var node = msg.jquery ? msg[0] : msg;
				var data = {};
				$(el).data('blockUI.history', data);
				data.el = node;
				data.parent = node.parentNode;
				data.display = node.style.display;
				data.position = node.style.position;
				if (data.parent)
					data.parent.removeChild(node);
			}

			$(el).data('blockUI.onUnblock', opts.onUnblock);
			var z = opts.baseZ;

			// blockUI uses 3 layers for blocking, for simplicity they are all used on every platform;
			// layer1 is the iframe layer which is used to supress bleed through of underlying content
			// layer2 is the overlay layer which has opacity and a wait cursor (by default)
			// layer3 is the message content that is displayed while blocking
			var lyr1, lyr2, lyr3, s;
			if (msie || opts.forceIframe)
				lyr1 = $('<iframe class="blockUI" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+opts.iframeSrc+'"></iframe>');
			else
				lyr1 = $('<div class="blockUI" style="display:none"></div>');

			if (opts.theme)
				lyr2 = $('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+ (z++) +';display:none"></div>');
			else
				lyr2 = $('<div class="blockUI blockOverlay" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');

			if (opts.theme && full) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(z+10)+';display:none;position:fixed">';
				if ( opts.title ) {
					s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>';
				}
				s += '<div class="ui-widget-content ui-dialog-content"></div>';
				s += '</div>';
			}
			else if (opts.theme) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(z+10)+';display:none;position:absolute">';
				if ( opts.title ) {
					s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>';
				}
				s += '<div class="ui-widget-content ui-dialog-content"></div>';
				s += '</div>';
			}
			else if (full) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage" style="z-index:'+(z+10)+';display:none;position:fixed"></div>';
			}
			else {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement" style="z-index:'+(z+10)+';display:none;position:absolute"></div>';
			}
			lyr3 = $(s);

			// if we have a message, style it
			if (msg) {
				if (opts.theme) {
					lyr3.css(themedCSS);
					lyr3.addClass('ui-widget-content');
				}
				else
					lyr3.css(css);
			}

			// style the overlay
			if (!opts.theme /*&& (!opts.applyPlatformOpacityRules)*/)
				lyr2.css(opts.overlayCSS);
			lyr2.css('position', full ? 'fixed' : 'absolute');

			// make iframe layer transparent in IE
			if (msie || opts.forceIframe)
				lyr1.css('opacity',0.0);

			//$([lyr1[0],lyr2[0],lyr3[0]]).appendTo(full ? 'body' : el);
			var layers = [lyr1,lyr2,lyr3], $par = full ? $('body') : $(el);
			$.each(layers, function() {
				this.appendTo($par);
			});

			if (opts.theme && opts.draggable && $.fn.draggable) {
				lyr3.draggable({
					handle: '.ui-dialog-titlebar',
					cancel: 'li'
				});
			}

			// ie7 must use absolute positioning in quirks mode and to account for activex issues (when scrolling)
			var expr = setExpr && (!$.support.boxModel || $('object,embed', full ? null : el).length > 0);
			if (ie6 || expr) {
				// give body 100% height
				if (full && opts.allowBodyStretch && $.support.boxModel)
					$('html,body').css('height','100%');

				// fix ie6 issue when blocked element has a border width
				if ((ie6 || !$.support.boxModel) && !full) {
					var t = sz(el,'borderTopWidth'), l = sz(el,'borderLeftWidth');
					var fixT = t ? '(0 - '+t+')' : 0;
					var fixL = l ? '(0 - '+l+')' : 0;
				}

				// simulate fixed position
				$.each(layers, function(i,o) {
					var s = o[0].style;
					s.position = 'absolute';
					if (i < 2) {
						if (full)
							s.setExpression('height','Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:'+opts.quirksmodeOffsetHack+') + "px"');
						else
							s.setExpression('height','this.parentNode.offsetHeight + "px"');
						if (full)
							s.setExpression('width','jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"');
						else
							s.setExpression('width','this.parentNode.offsetWidth + "px"');
						if (fixL) s.setExpression('left', fixL);
						if (fixT) s.setExpression('top', fixT);
					}
					else if (opts.centerY) {
						if (full) s.setExpression('top','(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
						s.marginTop = 0;
					}
					else if (!opts.centerY && full) {
						var top = (opts.css && opts.css.top) ? parseInt(opts.css.top, 10) : 0;
						var expression = '((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + '+top+') + "px"';
						s.setExpression('top',expression);
					}
				});
			}

			// show the message
			if (msg) {
				if (opts.theme)
					lyr3.find('.ui-widget-content').append(msg);
				else
					lyr3.append(msg);
				if (msg.jquery || msg.nodeType)
					$(msg).show();
			}

			if ((msie || opts.forceIframe) && opts.showOverlay)
				lyr1.show(); // opacity is zero
			if (opts.fadeIn) {
				var cb = opts.onBlock ? opts.onBlock : noOp;
				var cb1 = (opts.showOverlay && !msg) ? cb : noOp;
				var cb2 = msg ? cb : noOp;
				if (opts.showOverlay)
					lyr2._fadeIn(opts.fadeIn, cb1);
				if (msg)
					lyr3._fadeIn(opts.fadeIn, cb2);
			}
			else {
				if (opts.showOverlay)
					lyr2.show();
				if (msg)
					lyr3.show();
				if (opts.onBlock)
					opts.onBlock.bind(lyr3)();
			}

			// bind key and mouse events
			bind(1, el, opts);

			if (full) {
				pageBlock = lyr3[0];
				pageBlockEls = $(opts.focusableElements,pageBlock);
				if (opts.focusInput)
					setTimeout(focus, 20);
			}
			else
				center(lyr3[0], opts.centerX, opts.centerY);

			if (opts.timeout) {
				// auto-unblock
				var to = setTimeout(function() {
					if (full)
						$.unblockUI(opts);
					else
						$(el).unblock(opts);
				}, opts.timeout);
				$(el).data('blockUI.timeout', to);
			}
		}

		// remove the block
		function remove(el, opts) {
			var count;
			var full = (el == window);
			var $el = $(el);
			var data = $el.data('blockUI.history');
			var to = $el.data('blockUI.timeout');
			if (to) {
				clearTimeout(to);
				$el.removeData('blockUI.timeout');
			}
			opts = $.extend({}, $.blockUI.defaults, opts || {});
			bind(0, el, opts); // unbind events

			if (opts.onUnblock === null) {
				opts.onUnblock = $el.data('blockUI.onUnblock');
				$el.removeData('blockUI.onUnblock');
			}

			var els;
			if (full) // crazy selector to handle odd field errors in ie6/7
				els = $('body').children().filter('.blockUI').add('body > .blockUI');
			else
				els = $el.find('>.blockUI');

			// fix cursor issue
			if ( opts.cursorReset ) {
				if ( els.length > 1 )
					els[1].style.cursor = opts.cursorReset;
				if ( els.length > 2 )
					els[2].style.cursor = opts.cursorReset;
			}

			if (full)
				pageBlock = pageBlockEls = null;

			if (opts.fadeOut) {
				count = els.length;
				els.stop().fadeOut(opts.fadeOut, function() {
					if ( --count === 0)
						reset(els,data,opts,el);
				});
			}
			else
				reset(els, data, opts, el);
		}

		// move blocking element back into the DOM where it started
		function reset(els,data,opts,el) {
			var $el = $(el);
			if ( $el.data('blockUI.isBlocked') )
				return;

			els.each(function(i,o) {
				// remove via DOM calls so we don't lose event handlers
				if (this.parentNode)
					this.parentNode.removeChild(this);
			});

			if (data && data.el) {
				data.el.style.display = data.display;
				data.el.style.position = data.position;
				data.el.style.cursor = 'default'; // #59
				if (data.parent)
					data.parent.appendChild(data.el);
				$el.removeData('blockUI.history');
			}

			if ($el.data('blockUI.static')) {
				$el.css('position', 'static'); // #22
			}

			if (typeof opts.onUnblock == 'function')
				opts.onUnblock(el,opts);

			// fix issue in Safari 6 where block artifacts remain until reflow
			var body = $(document.body), w = body.width(), cssW = body[0].style.width;
			body.width(w-1).width(w);
			body[0].style.width = cssW;
		}

		// bind/unbind the handler
		function bind(b, el, opts) {
			var full = el == window, $el = $(el);

			// don't bother unbinding if there is nothing to unbind
			if (!b && (full && !pageBlock || !full && !$el.data('blockUI.isBlocked')))
				return;

			$el.data('blockUI.isBlocked', b);

			// don't bind events when overlay is not in use or if bindEvents is false
			if (!full || !opts.bindEvents || (b && !opts.showOverlay))
				return;

			// bind anchors and inputs for mouse and key events
			var events = 'mousedown mouseup keydown keypress keyup touchstart touchend touchmove';
			if (b)
				$(document).bind(events, opts, handler);
			else
				$(document).unbind(events, handler);

		// former impl...
		//		var $e = $('a,:input');
		//		b ? $e.bind(events, opts, handler) : $e.unbind(events, handler);
		}

		// event handler to suppress keyboard/mouse events when blocking
		function handler(e) {
			// allow tab navigation (conditionally)
			if (e.type === 'keydown' && e.keyCode && e.keyCode == 9) {
				if (pageBlock && e.data.constrainTabKey) {
					var els = pageBlockEls;
					var fwd = !e.shiftKey && e.target === els[els.length-1];
					var back = e.shiftKey && e.target === els[0];
					if (fwd || back) {
						setTimeout(function(){focus(back);},10);
						return false;
					}
				}
			}
			var opts = e.data;
			var target = $(e.target);
			if (target.hasClass('blockOverlay') && opts.onOverlayClick)
				opts.onOverlayClick(e);

			// allow events within the message content
			if (target.parents('div.' + opts.blockMsgClass).length > 0)
				return true;

			// allow events for content that is not being blocked
			return target.parents().children().filter('div.blockUI').length === 0;
		}

		function focus(back) {
			if (!pageBlockEls)
				return;
			var e = pageBlockEls[back===true ? pageBlockEls.length-1 : 0];
			if (e)
				e.focus();
		}

		function center(el, x, y) {
			var p = el.parentNode, s = el.style;
			var l = ((p.offsetWidth - el.offsetWidth)/2) - sz(p,'borderLeftWidth');
			var t = ((p.offsetHeight - el.offsetHeight)/2) - sz(p,'borderTopWidth');
			if (x) s.left = l > 0 ? (l+'px') : '0';
			if (y) s.top  = t > 0 ? (t+'px') : '0';
		}

		function sz(el, p) {
			return parseInt($.css(el,p),10)||0;
		}

	}


	/*global define:true */
	if (typeof define === 'function' && define.amd && define.amd.jQuery) {
		define(['jquery'], setup);
	} else {
		setup(jQuery);
	}

})();;/*!
 * Isotope PACKAGED v3.0.4
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2017 Metafizzy
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,s,a){function u(t,e,o){var n,s="$()."+i+'("'+e+'")';return t.each(function(t,u){var h=a.data(u,i);if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+s);var d=h[e];if(!d||"_"==e.charAt(0))return void r(s+" is not a valid method");var l=d.apply(h,o);n=void 0===n?l:n}),void 0!==n?n:t}function h(t,e){t.each(function(t,o){var n=a.data(o,i);n?(n.option(e),n._init()):(n=new s(o,e),a.data(o,i,n))})}a=a||e||t.jQuery,a&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=n.call(arguments,1);return u(this,t,e)}return h(this,t),this},o(a))}function o(t){!t||t&&t.bridget||(t.bridget=i)}var n=Array.prototype.slice,s=t.console,r="undefined"==typeof s?function(){}:function(t){s.error(t)};return o(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},o=i[t]=i[t]||[];return o.indexOf(e)==-1&&o.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},o=i[t]=i[t]||{};return o[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var o=i.indexOf(e);return o!=-1&&i.splice(o,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var o=0,n=i[o];e=e||[];for(var s=this._onceEvents&&this._onceEvents[t];n;){var r=s&&s[n];r&&(this.off(t,n),delete s[n]),n.apply(this,e),o+=r?0:1,n=i[o]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=t.indexOf("%")==-1&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<h;e++){var i=u[e];t[i]=0}return t}function o(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function n(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var n=o(e);s.isBoxSizeOuter=r=200==t(n.width),i.removeChild(e)}}function s(e){if(n(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var s=o(e);if("none"==s.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==s.boxSizing,l=0;l<h;l++){var f=u[l],c=s[f],m=parseFloat(c);a[f]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,y=a.paddingTop+a.paddingBottom,g=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,I=a.borderTopWidth+a.borderBottomWidth,z=d&&r,x=t(s.width);x!==!1&&(a.width=x+(z?0:p+_));var S=t(s.height);return S!==!1&&(a.height=S+(z?0:y+I)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(y+I),a.outerWidth=a.width+g,a.outerHeight=a.height+v,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=u.length,d=!1;return s}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var o=e[i],n=o+"MatchesSelector";if(t[n])return n}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"object"==typeof t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);i!=-1&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,o){t=i.makeArray(t);var n=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!o)return void n.push(t);e(t,o)&&n.push(t);for(var i=t.querySelectorAll(o),s=0;s<i.length;s++)n.push(i[s])}}),n},i.debounceMethod=function(t,e,i){var o=t.prototype[e],n=e+"Timeout";t.prototype[e]=function(){var t=this[n];t&&clearTimeout(t);var e=arguments,s=this;this[n]=setTimeout(function(){o.apply(s,e),delete s[n]},i||100)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var o=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var s=i.toDashed(n),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),h=i.makeArray(a).concat(i.makeArray(u)),d=r+"-options",l=t.jQuery;h.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(d);try{i=s&&JSON.parse(s)}catch(a){return void(o&&o.error("Error parsing "+r+" on "+t.className+": "+a))}var u=new e(t,i);l&&l.data(t,n,u)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function o(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,r="string"==typeof s.transition?"transition":"WebkitTransition",a="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],h={transform:a,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},d=o.prototype=Object.create(t.prototype);d.constructor=o,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var o=h[i]||i;e[o]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),o=t[e?"left":"right"],n=t[i?"top":"bottom"],s=this.layout.size,r=o.indexOf("%")!=-1?parseFloat(o)/100*s.width:parseInt(o,10),a=n.indexOf("%")!=-1?parseFloat(n)/100*s.height:parseInt(n,10);r=isNaN(r)?0:r,a=isNaN(a)?0:a,r-=e?s.paddingLeft:s.paddingRight,a-=i?s.paddingTop:s.paddingBottom,this.position.x=r,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),n=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[n];e[s]=this.getXValue(a),e[r]="";var u=o?"paddingTop":"paddingBottom",h=o?"top":"bottom",d=o?"bottom":"top",l=this.position.y+t[u];e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),s=parseInt(e,10),r=n===this.position.x&&s===this.position.y;if(this.setPosition(t,e),r&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,u=e-o,h={};h.transform=this.getTranslate(a,u),this.transition({to:h,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop");return t=i?t:-t,e=o?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+n(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(u,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=f[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(u,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var c={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(c)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},o}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,o,n,s){return e(t,i,o,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,o,n){"use strict";function s(t,e){var i=o.getQueryElement(t);if(!i)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=o.extend({},this.constructor.defaults),this.option(e);var n=++l;this.element.outlayerGUID=n,f[n]=this,this._create();var s=this._getOption("initLayout");s&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],o=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var n=m[o]||1;return i*n}var u=t.console,h=t.jQuery,d=function(){},l=0,f={};s.namespace="outlayer",s.Item=n,s.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=s.prototype;o.extend(c,e.prototype),c.option=function(t){o.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},s.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),o.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0;n<e.length;n++){var s=e[n],r=new i(s,this);o.push(r)}return o},c._filterFindItemElements=function(t){return o.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=i(this.element)},c._getMeasurement=function(t,e){var o,n=this.options[t];n?("string"==typeof n?o=this.element.querySelector(n):n instanceof HTMLElement&&(o=n),this[t]=o?i(o)[e]:n):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var o=this._getItemLayoutPosition(t);o.item=t,o.isInstant=e||t.isLayoutInstant,i.push(o)},this),this._processLayoutQueue(i)}},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},c._positionItem=function(t,e,i,o,n){o?t.goTo(e,i):(t.stagger(n*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},c._getContainerSize=d,c._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},c._emitCompleteOnItems=function(t,e){function i(){n.dispatchEvent(t+"Complete",null,[e])}function o(){r++,r==s&&i()}var n=this,s=e.length;if(!e||!s)return void i();var r=0;e.forEach(function(e){e.once(t,o)})},c.dispatchEvent=function(t,e,i){var o=e?[e].concat(i):i;if(this.emitEvent(t,o),h)if(this.$element=this.$element||h(this.element),e){var n=h.Event(e);n.type=t,this.$element.trigger(n,i)}else this.$element.trigger(t,i)},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){o.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o.makeArray(t)},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=d,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),o=this._boundingRect,n=i(t),s={left:e.left-o.left-n.marginLeft,top:e.top-o.top-n.marginTop,right:o.right-e.right-n.marginRight,bottom:o.bottom-e.bottom-n.marginBottom};return s},c.handleEvent=o.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},o.debounceMethod(s,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},c.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},c.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=o.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),o.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=o.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},s.create=function(t,e){var i=r(s);return i.defaults=o.extend({},s.defaults),o.extend(i.defaults,e),i.compatOptions=o.extend({},s.compatOptions),i.namespace=t,i.data=s.data,i.Item=r(n),o.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var m={ms:1,s:1e3};return s.Item=n,s}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),o=i._create;i._create=function(){this.id=this.layout.itemGUID++,o.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var n=i.destroy;return i.destroy=function(){n.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var o=i.prototype,n=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return n.forEach(function(t){o[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),o.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!=this.isotope.size.innerHeight},o._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},o.getColumnWidth=function(){this.getSegmentSize("column","Width")},o.getRowHeight=function(){this.getSegmentSize("row","Height")},o.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},o.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},o.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},o.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function n(){i.apply(this,arguments)}return n.prototype=Object.create(o),n.prototype.constructor=n,e&&(n.options=e),n.prototype.namespace=t,i.modes[t]=n,n},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var o=i.prototype;return o._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},o.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var o=this.columnWidth+=this.gutter,n=this.containerWidth+this.gutter,s=n/o,r=o-n%o,a=r&&r<1?"round":"floor";s=Math[a](s),this.cols=Math.max(s,1)},o.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,o=e(i);this.containerWidth=o&&o.innerWidth},o._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&e<1?"round":"ceil",o=Math[i](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var n=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",s=this[n](o,t),r={x:this.columnWidth*s.col,y:s.y},a=s.y+t.size.outerHeight,u=o+s.col,h=s.col;h<u;h++)this.colYs[h]=a;return r},o._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},o._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;o<i;o++)e[o]=this._getColGroupY(o,t);return e},o._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},o._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,o=t>1&&i+t>this.cols;i=o?0:i;var n=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=n?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},o._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this._getOption("originLeft"),s=n?o.left:o.right,r=s+i.outerWidth,a=Math.floor(s/this.columnWidth);a=Math.max(0,a);var u=Math.floor(r/this.columnWidth);u-=r%this.columnWidth?0:1,u=Math.min(this.cols-1,u);for(var h=this._getOption("originTop"),d=(h?o.top:o.bottom)+i.outerHeight,l=a;l<=u;l++)this.colYs[l]=Math.max(d,this.colYs[l])},o._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},o._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),o=i.prototype,n={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)n[s]||(o[s]=e.prototype[s]);var r=o.measureColumns;o.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=o._getOption;return o._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(i,o,n,s,r,a){return e(t,i,o,n,s,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope/js/item"),require("isotope/js/layout-mode"),require("isotope/js/layout-modes/masonry"),require("isotope/js/layout-modes/fit-rows"),require("isotope/js/layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,o,n,s,r){function a(t,e){return function(i,o){for(var n=0;n<t.length;n++){var s=t[n],r=i.sortData[s],a=o.sortData[s];if(r>a||r<a){var u=void 0!==e[s]?e[s]:e,h=u?1:-1;return(r>a?1:-1)*h}}return 0}}var u=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=s,d.LayoutMode=r;var l=d.prototype;l._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in r.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){var o=t[i];o.id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?n.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},l._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},l._bindArrangeComplete=function(){function t(){e&&i&&o&&n.dispatchEvent("arrangeComplete",null,[n.filteredItems])}var e,i,o,n=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){o=!0,t()})},l._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],o=[],n=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?o.push(a):u||a.isHidden||n.push(a)}}return{matches:i,needReveal:o,needHide:n}},l._getFilterTest=function(t){return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return o(e.element,t)}},l.updateSortData=function(t){
var e;t?(t=n.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=f(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){var o=t[i];o.updateSortData()}};var f=function(){function t(t){if("string"!=typeof t)return t;var i=h(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),s=n&&n[1],r=e(s,o),a=d.sortDataParsers[i[1]];return t=a?function(t){return t&&a(r(t))}:function(t){return t&&r(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){if(this.options.sortBy){var t=n.makeArray(this.options.sortBy);this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory));var e=a(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(e)}},l._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1;return!0},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},l._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;i<n;i++)o=e[i],this.element.appendChild(o.element);var s=this._filter(e).matches;for(i=0;i<n;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;i<n;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var c=l.remove;return l.remove=function(t){t=n.makeArray(t);var e=this.getItems(t);c.call(this,t);for(var i=e&&e.length,o=0;i&&o<i;o++){var s=e[o];n.removeFrom(this.filteredItems,s)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++){var e=this.items[t];e.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var o=t.apply(this,e);return this.options.transitionDuration=i,o},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},d});;(function(r,v,f){function w(a,b,g){a.addEventListener?a.addEventListener(b,g,!1):a.attachEvent("on"+b,g)}function A(a){if("keypress"==a.type){var b=String.fromCharCode(a.which);a.shiftKey||(b=b.toLowerCase());return b}return p[a.which]?p[a.which]:t[a.which]?t[a.which]:String.fromCharCode(a.which).toLowerCase()}function F(a){var b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");return b}function x(a){return"shift"==a||"ctrl"==a||"alt"==a||
"meta"==a}function B(a,b){var g,c,d,f=[];g=a;"+"===g?g=["+"]:(g=g.replace(/\+{2}/g,"+plus"),g=g.split("+"));for(d=0;d<g.length;++d)c=g[d],C[c]&&(c=C[c]),b&&"keypress"!=b&&D[c]&&(c=D[c],f.push("shift")),x(c)&&f.push(c);g=c;d=b;if(!d){if(!n){n={};for(var q in p)95<q&&112>q||p.hasOwnProperty(q)&&(n[p[q]]=q)}d=n[g]?"keydown":"keypress"}"keypress"==d&&f.length&&(d="keydown");return{key:c,modifiers:f,action:d}}function E(a,b){return null===a||a===v?!1:a===b?!0:E(a.parentNode,b)}function c(a){function b(a){a=
a||{};var b=!1,l;for(l in n)a[l]?b=!0:n[l]=0;b||(y=!1)}function g(a,b,u,e,c,g){var l,m,k=[],f=u.type;if(!h._callbacks[a])return[];"keyup"==f&&x(a)&&(b=[a]);for(l=0;l<h._callbacks[a].length;++l)if(m=h._callbacks[a][l],(e||!m.seq||n[m.seq]==m.level)&&f==m.action){var d;(d="keypress"==f&&!u.metaKey&&!u.ctrlKey)||(d=m.modifiers,d=b.sort().join(",")===d.sort().join(","));d&&(d=e&&m.seq==e&&m.level==g,(!e&&m.combo==c||d)&&h._callbacks[a].splice(l,1),k.push(m))}return k}function f(a,b,c,e){h.stopCallback(b,
b.target||b.srcElement,c,e)||!1!==a(b,c)||(b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation?b.stopPropagation():b.cancelBubble=!0)}function d(a){"number"!==typeof a.which&&(a.which=a.keyCode);var b=A(a);b&&("keyup"==a.type&&z===b?z=!1:h.handleKey(b,F(a),a))}function p(a,c,u,e){function l(c){return function(){y=c;++n[a];clearTimeout(r);r=setTimeout(b,1E3)}}function g(c){f(u,c,a);"keyup"!==e&&(z=A(c));setTimeout(b,10)}for(var d=n[a]=0;d<c.length;++d){var m=d+1===c.length?g:l(e||
B(c[d+1]).action);q(c[d],m,e,a,d)}}function q(a,b,c,e,d){h._directMap[a+":"+c]=b;a=a.replace(/\s+/g," ");var f=a.split(" ");1<f.length?p(a,f,b,c):(c=B(a,c),h._callbacks[c.key]=h._callbacks[c.key]||[],g(c.key,c.modifiers,{type:c.action},e,a,d),h._callbacks[c.key][e?"unshift":"push"]({callback:b,modifiers:c.modifiers,action:c.action,seq:e,level:d,combo:a}))}var h=this;a=a||v;if(!(h instanceof c))return new c(a);h.target=a;h._callbacks={};h._directMap={};var n={},r,z=!1,t=!1,y=!1;h._handleKey=function(a,
c,d){var e=g(a,c,d),k;c={};var h=0,l=!1;for(k=0;k<e.length;++k)e[k].seq&&(h=Math.max(h,e[k].level));for(k=0;k<e.length;++k)e[k].seq?e[k].level==h&&(l=!0,c[e[k].seq]=1,f(e[k].callback,d,e[k].combo,e[k].seq)):l||f(e[k].callback,d,e[k].combo);e="keypress"==d.type&&t;d.type!=y||x(a)||e||b(c);t=l&&"keydown"==d.type};h._bindMultiple=function(a,b,c){for(var d=0;d<a.length;++d)q(a[d],b,c)};w(a,"keypress",d);w(a,"keydown",d);w(a,"keyup",d)}if(r){var p={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",
18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},t={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},D={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},C={option:"alt",command:"meta","return":"enter",
escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},n;for(f=1;20>f;++f)p[111+f]="f"+f;for(f=0;9>=f;++f)p[f+96]=f.toString();c.prototype.bind=function(a,b,c){a=a instanceof Array?a:[a];this._bindMultiple.call(this,a,b,c);return this};c.prototype.unbind=function(a,b){return this.bind.call(this,a,function(){},b)};c.prototype.trigger=function(a,b){if(this._directMap[a+":"+b])this._directMap[a+":"+b]({},a);return this};c.prototype.reset=function(){this._callbacks={};
this._directMap={};return this};c.prototype.stopCallback=function(a,b){return-1<(" "+b.className+" ").indexOf(" mousetrap ")||E(b,this.target)?!1:"INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.isContentEditable};c.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)};c.addKeycodes=function(a){for(var b in a)a.hasOwnProperty(b)&&(p[b]=a[b]);n=null};c.init=function(){var a=c(v),b;for(b in a)"_"!==b.charAt(0)&&(c[b]=function(b){return function(){return a[b].apply(a,
arguments)}}(b))};c.init();r.Mousetrap=c;"undefined"!==typeof module&&module.exports&&(module.exports=c);"function"===typeof define&&define.amd&&define(function(){return c})}})("undefined"!==typeof window?window:null,"undefined"!==typeof window?document:null);

var hotkeys = Mousetrap;
hotkeys.bind(['command+z', 'ctrl+z'], function() {
	design.tools.undo();
	return false;
});
hotkeys.bind(['command+shift+z', 'ctrl+shift+z'], function() {
	design.tools.redo();
	return false;
});
hotkeys.bind(['command+a', 'ctrl+a'], function() {
	design.selectAll();
	return false;
});
hotkeys.bind(['command+0', 'ctrl+0'], function() {
	design.tools.reset(null);
	return false;
});
hotkeys.bind(['command+s', 'ctrl+s'], function() {
	design.save();
	return false;
});
hotkeys.bind(['command+c', 'ctrl+c'], function() {
	design.tools.copy(null);
	return false;
});
hotkeys.bind(['command+t', 'ctrl+t'], function() {
	design.text.create();
	return false;
});
hotkeys.bind(['command+=', 'ctrl+='], function() {
	design.tools.zoom();
	return false;
});
hotkeys.bind(['command+-', 'ctrl+-'], function() {
	design.tools.zoom();
	return false;
});
hotkeys.bind(['command+backspace', 'del', 'backspace'], function() {
	design.tools.remove();
	return false;
});
hotkeys.bind(['command+o', 'ctrl+o'], function() {
	jQuery('.view_change_products')[0].click();
	return false;
});
hotkeys.bind(['command+d', 'ctrl+d'], function() {
	dzoom.download();
	return false;
});
hotkeys.bind(['command+x', 'ctrl+x'], function() {
	design.item.unselect();
	return false;
});
function scrolltoTop(e)
{
	jQuery('#dg-obj-clipart .option-panel-content').animate({
        scrollTop: 0
    }, 500);
};/* deprecated */;if(check_dpi == 1)
{
	jQuery(document).on('resize.item.design', function(event, ui){
		var e = design.item.get();
		if(typeof e[0] != 'undefined')
		{
			var item = e[0].item;
			if(typeof jQuery(e[0]).data('maxWidth') != 'undefined' && typeof jQuery(e[0]).data('maxHeight') != 'undefined')
			{
				if(item.type == 'clipart' && typeof item.file != 'undefined' && typeof item.file.type != 'undefined' && item.file.type == 'image')
				{
					var maxWidth = jQuery(e[0]).data('maxWidth')/dpioutput;
					maxWidth = maxWidth * 2.54;
					var maxHeight = jQuery(e[0]).data('maxHeight')/dpioutput;
					maxHeight = maxHeight * 2.54;
					
					var id = jQuery('.labView.active').attr('id');
					var view = id.replace('view-', '');
					var width   = ui.size.width * sizesCn[view];
					var height  = ui.size.height * sizesCn[view];
					var viewDes = jQuery('#design-area .labView.active .design-area');
					var zoom    = -1;
					if(viewDes.hasClass('zoom')) {
						zoom   = viewDes.data('zoom');
						width  = width / zoom;
						height = height / zoom;
					}
					width = width.toFixed(2);
					height = height.toFixed(2);
					if(width > maxWidth || height > maxHeight)
					{
						jQuery(e[0]).find('svg').css('outline', '2px dashed #f00');
						jQuery('.error-message').show();
						jQuery(e[0]).data('allow_addcart', 0);
					}
					else
					{
						jQuery(e[0]).find('svg').css('outline', 'none');
						jQuery('.error-message').hide();
						jQuery(e[0]).data('allow_addcart', 1);
					}
				}
			}
		}
	});

	var photoSize = {};
	photoSize.maxWidth = 0; 
	photoSize.maxHeight = 0; 
	jQuery(document).on('uploaded', function(event, values, e){
		photoSize.maxWidth = values.size.width; 
		photoSize.maxHeight = values.size.height;
	});

	jQuery(document).on('checkItem.item.design', function(event, check){
		jQuery('.drag-item').each(function(){
			if( typeof jQuery(this).data('allow_addcart') != 'undefined' && jQuery(this).data('allow_addcart') == 0 )
			{
				check.status = false;
				check.callback = true;
				alert_text(addon_photo_size_cart_msg);
				return check;
			}
		});
		return check;
	});

	function checkPhotoDPI()
	{
		var maxWidth = jQuery(this).data('maxWidth')/dpioutput;
		maxWidth = maxWidth * 2.54;
		var maxHeight = jQuery(this).data('maxHeight')/dpioutput;
		maxHeight = maxHeight * 2.54;
		
		var error = 0;
		jQuery('.drag-item').each(function(){
			var e = jQuery(this);
			if(typeof e.data('maxWidth') != 'undefined' && typeof e.data('maxHeight') != 'undefined')
			{
				var item = this.item;
				if(item.type == 'clipart' && typeof item.file != 'undefined' && typeof item.file.type != 'undefined' && item.file.type == 'image')
				{
					var id = e.parents('.labView').attr('id');
					var view = id.replace('view-', '');
					var width   = e.width() * sizesCn[view];
					var height  = e.height() * sizesCn[view];
					var viewDes = jQuery('#'+id +' .design-area');
					var zoom    = -1;
					if(viewDes.hasClass('zoom')) {
						zoom   = viewDes.data('zoom');
						width  = width / zoom;
						height = height / zoom;
					}
					width = width.toFixed(2);
					height = height.toFixed(2);
					if(width > maxWidth || height > maxHeight)
					{
						e.find('svg').css('outline', '2px dashed #f00');
						e.data('allow_addcart', 0);
						error = 1;
					}
					else
					{
						e.find('svg').css('outline', 'none');
						e.data('allow_addcart', 1);
					}
				}
			}
		});
		if(error == 1)
		{
			jQuery('.error-message').show();
		}
		else
		{
			jQuery('.error-message').hide();
		}
	}

	jQuery(document).on('product.change.design', function(event, product){
		if(typeof product.dpioutput == 'undefined')
			dpioutput = dpioutput_default;
		else
			dpioutput = product.dpioutput;
		
		checkPhotoDPI();
	});

	jQuery(document).on('added.uploaded', function(event, e){
		var item = e.item;	
		if(item.type == 'clipart' && typeof item.file != 'undefined' && typeof item.file.type != 'undefined' && item.file.type == 'image')
		{
			if(photoSize.maxWidth > 0)
			{
				jQuery(e).data('maxWidth', photoSize.maxWidth);
				jQuery(e).data('maxHeight', photoSize.maxHeight);		
				var maxWidth = jQuery(e).data('maxWidth')/dpioutput;
				maxWidth = maxWidth * 2.54;
				var maxHeight = jQuery(e).data('maxHeight')/dpioutput;
				maxHeight = maxHeight * 2.54;
				
				var id = jQuery('.labView.active').attr('id');
				var view = id.replace('view-', '');
				var width   = jQuery(e).width() * sizesCn[view];
				var height  = jQuery(e).height() * sizesCn[view];
				var viewDes = jQuery('#design-area .labView.active .design-area');
				var zoom    = -1;
				if(viewDes.hasClass('zoom')) {
					zoom   = viewDes.data('zoom');
					width  = width / zoom;
					height = height / zoom;
				}
				width = width.toFixed(2);
				height = height.toFixed(2);
				if(width > maxWidth || height > maxHeight)
				{
					jQuery(e).find('svg').css('outline', '2px dashed #f00');
					jQuery('.error-message').show();
					jQuery(e).data('allow_addcart', 0);
				}
				else
				{
					jQuery(e).find('svg').css('outline', 'none');
					jQuery('.error-message').hide();
					jQuery(e).data('allow_addcart', 1);
				}
				photoSize.maxWidth = 0;
			}
		}
	});

	jQuery(document).on('remove.item.design', function(event, e){
		jQuery('.error-message').hide();
	});

	// save data
	jQuery(document).on('exports.item.design', function(event, item, e){
		if(typeof jQuery(e).data('maxHeight') != 'undefined')
		{
			item.maxHeight = jQuery(e).data('maxHeight');
		}
		if(typeof jQuery(e).data('maxWidth') != 'undefined')
		{
			item.maxWidth = jQuery(e).data('maxWidth');
		}
		return item;
	});

	// load design
	jQuery(document).on('after.imports.item.design', function(event, span, item){
		if(typeof item.maxWidth != 'undefined')
		{
			jQuery(span).data('maxWidth', item.maxWidth);
		}
		if(typeof item.maxHeight != 'undefined')
		{
			jQuery(span).data('maxHeight', item.maxHeight);
		}
	});

	jQuery(document).ready(function(){
		if(jQuery('#dg-wapper .error-message').length == 0)
		{
			jQuery('#dg-wapper').append('<div class="error-message">'+addon_photo_size_msg+'</div>');
		}
	});
};;design.platform = 'wordpress';
jQuery(document).on('ini.design', function(event) {
	jQuery.ajax({
		url: siteURL+'platform.php',
		dataType: 'text',
		type: 'get',
		success: function(res) {
			design.platform =res;
		}
	});
});;/* deprecated */;jQuery(document).on('form.addtocart.design', function(event, datas){
	var elements = {};
	
	var views = ['front', 'back', 'left', 'right'];
	
	jQuery.each(views, function(i, view){
		var i = 0;
		elements[view] = [];
		
		jQuery('#view-'+view+' .drag-item').each(function(){
			var item = {};
			
			item.width = jQuery(this).width();
			var maxWidth = jQuery(this).parent().width();
			if (item.width > maxWidth)
				item.width = maxWidth;
			
			item.height = jQuery(this).height();
			var maxHeight = jQuery(this).parent().height();
			if (item.height > maxHeight)
				item.height = maxHeight;
			
			item.type = jQuery(this).data('type');
			if (item.type == 'team')
			{
				if ( jQuery(this).hasClass('drag-item-name') )
				{
					item.type = 'names';
				}
				else
				{
					item.type = 'numbers';
				}
			}
			else if (item.type == 'clipart')
			{
				if ( jQuery(this).hasClass('drag-item-upload') )
				{
					item.type = 'upload';
				}
				else if (jQuery(this).hasClass('drag-item-qrcode'))
				{
					item.type = 'upload';
				}
			}
			else if (item.type == 'text')
			{
				item.color = this.item.colors;
			}
			
			elements[view][i] = item;
			i++;
		});	
		
	});
	
	datas.print_type = print_type;
	datas.print.elements = elements;
});

function getPrintingInfo()
{
	if (typeof print_type != 'undefined')
	{
		jQuery.ajax({
			type: "POST",
			url: siteURL + "ajax.php?type=addon&task=printing",
			data: {print_type:print_type},				
		}).done(function( data ) {
			if (data != '')
			{
				jQuery('.printing-info-modal .modal-body').html(data);
				jQuery('.printing-info-modal').modal('show');
			}
		});
	}
}

jQuery(document).on('price.addtocart.design', function(event, data){
	var div = jQuery('#product-price .product-price-info');
	if (div.length == 0)
	{
		jQuery('#product-price').append('<div class="product-price-info"></div>');
		var div = jQuery('#product-price .product-price-info');
	}
	
	var price = '';
	if (typeof data.item != 'undefined')
	{
		price = '<span>'+data.item+' / '+lang.text.clipart_item+'</span>';
	}
	
	var html = '<p><a href="javascript:void(0);" onclick="getPrintingInfo();">'+lang.text.clipart_average+': '+price+'</a></p><p>';
	
	
	if (typeof data.printing != 'undefined' && data.printing > 0)
	{
		html = html + '<span class="label label-default">'+lang.text.clipart_printing+': '+data.printing+'</span>';
	}
	if (typeof data.clipart != 'undefined' && data.clipart > 0)
	{
		html = html + '<span class="label label-default">'+lang.text.clipart_title+': '+data.clipart+'</span>';
	}
	html = html + '</p>'
	div.html(html);
});
;﻿if (typeof printing_method != 'undefined' && printing_method == 'color')
{
	jQuery(document).on('confirm_printing.item.design', function(event, printing_setting){
		printing_setting.confirmColor = true;
	});
	
	jQuery(document).on('after.create.item.design', function(event, span){	
		var item = span.item;
		if (item.confirmColor == true)
		{
			design.item.setupColorprint(span);
			jQuery('.btn-action-edit').css('display', 'block');
		}
	});
}

jQuery(document).on('checkItem.item.design', function(event, check){
	var confirm_color = false;
	if (typeof printing_method != 'undefined' && printing_method == 'color')
		confirm_color = true;
	
	if (print_type == 'screen' || print_type == 'embroidery')
		confirm_color = true;
	
	if (confirm_color == true)
	{
		jQuery('#app-wrap .drag-item').each(function(){
			var item = this.item;
			if (typeof item.colors == 'undefined' || item.colors.length == 0)
			{
				var id = jQuery(this).parents('.labView').attr('id');				
				var a = jQuery('#product-thumbs a');
				if (id == 'view-front')
				{
					design.products.changeView(a[0], 'front');
				}
				else if (id == 'view-back')
				{
					design.products.changeView(a[1], 'back');
				}
				else if (id == 'view-left')
				{
					design.products.changeView(a[2], 'left');
				}
				else if (id == 'view-right')
				{
					design.products.changeView(a[3], 'right');
				}
				design.item.select(this);
				check.status = false;
				check.callback = true;
				
				return false;
			}
		});
		return false;
	}
});;jQuery(document).ready(function(){	design.products.inicategory();});design.products.inicategory = function(){	jQuery.ajax({		type: "POST",		dataType: "json",		url: baseURL + "ajax.php?type=categories",	}).done(function( data ) {		if (typeof data.categories != 'undefined' && data.categories != '')		{			var html = '<select data-level="1" id="parent-categories-1" class="form-control input-sm" onchange="design.products.changeCategory(this)"><option value="0"> '+lang.designer.category+' </option>';			for(i=0; i<data.categories.length; i++)			{				html = html + '<option value="'+data.categories[i].id+'">'+data.categories[i].title+'</option>';			}						if(jQuery('#list-categories').hasClass('mobile'))				html = '<div class="col-xs-6">'+html+'</div>';			else				html = '<div class="col-xs-4 col-md-3">'+html+'</div>';			jQuery('#list-categories').html(html);		}	});};function scrolltoTop(e) {
	setTimeout( function() {jQuery(e).parent().parent().scrollTop(0)}, 200 );
};/**
* Function remove item mark all when click without design area
*/
jQuery(document).ready(function() {
	// add button select all
	var dg_tools = jQuery('#dg-sidebar .dg-tools')[0];
	
	// remove when click without design area
	jQuery('#design-area').click(function(e){
		var topCurso    = !document.all ? e.clientY: event.clientY;
		var leftCurso   = !document.all ? e.clientX: event.clientX;
		if(leftCurso == undefined || topCurso == undefined) return;
		var mouseDownAt = document.elementFromPoint(leftCurso, topCurso);
		if( mouseDownAt.parentNode.className == 'product-design'
			|| mouseDownAt.parentNode.className == 'div-design-area'
			|| mouseDownAt.parentNode.className == 'labView active'
			|| mouseDownAt.parentNode.className == 'content-inner' )
		{
			var markArea = jQuery('.labView.active .mask-items-view .mask-items-area');
			if(markArea.find('.mask-all-item').length > 0)
			{
				markArea.find('.mask-all-item').remove();
				closeChangeColorAll();
			}
			e.preventDefault();
		}
	});
});

/** Remove mark all when select item*/
jQuery(document).on('select.item.design', function(event, e) {
	jQuery('.mask-all-item').remove();
	closeChangeColorAll();
});

jQuery(document).on('unselect.item.design', function(event, e) {
	jQuery('.mask-all-item').remove();
	closeChangeColorAll();
});


/** Remove mark all when add new item */
jQuery(document).on('after.create.item.design', function(event, span) {
	if(event.namespace == 'create.design.item')
	{
		jQuery('.mask-all-item').remove();
	}
});

/** Main process function select all */
design.selectAll = function() {
	var viewActive  = jQuery('.labView.active');
	var designAra   = jQuery('.labView.active .design-area');
	var markItem    = jQuery('.labView.active .mask-items-view')
	var markArea    = jQuery('.labView.active .mask-items-view .mask-items-area');
	var itemContent = designAra.find('.content-inner');
	var itemLst     = itemContent.children('span');
	if(itemLst.length == 0)
	{
		return false;
	}
	/*
	if(itemLst.length == 1)
	{
		design.item.select(itemLst[0]);
		return false;
	}
	*/
	markArea.find('.snap-align-line-h').hide();
	markArea.find('.snap-align-line-v').hide();
	markArea.find('.mark-snap-item').hide();
	jQuery('#dg-popover').css('display', 'none');
	if(markArea.find('.mask-all-item').length == 0)
	{
		markArea.append('<div class="mask-all-item"></div>');
	}
	markArea.find('.mask-item').hide();
	designAra.css({
		'overflow': 'visible'
	});
	markItem.css({
		'display': 'block'
	});
	var style       = designAra.attr('style');
	var desRect     = jQuery('.labView.active .design-area .content-inner')[0].getBoundingClientRect();
	var mrkTop, mrkBtt, mrkLft, mrkRgt, minW, minH;
	var	mrkWidth, mrkHeight, moveFlg = true, resizeFlg = true, rorateFlg = true, count = 0;
	viewActive.find('.mask-items-area').attr('style', style);
	// Get position of mark all area
	itemLst.each(function(index, e) {
		if(jQuery(e).hasClass('item-locked') == true)
		{
			return;
		}
		var cltRect = e.getBoundingClientRect();
		var itemTop = cltRect.top - desRect.top;
		var itemLft = cltRect.left - desRect.left;
		var width   = cltRect.width;
		var height  = cltRect.height;
		var itemBtt = itemTop + height;
		var itemRgt = itemLft + width;
		if(count == 0)
		{
			mrkTop = itemTop;
			mrkBtt = itemBtt;
			mrkLft = itemLft;
			mrkRgt = itemRgt;
			count  = 1; 
		}
		else
		{
			if(itemTop < mrkTop)
			{
				mrkTop = itemTop;
			}
			if(itemBtt > mrkBtt)
			{
				mrkBtt = itemBtt
			}
			if(itemLft < mrkLft)
			{
				mrkLft = itemLft;
			}
			if(itemRgt > mrkRgt)
			{
				mrkRgt = itemRgt;
			}
		}
		if(typeof productLockMoveTextFlg != 'undefined')
		{
			if(jQuery(e).data('type') == 'text')
			{
				if(productLockMoveTextFlg == '0') 
				{
					moveFlg = false;
				}
				if(productLockSizeTextFlg == '0')
				{
					resizeFlg = false;
				}
				if(productLockRotateTextFlg == '0')
				{
					rorateFlg = false;
				}
			}
			else if(jQuery(e).data('type') == 'clipart')
			{
				if(productLockMoveclipFlg == '0') 
				{
					moveFlg = false;
				}
				if(productLockSizeclipFlg == '0')
				{
					resizeFlg = false;
				}
				if(productLockRotateClipFlg == '0')
				{
					rorateFlg = false;
				}
			}
		}
	});
	var mrkW    = parseFloat(mrkRgt) - parseFloat(mrkLft) + 4;
	var mrkH    = parseFloat(mrkBtt) - parseFloat(mrkTop);
	var maskAll = viewActive.find('.mask-all-item');
	jQuery(maskAll[0]).css({
		'z-index' : '999999',
		'position': 'absolute',
		'border'  : '1px dashed #444444',
		'width'   : mrkW + 'px',
		'height'  : mrkH + 'px',
		'top'     : mrkTop + 'px',
		'left'    : mrkLft + 'px',
		'cursor'  : 'move'
	});
	var maskAllTop = 0, maskAllLeft = 0, recoupLeft, recoupTop;
	design.itemsPObj = {};
	// Setting drag event 
	if(moveFlg == true)
	{
		if (jQuery('.labView.active .mask-all-item .item-mask-move').length == 0)
		{
			jQuery('.mask-all-item').append('<div class="item-mask-move fa fa fa-arrows"></div>');
		}
		jQuery(maskAll[0]).draggable({
			scroll: false,
			start: function( event, ui ){
				maskAllTop  = ui.position.top;
				maskAllLeft = ui.position.left;
				var eleLst  = itemContent.children('span');
				eleLst.each(function() {
					if(jQuery(this).hasClass('item-locked') == true)
					{
						return;
					}
					if(jQuery(this).css('top') == 'auto')
					{
						var top = 0;
					}
					else
					{
						var top = convertFloatPixel(jQuery(this).css('top'));
					}
					if(jQuery(this).css('left') == 'auto')
					{
						var left = 0;
					}
					else
					{
						var left = convertFloatPixel(jQuery(this).css('left'));
					}
					design.itemsPObj['' + jQuery(this).attr('id') + '_top']  = top;
					design.itemsPObj['' + jQuery(this).attr('id') + '_left'] = left;
				});
				var left   = parseFloat(jQuery(this).css('left'));
				left       = isNaN(left) ? 0 : left;
				var top    = parseFloat(jQuery(this).css('top'));
				top        = isNaN(top) ? 0 : top;
				recoupLeft = left - ui.position.left;
				recoupTop  = top - ui.position.top;
			},
			drag:function(event, ui){
				dragAll(ui, design.itemsPObj, maskAllTop, maskAllLeft);
				ui.position.left += recoupLeft;
				ui.position.top  += recoupTop;
			},
			stop: function(event, ui) {
				var eleLst = itemContent.children('span');
				if(jQuery(this).attr('style').indexOf('transform: rotate(') != -1)
				{
					var rotate = parseFloat(jQuery(this).attr('style').split('transform: rotate(')[1].split('rad)')[0]);
				}
				else
				{
					var rotate = 0;
				}
				if(rotate < 0)
				{
					rotate = Math.PI * 2 + rotate;
				}
				jQuery(this).attr('data-oldrotate', rotate);
				jQuery(this).data('oldrotate', rotate);
				eleLst.each(function() {
					if(jQuery(this).hasClass('item-locked') == true)
					{
						return;
					}
					var id = jQuery(this).attr('id');
					design.itemsPObj['' + id + '_top']     = convertFloatPixel(jQuery(this).css('top'));
					design.itemsPObj['' + id + '_left']    = convertFloatPixel(jQuery(this).css('left'));
					design.itemsPObj['' + id + '_width']   = convertFloatPixel(jQuery(this).css('width'));
					design.itemsPObj['' + id + '_height']  = convertFloatPixel(jQuery(this).css('height'));
					design.itemsPObj['' + id + '_centerX'] = convertFloatPixel(jQuery(this).css('left')) + convertFloatPixel(jQuery(this).css('width')) / 2;
					design.itemsPObj['' + id + '_centerY'] = convertFloatPixel(jQuery(this).css('top')) + convertFloatPixel(jQuery(this).css('height')) / 2;
				});
			}
		});
	}

	// Setting resize event
	if(resizeFlg == true)
	{
		jQuery(maskAll[0]).resizable({ 
			minHeight: 30, 
			aspectRatio: 'se',
			handles: 'se',
			minWidth: 60,
			ghost: true,
			start: function(event, ui){
				var eleLst = itemContent.children('span');
				initSettingBeforeResize(eleLst);
				jQuery(document).triggerHandler( "resizeAllStart.item.design", ui);
			},
			stop: function(event,ui){
				var eleLst = itemContent.children('span');
				var zoom    = ui.size.width / ui.originalSize.width;
				changeSizeAllItemWithZoom(eleLst, zoom);
				var maskWidth  = convertFloatPixel(jQuery('.mask-all-item').css('width'));
				var maskHeight = convertFloatPixel(jQuery('.mask-all-item').css('height')) * zoom;
				jQuery('.mask-all-item').css({
					'width' : maskWidth + 'px',
					'height': maskHeight + 'px'
				});
				design.selectAll();
				jQuery(document).triggerHandler( "resizeAllStop.item.design", ui);
				design.print.size();
				design.ajax.getPrice();
			}
		});
	}
	if(jQuery('.changeColorAllArea').length == 0)
	{
		showChangeColorAll();
	}
	jQuery(document).triggerHandler( "selectall.item.design", maskAll[0]);
}

design.moveAll = function(type) {
	var markArea = jQuery('.labView.active .mask-items-view .mask-items-area .mask-all-item');
	var content  = jQuery('.labView.active .design-area .content-inner');
	var eleLst   = jQuery(content[0]).children('span');
	var allLeft  = convertFloatPixel(jQuery(markArea[0]).css('left'));
	var allTop   = convertFloatPixel(jQuery(markArea[0]).css('top'));
	
	if(jQuery(markArea[0]).attr('style').indexOf('transform: rotate(') != -1)
	{
		var rotate = parseFloat(jQuery(markArea[0]).attr('style').split('transform: rotate(')[1].split('rad)')[0]);
	}
	else
	{
		var rotate = 0;
	}
	if(rotate < 0)
	{
		rotate = Math.PI * 2 + rotate;
	}
	jQuery(markArea[0]).attr('data-oldrotate', rotate);
	jQuery(markArea[0]).data('oldrotate', rotate);
	
	if(type == 'left')
	{
		jQuery(markArea[0]).css({
			'left': (allLeft - 1) + 'px'
		});
		moveAllItemByValue(type, -1, 0, eleLst);
	}
	if(type == 'right')
	{
		jQuery(markArea[0]).css({
			'left': (allLeft + 1) + 'px'
		});
		moveAllItemByValue(type, 1, 0, eleLst);
	}
	if(type == 'up')
	{
		jQuery(markArea[0]).css({
			'top': (allTop - 1) + 'px'
		});
		moveAllItemByValue(type, 0, -1, eleLst);
	}
	if(type == 'down')
	{
		jQuery(markArea[0]).css({
			'top': (allTop + 1) + 'px'
		});
		moveAllItemByValue(type, 0, 1, eleLst);
	}
	if(type == 'vertical')
	{
		var allW = convertFloatPixel(jQuery(markArea[0]).css('width'));
		var araW = convertFloatPixel(jQuery('.labView.active .design-area').css('width'));
		var cenP = (araW - allW) / 2;
		jQuery(markArea[0]).css({
			'left': cenP + 'px'
		});
		moveAllItemByValue(type, (cenP - allLeft), 0, eleLst);
	}
	if(type == 'horizontal')
	{
		var allH = convertFloatPixel(jQuery(markArea[0]).css('height'));
		var araH = convertFloatPixel(jQuery('.labView.active .design-area').css('height'));
		var cenP = (araH - allH) / 2;
		jQuery(markArea[0]).css({
			'top': cenP + 'px'
		});
		moveAllItemByValue(type, 0, (cenP - allTop), eleLst);
	}
};

design.flipAll = function(n) {
	var content = jQuery('.labView.active .design-area .content-inner');
	var eleLst  = jQuery(content[0]).children('span');
	eleLst.each(function() {
		var e = jQuery(this),
			svg = e.find('svg'),
			transform = '';
			if(typeof svg[0] == 'undefined')
				return false;	
		var viewBox = svg[0].getAttributeNS(null, 'viewBox');
		if (viewBox != null && viewBox != '' )
		{
			var size  = viewBox.split(' ');
			var width = 2*size[0] + parseFloat(size[2]);
		}
		else
		{
			var width = svg[0].getAttributeNS(null, 'width');
			if (typeof width != 'undefined' && width != null)
			{
				width = width.replace('px', '');
			}				
		}
		
		if(typeof e.data('flipX') == 'undefined') e.data('flipX', true);
		if(e.data('flipX') === true){
			transform = 'translate('+width+', 0) scale(-1,1)';
			e.data('flipX', false);
		}
		else{
			transform = 'translate(0, 0) scale(1,1)';
			e.data('flipX', true);
		}					
		var g = jQuery(svg[0]).children('g');
		if (g.length > 0)
		{
			g.each(function() {
				this.setAttributeNS(null, 'transform', transform);
			});
		}
	});
	
};

design.changeColorAllItem = function(ele, color) {
	var colors = jQuery(ele).data('colors');
	for(var e in colors) {
		var o 	= jQuery('#' + e);
		var a   = jQuery('<div></div>');
		a.data('colors', colors[e]);
		if(o.data('type') == 'clipart'){
			design.art.changeColor(a, color);
		}
		else if(o.data('type') == 'text'){
			design.elementChangeColor = o;
			var txt  = o.find('text')[0];
			var fill = jQuery(txt).attr('fill').replace('#', '').toLowerCase();
			var strk = jQuery(txt).attr('stroke').replace('#', '').toLowerCase();
			var sW   = jQuery(txt).attr('stroke-width');
			if(fill == design.allItemColorChangeOrigin)
			{
				jQuery('#txt-color').data('value', color);
				design.text.update('color', color);
			}
			if(strk == design.allItemColorChangeOrigin)
			{
				jQuery('.outline-value').html(sW*50);
				design.text.update('outline', color);
			}
		}
		else if(o.data('type') == 'team'){
			design.elementChangeColor = 0;
			design.text.update('color', '#'+color);
		}
	}
};

design.fitToAreaDesign = function() {
	var ara     = jQuery('.labView.active .design-area');
	var maskAll = jQuery('.labView.active').find('.mask-all-item');
	if(maskAll.length == 0) return false;
	var content = jQuery('.labView.active .design-area .content-inner');
	var eleLst  = jQuery(content[0]).children('span');
	var araRct  = ara[0].getBoundingClientRect();
	var allRct  = maskAll[0].getBoundingClientRect();
	var newW    = araRct.width;
	var newH    = newW * allRct.height / allRct.width;
	if(newH > araRct.height)
	{
		newH    = araRct.height;
		newW    = newH * allRct.width / allRct.height;
	}
	maskAll.css({
		'width' : newW + 'px',
		'height': newH + 'px'
	});
	var zoom = newW / allRct.width;
	initSettingBeforeResize(eleLst);
	changeSizeAllItemWithZoom(eleLst, zoom);
	design.moveAll('vertical');
	design.moveAll('horizontal');
	design.print.size();
	design.ajax.getPrice();
};

var moveAllItemByValue = function(type, leftVal, topVal, lst) {
	jQuery(lst).each(function() {
		var t  = convertFloatPixel(jQuery(this).css('top')) + topVal;
		var l  = convertFloatPixel(jQuery(this).css('left')) + leftVal;
		jQuery(this).css({
			'top' : t + 'px',
			'left': l + 'px'
		});
		var id     = jQuery(this).attr('id');
		design.itemsPObj['' + id + '_top']     = convertFloatPixel(jQuery(this).css('top'));
		design.itemsPObj['' + id + '_left']    = convertFloatPixel(jQuery(this).css('left'));
		design.itemsPObj['' + id + '_width']   = convertFloatPixel(jQuery(this).css('width'));
		design.itemsPObj['' + id + '_height']  = convertFloatPixel(jQuery(this).css('height'));
		design.itemsPObj['' + id + '_centerX'] = convertFloatPixel(jQuery(this).css('left')) + convertFloatPixel(jQuery(this).css('width')) / 2;
		design.itemsPObj['' + id + '_centerY'] = convertFloatPixel(jQuery(this).css('top')) + convertFloatPixel(jQuery(this).css('height')) / 2;
	});
};

/**
* Main process function drag all item
*/
var dragAll = function(ui, itemsPObj, maskAllTop, maskAllLeft) {
	var content = jQuery('.labView.active .design-area .content-inner');
	var eleLst  = jQuery(content[0]).children('span');
	var offsT   = ui.position.top - maskAllTop;
	var offsL   = ui.position.left - maskAllLeft;
	eleLst.each(function() {
		if(jQuery(this).hasClass('item-locked') == true)
		{
			return;
		}
		var top   = itemsPObj['' + jQuery(this).attr('id') + '_top'];
		var left  = itemsPObj['' + jQuery(this).attr('id') + '_left'];
		var newT  = top + offsT;
		var newL  = left + offsL;
		jQuery(this).css({
			'top' : newT + 'px',
			'left': newL + 'px'
		});
	});
}

/**
* Main process function get transform matrix
*/
var getMatrix = function(ele) {
	var IE   = /msie/.test(navigator.userAgent.toLowerCase());
	var IE11 = /trident/.test(navigator.userAgent.toLowerCase());
	var Edge = /edge/.test(navigator.userAgent.toLowerCase());
	var matrix;

	var transform =  jQuery(ele).attr('transform');
	if(transform != undefined)
	{
		if(IE === true || IE11 == true || Edge)
		{
			matrix = transform.split('(')[1].split(')')[0].split(' ');
		} 
		else
		{
			matrix = transform.split('(')[1].split(')')[0].split(',');
		}
	}
	else
	{
		matrix = false;
	}
	return matrix;
}

var showChangeColorAll = function() {
	var div = document.createElement('div');
	var ara = jQuery('.labView.active .design-area');
	var t   = ara.css('top');
	var l   = parseInt(ara.css('left').replace('px', '')) - 260;
	jQuery(div).addClass('changeColorAllArea');
	jQuery(div).click(function(e) {
		e.preventDefault();
		e.stopPropagation();
	});
	
	var itemLst = jQuery('.labView.active .design-area .content-inner').children('span');
	var clrLst  = {};
	itemLst.each(function() {
		var svg = jQuery(this).children('svg');
		var clr = design.svg.getColors(svg);
		var id  = jQuery(this).attr('id');
		for(var color in clr) {
			if(color == 'none') continue;
			var hexColor = getHexColor(color);
			if(!clrLst.hasOwnProperty(hexColor))
			{
				clrLst[hexColor] = {};
			}
			clrLst[hexColor][id] = clr[color];
		}
	});
	for(var color in clrLst) {
		var divURL = document.createElement('div');
		jQuery(divURL).addClass('allItemColorURL');
		jQuery(divURL).data('colors', clrLst[color]);
		jQuery(divURL).css({
			'background-color': color
		});
		jQuery(divURL).data('value', color);
		jQuery(divURL).click(function(e) {
			jQuery('.changeColorAllArea .allItemColorURL').removeClass('active');
			jQuery(this).addClass('active');
			jQuery('.changeColorAllArea .allItemColorURL').each(function() {
				if(jQuery(this).hasClass('active') == false)
				{
					jQuery(this).popover('hide');
				}
			});
			e.preventDefault();
			e.stopPropagation();
		});
		if(typeof productPickerFlg == 'undefined')
		{
			jQuery(divURL).popover({
				html:true,
				placement:'bottom',
				title:lang.text.color+' <a class="close" href="javascript:void(0);">&times;</a>',
				content:function(){
					var div  = document.createElement('div');
					jQuery(div).append(jQuery('.other-colors').html());
					var html = '';
					jQuery(div).children('span').each(function() {
						var c = jQuery(this).attr('data-color');
						var t = jQuery(this).attr('title');
						if(c != 'none')
						{
							html += '<span class="bg-colors" title="'+t+'" style="background-color: #'+c+'" onclick="changeAllColour(\''+c+'\')"></span>';
						}
					});
					return '<div class="list-colors">' + html + '</div>';
				}
			});
		}
		else
		{
			if(productPickerFlg == '0')
			{
				if(productColorStr != '')
				{
					
					jQuery(divURL).popover({
						html:true,
						placement:'bottom',
						title:lang.text.color+' <a class="close" href="javascript:void(0);">&times;</a>',
						content:function(){
							var colors = productColorStr.split(',');
							var html = '';
							jQuery(colors).each(function() {
								var c = this;
								if(c != 'none')
								{
									html += '<span class="bg-colors" style="background-color: #'+c+'" onclick="changeAllColour(\''+c+'\')"></span>';
								}
							});
							return '<div class="list-colors">' + html + '</div>';
						}
					});
				}
				else
				{
					jQuery(divURL).popover({
						html:true,
						placement:'bottom',
						title:lang.text.color+' <a class="close" href="javascript:void(0);">&times;</a>',
						content:function(){
							var div  = document.createElement('div');
							jQuery(div).append(jQuery('.other-colors').html());
							var html = '';
							jQuery(div).children('span').each(function() {
								var c = jQuery(this).attr('data-color');
								var t = jQuery(this).attr('title');
								if(c != 'none')
								{
									html += '<span class="bg-colors" title="'+t+'" style="background-color: #'+c+'" onclick="changeAllColour(\''+c+'\')"></span>';
								}
							});
							return '<div class="list-colors">' + html + '</div>';
						}
					});
				}
			}
			else
			{
				jQuery(divURL).spectrum({
					showAlpha: true,
					color: color,
					showInput: true,
					preferredFormat: "hex",
					showInitial: true,
					showPalette: true,
					showButtons: true,
					containerClassName: 'allColorPicker',
					palette: [
						['#FFFFFF', '#000000', '#FFFF00'],
						['#FFA500', '#A52A2A', '#32CD32'],
						['#0000FF', '#9400D3', '#FF00FF'],
						['#808080', '#ADFF2F', '#D2691E'],
						['#FF0000', '#FFDEAD', '#7B68EE']
					],
					show: function(c) {
						var sp = jQuery(this).spectrum('container');
						var t  = convertFloatPixel(jQuery(sp[0]).css('top'));
						var l  = convertFloatPixel(jQuery(sp[0]).css('left'));
						spRct  = sp[0].getBoundingClientRect();
						desRct = jQuery('.labView.active .design-area')[0].getBoundingClientRect();
						var orgClr = jQuery(this).spectrum('get');
						var slf    = this;
						sp.find('.sp-cancel').click(function() {
							var hexcolor = orgClr.toHexString();
							hexcolor = hexcolor.replace('#', '');
							design.allItemColorChangeOrigin = jQuery(slf).data('value').toLowerCase().replace('#', '');
							jQuery(slf).data('value', hexcolor);
							design.changeColorAllItem(slf, hexcolor);
							jQuery(slf).css('background-color', '#' + hexcolor);
						});
					},
					move: function(c) {
						var hexcolor = c.toHexString();
						hexcolor = hexcolor.replace('#', '');
						design.allItemColorChangeOrigin = jQuery(this).data('value').toLowerCase().replace('#', '');
						jQuery(this).data('value', hexcolor);
						design.changeColorAllItem(this, hexcolor);
						jQuery(this).css('background-color', '#' + hexcolor);
						design.print.colors();
						design.ajax.getPrice();
					}
				});
			}
		}
		jQuery(div).append(divURL);
		var wWidth = jQuery(window).width();
		jQuery(divURL).on('show.bs.popover', function() {
			if(wWidth >= 700)
			{
				jQuery('#dg-designer .col-center').css('z-index', '1');
			}
		});
		jQuery(divURL).on('shown.bs.popover', function() {
			jQuery('.changeColorAllArea').find('.close').click(function() {
				jQuery('.popover').hide();
				jQuery('.allItemColorURL').popover('hide');
				jQuery('.allItemColorURL').removeClass('active');
				jQuery('#dg-designer .col-center').css('z-index', '1');
			});
		});
	}
	jQuery(div).append('<div class="buttonFitToArea"><button type="button" class="btn btn-default btn-sm" onclick="design.fitToAreaDesign();"><i class="fa fa-arrows-alt" aria-hidden="true"></i></button></div>');
	jQuery('.labView.active').prepend(div);
};

var closeChangeColorAll = function() {
	jQuery('.changeColorAllArea').remove();
	jQuery('#dg-designer .col-center').css('z-index', '1');
};

function convertFloatPixel(val) {
	var px = design.convert.px(val);
	return px;
};

function getHexColor(colorStr) {
    var a = document.createElement('div');
    a.style.color = colorStr;
    var colors = window.getComputedStyle( document.body.appendChild(a) ).color.match(/\d+/g).map(function(a){ return parseInt(a,10); });
    document.body.removeChild(a);
    return (colors.length >= 3) ? '#' + (((1 << 24) + (colors[0] << 16) + (colors[1] << 8) + colors[2]).toString(16).substr(1)) : false;
};

function changeSizeAllItemWithZoom(lst, zoom) {
	var maskAll = jQuery('.labView.active').find('.mask-all-item');
	lst.each(function() {
		if(jQuery(this).hasClass('item-locked') == true)
		{
			return;
		}
		var id  = jQuery(this).attr('id');
		var w   = design.itemsPObj['' + id + '_width'];
		var h   = design.itemsPObj['' + id + '_height'];
		var t   = design.itemsPObj['' + id + '_top'];
		var l   = design.itemsPObj['' + id + '_left'];
		var it  = design.itemsPObj['' + id + '_innertop'];
		var il  = design.itemsPObj['' + id + '_innerleft'];
		if(jQuery(this).attr('style').indexOf('transform: rotate(') != -1)
		{
			var r   = jQuery(this).attr('style').split('transform: rotate(')[1].split('rad)')[0];
		}
		else
		{
			var r = 0;
		}
		var nw  = w * zoom;
		var nh  = h * zoom;
		var nt  = convertFloatPixel(jQuery(maskAll[0]).css('top')) + it * zoom;
		var nl  = convertFloatPixel(jQuery(maskAll[0]).css('left')) + il * zoom;
		var svg = jQuery(this).find('svg');
		var img = jQuery(this).find('image');
		jQuery(this).css({
			'width' : nw + 'px',
			'height': nh + 'px',
			'top'   : nt + 'px',
			'left'  : nl + 'px'
		});
		jQuery(svg[0]).attr({
			'width' : nw,
			'height': nh
		});
		design.itemsPObj['' + id + '_top']     = nt;
		design.itemsPObj['' + id + '_left']    = nl;
		design.itemsPObj['' + id + '_width']   = nw;
		design.itemsPObj['' + id + '_height']  = nh;
		design.itemsPObj['' + id + '_centerX'] = nl + nw / 2;
		design.itemsPObj['' + id + '_centerY'] = nt + nh / 2;
		if(img.length > 0)
		{
			jQuery(img[0]).attr({
				'width' : nw,
				'height': nh
			});
			var gEle = jQuery(svg[0]).find('g');
			flipFlg  = true;
			if(gEle.attr('transform') != undefined)
			{
				if(gEle.attr('transform').indexOf('scale(-1,1)') != -1) 
				{
					flipFlg = false;
				}
			}
			if (flipFlg == false)
			{
				jQuery(img[0]).parent().attr('transform', 'translate('+nw+', 0) scale(-1,1)');
			}
			var clipId = jQuery(img[0]).css('clip-path');
		}
		if(jQuery(this).data('type') == 'text')
		{
			var txt     = jQuery(this).find('text')[0];
			var viewBox = svg[0].getAttributeNS(null, 'viewBox').split(' ');
			var zdata   = viewBox[2]/nw + ' ' + viewBox[3]/nh;
			jQuery(txt).data('itemzoom', zdata);
			jQuery(txt).attr('data-itemzoom', zdata);
		}
		var ui = {};
		ui.resizeAllFlg = '1';
		ui.currItem = this;
		jQuery(document).triggerHandler( "resizzing.item.design", [ui, this]);
		jQuery(document).triggerHandler( "resize.item.design", [ui, this]);
	});
};

function initSettingBeforeResize(lst) {
	var maskAll = jQuery('.labView.active').find('.mask-all-item');
	lst.each(function() {
		if(jQuery(this).hasClass('item-locked') == true)
		{
			return;
		}
		var rect   = this.getBoundingClientRect();
		if(jQuery(this).attr('style').indexOf('transform: rotate(') != -1)
		{
			var rotate = jQuery(this).attr('style').split('transform: rotate(')[1].split('rad)')[0];
		}
		else
		{
			var rotate = 0;
		}
		
		var id     = jQuery(this).attr('id');
		var img    = jQuery(this).find('image');
		var t      = convertFloatPixel(jQuery(this).css('top'));
		var l      = convertFloatPixel(jQuery(this).css('left'));
		var w      = convertFloatPixel(jQuery(this).css('width'));
		var h      = convertFloatPixel(jQuery(this).css('height'));
		design.itemsPObj['' + id + '_top']       = t;
		design.itemsPObj['' + id + '_left']      = l;
		design.itemsPObj['' + id + '_width']     = w;
		design.itemsPObj['' + id + '_height']    = h;
		design.itemsPObj['' + id + '_innertop']  = t - convertFloatPixel(jQuery(maskAll[0]).css('top'));
		design.itemsPObj['' + id + '_innerleft'] = l - convertFloatPixel(jQuery(maskAll[0]).css('left'));
		var leftR = -(w / 2) * Math.cos(rotate) + (h / 2) * Math.sin(rotate) + (l + w / 2);
		var topR  = -(w / 2) * Math.sin(rotate) - (h / 2) * Math.cos(rotate) + (t + h / 2);
		design.itemsPObj['' + id + '_leftR'] = leftR;
		design.itemsPObj['' + id + '_topR']  = topR;
	});
};

function changeAllColour(c) {
	var cOrg = jQuery('.changeColorAllArea .allItemColorURL.active')[0];
	design.allItemColorChangeOrigin = jQuery('.changeColorAllArea .allItemColorURL.active').data('value').toLowerCase().replace('#', '');
	design.changeColorAllItem(cOrg, c);
	jQuery(cOrg).css('background-color', '#' + c);
	jQuery('.changeColorAllArea .allItemColorURL.active').data('value', c);
	jQuery('.popover').hide();
	jQuery('.allItemColorURL').popover('hide');
	jQuery('.allItemColorURL').removeClass('active');
	jQuery('#dg-designer .col-center').css('z-index', '1');
	var e = window.event;
	e.preventDefault();
	e.stopPropagation();
	design.print.colors();
	design.ajax.getPrice();
};jQuery(document).ready(function(){
	jQuery( ".size-number" ).spinner({
		min: 0,
		start: function(){
			return design.team.changeSize();
		},
		stop: function(event, ui){
			design.products.sizes();
		}
	});
	
	if(typeof attr_options != 'undefined' && attr_options != '')
	{
		update_attributes(attr_options);
	}
});

jQuery(document).on('after.load.design', function(event, data){
	if(typeof data.design != 'undefined' && typeof data.design.attributes != 'undefined')
	{
		var options = data.design.attributes;
		if(options.length > 0)
		{
			var attr_options = '';
			for(i=0; i<options.length;i++)
			{
				if(typeof options[i] != 'undefined' && options[i] != null)
				{
					var p_option = options[i];
					for(j=0; j<p_option.length; j++)
					{
						if(p_option[j] != '' && p_option[j] != null)
						{
							if(p_option.length == 1)
								var str = i+'_'+p_option[j];
							else
								var str = i+''+j+'_'+p_option[j];
							if(attr_options == '')
							{
								attr_options = str;
							}
							else
							{
								attr_options = attr_options +'-'+ str;
							}
						}
					}
				}
			}
			update_attributes(attr_options);
		}else if(typeof data.design.item.qty != 'undefined')
		{
			if(data.design.item.qty > 0)
			{
				jQuery('#quantity').val(data.design.item.qty);
			}
		}
	}
});

function update_attributes(attr_options)
{
	if(attr_options != '')
	{
		var p_attributes = [];
		var p_options = attr_options.split('-');		
		for(i=0; i<p_options.length;i++)
		{
			var p_option 	= p_options[i];
			var p_attribute = p_option.split('_');
			if(p_attribute.length > 1)
			{
				p_attributes[p_attribute[0]] = p_attribute[1];
			}
		}
		jQuery("#product-attributes .product-fields").each(function(){
			var n = 0;
			jQuery(this).find("[name^='attribute']").each(function(){
				var temp = jQuery(this).attr('name');
				if(temp != 'undefined')
				{
					var name = temp.replace('attribute', '');
					name = name.split('[').join("");					
					name = name.split(']').join("");
					var type = jQuery(this).attr('type');
					if(typeof p_attributes[name] != 'undefined')
					{
						if(type == 'radio')
						{
							if(p_attributes[name] == n)
							{
								jQuery(this).prop('checked', true);
							}
							n++;
						}
						else if(type == 'checkbox')
						{
							if(p_attributes[name] != '0')
							{
								jQuery(this).prop('checked', true);
							}
						}
						else
						{
							jQuery(this).val(p_attributes[name]);
							design.products.sizes();
						}
					}
					else
					{
						jQuery(this).val('');
					}
				}
			});
		});
	}
}
jQuery(document).on('product.change.design', function(evt, product) {
	jQuery( ".size-number" ).spinner({
		min: 0,
		start: function(){
			return design.team.changeSize();
		},
		stop: function(event, ui){
			design.products.sizes();
		}
	});
});;// Spectrum Colorpicker v1.8.0
// https://github.com/bgrins/spectrum
// Author: Brian Grinstead
// License: MIT

(function (factory) {
    "use strict";

    if (typeof define === 'function' && define.amd) { // AMD
        define(['jquery'], factory);
    }
    else if (typeof exports == "object" && typeof module == "object") { // CommonJS
        module.exports = factory(require('jquery'));
    }
    else { // Browser
        factory(jQuery);
    }
})(function($, undefined) {
    "use strict";

    var defaultOpts = {

        // Callbacks
        beforeShow: noop,
        move: noop,
        change: noop,
        show: noop,
        hide: noop,

        // Options
        color: false,
        flat: false,
        showInput: false,
        allowEmpty: false,
        showButtons: true,
        clickoutFiresChange: true,
        showInitial: false,
        showPalette: false,
        showPaletteOnly: false,
        hideAfterPaletteSelect: false,
        togglePaletteOnly: false,
        showSelectionPalette: true,
        localStorageKey: false,
        appendTo: "body",
        maxSelectionSize: 7,
        cancelText: "cancel",
        chooseText: "choose",
        togglePaletteMoreText: "more",
        togglePaletteLessText: "less",
        clearText: "Clear Color Selection",
        noColorSelectedText: "No Color Selected",
        preferredFormat: false,
        className: "", // Deprecated - use containerClassName and replacerClassName instead.
        containerClassName: "",
        replacerClassName: "",
        showAlpha: false,
        theme: "sp-light",
        palette: [["#ffffff", "#000000", "#ff0000", "#ff8000", "#ffff00", "#008000", "#0000ff", "#4b0082", "#9400d3"]],
        selectionPalette: [],
        disabled: false,
        offset: null
    },
    spectrums = [],
    IE = !!/msie/i.exec( window.navigator.userAgent ),
    rgbaSupport = (function() {
        function contains( str, substr ) {
            return !!~('' + str).indexOf(substr);
        }

        var elem = document.createElement('div');
        var style = elem.style;
        style.cssText = 'background-color:rgba(0,0,0,.5)';
        return contains(style.backgroundColor, 'rgba') || contains(style.backgroundColor, 'hsla');
    })(),
    replaceInput = [
        "<div class='sp-replacer'>",
            "<div class='sp-preview'><div class='sp-preview-inner'></div></div>",
            "<div class='sp-dd'>&#9660;</div>",
        "</div>"
    ].join(''),
    markup = (function () {

        // IE does not support gradients with multiple stops, so we need to simulate
        //  that for the rainbow slider with 8 divs that each have a single gradient
        var gradientFix = "";
        if (IE) {
            for (var i = 1; i <= 6; i++) {
                gradientFix += "<div class='sp-" + i + "'></div>";
            }
        }

        return [
            "<div class='sp-container sp-hidden'>",
                "<div class='sp-palette-container'>",
                    "<div class='sp-palette sp-thumb sp-cf'></div>",
                    "<div class='sp-palette-button-container sp-cf'>",
                        "<button type='button' class='sp-palette-toggle'></button>",
                    "</div>",
                "</div>",
                "<div class='sp-picker-container'>",
                    "<div class='sp-top sp-cf'>",
                        "<div class='sp-fill'></div>",
                        "<div class='sp-top-inner'>",
                            "<div class='sp-color'>",
                                "<div class='sp-sat'>",
                                    "<div class='sp-val'>",
                                        "<div class='sp-dragger'></div>",
                                    "</div>",
                                "</div>",
                            "</div>",
                            "<div class='sp-clear sp-clear-display'>",
                            "</div>",
                            "<div class='sp-hue'>",
                                "<div class='sp-slider'></div>",
                                gradientFix,
                            "</div>",
                        "</div>",
                        "<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>",
                    "</div>",
                    "<div class='sp-input-container sp-cf'>",
                        "<input class='sp-input' type='text' spellcheck='false'  />",
                    "</div>",
                    "<div class='sp-initial sp-thumb sp-cf'></div>",
                    "<div class='sp-button-container sp-cf'>",
                        "<a class='sp-cancel' href='#'></a>",
                        "<button type='button' class='sp-choose'></button>",
                    "</div>",
                "</div>",
            "</div>"
        ].join("");
    })();

    function paletteTemplate (p, color, className, opts) {
        var html = [];
        for (var i = 0; i < p.length; i++) {
            var current = p[i];
            if(current) {
                var tiny = tinycolor(current);
                var c = tiny.toHsl().l < 0.5 ? "sp-thumb-el sp-thumb-dark" : "sp-thumb-el sp-thumb-light";
                c += (tinycolor.equals(color, current)) ? " sp-thumb-active" : "";
                var formattedString = tiny.toString(opts.preferredFormat || "rgb");
                var swatchStyle = rgbaSupport ? ("background-color:" + tiny.toRgbString()) : "filter:" + tiny.toFilter();
                html.push('<span title="' + formattedString + '" data-color="' + tiny.toRgbString() + '" class="' + c + '"><span class="sp-thumb-inner" style="' + swatchStyle + ';" /></span>');
            } else {
                var cls = 'sp-clear-display';
                html.push($('<div />')
                    .append($('<span data-color="" style="background-color:transparent;" class="' + cls + '"></span>')
                        .attr('title', opts.noColorSelectedText)
                    )
                    .html()
                );
            }
        }
        return "<div class='sp-cf " + className + "'>" + html.join('') + "</div>";
    }

    function hideAll() {
        for (var i = 0; i < spectrums.length; i++) {
            if (spectrums[i]) {
                spectrums[i].hide();
            }
        }
    }

    function instanceOptions(o, callbackContext) {
        var opts = $.extend({}, defaultOpts, o);
        opts.callbacks = {
            'move': bind(opts.move, callbackContext),
            'change': bind(opts.change, callbackContext),
            'show': bind(opts.show, callbackContext),
            'hide': bind(opts.hide, callbackContext),
            'beforeShow': bind(opts.beforeShow, callbackContext)
        };

        return opts;
    }

    function spectrum(element, o) {

        var opts = instanceOptions(o, element),
            flat = opts.flat,
            showSelectionPalette = opts.showSelectionPalette,
            localStorageKey = opts.localStorageKey,
            theme = opts.theme,
            callbacks = opts.callbacks,
            resize = throttle(reflow, 10),
            visible = false,
            isDragging = false,
            dragWidth = 0,
            dragHeight = 0,
            dragHelperHeight = 0,
            slideHeight = 0,
            slideWidth = 0,
            alphaWidth = 0,
            alphaSlideHelperWidth = 0,
            slideHelperHeight = 0,
            currentHue = 0,
            currentSaturation = 0,
            currentValue = 0,
            currentAlpha = 1,
            palette = [],
            paletteArray = [],
            paletteLookup = {},
            selectionPalette = opts.selectionPalette.slice(0),
            maxSelectionSize = opts.maxSelectionSize,
            draggingClass = "sp-dragging",
            shiftMovementDirection = null;

        var doc = element.ownerDocument,
            body = doc.body,
            boundElement = $(element),
            disabled = false,
            container = $(markup, doc).addClass(theme),
            pickerContainer = container.find(".sp-picker-container"),
            dragger = container.find(".sp-color"),
            dragHelper = container.find(".sp-dragger"),
            slider = container.find(".sp-hue"),
            slideHelper = container.find(".sp-slider"),
            alphaSliderInner = container.find(".sp-alpha-inner"),
            alphaSlider = container.find(".sp-alpha"),
            alphaSlideHelper = container.find(".sp-alpha-handle"),
            textInput = container.find(".sp-input"),
            paletteContainer = container.find(".sp-palette"),
            initialColorContainer = container.find(".sp-initial"),
            cancelButton = container.find(".sp-cancel"),
            clearButton = container.find(".sp-clear"),
            chooseButton = container.find(".sp-choose"),
            toggleButton = container.find(".sp-palette-toggle"),
            isInput = boundElement.is("input"),
            isInputTypeColor = isInput && boundElement.attr("type") === "color" && inputTypeColorSupport(),
            shouldReplace = isInput && !flat,
            replacer = (shouldReplace) ? $(replaceInput).addClass(theme).addClass(opts.className).addClass(opts.replacerClassName) : $([]),
            offsetElement = (shouldReplace) ? replacer : boundElement,
            previewElement = replacer.find(".sp-preview-inner"),
            initialColor = opts.color || (isInput && boundElement.val()),
            colorOnShow = false,
            currentPreferredFormat = opts.preferredFormat,
            clickoutFiresChange = !opts.showButtons || opts.clickoutFiresChange,
            isEmpty = !initialColor,
            allowEmpty = opts.allowEmpty && !isInputTypeColor;

        function applyOptions() {

            if (opts.showPaletteOnly) {
                opts.showPalette = true;
            }

            toggleButton.text(opts.showPaletteOnly ? opts.togglePaletteMoreText : opts.togglePaletteLessText);

            if (opts.palette) {
                palette = opts.palette.slice(0);
                paletteArray = $.isArray(palette[0]) ? palette : [palette];
                paletteLookup = {};
                for (var i = 0; i < paletteArray.length; i++) {
                    for (var j = 0; j < paletteArray[i].length; j++) {
                        var rgb = tinycolor(paletteArray[i][j]).toRgbString();
                        paletteLookup[rgb] = true;
                    }
                }
            }

            container.toggleClass("sp-flat", flat);
            container.toggleClass("sp-input-disabled", !opts.showInput);
            container.toggleClass("sp-alpha-enabled", opts.showAlpha);
            container.toggleClass("sp-clear-enabled", allowEmpty);
            container.toggleClass("sp-buttons-disabled", !opts.showButtons);
            container.toggleClass("sp-palette-buttons-disabled", !opts.togglePaletteOnly);
            container.toggleClass("sp-palette-disabled", !opts.showPalette);
            container.toggleClass("sp-palette-only", opts.showPaletteOnly);
            container.toggleClass("sp-initial-disabled", !opts.showInitial);
            container.addClass(opts.className).addClass(opts.containerClassName);

            reflow();
        }

        function initialize() {

            if (IE) {
                container.find("*:not(input)").attr("unselectable", "on");
            }

            applyOptions();

            if (shouldReplace) {
                boundElement.after(replacer).hide();
            }

            if (!allowEmpty) {
                clearButton.hide();
            }

            if (flat) {
                boundElement.after(container).hide();
            }
            else {

                var appendTo = opts.appendTo === "parent" ? boundElement.parent() : $(opts.appendTo);
                if (appendTo.length !== 1) {
                    appendTo = $("body");
                }

                appendTo.append(container);
            }

            updateSelectionPaletteFromStorage();

            offsetElement.bind("click.spectrum touchstart.spectrum", function (e) {
                if (!disabled) {
                    toggle();
                }

                e.stopPropagation();

                if (!$(e.target).is("input")) {
                    e.preventDefault();
                }
            });

            if(boundElement.is(":disabled") || (opts.disabled === true)) {
                disable();
            }

            // Prevent clicks from bubbling up to document.  This would cause it to be hidden.
            container.click(stopPropagation);

            // Handle user typed input
            textInput.change(setFromTextInput);
            textInput.bind("paste", function () {
                setTimeout(setFromTextInput, 1);
            });
            textInput.keydown(function (e) { if (e.keyCode == 13) { setFromTextInput(); } });

            cancelButton.text(opts.cancelText);
            cancelButton.bind("click.spectrum", function (e) {
                e.stopPropagation();
                e.preventDefault();
                revert();
                hide();
            });

            clearButton.attr("title", opts.clearText);
            clearButton.bind("click.spectrum", function (e) {
                e.stopPropagation();
                e.preventDefault();
                isEmpty = true;
                move();

                if(flat) {
                    //for the flat style, this is a change event
                    updateOriginalInput(true);
                }
            });

            chooseButton.text(opts.chooseText);
            chooseButton.bind("click.spectrum", function (e) {
                e.stopPropagation();
                e.preventDefault();

                if (IE && textInput.is(":focus")) {
                    textInput.trigger('change');
                }

                if (isValid()) {
                    updateOriginalInput(true);
                    hide();
                }
            });

            toggleButton.text(opts.showPaletteOnly ? opts.togglePaletteMoreText : opts.togglePaletteLessText);
            toggleButton.bind("click.spectrum", function (e) {
                e.stopPropagation();
                e.preventDefault();

                opts.showPaletteOnly = !opts.showPaletteOnly;

                // To make sure the Picker area is drawn on the right, next to the
                // Palette area (and not below the palette), first move the Palette
                // to the left to make space for the picker, plus 5px extra.
                // The 'applyOptions' function puts the whole container back into place
                // and takes care of the button-text and the sp-palette-only CSS class.
                if (!opts.showPaletteOnly && !flat) {
                    container.css('left', '-=' + (pickerContainer.outerWidth(true) + 5));
                }
                applyOptions();
            });

            draggable(alphaSlider, function (dragX, dragY, e) {
                currentAlpha = (dragX / alphaWidth);
                isEmpty = false;
                if (e.shiftKey) {
                    currentAlpha = Math.round(currentAlpha * 10) / 10;
                }

                move();
            }, dragStart, dragStop);

            draggable(slider, function (dragX, dragY) {
                currentHue = parseFloat(dragY / slideHeight);
                isEmpty = false;
                if (!opts.showAlpha) {
                    currentAlpha = 1;
                }
                move();
            }, dragStart, dragStop);

            draggable(dragger, function (dragX, dragY, e) {

                // shift+drag should snap the movement to either the x or y axis.
                if (!e.shiftKey) {
                    shiftMovementDirection = null;
                }
                else if (!shiftMovementDirection) {
                    var oldDragX = currentSaturation * dragWidth;
                    var oldDragY = dragHeight - (currentValue * dragHeight);
                    var furtherFromX = Math.abs(dragX - oldDragX) > Math.abs(dragY - oldDragY);

                    shiftMovementDirection = furtherFromX ? "x" : "y";
                }

                var setSaturation = !shiftMovementDirection || shiftMovementDirection === "x";
                var setValue = !shiftMovementDirection || shiftMovementDirection === "y";

                if (setSaturation) {
                    currentSaturation = parseFloat(dragX / dragWidth);
                }
                if (setValue) {
                    currentValue = parseFloat((dragHeight - dragY) / dragHeight);
                }

                isEmpty = false;
                if (!opts.showAlpha) {
                    currentAlpha = 1;
                }

                move();

            }, dragStart, dragStop);

            if (!!initialColor) {
                set(initialColor);

                // In case color was black - update the preview UI and set the format
                // since the set function will not run (default color is black).
                updateUI();
                currentPreferredFormat = opts.preferredFormat || tinycolor(initialColor).format;

                addColorToSelectionPalette(initialColor);
            }
            else {
                updateUI();
            }

            if (flat) {
                show();
            }

            function paletteElementClick(e) {
                if (e.data && e.data.ignore) {
                    set($(e.target).closest(".sp-thumb-el").data("color"));
                    move();
                }
                else {
                    set($(e.target).closest(".sp-thumb-el").data("color"));
                    move();
                    updateOriginalInput(true);
                    if (opts.hideAfterPaletteSelect) {
                      hide();
                    }
                }

                return false;
            }

            var paletteEvent = IE ? "mousedown.spectrum" : "click.spectrum touchstart.spectrum";
            paletteContainer.delegate(".sp-thumb-el", paletteEvent, paletteElementClick);
            initialColorContainer.delegate(".sp-thumb-el:nth-child(1)", paletteEvent, { ignore: true }, paletteElementClick);
        }

        function updateSelectionPaletteFromStorage() {

            if (localStorageKey && window.localStorage) {

                // Migrate old palettes over to new format.  May want to remove this eventually.
                try {
                    var oldPalette = window.localStorage[localStorageKey].split(",#");
                    if (oldPalette.length > 1) {
                        delete window.localStorage[localStorageKey];
                        $.each(oldPalette, function(i, c) {
                             addColorToSelectionPalette(c);
                        });
                    }
                }
                catch(e) { }

                try {
                    selectionPalette = window.localStorage[localStorageKey].split(";");
                }
                catch (e) { }
            }
        }

        function addColorToSelectionPalette(color) {
            if (showSelectionPalette) {
                var rgb = tinycolor(color).toRgbString();
                if (!paletteLookup[rgb] && $.inArray(rgb, selectionPalette) === -1) {
                    selectionPalette.push(rgb);
                    while(selectionPalette.length > maxSelectionSize) {
                        selectionPalette.shift();
                    }
                }

                if (localStorageKey && window.localStorage) {
                    try {
                        window.localStorage[localStorageKey] = selectionPalette.join(";");
                    }
                    catch(e) { }
                }
            }
        }

        function getUniqueSelectionPalette() {
            var unique = [];
            if (opts.showPalette) {
                for (var i = 0; i < selectionPalette.length; i++) {
                    var rgb = tinycolor(selectionPalette[i]).toRgbString();

                    if (!paletteLookup[rgb]) {
                        unique.push(selectionPalette[i]);
                    }
                }
            }

            return unique.reverse().slice(0, opts.maxSelectionSize);
        }

        function drawPalette() {

            var currentColor = get();

            var html = $.map(paletteArray, function (palette, i) {
                return paletteTemplate(palette, currentColor, "sp-palette-row sp-palette-row-" + i, opts);
            });

            updateSelectionPaletteFromStorage();

            if (selectionPalette) {
                html.push(paletteTemplate(getUniqueSelectionPalette(), currentColor, "sp-palette-row sp-palette-row-selection", opts));
            }

            paletteContainer.html(html.join(""));
        }

        function drawInitial() {
            if (opts.showInitial) {
                var initial = colorOnShow;
                var current = get();
                initialColorContainer.html(paletteTemplate([initial, current], current, "sp-palette-row-initial", opts));
            }
        }

        function dragStart() {
            if (dragHeight <= 0 || dragWidth <= 0 || slideHeight <= 0) {
                reflow();
            }
            isDragging = true;
            container.addClass(draggingClass);
            shiftMovementDirection = null;
            boundElement.trigger('dragstart.spectrum', [ get() ]);
        }

        function dragStop() {
            isDragging = false;
            container.removeClass(draggingClass);
            boundElement.trigger('dragstop.spectrum', [ get() ]);
        }

        function setFromTextInput() {

            var value = textInput.val();

            if ((value === null || value === "") && allowEmpty) {
                set(null);
                move();
                updateOriginalInput();
            }
            else {
                var tiny = tinycolor(value);
                if (tiny.isValid()) {
                    set(tiny);
                    move();
                    updateOriginalInput();
                }
                else {
                    textInput.addClass("sp-validation-error");
                }
            }
        }

        function toggle() {
            if (visible) {
                hide();
            }
            else {
                show();
            }
        }

        function show() {
            var event = $.Event('beforeShow.spectrum');

            if (visible) {
                reflow();
                return;
            }

            boundElement.trigger(event, [ get() ]);

            if (callbacks.beforeShow(get()) === false || event.isDefaultPrevented()) {
                return;
            }

            hideAll();
            visible = true;

            $(doc).bind("keydown.spectrum", onkeydown);
            $(doc).bind("click.spectrum", clickout);
            $(window).bind("resize.spectrum", resize);
            replacer.addClass("sp-active");
            container.removeClass("sp-hidden");

            reflow();
            updateUI();

            colorOnShow = get();

            drawInitial();
            callbacks.show(colorOnShow);
            boundElement.trigger('show.spectrum', [ colorOnShow ]);
        }

        function onkeydown(e) {
            // Close on ESC
            if (e.keyCode === 27) {
                hide();
            }
        }

        function clickout(e) {
            // Return on right click.
            if (e.button == 2) { return; }

            // If a drag event was happening during the mouseup, don't hide
            // on click.
            if (isDragging) { return; }

            if (clickoutFiresChange) {
                updateOriginalInput(true);
            }
            else {
                revert();
            }
            hide();
        }

        function hide() {
            // Return if hiding is unnecessary
            if (!visible || flat) { return; }
            visible = false;

            $(doc).unbind("keydown.spectrum", onkeydown);
            $(doc).unbind("click.spectrum", clickout);
            $(window).unbind("resize.spectrum", resize);

            replacer.removeClass("sp-active");
            container.addClass("sp-hidden");

            callbacks.hide(get());
            boundElement.trigger('hide.spectrum', [ get() ]);
        }

        function revert() {
            set(colorOnShow, true);
        }

        function set(color, ignoreFormatChange) {
            if (tinycolor.equals(color, get())) {
                // Update UI just in case a validation error needs
                // to be cleared.
                updateUI();
                return;
            }

            var newColor, newHsv;
            if (!color && allowEmpty) {
                isEmpty = true;
            } else {
                isEmpty = false;
                newColor = tinycolor(color);
                newHsv = newColor.toHsv();

                currentHue = (newHsv.h % 360) / 360;
                currentSaturation = newHsv.s;
                currentValue = newHsv.v;
                currentAlpha = newHsv.a;
            }
            updateUI();

            if (newColor && newColor.isValid() && !ignoreFormatChange) {
                currentPreferredFormat = opts.preferredFormat || newColor.getFormat();
            }
        }

        function get(opts) {
            opts = opts || { };

            if (allowEmpty && isEmpty) {
                return null;
            }

            return tinycolor.fromRatio({
                h: currentHue,
                s: currentSaturation,
                v: currentValue,
                a: Math.round(currentAlpha * 1000) / 1000
            }, { format: opts.format || currentPreferredFormat });
        }

        function isValid() {
            return !textInput.hasClass("sp-validation-error");
        }

        function move() {
            updateUI();

            callbacks.move(get());
            boundElement.trigger('move.spectrum', [ get() ]);
        }

        function updateUI() {

            textInput.removeClass("sp-validation-error");

            updateHelperLocations();

            // Update dragger background color (gradients take care of saturation and value).
            var flatColor = tinycolor.fromRatio({ h: currentHue, s: 1, v: 1 });
            dragger.css("background-color", flatColor.toHexString());

            // Get a format that alpha will be included in (hex and names ignore alpha)
            var format = currentPreferredFormat;
            if (currentAlpha < 1 && !(currentAlpha === 0 && format === "name")) {
                if (format === "hex" || format === "hex3" || format === "hex6" || format === "name") {
                    format = "rgb";
                }
            }

            var realColor = get({ format: format }),
                displayColor = '';

             //reset background info for preview element
            previewElement.removeClass("sp-clear-display");
            previewElement.css('background-color', 'transparent');

            if (!realColor && allowEmpty) {
                // Update the replaced elements background with icon indicating no color selection
                previewElement.addClass("sp-clear-display");
            }
            else {
                var realHex = realColor.toHexString(),
                    realRgb = realColor.toRgbString();

                // Update the replaced elements background color (with actual selected color)
                if (rgbaSupport || realColor.alpha === 1) {
                    previewElement.css("background-color", realRgb);
                }
                else {
                    previewElement.css("background-color", "transparent");
                    previewElement.css("filter", realColor.toFilter());
                }

                if (opts.showAlpha) {
                    var rgb = realColor.toRgb();
                    rgb.a = 0;
                    var realAlpha = tinycolor(rgb).toRgbString();
                    var gradient = "linear-gradient(left, " + realAlpha + ", " + realHex + ")";

                    if (IE) {
                        alphaSliderInner.css("filter", tinycolor(realAlpha).toFilter({ gradientType: 1 }, realHex));
                    }
                    else {
                        alphaSliderInner.css("background", "-webkit-" + gradient);
                        alphaSliderInner.css("background", "-moz-" + gradient);
                        alphaSliderInner.css("background", "-ms-" + gradient);
                        // Use current syntax gradient on unprefixed property.
                        alphaSliderInner.css("background",
                            "linear-gradient(to right, " + realAlpha + ", " + realHex + ")");
                    }
                }

                displayColor = realColor.toString(format);
            }

            // Update the text entry input as it changes happen
            if (opts.showInput) {
                textInput.val(displayColor);
            }

            if (opts.showPalette) {
                drawPalette();
            }

            drawInitial();
        }

        function updateHelperLocations() {
            var s = currentSaturation;
            var v = currentValue;

            if(allowEmpty && isEmpty) {
                //if selected color is empty, hide the helpers
                alphaSlideHelper.hide();
                slideHelper.hide();
                dragHelper.hide();
            }
            else {
                //make sure helpers are visible
                alphaSlideHelper.show();
                slideHelper.show();
                dragHelper.show();

                // Where to show the little circle in that displays your current selected color
                var dragX = s * dragWidth;
                var dragY = dragHeight - (v * dragHeight);
                dragX = Math.max(
                    -dragHelperHeight,
                    Math.min(dragWidth - dragHelperHeight, dragX - dragHelperHeight)
                );
                dragY = Math.max(
                    -dragHelperHeight,
                    Math.min(dragHeight - dragHelperHeight, dragY - dragHelperHeight)
                );
                dragHelper.css({
                    "top": dragY + "px",
                    "left": dragX + "px"
                });

                var alphaX = currentAlpha * alphaWidth;
                alphaSlideHelper.css({
                    "left": (alphaX - (alphaSlideHelperWidth / 2)) + "px"
                });

                // Where to show the bar that displays your current selected hue
                var slideY = (currentHue) * slideHeight;
                slideHelper.css({
                    "top": (slideY - slideHelperHeight) + "px"
                });
            }
        }

        function updateOriginalInput(fireCallback) {
            var color = get(),
                displayColor = '',
                hasChanged = !tinycolor.equals(color, colorOnShow);

            if (color) {
                displayColor = color.toString(currentPreferredFormat);
                // Update the selection palette with the current color
                addColorToSelectionPalette(color);
            }

            if (isInput) {
                boundElement.val(displayColor);
            }

            if (fireCallback && hasChanged) {
                callbacks.change(color);
                boundElement.trigger('change', [ color ]);
            }
        }

        function reflow() {
            if (!visible) {
                return; // Calculations would be useless and wouldn't be reliable anyways
            }
            dragWidth = dragger.width();
            dragHeight = dragger.height();
            dragHelperHeight = dragHelper.height();
            slideWidth = slider.width();
            slideHeight = slider.height();
            slideHelperHeight = slideHelper.height();
            alphaWidth = alphaSlider.width();
            alphaSlideHelperWidth = alphaSlideHelper.width();

            if (!flat) {
                container.css("position", "absolute");
                if (opts.offset) {
                    container.offset(opts.offset);
                } else {
                    container.offset(getOffset(container, offsetElement));
                }
            }

            updateHelperLocations();

            if (opts.showPalette) {
                drawPalette();
            }

            boundElement.trigger('reflow.spectrum');
        }

        function destroy() {
            boundElement.show();
            offsetElement.unbind("click.spectrum touchstart.spectrum");
            container.remove();
            replacer.remove();
            spectrums[spect.id] = null;
        }

        function option(optionName, optionValue) {
            if (optionName === undefined) {
                return $.extend({}, opts);
            }
            if (optionValue === undefined) {
                return opts[optionName];
            }

            opts[optionName] = optionValue;

            if (optionName === "preferredFormat") {
                currentPreferredFormat = opts.preferredFormat;
            }
            applyOptions();
        }

        function enable() {
            disabled = false;
            boundElement.attr("disabled", false);
            offsetElement.removeClass("sp-disabled");
        }

        function disable() {
            hide();
            disabled = true;
            boundElement.attr("disabled", true);
            offsetElement.addClass("sp-disabled");
        }

        function setOffset(coord) {
            opts.offset = coord;
            reflow();
        }

        initialize();

        var spect = {
            show: show,
            hide: hide,
            toggle: toggle,
            reflow: reflow,
            option: option,
            enable: enable,
            disable: disable,
            offset: setOffset,
            set: function (c) {
                set(c);
                updateOriginalInput();
            },
            get: get,
            destroy: destroy,
            container: container
        };

        spect.id = spectrums.push(spect) - 1;

        return spect;
    }

    /**
    * checkOffset - get the offset below/above and left/right element depending on screen position
    * Thanks https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.datepicker.js
    */
    function getOffset(picker, input) {
        var extraY = 0;
        var dpWidth = picker.outerWidth();
        var dpHeight = picker.outerHeight();
        var inputHeight = input.outerHeight();
        var doc = picker[0].ownerDocument;
        var docElem = doc.documentElement;
        var viewWidth = docElem.clientWidth + $(doc).scrollLeft();
        var viewHeight = docElem.clientHeight + $(doc).scrollTop();
        var offset = input.offset();
        var offsetLeft = offset.left;
        var offsetTop = offset.top;

        offsetTop += inputHeight;

        offsetLeft -=
            Math.min(offsetLeft, (offsetLeft + dpWidth > viewWidth && viewWidth > dpWidth) ?
            Math.abs(offsetLeft + dpWidth - viewWidth) : 0);

        offsetTop -=
            Math.min(offsetTop, ((offsetTop + dpHeight > viewHeight && viewHeight > dpHeight) ?
            Math.abs(dpHeight + inputHeight - extraY) : extraY));

        return {
            top: offsetTop,
            bottom: offset.bottom,
            left: offsetLeft,
            right: offset.right,
            width: offset.width,
            height: offset.height
        };
    }

    /**
    * noop - do nothing
    */
    function noop() {

    }

    /**
    * stopPropagation - makes the code only doing this a little easier to read in line
    */
    function stopPropagation(e) {
        e.stopPropagation();
    }

    /**
    * Create a function bound to a given object
    * Thanks to underscore.js
    */
    function bind(func, obj) {
        var slice = Array.prototype.slice;
        var args = slice.call(arguments, 2);
        return function () {
            return func.apply(obj, args.concat(slice.call(arguments)));
        };
    }

    /**
    * Lightweight drag helper.  Handles containment within the element, so that
    * when dragging, the x is within [0,element.width] and y is within [0,element.height]
    */
    function draggable(element, onmove, onstart, onstop) {
        onmove = onmove || function () { };
        onstart = onstart || function () { };
        onstop = onstop || function () { };
        var doc = document;
        var dragging = false;
        var offset = {};
        var maxHeight = 0;
        var maxWidth = 0;
        var hasTouch = ('ontouchstart' in window);

        var duringDragEvents = {};
        duringDragEvents["selectstart"] = prevent;
        duringDragEvents["dragstart"] = prevent;
        duringDragEvents["touchmove mousemove"] = move;
        duringDragEvents["touchend mouseup"] = stop;

        function prevent(e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.returnValue = false;
        }

        function move(e) {
            if (dragging) {
                // Mouseup happened outside of window
                if (IE && doc.documentMode < 9 && !e.button) {
                    return stop();
                }

                var t0 = e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0];
                var pageX = t0 && t0.pageX || e.pageX;
                var pageY = t0 && t0.pageY || e.pageY;

                var dragX = Math.max(0, Math.min(pageX - offset.left, maxWidth));
                var dragY = Math.max(0, Math.min(pageY - offset.top, maxHeight));

                if (hasTouch) {
                    // Stop scrolling in iOS
                    prevent(e);
                }

                onmove.apply(element, [dragX, dragY, e]);
            }
        }

        function start(e) {
            var rightclick = (e.which) ? (e.which == 3) : (e.button == 2);

            if (!rightclick && !dragging) {
                if (onstart.apply(element, arguments) !== false) {
                    dragging = true;
                    maxHeight = $(element).height();
                    maxWidth = $(element).width();
                    offset = $(element).offset();

                    $(doc).bind(duringDragEvents);
                    $(doc.body).addClass("sp-dragging");

                    move(e);

                    prevent(e);
                }
            }
        }

        function stop() {
            if (dragging) {
                $(doc).unbind(duringDragEvents);
                $(doc.body).removeClass("sp-dragging");

                // Wait a tick before notifying observers to allow the click event
                // to fire in Chrome.
                setTimeout(function() {
                    onstop.apply(element, arguments);
                }, 0);
            }
            dragging = false;
        }

        $(element).bind("touchstart mousedown", start);
    }

    function throttle(func, wait, debounce) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var throttler = function () {
                timeout = null;
                func.apply(context, args);
            };
            if (debounce) clearTimeout(timeout);
            if (debounce || !timeout) timeout = setTimeout(throttler, wait);
        };
    }

    function inputTypeColorSupport() {
        return $.fn.spectrum.inputTypeColorSupport();
    }

    /**
    * Define a jQuery plugin
    */
    var dataID = "spectrum.id";
    $.fn.spectrum = function (opts, extra) {

        if (typeof opts == "string") {

            var returnValue = this;
            var args = Array.prototype.slice.call( arguments, 1 );

            this.each(function () {
                var spect = spectrums[$(this).data(dataID)];
                if (spect) {
                    var method = spect[opts];
                    if (!method) {
                        throw new Error( "Spectrum: no such method: '" + opts + "'" );
                    }

                    if (opts == "get") {
                        returnValue = spect.get();
                    }
                    else if (opts == "container") {
                        returnValue = spect.container;
                    }
                    else if (opts == "option") {
                        returnValue = spect.option.apply(spect, args);
                    }
                    else if (opts == "destroy") {
                        spect.destroy();
                        $(this).removeData(dataID);
                    }
                    else {
                        method.apply(spect, args);
                    }
                }
            });

            return returnValue;
        }

        // Initializing a new instance of spectrum
        return this.spectrum("destroy").each(function () {
            var options = $.extend({}, opts, $(this).data());
            var spect = spectrum(this, options);
            $(this).data(dataID, spect.id);
        });
    };

    $.fn.spectrum.load = true;
    $.fn.spectrum.loadOpts = {};
    $.fn.spectrum.draggable = draggable;
    $.fn.spectrum.defaults = defaultOpts;
    $.fn.spectrum.inputTypeColorSupport = function inputTypeColorSupport() {
        if (typeof inputTypeColorSupport._cachedResult === "undefined") {
            var colorInput = $("<input type='color'/>")[0]; // if color element is supported, value will default to not null
            inputTypeColorSupport._cachedResult = colorInput.type === "color" && colorInput.value !== "";
        }
        return inputTypeColorSupport._cachedResult;
    };

    $.spectrum = { };
    $.spectrum.localization = { };
    $.spectrum.palettes = { };

    $.fn.spectrum.processNativeColorInputs = function () {
        var colorInputs = $("input[type=color]");
        if (colorInputs.length && !inputTypeColorSupport()) {
            colorInputs.spectrum({
                preferredFormat: "hex6"
            });
        }
    };

    // TinyColor v1.1.2
    // https://github.com/bgrins/TinyColor
    // Brian Grinstead, MIT License

    (function() {

    var trimLeft = /^[\s,#]+/,
        trimRight = /\s+$/,
        tinyCounter = 0,
        math = Math,
        mathRound = math.round,
        mathMin = math.min,
        mathMax = math.max,
        mathRandom = math.random;

    var tinycolor = function(color, opts) {

        color = (color) ? color : '';
        opts = opts || { };

        // If input is already a tinycolor, return itself
        if (color instanceof tinycolor) {
           return color;
        }
        // If we are called as a function, call using new instead
        if (!(this instanceof tinycolor)) {
            return new tinycolor(color, opts);
        }

        var rgb = inputToRGB(color);
        this._originalInput = color,
        this._r = rgb.r,
        this._g = rgb.g,
        this._b = rgb.b,
        this._a = rgb.a,
        this._roundA = mathRound(1000 * this._a) / 1000,
        this._format = opts.format || rgb.format;
        this._gradientType = opts.gradientType;

        // Don't let the range of [0,255] come back in [0,1].
        // Potentially lose a little bit of precision here, but will fix issues where
        // .5 gets interpreted as half of the total, instead of half of 1
        // If it was supposed to be 128, this was already taken care of by `inputToRgb`
        if (this._r < 1) { this._r = mathRound(this._r); }
        if (this._g < 1) { this._g = mathRound(this._g); }
        if (this._b < 1) { this._b = mathRound(this._b); }

        this._ok = rgb.ok;
        this._tc_id = tinyCounter++;
    };

    tinycolor.prototype = {
        isDark: function() {
            return this.getBrightness() < 128;
        },
        isLight: function() {
            return !this.isDark();
        },
        isValid: function() {
            return this._ok;
        },
        getOriginalInput: function() {
          return this._originalInput;
        },
        getFormat: function() {
            return this._format;
        },
        getAlpha: function() {
            return this._a;
        },
        getBrightness: function() {
            var rgb = this.toRgb();
            return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
        },
        setAlpha: function(value) {
            this._a = boundAlpha(value);
            this._roundA = mathRound(1000 * this._a) / 1000;
            return this;
        },
        toHsv: function() {
            var hsv = rgbToHsv(this._r, this._g, this._b);
            return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
        },
        toHsvString: function() {
            var hsv = rgbToHsv(this._r, this._g, this._b);
            var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
            return (this._a == 1) ?
              "hsv("  + h + ", " + s + "%, " + v + "%)" :
              "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
        },
        toHsl: function() {
            var hsl = rgbToHsl(this._r, this._g, this._b);
            return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
        },
        toHslString: function() {
            var hsl = rgbToHsl(this._r, this._g, this._b);
            var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
            return (this._a == 1) ?
              "hsl("  + h + ", " + s + "%, " + l + "%)" :
              "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
        },
        toHex: function(allow3Char) {
            return rgbToHex(this._r, this._g, this._b, allow3Char);
        },
        toHexString: function(allow3Char) {
            return '#' + this.toHex(allow3Char);
        },
        toHex8: function() {
            return rgbaToHex(this._r, this._g, this._b, this._a);
        },
        toHex8String: function() {
            return '#' + this.toHex8();
        },
        toRgb: function() {
            return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
        },
        toRgbString: function() {
            return (this._a == 1) ?
              "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
              "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
        },
        toPercentageRgb: function() {
            return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
        },
        toPercentageRgbString: function() {
            return (this._a == 1) ?
              "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
              "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
        },
        toName: function() {
            if (this._a === 0) {
                return "transparent";
            }

            if (this._a < 1) {
                return false;
            }

            return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
        },
        toFilter: function(secondColor) {
            var hex8String = '#' + rgbaToHex(this._r, this._g, this._b, this._a);
            var secondHex8String = hex8String;
            var gradientType = this._gradientType ? "GradientType = 1, " : "";

            if (secondColor) {
                var s = tinycolor(secondColor);
                secondHex8String = s.toHex8String();
            }

            return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
        },
        toString: function(format) {
            var formatSet = !!format;
            format = format || this._format;

            var formattedString = false;
            var hasAlpha = this._a < 1 && this._a >= 0;
            var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "name");

            if (needsAlphaFormat) {
                // Special case for "transparent", all other non-alpha formats
                // will return rgba when there is transparency.
                if (format === "name" && this._a === 0) {
                    return this.toName();
                }
                return this.toRgbString();
            }
            if (format === "rgb") {
                formattedString = this.toRgbString();
            }
            if (format === "prgb") {
                formattedString = this.toPercentageRgbString();
            }
            if (format === "hex" || format === "hex6") {
                formattedString = this.toHexString();
            }
            if (format === "hex3") {
                formattedString = this.toHexString(true);
            }
            if (format === "hex8") {
                formattedString = this.toHex8String();
            }
            if (format === "name") {
                formattedString = this.toName();
            }
            if (format === "hsl") {
                formattedString = this.toHslString();
            }
            if (format === "hsv") {
                formattedString = this.toHsvString();
            }

            return formattedString || this.toHexString();
        },

        _applyModification: function(fn, args) {
            var color = fn.apply(null, [this].concat([].slice.call(args)));
            this._r = color._r;
            this._g = color._g;
            this._b = color._b;
            this.setAlpha(color._a);
            return this;
        },
        lighten: function() {
            return this._applyModification(lighten, arguments);
        },
        brighten: function() {
            return this._applyModification(brighten, arguments);
        },
        darken: function() {
            return this._applyModification(darken, arguments);
        },
        desaturate: function() {
            return this._applyModification(desaturate, arguments);
        },
        saturate: function() {
            return this._applyModification(saturate, arguments);
        },
        greyscale: function() {
            return this._applyModification(greyscale, arguments);
        },
        spin: function() {
            return this._applyModification(spin, arguments);
        },

        _applyCombination: function(fn, args) {
            return fn.apply(null, [this].concat([].slice.call(args)));
        },
        analogous: function() {
            return this._applyCombination(analogous, arguments);
        },
        complement: function() {
            return this._applyCombination(complement, arguments);
        },
        monochromatic: function() {
            return this._applyCombination(monochromatic, arguments);
        },
        splitcomplement: function() {
            return this._applyCombination(splitcomplement, arguments);
        },
        triad: function() {
            return this._applyCombination(triad, arguments);
        },
        tetrad: function() {
            return this._applyCombination(tetrad, arguments);
        }
    };

    // If input is an object, force 1 into "1.0" to handle ratios properly
    // String input requires "1.0" as input, so 1 will be treated as 1
    tinycolor.fromRatio = function(color, opts) {
        if (typeof color == "object") {
            var newColor = {};
            for (var i in color) {
                if (color.hasOwnProperty(i)) {
                    if (i === "a") {
                        newColor[i] = color[i];
                    }
                    else {
                        newColor[i] = convertToPercentage(color[i]);
                    }
                }
            }
            color = newColor;
        }

        return tinycolor(color, opts);
    };

    // Given a string or object, convert that input to RGB
    // Possible string inputs:
    //
    //     "red"
    //     "#f00" or "f00"
    //     "#ff0000" or "ff0000"
    //     "#ff000000" or "ff000000"
    //     "rgb 255 0 0" or "rgb (255, 0, 0)"
    //     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
    //     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
    //     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
    //     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
    //     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
    //     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
    //
    function inputToRGB(color) {

        var rgb = { r: 0, g: 0, b: 0 };
        var a = 1;
        var ok = false;
        var format = false;

        if (typeof color == "string") {
            color = stringInputToObject(color);
        }

        if (typeof color == "object") {
            if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
                rgb = rgbToRgb(color.r, color.g, color.b);
                ok = true;
                format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
            }
            else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("v")) {
                color.s = convertToPercentage(color.s);
                color.v = convertToPercentage(color.v);
                rgb = hsvToRgb(color.h, color.s, color.v);
                ok = true;
                format = "hsv";
            }
            else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {
                color.s = convertToPercentage(color.s);
                color.l = convertToPercentage(color.l);
                rgb = hslToRgb(color.h, color.s, color.l);
                ok = true;
                format = "hsl";
            }

            if (color.hasOwnProperty("a")) {
                a = color.a;
            }
        }

        a = boundAlpha(a);

        return {
            ok: ok,
            format: color.format || format,
            r: mathMin(255, mathMax(rgb.r, 0)),
            g: mathMin(255, mathMax(rgb.g, 0)),
            b: mathMin(255, mathMax(rgb.b, 0)),
            a: a
        };
    }


    // Conversion Functions
    // --------------------

    // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
    // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

    // `rgbToRgb`
    // Handle bounds / percentage checking to conform to CSS color spec
    // <http://www.w3.org/TR/css3-color/>
    // *Assumes:* r, g, b in [0, 255] or [0, 1]
    // *Returns:* { r, g, b } in [0, 255]
    function rgbToRgb(r, g, b){
        return {
            r: bound01(r, 255) * 255,
            g: bound01(g, 255) * 255,
            b: bound01(b, 255) * 255
        };
    }

    // `rgbToHsl`
    // Converts an RGB color value to HSL.
    // *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
    // *Returns:* { h, s, l } in [0,1]
    function rgbToHsl(r, g, b) {

        r = bound01(r, 255);
        g = bound01(g, 255);
        b = bound01(b, 255);

        var max = mathMax(r, g, b), min = mathMin(r, g, b);
        var h, s, l = (max + min) / 2;

        if(max == min) {
            h = s = 0; // achromatic
        }
        else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }

            h /= 6;
        }

        return { h: h, s: s, l: l };
    }

    // `hslToRgb`
    // Converts an HSL color value to RGB.
    // *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
    // *Returns:* { r, g, b } in the set [0, 255]
    function hslToRgb(h, s, l) {
        var r, g, b;

        h = bound01(h, 360);
        s = bound01(s, 100);
        l = bound01(l, 100);

        function hue2rgb(p, q, t) {
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        if(s === 0) {
            r = g = b = l; // achromatic
        }
        else {
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }

        return { r: r * 255, g: g * 255, b: b * 255 };
    }

    // `rgbToHsv`
    // Converts an RGB color value to HSV
    // *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
    // *Returns:* { h, s, v } in [0,1]
    function rgbToHsv(r, g, b) {

        r = bound01(r, 255);
        g = bound01(g, 255);
        b = bound01(b, 255);

        var max = mathMax(r, g, b), min = mathMin(r, g, b);
        var h, s, v = max;

        var d = max - min;
        s = max === 0 ? 0 : d / max;

        if(max == min) {
            h = 0; // achromatic
        }
        else {
            switch(max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        return { h: h, s: s, v: v };
    }

    // `hsvToRgb`
    // Converts an HSV color value to RGB.
    // *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
    // *Returns:* { r, g, b } in the set [0, 255]
     function hsvToRgb(h, s, v) {

        h = bound01(h, 360) * 6;
        s = bound01(s, 100);
        v = bound01(v, 100);

        var i = math.floor(h),
            f = h - i,
            p = v * (1 - s),
            q = v * (1 - f * s),
            t = v * (1 - (1 - f) * s),
            mod = i % 6,
            r = [v, q, p, p, t, v][mod],
            g = [t, v, v, q, p, p][mod],
            b = [p, p, t, v, v, q][mod];

        return { r: r * 255, g: g * 255, b: b * 255 };
    }

    // `rgbToHex`
    // Converts an RGB color to hex
    // Assumes r, g, and b are contained in the set [0, 255]
    // Returns a 3 or 6 character hex
    function rgbToHex(r, g, b, allow3Char) {

        var hex = [
            pad2(mathRound(r).toString(16)),
            pad2(mathRound(g).toString(16)),
            pad2(mathRound(b).toString(16))
        ];

        // Return a 3 character hex if possible
        if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
            return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
        }

        return hex.join("");
    }
        // `rgbaToHex`
        // Converts an RGBA color plus alpha transparency to hex
        // Assumes r, g, b and a are contained in the set [0, 255]
        // Returns an 8 character hex
        function rgbaToHex(r, g, b, a) {

            var hex = [
                pad2(convertDecimalToHex(a)),
                pad2(mathRound(r).toString(16)),
                pad2(mathRound(g).toString(16)),
                pad2(mathRound(b).toString(16))
            ];

            return hex.join("");
        }

    // `equals`
    // Can be called with any tinycolor input
    tinycolor.equals = function (color1, color2) {
        if (!color1 || !color2) { return false; }
        return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
    };
    tinycolor.random = function() {
        return tinycolor.fromRatio({
            r: mathRandom(),
            g: mathRandom(),
            b: mathRandom()
        });
    };


    // Modification Functions
    // ----------------------
    // Thanks to less.js for some of the basics here
    // <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

    function desaturate(color, amount) {
        amount = (amount === 0) ? 0 : (amount || 10);
        var hsl = tinycolor(color).toHsl();
        hsl.s -= amount / 100;
        hsl.s = clamp01(hsl.s);
        return tinycolor(hsl);
    }

    function saturate(color, amount) {
        amount = (amount === 0) ? 0 : (amount || 10);
        var hsl = tinycolor(color).toHsl();
        hsl.s += amount / 100;
        hsl.s = clamp01(hsl.s);
        return tinycolor(hsl);
    }

    function greyscale(color) {
        return tinycolor(color).desaturate(100);
    }

    function lighten (color, amount) {
        amount = (amount === 0) ? 0 : (amount || 10);
        var hsl = tinycolor(color).toHsl();
        hsl.l += amount / 100;
        hsl.l = clamp01(hsl.l);
        return tinycolor(hsl);
    }

    function brighten(color, amount) {
        amount = (amount === 0) ? 0 : (amount || 10);
        var rgb = tinycolor(color).toRgb();
        rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
        rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
        rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
        return tinycolor(rgb);
    }

    function darken (color, amount) {
        amount = (amount === 0) ? 0 : (amount || 10);
        var hsl = tinycolor(color).toHsl();
        hsl.l -= amount / 100;
        hsl.l = clamp01(hsl.l);
        return tinycolor(hsl);
    }

    // Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
    // Values outside of this range will be wrapped into this range.
    function spin(color, amount) {
        var hsl = tinycolor(color).toHsl();
        var hue = (mathRound(hsl.h) + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return tinycolor(hsl);
    }

    // Combination Functions
    // ---------------------
    // Thanks to jQuery xColor for some of the ideas behind these
    // <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

    function complement(color) {
        var hsl = tinycolor(color).toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return tinycolor(hsl);
    }

    function triad(color) {
        var hsl = tinycolor(color).toHsl();
        var h = hsl.h;
        return [
            tinycolor(color),
            tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
            tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
        ];
    }

    function tetrad(color) {
        var hsl = tinycolor(color).toHsl();
        var h = hsl.h;
        return [
            tinycolor(color),
            tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
            tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
            tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
        ];
    }

    function splitcomplement(color) {
        var hsl = tinycolor(color).toHsl();
        var h = hsl.h;
        return [
            tinycolor(color),
            tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
            tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
        ];
    }

    function analogous(color, results, slices) {
        results = results || 6;
        slices = slices || 30;

        var hsl = tinycolor(color).toHsl();
        var part = 360 / slices;
        var ret = [tinycolor(color)];

        for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(tinycolor(hsl));
        }
        return ret;
    }

    function monochromatic(color, results) {
        results = results || 6;
        var hsv = tinycolor(color).toHsv();
        var h = hsv.h, s = hsv.s, v = hsv.v;
        var ret = [];
        var modification = 1 / results;

        while (results--) {
            ret.push(tinycolor({ h: h, s: s, v: v}));
            v = (v + modification) % 1;
        }

        return ret;
    }

    // Utility Functions
    // ---------------------

    tinycolor.mix = function(color1, color2, amount) {
        amount = (amount === 0) ? 0 : (amount || 50);

        var rgb1 = tinycolor(color1).toRgb();
        var rgb2 = tinycolor(color2).toRgb();

        var p = amount / 100;
        var w = p * 2 - 1;
        var a = rgb2.a - rgb1.a;

        var w1;

        if (w * a == -1) {
            w1 = w;
        } else {
            w1 = (w + a) / (1 + w * a);
        }

        w1 = (w1 + 1) / 2;

        var w2 = 1 - w1;

        var rgba = {
            r: rgb2.r * w1 + rgb1.r * w2,
            g: rgb2.g * w1 + rgb1.g * w2,
            b: rgb2.b * w1 + rgb1.b * w2,
            a: rgb2.a * p  + rgb1.a * (1 - p)
        };

        return tinycolor(rgba);
    };


    // Readability Functions
    // ---------------------
    // <http://www.w3.org/TR/AERT#color-contrast>

    // `readability`
    // Analyze the 2 colors and returns an object with the following properties:
    //    `brightness`: difference in brightness between the two colors
    //    `color`: difference in color/hue between the two colors
    tinycolor.readability = function(color1, color2) {
        var c1 = tinycolor(color1);
        var c2 = tinycolor(color2);
        var rgb1 = c1.toRgb();
        var rgb2 = c2.toRgb();
        var brightnessA = c1.getBrightness();
        var brightnessB = c2.getBrightness();
        var colorDiff = (
            Math.max(rgb1.r, rgb2.r) - Math.min(rgb1.r, rgb2.r) +
            Math.max(rgb1.g, rgb2.g) - Math.min(rgb1.g, rgb2.g) +
            Math.max(rgb1.b, rgb2.b) - Math.min(rgb1.b, rgb2.b)
        );

        return {
            brightness: Math.abs(brightnessA - brightnessB),
            color: colorDiff
        };
    };

    // `readable`
    // http://www.w3.org/TR/AERT#color-contrast
    // Ensure that foreground and background color combinations provide sufficient contrast.
    // *Example*
    //    tinycolor.isReadable("#000", "#111") => false
    tinycolor.isReadable = function(color1, color2) {
        var readability = tinycolor.readability(color1, color2);
        return readability.brightness > 125 && readability.color > 500;
    };

    // `mostReadable`
    // Given a base color and a list of possible foreground or background
    // colors for that base, returns the most readable color.
    // *Example*
    //    tinycolor.mostReadable("#123", ["#fff", "#000"]) => "#000"
    tinycolor.mostReadable = function(baseColor, colorList) {
        var bestColor = null;
        var bestScore = 0;
        var bestIsReadable = false;
        for (var i=0; i < colorList.length; i++) {

            // We normalize both around the "acceptable" breaking point,
            // but rank brightness constrast higher than hue.

            var readability = tinycolor.readability(baseColor, colorList[i]);
            var readable = readability.brightness > 125 && readability.color > 500;
            var score = 3 * (readability.brightness / 125) + (readability.color / 500);

            if ((readable && ! bestIsReadable) ||
                (readable && bestIsReadable && score > bestScore) ||
                ((! readable) && (! bestIsReadable) && score > bestScore)) {
                bestIsReadable = readable;
                bestScore = score;
                bestColor = tinycolor(colorList[i]);
            }
        }
        return bestColor;
    };


    // Big List of Colors
    // ------------------
    // <http://www.w3.org/TR/css3-color/#svg-color>
    var names = tinycolor.names = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32"
    };

    // Make it easy to access colors via `hexNames[hex]`
    var hexNames = tinycolor.hexNames = flip(names);


    // Utilities
    // ---------

    // `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
    function flip(o) {
        var flipped = { };
        for (var i in o) {
            if (o.hasOwnProperty(i)) {
                flipped[o[i]] = i;
            }
        }
        return flipped;
    }

    // Return a valid alpha value [0,1] with all invalid values being set to 1
    function boundAlpha(a) {
        a = parseFloat(a);

        if (isNaN(a) || a < 0 || a > 1) {
            a = 1;
        }

        return a;
    }

    // Take input from [0, n] and return it as [0, 1]
    function bound01(n, max) {
        if (isOnePointZero(n)) { n = "100%"; }

        var processPercent = isPercentage(n);
        n = mathMin(max, mathMax(0, parseFloat(n)));

        // Automatically convert percentage into number
        if (processPercent) {
            n = parseInt(n * max, 10) / 100;
        }

        // Handle floating point rounding errors
        if ((math.abs(n - max) < 0.000001)) {
            return 1;
        }

        // Convert into [0, 1] range if it isn't already
        return (n % max) / parseFloat(max);
    }

    // Force a number between 0 and 1
    function clamp01(val) {
        return mathMin(1, mathMax(0, val));
    }

    // Parse a base-16 hex value into a base-10 integer
    function parseIntFromHex(val) {
        return parseInt(val, 16);
    }

    // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
    // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
    function isOnePointZero(n) {
        return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
    }

    // Check to see if string passed in is a percentage
    function isPercentage(n) {
        return typeof n === "string" && n.indexOf('%') != -1;
    }

    // Force a hex value to have 2 characters
    function pad2(c) {
        return c.length == 1 ? '0' + c : '' + c;
    }

    // Replace a decimal with it's percentage value
    function convertToPercentage(n) {
        if (n <= 1) {
            n = (n * 100) + "%";
        }

        return n;
    }

    // Converts a decimal to a hex value
    function convertDecimalToHex(d) {
        return Math.round(parseFloat(d) * 255).toString(16);
    }
    // Converts a hex value to a decimal
    function convertHexToDecimal(h) {
        return (parseIntFromHex(h) / 255);
    }

    var matchers = (function() {

        // <http://www.w3.org/TR/css3-values/#integers>
        var CSS_INTEGER = "[-\\+]?\\d+%?";

        // <http://www.w3.org/TR/css3-values/#number-value>
        var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

        // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
        var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

        // Actual matching.
        // Parentheses and commas are optional, but not required.
        // Whitespace can take the place of commas or opening paren
        var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
        var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

        return {
            rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
            rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
            hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
            hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
            hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
            hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
            hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
    })();

    // `stringInputToObject`
    // Permissive string parsing.  Take in a number of formats, and output an object
    // based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
    function stringInputToObject(color) {

        color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
        var named = false;
        if (names[color]) {
            color = names[color];
            named = true;
        }
        else if (color == 'transparent') {
            return { r: 0, g: 0, b: 0, a: 0, format: "name" };
        }

        // Try to match string input using regular expressions.
        // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
        // Just return an object and let the conversion functions handle that.
        // This way the result will be the same whether the tinycolor is initialized with string or object.
        var match;
        if ((match = matchers.rgb.exec(color))) {
            return { r: match[1], g: match[2], b: match[3] };
        }
        if ((match = matchers.rgba.exec(color))) {
            return { r: match[1], g: match[2], b: match[3], a: match[4] };
        }
        if ((match = matchers.hsl.exec(color))) {
            return { h: match[1], s: match[2], l: match[3] };
        }
        if ((match = matchers.hsla.exec(color))) {
            return { h: match[1], s: match[2], l: match[3], a: match[4] };
        }
        if ((match = matchers.hsv.exec(color))) {
            return { h: match[1], s: match[2], v: match[3] };
        }
        if ((match = matchers.hsva.exec(color))) {
            return { h: match[1], s: match[2], v: match[3], a: match[4] };
        }
        if ((match = matchers.hex8.exec(color))) {
            return {
                a: convertHexToDecimal(match[1]),
                r: parseIntFromHex(match[2]),
                g: parseIntFromHex(match[3]),
                b: parseIntFromHex(match[4]),
                format: named ? "name" : "hex8"
            };
        }
        if ((match = matchers.hex6.exec(color))) {
            return {
                r: parseIntFromHex(match[1]),
                g: parseIntFromHex(match[2]),
                b: parseIntFromHex(match[3]),
                format: named ? "name" : "hex"
            };
        }
        if ((match = matchers.hex3.exec(color))) {
            return {
                r: parseIntFromHex(match[1] + '' + match[1]),
                g: parseIntFromHex(match[2] + '' + match[2]),
                b: parseIntFromHex(match[3] + '' + match[3]),
                format: named ? "name" : "hex"
            };
        }

        return false;
    }

    window.tinycolor = tinycolor;
    })();

    $(function () {
        if ($.fn.spectrum.load) {
            $.fn.spectrum.processNativeColorInputs();
        }
    });

});
;﻿design.store = {
	design: {
		art: function(e){
			var item = e.item;
			if (typeof item == 'undefined') return false;
			jQuery('#dg-cliparts').modal('hide');
			if(typeof item.is_shop != 'undefined')
			{
				if (item.file_type != 'svg')
				{
					e.item.imgMedium = item.thumb;
				}
				var clipart_id = item.clipart_id;
				jQuery(e).data('clipart_id', clipart_id);
				design.art.create(e);
				return;
			}

			design.mask(true);
			jQuery.ajax({
				url: siteURL + "ajax.php?type=addon&task=store&view=art&id="+item.id,
				type: "GET",
				complete: function(data) {
					design.mask(false);
					if (data.responseText != '')
					{
						var art = eval ("(" + data.responseText + ")");
						
						if(art.content == '')
						{
							alert_text(lang.designer.datafound);
							return false;
						}
						
						if (item.type == 'vector')
						{
							var svg = encrypt_api.Base64.decode(art.content);
						}
						else
						{
							var svg = art.content;
						}
						item.content = svg;
						item.art_key = art.key;
						item.width 	= art.width;
						item.height = art.height;
						item.price 	= art.price;
						jQuery(document).triggerHandler( "before.store.item.design", item);
						design.store.design.create(item);
						jQuery(document).triggerHandler("after.store.item.design", item);
					}
				}
			});
		},
		create: function(item){
			$jd('.ui-lock').attr('checked', false);			
			var o 			= {};
			o.type 			= 'clipart';			
			o.upload 		= 0;
			o.clipart_id 	= item.id;
			o.clipar_type 	= 'store';
			o.price			= item.price;
			o.title 		= item.title;
			o.url 			= item.thumb;
			o.file_name 	= item.thumb;
			o.thumb 		= item.thumb;
			o.remove 		= true;
			o.edit 			= true;
			o.rotate 		= true;
			o.confirmColor	= false;
			
			
			if (item.type != 'vector')
			{
				o.file			= {};
				o.file.type		= 'image';
				o.confirmColor	= true;
				var img = new Image();
				img.onload = function() {
					o.width 	= this.width;
					o.height	= this.height;
					if (this.width > 100)
					{
						o.width 	= 100;						
						o.height 	= (100/this.width) * this.height;
					}
					o.change_color = 0;					
						
					jQuery(document).triggerHandler( "myitem.create.item.design", o);
					
					var src = 'data:image/PNG;base64,'+item.content;
					var content = '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="'+o.width+'" height="'+o.height+'" preserveAspectRatio="none" xmlns:xlink="http://www.w3.org/1999/xlink">'
								 + '<g><image x="0" y="0" width="'+o.width+'" height="'+o.height+'" preserveAspectRatio="none" xlink:href="'+src+'" /></g>'
								 + '</svg>';
					o.svg 		= jQuery.parseHTML(content);
					
					design.item.create(o);
					$jd('#dg-myclipart').modal('hide');
				}
				img.src = item.medium;
				return true;
			}
			else
			{
				o.change_color	= true;
				o.width 		= item.width;
				o.height		= item.height;
				o.file			= 'svg';
				o.art_key 		= item.art_key;
				o.svg 			= jQuery.parseHTML(item.content);
				design.item.create(o);
				var elm = design.item.get();			
				var svg = elm.children('svg');
				jQuery(svg[0]).removeAttr('style');
				$jd('.modal').modal('hide');
				var e = design.item.get();
				design.item.setup(e[0].item);
			}
		},
		idea: function(e){
			jQuery('#dg-design-ideas').modal('hide');
			var id = jQuery(e).data('id');
			var ideas = design.store.ideas.data.rows;
			if(typeof ideas[id] != 'undefined')
			{
				var idea = ideas[id];
				if(idea.fonts != '')
				{
					jQuery('head').append("<link href='https://fonts.googleapis.com/css?family="+idea.fonts+"' rel='stylesheet' type='text/css'>");
				}
				design.store.ideas.loadDesign(id);
			}
			else
			{
				alert_text(lang.designer.datafound);
				return false;
			}
		}
	},
	ideas:{
		product_id: 0,
		data: [],
		cate_id: 0,
		searchValues:[],
		products: [],
		ini: function(){
			jQuery('.dag-store-ideas').show();
			jQuery('.idea-store-detail').hide();
			
			var div 		= jQuery('.dag-store-ideas');
			
			var product 	= this.getProduct();
			var imgs	 	= this.product(product);
			if(div.html() != '')
			{
				var ideas	 = this.data;
				this.idea(ideas.rows, imgs, product.areaDesign);
			}
			else
			{
				var options = {};
				
				var type = jQuery('.idea-sort').data('type');
				if (typeof type == 'undefined')
				{
					options.sort = 'featured';
				}
				else
				{
					options.sort = type;
				}
				
				options.keyword = jQuery('#idea-keyword').val();
				
				var tags = jQuery('.idea-keyword-related .keyword-tag');
				if(tags.length > 0)
				{
					options.tags	= tags.text();
				}
				
				var designer = jQuery('.idea-keyword-related .keyword-designer');
				if(designer.length > 0)
				{
					options.designer	= designer.data('id');
				}
				
				if(jQuery('.idea-viewed').length > 0)
				{
					options.viewed = 1;
				}
				options.cate_id	= this.cate_id;
				var seft = this;
				var div = jQuery('#dg-design-ideas .modal-body');
				div.addClass('loading');
				jQuery('#store-idea-pagination').hide();
				jQuery('.idea-store-detail').hide();
				jQuery.ajax({
					beforeSend: function(){
						jQuery('#dg-design-ideas .modal-body').css('opacity', '0.5');
					},
					url: siteURL + "ajax.php?type=addon&task=store&view=ideas&product_id="+product_id,
					type: "POST",
					data: {options: options},
					complete: function(data) {
						div.removeClass('loading');
						
						if(data.status == 200)
						{
							var ideas = eval ("(" + data.responseText + ")");
							if(ideas.count == 0)
							{
								jQuery('.dag-store-ideas').html(lang.designer.datafound);
								return false;
							}
							seft.data = ideas;
							seft.idea(ideas.rows, imgs, product.areaDesign);
						}
						gridArt('.dag-store-ideas');
					}
				});
			}
			setTimeout(function(){
				jQuery('.dag-store-ideas').css('height', 'auto');
			}, 1000);
		},
		view: function(e){
			var id = jQuery(e).data('id');
			var data = this.data.rows[id];
			if(data != 'undefined')
			{
				
				var tags = '';
				if(typeof data.tags != 'undefined')
				{
					for(i=0; i<data.tags.length; i++)
					{
						if(data.tags[i] != '')
							tags = tags + '<a href="javascript:void(0);" data-title="'+data.tags[i]+'" data-id="'+data.tags[i]+'" onclick="design.store.ideas.search(\'tag\', this);" class="btn-tag">'+data.tags[i]+'</a>';
					}
				}
				var designer = '';
				if(typeof data.username != 'undefined')
				{
					designer = lang.store.designer+': <a href="javascript:void(0);" data-title="'+data.username+'" data-id="'+data.user_id+'" onclick="design.store.ideas.search(\'designer\', this);">'+data.username+'</a>';
				}
				var html = '<div class="row">'
						 + 		'<div class="col-sm-6">'
						 + 			'<img src="'+data.image+'" class="img-responsive" alt="">'
						 + 		'</div>'
						 + 		'<div class="col-sm-6">'
						 + 			'<h4>'+data.title+'</h4>'
						 + 			'<p class="help-block">'+data.description+'</p>'
						 + 			designer
						 + 			'<hr />'
						 + 			tags
						 + 		'</div>'
						 + '</div>'
						 + '<button type="button" class="close" onclick="jQuery(\'.idea-store-detail\').hide();jQuery(\'.dag-store-ideas\').show()">×</button>';
				jQuery('.idea-store-detail').html(html).show('slow');
				jQuery('.dag-store-ideas').hide();
			}
		},
		resets: function(){
			var view = jQuery('#app-wrap .labView.active');
			view.find('.drag-item').each(function(){
				var id = jQuery(this).attr('id');
				var index = id.replace('item-', '');
				design.layers.remove(index);
			});
		},
		resetSearch: function(e){
			var type = jQuery(e).data('type');
			jQuery(e).parent().remove();
			jQuery('.dag-store-ideas').html('');
			this.ini();
		},
		search: function(type, e){
			var title = jQuery(e).data('title');
			var id = jQuery(e).data('id');
			if(type == 'designer')
			{
				var html = '<span data-id="'+id+'" class="btn btn-default keyword-'+type+'">'
						 + 		'<a href="#" data-type="'+type+'" onclick="design.store.ideas.resetSearch(this)">'
						 + 		'<i class="fa fa-times" aria-hidden="true"></i>'
						 + 		'</a>'
						 + 		'<i class="fa fa-user" aria-hidden="true"></i> '+title
						 + '</span>';
			}
			else if(type == 'tag')
			{
				var html = '<span class="btn btn-default keyword-'+type+'">'
						 + 		'<a href="#" data-type="'+type+'" onclick="design.store.ideas.resetSearch(this)">'
						 + 		'<i class="fa fa-times" aria-hidden="true"></i>'
						 + 		'</a>'
						 + 		'<i class="fa fa-tag" aria-hidden="true"></i> '+title
						 + '</span>';
			}
			jQuery('.idea-keyword-related .keyword-'+type).remove();
			jQuery('.idea-keyword-related').append(html);
			jQuery('.dag-store-ideas').html('');
			this.ini();
		},
		viewed: function(e){
			var elm = jQuery(e);
			var txt = elm.text();
			if (elm.hasClass('btn'))
			{
				elm.removeClass('btn btn-default').html(txt);
			}
			else
			{
				elm.addClass('btn btn-default').html('<a href="#" class="idea-viewed"><i class="fa fa-times" aria-hidden="true"></i></a> <i class="fa fa-eye" aria-hidden="true"></i> ' + txt);
			}
			jQuery('.dag-store-ideas').html('');
			this.ini();
		},
		loadDesign: function(id){
			design.mask(true);
			jQuery(document).triggerHandler( "before.add.idea.design", id);
			jQuery.ajax({
				url: siteURL + "ajax.php?type=addon&task=store&view=design&id="+id,
				type: "GET",
				complete: function(data) {
					if (data.responseText != '')
					{
						var idea = eval ("(" + data.responseText + ")");
						
						if(idea.content == '')
						{
							alert_text(lang.designer.datafound);
							return false;
						}
						var ids = [];
						jQuery(document).on('before.imports.item.design', function(event, span, item){
							if(item.type == 'clipart')
							{
								ids.push(item.clipart_id);
								item.clipar_type = 'store';
								span.item.clipar_type = 'store';
							}							
						});
						
						jQuery(document).on('after.imports.item.design', function(event, span, item){
							if(item.type == 'text' && item.fontFamily != '' && item.fontFamily != 'arial')
							{
								design.text.update('fontfamily', item.fontFamily); 
								design.text.baseencode(item.fontFamily, 'google', span);
							}
							else if(item.type == 'clipart' && typeof item.thumb != 'undefined' && item.thumb != '')
							{
								var src = jQuery(span).find('image').attr('xlink:href');
								if(typeof src == 'undefined') return;
								src = src.replace(siteURL, '');
								if(src.indexOf('http') == 0)
								{
									var image = new Image();
									image.onload = function(){
										var canvas = document.createElement('canvas');
										canvas.width = image.width;
										canvas.height = image.height;
										var ctx = canvas.getContext("2d");
										ctx.drawImage(image, 0, 0, image.width, image.height);
										var data_img = canvas.toDataURL();
										jQuery(span).find('image').attr('xlink:href', data_img);
									};
									image.src = siteURL +'image-tool/index.php?src='+ src;
								}
							}
						});
						jQuery(document).triggerHandler( "before.added.idea.design", idea);
						design.store.ideas.resets();
						var str = encrypt_api.Base64.decode(idea.content);
						var view = design.products.viewActive();
						var vectors = str.replace('{"front":{', '{"'+view+'":{');
						design.imports.vector(vectors);
						design.selectAll();
						design.fitToAreaDesign();
						design.mask(false);
						
						jQuery(document).triggerHandler( "after.added.idea.design", idea);
						
						setTimeout(function(){
							design.ajax.getPrice();
						}, 1000);
						design.store.ideas.setView(id, ids);
					}
				}
			});
		},
		setView: function(id, ids){
			jQuery.ajax({
				url: siteURL + "ajax.php?type=addon&task=store&view=viewDesign&id="+id,
				type: "POST",
				data: {ids: ids},
				complete: function(data) {
					if( ids.length > 0 && data.responseText != '' )
					{
						var arts_key = eval ("(" + data.responseText + ")");
						jQuery('#app-wrap .drag-item').each(function(){
							var item = this.item;
							if(item.clipar_type == 'store' && typeof item.art_key == 'undefined' && typeof arts_key[item.clipart_id] != 'undefined')
							{
								this.item.art_key = arts_key[item.clipart_id];
							}
						});
					}
				}
			});
		},
		getProduct: function(){
			if(jQuery('.labView.active .design-area').length > 0)
			{
				var zoom = 220/max_box_width;
				this.products[product_id]	= [];
				
				var images 	= [], i=0,zIndex = 1;
				jQuery('.labView.active .product-design img').each(function(){
					images[i] 			= [];
					images[i].src 		= jQuery(this).attr('src');
					
					var width 			= jQuery(this).css('width');
					images[i].width		= parseFloat(width.replace('px', ''));
					images[i].width		= images[i].width * zoom;
					
					var height 			= jQuery(this).css('height');
					images[i].height 	= parseFloat(height.replace('px', ''));
					images[i].height	= images[i].height * zoom;
					
					var	top 			= jQuery(this).css('top');
					images[i].top 		= parseFloat(top.replace('px', ''));
					images[i].top		= images[i].top * zoom;
					
					var left 			= jQuery(this).css('left');
					images[i].left 		= parseFloat(left.replace('px', ''));
					images[i].left		= images[i].left * zoom;
					
					images[i].zindex 	= jQuery(this).css('z-index');
					if(images[i].zindex == 'auto')
						images[i].zindex = zIndex;
					i++;
					zIndex++;
				});
				this.products[product_id].images = images;
				
				var div = jQuery('.labView.active .design-area');
				var areaDesign = [];
				var width 				= div.css('width');
				areaDesign.width 		= parseFloat(width.replace('px', ''));
				areaDesign.width		= areaDesign.width * zoom;
				
				var height 				= div.css('height');
				areaDesign.height 		= parseFloat(height.replace('px', ''));
				areaDesign.height		= areaDesign.height * zoom;
				
				var top 				= div.css('top');
				areaDesign.top 			= parseFloat(top.replace('px', ''));
				areaDesign.top			= areaDesign.top * zoom;
				
				var left 				= div.css('left');
				areaDesign.left 		= parseFloat(left.replace('px', ''));
				areaDesign.left			= areaDesign.left * zoom;
				
				areaDesign.zindex 		= div.css('z-index');
				if(areaDesign.zindex == 'auto')
					areaDesign.zindex	= zIndex;
					
				this.products[product_id].areaDesign = areaDesign;
				this.products[product_id].zoom = zoom;
				
				return this.products[product_id];
			}
			else
			{
				return false;
			}
		},
		load: function(e){
			var product = this.getProduct();
			if(jQuery('#dg-design-ideas').hasClass('modal')){
				jQuery('#dg-design-ideas').modal('show');
			}
			if(this.product_id != product_id)
			{
				var div = jQuery('.dag-store-ideas').html('');
				this.ajax(product);
				this.product_id = product_id;
			}
			return false;
		},
		product: function(product){
			var html = '';
			if(product.images.length > 0)
			{
				for(i=0; i<product.images.length; i++)
				{
					var img = product.images[i];
					html = html + '<img src="'+img.src+'" alt="" style="width:'+img.width+'px; height:'+img.height+'px;top:'+img.top+'px; left:'+img.left+'px; z-index:'+img.zindex+';">';
				}
			}
			return html;
		},
		categories: function(cate_id, parent_id, reload){		
			var categories	= this.data.categories;
			
			var rows = false;
			var li = jQuery('.idea-breadcrumb li');
			if(cate_id == 0)
			{
				rows = categories;
				if (typeof li[1] != 'undefined') jQuery(li[1]).remove();
				if (typeof li[2] != 'undefined') jQuery(li[2]).remove();
			}
			else if(categories[cate_id] != 'undefined' && parent_id == 0)
			{
				if (typeof li[1] != 'undefined') jQuery(li[1]).remove();
				if (typeof li[2] != 'undefined') jQuery(li[2]).remove();
				
				var category = categories[cate_id];
				if(category.id != 'undefined')
				{
					jQuery('.idea-breadcrumb').append('<li><a href="javascript:void(0);" onclick="design.store.ideas.categories('+category.id+', 0)">'+category.title+'</a></li>');
				}
				if(typeof category.children != 'undefined')
				{
					rows = categories[cate_id].children;
				}				
			}
			else
			{
				if(categories[parent_id] != 'undefined' && categories[parent_id].children != 'undefined')
				{
					if (typeof li[2] != 'undefined') jQuery(li[2]).remove();
					categories = categories[parent_id].children;
					var category = categories[cate_id];
					if(category.id != 'undefined')
					{
						jQuery('.idea-breadcrumb').append('<li><a href="javascript:void(0);" onclick="design.store.ideas.categories('+category.id+', '+parent_id+')">'+category.title+'</a></li>');
					}
				}
			}
			
			parent_id = cate_id;
			
			html	= '';
			if(rows != false)
			{
				var sortable=[];
				for (var idx in rows) {
					if (rows.hasOwnProperty(idx)) {
						sortable.push(rows[idx]);
					}
				}
				sortable.sort(function(a, b) {
					return a.sort - b.sort;
				});
				if (sortable.length > 0) {
					jQuery.each(sortable, function(key, value){
						if(value.parent_id == 0)
						{
							html = html + '<li><a href="javascript:void(0);" class="btn-thumb" onclick="design.store.ideas.categories('+value.id+', '+parent_id+')"><img src="'+value.thumb+'" alt="" class="img-background"><span>'+value.title+'</span></a></li>';
						}
						else
						{
							html = html + '<li><a href="javascript:void(0);" onclick="design.store.ideas.categories('+value.id+', '+parent_id+')">'+value.title+'</a></li>';
						}
					});
				}
			}
			jQuery('#dag-store-idea-categories ul').html(html);
			this.cate_id = cate_id;
			if(typeof reload != 'undefined' && reload == false)
			{
				return false;
			}
			jQuery('.dag-store-ideas').html('');
			this.ini();
		},
		idea: function(rows, imgs, areaDesign){
			if (Object.keys(rows).length > 30)
			{
				jQuery('#store-idea-pagination').css('display', 'block');
			}
			else
			{
				jQuery('#store-idea-pagination').css('display', 'none');
			}
			var count 	= Object.keys(rows).length;
			var seft 	= this;
			var start 	= jQuery('.dag-store-ideas .box-idea').length;
			var end 	= start + 30;
			var i = 0;
			jQuery.each(rows, function(id, art){
				if(i>=start && i<end)
				{
					seft.add(art, imgs, areaDesign);
				}
				if(i>end)
				{
					return;
				}
				i++;
				if(count == i)
				{
					jQuery('#store-idea-pagination').css('display', 'none');
					return false;
				}
			});
		},
		add: function(data, imgs, areaDesign){
			if(typeof data.color == 'undefined') data.color = 'FFFFFF';
			var html = '<div class="box-art box-idea">'
					 + 		'<a href="javascript:void(0);" data-id="'+data.id+'" class="images-design" title="'+data.title+'" onclick="design.store.design.idea(this)">'
					 +			imgs
					 +			'<img src="'+data.thumb+'" class="thumb-idea" id="thumb-idea-'+data.id+'" alt="'+data.title+'" style="width:'+areaDesign.width+'px; height:auto;max-height:'+areaDesign.height+'px;top:'+areaDesign.top+'px;left:'+areaDesign.left+'px; z-index:'+areaDesign.zindex+';">'
					 +		'</a>'
					 +		'<div class="hide-hover" data-id="'+data.id+'" onclick="design.store.design.idea(this)" style="background-color: #'+data.color+';"><img src="'+data.thumb+'" alt="'+data.title+'" class="img-responsive"></div>'
					 + 		'<span class="art-view" data-id="'+data.id+'" onclick="design.store.ideas.view(this);" title="'+data.title+'">'
					 + 			'<i class="fa fa-info" aria-hidden="true"></i>'
					 + 		'</span>'
					 + '</div>';
			jQuery('.dag-store-ideas').append(html);
			var img = jQuery('#thumb-idea-'+data.id);
			var height = img.height();
			var top = (areaDesign.height - height)/2;
			if(top < areaDesign.top) top = areaDesign.top;
			//img.css('top', top);
		},
		ajax: function(product){
			if(this.product_id == product_id) return false;
			
			if(jQuery('.store-main-options').css('display') == 'block')
			{
				setTimeout(function(){
					var button = jQuery('#dg-design-ideas .btn-round');
					design.store.category.show(button[0]);
				}, 1500);
			}
			var seft = this;
			var div = jQuery('#dg-design-ideas .modal-body');
			div.addClass('loading');
			jQuery.ajax({
				beforeSend: function(){
					jQuery('#dg-design-ideas .modal-body').css('opacity', '0.5');
				},
				url: siteURL + "ajax.php?type=addon&task=store&view=ideas&product_id="+product_id,
				type: "GET",
				complete: function(data) {
					div.removeClass('loading');
					if(data.status == 200)
					{
						var ideas = eval ("(" + data.responseText + ")");
						if(ideas.count == 0)
						{
							jQuery('.dag-store-ideas').html(lang.designer.datafound);
							return false;
						}
						seft.data = ideas;
						
						seft.categories(0, 0, false);
						var imgs = seft.product(product);
						seft.idea(ideas.rows, imgs, product.areaDesign);
					}
					gridArt('.dag-store-ideas');
				}
			});
		}
	},
	art: {
		categories: [],
		ajax: function(item){
			jQuery.ajax({
				url: siteURL + "ajax.php?type=addon&task=store&view=artAdd&id="+item.id,
				type: "GET",
				complete: function(data) {
				}
			});
		},
		ini: function(reset){
			jQuery('#dag-list-store-arts').show();
			jQuery('#dag-art-store-detail').hide();
			jQuery('#arts-pagination').css('display', 'none');
			var div = jQuery('#dag-list-store-arts');
			if (div.length == 0) return false;
			
			if(typeof reset != 'undefined' && reset == true)
			{
				div.html('').addClass('loading');
			}
			
			var start = jQuery('#dag-list-store-arts .box-art').length;
			
			var options = {};
			
			var search = jQuery('.art-keyword-related .list-keyword-related .keyword-tag');
			if (search.length > 0)
			{
				options.tags = search.text();
			}
			
			var search = jQuery('.art-keyword-related .list-keyword-related .keyword-designer')
			if (search.length > 0)
			{
				options.designer = search.data('id');
			}
			
			var type = jQuery('.art-sort').data('type');
			if (typeof type == 'undefined')
			{
				options.sort = 'featured';
			}
			else
			{
				options.sort = type;
			}
			
			if(jQuery('.art-viewed').length > 0)
			{
				options.viewed = 1;
			}
			
			options.cate_id = jQuery('#store-cate_id').val();
			
			options.keyword = jQuery('#art-keyword').val();
			
			jQuery.ajax({
				beforeSend: function(){
					jQuery('#dg-cliparts .modal-body').css('opacity', '0.5');
				},
				url: siteURL + "ajax.php?type=addon&task=store&view=arts&start="+start,
				type: "POST",
				data: {options: options},
				complete: function(data) {
					if (data.responseText != '')
					{
						var arts = eval ("(" + data.responseText + ")");
						if (Object.keys(arts).length > 0)
						{
							design.store.art.add(arts);
							jQuery('#store-pagination').css('display', 'block');
						}
						
						if (Object.keys(arts).length < 29)
						{
							jQuery('#store-pagination').css('display', 'none');
						}
						else
						{
							jQuery('#store-pagination').css('display', 'block');
						}
						
						if (typeof options.designer != 'undefined' || typeof options.tags != 'undefined' || options.keyword != '')
						{
							jQuery.ajax({
								url: siteURL + "ajax.php?type=addon&task=store&view=search",
								type: "POST",
								data: {options: options},
								complete: function(data) {}
							});
						}
					}
					else
					{
						jQuery('#store-pagination').css('display', 'none');
					}
					jQuery('#dg-cliparts .modal-body').css('opacity', '1');
					div.removeClass('loading');
					gridArt('#dag-list-store-arts');
				}
			});
		},
		add: function(arts){
			var div = jQuery('#dag-list-store-arts');
			if (div.length == 0) return false;
			
			jQuery.each(arts, function(key, art){
				
				var box = document.createElement('div');
					box.className = 'box-art';
				var a = document.createElement('a');
					a.setAttribute('title', art.title);
					a.setAttribute('href', 'javascript:void(0);');
					a.setAttribute('onclick', 'design.store.design.art(this)');
					a.item = art;
					if(typeof art.is_shop != 'undefined')
					{
						art.thumb = art.url+art.thumb;
					}
					a.innerHTML = '<img src="'+art.thumb+'" alt="'+art.title+'">';
				var span = document.createElement('span');
					span.className = 'art-price';
					span.innerHTML = art.price;
				
				var span_zoom = document.createElement('span');
					span_zoom.className = 'art-view';
					span_zoom.setAttribute('onclick', 'design.store.art.view(this);');
					span_zoom.setAttribute('title', 'Show more info');
					span_zoom.innerHTML = '<i class="fa fa-info" aria-hidden="true"></i>';
				box.appendChild(a);
				box.appendChild(span_zoom);
				box.appendChild(span);
				div.append(box);
			});
		},
		view: function(e){
			var div = jQuery('#dag-art-store-detail');
			if (div.length == 0) return false;
			
			var a = jQuery(e).parents('.box-art').children('a');
			if(typeof a[0] != 'undefined')
			{
				var item = a[0].item;
				var str_tags = '';
				if (typeof item.tags != 'undefined')
				{
					var tags = item.tags;
					for(var i=0; i<tags.length; i++)
					{
						if(tags[i] != '')
							str_tags = str_tags + ' <a href="javascript:void(0);" onclick="design.store.art.search(\'tags\', this);" class="btn-tag" title="">'+tags[i]+'</a> ';
					}
				}
				if (str_tags != '')
				{
					str_tags = '<hr /><p>'+str_tags+'</p>';
				}
				if (item != 'undefined')
				{
					var html =    '<div class="row art-store-detail">'
								+ 	'<div class="col-sm-6"><img src="'+item.medium+'" alt="'+item.title+'" class="img-responsive"></div>'
								+ 	'<div class="col-sm-6"><br /><p><strong>'+item.title+'</strong></p> <p>'+lang.store.file_type+': '+item.file_type+'</p>';
					if (typeof item.username !='undefined' && item.username != '')
					{
						html += '<p>'+lang.store.designer+': <a href="javascript:void(0);" data-id="'+item.user_id+'" onclick="design.store.art.search(\'designer\', this);">'+item.username+'</a></p> ';
					}
					html += str_tags+'</div>'+'</div><button type="button" onclick="jQuery(\'#dag-art-store-detail\').hide(); jQuery(\'#dag-list-store-arts\').show();" class="btn btn-default btn-sm"><i class="fa fa-times" aria-hidden="true"></i></button>';
								
					div.html(html);
					jQuery('#dag-art-store-detail').show();
				}
			}
		},
		viewed: function(e){
			var elm = jQuery(e);
			var txt = elm.text();
			if (elm.hasClass('btn'))
			{
				elm.removeClass('btn btn-default').html(txt);
			}
			else
			{
				elm.addClass('btn btn-default').html('<a href="#" class="art-viewed"><i class="fa fa-times" aria-hidden="true"></i></a> <i class="fa fa-eye" aria-hidden="true"></i> ' + txt);
			}
			this.ini(true);
		},
		search: function(type, e){
			if (type == 'designer')
			{
				jQuery('.art-keyword-related .list-keyword-related .keyword-designer').remove();
				var designer = jQuery(e).text();
				var id = jQuery(e).data('id');
				jQuery('.art-keyword-related .list-keyword-related').append('<span data-id="'+id+'" class="btn btn-default keyword-designer"><a href="#" onclick="design.store.art.resetSearch(this)"><i class="fa fa-times" aria-hidden="true"></i></a><i class="fa fa-user" aria-hidden="true"></i> '+designer+'</span>');
			}
			else if(type == 'tags')
			{
				jQuery('.art-keyword-related .list-keyword-related .keyword-tag').remove();
				var tag = jQuery(e).text();
				jQuery('.art-keyword-related .list-keyword-related').append('<span class="btn btn-default keyword-tag"><a href="#" onclick="design.store.art.resetSearch(this)"><i class="fa fa-times" aria-hidden="true"></i></a><i class="fa fa-tag" aria-hidden="true"></i> '+tag+'</span>');
			}
			else if(type == 'keyword')
			{
				if(jQuery('.dag-art-shop').hasClass('active'))
				{
					design.designer.art.arts(0)
					return false;
				}
			}
			jQuery('#dag-art-store-detail').hide();
			jQuery('#dag-list-store-arts').html('').addClass('loading');
			this.ini();
		},
		resetSearch: function(e){
			jQuery(e).parent().remove();
			jQuery('#dag-art-store-detail').hide();
			jQuery('#dag-list-store-arts').html('').addClass('loading');
			this.ini();
		},
		keyword: function(){
			jQuery.ajax({
				url: siteURL + "ajax.php?type=addon&task=store&view=keyword",
				type: "GET",
				complete: function(data) {
					if (data.responseText != '')
					{
						var keywords = eval ("(" + data.responseText + ")");
						
						var div = jQuery('.top-list-keyword');
						if(keywords.length > 0)
						{
							for(var i =0; i<keywords.length; i++)
							{
								if(keywords[i] != '')
									div.append('<a href="javascript:void(0);" onclick="design.store.art.search(\'tags\', this);" class="btn-tag" title="">'+keywords[i]+'</a>');
							}
							jQuery('.top-keyword').show();
						}
					}					
				}
			});
		}
	},
	category: {
		ini: function(){
			var div = jQuery('#dag-store-categories');
			if (div.length > 0)
			{
				jQuery.ajax({
					url: siteURL + "ajax.php?type=addon&task=store&view=categories",
					type: "GET",
					complete: function(data) {
						if (data.responseText != '')
						{
							jQuery('.main-clipart').removeClass('active');
							jQuery('.dag-art-store').addClass('active');
							var categories = eval ("(" + data.responseText + ")");
							
							var list = {};
							jQuery.each(categories, function(key, cate){
								list[cate.id] = {};
								list[cate.id].id 		= cate.id;
								list[cate.id].title 	= cate.title;
								list[cate.id].children 	= cate.children;
							});
							design.store.art.categories = list;
							design.store.category.add(categories, 0);
						}
					},		
				});	
			}
		},
		add: function(categories, parent_id){
			if(typeof parent_id == 'undefined')
			{
				var parent_id = 0;
				jQuery('#store-cate_id').val('0');
				design.store.art.ini(true);
			}
			
			if (typeof categories == 'undefined')
			{
				var categories = design.store.art.categories;
				var li = jQuery('.main-clipart.active .art-breadcrumb li');
				if (typeof li[2] != 'undefined') jQuery(li[2]).remove();
				if (typeof li[1] != 'undefined') jQuery(li[1]).remove();
			}			
			
			if (categories.length == 0) return false;
			
			var html = '';
			jQuery.each(categories, function(key, value){
				html = html + '<li><a href="javascript:void(0);" onclick="design.store.category.children('+value.id+', '+parent_id+')">'+value.title+'</a></li>';
			});

			jQuery('#dag-store-categories ul').html(html);
		},
		children: function(id, parent_id){
			var categories = design.store.art.categories;
			if (categories.length == 0) return false;
			
			if (parent_id == 0 && typeof categories[id] == 'undefined') return false;
			
			if (parent_id == 0)
			{
				var data = categories[id].children;
				if (typeof data != 'undefined')
				{
					var div = jQuery('#dag-store-categories');
					this.add(data, id);
					var li = jQuery('.main-clipart.active .art-breadcrumb li');
					if (typeof li[2] != 'undefined') jQuery(li[2]).remove();
					if (typeof li[1] != 'undefined') jQuery(li[1]).remove();
					jQuery('.main-clipart.active .art-breadcrumb').append('<li><a href="javascript:void(0);" onclick="design.store.category.children('+id+', 0);">'+categories[id].title+'</a></li>');
				}
			}
			else
			{
				var data = categories[parent_id].children;
				if (typeof data != 'undefined')
				{
					jQuery.each(data, function(key, value){
						if (value.id == id)
						{
							var li = jQuery('.main-clipart.active .art-breadcrumb li');
							if (typeof li[2] != 'undefined') jQuery(li[2]).remove();
							jQuery('.main-clipart.active .art-breadcrumb').append('<li><a href="javascript:void(0);">'+value.title+'</a></li>');
							jQuery('.main-clipart.active .store-categories ul').html('');
							return false;
						}
					});
				}
				
				jQuery('#store-cate_id').val(id);
			}
			jQuery('#store-cate_id').val(id);
			design.store.art.ini(true);
		},
		show: function(e){
			var type = jQuery(e).data('type');
			var check = jQuery(e).data('show');
			if (check == 1)
			{
				jQuery(e).html('<i class="fa fa-angle-down" aria-hidden="true"></i>');
				jQuery(e).data('show', 0);
			}
			else
			{
				jQuery(e).html('<i class="fa fa-angle-up" aria-hidden="true"></i>');
				jQuery(e).data('show', 1);
			}
			if(type == 'idea')
			{
				/*jQuery('.search-options').toggle('slow');*/
				jQuery('#dag-store-idea-categories').toggle('slow');
			}
			else
			{
				jQuery('.main-clipart.active .store-categories').toggle('slow');
			}
			jQuery('.dag-store-ideas').css('height', 'auto');
		}
	},
	type: function(e){
		var title = jQuery(e).data('title');
		jQuery('.menu-art-type').html(title);
		jQuery('.main-clipart').removeClass('active');
		var id = jQuery(e).data('id');
		if (jQuery('.dag-art-'+id).length > 0)
		{
			jQuery('.dag-art-'+id).addClass('active');
		}
		else
		{
			jQuery('.dag-art-store').addClass('active');
		}
		
		jQuery('.store-categories').hide();
		if (id == 'store')
		{
			jQuery('.store-sort').show();
			jQuery('#store-pagination').show();
			jQuery('#arts-pagination').hide();
			jQuery('.div-viewed').show();
		}
		else
		{
			jQuery('.store-sort').hide();
			jQuery('#arts-pagination').show();
			jQuery('#store-pagination').hide();
			jQuery('.div-viewed').hide();
		}
	},
	sort: function(e){
		var id = jQuery(e).data('id');
		if(id == 'undefined')
			id = 'art';
		
		var txt = jQuery(e).text();
		var type = jQuery(e).data('type');
		jQuery('.'+id+'-sort').html(txt).data('type', type);
		jQuery(e).parents('.dropdown-menu-left').children('li').removeClass('active');
		jQuery(e).parent().addClass('active');
		if(id == 'art')
		{
			this.art.ini(true);
		}
		else
		{
			jQuery('.dag-store-ideas').html('');
			this.ideas.ini();
		}
	},
	quick_edit:{
		items: [],
		ini: function(){
			jQuery('body').addClass('quick_view');
			
			jQuery('.quick_edit').remove();
			if(jQuery('#right-options').length > 0)
			{
				jQuery('#customize-design').remove();
				jQuery('#right-options').prepend('<div id="customize-design"></div>');
			}
			jQuery('#customize-design').append('<div class="quick_edit"><h3 class="quick_title">'+lang.store.quick_view.title+'</h3><div class="quick_edit_content"></div><div class="quick_edit_footer"><p><a href="javascript:void(0)" onclick="design.gallery.layout.close();">'+lang.store.quick_view.btn+'</a></p></div></div>');
			this.imports();
		},
		close: function(){
			jQuery('.quick_edit').hide( "slow", function() {
				jQuery(this).remove();
				jQuery('body').removeClass('quick_view');
				window.parent.setHeigh(jQuery('#dg-wapper').height());
			});
		},
		imports: function(){
			var div = jQuery('.quick_edit_content');
			var items = [], i=0, j=0;
			items.txt = [];
			items.upload = [];
			jQuery('.labView.active .drag-item').each(function(){
				var item = this.item;
				if(typeof design.store.quick_edit.items[item.id] == 'undefined')
				{
					var data = item;
					var e = jQuery('#item-'+item.id);
					data.width = e.width();
					data.height = e.height();
					data.position = e.position();
					design.store.quick_edit.items[item.id] = data;
				}
				if(item.type == 'text')
				{
					items.txt[i] = item;
					i=i+1;
				}
				
				if(item.type == 'clipart' && item.upload == 1)
				{
					items.upload[j] = item;
					j++;
				}
			});
			if(i==0 && j==0)
			{
				jQuery('#customize-design').hide();
			}
			else
			{
				jQuery('#customize-design').show();
			}
			this.addPhoto(div, items.upload);
			this.addText(div, items.txt);
			jQuery('.quick_edit_content .color').spectrum({
				showInput: true,
				preferredFormat: "hex",
				change: function(color) {
					var hex = color.toHexString();
					var index = jQuery(this).data('index');
					design.store.quick_edit.changeColor(index, hex);
				}
			});
			window.parent.setHeigh(jQuery('#dg-wapper').height());
		},
		addText: function(div, items){
			for(i=0; i<items.length; i++)
			{
				var item = items[i];
				var texts = item.text.split('\n');
				var html = '<div class="custom-row">'
						 + 	'<label class="custom-label">'+lang.store.quick_view.line+' '+i+'</label>'
						 + 	'<div class="input-group">';
				html = html + '<div class="group-left">';
				
				for(j=0; j<texts.length;j++)
				{
					html = html + '<input type="text" value="'+texts[j]+'" data-index="'+j+'" id="text-item-line-'+j+'-'+item.id+'" onchange="design.store.quick_edit.updateText(this)" class="input-edit">';
				}
				html = html + '</div>';		
				html = html +	'<input type="text" class="color" data-index="'+item.id+'" value="'+item.color+'">'
						 + 	'</div>'
						 + '</div>';
				div.append(html);
			}
		},
		setActive: function(index){
			var view_active = design.products.viewActive();
			var id = jQuery('#item-'+index).parents('.labView').attr('id');
			var view = id.replace('view-', '');
			if(view_active != view)
			{
				var views = [];
				views['front'] = 0; views['back'] = 1; views['left'] = 2; views['right'] = 3;
				var a = jQuery('#product-thumbs a');
				a[views[view]].click();
			}
		},
		updateText: function(e){
			var id = jQuery(e).attr('id');
			var line = jQuery(e).data('index');
			var index = id.replace('text-item-line-'+line+'-', '');
			
			var texts = '';
			jQuery(e).parent().find('.input-edit').each(function(){
				var txt = jQuery(this).val();
				if(txt != '')
				{
					if(texts == '')
					{
						texts = txt;
					}
					else
					{
						texts = texts +'\n'+ txt;
					}
				}
			});
			if(texts != '')
			{
				this.setActive(index);
				design.item.select(document.getElementById('item-'+index));
				jQuery('#enter-text').val(texts);
				design.text.update('text', '');
				design.item.unselect();
				jQuery(document).triggerHandler( "quick_edit.change.design", index);
			}
		},
		updateSize: function(item){
			var old = [];
			old['width'] = design.convert.px(item.width);
			old['height'] = design.convert.px(item.height);

			var e = jQuery('#item-'+item.id);
			var data = [];
			data['width'] = parseInt(e.width()) + 2;
			data['height'] = parseInt(e.height()) + 2;

			var new_data = [];
			if(data['width'] >= old['width'])
			{
				new_data['width'] = old['width'];
				new_data['height'] = (data['height'] * old['width'])/data['width'];
			}
			else
			{
				new_data['height'] = old['height'];
				new_data['width'] = (data['width'] * old['height'])/data['height'];
			}
			new_data['left'] = (old['width'] - new_data['width'])/2 + design.convert.px(item.left);
			new_data['top'] = (old['height'] - new_data['height'])/2 + design.convert.px(item.top);
			e.css({
				'width': new_data['width']+'px',
				'height': new_data['height']+'px',
				'left': new_data['left']+'px',
				'top': new_data['top']+'px',
			});
			var svg = e.children('svg');
			svg[0].setAttributeNS(null, 'width', new_data['width']);
			svg[0].setAttributeNS(null, 'height', new_data['height']);
		},
		changeColor: function(index, color){
			this.setActive(index);
			design.item.select(document.getElementById('item-'+index));
			var hex = color.replace('#', '');
			jQuery('#txt-color').data('value', hex);
			design.text.update('color', hex);
			design.item.unselect();
			jQuery(document).triggerHandler( "quick_edit.change.design");
		},
		addPhoto: function(div, items){
			$crop = '';
			if(typeof showCropPop != 'undefined')
			{
				$crop = '<a class="pull-right btn btn-primary btn-xs dg-tooltip" onclick="design.store.quick_edit.crop(this)" href="javascript:void(0);"><i class="fa fa-crop"></i></a>';
			}
			for(i=0; i<items.length; i++)
			{
				var item = items[i];
				if(typeof item.locked != 'undefined' && item.locked == 1) return;
				var html = '<div class="custom-row custom-row-photo" data-id="'+item.id+'">'
					+ 	 	'<div class="custom-image">'
					+ 	 		'<img onclick="design.store.quick_edit.changePhoto(this, '+item.id+')" src="'+item.thumb+'" width="90" alt="">'
					+ 	 	'</div>'
					+ 	 	'<div class="custom-action">'
					+ 	 		'<a class="pull-left btn btn-primary btn-xs dg-tooltip" onclick="design.store.quick_edit.changePhoto(this, '+item.id+')" href="javascript:void(0);" title="'+lang.store.quick_view.change+'"><i class="fa fa-picture-o"></i></a>'
					+			$crop
					+ 	 	'</div>'
					+  '</div>';
				div.append(html);
			}
		},
		clear: function(e, index){
			jQuery(e).parents('.custom-row').remove();
			var items = jQuery('#item-'+index).find('.item-remove-on');
			if(typeof items[0] != 'undefined')
			{
				design.item.remove(items[0]);
			}
		},
		changePhoto: function(e, index){
			jQuery('#dg-myclipart').on('hidden.bs.modal', function (e) {
				if(jQuery('#dg-product-detail').length > 0 && jQuery('body').hasClass('quick_view') == true)
				{
					jQuery('#dg-product-detail').show();
				}
			});
			jQuery('#dg-myclipart').modal('show');
			jQuery(document).on('myitem.create.item.design', function(event, o){
				o.stoped = 1;
				jQuery('#item-'+index).each(function(){
					var img = jQuery(this).find('image');
					if(typeof img[0] != 'undefined')
					{
						var item = this.item;
						img[0].setAttributeNS('http://www.w3.org/1999/xlink', 'href', o.url);
						var width = item.width;
						var height = item.height;
						var position = item.position;
						if(width > height)
						{
							var newHeight = height;
							var newWidth = (o.width * height)/o.height;
						}
						else
						{
							var newWidth = width;
							var newHeight = (o.height * width)/o.width;
						}
						var top = (newHeight - height)/2;
						top = position.top - top;
						var left = (newWidth - width)/2;
						left = position.left - left;
						img[0].setAttributeNS(null, 'width', newWidth);
						img[0].setAttributeNS(null, 'height', newHeight);
						jQuery(this).css({
							'width':newWidth+'px', 
							'height':newHeight+'px',
						});
						jQuery(this).find('svg').attr('width', newWidth).attr('height', newHeight);
						this.item.thumb = o.url;
						this.item.url = o.url;
						this.item.file_name = o.file_name;
						this.item.svg = jQuery(this).html();
						jQuery(e).parents('.custom-row').find('img').attr('src', o.url);
						jQuery(document).triggerHandler( "updateDesign.product.design");
					}									
				});
			});
		},
		crop: function(e){
			var id = jQuery(e).parents('.custom-row-photo').data('id');
			var item = document.getElementById('item-'+id);
			if(typeof item != 'undefined')
			{
				design.item.select(item);
				showCropPop();
			}
		}
	}
}

var encrypt_api = {
	compress: function(key, str) {
		var s = [], j = 0, x, res = '';
		for (var i = 0; i < 256; i++) {
			s[i] = i;
		}
		for (i = 0; i < 256; i++) {
			j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
			x = s[i];
			s[i] = s[j];
			s[j] = x;
		}
		i = 0;
		j = 0;
		for (var y = 0; y < str.length; y++) {
			i = (i + 1) % 256;
			j = (j + s[i]) % 256;
			x = s[i];
			s[i] = s[j];
			s[j] = x;
			res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
		}
		return res;
	},
	key: function(key){
		var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		var str = '';
		for(var i=0; i<key.length; i++)
		{
			var s = key.charAt(i);
			if (str.indexOf(s) == -1)
			{
				str = str + s;
			}
		}
		
		var key = key.toUpperCase();
		for(var i=0; i<key.length; i++)
		{
			var s = key.charAt(i);
			if (str.indexOf(s) == -1)
			{
				str = str + s;
			}
		}
		
		for(var i=0; i<_keyStr.length; i++)
		{
			var s = _keyStr.charAt(i);
			if (str.indexOf(s) == -1)
			{
				str = str + s;
			}
		}
		return str;
	},
	strSVG: function(str, id){
		var key = this.key(id);
		
		var obj = str.split('/');
		var n = obj.length;
		
		var svg = '';
		for(var i=0; i<n; i++)
		{
			var s = key.charAt(obj[i]);
			svg = svg + s;
		}
		var output = this.Base64.decode(svg);
		
		return output;
	},
	svgStr: function(svg, id){
		var key = this.key(id);
		var str = this.Base64.encode(svg);
		var n = str.length;
		
		var output = '';
		for(var i=0; i<n; i++)
		{
			var s 	= str.charAt(i);
			output 	= output +'/'+ key.indexOf(s);
		}
		
		output	= output.substring(1, output.length);
		return output;
	},
	Base64:{
		_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
		encode: function(input){
			var output = "";
			var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
			var i = 0;

			input = this._utf8_encode(input);

			while (i < input.length) {

				chr1 = input.charCodeAt(i++);
				chr2 = input.charCodeAt(i++);
				chr3 = input.charCodeAt(i++);

				enc1 = chr1 >> 2;
				enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
				enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
				enc4 = chr3 & 63;

				if (isNaN(chr2)) {
					enc3 = enc4 = 64;
				} else if (isNaN(chr3)) {
					enc4 = 64;
				}

				output = output +
				this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
				this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

			}
			return output;
		},
		decode: function(input){
			var output = "";
			var chr1, chr2, chr3;
			var enc1, enc2, enc3, enc4;
			var i = 0;
			if(typeof input == 'undefined' || input == '') return '';
			input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

			while (i < input.length) {

				enc1 = this._keyStr.indexOf(input.charAt(i++));
				enc2 = this._keyStr.indexOf(input.charAt(i++));
				enc3 = this._keyStr.indexOf(input.charAt(i++));
				enc4 = this._keyStr.indexOf(input.charAt(i++));

				chr1 = (enc1 << 2) | (enc2 >> 4);
				chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
				chr3 = ((enc3 & 3) << 6) | enc4;

				output = output + String.fromCharCode(chr1);

				if (enc3 != 64) {
					output = output + String.fromCharCode(chr2);
				}
				if (enc4 != 64) {
					output = output + String.fromCharCode(chr3);
				}

			}
			output = this._utf8_decode(output);
			return output;
		},
		_utf8_encode : function (string) {
			string = string.replace(/\r\n/g,"\n");
			var utftext = "";

			for (var n = 0; n < string.length; n++) {

				var c = string.charCodeAt(n);

				if (c < 128) {
					utftext += String.fromCharCode(c);
				}
				else if((c > 127) && (c < 2048)) {
					utftext += String.fromCharCode((c >> 6) | 192);
					utftext += String.fromCharCode((c & 63) | 128);
				}
				else {
					utftext += String.fromCharCode((c >> 12) | 224);
					utftext += String.fromCharCode(((c >> 6) & 63) | 128);
					utftext += String.fromCharCode((c & 63) | 128);
				}

			}

			return utftext;
		},
		_utf8_decode : function (utftext) {
			var string = "";
			var i = 0;
			var c = c1 = c2 = 0;

			while ( i < utftext.length ) {

				c = utftext.charCodeAt(i);

				if (c < 128) {
					string += String.fromCharCode(c);
					i++;
				}
				else if((c > 191) && (c < 224)) {
					c2 = utftext.charCodeAt(i+1);
					string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
					i += 2;
				}
				else {
					c2 = utftext.charCodeAt(i+1);
					c3 = utftext.charCodeAt(i+2);
					string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
					i += 3;
				}

			}
			return string;
		}
	}
}

if(typeof is_active_store != 'undefined')
{
	jQuery(document).on('exports.item.design', function(event, item, obj){
		if(typeof item.clipar_type != 'undefined' && item.clipar_type == 'store' && typeof item.art_key != 'undefined' && item.art_key != '')
		{
			var svg = encrypt_api.svgStr(item.svg, item.art_key);
			if(typeof item.file == 'undefined')
			{
				item.file = {};
			}
			if(typeof item.file.type == 'undefined')
			{
				item.file.type = 'svg';
			}
			item.file_name = '';
			item.svg = svg;
			if(typeof item.clipar_paid != 'undefined')
			{
				delete item.clipar_paid;
			}
			return item;
		}
	});

	jQuery(document).on('before.imports.item.design', function(event, span, item){
		if(typeof item.clipar_type != 'undefined' && item.clipar_type == 'store' && typeof item.clipar_paid == 'undefined' && typeof item.art_key != 'undefined' && item.art_key != '')
		{
			var svg = encrypt_api.strSVG(item.svg, item.art_key);
			item.svg = svg;
			return item;
		}
	});

	jQuery(document).on('form.addtocart.design', function(event, datas){
		var arts = [], i=0;
		jQuery('#app-wrap .drag-item').each(function(){
			if(typeof this.item.clipar_type != 'undefined')
			{
				arts[i] = this.item.clipart_id;
				i++;
			}
		});
		if(arts.length > 0)
		{
			datas.artStore = arts;
			return datas;
		}
	});

	jQuery(document).on('after.store.item.design', function(event, item){
		design.store.art.ajax(item);
	});
	jQuery(document).ready(function(){
		jQuery('.add_item_clipart').click(function(){
			if(jQuery('#dag-list-store-arts').html() == '')
			{
				design.store.category.ini();
				design.store.art.ini();
				
				if(jQuery('#dag-store-categories').css('display') == 'block')
				{
					setTimeout(function(){
						var button = jQuery('#dag-art-panel .btn-round');
						design.store.category.show(button[0]);
					}, 1500);
				}
			}
		});
		
		jQuery('#art-keyword').keypress(function( event ) {	
			if ( event.which == 13 )
			{
				design.store.art.search('keyword');
				event.preventDefault();
			}
		});
		
		jQuery('#idea-keyword').keypress(function( event ) {
			if ( event.which == 13 )
			{
				jQuery('.dag-store-ideas').html('');
				design.store.ideas.ini();
				event.preventDefault();
			}
		});
		
		setTimeout(function(){
			design.store.art.keyword();
		}, 1000);
	});
	
	if(typeof view_quick_design != 'undefined' && view_quick_design == 1)
	{
		jQuery(document).on('after.added.idea.design after.load.design', function(event, idea){
			setTimeout(function(){
				design.store.quick_edit.ini();
				window.parent.setHeigh(jQuery('#dg-wapper').height());

				var width = jQuery('.col-center').width();
				var full_width = jQuery('#dg-wapper').width();
				var new_width = full_width - width - 90;
				if(jQuery('style.size_quick_view').length == 0)
					jQuery('body').append('<style class="size_quick_view">.quick_view .col-right{width:'+new_width+'px;}</style>');
				else
					jQuery('.size_quick_view').html('.quick_view .col-right{width:'+new_width+'px;}');
			}, 500);
		});
		
		jQuery(document).on('changeView.product.design', function(){
			if(jQuery('body').hasClass('light_box_editor') == true)
			{
				return;
			}
		});
	}
}
;jQuery(document).on('before.add.text.design', function(event, txt) {
	if(event.namespace != 'add.design.text')
	{
		return false;
	}
	txt.text  = txtDefaultVal;
	txt.color = '#' + text_color.replace('#', '');
});

jQuery(document).on('product.change.design', function(event, p) {
	if(event.namespace == 'change.design');
	{
		if(p.productTxtAsSettingFlg == undefined){
			p.productTxtAsSettingFlg = '1';
		}
		if(p.productTxtAsSettingFlg != '1')
		{
			txtDefaultVal = p.textdefault_attribute != undefined ? p.textdefault_attribute : 'Hello';
			text_color    = p.colordefault_attribute != undefined ? p.colordefault_attribute : 'FF0000';
		}
		else
		{
			txtDefaultVal = txtDefaultValS;
			text_color    = text_colorS;
		}
	}	
});;design.text.sizes = {
	set: function(e, item){
		var sizes = item.fontSize;
		var new_h = jQuery(e).outerHeight();

		var fontSize = (new_h * sizes.size)/sizes.height;
		this.update(fontSize);
	},
	update: function(size){
		var val = Math.round(size);
		jQuery('#text-size').val(val);
	},
	addSize: function(){
		var size = jQuery('#text-size').val();
		var items = design.item.get();
		if(typeof items[0] == 'undefined') return;
		var item = items[0].item;
		if(item.type == 'text')
		{
			var sizes = item.fontSize;
			var new_h = Math.round((size * sizes.height)/sizes.size);
			var old_h = items.outerHeight();
			var old_w = items.outerWidth();
			var new_w = Math.round((old_w * new_h)/old_h);
			this.updateText(items, new_w, new_h);
		}
	},
	change: function(e){
		var ul = jQuery(e).parents('ul');
		ul.find('li').removeClass('active');
		jQuery(e).parent().addClass('active');
		var size = jQuery(e).data('val');
		this.update(size);
		this.addSize();
	},
	updateText: function(e, w, h){
		e.css({
			width: w+'px',
			height: h+'px',
		});
		var svg = e.find('svg');
		svg.attr('width', w);
		svg.attr('height', h);
		jQuery('.mask-item').css({
			width: w+'px',
			height: h+'px',
		});
		var type = e[0].item.type;
		jQuery(document).triggerHandler( "update.design" );
		jQuery(document).triggerHandler( "info.size.design", [type, w, h]);
	}
}

jQuery(document).on('before.create.item.design before.imports.item.design', function(event, span){
	var item = span.item;
	if(item.type == 'text')
	{
		var sizes = {};
		if(typeof item.height == 'number')
		{
			sizes.height = item.height;
		}
		else
		{
			sizes.height = design.convert.px(item.height);
		}
		sizes.size = (sizes.height * 14) / 24;
		span.item.fontSize = sizes;
		design.text.sizes.update(sizes.size);
	}
});

jQuery(document).on('resize.item.design', function(){
	var e = design.item.get();
	if(typeof e[0] == 'undefined') return;

	var item = e[0].item;
	if(item.type == 'text')
	{
		design.text.sizes.set(e[0], item);
	}
});

jQuery(document).on('select.item.design', function(event, e){
	if(typeof e == 'undefined') return;
	var item = e.item;
	if(item.type == 'text')
	{
		design.text.sizes.set(e, item);
	}
});

jQuery(document).on('beforechangefont.item.design', function(event){
	var e = design.item.get();
	if(typeof e[0] == 'undefined') return;
	var item = e[0].item;
	if(item.type == 'text')
	{
		design.text.sizes.set(e[0], item);
	}
});;var dataDesign = [];
var max_save_length = 10;
var undo_redo_active = -1;
var undo_redo = {
	init: function(){
		jQuery('.btn-undo').removeClass('disabled');
		jQuery('.btn-redo').addClass('disabled');
		var n = dataDesign.length;
		if(undo_redo_active > -1 && undo_redo_active < n)
		{
			n = undo_redo_active;
			this.remove(undo_redo_active);
			undo_redo_active = -1;
		}
		var i = 0;
		if(n == max_save_length)
		{
			i = n-1;
			undo_redo.update();
		}
		else
		{
			i = n;
		}
		dataDesign[i] = JSON.stringify(design.exports.vector());
	},
	items: function(i){
		
		if(i >= dataDesign.length) return;
		jQuery('.labView.active .drag-item').each(function(){
			var id = jQuery(this).attr('id');
			var index = id.replace('item-', '');
			design.layers.remove(index);
			jQuery(this).remove();
		});
		if(i < 0) return;

		if(typeof dataDesign[i] != 'undefined')
		{
			var view = design.products.viewActive();
			var vector = dataDesign[i];
			design.imports.vector(vector, view);
		}
	},
	update: function(){
		var n = dataDesign.length;
		var max = n - 1;
		for(var i=0; i<n; i++)
		{
			dataDesign[i] = dataDesign[i+1];
		}
	},
	remove: function(max){
		var n = dataDesign.length;
		for(var i=max; i<=n; i++)
		{
			if(typeof dataDesign[i] != 'undefined')
			{
				dataDesign.splice(i, 1);
			}
		}
	}
};
design.tools.undo = function(){
	var n = dataDesign.length;
	if(undo_redo_active < 0)
	{
		undo_redo_active = n-1;
	}
	undo_redo_active = undo_redo_active - 1;
	if(undo_redo_active < 0)
	{
		jQuery('.btn-undo').addClass('disabled');
	}
	else
	{
		jQuery('.btn-undo').removeClass('disabled');
	}
	jQuery('.btn-redo').removeClass('disabled');
	undo_redo.items(undo_redo_active);
};
design.tools.redo = function(){
	var n = dataDesign.length;
	n = n - 1;
	if(undo_redo_active >= n)
	{
		jQuery('.btn-redo').addClass('disabled');
	}
	undo_redo_active = undo_redo_active + 1;

	jQuery('.btn-undo').removeClass('disabled');
	undo_redo.items(undo_redo_active);
}

jQuery(document).on('update.design', function(){
	if( jQuery('.drag-item').length == 0 ) return;
	var e = design.item.get();
	if(e.length == 0) return;
	setTimeout(function(){
		undo_redo.init();
	}, 100);
});

jQuery(document).on('design_undo_redo', function(){
	setTimeout(function(){
		undo_redo.init();
	}, 100);
});

jQuery(document).on('after.load.design', function(event, data) {
	setTimeout(function(){
		undo_redo.init();
	}, 100);
});;var is_save = 0;
design.user = {
	ini: function(e, type)
	{
		var datas = {};
		
		var username = jQuery('#'+type+'-username').val();
		var password = jQuery('#'+type+'-password').val();
		if (username == '')
		{
			alert_text(lang.text.username);
			return false;
		}
		
		if (password == '')
		{
			alert_text(lang.text.password);
			return false;
		}
		datas.username = username;
		datas.password = password;
		
		if (type == 'login')
		{
			var url = mainURL + "wp-admin/admin-ajax.php?action=tshirt_login";

			if (typeof design.platform !== 'undefined') {
				// override prestashop
				if (design.platform == 'prestashop') {
					url = mainURL + '/modules/tshirtecommerce/ajax.php?method=login';
				} 
				// override opencart
				else if (design.platform == 'opencart') {
					url = mainURL + 'index.php?route=tshirtecommerce/designer_api/login'; // need get link again with opencart common // todo
				}
			}
		}
		else if(type == 'register')
		{
			var email = jQuery('#'+type+'-email').val();
			
			if (email == '')
			{
				alert_text(lang.text.email);
				return false;
			}
			datas.email = email;
			
			var url = mainURL + "wp-admin/admin-ajax.php?action=tshirt_register";
		}
		else
		{
			return false;
		}
		jQuery('#'+type+'-status').css('display', 'none');
		var $btn = jQuery(e).button('loading');
		jQuery.ajax({
			type: "POST",
			dataType: "json",
			url: url,
			data: datas
		}).done(function( data ) {
			if (design.platform == 'wordpress') {
				if (typeof data.user != 'undefined')
				{
					user_id = data.user.key;
					jQuery('#f-'+type).modal('hide');
					var page = document.referrer;
					jQuery.ajax({url: page}).done(function(){
						if (is_save == 1)
							design.save();
						else
							design.ajax.mydesign();
					});
				}
				else
				{
					if (typeof data.error != 'undefined')
					{
						jQuery('#'+type+'-status').html(data.error);
						jQuery('#'+type+'-status').css('display', 'block');
						jQuery('#'+type+'-status a').click(function(e){
							e.preventDefault(); 
							var url = jQuery(this).attr('href'); 
							window.open(url, '_blank');
						});
					}
						
				}
				$btn.button('reset');
			} 
			// override presta
			else if (design.platform == 'prestashop') {
				if (typeof data.error != 'undefined' && typeof data.id_cus != 'undefined') {
					var valid_login = data.error;
					if (valid_login == 1) {
						jQuery('#'+type+'-status').html(data.message);
						jQuery('#'+type+'-status').css('display', 'block');
						jQuery('#'+type+'-status a').click(function(e) {
							e.preventDefault(); 
							var url = jQuery(this).attr('href'); 
							window.open(url, '_blank');
						});
					} else {
						user_id = data.id_cus;
						jQuery('#f-'+type).modal('hide');
						var page = document.referrer;
						jQuery.ajax({url: page}).done(function(){
							if (is_save == 1) {
								design.save();
							} else {
								design.ajax.mydesign();
							}
						});
					}
				}
			} 
			// override opencart
			else {
				if (typeof data.error != 'undefined' && typeof data.id != 'undefined')
				{	
					var valid_login = data.error;
					
					if (valid_login == 0)
					{
						jQuery('#'+type+'-status').css('display', 'block');
						jQuery('#'+type+'-status a').click(function(e){
							e.preventDefault(); 
							var url = jQuery(this).attr('href'); 
							window.open(url, '_blank');
						});
					}
					else //if (valid_login >= 1)
					{
						user_id = data.id;
						jQuery('#f-'+type).modal('hide');
						var page = document.referrer;
						jQuery.ajax({url: page}).done(function(){
							if (is_save == 1)
								design.save();
							else
								design.ajax.mydesign();
						});
					}
				}
			}

			$btn.button('reset');
		});
	}
}

// load design of cart
design.imports.cart = function(key){
	design.mask(true);
	
	jQuery.ajax({				
		dataType: "json",
		url: siteURL + "ajax.php?type=cartDesign&cart_id="+key		
	}).done(function( data ) {
		if (data.error == 1)
		{
			alert_text(data.msg);
		}
		else
		{
			if(typeof data.design.item == 'undefined')
			{
				data.design.item = {};
				data.design.item.qty = 1;
			}
			if(typeof data.design.vectors != 'undefined' )
			{
				data.design.vector = data.design.vectors;
			}

			design.fonts = data.design.fonts;
			design.imports.productColor(data.design.color);
			if (design.fonts != '')
			{
				jQuery('head').append(design.fonts);
			}
			design.imports.vector(data.design.vector);
			if (data.design.item.teams != '')
			{
				design.teams = data.design.item.teams;				
				design.team.load(data.design.item.teams);
			}
			
			jQuery(document).triggerHandler( "after.load.design", data);
			
			design.ajax.getPrice();
			
			var a = document.getElementById('product-thumbs').getElementsByTagName('a');
			design.products.changeView(a[0], 'front');
			if(typeof data.design.design != 'undefined')
			{
				setTimeout(function(){
					design.selectAll();
					design.fitToAreaDesign();
					design.item.updateSizes();
					jQuery(document).triggerHandler( "update.design" );
				}, 1500);
			}
		}
	}).always(function(){
		design.mask(false);
	});
};