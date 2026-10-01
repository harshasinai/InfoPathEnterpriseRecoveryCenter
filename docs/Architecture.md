# Architecture

The browser-only SPFx web part follows **inspect broadly, save narrowly**. XML passes through size/content validation, `DOMParser`, complexity limits, generic leaf extraction, and signature-based InfoPath attachment decoding. Profiles and mappings add presentation and destination policy without changing the parser. Persistent output is permitted only to the active profile's destination, through the current user's `SPHttpClient` context.

Trust flows from a registered SharePoint source or deliberate local classification. Query strings may select a profile/source identity but can never replace source or destination configuration. Attachments are previewed locally. Saves use exact decoded bytes, deterministic names, duplicate checks, upload, independent verification, metadata, and redacted operational audit.

Phase 4 extension points: a ListView command opens `RecoveryCenter.aspx?profile=<key>&listId=<guid>&itemId=<positive integer>` or `...?profile=<key>&fileUniqueId=<guid>`. A future queue must retain per-record buffers and cap selection; larger migrations belong in an administrator background process with the same parser test vectors.
