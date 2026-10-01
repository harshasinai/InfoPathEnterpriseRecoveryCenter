import { FieldSection } from './IParsedField';
export interface IFieldMapping { profileKey: string; xmlFieldName: string; friendlyLabel: string; section: FieldSection; displayOrder: number; dataType?: 'Text'|'Boolean'|'Date'|'Multiline'; hidden?: boolean; masked?: boolean; attachment?: boolean; }
