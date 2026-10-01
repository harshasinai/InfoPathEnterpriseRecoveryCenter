import { sha256 } from '../files/ContentHashService';
import { IRecoveredAttachment } from '../../models/IRecoveredAttachment';
export async function assignAttachmentIdentity(a:IRecoveredAttachment):Promise<IRecoveredAttachment>{try{a.contentHash=await sha256(a.bytes);a.id=`${a.qualifiedFieldName}|${a.sequence}|${a.originalFileName}|${a.contentHash}`;}catch{/* identity remains deterministic without hash */}return a;}
