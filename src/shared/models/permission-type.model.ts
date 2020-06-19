import { RolePermissions } from "./role-permissions.model";
import { UserRoleTypePermission } from "./user-role-type-permission.model";
import { DivisionPermissionType } from "./division-permission-type.model";





/**/
export class PermissionType {
    constructor(  ){}        
       
	public id: number;
	public permission: string;
	public rolePermissions: RolePermissions[];
	public userRoleTypePermissions: UserRoleTypePermission[];
	public divisionPermissionTypes: DivisionPermissionType[];


}






