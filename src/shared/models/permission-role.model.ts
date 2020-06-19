import { DivisionPermissionType } from "./division-permission-type.model";
import { UserRoleTypePermission } from "./user-role-type-permission.model";
import { DivisionRoleUserPermission } from "./division-role-user-permission.model";
import { UserPermissions } from "./user-permissions.model";
import { RolePermissions } from "./role-permissions.model";





/**/
export class PermissionRole {
    constructor(  ){}        
       
	public id: number;
	public roleName: string;
	public isGlobalOnlyRole: boolean;
	public rolePermissions: RolePermissions[];
	public userPermissions: UserPermissions[];
	public divisionRolePermissions: DivisionRoleUserPermission[];
	public userRoleTypePermissions: UserRoleTypePermission[];
	public divisionPermissionTypes: DivisionPermissionType[];


}

export class AddPermissionRoleDTO {
    constructor(  ){} 
	public roleName: string;
	public isGlobalOnlyRole: boolean;
}





