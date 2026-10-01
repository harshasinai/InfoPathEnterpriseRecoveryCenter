[CmdletBinding(SupportsShouldProcess=$true)]
param([Parameter(Mandatory=$true)][ValidatePattern('^https://[^/]+\.sharepoint\.com(/|$)')][string]$SiteUrl,[switch]$Confirm)
if (-not $Confirm) { throw 'Review the sample and rerun with -Confirm to add it.' }
Connect-PnPOnline -Url $SiteUrl -Interactive
$existing=Get-PnPListItem -List 'InfoPathRecoveryProfiles' -Query "<View><Query><Where><Eq><FieldRef Name='ProfileKey'/><Value Type='Text'>HRAF</Value></Eq></Where></Query></View>"
if ($existing) { Write-Host 'HRAF profile already exists; no changes made.'; return }
$values=@{Title='HR Action Form';ProfileKey='HRAF';IsActive=$true;SourceSiteUrl='https://sinaichicago.sharepoint.com/sites/forms';SourceLibraryTitle='LeadershipHRActionForm';DestinationSiteUrl='https://sinaichicago.sharepoint.com/sites/forms';DestinationLibraryTitle='HRAFRecoveredDocuments';DestinationRootFolder='HRActionFormList';AllowLocalUpload=$true;AllowRawXmlPaste=$false;AllowLocalDownload=$true;AllowSharePointSave=$true;AllowGenericFields=$true;MaxXmlSizeMb=25;ReturnUrl='https://sinaichicago.sharepoint.com/sites/forms/LeadershipHRActionForm/Forms/AllItems.aspx';FilenamePattern='{RecordName}_{RecordId}_SourceItemID_{ItemId}_{AttachmentField}_{Sequence}_{OriginalFilename}';ConfigurationVersion='1'}
if ($PSCmdlet.ShouldProcess('HRAF','Add sample recovery profile')) { Add-PnPListItem -List 'InfoPathRecoveryProfiles' -Values $values | Out-Null }
