/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).LazyLoad=n()}(this,(function(){"use strict";function t(){return(t=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}var n="undefined"!=typeof window,e=n&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=n&&"IntersectionObserver"in window,o=n&&"classList"in document.createElement("p"),r=n&&window.devicePixelRatio>1,a={elements_selector:".lazy",container:e||n?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},c=function(n){return t({},a,n)},s=function(t,n){var e,i="LazyLoad::Initialized",o=new t(n);try{e=new CustomEvent(i,{detail:{instance:o}})}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent(i,!1,!1,{instance:o})}window.dispatchEvent(e)},l="loading",u="loaded",d="applied",f="error",_="native",g="data-",v="ll-status",p=function(t,n){return t.getAttribute(g+n)},b=function(t){return p(t,v)},h=function(t,n){return function(t,n,e){var i="data-ll-status";null!==e?t.setAttribute(i,e):t.removeAttribute(i)}(t,0,n)},m=function(t){return h(t,null)},E=function(t){return null===b(t)},y=function(t){return b(t)===_},A=[l,u,d,f],I=function(t,n,e,i){t&&(void 0===i?void 0===e?t(n):t(n,e):t(n,e,i))},L=function(t,n){o?t.classList.add(n):t.className+=(t.className?" ":"")+n},w=function(t,n){o?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\s+)"+n+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},k=function(t){return t.llTempImage},O=function(t,n){if(n){var e=n._observer;e&&e.unobserve(t)}},x=function(t,n){t&&(t.loadingCount+=n)},z=function(t,n){t&&(t.toLoadCount=n)},C=function(t){for(var n,e=[],i=0;n=t.children[i];i+=1)"SOURCE"===n.tagName&&e.push(n);return e},N=function(t,n,e){e&&t.setAttribute(n,e)},M=function(t,n){t.removeAttribute(n)},R=function(t){return!!t.llOriginalAttrs},G=function(t){if(!R(t)){var n={};n.src=t.getAttribute("src"),n.srcset=t.getAttribute("srcset"),n.sizes=t.getAttribute("sizes"),t.llOriginalAttrs=n}},T=function(t){if(R(t)){var n=t.llOriginalAttrs;N(t,"src",n.src),N(t,"srcset",n.srcset),N(t,"sizes",n.sizes)}},j=function(t,n){N(t,"sizes",p(t,n.data_sizes)),N(t,"srcset",p(t,n.data_srcset)),N(t,"src",p(t,n.data_src))},D=function(t){M(t,"src"),M(t,"srcset"),M(t,"sizes")},F=function(t,n){var e=t.parentNode;e&&"PICTURE"===e.tagName&&C(e).forEach(n)},P={IMG:function(t,n){F(t,(function(t){G(t),j(t,n)})),G(t),j(t,n)},IFRAME:function(t,n){N(t,"src",p(t,n.data_src))},VIDEO:function(t,n){!function(t,e){C(t).forEach((function(t){N(t,"src",p(t,n.data_src))}))}(t),N(t,"poster",p(t,n.data_poster)),N(t,"src",p(t,n.data_src)),t.load()}},S=function(t,n){var e=P[t.tagName];e&&e(t,n)},V=function(t,n,e){x(e,1),L(t,n.class_loading),h(t,l),I(n.callback_loading,t,e)},U=["IMG","IFRAME","VIDEO"],$=function(t,n){!n||function(t){return t.loadingCount>0}(n)||function(t){return t.toLoadCount>0}(n)||I(t.callback_finish,n)},q=function(t,n,e){t.addEventListener(n,e),t.llEvLisnrs[n]=e},H=function(t,n,e){t.removeEventListener(n,e)},B=function(t){return!!t.llEvLisnrs},J=function(t){if(B(t)){var n=t.llEvLisnrs;for(var e in n){var i=n[e];H(t,e,i)}delete t.llEvLisnrs}},K=function(t,n,e){!function(t){delete t.llTempImage}(t),x(e,-1),function(t){t&&(t.toLoadCount-=1)}(e),w(t,n.class_loading),n.unobserve_completed&&O(t,e)},Q=function(t,n,e){var i=k(t)||t;B(i)||function(t,n,e){B(t)||(t.llEvLisnrs={});var i="VIDEO"===t.tagName?"loadeddata":"load";q(t,i,n),q(t,"error",e)}(i,(function(o){!function(t,n,e,i){var o=y(n);K(n,e,i),L(n,e.class_loaded),h(n,u),I(e.callback_loaded,n,i),o||$(e,i)}(0,t,n,e),J(i)}),(function(o){!function(t,n,e,i){var o=y(n);K(n,e,i),L(n,e.class_error),h(n,f),I(e.callback_error,n,i),o||$(e,i)}(0,t,n,e),J(i)}))},W=function(t,n,e){!function(t){t.llTempImage=document.createElement("IMG")}(t),Q(t,n,e),function(t,n,e){var i=p(t,n.data_bg),o=p(t,n.data_bg_hidpi),a=r&&o?o:i;a&&(t.style.backgroundImage='url("'.concat(a,'")'),k(t).setAttribute("src",a),V(t,n,e))}(t,n,e),function(t,n,e){var i=p(t,n.data_bg_multi),o=p(t,n.data_bg_multi_hidpi),a=r&&o?o:i;a&&(t.style.backgroundImage=a,function(t,n,e){L(t,n.class_applied),h(t,d),n.unobserve_completed&&O(t,n),I(n.callback_applied,t,e)}(t,n,e))}(t,n,e)},X=function(t,n,e){!function(t){return U.indexOf(t.tagName)>-1}(t)?W(t,n,e):function(t,n,e){Q(t,n,e),S(t,n),V(t,n,e)}(t,n,e)},Y=["IMG","IFRAME"],Z=function(t){return t.use_native&&"loading"in HTMLImageElement.prototype},tt=function(t,n,e){t.forEach((function(t){return function(t){return t.isIntersecting||t.intersectionRatio>0}(t)?function(t,n,e,i){h(t,"entered"),L(t,e.class_entered),w(t,e.class_exited),function(t,n,e){n.unobserve_entered&&O(t,e)}(t,e,i),I(e.callback_enter,t,n,i),function(t){return A.indexOf(b(t))>=0}(t)||X(t,e,i)}(t.target,t,n,e):function(t,n,e,i){E(t)||(L(t,e.class_exited),function(t,n,e,i){e.cancel_on_exit&&function(t){return b(t)===l}(t)&&"IMG"===t.tagName&&(J(t),function(t){F(t,(function(t){D(t)})),D(t)}(t),function(t){F(t,(function(t){T(t)})),T(t)}(t),w(t,e.class_loading),x(i,-1),m(t),I(e.callback_cancel,t,n,i))}(t,n,e,i),I(e.callback_exit,t,n,i))}(t.target,t,n,e)}))},nt=function(t){return Array.prototype.slice.call(t)},et=function(t){return t.container.querySelectorAll(t.elements_selector)},it=function(t){return function(t){return b(t)===f}(t)},ot=function(t,n){return function(t){return nt(t).filter(E)}(t||et(n))},rt=function(t,e){var o=c(t);this._settings=o,this.loadingCount=0,function(t,n){i&&!Z(t)&&(n._observer=new IntersectionObserver((function(e){tt(e,t,n)}),function(t){return{root:t.container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}}(t)))}(o,this),function(t,e){n&&window.addEventListener("online",(function(){!function(t,n){var e;(e=et(t),nt(e).filter(it)).forEach((function(n){w(n,t.class_error),m(n)})),n.update()}(t,e)}))}(o,this),this.update(e)};return rt.prototype={update:function(t){var n,o,r=this._settings,a=ot(t,r);z(this,a.length),!e&&i?Z(r)?function(t,n,e){t.forEach((function(t){-1!==Y.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),function(t,n,e){Q(t,n,e),S(t,n),h(t,_)}(t,n,e))})),z(e,0)}(a,r,this):(o=a,function(t){t.disconnect()}(n=this._observer),function(t,n){n.forEach((function(n){t.observe(n)}))}(n,o)):this.loadAll(a)},destroy:function(){this._observer&&this._observer.disconnect(),et(this._settings).forEach((function(t){delete t.llOriginalAttrs})),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(t){var n=this,e=this._settings;ot(t,e).forEach((function(t){O(t,n),X(t,e,n)}))}},rt.load=function(t,n){var e=c(n);X(t,e)},rt.resetStatus=function(t){m(t)},n&&function(t,n){if(n)if(n.length)for(var e,i=0;e=n[i];i+=1)s(t,e);else s(t,n)}(rt,window.lazyLoadOptions),rt}));

// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
(function (window, document, $, undefined) {
  "use strict";

  window.console = window.console || {
    info: function (stuff) {}
  };

  // If there's no jQuery, fancyBox can't work
  // =========================================

  if (!$) {
    return;
  }

  // Check if fancyBox is already initialized
  // ========================================

  if ($.fn.fancybox) {
    console.info("fancyBox already initialized");

    return;
  }

  // Private default settings
  // ========================

  var defaults = {
    // Close existing modals
    // Set this to false if you do not need to stack multiple instances
    closeExisting: false,

    // Enable infinite gallery navigation
    loop: false,

    // Horizontal space between slides
    gutter: 50,

    // Enable keyboard navigation
    keyboard: true,

    // Should allow caption to overlap the content
    preventCaptionOverlap: true,

    // Should display navigation arrows at the screen edges
    arrows: true,

    // Should display counter at the top left corner
    infobar: true,

    // Should display close button (using `btnTpl.smallBtn` template) over the content
    // Can be true, false, "auto"
    // If "auto" - will be automatically enabled for "html", "inline" or "ajax" items
    smallBtn: "auto",

    // Should display toolbar (buttons at the top)
    // Can be true, false, "auto"
    // If "auto" - will be automatically hidden if "smallBtn" is enabled
    toolbar: "auto",

    // What buttons should appear in the top right corner.
    // Buttons will be created using templates from `btnTpl` option
    // and they will be placed into toolbar (class="fancybox-toolbar"` element)
    buttons: [
      "zoom",
      //"share",
      "slideShow",
      //"fullScreen",
      //"download",
      "thumbs",
      "close"
    ],

    // Detect "idle" time in seconds
    idleTime: 3,

    // Disable right-click and use simple image protection for images
    protect: false,

    // Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
    modal: false,

    image: {
      // Wait for images to load before displaying
      //   true  - wait for image to load and then display;
      //   false - display thumbnail and load the full-sized image over top,
      //           requires predefined image dimensions (`data-width` and `data-height` attributes)
      preload: false
    },

    ajax: {
      // Object containing settings for ajax request
      settings: {
        // This helps to indicate that request comes from the modal
        // Feel free to change naming
        data: {
          fancybox: true
        }
      }
    },

    iframe: {
      // Iframe template
      tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',

      // Preload iframe before displaying it
      // This allows to calculate iframe content width and height
      // (note: Due to "Same Origin Policy", you can't get cross domain data).
      preload: true,

      // Custom CSS styling for iframe wrapping element
      // You can use this to set custom iframe dimensions
      css: {},

      // Iframe tag attributes
      attr: {
        scrolling: "auto"
      }
    },

    // For HTML5 video only
    video: {
      tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}">' +
        '<source src="{{src}}" type="{{format}}" />' +
        'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' +
        "</video>",
      format: "", // custom video format
      autoStart: true
    },

    // Default content type if cannot be detected automatically
    defaultType: "image",

    // Open/close animation type
    // Possible values:
    //   false            - disable
    //   "zoom"           - zoom images from/to thumbnail
    //   "fade"
    //   "zoom-in-out"
    //
    animationEffect: "zoom",

    // Duration in ms for open/close animation
    animationDuration: 366,

    // Should image change opacity while zooming
    // If opacity is "auto", then opacity will be changed if image and thumbnail have different aspect ratios
    zoomOpacity: "auto",

    // Transition effect between slides
    //
    // Possible values:
    //   false            - disable
    //   "fade'
    //   "slide'
    //   "circular'
    //   "tube'
    //   "zoom-in-out'
    //   "rotate'
    //
    transitionEffect: "fade",

    // Duration in ms for transition animation
    transitionDuration: 366,

    // Custom CSS class for slide element
    slideClass: "",

    // Custom CSS class for layout
    baseClass: "",

    // Base template for layout
    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' +
      '<div class="fancybox-bg"></div>' +
      '<div class="fancybox-inner">' +
      '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
      '<div class="fancybox-toolbar">{{buttons}}</div>' +
      '<div class="fancybox-navigation">{{arrows}}</div>' +
      '<div class="fancybox-stage"></div>' +
      '<div class="fancybox-caption"><div class="fancybox-caption__body"></div></div>' +
      "</div>" +
      "</div>",

    // Loading indicator template
    spinnerTpl: '<div class="fancybox-loading"></div>',

    // Error message template
    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',

    btnTpl: {
      download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg>' +
        "</a>",

      zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg>' +
        "</button>",

      close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
        "</button>",

      // Arrows
      arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
        '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div>' +
        "</button>",

      arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
        '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div>' +
        "</button>",

      // This small close button will be appended to your html/inline/ajax content by default,
      // if "smallBtn" option is not set to false
      smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg>' +
        "</button>"
    },

    // Container is injected into this element
    parentEl: "body",

    // Hide browser vertical scrollbars; use at your own risk
    hideScrollbar: true,

    // Focus handling
    // ==============

    // Try to focus on the first focusable element after opening
    autoFocus: true,

    // Put focus back to active element after closing
    backFocus: true,

    // Do not let user to focus on element outside modal content
    trapFocus: true,

    // Module specific options
    // =======================

    fullScreen: {
      autoStart: false
    },

    // Set `touch: false` to disable panning/swiping
    touch: {
      vertical: true, // Allow to drag content vertically
      momentum: true // Continue movement after releasing mouse/touch when panning
    },

    // Hash value when initializing manually,
    // set `false` to disable hash change
    hash: null,

    // Customize or add new media types
    // Example:
    /*
      media : {
        youtube : {
          params : {
            autoplay : 0
          }
        }
      }
    */
    media: {},

    slideShow: {
      autoStart: false,
      speed: 3000
    },

    thumbs: {
      autoStart: false, // Display thumbnails on opening
      hideOnClose: true, // Hide thumbnail grid when closing animation starts
      parentEl: ".fancybox-container", // Container is injected into this element
      axis: "y" // Vertical (y) or horizontal (x) scrolling
    },

    // Use mousewheel to navigate gallery
    // If 'auto' - enabled for images only
    wheel: "auto",

    // Callbacks
    //==========

    // See Documentation/API/Events for more information
    // Example:
    /*
      afterShow: function( instance, current ) {
        console.info( 'Clicked element:' );
        console.info( current.opts.$orig );
      }
    */

    onInit: $.noop, // When instance has been initialized

    beforeLoad: $.noop, // Before the content of a slide is being loaded
    afterLoad: $.noop, // When the content of a slide is done loading

    beforeShow: $.noop, // Before open animation starts
    afterShow: $.noop, // When content is done loading and animating

    beforeClose: $.noop, // Before the instance attempts to close. Return false to cancel the close.
    afterClose: $.noop, // After instance has been closed

    onActivate: $.noop, // When instance is brought to front
    onDeactivate: $.noop, // When other instance has been activated

    // Interaction
    // ===========

    // Use options below to customize taken action when user clicks or double clicks on the fancyBox area,
    // each option can be string or method that returns value.
    //
    // Possible values:
    //   "close"           - close instance
    //   "next"            - move to next gallery item
    //   "nextOrClose"     - move to next gallery item or close if gallery has only one item
    //   "toggleControls"  - show/hide controls
    //   "zoom"            - zoom image (if loaded)
    //   false             - do nothing

    // Clicked on the content
    clickContent: function (current, event) {
      return current.type === "image" ? "zoom" : false;
    },

    // Clicked on the slide
    clickSlide: "close",

    // Clicked on the background (backdrop) element;
    // if you have not changed the layout, then most likely you need to use `clickSlide` option
    clickOutside: "close",

    // Same as previous two, but for double click
    dblclickContent: false,
    dblclickSlide: false,
    dblclickOutside: false,

    // Custom options when mobile device is detected
    // =============================================

    mobile: {
      preventCaptionOverlap: false,
      idleTime: false,
      clickContent: function (current, event) {
        return current.type === "image" ? "toggleControls" : false;
      },
      clickSlide: function (current, event) {
        return current.type === "image" ? "toggleControls" : "close";
      },
      dblclickContent: function (current, event) {
        return current.type === "image" ? "zoom" : false;
      },
      dblclickSlide: function (current, event) {
        return current.type === "image" ? "zoom" : false;
      }
    },

    // Internationalization
    // ====================

    lang: "en",
    i18n: {
      en: {
        CLOSE: "Close",
        NEXT: "Next",
        PREV: "Previous",
        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
        PLAY_START: "Start slideshow",
        PLAY_STOP: "Pause slideshow",
        FULL_SCREEN: "Full screen",
        THUMBS: "Thumbnails",
        DOWNLOAD: "Download",
        SHARE: "Share",
        ZOOM: "Zoom"
      },
      de: {
        CLOSE: "Schlie&szlig;en",
        NEXT: "Weiter",
        PREV: "Zur&uuml;ck",
        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
        PLAY_START: "Diaschau starten",
        PLAY_STOP: "Diaschau beenden",
        FULL_SCREEN: "Vollbild",
        THUMBS: "Vorschaubilder",
        DOWNLOAD: "Herunterladen",
        SHARE: "Teilen",
        ZOOM: "Vergr&ouml;&szlig;ern"
      }
    }
  };

  // Few useful variables and methods
  // ================================

  var $W = $(window);
  var $D = $(document);

  var called = 0;

  // Check if an object is a jQuery object and not a native JavaScript object
  // ========================================================================
  var isQuery = function (obj) {
    return obj && obj.hasOwnProperty && obj instanceof $;
  };

  // Handle multiple browsers for "requestAnimationFrame" and "cancelAnimationFrame"
  // ===============================================================================
  var requestAFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      // if all else fails, use setTimeout
      function (callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  var cancelAFrame = (function () {
    return (
      window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      window.oCancelAnimationFrame ||
      function (id) {
        window.clearTimeout(id);
      }
    );
  })();

  // Detect the supported transition-end event property name
  // =======================================================
  var transitionEnd = (function () {
    var el = document.createElement("fakeelement"),
      t;

    var transitions = {
      transition: "transitionend",
      OTransition: "oTransitionEnd",
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd"
    };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }

    return "transitionend";
  })();

  // Force redraw on an element.
  // This helps in cases where the browser doesn't redraw an updated element properly
  // ================================================================================
  var forceRedraw = function ($el) {
    return $el && $el.length && $el[0].offsetHeight;
  };

  // Exclude array (`buttons`) options from deep merging
  // ===================================================
  var mergeOpts = function (opts1, opts2) {
    var rez = $.extend(true, {}, opts1, opts2);

    $.each(opts2, function (key, value) {
      if ($.isArray(value)) {
        rez[key] = value;
      }
    });

    return rez;
  };

  // How much of an element is visible in viewport
  // =============================================

  var inViewport = function (elem) {
    var elemCenter, rez;

    if (!elem || elem.ownerDocument !== document) {
      return false;
    }

    $(".fancybox-container").css("pointer-events", "none");

    elemCenter = {
      x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
      y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
    };

    rez = document.elementFromPoint(elemCenter.x, elemCenter.y) === elem;

    $(".fancybox-container").css("pointer-events", "");

    return rez;
  };

  // Class definition
  // ================

  var FancyBox = function (content, opts, index) {
    var self = this;

    self.opts = mergeOpts({
      index: index
    }, $.fancybox.defaults);

    if ($.isPlainObject(opts)) {
      self.opts = mergeOpts(self.opts, opts);
    }

    if ($.fancybox.isMobile) {
      self.opts = mergeOpts(self.opts, self.opts.mobile);
    }

    self.id = self.opts.id || ++called;

    self.currIndex = parseInt(self.opts.index, 10) || 0;
    self.prevIndex = null;

    self.prevPos = null;
    self.currPos = 0;

    self.firstRun = true;

    // All group items
    self.group = [];

    // Existing slides (for current, next and previous gallery items)
    self.slides = {};

    // Create group elements
    self.addContent(content);

    if (!self.group.length) {
      return;
    }

    self.init();
  };

  $.extend(FancyBox.prototype, {
    // Create DOM structure
    // ====================

    init: function () {
      var self = this,
        firstItem = self.group[self.currIndex],
        firstItemOpts = firstItem.opts,
        $container,
        buttonStr;

      if (firstItemOpts.closeExisting) {
        $.fancybox.close(true);
      }

      // Hide scrollbars
      // ===============

      $("body").addClass("fancybox-active");

      if (
        !$.fancybox.getInstance() &&
        firstItemOpts.hideScrollbar !== false &&
        !$.fancybox.isMobile &&
        document.body.scrollHeight > window.innerHeight
      ) {
        $("head").append(
          '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
          (window.innerWidth - document.documentElement.clientWidth) +
          "px;}</style>"
        );

        $("body").addClass("compensate-for-scrollbar");
      }

      // Build html markup and set references
      // ====================================

      // Build html code for buttons and insert into main template
      buttonStr = "";

      $.each(firstItemOpts.buttons, function (index, value) {
        buttonStr += firstItemOpts.btnTpl[value] || "";
      });

      // Create markup from base template, it will be initially hidden to
      // avoid unnecessary work like painting while initializing is not complete
      $container = $(
          self.translate(
            self,
            firstItemOpts.baseTpl
            .replace("{{buttons}}", buttonStr)
            .replace("{{arrows}}", firstItemOpts.btnTpl.arrowLeft + firstItemOpts.btnTpl.arrowRight)
          )
        )
        .attr("id", "fancybox-container-" + self.id)
        .addClass(firstItemOpts.baseClass)
        .data("FancyBox", self)
        .appendTo(firstItemOpts.parentEl);

      // Create object holding references to jQuery wrapped nodes
      self.$refs = {
        container: $container
      };

      ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (item) {
        self.$refs[item] = $container.find(".fancybox-" + item);
      });

      self.trigger("onInit");

      // Enable events, deactive previous instances
      self.activate();

      // Build slides, load and reveal content
      self.jumpTo(self.currIndex);
    },

    // Simple i18n support - replaces object keys found in template
    // with corresponding values
    // ============================================================

    translate: function (obj, str) {
      var arr = obj.opts.i18n[obj.opts.lang] || obj.opts.i18n.en;

      return str.replace(/\{\{(\w+)\}\}/g, function (match, n) {
        return arr[n] === undefined ? match : arr[n];
      });
    },

    // Populate current group with fresh content
    // Check if each object has valid type and content
    // ===============================================

    addContent: function (content) {
      var self = this,
        items = $.makeArray(content),
        thumbs;

      $.each(items, function (i, item) {
        var obj = {},
          opts = {},
          $item,
          type,
          found,
          src,
          srcParts;

        // Step 1 - Make sure we have an object
        // ====================================

        if ($.isPlainObject(item)) {
          // We probably have manual usage here, something like
          // $.fancybox.open( [ { src : "image.jpg", type : "image" } ] )

          obj = item;
          opts = item.opts || item;
        } else if ($.type(item) === "object" && $(item).length) {
          // Here we probably have jQuery collection returned by some selector
          $item = $(item);

          // Support attributes like `data-options='{"touch" : false}'` and `data-touch='false'`
          opts = $item.data() || {};
          opts = $.extend(true, {}, opts, opts.options);

          // Here we store clicked element
          opts.$orig = $item;

          obj.src = self.opts.src || opts.src || $item.attr("href");

          // Assume that simple syntax is used, for example:
          //   `$.fancybox.open( $("#test"), {} );`
          if (!obj.type && !obj.src) {
            obj.type = "inline";
            obj.src = item;
          }
        } else {
          // Assume we have a simple html code, for example:
          //   $.fancybox.open( '<div><h1>Hi!</h1></div>' );
          obj = {
            type: "html",
            src: item + ""
          };
        }

        // Each gallery object has full collection of options
        obj.opts = $.extend(true, {}, self.opts, opts);

        // Do not merge buttons array
        if ($.isArray(opts.buttons)) {
          obj.opts.buttons = opts.buttons;
        }

        if ($.fancybox.isMobile && obj.opts.mobile) {
          obj.opts = mergeOpts(obj.opts, obj.opts.mobile);
        }

        // Step 2 - Make sure we have content type, if not - try to guess
        // ==============================================================

        type = obj.type || obj.opts.type;
        src = obj.src || "";

        if (!type && src) {
          if ((found = src.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))) {
            type = "video";

            if (!obj.opts.video.format) {
              obj.opts.video.format = "video/" + (found[1] === "ogv" ? "ogg" : found[1]);
            }
          } else if (src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)) {
            type = "image";
          } else if (src.match(/\.(pdf)((\?|#).*)?$/i)) {
            type = "iframe";
            obj = $.extend(true, obj, {
              contentType: "pdf",
              opts: {
                iframe: {
                  preload: false
                }
              }
            });
          } else if (src.charAt(0) === "#") {
            type = "inline";
          }
        }

        if (type) {
          obj.type = type;
        } else {
          self.trigger("objectNeedsType", obj);
        }

        if (!obj.contentType) {
          obj.contentType = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1 ? "html" : obj.type;
        }

        // Step 3 - Some adjustments
        // =========================

        obj.index = self.group.length;

        if (obj.opts.smallBtn == "auto") {
          obj.opts.smallBtn = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1;
        }

        if (obj.opts.toolbar === "auto") {
          obj.opts.toolbar = !obj.opts.smallBtn;
        }

        // Find thumbnail image, check if exists and if is in the viewport
        obj.$thumb = obj.opts.$thumb || null;

        if (obj.opts.$trigger && obj.index === self.opts.index) {
          obj.$thumb = obj.opts.$trigger.find("img:first");

          if (obj.$thumb.length) {
            obj.opts.$orig = obj.opts.$trigger;
          }
        }

        if (!(obj.$thumb && obj.$thumb.length) && obj.opts.$orig) {
          obj.$thumb = obj.opts.$orig.find("img:first");
        }

        if (obj.$thumb && !obj.$thumb.length) {
          obj.$thumb = null;
        }

        obj.thumb = obj.opts.thumb || (obj.$thumb ? obj.$thumb[0].src : null);

        // "caption" is a "special" option, it can be used to customize caption per gallery item
        if ($.type(obj.opts.caption) === "function") {
          obj.opts.caption = obj.opts.caption.apply(item, [self, obj]);
        }

        if ($.type(self.opts.caption) === "function") {
          obj.opts.caption = self.opts.caption.apply(item, [self, obj]);
        }

        // Make sure we have caption as a string or jQuery object
        if (!(obj.opts.caption instanceof $)) {
          obj.opts.caption = obj.opts.caption === undefined ? "" : obj.opts.caption + "";
        }

        // Check if url contains "filter" used to filter the content
        // Example: "ajax.html #something"
        if (obj.type === "ajax") {
          srcParts = src.split(/\s+/, 2);

          if (srcParts.length > 1) {
            obj.src = srcParts.shift();

            obj.opts.filter = srcParts.shift();
          }
        }

        // Hide all buttons and disable interactivity for modal items
        if (obj.opts.modal) {
          obj.opts = $.extend(true, obj.opts, {
            trapFocus: true,
            // Remove buttons
            infobar: 0,
            toolbar: 0,

            smallBtn: 0,

            // Disable keyboard navigation
            keyboard: 0,

            // Disable some modules
            slideShow: 0,
            fullScreen: 0,
            thumbs: 0,
            touch: 0,

            // Disable click event handlers
            clickContent: false,
            clickSlide: false,
            clickOutside: false,
            dblclickContent: false,
            dblclickSlide: false,
            dblclickOutside: false
          });
        }

        // Step 4 - Add processed object to group
        // ======================================

        self.group.push(obj);
      });

      // Update controls if gallery is already opened
      if (Object.keys(self.slides).length) {
        self.updateControls();

        // Update thumbnails, if needed
        thumbs = self.Thumbs;

        if (thumbs && thumbs.isActive) {
          thumbs.create();

          thumbs.focus();
        }
      }
    },

    // Attach an event handler functions for:
    //   - navigation buttons
    //   - browser scrolling, resizing;
    //   - focusing
    //   - keyboard
    //   - detecting inactivity
    // ======================================

    addEvents: function () {
      var self = this;

      self.removeEvents();

      // Make navigation elements clickable
      // ==================================

      self.$refs.container
        .on("click.fb-close", "[data-fancybox-close]", function (e) {
          e.stopPropagation();
          e.preventDefault();

          self.close(e);
        })
        .on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (e) {
          e.stopPropagation();
          e.preventDefault();

          self.previous();
        })
        .on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (e) {
          e.stopPropagation();
          e.preventDefault();

          self.next();
        })
        .on("click.fb", "[data-fancybox-zoom]", function (e) {
          // Click handler for zoom button
          self[self.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
        });

      // Handle page scrolling and browser resizing
      // ==========================================

      $W.on("orientationchange.fb resize.fb", function (e) {
        if (e && e.originalEvent && e.originalEvent.type === "resize") {
          if (self.requestId) {
            cancelAFrame(self.requestId);
          }

          self.requestId = requestAFrame(function () {
            self.update(e);
          });
        } else {
          if (self.current && self.current.type === "iframe") {
            self.$refs.stage.hide();
          }

          setTimeout(
            function () {
              self.$refs.stage.show();

              self.update(e);
            },
            $.fancybox.isMobile ? 600 : 250
          );
        }
      });

      $D.on("keydown.fb", function (e) {
        var instance = $.fancybox ? $.fancybox.getInstance() : null,
          current = instance.current,
          keycode = e.keyCode || e.which;

        // Trap keyboard focus inside of the modal
        // =======================================

        if (keycode == 9) {
          if (current.opts.trapFocus) {
            self.focus(e);
          }

          return;
        }

        // Enable keyboard navigation
        // ==========================

        if (!current.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || $(e.target).is("input,textarea,video,audio,select")) {
          return;
        }

        // Backspace and Esc keys
        if (keycode === 8 || keycode === 27) {
          e.preventDefault();

          self.close(e);

          return;
        }

        // Left arrow and Up arrow
        if (keycode === 37 || keycode === 38) {
          e.preventDefault();

          self.previous();

          return;
        }

        // Righ arrow and Down arrow
        if (keycode === 39 || keycode === 40) {
          e.preventDefault();

          self.next();

          return;
        }

        self.trigger("afterKeydown", e, keycode);
      });

      // Hide controls after some inactivity period
      if (self.group[self.currIndex].opts.idleTime) {
        self.idleSecondsCounter = 0;

        $D.on(
          "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
          function (e) {
            self.idleSecondsCounter = 0;

            if (self.isIdle) {
              self.showControls();
            }

            self.isIdle = false;
          }
        );

        self.idleInterval = window.setInterval(function () {
          self.idleSecondsCounter++;

          if (self.idleSecondsCounter >= self.group[self.currIndex].opts.idleTime && !self.isDragging) {
            self.isIdle = true;
            self.idleSecondsCounter = 0;

            self.hideControls();
          }
        }, 1000);
      }
    },

    // Remove events added by the core
    // ===============================

    removeEvents: function () {
      var self = this;

      $W.off("orientationchange.fb resize.fb");
      $D.off("keydown.fb .fb-idle");

      this.$refs.container.off(".fb-close .fb-prev .fb-next");

      if (self.idleInterval) {
        window.clearInterval(self.idleInterval);

        self.idleInterval = null;
      }
    },

    // Change to previous gallery item
    // ===============================

    previous: function (duration) {
      return this.jumpTo(this.currPos - 1, duration);
    },

    // Change to next gallery item
    // ===========================

    next: function (duration) {
      return this.jumpTo(this.currPos + 1, duration);
    },

    // Switch to selected gallery item
    // ===============================

    jumpTo: function (pos, duration) {
      var self = this,
        groupLen = self.group.length,
        firstRun,
        isMoved,
        loop,
        current,
        previous,
        slidePos,
        stagePos,
        prop,
        diff;

      if (self.isDragging || self.isClosing || (self.isAnimating && self.firstRun)) {
        return;
      }

      // Should loop?
      pos = parseInt(pos, 10);
      loop = self.current ? self.current.opts.loop : self.opts.loop;

      if (!loop && (pos < 0 || pos >= groupLen)) {
        return false;
      }

      // Check if opening for the first time; this helps to speed things up
      firstRun = self.firstRun = !Object.keys(self.slides).length;

      // Create slides
      previous = self.current;

      self.prevIndex = self.currIndex;
      self.prevPos = self.currPos;

      current = self.createSlide(pos);

      if (groupLen > 1) {
        if (loop || current.index < groupLen - 1) {
          self.createSlide(pos + 1);
        }

        if (loop || current.index > 0) {
          self.createSlide(pos - 1);
        }
      }

      self.current = current;
      self.currIndex = current.index;
      self.currPos = current.pos;

      self.trigger("beforeShow", firstRun);

      self.updateControls();

      // Validate duration length
      current.forcedDuration = undefined;

      if ($.isNumeric(duration)) {
        current.forcedDuration = duration;
      } else {
        duration = current.opts[firstRun ? "animationDuration" : "transitionDuration"];
      }

      duration = parseInt(duration, 10);

      // Check if user has swiped the slides or if still animating
      isMoved = self.isMoved(current);

      // Make sure current slide is visible
      current.$slide.addClass("fancybox-slide--current");

      // Fresh start - reveal container, current slide and start loading content
      if (firstRun) {
        if (current.opts.animationEffect && duration) {
          self.$refs.container.css("transition-duration", duration + "ms");
        }

        self.$refs.container.addClass("fancybox-is-open").trigger("focus");

        // Attempt to load content into slide
        // This will later call `afterLoad` -> `revealContent`
        self.loadSlide(current);

        self.preload("image");

        return;
      }

      // Get actual slide/stage positions (before cleaning up)
      slidePos = $.fancybox.getTranslate(previous.$slide);
      stagePos = $.fancybox.getTranslate(self.$refs.stage);

      // Clean up all slides
      $.each(self.slides, function (index, slide) {
        $.fancybox.stop(slide.$slide, true);
      });

      if (previous.pos !== current.pos) {
        previous.isComplete = false;
      }

      previous.$slide.removeClass("fancybox-slide--complete fancybox-slide--current");

      // If slides are out of place, then animate them to correct position
      if (isMoved) {
        // Calculate horizontal swipe distance
        diff = slidePos.left - (previous.pos * slidePos.width + previous.pos * previous.opts.gutter);

        $.each(self.slides, function (index, slide) {
          slide.$slide.removeClass("fancybox-animated").removeClass(function (index, className) {
            return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
          });

          // Make sure that each slide is in equal distance
          // This is mostly needed for freshly added slides, because they are not yet positioned
          var leftPos = slide.pos * slidePos.width + slide.pos * slide.opts.gutter;

          $.fancybox.setTranslate(slide.$slide, {
            top: 0,
            left: leftPos - stagePos.left + diff
          });

          if (slide.pos !== current.pos) {
            slide.$slide.addClass("fancybox-slide--" + (slide.pos > current.pos ? "next" : "previous"));
          }

          // Redraw to make sure that transition will start
          forceRedraw(slide.$slide);

          // Animate the slide
          $.fancybox.animate(
            slide.$slide, {
              top: 0,
              left: (slide.pos - current.pos) * slidePos.width + (slide.pos - current.pos) * slide.opts.gutter
            },
            duration,
            function () {
              slide.$slide
                .css({
                  transform: "",
                  opacity: ""
                })
                .removeClass("fancybox-slide--next fancybox-slide--previous");

              if (slide.pos === self.currPos) {
                self.complete();
              }
            }
          );
        });
      } else if (duration && current.opts.transitionEffect) {
        // Set transition effect for previously active slide
        prop = "fancybox-animated fancybox-fx-" + current.opts.transitionEffect;

        previous.$slide.addClass("fancybox-slide--" + (previous.pos > current.pos ? "next" : "previous"));

        $.fancybox.animate(
          previous.$slide,
          prop,
          duration,
          function () {
            previous.$slide.removeClass(prop).removeClass("fancybox-slide--next fancybox-slide--previous");
          },
          false
        );
      }

      if (current.isLoaded) {
        self.revealContent(current);
      } else {
        self.loadSlide(current);
      }

      self.preload("image");
    },

    // Create new "slide" element
    // These are gallery items  that are actually added to DOM
    // =======================================================

    createSlide: function (pos) {
      var self = this,
        $slide,
        index;

      index = pos % self.group.length;
      index = index < 0 ? self.group.length + index : index;

      if (!self.slides[pos] && self.group[index]) {
        $slide = $('<div class="fancybox-slide"></div>').appendTo(self.$refs.stage);

        self.slides[pos] = $.extend(true, {}, self.group[index], {
          pos: pos,
          $slide: $slide,
          isLoaded: false
        });

        self.updateSlide(self.slides[pos]);
      }

      return self.slides[pos];
    },

    // Scale image to the actual size of the image;
    // x and y values should be relative to the slide
    // ==============================================

    scaleToActual: function (x, y, duration) {
      var self = this,
        current = self.current,
        $content = current.$content,
        canvasWidth = $.fancybox.getTranslate(current.$slide).width,
        canvasHeight = $.fancybox.getTranslate(current.$slide).height,
        newImgWidth = current.width,
        newImgHeight = current.height,
        imgPos,
        posX,
        posY,
        scaleX,
        scaleY;

      if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
        return;
      }

      self.isAnimating = true;

      $.fancybox.stop($content);

      x = x === undefined ? canvasWidth * 0.5 : x;
      y = y === undefined ? canvasHeight * 0.5 : y;

      imgPos = $.fancybox.getTranslate($content);

      imgPos.top -= $.fancybox.getTranslate(current.$slide).top;
      imgPos.left -= $.fancybox.getTranslate(current.$slide).left;

      scaleX = newImgWidth / imgPos.width;
      scaleY = newImgHeight / imgPos.height;

      // Get center position for original image
      posX = canvasWidth * 0.5 - newImgWidth * 0.5;
      posY = canvasHeight * 0.5 - newImgHeight * 0.5;

      // Make sure image does not move away from edges
      if (newImgWidth > canvasWidth) {
        posX = imgPos.left * scaleX - (x * scaleX - x);

        if (posX > 0) {
          posX = 0;
        }

        if (posX < canvasWidth - newImgWidth) {
          posX = canvasWidth - newImgWidth;
        }
      }

      if (newImgHeight > canvasHeight) {
        posY = imgPos.top * scaleY - (y * scaleY - y);

        if (posY > 0) {
          posY = 0;
        }

        if (posY < canvasHeight - newImgHeight) {
          posY = canvasHeight - newImgHeight;
        }
      }

      self.updateCursor(newImgWidth, newImgHeight);

      $.fancybox.animate(
        $content, {
          top: posY,
          left: posX,
          scaleX: scaleX,
          scaleY: scaleY
        },
        duration || 366,
        function () {
          self.isAnimating = false;
        }
      );

      // Stop slideshow
      if (self.SlideShow && self.SlideShow.isActive) {
        self.SlideShow.stop();
      }
    },

    // Scale image to fit inside parent element
    // ========================================

    scaleToFit: function (duration) {
      var self = this,
        current = self.current,
        $content = current.$content,
        end;

      if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
        return;
      }

      self.isAnimating = true;

      $.fancybox.stop($content);

      end = self.getFitPos(current);

      self.updateCursor(end.width, end.height);

      $.fancybox.animate(
        $content, {
          top: end.top,
          left: end.left,
          scaleX: end.width / $content.width(),
          scaleY: end.height / $content.height()
        },
        duration || 366,
        function () {
          self.isAnimating = false;
        }
      );
    },

    // Calculate image size to fit inside viewport
    // ===========================================

    getFitPos: function (slide) {
      var self = this,
        $content = slide.$content,
        $slide = slide.$slide,
        width = slide.width || slide.opts.width,
        height = slide.height || slide.opts.height,
        maxWidth,
        maxHeight,
        minRatio,
        aspectRatio,
        rez = {};

      if (!slide.isLoaded || !$content || !$content.length) {
        return false;
      }

      maxWidth = $.fancybox.getTranslate(self.$refs.stage).width;
      maxHeight = $.fancybox.getTranslate(self.$refs.stage).height;

      maxWidth -=
        parseFloat($slide.css("paddingLeft")) +
        parseFloat($slide.css("paddingRight")) +
        parseFloat($content.css("marginLeft")) +
        parseFloat($content.css("marginRight"));

      maxHeight -=
        parseFloat($slide.css("paddingTop")) +
        parseFloat($slide.css("paddingBottom")) +
        parseFloat($content.css("marginTop")) +
        parseFloat($content.css("marginBottom"));

      if (!width || !height) {
        width = maxWidth;
        height = maxHeight;
      }

      minRatio = Math.min(1, maxWidth / width, maxHeight / height);

      width = minRatio * width;
      height = minRatio * height;

      // Adjust width/height to precisely fit into container
      if (width > maxWidth - 0.5) {
        width = maxWidth;
      }

      if (height > maxHeight - 0.5) {
        height = maxHeight;
      }

      if (slide.type === "image") {
        rez.top = Math.floor((maxHeight - height) * 0.5) + parseFloat($slide.css("paddingTop"));
        rez.left = Math.floor((maxWidth - width) * 0.5) + parseFloat($slide.css("paddingLeft"));
      } else if (slide.contentType === "video") {
        // Force aspect ratio for the video
        // "I say the whole world must learn of our peaceful ways… by force!"
        aspectRatio = slide.opts.width && slide.opts.height ? width / height : slide.opts.ratio || 16 / 9;

        if (height > width / aspectRatio) {
          height = width / aspectRatio;
        } else if (width > height * aspectRatio) {
          width = height * aspectRatio;
        }
      }

      rez.width = width;
      rez.height = height;

      return rez;
    },

    // Update content size and position for all slides
    // ==============================================

    update: function (e) {
      var self = this;

      $.each(self.slides, function (key, slide) {
        self.updateSlide(slide, e);
      });
    },

    // Update slide content position and size
    // ======================================

    updateSlide: function (slide, e) {
      var self = this,
        $content = slide && slide.$content,
        width = slide.width || slide.opts.width,
        height = slide.height || slide.opts.height,
        $slide = slide.$slide;

      // First, prevent caption overlap, if needed
      self.adjustCaption(slide);

      // Then resize content to fit inside the slide
      if ($content && (width || height || slide.contentType === "video") && !slide.hasError) {
        $.fancybox.stop($content);

        $.fancybox.setTranslate($content, self.getFitPos(slide));

        if (slide.pos === self.currPos) {
          self.isAnimating = false;

          self.updateCursor();
        }
      }

      // Then some adjustments
      self.adjustLayout(slide);

      if ($slide.length) {
        $slide.trigger("refresh");

        if (slide.pos === self.currPos) {
          self.$refs.toolbar
            .add(self.$refs.navigation.find(".fancybox-button--arrow_right"))
            .toggleClass("compensate-for-scrollbar", $slide.get(0).scrollHeight > $slide.get(0).clientHeight);
        }
      }

      self.trigger("onUpdate", slide, e);
    },

    // Horizontally center slide
    // =========================

    centerSlide: function (duration) {
      var self = this,
        current = self.current,
        $slide = current.$slide;

      if (self.isClosing || !current) {
        return;
      }

      $slide.siblings().css({
        transform: "",
        opacity: ""
      });

      $slide
        .parent()
        .children()
        .removeClass("fancybox-slide--previous fancybox-slide--next");

      $.fancybox.animate(
        $slide, {
          top: 0,
          left: 0,
          opacity: 1
        },
        duration === undefined ? 0 : duration,
        function () {
          // Clean up
          $slide.css({
            transform: "",
            opacity: ""
          });

          if (!current.isComplete) {
            self.complete();
          }
        },
        false
      );
    },

    // Check if current slide is moved (swiped)
    // ========================================

    isMoved: function (slide) {
      var current = slide || this.current,
        slidePos,
        stagePos;

      if (!current) {
        return false;
      }

      stagePos = $.fancybox.getTranslate(this.$refs.stage);
      slidePos = $.fancybox.getTranslate(current.$slide);

      return (
        !current.$slide.hasClass("fancybox-animated") &&
        (Math.abs(slidePos.top - stagePos.top) > 0.5 || Math.abs(slidePos.left - stagePos.left) > 0.5)
      );
    },

    // Update cursor style depending if content can be zoomed
    // ======================================================

    updateCursor: function (nextWidth, nextHeight) {
      var self = this,
        current = self.current,
        $container = self.$refs.container,
        canPan,
        isZoomable;

      if (!current || self.isClosing || !self.Guestures) {
        return;
      }

      $container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan");

      canPan = self.canPan(nextWidth, nextHeight);

      isZoomable = canPan ? true : self.isZoomable();

      $container.toggleClass("fancybox-is-zoomable", isZoomable);

      $("[data-fancybox-zoom]").prop("disabled", !isZoomable);

      if (canPan) {
        $container.addClass("fancybox-can-pan");
      } else if (
        isZoomable &&
        (current.opts.clickContent === "zoom" || ($.isFunction(current.opts.clickContent) && current.opts.clickContent(current) == "zoom"))
      ) {
        $container.addClass("fancybox-can-zoomIn");
      } else if (current.opts.touch && (current.opts.touch.vertical || self.group.length > 1) && current.contentType !== "video") {
        $container.addClass("fancybox-can-swipe");
      }
    },

    // Check if current slide is zoomable
    // ==================================

    isZoomable: function () {
      var self = this,
        current = self.current,
        fitPos;

      // Assume that slide is zoomable if:
      //   - image is still loading
      //   - actual size of the image is smaller than available area
      if (current && !self.isClosing && current.type === "image" && !current.hasError) {
        if (!current.isLoaded) {
          return true;
        }

        fitPos = self.getFitPos(current);

        if (fitPos && (current.width > fitPos.width || current.height > fitPos.height)) {
          return true;
        }
      }

      return false;
    },

    // Check if current image dimensions are smaller than actual
    // =========================================================

    isScaledDown: function (nextWidth, nextHeight) {
      var self = this,
        rez = false,
        current = self.current,
        $content = current.$content;

      if (nextWidth !== undefined && nextHeight !== undefined) {
        rez = nextWidth < current.width && nextHeight < current.height;
      } else if ($content) {
        rez = $.fancybox.getTranslate($content);
        rez = rez.width < current.width && rez.height < current.height;
      }

      return rez;
    },

    // Check if image dimensions exceed parent element
    // ===============================================

    canPan: function (nextWidth, nextHeight) {
      var self = this,
        current = self.current,
        pos = null,
        rez = false;

      if (current.type === "image" && (current.isComplete || (nextWidth && nextHeight)) && !current.hasError) {
        rez = self.getFitPos(current);

        if (nextWidth !== undefined && nextHeight !== undefined) {
          pos = {
            width: nextWidth,
            height: nextHeight
          };
        } else if (current.isComplete) {
          pos = $.fancybox.getTranslate(current.$content);
        }

        if (pos && rez) {
          rez = Math.abs(pos.width - rez.width) > 1.5 || Math.abs(pos.height - rez.height) > 1.5;
        }
      }

      return rez;
    },

    // Load content into the slide
    // ===========================

    loadSlide: function (slide) {
      var self = this,
        type,
        $slide,
        ajaxLoad;

      if (slide.isLoading || slide.isLoaded) {
        return;
      }

      slide.isLoading = true;

      if (self.trigger("beforeLoad", slide) === false) {
        slide.isLoading = false;

        return false;
      }

      type = slide.type;
      $slide = slide.$slide;

      $slide
        .off("refresh")
        .trigger("onReset")
        .addClass(slide.opts.slideClass);

      // Create content depending on the type
      switch (type) {
        case "image":
          self.setImage(slide);

          break;

        case "iframe":
          self.setIframe(slide);

          break;

        case "html":
          self.setContent(slide, slide.src || slide.content);

          break;

        case "video":
          self.setContent(
            slide,
            slide.opts.video.tpl
            .replace(/\{\{src\}\}/gi, slide.src)
            .replace("{{format}}", slide.opts.videoFormat || slide.opts.video.format || "")
            .replace("{{poster}}", slide.thumb || "")
          );

          break;

        case "inline":
          if ($(slide.src).length) {
            self.setContent(slide, $(slide.src));
          } else {
            self.setError(slide);
          }

          break;

        case "ajax":
          self.showLoading(slide);

          ajaxLoad = $.ajax(
            $.extend({}, slide.opts.ajax.settings, {
              url: slide.src,
              success: function (data, textStatus) {
                if (textStatus === "success") {
                  self.setContent(slide, data);
                }
              },
              error: function (jqXHR, textStatus) {
                if (jqXHR && textStatus !== "abort") {
                  self.setError(slide);
                }
              }
            })
          );

          $slide.one("onReset", function () {
            ajaxLoad.abort();
          });

          break;

        default:
          self.setError(slide);

          break;
      }

      return true;
    },

    // Use thumbnail image, if possible
    // ================================

    setImage: function (slide) {
      var self = this,
        ghost;

      // Check if need to show loading icon
      setTimeout(function () {
        var $img = slide.$image;

        if (!self.isClosing && slide.isLoading && (!$img || !$img.length || !$img[0].complete) && !slide.hasError) {
          self.showLoading(slide);
        }
      }, 50);

      //Check if image has srcset
      self.checkSrcset(slide);

      // This will be wrapper containing both ghost and actual image
      slide.$content = $('<div class="fancybox-content"></div>')
        .addClass("fancybox-is-hidden")
        .appendTo(slide.$slide.addClass("fancybox-slide--image"));

      // If we have a thumbnail, we can display it while actual image is loading
      // Users will not stare at black screen and actual image will appear gradually
      if (slide.opts.preload !== false && slide.opts.width && slide.opts.height && slide.thumb) {
        slide.width = slide.opts.width;
        slide.height = slide.opts.height;

        ghost = document.createElement("img");

        ghost.onerror = function () {
          $(this).remove();

          slide.$ghost = null;
        };

        ghost.onload = function () {
          self.afterLoad(slide);
        };

        slide.$ghost = $(ghost)
          .addClass("fancybox-image")
          .appendTo(slide.$content)
          .attr("src", slide.thumb);
      }

      // Start loading actual image
      self.setBigImage(slide);
    },

    // Check if image has srcset and get the source
    // ============================================
    checkSrcset: function (slide) {
      var srcset = slide.opts.srcset || slide.opts.image.srcset,
        found,
        temp,
        pxRatio,
        windowWidth;

      // If we have "srcset", then we need to find first matching "src" value.
      // This is necessary, because when you set an src attribute, the browser will preload the image
      // before any javascript or even CSS is applied.
      if (srcset) {
        pxRatio = window.devicePixelRatio || 1;
        windowWidth = window.innerWidth * pxRatio;

        temp = srcset.split(",").map(function (el) {
          var ret = {};

          el.trim()
            .split(/\s+/)
            .forEach(function (el, i) {
              var value = parseInt(el.substring(0, el.length - 1), 10);

              if (i === 0) {
                return (ret.url = el);
              }

              if (value) {
                ret.value = value;
                ret.postfix = el[el.length - 1];
              }
            });

          return ret;
        });

        // Sort by value
        temp.sort(function (a, b) {
          return a.value - b.value;
        });

        // Ok, now we have an array of all srcset values
        for (var j = 0; j < temp.length; j++) {
          var el = temp[j];

          if ((el.postfix === "w" && el.value >= windowWidth) || (el.postfix === "x" && el.value >= pxRatio)) {
            found = el;
            break;
          }
        }

        // If not found, take the last one
        if (!found && temp.length) {
          found = temp[temp.length - 1];
        }

        if (found) {
          slide.src = found.url;

          // If we have default width/height values, we can calculate height for matching source
          if (slide.width && slide.height && found.postfix == "w") {
            slide.height = (slide.width / slide.height) * found.value;
            slide.width = found.value;
          }

          slide.opts.srcset = srcset;
        }
      }
    },

    // Create full-size image
    // ======================

    setBigImage: function (slide) {
      var self = this,
        img = document.createElement("img"),
        $img = $(img);

      slide.$image = $img
        .one("error", function () {
          self.setError(slide);
        })
        .one("load", function () {
          var sizes;

          if (!slide.$ghost) {
            self.resolveImageSlideSize(slide, this.naturalWidth, this.naturalHeight);

            self.afterLoad(slide);
          }

          if (self.isClosing) {
            return;
          }

          if (slide.opts.srcset) {
            sizes = slide.opts.sizes;

            if (!sizes || sizes === "auto") {
              sizes =
                (slide.width / slide.height > 1 && $W.width() / $W.height() > 1 ? "100" : Math.round((slide.width / slide.height) * 100)) +
                "vw";
            }

            $img.attr("sizes", sizes).attr("srcset", slide.opts.srcset);
          }

          // Hide temporary image after some delay
          if (slide.$ghost) {
            setTimeout(function () {
              if (slide.$ghost && !self.isClosing) {
                slide.$ghost.hide();
              }
            }, Math.min(300, Math.max(1000, slide.height / 1600)));
          }

          self.hideLoading(slide);
        })
        .addClass("fancybox-image")
        .attr("src", slide.src)
        .appendTo(slide.$content);

      if ((img.complete || img.readyState == "complete") && $img.naturalWidth && $img.naturalHeight) {
        $img.trigger("load");
      } else if (img.error) {
        $img.trigger("error");
      }
    },

    // Computes the slide size from image size and maxWidth/maxHeight
    // ==============================================================

    resolveImageSlideSize: function (slide, imgWidth, imgHeight) {
      var maxWidth = parseInt(slide.opts.width, 10),
        maxHeight = parseInt(slide.opts.height, 10);

      // Sets the default values from the image
      slide.width = imgWidth;
      slide.height = imgHeight;

      if (maxWidth > 0) {
        slide.width = maxWidth;
        slide.height = Math.floor((maxWidth * imgHeight) / imgWidth);
      }

      if (maxHeight > 0) {
        slide.width = Math.floor((maxHeight * imgWidth) / imgHeight);
        slide.height = maxHeight;
      }
    },

    // Create iframe wrapper, iframe and bindings
    // ==========================================

    setIframe: function (slide) {
      var self = this,
        opts = slide.opts.iframe,
        $slide = slide.$slide,
        $iframe;

      slide.$content = $('<div class="fancybox-content' + (opts.preload ? " fancybox-is-hidden" : "") + '"></div>')
        .css(opts.css)
        .appendTo($slide);

      $slide.addClass("fancybox-slide--" + slide.contentType);

      slide.$iframe = $iframe = $(opts.tpl.replace(/\{rnd\}/g, new Date().getTime()))
        .attr(opts.attr)
        .appendTo(slide.$content);

      if (opts.preload) {
        self.showLoading(slide);

        // Unfortunately, it is not always possible to determine if iframe is successfully loaded
        // (due to browser security policy)

        $iframe.on("load.fb error.fb", function (e) {
          this.isReady = 1;

          slide.$slide.trigger("refresh");

          self.afterLoad(slide);
        });

        // Recalculate iframe content size
        // ===============================

        $slide.on("refresh.fb", function () {
          var $content = slide.$content,
            frameWidth = opts.css.width,
            frameHeight = opts.css.height,
            $contents,
            $body;

          if ($iframe[0].isReady !== 1) {
            return;
          }

          try {
            $contents = $iframe.contents();
            $body = $contents.find("body");
          } catch (ignore) {}

          // Calculate content dimensions, if it is accessible
          if ($body && $body.length && $body.children().length) {
            // Avoid scrolling to top (if multiple instances)
            $slide.css("overflow", "visible");

            $content.css({
              width: "100%",
              "max-width": "100%",
              height: "9999px"
            });

            if (frameWidth === undefined) {
              frameWidth = Math.ceil(Math.max($body[0].clientWidth, $body.outerWidth(true)));
            }

            $content.css("width", frameWidth ? frameWidth : "").css("max-width", "");

            if (frameHeight === undefined) {
              frameHeight = Math.ceil(Math.max($body[0].clientHeight, $body.outerHeight(true)));
            }

            $content.css("height", frameHeight ? frameHeight : "");

            $slide.css("overflow", "auto");
          }

          $content.removeClass("fancybox-is-hidden");
        });
      } else {
        self.afterLoad(slide);
      }

      $iframe.attr("src", slide.src);

      // Remove iframe if closing or changing gallery item
      $slide.one("onReset", function () {
        // This helps IE not to throw errors when closing
        try {
          $(this)
            .find("iframe")
            .hide()
            .unbind()
            .attr("src", "//about:blank");
        } catch (ignore) {}

        $(this)
          .off("refresh.fb")
          .empty();

        slide.isLoaded = false;
        slide.isRevealed = false;
      });
    },

    // Wrap and append content to the slide
    // ======================================

    setContent: function (slide, content) {
      var self = this;

      if (self.isClosing) {
        return;
      }

      self.hideLoading(slide);

      if (slide.$content) {
        $.fancybox.stop(slide.$content);
      }

      slide.$slide.empty();

      // If content is a jQuery object, then it will be moved to the slide.
      // The placeholder is created so we will know where to put it back.
      if (isQuery(content) && content.parent().length) {
        // Make sure content is not already moved to fancyBox
        if (content.hasClass("fancybox-content") || content.parent().hasClass("fancybox-content")) {
          content.parents(".fancybox-slide").trigger("onReset");
        }

        // Create temporary element marking original place of the content
        slide.$placeholder = $("<div>")
          .hide()
          .insertAfter(content);

        // Make sure content is visible
        content.css("display", "inline-block");
      } else if (!slide.hasError) {
        // If content is just a plain text, try to convert it to html
        if ($.type(content) === "string") {
          content = $("<div>")
            .append($.trim(content))
            .contents();
        }

        // If "filter" option is provided, then filter content
        if (slide.opts.filter) {
          content = $("<div>")
            .html(content)
            .find(slide.opts.filter);
        }
      }

      slide.$slide.one("onReset", function () {
        // Pause all html5 video/audio
        $(this)
          .find("video,audio")
          .trigger("pause");

        // Put content back
        if (slide.$placeholder) {
          slide.$placeholder.after(content.removeClass("fancybox-content").hide()).remove();

          slide.$placeholder = null;
        }

        // Remove custom close button
        if (slide.$smallBtn) {
          slide.$smallBtn.remove();

          slide.$smallBtn = null;
        }

        // Remove content and mark slide as not loaded
        if (!slide.hasError) {
          $(this).empty();

          slide.isLoaded = false;
          slide.isRevealed = false;
        }
      });

      $(content).appendTo(slide.$slide);

      if ($(content).is("video,audio")) {
        $(content).addClass("fancybox-video");

        $(content).wrap("<div></div>");

        slide.contentType = "video";

        slide.opts.width = slide.opts.width || $(content).attr("width");
        slide.opts.height = slide.opts.height || $(content).attr("height");
      }

      slide.$content = slide.$slide
        .children()
        .filter("div,form,main,video,audio,article,.fancybox-content")
        .first();

      slide.$content.siblings().hide();

      // Re-check if there is a valid content
      // (in some cases, ajax response can contain various elements or plain text)
      if (!slide.$content.length) {
        slide.$content = slide.$slide
          .wrapInner("<div></div>")
          .children()
          .first();
      }

      slide.$content.addClass("fancybox-content");

      slide.$slide.addClass("fancybox-slide--" + slide.contentType);

      self.afterLoad(slide);
    },

    // Display error message
    // =====================

    setError: function (slide) {
      slide.hasError = true;

      slide.$slide
        .trigger("onReset")
        .removeClass("fancybox-slide--" + slide.contentType)
        .addClass("fancybox-slide--error");

      slide.contentType = "html";

      this.setContent(slide, this.translate(slide, slide.opts.errorTpl));

      if (slide.pos === this.currPos) {
        this.isAnimating = false;
      }
    },

    // Show loading icon inside the slide
    // ==================================

    showLoading: function (slide) {
      var self = this;

      slide = slide || self.current;

      if (slide && !slide.$spinner) {
        slide.$spinner = $(self.translate(self, self.opts.spinnerTpl))
          .appendTo(slide.$slide)
          .hide()
          .fadeIn("fast");
      }
    },

    // Remove loading icon from the slide
    // ==================================

    hideLoading: function (slide) {
      var self = this;

      slide = slide || self.current;

      if (slide && slide.$spinner) {
        slide.$spinner.stop().remove();

        delete slide.$spinner;
      }
    },

    // Adjustments after slide content has been loaded
    // ===============================================

    afterLoad: function (slide) {
      var self = this;

      if (self.isClosing) {
        return;
      }

      slide.isLoading = false;
      slide.isLoaded = true;

      self.trigger("afterLoad", slide);

      self.hideLoading(slide);

      // Add small close button
      if (slide.opts.smallBtn && (!slide.$smallBtn || !slide.$smallBtn.length)) {
        slide.$smallBtn = $(self.translate(slide, slide.opts.btnTpl.smallBtn)).appendTo(slide.$content);
      }

      // Disable right click
      if (slide.opts.protect && slide.$content && !slide.hasError) {
        slide.$content.on("contextmenu.fb", function (e) {
          if (e.button == 2) {
            e.preventDefault();
          }

          return true;
        });

        // Add fake element on top of the image
        // This makes a bit harder for user to select image
        if (slide.type === "image") {
          $('<div class="fancybox-spaceball"></div>').appendTo(slide.$content);
        }
      }

      self.adjustCaption(slide);

      self.adjustLayout(slide);

      if (slide.pos === self.currPos) {
        self.updateCursor();
      }

      self.revealContent(slide);
    },

    // Prevent caption overlap,
    // fix css inconsistency across browsers
    // =====================================

    adjustCaption: function (slide) {
      var self = this,
        current = slide || self.current,
        caption = current.opts.caption,
        preventOverlap = current.opts.preventCaptionOverlap,
        $caption = self.$refs.caption,
        $clone,
        captionH = false;

      $caption.toggleClass("fancybox-caption--separate", preventOverlap);

      if (preventOverlap && caption && caption.length) {
        if (current.pos !== self.currPos) {
          $clone = $caption.clone().appendTo($caption.parent());

          $clone
            .children()
            .eq(0)
            .empty()
            .html(caption);

          captionH = $clone.outerHeight(true);

          $clone.empty().remove();
        } else if (self.$caption) {
          captionH = self.$caption.outerHeight(true);
        }

        current.$slide.css("padding-bottom", captionH || "");
      }
    },

    // Simple hack to fix inconsistency across browsers, described here (affects Edge, too):
    // https://bugzilla.mozilla.org/show_bug.cgi?id=748518
    // ====================================================================================

    adjustLayout: function (slide) {
      var self = this,
        current = slide || self.current,
        scrollHeight,
        marginBottom,
        inlinePadding,
        actualPadding;

      if (current.isLoaded && current.opts.disableLayoutFix !== true) {
        current.$content.css("margin-bottom", "");

        // If we would always set margin-bottom for the content,
        // then it would potentially break vertical align
        if (current.$content.outerHeight() > current.$slide.height() + 0.5) {
          inlinePadding = current.$slide[0].style["padding-bottom"];
          actualPadding = current.$slide.css("padding-bottom");

          if (parseFloat(actualPadding) > 0) {
            scrollHeight = current.$slide[0].scrollHeight;

            current.$slide.css("padding-bottom", 0);

            if (Math.abs(scrollHeight - current.$slide[0].scrollHeight) < 1) {
              marginBottom = actualPadding;
            }

            current.$slide.css("padding-bottom", inlinePadding);
          }
        }

        current.$content.css("margin-bottom", marginBottom);
      }
    },

    // Make content visible
    // This method is called right after content has been loaded or
    // user navigates gallery and transition should start
    // ============================================================

    revealContent: function (slide) {
      var self = this,
        $slide = slide.$slide,
        end = false,
        start = false,
        isMoved = self.isMoved(slide),
        isRevealed = slide.isRevealed,
        effect,
        effectClassName,
        duration,
        opacity;

      slide.isRevealed = true;

      effect = slide.opts[self.firstRun ? "animationEffect" : "transitionEffect"];
      duration = slide.opts[self.firstRun ? "animationDuration" : "transitionDuration"];

      duration = parseInt(slide.forcedDuration === undefined ? duration : slide.forcedDuration, 10);

      if (isMoved || slide.pos !== self.currPos || !duration) {
        effect = false;
      }

      // Check if can zoom
      if (effect === "zoom") {
        if (slide.pos === self.currPos && duration && slide.type === "image" && !slide.hasError && (start = self.getThumbPos(slide))) {
          end = self.getFitPos(slide);
        } else {
          effect = "fade";
        }
      }

      // Zoom animation
      // ==============
      if (effect === "zoom") {
        self.isAnimating = true;

        end.scaleX = end.width / start.width;
        end.scaleY = end.height / start.height;

        // Check if we need to animate opacity
        opacity = slide.opts.zoomOpacity;

        if (opacity == "auto") {
          opacity = Math.abs(slide.width / slide.height - start.width / start.height) > 0.1;
        }

        if (opacity) {
          start.opacity = 0.1;
          end.opacity = 1;
        }

        // Draw image at start position
        $.fancybox.setTranslate(slide.$content.removeClass("fancybox-is-hidden"), start);

        forceRedraw(slide.$content);

        // Start animation
        $.fancybox.animate(slide.$content, end, duration, function () {
          self.isAnimating = false;

          self.complete();
        });

        return;
      }

      self.updateSlide(slide);

      // Simply show content if no effect
      // ================================
      if (!effect) {
        slide.$content.removeClass("fancybox-is-hidden");

        if (!isRevealed && isMoved && slide.type === "image" && !slide.hasError) {
          slide.$content.hide().fadeIn("fast");
        }

        if (slide.pos === self.currPos) {
          self.complete();
        }

        return;
      }

      // Prepare for CSS transiton
      // =========================
      $.fancybox.stop($slide);

      //effectClassName = "fancybox-animated fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-fx-" + effect;
      effectClassName = "fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + effect;

      $slide.addClass(effectClassName).removeClass("fancybox-slide--current"); //.addClass(effectClassName);

      slide.$content.removeClass("fancybox-is-hidden");

      // Force reflow
      forceRedraw($slide);

      if (slide.type !== "image") {
        slide.$content.hide().show(0);
      }

      $.fancybox.animate(
        $slide,
        "fancybox-slide--current",
        duration,
        function () {
          $slide.removeClass(effectClassName).css({
            transform: "",
            opacity: ""
          });

          if (slide.pos === self.currPos) {
            self.complete();
          }
        },
        true
      );
    },

    // Check if we can and have to zoom from thumbnail
    //================================================

    getThumbPos: function (slide) {
      var rez = false,
        $thumb = slide.$thumb,
        thumbPos,
        btw,
        brw,
        bbw,
        blw;

      if (!$thumb || !inViewport($thumb[0])) {
        return false;
      }

      thumbPos = $.fancybox.getTranslate($thumb);

      btw = parseFloat($thumb.css("border-top-width") || 0);
      brw = parseFloat($thumb.css("border-right-width") || 0);
      bbw = parseFloat($thumb.css("border-bottom-width") || 0);
      blw = parseFloat($thumb.css("border-left-width") || 0);

      rez = {
        top: thumbPos.top + btw,
        left: thumbPos.left + blw,
        width: thumbPos.width - brw - blw,
        height: thumbPos.height - btw - bbw,
        scaleX: 1,
        scaleY: 1
      };

      return thumbPos.width > 0 && thumbPos.height > 0 ? rez : false;
    },

    // Final adjustments after current gallery item is moved to position
    // and it`s content is loaded
    // ==================================================================

    complete: function () {
      var self = this,
        current = self.current,
        slides = {},
        $el;

      if (self.isMoved() || !current.isLoaded) {
        return;
      }

      if (!current.isComplete) {
        current.isComplete = true;

        current.$slide.siblings().trigger("onReset");

        self.preload("inline");

        // Trigger any CSS transiton inside the slide
        forceRedraw(current.$slide);

        current.$slide.addClass("fancybox-slide--complete");

        // Remove unnecessary slides
        $.each(self.slides, function (key, slide) {
          if (slide.pos >= self.currPos - 1 && slide.pos <= self.currPos + 1) {
            slides[slide.pos] = slide;
          } else if (slide) {
            $.fancybox.stop(slide.$slide);

            slide.$slide.off().remove();
          }
        });

        self.slides = slides;
      }

      self.isAnimating = false;

      self.updateCursor();

      self.trigger("afterShow");

      // Autoplay first html5 video/audio
      if (!!current.opts.video.autoStart) {
        current.$slide
          .find("video,audio")
          .filter(":visible:first")
          .trigger("play")
          .one("ended", function () {
            if (Document.exitFullscreen) {
              Document.exitFullscreen();
            } else if (this.webkitExitFullscreen) {
              this.webkitExitFullscreen();
            }

            self.next();
          });
      }

      // Try to focus on the first focusable element
      if (current.opts.autoFocus && current.contentType === "html") {
        // Look for the first input with autofocus attribute
        $el = current.$content.find("input[autofocus]:enabled:visible:first");

        if ($el.length) {
          $el.trigger("focus");
        } else {
          self.focus(null, true);
        }
      }

      // Avoid jumping
      current.$slide.scrollTop(0).scrollLeft(0);
    },

    // Preload next and previous slides
    // ================================

    preload: function (type) {
      var self = this,
        prev,
        next;

      if (self.group.length < 2) {
        return;
      }

      next = self.slides[self.currPos + 1];
      prev = self.slides[self.currPos - 1];

      if (prev && prev.type === type) {
        self.loadSlide(prev);
      }

      if (next && next.type === type) {
        self.loadSlide(next);
      }
    },

    // Try to find and focus on the first focusable element
    // ====================================================

    focus: function (e, firstRun) {
      var self = this,
        focusableStr = [
          "a[href]",
          "area[href]",
          'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
          "select:not([disabled]):not([aria-hidden])",
          "textarea:not([disabled]):not([aria-hidden])",
          "button:not([disabled]):not([aria-hidden])",
          "iframe",
          "object",
          "embed",
          "video",
          "audio",
          "[contenteditable]",
          '[tabindex]:not([tabindex^="-"])'
        ].join(","),
        focusableItems,
        focusedItemIndex;

      if (self.isClosing) {
        return;
      }

      if (e || !self.current || !self.current.isComplete) {
        // Focus on any element inside fancybox
        focusableItems = self.$refs.container.find("*:visible");
      } else {
        // Focus inside current slide
        focusableItems = self.current.$slide.find("*:visible" + (firstRun ? ":not(.fancybox-close-small)" : ""));
      }

      focusableItems = focusableItems.filter(focusableStr).filter(function () {
        return $(this).css("visibility") !== "hidden" && !$(this).hasClass("disabled");
      });

      if (focusableItems.length) {
        focusedItemIndex = focusableItems.index(document.activeElement);

        if (e && e.shiftKey) {
          // Back tab
          if (focusedItemIndex < 0 || focusedItemIndex == 0) {
            e.preventDefault();

            focusableItems.eq(focusableItems.length - 1).trigger("focus");
          }
        } else {
          // Outside or Forward tab
          if (focusedItemIndex < 0 || focusedItemIndex == focusableItems.length - 1) {
            if (e) {
              e.preventDefault();
            }

            focusableItems.eq(0).trigger("focus");
          }
        }
      } else {
        self.$refs.container.trigger("focus");
      }
    },

    // Activates current instance - brings container to the front and enables keyboard,
    // notifies other instances about deactivating
    // =================================================================================

    activate: function () {
      var self = this;

      // Deactivate all instances
      $(".fancybox-container").each(function () {
        var instance = $(this).data("FancyBox");

        // Skip self and closing instances
        if (instance && instance.id !== self.id && !instance.isClosing) {
          instance.trigger("onDeactivate");

          instance.removeEvents();

          instance.isVisible = false;
        }
      });

      self.isVisible = true;

      if (self.current || self.isIdle) {
        self.update();

        self.updateControls();
      }

      self.trigger("onActivate");

      self.addEvents();
    },

    // Start closing procedure
    // This will start "zoom-out" animation if needed and clean everything up afterwards
    // =================================================================================

    close: function (e, d) {
      var self = this,
        current = self.current,
        effect,
        duration,
        $content,
        domRect,
        opacity,
        start,
        end;

      var done = function () {
        self.cleanUp(e);
      };

      if (self.isClosing) {
        return false;
      }

      self.isClosing = true;

      // If beforeClose callback prevents closing, make sure content is centered
      if (self.trigger("beforeClose", e) === false) {
        self.isClosing = false;

        requestAFrame(function () {
          self.update();
        });

        return false;
      }

      // Remove all events
      // If there are multiple instances, they will be set again by "activate" method
      self.removeEvents();

      $content = current.$content;
      effect = current.opts.animationEffect;
      duration = $.isNumeric(d) ? d : effect ? current.opts.animationDuration : 0;

      current.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated");

      if (e !== true) {
        $.fancybox.stop(current.$slide);
      } else {
        effect = false;
      }

      // Remove other slides
      current.$slide
        .siblings()
        .trigger("onReset")
        .remove();

      // Trigger animations
      if (duration) {
        self.$refs.container
          .removeClass("fancybox-is-open")
          .addClass("fancybox-is-closing")
          .css("transition-duration", duration + "ms");
      }

      // Clean up
      self.hideLoading(current);

      self.hideControls(true);

      self.updateCursor();

      // Check if possible to zoom-out
      if (
        effect === "zoom" &&
        !($content && duration && current.type === "image" && !self.isMoved() && !current.hasError && (end = self.getThumbPos(current)))
      ) {
        effect = "fade";
      }

      if (effect === "zoom") {
        $.fancybox.stop($content);

        domRect = $.fancybox.getTranslate($content);

        start = {
          top: domRect.top,
          left: domRect.left,
          scaleX: domRect.width / end.width,
          scaleY: domRect.height / end.height,
          width: end.width,
          height: end.height
        };

        // Check if we need to animate opacity
        opacity = current.opts.zoomOpacity;

        if (opacity == "auto") {
          opacity = Math.abs(current.width / current.height - end.width / end.height) > 0.1;
        }

        if (opacity) {
          end.opacity = 0;
        }

        $.fancybox.setTranslate($content, start);

        forceRedraw($content);

        $.fancybox.animate($content, end, duration, done);

        return true;
      }

      if (effect && duration) {
        $.fancybox.animate(
          current.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),
          "fancybox-animated fancybox-fx-" + effect,
          duration,
          done
        );
      } else {
        // If skip animation
        if (e === true) {
          setTimeout(done, duration);
        } else {
          done();
        }
      }

      return true;
    },

    // Final adjustments after removing the instance
    // =============================================

    cleanUp: function (e) {
      var self = this,
        instance,
        $focus = self.current.opts.$orig,
        x,
        y;

      self.current.$slide.trigger("onReset");

      self.$refs.container.empty().remove();

      self.trigger("afterClose", e);

      // Place back focus
      if (!!self.current.opts.backFocus) {
        if (!$focus || !$focus.length || !$focus.is(":visible")) {
          $focus = self.$trigger;
        }

        if ($focus && $focus.length) {
          x = window.scrollX;
          y = window.scrollY;

          $focus.trigger("focus");

          $("html, body")
            .scrollTop(y)
            .scrollLeft(x);
        }
      }

      self.current = null;

      // Check if there are other instances
      instance = $.fancybox.getInstance();

      if (instance) {
        instance.activate();
      } else {
        $("body").removeClass("fancybox-active compensate-for-scrollbar");

        $("#fancybox-style-noscroll").remove();
      }
    },

    // Call callback and trigger an event
    // ==================================

    trigger: function (name, slide) {
      var args = Array.prototype.slice.call(arguments, 1),
        self = this,
        obj = slide && slide.opts ? slide : self.current,
        rez;

      if (obj) {
        args.unshift(obj);
      } else {
        obj = self;
      }

      args.unshift(self);

      if ($.isFunction(obj.opts[name])) {
        rez = obj.opts[name].apply(obj, args);
      }

      if (rez === false) {
        return rez;
      }

      if (name === "afterClose" || !self.$refs) {
        $D.trigger(name + ".fb", args);
      } else {
        self.$refs.container.trigger(name + ".fb", args);
      }
    },

    // Update infobar values, navigation button states and reveal caption
    // ==================================================================

    updateControls: function () {
      var self = this,
        current = self.current,
        index = current.index,
        $container = self.$refs.container,
        $caption = self.$refs.caption,
        caption = current.opts.caption;

      // Recalculate content dimensions
      current.$slide.trigger("refresh");

      // Set caption
      if (caption && caption.length) {
        self.$caption = $caption;

        $caption
          .children()
          .eq(0)
          .html(caption);
      } else {
        self.$caption = null;
      }

      if (!self.hasHiddenControls && !self.isIdle) {
        self.showControls();
      }

      // Update info and navigation elements
      $container.find("[data-fancybox-count]").html(self.group.length);
      $container.find("[data-fancybox-index]").html(index + 1);

      $container.find("[data-fancybox-prev]").prop("disabled", !current.opts.loop && index <= 0);
      $container.find("[data-fancybox-next]").prop("disabled", !current.opts.loop && index >= self.group.length - 1);

      if (current.type === "image") {
        // Re-enable buttons; update download button source
        $container
          .find("[data-fancybox-zoom]")
          .show()
          .end()
          .find("[data-fancybox-download]")
          .attr("href", current.opts.image.src || current.src)
          .show();
      } else if (current.opts.toolbar) {
        $container.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
      }

      // Make sure focus is not on disabled button/element
      if ($(document.activeElement).is(":hidden,[disabled]")) {
        self.$refs.container.trigger("focus");
      }
    },

    // Hide toolbar and caption
    // ========================

    hideControls: function (andCaption) {
      var self = this,
        arr = ["infobar", "toolbar", "nav"];

      if (andCaption || !self.current.opts.preventCaptionOverlap) {
        arr.push("caption");
      }

      this.$refs.container.removeClass(
        arr
        .map(function (i) {
          return "fancybox-show-" + i;
        })
        .join(" ")
      );

      this.hasHiddenControls = true;
    },

    showControls: function () {
      var self = this,
        opts = self.current ? self.current.opts : self.opts,
        $container = self.$refs.container;

      self.hasHiddenControls = false;
      self.idleSecondsCounter = 0;

      $container
        .toggleClass("fancybox-show-toolbar", !!(opts.toolbar && opts.buttons))
        .toggleClass("fancybox-show-infobar", !!(opts.infobar && self.group.length > 1))
        .toggleClass("fancybox-show-caption", !!self.$caption)
        .toggleClass("fancybox-show-nav", !!(opts.arrows && self.group.length > 1))
        .toggleClass("fancybox-is-modal", !!opts.modal);
    },

    // Toggle toolbar and caption
    // ==========================

    toggleControls: function () {
      if (this.hasHiddenControls) {
        this.showControls();
      } else {
        this.hideControls();
      }
    }
  });

  $.fancybox = {
    version: "3.5.7",
    defaults: defaults,

    // Get current instance and execute a command.
    //
    // Examples of usage:
    //
    //   $instance = $.fancybox.getInstance();
    //   $.fancybox.getInstance().jumpTo( 1 );
    //   $.fancybox.getInstance( 'jumpTo', 1 );
    //   $.fancybox.getInstance( function() {
    //       console.info( this.currIndex );
    //   });
    // ======================================================

    getInstance: function (command) {
      var instance = $('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
        args = Array.prototype.slice.call(arguments, 1);

      if (instance instanceof FancyBox) {
        if ($.type(command) === "string") {
          instance[command].apply(instance, args);
        } else if ($.type(command) === "function") {
          command.apply(instance, args);
        }

        return instance;
      }

      return false;
    },

    // Create new instance
    // ===================

    open: function (items, opts, index) {
      return new FancyBox(items, opts, index);
    },

    // Close current or all instances
    // ==============================

    close: function (all) {
      var instance = this.getInstance();

      if (instance) {
        instance.close();

        // Try to find and close next instance
        if (all === true) {
          this.close(all);
        }
      }
    },

    // Close all instances and unbind all events
    // =========================================

    destroy: function () {
      this.close(true);

      $D.add("body").off("click.fb-start", "**");
    },

    // Try to detect mobile devices
    // ============================

    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),

    // Detect if 'translate3d' support is available
    // ============================================

    use3d: (function () {
      var div = document.createElement("div");

      return (
        window.getComputedStyle &&
        window.getComputedStyle(div) &&
        window.getComputedStyle(div).getPropertyValue("transform") &&
        !(document.documentMode && document.documentMode < 11)
      );
    })(),

    // Helper function to get current visual state of an element
    // returns array[ top, left, horizontal-scale, vertical-scale, opacity ]
    // =====================================================================

    getTranslate: function ($el) {
      var domRect;

      if (!$el || !$el.length) {
        return false;
      }

      domRect = $el[0].getBoundingClientRect();

      return {
        top: domRect.top || 0,
        left: domRect.left || 0,
        width: domRect.width,
        height: domRect.height,
        opacity: parseFloat($el.css("opacity"))
      };
    },

    // Shortcut for setting "translate3d" properties for element
    // Can set be used to set opacity, too
    // ========================================================

    setTranslate: function ($el, props) {
      var str = "",
        css = {};

      if (!$el || !props) {
        return;
      }

      if (props.left !== undefined || props.top !== undefined) {
        str =
          (props.left === undefined ? $el.position().left : props.left) +
          "px, " +
          (props.top === undefined ? $el.position().top : props.top) +
          "px";

        if (this.use3d) {
          str = "translate3d(" + str + ", 0px)";
        } else {
          str = "translate(" + str + ")";
        }
      }

      if (props.scaleX !== undefined && props.scaleY !== undefined) {
        str += " scale(" + props.scaleX + ", " + props.scaleY + ")";
      } else if (props.scaleX !== undefined) {
        str += " scaleX(" + props.scaleX + ")";
      }

      if (str.length) {
        css.transform = str;
      }

      if (props.opacity !== undefined) {
        css.opacity = props.opacity;
      }

      if (props.width !== undefined) {
        css.width = props.width;
      }

      if (props.height !== undefined) {
        css.height = props.height;
      }

      return $el.css(css);
    },

    // Simple CSS transition handler
    // =============================

    animate: function ($el, to, duration, callback, leaveAnimationName) {
      var self = this,
        from;

      if ($.isFunction(duration)) {
        callback = duration;
        duration = null;
      }

      self.stop($el);

      from = self.getTranslate($el);

      $el.on(transitionEnd, function (e) {
        // Skip events from child elements and z-index change
        if (e && e.originalEvent && (!$el.is(e.originalEvent.target) || e.originalEvent.propertyName == "z-index")) {
          return;
        }

        self.stop($el);

        if ($.isNumeric(duration)) {
          $el.css("transition-duration", "");
        }

        if ($.isPlainObject(to)) {
          if (to.scaleX !== undefined && to.scaleY !== undefined) {
            self.setTranslate($el, {
              top: to.top,
              left: to.left,
              width: from.width * to.scaleX,
              height: from.height * to.scaleY,
              scaleX: 1,
              scaleY: 1
            });
          }
        } else if (leaveAnimationName !== true) {
          $el.removeClass(to);
        }

        if ($.isFunction(callback)) {
          callback(e);
        }
      });

      if ($.isNumeric(duration)) {
        $el.css("transition-duration", duration + "ms");
      }

      // Start animation by changing CSS properties or class name
      if ($.isPlainObject(to)) {
        if (to.scaleX !== undefined && to.scaleY !== undefined) {
          delete to.width;
          delete to.height;

          if ($el.parent().hasClass("fancybox-slide--image")) {
            $el.parent().addClass("fancybox-is-scaling");
          }
        }

        $.fancybox.setTranslate($el, to);
      } else {
        $el.addClass(to);
      }

      // Make sure that `transitionend` callback gets fired
      $el.data(
        "timer",
        setTimeout(function () {
          $el.trigger(transitionEnd);
        }, duration + 33)
      );
    },

    stop: function ($el, callCallback) {
      if ($el && $el.length) {
        clearTimeout($el.data("timer"));

        if (callCallback) {
          $el.trigger(transitionEnd);
        }

        $el.off(transitionEnd).css("transition-duration", "");

        $el.parent().removeClass("fancybox-is-scaling");
      }
    }
  };

  // Default click handler for "fancyboxed" links
  // ============================================

  function _run(e, opts) {
    var items = [],
      index = 0,
      $target,
      value,
      instance;

    // Avoid opening multiple times
    if (e && e.isDefaultPrevented()) {
      return;
    }

    e.preventDefault();

    opts = opts || {};

    if (e && e.data) {
      opts = mergeOpts(e.data.options, opts);
    }

    $target = opts.$target || $(e.currentTarget).trigger("blur");
    instance = $.fancybox.getInstance();

    if (instance && instance.$trigger && instance.$trigger.is($target)) {
      return;
    }

    if (opts.selector) {
      items = $(opts.selector);
    } else {
      // Get all related items and find index for clicked one
      value = $target.attr("data-fancybox") || "";

      if (value) {
        items = e.data ? e.data.items : [];
        items = items.length ? items.filter('[data-fancybox="' + value + '"]') : $('[data-fancybox="' + value + '"]');
      } else {
        items = [$target];
      }
    }

    index = $(items).index($target);

    // Sometimes current item can not be found
    if (index < 0) {
      index = 0;
    }

    instance = $.fancybox.open(items, opts, index);

    // Save last active element
    instance.$trigger = $target;
  }

  // Create a jQuery plugin
  // ======================

  $.fn.fancybox = function (options) {
    var selector;

    options = options || {};
    selector = options.selector || false;

    if (selector) {
      // Use body element instead of document so it executes first
      $("body")
        .off("click.fb-start", selector)
        .on("click.fb-start", selector, {
          options: options
        }, _run);
    } else {
      this.off("click.fb-start").on(
        "click.fb-start", {
          items: this,
          options: options
        },
        _run
      );
    }

    return this;
  };

  // Self initializing plugin for all elements having `data-fancybox` attribute
  // ==========================================================================

  $D.on("click.fb-start", "[data-fancybox]", _run);

  // Enable "trigger elements"
  // =========================

  $D.on("click.fb-start", "[data-fancybox-trigger]", function (e) {
    $('[data-fancybox="' + $(this).attr("data-fancybox-trigger") + '"]')
      .eq($(this).attr("data-fancybox-index") || 0)
      .trigger("click.fb-start", {
        $trigger: $(this)
      });
  });

  // Track focus event for better accessibility styling
  // ==================================================
  (function () {
    var buttonStr = ".fancybox-button",
      focusStr = "fancybox-focus",
      $pressed = null;

    $D.on("mousedown mouseup focus blur", buttonStr, function (e) {
      switch (e.type) {
        case "mousedown":
          $pressed = $(this);
          break;
        case "mouseup":
          $pressed = null;
          break;
        case "focusin":
          $(buttonStr).removeClass(focusStr);

          if (!$(this).is($pressed) && !$(this).is("[disabled]")) {
            $(this).addClass(focusStr);
          }
          break;
        case "focusout":
          $(buttonStr).removeClass(focusStr);
          break;
      }
    });
  })();
})(window, document, jQuery);
// ==========================================================================
//
// Media
// Adds additional media type support
//
// ==========================================================================
(function ($) {
  "use strict";

  // Object containing properties for each media type
  var defaults = {
    youtube: {
      matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
      params: {
        autoplay: 1,
        autohide: 1,
        fs: 1,
        rel: 0,
        hd: 1,
        wmode: "transparent",
        enablejsapi: 1,
        html5: 1
      },
      paramPlace: 8,
      type: "iframe",
      url: "https://www.youtube-nocookie.com/embed/$4",
      thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
    },

    vimeo: {
      matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
      params: {
        autoplay: 1,
        hd: 1,
        show_title: 1,
        show_byline: 1,
        show_portrait: 0,
        fullscreen: 1
      },
      paramPlace: 3,
      type: "iframe",
      url: "//player.vimeo.com/video/$2"
    },

    instagram: {
      matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
      type: "image",
      url: "//$1/p/$2/media/?size=l"
    },

    // Examples:
    // http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
    // https://www.google.com/maps/@37.7852006,-122.4146355,14.65z
    // https://www.google.com/maps/@52.2111123,2.9237542,6.61z?hl=en
    // https://www.google.com/maps/place/Googleplex/@37.4220041,-122.0833494,17z/data=!4m5!3m4!1s0x0:0x6c296c66619367e0!8m2!3d37.4219998!4d-122.0840572
    gmap_place: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
      type: "iframe",
      url: function (rez) {
        return (
          "//maps.google." +
          rez[2] +
          "/?ll=" +
          (rez[9] ? rez[9] + "&z=" + Math.floor(rez[10]) + (rez[12] ? rez[12].replace(/^\//, "&") : "") : rez[12] + "").replace(/\?/, "&") +
          "&output=" +
          (rez[12] && rez[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
        );
      }
    },

    // Examples:
    // https://www.google.com/maps/search/Empire+State+Building/
    // https://www.google.com/maps/search/?api=1&query=centurylink+field
    // https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393
    gmap_search: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
      type: "iframe",
      url: function (rez) {
        return "//maps.google." + rez[2] + "/maps?q=" + rez[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
      }
    }
  };

  // Formats matching url to final form
  var format = function (url, rez, params) {
    if (!url) {
      return;
    }

    params = params || "";

    if ($.type(params) === "object") {
      params = $.param(params, true);
    }

    $.each(rez, function (key, value) {
      url = url.replace("$" + key, value || "");
    });

    if (params.length) {
      url += (url.indexOf("?") > 0 ? "&" : "?") + params;
    }

    return url;
  };

  $(document).on("objectNeedsType.fb", function (e, instance, item) {
    var url = item.src || "",
      type = false,
      media,
      thumb,
      rez,
      params,
      urlParams,
      paramObj,
      provider;

    media = $.extend(true, {}, defaults, item.opts.media);

    // Look for any matching media type
    $.each(media, function (providerName, providerOpts) {
      rez = url.match(providerOpts.matcher);

      if (!rez) {
        return;
      }

      type = providerOpts.type;
      provider = providerName;
      paramObj = {};

      if (providerOpts.paramPlace && rez[providerOpts.paramPlace]) {
        urlParams = rez[providerOpts.paramPlace];

        if (urlParams[0] == "?") {
          urlParams = urlParams.substring(1);
        }

        urlParams = urlParams.split("&");

        for (var m = 0; m < urlParams.length; ++m) {
          var p = urlParams[m].split("=", 2);

          if (p.length == 2) {
            paramObj[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
          }
        }
      }

      params = $.extend(true, {}, providerOpts.params, item.opts[providerName], paramObj);

      url =
        $.type(providerOpts.url) === "function" ? providerOpts.url.call(this, rez, params, item) : format(providerOpts.url, rez, params);

      thumb =
        $.type(providerOpts.thumb) === "function" ? providerOpts.thumb.call(this, rez, params, item) : format(providerOpts.thumb, rez);

      if (providerName === "youtube") {
        url = url.replace(/&t=((\d+)m)?(\d+)s/, function (match, p1, m, s) {
          return "&start=" + ((m ? parseInt(m, 10) * 60 : 0) + parseInt(s, 10));
        });
      } else if (providerName === "vimeo") {
        url = url.replace("&%23", "#");
      }

      return false;
    });

    // If it is found, then change content type and update the url

    if (type) {
      if (!item.opts.thumb && !(item.opts.$thumb && item.opts.$thumb.length)) {
        item.opts.thumb = thumb;
      }

      if (type === "iframe") {
        item.opts = $.extend(true, item.opts, {
          iframe: {
            preload: false,
            attr: {
              scrolling: "no"
            }
          }
        });
      }

      $.extend(item, {
        type: type,
        src: url,
        origSrc: item.src,
        contentSource: provider,
        contentType: type === "image" ? "image" : provider == "gmap_place" || provider == "gmap_search" ? "map" : "video"
      });
    } else if (url) {
      item.type = item.opts.defaultType;
    }
  });

  // Load YouTube/Video API on request to detect when video finished playing
  var VideoAPILoader = {
    youtube: {
      src: "https://www.youtube.com/iframe_api",
      class: "YT",
      loading: false,
      loaded: false
    },

    vimeo: {
      src: "https://player.vimeo.com/api/player.js",
      class: "Vimeo",
      loading: false,
      loaded: false
    },

    load: function (vendor) {
      var _this = this,
        script;

      if (this[vendor].loaded) {
        setTimeout(function () {
          _this.done(vendor);
        });
        return;
      }

      if (this[vendor].loading) {
        return;
      }

      this[vendor].loading = true;

      script = document.createElement("script");
      script.type = "text/javascript";
      script.src = this[vendor].src;

      if (vendor === "youtube") {
        window.onYouTubeIframeAPIReady = function () {
          _this[vendor].loaded = true;
          _this.done(vendor);
        };
      } else {
        script.onload = function () {
          _this[vendor].loaded = true;
          _this.done(vendor);
        };
      }

      document.body.appendChild(script);
    },
    done: function (vendor) {
      var instance, $el, player;

      if (vendor === "youtube") {
        delete window.onYouTubeIframeAPIReady;
      }

      instance = $.fancybox.getInstance();

      if (instance) {
        $el = instance.current.$content.find("iframe");

        if (vendor === "youtube" && YT !== undefined && YT) {
          player = new YT.Player($el.attr("id"), {
            events: {
              onStateChange: function (e) {
                if (e.data == 0) {
                  instance.next();
                }
              }
            }
          });
        } else if (vendor === "vimeo" && Vimeo !== undefined && Vimeo) {
          player = new Vimeo.Player($el);

          player.on("ended", function () {
            instance.next();
          });
        }
      }
    }
  };

  $(document).on({
    "afterShow.fb": function (e, instance, current) {
      if (instance.group.length > 1 && (current.contentSource === "youtube" || current.contentSource === "vimeo")) {
        VideoAPILoader.load(current.contentSource);
      }
    }
  });
})(jQuery);
// ==========================================================================
//
// Guestures
// Adds touch guestures, handles click and tap events
//
// ==========================================================================
(function (window, document, $) {
  "use strict";

  var requestAFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      // if all else fails, use setTimeout
      function (callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  var cancelAFrame = (function () {
    return (
      window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      window.oCancelAnimationFrame ||
      function (id) {
        window.clearTimeout(id);
      }
    );
  })();

  var getPointerXY = function (e) {
    var result = [];

    e = e.originalEvent || e || window.e;
    e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];

    for (var key in e) {
      if (e[key].pageX) {
        result.push({
          x: e[key].pageX,
          y: e[key].pageY
        });
      } else if (e[key].clientX) {
        result.push({
          x: e[key].clientX,
          y: e[key].clientY
        });
      }
    }

    return result;
  };

  var distance = function (point2, point1, what) {
    if (!point1 || !point2) {
      return 0;
    }

    if (what === "x") {
      return point2.x - point1.x;
    } else if (what === "y") {
      return point2.y - point1.y;
    }

    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
  };

  var isClickable = function ($el) {
    if (
      $el.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') ||
      $.isFunction($el.get(0).onclick) ||
      $el.data("selectable")
    ) {
      return true;
    }

    // Check for attributes like data-fancybox-next or data-fancybox-close
    for (var i = 0, atts = $el[0].attributes, n = atts.length; i < n; i++) {
      if (atts[i].nodeName.substr(0, 14) === "data-fancybox-") {
        return true;
      }
    }

    return false;
  };

  var hasScrollbars = function (el) {
    var overflowY = window.getComputedStyle(el)["overflow-y"],
      overflowX = window.getComputedStyle(el)["overflow-x"],
      vertical = (overflowY === "scroll" || overflowY === "auto") && el.scrollHeight > el.clientHeight,
      horizontal = (overflowX === "scroll" || overflowX === "auto") && el.scrollWidth > el.clientWidth;

    return vertical || horizontal;
  };

  var isScrollable = function ($el) {
    var rez = false;

    while (true) {
      rez = hasScrollbars($el.get(0));

      if (rez) {
        break;
      }

      $el = $el.parent();

      if (!$el.length || $el.hasClass("fancybox-stage") || $el.is("body")) {
        break;
      }
    }

    return rez;
  };

  var Guestures = function (instance) {
    var self = this;

    self.instance = instance;

    self.$bg = instance.$refs.bg;
    self.$stage = instance.$refs.stage;
    self.$container = instance.$refs.container;

    self.destroy();

    self.$container.on("touchstart.fb.touch mousedown.fb.touch", $.proxy(self, "ontouchstart"));
  };

  Guestures.prototype.destroy = function () {
    var self = this;

    self.$container.off(".fb.touch");

    $(document).off(".fb.touch");

    if (self.requestId) {
      cancelAFrame(self.requestId);
      self.requestId = null;
    }

    if (self.tapped) {
      clearTimeout(self.tapped);
      self.tapped = null;
    }
  };

  Guestures.prototype.ontouchstart = function (e) {
    var self = this,
      $target = $(e.target),
      instance = self.instance,
      current = instance.current,
      $slide = current.$slide,
      $content = current.$content,
      isTouchDevice = e.type == "touchstart";

    // Do not respond to both (touch and mouse) events
    if (isTouchDevice) {
      self.$container.off("mousedown.fb.touch");
    }

    // Ignore right click
    if (e.originalEvent && e.originalEvent.button == 2) {
      return;
    }

    // Ignore taping on links, buttons, input elements
    if (!$slide.length || !$target.length || isClickable($target) || isClickable($target.parent())) {
      return;
    }
    // Ignore clicks on the scrollbar
    if (!$target.is("img") && e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left) {
      return;
    }

    // Ignore clicks while zooming or closing
    if (!current || instance.isAnimating || current.$slide.hasClass("fancybox-animated")) {
      e.stopPropagation();
      e.preventDefault();

      return;
    }

    self.realPoints = self.startPoints = getPointerXY(e);

    if (!self.startPoints.length) {
      return;
    }

    // Allow other scripts to catch touch event if "touch" is set to false
    if (current.touch) {
      e.stopPropagation();
    }

    self.startEvent = e;

    self.canTap = true;
    self.$target = $target;
    self.$content = $content;
    self.opts = current.opts.touch;

    self.isPanning = false;
    self.isSwiping = false;
    self.isZooming = false;
    self.isScrolling = false;
    self.canPan = instance.canPan();

    self.startTime = new Date().getTime();
    self.distanceX = self.distanceY = self.distance = 0;

    self.canvasWidth = Math.round($slide[0].clientWidth);
    self.canvasHeight = Math.round($slide[0].clientHeight);

    self.contentLastPos = null;
    self.contentStartPos = $.fancybox.getTranslate(self.$content) || {
      top: 0,
      left: 0
    };
    self.sliderStartPos = $.fancybox.getTranslate($slide);

    // Since position will be absolute, but we need to make it relative to the stage
    self.stagePos = $.fancybox.getTranslate(instance.$refs.stage);

    self.sliderStartPos.top -= self.stagePos.top;
    self.sliderStartPos.left -= self.stagePos.left;

    self.contentStartPos.top -= self.stagePos.top;
    self.contentStartPos.left -= self.stagePos.left;

    $(document)
      .off(".fb.touch")
      .on(isTouchDevice ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", $.proxy(self, "ontouchend"))
      .on(isTouchDevice ? "touchmove.fb.touch" : "mousemove.fb.touch", $.proxy(self, "ontouchmove"));

    if ($.fancybox.isMobile) {
      document.addEventListener("scroll", self.onscroll, true);
    }

    // Skip if clicked outside the sliding area
    if (!(self.opts || self.canPan) || !($target.is(self.$stage) || self.$stage.find($target).length)) {
      if ($target.is(".fancybox-image")) {
        e.preventDefault();
      }

      if (!($.fancybox.isMobile && $target.parents(".fancybox-caption").length)) {
        return;
      }
    }

    self.isScrollable = isScrollable($target) || isScrollable($target.parent());

    // Check if element is scrollable and try to prevent default behavior (scrolling)
    if (!($.fancybox.isMobile && self.isScrollable)) {
      e.preventDefault();
    }

    // One finger or mouse click - swipe or pan an image
    if (self.startPoints.length === 1 || current.hasError) {
      if (self.canPan) {
        $.fancybox.stop(self.$content);

        self.isPanning = true;
      } else {
        self.isSwiping = true;
      }

      self.$container.addClass("fancybox-is-grabbing");
    }

    // Two fingers - zoom image
    if (self.startPoints.length === 2 && current.type === "image" && (current.isLoaded || current.$ghost)) {
      self.canTap = false;
      self.isSwiping = false;
      self.isPanning = false;

      self.isZooming = true;

      $.fancybox.stop(self.$content);

      self.centerPointStartX = (self.startPoints[0].x + self.startPoints[1].x) * 0.5 - $(window).scrollLeft();
      self.centerPointStartY = (self.startPoints[0].y + self.startPoints[1].y) * 0.5 - $(window).scrollTop();

      self.percentageOfImageAtPinchPointX = (self.centerPointStartX - self.contentStartPos.left) / self.contentStartPos.width;
      self.percentageOfImageAtPinchPointY = (self.centerPointStartY - self.contentStartPos.top) / self.contentStartPos.height;

      self.startDistanceBetweenFingers = distance(self.startPoints[0], self.startPoints[1]);
    }
  };

  Guestures.prototype.onscroll = function (e) {
    var self = this;

    self.isScrolling = true;

    document.removeEventListener("scroll", self.onscroll, true);
  };

  Guestures.prototype.ontouchmove = function (e) {
    var self = this;

    // Make sure user has not released over iframe or disabled element
    if (e.originalEvent.buttons !== undefined && e.originalEvent.buttons === 0) {
      self.ontouchend(e);
      return;
    }

    if (self.isScrolling) {
      self.canTap = false;
      return;
    }

    self.newPoints = getPointerXY(e);

    if (!(self.opts || self.canPan) || !self.newPoints.length || !self.newPoints.length) {
      return;
    }

    if (!(self.isSwiping && self.isSwiping === true)) {
      e.preventDefault();
    }

    self.distanceX = distance(self.newPoints[0], self.startPoints[0], "x");
    self.distanceY = distance(self.newPoints[0], self.startPoints[0], "y");

    self.distance = distance(self.newPoints[0], self.startPoints[0]);

    // Skip false ontouchmove events (Chrome)
    if (self.distance > 0) {
      if (self.isSwiping) {
        self.onSwipe(e);
      } else if (self.isPanning) {
        self.onPan();
      } else if (self.isZooming) {
        self.onZoom();
      }
    }
  };

  Guestures.prototype.onSwipe = function (e) {
    var self = this,
      instance = self.instance,
      swiping = self.isSwiping,
      left = self.sliderStartPos.left || 0,
      angle;

    // If direction is not yet determined
    if (swiping === true) {
      // We need at least 10px distance to correctly calculate an angle
      if (Math.abs(self.distance) > 10) {
        self.canTap = false;

        if (instance.group.length < 2 && self.opts.vertical) {
          self.isSwiping = "y";
        } else if (instance.isDragging || self.opts.vertical === false || (self.opts.vertical === "auto" && $(window).width() > 800)) {
          self.isSwiping = "x";
        } else {
          angle = Math.abs((Math.atan2(self.distanceY, self.distanceX) * 180) / Math.PI);

          self.isSwiping = angle > 45 && angle < 135 ? "y" : "x";
        }

        if (self.isSwiping === "y" && $.fancybox.isMobile && self.isScrollable) {
          self.isScrolling = true;

          return;
        }

        instance.isDragging = self.isSwiping;

        // Reset points to avoid jumping, because we dropped first swipes to calculate the angle
        self.startPoints = self.newPoints;

        $.each(instance.slides, function (index, slide) {
          var slidePos, stagePos;

          $.fancybox.stop(slide.$slide);

          slidePos = $.fancybox.getTranslate(slide.$slide);
          stagePos = $.fancybox.getTranslate(instance.$refs.stage);

          slide.$slide
            .css({
              transform: "",
              opacity: "",
              "transition-duration": ""
            })
            .removeClass("fancybox-animated")
            .removeClass(function (index, className) {
              return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
            });

          if (slide.pos === instance.current.pos) {
            self.sliderStartPos.top = slidePos.top - stagePos.top;
            self.sliderStartPos.left = slidePos.left - stagePos.left;
          }

          $.fancybox.setTranslate(slide.$slide, {
            top: slidePos.top - stagePos.top,
            left: slidePos.left - stagePos.left
          });
        });

        // Stop slideshow
        if (instance.SlideShow && instance.SlideShow.isActive) {
          instance.SlideShow.stop();
        }
      }

      return;
    }

    // Sticky edges
    if (swiping == "x") {
      if (
        self.distanceX > 0 &&
        (self.instance.group.length < 2 || (self.instance.current.index === 0 && !self.instance.current.opts.loop))
      ) {
        left = left + Math.pow(self.distanceX, 0.8);
      } else if (
        self.distanceX < 0 &&
        (self.instance.group.length < 2 ||
          (self.instance.current.index === self.instance.group.length - 1 && !self.instance.current.opts.loop))
      ) {
        left = left - Math.pow(-self.distanceX, 0.8);
      } else {
        left = left + self.distanceX;
      }
    }

    self.sliderLastPos = {
      top: swiping == "x" ? 0 : self.sliderStartPos.top + self.distanceY,
      left: left
    };

    if (self.requestId) {
      cancelAFrame(self.requestId);

      self.requestId = null;
    }

    self.requestId = requestAFrame(function () {
      if (self.sliderLastPos) {
        $.each(self.instance.slides, function (index, slide) {
          var pos = slide.pos - self.instance.currPos;

          $.fancybox.setTranslate(slide.$slide, {
            top: self.sliderLastPos.top,
            left: self.sliderLastPos.left + pos * self.canvasWidth + pos * slide.opts.gutter
          });
        });

        self.$container.addClass("fancybox-is-sliding");
      }
    });
  };

  Guestures.prototype.onPan = function () {
    var self = this;

    // Prevent accidental movement (sometimes, when tapping casually, finger can move a bit)
    if (distance(self.newPoints[0], self.realPoints[0]) < ($.fancybox.isMobile ? 10 : 5)) {
      self.startPoints = self.newPoints;
      return;
    }

    self.canTap = false;

    self.contentLastPos = self.limitMovement();

    if (self.requestId) {
      cancelAFrame(self.requestId);
    }

    self.requestId = requestAFrame(function () {
      $.fancybox.setTranslate(self.$content, self.contentLastPos);
    });
  };

  // Make panning sticky to the edges
  Guestures.prototype.limitMovement = function () {
    var self = this;

    var canvasWidth = self.canvasWidth;
    var canvasHeight = self.canvasHeight;

    var distanceX = self.distanceX;
    var distanceY = self.distanceY;

    var contentStartPos = self.contentStartPos;

    var currentOffsetX = contentStartPos.left;
    var currentOffsetY = contentStartPos.top;

    var currentWidth = contentStartPos.width;
    var currentHeight = contentStartPos.height;

    var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY, newOffsetX, newOffsetY;

    if (currentWidth > canvasWidth) {
      newOffsetX = currentOffsetX + distanceX;
    } else {
      newOffsetX = currentOffsetX;
    }

    newOffsetY = currentOffsetY + distanceY;

    // Slow down proportionally to traveled distance
    minTranslateX = Math.max(0, canvasWidth * 0.5 - currentWidth * 0.5);
    minTranslateY = Math.max(0, canvasHeight * 0.5 - currentHeight * 0.5);

    maxTranslateX = Math.min(canvasWidth - currentWidth, canvasWidth * 0.5 - currentWidth * 0.5);
    maxTranslateY = Math.min(canvasHeight - currentHeight, canvasHeight * 0.5 - currentHeight * 0.5);

    //   ->
    if (distanceX > 0 && newOffsetX > minTranslateX) {
      newOffsetX = minTranslateX - 1 + Math.pow(-minTranslateX + currentOffsetX + distanceX, 0.8) || 0;
    }

    //    <-
    if (distanceX < 0 && newOffsetX < maxTranslateX) {
      newOffsetX = maxTranslateX + 1 - Math.pow(maxTranslateX - currentOffsetX - distanceX, 0.8) || 0;
    }

    //   \/
    if (distanceY > 0 && newOffsetY > minTranslateY) {
      newOffsetY = minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8) || 0;
    }

    //   /\
    if (distanceY < 0 && newOffsetY < maxTranslateY) {
      newOffsetY = maxTranslateY + 1 - Math.pow(maxTranslateY - currentOffsetY - distanceY, 0.8) || 0;
    }

    return {
      top: newOffsetY,
      left: newOffsetX
    };
  };

  Guestures.prototype.limitPosition = function (newOffsetX, newOffsetY, newWidth, newHeight) {
    var self = this;

    var canvasWidth = self.canvasWidth;
    var canvasHeight = self.canvasHeight;

    if (newWidth > canvasWidth) {
      newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
      newOffsetX = newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth : newOffsetX;
    } else {
      // Center horizontally
      newOffsetX = Math.max(0, canvasWidth / 2 - newWidth / 2);
    }

    if (newHeight > canvasHeight) {
      newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
      newOffsetY = newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight : newOffsetY;
    } else {
      // Center vertically
      newOffsetY = Math.max(0, canvasHeight / 2 - newHeight / 2);
    }

    return {
      top: newOffsetY,
      left: newOffsetX
    };
  };

  Guestures.prototype.onZoom = function () {
    var self = this;

    // Calculate current distance between points to get pinch ratio and new width and height
    var contentStartPos = self.contentStartPos;

    var currentWidth = contentStartPos.width;
    var currentHeight = contentStartPos.height;

    var currentOffsetX = contentStartPos.left;
    var currentOffsetY = contentStartPos.top;

    var endDistanceBetweenFingers = distance(self.newPoints[0], self.newPoints[1]);

    var pinchRatio = endDistanceBetweenFingers / self.startDistanceBetweenFingers;

    var newWidth = Math.floor(currentWidth * pinchRatio);
    var newHeight = Math.floor(currentHeight * pinchRatio);

    // This is the translation due to pinch-zooming
    var translateFromZoomingX = (currentWidth - newWidth) * self.percentageOfImageAtPinchPointX;
    var translateFromZoomingY = (currentHeight - newHeight) * self.percentageOfImageAtPinchPointY;

    // Point between the two touches
    var centerPointEndX = (self.newPoints[0].x + self.newPoints[1].x) / 2 - $(window).scrollLeft();
    var centerPointEndY = (self.newPoints[0].y + self.newPoints[1].y) / 2 - $(window).scrollTop();

    // And this is the translation due to translation of the centerpoint
    // between the two fingers
    var translateFromTranslatingX = centerPointEndX - self.centerPointStartX;
    var translateFromTranslatingY = centerPointEndY - self.centerPointStartY;

    // The new offset is the old/current one plus the total translation
    var newOffsetX = currentOffsetX + (translateFromZoomingX + translateFromTranslatingX);
    var newOffsetY = currentOffsetY + (translateFromZoomingY + translateFromTranslatingY);

    var newPos = {
      top: newOffsetY,
      left: newOffsetX,
      scaleX: pinchRatio,
      scaleY: pinchRatio
    };

    self.canTap = false;

    self.newWidth = newWidth;
    self.newHeight = newHeight;

    self.contentLastPos = newPos;

    if (self.requestId) {
      cancelAFrame(self.requestId);
    }

    self.requestId = requestAFrame(function () {
      $.fancybox.setTranslate(self.$content, self.contentLastPos);
    });
  };

  Guestures.prototype.ontouchend = function (e) {
    var self = this;

    var swiping = self.isSwiping;
    var panning = self.isPanning;
    var zooming = self.isZooming;
    var scrolling = self.isScrolling;

    self.endPoints = getPointerXY(e);
    self.dMs = Math.max(new Date().getTime() - self.startTime, 1);

    self.$container.removeClass("fancybox-is-grabbing");

    $(document).off(".fb.touch");

    document.removeEventListener("scroll", self.onscroll, true);

    if (self.requestId) {
      cancelAFrame(self.requestId);

      self.requestId = null;
    }

    self.isSwiping = false;
    self.isPanning = false;
    self.isZooming = false;
    self.isScrolling = false;

    self.instance.isDragging = false;

    if (self.canTap) {
      return self.onTap(e);
    }

    self.speed = 100;

    // Speed in px/ms
    self.velocityX = (self.distanceX / self.dMs) * 0.5;
    self.velocityY = (self.distanceY / self.dMs) * 0.5;

    if (panning) {
      self.endPanning();
    } else if (zooming) {
      self.endZooming();
    } else {
      self.endSwiping(swiping, scrolling);
    }

    return;
  };

  Guestures.prototype.endSwiping = function (swiping, scrolling) {
    var self = this,
      ret = false,
      len = self.instance.group.length,
      distanceX = Math.abs(self.distanceX),
      canAdvance = swiping == "x" && len > 1 && ((self.dMs > 130 && distanceX > 10) || distanceX > 50),
      speedX = 300;

    self.sliderLastPos = null;

    // Close if swiped vertically / navigate if horizontally
    if (swiping == "y" && !scrolling && Math.abs(self.distanceY) > 50) {
      // Continue vertical movement
      $.fancybox.animate(
        self.instance.current.$slide, {
          top: self.sliderStartPos.top + self.distanceY + self.velocityY * 150,
          opacity: 0
        },
        200
      );
      ret = self.instance.close(true, 250);
    } else if (canAdvance && self.distanceX > 0) {
      ret = self.instance.previous(speedX);
    } else if (canAdvance && self.distanceX < 0) {
      ret = self.instance.next(speedX);
    }

    if (ret === false && (swiping == "x" || swiping == "y")) {
      self.instance.centerSlide(200);
    }

    self.$container.removeClass("fancybox-is-sliding");
  };

  // Limit panning from edges
  // ========================
  Guestures.prototype.endPanning = function () {
    var self = this,
      newOffsetX,
      newOffsetY,
      newPos;

    if (!self.contentLastPos) {
      return;
    }

    if (self.opts.momentum === false || self.dMs > 350) {
      newOffsetX = self.contentLastPos.left;
      newOffsetY = self.contentLastPos.top;
    } else {
      // Continue movement
      newOffsetX = self.contentLastPos.left + self.velocityX * 500;
      newOffsetY = self.contentLastPos.top + self.velocityY * 500;
    }

    newPos = self.limitPosition(newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height);

    newPos.width = self.contentStartPos.width;
    newPos.height = self.contentStartPos.height;

    $.fancybox.animate(self.$content, newPos, 366);
  };

  Guestures.prototype.endZooming = function () {
    var self = this;

    var current = self.instance.current;

    var newOffsetX, newOffsetY, newPos, reset;

    var newWidth = self.newWidth;
    var newHeight = self.newHeight;

    if (!self.contentLastPos) {
      return;
    }

    newOffsetX = self.contentLastPos.left;
    newOffsetY = self.contentLastPos.top;

    reset = {
      top: newOffsetY,
      left: newOffsetX,
      width: newWidth,
      height: newHeight,
      scaleX: 1,
      scaleY: 1
    };

    // Reset scalex/scaleY values; this helps for perfomance and does not break animation
    $.fancybox.setTranslate(self.$content, reset);

    if (newWidth < self.canvasWidth && newHeight < self.canvasHeight) {
      self.instance.scaleToFit(150);
    } else if (newWidth > current.width || newHeight > current.height) {
      self.instance.scaleToActual(self.centerPointStartX, self.centerPointStartY, 150);
    } else {
      newPos = self.limitPosition(newOffsetX, newOffsetY, newWidth, newHeight);

      $.fancybox.animate(self.$content, newPos, 150);
    }
  };

  Guestures.prototype.onTap = function (e) {
    var self = this;
    var $target = $(e.target);

    var instance = self.instance;
    var current = instance.current;

    var endPoints = (e && getPointerXY(e)) || self.startPoints;

    var tapX = endPoints[0] ? endPoints[0].x - $(window).scrollLeft() - self.stagePos.left : 0;
    var tapY = endPoints[0] ? endPoints[0].y - $(window).scrollTop() - self.stagePos.top : 0;

    var where;

    var process = function (prefix) {
      var action = current.opts[prefix];

      if ($.isFunction(action)) {
        action = action.apply(instance, [current, e]);
      }

      if (!action) {
        return;
      }

      switch (action) {
        case "close":
          instance.close(self.startEvent);

          break;

        case "toggleControls":
          instance.toggleControls();

          break;

        case "next":
          instance.next();

          break;

        case "nextOrClose":
          if (instance.group.length > 1) {
            instance.next();
          } else {
            instance.close(self.startEvent);
          }

          break;

        case "zoom":
          if (current.type == "image" && (current.isLoaded || current.$ghost)) {
            if (instance.canPan()) {
              instance.scaleToFit();
            } else if (instance.isScaledDown()) {
              instance.scaleToActual(tapX, tapY);
            } else if (instance.group.length < 2) {
              instance.close(self.startEvent);
            }
          }

          break;
      }
    };

    // Ignore right click
    if (e.originalEvent && e.originalEvent.button == 2) {
      return;
    }

    // Skip if clicked on the scrollbar
    if (!$target.is("img") && tapX > $target[0].clientWidth + $target.offset().left) {
      return;
    }

    // Check where is clicked
    if ($target.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) {
      where = "Outside";
    } else if ($target.is(".fancybox-slide")) {
      where = "Slide";
    } else if (
      instance.current.$content &&
      instance.current.$content
      .find($target)
      .addBack()
      .filter($target).length
    ) {
      where = "Content";
    } else {
      return;
    }

    // Check if this is a double tap
    if (self.tapped) {
      // Stop previously created single tap
      clearTimeout(self.tapped);
      self.tapped = null;

      // Skip if distance between taps is too big
      if (Math.abs(tapX - self.tapX) > 50 || Math.abs(tapY - self.tapY) > 50) {
        return this;
      }

      // OK, now we assume that this is a double-tap
      process("dblclick" + where);
    } else {
      // Single tap will be processed if user has not clicked second time within 300ms
      // or there is no need to wait for double-tap
      self.tapX = tapX;
      self.tapY = tapY;

      if (current.opts["dblclick" + where] && current.opts["dblclick" + where] !== current.opts["click" + where]) {
        self.tapped = setTimeout(function () {
          self.tapped = null;

          if (!instance.isAnimating) {
            process("click" + where);
          }
        }, 500);
      } else {
        process("click" + where);
      }
    }

    return this;
  };

  $(document)
    .on("onActivate.fb", function (e, instance) {
      if (instance && !instance.Guestures) {
        instance.Guestures = new Guestures(instance);
      }
    })
    .on("beforeClose.fb", function (e, instance) {
      if (instance && instance.Guestures) {
        instance.Guestures.destroy();
      }
    });
})(window, document, jQuery);
// ==========================================================================
//
// SlideShow
// Enables slideshow functionality
//
// Example of usage:
// $.fancybox.getInstance().SlideShow.start()
//
// ==========================================================================
(function (document, $) {
  "use strict";

  $.extend(true, $.fancybox.defaults, {
    btnTpl: {
      slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg>' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg>' +
        "</button>"
    },
    slideShow: {
      autoStart: false,
      speed: 3000,
      progress: true
    }
  });

  var SlideShow = function (instance) {
    this.instance = instance;
    this.init();
  };

  $.extend(SlideShow.prototype, {
    timer: null,
    isActive: false,
    $button: null,

    init: function () {
      var self = this,
        instance = self.instance,
        opts = instance.group[instance.currIndex].opts.slideShow;

      self.$button = instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
        self.toggle();
      });

      if (instance.group.length < 2 || !opts) {
        self.$button.hide();
      } else if (opts.progress) {
        self.$progress = $('<div class="fancybox-progress"></div>').appendTo(instance.$refs.inner);
      }
    },

    set: function (force) {
      var self = this,
        instance = self.instance,
        current = instance.current;

      // Check if reached last element
      if (current && (force === true || current.opts.loop || instance.currIndex < instance.group.length - 1)) {
        if (self.isActive && current.contentType !== "video") {
          if (self.$progress) {
            $.fancybox.animate(self.$progress.show(), {
              scaleX: 1
            }, current.opts.slideShow.speed);
          }

          self.timer = setTimeout(function () {
            if (!instance.current.opts.loop && instance.current.index == instance.group.length - 1) {
              instance.jumpTo(0);
            } else {
              instance.next();
            }
          }, current.opts.slideShow.speed);
        }
      } else {
        self.stop();
        instance.idleSecondsCounter = 0;
        instance.showControls();
      }
    },

    clear: function () {
      var self = this;

      clearTimeout(self.timer);

      self.timer = null;

      if (self.$progress) {
        self.$progress.removeAttr("style").hide();
      }
    },

    start: function () {
      var self = this,
        current = self.instance.current;

      if (current) {
        self.$button
          .attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_STOP)
          .removeClass("fancybox-button--play")
          .addClass("fancybox-button--pause");

        self.isActive = true;

        if (current.isComplete) {
          self.set(true);
        }

        self.instance.trigger("onSlideShowChange", true);
      }
    },

    stop: function () {
      var self = this,
        current = self.instance.current;

      self.clear();

      self.$button
        .attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_START)
        .removeClass("fancybox-button--pause")
        .addClass("fancybox-button--play");

      self.isActive = false;

      self.instance.trigger("onSlideShowChange", false);

      if (self.$progress) {
        self.$progress.removeAttr("style").hide();
      }
    },

    toggle: function () {
      var self = this;

      if (self.isActive) {
        self.stop();
      } else {
        self.start();
      }
    }
  });

  $(document).on({
    "onInit.fb": function (e, instance) {
      if (instance && !instance.SlideShow) {
        instance.SlideShow = new SlideShow(instance);
      }
    },

    "beforeShow.fb": function (e, instance, current, firstRun) {
      var SlideShow = instance && instance.SlideShow;

      if (firstRun) {
        if (SlideShow && current.opts.slideShow.autoStart) {
          SlideShow.start();
        }
      } else if (SlideShow && SlideShow.isActive) {
        SlideShow.clear();
      }
    },

    "afterShow.fb": function (e, instance, current) {
      var SlideShow = instance && instance.SlideShow;

      if (SlideShow && SlideShow.isActive) {
        SlideShow.set();
      }
    },

    "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
      var SlideShow = instance && instance.SlideShow;

      // "P" or Spacebar
      if (SlideShow && current.opts.slideShow && (keycode === 80 || keycode === 32) && !$(document.activeElement).is("button,a,input")) {
        keypress.preventDefault();

        SlideShow.toggle();
      }
    },

    "beforeClose.fb onDeactivate.fb": function (e, instance) {
      var SlideShow = instance && instance.SlideShow;

      if (SlideShow) {
        SlideShow.stop();
      }
    }
  });

  // Page Visibility API to pause slideshow when window is not active
  $(document).on("visibilitychange", function () {
    var instance = $.fancybox.getInstance(),
      SlideShow = instance && instance.SlideShow;

    if (SlideShow && SlideShow.isActive) {
      if (document.hidden) {
        SlideShow.clear();
      } else {
        SlideShow.set();
      }
    }
  });
})(document, jQuery);
// ==========================================================================
//
// FullScreen
// Adds fullscreen functionality
//
// ==========================================================================
(function (document, $) {
  "use strict";

  // Collection of methods supported by user browser
  var fn = (function () {
    var fnMap = [
      ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
      // new WebKit
      [
        "webkitRequestFullscreen",
        "webkitExitFullscreen",
        "webkitFullscreenElement",
        "webkitFullscreenEnabled",
        "webkitfullscreenchange",
        "webkitfullscreenerror"
      ],
      // old WebKit (Safari 5.1)
      [
        "webkitRequestFullScreen",
        "webkitCancelFullScreen",
        "webkitCurrentFullScreenElement",
        "webkitCancelFullScreen",
        "webkitfullscreenchange",
        "webkitfullscreenerror"
      ],
      [
        "mozRequestFullScreen",
        "mozCancelFullScreen",
        "mozFullScreenElement",
        "mozFullScreenEnabled",
        "mozfullscreenchange",
        "mozfullscreenerror"
      ],
      ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
    ];

    var ret = {};

    for (var i = 0; i < fnMap.length; i++) {
      var val = fnMap[i];

      if (val && val[1] in document) {
        for (var j = 0; j < val.length; j++) {
          ret[fnMap[0][j]] = val[j];
        }

        return ret;
      }
    }

    return false;
  })();

  if (fn) {
    var FullScreen = {
      request: function (elem) {
        elem = elem || document.documentElement;

        elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT);
      },
      exit: function () {
        document[fn.exitFullscreen]();
      },
      toggle: function (elem) {
        elem = elem || document.documentElement;

        if (this.isFullscreen()) {
          this.exit();
        } else {
          this.request(elem);
        }
      },
      isFullscreen: function () {
        return Boolean(document[fn.fullscreenElement]);
      },
      enabled: function () {
        return Boolean(document[fn.fullscreenEnabled]);
      }
    };

    $.extend(true, $.fancybox.defaults, {
      btnTpl: {
        fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg>' +
          "</button>"
      },
      fullScreen: {
        autoStart: false
      }
    });

    $(document).on(fn.fullscreenchange, function () {
      var isFullscreen = FullScreen.isFullscreen(),
        instance = $.fancybox.getInstance();

      if (instance) {
        // If image is zooming, then force to stop and reposition properly
        if (instance.current && instance.current.type === "image" && instance.isAnimating) {
          instance.isAnimating = false;

          instance.update(true, true, 0);

          if (!instance.isComplete) {
            instance.complete();
          }
        }

        instance.trigger("onFullscreenChange", isFullscreen);

        instance.$refs.container.toggleClass("fancybox-is-fullscreen", isFullscreen);

        instance.$refs.toolbar
          .find("[data-fancybox-fullscreen]")
          .toggleClass("fancybox-button--fsenter", !isFullscreen)
          .toggleClass("fancybox-button--fsexit", isFullscreen);
      }
    });
  }

  $(document).on({
    "onInit.fb": function (e, instance) {
      var $container;

      if (!fn) {
        instance.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();

        return;
      }

      if (instance && instance.group[instance.currIndex].opts.fullScreen) {
        $container = instance.$refs.container;

        $container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (e) {
          e.stopPropagation();
          e.preventDefault();

          FullScreen.toggle();
        });

        if (instance.opts.fullScreen && instance.opts.fullScreen.autoStart === true) {
          FullScreen.request();
        }

        // Expose API
        instance.FullScreen = FullScreen;
      } else if (instance) {
        instance.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
      }
    },

    "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
      // "F"
      if (instance && instance.FullScreen && keycode === 70) {
        keypress.preventDefault();

        instance.FullScreen.toggle();
      }
    },

    "beforeClose.fb": function (e, instance) {
      if (instance && instance.FullScreen && instance.$refs.container.hasClass("fancybox-is-fullscreen")) {
        FullScreen.exit();
      }
    }
  });
})(document, jQuery);
// ==========================================================================
//
// Thumbs
// Displays thumbnails in a grid
//
// ==========================================================================
(function (document, $) {
  "use strict";

  var CLASS = "fancybox-thumbs",
    CLASS_ACTIVE = CLASS + "-active";

  // Make sure there are default values
  $.fancybox.defaults = $.extend(
    true, {
      btnTpl: {
        thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg>' +
          "</button>"
      },
      thumbs: {
        autoStart: false, // Display thumbnails on opening
        hideOnClose: true, // Hide thumbnail grid when closing animation starts
        parentEl: ".fancybox-container", // Container is injected into this element
        axis: "y" // Vertical (y) or horizontal (x) scrolling
      }
    },
    $.fancybox.defaults
  );

  var FancyThumbs = function (instance) {
    this.init(instance);
  };

  $.extend(FancyThumbs.prototype, {
    $button: null,
    $grid: null,
    $list: null,
    isVisible: false,
    isActive: false,

    init: function (instance) {
      var self = this,
        group = instance.group,
        enabled = 0;

      self.instance = instance;
      self.opts = group[instance.currIndex].opts.thumbs;

      instance.Thumbs = self;

      self.$button = instance.$refs.toolbar.find("[data-fancybox-thumbs]");

      // Enable thumbs if at least two group items have thumbnails
      for (var i = 0, len = group.length; i < len; i++) {
        if (group[i].thumb) {
          enabled++;
        }

        if (enabled > 1) {
          break;
        }
      }

      if (enabled > 1 && !!self.opts) {
        self.$button.removeAttr("style").on("click", function () {
          self.toggle();
        });

        self.isActive = true;
      } else {
        self.$button.hide();
      }
    },

    create: function () {
      var self = this,
        instance = self.instance,
        parentEl = self.opts.parentEl,
        list = [],
        src;

      if (!self.$grid) {
        // Create main element
        self.$grid = $('<div class="' + CLASS + " " + CLASS + "-" + self.opts.axis + '"></div>').appendTo(
          instance.$refs.container
          .find(parentEl)
          .addBack()
          .filter(parentEl)
        );

        // Add "click" event that performs gallery navigation
        self.$grid.on("click", "a", function () {
          instance.jumpTo($(this).attr("data-index"));
        });
      }

      // Build the list
      if (!self.$list) {
        self.$list = $('<div class="' + CLASS + '__list">').appendTo(self.$grid);
      }

      $.each(instance.group, function (i, item) {
        src = item.thumb;

        if (!src && item.type === "image") {
          src = item.src;
        }

        list.push(
          '<a href="javascript:;" tabindex="0" data-index="' +
          i +
          '"' +
          (src && src.length ? ' style="background-image:url(' + src + ')"' : 'class="fancybox-thumbs-missing"') +
          "></a>"
        );
      });

      self.$list[0].innerHTML = list.join("");

      if (self.opts.axis === "x") {
        // Set fixed width for list element to enable horizontal scrolling
        self.$list.width(
          parseInt(self.$grid.css("padding-right"), 10) +
          instance.group.length *
          self.$list
          .children()
          .eq(0)
          .outerWidth(true)
        );
      }
    },

    focus: function (duration) {
      var self = this,
        $list = self.$list,
        $grid = self.$grid,
        thumb,
        thumbPos;

      if (!self.instance.current) {
        return;
      }

      thumb = $list
        .children()
        .removeClass(CLASS_ACTIVE)
        .filter('[data-index="' + self.instance.current.index + '"]')
        .addClass(CLASS_ACTIVE);

      thumbPos = thumb.position();

      // Check if need to scroll to make current thumb visible
      if (self.opts.axis === "y" && (thumbPos.top < 0 || thumbPos.top > $list.height() - thumb.outerHeight())) {
        $list.stop().animate({
            scrollTop: $list.scrollTop() + thumbPos.top
          },
          duration
        );
      } else if (
        self.opts.axis === "x" &&
        (thumbPos.left < $grid.scrollLeft() || thumbPos.left > $grid.scrollLeft() + ($grid.width() - thumb.outerWidth()))
      ) {
        $list
          .parent()
          .stop()
          .animate({
              scrollLeft: thumbPos.left
            },
            duration
          );
      }
    },

    update: function () {
      var that = this;
      that.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);

      if (that.isVisible) {
        if (!that.$grid) {
          that.create();
        }

        that.instance.trigger("onThumbsShow");

        that.focus(0);
      } else if (that.$grid) {
        that.instance.trigger("onThumbsHide");
      }

      // Update content position
      that.instance.update();
    },

    hide: function () {
      this.isVisible = false;
      this.update();
    },

    show: function () {
      this.isVisible = true;
      this.update();
    },

    toggle: function () {
      this.isVisible = !this.isVisible;
      this.update();
    }
  });

  $(document).on({
    "onInit.fb": function (e, instance) {
      var Thumbs;

      if (instance && !instance.Thumbs) {
        Thumbs = new FancyThumbs(instance);

        if (Thumbs.isActive && Thumbs.opts.autoStart === true) {
          Thumbs.show();
        }
      }
    },

    "beforeShow.fb": function (e, instance, item, firstRun) {
      var Thumbs = instance && instance.Thumbs;

      if (Thumbs && Thumbs.isVisible) {
        Thumbs.focus(firstRun ? 0 : 250);
      }
    },

    "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
      var Thumbs = instance && instance.Thumbs;

      // "G"
      if (Thumbs && Thumbs.isActive && keycode === 71) {
        keypress.preventDefault();

        Thumbs.toggle();
      }
    },

    "beforeClose.fb": function (e, instance) {
      var Thumbs = instance && instance.Thumbs;

      if (Thumbs && Thumbs.isVisible && Thumbs.opts.hideOnClose !== false) {
        Thumbs.$grid.hide();
      }
    }
  });
})(document, jQuery);
//// ==========================================================================
//
// Share
// Displays simple form for sharing current url
//
// ==========================================================================
(function (document, $) {
  "use strict";

  $.extend(true, $.fancybox.defaults, {
    btnTpl: {
      share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg>' +
        "</button>"
    },
    share: {
      url: function (instance, item) {
        return (
          (!instance.currentHash && !(item.type === "inline" || item.type === "html") ? item.origSrc || item.src : false) || window.location
        );
      },
      tpl: '<div class="fancybox-share">' +
        "<h1>{{SHARE}}</h1>" +
        "<p>" +
        '<a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}">' +
        '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>' +
        "<span>Facebook</span>" +
        "</a>" +
        '<a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}">' +
        '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg>' +
        "<span>Twitter</span>" +
        "</a>" +
        '<a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}">' +
        '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg>' +
        "<span>Pinterest</span>" +
        "</a>" +
        "</p>" +
        '<p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p>' +
        "</div>"
    }
  });

  function escapeHtml(string) {
    var entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;"
    };

    return String(string).replace(/[&<>"'`=\/]/g, function (s) {
      return entityMap[s];
    });
  }

  $(document).on("click", "[data-fancybox-share]", function () {
    var instance = $.fancybox.getInstance(),
      current = instance.current || null,
      url,
      tpl;

    if (!current) {
      return;
    }

    if ($.type(current.opts.share.url) === "function") {
      url = current.opts.share.url.apply(current, [instance, current]);
    }

    tpl = current.opts.share.tpl
      .replace(/\{\{media\}\}/g, current.type === "image" ? encodeURIComponent(current.src) : "")
      .replace(/\{\{url\}\}/g, encodeURIComponent(url))
      .replace(/\{\{url_raw\}\}/g, escapeHtml(url))
      .replace(/\{\{descr\}\}/g, instance.$caption ? encodeURIComponent(instance.$caption.text()) : "");

    $.fancybox.open({
      src: instance.translate(instance, tpl),
      type: "html",
      opts: {
        touch: false,
        animationEffect: false,
        afterLoad: function (shareInstance, shareCurrent) {
          // Close self if parent instance is closing
          instance.$refs.container.one("beforeClose.fb", function () {
            shareInstance.close(null, 0);
          });

          // Opening links in a popup window
          shareCurrent.$content.find(".fancybox-share__button").click(function () {
            window.open(this.href, "Share", "width=550, height=450");
            return false;
          });
        },
        mobile: {
          autoFocus: false
        }
      }
    });
  });
})(document, jQuery);
// ==========================================================================
//
// Hash
// Enables linking to each modal
//
// ==========================================================================
(function (window, document, $) {
  "use strict";

  // Simple $.escapeSelector polyfill (for jQuery prior v3)
  if (!$.escapeSelector) {
    $.escapeSelector = function (sel) {
      var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      var fcssescape = function (ch, asCodePoint) {
        if (asCodePoint) {
          // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
          if (ch === "\0") {
            return "\uFFFD";
          }

          // Control characters and (dependent upon position) numbers get escaped as code points
          return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }

        // Other potentially-special ASCII characters get backslash-escaped
        return "\\" + ch;
      };

      return (sel + "").replace(rcssescape, fcssescape);
    };
  }

  // Get info about gallery name and current index from url
  function parseUrl() {
    var hash = window.location.hash.substr(1),
      rez = hash.split("-"),
      index = rez.length > 1 && /^\+?\d+$/.test(rez[rez.length - 1]) ? parseInt(rez.pop(-1), 10) || 1 : 1,
      gallery = rez.join("-");

    return {
      hash: hash,
      /* Index is starting from 1 */
      index: index < 1 ? 1 : index,
      gallery: gallery
    };
  }

  // Trigger click evnt on links to open new fancyBox instance
  function triggerFromUrl(url) {
    if (url.gallery !== "") {
      // If we can find element matching 'data-fancybox' atribute,
      // then triggering click event should start fancyBox
      $("[data-fancybox='" + $.escapeSelector(url.gallery) + "']")
        .eq(url.index - 1)
        .focus()
        .trigger("click.fb-start");
    }
  }

  // Get gallery name from current instance
  function getGalleryID(instance) {
    var opts, ret;

    if (!instance) {
      return false;
    }

    opts = instance.current ? instance.current.opts : instance.opts;
    ret = opts.hash || (opts.$orig ? opts.$orig.data("fancybox") || opts.$orig.data("fancybox-trigger") : "");

    return ret === "" ? false : ret;
  }

  // Start when DOM becomes ready
  $(function () {
    // Check if user has disabled this module
    if ($.fancybox.defaults.hash === false) {
      return;
    }

    // Update hash when opening/closing fancyBox
    $(document).on({
      "onInit.fb": function (e, instance) {
        var url, gallery;

        if (instance.group[instance.currIndex].opts.hash === false) {
          return;
        }

        url = parseUrl();
        gallery = getGalleryID(instance);

        // Make sure gallery start index matches index from hash
        if (gallery && url.gallery && gallery == url.gallery) {
          instance.currIndex = url.index - 1;
        }
      },

      "beforeShow.fb": function (e, instance, current, firstRun) {
        var gallery;

        if (!current || current.opts.hash === false) {
          return;
        }

        // Check if need to update window hash
        gallery = getGalleryID(instance);

        if (!gallery) {
          return;
        }

        // Variable containing last hash value set by fancyBox
        // It will be used to determine if fancyBox needs to close after hash change is detected
        instance.currentHash = gallery + (instance.group.length > 1 ? "-" + (current.index + 1) : "");

        // If current hash is the same (this instance most likely is opened by hashchange), then do nothing
        if (window.location.hash === "#" + instance.currentHash) {
          return;
        }

        if (firstRun && !instance.origHash) {
          instance.origHash = window.location.hash;
        }

        if (instance.hashTimer) {
          clearTimeout(instance.hashTimer);
        }

        // Update hash
        instance.hashTimer = setTimeout(function () {
          if ("replaceState" in window.history) {
            window.history[firstRun ? "pushState" : "replaceState"]({},
              document.title,
              window.location.pathname + window.location.search + "#" + instance.currentHash
            );

            if (firstRun) {
              instance.hasCreatedHistory = true;
            }
          } else {
            window.location.hash = instance.currentHash;
          }

          instance.hashTimer = null;
        }, 300);
      },

      "beforeClose.fb": function (e, instance, current) {
        if (!current || current.opts.hash === false) {
          return;
        }

        clearTimeout(instance.hashTimer);

        // Goto previous history entry
        if (instance.currentHash && instance.hasCreatedHistory) {
          window.history.back();
        } else if (instance.currentHash) {
          if ("replaceState" in window.history) {
            window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (instance.origHash || ""));
          } else {
            window.location.hash = instance.origHash;
          }
        }

        instance.currentHash = null;
      }
    });

    // Check if need to start/close after url has changed
    $(window).on("hashchange.fb", function () {
      var url = parseUrl(),
        fb = null;

      // Find last fancyBox instance that has "hash"
      $.each(
        $(".fancybox-container")
        .get()
        .reverse(),
        function (index, value) {
          var tmp = $(value).data("FancyBox");

          if (tmp && tmp.currentHash) {
            fb = tmp;
            return false;
          }
        }
      );

      if (fb) {
        // Now, compare hash values
        if (fb.currentHash !== url.gallery + "-" + url.index && !(url.index === 1 && fb.currentHash == url.gallery)) {
          fb.currentHash = null;

          fb.close();
        }
      } else if (url.gallery !== "") {
        triggerFromUrl(url);
      }
    });

    // Check current hash and trigger click event on matching element to start fancyBox, if needed
    setTimeout(function () {
      if (!$.fancybox.getInstance()) {
        triggerFromUrl(parseUrl());
      }
    }, 50);
  });
})(window, document, jQuery);
// ==========================================================================
//
// Wheel
// Basic mouse weheel support for gallery navigation
//
// ==========================================================================
(function (document, $) {
  "use strict";

  var prevTime = new Date().getTime();

  $(document).on({
    "onInit.fb": function (e, instance, current) {
      instance.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (e) {
        var current = instance.current,
          currTime = new Date().getTime();

        if (instance.group.length < 2 || current.opts.wheel === false || (current.opts.wheel === "auto" && current.type !== "image")) {
          return;
        }

        e.preventDefault();
        e.stopPropagation();

        if (current.$slide.hasClass("fancybox-animated")) {
          return;
        }

        e = e.originalEvent || e;

        if (currTime - prevTime < 250) {
          return;
        }

        prevTime = currTime;

        instance[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]();
      });
    }
  });
})(document, jQuery);
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	global.moment = factory()
}(this, (function () { 'use strict';

	var hookCallback;

	function hooks() {
		 return hookCallback.apply(null, arguments);
	}

	// This is done to register the method called with moment()
	// without creating circular dependencies.
	function setHookCallback(callback) {
		 hookCallback = callback;
	}

	function isArray(input) {
		 return (
			  input instanceof Array ||
			  Object.prototype.toString.call(input) === '[object Array]'
		 );
	}

	function isObject(input) {
		 // IE8 will treat undefined and null as object if it wasn't for
		 // input != null
		 return (
			  input != null &&
			  Object.prototype.toString.call(input) === '[object Object]'
		 );
	}

	function hasOwnProp(a, b) {
		 return Object.prototype.hasOwnProperty.call(a, b);
	}

	function isObjectEmpty(obj) {
		 if (Object.getOwnPropertyNames) {
			  return Object.getOwnPropertyNames(obj).length === 0;
		 } else {
			  var k;
			  for (k in obj) {
					if (hasOwnProp(obj, k)) {
						 return false;
					}
			  }
			  return true;
		 }
	}

	function isUndefined(input) {
		 return input === void 0;
	}

	function isNumber(input) {
		 return (
			  typeof input === 'number' ||
			  Object.prototype.toString.call(input) === '[object Number]'
		 );
	}

	function isDate(input) {
		 return (
			  input instanceof Date ||
			  Object.prototype.toString.call(input) === '[object Date]'
		 );
	}

	function map(arr, fn) {
		 var res = [],
			  i,
			  arrLen = arr.length;
		 for (i = 0; i < arrLen; ++i) {
			  res.push(fn(arr[i], i));
		 }
		 return res;
	}

	function extend(a, b) {
		 for (var i in b) {
			  if (hasOwnProp(b, i)) {
					a[i] = b[i];
			  }
		 }

		 if (hasOwnProp(b, 'toString')) {
			  a.toString = b.toString;
		 }

		 if (hasOwnProp(b, 'valueOf')) {
			  a.valueOf = b.valueOf;
		 }

		 return a;
	}

	function createUTC(input, format, locale, strict) {
		 return createLocalOrUTC(input, format, locale, strict, true).utc();
	}

	function defaultParsingFlags() {
		 // We need to deep clone this object.
		 return {
			  empty: false,
			  unusedTokens: [],
			  unusedInput: [],
			  overflow: -2,
			  charsLeftOver: 0,
			  nullInput: false,
			  invalidEra: null,
			  invalidMonth: null,
			  invalidFormat: false,
			  userInvalidated: false,
			  iso: false,
			  parsedDateParts: [],
			  era: null,
			  meridiem: null,
			  rfc2822: false,
			  weekdayMismatch: false,
		 };
	}

	function getParsingFlags(m) {
		 if (m._pf == null) {
			  m._pf = defaultParsingFlags();
		 }
		 return m._pf;
	}

	var some;
	if (Array.prototype.some) {
		 some = Array.prototype.some;
	} else {
		 some = function (fun) {
			  var t = Object(this),
					len = t.length >>> 0,
					i;

			  for (i = 0; i < len; i++) {
					if (i in t && fun.call(this, t[i], i, t)) {
						 return true;
					}
			  }

			  return false;
		 };
	}

	function isValid(m) {
		 if (m._isValid == null) {
			  var flags = getParsingFlags(m),
					parsedParts = some.call(flags.parsedDateParts, function (i) {
						 return i != null;
					}),
					isNowValid =
						 !isNaN(m._d.getTime()) &&
						 flags.overflow < 0 &&
						 !flags.empty &&
						 !flags.invalidEra &&
						 !flags.invalidMonth &&
						 !flags.invalidWeekday &&
						 !flags.weekdayMismatch &&
						 !flags.nullInput &&
						 !flags.invalidFormat &&
						 !flags.userInvalidated &&
						 (!flags.meridiem || (flags.meridiem && parsedParts));

			  if (m._strict) {
					isNowValid =
						 isNowValid &&
						 flags.charsLeftOver === 0 &&
						 flags.unusedTokens.length === 0 &&
						 flags.bigHour === undefined;
			  }

			  if (Object.isFrozen == null || !Object.isFrozen(m)) {
					m._isValid = isNowValid;
			  } else {
					return isNowValid;
			  }
		 }
		 return m._isValid;
	}

	function createInvalid(flags) {
		 var m = createUTC(NaN);
		 if (flags != null) {
			  extend(getParsingFlags(m), flags);
		 } else {
			  getParsingFlags(m).userInvalidated = true;
		 }

		 return m;
	}

	// Plugins that add properties should also add the key here (null value),
	// so we can properly clone ourselves.
	var momentProperties = (hooks.momentProperties = []),
		 updateInProgress = false;

	function copyConfig(to, from) {
		 var i,
			  prop,
			  val,
			  momentPropertiesLen = momentProperties.length;

		 if (!isUndefined(from._isAMomentObject)) {
			  to._isAMomentObject = from._isAMomentObject;
		 }
		 if (!isUndefined(from._i)) {
			  to._i = from._i;
		 }
		 if (!isUndefined(from._f)) {
			  to._f = from._f;
		 }
		 if (!isUndefined(from._l)) {
			  to._l = from._l;
		 }
		 if (!isUndefined(from._strict)) {
			  to._strict = from._strict;
		 }
		 if (!isUndefined(from._tzm)) {
			  to._tzm = from._tzm;
		 }
		 if (!isUndefined(from._isUTC)) {
			  to._isUTC = from._isUTC;
		 }
		 if (!isUndefined(from._offset)) {
			  to._offset = from._offset;
		 }
		 if (!isUndefined(from._pf)) {
			  to._pf = getParsingFlags(from);
		 }
		 if (!isUndefined(from._locale)) {
			  to._locale = from._locale;
		 }

		 if (momentPropertiesLen > 0) {
			  for (i = 0; i < momentPropertiesLen; i++) {
					prop = momentProperties[i];
					val = from[prop];
					if (!isUndefined(val)) {
						 to[prop] = val;
					}
			  }
		 }

		 return to;
	}

	// Moment prototype object
	function Moment(config) {
		 copyConfig(this, config);
		 this._d = new Date(config._d != null ? config._d.getTime() : NaN);
		 if (!this.isValid()) {
			  this._d = new Date(NaN);
		 }
		 // Prevent infinite loop in case updateOffset creates new moment
		 // objects.
		 if (updateInProgress === false) {
			  updateInProgress = true;
			  hooks.updateOffset(this);
			  updateInProgress = false;
		 }
	}

	function isMoment(obj) {
		 return (
			  obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
		 );
	}

	function warn(msg) {
		 if (
			  hooks.suppressDeprecationWarnings === false &&
			  typeof console !== 'undefined' &&
			  console.warn
		 ) {
			  console.warn('Deprecation warning: ' + msg);
		 }
	}

	function deprecate(msg, fn) {
		 var firstTime = true;

		 return extend(function () {
			  if (hooks.deprecationHandler != null) {
					hooks.deprecationHandler(null, msg);
			  }
			  if (firstTime) {
					var args = [],
						 arg,
						 i,
						 key,
						 argLen = arguments.length;
					for (i = 0; i < argLen; i++) {
						 arg = '';
						 if (typeof arguments[i] === 'object') {
							  arg += '\n[' + i + '] ';
							  for (key in arguments[0]) {
									if (hasOwnProp(arguments[0], key)) {
										 arg += key + ': ' + arguments[0][key] + ', ';
									}
							  }
							  arg = arg.slice(0, -2); // Remove trailing comma and space
						 } else {
							  arg = arguments[i];
						 }
						 args.push(arg);
					}
					warn(
						 msg +
							  '\nArguments: ' +
							  Array.prototype.slice.call(args).join('') +
							  '\n' +
							  new Error().stack
					);
					firstTime = false;
			  }
			  return fn.apply(this, arguments);
		 }, fn);
	}

	var deprecations = {};

	function deprecateSimple(name, msg) {
		 if (hooks.deprecationHandler != null) {
			  hooks.deprecationHandler(name, msg);
		 }
		 if (!deprecations[name]) {
			  warn(msg);
			  deprecations[name] = true;
		 }
	}

	hooks.suppressDeprecationWarnings = false;
	hooks.deprecationHandler = null;

	function isFunction(input) {
		 return (
			  (typeof Function !== 'undefined' && input instanceof Function) ||
			  Object.prototype.toString.call(input) === '[object Function]'
		 );
	}

	function set(config) {
		 var prop, i;
		 for (i in config) {
			  if (hasOwnProp(config, i)) {
					prop = config[i];
					if (isFunction(prop)) {
						 this[i] = prop;
					} else {
						 this['_' + i] = prop;
					}
			  }
		 }
		 this._config = config;
		 // Lenient ordinal parsing accepts just a number in addition to
		 // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
		 // TODO: Remove "ordinalParse" fallback in next major release.
		 this._dayOfMonthOrdinalParseLenient = new RegExp(
			  (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
					'|' +
					/\d{1,2}/.source
		 );
	}

	function mergeConfigs(parentConfig, childConfig) {
		 var res = extend({}, parentConfig),
			  prop;
		 for (prop in childConfig) {
			  if (hasOwnProp(childConfig, prop)) {
					if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
						 res[prop] = {};
						 extend(res[prop], parentConfig[prop]);
						 extend(res[prop], childConfig[prop]);
					} else if (childConfig[prop] != null) {
						 res[prop] = childConfig[prop];
					} else {
						 delete res[prop];
					}
			  }
		 }
		 for (prop in parentConfig) {
			  if (
					hasOwnProp(parentConfig, prop) &&
					!hasOwnProp(childConfig, prop) &&
					isObject(parentConfig[prop])
			  ) {
					// make sure changes to properties don't modify parent config
					res[prop] = extend({}, res[prop]);
			  }
		 }
		 return res;
	}

	function Locale(config) {
		 if (config != null) {
			  this.set(config);
		 }
	}

	var keys;

	if (Object.keys) {
		 keys = Object.keys;
	} else {
		 keys = function (obj) {
			  var i,
					res = [];
			  for (i in obj) {
					if (hasOwnProp(obj, i)) {
						 res.push(i);
					}
			  }
			  return res;
		 };
	}

	var defaultCalendar = {
		 sameDay: '[Today at] LT',
		 nextDay: '[Tomorrow at] LT',
		 nextWeek: 'dddd [at] LT',
		 lastDay: '[Yesterday at] LT',
		 lastWeek: '[Last] dddd [at] LT',
		 sameElse: 'L',
	};

	function calendar(key, mom, now) {
		 var output = this._calendar[key] || this._calendar['sameElse'];
		 return isFunction(output) ? output.call(mom, now) : output;
	}

	function zeroFill(number, targetLength, forceSign) {
		 var absNumber = '' + Math.abs(number),
			  zerosToFill = targetLength - absNumber.length,
			  sign = number >= 0;
		 return (
			  (sign ? (forceSign ? '+' : '') : '-') +
			  Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
			  absNumber
		 );
	}

	var formattingTokens =
			  /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
		 localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
		 formatFunctions = {},
		 formatTokenFunctions = {};

	// token:    'M'
	// padded:   ['MM', 2]
	// ordinal:  'Mo'
	// callback: function () { this.month() + 1 }
	function addFormatToken(token, padded, ordinal, callback) {
		 var func = callback;
		 if (typeof callback === 'string') {
			  func = function () {
					return this[callback]();
			  };
		 }
		 if (token) {
			  formatTokenFunctions[token] = func;
		 }
		 if (padded) {
			  formatTokenFunctions[padded[0]] = function () {
					return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
			  };
		 }
		 if (ordinal) {
			  formatTokenFunctions[ordinal] = function () {
					return this.localeData().ordinal(
						 func.apply(this, arguments),
						 token
					);
			  };
		 }
	}

	function removeFormattingTokens(input) {
		 if (input.match(/\[[\s\S]/)) {
			  return input.replace(/^\[|\]$/g, '');
		 }
		 return input.replace(/\\/g, '');
	}

	function makeFormatFunction(format) {
		 var array = format.match(formattingTokens),
			  i,
			  length;

		 for (i = 0, length = array.length; i < length; i++) {
			  if (formatTokenFunctions[array[i]]) {
					array[i] = formatTokenFunctions[array[i]];
			  } else {
					array[i] = removeFormattingTokens(array[i]);
			  }
		 }

		 return function (mom) {
			  var output = '',
					i;
			  for (i = 0; i < length; i++) {
					output += isFunction(array[i])
						 ? array[i].call(mom, format)
						 : array[i];
			  }
			  return output;
		 };
	}

	// format date using native date object
	function formatMoment(m, format) {
		 if (!m.isValid()) {
			  return m.localeData().invalidDate();
		 }

		 format = expandFormat(format, m.localeData());
		 formatFunctions[format] =
			  formatFunctions[format] || makeFormatFunction(format);

		 return formatFunctions[format](m);
	}

	function expandFormat(format, locale) {
		 var i = 5;

		 function replaceLongDateFormatTokens(input) {
			  return locale.longDateFormat(input) || input;
		 }

		 localFormattingTokens.lastIndex = 0;
		 while (i >= 0 && localFormattingTokens.test(format)) {
			  format = format.replace(
					localFormattingTokens,
					replaceLongDateFormatTokens
			  );
			  localFormattingTokens.lastIndex = 0;
			  i -= 1;
		 }

		 return format;
	}

	var defaultLongDateFormat = {
		 LTS: 'h:mm:ss A',
		 LT: 'h:mm A',
		 L: 'MM/DD/YYYY',
		 LL: 'MMMM D, YYYY',
		 LLL: 'MMMM D, YYYY h:mm A',
		 LLLL: 'dddd, MMMM D, YYYY h:mm A',
	};

	function longDateFormat(key) {
		 var format = this._longDateFormat[key],
			  formatUpper = this._longDateFormat[key.toUpperCase()];

		 if (format || !formatUpper) {
			  return format;
		 }

		 this._longDateFormat[key] = formatUpper
			  .match(formattingTokens)
			  .map(function (tok) {
					if (
						 tok === 'MMMM' ||
						 tok === 'MM' ||
						 tok === 'DD' ||
						 tok === 'dddd'
					) {
						 return tok.slice(1);
					}
					return tok;
			  })
			  .join('');

		 return this._longDateFormat[key];
	}

	var defaultInvalidDate = 'Invalid date';

	function invalidDate() {
		 return this._invalidDate;
	}

	var defaultOrdinal = '%d',
		 defaultDayOfMonthOrdinalParse = /\d{1,2}/;

	function ordinal(number) {
		 return this._ordinal.replace('%d', number);
	}

	var defaultRelativeTime = {
		 future: 'in %s',
		 past: '%s ago',
		 s: 'a few seconds',
		 ss: '%d seconds',
		 m: 'a minute',
		 mm: '%d minutes',
		 h: 'an hour',
		 hh: '%d hours',
		 d: 'a day',
		 dd: '%d days',
		 w: 'a week',
		 ww: '%d weeks',
		 M: 'a month',
		 MM: '%d months',
		 y: 'a year',
		 yy: '%d years',
	};

	function relativeTime(number, withoutSuffix, string, isFuture) {
		 var output = this._relativeTime[string];
		 return isFunction(output)
			  ? output(number, withoutSuffix, string, isFuture)
			  : output.replace(/%d/i, number);
	}

	function pastFuture(diff, output) {
		 var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
		 return isFunction(format) ? format(output) : format.replace(/%s/i, output);
	}

	var aliases = {};

	function addUnitAlias(unit, shorthand) {
		 var lowerCase = unit.toLowerCase();
		 aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
	}

	function normalizeUnits(units) {
		 return typeof units === 'string'
			  ? aliases[units] || aliases[units.toLowerCase()]
			  : undefined;
	}

	function normalizeObjectUnits(inputObject) {
		 var normalizedInput = {},
			  normalizedProp,
			  prop;

		 for (prop in inputObject) {
			  if (hasOwnProp(inputObject, prop)) {
					normalizedProp = normalizeUnits(prop);
					if (normalizedProp) {
						 normalizedInput[normalizedProp] = inputObject[prop];
					}
			  }
		 }

		 return normalizedInput;
	}

	var priorities = {};

	function addUnitPriority(unit, priority) {
		 priorities[unit] = priority;
	}

	function getPrioritizedUnits(unitsObj) {
		 var units = [],
			  u;
		 for (u in unitsObj) {
			  if (hasOwnProp(unitsObj, u)) {
					units.push({ unit: u, priority: priorities[u] });
			  }
		 }
		 units.sort(function (a, b) {
			  return a.priority - b.priority;
		 });
		 return units;
	}

	function isLeapYear(year) {
		 return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	}

	function absFloor(number) {
		 if (number < 0) {
			  // -0 -> 0
			  return Math.ceil(number) || 0;
		 } else {
			  return Math.floor(number);
		 }
	}

	function toInt(argumentForCoercion) {
		 var coercedNumber = +argumentForCoercion,
			  value = 0;

		 if (coercedNumber !== 0 && isFinite(coercedNumber)) {
			  value = absFloor(coercedNumber);
		 }

		 return value;
	}

	function makeGetSet(unit, keepTime) {
		 return function (value) {
			  if (value != null) {
					set$1(this, unit, value);
					hooks.updateOffset(this, keepTime);
					return this;
			  } else {
					return get(this, unit);
			  }
		 };
	}

	function get(mom, unit) {
		 return mom.isValid()
			  ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
			  : NaN;
	}

	function set$1(mom, unit, value) {
		 if (mom.isValid() && !isNaN(value)) {
			  if (
					unit === 'FullYear' &&
					isLeapYear(mom.year()) &&
					mom.month() === 1 &&
					mom.date() === 29
			  ) {
					value = toInt(value);
					mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
						 value,
						 mom.month(),
						 daysInMonth(value, mom.month())
					);
			  } else {
					mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
			  }
		 }
	}

	// MOMENTS

	function stringGet(units) {
		 units = normalizeUnits(units);
		 if (isFunction(this[units])) {
			  return this[units]();
		 }
		 return this;
	}

	function stringSet(units, value) {
		 if (typeof units === 'object') {
			  units = normalizeObjectUnits(units);
			  var prioritized = getPrioritizedUnits(units),
					i,
					prioritizedLen = prioritized.length;
			  for (i = 0; i < prioritizedLen; i++) {
					this[prioritized[i].unit](units[prioritized[i].unit]);
			  }
		 } else {
			  units = normalizeUnits(units);
			  if (isFunction(this[units])) {
					return this[units](value);
			  }
		 }
		 return this;
	}

	var match1 = /\d/, //       0 - 9
		 match2 = /\d\d/, //      00 - 99
		 match3 = /\d{3}/, //     000 - 999
		 match4 = /\d{4}/, //    0000 - 9999
		 match6 = /[+-]?\d{6}/, // -999999 - 999999
		 match1to2 = /\d\d?/, //       0 - 99
		 match3to4 = /\d\d\d\d?/, //     999 - 9999
		 match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
		 match1to3 = /\d{1,3}/, //       0 - 999
		 match1to4 = /\d{1,4}/, //       0 - 9999
		 match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
		 matchUnsigned = /\d+/, //       0 - inf
		 matchSigned = /[+-]?\d+/, //    -inf - inf
		 matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
		 matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
		 matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
		 // any word (or two) characters or numbers including two/three word month in arabic.
		 // includes scottish gaelic two word and hyphenated months
		 matchWord =
			  /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
		 regexes;

	regexes = {};

	function addRegexToken(token, regex, strictRegex) {
		 regexes[token] = isFunction(regex)
			  ? regex
			  : function (isStrict, localeData) {
					  return isStrict && strictRegex ? strictRegex : regex;
				 };
	}

	function getParseRegexForToken(token, config) {
		 if (!hasOwnProp(regexes, token)) {
			  return new RegExp(unescapeFormat(token));
		 }

		 return regexes[token](config._strict, config._locale);
	}

	// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	function unescapeFormat(s) {
		 return regexEscape(
			  s
					.replace('\\', '')
					.replace(
						 /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
						 function (matched, p1, p2, p3, p4) {
							  return p1 || p2 || p3 || p4;
						 }
					)
		 );
	}

	function regexEscape(s) {
		 return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	}

	var tokens = {};

	function addParseToken(token, callback) {
		 var i,
			  func = callback,
			  tokenLen;
		 if (typeof token === 'string') {
			  token = [token];
		 }
		 if (isNumber(callback)) {
			  func = function (input, array) {
					array[callback] = toInt(input);
			  };
		 }
		 tokenLen = token.length;
		 for (i = 0; i < tokenLen; i++) {
			  tokens[token[i]] = func;
		 }
	}

	function addWeekParseToken(token, callback) {
		 addParseToken(token, function (input, array, config, token) {
			  config._w = config._w || {};
			  callback(input, config._w, config, token);
		 });
	}

	function addTimeToArrayFromToken(token, input, config) {
		 if (input != null && hasOwnProp(tokens, token)) {
			  tokens[token](input, config._a, config, token);
		 }
	}

	var YEAR = 0,
		 MONTH = 1,
		 DATE = 2,
		 HOUR = 3,
		 MINUTE = 4,
		 SECOND = 5,
		 MILLISECOND = 6,
		 WEEK = 7,
		 WEEKDAY = 8;

	function mod(n, x) {
		 return ((n % x) + x) % x;
	}

	var indexOf;

	if (Array.prototype.indexOf) {
		 indexOf = Array.prototype.indexOf;
	} else {
		 indexOf = function (o) {
			  // I know
			  var i;
			  for (i = 0; i < this.length; ++i) {
					if (this[i] === o) {
						 return i;
					}
			  }
			  return -1;
		 };
	}

	function daysInMonth(year, month) {
		 if (isNaN(year) || isNaN(month)) {
			  return NaN;
		 }
		 var modMonth = mod(month, 12);
		 year += (month - modMonth) / 12;
		 return modMonth === 1
			  ? isLeapYear(year)
					? 29
					: 28
			  : 31 - ((modMonth % 7) % 2);
	}

	// FORMATTING

	addFormatToken('M', ['MM', 2], 'Mo', function () {
		 return this.month() + 1;
	});

	addFormatToken('MMM', 0, 0, function (format) {
		 return this.localeData().monthsShort(this, format);
	});

	addFormatToken('MMMM', 0, 0, function (format) {
		 return this.localeData().months(this, format);
	});

	// ALIASES

	addUnitAlias('month', 'M');

	// PRIORITY

	addUnitPriority('month', 8);

	// PARSING

	addRegexToken('M', match1to2);
	addRegexToken('MM', match1to2, match2);
	addRegexToken('MMM', function (isStrict, locale) {
		 return locale.monthsShortRegex(isStrict);
	});
	addRegexToken('MMMM', function (isStrict, locale) {
		 return locale.monthsRegex(isStrict);
	});

	addParseToken(['M', 'MM'], function (input, array) {
		 array[MONTH] = toInt(input) - 1;
	});

	addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
		 var month = config._locale.monthsParse(input, token, config._strict);
		 // if we didn't find a month name, mark the date as invalid.
		 if (month != null) {
			  array[MONTH] = month;
		 } else {
			  getParsingFlags(config).invalidMonth = input;
		 }
	});

	// LOCALES

	var defaultLocaleMonths =
			  'January_February_March_April_May_June_July_August_September_October_November_December'.split(
					'_'
			  ),
		 defaultLocaleMonthsShort =
			  'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
		 MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
		 defaultMonthsShortRegex = matchWord,
		 defaultMonthsRegex = matchWord;

	function localeMonths(m, format) {
		 if (!m) {
			  return isArray(this._months)
					? this._months
					: this._months['standalone'];
		 }
		 return isArray(this._months)
			  ? this._months[m.month()]
			  : this._months[
					  (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
							? 'format'
							: 'standalone'
				 ][m.month()];
	}

	function localeMonthsShort(m, format) {
		 if (!m) {
			  return isArray(this._monthsShort)
					? this._monthsShort
					: this._monthsShort['standalone'];
		 }
		 return isArray(this._monthsShort)
			  ? this._monthsShort[m.month()]
			  : this._monthsShort[
					  MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
				 ][m.month()];
	}

	function handleStrictParse(monthName, format, strict) {
		 var i,
			  ii,
			  mom,
			  llc = monthName.toLocaleLowerCase();
		 if (!this._monthsParse) {
			  // this is not used
			  this._monthsParse = [];
			  this._longMonthsParse = [];
			  this._shortMonthsParse = [];
			  for (i = 0; i < 12; ++i) {
					mom = createUTC([2000, i]);
					this._shortMonthsParse[i] = this.monthsShort(
						 mom,
						 ''
					).toLocaleLowerCase();
					this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
			  }
		 }

		 if (strict) {
			  if (format === 'MMM') {
					ii = indexOf.call(this._shortMonthsParse, llc);
					return ii !== -1 ? ii : null;
			  } else {
					ii = indexOf.call(this._longMonthsParse, llc);
					return ii !== -1 ? ii : null;
			  }
		 } else {
			  if (format === 'MMM') {
					ii = indexOf.call(this._shortMonthsParse, llc);
					if (ii !== -1) {
						 return ii;
					}
					ii = indexOf.call(this._longMonthsParse, llc);
					return ii !== -1 ? ii : null;
			  } else {
					ii = indexOf.call(this._longMonthsParse, llc);
					if (ii !== -1) {
						 return ii;
					}
					ii = indexOf.call(this._shortMonthsParse, llc);
					return ii !== -1 ? ii : null;
			  }
		 }
	}

	function localeMonthsParse(monthName, format, strict) {
		 var i, mom, regex;

		 if (this._monthsParseExact) {
			  return handleStrictParse.call(this, monthName, format, strict);
		 }

		 if (!this._monthsParse) {
			  this._monthsParse = [];
			  this._longMonthsParse = [];
			  this._shortMonthsParse = [];
		 }

		 // TODO: add sorting
		 // Sorting makes sure if one month (or abbr) is a prefix of another
		 // see sorting in computeMonthsParse
		 for (i = 0; i < 12; i++) {
			  // make the regex if we don't have it already
			  mom = createUTC([2000, i]);
			  if (strict && !this._longMonthsParse[i]) {
					this._longMonthsParse[i] = new RegExp(
						 '^' + this.months(mom, '').replace('.', '') + '$',
						 'i'
					);
					this._shortMonthsParse[i] = new RegExp(
						 '^' + this.monthsShort(mom, '').replace('.', '') + '$',
						 'i'
					);
			  }
			  if (!strict && !this._monthsParse[i]) {
					regex =
						 '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
					this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
			  }
			  // test the regex
			  if (
					strict &&
					format === 'MMMM' &&
					this._longMonthsParse[i].test(monthName)
			  ) {
					return i;
			  } else if (
					strict &&
					format === 'MMM' &&
					this._shortMonthsParse[i].test(monthName)
			  ) {
					return i;
			  } else if (!strict && this._monthsParse[i].test(monthName)) {
					return i;
			  }
		 }
	}

	// MOMENTS

	function setMonth(mom, value) {
		 var dayOfMonth;

		 if (!mom.isValid()) {
			  // No op
			  return mom;
		 }

		 if (typeof value === 'string') {
			  if (/^\d+$/.test(value)) {
					value = toInt(value);
			  } else {
					value = mom.localeData().monthsParse(value);
					// TODO: Another silent failure?
					if (!isNumber(value)) {
						 return mom;
					}
			  }
		 }

		 dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
		 mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
		 return mom;
	}

	function getSetMonth(value) {
		 if (value != null) {
			  setMonth(this, value);
			  hooks.updateOffset(this, true);
			  return this;
		 } else {
			  return get(this, 'Month');
		 }
	}

	function getDaysInMonth() {
		 return daysInMonth(this.year(), this.month());
	}

	function monthsShortRegex(isStrict) {
		 if (this._monthsParseExact) {
			  if (!hasOwnProp(this, '_monthsRegex')) {
					computeMonthsParse.call(this);
			  }
			  if (isStrict) {
					return this._monthsShortStrictRegex;
			  } else {
					return this._monthsShortRegex;
			  }
		 } else {
			  if (!hasOwnProp(this, '_monthsShortRegex')) {
					this._monthsShortRegex = defaultMonthsShortRegex;
			  }
			  return this._monthsShortStrictRegex && isStrict
					? this._monthsShortStrictRegex
					: this._monthsShortRegex;
		 }
	}

	function monthsRegex(isStrict) {
		 if (this._monthsParseExact) {
			  if (!hasOwnProp(this, '_monthsRegex')) {
					computeMonthsParse.call(this);
			  }
			  if (isStrict) {
					return this._monthsStrictRegex;
			  } else {
					return this._monthsRegex;
			  }
		 } else {
			  if (!hasOwnProp(this, '_monthsRegex')) {
					this._monthsRegex = defaultMonthsRegex;
			  }
			  return this._monthsStrictRegex && isStrict
					? this._monthsStrictRegex
					: this._monthsRegex;
		 }
	}

	function computeMonthsParse() {
		 function cmpLenRev(a, b) {
			  return b.length - a.length;
		 }

		 var shortPieces = [],
			  longPieces = [],
			  mixedPieces = [],
			  i,
			  mom;
		 for (i = 0; i < 12; i++) {
			  // make the regex if we don't have it already
			  mom = createUTC([2000, i]);
			  shortPieces.push(this.monthsShort(mom, ''));
			  longPieces.push(this.months(mom, ''));
			  mixedPieces.push(this.months(mom, ''));
			  mixedPieces.push(this.monthsShort(mom, ''));
		 }
		 // Sorting makes sure if one month (or abbr) is a prefix of another it
		 // will match the longer piece.
		 shortPieces.sort(cmpLenRev);
		 longPieces.sort(cmpLenRev);
		 mixedPieces.sort(cmpLenRev);
		 for (i = 0; i < 12; i++) {
			  shortPieces[i] = regexEscape(shortPieces[i]);
			  longPieces[i] = regexEscape(longPieces[i]);
		 }
		 for (i = 0; i < 24; i++) {
			  mixedPieces[i] = regexEscape(mixedPieces[i]);
		 }

		 this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
		 this._monthsShortRegex = this._monthsRegex;
		 this._monthsStrictRegex = new RegExp(
			  '^(' + longPieces.join('|') + ')',
			  'i'
		 );
		 this._monthsShortStrictRegex = new RegExp(
			  '^(' + shortPieces.join('|') + ')',
			  'i'
		 );
	}

	// FORMATTING

	addFormatToken('Y', 0, 0, function () {
		 var y = this.year();
		 return y <= 9999 ? zeroFill(y, 4) : '+' + y;
	});

	addFormatToken(0, ['YY', 2], 0, function () {
		 return this.year() % 100;
	});

	addFormatToken(0, ['YYYY', 4], 0, 'year');
	addFormatToken(0, ['YYYYY', 5], 0, 'year');
	addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

	// ALIASES

	addUnitAlias('year', 'y');

	// PRIORITIES

	addUnitPriority('year', 1);

	// PARSING

	addRegexToken('Y', matchSigned);
	addRegexToken('YY', match1to2, match2);
	addRegexToken('YYYY', match1to4, match4);
	addRegexToken('YYYYY', match1to6, match6);
	addRegexToken('YYYYYY', match1to6, match6);

	addParseToken(['YYYYY', 'YYYYYY'], YEAR);
	addParseToken('YYYY', function (input, array) {
		 array[YEAR] =
			  input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
	});
	addParseToken('YY', function (input, array) {
		 array[YEAR] = hooks.parseTwoDigitYear(input);
	});
	addParseToken('Y', function (input, array) {
		 array[YEAR] = parseInt(input, 10);
	});

	// HELPERS

	function daysInYear(year) {
		 return isLeapYear(year) ? 366 : 365;
	}

	// HOOKS

	hooks.parseTwoDigitYear = function (input) {
		 return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
	};

	// MOMENTS

	var getSetYear = makeGetSet('FullYear', true);

	function getIsLeapYear() {
		 return isLeapYear(this.year());
	}

	function createDate(y, m, d, h, M, s, ms) {
		 // can't just apply() to create a date:
		 // https://stackoverflow.com/q/181348
		 var date;
		 // the date constructor remaps years 0-99 to 1900-1999
		 if (y < 100 && y >= 0) {
			  // preserve leap years using a full 400 year cycle, then reset
			  date = new Date(y + 400, m, d, h, M, s, ms);
			  if (isFinite(date.getFullYear())) {
					date.setFullYear(y);
			  }
		 } else {
			  date = new Date(y, m, d, h, M, s, ms);
		 }

		 return date;
	}

	function createUTCDate(y) {
		 var date, args;
		 // the Date.UTC function remaps years 0-99 to 1900-1999
		 if (y < 100 && y >= 0) {
			  args = Array.prototype.slice.call(arguments);
			  // preserve leap years using a full 400 year cycle, then reset
			  args[0] = y + 400;
			  date = new Date(Date.UTC.apply(null, args));
			  if (isFinite(date.getUTCFullYear())) {
					date.setUTCFullYear(y);
			  }
		 } else {
			  date = new Date(Date.UTC.apply(null, arguments));
		 }

		 return date;
	}

	// start-of-first-week - start-of-year
	function firstWeekOffset(year, dow, doy) {
		 var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
			  fwd = 7 + dow - doy,
			  // first-week day local weekday -- which local weekday is fwd
			  fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

		 return -fwdlw + fwd - 1;
	}

	// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
	function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
		 var localWeekday = (7 + weekday - dow) % 7,
			  weekOffset = firstWeekOffset(year, dow, doy),
			  dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
			  resYear,
			  resDayOfYear;

		 if (dayOfYear <= 0) {
			  resYear = year - 1;
			  resDayOfYear = daysInYear(resYear) + dayOfYear;
		 } else if (dayOfYear > daysInYear(year)) {
			  resYear = year + 1;
			  resDayOfYear = dayOfYear - daysInYear(year);
		 } else {
			  resYear = year;
			  resDayOfYear = dayOfYear;
		 }

		 return {
			  year: resYear,
			  dayOfYear: resDayOfYear,
		 };
	}

	function weekOfYear(mom, dow, doy) {
		 var weekOffset = firstWeekOffset(mom.year(), dow, doy),
			  week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
			  resWeek,
			  resYear;

		 if (week < 1) {
			  resYear = mom.year() - 1;
			  resWeek = week + weeksInYear(resYear, dow, doy);
		 } else if (week > weeksInYear(mom.year(), dow, doy)) {
			  resWeek = week - weeksInYear(mom.year(), dow, doy);
			  resYear = mom.year() + 1;
		 } else {
			  resYear = mom.year();
			  resWeek = week;
		 }

		 return {
			  week: resWeek,
			  year: resYear,
		 };
	}

	function weeksInYear(year, dow, doy) {
		 var weekOffset = firstWeekOffset(year, dow, doy),
			  weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
		 return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
	}

	// FORMATTING

	addFormatToken('w', ['ww', 2], 'wo', 'week');
	addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

	// ALIASES

	addUnitAlias('week', 'w');
	addUnitAlias('isoWeek', 'W');

	// PRIORITIES

	addUnitPriority('week', 5);
	addUnitPriority('isoWeek', 5);

	// PARSING

	addRegexToken('w', match1to2);
	addRegexToken('ww', match1to2, match2);
	addRegexToken('W', match1to2);
	addRegexToken('WW', match1to2, match2);

	addWeekParseToken(
		 ['w', 'ww', 'W', 'WW'],
		 function (input, week, config, token) {
			  week[token.substr(0, 1)] = toInt(input);
		 }
	);

	// HELPERS

	// LOCALES

	function localeWeek(mom) {
		 return weekOfYear(mom, this._week.dow, this._week.doy).week;
	}

	var defaultLocaleWeek = {
		 dow: 0, // Sunday is the first day of the week.
		 doy: 6, // The week that contains Jan 6th is the first week of the year.
	};

	function localeFirstDayOfWeek() {
		 return this._week.dow;
	}

	function localeFirstDayOfYear() {
		 return this._week.doy;
	}

	// MOMENTS

	function getSetWeek(input) {
		 var week = this.localeData().week(this);
		 return input == null ? week : this.add((input - week) * 7, 'd');
	}

	function getSetISOWeek(input) {
		 var week = weekOfYear(this, 1, 4).week;
		 return input == null ? week : this.add((input - week) * 7, 'd');
	}

	// FORMATTING

	addFormatToken('d', 0, 'do', 'day');

	addFormatToken('dd', 0, 0, function (format) {
		 return this.localeData().weekdaysMin(this, format);
	});

	addFormatToken('ddd', 0, 0, function (format) {
		 return this.localeData().weekdaysShort(this, format);
	});

	addFormatToken('dddd', 0, 0, function (format) {
		 return this.localeData().weekdays(this, format);
	});

	addFormatToken('e', 0, 0, 'weekday');
	addFormatToken('E', 0, 0, 'isoWeekday');

	// ALIASES

	addUnitAlias('day', 'd');
	addUnitAlias('weekday', 'e');
	addUnitAlias('isoWeekday', 'E');

	// PRIORITY
	addUnitPriority('day', 11);
	addUnitPriority('weekday', 11);
	addUnitPriority('isoWeekday', 11);

	// PARSING

	addRegexToken('d', match1to2);
	addRegexToken('e', match1to2);
	addRegexToken('E', match1to2);
	addRegexToken('dd', function (isStrict, locale) {
		 return locale.weekdaysMinRegex(isStrict);
	});
	addRegexToken('ddd', function (isStrict, locale) {
		 return locale.weekdaysShortRegex(isStrict);
	});
	addRegexToken('dddd', function (isStrict, locale) {
		 return locale.weekdaysRegex(isStrict);
	});

	addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
		 var weekday = config._locale.weekdaysParse(input, token, config._strict);
		 // if we didn't get a weekday name, mark the date as invalid
		 if (weekday != null) {
			  week.d = weekday;
		 } else {
			  getParsingFlags(config).invalidWeekday = input;
		 }
	});

	addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
		 week[token] = toInt(input);
	});

	// HELPERS

	function parseWeekday(input, locale) {
		 if (typeof input !== 'string') {
			  return input;
		 }

		 if (!isNaN(input)) {
			  return parseInt(input, 10);
		 }

		 input = locale.weekdaysParse(input);
		 if (typeof input === 'number') {
			  return input;
		 }

		 return null;
	}

	function parseIsoWeekday(input, locale) {
		 if (typeof input === 'string') {
			  return locale.weekdaysParse(input) % 7 || 7;
		 }
		 return isNaN(input) ? null : input;
	}

	// LOCALES
	function shiftWeekdays(ws, n) {
		 return ws.slice(n, 7).concat(ws.slice(0, n));
	}

	var defaultLocaleWeekdays =
			  'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
		 defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
		 defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
		 defaultWeekdaysRegex = matchWord,
		 defaultWeekdaysShortRegex = matchWord,
		 defaultWeekdaysMinRegex = matchWord;

	function localeWeekdays(m, format) {
		 var weekdays = isArray(this._weekdays)
			  ? this._weekdays
			  : this._weekdays[
					  m && m !== true && this._weekdays.isFormat.test(format)
							? 'format'
							: 'standalone'
				 ];
		 return m === true
			  ? shiftWeekdays(weekdays, this._week.dow)
			  : m
			  ? weekdays[m.day()]
			  : weekdays;
	}

	function localeWeekdaysShort(m) {
		 return m === true
			  ? shiftWeekdays(this._weekdaysShort, this._week.dow)
			  : m
			  ? this._weekdaysShort[m.day()]
			  : this._weekdaysShort;
	}

	function localeWeekdaysMin(m) {
		 return m === true
			  ? shiftWeekdays(this._weekdaysMin, this._week.dow)
			  : m
			  ? this._weekdaysMin[m.day()]
			  : this._weekdaysMin;
	}

	function handleStrictParse$1(weekdayName, format, strict) {
		 var i,
			  ii,
			  mom,
			  llc = weekdayName.toLocaleLowerCase();
		 if (!this._weekdaysParse) {
			  this._weekdaysParse = [];
			  this._shortWeekdaysParse = [];
			  this._minWeekdaysParse = [];

			  for (i = 0; i < 7; ++i) {
					mom = createUTC([2000, 1]).day(i);
					this._minWeekdaysParse[i] = this.weekdaysMin(
						 mom,
						 ''
					).toLocaleLowerCase();
					this._shortWeekdaysParse[i] = this.weekdaysShort(
						 mom,
						 ''
					).toLocaleLowerCase();
					this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
			  }
		 }

		 if (strict) {
			  if (format === 'dddd') {
					ii = indexOf.call(this._weekdaysParse, llc);
					return ii !== -1 ? ii : null;
			  } else if (format === 'ddd') {
					ii = indexOf.call(this._shortWeekdaysParse, llc);
					return ii !== -1 ? ii : null;
			  } else {
					ii = indexOf.call(this._minWeekdaysParse, llc);
					return ii !== -1 ? ii : null;
			  }
		 } else {
			  if (format === 'dddd') {
					ii = indexOf.call(this._weekdaysParse, llc);
					if (ii !== -1) {
						 return ii;
					}
					ii = indexOf.call(this._shortWeekdaysParse, llc);
					if (ii !== -1) {
						 return ii;
					}
					ii = indexOf.call(this._minWeekdaysParse, llc);
					return ii !== -1 ? ii : null;
			  } else if (format === 'ddd') {
					ii = indexOf.call(this._shortWeekdaysParse, llc);
					if (ii !== -1) {
						 return ii;
					}
					ii = indexOf.call(this._weekdaysParse, llc);
					if (ii !== -1) {
						 return ii;
					}
					ii = indexOf.call(this._minWeekdaysParse, llc);
					return ii !== -1 ? ii : null;
			  } else {
					ii = indexOf.call(this._minWeekdaysParse, llc);
					if (ii !== -1) {
						 return ii;
					}
					ii = indexOf.call(this._weekdaysParse, llc);
					if (ii !== -1) {
						 return ii;
					}
					ii = indexOf.call(this._shortWeekdaysParse, llc);
					return ii !== -1 ? ii : null;
			  }
		 }
	}

	function localeWeekdaysParse(weekdayName, format, strict) {
		 var i, mom, regex;

		 if (this._weekdaysParseExact) {
			  return handleStrictParse$1.call(this, weekdayName, format, strict);
		 }

		 if (!this._weekdaysParse) {
			  this._weekdaysParse = [];
			  this._minWeekdaysParse = [];
			  this._shortWeekdaysParse = [];
			  this._fullWeekdaysParse = [];
		 }

		 for (i = 0; i < 7; i++) {
			  // make the regex if we don't have it already

			  mom = createUTC([2000, 1]).day(i);
			  if (strict && !this._fullWeekdaysParse[i]) {
					this._fullWeekdaysParse[i] = new RegExp(
						 '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
						 'i'
					);
					this._shortWeekdaysParse[i] = new RegExp(
						 '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
						 'i'
					);
					this._minWeekdaysParse[i] = new RegExp(
						 '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
						 'i'
					);
			  }
			  if (!this._weekdaysParse[i]) {
					regex =
						 '^' +
						 this.weekdays(mom, '') +
						 '|^' +
						 this.weekdaysShort(mom, '') +
						 '|^' +
						 this.weekdaysMin(mom, '');
					this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
			  }
			  // test the regex
			  if (
					strict &&
					format === 'dddd' &&
					this._fullWeekdaysParse[i].test(weekdayName)
			  ) {
					return i;
			  } else if (
					strict &&
					format === 'ddd' &&
					this._shortWeekdaysParse[i].test(weekdayName)
			  ) {
					return i;
			  } else if (
					strict &&
					format === 'dd' &&
					this._minWeekdaysParse[i].test(weekdayName)
			  ) {
					return i;
			  } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
					return i;
			  }
		 }
	}

	// MOMENTS

	function getSetDayOfWeek(input) {
		 if (!this.isValid()) {
			  return input != null ? this : NaN;
		 }
		 var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
		 if (input != null) {
			  input = parseWeekday(input, this.localeData());
			  return this.add(input - day, 'd');
		 } else {
			  return day;
		 }
	}

	function getSetLocaleDayOfWeek(input) {
		 if (!this.isValid()) {
			  return input != null ? this : NaN;
		 }
		 var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
		 return input == null ? weekday : this.add(input - weekday, 'd');
	}

	function getSetISODayOfWeek(input) {
		 if (!this.isValid()) {
			  return input != null ? this : NaN;
		 }

		 // behaves the same as moment#day except
		 // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
		 // as a setter, sunday should belong to the previous week.

		 if (input != null) {
			  var weekday = parseIsoWeekday(input, this.localeData());
			  return this.day(this.day() % 7 ? weekday : weekday - 7);
		 } else {
			  return this.day() || 7;
		 }
	}

	function weekdaysRegex(isStrict) {
		 if (this._weekdaysParseExact) {
			  if (!hasOwnProp(this, '_weekdaysRegex')) {
					computeWeekdaysParse.call(this);
			  }
			  if (isStrict) {
					return this._weekdaysStrictRegex;
			  } else {
					return this._weekdaysRegex;
			  }
		 } else {
			  if (!hasOwnProp(this, '_weekdaysRegex')) {
					this._weekdaysRegex = defaultWeekdaysRegex;
			  }
			  return this._weekdaysStrictRegex && isStrict
					? this._weekdaysStrictRegex
					: this._weekdaysRegex;
		 }
	}

	function weekdaysShortRegex(isStrict) {
		 if (this._weekdaysParseExact) {
			  if (!hasOwnProp(this, '_weekdaysRegex')) {
					computeWeekdaysParse.call(this);
			  }
			  if (isStrict) {
					return this._weekdaysShortStrictRegex;
			  } else {
					return this._weekdaysShortRegex;
			  }
		 } else {
			  if (!hasOwnProp(this, '_weekdaysShortRegex')) {
					this._weekdaysShortRegex = defaultWeekdaysShortRegex;
			  }
			  return this._weekdaysShortStrictRegex && isStrict
					? this._weekdaysShortStrictRegex
					: this._weekdaysShortRegex;
		 }
	}

	function weekdaysMinRegex(isStrict) {
		 if (this._weekdaysParseExact) {
			  if (!hasOwnProp(this, '_weekdaysRegex')) {
					computeWeekdaysParse.call(this);
			  }
			  if (isStrict) {
					return this._weekdaysMinStrictRegex;
			  } else {
					return this._weekdaysMinRegex;
			  }
		 } else {
			  if (!hasOwnProp(this, '_weekdaysMinRegex')) {
					this._weekdaysMinRegex = defaultWeekdaysMinRegex;
			  }
			  return this._weekdaysMinStrictRegex && isStrict
					? this._weekdaysMinStrictRegex
					: this._weekdaysMinRegex;
		 }
	}

	function computeWeekdaysParse() {
		 function cmpLenRev(a, b) {
			  return b.length - a.length;
		 }

		 var minPieces = [],
			  shortPieces = [],
			  longPieces = [],
			  mixedPieces = [],
			  i,
			  mom,
			  minp,
			  shortp,
			  longp;
		 for (i = 0; i < 7; i++) {
			  // make the regex if we don't have it already
			  mom = createUTC([2000, 1]).day(i);
			  minp = regexEscape(this.weekdaysMin(mom, ''));
			  shortp = regexEscape(this.weekdaysShort(mom, ''));
			  longp = regexEscape(this.weekdays(mom, ''));
			  minPieces.push(minp);
			  shortPieces.push(shortp);
			  longPieces.push(longp);
			  mixedPieces.push(minp);
			  mixedPieces.push(shortp);
			  mixedPieces.push(longp);
		 }
		 // Sorting makes sure if one weekday (or abbr) is a prefix of another it
		 // will match the longer piece.
		 minPieces.sort(cmpLenRev);
		 shortPieces.sort(cmpLenRev);
		 longPieces.sort(cmpLenRev);
		 mixedPieces.sort(cmpLenRev);

		 this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
		 this._weekdaysShortRegex = this._weekdaysRegex;
		 this._weekdaysMinRegex = this._weekdaysRegex;

		 this._weekdaysStrictRegex = new RegExp(
			  '^(' + longPieces.join('|') + ')',
			  'i'
		 );
		 this._weekdaysShortStrictRegex = new RegExp(
			  '^(' + shortPieces.join('|') + ')',
			  'i'
		 );
		 this._weekdaysMinStrictRegex = new RegExp(
			  '^(' + minPieces.join('|') + ')',
			  'i'
		 );
	}

	// FORMATTING

	function hFormat() {
		 return this.hours() % 12 || 12;
	}

	function kFormat() {
		 return this.hours() || 24;
	}

	addFormatToken('H', ['HH', 2], 0, 'hour');
	addFormatToken('h', ['hh', 2], 0, hFormat);
	addFormatToken('k', ['kk', 2], 0, kFormat);

	addFormatToken('hmm', 0, 0, function () {
		 return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
	});

	addFormatToken('hmmss', 0, 0, function () {
		 return (
			  '' +
			  hFormat.apply(this) +
			  zeroFill(this.minutes(), 2) +
			  zeroFill(this.seconds(), 2)
		 );
	});

	addFormatToken('Hmm', 0, 0, function () {
		 return '' + this.hours() + zeroFill(this.minutes(), 2);
	});

	addFormatToken('Hmmss', 0, 0, function () {
		 return (
			  '' +
			  this.hours() +
			  zeroFill(this.minutes(), 2) +
			  zeroFill(this.seconds(), 2)
		 );
	});

	function meridiem(token, lowercase) {
		 addFormatToken(token, 0, 0, function () {
			  return this.localeData().meridiem(
					this.hours(),
					this.minutes(),
					lowercase
			  );
		 });
	}

	meridiem('a', true);
	meridiem('A', false);

	// ALIASES

	addUnitAlias('hour', 'h');

	// PRIORITY
	addUnitPriority('hour', 13);

	// PARSING

	function matchMeridiem(isStrict, locale) {
		 return locale._meridiemParse;
	}

	addRegexToken('a', matchMeridiem);
	addRegexToken('A', matchMeridiem);
	addRegexToken('H', match1to2);
	addRegexToken('h', match1to2);
	addRegexToken('k', match1to2);
	addRegexToken('HH', match1to2, match2);
	addRegexToken('hh', match1to2, match2);
	addRegexToken('kk', match1to2, match2);

	addRegexToken('hmm', match3to4);
	addRegexToken('hmmss', match5to6);
	addRegexToken('Hmm', match3to4);
	addRegexToken('Hmmss', match5to6);

	addParseToken(['H', 'HH'], HOUR);
	addParseToken(['k', 'kk'], function (input, array, config) {
		 var kInput = toInt(input);
		 array[HOUR] = kInput === 24 ? 0 : kInput;
	});
	addParseToken(['a', 'A'], function (input, array, config) {
		 config._isPm = config._locale.isPM(input);
		 config._meridiem = input;
	});
	addParseToken(['h', 'hh'], function (input, array, config) {
		 array[HOUR] = toInt(input);
		 getParsingFlags(config).bigHour = true;
	});
	addParseToken('hmm', function (input, array, config) {
		 var pos = input.length - 2;
		 array[HOUR] = toInt(input.substr(0, pos));
		 array[MINUTE] = toInt(input.substr(pos));
		 getParsingFlags(config).bigHour = true;
	});
	addParseToken('hmmss', function (input, array, config) {
		 var pos1 = input.length - 4,
			  pos2 = input.length - 2;
		 array[HOUR] = toInt(input.substr(0, pos1));
		 array[MINUTE] = toInt(input.substr(pos1, 2));
		 array[SECOND] = toInt(input.substr(pos2));
		 getParsingFlags(config).bigHour = true;
	});
	addParseToken('Hmm', function (input, array, config) {
		 var pos = input.length - 2;
		 array[HOUR] = toInt(input.substr(0, pos));
		 array[MINUTE] = toInt(input.substr(pos));
	});
	addParseToken('Hmmss', function (input, array, config) {
		 var pos1 = input.length - 4,
			  pos2 = input.length - 2;
		 array[HOUR] = toInt(input.substr(0, pos1));
		 array[MINUTE] = toInt(input.substr(pos1, 2));
		 array[SECOND] = toInt(input.substr(pos2));
	});

	// LOCALES

	function localeIsPM(input) {
		 // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
		 // Using charAt should be more compatible.
		 return (input + '').toLowerCase().charAt(0) === 'p';
	}

	var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
		 // Setting the hour should keep the time, because the user explicitly
		 // specified which hour they want. So trying to maintain the same hour (in
		 // a new timezone) makes sense. Adding/subtracting hours does not follow
		 // this rule.
		 getSetHour = makeGetSet('Hours', true);

	function localeMeridiem(hours, minutes, isLower) {
		 if (hours > 11) {
			  return isLower ? 'pm' : 'PM';
		 } else {
			  return isLower ? 'am' : 'AM';
		 }
	}

	var baseConfig = {
		 calendar: defaultCalendar,
		 longDateFormat: defaultLongDateFormat,
		 invalidDate: defaultInvalidDate,
		 ordinal: defaultOrdinal,
		 dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
		 relativeTime: defaultRelativeTime,

		 months: defaultLocaleMonths,
		 monthsShort: defaultLocaleMonthsShort,

		 week: defaultLocaleWeek,

		 weekdays: defaultLocaleWeekdays,
		 weekdaysMin: defaultLocaleWeekdaysMin,
		 weekdaysShort: defaultLocaleWeekdaysShort,

		 meridiemParse: defaultLocaleMeridiemParse,
	};

	// internal storage for locale config files
	var locales = {},
		 localeFamilies = {},
		 globalLocale;

	function commonPrefix(arr1, arr2) {
		 var i,
			  minl = Math.min(arr1.length, arr2.length);
		 for (i = 0; i < minl; i += 1) {
			  if (arr1[i] !== arr2[i]) {
					return i;
			  }
		 }
		 return minl;
	}

	function normalizeLocale(key) {
		 return key ? key.toLowerCase().replace('_', '-') : key;
	}

	// pick the locale from the array
	// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
	// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
	function chooseLocale(names) {
		 var i = 0,
			  j,
			  next,
			  locale,
			  split;

		 while (i < names.length) {
			  split = normalizeLocale(names[i]).split('-');
			  j = split.length;
			  next = normalizeLocale(names[i + 1]);
			  next = next ? next.split('-') : null;
			  while (j > 0) {
					locale = loadLocale(split.slice(0, j).join('-'));
					if (locale) {
						 return locale;
					}
					if (
						 next &&
						 next.length >= j &&
						 commonPrefix(split, next) >= j - 1
					) {
						 //the next array item is better than a shallower substring of this one
						 break;
					}
					j--;
			  }
			  i++;
		 }
		 return globalLocale;
	}

	function isLocaleNameSane(name) {
		 // Prevent names that look like filesystem paths, i.e contain '/' or '\'
		 return name.match('^[^/\\\\]*$') != null;
	}

	function loadLocale(name) {
		 var oldLocale = null,
			  aliasedRequire;
		 // TODO: Find a better way to register and load all the locales in Node
		 if (
			  locales[name] === undefined &&
			  typeof module !== 'undefined' &&
			  module &&
			  module.exports &&
			  isLocaleNameSane(name)
		 ) {
			  try {
					oldLocale = globalLocale._abbr;
					aliasedRequire = require;
					aliasedRequire('./locale/' + name);
					getSetGlobalLocale(oldLocale);
			  } catch (e) {
					// mark as not found to avoid repeating expensive file require call causing high CPU
					// when trying to find en-US, en_US, en-us for every format call
					locales[name] = null; // null means not found
			  }
		 }
		 return locales[name];
	}

	// This function will load locale and then set the global locale.  If
	// no arguments are passed in, it will simply return the current global
	// locale key.
	function getSetGlobalLocale(key, values) {
		 var data;
		 if (key) {
			  if (isUndefined(values)) {
					data = getLocale(key);
			  } else {
					data = defineLocale(key, values);
			  }

			  if (data) {
					// moment.duration._locale = moment._locale = data;
					globalLocale = data;
			  } else {
					if (typeof console !== 'undefined' && console.warn) {
						 //warn user if arguments are passed but the locale could not be set
						 console.warn(
							  'Locale ' + key + ' not found. Did you forget to load it?'
						 );
					}
			  }
		 }

		 return globalLocale._abbr;
	}

	function defineLocale(name, config) {
		 if (config !== null) {
			  var locale,
					parentConfig = baseConfig;
			  config.abbr = name;
			  if (locales[name] != null) {
					deprecateSimple(
						 'defineLocaleOverride',
						 'use moment.updateLocale(localeName, config) to change ' +
							  'an existing locale. moment.defineLocale(localeName, ' +
							  'config) should only be used for creating a new locale ' +
							  'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
					);
					parentConfig = locales[name]._config;
			  } else if (config.parentLocale != null) {
					if (locales[config.parentLocale] != null) {
						 parentConfig = locales[config.parentLocale]._config;
					} else {
						 locale = loadLocale(config.parentLocale);
						 if (locale != null) {
							  parentConfig = locale._config;
						 } else {
							  if (!localeFamilies[config.parentLocale]) {
									localeFamilies[config.parentLocale] = [];
							  }
							  localeFamilies[config.parentLocale].push({
									name: name,
									config: config,
							  });
							  return null;
						 }
					}
			  }
			  locales[name] = new Locale(mergeConfigs(parentConfig, config));

			  if (localeFamilies[name]) {
					localeFamilies[name].forEach(function (x) {
						 defineLocale(x.name, x.config);
					});
			  }

			  // backwards compat for now: also set the locale
			  // make sure we set the locale AFTER all child locales have been
			  // created, so we won't end up with the child locale set.
			  getSetGlobalLocale(name);

			  return locales[name];
		 } else {
			  // useful for testing
			  delete locales[name];
			  return null;
		 }
	}

	function updateLocale(name, config) {
		 if (config != null) {
			  var locale,
					tmpLocale,
					parentConfig = baseConfig;

			  if (locales[name] != null && locales[name].parentLocale != null) {
					// Update existing child locale in-place to avoid memory-leaks
					locales[name].set(mergeConfigs(locales[name]._config, config));
			  } else {
					// MERGE
					tmpLocale = loadLocale(name);
					if (tmpLocale != null) {
						 parentConfig = tmpLocale._config;
					}
					config = mergeConfigs(parentConfig, config);
					if (tmpLocale == null) {
						 // updateLocale is called for creating a new locale
						 // Set abbr so it will have a name (getters return
						 // undefined otherwise).
						 config.abbr = name;
					}
					locale = new Locale(config);
					locale.parentLocale = locales[name];
					locales[name] = locale;
			  }

			  // backwards compat for now: also set the locale
			  getSetGlobalLocale(name);
		 } else {
			  // pass null for config to unupdate, useful for tests
			  if (locales[name] != null) {
					if (locales[name].parentLocale != null) {
						 locales[name] = locales[name].parentLocale;
						 if (name === getSetGlobalLocale()) {
							  getSetGlobalLocale(name);
						 }
					} else if (locales[name] != null) {
						 delete locales[name];
					}
			  }
		 }
		 return locales[name];
	}

	// returns locale data
	function getLocale(key) {
		 var locale;

		 if (key && key._locale && key._locale._abbr) {
			  key = key._locale._abbr;
		 }

		 if (!key) {
			  return globalLocale;
		 }

		 if (!isArray(key)) {
			  //short-circuit everything else
			  locale = loadLocale(key);
			  if (locale) {
					return locale;
			  }
			  key = [key];
		 }

		 return chooseLocale(key);
	}

	function listLocales() {
		 return keys(locales);
	}

	function checkOverflow(m) {
		 var overflow,
			  a = m._a;

		 if (a && getParsingFlags(m).overflow === -2) {
			  overflow =
					a[MONTH] < 0 || a[MONTH] > 11
						 ? MONTH
						 : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
						 ? DATE
						 : a[HOUR] < 0 ||
							a[HOUR] > 24 ||
							(a[HOUR] === 24 &&
								 (a[MINUTE] !== 0 ||
									  a[SECOND] !== 0 ||
									  a[MILLISECOND] !== 0))
						 ? HOUR
						 : a[MINUTE] < 0 || a[MINUTE] > 59
						 ? MINUTE
						 : a[SECOND] < 0 || a[SECOND] > 59
						 ? SECOND
						 : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
						 ? MILLISECOND
						 : -1;

			  if (
					getParsingFlags(m)._overflowDayOfYear &&
					(overflow < YEAR || overflow > DATE)
			  ) {
					overflow = DATE;
			  }
			  if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
					overflow = WEEK;
			  }
			  if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
					overflow = WEEKDAY;
			  }

			  getParsingFlags(m).overflow = overflow;
		 }

		 return m;
	}

	// iso 8601 regex
	// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
	var extendedIsoRegex =
			  /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
		 basicIsoRegex =
			  /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
		 tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
		 isoDates = [
			  ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
			  ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
			  ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
			  ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
			  ['YYYY-DDD', /\d{4}-\d{3}/],
			  ['YYYY-MM', /\d{4}-\d\d/, false],
			  ['YYYYYYMMDD', /[+-]\d{10}/],
			  ['YYYYMMDD', /\d{8}/],
			  ['GGGG[W]WWE', /\d{4}W\d{3}/],
			  ['GGGG[W]WW', /\d{4}W\d{2}/, false],
			  ['YYYYDDD', /\d{7}/],
			  ['YYYYMM', /\d{6}/, false],
			  ['YYYY', /\d{4}/, false],
		 ],
		 // iso time formats and regexes
		 isoTimes = [
			  ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
			  ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
			  ['HH:mm:ss', /\d\d:\d\d:\d\d/],
			  ['HH:mm', /\d\d:\d\d/],
			  ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
			  ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
			  ['HHmmss', /\d\d\d\d\d\d/],
			  ['HHmm', /\d\d\d\d/],
			  ['HH', /\d\d/],
		 ],
		 aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
		 // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
		 rfc2822 =
			  /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
		 obsOffsets = {
			  UT: 0,
			  GMT: 0,
			  EDT: -4 * 60,
			  EST: -5 * 60,
			  CDT: -5 * 60,
			  CST: -6 * 60,
			  MDT: -6 * 60,
			  MST: -7 * 60,
			  PDT: -7 * 60,
			  PST: -8 * 60,
		 };

	// date from iso format
	function configFromISO(config) {
		 var i,
			  l,
			  string = config._i,
			  match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
			  allowTime,
			  dateFormat,
			  timeFormat,
			  tzFormat,
			  isoDatesLen = isoDates.length,
			  isoTimesLen = isoTimes.length;

		 if (match) {
			  getParsingFlags(config).iso = true;
			  for (i = 0, l = isoDatesLen; i < l; i++) {
					if (isoDates[i][1].exec(match[1])) {
						 dateFormat = isoDates[i][0];
						 allowTime = isoDates[i][2] !== false;
						 break;
					}
			  }
			  if (dateFormat == null) {
					config._isValid = false;
					return;
			  }
			  if (match[3]) {
					for (i = 0, l = isoTimesLen; i < l; i++) {
						 if (isoTimes[i][1].exec(match[3])) {
							  // match[2] should be 'T' or space
							  timeFormat = (match[2] || ' ') + isoTimes[i][0];
							  break;
						 }
					}
					if (timeFormat == null) {
						 config._isValid = false;
						 return;
					}
			  }
			  if (!allowTime && timeFormat != null) {
					config._isValid = false;
					return;
			  }
			  if (match[4]) {
					if (tzRegex.exec(match[4])) {
						 tzFormat = 'Z';
					} else {
						 config._isValid = false;
						 return;
					}
			  }
			  config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
			  configFromStringAndFormat(config);
		 } else {
			  config._isValid = false;
		 }
	}

	function extractFromRFC2822Strings(
		 yearStr,
		 monthStr,
		 dayStr,
		 hourStr,
		 minuteStr,
		 secondStr
	) {
		 var result = [
			  untruncateYear(yearStr),
			  defaultLocaleMonthsShort.indexOf(monthStr),
			  parseInt(dayStr, 10),
			  parseInt(hourStr, 10),
			  parseInt(minuteStr, 10),
		 ];

		 if (secondStr) {
			  result.push(parseInt(secondStr, 10));
		 }

		 return result;
	}

	function untruncateYear(yearStr) {
		 var year = parseInt(yearStr, 10);
		 if (year <= 49) {
			  return 2000 + year;
		 } else if (year <= 999) {
			  return 1900 + year;
		 }
		 return year;
	}

	function preprocessRFC2822(s) {
		 // Remove comments and folding whitespace and replace multiple-spaces with a single space
		 return s
			  .replace(/\([^()]*\)|[\n\t]/g, ' ')
			  .replace(/(\s\s+)/g, ' ')
			  .replace(/^\s\s*/, '')
			  .replace(/\s\s*$/, '');
	}

	function checkWeekday(weekdayStr, parsedInput, config) {
		 if (weekdayStr) {
			  // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
			  var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
					weekdayActual = new Date(
						 parsedInput[0],
						 parsedInput[1],
						 parsedInput[2]
					).getDay();
			  if (weekdayProvided !== weekdayActual) {
					getParsingFlags(config).weekdayMismatch = true;
					config._isValid = false;
					return false;
			  }
		 }
		 return true;
	}

	function calculateOffset(obsOffset, militaryOffset, numOffset) {
		 if (obsOffset) {
			  return obsOffsets[obsOffset];
		 } else if (militaryOffset) {
			  // the only allowed military tz is Z
			  return 0;
		 } else {
			  var hm = parseInt(numOffset, 10),
					m = hm % 100,
					h = (hm - m) / 100;
			  return h * 60 + m;
		 }
	}

	// date and time from ref 2822 format
	function configFromRFC2822(config) {
		 var match = rfc2822.exec(preprocessRFC2822(config._i)),
			  parsedArray;
		 if (match) {
			  parsedArray = extractFromRFC2822Strings(
					match[4],
					match[3],
					match[2],
					match[5],
					match[6],
					match[7]
			  );
			  if (!checkWeekday(match[1], parsedArray, config)) {
					return;
			  }

			  config._a = parsedArray;
			  config._tzm = calculateOffset(match[8], match[9], match[10]);

			  config._d = createUTCDate.apply(null, config._a);
			  config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

			  getParsingFlags(config).rfc2822 = true;
		 } else {
			  config._isValid = false;
		 }
	}

	// date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
	function configFromString(config) {
		 var matched = aspNetJsonRegex.exec(config._i);
		 if (matched !== null) {
			  config._d = new Date(+matched[1]);
			  return;
		 }

		 configFromISO(config);
		 if (config._isValid === false) {
			  delete config._isValid;
		 } else {
			  return;
		 }

		 configFromRFC2822(config);
		 if (config._isValid === false) {
			  delete config._isValid;
		 } else {
			  return;
		 }

		 if (config._strict) {
			  config._isValid = false;
		 } else {
			  // Final attempt, use Input Fallback
			  hooks.createFromInputFallback(config);
		 }
	}

	hooks.createFromInputFallback = deprecate(
		 'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
			  'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
			  'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
		 function (config) {
			  config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
		 }
	);

	// Pick the first defined of two or three arguments.
	function defaults(a, b, c) {
		 if (a != null) {
			  return a;
		 }
		 if (b != null) {
			  return b;
		 }
		 return c;
	}

	function currentDateArray(config) {
		 // hooks is actually the exported moment object
		 var nowValue = new Date(hooks.now());
		 if (config._useUTC) {
			  return [
					nowValue.getUTCFullYear(),
					nowValue.getUTCMonth(),
					nowValue.getUTCDate(),
			  ];
		 }
		 return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
	}

	// convert an array to a date.
	// the array should mirror the parameters below
	// note: all values past the year are optional and will default to the lowest possible value.
	// [year, month, day , hour, minute, second, millisecond]
	function configFromArray(config) {
		 var i,
			  date,
			  input = [],
			  currentDate,
			  expectedWeekday,
			  yearToUse;

		 if (config._d) {
			  return;
		 }

		 currentDate = currentDateArray(config);

		 //compute day of the year from weeks and weekdays
		 if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
			  dayOfYearFromWeekInfo(config);
		 }

		 //if the day of the year is set, figure out what it is
		 if (config._dayOfYear != null) {
			  yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

			  if (
					config._dayOfYear > daysInYear(yearToUse) ||
					config._dayOfYear === 0
			  ) {
					getParsingFlags(config)._overflowDayOfYear = true;
			  }

			  date = createUTCDate(yearToUse, 0, config._dayOfYear);
			  config._a[MONTH] = date.getUTCMonth();
			  config._a[DATE] = date.getUTCDate();
		 }

		 // Default to current date.
		 // * if no year, month, day of month are given, default to today
		 // * if day of month is given, default month and year
		 // * if month is given, default only year
		 // * if year is given, don't default anything
		 for (i = 0; i < 3 && config._a[i] == null; ++i) {
			  config._a[i] = input[i] = currentDate[i];
		 }

		 // Zero out whatever was not defaulted, including time
		 for (; i < 7; i++) {
			  config._a[i] = input[i] =
					config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
		 }

		 // Check for 24:00:00.000
		 if (
			  config._a[HOUR] === 24 &&
			  config._a[MINUTE] === 0 &&
			  config._a[SECOND] === 0 &&
			  config._a[MILLISECOND] === 0
		 ) {
			  config._nextDay = true;
			  config._a[HOUR] = 0;
		 }

		 config._d = (config._useUTC ? createUTCDate : createDate).apply(
			  null,
			  input
		 );
		 expectedWeekday = config._useUTC
			  ? config._d.getUTCDay()
			  : config._d.getDay();

		 // Apply timezone offset from input. The actual utcOffset can be changed
		 // with parseZone.
		 if (config._tzm != null) {
			  config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
		 }

		 if (config._nextDay) {
			  config._a[HOUR] = 24;
		 }

		 // check for mismatching day of week
		 if (
			  config._w &&
			  typeof config._w.d !== 'undefined' &&
			  config._w.d !== expectedWeekday
		 ) {
			  getParsingFlags(config).weekdayMismatch = true;
		 }
	}

	function dayOfYearFromWeekInfo(config) {
		 var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

		 w = config._w;
		 if (w.GG != null || w.W != null || w.E != null) {
			  dow = 1;
			  doy = 4;

			  // TODO: We need to take the current isoWeekYear, but that depends on
			  // how we interpret now (local, utc, fixed offset). So create
			  // a now version of current config (take local/utc/offset flags, and
			  // create now).
			  weekYear = defaults(
					w.GG,
					config._a[YEAR],
					weekOfYear(createLocal(), 1, 4).year
			  );
			  week = defaults(w.W, 1);
			  weekday = defaults(w.E, 1);
			  if (weekday < 1 || weekday > 7) {
					weekdayOverflow = true;
			  }
		 } else {
			  dow = config._locale._week.dow;
			  doy = config._locale._week.doy;

			  curWeek = weekOfYear(createLocal(), dow, doy);

			  weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

			  // Default to current week.
			  week = defaults(w.w, curWeek.week);

			  if (w.d != null) {
					// weekday -- low day numbers are considered next week
					weekday = w.d;
					if (weekday < 0 || weekday > 6) {
						 weekdayOverflow = true;
					}
			  } else if (w.e != null) {
					// local weekday -- counting starts from beginning of week
					weekday = w.e + dow;
					if (w.e < 0 || w.e > 6) {
						 weekdayOverflow = true;
					}
			  } else {
					// default to beginning of week
					weekday = dow;
			  }
		 }
		 if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
			  getParsingFlags(config)._overflowWeeks = true;
		 } else if (weekdayOverflow != null) {
			  getParsingFlags(config)._overflowWeekday = true;
		 } else {
			  temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
			  config._a[YEAR] = temp.year;
			  config._dayOfYear = temp.dayOfYear;
		 }
	}

	// constant that refers to the ISO standard
	hooks.ISO_8601 = function () {};

	// constant that refers to the RFC 2822 form
	hooks.RFC_2822 = function () {};

	// date from string and format string
	function configFromStringAndFormat(config) {
		 // TODO: Move this to another part of the creation flow to prevent circular deps
		 if (config._f === hooks.ISO_8601) {
			  configFromISO(config);
			  return;
		 }
		 if (config._f === hooks.RFC_2822) {
			  configFromRFC2822(config);
			  return;
		 }
		 config._a = [];
		 getParsingFlags(config).empty = true;

		 // This array is used to make a Date, either with `new Date` or `Date.UTC`
		 var string = '' + config._i,
			  i,
			  parsedInput,
			  tokens,
			  token,
			  skipped,
			  stringLength = string.length,
			  totalParsedInputLength = 0,
			  era,
			  tokenLen;

		 tokens =
			  expandFormat(config._f, config._locale).match(formattingTokens) || [];
		 tokenLen = tokens.length;
		 for (i = 0; i < tokenLen; i++) {
			  token = tokens[i];
			  parsedInput = (string.match(getParseRegexForToken(token, config)) ||
					[])[0];
			  if (parsedInput) {
					skipped = string.substr(0, string.indexOf(parsedInput));
					if (skipped.length > 0) {
						 getParsingFlags(config).unusedInput.push(skipped);
					}
					string = string.slice(
						 string.indexOf(parsedInput) + parsedInput.length
					);
					totalParsedInputLength += parsedInput.length;
			  }
			  // don't parse if it's not a known token
			  if (formatTokenFunctions[token]) {
					if (parsedInput) {
						 getParsingFlags(config).empty = false;
					} else {
						 getParsingFlags(config).unusedTokens.push(token);
					}
					addTimeToArrayFromToken(token, parsedInput, config);
			  } else if (config._strict && !parsedInput) {
					getParsingFlags(config).unusedTokens.push(token);
			  }
		 }

		 // add remaining unparsed input length to the string
		 getParsingFlags(config).charsLeftOver =
			  stringLength - totalParsedInputLength;
		 if (string.length > 0) {
			  getParsingFlags(config).unusedInput.push(string);
		 }

		 // clear _12h flag if hour is <= 12
		 if (
			  config._a[HOUR] <= 12 &&
			  getParsingFlags(config).bigHour === true &&
			  config._a[HOUR] > 0
		 ) {
			  getParsingFlags(config).bigHour = undefined;
		 }

		 getParsingFlags(config).parsedDateParts = config._a.slice(0);
		 getParsingFlags(config).meridiem = config._meridiem;
		 // handle meridiem
		 config._a[HOUR] = meridiemFixWrap(
			  config._locale,
			  config._a[HOUR],
			  config._meridiem
		 );

		 // handle era
		 era = getParsingFlags(config).era;
		 if (era !== null) {
			  config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
		 }

		 configFromArray(config);
		 checkOverflow(config);
	}

	function meridiemFixWrap(locale, hour, meridiem) {
		 var isPm;

		 if (meridiem == null) {
			  // nothing to do
			  return hour;
		 }
		 if (locale.meridiemHour != null) {
			  return locale.meridiemHour(hour, meridiem);
		 } else if (locale.isPM != null) {
			  // Fallback
			  isPm = locale.isPM(meridiem);
			  if (isPm && hour < 12) {
					hour += 12;
			  }
			  if (!isPm && hour === 12) {
					hour = 0;
			  }
			  return hour;
		 } else {
			  // this is not supposed to happen
			  return hour;
		 }
	}

	// date from string and array of format strings
	function configFromStringAndArray(config) {
		 var tempConfig,
			  bestMoment,
			  scoreToBeat,
			  i,
			  currentScore,
			  validFormatFound,
			  bestFormatIsValid = false,
			  configfLen = config._f.length;

		 if (configfLen === 0) {
			  getParsingFlags(config).invalidFormat = true;
			  config._d = new Date(NaN);
			  return;
		 }

		 for (i = 0; i < configfLen; i++) {
			  currentScore = 0;
			  validFormatFound = false;
			  tempConfig = copyConfig({}, config);
			  if (config._useUTC != null) {
					tempConfig._useUTC = config._useUTC;
			  }
			  tempConfig._f = config._f[i];
			  configFromStringAndFormat(tempConfig);

			  if (isValid(tempConfig)) {
					validFormatFound = true;
			  }

			  // if there is any input that was not parsed add a penalty for that format
			  currentScore += getParsingFlags(tempConfig).charsLeftOver;

			  //or tokens
			  currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

			  getParsingFlags(tempConfig).score = currentScore;

			  if (!bestFormatIsValid) {
					if (
						 scoreToBeat == null ||
						 currentScore < scoreToBeat ||
						 validFormatFound
					) {
						 scoreToBeat = currentScore;
						 bestMoment = tempConfig;
						 if (validFormatFound) {
							  bestFormatIsValid = true;
						 }
					}
			  } else {
					if (currentScore < scoreToBeat) {
						 scoreToBeat = currentScore;
						 bestMoment = tempConfig;
					}
			  }
		 }

		 extend(config, bestMoment || tempConfig);
	}

	function configFromObject(config) {
		 if (config._d) {
			  return;
		 }

		 var i = normalizeObjectUnits(config._i),
			  dayOrDate = i.day === undefined ? i.date : i.day;
		 config._a = map(
			  [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
			  function (obj) {
					return obj && parseInt(obj, 10);
			  }
		 );

		 configFromArray(config);
	}

	function createFromConfig(config) {
		 var res = new Moment(checkOverflow(prepareConfig(config)));
		 if (res._nextDay) {
			  // Adding is smart enough around DST
			  res.add(1, 'd');
			  res._nextDay = undefined;
		 }

		 return res;
	}

	function prepareConfig(config) {
		 var input = config._i,
			  format = config._f;

		 config._locale = config._locale || getLocale(config._l);

		 if (input === null || (format === undefined && input === '')) {
			  return createInvalid({ nullInput: true });
		 }

		 if (typeof input === 'string') {
			  config._i = input = config._locale.preparse(input);
		 }

		 if (isMoment(input)) {
			  return new Moment(checkOverflow(input));
		 } else if (isDate(input)) {
			  config._d = input;
		 } else if (isArray(format)) {
			  configFromStringAndArray(config);
		 } else if (format) {
			  configFromStringAndFormat(config);
		 } else {
			  configFromInput(config);
		 }

		 if (!isValid(config)) {
			  config._d = null;
		 }

		 return config;
	}

	function configFromInput(config) {
		 var input = config._i;
		 if (isUndefined(input)) {
			  config._d = new Date(hooks.now());
		 } else if (isDate(input)) {
			  config._d = new Date(input.valueOf());
		 } else if (typeof input === 'string') {
			  configFromString(config);
		 } else if (isArray(input)) {
			  config._a = map(input.slice(0), function (obj) {
					return parseInt(obj, 10);
			  });
			  configFromArray(config);
		 } else if (isObject(input)) {
			  configFromObject(config);
		 } else if (isNumber(input)) {
			  // from milliseconds
			  config._d = new Date(input);
		 } else {
			  hooks.createFromInputFallback(config);
		 }
	}

	function createLocalOrUTC(input, format, locale, strict, isUTC) {
		 var c = {};

		 if (format === true || format === false) {
			  strict = format;
			  format = undefined;
		 }

		 if (locale === true || locale === false) {
			  strict = locale;
			  locale = undefined;
		 }

		 if (
			  (isObject(input) && isObjectEmpty(input)) ||
			  (isArray(input) && input.length === 0)
		 ) {
			  input = undefined;
		 }
		 // object construction must be done this way.
		 // https://github.com/moment/moment/issues/1423
		 c._isAMomentObject = true;
		 c._useUTC = c._isUTC = isUTC;
		 c._l = locale;
		 c._i = input;
		 c._f = format;
		 c._strict = strict;

		 return createFromConfig(c);
	}

	function createLocal(input, format, locale, strict) {
		 return createLocalOrUTC(input, format, locale, strict, false);
	}

	var prototypeMin = deprecate(
			  'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
			  function () {
					var other = createLocal.apply(null, arguments);
					if (this.isValid() && other.isValid()) {
						 return other < this ? this : other;
					} else {
						 return createInvalid();
					}
			  }
		 ),
		 prototypeMax = deprecate(
			  'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
			  function () {
					var other = createLocal.apply(null, arguments);
					if (this.isValid() && other.isValid()) {
						 return other > this ? this : other;
					} else {
						 return createInvalid();
					}
			  }
		 );

	// Pick a moment m from moments so that m[fn](other) is true for all
	// other. This relies on the function fn to be transitive.
	//
	// moments should either be an array of moment objects or an array, whose
	// first element is an array of moment objects.
	function pickBy(fn, moments) {
		 var res, i;
		 if (moments.length === 1 && isArray(moments[0])) {
			  moments = moments[0];
		 }
		 if (!moments.length) {
			  return createLocal();
		 }
		 res = moments[0];
		 for (i = 1; i < moments.length; ++i) {
			  if (!moments[i].isValid() || moments[i][fn](res)) {
					res = moments[i];
			  }
		 }
		 return res;
	}

	// TODO: Use [].sort instead?
	function min() {
		 var args = [].slice.call(arguments, 0);

		 return pickBy('isBefore', args);
	}

	function max() {
		 var args = [].slice.call(arguments, 0);

		 return pickBy('isAfter', args);
	}

	var now = function () {
		 return Date.now ? Date.now() : +new Date();
	};

	var ordering = [
		 'year',
		 'quarter',
		 'month',
		 'week',
		 'day',
		 'hour',
		 'minute',
		 'second',
		 'millisecond',
	];

	function isDurationValid(m) {
		 var key,
			  unitHasDecimal = false,
			  i,
			  orderLen = ordering.length;
		 for (key in m) {
			  if (
					hasOwnProp(m, key) &&
					!(
						 indexOf.call(ordering, key) !== -1 &&
						 (m[key] == null || !isNaN(m[key]))
					)
			  ) {
					return false;
			  }
		 }

		 for (i = 0; i < orderLen; ++i) {
			  if (m[ordering[i]]) {
					if (unitHasDecimal) {
						 return false; // only allow non-integers for smallest unit
					}
					if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
						 unitHasDecimal = true;
					}
			  }
		 }

		 return true;
	}

	function isValid$1() {
		 return this._isValid;
	}

	function createInvalid$1() {
		 return createDuration(NaN);
	}

	function Duration(duration) {
		 var normalizedInput = normalizeObjectUnits(duration),
			  years = normalizedInput.year || 0,
			  quarters = normalizedInput.quarter || 0,
			  months = normalizedInput.month || 0,
			  weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
			  days = normalizedInput.day || 0,
			  hours = normalizedInput.hour || 0,
			  minutes = normalizedInput.minute || 0,
			  seconds = normalizedInput.second || 0,
			  milliseconds = normalizedInput.millisecond || 0;

		 this._isValid = isDurationValid(normalizedInput);

		 // representation for dateAddRemove
		 this._milliseconds =
			  +milliseconds +
			  seconds * 1e3 + // 1000
			  minutes * 6e4 + // 1000 * 60
			  hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
		 // Because of dateAddRemove treats 24 hours as different from a
		 // day when working around DST, we need to store them separately
		 this._days = +days + weeks * 7;
		 // It is impossible to translate months into days without knowing
		 // which months you are are talking about, so we have to store
		 // it separately.
		 this._months = +months + quarters * 3 + years * 12;

		 this._data = {};

		 this._locale = getLocale();

		 this._bubble();
	}

	function isDuration(obj) {
		 return obj instanceof Duration;
	}

	function absRound(number) {
		 if (number < 0) {
			  return Math.round(-1 * number) * -1;
		 } else {
			  return Math.round(number);
		 }
	}

	// compare two arrays, return the number of differences
	function compareArrays(array1, array2, dontConvert) {
		 var len = Math.min(array1.length, array2.length),
			  lengthDiff = Math.abs(array1.length - array2.length),
			  diffs = 0,
			  i;
		 for (i = 0; i < len; i++) {
			  if (
					(dontConvert && array1[i] !== array2[i]) ||
					(!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
			  ) {
					diffs++;
			  }
		 }
		 return diffs + lengthDiff;
	}

	// FORMATTING

	function offset(token, separator) {
		 addFormatToken(token, 0, 0, function () {
			  var offset = this.utcOffset(),
					sign = '+';
			  if (offset < 0) {
					offset = -offset;
					sign = '-';
			  }
			  return (
					sign +
					zeroFill(~~(offset / 60), 2) +
					separator +
					zeroFill(~~offset % 60, 2)
			  );
		 });
	}

	offset('Z', ':');
	offset('ZZ', '');

	// PARSING

	addRegexToken('Z', matchShortOffset);
	addRegexToken('ZZ', matchShortOffset);
	addParseToken(['Z', 'ZZ'], function (input, array, config) {
		 config._useUTC = true;
		 config._tzm = offsetFromString(matchShortOffset, input);
	});

	// HELPERS

	// timezone chunker
	// '+10:00' > ['10',  '00']
	// '-1530'  > ['-15', '30']
	var chunkOffset = /([\+\-]|\d\d)/gi;

	function offsetFromString(matcher, string) {
		 var matches = (string || '').match(matcher),
			  chunk,
			  parts,
			  minutes;

		 if (matches === null) {
			  return null;
		 }

		 chunk = matches[matches.length - 1] || [];
		 parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
		 minutes = +(parts[1] * 60) + toInt(parts[2]);

		 return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
	}

	// Return a moment from input, that is local/utc/zone equivalent to model.
	function cloneWithOffset(input, model) {
		 var res, diff;
		 if (model._isUTC) {
			  res = model.clone();
			  diff =
					(isMoment(input) || isDate(input)
						 ? input.valueOf()
						 : createLocal(input).valueOf()) - res.valueOf();
			  // Use low-level api, because this fn is low-level api.
			  res._d.setTime(res._d.valueOf() + diff);
			  hooks.updateOffset(res, false);
			  return res;
		 } else {
			  return createLocal(input).local();
		 }
	}

	function getDateOffset(m) {
		 // On Firefox.24 Date#getTimezoneOffset returns a floating point.
		 // https://github.com/moment/moment/pull/1871
		 return -Math.round(m._d.getTimezoneOffset());
	}

	// HOOKS

	// This function will be called whenever a moment is mutated.
	// It is intended to keep the offset in sync with the timezone.
	hooks.updateOffset = function () {};

	// MOMENTS

	// keepLocalTime = true means only change the timezone, without
	// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
	// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
	// +0200, so we adjust the time as needed, to be valid.
	//
	// Keeping the time actually adds/subtracts (one hour)
	// from the actual represented time. That is why we call updateOffset
	// a second time. In case it wants us to change the offset again
	// _changeInProgress == true case, then we have to adjust, because
	// there is no such time in the given timezone.
	function getSetOffset(input, keepLocalTime, keepMinutes) {
		 var offset = this._offset || 0,
			  localAdjust;
		 if (!this.isValid()) {
			  return input != null ? this : NaN;
		 }
		 if (input != null) {
			  if (typeof input === 'string') {
					input = offsetFromString(matchShortOffset, input);
					if (input === null) {
						 return this;
					}
			  } else if (Math.abs(input) < 16 && !keepMinutes) {
					input = input * 60;
			  }
			  if (!this._isUTC && keepLocalTime) {
					localAdjust = getDateOffset(this);
			  }
			  this._offset = input;
			  this._isUTC = true;
			  if (localAdjust != null) {
					this.add(localAdjust, 'm');
			  }
			  if (offset !== input) {
					if (!keepLocalTime || this._changeInProgress) {
						 addSubtract(
							  this,
							  createDuration(input - offset, 'm'),
							  1,
							  false
						 );
					} else if (!this._changeInProgress) {
						 this._changeInProgress = true;
						 hooks.updateOffset(this, true);
						 this._changeInProgress = null;
					}
			  }
			  return this;
		 } else {
			  return this._isUTC ? offset : getDateOffset(this);
		 }
	}

	function getSetZone(input, keepLocalTime) {
		 if (input != null) {
			  if (typeof input !== 'string') {
					input = -input;
			  }

			  this.utcOffset(input, keepLocalTime);

			  return this;
		 } else {
			  return -this.utcOffset();
		 }
	}

	function setOffsetToUTC(keepLocalTime) {
		 return this.utcOffset(0, keepLocalTime);
	}

	function setOffsetToLocal(keepLocalTime) {
		 if (this._isUTC) {
			  this.utcOffset(0, keepLocalTime);
			  this._isUTC = false;

			  if (keepLocalTime) {
					this.subtract(getDateOffset(this), 'm');
			  }
		 }
		 return this;
	}

	function setOffsetToParsedOffset() {
		 if (this._tzm != null) {
			  this.utcOffset(this._tzm, false, true);
		 } else if (typeof this._i === 'string') {
			  var tZone = offsetFromString(matchOffset, this._i);
			  if (tZone != null) {
					this.utcOffset(tZone);
			  } else {
					this.utcOffset(0, true);
			  }
		 }
		 return this;
	}

	function hasAlignedHourOffset(input) {
		 if (!this.isValid()) {
			  return false;
		 }
		 input = input ? createLocal(input).utcOffset() : 0;

		 return (this.utcOffset() - input) % 60 === 0;
	}

	function isDaylightSavingTime() {
		 return (
			  this.utcOffset() > this.clone().month(0).utcOffset() ||
			  this.utcOffset() > this.clone().month(5).utcOffset()
		 );
	}

	function isDaylightSavingTimeShifted() {
		 if (!isUndefined(this._isDSTShifted)) {
			  return this._isDSTShifted;
		 }

		 var c = {},
			  other;

		 copyConfig(c, this);
		 c = prepareConfig(c);

		 if (c._a) {
			  other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
			  this._isDSTShifted =
					this.isValid() && compareArrays(c._a, other.toArray()) > 0;
		 } else {
			  this._isDSTShifted = false;
		 }

		 return this._isDSTShifted;
	}

	function isLocal() {
		 return this.isValid() ? !this._isUTC : false;
	}

	function isUtcOffset() {
		 return this.isValid() ? this._isUTC : false;
	}

	function isUtc() {
		 return this.isValid() ? this._isUTC && this._offset === 0 : false;
	}

	// ASP.NET json date format regex
	var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
		 // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
		 // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
		 // and further modified to allow for strings containing both week and day
		 isoRegex =
			  /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

	function createDuration(input, key) {
		 var duration = input,
			  // matching against regexp is expensive, do it on demand
			  match = null,
			  sign,
			  ret,
			  diffRes;

		 if (isDuration(input)) {
			  duration = {
					ms: input._milliseconds,
					d: input._days,
					M: input._months,
			  };
		 } else if (isNumber(input) || !isNaN(+input)) {
			  duration = {};
			  if (key) {
					duration[key] = +input;
			  } else {
					duration.milliseconds = +input;
			  }
		 } else if ((match = aspNetRegex.exec(input))) {
			  sign = match[1] === '-' ? -1 : 1;
			  duration = {
					y: 0,
					d: toInt(match[DATE]) * sign,
					h: toInt(match[HOUR]) * sign,
					m: toInt(match[MINUTE]) * sign,
					s: toInt(match[SECOND]) * sign,
					ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
			  };
		 } else if ((match = isoRegex.exec(input))) {
			  sign = match[1] === '-' ? -1 : 1;
			  duration = {
					y: parseIso(match[2], sign),
					M: parseIso(match[3], sign),
					w: parseIso(match[4], sign),
					d: parseIso(match[5], sign),
					h: parseIso(match[6], sign),
					m: parseIso(match[7], sign),
					s: parseIso(match[8], sign),
			  };
		 } else if (duration == null) {
			  // checks for null or undefined
			  duration = {};
		 } else if (
			  typeof duration === 'object' &&
			  ('from' in duration || 'to' in duration)
		 ) {
			  diffRes = momentsDifference(
					createLocal(duration.from),
					createLocal(duration.to)
			  );

			  duration = {};
			  duration.ms = diffRes.milliseconds;
			  duration.M = diffRes.months;
		 }

		 ret = new Duration(duration);

		 if (isDuration(input) && hasOwnProp(input, '_locale')) {
			  ret._locale = input._locale;
		 }

		 if (isDuration(input) && hasOwnProp(input, '_isValid')) {
			  ret._isValid = input._isValid;
		 }

		 return ret;
	}

	createDuration.fn = Duration.prototype;
	createDuration.invalid = createInvalid$1;

	function parseIso(inp, sign) {
		 // We'd normally use ~~inp for this, but unfortunately it also
		 // converts floats to ints.
		 // inp may be undefined, so careful calling replace on it.
		 var res = inp && parseFloat(inp.replace(',', '.'));
		 // apply sign while we're at it
		 return (isNaN(res) ? 0 : res) * sign;
	}

	function positiveMomentsDifference(base, other) {
		 var res = {};

		 res.months =
			  other.month() - base.month() + (other.year() - base.year()) * 12;
		 if (base.clone().add(res.months, 'M').isAfter(other)) {
			  --res.months;
		 }

		 res.milliseconds = +other - +base.clone().add(res.months, 'M');

		 return res;
	}

	function momentsDifference(base, other) {
		 var res;
		 if (!(base.isValid() && other.isValid())) {
			  return { milliseconds: 0, months: 0 };
		 }

		 other = cloneWithOffset(other, base);
		 if (base.isBefore(other)) {
			  res = positiveMomentsDifference(base, other);
		 } else {
			  res = positiveMomentsDifference(other, base);
			  res.milliseconds = -res.milliseconds;
			  res.months = -res.months;
		 }

		 return res;
	}

	// TODO: remove 'name' arg after deprecation is removed
	function createAdder(direction, name) {
		 return function (val, period) {
			  var dur, tmp;
			  //invert the arguments, but complain about it
			  if (period !== null && !isNaN(+period)) {
					deprecateSimple(
						 name,
						 'moment().' +
							  name +
							  '(period, number) is deprecated. Please use moment().' +
							  name +
							  '(number, period). ' +
							  'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
					);
					tmp = val;
					val = period;
					period = tmp;
			  }

			  dur = createDuration(val, period);
			  addSubtract(this, dur, direction);
			  return this;
		 };
	}

	function addSubtract(mom, duration, isAdding, updateOffset) {
		 var milliseconds = duration._milliseconds,
			  days = absRound(duration._days),
			  months = absRound(duration._months);

		 if (!mom.isValid()) {
			  // No op
			  return;
		 }

		 updateOffset = updateOffset == null ? true : updateOffset;

		 if (months) {
			  setMonth(mom, get(mom, 'Month') + months * isAdding);
		 }
		 if (days) {
			  set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
		 }
		 if (milliseconds) {
			  mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
		 }
		 if (updateOffset) {
			  hooks.updateOffset(mom, days || months);
		 }
	}

	var add = createAdder(1, 'add'),
		 subtract = createAdder(-1, 'subtract');

	function isString(input) {
		 return typeof input === 'string' || input instanceof String;
	}

	// type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
	function isMomentInput(input) {
		 return (
			  isMoment(input) ||
			  isDate(input) ||
			  isString(input) ||
			  isNumber(input) ||
			  isNumberOrStringArray(input) ||
			  isMomentInputObject(input) ||
			  input === null ||
			  input === undefined
		 );
	}

	function isMomentInputObject(input) {
		 var objectTest = isObject(input) && !isObjectEmpty(input),
			  propertyTest = false,
			  properties = [
					'years',
					'year',
					'y',
					'months',
					'month',
					'M',
					'days',
					'day',
					'd',
					'dates',
					'date',
					'D',
					'hours',
					'hour',
					'h',
					'minutes',
					'minute',
					'm',
					'seconds',
					'second',
					's',
					'milliseconds',
					'millisecond',
					'ms',
			  ],
			  i,
			  property,
			  propertyLen = properties.length;

		 for (i = 0; i < propertyLen; i += 1) {
			  property = properties[i];
			  propertyTest = propertyTest || hasOwnProp(input, property);
		 }

		 return objectTest && propertyTest;
	}

	function isNumberOrStringArray(input) {
		 var arrayTest = isArray(input),
			  dataTypeTest = false;
		 if (arrayTest) {
			  dataTypeTest =
					input.filter(function (item) {
						 return !isNumber(item) && isString(input);
					}).length === 0;
		 }
		 return arrayTest && dataTypeTest;
	}

	function isCalendarSpec(input) {
		 var objectTest = isObject(input) && !isObjectEmpty(input),
			  propertyTest = false,
			  properties = [
					'sameDay',
					'nextDay',
					'lastDay',
					'nextWeek',
					'lastWeek',
					'sameElse',
			  ],
			  i,
			  property;

		 for (i = 0; i < properties.length; i += 1) {
			  property = properties[i];
			  propertyTest = propertyTest || hasOwnProp(input, property);
		 }

		 return objectTest && propertyTest;
	}

	function getCalendarFormat(myMoment, now) {
		 var diff = myMoment.diff(now, 'days', true);
		 return diff < -6
			  ? 'sameElse'
			  : diff < -1
			  ? 'lastWeek'
			  : diff < 0
			  ? 'lastDay'
			  : diff < 1
			  ? 'sameDay'
			  : diff < 2
			  ? 'nextDay'
			  : diff < 7
			  ? 'nextWeek'
			  : 'sameElse';
	}

	function calendar$1(time, formats) {
		 // Support for single parameter, formats only overload to the calendar function
		 if (arguments.length === 1) {
			  if (!arguments[0]) {
					time = undefined;
					formats = undefined;
			  } else if (isMomentInput(arguments[0])) {
					time = arguments[0];
					formats = undefined;
			  } else if (isCalendarSpec(arguments[0])) {
					formats = arguments[0];
					time = undefined;
			  }
		 }
		 // We want to compare the start of today, vs this.
		 // Getting start-of-today depends on whether we're local/utc/offset or not.
		 var now = time || createLocal(),
			  sod = cloneWithOffset(now, this).startOf('day'),
			  format = hooks.calendarFormat(this, sod) || 'sameElse',
			  output =
					formats &&
					(isFunction(formats[format])
						 ? formats[format].call(this, now)
						 : formats[format]);

		 return this.format(
			  output || this.localeData().calendar(format, this, createLocal(now))
		 );
	}

	function clone() {
		 return new Moment(this);
	}

	function isAfter(input, units) {
		 var localInput = isMoment(input) ? input : createLocal(input);
		 if (!(this.isValid() && localInput.isValid())) {
			  return false;
		 }
		 units = normalizeUnits(units) || 'millisecond';
		 if (units === 'millisecond') {
			  return this.valueOf() > localInput.valueOf();
		 } else {
			  return localInput.valueOf() < this.clone().startOf(units).valueOf();
		 }
	}

	function isBefore(input, units) {
		 var localInput = isMoment(input) ? input : createLocal(input);
		 if (!(this.isValid() && localInput.isValid())) {
			  return false;
		 }
		 units = normalizeUnits(units) || 'millisecond';
		 if (units === 'millisecond') {
			  return this.valueOf() < localInput.valueOf();
		 } else {
			  return this.clone().endOf(units).valueOf() < localInput.valueOf();
		 }
	}

	function isBetween(from, to, units, inclusivity) {
		 var localFrom = isMoment(from) ? from : createLocal(from),
			  localTo = isMoment(to) ? to : createLocal(to);
		 if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
			  return false;
		 }
		 inclusivity = inclusivity || '()';
		 return (
			  (inclusivity[0] === '('
					? this.isAfter(localFrom, units)
					: !this.isBefore(localFrom, units)) &&
			  (inclusivity[1] === ')'
					? this.isBefore(localTo, units)
					: !this.isAfter(localTo, units))
		 );
	}

	function isSame(input, units) {
		 var localInput = isMoment(input) ? input : createLocal(input),
			  inputMs;
		 if (!(this.isValid() && localInput.isValid())) {
			  return false;
		 }
		 units = normalizeUnits(units) || 'millisecond';
		 if (units === 'millisecond') {
			  return this.valueOf() === localInput.valueOf();
		 } else {
			  inputMs = localInput.valueOf();
			  return (
					this.clone().startOf(units).valueOf() <= inputMs &&
					inputMs <= this.clone().endOf(units).valueOf()
			  );
		 }
	}

	function isSameOrAfter(input, units) {
		 return this.isSame(input, units) || this.isAfter(input, units);
	}

	function isSameOrBefore(input, units) {
		 return this.isSame(input, units) || this.isBefore(input, units);
	}

	function diff(input, units, asFloat) {
		 var that, zoneDelta, output;

		 if (!this.isValid()) {
			  return NaN;
		 }

		 that = cloneWithOffset(input, this);

		 if (!that.isValid()) {
			  return NaN;
		 }

		 zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

		 units = normalizeUnits(units);

		 switch (units) {
			  case 'year':
					output = monthDiff(this, that) / 12;
					break;
			  case 'month':
					output = monthDiff(this, that);
					break;
			  case 'quarter':
					output = monthDiff(this, that) / 3;
					break;
			  case 'second':
					output = (this - that) / 1e3;
					break; // 1000
			  case 'minute':
					output = (this - that) / 6e4;
					break; // 1000 * 60
			  case 'hour':
					output = (this - that) / 36e5;
					break; // 1000 * 60 * 60
			  case 'day':
					output = (this - that - zoneDelta) / 864e5;
					break; // 1000 * 60 * 60 * 24, negate dst
			  case 'week':
					output = (this - that - zoneDelta) / 6048e5;
					break; // 1000 * 60 * 60 * 24 * 7, negate dst
			  default:
					output = this - that;
		 }

		 return asFloat ? output : absFloor(output);
	}

	function monthDiff(a, b) {
		 if (a.date() < b.date()) {
			  // end-of-month calculations work correct when the start month has more
			  // days than the end month.
			  return -monthDiff(b, a);
		 }
		 // difference in months
		 var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
			  // b is in (anchor - 1 month, anchor + 1 month)
			  anchor = a.clone().add(wholeMonthDiff, 'months'),
			  anchor2,
			  adjust;

		 if (b - anchor < 0) {
			  anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
			  // linear across the month
			  adjust = (b - anchor) / (anchor - anchor2);
		 } else {
			  anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
			  // linear across the month
			  adjust = (b - anchor) / (anchor2 - anchor);
		 }

		 //check for negative zero, return zero if negative zero
		 return -(wholeMonthDiff + adjust) || 0;
	}

	hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
	hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

	function toString() {
		 return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
	}

	function toISOString(keepOffset) {
		 if (!this.isValid()) {
			  return null;
		 }
		 var utc = keepOffset !== true,
			  m = utc ? this.clone().utc() : this;
		 if (m.year() < 0 || m.year() > 9999) {
			  return formatMoment(
					m,
					utc
						 ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
						 : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
			  );
		 }
		 if (isFunction(Date.prototype.toISOString)) {
			  // native implementation is ~50x faster, use it when we can
			  if (utc) {
					return this.toDate().toISOString();
			  } else {
					return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
						 .toISOString()
						 .replace('Z', formatMoment(m, 'Z'));
			  }
		 }
		 return formatMoment(
			  m,
			  utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
		 );
	}

	/**
	 * Return a human readable representation of a moment that can
	 * also be evaluated to get a new moment which is the same
	 *
	 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
	 */
	function inspect() {
		 if (!this.isValid()) {
			  return 'moment.invalid(/* ' + this._i + ' */)';
		 }
		 var func = 'moment',
			  zone = '',
			  prefix,
			  year,
			  datetime,
			  suffix;
		 if (!this.isLocal()) {
			  func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
			  zone = 'Z';
		 }
		 prefix = '[' + func + '("]';
		 year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
		 datetime = '-MM-DD[T]HH:mm:ss.SSS';
		 suffix = zone + '[")]';

		 return this.format(prefix + year + datetime + suffix);
	}

	function format(inputString) {
		 if (!inputString) {
			  inputString = this.isUtc()
					? hooks.defaultFormatUtc
					: hooks.defaultFormat;
		 }
		 var output = formatMoment(this, inputString);
		 return this.localeData().postformat(output);
	}

	function from(time, withoutSuffix) {
		 if (
			  this.isValid() &&
			  ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
		 ) {
			  return createDuration({ to: this, from: time })
					.locale(this.locale())
					.humanize(!withoutSuffix);
		 } else {
			  return this.localeData().invalidDate();
		 }
	}

	function fromNow(withoutSuffix) {
		 return this.from(createLocal(), withoutSuffix);
	}

	function to(time, withoutSuffix) {
		 if (
			  this.isValid() &&
			  ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
		 ) {
			  return createDuration({ from: this, to: time })
					.locale(this.locale())
					.humanize(!withoutSuffix);
		 } else {
			  return this.localeData().invalidDate();
		 }
	}

	function toNow(withoutSuffix) {
		 return this.to(createLocal(), withoutSuffix);
	}

	// If passed a locale key, it will set the locale for this
	// instance.  Otherwise, it will return the locale configuration
	// variables for this instance.
	function locale(key) {
		 var newLocaleData;

		 if (key === undefined) {
			  return this._locale._abbr;
		 } else {
			  newLocaleData = getLocale(key);
			  if (newLocaleData != null) {
					this._locale = newLocaleData;
			  }
			  return this;
		 }
	}

	var lang = deprecate(
		 'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
		 function (key) {
			  if (key === undefined) {
					return this.localeData();
			  } else {
					return this.locale(key);
			  }
		 }
	);

	function localeData() {
		 return this._locale;
	}

	var MS_PER_SECOND = 1000,
		 MS_PER_MINUTE = 60 * MS_PER_SECOND,
		 MS_PER_HOUR = 60 * MS_PER_MINUTE,
		 MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

	// actual modulo - handles negative numbers (for dates before 1970):
	function mod$1(dividend, divisor) {
		 return ((dividend % divisor) + divisor) % divisor;
	}

	function localStartOfDate(y, m, d) {
		 // the date constructor remaps years 0-99 to 1900-1999
		 if (y < 100 && y >= 0) {
			  // preserve leap years using a full 400 year cycle, then reset
			  return new Date(y + 400, m, d) - MS_PER_400_YEARS;
		 } else {
			  return new Date(y, m, d).valueOf();
		 }
	}

	function utcStartOfDate(y, m, d) {
		 // Date.UTC remaps years 0-99 to 1900-1999
		 if (y < 100 && y >= 0) {
			  // preserve leap years using a full 400 year cycle, then reset
			  return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
		 } else {
			  return Date.UTC(y, m, d);
		 }
	}

	function startOf(units) {
		 var time, startOfDate;
		 units = normalizeUnits(units);
		 if (units === undefined || units === 'millisecond' || !this.isValid()) {
			  return this;
		 }

		 startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

		 switch (units) {
			  case 'year':
					time = startOfDate(this.year(), 0, 1);
					break;
			  case 'quarter':
					time = startOfDate(
						 this.year(),
						 this.month() - (this.month() % 3),
						 1
					);
					break;
			  case 'month':
					time = startOfDate(this.year(), this.month(), 1);
					break;
			  case 'week':
					time = startOfDate(
						 this.year(),
						 this.month(),
						 this.date() - this.weekday()
					);
					break;
			  case 'isoWeek':
					time = startOfDate(
						 this.year(),
						 this.month(),
						 this.date() - (this.isoWeekday() - 1)
					);
					break;
			  case 'day':
			  case 'date':
					time = startOfDate(this.year(), this.month(), this.date());
					break;
			  case 'hour':
					time = this._d.valueOf();
					time -= mod$1(
						 time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
						 MS_PER_HOUR
					);
					break;
			  case 'minute':
					time = this._d.valueOf();
					time -= mod$1(time, MS_PER_MINUTE);
					break;
			  case 'second':
					time = this._d.valueOf();
					time -= mod$1(time, MS_PER_SECOND);
					break;
		 }

		 this._d.setTime(time);
		 hooks.updateOffset(this, true);
		 return this;
	}

	function endOf(units) {
		 var time, startOfDate;
		 units = normalizeUnits(units);
		 if (units === undefined || units === 'millisecond' || !this.isValid()) {
			  return this;
		 }

		 startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

		 switch (units) {
			  case 'year':
					time = startOfDate(this.year() + 1, 0, 1) - 1;
					break;
			  case 'quarter':
					time =
						 startOfDate(
							  this.year(),
							  this.month() - (this.month() % 3) + 3,
							  1
						 ) - 1;
					break;
			  case 'month':
					time = startOfDate(this.year(), this.month() + 1, 1) - 1;
					break;
			  case 'week':
					time =
						 startOfDate(
							  this.year(),
							  this.month(),
							  this.date() - this.weekday() + 7
						 ) - 1;
					break;
			  case 'isoWeek':
					time =
						 startOfDate(
							  this.year(),
							  this.month(),
							  this.date() - (this.isoWeekday() - 1) + 7
						 ) - 1;
					break;
			  case 'day':
			  case 'date':
					time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
					break;
			  case 'hour':
					time = this._d.valueOf();
					time +=
						 MS_PER_HOUR -
						 mod$1(
							  time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
							  MS_PER_HOUR
						 ) -
						 1;
					break;
			  case 'minute':
					time = this._d.valueOf();
					time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
					break;
			  case 'second':
					time = this._d.valueOf();
					time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
					break;
		 }

		 this._d.setTime(time);
		 hooks.updateOffset(this, true);
		 return this;
	}

	function valueOf() {
		 return this._d.valueOf() - (this._offset || 0) * 60000;
	}

	function unix() {
		 return Math.floor(this.valueOf() / 1000);
	}

	function toDate() {
		 return new Date(this.valueOf());
	}

	function toArray() {
		 var m = this;
		 return [
			  m.year(),
			  m.month(),
			  m.date(),
			  m.hour(),
			  m.minute(),
			  m.second(),
			  m.millisecond(),
		 ];
	}

	function toObject() {
		 var m = this;
		 return {
			  years: m.year(),
			  months: m.month(),
			  date: m.date(),
			  hours: m.hours(),
			  minutes: m.minutes(),
			  seconds: m.seconds(),
			  milliseconds: m.milliseconds(),
		 };
	}

	function toJSON() {
		 // new Date(NaN).toJSON() === null
		 return this.isValid() ? this.toISOString() : null;
	}

	function isValid$2() {
		 return isValid(this);
	}

	function parsingFlags() {
		 return extend({}, getParsingFlags(this));
	}

	function invalidAt() {
		 return getParsingFlags(this).overflow;
	}

	function creationData() {
		 return {
			  input: this._i,
			  format: this._f,
			  locale: this._locale,
			  isUTC: this._isUTC,
			  strict: this._strict,
		 };
	}

	addFormatToken('N', 0, 0, 'eraAbbr');
	addFormatToken('NN', 0, 0, 'eraAbbr');
	addFormatToken('NNN', 0, 0, 'eraAbbr');
	addFormatToken('NNNN', 0, 0, 'eraName');
	addFormatToken('NNNNN', 0, 0, 'eraNarrow');

	addFormatToken('y', ['y', 1], 'yo', 'eraYear');
	addFormatToken('y', ['yy', 2], 0, 'eraYear');
	addFormatToken('y', ['yyy', 3], 0, 'eraYear');
	addFormatToken('y', ['yyyy', 4], 0, 'eraYear');

	addRegexToken('N', matchEraAbbr);
	addRegexToken('NN', matchEraAbbr);
	addRegexToken('NNN', matchEraAbbr);
	addRegexToken('NNNN', matchEraName);
	addRegexToken('NNNNN', matchEraNarrow);

	addParseToken(
		 ['N', 'NN', 'NNN', 'NNNN', 'NNNNN'],
		 function (input, array, config, token) {
			  var era = config._locale.erasParse(input, token, config._strict);
			  if (era) {
					getParsingFlags(config).era = era;
			  } else {
					getParsingFlags(config).invalidEra = input;
			  }
		 }
	);

	addRegexToken('y', matchUnsigned);
	addRegexToken('yy', matchUnsigned);
	addRegexToken('yyy', matchUnsigned);
	addRegexToken('yyyy', matchUnsigned);
	addRegexToken('yo', matchEraYearOrdinal);

	addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
	addParseToken(['yo'], function (input, array, config, token) {
		 var match;
		 if (config._locale._eraYearOrdinalRegex) {
			  match = input.match(config._locale._eraYearOrdinalRegex);
		 }

		 if (config._locale.eraYearOrdinalParse) {
			  array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
		 } else {
			  array[YEAR] = parseInt(input, 10);
		 }
	});

	function localeEras(m, format) {
		 var i,
			  l,
			  date,
			  eras = this._eras || getLocale('en')._eras;
		 for (i = 0, l = eras.length; i < l; ++i) {
			  switch (typeof eras[i].since) {
					case 'string':
						 // truncate time
						 date = hooks(eras[i].since).startOf('day');
						 eras[i].since = date.valueOf();
						 break;
			  }

			  switch (typeof eras[i].until) {
					case 'undefined':
						 eras[i].until = +Infinity;
						 break;
					case 'string':
						 // truncate time
						 date = hooks(eras[i].until).startOf('day').valueOf();
						 eras[i].until = date.valueOf();
						 break;
			  }
		 }
		 return eras;
	}

	function localeErasParse(eraName, format, strict) {
		 var i,
			  l,
			  eras = this.eras(),
			  name,
			  abbr,
			  narrow;
		 eraName = eraName.toUpperCase();

		 for (i = 0, l = eras.length; i < l; ++i) {
			  name = eras[i].name.toUpperCase();
			  abbr = eras[i].abbr.toUpperCase();
			  narrow = eras[i].narrow.toUpperCase();

			  if (strict) {
					switch (format) {
						 case 'N':
						 case 'NN':
						 case 'NNN':
							  if (abbr === eraName) {
									return eras[i];
							  }
							  break;

						 case 'NNNN':
							  if (name === eraName) {
									return eras[i];
							  }
							  break;

						 case 'NNNNN':
							  if (narrow === eraName) {
									return eras[i];
							  }
							  break;
					}
			  } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
					return eras[i];
			  }
		 }
	}

	function localeErasConvertYear(era, year) {
		 var dir = era.since <= era.until ? +1 : -1;
		 if (year === undefined) {
			  return hooks(era.since).year();
		 } else {
			  return hooks(era.since).year() + (year - era.offset) * dir;
		 }
	}

	function getEraName() {
		 var i,
			  l,
			  val,
			  eras = this.localeData().eras();
		 for (i = 0, l = eras.length; i < l; ++i) {
			  // truncate time
			  val = this.clone().startOf('day').valueOf();

			  if (eras[i].since <= val && val <= eras[i].until) {
					return eras[i].name;
			  }
			  if (eras[i].until <= val && val <= eras[i].since) {
					return eras[i].name;
			  }
		 }

		 return '';
	}

	function getEraNarrow() {
		 var i,
			  l,
			  val,
			  eras = this.localeData().eras();
		 for (i = 0, l = eras.length; i < l; ++i) {
			  // truncate time
			  val = this.clone().startOf('day').valueOf();

			  if (eras[i].since <= val && val <= eras[i].until) {
					return eras[i].narrow;
			  }
			  if (eras[i].until <= val && val <= eras[i].since) {
					return eras[i].narrow;
			  }
		 }

		 return '';
	}

	function getEraAbbr() {
		 var i,
			  l,
			  val,
			  eras = this.localeData().eras();
		 for (i = 0, l = eras.length; i < l; ++i) {
			  // truncate time
			  val = this.clone().startOf('day').valueOf();

			  if (eras[i].since <= val && val <= eras[i].until) {
					return eras[i].abbr;
			  }
			  if (eras[i].until <= val && val <= eras[i].since) {
					return eras[i].abbr;
			  }
		 }

		 return '';
	}

	function getEraYear() {
		 var i,
			  l,
			  dir,
			  val,
			  eras = this.localeData().eras();
		 for (i = 0, l = eras.length; i < l; ++i) {
			  dir = eras[i].since <= eras[i].until ? +1 : -1;

			  // truncate time
			  val = this.clone().startOf('day').valueOf();

			  if (
					(eras[i].since <= val && val <= eras[i].until) ||
					(eras[i].until <= val && val <= eras[i].since)
			  ) {
					return (
						 (this.year() - hooks(eras[i].since).year()) * dir +
						 eras[i].offset
					);
			  }
		 }

		 return this.year();
	}

	function erasNameRegex(isStrict) {
		 if (!hasOwnProp(this, '_erasNameRegex')) {
			  computeErasParse.call(this);
		 }
		 return isStrict ? this._erasNameRegex : this._erasRegex;
	}

	function erasAbbrRegex(isStrict) {
		 if (!hasOwnProp(this, '_erasAbbrRegex')) {
			  computeErasParse.call(this);
		 }
		 return isStrict ? this._erasAbbrRegex : this._erasRegex;
	}

	function erasNarrowRegex(isStrict) {
		 if (!hasOwnProp(this, '_erasNarrowRegex')) {
			  computeErasParse.call(this);
		 }
		 return isStrict ? this._erasNarrowRegex : this._erasRegex;
	}

	function matchEraAbbr(isStrict, locale) {
		 return locale.erasAbbrRegex(isStrict);
	}

	function matchEraName(isStrict, locale) {
		 return locale.erasNameRegex(isStrict);
	}

	function matchEraNarrow(isStrict, locale) {
		 return locale.erasNarrowRegex(isStrict);
	}

	function matchEraYearOrdinal(isStrict, locale) {
		 return locale._eraYearOrdinalRegex || matchUnsigned;
	}

	function computeErasParse() {
		 var abbrPieces = [],
			  namePieces = [],
			  narrowPieces = [],
			  mixedPieces = [],
			  i,
			  l,
			  eras = this.eras();

		 for (i = 0, l = eras.length; i < l; ++i) {
			  namePieces.push(regexEscape(eras[i].name));
			  abbrPieces.push(regexEscape(eras[i].abbr));
			  narrowPieces.push(regexEscape(eras[i].narrow));

			  mixedPieces.push(regexEscape(eras[i].name));
			  mixedPieces.push(regexEscape(eras[i].abbr));
			  mixedPieces.push(regexEscape(eras[i].narrow));
		 }

		 this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
		 this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
		 this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
		 this._erasNarrowRegex = new RegExp(
			  '^(' + narrowPieces.join('|') + ')',
			  'i'
		 );
	}

	// FORMATTING

	addFormatToken(0, ['gg', 2], 0, function () {
		 return this.weekYear() % 100;
	});

	addFormatToken(0, ['GG', 2], 0, function () {
		 return this.isoWeekYear() % 100;
	});

	function addWeekYearFormatToken(token, getter) {
		 addFormatToken(0, [token, token.length], 0, getter);
	}

	addWeekYearFormatToken('gggg', 'weekYear');
	addWeekYearFormatToken('ggggg', 'weekYear');
	addWeekYearFormatToken('GGGG', 'isoWeekYear');
	addWeekYearFormatToken('GGGGG', 'isoWeekYear');

	// ALIASES

	addUnitAlias('weekYear', 'gg');
	addUnitAlias('isoWeekYear', 'GG');

	// PRIORITY

	addUnitPriority('weekYear', 1);
	addUnitPriority('isoWeekYear', 1);

	// PARSING

	addRegexToken('G', matchSigned);
	addRegexToken('g', matchSigned);
	addRegexToken('GG', match1to2, match2);
	addRegexToken('gg', match1to2, match2);
	addRegexToken('GGGG', match1to4, match4);
	addRegexToken('gggg', match1to4, match4);
	addRegexToken('GGGGG', match1to6, match6);
	addRegexToken('ggggg', match1to6, match6);

	addWeekParseToken(
		 ['gggg', 'ggggg', 'GGGG', 'GGGGG'],
		 function (input, week, config, token) {
			  week[token.substr(0, 2)] = toInt(input);
		 }
	);

	addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
		 week[token] = hooks.parseTwoDigitYear(input);
	});

	// MOMENTS

	function getSetWeekYear(input) {
		 return getSetWeekYearHelper.call(
			  this,
			  input,
			  this.week(),
			  this.weekday(),
			  this.localeData()._week.dow,
			  this.localeData()._week.doy
		 );
	}

	function getSetISOWeekYear(input) {
		 return getSetWeekYearHelper.call(
			  this,
			  input,
			  this.isoWeek(),
			  this.isoWeekday(),
			  1,
			  4
		 );
	}

	function getISOWeeksInYear() {
		 return weeksInYear(this.year(), 1, 4);
	}

	function getISOWeeksInISOWeekYear() {
		 return weeksInYear(this.isoWeekYear(), 1, 4);
	}

	function getWeeksInYear() {
		 var weekInfo = this.localeData()._week;
		 return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
	}

	function getWeeksInWeekYear() {
		 var weekInfo = this.localeData()._week;
		 return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
	}

	function getSetWeekYearHelper(input, week, weekday, dow, doy) {
		 var weeksTarget;
		 if (input == null) {
			  return weekOfYear(this, dow, doy).year;
		 } else {
			  weeksTarget = weeksInYear(input, dow, doy);
			  if (week > weeksTarget) {
					week = weeksTarget;
			  }
			  return setWeekAll.call(this, input, week, weekday, dow, doy);
		 }
	}

	function setWeekAll(weekYear, week, weekday, dow, doy) {
		 var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
			  date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

		 this.year(date.getUTCFullYear());
		 this.month(date.getUTCMonth());
		 this.date(date.getUTCDate());
		 return this;
	}

	// FORMATTING

	addFormatToken('Q', 0, 'Qo', 'quarter');

	// ALIASES

	addUnitAlias('quarter', 'Q');

	// PRIORITY

	addUnitPriority('quarter', 7);

	// PARSING

	addRegexToken('Q', match1);
	addParseToken('Q', function (input, array) {
		 array[MONTH] = (toInt(input) - 1) * 3;
	});

	// MOMENTS

	function getSetQuarter(input) {
		 return input == null
			  ? Math.ceil((this.month() + 1) / 3)
			  : this.month((input - 1) * 3 + (this.month() % 3));
	}

	// FORMATTING

	addFormatToken('D', ['DD', 2], 'Do', 'date');

	// ALIASES

	addUnitAlias('date', 'D');

	// PRIORITY
	addUnitPriority('date', 9);

	// PARSING

	addRegexToken('D', match1to2);
	addRegexToken('DD', match1to2, match2);
	addRegexToken('Do', function (isStrict, locale) {
		 // TODO: Remove "ordinalParse" fallback in next major release.
		 return isStrict
			  ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
			  : locale._dayOfMonthOrdinalParseLenient;
	});

	addParseToken(['D', 'DD'], DATE);
	addParseToken('Do', function (input, array) {
		 array[DATE] = toInt(input.match(match1to2)[0]);
	});

	// MOMENTS

	var getSetDayOfMonth = makeGetSet('Date', true);

	// FORMATTING

	addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

	// ALIASES

	addUnitAlias('dayOfYear', 'DDD');

	// PRIORITY
	addUnitPriority('dayOfYear', 4);

	// PARSING

	addRegexToken('DDD', match1to3);
	addRegexToken('DDDD', match3);
	addParseToken(['DDD', 'DDDD'], function (input, array, config) {
		 config._dayOfYear = toInt(input);
	});

	// HELPERS

	// MOMENTS

	function getSetDayOfYear(input) {
		 var dayOfYear =
			  Math.round(
					(this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
			  ) + 1;
		 return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
	}

	// FORMATTING

	addFormatToken('m', ['mm', 2], 0, 'minute');

	// ALIASES

	addUnitAlias('minute', 'm');

	// PRIORITY

	addUnitPriority('minute', 14);

	// PARSING

	addRegexToken('m', match1to2);
	addRegexToken('mm', match1to2, match2);
	addParseToken(['m', 'mm'], MINUTE);

	// MOMENTS

	var getSetMinute = makeGetSet('Minutes', false);

	// FORMATTING

	addFormatToken('s', ['ss', 2], 0, 'second');

	// ALIASES

	addUnitAlias('second', 's');

	// PRIORITY

	addUnitPriority('second', 15);

	// PARSING

	addRegexToken('s', match1to2);
	addRegexToken('ss', match1to2, match2);
	addParseToken(['s', 'ss'], SECOND);

	// MOMENTS

	var getSetSecond = makeGetSet('Seconds', false);

	// FORMATTING

	addFormatToken('S', 0, 0, function () {
		 return ~~(this.millisecond() / 100);
	});

	addFormatToken(0, ['SS', 2], 0, function () {
		 return ~~(this.millisecond() / 10);
	});

	addFormatToken(0, ['SSS', 3], 0, 'millisecond');
	addFormatToken(0, ['SSSS', 4], 0, function () {
		 return this.millisecond() * 10;
	});
	addFormatToken(0, ['SSSSS', 5], 0, function () {
		 return this.millisecond() * 100;
	});
	addFormatToken(0, ['SSSSSS', 6], 0, function () {
		 return this.millisecond() * 1000;
	});
	addFormatToken(0, ['SSSSSSS', 7], 0, function () {
		 return this.millisecond() * 10000;
	});
	addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
		 return this.millisecond() * 100000;
	});
	addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
		 return this.millisecond() * 1000000;
	});

	// ALIASES

	addUnitAlias('millisecond', 'ms');

	// PRIORITY

	addUnitPriority('millisecond', 16);

	// PARSING

	addRegexToken('S', match1to3, match1);
	addRegexToken('SS', match1to3, match2);
	addRegexToken('SSS', match1to3, match3);

	var token, getSetMillisecond;
	for (token = 'SSSS'; token.length <= 9; token += 'S') {
		 addRegexToken(token, matchUnsigned);
	}

	function parseMs(input, array) {
		 array[MILLISECOND] = toInt(('0.' + input) * 1000);
	}

	for (token = 'S'; token.length <= 9; token += 'S') {
		 addParseToken(token, parseMs);
	}

	getSetMillisecond = makeGetSet('Milliseconds', false);

	// FORMATTING

	addFormatToken('z', 0, 0, 'zoneAbbr');
	addFormatToken('zz', 0, 0, 'zoneName');

	// MOMENTS

	function getZoneAbbr() {
		 return this._isUTC ? 'UTC' : '';
	}

	function getZoneName() {
		 return this._isUTC ? 'Coordinated Universal Time' : '';
	}

	var proto = Moment.prototype;

	proto.add = add;
	proto.calendar = calendar$1;
	proto.clone = clone;
	proto.diff = diff;
	proto.endOf = endOf;
	proto.format = format;
	proto.from = from;
	proto.fromNow = fromNow;
	proto.to = to;
	proto.toNow = toNow;
	proto.get = stringGet;
	proto.invalidAt = invalidAt;
	proto.isAfter = isAfter;
	proto.isBefore = isBefore;
	proto.isBetween = isBetween;
	proto.isSame = isSame;
	proto.isSameOrAfter = isSameOrAfter;
	proto.isSameOrBefore = isSameOrBefore;
	proto.isValid = isValid$2;
	proto.lang = lang;
	proto.locale = locale;
	proto.localeData = localeData;
	proto.max = prototypeMax;
	proto.min = prototypeMin;
	proto.parsingFlags = parsingFlags;
	proto.set = stringSet;
	proto.startOf = startOf;
	proto.subtract = subtract;
	proto.toArray = toArray;
	proto.toObject = toObject;
	proto.toDate = toDate;
	proto.toISOString = toISOString;
	proto.inspect = inspect;
	if (typeof Symbol !== 'undefined' && Symbol.for != null) {
		 proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
			  return 'Moment<' + this.format() + '>';
		 };
	}
	proto.toJSON = toJSON;
	proto.toString = toString;
	proto.unix = unix;
	proto.valueOf = valueOf;
	proto.creationData = creationData;
	proto.eraName = getEraName;
	proto.eraNarrow = getEraNarrow;
	proto.eraAbbr = getEraAbbr;
	proto.eraYear = getEraYear;
	proto.year = getSetYear;
	proto.isLeapYear = getIsLeapYear;
	proto.weekYear = getSetWeekYear;
	proto.isoWeekYear = getSetISOWeekYear;
	proto.quarter = proto.quarters = getSetQuarter;
	proto.month = getSetMonth;
	proto.daysInMonth = getDaysInMonth;
	proto.week = proto.weeks = getSetWeek;
	proto.isoWeek = proto.isoWeeks = getSetISOWeek;
	proto.weeksInYear = getWeeksInYear;
	proto.weeksInWeekYear = getWeeksInWeekYear;
	proto.isoWeeksInYear = getISOWeeksInYear;
	proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
	proto.date = getSetDayOfMonth;
	proto.day = proto.days = getSetDayOfWeek;
	proto.weekday = getSetLocaleDayOfWeek;
	proto.isoWeekday = getSetISODayOfWeek;
	proto.dayOfYear = getSetDayOfYear;
	proto.hour = proto.hours = getSetHour;
	proto.minute = proto.minutes = getSetMinute;
	proto.second = proto.seconds = getSetSecond;
	proto.millisecond = proto.milliseconds = getSetMillisecond;
	proto.utcOffset = getSetOffset;
	proto.utc = setOffsetToUTC;
	proto.local = setOffsetToLocal;
	proto.parseZone = setOffsetToParsedOffset;
	proto.hasAlignedHourOffset = hasAlignedHourOffset;
	proto.isDST = isDaylightSavingTime;
	proto.isLocal = isLocal;
	proto.isUtcOffset = isUtcOffset;
	proto.isUtc = isUtc;
	proto.isUTC = isUtc;
	proto.zoneAbbr = getZoneAbbr;
	proto.zoneName = getZoneName;
	proto.dates = deprecate(
		 'dates accessor is deprecated. Use date instead.',
		 getSetDayOfMonth
	);
	proto.months = deprecate(
		 'months accessor is deprecated. Use month instead',
		 getSetMonth
	);
	proto.years = deprecate(
		 'years accessor is deprecated. Use year instead',
		 getSetYear
	);
	proto.zone = deprecate(
		 'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
		 getSetZone
	);
	proto.isDSTShifted = deprecate(
		 'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
		 isDaylightSavingTimeShifted
	);

	function createUnix(input) {
		 return createLocal(input * 1000);
	}

	function createInZone() {
		 return createLocal.apply(null, arguments).parseZone();
	}

	function preParsePostFormat(string) {
		 return string;
	}

	var proto$1 = Locale.prototype;

	proto$1.calendar = calendar;
	proto$1.longDateFormat = longDateFormat;
	proto$1.invalidDate = invalidDate;
	proto$1.ordinal = ordinal;
	proto$1.preparse = preParsePostFormat;
	proto$1.postformat = preParsePostFormat;
	proto$1.relativeTime = relativeTime;
	proto$1.pastFuture = pastFuture;
	proto$1.set = set;
	proto$1.eras = localeEras;
	proto$1.erasParse = localeErasParse;
	proto$1.erasConvertYear = localeErasConvertYear;
	proto$1.erasAbbrRegex = erasAbbrRegex;
	proto$1.erasNameRegex = erasNameRegex;
	proto$1.erasNarrowRegex = erasNarrowRegex;

	proto$1.months = localeMonths;
	proto$1.monthsShort = localeMonthsShort;
	proto$1.monthsParse = localeMonthsParse;
	proto$1.monthsRegex = monthsRegex;
	proto$1.monthsShortRegex = monthsShortRegex;
	proto$1.week = localeWeek;
	proto$1.firstDayOfYear = localeFirstDayOfYear;
	proto$1.firstDayOfWeek = localeFirstDayOfWeek;

	proto$1.weekdays = localeWeekdays;
	proto$1.weekdaysMin = localeWeekdaysMin;
	proto$1.weekdaysShort = localeWeekdaysShort;
	proto$1.weekdaysParse = localeWeekdaysParse;

	proto$1.weekdaysRegex = weekdaysRegex;
	proto$1.weekdaysShortRegex = weekdaysShortRegex;
	proto$1.weekdaysMinRegex = weekdaysMinRegex;

	proto$1.isPM = localeIsPM;
	proto$1.meridiem = localeMeridiem;

	function get$1(format, index, field, setter) {
		 var locale = getLocale(),
			  utc = createUTC().set(setter, index);
		 return locale[field](utc, format);
	}

	function listMonthsImpl(format, index, field) {
		 if (isNumber(format)) {
			  index = format;
			  format = undefined;
		 }

		 format = format || '';

		 if (index != null) {
			  return get$1(format, index, field, 'month');
		 }

		 var i,
			  out = [];
		 for (i = 0; i < 12; i++) {
			  out[i] = get$1(format, i, field, 'month');
		 }
		 return out;
	}

	// ()
	// (5)
	// (fmt, 5)
	// (fmt)
	// (true)
	// (true, 5)
	// (true, fmt, 5)
	// (true, fmt)
	function listWeekdaysImpl(localeSorted, format, index, field) {
		 if (typeof localeSorted === 'boolean') {
			  if (isNumber(format)) {
					index = format;
					format = undefined;
			  }

			  format = format || '';
		 } else {
			  format = localeSorted;
			  index = format;
			  localeSorted = false;

			  if (isNumber(format)) {
					index = format;
					format = undefined;
			  }

			  format = format || '';
		 }

		 var locale = getLocale(),
			  shift = localeSorted ? locale._week.dow : 0,
			  i,
			  out = [];

		 if (index != null) {
			  return get$1(format, (index + shift) % 7, field, 'day');
		 }

		 for (i = 0; i < 7; i++) {
			  out[i] = get$1(format, (i + shift) % 7, field, 'day');
		 }
		 return out;
	}

	function listMonths(format, index) {
		 return listMonthsImpl(format, index, 'months');
	}

	function listMonthsShort(format, index) {
		 return listMonthsImpl(format, index, 'monthsShort');
	}

	function listWeekdays(localeSorted, format, index) {
		 return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
	}

	function listWeekdaysShort(localeSorted, format, index) {
		 return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
	}

	function listWeekdaysMin(localeSorted, format, index) {
		 return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
	}

	getSetGlobalLocale('en', {
		 eras: [
			  {
					since: '0001-01-01',
					until: +Infinity,
					offset: 1,
					name: 'Anno Domini',
					narrow: 'AD',
					abbr: 'AD',
			  },
			  {
					since: '0000-12-31',
					until: -Infinity,
					offset: 1,
					name: 'Before Christ',
					narrow: 'BC',
					abbr: 'BC',
			  },
		 ],
		 dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
		 ordinal: function (number) {
			  var b = number % 10,
					output =
						 toInt((number % 100) / 10) === 1
							  ? 'th'
							  : b === 1
							  ? 'st'
							  : b === 2
							  ? 'nd'
							  : b === 3
							  ? 'rd'
							  : 'th';
			  return number + output;
		 },
	});

	// Side effect imports

	hooks.lang = deprecate(
		 'moment.lang is deprecated. Use moment.locale instead.',
		 getSetGlobalLocale
	);
	hooks.langData = deprecate(
		 'moment.langData is deprecated. Use moment.localeData instead.',
		 getLocale
	);

	var mathAbs = Math.abs;

	function abs() {
		 var data = this._data;

		 this._milliseconds = mathAbs(this._milliseconds);
		 this._days = mathAbs(this._days);
		 this._months = mathAbs(this._months);

		 data.milliseconds = mathAbs(data.milliseconds);
		 data.seconds = mathAbs(data.seconds);
		 data.minutes = mathAbs(data.minutes);
		 data.hours = mathAbs(data.hours);
		 data.months = mathAbs(data.months);
		 data.years = mathAbs(data.years);

		 return this;
	}

	function addSubtract$1(duration, input, value, direction) {
		 var other = createDuration(input, value);

		 duration._milliseconds += direction * other._milliseconds;
		 duration._days += direction * other._days;
		 duration._months += direction * other._months;

		 return duration._bubble();
	}

	// supports only 2.0-style add(1, 's') or add(duration)
	function add$1(input, value) {
		 return addSubtract$1(this, input, value, 1);
	}

	// supports only 2.0-style subtract(1, 's') or subtract(duration)
	function subtract$1(input, value) {
		 return addSubtract$1(this, input, value, -1);
	}

	function absCeil(number) {
		 if (number < 0) {
			  return Math.floor(number);
		 } else {
			  return Math.ceil(number);
		 }
	}

	function bubble() {
		 var milliseconds = this._milliseconds,
			  days = this._days,
			  months = this._months,
			  data = this._data,
			  seconds,
			  minutes,
			  hours,
			  years,
			  monthsFromDays;

		 // if we have a mix of positive and negative values, bubble down first
		 // check: https://github.com/moment/moment/issues/2166
		 if (
			  !(
					(milliseconds >= 0 && days >= 0 && months >= 0) ||
					(milliseconds <= 0 && days <= 0 && months <= 0)
			  )
		 ) {
			  milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
			  days = 0;
			  months = 0;
		 }

		 // The following code bubbles up values, see the tests for
		 // examples of what that means.
		 data.milliseconds = milliseconds % 1000;

		 seconds = absFloor(milliseconds / 1000);
		 data.seconds = seconds % 60;

		 minutes = absFloor(seconds / 60);
		 data.minutes = minutes % 60;

		 hours = absFloor(minutes / 60);
		 data.hours = hours % 24;

		 days += absFloor(hours / 24);

		 // convert days to months
		 monthsFromDays = absFloor(daysToMonths(days));
		 months += monthsFromDays;
		 days -= absCeil(monthsToDays(monthsFromDays));

		 // 12 months -> 1 year
		 years = absFloor(months / 12);
		 months %= 12;

		 data.days = days;
		 data.months = months;
		 data.years = years;

		 return this;
	}

	function daysToMonths(days) {
		 // 400 years have 146097 days (taking into account leap year rules)
		 // 400 years have 12 months === 4800
		 return (days * 4800) / 146097;
	}

	function monthsToDays(months) {
		 // the reverse of daysToMonths
		 return (months * 146097) / 4800;
	}

	function as(units) {
		 if (!this.isValid()) {
			  return NaN;
		 }
		 var days,
			  months,
			  milliseconds = this._milliseconds;

		 units = normalizeUnits(units);

		 if (units === 'month' || units === 'quarter' || units === 'year') {
			  days = this._days + milliseconds / 864e5;
			  months = this._months + daysToMonths(days);
			  switch (units) {
					case 'month':
						 return months;
					case 'quarter':
						 return months / 3;
					case 'year':
						 return months / 12;
			  }
		 } else {
			  // handle milliseconds separately because of floating point math errors (issue #1867)
			  days = this._days + Math.round(monthsToDays(this._months));
			  switch (units) {
					case 'week':
						 return days / 7 + milliseconds / 6048e5;
					case 'day':
						 return days + milliseconds / 864e5;
					case 'hour':
						 return days * 24 + milliseconds / 36e5;
					case 'minute':
						 return days * 1440 + milliseconds / 6e4;
					case 'second':
						 return days * 86400 + milliseconds / 1000;
					// Math.floor prevents floating point math errors here
					case 'millisecond':
						 return Math.floor(days * 864e5) + milliseconds;
					default:
						 throw new Error('Unknown unit ' + units);
			  }
		 }
	}

	// TODO: Use this.as('ms')?
	function valueOf$1() {
		 if (!this.isValid()) {
			  return NaN;
		 }
		 return (
			  this._milliseconds +
			  this._days * 864e5 +
			  (this._months % 12) * 2592e6 +
			  toInt(this._months / 12) * 31536e6
		 );
	}

	function makeAs(alias) {
		 return function () {
			  return this.as(alias);
		 };
	}

	var asMilliseconds = makeAs('ms'),
		 asSeconds = makeAs('s'),
		 asMinutes = makeAs('m'),
		 asHours = makeAs('h'),
		 asDays = makeAs('d'),
		 asWeeks = makeAs('w'),
		 asMonths = makeAs('M'),
		 asQuarters = makeAs('Q'),
		 asYears = makeAs('y');

	function clone$1() {
		 return createDuration(this);
	}

	function get$2(units) {
		 units = normalizeUnits(units);
		 return this.isValid() ? this[units + 's']() : NaN;
	}

	function makeGetter(name) {
		 return function () {
			  return this.isValid() ? this._data[name] : NaN;
		 };
	}

	var milliseconds = makeGetter('milliseconds'),
		 seconds = makeGetter('seconds'),
		 minutes = makeGetter('minutes'),
		 hours = makeGetter('hours'),
		 days = makeGetter('days'),
		 months = makeGetter('months'),
		 years = makeGetter('years');

	function weeks() {
		 return absFloor(this.days() / 7);
	}

	var round = Math.round,
		 thresholds = {
			  ss: 44, // a few seconds to seconds
			  s: 45, // seconds to minute
			  m: 45, // minutes to hour
			  h: 22, // hours to day
			  d: 26, // days to month/week
			  w: null, // weeks to month
			  M: 11, // months to year
		 };

	// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
		 return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	}

	function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
		 var duration = createDuration(posNegDuration).abs(),
			  seconds = round(duration.as('s')),
			  minutes = round(duration.as('m')),
			  hours = round(duration.as('h')),
			  days = round(duration.as('d')),
			  months = round(duration.as('M')),
			  weeks = round(duration.as('w')),
			  years = round(duration.as('y')),
			  a =
					(seconds <= thresholds.ss && ['s', seconds]) ||
					(seconds < thresholds.s && ['ss', seconds]) ||
					(minutes <= 1 && ['m']) ||
					(minutes < thresholds.m && ['mm', minutes]) ||
					(hours <= 1 && ['h']) ||
					(hours < thresholds.h && ['hh', hours]) ||
					(days <= 1 && ['d']) ||
					(days < thresholds.d && ['dd', days]);

		 if (thresholds.w != null) {
			  a =
					a ||
					(weeks <= 1 && ['w']) ||
					(weeks < thresholds.w && ['ww', weeks]);
		 }
		 a = a ||
			  (months <= 1 && ['M']) ||
			  (months < thresholds.M && ['MM', months]) ||
			  (years <= 1 && ['y']) || ['yy', years];

		 a[2] = withoutSuffix;
		 a[3] = +posNegDuration > 0;
		 a[4] = locale;
		 return substituteTimeAgo.apply(null, a);
	}

	// This function allows you to set the rounding function for relative time strings
	function getSetRelativeTimeRounding(roundingFunction) {
		 if (roundingFunction === undefined) {
			  return round;
		 }
		 if (typeof roundingFunction === 'function') {
			  round = roundingFunction;
			  return true;
		 }
		 return false;
	}

	// This function allows you to set a threshold for relative time strings
	function getSetRelativeTimeThreshold(threshold, limit) {
		 if (thresholds[threshold] === undefined) {
			  return false;
		 }
		 if (limit === undefined) {
			  return thresholds[threshold];
		 }
		 thresholds[threshold] = limit;
		 if (threshold === 's') {
			  thresholds.ss = limit - 1;
		 }
		 return true;
	}

	function humanize(argWithSuffix, argThresholds) {
		 if (!this.isValid()) {
			  return this.localeData().invalidDate();
		 }

		 var withSuffix = false,
			  th = thresholds,
			  locale,
			  output;

		 if (typeof argWithSuffix === 'object') {
			  argThresholds = argWithSuffix;
			  argWithSuffix = false;
		 }
		 if (typeof argWithSuffix === 'boolean') {
			  withSuffix = argWithSuffix;
		 }
		 if (typeof argThresholds === 'object') {
			  th = Object.assign({}, thresholds, argThresholds);
			  if (argThresholds.s != null && argThresholds.ss == null) {
					th.ss = argThresholds.s - 1;
			  }
		 }

		 locale = this.localeData();
		 output = relativeTime$1(this, !withSuffix, th, locale);

		 if (withSuffix) {
			  output = locale.pastFuture(+this, output);
		 }

		 return locale.postformat(output);
	}

	var abs$1 = Math.abs;

	function sign(x) {
		 return (x > 0) - (x < 0) || +x;
	}

	function toISOString$1() {
		 // for ISO strings we do not use the normal bubbling rules:
		 //  * milliseconds bubble up until they become hours
		 //  * days do not bubble at all
		 //  * months bubble up until they become years
		 // This is because there is no context-free conversion between hours and days
		 // (think of clock changes)
		 // and also not between days and months (28-31 days per month)
		 if (!this.isValid()) {
			  return this.localeData().invalidDate();
		 }

		 var seconds = abs$1(this._milliseconds) / 1000,
			  days = abs$1(this._days),
			  months = abs$1(this._months),
			  minutes,
			  hours,
			  years,
			  s,
			  total = this.asSeconds(),
			  totalSign,
			  ymSign,
			  daysSign,
			  hmsSign;

		 if (!total) {
			  // this is the same as C#'s (Noda) and python (isodate)...
			  // but not other JS (goog.date)
			  return 'P0D';
		 }

		 // 3600 seconds -> 60 minutes -> 1 hour
		 minutes = absFloor(seconds / 60);
		 hours = absFloor(minutes / 60);
		 seconds %= 60;
		 minutes %= 60;

		 // 12 months -> 1 year
		 years = absFloor(months / 12);
		 months %= 12;

		 // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
		 s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

		 totalSign = total < 0 ? '-' : '';
		 ymSign = sign(this._months) !== sign(total) ? '-' : '';
		 daysSign = sign(this._days) !== sign(total) ? '-' : '';
		 hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

		 return (
			  totalSign +
			  'P' +
			  (years ? ymSign + years + 'Y' : '') +
			  (months ? ymSign + months + 'M' : '') +
			  (days ? daysSign + days + 'D' : '') +
			  (hours || minutes || seconds ? 'T' : '') +
			  (hours ? hmsSign + hours + 'H' : '') +
			  (minutes ? hmsSign + minutes + 'M' : '') +
			  (seconds ? hmsSign + s + 'S' : '')
		 );
	}

	var proto$2 = Duration.prototype;

	proto$2.isValid = isValid$1;
	proto$2.abs = abs;
	proto$2.add = add$1;
	proto$2.subtract = subtract$1;
	proto$2.as = as;
	proto$2.asMilliseconds = asMilliseconds;
	proto$2.asSeconds = asSeconds;
	proto$2.asMinutes = asMinutes;
	proto$2.asHours = asHours;
	proto$2.asDays = asDays;
	proto$2.asWeeks = asWeeks;
	proto$2.asMonths = asMonths;
	proto$2.asQuarters = asQuarters;
	proto$2.asYears = asYears;
	proto$2.valueOf = valueOf$1;
	proto$2._bubble = bubble;
	proto$2.clone = clone$1;
	proto$2.get = get$2;
	proto$2.milliseconds = milliseconds;
	proto$2.seconds = seconds;
	proto$2.minutes = minutes;
	proto$2.hours = hours;
	proto$2.days = days;
	proto$2.weeks = weeks;
	proto$2.months = months;
	proto$2.years = years;
	proto$2.humanize = humanize;
	proto$2.toISOString = toISOString$1;
	proto$2.toString = toISOString$1;
	proto$2.toJSON = toISOString$1;
	proto$2.locale = locale;
	proto$2.localeData = localeData;

	proto$2.toIsoString = deprecate(
		 'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
		 toISOString$1
	);
	proto$2.lang = lang;

	// FORMATTING

	addFormatToken('X', 0, 0, 'unix');
	addFormatToken('x', 0, 0, 'valueOf');

	// PARSING

	addRegexToken('x', matchSigned);
	addRegexToken('X', matchTimestamp);
	addParseToken('X', function (input, array, config) {
		 config._d = new Date(parseFloat(input) * 1000);
	});
	addParseToken('x', function (input, array, config) {
		 config._d = new Date(toInt(input));
	});

	//! moment.js

	hooks.version = '2.29.4';

	setHookCallback(createLocal);

	hooks.fn = proto;
	hooks.min = min;
	hooks.max = max;
	hooks.now = now;
	hooks.utc = createUTC;
	hooks.unix = createUnix;
	hooks.months = listMonths;
	hooks.isDate = isDate;
	hooks.locale = getSetGlobalLocale;
	hooks.invalid = createInvalid;
	hooks.duration = createDuration;
	hooks.isMoment = isMoment;
	hooks.weekdays = listWeekdays;
	hooks.parseZone = createInZone;
	hooks.localeData = getLocale;
	hooks.isDuration = isDuration;
	hooks.monthsShort = listMonthsShort;
	hooks.weekdaysMin = listWeekdaysMin;
	hooks.defineLocale = defineLocale;
	hooks.updateLocale = updateLocale;
	hooks.locales = listLocales;
	hooks.weekdaysShort = listWeekdaysShort;
	hooks.normalizeUnits = normalizeUnits;
	hooks.relativeTimeRounding = getSetRelativeTimeRounding;
	hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
	hooks.calendarFormat = getCalendarFormat;
	hooks.prototype = proto;

	// currently HTML5 input type only supports 24-hour formats
	hooks.HTML5_FMT = {
		 DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
		 DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
		 DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
		 DATE: 'YYYY-MM-DD', // <input type="date" />
		 TIME: 'HH:mm', // <input type="time" />
		 TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
		 TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
		 WEEK: 'GGGG-[W]WW', // <input type="week" />
		 MONTH: 'YYYY-MM', // <input type="month" />
	};

	return hooks;

})));

// Ion.Calendar | version 2.0.2 | http://ionden.com/a/plugins/ion.calendar/

;

(function (f) {

	try {

		var u = moment()

	} catch (v) {

		throw alert("Can't find Moment.js, please read the ion.calendar description."), Error("Can't find Moment.js library");

	}

	var m = {

		init: function (e) {

			var c = f.extend({

					lang: "en",

					sundayFirst: !0,

					years: "80",

					format: "",

					clickable: !0,

					startDate: "",

					hideArrows: !1,

					onClick: null,

					onReady: null

				}, e),

				a, b;

			return this.each(function () {

				var n = f(this);

				if (!n.data("isActive")) {

					n.data("isActive", !0);

					var e, l, m, w, y, g, d = moment(u.locale(c.lang)),

						h, k, p, z, x, q, r, v = !0;

					this.updateData = function (a) {

						c = f.extend(c,

							a);

						t()

					};

					var t = function () {

							e.off();

							l.off();

							m.off();

							w.off();

							n.empty();

							B();

							C()

						},

						B = function () {

							c.startDate && (g = 0 <= c.format.indexOf("L") ? moment(c.startDate, "YYYY.MM.DD").locale(c.lang) : moment(c.startDate, c.format).locale(c.lang));

							c.years = c.years.toString();

							x = c.years.split("-");

							1 === x.length ? (q = moment().subtract("years", x[0]).format("YYYY"), r = moment().format("YYYY")) : 2 === x.length && (q = x[0], r = x[1]);

							q = parseInt(q);

							r = parseInt(r);

							r < d.format("YYYY") && d.year(r).month(11);

							q > d.format("YYYY") && d.year(q).month(0)

						},

						C =

						function () {

							h = moment(d);

							k = parseInt(h.startOf("month").format("d"));

							p = parseInt(h.endOf("month").format("d"));

							z = parseInt(h.endOf("month").format("D"));

							a = '<div class="ic__container">';

							a += '<div class="ic__header">';

							a += '<div class="ic__prev"><div></div></div>';

							a += '<div class="ic__next"><div></div></div>';

							a += '<div class="ic__month"><select class="ic__month-select">';

							for (b = 0; 12 > b; b++) a = b === parseInt(d.format("M")) - 1 ? a + ('<option value="' + b + '" selected="selected">' + h.month(b).format("MMMM") + "</option>") : a + ('<option value="' +

								b + '">' + h.month(b).format("MMMM") + "</option>");

							a += "</select></div>";

							a += '<div class="ic__year"><select class="ic__year-select">';

							for (b = q; b <= r; b++) a = b === parseInt(d.format("YYYY")) ? a + ('<option value="' + b + '" selected="selected">' + b + "</option>") : a + ('<option value="' + b + '">' + b + "</option>");

							a += "</select></div>";

							a += "</div>";

							if (c.sundayFirst) {

								a += '<table class="ic__week-head"><tr>';

								for (b = 0; 7 > b; b++) a += "<td>" + h.day(b).format("dd") + "</td>";

								a += "</tr></table>";

								a += '<table class="ic__days"><tr>';

								for (b = 0; b < k; b++) a +=

									'<td class="ic__day-empty">&nbsp;</td>';

								for (b = 1; b <= z; b++) a = moment(d).date(b).format("D.M.YYYY") === u.format("D.M.YYYY") ? a + ('<td class="ic__day ic__day_state_current">' + b + "</td>") : g && moment(d).date(b).format("D.M.YYYY") === g.format("D.M.YYYY") ? a + ('<td class="ic__day ic__day_state_selected">' + b + "</td>") : a + ('<td class="ic__day">' + b + "</td>"), (k + b) / 7 === Math.floor((k + b) / 7) && (a += "</tr><tr>");

								b = p

							} else {

								a += '<table class="ic__week-head"><tr>';

								for (b = 1; 8 > b; b++) a = 7 > b ? a + ("<td>" + h.day(b).format("dd") + "</td>") : a + ("<td>" +

									h.day(0).format("dd") + "</td>");

								a += "</tr></table>";

								a += '<table class="ic__days"><tr>';

								k = 0 < k ? k - 1 : 6;

								for (b = 0; b < k; b++) a += '<td class="ic__day-empty">&nbsp;</td>';

								for (b = 1; b <= z; b++) a = moment(d).date(b).format("D.M.YYYY") === u.format("D.M.YYYY") ? a + ('<td class="ic__day ic__day_state_current">' + b + "</td>") : g && moment(d).date(b).format("D.M.YYYY") === g.format("D.M.YYYY") ? a + ('<td class="ic__day ic__day_state_selected">' + b + "</td>") : a + ('<td class="ic__day">' + b + "</td>"), (k + b) / 7 === Math.floor((k + b) / 7) && (a += "</tr><tr>");

								1 > p && (p = 7);

								b = p - 1

							}

							for (; 6 > b; b++) a += '<td class="ic__day-empty">&nbsp;</td>';

							a += "</tr></table>";

							a += "</div>";

							D()

						},

						D = function () {

							n.html(a);

							e = n.find(".ic__prev");

							l = n.find(".ic__next");

							m = n.find(".ic__month-select");

							w = n.find(".ic__year-select");

							y = n.find(".ic__day");

							c.hideArrows ? (e[0].style.display = "none", l[0].style.display = "none") : (e.on("click", function (a) {

								a.preventDefault();

								d.subtract("months", 1);

								parseInt(d.format("YYYY")) < q && d.add("months", 1);

								t()

							}), l.on("click", function (a) {

								a.preventDefault();

								d.add("months",

									1);

								parseInt(d.format("YYYY")) > r && d.subtract("months", 1);

								t()

							}));

							m.on("change", function (a) {

								a.preventDefault();

								a = f(this).prop("value");

								d.month(parseInt(a));

								t()

							});

							w.on("change", function (a) {

								a.preventDefault();

								a = f(this).prop("value");

								d.year(parseInt(a));

								t()

							});

							if (c.clickable) y.on("click", function (a) {

								a.preventDefault();

								a = f(this).text();

								d.date(parseInt(a));

								g = moment(d);

								0 <= c.format.indexOf("L") ? c.startDate = g.format("YYYY-MM-DD") : c.startDate = g.format(c.format);

								"function" === typeof c.onClick && (c.format ? "moment" ===

									c.format ? c.onClick.call(this, g) : c.onClick.call(this, g.format(c.format)) : c.onClick.call(this, g.format()));

								t()

							});

							"function" === typeof c.onReady && (c.format ? "moment" === c.format ? c.onReady.call(this, d) : c.onReady.call(this, d.format(c.format)) : c.onReady.call(this, d.format()));

							c.startDate && v && (v = !1, d.year(parseInt(g.format("YYYY"))), d.month(parseInt(g.format("M") - 1)), t())

						};

					B();

					C()

				}

			})

		},

		update: function (e) {

			return this.each(function () {

				this.updateData(e)

			})

		}

	};

	f.fn.ionCalendar = function (e) {

		if (m[e]) return m[e].apply(this,

			Array.prototype.slice.call(arguments, 1));

		if ("object" !== typeof e && e) f.error("Method " + e + " does not exist for jQuery.ionCalendar");

		else return m.init.apply(this, arguments)

	}

})(jQuery);

(function (f) {

	var u = 0,

		v, m = f(document.body),

		e = function () {

			f(".ic__datepicker").css("left", "-9999px").css("top", "-9999px")

		},

		c = {

			init: function (a) {

				var b = f.extend({

					lang: "en",

					sundayFirst: !0,

					years: "80",

					clickable: !0,

					format: ""

				}, a);

				return this.each(function () {

					var a = f(this),

						c, l = {},

						A = this,

						w, y, g, d, h, k;

					if (!a.data("isActive")) {

						a.data("isActive", !0);

						u++;

						this.pluginCount = u;

						l.lang = a.data("lang") || b.lang;

						!1 === a.data("sundayfirst") && (l.sundayFirst = a.data("sundayfirst"));

						l.years = a.data("years") || b.years;

						l.format = a.data("format") ||

							b.format;

						f.extend(b, l);

						m.on("mousedown", function () {

							e()

						});

						b.onClick = function (b) {

							a.prop("value", b);

							d = b;

							e()

						};

						var p = function () {

							w = parseInt(a.offset().left);

							y = parseInt(a.offset().top);

							g = parseInt(a.outerWidth(!0));

							c.css("left", w + g - 70 - ($(".calendar-js").width()) + "px").css("top", y - 200 + ($(".calendar-js").height()) + "px");

							(h = a.prop("value")) && h !== d && 0 > b.format.indexOf("L") && (k = moment(h, b.format), k.isValid() && c.ionCalendar("update", {

								startDate: h

							}))

						};

						(function () {

							v = '<div class="ic__datepicker" id="ic__datepicker-' + A.pluginCount + '"></div>';

							m.append(v);

							c = f("#ic__datepicker-" +

								A.pluginCount);

							c.ionCalendar(b);

							c.on("mousedown", function (a) {

								a.stopPropagation()

							});

							a.on("mousedown", function (a) {

								a.stopPropagation()

							});

							a.on("focusin", function () {

								e();

								p()

							});

							a.on("keyup", function () {

								p()

							})

						})()

					}

				})

			},

			close: function () {

				e()

			}

		};

	f.fn.ionDatePicker = function (a) {

		if (c[a]) return c[a].apply(this, Array.prototype.slice.call(arguments, 1));

		if ("object" !== typeof a && a) f.error("Method " + a + " does not exist for jQuery.ionDatePicker");

		else return c.init.apply(this, arguments)

	}

})(jQuery);
! function (a, b) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
}(this, function () {
	"use strict";

	function a() {
		return Gd.apply(null, arguments)
	}

	function b(a) {
		Gd = a
	}

	function c(a) {
		return "[object Array]" === Object.prototype.toString.call(a)
	}

	function d(a) {
		return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
	}

	function e(a, b) {
		var c, d = [];
		for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
		return d
	}

	function f(a, b) {
		return Object.prototype.hasOwnProperty.call(a, b)
	}

	function g(a, b) {
		for (var c in b) f(b, c) && (a[c] = b[c]);
		return f(b, "toString") && (a.toString = b.toString), f(b, "valueOf") && (a.valueOf = b.valueOf), a
	}

	function h(a, b, c, d) {
		return za(a, b, c, d, !0).utc()
	}

	function i() {
		return {
			empty: !1,
			unusedTokens: [],
			unusedInput: [],
			overflow: -2,
			charsLeftOver: 0,
			nullInput: !1,
			invalidMonth: null,
			invalidFormat: !1,
			userInvalidated: !1,
			iso: !1
		}
	}

	function j(a) {
		return null == a._pf && (a._pf = i()), a._pf
	}

	function k(a) {
		if (null == a._isValid) {
			var b = j(a);
			a._isValid = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.nullInput && !b.invalidFormat && !b.userInvalidated, a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour)
		}
		return a._isValid
	}

	function l(a) {
		var b = h(0 / 0);
		return null != a ? g(j(b), a) : j(b).userInvalidated = !0, b
	}

	function m(a, b) {
		var c, d, e;
		if ("undefined" != typeof b._isAMomentObject && (a._isAMomentObject = b._isAMomentObject), "undefined" != typeof b._i && (a._i = b._i), "undefined" != typeof b._f && (a._f = b._f), "undefined" != typeof b._l && (a._l = b._l), "undefined" != typeof b._strict && (a._strict = b._strict), "undefined" != typeof b._tzm && (a._tzm = b._tzm), "undefined" != typeof b._isUTC && (a._isUTC = b._isUTC), "undefined" != typeof b._offset && (a._offset = b._offset), "undefined" != typeof b._pf && (a._pf = j(b)), "undefined" != typeof b._locale && (a._locale = b._locale), Id.length > 0)
			for (c in Id) d = Id[c], e = b[d], "undefined" != typeof e && (a[d] = e);
		return a
	}

	function n(b) {
		m(this, b), this._d = new Date(+b._d), Jd === !1 && (Jd = !0, a.updateOffset(this), Jd = !1)
	}

	function o(a) {
		return a instanceof n || null != a && null != a._isAMomentObject
	}

	function p(a) {
		var b = +a,
			c = 0;
		return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c
	}

	function q(a, b, c) {
		var d, e = Math.min(a.length, b.length),
			f = Math.abs(a.length - b.length),
			g = 0;
		for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && p(a[d]) !== p(b[d])) && g++;
		return g + f
	}

	function r() {}

	function s(a) {
		return a ? a.toLowerCase().replace("_", "-") : a
	}

	function t(a) {
		for (var b, c, d, e, f = 0; f < a.length;) {
			for (e = s(a[f]).split("-"), b = e.length, c = s(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
				if (d = u(e.slice(0, b).join("-"))) return d;
				if (c && c.length >= b && q(e, c, !0) >= b - 1) break;
				b--
			}
			f++
		}
		return null
	}

	function u(a) {
		var b = null;
		if (!Kd[a] && "undefined" != typeof module && module && module.exports) try {
			b = Hd._abbr, require("./locale/" + a), v(b)
		} catch (c) {}
		return Kd[a]
	}

	function v(a, b) {
		var c;
		return a && (c = "undefined" == typeof b ? x(a) : w(a, b), c && (Hd = c)), Hd._abbr
	}

	function w(a, b) {
		return null !== b ? (b.abbr = a, Kd[a] || (Kd[a] = new r), Kd[a].set(b), v(a), Kd[a]) : (delete Kd[a], null)
	}

	function x(a) {
		var b;
		if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Hd;
		if (!c(a)) {
			if (b = u(a)) return b;
			a = [a]
		}
		return t(a)
	}

	function y(a, b) {
		var c = a.toLowerCase();
		Ld[c] = Ld[c + "s"] = Ld[b] = a
	}

	function z(a) {
		return "string" == typeof a ? Ld[a] || Ld[a.toLowerCase()] : void 0
	}

	function A(a) {
		var b, c, d = {};
		for (c in a) f(a, c) && (b = z(c), b && (d[b] = a[c]));
		return d
	}

	function B(b, c) {
		return function (d) {
			return null != d ? (D(this, b, d), a.updateOffset(this, c), this) : C(this, b)
		}
	}

	function C(a, b) {
		return a._d["get" + (a._isUTC ? "UTC" : "") + b]()
	}

	function D(a, b, c) {
		return a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
	}

	function E(a, b) {
		var c;
		if ("object" == typeof a)
			for (c in a) this.set(c, a[c]);
		else if (a = z(a), "function" == typeof this[a]) return this[a](b);
		return this
	}

	function F(a, b, c) {
		for (var d = "" + Math.abs(a), e = a >= 0; d.length < b;) d = "0" + d;
		return (e ? c ? "+" : "" : "-") + d
	}

	function G(a, b, c, d) {
		var e = d;
		"string" == typeof d && (e = function () {
			return this[d]()
		}), a && (Pd[a] = e), b && (Pd[b[0]] = function () {
			return F(e.apply(this, arguments), b[1], b[2])
		}), c && (Pd[c] = function () {
			return this.localeData().ordinal(e.apply(this, arguments), a)
		})
	}

	function H(a) {
		return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
	}

	function I(a) {
		var b, c, d = a.match(Md);
		for (b = 0, c = d.length; c > b; b++) Pd[d[b]] ? d[b] = Pd[d[b]] : d[b] = H(d[b]);
		return function (e) {
			var f = "";
			for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
			return f
		}
	}

	function J(a, b) {
		return a.isValid() ? (b = K(b, a.localeData()), Od[b] || (Od[b] = I(b)), Od[b](a)) : a.localeData().invalidDate()
	}

	function K(a, b) {
		function c(a) {
			return b.longDateFormat(a) || a
		}
		var d = 5;
		for (Nd.lastIndex = 0; d >= 0 && Nd.test(a);) a = a.replace(Nd, c), Nd.lastIndex = 0, d -= 1;
		return a
	}

	function L(a, b, c) {
		ce[a] = "function" == typeof b ? b : function (a) {
			return a && c ? c : b
		}
	}

	function M(a, b) {
		return f(ce, a) ? ce[a](b._strict, b._locale) : new RegExp(N(a))
	}

	function N(a) {
		return a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
			return b || c || d || e
		}).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
	}

	function O(a, b) {
		var c, d = b;
		for ("string" == typeof a && (a = [a]), "number" == typeof b && (d = function (a, c) {
				c[b] = p(a)
			}), c = 0; c < a.length; c++) de[a[c]] = d
	}

	function P(a, b) {
		O(a, function (a, c, d, e) {
			d._w = d._w || {}, b(a, d._w, d, e)
		})
	}

	function Q(a, b, c) {
		null != b && f(de, a) && de[a](b, c._a, c, a)
	}

	function R(a, b) {
		return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
	}

	function S(a) {
		return this._months[a.month()]
	}

	function T(a) {
		return this._monthsShort[a.month()]
	}

	function U(a, b, c) {
		var d, e, f;
		for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
			if (e = h([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
			if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
			if (!c && this._monthsParse[d].test(a)) return d
		}
	}

	function V(a, b) {
		var c;
		return "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), R(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a)
	}

	function W(b) {
		return null != b ? (V(this, b), a.updateOffset(this, !0), this) : C(this, "Month")
	}

	function X() {
		return R(this.year(), this.month())
	}

	function Y(a) {
		var b, c = a._a;
		return c && -2 === j(a).overflow && (b = c[fe] < 0 || c[fe] > 11 ? fe : c[ge] < 1 || c[ge] > R(c[ee], c[fe]) ? ge : c[he] < 0 || c[he] > 24 || 24 === c[he] && (0 !== c[ie] || 0 !== c[je] || 0 !== c[ke]) ? he : c[ie] < 0 || c[ie] > 59 ? ie : c[je] < 0 || c[je] > 59 ? je : c[ke] < 0 || c[ke] > 999 ? ke : -1, j(a)._overflowDayOfYear && (ee > b || b > ge) && (b = ge), j(a).overflow = b), a
	}

	function Z(b) {
		a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
	}

	function $(a, b) {
		var c = !0,
			d = a + "\n" + (new Error).stack;
		return g(function () {
			return c && (Z(d), c = !1), b.apply(this, arguments)
		}, b)
	}

	function _(a, b) {
		ne[a] || (Z(b), ne[a] = !0)
	}

	function aa(a) {
		var b, c, d = a._i,
			e = oe.exec(d);
		if (e) {
			for (j(a).iso = !0, b = 0, c = pe.length; c > b; b++)
				if (pe[b][1].exec(d)) {
					a._f = pe[b][0] + (e[6] || " ");
					break
				} for (b = 0, c = qe.length; c > b; b++)
				if (qe[b][1].exec(d)) {
					a._f += qe[b][0];
					break
				} d.match(_d) && (a._f += "Z"), ta(a)
		} else a._isValid = !1
	}

	function ba(b) {
		var c = re.exec(b._i);
		return null !== c ? void(b._d = new Date(+c[1])) : (aa(b), void(b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))))
	}

	function ca(a, b, c, d, e, f, g) {
		var h = new Date(a, b, c, d, e, f, g);
		return 1970 > a && h.setFullYear(a), h
	}

	function da(a) {
		var b = new Date(Date.UTC.apply(null, arguments));
		return 1970 > a && b.setUTCFullYear(a), b
	}

	function ea(a) {
		return fa(a) ? 366 : 365
	}

	function fa(a) {
		return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
	}

	function ga() {
		return fa(this.year())
	}

	function ha(a, b, c) {
		var d, e = c - b,
			f = c - a.day();
		return f > e && (f -= 7), e - 7 > f && (f += 7), d = Aa(a).add(f, "d"), {
			week: Math.ceil(d.dayOfYear() / 7),
			year: d.year()
		}
	}

	function ia(a) {
		return ha(a, this._week.dow, this._week.doy).week
	}

	function ja() {
		return this._week.dow
	}

	function ka() {
		return this._week.doy
	}

	function la(a) {
		var b = this.localeData().week(this);
		return null == a ? b : this.add(7 * (a - b), "d")
	}

	function ma(a) {
		var b = ha(this, 1, 4).week;
		return null == a ? b : this.add(7 * (a - b), "d")
	}

	function na(a, b, c, d, e) {
		var f, g, h = da(a, 0, 1).getUTCDay();
		return h = 0 === h ? 7 : h, c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, {
			year: g > 0 ? a : a - 1,
			dayOfYear: g > 0 ? g : ea(a - 1) + g
		}
	}

	function oa(a) {
		var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
		return null == a ? b : this.add(a - b, "d")
	}

	function pa(a, b, c) {
		return null != a ? a : null != b ? b : c
	}

	function qa(a) {
		var b = new Date;
		return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
	}

	function ra(a) {
		var b, c, d, e, f = [];
		if (!a._d) {
			for (d = qa(a), a._w && null == a._a[ge] && null == a._a[fe] && sa(a), a._dayOfYear && (e = pa(a._a[ee], d[ee]), a._dayOfYear > ea(e) && (j(a)._overflowDayOfYear = !0), c = da(e, 0, a._dayOfYear), a._a[fe] = c.getUTCMonth(), a._a[ge] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
			for (; 7 > b; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
			24 === a._a[he] && 0 === a._a[ie] && 0 === a._a[je] && 0 === a._a[ke] && (a._nextDay = !0, a._a[he] = 0), a._d = (a._useUTC ? da : ca).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[he] = 24)
		}
	}

	function sa(a) {
		var b, c, d, e, f, g, h;
		b = a._w, null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = pa(b.GG, a._a[ee], ha(Aa(), 1, 4).year), d = pa(b.W, 1), e = pa(b.E, 1)) : (f = a._locale._week.dow, g = a._locale._week.doy, c = pa(b.gg, a._a[ee], ha(Aa(), f, g).year), d = pa(b.w, 1), null != b.d ? (e = b.d, f > e && ++d) : e = null != b.e ? b.e + f : f), h = na(c, d, e, g, f), a._a[ee] = h.year, a._dayOfYear = h.dayOfYear
	}

	function ta(b) {
		if (b._f === a.ISO_8601) return void aa(b);
		b._a = [], j(b).empty = !0;
		var c, d, e, f, g, h = "" + b._i,
			i = h.length,
			k = 0;
		for (e = K(b._f, b._locale).match(Md) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match(M(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && j(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), k += d.length), Pd[f] ? (d ? j(b).empty = !1 : j(b).unusedTokens.push(f), Q(f, d, b)) : b._strict && !d && j(b).unusedTokens.push(f);
		j(b).charsLeftOver = i - k, h.length > 0 && j(b).unusedInput.push(h), j(b).bigHour === !0 && b._a[he] <= 12 && b._a[he] > 0 && (j(b).bigHour = void 0), b._a[he] = ua(b._locale, b._a[he], b._meridiem), ra(b), Y(b)
	}

	function ua(a, b, c) {
		var d;
		return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b
	}

	function va(a) {
		var b, c, d, e, f;
		if (0 === a._f.length) return j(a).invalidFormat = !0, void(a._d = new Date(0 / 0));
		for (e = 0; e < a._f.length; e++) f = 0, b = m({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], ta(b), k(b) && (f += j(b).charsLeftOver, f += 10 * j(b).unusedTokens.length, j(b).score = f, (null == d || d > f) && (d = f, c = b));
		g(a, c || b)
	}

	function wa(a) {
		if (!a._d) {
			var b = A(a._i);
			a._a = [b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], ra(a)
		}
	}

	function xa(a) {
		var b, e = a._i,
			f = a._f;
		return a._locale = a._locale || x(a._l), null === e || void 0 === f && "" === e ? l({
			nullInput: !0
		}) : ("string" == typeof e && (a._i = e = a._locale.preparse(e)), o(e) ? new n(Y(e)) : (c(f) ? va(a) : f ? ta(a) : d(e) ? a._d = e : ya(a), b = new n(Y(a)), b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b))
	}

	function ya(b) {
		var f = b._i;
		void 0 === f ? b._d = new Date : d(f) ? b._d = new Date(+f) : "string" == typeof f ? ba(b) : c(f) ? (b._a = e(f.slice(0), function (a) {
			return parseInt(a, 10)
		}), ra(b)) : "object" == typeof f ? wa(b) : "number" == typeof f ? b._d = new Date(f) : a.createFromInputFallback(b)
	}

	function za(a, b, c, d, e) {
		var f = {};
		return "boolean" == typeof c && (d = c, c = void 0), f._isAMomentObject = !0, f._useUTC = f._isUTC = e, f._l = c, f._i = a, f._f = b, f._strict = d, xa(f)
	}

	function Aa(a, b, c, d) {
		return za(a, b, c, d, !1)
	}

	function Ba(a, b) {
		var d, e;
		if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return Aa();
		for (d = b[0], e = 1; e < b.length; ++e) b[e][a](d) && (d = b[e]);
		return d
	}

	function Ca() {
		var a = [].slice.call(arguments, 0);
		return Ba("isBefore", a)
	}

	function Da() {
		var a = [].slice.call(arguments, 0);
		return Ba("isAfter", a)
	}

	function Ea(a) {
		var b = A(a),
			c = b.year || 0,
			d = b.quarter || 0,
			e = b.month || 0,
			f = b.week || 0,
			g = b.day || 0,
			h = b.hour || 0,
			i = b.minute || 0,
			j = b.second || 0,
			k = b.millisecond || 0;
		this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = x(), this._bubble()
	}

	function Fa(a) {
		return a instanceof Ea
	}

	function Ga(a, b) {
		G(a, 0, 0, function () {
			var a = this.utcOffset(),
				c = "+";
			return 0 > a && (a = -a, c = "-"), c + F(~~(a / 60), 2) + b + F(~~a % 60, 2)
		})
	}

	function Ha(a) {
		var b = (a || "").match(_d) || [],
			c = b[b.length - 1] || [],
			d = (c + "").match(we) || ["-", 0, 0],
			e = +(60 * d[1]) + p(d[2]);
		return "+" === d[0] ? e : -e
	}

	function Ia(b, c) {
		var e, f;
		return c._isUTC ? (e = c.clone(), f = (o(b) || d(b) ? +b : +Aa(b)) - +e, e._d.setTime(+e._d + f), a.updateOffset(e, !1), e) : Aa(b).local();
		return c._isUTC ? Aa(b).zone(c._offset || 0) : Aa(b).local()
	}

	function Ja(a) {
		return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
	}

	function Ka(b, c) {
		var d, e = this._offset || 0;
		return null != b ? ("string" == typeof b && (b = Ha(b)), Math.abs(b) < 16 && (b = 60 * b), !this._isUTC && c && (d = Ja(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? $a(this, Va(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Ja(this)
	}

	function La(a, b) {
		return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
	}

	function Ma(a) {
		return this.utcOffset(0, a)
	}

	function Na(a) {
		return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Ja(this), "m")), this
	}

	function Oa() {
		return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Ha(this._i)), this
	}

	function Pa(a) {
		return a = a ? Aa(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0
	}

	function Qa() {
		return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
	}

	function Ra() {
		if (this._a) {
			var a = this._isUTC ? h(this._a) : Aa(this._a);
			return this.isValid() && q(this._a, a.toArray()) > 0
		}
		return !1
	}

	function Sa() {
		return !this._isUTC
	}

	function Ta() {
		return this._isUTC
	}

	function Ua() {
		return this._isUTC && 0 === this._offset
	}

	function Va(a, b) {
		var c, d, e, g = a,
			h = null;
		return Fa(a) ? g = {
			ms: a._milliseconds,
			d: a._days,
			M: a._months
		} : "number" == typeof a ? (g = {}, b ? g[b] = a : g.milliseconds = a) : (h = xe.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
			y: 0,
			d: p(h[ge]) * c,
			h: p(h[he]) * c,
			m: p(h[ie]) * c,
			s: p(h[je]) * c,
			ms: p(h[ke]) * c
		}) : (h = ye.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
			y: Wa(h[2], c),
			M: Wa(h[3], c),
			d: Wa(h[4], c),
			h: Wa(h[5], c),
			m: Wa(h[6], c),
			s: Wa(h[7], c),
			w: Wa(h[8], c)
		}) : null == g ? g = {} : "object" == typeof g && ("from" in g || "to" in g) && (e = Ya(Aa(g.from), Aa(g.to)), g = {}, g.ms = e.milliseconds, g.M = e.months), d = new Ea(g), Fa(a) && f(a, "_locale") && (d._locale = a._locale), d
	}

	function Wa(a, b) {
		var c = a && parseFloat(a.replace(",", "."));
		return (isNaN(c) ? 0 : c) * b
	}

	function Xa(a, b) {
		var c = {
			milliseconds: 0,
			months: 0
		};
		return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
	}

	function Ya(a, b) {
		var c;
		return b = Ia(b, a), a.isBefore(b) ? c = Xa(a, b) : (c = Xa(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c
	}

	function Za(a, b) {
		return function (c, d) {
			var e, f;
			return null === d || isNaN(+d) || (_(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Va(c, d), $a(this, e, a), this
		}
	}

	function $a(b, c, d, e) {
		var f = c._milliseconds,
			g = c._days,
			h = c._months;
		e = null == e ? !0 : e, f && b._d.setTime(+b._d + f * d), g && D(b, "Date", C(b, "Date") + g * d), h && V(b, C(b, "Month") + h * d), e && a.updateOffset(b, g || h)
	}

	function _a(a) {
		var b = a || Aa(),
			c = Ia(b, this).startOf("day"),
			d = this.diff(c, "days", !0),
			e = -6 > d ? "sameElse" : -1 > d ? "lastWeek" : 0 > d ? "lastDay" : 1 > d ? "sameDay" : 2 > d ? "nextDay" : 7 > d ? "nextWeek" : "sameElse";
		return this.format(this.localeData().calendar(e, this, Aa(b)))
	}

	function ab() {
		return new n(this)
	}

	function bb(a, b) {
		var c;
		return b = z("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = o(a) ? a : Aa(a), +this > +a) : (c = o(a) ? +a : +Aa(a), c < +this.clone().startOf(b))
	}

	function cb(a, b) {
		var c;
		return b = z("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = o(a) ? a : Aa(a), +a > +this) : (c = o(a) ? +a : +Aa(a), +this.clone().endOf(b) < c)
	}

	function db(a, b, c) {
		return this.isAfter(a, c) && this.isBefore(b, c)
	}

	function eb(a, b) {
		var c;
		return b = z(b || "millisecond"), "millisecond" === b ? (a = o(a) ? a : Aa(a), +this === +a) : (c = +Aa(a), +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))
	}

	function fb(a) {
		return 0 > a ? Math.ceil(a) : Math.floor(a)
	}

	function gb(a, b, c) {
		var d, e, f = Ia(a, this),
			g = 6e4 * (f.utcOffset() - this.utcOffset());
		return b = z(b), "year" === b || "month" === b || "quarter" === b ? (e = hb(this, f), "quarter" === b ? e /= 3 : "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : fb(e)
	}

	function hb(a, b) {
		var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
			f = a.clone().add(e, "months");
		return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d)
	}

	function ib() {
		return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
	}

	function jb() {
		var a = this.clone().utc();
		return 0 < a.year() && a.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : J(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : J(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
	}

	function kb(b) {
		var c = J(this, b || a.defaultFormat);
		return this.localeData().postformat(c)
	}

	function lb(a, b) {
		return this.isValid() ? Va({
			to: this,
			from: a
		}).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
	}

	function mb(a) {
		return this.from(Aa(), a)
	}

	function nb(a, b) {
		return this.isValid() ? Va({
			from: this,
			to: a
		}).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
	}

	function ob(a) {
		return this.to(Aa(), a)
	}

	function pb(a) {
		var b;
		return void 0 === a ? this._locale._abbr : (b = x(a), null != b && (this._locale = b), this)
	}

	function qb() {
		return this._locale
	}

	function rb(a) {
		switch (a = z(a)) {
			case "year":
				this.month(0);
			case "quarter":
			case "month":
				this.date(1);
			case "week":
			case "isoWeek":
			case "day":
				this.hours(0);
			case "hour":
				this.minutes(0);
			case "minute":
				this.seconds(0);
			case "second":
				this.milliseconds(0)
		}
		return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
	}

	function sb(a) {
		return a = z(a), void 0 === a || "millisecond" === a ? this : this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms")
	}

	function tb() {
		return +this._d - 6e4 * (this._offset || 0)
	}

	function ub() {
		return Math.floor(+this / 1e3)
	}

	function vb() {
		return this._offset ? new Date(+this) : this._d
	}

	function wb() {
		var a = this;
		return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
	}

	function xb() {
		return k(this)
	}

	function yb() {
		return g({}, j(this))
	}

	function zb() {
		return j(this).overflow
	}

	function Ab(a, b) {
		G(0, [a, a.length], 0, b)
	}

	function Bb(a, b, c) {
		return ha(Aa([a, 11, 31 + b - c]), b, c).week
	}

	function Cb(a) {
		var b = ha(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
		return null == a ? b : this.add(a - b, "y")
	}

	function Db(a) {
		var b = ha(this, 1, 4).year;
		return null == a ? b : this.add(a - b, "y")
	}

	function Eb() {
		return Bb(this.year(), 1, 4)
	}

	function Fb() {
		var a = this.localeData()._week;
		return Bb(this.year(), a.dow, a.doy)
	}

	function Gb(a) {
		return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
	}

	function Hb(a, b) {
		if ("string" == typeof a)
			if (isNaN(a)) {
				if (a = b.weekdaysParse(a), "number" != typeof a) return null
			} else a = parseInt(a, 10);
		return a
	}

	function Ib(a) {
		return this._weekdays[a.day()]
	}

	function Jb(a) {
		return this._weekdaysShort[a.day()]
	}

	function Kb(a) {
		return this._weekdaysMin[a.day()]
	}

	function Lb(a) {
		var b, c, d;
		for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++)
			if (this._weekdaysParse[b] || (c = Aa([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b
	}

	function Mb(a) {
		var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
		return null != a ? (a = Hb(a, this.localeData()), this.add(a - b, "d")) : b
	}

	function Nb(a) {
		var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
		return null == a ? b : this.add(a - b, "d")
	}

	function Ob(a) {
		return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
	}

	function Pb(a, b) {
		G(a, 0, 0, function () {
			return this.localeData().meridiem(this.hours(), this.minutes(), b)
		})
	}

	function Qb(a, b) {
		return b._meridiemParse
	}

	function Rb(a) {
		return "p" === (a + "").toLowerCase().charAt(0)
	}

	function Sb(a, b, c) {
		return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
	}

	function Tb(a) {
		G(0, [a, 3], 0, "millisecond")
	}

	function Ub() {
		return this._isUTC ? "UTC" : ""
	}

	function Vb() {
		return this._isUTC ? "Coordinated Universal Time" : ""
	}

	function Wb(a) {
		return Aa(1e3 * a)
	}

	function Xb() {
		return Aa.apply(null, arguments).parseZone()
	}

	function Yb(a, b, c) {
		var d = this._calendar[a];
		return "function" == typeof d ? d.call(b, c) : d
	}

	function Zb(a) {
		var b = this._longDateFormat[a];
		return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (a) {
			return a.slice(1)
		}), this._longDateFormat[a] = b), b
	}

	function $b() {
		return this._invalidDate
	}

	function _b(a) {
		return this._ordinal.replace("%d", a)
	}

	function ac(a) {
		return a
	}

	function bc(a, b, c, d) {
		var e = this._relativeTime[c];
		return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
	}

	function cc(a, b) {
		var c = this._relativeTime[a > 0 ? "future" : "past"];
		return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
	}

	function dc(a) {
		var b, c;
		for (c in a) b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b;
		this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
	}

	function ec(a, b, c, d) {
		var e = x(),
			f = h().set(d, b);
		return e[c](f, a)
	}

	function fc(a, b, c, d, e) {
		if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b) return ec(a, b, c, e);
		var f, g = [];
		for (f = 0; d > f; f++) g[f] = ec(a, f, c, e);
		return g
	}

	function gc(a, b) {
		return fc(a, b, "months", 12, "month")
	}

	function hc(a, b) {
		return fc(a, b, "monthsShort", 12, "month")
	}

	function ic(a, b) {
		return fc(a, b, "weekdays", 7, "day")
	}

	function jc(a, b) {
		return fc(a, b, "weekdaysShort", 7, "day")
	}

	function kc(a, b) {
		return fc(a, b, "weekdaysMin", 7, "day")
	}

	function lc() {
		var a = this._data;
		return this._milliseconds = Ue(this._milliseconds), this._days = Ue(this._days), this._months = Ue(this._months), a.milliseconds = Ue(a.milliseconds), a.seconds = Ue(a.seconds), a.minutes = Ue(a.minutes), a.hours = Ue(a.hours), a.months = Ue(a.months), a.years = Ue(a.years), this
	}

	function mc(a, b, c, d) {
		var e = Va(b, c);
		return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
	}

	function nc(a, b) {
		return mc(this, a, b, 1)
	}

	function oc(a, b) {
		return mc(this, a, b, -1)
	}

	function pc() {
		var a, b, c, d = this._milliseconds,
			e = this._days,
			f = this._months,
			g = this._data,
			h = 0;
		return g.milliseconds = d % 1e3, a = fb(d / 1e3), g.seconds = a % 60, b = fb(a / 60), g.minutes = b % 60, c = fb(b / 60), g.hours = c % 24, e += fb(c / 24), h = fb(qc(e)), e -= fb(rc(h)), f += fb(e / 30), e %= 30, h += fb(f / 12), f %= 12, g.days = e, g.months = f, g.years = h, this
	}

	function qc(a) {
		return 400 * a / 146097
	}

	function rc(a) {
		return 146097 * a / 400
	}

	function sc(a) {
		var b, c, d = this._milliseconds;
		if (a = z(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + 12 * qc(b), "month" === a ? c : c / 12;
		switch (b = this._days + Math.round(rc(this._months / 12)), a) {
			case "week":
				return b / 7 + d / 6048e5;
			case "day":
				return b + d / 864e5;
			case "hour":
				return 24 * b + d / 36e5;
			case "minute":
				return 1440 * b + d / 6e4;
			case "second":
				return 86400 * b + d / 1e3;
			case "millisecond":
				return Math.floor(864e5 * b) + d;
			default:
				throw new Error("Unknown unit " + a)
		}
	}

	function tc() {
		return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * p(this._months / 12)
	}

	function uc(a) {
		return function () {
			return this.as(a)
		}
	}

	function vc(a) {
		return a = z(a), this[a + "s"]()
	}

	function wc(a) {
		return function () {
			return this._data[a]
		}
	}

	function xc() {
		return fb(this.days() / 7)
	}

	function yc(a, b, c, d, e) {
		return e.relativeTime(b || 1, !!c, a, d)
	}

	function zc(a, b, c) {
		var d = Va(a).abs(),
			e = jf(d.as("s")),
			f = jf(d.as("m")),
			g = jf(d.as("h")),
			h = jf(d.as("d")),
			i = jf(d.as("M")),
			j = jf(d.as("y")),
			k = e < kf.s && ["s", e] || 1 === f && ["m"] || f < kf.m && ["mm", f] || 1 === g && ["h"] || g < kf.h && ["hh", g] || 1 === h && ["d"] || h < kf.d && ["dd", h] || 1 === i && ["M"] || i < kf.M && ["MM", i] || 1 === j && ["y"] || ["yy", j];
		return k[2] = b, k[3] = +a > 0, k[4] = c, yc.apply(null, k)
	}

	function Ac(a, b) {
		return void 0 === kf[a] ? !1 : void 0 === b ? kf[a] : (kf[a] = b, !0)
	}

	function Bc(a) {
		var b = this.localeData(),
			c = zc(this, !a, b);
		return a && (c = b.pastFuture(+this, c)), b.postformat(c)
	}

	function Cc() {
		var a = lf(this.years()),
			b = lf(this.months()),
			c = lf(this.days()),
			d = lf(this.hours()),
			e = lf(this.minutes()),
			f = lf(this.seconds() + this.milliseconds() / 1e3),
			g = this.asSeconds();
		return g ? (0 > g ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D"
	}
	//! moment.js locale configuration
	//! locale : belarusian (be)
	//! author : Dmitry Demidov : https://github.com/demidov91
	//! author: Praleska: http://praleska.pro/
	//! Author : Menelion Elensúle : https://github.com/Oire
	function Dc(a, b) {
		var c = a.split("_");
		return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2]
	}

	function Ec(a, b, c) {
		var d = {
			mm: b ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
			hh: b ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
			dd: "дзень_дні_дзён",
			MM: "месяц_месяцы_месяцаў",
			yy: "год_гады_гадоў"
		};
		return "m" === c ? b ? "хвіліна" : "хвіліну" : "h" === c ? b ? "гадзіна" : "гадзіну" : a + " " + Dc(d[c], +a)
	}

	function Fc(a, b) {
		var c = {
				nominative: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_"),
				accusative: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_")
			},
			d = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b) ? "accusative" : "nominative";
		return c[d][a.month()]
	}

	function Gc(a, b) {
		var c = {
				nominative: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
				accusative: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_")
			},
			d = /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/.test(b) ? "accusative" : "nominative";
		return c[d][a.day()]
	}
	//! moment.js locale configuration
	//! locale : breton (br)
	//! author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou
	function Hc(a, b, c) {
		var d = {
			mm: "munutenn",
			MM: "miz",
			dd: "devezh"
		};
		return a + " " + Kc(d[c], a)
	}

	function Ic(a) {
		switch (Jc(a)) {
			case 1:
			case 3:
			case 4:
			case 5:
			case 9:
				return a + " bloaz";
			default:
				return a + " vloaz"
		}
	}

	function Jc(a) {
		return a > 9 ? Jc(a % 10) : a
	}

	function Kc(a, b) {
		return 2 === b ? Lc(a) : a
	}

	function Lc(a) {
		var b = {
			m: "v",
			b: "v",
			d: "z"
		};
		return void 0 === b[a.charAt(0)] ? a : b[a.charAt(0)] + a.substring(1)
	}
	//! moment.js locale configuration
	//! locale : bosnian (bs)
	//! author : Nedim Cholich : https://github.com/frontyard
	//! based on (hr) translation by Bojan Marković
	function Mc(a, b, c) {
		var d = a + " ";
		switch (c) {
			case "m":
				return b ? "jedna minuta" : "jedne minute";
			case "mm":
				return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";
			case "h":
				return b ? "jedan sat" : "jednog sata";
			case "hh":
				return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";
			case "dd":
				return d += 1 === a ? "dan" : "dana";
			case "MM":
				return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";
			case "yy":
				return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina"
		}
	}

	function Nc(a) {
		return a > 1 && 5 > a && 1 !== ~~(a / 10)
	}

	function Oc(a, b, c, d) {
		var e = a + " ";
		switch (c) {
			case "s":
				return b || d ? "pár sekund" : "pár sekundami";
			case "m":
				return b ? "minuta" : d ? "minutu" : "minutou";
			case "mm":
				return b || d ? e + (Nc(a) ? "minuty" : "minut") : e + "minutami";
				break;
			case "h":
				return b ? "hodina" : d ? "hodinu" : "hodinou";
			case "hh":
				return b || d ? e + (Nc(a) ? "hodiny" : "hodin") : e + "hodinami";
				break;
			case "d":
				return b || d ? "den" : "dnem";
			case "dd":
				return b || d ? e + (Nc(a) ? "dny" : "dní") : e + "dny";
				break;
			case "M":
				return b || d ? "měsíc" : "měsícem";
			case "MM":
				return b || d ? e + (Nc(a) ? "měsíce" : "měsíců") : e + "měsíci";
				break;
			case "y":
				return b || d ? "rok" : "rokem";
			case "yy":
				return b || d ? e + (Nc(a) ? "roky" : "let") : e + "lety"
		}
	}
	//! moment.js locale configuration
	//! locale : austrian german (de-at)
	//! author : lluchs : https://github.com/lluchs
	//! author: Menelion Elensúle: https://github.com/Oire
	//! author : Martin Groller : https://github.com/MadMG
	function Pc(a, b, c, d) {
		var e = {
			m: ["eine Minute", "einer Minute"],
			h: ["eine Stunde", "einer Stunde"],
			d: ["ein Tag", "einem Tag"],
			dd: [a + " Tage", a + " Tagen"],
			M: ["ein Monat", "einem Monat"],
			MM: [a + " Monate", a + " Monaten"],
			y: ["ein Jahr", "einem Jahr"],
			yy: [a + " Jahre", a + " Jahren"]
		};
		return b ? e[c][0] : e[c][1]
	}
	//! moment.js locale configuration
	//! locale : german (de)
	//! author : lluchs : https://github.com/lluchs
	//! author: Menelion Elensúle: https://github.com/Oire
	function Qc(a, b, c, d) {
		var e = {
			m: ["eine Minute", "einer Minute"],
			h: ["eine Stunde", "einer Stunde"],
			d: ["ein Tag", "einem Tag"],
			dd: [a + " Tage", a + " Tagen"],
			M: ["ein Monat", "einem Monat"],
			MM: [a + " Monate", a + " Monaten"],
			y: ["ein Jahr", "einem Jahr"],
			yy: [a + " Jahre", a + " Jahren"]
		};
		return b ? e[c][0] : e[c][1]
	}
	//! moment.js locale configuration
	//! locale : estonian (et)
	//! author : Henry Kehlmann : https://github.com/madhenry
	//! improvements : Illimar Tambek : https://github.com/ragulka
	function Rc(a, b, c, d) {
		var e = {
			s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
			m: ["ühe minuti", "üks minut"],
			mm: [a + " minuti", a + " minutit"],
			h: ["ühe tunni", "tund aega", "üks tund"],
			hh: [a + " tunni", a + " tundi"],
			d: ["ühe päeva", "üks päev"],
			M: ["kuu aja", "kuu aega", "üks kuu"],
			MM: [a + " kuu", a + " kuud"],
			y: ["ühe aasta", "aasta", "üks aasta"],
			yy: [a + " aasta", a + " aastat"]
		};
		return b ? e[c][2] ? e[c][2] : e[c][1] : d ? e[c][0] : e[c][1]
	}

	function Sc(a, b, c, d) {
		var e = "";
		switch (c) {
			case "s":
				return d ? "muutaman sekunnin" : "muutama sekunti";
			case "m":
				return d ? "minuutin" : "minuutti";
			case "mm":
				e = d ? "minuutin" : "minuuttia";
				break;
			case "h":
				return d ? "tunnin" : "tunti";
			case "hh":
				e = d ? "tunnin" : "tuntia";
				break;
			case "d":
				return d ? "päivän" : "päivä";
			case "dd":
				e = d ? "päivän" : "päivää";
				break;
			case "M":
				return d ? "kuukauden" : "kuukausi";
			case "MM":
				e = d ? "kuukauden" : "kuukautta";
				break;
			case "y":
				return d ? "vuoden" : "vuosi";
			case "yy":
				e = d ? "vuoden" : "vuotta"
		}
		return e = Tc(a, d) + " " + e
	}

	function Tc(a, b) {
		return 10 > a ? b ? If[a] : Hf[a] : a
	}
	//! moment.js locale configuration
	//! locale : hrvatski (hr)
	//! author : Bojan Marković : https://github.com/bmarkovic
	function Uc(a, b, c) {
		var d = a + " ";
		switch (c) {
			case "m":
				return b ? "jedna minuta" : "jedne minute";
			case "mm":
				return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";
			case "h":
				return b ? "jedan sat" : "jednog sata";
			case "hh":
				return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";
			case "dd":
				return d += 1 === a ? "dan" : "dana";
			case "MM":
				return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";
			case "yy":
				return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina"
		}
	}

	function Vc(a, b, c, d) {
		var e = a;
		switch (c) {
			case "s":
				return d || b ? "néhány másodperc" : "néhány másodperce";
			case "m":
				return "egy" + (d || b ? " perc" : " perce");
			case "mm":
				return e + (d || b ? " perc" : " perce");
			case "h":
				return "egy" + (d || b ? " óra" : " órája");
			case "hh":
				return e + (d || b ? " óra" : " órája");
			case "d":
				return "egy" + (d || b ? " nap" : " napja");
			case "dd":
				return e + (d || b ? " nap" : " napja");
			case "M":
				return "egy" + (d || b ? " hónap" : " hónapja");
			case "MM":
				return e + (d || b ? " hónap" : " hónapja");
			case "y":
				return "egy" + (d || b ? " év" : " éve");
			case "yy":
				return e + (d || b ? " év" : " éve")
		}
		return ""
	}

	function Wc(a) {
		return (a ? "" : "[múlt] ") + "[" + Nf[this.day()] + "] LT[-kor]"
	}
	//! moment.js locale configuration
	//! locale : Armenian (hy-am)
	//! author : Armendarabyan : https://github.com/armendarabyan
	function Xc(a, b) {
		var c = {
				nominative: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_"),
				accusative: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_")
			},
			d = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b) ? "accusative" : "nominative";
		return c[d][a.month()]
	}

	function Yc(a, b) {
		var c = "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_");
		return c[a.month()]
	}

	function Zc(a, b) {
		var c = "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_");
		return c[a.day()]
	}
	//! moment.js locale configuration
	//! locale : icelandic (is)
	//! author : Hinrik Örn Sigurðsson : https://github.com/hinrik
	function $c(a) {
		return a % 100 === 11 ? !0 : a % 10 === 1 ? !1 : !0
	}

	function _c(a, b, c, d) {
		var e = a + " ";
		switch (c) {
			case "s":
				return b || d ? "nokkrar sekúndur" : "nokkrum sekúndum";
			case "m":
				return b ? "mínúta" : "mínútu";
			case "mm":
				return $c(a) ? e + (b || d ? "mínútur" : "mínútum") : b ? e + "mínúta" : e + "mínútu";
			case "hh":
				return $c(a) ? e + (b || d ? "klukkustundir" : "klukkustundum") : e + "klukkustund";
			case "d":
				return b ? "dagur" : d ? "dag" : "degi";
			case "dd":
				return $c(a) ? b ? e + "dagar" : e + (d ? "daga" : "dögum") : b ? e + "dagur" : e + (d ? "dag" : "degi");
			case "M":
				return b ? "mánuður" : d ? "mánuð" : "mánuði";
			case "MM":
				return $c(a) ? b ? e + "mánuðir" : e + (d ? "mánuði" : "mánuðum") : b ? e + "mánuður" : e + (d ? "mánuð" : "mánuði");
			case "y":
				return b || d ? "ár" : "ári";
			case "yy":
				return $c(a) ? e + (b || d ? "ár" : "árum") : e + (b || d ? "ár" : "ári")
		}
	}
	//! moment.js locale configuration
	//! locale : Georgian (ka)
	//! author : Irakli Janiashvili : https://github.com/irakli-janiashvili
	function ad(a, b) {
		var c = {
				nominative: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
				accusative: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
			},
			d = /D[oD] *MMMM?/.test(b) ? "accusative" : "nominative";
		return c[d][a.month()]
	}

	function bd(a, b) {
		var c = {
				nominative: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
				accusative: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_")
			},
			d = /(წინა|შემდეგ)/.test(b) ? "accusative" : "nominative";
		return c[d][a.day()]
	}
	//! moment.js locale configuration
	//! locale : Luxembourgish (lb)
	//! author : mweimerskirch : https://github.com/mweimerskirch, David Raison : https://github.com/kwisatz
	function cd(a, b, c, d) {
		var e = {
			m: ["eng Minutt", "enger Minutt"],
			h: ["eng Stonn", "enger Stonn"],
			d: ["een Dag", "engem Dag"],
			M: ["ee Mount", "engem Mount"],
			y: ["ee Joer", "engem Joer"]
		};
		return b ? e[c][0] : e[c][1]
	}

	function dd(a) {
		var b = a.substr(0, a.indexOf(" "));
		return fd(b) ? "a " + a : "an " + a
	}

	function ed(a) {
		var b = a.substr(0, a.indexOf(" "));
		return fd(b) ? "viru " + a : "virun " + a
	}

	function fd(a) {
		if (a = parseInt(a, 10), isNaN(a)) return !1;
		if (0 > a) return !0;
		if (10 > a) return a >= 4 && 7 >= a ? !0 : !1;
		if (100 > a) {
			var b = a % 10,
				c = a / 10;
			return fd(0 === b ? c : b)
		}
		if (1e4 > a) {
			for (; a >= 10;) a /= 10;
			return fd(a)
		}
		return a /= 1e3, fd(a)
	}

	function gd(a, b, c, d) {
		return b ? "kelios sekundės" : d ? "kelių sekundžių" : "kelias sekundes"
	}

	function hd(a, b, c, d) {
		return b ? jd(c)[0] : d ? jd(c)[1] : jd(c)[2]
	}

	function id(a) {
		return a % 10 === 0 || a > 10 && 20 > a
	}

	function jd(a) {
		return Of[a].split("_")
	}

	function kd(a, b, c, d) {
		var e = a + " ";
		return 1 === a ? e + hd(a, b, c[0], d) : b ? e + (id(a) ? jd(c)[1] : jd(c)[0]) : d ? e + jd(c)[1] : e + (id(a) ? jd(c)[1] : jd(c)[2])
	}

	function ld(a, b) {
		var c = -1 === b.indexOf("dddd HH:mm"),
			d = Pf[a.day()];
		return c ? d : d.substring(0, d.length - 2) + "į"
	}

	function md(a, b, c) {
		return c ? b % 10 === 1 && 11 !== b ? a[2] : a[3] : b % 10 === 1 && 11 !== b ? a[0] : a[1]
	}

	function nd(a, b, c) {
		return a + " " + md(Qf[c], a, b)
	}

	function od(a, b, c) {
		return md(Qf[c], a, b)
	}

	function pd(a, b) {
		return b ? "dažas sekundes" : "dažām sekundēm"
	}

	function qd(a) {
		return 5 > a % 10 && a % 10 > 1 && ~~(a / 10) % 10 !== 1
	}

	function rd(a, b, c) {
		var d = a + " ";
		switch (c) {
			case "m":
				return b ? "minuta" : "minutę";
			case "mm":
				return d + (qd(a) ? "minuty" : "minut");
			case "h":
				return b ? "godzina" : "godzinę";
			case "hh":
				return d + (qd(a) ? "godziny" : "godzin");
			case "MM":
				return d + (qd(a) ? "miesiące" : "miesięcy");
			case "yy":
				return d + (qd(a) ? "lata" : "lat")
		}
	}
	//! moment.js locale configuration
	//! locale : romanian (ro)
	//! author : Vlad Gurdiga : https://github.com/gurdiga
	//! author : Valentin Agachi : https://github.com/avaly
	function sd(a, b, c) {
		var d = {
				mm: "minute",
				hh: "ore",
				dd: "zile",
				MM: "luni",
				yy: "ani"
			},
			e = " ";
		return (a % 100 >= 20 || a >= 100 && a % 100 === 0) && (e = " de "), a + e + d[c]
	}
	//! moment.js locale configuration
	//! locale : russian (ru)
	//! author : Viktorminator : https://github.com/Viktorminator
	//! Author : Menelion Elensúle : https://github.com/Oire
	function td(a, b) {
		var c = a.split("_");
		return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2]
	}

	function ud(a, b, c) {
		var d = {
			mm: b ? "минута_минуты_минут" : "минуту_минуты_минут",
			hh: "час_часа_часов",
			dd: "день_дня_дней",
			MM: "месяц_месяца_месяцев",
			yy: "год_года_лет"
		};
		return "m" === c ? b ? "минута" : "минуту" : a + " " + td(d[c], +a)
	}

	function vd(a, b) {
		var c = {
				nominative: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
				accusative: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")
			},
			d = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b) ? "accusative" : "nominative";
		return c[d][a.month()]
	}

	function wd(a, b) {
		var c = {
				nominative: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
				accusative: "янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_")
			},
			d = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b) ? "accusative" : "nominative";
		return c[d][a.month()]
	}

	function xd(a, b) {
		var c = {
				nominative: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
				accusative: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_")
			},
			d = /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/.test(b) ? "accusative" : "nominative";
		return c[d][a.day()]
	}

	function yd(a) {
		return a > 1 && 5 > a
	}

	function zd(a, b, c, d) {
		var e = a + " ";
		switch (c) {
			case "s":
				return b || d ? "pár sekúnd" : "pár sekundami";
			case "m":
				return b ? "minúta" : d ? "minútu" : "minútou";
			case "mm":
				return b || d ? e + (yd(a) ? "minúty" : "minút") : e + "minútami";
				break;
			case "h":
				return b ? "hodina" : d ? "hodinu" : "hodinou";
			case "hh":
				return b || d ? e + (yd(a) ? "hodiny" : "hodín") : e + "hodinami";
				break;
			case "d":
				return b || d ? "deň" : "dňom";
			case "dd":
				return b || d ? e + (yd(a) ? "dni" : "dní") : e + "dňami";
				break;
			case "M":
				return b || d ? "mesiac" : "mesiacom";
			case "MM":
				return b || d ? e + (yd(a) ? "mesiace" : "mesiacov") : e + "mesiacmi";
				break;
			case "y":
				return b || d ? "rok" : "rokom";
			case "yy":
				return b || d ? e + (yd(a) ? "roky" : "rokov") : e + "rokmi"
		}
	}
	//! moment.js locale configuration
	//! locale : slovenian (sl)
	//! author : Robert Sedovšek : https://github.com/sedovsek
	function Ad(a, b, c, d) {
		var e = a + " ";
		switch (c) {
			case "s":
				return b || d ? "nekaj sekund" : "nekaj sekundami";
			case "m":
				return b ? "ena minuta" : "eno minuto";
			case "mm":
				return e += 1 === a ? b ? "minuta" : "minuto" : 2 === a ? b || d ? "minuti" : "minutama" : 5 > a ? b || d ? "minute" : "minutami" : b || d ? "minut" : "minutami";
			case "h":
				return b ? "ena ura" : "eno uro";
			case "hh":
				return e += 1 === a ? b ? "ura" : "uro" : 2 === a ? b || d ? "uri" : "urama" : 5 > a ? b || d ? "ure" : "urami" : b || d ? "ur" : "urami";
			case "d":
				return b || d ? "en dan" : "enim dnem";
			case "dd":
				return e += 1 === a ? b || d ? "dan" : "dnem" : 2 === a ? b || d ? "dni" : "dnevoma" : b || d ? "dni" : "dnevi";
			case "M":
				return b || d ? "en mesec" : "enim mesecem";
			case "MM":
				return e += 1 === a ? b || d ? "mesec" : "mesecem" : 2 === a ? b || d ? "meseca" : "mesecema" : 5 > a ? b || d ? "mesece" : "meseci" : b || d ? "mesecev" : "meseci";
			case "y":
				return b || d ? "eno leto" : "enim letom";
			case "yy":
				return e += 1 === a ? b || d ? "leto" : "letom" : 2 === a ? b || d ? "leti" : "letoma" : 5 > a ? b || d ? "leta" : "leti" : b || d ? "let" : "leti"
		}
	}
	//! moment.js locale configuration
	//! locale : ukrainian (uk)
	//! author : zemlanin : https://github.com/zemlanin
	//! Author : Menelion Elensúle : https://github.com/Oire
	function Bd(a, b) {
		var c = a.split("_");
		return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2]
	}

	function Cd(a, b, c) {
		var d = {
			mm: "хвилина_хвилини_хвилин",
			hh: "година_години_годин",
			dd: "день_дні_днів",
			MM: "місяць_місяці_місяців",
			yy: "рік_роки_років"
		};
		return "m" === c ? b ? "хвилина" : "хвилину" : "h" === c ? b ? "година" : "годину" : a + " " + Bd(d[c], +a)
	}

	function Dd(a, b) {
		var c = {
				nominative: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),
				accusative: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_")
			},
			d = /D[oD]? *MMMM?/.test(b) ? "accusative" : "nominative";
		return c[d][a.month()]
	}

	function Ed(a, b) {
		var c = {
				nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
				accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
				genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
			},
			d = /(\[[ВвУу]\]) ?dddd/.test(b) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(b) ? "genitive" : "nominative";
		return c[d][a.day()]
	}

	function Fd(a) {
		return function () {
			return a + "о" + (11 === this.hours() ? "б" : "") + "] LT"
		}
	}
	var Gd, Hd, Id = a.momentProperties = [],
		Jd = !1,
		Kd = {},
		Ld = {},
		Md = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,
		Nd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
		Od = {},
		Pd = {},
		Qd = /\d/,
		Rd = /\d\d/,
		Sd = /\d{3}/,
		Td = /\d{4}/,
		Ud = /[+-]?\d{6}/,
		Vd = /\d\d?/,
		Wd = /\d{1,3}/,
		Xd = /\d{1,4}/,
		Yd = /[+-]?\d{1,6}/,
		Zd = /\d+/,
		$d = /[+-]?\d+/,
		_d = /Z|[+-]\d\d:?\d\d/gi,
		ae = /[+-]?\d+(\.\d{1,3})?/,
		be = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
		ce = {},
		de = {},
		ee = 0,
		fe = 1,
		ge = 2,
		he = 3,
		ie = 4,
		je = 5,
		ke = 6;
	G("M", ["MM", 2], "Mo", function () {
		return this.month() + 1
	}), G("MMM", 0, 0, function (a) {
		return this.localeData().monthsShort(this, a)
	}), G("MMMM", 0, 0, function (a) {
		return this.localeData().months(this, a)
	}), y("month", "M"), L("M", Vd), L("MM", Vd, Rd), L("MMM", be), L("MMMM", be), O(["M", "MM"], function (a, b) {
		b[fe] = p(a) - 1
	}), O(["MMM", "MMMM"], function (a, b, c, d) {
		var e = c._locale.monthsParse(a, d, c._strict);
		null != e ? b[fe] = e : j(c).invalidMonth = a
	});
	var le = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
		me = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
		ne = {};
	a.suppressDeprecationWarnings = !1;
	var oe = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
		pe = [
			["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
			["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
			["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
			["GGGG-[W]WW", /\d{4}-W\d{2}/],
			["YYYY-DDD", /\d{4}-\d{3}/]
		],
		qe = [
			["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
			["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
			["HH:mm", /(T| )\d\d:\d\d/],
			["HH", /(T| )\d\d/]
		],
		re = /^\/?Date\((\-?\d+)/i;
	a.createFromInputFallback = $("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (a) {
		a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
	}), G(0, ["YY", 2], 0, function () {
		return this.year() % 100
	}), G(0, ["YYYY", 4], 0, "year"), G(0, ["YYYYY", 5], 0, "year"), G(0, ["YYYYYY", 6, !0], 0, "year"), y("year", "y"), L("Y", $d), L("YY", Vd, Rd), L("YYYY", Xd, Td), L("YYYYY", Yd, Ud), L("YYYYYY", Yd, Ud), O(["YYYY", "YYYYY", "YYYYYY"], ee), O("YY", function (b, c) {
		c[ee] = a.parseTwoDigitYear(b)
	}), a.parseTwoDigitYear = function (a) {
		return p(a) + (p(a) > 68 ? 1900 : 2e3)
	};
	var se = B("FullYear", !1);
	G("w", ["ww", 2], "wo", "week"), G("W", ["WW", 2], "Wo", "isoWeek"), y("week", "w"), y("isoWeek", "W"), L("w", Vd), L("ww", Vd, Rd), L("W", Vd), L("WW", Vd, Rd), P(["w", "ww", "W", "WW"], function (a, b, c, d) {
		b[d.substr(0, 1)] = p(a)
	});
	var te = {
		dow: 0,
		doy: 6
	};
	G("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), y("dayOfYear", "DDD"), L("DDD", Wd), L("DDDD", Sd), O(["DDD", "DDDD"], function (a, b, c) {
		c._dayOfYear = p(a)
	}), a.ISO_8601 = function () {};
	var ue = $("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function () {
			var a = Aa.apply(null, arguments);
			return this > a ? this : a
		}),
		ve = $("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function () {
			var a = Aa.apply(null, arguments);
			return a > this ? this : a
		});
	Ga("Z", ":"), Ga("ZZ", ""), L("Z", _d), L("ZZ", _d), O(["Z", "ZZ"], function (a, b, c) {
		c._useUTC = !0, c._tzm = Ha(a)
	});
	var we = /([\+\-]|\d\d)/gi;
	a.updateOffset = function () {};
	var xe = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
		ye = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
	Va.fn = Ea.prototype;
	var ze = Za(1, "add"),
		Ae = Za(-1, "subtract");
	a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
	var Be = $("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (a) {
		return void 0 === a ? this.localeData() : this.locale(a)
	});
	G(0, ["gg", 2], 0, function () {
		return this.weekYear() % 100
	}), G(0, ["GG", 2], 0, function () {
		return this.isoWeekYear() % 100
	}), Ab("gggg", "weekYear"), Ab("ggggg", "weekYear"), Ab("GGGG", "isoWeekYear"), Ab("GGGGG", "isoWeekYear"), y("weekYear", "gg"), y("isoWeekYear", "GG"), L("G", $d), L("g", $d), L("GG", Vd, Rd), L("gg", Vd, Rd), L("GGGG", Xd, Td), L("gggg", Xd, Td), L("GGGGG", Yd, Ud), L("ggggg", Yd, Ud), P(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
		b[d.substr(0, 2)] = p(a)
	}), P(["gg", "GG"], function (b, c, d, e) {
		c[e] = a.parseTwoDigitYear(b)
	}), G("Q", 0, 0, "quarter"), y("quarter", "Q"), L("Q", Qd), O("Q", function (a, b) {
		b[fe] = 3 * (p(a) - 1)
	}), G("D", ["DD", 2], "Do", "date"), y("date", "D"), L("D", Vd), L("DD", Vd, Rd), L("Do", function (a, b) {
		return a ? b._ordinalParse : b._ordinalParseLenient
	}), O(["D", "DD"], ge), O("Do", function (a, b) {
		b[ge] = p(a.match(Vd)[0], 10)
	});
	var Ce = B("Date", !0);
	G("d", 0, "do", "day"), G("dd", 0, 0, function (a) {
		return this.localeData().weekdaysMin(this, a)
	}), G("ddd", 0, 0, function (a) {
		return this.localeData().weekdaysShort(this, a)
	}), G("dddd", 0, 0, function (a) {
		return this.localeData().weekdays(this, a)
	}), G("e", 0, 0, "weekday"), G("E", 0, 0, "isoWeekday"), y("day", "d"), y("weekday", "e"), y("isoWeekday", "E"), L("d", Vd), L("e", Vd), L("E", Vd), L("dd", be), L("ddd", be), L("dddd", be), P(["dd", "ddd", "dddd"], function (a, b, c) {
		var d = c._locale.weekdaysParse(a);
		null != d ? b.d = d : j(c).invalidWeekday = a
	}), P(["d", "e", "E"], function (a, b, c, d) {
		b[d] = p(a)
	});
	var De = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
		Ee = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
		Fe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
	G("H", ["HH", 2], 0, "hour"), G("h", ["hh", 2], 0, function () {
		return this.hours() % 12 || 12
	}), Pb("a", !0), Pb("A", !1), y("hour", "h"), L("a", Qb), L("A", Qb), L("H", Vd), L("h", Vd), L("HH", Vd, Rd), L("hh", Vd, Rd), O(["H", "HH"], he), O(["a", "A"], function (a, b, c) {
		c._isPm = c._locale.isPM(a), c._meridiem = a
	}), O(["h", "hh"], function (a, b, c) {
		b[he] = p(a), j(c).bigHour = !0
	});
	var Ge = /[ap]\.?m?\.?/i,
		He = B("Hours", !0);
	G("m", ["mm", 2], 0, "minute"), y("minute", "m"), L("m", Vd), L("mm", Vd, Rd), O(["m", "mm"], ie);
	var Ie = B("Minutes", !1);
	G("s", ["ss", 2], 0, "second"), y("second", "s"), L("s", Vd), L("ss", Vd, Rd), O(["s", "ss"], je);
	var Je = B("Seconds", !1);
	G("S", 0, 0, function () {
		return ~~(this.millisecond() / 100)
	}), G(0, ["SS", 2], 0, function () {
		return ~~(this.millisecond() / 10)
	}), Tb("SSS"), Tb("SSSS"), y("millisecond", "ms"), L("S", Wd, Qd), L("SS", Wd, Rd), L("SSS", Wd, Sd), L("SSSS", Zd), O(["S", "SS", "SSS", "SSSS"], function (a, b) {
		b[ke] = p(1e3 * ("0." + a))
	});
	var Ke = B("Milliseconds", !1);
	G("z", 0, 0, "zoneAbbr"), G("zz", 0, 0, "zoneName");
	var Le = n.prototype;
	Le.add = ze, Le.calendar = _a, Le.clone = ab, Le.diff = gb, Le.endOf = sb, Le.format = kb, Le.from = lb, Le.fromNow = mb, Le.to = nb, Le.toNow = ob, Le.get = E, Le.invalidAt = zb, Le.isAfter = bb, Le.isBefore = cb, Le.isBetween = db, Le.isSame = eb, Le.isValid = xb, Le.lang = Be, Le.locale = pb, Le.localeData = qb, Le.max = ve, Le.min = ue, Le.parsingFlags = yb, Le.set = E, Le.startOf = rb, Le.subtract = Ae, Le.toArray = wb, Le.toDate = vb, Le.toISOString = jb, Le.toJSON = jb, Le.toString = ib, Le.unix = ub, Le.valueOf = tb, Le.year = se, Le.isLeapYear = ga, Le.weekYear = Cb, Le.isoWeekYear = Db, Le.quarter = Le.quarters = Gb, Le.month = W, Le.daysInMonth = X, Le.week = Le.weeks = la, Le.isoWeek = Le.isoWeeks = ma, Le.weeksInYear = Fb, Le.isoWeeksInYear = Eb, Le.date = Ce, Le.day = Le.days = Mb, Le.weekday = Nb, Le.isoWeekday = Ob, Le.dayOfYear = oa, Le.hour = Le.hours = He, Le.minute = Le.minutes = Ie, Le.second = Le.seconds = Je, Le.millisecond = Le.milliseconds = Ke, Le.utcOffset = Ka, Le.utc = Ma, Le.local = Na, Le.parseZone = Oa, Le.hasAlignedHourOffset = Pa, Le.isDST = Qa, Le.isDSTShifted = Ra, Le.isLocal = Sa, Le.isUtcOffset = Ta, Le.isUtc = Ua, Le.isUTC = Ua, Le.zoneAbbr = Ub, Le.zoneName = Vb, Le.dates = $("dates accessor is deprecated. Use date instead.", Ce), Le.months = $("months accessor is deprecated. Use month instead", W), Le.years = $("years accessor is deprecated. Use year instead", se), Le.zone = $("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", La);
	var Me = Le,
		Ne = {
			sameDay: "[Today at] LT",
			nextDay: "[Tomorrow at] LT",
			nextWeek: "dddd [at] LT",
			lastDay: "[Yesterday at] LT",
			lastWeek: "[Last] dddd [at] LT",
			sameElse: "L"
		},
		Oe = {
			LTS: "h:mm:ss A",
			LT: "h:mm A",
			L: "MM/DD/YYYY",
			LL: "MMMM D, YYYY",
			LLL: "MMMM D, YYYY LT",
			LLLL: "dddd, MMMM D, YYYY LT"
		},
		Pe = "Invalid date",
		Qe = "%d",
		Re = /\d{1,2}/,
		Se = {
			future: "in %s",
			past: "%s ago",
			s: "a few seconds",
			m: "a minute",
			mm: "%d minutes",
			h: "an hour",
			hh: "%d hours",
			d: "a day",
			dd: "%d days",
			M: "a month",
			MM: "%d months",
			y: "a year",
			yy: "%d years"
		},
		Te = r.prototype;
	Te._calendar = Ne, Te.calendar = Yb, Te._longDateFormat = Oe, Te.longDateFormat = Zb, Te._invalidDate = Pe, Te.invalidDate = $b, Te._ordinal = Qe, Te.ordinal = _b, Te._ordinalParse = Re, Te.preparse = ac, Te.postformat = ac, Te._relativeTime = Se, Te.relativeTime = bc, Te.pastFuture = cc, Te.set = dc, Te.months = S, Te._months = le, Te.monthsShort = T, Te._monthsShort = me, Te.monthsParse = U, Te.week = ia, Te._week = te, Te.firstDayOfYear = ka, Te.firstDayOfWeek = ja, Te.weekdays = Ib, Te._weekdays = De, Te.weekdaysMin = Kb, Te._weekdaysMin = Fe, Te.weekdaysShort = Jb, Te._weekdaysShort = Ee, Te.weekdaysParse = Lb, Te.isPM = Rb, Te._meridiemParse = Ge, Te.meridiem = Sb, v("en", {
		ordinalParse: /\d{1,2}(th|st|nd|rd)/,
		ordinal: function (a) {
			var b = a % 10,
				c = 1 === p(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
			return a + c
		}
	}), a.lang = $("moment.lang is deprecated. Use moment.locale instead.", v), a.langData = $("moment.langData is deprecated. Use moment.localeData instead.", x);
	var Ue = Math.abs,
		Ve = uc("ms"),
		We = uc("s"),
		Xe = uc("m"),
		Ye = uc("h"),
		Ze = uc("d"),
		$e = uc("w"),
		_e = uc("M"),
		af = uc("y"),
		bf = wc("milliseconds"),
		cf = wc("seconds"),
		df = wc("minutes"),
		ef = wc("hours"),
		ff = wc("days"),
		gf = wc("months"),
		hf = wc("years"),
		jf = Math.round,
		kf = {
			s: 45,
			m: 45,
			h: 22,
			d: 26,
			M: 11
		},
		lf = Math.abs,
		mf = Ea.prototype;
	mf.abs = lc, mf.add = nc, mf.subtract = oc, mf.as = sc, mf.asMilliseconds = Ve, mf.asSeconds = We, mf.asMinutes = Xe, mf.asHours = Ye, mf.asDays = Ze, mf.asWeeks = $e, mf.asMonths = _e, mf.asYears = af, mf.valueOf = tc, mf._bubble = pc, mf.get = vc, mf.milliseconds = bf, mf.seconds = cf, mf.minutes = df, mf.hours = ef, mf.days = ff, mf.weeks = xc, mf.months = gf, mf.years = hf, mf.humanize = Bc, mf.toISOString = Cc, mf.toString = Cc, mf.toJSON = Cc, mf.locale = pb, mf.localeData = qb, mf.toIsoString = $("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Cc), mf.lang = Be, G("X", 0, 0, "unix"), G("x", 0, 0, "valueOf"), L("x", $d), L("X", ae), O("X", function (a, b, c) {
			c._d = new Date(1e3 * parseFloat(a, 10))
		}), O("x", function (a, b, c) {
			c._d = new Date(p(a))
		}),
		//! moment.js
		//! version : 2.10.3
		//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
		//! license : MIT
		//! momentjs.com
		a.version = "2.10.3", b(Aa), a.fn = Me, a.min = Ca, a.max = Da, a.utc = h, a.unix = Wb, a.months = gc, a.isDate = d, a.locale = v, a.invalid = l, a.duration = Va, a.isMoment = o, a.weekdays = ic, a.parseZone = Xb, a.localeData = x, a.isDuration = Fa, a.monthsShort = hc, a.weekdaysMin = kc, a.defineLocale = w, a.weekdaysShort = jc, a.normalizeUnits = z, a.relativeTimeThreshold = Ac;
	var nf = a,
		of = (nf.defineLocale("af", {
			months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
			weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
			weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
			meridiemParse: /vm|nm/i,
			isPM: function (a) {
				return /^nm$/i.test(a)
			},
			meridiem: function (a, b, c) {
				return 12 > a ? c ? "vm" : "VM" : c ? "nm" : "NM"
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd, D MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[Vandag om] LT",
				nextDay: "[Môre om] LT",
				nextWeek: "dddd [om] LT",
				lastDay: "[Gister om] LT",
				lastWeek: "[Laas] dddd [om] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "oor %s",
				past: "%s gelede",
				s: "'n paar sekondes",
				m: "'n minuut",
				mm: "%d minute",
				h: "'n uur",
				hh: "%d ure",
				d: "'n dag",
				dd: "%d dae",
				M: "'n maand",
				MM: "%d maande",
				y: "'n jaar",
				yy: "%d jaar"
			},
			ordinalParse: /\d{1,2}(ste|de)/,
			ordinal: function (a) {
				return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), nf.defineLocale("ar-ma", {
			months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
			monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
			weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd D MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			week: {
				dow: 6,
				doy: 12
			}
		}), {
			1: "١",
			2: "٢",
			3: "٣",
			4: "٤",
			5: "٥",
			6: "٦",
			7: "٧",
			8: "٨",
			9: "٩",
			0: "٠"
		}),
		pf = {
			"١": "1",
			"٢": "2",
			"٣": "3",
			"٤": "4",
			"٥": "5",
			"٦": "6",
			"٧": "7",
			"٨": "8",
			"٩": "9",
			"٠": "0"
		},
		qf = (nf.defineLocale("ar-sa", {
			months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd D MMMM YYYY LT"
			},
			meridiemParse: /ص|م/,
			isPM: function (a) {
				return "م" === a
			},
			meridiem: function (a, b, c) {
				return 12 > a ? "ص" : "م"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			preparse: function (a) {
				return a.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (a) {
					return pf[a]
				}).replace(/،/g, ",")
			},
			postformat: function (a) {
				return a.replace(/\d/g, function (a) {
					return of[a]
				}).replace(/,/g, "،")
			},
			week: {
				dow: 6,
				doy: 12
			}
		}), nf.defineLocale("ar-tn", {
			months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd D MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), {
			1: "١",
			2: "٢",
			3: "٣",
			4: "٤",
			5: "٥",
			6: "٦",
			7: "٧",
			8: "٨",
			9: "٩",
			0: "٠"
		}),
		rf = {
			"١": "1",
			"٢": "2",
			"٣": "3",
			"٤": "4",
			"٥": "5",
			"٦": "6",
			"٧": "7",
			"٨": "8",
			"٩": "9",
			"٠": "0"
		},
		sf = function (a) {
			return 0 === a ? 0 : 1 === a ? 1 : 2 === a ? 2 : a % 100 >= 3 && 10 >= a % 100 ? 3 : a % 100 >= 11 ? 4 : 5
		},
		tf = {
			s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
			m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
			h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
			d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
			M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
			y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
		},
		uf = function (a) {
			return function (b, c, d, e) {
				var f = sf(b),
					g = tf[a][sf(b)];
				return 2 === f && (g = g[c ? 0 : 1]), g.replace(/%d/i, b)
			}
		},
		vf = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"],
		wf = (nf.defineLocale("ar", {
			months: vf,
			monthsShort: vf,
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "D/‏M/‏YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd D MMMM YYYY LT"
			},
			meridiemParse: /ص|م/,
			isPM: function (a) {
				return "م" === a
			},
			meridiem: function (a, b, c) {
				return 12 > a ? "ص" : "م"
			},
			calendar: {
				sameDay: "[اليوم عند الساعة] LT",
				nextDay: "[غدًا عند الساعة] LT",
				nextWeek: "dddd [عند الساعة] LT",
				lastDay: "[أمس عند الساعة] LT",
				lastWeek: "dddd [عند الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "بعد %s",
				past: "منذ %s",
				s: uf("s"),
				m: uf("m"),
				mm: uf("m"),
				h: uf("h"),
				hh: uf("h"),
				d: uf("d"),
				dd: uf("d"),
				M: uf("M"),
				MM: uf("M"),
				y: uf("y"),
				yy: uf("y")
			},
			preparse: function (a) {
				return a.replace(/\u200f/g, "").replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (a) {
					return rf[a]
				}).replace(/،/g, ",")
			},
			postformat: function (a) {
				return a.replace(/\d/g, function (a) {
					return qf[a]
				}).replace(/,/g, "،")
			},
			week: {
				dow: 6,
				doy: 12
			}
		}), {
			1: "-inci",
			5: "-inci",
			8: "-inci",
			70: "-inci",
			80: "-inci",
			2: "-nci",
			7: "-nci",
			20: "-nci",
			50: "-nci",
			3: "-üncü",
			4: "-üncü",
			100: "-üncü",
			6: "-ncı",
			9: "-uncu",
			10: "-uncu",
			30: "-uncu",
			60: "-ıncı",
			90: "-ıncı"
		}),
		xf = (nf.defineLocale("az", {
			months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
			monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
			weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
			weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
			weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd, D MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[bugün saat] LT",
				nextDay: "[sabah saat] LT",
				nextWeek: "[gələn həftə] dddd [saat] LT",
				lastDay: "[dünən] LT",
				lastWeek: "[keçən həftə] dddd [saat] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s sonra",
				past: "%s əvvəl",
				s: "birneçə saniyyə",
				m: "bir dəqiqə",
				mm: "%d dəqiqə",
				h: "bir saat",
				hh: "%d saat",
				d: "bir gün",
				dd: "%d gün",
				M: "bir ay",
				MM: "%d ay",
				y: "bir il",
				yy: "%d il"
			},
			meridiemParse: /gecə|səhər|gündüz|axşam/,
			isPM: function (a) {
				return /^(gündüz|axşam)$/.test(a)
			},
			meridiem: function (a, b, c) {
				return 4 > a ? "gecə" : 12 > a ? "səhər" : 17 > a ? "gündüz" : "axşam"
			},
			ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
			ordinal: function (a) {
				if (0 === a) return a + "-ıncı";
				var b = a % 10,
					c = a % 100 - b,
					d = a >= 100 ? 100 : null;
				return a + (wf[b] || wf[c] || wf[d])
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), nf.defineLocale("be", {
			months: Fc,
			monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
			weekdays: Gc,
			weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
			weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY г.",
				LLL: "D MMMM YYYY г., LT",
				LLLL: "dddd, D MMMM YYYY г., LT"
			},
			calendar: {
				sameDay: "[Сёння ў] LT",
				nextDay: "[Заўтра ў] LT",
				lastDay: "[Учора ў] LT",
				nextWeek: function () {
					return "[У] dddd [ў] LT"
				},
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
						case 5:
						case 6:
							return "[У мінулую] dddd [ў] LT";
						case 1:
						case 2:
						case 4:
							return "[У мінулы] dddd [ў] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "праз %s",
				past: "%s таму",
				s: "некалькі секунд",
				m: Ec,
				mm: Ec,
				h: Ec,
				hh: Ec,
				d: "дзень",
				dd: Ec,
				M: "месяц",
				MM: Ec,
				y: "год",
				yy: Ec
			},
			meridiemParse: /ночы|раніцы|дня|вечара/,
			isPM: function (a) {
				return /^(дня|вечара)$/.test(a)
			},
			meridiem: function (a, b, c) {
				return 4 > a ? "ночы" : 12 > a ? "раніцы" : 17 > a ? "дня" : "вечара"
			},
			ordinalParse: /\d{1,2}-(і|ы|га)/,
			ordinal: function (a, b) {
				switch (b) {
					case "M":
					case "d":
					case "DDD":
					case "w":
					case "W":
						return a % 10 !== 2 && a % 10 !== 3 || a % 100 === 12 || a % 100 === 13 ? a + "-ы" : a + "-і";
					case "D":
						return a + "-га";
					default:
						return a
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), nf.defineLocale("bg", {
			months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
			monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
			weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
			weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
			weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "LT:ss",
				L: "D.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd, D MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[Днес в] LT",
				nextDay: "[Утре в] LT",
				nextWeek: "dddd [в] LT",
				lastDay: "[Вчера в] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
						case 6:
							return "[В изминалата] dddd [в] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[В изминалия] dddd [в] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "след %s",
				past: "преди %s",
				s: "няколко секунди",
				m: "минута",
				mm: "%d минути",
				h: "час",
				hh: "%d часа",
				d: "ден",
				dd: "%d дни",
				M: "месец",
				MM: "%d месеца",
				y: "година",
				yy: "%d години"
			},
			ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
			ordinal: function (a) {
				var b = a % 10,
					c = a % 100;
				return 0 === a ? a + "-ев" : 0 === c ? a + "-ен" : c > 10 && 20 > c ? a + "-ти" : 1 === b ? a + "-ви" : 2 === b ? a + "-ри" : 7 === b || 8 === b ? a + "-ми" : a + "-ти"
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), {
			1: "১",
			2: "২",
			3: "৩",
			4: "৪",
			5: "৫",
			6: "৬",
			7: "৭",
			8: "৮",
			9: "৯",
			0: "০"
		}),
		yf = {
			"১": "1",
			"২": "2",
			"৩": "3",
			"৪": "4",
			"৫": "5",
			"৬": "6",
			"৭": "7",
			"৮": "8",
			"৯": "9",
			"০": "0"
		},
		zf = (nf.defineLocale("bn", {
			months: "জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
			monthsShort: "জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্".split("_"),
			weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রুবার_শনিবার".split("_"),
			weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্রু_শনি".split("_"),
			weekdaysMin: "রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি".split("_"),
			longDateFormat: {
				LT: "A h:mm সময়",
				LTS: "A h:mm:ss সময়",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, LT",
				LLLL: "dddd, D MMMM YYYY, LT"
			},
			calendar: {
				sameDay: "[আজ] LT",
				nextDay: "[আগামীকাল] LT",
				nextWeek: "dddd, LT",
				lastDay: "[গতকাল] LT",
				lastWeek: "[গত] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s পরে",
				past: "%s আগে",
				s: "কএক সেকেন্ড",
				m: "এক মিনিট",
				mm: "%d মিনিট",
				h: "এক ঘন্টা",
				hh: "%d ঘন্টা",
				d: "এক দিন",
				dd: "%d দিন",
				M: "এক মাস",
				MM: "%d মাস",
				y: "এক বছর",
				yy: "%d বছর"
			},
			preparse: function (a) {
				return a.replace(/[১২৩৪৫৬৭৮৯০]/g, function (a) {
					return yf[a]
				})
			},
			postformat: function (a) {
				return a.replace(/\d/g, function (a) {
					return xf[a]
				})
			},
			meridiemParse: /রাত|শকাল|দুপুর|বিকেল|রাত/,
			isPM: function (a) {
				return /^(দুপুর|বিকেল|রাত)$/.test(a)
			},
			meridiem: function (a, b, c) {
				return 4 > a ? "রাত" : 10 > a ? "শকাল" : 17 > a ? "দুপুর" : 20 > a ? "বিকেল" : "রাত"
			},
			week: {
				dow: 0,
				doy: 6
			}
		}), {
			1: "༡",
			2: "༢",
			3: "༣",
			4: "༤",
			5: "༥",
			6: "༦",
			7: "༧",
			8: "༨",
			9: "༩",
			0: "༠"
		}),
		Af = {
			"༡": "1",
			"༢": "2",
			"༣": "3",
			"༤": "4",
			"༥": "5",
			"༦": "6",
			"༧": "7",
			"༨": "8",
			"༩": "9",
			"༠": "0"
		},
		Bf = (nf.defineLocale("bo", {
			months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
			monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
			weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
			weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
			weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
			longDateFormat: {
				LT: "A h:mm",
				LTS: "LT:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, LT",
				LLLL: "dddd, D MMMM YYYY, LT"
			},
			calendar: {
				sameDay: "[དི་རིང] LT",
				nextDay: "[སང་ཉིན] LT",
				nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
				lastDay: "[ཁ་སང] LT",
				lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ལ་",
				past: "%s སྔན་ལ",
				s: "ལམ་སང",
				m: "སྐར་མ་གཅིག",
				mm: "%d སྐར་མ",
				h: "ཆུ་ཚོད་གཅིག",
				hh: "%d ཆུ་ཚོད",
				d: "ཉིན་གཅིག",
				dd: "%d ཉིན་",
				M: "ཟླ་བ་གཅིག",
				MM: "%d ཟླ་བ",
				y: "ལོ་གཅིག",
				yy: "%d ལོ"
			},
			preparse: function (a) {
				return a.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (a) {
					return Af[a]
				})
			},
			postformat: function (a) {
				return a.replace(/\d/g, function (a) {
					return zf[a]
				})
			},
			meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
			isPM: function (a) {
				return /^(ཉིན་གུང|དགོང་དག|མཚན་མོ)$/.test(a)
			},
			meridiem: function (a, b, c) {
				return 4 > a ? "མཚན་མོ" : 10 > a ? "ཞོགས་ཀས" : 17 > a ? "ཉིན་གུང" : 20 > a ? "དགོང་དག" : "མཚན་མོ"
			},
			week: {
				dow: 0,
				doy: 6
			}
		}), nf.defineLocale("br", {
			months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
			monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
			weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
			weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
			weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
			longDateFormat: {
				LT: "h[e]mm A",
				LTS: "h[e]mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D [a viz] MMMM YYYY",
				LLL: "D [a viz] MMMM YYYY LT",
				LLLL: "dddd, D [a viz] MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[Hiziv da] LT",
				nextDay: "[Warc'hoazh da] LT",
				nextWeek: "dddd [da] LT",
				lastDay: "[Dec'h da] LT",
				lastWeek: "dddd [paset da] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "a-benn %s",
				past: "%s 'zo",
				s: "un nebeud segondennoù",
				m: "ur vunutenn",
				mm: Hc,
				h: "un eur",
				hh: "%d eur",
				d: "un devezh",
				dd: Hc,
				M: "ur miz",
				MM: Hc,
				y: "ur bloaz",
				yy: Ic
			},
			ordinalParse: /\d{1,2}(añ|vet)/,
			ordinal: function (a) {
				var b = 1 === a ? "añ" : "vet";
				return a + b
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), nf.defineLocale("bs", {
			months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
			monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
			weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "LT:ss",
				L: "DD. MM. YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY LT",
				LLLL: "dddd, D. MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sutra u] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[u] [nedjelju] [u] LT";
						case 3:
							return "[u] [srijedu] [u] LT";
						case 6:
							return "[u] [subotu] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[u] dddd [u] LT"
					}
				},
				lastDay: "[jučer u] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
							return "[prošlu] dddd [u] LT";
						case 6:
							return "[prošle] [subote] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[prošli] dddd [u] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "prije %s",
				s: "par sekundi",
				m: Mc,
				mm: Mc,
				h: Mc,
				hh: Mc,
				d: "dan",
				dd: Mc,
				M: "mjesec",
				MM: Mc,
				y: "godinu",
				yy: Mc
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		}), nf.defineLocale("ca", {
			months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
			monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
			weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
			weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
			weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "LT:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd D MMMM YYYY LT"
			},
			calendar: {
				sameDay: function () {
					return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				nextDay: function () {
					return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				nextWeek: function () {
					return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				lastDay: function () {
					return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				lastWeek: function () {
					return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "en %s",
				past: "fa %s",
				s: "uns segons",
				m: "un minut",
				mm: "%d minuts",
				h: "una hora",
				hh: "%d hores",
				d: "un dia",
				dd: "%d dies",
				M: "un mes",
				MM: "%d mesos",
				y: "un any",
				yy: "%d anys"
			},
			ordinalParse: /\d{1,2}(r|n|t|è|a)/,
			ordinal: function (a, b) {
				var c = 1 === a ? "r" : 2 === a ? "n" : 3 === a ? "r" : 4 === a ? "t" : "è";
				return ("w" === b || "W" === b) && (c = "a"), a + c
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_")),
		Cf = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
		Df = (nf.defineLocale("cs", {
			months: Bf,
			monthsShort: Cf,
			monthsParse: function (a, b) {
				var c, d = [];
				for (c = 0; 12 > c; c++) d[c] = new RegExp("^" + a[c] + "$|^" + b[c] + "$", "i");
				return d
			}(Bf, Cf),
			weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
			weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
			weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "LT:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY LT",
				LLLL: "dddd D. MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[dnes v] LT",
				nextDay: "[zítra v] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[v neděli v] LT";
						case 1:
						case 2:
							return "[v] dddd [v] LT";
						case 3:
							return "[ve středu v] LT";
						case 4:
							return "[ve čtvrtek v] LT";
						case 5:
							return "[v pátek v] LT";
						case 6:
							return "[v sobotu v] LT"
					}
				},
				lastDay: "[včera v] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[minulou neděli v] LT";
						case 1:
						case 2:
							return "[minulé] dddd [v] LT";
						case 3:
							return "[minulou středu v] LT";
						case 4:
						case 5:
							return "[minulý] dddd [v] LT";
						case 6:
							return "[minulou sobotu v] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "před %s",
				s: Oc,
				m: Oc,
				mm: Oc,
				h: Oc,
				hh: Oc,
				d: Oc,
				dd: Oc,
				M: Oc,
				MM: Oc,
				y: Oc,
				yy: Oc
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), nf.defineLocale("cv", {
			months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
			monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
			weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
			weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
			weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD-MM-YYYY",
				LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
				LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], LT",
				LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], LT"
			},
			calendar: {
				sameDay: "[Паян] LT [сехетре]",
				nextDay: "[Ыран] LT [сехетре]",
				lastDay: "[Ӗнер] LT [сехетре]",
				nextWeek: "[Ҫитес] dddd LT [сехетре]",
				lastWeek: "[Иртнӗ] dddd LT [сехетре]",
				sameElse: "L"
			},
			relativeTime: {
				future: function (a) {
					var b = /сехет$/i.exec(a) ? "рен" : /ҫул$/i.exec(a) ? "тан" : "ран";
					return a + b
				},
				past: "%s каялла",
				s: "пӗр-ик ҫеккунт",
				m: "пӗр минут",
				mm: "%d минут",
				h: "пӗр сехет",
				hh: "%d сехет",
				d: "пӗр кун",
				dd: "%d кун",
				M: "пӗр уйӑх",
				MM: "%d уйӑх",
				y: "пӗр ҫул",
				yy: "%d ҫул"
			},
			ordinalParse: /\d{1,2}-мӗш/,
			ordinal: "%d-мӗш",
			week: {
				dow: 1,
				doy: 7
			}
		}), nf.defineLocale("cy", {
			months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
			monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
			weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
			weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
			weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd, D MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[Heddiw am] LT",
				nextDay: "[Yfory am] LT",
				nextWeek: "dddd [am] LT",
				lastDay: "[Ddoe am] LT",
				lastWeek: "dddd [diwethaf am] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "mewn %s",
				past: "%s yn ôl",
				s: "ychydig eiliadau",
				m: "munud",
				mm: "%d munud",
				h: "awr",
				hh: "%d awr",
				d: "diwrnod",
				dd: "%d diwrnod",
				M: "mis",
				MM: "%d mis",
				y: "blwyddyn",
				yy: "%d flynedd"
			},
			ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
			ordinal: function (a) {
				var b = a,
					c = "",
					d = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
				return b > 20 ? c = 40 === b || 50 === b || 60 === b || 80 === b || 100 === b ? "fed" : "ain" : b > 0 && (c = d[b]), a + c
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), nf.defineLocale("da", {
			months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
			monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
			weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
			weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
			weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD/MM/YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY LT",
				LLLL: "dddd [d.] D. MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[I dag kl.] LT",
				nextDay: "[I morgen kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[I går kl.] LT",
				lastWeek: "[sidste] dddd [kl] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "%s siden",
				s: "få sekunder",
				m: "et minut",
				mm: "%d minutter",
				h: "en time",
				hh: "%d timer",
				d: "en dag",
				dd: "%d dage",
				M: "en måned",
				MM: "%d måneder",
				y: "et år",
				yy: "%d år"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), nf.defineLocale("de-at", {
			months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
			weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
			weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY LT",
				LLLL: "dddd, D. MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[Heute um] LT [Uhr]",
				sameElse: "L",
				nextDay: "[Morgen um] LT [Uhr]",
				nextWeek: "dddd [um] LT [Uhr]",
				lastDay: "[Gestern um] LT [Uhr]",
				lastWeek: "[letzten] dddd [um] LT [Uhr]"
			},
			relativeTime: {
				future: "in %s",
				past: "vor %s",
				s: "ein paar Sekunden",
				m: Pc,
				mm: "%d Minuten",
				h: Pc,
				hh: "%d Stunden",
				d: Pc,
				dd: Pc,
				M: Pc,
				MM: Pc,
				y: Pc,
				yy: Pc
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), nf.defineLocale("de", {
			months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
			weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
			weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY LT",
				LLLL: "dddd, D. MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[Heute um] LT [Uhr]",
				sameElse: "L",
				nextDay: "[Morgen um] LT [Uhr]",
				nextWeek: "dddd [um] LT [Uhr]",
				lastDay: "[Gestern um] LT [Uhr]",
				lastWeek: "[letzten] dddd [um] LT [Uhr]"
			},
			relativeTime: {
				future: "in %s",
				past: "vor %s",
				s: "ein paar Sekunden",
				m: Qc,
				mm: "%d Minuten",
				h: Qc,
				hh: "%d Stunden",
				d: Qc,
				dd: Qc,
				M: Qc,
				MM: Qc,
				y: Qc,
				yy: Qc
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), nf.defineLocale("el", {
			monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
			monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
			months: function (a, b) {
				return /D/.test(b.substring(0, b.indexOf("MMMM"))) ? this._monthsGenitiveEl[a.month()] : this._monthsNominativeEl[a.month()]
			},
			monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
			weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
			weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
			weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
			meridiem: function (a, b, c) {
				return a > 11 ? c ? "μμ" : "ΜΜ" : c ? "πμ" : "ΠΜ"
			},
			isPM: function (a) {
				return "μ" === (a + "").toLowerCase()[0]
			},
			meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd, D MMMM YYYY LT"
			},
			calendarEl: {
				sameDay: "[Σήμερα {}] LT",
				nextDay: "[Αύριο {}] LT",
				nextWeek: "dddd [{}] LT",
				lastDay: "[Χθες {}] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 6:
							return "[το προηγούμενο] dddd [{}] LT";
						default:
							return "[την προηγούμενη] dddd [{}] LT"
					}
				},
				sameElse: "L"
			},
			calendar: function (a, b) {
				var c = this._calendarEl[a],
					d = b && b.hours();
				return "function" == typeof c && (c = c.apply(b)), c.replace("{}", d % 12 === 1 ? "στη" : "στις")
			},
			relativeTime: {
				future: "σε %s",
				past: "%s πριν",
				s: "λίγα δευτερόλεπτα",
				m: "ένα λεπτό",
				mm: "%d λεπτά",
				h: "μία ώρα",
				hh: "%d ώρες",
				d: "μία μέρα",
				dd: "%d μέρες",
				M: "ένας μήνας",
				MM: "%d μήνες",
				y: "ένας χρόνος",
				yy: "%d χρόνια"
			},
			ordinalParse: /\d{1,2}η/,
			ordinal: "%dη",
			week: {
				dow: 1,
				doy: 4
			}
		}), nf.defineLocale("en-au", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd, D MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (a) {
				var b = a % 10,
					c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
				return a + c
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), nf.defineLocale("en-ca", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "YYYY-MM-DD",
				LL: "D MMMM, YYYY",
				LLL: "D MMMM, YYYY LT",
				LLLL: "dddd, D MMMM, YYYY LT"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (a) {
				var b = a % 10,
					c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
				return a + c
			}
		}), nf.defineLocale("en-gb", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd, D MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (a) {
				var b = a % 10,
					c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
				return a + c
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), nf.defineLocale("eo", {
			months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
			monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
			weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),
			weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),
			weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "YYYY-MM-DD",
				LL: "D[-an de] MMMM, YYYY",
				LLL: "D[-an de] MMMM, YYYY LT",
				LLLL: "dddd, [la] D[-an de] MMMM, YYYY LT"
			},
			meridiemParse: /[ap]\.t\.m/i,
			isPM: function (a) {
				return "p" === a.charAt(0).toLowerCase()
			},
			meridiem: function (a, b, c) {
				return a > 11 ? c ? "p.t.m." : "P.T.M." : c ? "a.t.m." : "A.T.M."
			},
			calendar: {
				sameDay: "[Hodiaŭ je] LT",
				nextDay: "[Morgaŭ je] LT",
				nextWeek: "dddd [je] LT",
				lastDay: "[Hieraŭ je] LT",
				lastWeek: "[pasinta] dddd [je] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "je %s",
				past: "antaŭ %s",
				s: "sekundoj",
				m: "minuto",
				mm: "%d minutoj",
				h: "horo",
				hh: "%d horoj",
				d: "tago",
				dd: "%d tagoj",
				M: "monato",
				MM: "%d monatoj",
				y: "jaro",
				yy: "%d jaroj"
			},
			ordinalParse: /\d{1,2}a/,
			ordinal: "%da",
			week: {
				dow: 1,
				doy: 7
			}
		}), "Ene._Feb._Mar._Abr._May._Jun._Jul._Ago._Sep._Oct._Nov._Dic.".split("_")),
		Ef = "Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic".split("_"),
		Ff = (nf.defineLocale("es", {
			months: "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),
			monthsShort: function (a, b) {
				return /-MMM-/.test(b) ? Ef[a.month()] : Df[a.month()]
			},
			weekdays: "Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado".split("_"),
			weekdaysShort: "Dom._Lun._Mar._Mié._Jue._Vie._Sáb.".split("_"),
			weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "LT:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY LT",
				LLLL: "dddd, D [de] MMMM [de] YYYY LT"
			},
			calendar: {
				sameDay: function () {
					return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				nextDay: function () {
					return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				nextWeek: function () {
					return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				lastDay: function () {
					return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				lastWeek: function () {
					return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "en %s",
				past: "hace %s",
				s: "unos segundos",
				m: "un minuto",
				mm: "%d minutos",
				h: "una hora",
				hh: "%d horas",
				d: "un día",
				dd: "%d días",
				M: "un mes",
				MM: "%d meses",
				y: "un año",
				yy: "%d años"
			},
			ordinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		}), nf.defineLocale("et", {
			months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
			monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
			weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
			weekdaysShort: "P_E_T_K_N_R_L".split("_"),
			weekdaysMin: "P_E_T_K_N_R_L".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "LT:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY LT",
				LLLL: "dddd, D. MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[Täna,] LT",
				nextDay: "[Homme,] LT",
				nextWeek: "[Järgmine] dddd LT",
				lastDay: "[Eile,] LT",
				lastWeek: "[Eelmine] dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s pärast",
				past: "%s tagasi",
				s: Rc,
				m: Rc,
				mm: Rc,
				h: Rc,
				hh: Rc,
				d: Rc,
				dd: "%d päeva",
				M: Rc,
				MM: Rc,
				y: Rc,
				yy: Rc
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), nf.defineLocale("eu", {
			months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
			monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
			weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
			weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
			weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "YYYY-MM-DD",
				LL: "YYYY[ko] MMMM[ren] D[a]",
				LLL: "YYYY[ko] MMMM[ren] D[a] LT",
				LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] LT",
				l: "YYYY-M-D",
				ll: "YYYY[ko] MMM D[a]",
				lll: "YYYY[ko] MMM D[a] LT",
				llll: "ddd, YYYY[ko] MMM D[a] LT"
			},
			calendar: {
				sameDay: "[gaur] LT[etan]",
				nextDay: "[bihar] LT[etan]",
				nextWeek: "dddd LT[etan]",
				lastDay: "[atzo] LT[etan]",
				lastWeek: "[aurreko] dddd LT[etan]",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s barru",
				past: "duela %s",
				s: "segundo batzuk",
				m: "minutu bat",
				mm: "%d minutu",
				h: "ordu bat",
				hh: "%d ordu",
				d: "egun bat",
				dd: "%d egun",
				M: "hilabete bat",
				MM: "%d hilabete",
				y: "urte bat",
				yy: "%d urte"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		}), {
			1: "۱",
			2: "۲",
			3: "۳",
			4: "۴",
			5: "۵",
			6: "۶",
			7: "۷",
			8: "۸",
			9: "۹",
			0: "۰"
		}),
		Gf = {
			"۱": "1",
			"۲": "2",
			"۳": "3",
			"۴": "4",
			"۵": "5",
			"۶": "6",
			"۷": "7",
			"۸": "8",
			"۹": "9",
			"۰": "0"
		},
		Hf = (nf.defineLocale("fa", {
			months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
			monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
			weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
			weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
			weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd, D MMMM YYYY LT"
			},
			meridiemParse: /قبل از ظهر|بعد از ظهر/,
			isPM: function (a) {
				return /بعد از ظهر/.test(a)
			},
			meridiem: function (a, b, c) {
				return 12 > a ? "قبل از ظهر" : "بعد از ظهر"
			},
			calendar: {
				sameDay: "[امروز ساعت] LT",
				nextDay: "[فردا ساعت] LT",
				nextWeek: "dddd [ساعت] LT",
				lastDay: "[دیروز ساعت] LT",
				lastWeek: "dddd [پیش] [ساعت] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "در %s",
				past: "%s پیش",
				s: "چندین ثانیه",
				m: "یک دقیقه",
				mm: "%d دقیقه",
				h: "یک ساعت",
				hh: "%d ساعت",
				d: "یک روز",
				dd: "%d روز",
				M: "یک ماه",
				MM: "%d ماه",
				y: "یک سال",
				yy: "%d سال"
			},
			preparse: function (a) {
				return a.replace(/[۰-۹]/g, function (a) {
					return Gf[a]
				}).replace(/،/g, ",")
			},
			postformat: function (a) {
				return a.replace(/\d/g, function (a) {
					return Ff[a]
				}).replace(/,/g, "،")
			},
			ordinalParse: /\d{1,2}م/,
			ordinal: "%dم",
			week: {
				dow: 6,
				doy: 12
			}
		}), "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ")),
		If = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", Hf[7], Hf[8], Hf[9]],
		Jf = (nf.defineLocale("fi", {
			months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
			monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
			weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
			weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
			weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD.MM.YYYY",
				LL: "Do MMMM[ta] YYYY",
				LLL: "Do MMMM[ta] YYYY, [klo] LT",
				LLLL: "dddd, Do MMMM[ta] YYYY, [klo] LT",
				l: "D.M.YYYY",
				ll: "Do MMM YYYY",
				lll: "Do MMM YYYY, [klo] LT",
				llll: "ddd, Do MMM YYYY, [klo] LT"
			},
			calendar: {
				sameDay: "[tänään] [klo] LT",
				nextDay: "[huomenna] [klo] LT",
				nextWeek: "dddd [klo] LT",
				lastDay: "[eilen] [klo] LT",
				lastWeek: "[viime] dddd[na] [klo] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s päästä",
				past: "%s sitten",
				s: Sc,
				m: Sc,
				mm: Sc,
				h: Sc,
				hh: Sc,
				d: Sc,
				dd: Sc,
				M: Sc,
				MM: Sc,
				y: Sc,
				yy: Sc
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), nf.defineLocale("fo", {
			months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
			weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
			weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
			weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd D. MMMM, YYYY LT"
			},
			calendar: {
				sameDay: "[Í dag kl.] LT",
				nextDay: "[Í morgin kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[Í gjár kl.] LT",
				lastWeek: "[síðstu] dddd [kl] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "um %s",
				past: "%s síðani",
				s: "fá sekund",
				m: "ein minutt",
				mm: "%d minuttir",
				h: "ein tími",
				hh: "%d tímar",
				d: "ein dagur",
				dd: "%d dagar",
				M: "ein mánaði",
				MM: "%d mánaðir",
				y: "eitt ár",
				yy: "%d ár"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), nf.defineLocale("fr-ca", {
			months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
			monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "YYYY-MM-DD",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd D MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[Aujourd'hui à] LT",
				nextDay: "[Demain à] LT",
				nextWeek: "dddd [à] LT",
				lastDay: "[Hier à] LT",
				lastWeek: "dddd [dernier à] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dans %s",
				past: "il y a %s",
				s: "quelques secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			ordinalParse: /\d{1,2}(er|)/,
			ordinal: function (a) {
				return a + (1 === a ? "er" : "")
			}
		}), nf.defineLocale("fr", {
			months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
			monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd D MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[Aujourd'hui à] LT",
				nextDay: "[Demain à] LT",
				nextWeek: "dddd [à] LT",
				lastDay: "[Hier à] LT",
				lastWeek: "dddd [dernier à] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dans %s",
				past: "il y a %s",
				s: "quelques secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			ordinalParse: /\d{1,2}(er|)/,
			ordinal: function (a) {
				return a + (1 === a ? "er" : "")
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_")),
		Kf = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
		Lf = (nf.defineLocale("fy", {
			months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
			monthsShort: function (a, b) {
				return /-MMM-/.test(b) ? Kf[a.month()] : Jf[a.month()]
			},
			weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
			weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
			weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd D MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[hjoed om] LT",
				nextDay: "[moarn om] LT",
				nextWeek: "dddd [om] LT",
				lastDay: "[juster om] LT",
				lastWeek: "[ôfrûne] dddd [om] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "oer %s",
				past: "%s lyn",
				s: "in pear sekonden",
				m: "ien minút",
				mm: "%d minuten",
				h: "ien oere",
				hh: "%d oeren",
				d: "ien dei",
				dd: "%d dagen",
				M: "ien moanne",
				MM: "%d moannen",
				y: "ien jier",
				yy: "%d jierren"
			},
			ordinalParse: /\d{1,2}(ste|de)/,
			ordinal: function (a) {
				return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), nf.defineLocale("gl", {
			months: "Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),
			monthsShort: "Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
			weekdays: "Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),
			weekdaysShort: "Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),
			weekdaysMin: "Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "LT:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd D MMMM YYYY LT"
			},
			calendar: {
				sameDay: function () {
					return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
				},
				nextDay: function () {
					return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
				},
				nextWeek: function () {
					return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
				},
				lastDay: function () {
					return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
				},
				lastWeek: function () {
					return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: function (a) {
					return "uns segundos" === a ? "nuns segundos" : "en " + a
				},
				past: "hai %s",
				s: "uns segundos",
				m: "un minuto",
				mm: "%d minutos",
				h: "unha hora",
				hh: "%d horas",
				d: "un día",
				dd: "%d días",
				M: "un mes",
				MM: "%d meses",
				y: "un ano",
				yy: "%d anos"
			},
			ordinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 7
			}
		}), nf.defineLocale("he", {
			months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
			monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
			weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
			weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
			weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD/MM/YYYY",
				LL: "D [ב]MMMM YYYY",
				LLL: "D [ב]MMMM YYYY LT",
				LLLL: "dddd, D [ב]MMMM YYYY LT",
				l: "D/M/YYYY",
				ll: "D MMM YYYY",
				lll: "D MMM YYYY LT",
				llll: "ddd, D MMM YYYY LT"
			},
			calendar: {
				sameDay: "[היום ב־]LT",
				nextDay: "[מחר ב־]LT",
				nextWeek: "dddd [בשעה] LT",
				lastDay: "[אתמול ב־]LT",
				lastWeek: "[ביום] dddd [האחרון בשעה] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "בעוד %s",
				past: "לפני %s",
				s: "מספר שניות",
				m: "דקה",
				mm: "%d דקות",
				h: "שעה",
				hh: function (a) {
					return 2 === a ? "שעתיים" : a + " שעות"
				},
				d: "יום",
				dd: function (a) {
					return 2 === a ? "יומיים" : a + " ימים"
				},
				M: "חודש",
				MM: function (a) {
					return 2 === a ? "חודשיים" : a + " חודשים"
				},
				y: "שנה",
				yy: function (a) {
					return 2 === a ? "שנתיים" : a % 10 === 0 && 10 !== a ? a + " שנה" : a + " שנים"
				}
			}
		}), {
			1: "१",
			2: "२",
			3: "३",
			4: "४",
			5: "५",
			6: "६",
			7: "७",
			8: "८",
			9: "९",
			0: "०"
		}),
		Mf = {
			"१": "1",
			"२": "2",
			"३": "3",
			"४": "4",
			"५": "5",
			"६": "6",
			"७": "7",
			"८": "8",
			"९": "9",
			"०": "0"
		},
		Nf = (nf.defineLocale("hi", {
			months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
			monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
			weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
			weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
			weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
			longDateFormat: {
				LT: "A h:mm बजे",
				LTS: "A h:mm:ss बजे",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, LT",
				LLLL: "dddd, D MMMM YYYY, LT"
			},
			calendar: {
				sameDay: "[आज] LT",
				nextDay: "[कल] LT",
				nextWeek: "dddd, LT",
				lastDay: "[कल] LT",
				lastWeek: "[पिछले] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s में",
				past: "%s पहले",
				s: "कुछ ही क्षण",
				m: "एक मिनट",
				mm: "%d मिनट",
				h: "एक घंटा",
				hh: "%d घंटे",
				d: "एक दिन",
				dd: "%d दिन",
				M: "एक महीने",
				MM: "%d महीने",
				y: "एक वर्ष",
				yy: "%d वर्ष"
			},
			preparse: function (a) {
				return a.replace(/[१२३४५६७८९०]/g, function (a) {
					return Mf[a]
				})
			},
			postformat: function (a) {
				return a.replace(/\d/g, function (a) {
					return Lf[a]
				})
			},
			meridiemParse: /रात|सुबह|दोपहर|शाम/,
			meridiemHour: function (a, b) {
				return 12 === a && (a = 0), "रात" === b ? 4 > a ? a : a + 12 : "सुबह" === b ? a : "दोपहर" === b ? a >= 10 ? a : a + 12 : "शाम" === b ? a + 12 : void 0
			},
			meridiem: function (a, b, c) {
				return 4 > a ? "रात" : 10 > a ? "सुबह" : 17 > a ? "दोपहर" : 20 > a ? "शाम" : "रात"
			},
			week: {
				dow: 0,
				doy: 6
			}
		}), nf.defineLocale("hr", {
			months: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),
			monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
			weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "LT:ss",
				L: "DD. MM. YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY LT",
				LLLL: "dddd, D. MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sutra u] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[u] [nedjelju] [u] LT";
						case 3:
							return "[u] [srijedu] [u] LT";
						case 6:
							return "[u] [subotu] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[u] dddd [u] LT"
					}
				},
				lastDay: "[jučer u] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
							return "[prošlu] dddd [u] LT";
						case 6:
							return "[prošle] [subote] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[prošli] dddd [u] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "prije %s",
				s: "par sekundi",
				m: Uc,
				mm: Uc,
				h: Uc,
				hh: Uc,
				d: "dan",
				dd: Uc,
				M: "mjesec",
				MM: Uc,
				y: "godinu",
				yy: Uc
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		}), "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ")),
		Of = (nf.defineLocale("hu", {
			months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
			monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
			weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
			weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
			weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "LT:ss",
				L: "YYYY.MM.DD.",
				LL: "YYYY. MMMM D.",
				LLL: "YYYY. MMMM D., LT",
				LLLL: "YYYY. MMMM D., dddd LT"
			},
			meridiemParse: /de|du/i,
			isPM: function (a) {
				return "u" === a.charAt(1).toLowerCase()
			},
			meridiem: function (a, b, c) {
				return 12 > a ? c === !0 ? "de" : "DE" : c === !0 ? "du" : "DU"
			},
			calendar: {
				sameDay: "[ma] LT[-kor]",
				nextDay: "[holnap] LT[-kor]",
				nextWeek: function () {
					return Wc.call(this, !0)
				},
				lastDay: "[tegnap] LT[-kor]",
				lastWeek: function () {
					return Wc.call(this, !1)
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "%s múlva",
				past: "%s",
				s: Vc,
				m: Vc,
				mm: Vc,
				h: Vc,
				hh: Vc,
				d: Vc,
				dd: Vc,
				M: Vc,
				MM: Vc,
				y: Vc,
				yy: Vc
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		}), nf.defineLocale("hy-am", {
			months: Xc,
			monthsShort: Yc,
			weekdays: Zc,
			weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
			weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY թ.",
				LLL: "D MMMM YYYY թ., LT",
				LLLL: "dddd, D MMMM YYYY թ., LT"
			},
			calendar: {
				sameDay: "[այսօր] LT",
				nextDay: "[վաղը] LT",
				lastDay: "[երեկ] LT",
				nextWeek: function () {
					return "dddd [օրը ժամը] LT"
				},
				lastWeek: function () {
					return "[անցած] dddd [օրը ժամը] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "%s հետո",
				past: "%s առաջ",
				s: "մի քանի վայրկյան",
				m: "րոպե",
				mm: "%d րոպե",
				h: "ժամ",
				hh: "%d ժամ",
				d: "օր",
				dd: "%d օր",
				M: "ամիս",
				MM: "%d ամիս",
				y: "տարի",
				yy: "%d տարի"
			},
			meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
			isPM: function (a) {
				return /^(ցերեկվա|երեկոյան)$/.test(a)
			},
			meridiem: function (a) {
				return 4 > a ? "գիշերվա" : 12 > a ? "առավոտվա" : 17 > a ? "ցերեկվա" : "երեկոյան"
			},
			ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
			ordinal: function (a, b) {
				switch (b) {
					case "DDD":
					case "w":
					case "W":
					case "DDDo":
						return 1 === a ? a + "-ին" : a + "-րդ";
					default:
						return a
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), nf.defineLocale("id", {
			months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
			weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
			weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "LT.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] LT",
				LLLL: "dddd, D MMMM YYYY [pukul] LT"
			},
			meridiemParse: /pagi|siang|sore|malam/,
			meridiemHour: function (a, b) {
				return 12 === a && (a = 0), "pagi" === b ? a : "siang" === b ? a >= 11 ? a : a + 12 : "sore" === b || "malam" === b ? a + 12 : void 0
			},
			meridiem: function (a, b, c) {
				return 11 > a ? "pagi" : 15 > a ? "siang" : 19 > a ? "sore" : "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul] LT",
				nextDay: "[Besok pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kemarin pukul] LT",
				lastWeek: "dddd [lalu pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam %s",
				past: "%s yang lalu",
				s: "beberapa detik",
				m: "semenit",
				mm: "%d menit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), nf.defineLocale("is", {
			months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
			weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
			weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
			weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "LT:ss",
				L: "DD/MM/YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY [kl.] LT",
				LLLL: "dddd, D. MMMM YYYY [kl.] LT"
			},
			calendar: {
				sameDay: "[í dag kl.] LT",
				nextDay: "[á morgun kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[í gær kl.] LT",
				lastWeek: "[síðasta] dddd [kl.] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "eftir %s",
				past: "fyrir %s síðan",
				s: _c,
				m: _c,
				mm: _c,
				h: "klukkustund",
				hh: _c,
				d: _c,
				dd: _c,
				M: _c,
				MM: _c,
				y: _c,
				yy: _c
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), nf.defineLocale("it", {
			months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
			monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
			weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
			weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
			weekdaysMin: "D_L_Ma_Me_G_V_S".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd, D MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[Oggi alle] LT",
				nextDay: "[Domani alle] LT",
				nextWeek: "dddd [alle] LT",
				lastDay: "[Ieri alle] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[la scorsa] dddd [alle] LT";
						default:
							return "[lo scorso] dddd [alle] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: function (a) {
					return (/^[0-9].+$/.test(a) ? "tra" : "in") + " " + a
				},
				past: "%s fa",
				s: "alcuni secondi",
				m: "un minuto",
				mm: "%d minuti",
				h: "un'ora",
				hh: "%d ore",
				d: "un giorno",
				dd: "%d giorni",
				M: "un mese",
				MM: "%d mesi",
				y: "un anno",
				yy: "%d anni"
			},
			ordinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		}), nf.defineLocale("ja", {
			months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
			weekdaysShort: "日_月_火_水_木_金_土".split("_"),
			weekdaysMin: "日_月_火_水_木_金_土".split("_"),
			longDateFormat: {
				LT: "Ah時m分",
				LTS: "LTs秒",
				L: "YYYY/MM/DD",
				LL: "YYYY年M月D日",
				LLL: "YYYY年M月D日LT",
				LLLL: "YYYY年M月D日LT dddd"
			},
			meridiemParse: /午前|午後/i,
			isPM: function (a) {
				return "午後" === a
			},
			meridiem: function (a, b, c) {
				return 12 > a ? "午前" : "午後"
			},
			calendar: {
				sameDay: "[今日] LT",
				nextDay: "[明日] LT",
				nextWeek: "[来週]dddd LT",
				lastDay: "[昨日] LT",
				lastWeek: "[前週]dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s後",
				past: "%s前",
				s: "数秒",
				m: "1分",
				mm: "%d分",
				h: "1時間",
				hh: "%d時間",
				d: "1日",
				dd: "%d日",
				M: "1ヶ月",
				MM: "%dヶ月",
				y: "1年",
				yy: "%d年"
			}
		}), nf.defineLocale("jv", {
			months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
			weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
			weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
			weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "LT.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] LT",
				LLLL: "dddd, D MMMM YYYY [pukul] LT"
			},
			meridiemParse: /enjing|siyang|sonten|ndalu/,
			meridiemHour: function (a, b) {
				return 12 === a && (a = 0), "enjing" === b ? a : "siyang" === b ? a >= 11 ? a : a + 12 : "sonten" === b || "ndalu" === b ? a + 12 : void 0
			},
			meridiem: function (a, b, c) {
				return 11 > a ? "enjing" : 15 > a ? "siyang" : 19 > a ? "sonten" : "ndalu"
			},
			calendar: {
				sameDay: "[Dinten puniko pukul] LT",
				nextDay: "[Mbenjang pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kala wingi pukul] LT",
				lastWeek: "dddd [kepengker pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "wonten ing %s",
				past: "%s ingkang kepengker",
				s: "sawetawis detik",
				m: "setunggal menit",
				mm: "%d menit",
				h: "setunggal jam",
				hh: "%d jam",
				d: "sedinten",
				dd: "%d dinten",
				M: "sewulan",
				MM: "%d wulan",
				y: "setaun",
				yy: "%d taun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), nf.defineLocale("ka", {
			months: ad,
			monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
			weekdays: bd,
			weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
			weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd, D MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[დღეს] LT[-ზე]",
				nextDay: "[ხვალ] LT[-ზე]",
				lastDay: "[გუშინ] LT[-ზე]",
				nextWeek: "[შემდეგ] dddd LT[-ზე]",
				lastWeek: "[წინა] dddd LT-ზე",
				sameElse: "L"
			},
			relativeTime: {
				future: function (a) {
					return /(წამი|წუთი|საათი|წელი)/.test(a) ? a.replace(/ი$/, "ში") : a + "ში"
				},
				past: function (a) {
					return /(წამი|წუთი|საათი|დღე|თვე)/.test(a) ? a.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(a) ? a.replace(/წელი$/, "წლის წინ") : void 0
				},
				s: "რამდენიმე წამი",
				m: "წუთი",
				mm: "%d წუთი",
				h: "საათი",
				hh: "%d საათი",
				d: "დღე",
				dd: "%d დღე",
				M: "თვე",
				MM: "%d თვე",
				y: "წელი",
				yy: "%d წელი"
			},
			ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
			ordinal: function (a) {
				return 0 === a ? a : 1 === a ? a + "-ლი" : 20 > a || 100 >= a && a % 20 === 0 || a % 100 === 0 ? "მე-" + a : a + "-ე"
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), nf.defineLocale("km", {
			months: "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
			monthsShort: "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
			weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
			weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
			weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd, D MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[ថ្ងៃនៈ ម៉ោង] LT",
				nextDay: "[ស្អែក ម៉ោង] LT",
				nextWeek: "dddd [ម៉ោង] LT",
				lastDay: "[ម្សិលមិញ ម៉ោង] LT",
				lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%sទៀត",
				past: "%sមុន",
				s: "ប៉ុន្មានវិនាទី",
				m: "មួយនាទី",
				mm: "%d នាទី",
				h: "មួយម៉ោង",
				hh: "%d ម៉ោង",
				d: "មួយថ្ងៃ",
				dd: "%d ថ្ងៃ",
				M: "មួយខែ",
				MM: "%d ខែ",
				y: "មួយឆ្នាំ",
				yy: "%d ឆ្នាំ"
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), nf.defineLocale("ko", {
			months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
			monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
			weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
			weekdaysShort: "일_월_화_수_목_금_토".split("_"),
			weekdaysMin: "일_월_화_수_목_금_토".split("_"),
			longDateFormat: {
				LT: "A h시 m분",
				LTS: "A h시 m분 s초",
				L: "YYYY.MM.DD",
				LL: "YYYY년 MMMM D일",
				LLL: "YYYY년 MMMM D일 LT",
				LLLL: "YYYY년 MMMM D일 dddd LT"
			},
			calendar: {
				sameDay: "오늘 LT",
				nextDay: "내일 LT",
				nextWeek: "dddd LT",
				lastDay: "어제 LT",
				lastWeek: "지난주 dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s 후",
				past: "%s 전",
				s: "몇초",
				ss: "%d초",
				m: "일분",
				mm: "%d분",
				h: "한시간",
				hh: "%d시간",
				d: "하루",
				dd: "%d일",
				M: "한달",
				MM: "%d달",
				y: "일년",
				yy: "%d년"
			},
			ordinalParse: /\d{1,2}일/,
			ordinal: "%d일",
			meridiemParse: /오전|오후/,
			isPM: function (a) {
				return "오후" === a
			},
			meridiem: function (a, b, c) {
				return 12 > a ? "오전" : "오후"
			}
		}), nf.defineLocale("lb", {
			months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
			weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
			weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "H:mm [Auer]",
				LTS: "H:mm:ss [Auer]",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY LT",
				LLLL: "dddd, D. MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[Haut um] LT",
				sameElse: "L",
				nextDay: "[Muer um] LT",
				nextWeek: "dddd [um] LT",
				lastDay: "[Gëschter um] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 2:
						case 4:
							return "[Leschten] dddd [um] LT";
						default:
							return "[Leschte] dddd [um] LT"
					}
				}
			},
			relativeTime: {
				future: dd,
				past: ed,
				s: "e puer Sekonnen",
				m: cd,
				mm: "%d Minutten",
				h: cd,
				hh: "%d Stonnen",
				d: cd,
				dd: "%d Deeg",
				M: cd,
				MM: "%d Méint",
				y: cd,
				yy: "%d Joer"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), {
			m: "minutė_minutės_minutę",
			mm: "minutės_minučių_minutes",
			h: "valanda_valandos_valandą",
			hh: "valandos_valandų_valandas",
			d: "diena_dienos_dieną",
			dd: "dienos_dienų_dienas",
			M: "mėnuo_mėnesio_mėnesį",
			MM: "mėnesiai_mėnesių_mėnesius",
			y: "metai_metų_metus",
			yy: "metai_metų_metus"
		}),
		Pf = "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
		Qf = (nf.defineLocale("lt", {
			months: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
			monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
			weekdays: ld,
			weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
			weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "YYYY-MM-DD",
				LL: "YYYY [m.] MMMM D [d.]",
				LLL: "YYYY [m.] MMMM D [d.], LT [val.]",
				LLLL: "YYYY [m.] MMMM D [d.], dddd, LT [val.]",
				l: "YYYY-MM-DD",
				ll: "YYYY [m.] MMMM D [d.]",
				lll: "YYYY [m.] MMMM D [d.], LT [val.]",
				llll: "YYYY [m.] MMMM D [d.], ddd, LT [val.]"
			},
			calendar: {
				sameDay: "[Šiandien] LT",
				nextDay: "[Rytoj] LT",
				nextWeek: "dddd LT",
				lastDay: "[Vakar] LT",
				lastWeek: "[Praėjusį] dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "po %s",
				past: "prieš %s",
				s: gd,
				m: hd,
				mm: kd,
				h: hd,
				hh: kd,
				d: hd,
				dd: kd,
				M: hd,
				MM: kd,
				y: hd,
				yy: kd
			},
			ordinalParse: /\d{1,2}-oji/,
			ordinal: function (a) {
				return a + "-oji"
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), {
			m: "minūtes_minūtēm_minūte_minūtes".split("_"),
			mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
			h: "stundas_stundām_stunda_stundas".split("_"),
			hh: "stundas_stundām_stunda_stundas".split("_"),
			d: "dienas_dienām_diena_dienas".split("_"),
			dd: "dienas_dienām_diena_dienas".split("_"),
			M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
			MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
			y: "gada_gadiem_gads_gadi".split("_"),
			yy: "gada_gadiem_gads_gadi".split("_")
		}),
		Rf = (nf.defineLocale("lv", {
			months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
			monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
			weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
			weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
			weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD.MM.YYYY.",
				LL: "YYYY. [gada] D. MMMM",
				LLL: "YYYY. [gada] D. MMMM, LT",
				LLLL: "YYYY. [gada] D. MMMM, dddd, LT"
			},
			calendar: {
				sameDay: "[Šodien pulksten] LT",
				nextDay: "[Rīt pulksten] LT",
				nextWeek: "dddd [pulksten] LT",
				lastDay: "[Vakar pulksten] LT",
				lastWeek: "[Pagājušā] dddd [pulksten] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "pēc %s",
				past: "pirms %s",
				s: pd,
				m: od,
				mm: nd,
				h: od,
				hh: nd,
				d: od,
				dd: nd,
				M: od,
				MM: nd,
				y: od,
				yy: nd
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), {
			words: {
				m: ["jedan minut", "jednog minuta"],
				mm: ["minut", "minuta", "minuta"],
				h: ["jedan sat", "jednog sata"],
				hh: ["sat", "sata", "sati"],
				dd: ["dan", "dana", "dana"],
				MM: ["mjesec", "mjeseca", "mjeseci"],
				yy: ["godina", "godine", "godina"]
			},
			correctGrammaticalCase: function (a, b) {
				return 1 === a ? b[0] : a >= 2 && 4 >= a ? b[1] : b[2]
			},
			translate: function (a, b, c) {
				var d = Rf.words[c];
				return 1 === c.length ? b ? d[0] : d[1] : a + " " + Rf.correctGrammaticalCase(a, d)
			}
		}),
		Sf = (nf.defineLocale("me", {
			months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
			monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."],
			weekdays: ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"],
			weekdaysShort: ["ned.", "pon.", "uto.", "sri.", "čet.", "pet.", "sub."],
			weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"],
			longDateFormat: {
				LT: "H:mm",
				LTS: "LT:ss",
				L: "DD. MM. YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY LT",
				LLLL: "dddd, D. MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sjutra u] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[u] [nedjelju] [u] LT";
						case 3:
							return "[u] [srijedu] [u] LT";
						case 6:
							return "[u] [subotu] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[u] dddd [u] LT"
					}
				},
				lastDay: "[juče u] LT",
				lastWeek: function () {
					var a = ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
					return a[this.day()]
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "prije %s",
				s: "nekoliko sekundi",
				m: Rf.translate,
				mm: Rf.translate,
				h: Rf.translate,
				hh: Rf.translate,
				d: "dan",
				dd: Rf.translate,
				M: "mjesec",
				MM: Rf.translate,
				y: "godinu",
				yy: Rf.translate
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		}), nf.defineLocale("mk", {
			months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
			monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
			weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
			weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
			weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "LT:ss",
				L: "D.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd, D MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[Денес во] LT",
				nextDay: "[Утре во] LT",
				nextWeek: "dddd [во] LT",
				lastDay: "[Вчера во] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
						case 6:
							return "[Во изминатата] dddd [во] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[Во изминатиот] dddd [во] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "после %s",
				past: "пред %s",
				s: "неколку секунди",
				m: "минута",
				mm: "%d минути",
				h: "час",
				hh: "%d часа",
				d: "ден",
				dd: "%d дена",
				M: "месец",
				MM: "%d месеци",
				y: "година",
				yy: "%d години"
			},
			ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
			ordinal: function (a) {
				var b = a % 10,
					c = a % 100;
				return 0 === a ? a + "-ев" : 0 === c ? a + "-ен" : c > 10 && 20 > c ? a + "-ти" : 1 === b ? a + "-ви" : 2 === b ? a + "-ри" : 7 === b || 8 === b ? a + "-ми" : a + "-ти"
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), nf.defineLocale("ml", {
			months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
			monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
			weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
			weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
			weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
			longDateFormat: {
				LT: "A h:mm -നു",
				LTS: "A h:mm:ss -നു",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, LT",
				LLLL: "dddd, D MMMM YYYY, LT"
			},
			calendar: {
				sameDay: "[ഇന്ന്] LT",
				nextDay: "[നാളെ] LT",
				nextWeek: "dddd, LT",
				lastDay: "[ഇന്നലെ] LT",
				lastWeek: "[കഴിഞ്ഞ] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s കഴിഞ്ഞ്",
				past: "%s മുൻപ്",
				s: "അൽപ നിമിഷങ്ങൾ",
				m: "ഒരു മിനിറ്റ്",
				mm: "%d മിനിറ്റ്",
				h: "ഒരു മണിക്കൂർ",
				hh: "%d മണിക്കൂർ",
				d: "ഒരു ദിവസം",
				dd: "%d ദിവസം",
				M: "ഒരു മാസം",
				MM: "%d മാസം",
				y: "ഒരു വർഷം",
				yy: "%d വർഷം"
			},
			meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
			isPM: function (a) {
				return /^(ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി)$/.test(a)
			},
			meridiem: function (a, b, c) {
				return 4 > a ? "രാത്രി" : 12 > a ? "രാവിലെ" : 17 > a ? "ഉച്ച കഴിഞ്ഞ്" : 20 > a ? "വൈകുന്നേരം" : "രാത്രി"
			}
		}), {
			1: "१",
			2: "२",
			3: "३",
			4: "४",
			5: "५",
			6: "६",
			7: "७",
			8: "८",
			9: "९",
			0: "०"
		}),
		Tf = {
			"१": "1",
			"२": "2",
			"३": "3",
			"४": "4",
			"५": "5",
			"६": "6",
			"७": "7",
			"८": "8",
			"९": "9",
			"०": "0"
		},
		Uf = (nf.defineLocale("mr", {
			months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
			monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
			weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
			weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
			weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
			longDateFormat: {
				LT: "A h:mm वाजता",
				LTS: "A h:mm:ss वाजता",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, LT",
				LLLL: "dddd, D MMMM YYYY, LT"
			},
			calendar: {
				sameDay: "[आज] LT",
				nextDay: "[उद्या] LT",
				nextWeek: "dddd, LT",
				lastDay: "[काल] LT",
				lastWeek: "[मागील] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s नंतर",
				past: "%s पूर्वी",
				s: "सेकंद",
				m: "एक मिनिट",
				mm: "%d मिनिटे",
				h: "एक तास",
				hh: "%d तास",
				d: "एक दिवस",
				dd: "%d दिवस",
				M: "एक महिना",
				MM: "%d महिने",
				y: "एक वर्ष",
				yy: "%d वर्षे"
			},
			preparse: function (a) {
				return a.replace(/[१२३४५६७८९०]/g, function (a) {
					return Tf[a]
				})
			},
			postformat: function (a) {
				return a.replace(/\d/g, function (a) {
					return Sf[a]
				})
			},
			meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
			meridiemHour: function (a, b) {
				return 12 === a && (a = 0), "रात्री" === b ? 4 > a ? a : a + 12 : "सकाळी" === b ? a : "दुपारी" === b ? a >= 10 ? a : a + 12 : "सायंकाळी" === b ? a + 12 : void 0
			},
			meridiem: function (a, b, c) {
				return 4 > a ? "रात्री" : 10 > a ? "सकाळी" : 17 > a ? "दुपारी" : 20 > a ? "सायंकाळी" : "रात्री"
			},
			week: {
				dow: 0,
				doy: 6
			}
		}), nf.defineLocale("ms-my", {
			months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
			monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
			weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
			weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
			weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "LT.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] LT",
				LLLL: "dddd, D MMMM YYYY [pukul] LT"
			},
			meridiemParse: /pagi|tengahari|petang|malam/,
			meridiemHour: function (a, b) {
				return 12 === a && (a = 0), "pagi" === b ? a : "tengahari" === b ? a >= 11 ? a : a + 12 : "petang" === b || "malam" === b ? a + 12 : void 0
			},
			meridiem: function (a, b, c) {
				return 11 > a ? "pagi" : 15 > a ? "tengahari" : 19 > a ? "petang" : "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul] LT",
				nextDay: "[Esok pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kelmarin pukul] LT",
				lastWeek: "dddd [lepas pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam %s",
				past: "%s yang lepas",
				s: "beberapa saat",
				m: "seminit",
				mm: "%d minit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), {
			1: "၁",
			2: "၂",
			3: "၃",
			4: "၄",
			5: "၅",
			6: "၆",
			7: "၇",
			8: "၈",
			9: "၉",
			0: "၀"
		}),
		Vf = {
			"၁": "1",
			"၂": "2",
			"၃": "3",
			"၄": "4",
			"၅": "5",
			"၆": "6",
			"၇": "7",
			"၈": "8",
			"၉": "9",
			"၀": "0"
		},
		Wf = (nf.defineLocale("my", {
			months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
			monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
			weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
			weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
			weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd D MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[ယနေ.] LT [မှာ]",
				nextDay: "[မနက်ဖြန်] LT [မှာ]",
				nextWeek: "dddd LT [မှာ]",
				lastDay: "[မနေ.က] LT [မှာ]",
				lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
				sameElse: "L"
			},
			relativeTime: {
				future: "လာမည့် %s မှာ",
				past: "လွန်ခဲ့သော %s က",
				s: "စက္ကန်.အနည်းငယ်",
				m: "တစ်မိနစ်",
				mm: "%d မိနစ်",
				h: "တစ်နာရီ",
				hh: "%d နာရီ",
				d: "တစ်ရက်",
				dd: "%d ရက်",
				M: "တစ်လ",
				MM: "%d လ",
				y: "တစ်နှစ်",
				yy: "%d နှစ်"
			},
			preparse: function (a) {
				return a.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (a) {
					return Vf[a]
				})
			},
			postformat: function (a) {
				return a.replace(/\d/g, function (a) {
					return Uf[a]
				})
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), nf.defineLocale("nb", {
			months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
			weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
			weekdaysShort: "søn_man_tirs_ons_tors_fre_lør".split("_"),
			weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
			longDateFormat: {
				LT: "H.mm",
				LTS: "LT.ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY [kl.] LT",
				LLLL: "dddd D. MMMM YYYY [kl.] LT"
			},
			calendar: {
				sameDay: "[i dag kl.] LT",
				nextDay: "[i morgen kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[i går kl.] LT",
				lastWeek: "[forrige] dddd [kl.] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "for %s siden",
				s: "noen sekunder",
				m: "ett minutt",
				mm: "%d minutter",
				h: "en time",
				hh: "%d timer",
				d: "en dag",
				dd: "%d dager",
				M: "en måned",
				MM: "%d måneder",
				y: "ett år",
				yy: "%d år"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), {
			1: "१",
			2: "२",
			3: "३",
			4: "४",
			5: "५",
			6: "६",
			7: "७",
			8: "८",
			9: "९",
			0: "०"
		}),
		Xf = {
			"१": "1",
			"२": "2",
			"३": "3",
			"४": "4",
			"५": "5",
			"६": "6",
			"७": "7",
			"८": "8",
			"९": "9",
			"०": "0"
		},
		Yf = (nf.defineLocale("ne", {
			months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
			monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
			weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
			weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
			weekdaysMin: "आइ._सो._मङ्_बु._बि._शु._श.".split("_"),
			longDateFormat: {
				LT: "Aको h:mm बजे",
				LTS: "Aको h:mm:ss बजे",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, LT",
				LLLL: "dddd, D MMMM YYYY, LT"
			},
			preparse: function (a) {
				return a.replace(/[१२३४५६७८९०]/g, function (a) {
					return Xf[a]
				})
			},
			postformat: function (a) {
				return a.replace(/\d/g, function (a) {
					return Wf[a]
				})
			},
			meridiemParse: /राती|बिहान|दिउँसो|बेलुका|साँझ|राती/,
			meridiemHour: function (a, b) {
				return 12 === a && (a = 0), "राती" === b ? 3 > a ? a : a + 12 : "बिहान" === b ? a : "दिउँसो" === b ? a >= 10 ? a : a + 12 : "बेलुका" === b || "साँझ" === b ? a + 12 : void 0
			},
			meridiem: function (a, b, c) {
				return 3 > a ? "राती" : 10 > a ? "बिहान" : 15 > a ? "दिउँसो" : 18 > a ? "बेलुका" : 20 > a ? "साँझ" : "राती"
			},
			calendar: {
				sameDay: "[आज] LT",
				nextDay: "[भोली] LT",
				nextWeek: "[आउँदो] dddd[,] LT",
				lastDay: "[हिजो] LT",
				lastWeek: "[गएको] dddd[,] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%sमा",
				past: "%s अगाडी",
				s: "केही समय",
				m: "एक मिनेट",
				mm: "%d मिनेट",
				h: "एक घण्टा",
				hh: "%d घण्टा",
				d: "एक दिन",
				dd: "%d दिन",
				M: "एक महिना",
				MM: "%d महिना",
				y: "एक बर्ष",
				yy: "%d बर्ष"
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")),
		Zf = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
		$f = (nf.defineLocale("nl", {
			months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
			monthsShort: function (a, b) {
				return /-MMM-/.test(b) ? Zf[a.month()] : Yf[a.month()]
			},
			weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
			weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
			weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd D MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[vandaag om] LT",
				nextDay: "[morgen om] LT",
				nextWeek: "dddd [om] LT",
				lastDay: "[gisteren om] LT",
				lastWeek: "[afgelopen] dddd [om] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "over %s",
				past: "%s geleden",
				s: "een paar seconden",
				m: "één minuut",
				mm: "%d minuten",
				h: "één uur",
				hh: "%d uur",
				d: "één dag",
				dd: "%d dagen",
				M: "één maand",
				MM: "%d maanden",
				y: "één jaar",
				yy: "%d jaar"
			},
			ordinalParse: /\d{1,2}(ste|de)/,
			ordinal: function (a) {
				return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), nf.defineLocale("nn", {
			months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
			weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
			weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
			weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd D MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[I dag klokka] LT",
				nextDay: "[I morgon klokka] LT",
				nextWeek: "dddd [klokka] LT",
				lastDay: "[I går klokka] LT",
				lastWeek: "[Føregåande] dddd [klokka] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "for %s sidan",
				s: "nokre sekund",
				m: "eit minutt",
				mm: "%d minutt",
				h: "ein time",
				hh: "%d timar",
				d: "ein dag",
				dd: "%d dagar",
				M: "ein månad",
				MM: "%d månader",
				y: "eit år",
				yy: "%d år"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_")),
		_f = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),
		ag = (nf.defineLocale("pl", {
			months: function (a, b) {
				return "" === b ? "(" + _f[a.month()] + "|" + $f[a.month()] + ")" : /D MMMM/.test(b) ? _f[a.month()] : $f[a.month()]
			},
			monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
			weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
			weekdaysShort: "nie_pon_wt_śr_czw_pt_sb".split("_"),
			weekdaysMin: "N_Pn_Wt_Śr_Cz_Pt_So".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd, D MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[Dziś o] LT",
				nextDay: "[Jutro o] LT",
				nextWeek: "[W] dddd [o] LT",
				lastDay: "[Wczoraj o] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[W zeszłą niedzielę o] LT";
						case 3:
							return "[W zeszłą środę o] LT";
						case 6:
							return "[W zeszłą sobotę o] LT";
						default:
							return "[W zeszły] dddd [o] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "%s temu",
				s: "kilka sekund",
				m: rd,
				mm: rd,
				h: rd,
				hh: rd,
				d: "1 dzień",
				dd: "%d dni",
				M: "miesiąc",
				MM: rd,
				y: "rok",
				yy: rd
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), nf.defineLocale("pt-br", {
			months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
			monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
			weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
			weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
			weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY [às] LT",
				LLLL: "dddd, D [de] MMMM [de] YYYY [às] LT"
			},
			calendar: {
				sameDay: "[Hoje às] LT",
				nextDay: "[Amanhã às] LT",
				nextWeek: "dddd [às] LT",
				lastDay: "[Ontem às] LT",
				lastWeek: function () {
					return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "em %s",
				past: "%s atrás",
				s: "segundos",
				m: "um minuto",
				mm: "%d minutos",
				h: "uma hora",
				hh: "%d horas",
				d: "um dia",
				dd: "%d dias",
				M: "um mês",
				MM: "%d meses",
				y: "um ano",
				yy: "%d anos"
			},
			ordinalParse: /\d{1,2}º/,
			ordinal: "%dº"
		}), nf.defineLocale("pt", {
			months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
			monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
			weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
			weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
			weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY LT",
				LLLL: "dddd, D [de] MMMM [de] YYYY LT"
			},
			calendar: {
				sameDay: "[Hoje às] LT",
				nextDay: "[Amanhã às] LT",
				nextWeek: "dddd [às] LT",
				lastDay: "[Ontem às] LT",
				lastWeek: function () {
					return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "em %s",
				past: "há %s",
				s: "segundos",
				m: "um minuto",
				mm: "%d minutos",
				h: "uma hora",
				hh: "%d horas",
				d: "um dia",
				dd: "%d dias",
				M: "um mês",
				MM: "%d meses",
				y: "um ano",
				yy: "%d anos"
			},
			ordinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		}), nf.defineLocale("ro", {
			months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
			monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
			weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
			weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
			weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "LT:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd, D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[azi la] LT",
				nextDay: "[mâine la] LT",
				nextWeek: "dddd [la] LT",
				lastDay: "[ieri la] LT",
				lastWeek: "[fosta] dddd [la] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "peste %s",
				past: "%s în urmă",
				s: "câteva secunde",
				m: "un minut",
				mm: sd,
				h: "o oră",
				hh: sd,
				d: "o zi",
				dd: sd,
				M: "o lună",
				MM: sd,
				y: "un an",
				yy: sd
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), nf.defineLocale("ru", {
			months: vd,
			monthsShort: wd,
			weekdays: xd,
			weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
			weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
			monthsParse: [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY г.",
				LLL: "D MMMM YYYY г., LT",
				LLLL: "dddd, D MMMM YYYY г., LT"
			},
			calendar: {
				sameDay: "[Сегодня в] LT",
				nextDay: "[Завтра в] LT",
				lastDay: "[Вчера в] LT",
				nextWeek: function () {
					return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT"
				},
				lastWeek: function (a) {
					if (a.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
					switch (this.day()) {
						case 0:
							return "[В прошлое] dddd [в] LT";
						case 1:
						case 2:
						case 4:
							return "[В прошлый] dddd [в] LT";
						case 3:
						case 5:
						case 6:
							return "[В прошлую] dddd [в] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "через %s",
				past: "%s назад",
				s: "несколько секунд",
				m: ud,
				mm: ud,
				h: "час",
				hh: ud,
				d: "день",
				dd: ud,
				M: "месяц",
				MM: ud,
				y: "год",
				yy: ud
			},
			meridiemParse: /ночи|утра|дня|вечера/i,
			isPM: function (a) {
				return /^(дня|вечера)$/.test(a)
			},
			meridiem: function (a, b, c) {
				return 4 > a ? "ночи" : 12 > a ? "утра" : 17 > a ? "дня" : "вечера"
			},
			ordinalParse: /\d{1,2}-(й|го|я)/,
			ordinal: function (a, b) {
				switch (b) {
					case "M":
					case "d":
					case "DDD":
						return a + "-й";
					case "D":
						return a + "-го";
					case "w":
					case "W":
						return a + "-я";
					default:
						return a
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), nf.defineLocale("si", {
			months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
			monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
			weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
			weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
			weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
			longDateFormat: {
				LT: "a h:mm",
				LTS: "a h:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY MMMM D",
				LLL: "YYYY MMMM D, LT",
				LLLL: "YYYY MMMM D [වැනි] dddd, LTS"
			},
			calendar: {
				sameDay: "[අද] LT[ට]",
				nextDay: "[හෙට] LT[ට]",
				nextWeek: "dddd LT[ට]",
				lastDay: "[ඊයේ] LT[ට]",
				lastWeek: "[පසුගිය] dddd LT[ට]",
				sameElse: "L"
			},
			relativeTime: {
				future: "%sකින්",
				past: "%sකට පෙර",
				s: "තත්පර කිහිපය",
				m: "මිනිත්තුව",
				mm: "මිනිත්තු %d",
				h: "පැය",
				hh: "පැය %d",
				d: "දිනය",
				dd: "දින %d",
				M: "මාසය",
				MM: "මාස %d",
				y: "වසර",
				yy: "වසර %d"
			},
			ordinalParse: /\d{1,2} වැනි/,
			ordinal: function (a) {
				return a + " වැනි"
			},
			meridiem: function (a, b, c) {
				return a > 11 ? c ? "ප.ව." : "පස් වරු" : c ? "පෙ.ව." : "පෙර වරු"
			}
		}), "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_")),
		bg = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),
		cg = (nf.defineLocale("sk", {
			months: ag,
			monthsShort: bg,
			monthsParse: function (a, b) {
				var c, d = [];
				for (c = 0; 12 > c; c++) d[c] = new RegExp("^" + a[c] + "$|^" + b[c] + "$", "i");
				return d
			}(ag, bg),
			weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
			weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
			weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "LT:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY LT",
				LLLL: "dddd D. MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[dnes o] LT",
				nextDay: "[zajtra o] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[v nedeľu o] LT";
						case 1:
						case 2:
							return "[v] dddd [o] LT";
						case 3:
							return "[v stredu o] LT";
						case 4:
							return "[vo štvrtok o] LT";
						case 5:
							return "[v piatok o] LT";
						case 6:
							return "[v sobotu o] LT"
					}
				},
				lastDay: "[včera o] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[minulú nedeľu o] LT";
						case 1:
						case 2:
							return "[minulý] dddd [o] LT";
						case 3:
							return "[minulú stredu o] LT";
						case 4:
						case 5:
							return "[minulý] dddd [o] LT";
						case 6:
							return "[minulú sobotu o] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "pred %s",
				s: zd,
				m: zd,
				mm: zd,
				h: zd,
				hh: zd,
				d: zd,
				dd: zd,
				M: zd,
				MM: zd,
				y: zd,
				yy: zd
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), nf.defineLocale("sl", {
			months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
			monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
			weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
			weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
			weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "LT:ss",
				L: "DD. MM. YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY LT",
				LLLL: "dddd, D. MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[danes ob] LT",
				nextDay: "[jutri ob] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[v] [nedeljo] [ob] LT";
						case 3:
							return "[v] [sredo] [ob] LT";
						case 6:
							return "[v] [soboto] [ob] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[v] dddd [ob] LT"
					}
				},
				lastDay: "[včeraj ob] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[prejšnjo] [nedeljo] [ob] LT";
						case 3:
							return "[prejšnjo] [sredo] [ob] LT";
						case 6:
							return "[prejšnjo] [soboto] [ob] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[prejšnji] dddd [ob] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "čez %s",
				past: "pred %s",
				s: Ad,
				m: Ad,
				mm: Ad,
				h: Ad,
				hh: Ad,
				d: Ad,
				dd: Ad,
				M: Ad,
				MM: Ad,
				y: Ad,
				yy: Ad
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		}), nf.defineLocale("sq", {
			months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
			monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
			weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
			weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
			weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
			meridiemParse: /PD|MD/,
			isPM: function (a) {
				return "M" === a.charAt(0)
			},
			meridiem: function (a, b, c) {
				return 12 > a ? "PD" : "MD"
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd, D MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[Sot në] LT",
				nextDay: "[Nesër në] LT",
				nextWeek: "dddd [në] LT",
				lastDay: "[Dje në] LT",
				lastWeek: "dddd [e kaluar në] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "në %s",
				past: "%s më parë",
				s: "disa sekonda",
				m: "një minutë",
				mm: "%d minuta",
				h: "një orë",
				hh: "%d orë",
				d: "një ditë",
				dd: "%d ditë",
				M: "një muaj",
				MM: "%d muaj",
				y: "një vit",
				yy: "%d vite"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), {
			words: {
				m: ["један минут", "једне минуте"],
				mm: ["минут", "минуте", "минута"],
				h: ["један сат", "једног сата"],
				hh: ["сат", "сата", "сати"],
				dd: ["дан", "дана", "дана"],
				MM: ["месец", "месеца", "месеци"],
				yy: ["година", "године", "година"]
			},
			correctGrammaticalCase: function (a, b) {
				return 1 === a ? b[0] : a >= 2 && 4 >= a ? b[1] : b[2]
			},
			translate: function (a, b, c) {
				var d = cg.words[c];
				return 1 === c.length ? b ? d[0] : d[1] : a + " " + cg.correctGrammaticalCase(a, d)
			}
		}),
		dg = (nf.defineLocale("sr-cyrl", {
			months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"],
			monthsShort: ["јан.", "феб.", "мар.", "апр.", "мај", "јун", "јул", "авг.", "сеп.", "окт.", "нов.", "дец."],
			weekdays: ["недеља", "понедељак", "уторак", "среда", "четвртак", "петак", "субота"],
			weekdaysShort: ["нед.", "пон.", "уто.", "сре.", "чет.", "пет.", "суб."],
			weekdaysMin: ["не", "по", "ут", "ср", "че", "пе", "су"],
			longDateFormat: {
				LT: "H:mm",
				LTS: "LT:ss",
				L: "DD. MM. YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY LT",
				LLLL: "dddd, D. MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[данас у] LT",
				nextDay: "[сутра у] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[у] [недељу] [у] LT";
						case 3:
							return "[у] [среду] [у] LT";
						case 6:
							return "[у] [суботу] [у] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[у] dddd [у] LT"
					}
				},
				lastDay: "[јуче у] LT",
				lastWeek: function () {
					var a = ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"];
					return a[this.day()]
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "за %s",
				past: "пре %s",
				s: "неколико секунди",
				m: cg.translate,
				mm: cg.translate,
				h: cg.translate,
				hh: cg.translate,
				d: "дан",
				dd: cg.translate,
				M: "месец",
				MM: cg.translate,
				y: "годину",
				yy: cg.translate
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		}), {
			words: {
				m: ["jedan minut", "jedne minute"],
				mm: ["minut", "minute", "minuta"],
				h: ["jedan sat", "jednog sata"],
				hh: ["sat", "sata", "sati"],
				dd: ["dan", "dana", "dana"],
				MM: ["mesec", "meseca", "meseci"],
				yy: ["godina", "godine", "godina"]
			},
			correctGrammaticalCase: function (a, b) {
				return 1 === a ? b[0] : a >= 2 && 4 >= a ? b[1] : b[2]
			},
			translate: function (a, b, c) {
				var d = dg.words[c];
				return 1 === c.length ? b ? d[0] : d[1] : a + " " + dg.correctGrammaticalCase(a, d)
			}
		}),
		eg = (nf.defineLocale("sr", {
			months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
			monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."],
			weekdays: ["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"],
			weekdaysShort: ["ned.", "pon.", "uto.", "sre.", "čet.", "pet.", "sub."],
			weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"],
			longDateFormat: {
				LT: "H:mm",
				LTS: "LT:ss",
				L: "DD. MM. YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY LT",
				LLLL: "dddd, D. MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sutra u] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[u] [nedelju] [u] LT";
						case 3:
							return "[u] [sredu] [u] LT";
						case 6:
							return "[u] [subotu] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[u] dddd [u] LT"
					}
				},
				lastDay: "[juče u] LT",
				lastWeek: function () {
					var a = ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
					return a[this.day()]
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "pre %s",
				s: "nekoliko sekundi",
				m: dg.translate,
				mm: dg.translate,
				h: dg.translate,
				hh: dg.translate,
				d: "dan",
				dd: dg.translate,
				M: "mesec",
				MM: dg.translate,
				y: "godinu",
				yy: dg.translate
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		}), nf.defineLocale("sv", {
			months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
			monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
			weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
			weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
			weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "YYYY-MM-DD",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd D MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[Idag] LT",
				nextDay: "[Imorgon] LT",
				lastDay: "[Igår] LT",
				nextWeek: "[På] dddd LT",
				lastWeek: "[I] dddd[s] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "för %s sedan",
				s: "några sekunder",
				m: "en minut",
				mm: "%d minuter",
				h: "en timme",
				hh: "%d timmar",
				d: "en dag",
				dd: "%d dagar",
				M: "en månad",
				MM: "%d månader",
				y: "ett år",
				yy: "%d år"
			},
			ordinalParse: /\d{1,2}(e|a)/,
			ordinal: function (a) {
				var b = a % 10,
					c = 1 === ~~(a % 100 / 10) ? "e" : 1 === b ? "a" : 2 === b ? "a" : "e";
				return a + c
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), nf.defineLocale("ta", {
			months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
			monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
			weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
			weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
			weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, LT",
				LLLL: "dddd, D MMMM YYYY, LT"
			},
			calendar: {
				sameDay: "[இன்று] LT",
				nextDay: "[நாளை] LT",
				nextWeek: "dddd, LT",
				lastDay: "[நேற்று] LT",
				lastWeek: "[கடந்த வாரம்] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s இல்",
				past: "%s முன்",
				s: "ஒரு சில விநாடிகள்",
				m: "ஒரு நிமிடம்",
				mm: "%d நிமிடங்கள்",
				h: "ஒரு மணி நேரம்",
				hh: "%d மணி நேரம்",
				d: "ஒரு நாள்",
				dd: "%d நாட்கள்",
				M: "ஒரு மாதம்",
				MM: "%d மாதங்கள்",
				y: "ஒரு வருடம்",
				yy: "%d ஆண்டுகள்"
			},
			ordinalParse: /\d{1,2}வது/,
			ordinal: function (a) {
				return a + "வது"
			},
			meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
			meridiem: function (a, b, c) {
				return 2 > a ? " யாமம்" : 6 > a ? " வைகறை" : 10 > a ? " காலை" : 14 > a ? " நண்பகல்" : 18 > a ? " எற்பாடு" : 22 > a ? " மாலை" : " யாமம்"
			},
			meridiemHour: function (a, b) {
				return 12 === a && (a = 0), "யாமம்" === b ? 2 > a ? a : a + 12 : "வைகறை" === b || "காலை" === b ? a : "நண்பகல்" === b && a >= 10 ? a : a + 12
			},
			week: {
				dow: 0,
				doy: 6
			}
		}), nf.defineLocale("th", {
			months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
			monthsShort: "มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"),
			weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
			weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
			weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
			longDateFormat: {
				LT: "H นาฬิกา m นาที",
				LTS: "LT s วินาที",
				L: "YYYY/MM/DD",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY เวลา LT",
				LLLL: "วันddddที่ D MMMM YYYY เวลา LT"
			},
			meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
			isPM: function (a) {
				return "หลังเที่ยง" === a
			},
			meridiem: function (a, b, c) {
				return 12 > a ? "ก่อนเที่ยง" : "หลังเที่ยง"
			},
			calendar: {
				sameDay: "[วันนี้ เวลา] LT",
				nextDay: "[พรุ่งนี้ เวลา] LT",
				nextWeek: "dddd[หน้า เวลา] LT",
				lastDay: "[เมื่อวานนี้ เวลา] LT",
				lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "อีก %s",
				past: "%sที่แล้ว",
				s: "ไม่กี่วินาที",
				m: "1 นาที",
				mm: "%d นาที",
				h: "1 ชั่วโมง",
				hh: "%d ชั่วโมง",
				d: "1 วัน",
				dd: "%d วัน",
				M: "1 เดือน",
				MM: "%d เดือน",
				y: "1 ปี",
				yy: "%d ปี"
			}
		}), nf.defineLocale("tl-ph", {
			months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
			monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
			weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
			weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
			weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "MM/D/YYYY",
				LL: "MMMM D, YYYY",
				LLL: "MMMM D, YYYY LT",
				LLLL: "dddd, MMMM DD, YYYY LT"
			},
			calendar: {
				sameDay: "[Ngayon sa] LT",
				nextDay: "[Bukas sa] LT",
				nextWeek: "dddd [sa] LT",
				lastDay: "[Kahapon sa] LT",
				lastWeek: "dddd [huling linggo] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "sa loob ng %s",
				past: "%s ang nakalipas",
				s: "ilang segundo",
				m: "isang minuto",
				mm: "%d minuto",
				h: "isang oras",
				hh: "%d oras",
				d: "isang araw",
				dd: "%d araw",
				M: "isang buwan",
				MM: "%d buwan",
				y: "isang taon",
				yy: "%d taon"
			},
			ordinalParse: /\d{1,2}/,
			ordinal: function (a) {
				return a
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), {
			1: "'inci",
			5: "'inci",
			8: "'inci",
			70: "'inci",
			80: "'inci",
			2: "'nci",
			7: "'nci",
			20: "'nci",
			50: "'nci",
			3: "'üncü",
			4: "'üncü",
			100: "'üncü",
			6: "'ncı",
			9: "'uncu",
			10: "'uncu",
			30: "'uncu",
			60: "'ıncı",
			90: "'ıncı"
		}),
		fg = (nf.defineLocale("tr", {
			months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
			monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
			weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
			weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
			weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd, D MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[bugün saat] LT",
				nextDay: "[yarın saat] LT",
				nextWeek: "[haftaya] dddd [saat] LT",
				lastDay: "[dün] LT",
				lastWeek: "[geçen hafta] dddd [saat] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s sonra",
				past: "%s önce",
				s: "birkaç saniye",
				m: "bir dakika",
				mm: "%d dakika",
				h: "bir saat",
				hh: "%d saat",
				d: "bir gün",
				dd: "%d gün",
				M: "bir ay",
				MM: "%d ay",
				y: "bir yıl",
				yy: "%d yıl"
			},
			ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
			ordinal: function (a) {
				if (0 === a) return a + "'ıncı";
				var b = a % 10,
					c = a % 100 - b,
					d = a >= 100 ? 100 : null;
				return a + (eg[b] || eg[c] || eg[d])
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), nf.defineLocale("tzm-latn", {
			months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
			monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
			weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
			weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
			weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd D MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[asdkh g] LT",
				nextDay: "[aska g] LT",
				nextWeek: "dddd [g] LT",
				lastDay: "[assant g] LT",
				lastWeek: "dddd [g] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dadkh s yan %s",
				past: "yan %s",
				s: "imik",
				m: "minuḍ",
				mm: "%d minuḍ",
				h: "saɛa",
				hh: "%d tassaɛin",
				d: "ass",
				dd: "%d ossan",
				M: "ayowr",
				MM: "%d iyyirn",
				y: "asgas",
				yy: "%d isgasn"
			},
			week: {
				dow: 6,
				doy: 12
			}
		}), nf.defineLocale("tzm", {
			months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
			monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
			weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
			weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
			weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "dddd D MMMM YYYY LT"
			},
			calendar: {
				sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
				nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
				nextWeek: "dddd [ⴴ] LT",
				lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
				lastWeek: "dddd [ⴴ] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
				past: "ⵢⴰⵏ %s",
				s: "ⵉⵎⵉⴽ",
				m: "ⵎⵉⵏⵓⴺ",
				mm: "%d ⵎⵉⵏⵓⴺ",
				h: "ⵙⴰⵄⴰ",
				hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
				d: "ⴰⵙⵙ",
				dd: "%d oⵙⵙⴰⵏ",
				M: "ⴰⵢoⵓⵔ",
				MM: "%d ⵉⵢⵢⵉⵔⵏ",
				y: "ⴰⵙⴳⴰⵙ",
				yy: "%d ⵉⵙⴳⴰⵙⵏ"
			},
			week: {
				dow: 6,
				doy: 12
			}
		}), nf.defineLocale("uk", {
			months: Dd,
			monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
			weekdays: Ed,
			weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
			weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY р.",
				LLL: "D MMMM YYYY р., LT",
				LLLL: "dddd, D MMMM YYYY р., LT"
			},
			calendar: {
				sameDay: Fd("[Сьогодні "),
				nextDay: Fd("[Завтра "),
				lastDay: Fd("[Вчора "),
				nextWeek: Fd("[У] dddd ["),
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
						case 5:
						case 6:
							return Fd("[Минулої] dddd [").call(this);
						case 1:
						case 2:
						case 4:
							return Fd("[Минулого] dddd [").call(this)
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "за %s",
				past: "%s тому",
				s: "декілька секунд",
				m: Cd,
				mm: Cd,
				h: "годину",
				hh: Cd,
				d: "день",
				dd: Cd,
				M: "місяць",
				MM: Cd,
				y: "рік",
				yy: Cd
			},
			meridiemParse: /ночі|ранку|дня|вечора/,
			isPM: function (a) {
				return /^(дня|вечора)$/.test(a)
			},
			meridiem: function (a, b, c) {
				return 4 > a ? "ночі" : 12 > a ? "ранку" : 17 > a ? "дня" : "вечора"
			},
			ordinalParse: /\d{1,2}-(й|го)/,
			ordinal: function (a, b) {
				switch (b) {
					case "M":
					case "d":
					case "DDD":
					case "w":
					case "W":
						return a + "-й";
					case "D":
						return a + "-го";
					default:
						return a
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), nf.defineLocale("uz", {
			months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
			monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
			weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
			weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
			weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY LT",
				LLLL: "D MMMM YYYY, dddd LT"
			},
			calendar: {
				sameDay: "[Бугун соат] LT [да]",
				nextDay: "[Эртага] LT [да]",
				nextWeek: "dddd [куни соат] LT [да]",
				lastDay: "[Кеча соат] LT [да]",
				lastWeek: "[Утган] dddd [куни соат] LT [да]",
				sameElse: "L"
			},
			relativeTime: {
				future: "Якин %s ичида",
				past: "Бир неча %s олдин",
				s: "фурсат",
				m: "бир дакика",
				mm: "%d дакика",
				h: "бир соат",
				hh: "%d соат",
				d: "бир кун",
				dd: "%d кун",
				M: "бир ой",
				MM: "%d ой",
				y: "бир йил",
				yy: "%d йил"
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), nf.defineLocale("vi", {
			months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
			monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
			weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
			weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
			weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "LT:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM [năm] YYYY",
				LLL: "D MMMM [năm] YYYY LT",
				LLLL: "dddd, D MMMM [năm] YYYY LT",
				l: "DD/M/YYYY",
				ll: "D MMM YYYY",
				lll: "D MMM YYYY LT",
				llll: "ddd, D MMM YYYY LT"
			},
			calendar: {
				sameDay: "[Hôm nay lúc] LT",
				nextDay: "[Ngày mai lúc] LT",
				nextWeek: "dddd [tuần tới lúc] LT",
				lastDay: "[Hôm qua lúc] LT",
				lastWeek: "dddd [tuần rồi lúc] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s tới",
				past: "%s trước",
				s: "vài giây",
				m: "một phút",
				mm: "%d phút",
				h: "một giờ",
				hh: "%d giờ",
				d: "một ngày",
				dd: "%d ngày",
				M: "một tháng",
				MM: "%d tháng",
				y: "một năm",
				yy: "%d năm"
			},
			ordinalParse: /\d{1,2}/,
			ordinal: function (a) {
				return a
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), nf.defineLocale("zh-cn", {
			months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
			weekdaysMin: "日_一_二_三_四_五_六".split("_"),
			longDateFormat: {
				LT: "Ah点mm分",
				LTS: "Ah点m分s秒",
				L: "YYYY-MM-DD",
				LL: "YYYY年MMMD日",
				LLL: "YYYY年MMMD日LT",
				LLLL: "YYYY年MMMD日ddddLT",
				l: "YYYY-MM-DD",
				ll: "YYYY年MMMD日",
				lll: "YYYY年MMMD日LT",
				llll: "YYYY年MMMD日ddddLT"
			},
			meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
			meridiemHour: function (a, b) {
				return 12 === a && (a = 0), "凌晨" === b || "早上" === b || "上午" === b ? a : "下午" === b || "晚上" === b ? a + 12 : a >= 11 ? a : a + 12
			},
			meridiem: function (a, b, c) {
				var d = 100 * a + b;
				return 600 > d ? "凌晨" : 900 > d ? "早上" : 1130 > d ? "上午" : 1230 > d ? "中午" : 1800 > d ? "下午" : "晚上"
			},
			calendar: {
				sameDay: function () {
					return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT"
				},
				nextDay: function () {
					return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT"
				},
				lastDay: function () {
					return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT"
				},
				nextWeek: function () {
					var a, b;
					return a = nf().startOf("week"), b = this.unix() - a.unix() >= 604800 ? "[下]" : "[本]", 0 === this.minutes() ? b + "dddAh点整" : b + "dddAh点mm"
				},
				lastWeek: function () {
					var a, b;
					return a = nf().startOf("week"), b = this.unix() < a.unix() ? "[上]" : "[本]", 0 === this.minutes() ? b + "dddAh点整" : b + "dddAh点mm"
				},
				sameElse: "LL"
			},
			ordinalParse: /\d{1,2}(日|月|周)/,
			ordinal: function (a, b) {
				switch (b) {
					case "d":
					case "D":
					case "DDD":
						return a + "日";
					case "M":
						return a + "月";
					case "w":
					case "W":
						return a + "周";
					default:
						return a
				}
			},
			relativeTime: {
				future: "%s内",
				past: "%s前",
				s: "几秒",
				m: "1 分钟",
				mm: "%d 分钟",
				h: "1 小时",
				hh: "%d 小时",
				d: "1 天",
				dd: "%d 天",
				M: "1 个月",
				MM: "%d 个月",
				y: "1 年",
				yy: "%d 年"
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), nf.defineLocale("zh-tw", {
			months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
			weekdaysMin: "日_一_二_三_四_五_六".split("_"),
			longDateFormat: {
				LT: "Ah點mm分",
				LTS: "Ah點m分s秒",
				L: "YYYY年MMMD日",
				LL: "YYYY年MMMD日",
				LLL: "YYYY年MMMD日LT",
				LLLL: "YYYY年MMMD日ddddLT",
				l: "YYYY年MMMD日",
				ll: "YYYY年MMMD日",
				lll: "YYYY年MMMD日LT",
				llll: "YYYY年MMMD日ddddLT"
			},
			meridiemParse: /早上|上午|中午|下午|晚上/,
			meridiemHour: function (a, b) {
				return 12 === a && (a = 0), "早上" === b || "上午" === b ? a : "中午" === b ? a >= 11 ? a : a + 12 : "下午" === b || "晚上" === b ? a + 12 : void 0
			},
			meridiem: function (a, b, c) {
				var d = 100 * a + b;

				return 900 > d ? "早上" : 1130 > d ? "上午" : 1230 > d ? "中午" : 1800 > d ? "下午" : "晚上"
			},
			calendar: {
				sameDay: "[今天]LT",
				nextDay: "[明天]LT",
				nextWeek: "[下]ddddLT",
				lastDay: "[昨天]LT",
				lastWeek: "[上]ddddLT",
				sameElse: "L"
			},
			ordinalParse: /\d{1,2}(日|月|週)/,
			ordinal: function (a, b) {
				switch (b) {
					case "d":
					case "D":
					case "DDD":
						return a + "日";
					case "M":
						return a + "月";
					case "w":
					case "W":
						return a + "週";
					default:
						return a
				}
			},
			relativeTime: {
				future: "%s內",
				past: "%s前",
				s: "幾秒",
				m: "一分鐘",
				mm: "%d分鐘",
				h: "一小時",
				hh: "%d小時",
				d: "一天",
				dd: "%d天",
				M: "一個月",
				MM: "%d個月",
				y: "一年",
				yy: "%d年"
			}
		}), nf);
	return fg
});
/*  jQuery Nice Select - v1.1.0
https://github.com/hernansartorio/jquery-nice-select
Made by Hernán Sartorio  */

(function ($) {

	$.fn.niceSelect = function (method) {

		// Methods
		if (typeof method == 'string') {
			if (method == 'update') {
				this.each(function () {
					var $select = $(this);
					var $dropdown = $(this).next('.nice-select');
					var open = $dropdown.hasClass('open');

					if ($dropdown.length) {
						$dropdown.remove();
						create_nice_select($select);

						if (open) {
							$select.next().trigger('click');
						}
					}
				});
			} else if (method == 'destroy') {
				this.each(function () {
					var $select = $(this);
					var $dropdown = $(this).next('.nice-select');

					if ($dropdown.length) {
						$dropdown.remove();
						$select.css('display', '');
					}
				});
				if ($('.nice-select').length == 0) {
					$(document).off('.nice_select');
				}
			} else {
				console.log('Method "' + method + '" does not exist.')
			}
			return this;
		}

		// Hide native select
		this.hide();

		// Create custom markup
		this.each(function () {
			var $select = $(this);

			if (!$select.next().hasClass('nice-select')) {
				create_nice_select($select);
			}
		});

		function create_nice_select($select) {
			var placeholder = ($select.data("js-placeholder") == undefined) ? '' : $select.data("js-placeholder")
			$select.after($('<div></div>')
				.addClass('nice-select')
				.addClass('noselect')
				.addClass($select.attr('class') || '')
				.addClass($select.attr('disabled') ? 'disabled' : '')
				.addClass($select.attr('multiple') ? 'has-multiple' : '')
				.attr('tabindex', $select.attr('disabled') ? null : '0')
				.html($select.attr('multiple') ? '<div class="nice-select__head"><span class="current multiple-options"></span><svg class="nice-select__arrow"><use xlink:href="images/sprite-svg.svg#arrow-down"></svg></div><div class="nice-select__drop"><div class="nice-select-search-box"><input type="text" class="nice-select-search" placeholder="' + placeholder + '"/><svg class="nice-select__search-icon"><use xlink:href="images/sprite-svg.svg#search"></svg></div><ul class="list"></ul></div>' : '<div class="nice-select__head"><span class="current"></span><svg class="nice-select__arrow"><use xlink:href="images/sprite-svg.svg#arrow-down"></svg></div><div class="nice-select__drop"><div class="nice-select-search-box"><input type="text" class="nice-select-search" placeholder="' + placeholder + '"/><svg class="nice-select__search-icon"><use xlink:href="images/sprite-svg.svg#search"></svg></div><ul class="list"></ul></div>')
			);

			var $dropdown = $select.next();
			var $options = $select.find('option');
			if ($select.attr('multiple')) {
				var $selected = $select.find('option:selected');
				var $selected_html = '';
				var $count = 0;
				$selected.each(function () {
					$selected_option = $(this);
					$selected_text = $selected_option.data('display') || $selected_option.text();
					$count++;
					if (!$selected_option.val()) {
						return;
					}

					//$selected_html += '<span class="current">' + $selected_text + '</span><svg class="nice-select__arrow"><use xlink:href="images/sprite-svg.svg#arrow-down"></svg>';
					$selected_html += $selected_text;
				});
				var $selected = $select.find('option:selected');

				$select_placeholder = $select.data('js-placeholder') || $select.attr('js-placeholder');
				$select_placeholder = !$select_placeholder ? $selected.data('display') : $select_placeholder;

				console.log($select_placeholder);
				$selected_html = $selected_html === '' ? $select_placeholder : $selected_html;
				//$dropdown.find('.multiple-options').html($selected_html);
				if ($count > 0) {
					$dropdown.find('.multiple-options').html($select_placeholder + ' (' + $count + ')');
				} else {
					$dropdown.find('.multiple-options').html($select_placeholder);
				}
			} else {
				var $selected = $select.find('option:selected');
				$dropdown.find('.current').html($selected.data('display') || $selected.text());
			}


			$options.each(function (i) {
				var $option = $(this);
				var display = $option.data('display');

				$dropdown.find('ul').append($('<li></li>')
					.attr('data-value', $option.val())
					.attr('data-display', (display || null))
					.addClass('option' +
						($option.attr('class') == undefined || !$option.attr('class') ? '' : ' ' + $option.attr('class')) +
						($option.is(':selected') ? ' selected' : '') +
						($option.is(':disabled') ? ' disabled' : ''))
					.html($option.text())
				);

			});

		}

		/* Event listeners */

		// Unbind existing events in case that the plugin has been initialized before
		$(document).off('.nice_select');

		// Open/close
		$(document).on('click.nice_select', '.nice-select', function (event) {
			var $dropdown = $(this);

			if ($dropdown.hasClass('nice-select--ajax') == true && $dropdown.find('.nice-select-search').val() == "") {
				// Ajax поиск результатов

				var $self = $dropdown;
				var $text = $self.find('.nice-select-search').val();
				//var url = $self.data('ajax');

				$.getJSON($self.prev().data('ajax'), { 'text': $text }, function (data) {
					if (data.length > 0) {
						$self.find('ul').empty();
						$self.prev('select').empty();
						var resultSearch = '';
						var resultOptions = '';
						for (var key in data) {
							//console.log(data[key]);
							resultSearch += '<li class="option" data-value="' + data[key]['value'] + '">' + data[key]['title'] + '</li>';
							resultOptions += '<option value="' + data[key]['value'] + '">' + data[key]['title'] + '</option>';
						}

						$(resultSearch).appendTo($self.find('ul'));
						$(resultOptions).appendTo($self.prev('select'));
					}
				});
			}

			$('.nice-select').not($dropdown).removeClass('open');
			$dropdown.toggleClass('open');
			//$('.nice-select .list').jScrollPane().destroy();
			/*$('.nice-select .list').jScrollPane({
				resizeSensor: true,
				reinitialise: 500
			});*/

			if ($dropdown.hasClass('open')) {
				$dropdown.find('.option');
				$dropdown.find('.nice-select-search').val('');
				$dropdown.find('.nice-select-search').focus();
				$dropdown.find('.focus').removeClass('focus');
				$dropdown.find('.selected').addClass('focus');
				$dropdown.find('ul li').show();
			} else {
				$dropdown.focus();
			}
		});

		$(document).on('click', '.nice-select-search-box', function (event) {
			event.stopPropagation();
			return false;
		});
		$(document).on('keyup.nice-select-search', '.nice-select', function () {
			if ($(this).hasClass('nice-select--ajax') == true) {
				// Ajax поиск результатов

				var $self = $(this);
				var $text = $self.find('.nice-select-search').val();
				//var url = $self.data('ajax');

				$.getJSON($self.prev().data('ajax'), { 'text': $text }, function (data) {
					if (data.length > 0) {
						$self.find('ul').empty();
						$self.prev('select').empty();
						var resultSearch = '';
						var resultOptions = '';
						//data.forEach(function(item, i, data) {
						for (var key in data) {

							resultSearch += '<li class="option" data-value="' + data[key]['value'] + '">' + data[key]['title'] + '</li>';
							resultOptions += '<option value="' + data[key]['value'] + '">' + data[key]['title'] + '</option>';
						}

						$(resultSearch).appendTo($self.find('ul'));
						$(resultOptions).appendTo($self.prev('select'));
					}
				});

			} else {
				var $self = $(this);
				var $text = $self.find('.nice-select-search').val();
				var $options = $self.find('ul li');
				if ($text == '')
					$options.show();
				else if ($self.hasClass('open')) {
					$text = $text.toLowerCase();
					var $matchReg = new RegExp($text);
					if (0 < $options.length) {
						$options.each(function () {
							var $this = $(this);
							var $optionText = $this.text().toLowerCase();
							var $matchCheck = $matchReg.test($optionText);
							$matchCheck ? $this.show() : $this.hide();
						})
					} else {
						$options.show();
					}
				}
				$self.find('.option'),
					$self.find('.focus').removeClass('focus'),
					$self.find('.selected').addClass('focus');

				/*if($options.find('.selected').length){ alert();
					$self.addClass("selected");
				}*/
			}
		});

		// Close when clicking outside
		$(document).on('click.nice_select', function (event) {
			if ($(event.target).closest('.nice-select').length === 0) {
				$('.nice-select').removeClass('open').find('.option');
			}
		});

		// Option click
		$(document).on('click.nice_select', '.nice-select .option:not(.disabled)', function (event) {
			var $option = $(this);
			var $dropdown = $option.closest('.nice-select');
			if ($dropdown.hasClass('has-multiple')) {
				console.log('clicked', $option);
				if ($option.hasClass('selected')) {
					$option.removeClass('selected');
				} else {
					$option.addClass('selected');
				}
				$selected_html = '';
				$selected_values = [];
				var $count = 0;
				$dropdown.find('.selected').each(function () {
					$selected_option = $(this);
					var text = $selected_option.data('display') || $selected_option.text();
					$selected_html += '<span class="current">' + text + '</span><svg class="nice-select__arrow"><use xlink:href="/local/templates/reloft2020/asset/images/sprite.svg#arrow-down"></svg>';
					$selected_values.push($selected_option.data('value'));
					$(this).parents(".nice-select").removeClass("noselect");
					$count++;
				});
				$select_placeholder = $dropdown.prev('select').data('js-placeholder') || $dropdown.prev('select').attr('js-placeholder');
				//console.log($dropdown.prev('select'));
				$select_placeholder = !$select_placeholder ? '' : $select_placeholder;
				$selected_html = $selected_html === '' ? $select_placeholder : $selected_html;
				//$dropdown.find('.multiple-options').html($selected_html);

				if ($count > 0) {
					$dropdown.find('.multiple-options').html($select_placeholder + ' (' + $count + ')');
				} else {
					$dropdown.find('.multiple-options').html($select_placeholder);
				}

				$dropdown.prev('select').val($selected_values).trigger('change');
			} else {
				$dropdown.find('.selected').removeClass('selected');
				$option.addClass('selected');
				var text = $option.data('display') || $option.text();
				$dropdown.find('.current').text(text);
				$dropdown.prev('select').val($option.data('value')).trigger('change');

				$(this).parents(".nice-select").removeClass("noselect");
			}
		});

		// Keyboard events
		$(document).on('keydown.nice_select', '.nice-select', function (event) {
			var $dropdown = $(this);
			var $focused_option = $($dropdown.find('.focus') || $dropdown.find('.list .option.selected'));

			// Space or Enter
			if (event.keyCode == 32 || event.keyCode == 13) {
				if ($dropdown.hasClass('open')) {
					$focused_option.trigger('click');
				} else {
					$dropdown.trigger('click');
				}
				return false;
				// Down
			} else if (event.keyCode == 40) {
				if (!$dropdown.hasClass('open')) {
					$dropdown.trigger('click');
				} else {
					var $next = $focused_option.nextAll('.option:not(.disabled)').first();
					if ($next.length > 0) {
						$dropdown.find('.focus').removeClass('focus');
						$next.addClass('focus');
					}
				}
				return false;
				// Up
			} else if (event.keyCode == 38) {
				if (!$dropdown.hasClass('open')) {
					$dropdown.trigger('click');
				} else {
					var $prev = $focused_option.prevAll('.option:not(.disabled)').first();
					if ($prev.length > 0) {
						$dropdown.find('.focus').removeClass('focus');
						$prev.addClass('focus');
					}
				}
				return false;
				// Esc
			} else if (event.keyCode == 27) {
				if ($dropdown.hasClass('open')) {
					$dropdown.trigger('click');
				}
				// Tab
			} else if (event.keyCode == 9) {
				if ($dropdown.hasClass('open')) {
					return false;
				}
			}
		});

		// Detect CSS pointer-events support, for IE <= 10. From Modernizr.
		var style = document.createElement('a').style;
		style.cssText = 'pointer-events:auto';
		if (style.pointerEvents !== 'auto') {
			$('html').addClass('no-csspointerevents');
		}

		return this;

	};

}(jQuery));
/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.1
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});



var uikit = {

	lg: '1450',

	md: '1200',

	sm: '992',

	xs: '640',

	xxs: '480',

	ww: function () {

		return $(window).width();

	},



	wh: function () {

		return $(window).height();

	},



	mask: function () {

		$("input[type='tel']").mask('+7 (999) 999-9999', { placeholder: '+7 (___) ___-____' });

	},



	niceSelect: function () {

		$('select').niceSelect();

		// $('.nice-select .list').mCustomScrollbar();

	},



	/* niceSelectUpdate: function () {

		$('select').niceSelect('update');

		$('.nice-select .list').mCustomScrollbar();

	}, */



	validation: function () {

		var

			classValidate = 'is-validate',

			classParent = '.form-group',

			classError = 'is-error';

		function error(el) {

			$(el)

				.addClass(classError)

				.removeClass(classValidate)

				.closest(classParent)

				.addClass(classError)

				.removeClass(classValidate);

		}

		function validate(el) {

			$(el)

				.removeClass(classError)

				.addClass(classValidate)

				.closest(classParent)

				.removeClass(classError)

				.addClass(classValidate);

		}

		function reset(el) {

			$(el)

				.removeClass(classValidate + ' ' + classError)

				.closest(classParent)

				.removeClass(classError)

				.removeClass(classValidate + ' ' + classError)

		}

		$('.form-control').focus(function () {

			reset($(this))

		});

		$('select').change(function () {

			reset($(this))

		});

		$('input[type="checkbox"], input[type="radio"]').change(function () {

			reset($(this))

		});

		function checkInput(el) {

			var $form = $(el);



			$form.find('.is-error').removeClass('is-error');//.each(function(){

			//$(this).removeClass('is-error');

			//console.log("!"+$form.find('.is-error').length+"!");

			//});



			$form.find('select.js-required').each(function () {

				if ($(this).val() != '') {

					validate($(this));

				} else {

					error($(this));

				}

			});

			$form.find('input[type=tel].js-required').each(function () {

				if ($(this).val() != '') {

					validate($(this));

				} else {

					error($(this));

				}

			});

			$form.find('input[type=email].js-required').each(function () {

				if ($(this).val() != '') {

					validate($(this));

				} else {

					error($(this));

				}

			});

			$form.find('input[type=text].js-required').each(function () {

				if ($(this).val() != '') {

					validate($(this));

				} else {

					error($(this));

				}

			});

			$form.find('input[type=password].js-required').each(function () {

				if ($(this).val() != '') {

					validate($(this));

				} else {

					error($(this));

				}

			});

			if ($('.js-pass1', $form).length != 0) {

				var pass01 = $form.find('.js-pass1').val();

				var pass02 = $form.find('.js-pass2').val();

				if (pass01 == pass02) {

					validate($('.js-pass1, .js-pass2', $form));

				} else {

					error($('.js-pass1, .js-pass2', $form));

				}

			}

			$form.find('textarea.js-required').each(function () {

				if ($(this).val() != '') {

					validate($(this));

				} else {

					error($(this));

				}

			});

			$form.find('input[type=email]').each(function () {

				var regexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;

				var $this = $(this);

				if ($this.hasClass('js-required')) {

					if (regexp.test($this.val())) {

						validate($this);

					} else {

						error($this);

					}

				} else {

					if ($this.val() != '') {

						if (regexp.test($this.val())) {

							validate($this);

						} else {

							error($this);

						}

					} else {

						reset($this)

					}

				}

			});



			$form.find('input[type=checkbox].js-required').each(function () {



				if ($(this).is(':checked')) {

					validate($(this));

				} else {

					error($(this));

					//$(this).addClass('is-error');

				}

			});



			var radios = [];

			$form.find('input[type=radio]:required').each(function () {

				var name = $(this).attr('name');



				if (radios.indexOf(name) == -1) {



					radios.push(name);

					var result = false;

					$form.find('input[name=' + name + '].js-required').each(function () {



						if ($(this).is(':checked')) {

							result = true;

						}

					});

					if (result == true) {

						validate($(this));

						return false;

					} else {

						//console.log(radios);

						$form.find('input[name=' + name + '].js-required').addClass(classError);

						error($(this));

					}

				}

			});

		}



		$('.js-submit').click(function () {

			var $form = $(this).closest('form');

			checkInput($form);

			var errors = $form.find('.is-error:visible').length;

			//console.log(errors);

			if (errors) {

				return false;

			} else if ($(this).data('href') != "" && $(this).data('href') != undefined) {



				// Открытие попапа после отправки формы.



				if ($(this).attr("href") != "" && $(this).attr("href") != undefined) {

					var href = $(this).attr("href");

				} else {

					var href = $(this).data("href");

				}

				if ($(this).data('media') == "lg" && uikit.ww() <= uikit.md) {

					return false;

				}



				var bodyWidth = $('body').width();



				$("body, html").addClass("overflow");



				if (bodyWidth - uikit.ww() < 0) {

					//$('body').css('padding-right',((bodyWidth - uikit.ww())* -1)+'px');

				}



				//$(".mobile-menu").removeClass("active");



				$(".popup").removeClass("active");

				$(href).addClass("active");



				return false;

			}

		});

	},

	// mainMenu: function() {

	// 	// $("").click((e)=>{

	// 	// 	let target = e.target;

	// 	// 	if(target.classList.contains(".is-active")) {

	// 	// 		target.classList.remove("is-active")

	// 	// 	} else {

	// 	// 		target.classList.add("is-active")

	// 	// 	}

	// 	// });



	// 	let location = window.location.href;

	// 	let cur_url = '/' + location.split('/').pop();

	

	// 	$('.menu-block .menu-block__item').each(function () {

	// 		 let link = $(this).find('a').attr('href');

	

	// 		 if (cur_url == link) {

	// 			  $(this).addClass('is-active');

	// 		 }

	// 	});

	// },

	calendar: function () {

		$(".calendar-js").each(function () {

			$(this).ionDatePicker({

				lang: "ru",

				sundayFirst: false,

				years: "2022 - 2050",

				format: "DD.MM.YYYY",

				hideArrows: true,

				disableLast: true,

				onClick: function (date) {

					$(".calendar-js").html("onClick: " + date);

				},

			});

		});

	},



	popups: function () {

		$(document).on("click", ".js-popup-show", function () {

			if ($(this).attr("href") != "" && $(this).attr("href") != undefined) {

				var href = $(this).attr("href");

			} else {

				var href = $(this).data("href");

			}

			if ($(this).data('media') == "lg" && uikit.ww() <= uikit.md) {

				return false;

			}



			var bodyWidth = $('body').width();



			$("body, html").addClass("overflow");



			if (bodyWidth - uikit.ww() < 0) {

				//$('body').css('padding-right',((bodyWidth - uikit.ww())* -1)+'px');

			}



			//$(".mobile-menu").removeClass("active");



			$(".popup").removeClass("is-active");

			$(href).addClass("is-active");



			return false;

		});



		$(".js-popup-hide").click(function () {

			$(".popup").removeClass("is-active");

			$("body, html").css('padding-right', 0).removeClass("overflow");

			return false;

		});

	},



	lazy: function () {



		function logElementEvent(eventName, element) {

		}

		var callback_enter = function (element) {

		};

		var callback_exit = function (element) {

		};

		var callback_loading = function (element) {

		};

		var callback_loaded = function (element) {

		};

		var callback_error = function (element) {

		};

		var callback_finish = function () {

		};

		var callback_cancel = function (element) {



		};



		var lazyLoadOb = new LazyLoad({

			class_applied: "lz-applied",

			class_loading: "lz-loading",

			class_loaded: "lz-loaded",

			class_error: "lz-error",

			class_entered: "lz-entered",

			class_exited: "lz-exited",

			// Assign the callbacks defined above

			callback_enter: callback_enter,

			callback_exit: callback_exit,

			callback_cancel: callback_cancel,

			callback_loading: callback_loading,

			callback_loaded: callback_loaded,

			callback_error: callback_error,

			callback_finish: callback_finish

		});

		lazyLoadOb.update();

	},



	sliders: function () {

		var ww = this.ww();

		var wh = this.wh();

		var lg = this.lg;

		var md = this.md;

		var sm = this.sm;

		var xs = this.xs;

		var xxs = this.xxs;



		if ($('.js-apparts-slider').length) {

			$('.js-apparts-slider').each(function () {

				var $this = $(this);



				$this.slick({

					slidesToShow: 1,

					slidesToScroll: 1,

					centerMode: false,

					variableWidth: false,

					arrows: true,

					dots: false,

					infinite: true,

					adaptiveHeight: true,

					autoplay: false,

					autoplaySpeed: 2000,

					lazyLoad: 'progressive',

					prevArrow: '<a href="#" class="appart-block__prev slick-arrow slick-prev" tabindex="-1"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606C255,161.018,253.42,157.202,250.606,154.389z"/></svg></a>',

					nextArrow: '<a href="#" class="appart-block__next slick-arrow slick-next" tabindex="-1"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606C255,161.018,253.42,157.202,250.606,154.389z"/></svg></a>',

					responsive: [

						{

							breakpoint: xs,

							settings: {

								arrows: false,

								dots: true,

								slidesToShow: 1,

								slidesToScroll: 1

							}

						}

					]

				});



			});



			$('.js-team-slider-prev').click(function () {

				$('.js-team-slider').slick('slickPrev');

				return false;

			});

			$('.js-team-slider-next').click(function () {

				$('.js-team-slider').slick('slickNext');

				return false;

			});



		}



		if ($('.js-team-slider').length) {

			$('.js-team-slider').each(function () {

				var $this = $(this);



				$this.slick({

					slidesToShow: 3,

					slidesToScroll: 1,

					centerMode: false,

					variableWidth: false,

					arrows: true,

					dots: false,

					infinite: true,

					adaptiveHeight: true,

					autoplay: false,

					autoplaySpeed: 2000,

					lazyLoad: 'progressive',

					prevArrow: '<a href="#" class="team-section__prev slick-arrow slick-prev" tabindex="-1"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606C255,161.018,253.42,157.202,250.606,154.389z"/></svg></a>',

					nextArrow: '<a href="#" class="team-section__next slick-arrow slick-next" tabindex="-1"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606C255,161.018,253.42,157.202,250.606,154.389z"/></svg></a>',

					responsive: [

						{

							breakpoint: md,

							settings: {

								slidesToShow: 2,

								slidesToScroll: 1

							}

						},

						{

							breakpoint: sm,

							settings: {

								slidesToShow: 1,

								slidesToScroll: 1

							}

						},

						{

							breakpoint: xs,

							settings: {

								arrows: false,

								dots: true,

								slidesToShow: 1,

								slidesToScroll: 1

							}

						}

					]

				});



			});



			$('.js-team-slider-prev').click(function () {

				$('.js-team-slider').slick('slickPrev');

				return false;

			});

			$('.js-team-slider-next').click(function () {

				$('.js-team-slider').slick('slickNext');

				return false;

			});



		}





		if ($('.js-review-slider').length) {

			$('.js-review-slider').each(function () {

				var $this = $(this);



				$this.slick({

					slidesToShow: 3,

					slidesToScroll: 1,

					centerMode: false,

					variableWidth: false,

					arrows: true,

					dots: false,

					infinite: true,

					adaptiveHeight: true,

					autoplay: false,

					autoplaySpeed: 2000,

					lazyLoad: 'progressive',

					prevArrow: '<a href="#" class="reviews-section__prev slick-arrow slick-prev" tabindex="-1"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606C255,161.018,253.42,157.202,250.606,154.389z"/></svg></a>',

					nextArrow: '<a href="#" class="reviews-section__next slick-arrow slick-next" tabindex="-1"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606C255,161.018,253.42,157.202,250.606,154.389z"/></svg></a>',

					responsive: [

						{

							breakpoint: md,

							settings: {

								slidesToShow: 2,

								slidesToScroll: 1

							}

						},

						{

							breakpoint: sm,

							settings: {

								slidesToShow: 1,

								slidesToScroll: 1

							}

						},

						{

							breakpoint: xs,

							settings: {

								arrows: false,

								dots: true,

								slidesToShow: 1,

								slidesToScroll: 1

							}

						}

					]

				});



			});



			$('.js-comments-slider-prev').click(function () {

				$('.js-comments-slider').slick('slickPrev');

				return false;

			});

			$('.js-comments-slider-next').click(function () {

				$('.js-comments-slider').slick('slickNext');

				return false;

			});



		}



	},



	fancybox: function () {

		$(".js-fancybox, .fancybox").fancybox({

			// Options will go here

			iframe: {

				preload: false

			}

		});

	},



	/* accardion: function () {

		$('.js-accardion-toggle').click(function () {

			$(this).toggleClass('is-active').next().toggleClass('is-active');

			return false;

		});

	}, */



	mobile: function () {



		$('.js-menu-toggle').click(function () {

			$(this).toggleClass('is-active');

			$('body').toggleClass('overflow');

			$('html').toggleClass('overflow');



			$('.js-main-menu').toggleClass('is-active');



			$(document).mouseup(function (e) { // событие клика по веб-документу

				var div = $('.js-menu-toggle').parent(); // тут указываем ID элемента

				if (!div.is(e.target) // если клик был не по нашему блоку

					&& div.has(e.target).length === 0) { // и не по его дочерним элементам

					div.removeClass('is-active'); // скрываем его

					$('.js-main-menu').removeClass('is-active'); // скрываем его

					$('body').removeClass('overflow');

				}

			});



			return false;

		});



	},



	form: function () {

		/* $('.js-btn-send-zamer').click(function () {

			$('input#subject').val('ВЫЗВОВ ЗАМЕРЩИКА');

		});

		$('.js-btn-send-call').click(function () {

			$('input#subject').val('Заказ обратного звонка');

		}); */



		$('.js-contact-form').submit(function () {

			var $form = $(this);

			var url = $(this).attr('action');

			console.log($form.serialize());

			$.ajax({

				url: url,

				dataType: "json",

				type: "POST",

				data: $form.serialize(),

				success: function (response) {



					if (response.result == 'ok') {



						/* var bodyWidth = $('body').width();



						$("body, html").addClass("overflow");



						if (bodyWidth - uikit.ww() < 0) {

							//$('body').css('padding-right',((bodyWidth - uikit.ww())* -1)+'px');

						}



						//$(".mobile-menu").removeClass("active");

						 */



						$("body, html").addClass("overflow");

						$(".popup").removeClass("is-active");

						$("#popup-message").addClass("is-active");



						//$form.hide().next('.js-form-finish').addClass('is-active');

					} else {

						alert(response.data);

					}

				}

			});



			return false;

		});

	},



	scrollTo: function () {

		$(".js-scroll-to").click(function () {

			var href = $(this).attr("href");

			$('html, body').animate({ scrollTop: $(href).offset().top }, 400);

			return false;

		});

	},



	mainInit: function () {



		this.sliders();



		this.lazy();

		this.validation();



		this.calendar();

		// this.tabs();

		// this.mainMenu();



		this.niceSelect();



		this.fancybox();

		this.popups();

		this.mask();



		this.mobile();



		this.scrollTo();



		this.form();



	}

};

$(document).ready(function () {



	uikit.mainInit();



	// Разворот текстового описания

	/* $(".js-more-text").click(function () {

		if ($(this).hasClass('hide') == false) {

			$(this).addClass('hide');

			$(this).parent().parent().find(".js-wrap-text").removeClass("d-none");

		} else {

			$(this).removeClass('hide');

			$(this).parent().parent().find(".js-wrap-text").addClass("d-none");

		}

		return false;

	}); */



});

var clrTimeOut;

$(window).on('load', function (e) {

	clearTimeout(clrTimeOut);

	clrTimeOut = setTimeout(function () {



	}, 200);

});



$(window).resize(function () {

	clearTimeout(clrTimeOut);

	clrTimeOut = setTimeout(function () {



	}, 200);



});



$(window).scroll(function () {

	//uikit.headerFixed();

});



