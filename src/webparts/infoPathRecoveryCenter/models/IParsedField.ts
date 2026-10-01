export type FieldSection = 'overview' | 'details' | 'approval' | 'additional';
export interface IParsedField { id: string; qualifiedName: string; localName: string; namespaceUri: string; path: string; label: string; rawValue: string; displayValue: string; sequence: number; section: FieldSection; masked?: boolean; }
