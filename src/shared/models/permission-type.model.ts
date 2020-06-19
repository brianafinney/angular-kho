

import * as Models from '@models/index';


/**/
export class PermissionType {
    constructor(  ){}        
       
	public id: number;
	public permission: string;
	public rolePermissions: Models.RolePermissions[];
	public userRoleTypePermissions: Models.UserRoleTypePermission[];
	public divisionPermissionTypes: Models.DivisionPermissionType[];


}






