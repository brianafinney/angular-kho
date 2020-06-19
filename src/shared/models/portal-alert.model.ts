import { TypeOfAlert } from "./type-of-alert.enum";





/**/
export class PortalAlert {
    constructor(  ){}        
       
	public alertType: TypeOfAlert;
	public heading: string;
	public message: string;
	public startAlert: Date;
	public endAlert: Date;
	public id: number;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






