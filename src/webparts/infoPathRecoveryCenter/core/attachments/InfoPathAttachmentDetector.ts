import { IRecoveredAttachment } from '../../models/IRecoveredAttachment';
import { decodeInfoPathAttachment } from './InfoPathAttachmentDecoder';
export function detectAttachment(value:string,localName:string,qualifiedName:string,sequence:number,maxBytes:number):IRecoveredAttachment|undefined{return decodeInfoPathAttachment(value,localName,qualifiedName,sequence,maxBytes);}
