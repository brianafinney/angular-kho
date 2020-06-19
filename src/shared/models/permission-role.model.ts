

import * as Models from '@models/index';


/**/
export class PermissionRole {
    constructor(  ){}        
       
	public id: number;
	public roleName: string;
	public isGlobalOnlyRole: boolean;
	public rolePermissions: Models.RolePermissions[];
	public userPermissions: Models.UserPermissions[];
	public divisionRolePermissions: Models.DivisionRoleUserPermission[];
	public userRoleTypePermissions: Models.UserRoleTypePermission[];
	public divisionPermissionTypes: Models.DivisionPermissionType[];


}

export class AddPermissionRoleDTO {
    constructor(  ){} 
	public roleName: string;
	public isGlobalOnlyRole: boolean;
}





