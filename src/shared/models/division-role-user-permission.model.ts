import { Division } from "./division.model";
import { PermissionRole } from "./permission-role.model";
import { GraphUser } from "./graph-user.model";
import { DivisionPermissionType } from "./division-permission-type.model";





/**/
export class DivisionRoleUserPermission {
    constructor(  ){}        
       
	public permissionRoleId: number;
	public graphUserId: number;
	public divisionId: number;
	public division: Division;
	public permissionRole: PermissionRole;
	public graphUser: GraphUser;
	public divisionPermissionTypes: DivisionPermissionType[];
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






