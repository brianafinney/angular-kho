import { TypeOfAlert } from "./type-of-alert.enum";






/**/
export class AlertModel {
    constructor(  ){}        
       
	public alertType: TypeOfAlert;
	public heading: string;
	public message: string;
	public startAlert: Date;
	public endAlert: Date;
	public id: number;
	public isActive: boolean;
	public dateCreated: Date;
	public dateModified: Date;
	public createdBy: string;
	public modifiedBy: string;
  
}






