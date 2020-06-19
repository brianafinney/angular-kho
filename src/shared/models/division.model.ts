import { DivisionRoleUserPermission } from "./division-role-user-permission.model";
import { DivisionPermissionType } from "./division-permission-type.model";
import { AVO } from "./avo.model";
import { Branch } from "./branch.model";





/**/
export class Division {
    constructor(  ){}        
       
	public name: string;
	public code: string;
	public divisionId: number;
	public description: string;
	public branch: Branch;
	public avos: AVO[];
	public divisionRolePermissions: DivisionRoleUserPermission[];
	public divisionPermissionTypes: DivisionPermissionType[];
	public id: number;
	public isCentralStation: boolean;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






