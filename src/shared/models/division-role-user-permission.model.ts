

import * as Models from '@models/index';


/**/
export class DivisionRoleUserPermission {
    constructor(  ){}        
       
	public permissionRoleId: number;
	public graphUserId: number;
	public divisionId: number;
	public division: Models.Division;
	public permissionRole: Models.PermissionRole;
	public graphUser: Models.GraphUser;
	public divisionPermissionTypes: Models.DivisionPermissionType[];
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






