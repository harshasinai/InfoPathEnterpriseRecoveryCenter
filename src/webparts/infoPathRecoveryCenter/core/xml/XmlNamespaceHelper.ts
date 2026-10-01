export function qualifiedNameOf(el:Element):string { return el.prefix ? `${el.prefix}:${el.localName}` : el.nodeName; }
export function canonicalFieldId(el:Element, sequence:number):string { return `${el.namespaceURI||''}|${el.localName||el.nodeName}|${elementPath(el)}|${sequence}`; }
export function elementPath(el:Element):string { const p:string[]=[]; let n:Element|null=el; while(n){p.unshift(`{${n.namespaceURI||''}}${n.localName||n.nodeName}`); n=n.parentElement;} return p.join('/'); }
