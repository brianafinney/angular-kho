

import * as Models from '@models/index';


/**/
export class Division {
    constructor(  ){}        
       
	public name: string;
	public code: string;
	public divisionId: number;
	public description: string;
	public branch: Models.Branch;
	public avos: Models.AVO[];
	public divisionRolePermissions: Models.DivisionRoleUserPermission[];
	public divisionPermissionTypes: Models.DivisionPermissionType[];
	public id: number;
	public isCentralStation: boolean;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






