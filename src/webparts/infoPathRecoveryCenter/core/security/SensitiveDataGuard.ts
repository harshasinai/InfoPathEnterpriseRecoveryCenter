export function redactAuditValue(value:string):string{return value.replace(/[\r\n]/g,' ').replace(/[A-Za-z0-9+/]{80,}={0,2}/g,'[redacted]').slice(0,255);}
