import { AttachmentSaveStatus } from './RecoveryEnums';
export interface IAttachmentState { attachmentId: string; status: AttachmentSaveStatus; progress?: number; message?: string; }
