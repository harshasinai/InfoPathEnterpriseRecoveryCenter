import { IRecoveryProfile } from '../../models/IRecoveryProfile';
export function profileMatchesDocument(doc:Document,profile:IRecoveryProfile):boolean{const root=doc.documentElement;return !!root&&profile.isActive&&(!profile.attachmentFields.length||profile.attachmentFields.some(n=>doc.getElementsByTagName(n).length>0));}
