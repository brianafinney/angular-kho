import { PermissionType } from "./permission-type.model";
import { PermissionRole } from "./permission-role.model";





/**/
export class RolePermissions {
    constructor(  ){}        
       
	public permissionRoleId: number;
	public role: PermissionRole;
	public permissionTypeId: number;
	public permission: PermissionType;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






