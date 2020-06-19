import { GraphUserSessionStorage } from "./graph-user-session-storage.model";
import { UserPermissions } from "./user-permissions.model";
import { DivisionRoleUserPermission } from "./division-role-user-permission.model";
import { UserRoleTypePermission } from "./user-role-type-permission.model";
import { DivisionPermissionType } from "./division-permission-type.model";





/**/
export class GraphUser {
    constructor(  ){}        
       
	public id: number;
	public azureId: string;
	public onePointId: string;
	public employeeId?: number;
	public displayName: string;
	public givenName: string;
	public jobTitle: string;
	public officeLocation: string;
	public department: string;
	public extension: number;
	public surname: string;
	public userPrincipalName: string;
	public email: string;
	public username: string;
	public hireDate?: Date;
	public reHiredDate?: Date;
	public deceased?: Date;
	public terminatedDate?: Date;
	public startedDate?: Date;
	public birthdayDate?: Date;
	public retiredDate?: Date;
	public isActive?: boolean;
	public managerName: string;
	public managerOnePointId: string;
	public mobilePhone: string;
	public photo: string;
	public photoType: string;
	public settings: string;
	public sessionStorageInfo: GraphUserSessionStorage[];
	public userPermissions: UserPermissions[];
	public divisionRolePermissions: DivisionRoleUserPermission[];
	public userRoleTypePermissions: UserRoleTypePermission[];
	public divisionPermissionTypes: DivisionPermissionType[];


}






