import * as Models from './index';

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
	public sessionStorageInfo: Models.GraphUserSessionStorage[];
	public userPermissions: Models.UserPermissions[];
	public divisionRolePermissions: Models.DivisionRoleUserPermission[];
	public userRoleTypePermissions: Models.UserRoleTypePermission[];
	public divisionPermissionTypes: Models.DivisionPermissionType[];


}






