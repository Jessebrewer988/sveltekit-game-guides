function b(){}function Z(t,e){for(const n in e)t[n]=e[n];return t}function G(t){return t()}function J(){return Object.create(null)}function w(t){t.forEach(G)}function tt(t){return typeof t=="function"}function et(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let N;function gt(t,e){return N||(N=document.createElement("a")),N.href=e,t===N.href}function nt(t){return Object.keys(t).length===0}function xt(t,e,n,r){if(t){const c=K(t,e,n,r);return t[0](c)}}function K(t,e,n,r){return t[1]&&r?Z(n.ctx.slice(),t[1](r(e))):n.ctx}function bt(t,e,n,r){if(t[2]&&r){const c=t[2](r(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const u=[],l=Math.max(e.dirty.length,c.length);for(let o=0;o<l;o+=1)u[o]=e.dirty[o]|c[o];return u}return e.dirty|c}return e.dirty}function wt(t,e,n,r,c,u){if(c){const l=K(e,n,r,u);t.p(l,c)}}function $t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}let A=!1;function it(){A=!0}function rt(){A=!1}function ct(t,e,n,r){for(;t<e;){const c=t+(e-t>>1);n(c)<=r?t=c+1:e=c}return t}function lt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let s=0;s<e.length;s++){const a=e[s];a.claim_order!==void 0&&i.push(a)}e=i}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let c=0;for(let i=0;i<e.length;i++){const s=e[i].claim_order,a=(c>0&&e[n[c]].claim_order<=s?c+1:ct(1,c,d=>e[n[d]].claim_order,s))-1;r[i]=n[a]+1;const _=a+1;n[_]=i,c=Math.max(_,c)}const u=[],l=[];let o=e.length-1;for(let i=n[c]+1;i!=0;i=r[i-1]){for(u.push(e[i-1]);o>=i;o--)l.push(e[o]);o--}for(;o>=0;o--)l.push(e[o]);u.reverse(),l.sort((i,s)=>i.claim_order-s.claim_order);for(let i=0,s=0;i<l.length;i++){for(;s<u.length&&l[i].claim_order>=u[s].claim_order;)s++;const a=s<u.length?u[s]:null;t.insertBefore(l[i],a)}}function ot(t,e){if(A){for(lt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function kt(t,e,n){A&&!n?ot(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function st(t){t.parentNode.removeChild(t)}function ut(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function Et(){return O(" ")}function St(){return O("")}function jt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ft(t){return Array.from(t.childNodes)}function at(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function W(t,e,n,r,c=!1){at(t);const u=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(e(o)){const i=n(o);return i===void 0?t.splice(l,1):t[l]=i,c||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(e(o)){const i=n(o);return i===void 0?t.splice(l,1):t[l]=i,c?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return r()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function dt(t,e,n,r){return W(t,c=>c.nodeName===e,c=>{const u=[];for(let l=0;l<c.attributes.length;l++){const o=c.attributes[l];n[o.name]||u.push(o.name)}u.forEach(l=>c.removeAttribute(l))},()=>r(e))}function Nt(t,e,n){return dt(t,e,n,ut)}function _t(t,e){return W(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>O(e),!0)}function At(t){return _t(t," ")}function Mt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ct(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}let $;function k(t){$=t}function P(){if(!$)throw new Error("Function called outside component initialization");return $}function qt(t){P().$$.on_mount.push(t)}function vt(t){P().$$.after_update.push(t)}function zt(t,e){P().$$.context.set(t,e)}const E=[],Q=[],M=[],R=[],U=Promise.resolve();let D=!1;function V(){D||(D=!0,U.then(X))}function Bt(){return V(),U}function F(t){M.push(t)}const H=new Set;let C=0;function X(){const t=$;do{for(;C<E.length;){const e=E[C];C++,k(e),ht(e.$$)}for(k(null),E.length=0,C=0;Q.length;)Q.pop()();for(let e=0;e<M.length;e+=1){const n=M[e];H.has(n)||(H.add(n),n())}M.length=0}while(E.length);for(;R.length;)R.pop()();D=!1,H.clear(),k(t)}function ht(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}const q=new Set;let g;function Tt(){g={r:0,c:[],p:g}}function Ot(){g.r||w(g.c),g=g.p}function Y(t,e){t&&t.i&&(q.delete(t),t.i(e))}function Pt(t,e,n,r){if(t&&t.o){if(q.has(t))return;q.add(t),g.c.push(()=>{q.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function Dt(t,e){t.d(1),e.delete(t.key)}function Ft(t,e,n,r,c,u,l,o,i,s,a,_){let d=t.length,m=u.length,h=d;const v={};for(;h--;)v[t[h].key]=h;const S=[],z=new Map,B=new Map;for(h=m;h--;){const f=_(c,u,h),p=n(f);let y=l.get(p);y?r&&y.p(f,e):(y=s(p,f),y.c()),z.set(p,S[h]=y),p in v&&B.set(p,Math.abs(h-v[p]))}const I=new Set,L=new Set;function T(f){Y(f,1),f.m(o,a),l.set(f.key,f),a=f.first,m--}for(;d&&m;){const f=S[m-1],p=t[d-1],y=f.key,j=p.key;f===p?(a=f.first,d--,m--):z.has(j)?!l.has(y)||I.has(y)?T(f):L.has(j)?d--:B.get(y)>B.get(j)?(L.add(y),T(f)):(I.add(j),d--):(i(p,l),d--)}for(;d--;){const f=t[d];z.has(f.key)||i(f,l)}for(;m;)T(S[m-1]);return S}function Ht(t,e){const n={},r={},c={$$scope:1};let u=t.length;for(;u--;){const l=t[u],o=e[u];if(o){for(const i in l)i in o||(r[i]=1);for(const i in o)c[i]||(n[i]=o[i],c[i]=1);t[u]=o}else for(const i in l)c[i]=1}for(const l in r)l in n||(n[l]=void 0);return n}function It(t){return typeof t=="object"&&t!==null?t:{}}function Lt(t){t&&t.c()}function Gt(t,e){t&&t.l(e)}function mt(t,e,n,r){const{fragment:c,on_mount:u,on_destroy:l,after_update:o}=t.$$;c&&c.m(e,n),r||F(()=>{const i=u.map(G).filter(tt);l?l.push(...i):w(i),t.$$.on_mount=[]}),o.forEach(F)}function pt(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(t,e){t.$$.dirty[0]===-1&&(E.push(t),V(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Jt(t,e,n,r,c,u,l,o=[-1]){const i=$;k(t);const s=t.$$={fragment:null,ctx:null,props:u,update:b,not_equal:c,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:J(),dirty:o,skip_bound:!1,root:e.target||i.$$.root};l&&l(s.root);let a=!1;if(s.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return s.ctx&&c(s.ctx[_],s.ctx[_]=h)&&(!s.skip_bound&&s.bound[_]&&s.bound[_](h),a&&yt(t,_)),d}):[],s.update(),a=!0,w(s.before_update),s.fragment=r?r(s.ctx):!1,e.target){if(e.hydrate){it();const _=ft(e.target);s.fragment&&s.fragment.l(_),_.forEach(st)}else s.fragment&&s.fragment.c();e.intro&&Y(t.$$.fragment),mt(t,e.target,e.anchor,e.customElement),rt(),X()}k(i)}class Kt{$destroy(){pt(this,1),this.$destroy=b}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(e){this.$$set&&!nt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const x=[];function Wt(t,e=b){let n;const r=new Set;function c(o){if(et(t,o)&&(t=o,n)){const i=!x.length;for(const s of r)s[1](),x.push(s,t);if(i){for(let s=0;s<x.length;s+=2)x[s][0](x[s+1]);x.length=0}}}function u(o){c(o(t))}function l(o,i=b){const s=[o,i];return r.add(s),r.size===1&&(n=e(c)||b),o(t),()=>{r.delete(s),r.size===0&&(n(),n=null)}}return{set:c,update:u,subscribe:l}}export{It as A,pt as B,Z as C,Wt as D,Bt as E,xt as F,ot as G,wt as H,$t as I,bt as J,gt as K,b as L,Ft as M,Dt as N,Kt as S,ft as a,jt as b,Nt as c,st as d,ut as e,Ct as f,kt as g,_t as h,Jt as i,Mt as j,Et as k,St as l,At as m,Tt as n,Pt as o,Ot as p,Y as q,zt as r,et as s,O as t,vt as u,qt as v,Lt as w,Gt as x,mt as y,Ht as z};
