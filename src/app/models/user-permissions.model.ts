import * as Models from './index';


/**/
export class UserPermissions {
    constructor(  ){}        
       
	public permissionRoleId: number;
	public role: Models.PermissionRole;
	public graphUserId: number;
	public user: Models.GraphUser;
	public divisionRolePermissions: Models.DivisionRoleUserPermission[];
	public userRoleTypePermissions: Models.UserRoleTypePermission[];
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}
