# Configuration Guide

1. Provision or manually create the four artifacts documented under `sharepoint/provisioning`.
2. Register an exact source site/library and exact destination site/library in an inactive profile.
3. Add mappings by qualified or local XML field name, label, section, order, type, hidden/masked/attachment flags.
4. Set output flags. Defaults are recovered attachments on; original XML, HTML summary, and PDF summary off.
5. Grant least-privilege SharePoint permissions independently on source and destination.
6. Test with synthetic XML, inspect the destination and audit records, then activate the versioned profile.

To roll back, deactivate the newer profile/configuration version and reactivate the reviewed prior version. Never put destination overrides in links.
