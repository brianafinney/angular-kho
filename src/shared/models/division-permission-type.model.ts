

import * as Models from '@models/index';


/**/
export class DivisionPermissionType {
    constructor(  ){}        
       
	public permissionTypeId: number;
	public permissionRoleId: number;
	public graphUserId: number;
	public divisionId: number;
	public divisionRoleUserPermission: Models.DivisionRoleUserPermission;
	public permissionRole: Models.PermissionRole;
	public permissionType: Models.PermissionType;
	public division: Models.Division;
	public graphUser: Models.GraphUser;
	public id: number;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






