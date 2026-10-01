import { IRecoveryProfile } from '../../models/IRecoveryProfile';
export function matchProfile(profiles:IRecoveryProfile[],key:string):IRecoveryProfile|undefined{return profiles.find(p=>p.isActive&&p.profileKey.toLowerCase()===key.toLowerCase());}
