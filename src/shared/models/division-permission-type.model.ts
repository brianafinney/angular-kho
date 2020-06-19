import { DivisionRoleUserPermission } from "./division-role-user-permission.model";
import { PermissionRole } from "./permission-role.model";
import { PermissionType } from "./permission-type.model";
import { Division } from "./division.model";
import { GraphUser } from "./graph-user.model";





/**/
export class DivisionPermissionType {
    constructor(  ){}        
       
	public permissionTypeId: number;
	public permissionRoleId: number;
	public graphUserId: number;
	public divisionId: number;
	public divisionRoleUserPermission: DivisionRoleUserPermission;
	public permissionRole: PermissionRole;
	public permissionType: PermissionType;
	public division: Division;
	public graphUser: GraphUser;
	public id: number;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






