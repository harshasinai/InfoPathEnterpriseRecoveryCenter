export function friendlyLabel(name:string):string { const local=name.replace(/^.*:/,'').replace(/[_-]+/g,' ').replace(/([a-z0-9])([A-Z])/g,'$1 $2').replace(/([A-Z]+)([A-Z][a-z])/g,'$1 $2').trim(); return local ? local.charAt(0).toUpperCase()+local.slice(1) : 'Field'; }
export function isMembershipClaim(value:string):boolean { return /^i:0#\.f\|membership\|/i.test(value.trim()); }
export function formatValue(value:string, type?:string):string {
  const v=value.trim();
  if(type==='Boolean'||/^(true|false)$/i.test(v)) return /^true$/i.test(v)?'Yes':'No';
  if(type==='Date'||/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?(?:Z|[+-]\d{2}:?\d{2})?)?$/.test(v)){ const d=new Date(v); if(!isNaN(d.getTime())) return d.toLocaleString(undefined, /T/.test(v)?undefined:{year:'numeric',month:'short',day:'numeric'}); }
  return value;
}
