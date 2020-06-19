

import * as Models from '@models/index';


/**/
export class UserRoleTypePermission {
    constructor(  ){}        
       
	public permissionRoleId: number;
	public graphUserId: number;
	public permissionTypeId: number;
	public permissionType: Models.PermissionType;
	public permissionRole: Models.PermissionRole;
	public graphUser: Models.GraphUser;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






