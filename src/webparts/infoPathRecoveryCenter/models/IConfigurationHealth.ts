export type ConfigurationHealthStatus='Available'|'Available, but empty'|'Missing Required Columns'|'Not Found'|'Permission Denied'|'Request Failed';
export interface IListHealth{name:string;configuredTitle:string;resolvedTitle?:string;status:ConfigurationHealthStatus;missingColumns:string[];itemCount?:number;}
export interface IConfigurationHealth{configurationSiteUrl:string;profileList:IListHealth;mappingList:IListHealth;auditList:IListHealth;correlationId:string;profilesAvailable:boolean;}
export const PROFILE_LIST_TITLE='InfoPathRecoveryProfiles';
export const MAPPING_LIST_TITLE='InfoPathFieldMappings';
export const AUDIT_LIST_TITLE='InfoPathRecoveryAudit';
export const PROFILE_LIST_ALIAS='InfoPath Recovery Profiles';
export const MAPPING_LIST_ALIAS='InfoPath Field Mappings';
export const AUDIT_LIST_ALIAS='InfoPath Recovery Audit';
export const PROFILE_COLUMNS=['Title','ProfileKey','IsActive','SourceSiteUrl','SourceLibraryTitle','SourceLibraryId','DestinationSiteUrl','DestinationLibraryTitle','DestinationRootFolder','EmployeeNameFields','EmployeeIdFields','PrimaryTitleFields','StatusFields','DateFields','ApprovalFields','AttachmentFields','HiddenFields','FilenamePattern','MaxXmlSizeMb','AllowLocalUpload','AllowRawXmlPaste','AllowLocalDownload','AllowSharePointSave','AllowGenericFields','AllowedFileExtensions','ReturnUrl','ConfigurationNotes','ConfigurationVersion'];
export const MAPPING_COLUMNS=['Title','ProfileKey','XmlFieldName','FriendlyLabel','SectionName','DisplayOrder','IsVisible','IsSearchable','DataType','DisplayFormat','TrueLabel','FalseLabel','IsAttachment','IsSensitive','MaskInUi','HelpText','IsActive'];
export const AUDIT_COLUMNS=['Title','CorrelationId','ProfileKey','SourceMode','SourceSiteUrl','SourceLibrary','SourceItemId','SourceFileUniqueId','Operation','OperationResult','AttachmentCount','SuccessfulCount','FailedCount','ErrorCategory','HttpStatus','SanitizedMessage','ApplicationVersion','DurationMilliseconds','CompletedOn'];
