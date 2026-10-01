import { IRecoveryProfile } from '../../models/IRecoveryProfile'; import { matchProfile } from './ProfileMatcher';
export function resolveProfile(profiles:IRecoveryProfile[],requested?:string):IRecoveryProfile|undefined{return requested?matchProfile(profiles,requested):undefined;}
