var i;const o=((i=globalThis.__sveltekit_1h6wein)==null?void 0:i.base)??"/litmus-api-docs";var r;const c=((r=globalThis.__sveltekit_1h6wein)==null?void 0:r.assets)??o;class l{constructor(t,s){this.status=t,typeof s=="string"?this.body={message:s}:s?this.body=s:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class h{constructor(t,s){this.status=t,this.location=s}}class n extends Error{constructor(t,s,a){super(a),this.status=t,this.text=s}}export{l as H,h as R,n as S,c as a,o as b};
