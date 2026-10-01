# Security

SharePoint permissions are the authorization boundary. The application uses only the signed-in user's SharePoint context and does not use Graph, application-only permissions, external preview services, local/session storage, or automatic source XML persistence.

DTD/entities, stylesheet processing instructions, malformed input, binary masquerading as XML, excessive size, node count, depth, field count, attachment count, and decoded sizes are rejected. URLs must be HTTPS, same-tenant, token-free, XML paths registered by an active profile. Destination values never come from user input. Errors and audit events exclude raw XML, Base64, bytes, field values, tokens, digests, and stack traces.

Developer tools can expose information already delivered to an authorized browser. Use department-specific source, profile, destination, and audit permissions; disable local download for sensitive profiles; and configure inactivity clearing according to policy.
