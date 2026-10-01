import { IParsedXmlRecord } from '../../models/IParsedXmlRecord';
import { IRecoveryProfile } from '../../models/IRecoveryProfile';
import { ISourceDescriptor } from '../../models/ISourceDescriptor';
import { extractFields } from './XmlFieldExtractor';
import { limitsFromProfile, validateDocumentComplexity, validateXmlText } from './XmlSecurityValidator';
export function parseXmlSecurely(xml:string,source:ISourceDescriptor,profile?:IRecoveryProfile):IParsedXmlRecord{
 const limits=limitsFromProfile(profile);validateXmlText(xml,limits);const doc=new DOMParser().parseFromString(xml,'application/xml');if(doc.getElementsByTagName('parsererror').length)throw new Error('Invalid XML: the document is malformed.');validateDocumentComplexity(doc,limits);const x=extractFields(doc,limits);const namespaces:string[]=[];for(let i=0;i<doc.getElementsByTagName('*').length;i++){const n=doc.getElementsByTagName('*')[i].namespaceURI||'';if(n&&namespaces.indexOf(n)<0)namespaces.push(n);}return{fields:x.fields,attachments:x.attachments,source,rootQualifiedName:doc.documentElement.nodeName,namespaceUris:namespaces,profileMatched:!!profile,warnings:x.warnings};
}
