import * as React from 'react';import { SearchBox } from '@fluentui/react';
export const FieldSearch:React.FC<{value:string;onChange:(v:string)=>void}>=p=><SearchBox labelText="Search fields" placeholder="Search field names and values" value={p.value} onChange={(_,v)=>p.onChange(v||'')} />;
