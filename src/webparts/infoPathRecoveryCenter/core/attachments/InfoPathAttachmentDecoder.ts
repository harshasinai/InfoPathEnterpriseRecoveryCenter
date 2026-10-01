import { IRecoveredAttachment } from '../../models/IRecoveredAttachment';
import { AttachmentSaveStatus } from '../../models/RecoveryEnums';
import { resolveMimeType, extensionOf } from './AttachmentMimeTypeResolver';
import { sanitizeComponent } from '../files/SafeFileNameBuilder';
export const INFOPATH_SIGNATURE=[0xc7,0x49,0x46,0x41];
function u32(b:Uint8Array,o:number):number{return (b[o]|b[o+1]<<8|b[o+2]<<16|b[o+3]*0x1000000)>>>0;}
export function decodeBase64(value:string):Uint8Array|undefined { const clean=(value||'').replace(/\s/g,''); if(clean.length<32||clean.length%4!==0||!/^[A-Za-z0-9+/]+={0,2}$/.test(clean))return undefined; try{const s=atob(clean);const b=new Uint8Array(s.length);for(let i=0;i<s.length;i++)b[i]=s.charCodeAt(i);return b;}catch{return undefined;} }
export function hasInfoPathSignature(b?:Uint8Array):boolean{return !!b&&b.length>=24&&INFOPATH_SIGNATURE.every((v,i)=>b[i]===v);}
export function decodeInfoPathAttachment(value:string,field:string,qualifiedField:string,sequence:number,maxBytes:number):IRecoveredAttachment|undefined {
  const b=decodeBase64(value); if(!hasInfoPathSignature(b))return undefined; const bytes=b as Uint8Array;
  const headerSize=u32(bytes,4),version=u32(bytes,8),declared=u32(bytes,16),chars=u32(bytes,20),nameBytes=chars*2,start=24+nameBytes;
  if(headerSize<20||version<1||chars<1||start>bytes.length||declared>maxBytes||start+declared>bytes.length)throw new Error(declared>maxBytes?'Attachment too large.':'Attachment malformed.');
  let name=''; for(let i=24;i<start;i+=2){const code=bytes[i]|bytes[i+1]<<8;if(code)name+=String.fromCharCode(code);}
  const content=bytes.slice(start,start+declared), safe=sanitizeComponent(name,'RecoveredAttachment.bin');
  return {id:`${qualifiedField}|${sequence}|${safe}`,qualifiedFieldName:qualifiedField,sourceField:field,sequence,originalFileName:name,safeFileName:safe,size:content.length,mimeType:resolveMimeType(safe,content),extension:extensionOf(safe),bytes:content,decodeStatus:'Ready',saveStatus:AttachmentSaveStatus.Ready};
}
