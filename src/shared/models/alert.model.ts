


import * as Models from '@models/index';


/**/
export class AlertModel {
    constructor(  ){}        
       
	public alertType: Models.TypeOfAlert;
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






