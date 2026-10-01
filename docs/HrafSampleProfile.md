# HRAF sample profile

The adjacent JSON and CSV contain configuration only and no employee information. Confirm that the source and destination libraries exist and that intended users have separate read/write permissions. In **InfoPathRecoveryProfiles**, create a new item and enter each value using the column's internal-name mapping. Start with `IsActive = No`, test with synthetic XML, review field mappings and destination permissions, then activate it deliberately.

Optional creation is deliberately separate from normal provisioning. The script refuses to create the item without confirmation and never replaces an existing HRAF profile. To update an existing profile, edit the SharePoint item after deliberate administrator review; the import script will report the existing `ProfileKey` and make no change.

```bash
pwsh ./sharepoint/provisioning/optional-add-hraf-sample.ps1 -SiteUrl "https://sinaichicago.sharepoint.com/sites/InfoPathRecovery" -Confirm
```
