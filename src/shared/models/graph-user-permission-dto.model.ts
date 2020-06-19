

import * as Models from '@models/index';


/**/
export class GraphUserPermissionDTO {
    constructor(  ){}        
       
	public id: number;
	public azureId: string;
	public displayName: string;
	public isSuperUser: boolean;
	public permissionRoleName: string;
	public permissionRoleId: number;
	public divisionPermissionTypes: Models.DivisionPermissionType[];
	public userRoleTypePermissions: Models.UserRoleTypePermission[];
	public sessionStoragePermissionInfo: Models.SessionStoragePermission[];
	public divisionRolePermissions: Models.UserRolePermissionDivisionMatrix[];

}






