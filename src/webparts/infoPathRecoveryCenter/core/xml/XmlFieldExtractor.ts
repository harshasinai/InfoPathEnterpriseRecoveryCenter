import { IParsedField } from '../../models/IParsedField';
import { IRecoveredAttachment } from '../../models/IRecoveredAttachment';
import { IXmlLimits } from './XmlSecurityValidator';
import { canonicalFieldId, elementPath, qualifiedNameOf } from './XmlNamespaceHelper';
import { formatValue, friendlyLabel, isMembershipClaim } from './XmlValueFormatter';
import { detectAttachment } from '../attachments/InfoPathAttachmentDetector';
const TECHNICAL=/(^|:)(schema|version|solutionVersion|productVersion|language|viewContext)$/i;
export interface IExtraction {fields:IParsedField[];attachments:IRecoveredAttachment[];warnings:string[];}
export function extractFields(doc:Document,limits:IXmlLimits):IExtraction{
 const fields:IParsedField[]=[],attachments:IRecoveredAttachment[]=[],warnings:string[]=[]; const counts:{[k:string]:number}={}; let total=0;
 const els=doc.getElementsByTagName('*');
 for(let i=0;i<els.length;i++){const el=els[i]; if(el.children.length)continue; const value=(el.textContent||'').trim(); if(!value)continue; const q=qualifiedNameOf(el),local=el.localName||el.nodeName.replace(/^.*:/,''),seq=(counts[q]||0)+1;counts[q]=seq;
   try{const a=detectAttachment(value,local,q,seq,limits.maxAttachmentBytes);if(a){if(attachments.length>=limits.maxAttachmentCount)throw new Error('Attachment count limit exceeded.');total+=a.size;if(total>limits.maxTotalAttachmentBytes)throw new Error('Total attachment size limit exceeded.');attachments.push(a);continue;}}catch(e){warnings.push(e instanceof Error?e.message:'Attachment malformed.');continue;}
   if(TECHNICAL.test(q)||isMembershipClaim(value)||value.length>10000)continue; if(fields.length>=limits.maxFieldCount)throw new Error('Invalid XML: field limit exceeded.');
   fields.push({id:canonicalFieldId(el,seq),qualifiedName:q,localName:local,namespaceUri:el.namespaceURI||'',path:elementPath(el),label:friendlyLabel(q),rawValue:value,displayValue:formatValue(value),sequence:seq,section:'details'});
 }
 return {fields,attachments,warnings};
}
