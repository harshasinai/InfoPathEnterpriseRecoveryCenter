export interface IRecoveryProfile {
  title: string; profileKey: string; isActive: boolean; sourceSiteUrl: string; sourceLibraryTitle: string; sourceLibraryId?: string;
  destinationSiteUrl: string; destinationLibraryTitle: string; destinationLibraryId?: string; destinationRootFolder: string;
  employeeNameFields: string[]; employeeIdFields: string[]; primaryTitleFields: string[]; statusFields: string[]; dateFields: string[]; approvalFields: string[]; attachmentFields: string[]; hiddenFields: string[];
  filenamePattern: string; maxXmlSizeMb: number; maxNodeCount: number; maxDepth: number; maxFieldCount: number; maxAttachmentCount: number; maxAttachmentBytes: number; maxTotalAttachmentBytes: number;
  allowLocalUpload: boolean; allowRawXmlPaste: boolean; allowLocalDownload: boolean; allowSharePointSave: boolean; allowGenericFields: boolean; allowedFileExtensions: string[];
  saveRecoveredAttachments: boolean; saveOriginalXml: boolean; generateHtmlSummary: boolean; generatePdfSummary: boolean; auditFailureBlocksSave: boolean;
  returnUrl?: string; configurationVersion: string;
}
export const DEFAULT_LIMITS = { maxXmlSizeMb: 10, maxNodeCount: 50000, maxDepth: 64, maxFieldCount: 5000, maxAttachmentCount: 50, maxAttachmentBytes: 50 * 1024 * 1024, maxTotalAttachmentBytes: 200 * 1024 * 1024 };
