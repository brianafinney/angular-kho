import { UserRoleTypePermission } from "./user-role-type-permission.model";
import { DivisionRoleUserPermission } from "./division-role-user-permission.model";
import { GraphUser } from "./graph-user.model";
import { PermissionRole } from "./permission-role.model";





/**/
export class UserPermissions {
    constructor(  ){}        
       
	public permissionRoleId: number;
	public role: PermissionRole;
	public graphUserId: number;
	public user: GraphUser;
	public divisionRolePermissions: DivisionRoleUserPermission[];
	public userRoleTypePermissions: UserRoleTypePermission[];
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






