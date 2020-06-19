import { GraphUser } from "./graph-user.model";
import { PermissionRole } from "./permission-role.model";
import { PermissionType } from "./permission-type.model";





/**/
export class UserRoleTypePermission {
    constructor(  ){}        
       
	public permissionRoleId: number;
	public graphUserId: number;
	public permissionTypeId: number;
	public permissionType: PermissionType;
	public permissionRole: PermissionRole;
	public graphUser: GraphUser;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






