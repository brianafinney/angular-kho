import { DivisionPermissionType } from "./division-permission-type.model";
import { UserRoleTypePermission } from "./user-role-type-permission.model";
import { SessionStoragePermission } from "./session-storage-permission.model";
import { UserRolePermissionDivisionMatrix } from "./user-role-permission-division-matrix.model";





/**/
export class GraphUserPermissionDTO {
    constructor(  ){}        
       
	public id: number;
	public azureId: string;
	public displayName: string;
	public isSuperUser: boolean;
	public permissionRoleName: string;
	public permissionRoleId: number;
	public divisionPermissionTypes: DivisionPermissionType[];
	public userRoleTypePermissions: UserRoleTypePermission[];
	public sessionStoragePermissionInfo: SessionStoragePermission[];
	public divisionRolePermissions: UserRolePermissionDivisionMatrix[];

}






