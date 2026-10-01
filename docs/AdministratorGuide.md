# Administrator Guide

Find list/library GUIDs in SharePoint list settings or with `Get-PnPList`. Index ProfileKey, SourceItemId, ContentHash, and common mapped search columns before production. Use library-scoped searches only. Review audit events by correlation ID, operation, result, HTTP status, and duration—never add business field content.

For attachment failures, confirm the candidate is valid Base64 with the InfoPath signature/header, declared content length, and configured limits. For 401/403 verify separate source-read and destination-write rights. For 429/503 retry after the service interval; do not retry indefinitely. For a queue beyond the approved small limit, use the documented background architecture.
