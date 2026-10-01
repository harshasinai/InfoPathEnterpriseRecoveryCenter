import { DEFAULT_LIMITS, IRecoveryProfile } from '../../models/IRecoveryProfile';

export interface IXmlLimits { maxBytes:number; maxNodeCount:number; maxDepth:number; maxFieldCount:number; maxAttachmentCount:number; maxAttachmentBytes:number; maxTotalAttachmentBytes:number; }
export function limitsFromProfile(profile?: IRecoveryProfile): IXmlLimits {
  return { maxBytes:(profile?.maxXmlSizeMb || DEFAULT_LIMITS.maxXmlSizeMb)*1024*1024, maxNodeCount:profile?.maxNodeCount||DEFAULT_LIMITS.maxNodeCount, maxDepth:profile?.maxDepth||DEFAULT_LIMITS.maxDepth, maxFieldCount:profile?.maxFieldCount||DEFAULT_LIMITS.maxFieldCount, maxAttachmentCount:profile?.maxAttachmentCount||DEFAULT_LIMITS.maxAttachmentCount, maxAttachmentBytes:profile?.maxAttachmentBytes||DEFAULT_LIMITS.maxAttachmentBytes, maxTotalAttachmentBytes:profile?.maxTotalAttachmentBytes||DEFAULT_LIMITS.maxTotalAttachmentBytes };
}
export function validateXmlText(xml:string, limits:IXmlLimits): void {
  if (!xml || !xml.trim()) throw new Error('Invalid XML: the source is empty.');
  const size = encodeURIComponent(xml).replace(/%[0-9A-F]{2}|./g, 'x').length;
  if (size > limits.maxBytes) throw new Error('XML too large.');
  const prefix=xml.slice(0,4096);
  if (/\0/.test(prefix) || (!/^\s*(?:<\?xml[\s\S]*?\?>\s*)?</.test(prefix))) throw new Error('Invalid XML: the source is not XML text.');
  if (/<!DOCTYPE\b/i.test(xml) || /<!ENTITY\b/i.test(xml)) throw new Error('Invalid XML: DTD and entity declarations are not allowed.');
  if (/<\?xml-stylesheet\b/i.test(xml)) throw new Error('Invalid XML: stylesheet processing instructions are not allowed.');
}
export function validateDocumentComplexity(doc:Document, limits:IXmlLimits): void {
  let count=0, deepest=0;
  const walk=(node:Element, depth:number):void=>{ count++; if(count>limits.maxNodeCount) throw new Error('Invalid XML: node limit exceeded.'); if(depth>limits.maxDepth) throw new Error('Invalid XML: nesting limit exceeded.'); deepest=Math.max(deepest,depth); for(let i=0;i<node.children.length;i++) walk(node.children[i],depth+1); };
  if (!doc.documentElement) throw new Error('Invalid XML: no document element.');
  walk(doc.documentElement,1); void deepest;
}
