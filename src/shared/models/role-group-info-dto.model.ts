

import * as Models from '@models/index';


/**/
export class RoleGroupInfoDTO {
    constructor(  ){}        
       
	public displayName: string;
	public members: Models.RoleGroupMemberInfoDTO[];


}
/**/
export class RoleGroupMemberInfoDTO {
    constructor(  ){}        
       
	public email: string;
	public firstName: string;
	public lastName: string;
	public displayName: string;
	public isEnabled: boolean;
	public loginName: string;
	public location: string;
	public telephone: string;


}






