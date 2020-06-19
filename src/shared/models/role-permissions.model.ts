

import * as Models from '@models/index';


/**/
export class RolePermissions {
    constructor(  ){}        
       
	public permissionRoleId: number;
	public role: Models.PermissionRole;
	public permissionTypeId: number;
	public permission: Models.PermissionType;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






