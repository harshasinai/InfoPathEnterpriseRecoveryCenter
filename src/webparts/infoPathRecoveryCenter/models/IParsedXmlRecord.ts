import { IParsedField } from './IParsedField';
import { IRecoveredAttachment } from './IRecoveredAttachment';
import { ISourceDescriptor } from './ISourceDescriptor';
export interface IParsedXmlRecord { fields: IParsedField[]; attachments: IRecoveredAttachment[]; source: ISourceDescriptor; rootQualifiedName: string; namespaceUris: string[]; profileMatched: boolean; warnings: string[]; xmlHash?: string; }
