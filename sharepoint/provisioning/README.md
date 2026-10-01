# Provisioning

The JSON files document the required SharePoint columns. The provisioning script targets the existing lists `InfoPathRecoveryProfiles`, `InfoPathFieldMappings`, and `InfoPathRecoveryAudit`. It never creates replacement lists, deletes or renames fields/data, changes permissions, or deploys the package.

## macOS commands

Confirm PowerShell 7:

```bash
pwsh --version
```

Install PnP.PowerShell only when missing:

```bash
pwsh -NoProfile -Command 'if (-not (Get-Module -ListAvailable -Name PnP.PowerShell)) { Install-Module PnP.PowerShell -Scope CurrentUser -Force } else { Write-Host "PnP.PowerShell is already installed." }'
```

Preview all changes:

```bash
pwsh ./sharepoint/provisioning/optional-pnp-provisioning-script.ps1 -SiteUrl "https://sinaichicago.sharepoint.com/sites/InfoPathRecovery" -WhatIf
```

After reviewing the preview, apply missing fields:

```bash
pwsh ./sharepoint/provisioning/optional-pnp-provisioning-script.ps1 -SiteUrl "https://sinaichicago.sharepoint.com/sites/InfoPathRecovery"
```

After provisioning, configure department-specific SharePoint permissions directly on each source and destination. Security is enforced by SharePoint permissions; profile visibility is not an authorization boundary.
