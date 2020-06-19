

import * as Models from '@models/index';


/**/
export class ContactInfo {
    constructor(  ){}        
       
	public description: string;
	public addresses: Models.Address[];
	public phoneNumbers: Models.Telephone[];
	public emails: Models.Email[];
	public id: number;
	public insertedBy: string;
	public dateInserted: Date;
	public modifiedBy: string;
	public dateModified: Date;


}






