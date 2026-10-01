# Deployment Guide

Build and inspect the `.sppkg`; deployment is deliberately manual. Upload it to a controlled tenant app catalog, approve only the declared SharePoint behavior, add the web part to a restricted page, provision configuration separately, and pilot with inactive synthetic profiles. No provisioning script deploys the package or changes permissions.

Pilot sequence: IT/security synthetic validation → one low-volume department/profile → monitored duplicate and partial-failure exercises → accessibility/mobile review → records/privacy sign-off → staged department activation. Retain the prior package and profile version for rollback.
